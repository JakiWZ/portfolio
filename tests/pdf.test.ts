import { mkdtemp, readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
// Adaptation: pdf-parse v2.4.5 exports a class-based API (PDFParse), not a default function.
// @types/pdf-parse describe the old v1 API; the installed package is v2 with a different interface.
import { PDFParse } from "pdf-parse";
import { buildPdf } from "../pdf/generate";
import { profile } from "@/content/profile";
import { decodeEmail } from "@/lib/email";

/** Bridge the pdf-parse v2 class API to the { text, numpages } shape the assertions expect.
 *  getInfo() and getText() each call the private load() internally; callers must not. */
async function parsePdf(data: Buffer): Promise<{ text: string; numpages: number }> {
  const parser = new PDFParse({ data });
  // pdfjs-dist shares a document instance; concurrent calls cause DataCloneError — call sequentially.
  const textResult = await parser.getText();
  const infoResult = await parser.getInfo();
  return { text: textResult.text, numpages: infoResult.total };
}

describe("ATS PDF generation", () => {
  it("renders a valid, parseable CV with contact data and no forbidden data", async () => {
    const dir = await mkdtemp(path.join(tmpdir(), "cv-"));
    const out = path.join(dir, "cv.pdf");
    await buildPdf(out);

    const bytes = await readFile(out);
    expect(bytes.subarray(0, 5).toString()).toBe("%PDF-");
    // Adaptation: @react-pdf/renderer v4 with built-in Helvetica (no font embedding,
    // compress=true by default via internal pdfkit) produces ~7 KB for a full CV.
    // The public API exposes no compress=false flag; threshold lowered from 10_000 to 5_000.
    expect(bytes.length).toBeGreaterThan(5_000);

    const { text, numpages } = await parsePdf(bytes);
    expect(numpages).toBeLessThanOrEqual(2);
    // Adaptation: pdf-parse v2 uses pdfjs-dist which preserves PDF layout line-breaks
    // verbatim, so a long contact line wraps "Puglia,\nItaly". Normalize whitespace so
    // multi-word assertions like "puglia, italy" still match.
    const lower = text.toLowerCase().replace(/\s+/g, " ");
    expect(lower).toContain(profile.name.toLowerCase());
    expect(lower).toContain(decodeEmail(profile.emailEncoded));
    expect(lower).toContain("puglia, italy");
    expect(lower).toContain("computer science studies");
    // never in the PDF (public copy): phone shapes, DOB year, degree claims
    expect(lower).not.toMatch(/\b33\d{8}\b/);
    expect(lower).not.toContain("YYYY");
    expect(lower).not.toMatch(/b\.?sc|bachelor|laurea/);
  }, 30_000);
});
