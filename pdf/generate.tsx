import path from "node:path";
import { fileURLToPath } from "node:url";
import { renderToFile } from "@react-pdf/renderer";
import { decodeEmail } from "../lib/email";
import { profile } from "../content/profile";
import { CvDocument } from "./CvDocument";

export async function buildPdf(outPath: string): Promise<void> {
  const email = decodeEmail(profile.emailEncoded);
  await renderToFile(<CvDocument email={email} />, outPath);
}

const isMain =
  process.argv[1] && path.resolve(process.argv[1]) ===
    path.resolve(fileURLToPath(import.meta.url));

if (isMain) {
  const out = path.resolve(process.cwd(), "public/cv.pdf");
  buildPdf(out)
    .then(() => console.log(`✓ ATS CV written to ${out}`))
    .catch((error) => {
      console.error("✗ PDF generation failed — aborting build.", error);
      process.exit(1);
    });
}
