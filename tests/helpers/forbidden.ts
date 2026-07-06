import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

/**
 * Sources the private GDPR pattern list (gitignored file locally,
 * GDPR_PATTERNS env in CI) so tests can assert content cleanliness WITHOUT
 * the repo ever containing the forbidden values as literals. Returns []
 * when unavailable — the postbuild scanner remains the hard gate.
 */
export function loadLocalPatterns(): string[] {
  const file = path.resolve("gdpr-patterns.local.txt");
  const raw =
    process.env.GDPR_PATTERNS ??
    (existsSync(file) ? readFileSync(file, "utf8") : "");
  return raw
    .split("\n")
    .map((line) => line.trim().toLowerCase())
    .filter((line) => line.length > 0 && !line.startsWith("#"));
}
