import type { Metadata } from "next";
import { PageHero, LinkButton } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import type { PhotoKey } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Our Process — From Farm to Pantry",
  description: "How Heirloom Gold chooses, checks, packs and delivers traditional staples.",
  alternates: { canonical: "/our-process" },
};

const steps: { t: string; d: string; p: PhotoKey }[] = [
  { t: "Sourced with care", d: "We look for traditional staples from growers and makers who work the slow way, and keep the range small so every item earns its place.", p: "cornField" },
  { t: "Checked by hand", d: "Each batch is looked over for aroma, colour and texture before we accept it into the pantry.", p: "jaggeryPowder" },
  { t: "Packed fresh", d: "We pack in small lots into food-safe pouches, jars and bottles so flavour stays at its best.", p: "jarsGrains" },
  { t: "Delivered to your door", d: "Confirm your order on WhatsApp and we dispatch, sharing updates until it reaches you.", p: "giftCrate" },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero eyebrow="Our process" title="Farm to pantry" photo="cornField" intro="Four unhurried steps between a good harvest and your kitchen." />
      <section className="mx-auto max-w-6xl space-y-20 px-5 pt-6 sm:px-8">
        {steps.map((s, i) => (
          <Reveal key={s.t}>
            <div className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-parchment shadow-2xl"><Photo k={s.p} sizes="(min-width:768px) 50vw, 100vw" /></div>
              <div>
                <p className="font-display text-7xl font-semibold text-gold-300">0{i + 1}</p>
                <h2 className="mt-2 text-4xl font-semibold text-emerald-900">{s.t}</h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-600">{s.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
        <div className="text-center"><LinkButton href="/shop">Shop the Pantry</LinkButton></div>
      </section>
    </>
  );
}
