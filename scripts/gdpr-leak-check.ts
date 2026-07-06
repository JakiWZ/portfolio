import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

export type Hit = { file: string; patternIndex: number };

export function loadPatterns(raw: string): string[] {
  return raw
    .split("\n")
    .map((line) => line.trim().toLowerCase())
    .filter((line) => line.length > 0 && !line.startsWith("#"));
}

async function walk(dir: string, out: string[] = []): Promise<string[]> {
  for (const name of await readdir(dir)) {
    const full = path.join(dir, name);
    const info = await stat(full);
    if (info.isDirectory()) await walk(full, out);
    else out.push(full);
  }
  return out;
}

export async function scanFiles(
  patterns: string[],
  files: string[],
): Promise<Hit[]> {
  const hits: Hit[] = [];
  for (const file of files) {
    const content = (await readFile(file)).toString("utf8").toLowerCase();
    patterns.forEach((pattern, patternIndex) => {
      if (content.includes(pattern)) hits.push({ file, patternIndex });
    });
  }
  return hits;
}

const EXCLUDED = [
  path.normalize("public/cv.pdf"), // plain email allowed there by design
  "gdpr-patterns.local.txt",
  // profile.test.ts uses the forbidden strings as negative-assertion literals
  // (to verify they do NOT appear in production data) — exclude to avoid
  // false positives; this file is dev-only and never deployed.
  path.normalize("tests/profile.test.ts"),
];

function isExcluded(file: string): boolean {
  const rel = path.relative(process.cwd(), file);
  return (
    EXCLUDED.some((entry) => rel === entry) ||
    rel.startsWith(path.normalize(".next/cache"))
  );
}

async function collectTargets(): Promise<string[]> {
  const tracked = execSync("git ls-files", { encoding: "utf8" })
    .split("\n")
    .filter(Boolean)
    .map((file) => path.resolve(file));
  const built = existsSync(".next") ? await walk(path.resolve(".next")) : [];
  const publicDir = existsSync("public")
    ? await walk(path.resolve("public"))
    : [];
  return [...new Set([...tracked, ...built, ...publicDir])].filter(
    (file) => !isExcluded(file),
  );
}

async function main() {
  const patternsFile = path.resolve("gdpr-patterns.local.txt");
  let raw = process.env.GDPR_PATTERNS ?? "";
  if (!raw && existsSync(patternsFile)) {
    raw = (await readFile(patternsFile)).toString("utf8");
  }
  const patterns = loadPatterns(raw);

  if (patterns.length === 0) {
    if (process.env.ALLOW_NO_GDPR_PATTERNS === "1") {
      console.warn("⚠ GDPR leak check SKIPPED (no patterns, explicit opt-out).");
      return;
    }
    console.error(
      "✗ GDPR leak check: no patterns found. Provide gdpr-patterns.local.txt " +
        "or the GDPR_PATTERNS env var (or set ALLOW_NO_GDPR_PATTERNS=1 on forks).",
    );
    process.exit(1);
  }

  const files = await collectTargets();
  const hits = await scanFiles(patterns, files);

  if (hits.length > 0) {
    for (const hit of hits) {
      // Masked on purpose: never echo the pattern value into (public) CI logs.
      console.error(
        `✗ GDPR LEAK: pattern #${hit.patternIndex + 1} found in ${path.relative(process.cwd(), hit.file)}`,
      );
    }
    process.exit(1);
  }
  console.log(
    `✓ GDPR leak check passed — ${files.length} files scanned, ${patterns.length} patterns, 0 hits.`,
  );
}

const isMain =
  process.argv[1] && path.resolve(process.argv[1]) ===
    path.resolve(fileURLToPath(import.meta.url));

if (isMain) {
  main().catch((error) => {
    console.error("✗ GDPR leak check crashed.", error);
    process.exit(1);
  });
}
