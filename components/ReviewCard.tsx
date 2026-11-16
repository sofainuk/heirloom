import { QuoteIcon } from "./Icons";
import { Stars } from "./ui";
import type { Review } from "@/lib/reviews";

export default function ReviewCard({ r, dark = false }: { r: Review; dark?: boolean }) {
  const initials = r.name.replace(/Sample Customer /, "").slice(0, 2).toUpperCase();
  return (
    <figure className={`relative flex h-full flex-col rounded-[1.6rem] p-7 ${dark ? "bg-white/[0.06] ring-1 ring-white/10" : "bg-white shadow-[0_24px_50px_-34px_rgba(20,16,12,0.5)] ring-1 ring-parchment"}`}>
      <QuoteIcon className={`absolute right-6 top-6 h-9 w-9 ${dark ? "text-gold-400/30" : "text-gold-300/60"}`} />
      <Stars n={r.rating} />
      <figcaption className={`mt-4 text-xl font-semibold leading-snug ${dark ? "text-ivory" : "text-emerald-900"}`}>{r.title}</figcaption>
      <blockquote className={`mt-3 flex-1 leading-relaxed ${dark ? "text-ivory/75" : "text-ink-600"}`}>{r.text}</blockquote>
      <div className="mt-6 flex items-center gap-3 border-t border-current/10 pt-5">
        <span className="font-display grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-gold-300 to-gold-600 text-lg font-semibold text-ink">{initials}</span>
        <div className="text-sm leading-tight">
          <b className={dark ? "text-ivory" : "text-emerald-900"}>{r.name}</b>
          <span className={`block ${dark ? "text-ivory/60" : "text-ink-400"}`}>{r.city} · {r.product}</span>
        </div>
      </div>
    </figure>
  );
}
