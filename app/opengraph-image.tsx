import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Gioacchino Pio Di Leo — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const archivoBlack = await readFile(
    path.join(process.cwd(), "assets/fonts/Archivo-Black.ttf"),
  );
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0e0e0d",
          color: "#f5f4f0",
          padding: 64,
          fontFamily: "Archivo",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 4,
            color: "#a8a59e",
          }}
        >
          <span>PORTFOLIO — 2026</span>
          <span>PUGLIA, IT</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 110,
            lineHeight: 0.95,
            letterSpacing: -4,
          }}
        >
          <span>GIOACCHINO</span>
          <span style={{ display: "flex" }}>
            PIO DI LEO<span style={{ color: "#5468ff" }}>.</span>
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#a8a59e" }}>
          Full Stack Developer — Java &amp; Spring · TypeScript &amp; Next.js
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Archivo", data: archivoBlack, weight: 900, style: "normal" },
      ],
    },
  );
}
