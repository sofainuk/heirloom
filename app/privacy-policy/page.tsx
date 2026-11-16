import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", description: "How Heirloom Gold handles your information.", alternates: { canonical: "/privacy-policy" } };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Policies" title="Privacy Policy" photo="flourBowl" />
      <article className="mx-auto max-w-3xl space-y-6 px-5 pt-4 text-[1.05rem] leading-relaxed text-ink-600 sm:px-8">
        <p className="rounded-2xl bg-gold-200/50 px-5 py-3 text-sm font-semibold text-gold-700">Template text — please review and adapt to your business (and local law) before launch.</p>
        <h2 className="text-3xl font-semibold text-emerald-900">What we collect</h2>
        <p>This website has no accounts or checkout. When you tap an order button, WhatsApp opens with a pre-filled message; the details you send are shared with {site.name} through WhatsApp.</p>
        <h2 className="text-3xl font-semibold text-emerald-900">How we use it</h2>
        <p>We use the information you send only to fulfil and support your order.</p>
        <h2 className="text-3xl font-semibold text-emerald-900">Third parties</h2>
        <p>WhatsApp is operated by Meta and has its own privacy policy. Product photos load from Unsplash.</p>
      </article>
    </>
  );
}
