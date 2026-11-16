import type { Metadata } from "next";
import { PageHero, SectionHeading, LinkButton } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import { HandIcon, LeafIcon, HeartIcon } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Story",
  description: `The story behind ${site.name}: a heritage pantry of golden, traditional staples inspired by the family kothi.`,
  alternates: { canonical: "/about" },
};

const values = [
  { icon: LeafIcon, t: "Simple & traditional", d: "We favour staples made the way families have made them for generations." },
  { icon: HandIcon, t: "Chosen, not collected", d: "A small range, each item picked for flavour and quality." },
  { icon: HeartIcon, t: "Service you can talk to", d: "Real people answer on WhatsApp — ask anything before you order." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Our story" title="Where the family kept its best" photo="wheatBlue" intro="A kothi was the granary of a traditional home — full, safe and trusted. That is the spirit of our pantry." />
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 pt-6 sm:px-8 lg:grid-cols-2">
        <Reveal dir="curtain"><div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-parchment shadow-2xl"><Photo k="kitchen" sizes="(min-width:1024px) 50vw, 100vw" /></div></Reveal>
        <Reveal dir="right">
          <h2 className="text-4xl font-semibold leading-tight text-emerald-900 sm:text-5xl">Food that tastes like <span className="italic text-gold-600">home</span></h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-600">
            <p>{site.name} began with a simple idea: the staples that fed our grandparents — gur, shakkar, sattu, traditional flours and pure oils — deserve a place in the modern kitchen.</p>
            <p>We keep the range focused and the ordering personal. Browse the pantry, pick a pack, and message us on WhatsApp. No accounts, no carts — just a conversation.</p>
          </div>
          <div className="mt-8"><LinkButton href="/shop">Explore the Pantry</LinkButton></div>
        </Reveal>
      </section>
      <section className="mx-auto max-w-7xl px-5 pt-28 sm:px-8">
        <Reveal><SectionHeading eyebrow="What we stand for" title={<>Our <span className="italic text-gold-600">values</span></>} /></Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 110} dir="zoom"><div className="h-full rounded-[1.6rem] bg-white p-8 shadow-[0_24px_50px_-34px_rgba(20,16,12,0.5)] ring-1 ring-parchment"><span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-gold-300 to-gold-600 text-ink"><v.icon className="h-7 w-7" /></span><h3 className="mt-5 text-2xl font-semibold text-emerald-900">{v.t}</h3><p className="mt-2 text-ink-600">{v.d}</p></div></Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
