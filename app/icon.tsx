import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0e0e0d",
          color: "#f5f4f0",
          fontSize: 40,
          fontFamily: "Archivo",
        }}
      >
        G<span style={{ color: "#5468ff" }}>.</span>
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
