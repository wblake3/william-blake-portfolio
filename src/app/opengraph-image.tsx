import { ImageResponse } from "next/og";

export const alt = "William Blake — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7faff",
          color: "#0b1f33",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#1a6fd4",
            fontWeight: 600,
          }}
        >
          Software Engineer · Auckland
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>
            William Blake
          </div>
          <div
            style={{
              marginTop: 18,
              maxWidth: 820,
              fontSize: 28,
              lineHeight: 1.4,
              color: "#4a6278",
            }}
          >
            Production systems in healthcare and energy. TypeScript, React, APIs
            and Python.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
