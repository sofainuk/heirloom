import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import { articles } from "@/lib/journal";

export const metadata: Metadata = {
  title: "The Journal — Recipes, Rituals & Pantry Guides",
  description: "Gur wali chai, sattu sharbat, makki di roti tips and guides to storing and using traditional staples.",
  alternates: { canonical: "/journal" },
};

export default function JournalPage() {
  return (
    <>
      <PageHero eyebrow="The journal" title="Recipes & pantry wisdom" photo="kitchen" intro="Simple recipes and practical guides for cooking with traditional staples." />
      <section className="mx-auto max-w-7xl px-5 pt-6 sm:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 100}>
              <Link href={`/journal/${a.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-parchment"><div className="absolute inset-0 transition-transform duration-[1400ms] group-hover:scale-110"><Photo k={a.photo} sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" /></div></div>
                <p className="mt-5 text-[0.78rem] font-extrabold uppercase tracking-[0.24em] text-gold-600">{a.category} · {a.readMins} min read</p>
                <h2 className="mt-2 text-2xl font-semibold leading-snug text-emerald-900 transition-colors group-hover:text-gold-700">{a.title}</h2>
                <p className="mt-2 text-ink-600">{a.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
