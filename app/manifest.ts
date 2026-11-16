import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function manifest(): MetadataRoute.Manifest {
  return { name: site.name, short_name: site.short, description: site.tagline, start_url: "/", display: "standalone", background_color: "#faf6ec", theme_color: "#05211a", icons: [{ src: "/icon", sizes: "64x64", type: "image/png" }] };
}
