import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { bestSellers } from "@/lib/products";

export const metadata: Metadata = {
  title: "Best Sellers",
  description: "The Heirloom Gold staples customers reach for first — jaggery, sattu, mustard oil and more.",
  alternates: { canonical: "/best-sellers" },
};

export default function BestSellersPage() {
  const list = bestSellers();
  return (
    <>
      <PageHero eyebrow="Customer favourites" title="Best sellers" photo="jaggeryPlate" intro="Ranked by what we pack and send most often." />
      <section className="mx-auto max-w-7xl px-5 pt-6 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p, i) => <Reveal key={p.slug} delay={(i % 4) * 80} dir="zoom"><ProductCard product={p} rank={i + 1} priority={i < 4} /></Reveal>)}
        </div>
      </section>
    </>
  );
}
