import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import ShopBrowser from "@/components/ShopBrowser";
import JsonLd from "@/components/JsonLd";
import { products, startingPrice } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shop the Pantry — Jaggery, Flours, Sattu, Moringa & Oils",
  description: "Browse every Heirloom Gold staple: jaggery, desi shakkar, jaggery with dry fruits, barley and corn flour, sattu, moringa powder, mustard and sesame oil. Order on WhatsApp.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ItemList", itemListElement: products.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: `${site.url}/shop/${p.slug}`, name: p.name })) }} />
      <PageHero eyebrow="The pantry" title="Shop all staples" photo="jarsShelf" intro={`${products.length} traditional staples, from Rs ${Math.min(...products.map(startingPrice))}. Pick a pack, tap order, done.`} />
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-6 sm:px-8">
        <Suspense fallback={<div className="h-96" />}><ShopBrowser /></Suspense>
      </section>
    </>
  );
}
