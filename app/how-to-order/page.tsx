import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { LinkButton } from "@/components/ui";
import { WhatsAppIcon, SearchIcon, CheckIcon, TruckIcon } from "@/components/Icons";
import { generalMessage, waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "How to Order",
  description: "Order in four easy steps: browse, choose a pack, send on WhatsApp, receive at your door.",
  alternates: { canonical: "/how-to-order" },
};

const steps = [
  { icon: SearchIcon, t: "Browse the pantry", d: "Explore products, read the details and pick what you like." },
  { icon: CheckIcon, t: "Choose pack & quantity", d: "Pick a ready pack or type any custom weight, add your quantity — the total updates instantly." },
  { icon: WhatsAppIcon, t: "Send on WhatsApp", d: "Tap Order Now. WhatsApp opens with your order pre-filled; just press send." },
  { icon: TruckIcon, t: "Confirm & receive", d: "We confirm availability, total and delivery, then dispatch to your door." },
];

export default function HowToOrderPage() {
  return (
    <>
      <PageHero eyebrow="Easy ordering" title="How to order" photo="flatbreadGriddle" intro="No accounts. No carts. Just four simple steps and a chat." />
      <section className="mx-auto max-w-4xl px-5 pt-6 sm:px-8">
        <ol className="relative space-y-8 before:absolute before:bottom-8 before:left-7 before:top-8 before:w-px before:bg-gold-400/50">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 100} dir="right">
              <li className="relative flex gap-6">
                <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-gold-300 to-gold-600 text-ink shadow-lg"><s.icon className="h-6 w-6" /></span>
                <div className="flex-1 rounded-[1.5rem] bg-white p-6 ring-1 ring-parchment"><p className="text-[0.78rem] font-extrabold uppercase tracking-[0.26em] text-gold-600">Step {i + 1}</p><h2 className="mt-1 text-2xl font-semibold text-emerald-900">{s.t}</h2><p className="mt-2 text-ink-600">{s.d}</p></div>
              </li>
            </Reveal>
          ))}
        </ol>
        <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <LinkButton href="/shop">Start Shopping</LinkButton>
          <a href={waLink(generalMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 rounded-full border-2 border-emerald-900 px-8 py-4 text-[0.85rem] font-extrabold uppercase tracking-[0.12em] text-emerald-900 transition hover:bg-emerald-900 hover:text-gold-200"><WhatsAppIcon className="h-5 w-5" /> Ask a question</a>
        </div>
      </section>
    </>
  );
}
