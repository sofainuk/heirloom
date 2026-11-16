import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import Accordion from "@/components/Accordion";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { faqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "FAQs — Ordering, Delivery & Products",
  description: "Answers about ordering on WhatsApp, payment, delivery, our products, the sale and gift boxes.",
  alternates: { canonical: "/faq" },
};

const groups = ["Ordering", "Payment & Delivery", "Products", "Sale & Gifts"] as const;

export default function FaqPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
      <PageHero eyebrow="Help" title="Frequently asked" photo="flourTable" intro="Everything you need to know before you order." />
      <section className="mx-auto max-w-3xl space-y-14 px-5 pt-6 sm:px-8">
        {groups.map((g) => (
          <Reveal key={g}><h2 className="mb-5 text-3xl font-semibold text-emerald-900">{g}</h2><Accordion items={faqs.filter((f) => f.group === g)} /></Reveal>
        ))}
      </section>
    </>
  );
}
