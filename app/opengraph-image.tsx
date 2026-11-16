import { ImageResponse } from "next/og";
import { site } from "@/lib/site";
export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Og() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,#05211a,#0b4a37)", color: "#e6cd85" }}>
      <div style={{ fontSize: 28, letterSpacing: 10, textTransform: "uppercase", color: "#c9a24a" }}>Heritage Pantry</div>
      <div style={{ fontSize: 120, fontWeight: 700, marginTop: 20 }}>{site.name}</div>
      <div style={{ fontSize: 34, marginTop: 24, color: "#f5eddd" }}>{site.tagline}</div>
    </div>, size);
}
