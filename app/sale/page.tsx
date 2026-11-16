import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import Countdown from "@/components/Countdown";
import { saleProducts } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.sale.name} — Sale on Now`,
  description: `${site.sale.headline}. Limited-time prices on Heirloom Gold pantry favourites.`,
  alternates: { canonical: "/sale" },
};

export default function SalePage() {
  const list = saleProducts();
  return (
    <>
      <PageHero eyebrow="Limited time" title={site.sale.name} photo="mustardField" intro={`${site.sale.headline}.`}>
        <Countdown to={site.sale.endsAt} />
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 pt-6 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p, i) => <Reveal key={p.slug} delay={(i % 4) * 80} dir="zoom"><ProductCard product={p} priority={i < 4} /></Reveal>)}
        </div>
      </section>
    </>
  );
}
