import { mkdtemp, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { loadPatterns, scanFiles } from "../scripts/gdpr-leak-check";

const DUMMY = ["5551234567", "leak@example.org", "faketown"];

describe("gdpr-leak-check", () => {
  it("parses patterns from raw text, skipping comments and blanks", () => {
    const raw = "# comment\n5551234567\n\nleak@example.org\nFAKETOWN\n";
    expect(loadPatterns(raw)).toEqual(["5551234567", "leak@example.org", "faketown"]);
  });

  it("finds case-insensitive hits and reports file + pattern index only", async () => {
    const dir = await mkdtemp(path.join(tmpdir(), "leak-"));
    const clean = path.join(dir, "clean.js");
    const dirty = path.join(dir, "dirty.html");
    await writeFile(clean, "const x = 'nothing to see';");
    await writeFile(dirty, "<p>call 5551234567 or FakeTown</p>");

    const hits = await scanFiles(DUMMY, [clean, dirty]);
    expect(hits).toEqual([
      { file: dirty, patternIndex: 0 },
      { file: dirty, patternIndex: 2 },
    ]);
  });

  it("returns no hits on clean files", async () => {
    const dir = await mkdtemp(path.join(tmpdir(), "leak-"));
    const clean = path.join(dir, "a.txt");
    await writeFile(clean, "hello world");
    expect(await scanFiles(DUMMY, [clean])).toEqual([]);
  });
});
