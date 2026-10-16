import { ImageResponse } from "next/og";
export const alt =
  "ARSTEG Solutions — Thoughtful engineering. Useful software.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#f6f5f0",
        color: "#202b2c",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 70,
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ fontSize: 26, letterSpacing: 5 }}>ARSTEG SOLUTIONS</div>
      <div style={{ fontSize: 76, lineHeight: 1.1, marginTop: 70 }}>
        Your next move.
      </div>
      <div style={{ fontSize: 76, color: "#b42d36" }}>Built in software.</div>
      <div style={{ fontSize: 23, marginTop: 55 }}>
        Custom software · Mobile · Desktop · Dedicated developers
      </div>
    </div>,
    size,
  );
}
