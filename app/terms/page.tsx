import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Service", description: "Terms for using the Heirloom Gold website and ordering.", alternates: { canonical: "/terms" } };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Policies" title="Terms of Service" photo="flourBowl" />
      <article className="mx-auto max-w-3xl space-y-6 px-5 pt-4 text-[1.05rem] leading-relaxed text-ink-600 sm:px-8">
        <p className="rounded-2xl bg-gold-200/50 px-5 py-3 text-sm font-semibold text-gold-700">Template text — please review and adapt to your business (and local law) before launch.</p>
        <h2 className="text-3xl font-semibold text-emerald-900">Orders</h2>
        <p>Orders are requests sent via WhatsApp and are confirmed only once we confirm availability, total and delivery with you.</p>
        <h2 className="text-3xl font-semibold text-emerald-900">Prices</h2>
        <p>Prices are shown in {`${"PKR"}`} and may change. Sale prices apply until the sale end date.</p>
        <h2 className="text-3xl font-semibold text-emerald-900">Product information</h2>
        <p>Descriptions are for general information and are not medical advice.</p>
      </article>
    </>
  );
}
