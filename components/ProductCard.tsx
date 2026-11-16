import Link from "next/link";
import Photo from "./Photo";
import Tilt from "./Tilt";
import { WhatsAppIcon } from "./Icons";
import { discountPct, isOnSale, maxDiscount, money, startingSize, type Product } from "@/lib/products";
import { orderMessage, waLink } from "@/lib/whatsapp";

export function Badges({ product, className = "" }: { product: Product; className?: string }) {
  const pct = maxDiscount(product);
  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {isOnSale(product) && <span className="rounded-full bg-ruby px-3 py-1 text-[0.78rem] font-extrabold uppercase tracking-wider text-white shadow">Sale −{pct}%</span>}
      {product.bestSeller && <span className="btn-gold rounded-full px-3 py-1 text-[0.78rem] font-extrabold uppercase tracking-wider shadow">Best Seller</span>}
      {product.isNew && <span className="rounded-full bg-emerald-800 px-3 py-1 text-[0.78rem] font-extrabold uppercase tracking-wider text-gold-200 shadow">New</span>}
    </div>
  );
}

export default function ProductCard({ product, priority = false, rank }: { product: Product; priority?: boolean; rank?: number }) {
  const first = startingSize(product);
  const second = product.photos[1];
  return (
    <Tilt max={5} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] bg-white shadow-[0_2px_0_rgba(20,16,12,0.03),0_22px_46px_-30px_rgba(20,16,12,0.5)] ring-1 ring-parchment transition-shadow duration-500 hover:shadow-[0_40px_70px_-34px_rgba(117,86,26,0.65)]">
        <Link href={`/shop/${product.slug}`} aria-label={`View ${product.name}`} className="relative block aspect-[4/5] overflow-hidden bg-parchment">
          <Photo k={product.photos[0]} priority={priority} className="transition-transform duration-[1200ms] ease-out group-hover:scale-110" sizes="(min-width:1280px) 25vw, (min-width:640px) 50vw, 100vw" />
          {second && <Photo k={second} className="opacity-0 transition-opacity duration-700 group-hover:opacity-100" sizes="(min-width:1280px) 25vw, (min-width:640px) 50vw, 100vw" />}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-70" />
          <Badges product={product} className="absolute left-4 top-4" />
          {rank && <span className="font-display absolute right-4 top-2 text-6xl font-semibold italic text-white/90 drop-shadow-lg">{rank}</span>}
          <span className="absolute inset-x-4 bottom-4 translate-y-3 text-center text-[0.78rem] font-extrabold uppercase tracking-[0.2em] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">View details →</span>
        </Link>

        <div className="flex flex-1 flex-col p-5">
          <p className="text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-gold-600">{product.category}</p>
          <h3 className="mt-1.5 text-[1.3rem] font-semibold leading-snug text-emerald-900">
            <Link href={`/shop/${product.slug}`} className="transition-colors hover:text-gold-700">{product.name}</Link>
          </h3>
          <p className="text-sm font-medium text-ink-400">{product.localName}</p>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-600">{product.short}</p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.sizes.map((s) => (
              <span key={s.label} className="rounded-full bg-cream px-2.5 py-1 text-xs font-bold text-ink-600 ring-1 ring-parchment">{s.label}</span>
            ))}
            <span className="rounded-full bg-gold-200/60 px-2.5 py-1 text-xs font-bold text-gold-700 ring-1 ring-gold-400/50">+ custom</span>
          </div>

          <div className="mt-auto flex items-end justify-between gap-3 pt-5">
            <div>
              <span className="block text-[0.78rem] font-bold uppercase tracking-[0.18em] text-ink-400">From</span>
              <span className="flex flex-wrap items-baseline gap-x-2 whitespace-nowrap">
                <span className="font-display text-2xl font-semibold text-emerald-900">{money(first.price)}</span>
                {first.was && discountPct(first) > 0 && <s className="text-sm text-ink-400">{money(first.was)}</s>}
              </span>
            </div>
            <a
              href={waLink(orderMessage(product.name, first.label, 1))}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Order ${product.name} on WhatsApp`}
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-extrabold text-emerald-950 shadow-md shadow-[#25D366]/30 transition hover:-translate-y-0.5 hover:brightness-105 active:scale-95"
            >
              <WhatsAppIcon className="h-4 w-4" /> Order
            </a>
          </div>
        </div>
      </article>
    </Tilt>
  );
}
