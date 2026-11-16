import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import { WhatsAppIcon, CheckIcon } from "@/components/Icons";
import { bundles } from "@/lib/bundles";
import { getProduct, money } from "@/lib/products";
import { bundleMessage, waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Gift Boxes & Hampers",
  description: "Beautifully packed Heirloom Gold hampers for Eid, weddings, winters and thank-yous. Order on WhatsApp.",
  alternates: { canonical: "/gift-boxes" },
};

export default function GiftBoxesPage() {
  return (
    <>
      <PageHero eyebrow="Gifting" title="Gift boxes" photo="giftBasket" intro="Hand-packed hampers of golden staples — for Eid, weddings, winters and thank-yous." />
      <section className="mx-auto max-w-7xl space-y-20 px-5 pt-6 sm:px-8">
        {bundles.map((b, i) => (
          <Reveal key={b.slug}>
            <article className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-parchment shadow-[0_50px_90px_-44px_rgba(117,86,26,0.8)]">
                <Photo k={b.photo} sizes="(min-width:1024px) 50vw, 100vw" />
                {b.badge && <span className="btn-gold absolute left-5 top-5 rounded-full px-3.5 py-1.5 text-[0.78rem] font-extrabold uppercase tracking-wider">{b.badge}</span>}
              </div>
              <div>
                <h2 className="text-4xl font-semibold text-emerald-900 sm:text-5xl">{b.name}</h2>
                <p className="mt-2 text-lg font-semibold text-gold-700">{b.tagline}</p>
                <p className="mt-4 leading-relaxed text-ink-600">{b.description}</p>
                <ul className="mt-6 space-y-2.5">
                  {b.items.map((it) => {
                    const p = getProduct(it.slug);
                    return (
                      <li key={it.slug} className="flex items-center gap-3 text-ink-600">
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-100 text-emerald-800"><CheckIcon className="h-3.5 w-3.5" strokeWidth={3} /></span>
                        {p ? <Link href={`/shop/${p.slug}`} className="font-semibold hover:text-gold-700">{p.name}</Link> : it.slug} <span className="text-ink-400">· {it.label}</span>
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-7 flex items-baseline gap-3"><span className="font-display text-4xl font-semibold text-emerald-900">{money(b.price)}</span><s className="text-lg text-ink-400">{money(b.was)}</s></p>
                <a href={waLink(bundleMessage(b.name))} target="_blank" rel="noopener noreferrer" className="btn-gold mt-6 inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-extrabold uppercase tracking-[0.1em]"><WhatsAppIcon className="h-5 w-5" /> Order this box</a>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
