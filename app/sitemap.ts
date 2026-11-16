import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { articles } from "@/lib/journal";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/shop", "/best-sellers", "/sale", "/gift-boxes", "/about", "/our-process", "/reviews", "/faq", "/how-to-order", "/contact", "/journal", "/delivery-returns", "/privacy-policy", "/terms"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, lastModified: now, priority: p === "" ? 1 : 0.7 })),
    ...products.map((p) => ({ url: `${site.url}/shop/${p.slug}`, lastModified: now, priority: 0.8 })),
    ...articles.map((a) => ({ url: `${site.url}/journal/${a.slug}`, lastModified: new Date(a.date), priority: 0.5 })),
  ];
}
