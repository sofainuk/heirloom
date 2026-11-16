import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import Photo from "./Photo";
import { StarIcon, ArrowRight } from "./Icons";
import type { PhotoKey } from "@/lib/photos";

/** Headline whose words rise out of a mask, one after another (plays on page load). */
export function Words({ text, delay = 0, step = 70, className = "" }: { text: string; delay?: number; step?: number; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="word" aria-hidden="true">
          <span style={{ "--d": `${delay + i * step}ms` } as CSSProperties}>{w}&nbsp;</span>
        </span>
      ))}
    </span>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`text-[0.78rem] font-extrabold uppercase tracking-[0.32em] ${light ? "text-gold-300" : "text-gold-600"}`}>{children}</p>
  );
}

export function SectionHeading({ eyebrow, title, intro, light = false, center = true }: { eyebrow: string; title: ReactNode; intro?: string; light?: boolean; center?: boolean }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      <div className={center ? "ornament mb-4" : "mb-4"}>
        <Eyebrow light={light}>{eyebrow}</Eyebrow>
      </div>
      <h2 className={`text-4xl font-semibold leading-[1.1] sm:text-5xl ${light ? "text-ivory" : "text-emerald-900"}`}>{title}</h2>
      {intro && <p className={`mt-5 text-lg leading-relaxed ${light ? "text-ivory/75" : "text-ink-600"}`}>{intro}</p>}
    </div>
  );
}

export function Stars({ n = 5, className = "h-4 w-4" }: { n?: number; className?: string }) {
  return (
    <span className="inline-flex gap-0.5 text-gold-500" role="img" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className={`${className} ${i < n ? "" : "opacity-25"}`} />
      ))}
    </span>
  );
}

export function Marquee({ items, className = "", fast = false }: { items: string[]; className?: string; fast?: boolean }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className={`flex w-max gap-12 whitespace-nowrap will-change-transform ${fast ? "animate-marquee-fast" : "animate-marquee"}`}>
        {[0, 1].map((k) => (
          <ul key={k} aria-hidden={k === 1} className="flex shrink-0 items-center gap-12">
            {items.map((m) => (
              <li key={m + k} className="font-display flex items-center gap-12 text-2xl italic">
                {m}
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-gold-400" fill="currentColor" aria-hidden="true"><path d="M12 1.5 14.2 9.8 22.5 12l-8.3 2.2L12 22.5 9.8 14.2 1.5 12l8.3-2.2Z" /></svg>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

/** Dark inner-page banner with a slowly-zooming photo. */
export function PageHero({ eyebrow, title, intro, photo, children }: { eyebrow: string; title: string; intro?: string; photo: PhotoKey; children?: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden bg-emerald-950 text-ivory">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 animate-kenburns"><Photo k={photo} priority sizes="100vw" className="opacity-40" /></div>
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/70 via-emerald-950/55 to-emerald-950" />
        <div className="grain absolute inset-0 opacity-[0.07]" />
      </div>
      <div className="mx-auto max-w-5xl px-5 pb-24 pt-20 text-center sm:px-8 sm:pb-28 sm:pt-28">
        <div className="fx-in ornament mb-5"><Eyebrow light>{eyebrow}</Eyebrow></div>
        <h1 className="text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl"><Words text={title} delay={150} /></h1>
        {intro && <p className="fx-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ivory/80 [--d:600ms]">{intro}</p>}
        {children && <div className="fx-up mt-8 [--d:800ms]">{children}</div>}
      </div>
      <svg className="absolute -bottom-px left-0 w-full text-ivory" viewBox="0 0 1440 48" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0 48V24C240 0 480 0 720 18s480 14 720-6v36Z" />
      </svg>
    </section>
  );
}

export function LinkButton({ href, children, variant = "gold", className = "" }: { href: string; children: ReactNode; variant?: "gold" | "dark" | "outline" | "light"; className?: string }) {
  const styles = {
    gold: "btn-gold",
    dark: "bg-emerald-900 text-gold-200 hover:bg-emerald-800 shadow-lg shadow-emerald-950/30",
    outline: "border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-gold-200",
    light: "border-2 border-gold-400/70 text-gold-200 hover:bg-gold-400 hover:text-ink",
  }[variant];
  return (
    <Link href={href} className={`group inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-[0.85rem] font-extrabold uppercase tracking-[0.12em] transition-all active:scale-95 ${styles} ${className}`}>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
    </Link>
  );
}
