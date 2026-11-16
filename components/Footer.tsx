import SocialLinks from "./SocialLinks";
import Link from "next/link";
import Logo from "./Logo";
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon, ClockIcon, WhatsAppIcon } from "./Icons";
import { Marquee } from "./ui";
import { site } from "@/lib/site";
import { categories } from "@/lib/products";
import { generalMessage, waLink } from "@/lib/whatsapp";

const company = [
  { href: "/about", label: "Our Story" },
  { href: "/our-process", label: "Our Process" },
  { href: "/reviews", label: "Reviews" },
  { href: "/journal", label: "Journal" },
  { href: "/gift-boxes", label: "Gift Boxes" },
  { href: "/contact", label: "Contact" },
];
const help = [
  { href: "/how-to-order", label: "How to Order" },
  { href: "/faq", label: "FAQs" },
  { href: "/delivery-returns", label: "Delivery & Returns" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export default function Footer() {
  const col = "text-[0.78rem] font-extrabold uppercase tracking-[0.28em] text-gold-400";
  const link = "text-ivory/70 transition hover:text-gold-300";
  return (
    <footer className="relative mt-28 overflow-hidden bg-ink text-ivory">
      <div className="grain absolute inset-0 opacity-[0.05]" />
      <div className="relative border-b border-white/10 bg-emerald-950 py-5 text-gold-300"><Marquee items={["Timeless foods", "Golden by nature", "Order in one tap", "Heritage pantry", "Packed with care"]} fast /></div>

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-6 max-w-sm leading-relaxed text-ivory/70">{site.description}</p>
            <a href={waLink(generalMessage)} target="_blank" rel="noopener noreferrer" className="btn-gold mt-7 inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[0.82rem] font-extrabold uppercase tracking-[0.1em]">
              <WhatsAppIcon className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h3 className={col}>Shop</h3>
              <ul className="mt-5 space-y-3">
                {categories.map((c) => (
                  <li key={c}><Link className={link} href={c === "All" ? "/shop" : `/shop?cat=${encodeURIComponent(c)}`}>{c === "All" ? "All Products" : c}</Link></li>
                ))}
                <li><Link className={link} href="/best-sellers">Best Sellers</Link></li>
                <li><Link className={`${link} !text-gold-300`} href="/sale">Sale</Link></li>
              </ul>
            </div>
            <div>
              <h3 className={col}>Company</h3>
              <ul className="mt-5 space-y-3">{company.map((l) => <li key={l.href}><Link className={link} href={l.href}>{l.label}</Link></li>)}</ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className={col}>Help</h3>
              <ul className="mt-5 space-y-3">{help.map((l) => <li key={l.href}><Link className={link} href={l.href}>{l.label}</Link></li>)}</ul>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 border-t border-white/10 pt-8 text-sm text-ivory/75 sm:grid-cols-2 lg:grid-cols-4">
          <p className="flex items-center gap-2.5"><PhoneIcon className="h-4 w-4 shrink-0 text-gold-400" />{site.phoneDisplay}</p>
          <p className="flex items-center gap-2.5"><PinIcon className="h-4 w-4 shrink-0 text-gold-400" />{site.city}</p>
          <p className="flex items-center gap-2.5"><ClockIcon className="h-4 w-4 shrink-0 text-gold-400" />{site.hours}</p>
          {site.email && <p className="flex items-center gap-2.5"><MailIcon className="h-4 w-4 shrink-0 text-gold-400" />{site.email}</p>}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <p className="text-sm text-ivory/50">© {new Date().getFullYear()} {site.name}. All rights reserved. Orders are placed and confirmed on WhatsApp.</p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
