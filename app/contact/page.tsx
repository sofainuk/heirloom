import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import Reveal from "@/components/Reveal";
import SocialLinks from "@/components/SocialLinks";
import QuickMessage from "@/components/QuickMessage";
import Accordion from "@/components/Accordion";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";
import { faqs } from "@/lib/faqs";
import { site } from "@/lib/site";
import { generalMessage, waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact — How to Reach Us",
  description: `Message ${site.name} on WhatsApp, call us, or send a quick enquiry. Fast replies during opening hours.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const rows = [
    { icon: WhatsAppIcon, t: "WhatsApp (fastest)", d: site.phoneDisplay, href: waLink(generalMessage) },
    { icon: PhoneIcon, t: "Call", d: site.phoneDisplay, href: `tel:+${site.whatsapp}` },
    ...(site.email ? [{ icon: MailIcon, t: "Email", d: site.email, href: `mailto:${site.email}` }] : []),
    { icon: PinIcon, t: "Based in", d: site.city },
    { icon: ClockIcon, t: "Hours", d: site.hours },
  ] as { icon: typeof PhoneIcon; t: string; d: string; href?: string }[];
  return (
    <>
      <PageHero eyebrow="Get in touch" title="How to contact us" photo="chaiClay" intro="The quickest way to reach us is WhatsApp. Pick whichever way suits you." />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pt-6 sm:px-8 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          {rows.map((r, i) => {
            const inner = (<><span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-gold-300 to-gold-600 text-ink"><r.icon className="h-5 w-5" /></span><span><b className="block text-emerald-900">{r.t}</b><span className="text-ink-600">{r.d}</span></span></>);
            const cls = "flex items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-parchment";
            return <Reveal key={r.t} delay={i * 70} dir="left">{r.href ? <a href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={`${cls} transition hover:ring-gold-400`}>{inner}</a> : <div className={cls}>{inner}</div>}</Reveal>;
          })}
          <Reveal delay={400} dir="left"><div className="rounded-2xl bg-emerald-950 p-5"><p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-gold-300">Follow us</p><SocialLinks /></div></Reveal>
        </div>
        <Reveal dir="right" className="lg:col-span-3">
          <div className="gold-border rounded-[2rem] p-6 shadow-[0_30px_70px_-40px_rgba(117,86,26,0.7)] [--bg:#fff] sm:p-9">
            <h2 className="text-3xl font-semibold text-emerald-900">Send a quick message</h2>
            <p className="mb-6 mt-2 text-ink-600">Fill this in and we&apos;ll open WhatsApp with your message ready to send.</p>
            <QuickMessage />
          </div>
        </Reveal>
      </section>
      <section className="mx-auto mt-24 max-w-3xl px-5 sm:px-8">
        <h2 className="mb-6 text-3xl font-semibold text-emerald-900">Quick answers</h2>
        <Accordion items={faqs.slice(0, 5)} />
      </section>
    </>
  );
}
