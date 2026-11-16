import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Delivery & Returns", description: "Delivery areas, timings, damaged orders and returns at Heirloom Gold.", alternates: { canonical: "/delivery-returns" } };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Policies" title="Delivery & Returns" photo="flourBowl" />
      <article className="mx-auto max-w-3xl space-y-6 px-5 pt-4 text-[1.05rem] leading-relaxed text-ink-600 sm:px-8">
        <p className="rounded-2xl bg-gold-200/50 px-5 py-3 text-sm font-semibold text-gold-700">Template text — please review and adapt to your business (and local law) before launch.</p>
        <h2 className="text-3xl font-semibold text-emerald-900">Delivery</h2>
        <p>We deliver across {site.city}. After you confirm your order on WhatsApp we share delivery charges and an estimated time for your address.</p>
        <h2 className="text-3xl font-semibold text-emerald-900">Damaged or incorrect items</h2>
        <p>Message us on WhatsApp within 24 hours of delivery with a photo and we will make it right.</p>
        <h2 className="text-3xl font-semibold text-emerald-900">Returns</h2>
        <p>Because these are food products, opened items cannot normally be returned. Contact us if something is not as described.</p>
      </article>
    </>
  );
}
