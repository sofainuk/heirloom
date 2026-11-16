"use client";

import SocialLinks from "./SocialLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Countdown from "./Countdown";
import { ChevronDown, CloseIcon, MenuIcon, WhatsAppIcon } from "./Icons";
import { site } from "@/lib/site";
import { categories } from "@/lib/products";
import { generalMessage, waLink } from "@/lib/whatsapp";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        setScrolled(y > 8);
        const h = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(h > 0 ? Math.min(100, (y / h) * 100) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) document.body.dataset.menu = "open";
    else delete document.body.dataset.menu;
    return () => {
      document.body.style.overflow = "";
      delete document.body.dataset.menu;
    };
  }, [open]);

  const active = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <>
      {/* Announcement bar */}
      <div className="relative z-50 overflow-hidden bg-ink text-gold-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-[0.78rem] font-bold uppercase tracking-[0.16em] sm:px-8">
          <Link href="/sale" className="flex min-w-0 items-center gap-2 hover:text-white">
            <span className="shrink-0 rounded-full bg-ruby px-2 py-0.5 text-[0.78rem] text-white">Sale</span>
            <span className="truncate">{site.sale.name} · {site.sale.headline}</span>
          </Link>
          <div className="hidden shrink-0 items-center gap-5 md:flex">
            <span className="flex items-center gap-2 text-gold-300">Ends in <Countdown to={site.sale.endsAt} variant="compact" /></span>
            <SocialLinks variant="bar" />
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-500 ${
          scrolled ? "border-gold-400/40 bg-ivory/90 shadow-[0_10px_40px_-18px_rgba(20,16,12,0.45)] backdrop-blur-xl" : "border-transparent bg-ivory"
        }`}
      >
        <div className={`mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 transition-all duration-500 sm:px-8 ${scrolled ? "py-2" : "py-3.5"}`}>
          <Link href="/" aria-label={`${site.name} — home`} className="shrink-0">
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden items-center xl:flex">
            {site.nav.map((n) => {
              const isShop = n.href === "/shop";
              return (
                <div key={n.href} className="group relative">
                  <Link
                    href={n.href}
                    aria-current={active(n.href) ? "page" : undefined}
                    className={`relative flex items-center gap-1 px-3.5 py-3 text-[0.82rem] font-bold uppercase tracking-[0.13em] transition-colors ${
                      "highlight" in n && n.highlight ? "text-ruby" : active(n.href) ? "text-emerald-800" : "text-ink-600 hover:text-emerald-800"
                    }`}
                  >
                    {n.label}
                    {isShop && <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />}
                    <span className={`absolute inset-x-3.5 bottom-1.5 h-0.5 origin-left rounded-full bg-gold-500 transition-transform duration-300 ${active(n.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                  </Link>
                  {isShop && (
                    <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-2 rounded-2xl border border-gold-400/40 bg-ivory p-2 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {categories.map((c) => (
                        <Link key={c} href={c === "All" ? "/shop" : `/shop?cat=${encodeURIComponent(c)}`} className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-ink-600 transition hover:bg-cream hover:text-emerald-800">
                          {c === "All" ? "All products" : c}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <a href={waLink(generalMessage)} target="_blank" rel="noopener noreferrer" className="btn-gold hidden items-center gap-2 rounded-full px-5 py-3 text-[0.8rem] font-extrabold uppercase tracking-[0.1em] sm:inline-flex">
              <WhatsAppIcon className="h-4 w-4" /> Order
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className={`grid h-11 w-11 place-items-center rounded-full transition active:scale-90 xl:hidden ${open ? "bg-gold-400 text-ink" : "bg-emerald-900 text-gold-200"}`}
            >
              {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-[-1px] h-[2px] bg-transparent">
          <div className="h-full origin-left bg-gradient-to-r from-gold-600 via-gold-300 to-gold-500" style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[60] overflow-y-auto bg-emerald-950 transition-all duration-700 xl:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`}
        style={{ clipPath: open ? "circle(160% at 92% 4%)" : "circle(0% at 92% 4%)", transitionProperty: "clip-path, opacity, visibility" }}
      >
        <div className="grain absolute inset-0 opacity-[0.08]" />
        <div className="relative flex min-h-full flex-col px-6 pb-10 pt-5">
          <div className="flex items-center justify-between">
            <Logo light />
            <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center rounded-full bg-gold-400 text-ink">
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>
          <nav aria-label="Mobile" className="mt-8 flex flex-col">
            {[{ href: "/", label: "Home" }, ...site.nav].map((n, i) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${200 + i * 60}ms` : "0ms" }}
                className={`font-display flex items-center justify-between border-b border-white/10 py-3.5 text-[1.85rem] font-medium transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} ${
                  active(n.href) ? "text-gold-300" : "highlight" in n && n.highlight ? "text-gold-200" : "text-ivory"
                }`}
              >
                {n.label}
                {"highlight" in n && n.highlight && <span className="rounded-full bg-ruby px-2.5 py-1 font-sans text-[0.78rem] font-bold uppercase tracking-widest text-white">Live</span>}
              </Link>
            ))}
          </nav>
          <a href={waLink(generalMessage)} target="_blank" rel="noopener noreferrer" className="btn-gold mt-auto flex items-center justify-center gap-3 rounded-2xl px-6 py-4 text-lg font-extrabold">
            <WhatsAppIcon className="h-6 w-6" /> Order on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
