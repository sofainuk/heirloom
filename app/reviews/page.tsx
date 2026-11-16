import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import Reveal from "@/components/Reveal";
import ReviewCard from "@/components/ReviewCard";
import { WhatsAppIcon } from "@/components/Icons";
import { reviews } from "@/lib/reviews";
import { site } from "@/lib/site";
import { reviewMessage, waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: `What customers say about ${site.name}.`,
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero eyebrow="Kind words" title="Customer reviews" photo="chaiPour" intro={site.showSampleLabel ? "These are sample reviews shown for preview. Real customer feedback will appear here." : "Feedback from the people who stock their pantry with us."} />
      <section className="mx-auto max-w-7xl px-5 pt-6 sm:px-8">
        {site.showSampleLabel && <p className="mx-auto mb-10 max-w-2xl rounded-2xl bg-gold-200/50 px-5 py-3 text-center text-sm font-semibold text-gold-700">Sample reviews — placeholder content, not from real customers.</p>}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => <Reveal key={r.name} delay={(i % 3) * 90} dir="zoom"><ReviewCard r={r} /></Reveal>)}
        </div>
        <Reveal className="mt-16 rounded-[2rem] bg-emerald-950 p-10 text-center text-ivory">
          <h2 className="text-3xl font-semibold sm:text-4xl">Tried our products?</h2>
          <p className="mx-auto mt-3 max-w-lg text-ivory/75">We&apos;d love to hear how it went. Share your experience with us on WhatsApp.</p>
          <a href={waLink(reviewMessage)} target="_blank" rel="noopener noreferrer" className="btn-gold mt-7 inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-extrabold uppercase tracking-[0.1em]"><WhatsAppIcon className="h-5 w-5" /> Share your experience</a>
        </Reveal>
      </section>
    </>
  );
}
