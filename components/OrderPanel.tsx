"use client";

import { useMemo, useState } from "react";
import { CheckIcon, MinusIcon, PlusIcon, WhatsAppIcon } from "./Icons";
import { discountPct, money, type Product } from "@/lib/products";
import { orderMessage, waLink } from "@/lib/whatsapp";

const CUSTOM = -1;

export default function OrderPanel({ product }: { product: Product }) {
  const litre = product.unit === "litre";
  const small = litre ? "ml" : "g";
  const big = litre ? "litre" : "kg";

  const [idx, setIdx] = useState(Math.min(1, product.sizes.length - 1));
  const [qty, setQty] = useState(1);
  const [amount, setAmount] = useState("750");
  const [unit, setUnit] = useState<"small" | "big">("small");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  const isCustom = idx === CUSTOM;
  const size = isCustom ? null : product.sizes[idx];

  const custom = useMemo(() => {
    const n = parseFloat(amount.replace(",", "."));
    if (!isFinite(n) || n <= 0) return { ok: false, label: "", price: 0, base: 0 };
    const base = unit === "big" ? n * 1000 : n; // grams or ml
    const price = Math.round((product.rate * base) / 1000 / 5) * 5;
    const label = unit === "big" ? `${n} ${big}` : `${n}${small}`;
    return { ok: base >= 100 && base <= 100000, label, price, base };
  }, [amount, unit, product.rate, big, small]);

  const label = isCustom ? `Custom: ${custom.label}` : size!.label;
  const unitPrice = isCustom ? custom.price : size!.price;
  const total = unitPrice * qty;
  const pct = size ? discountPct(size) : 0;
  const canOrder = !isCustom || custom.ok;

  const presets = litre ? ["750 ml", "1.5 litre", "3 litre", "5 litre"] : ["750 g", "1.5 kg", "3 kg", "5 kg"];
  const applyPreset = (p: string) => {
    const [n, u] = p.split(" ");
    setAmount(n);
    setUnit(u === "g" || u === "ml" ? "small" : "big");
  };

  const href = waLink(orderMessage(product.name, label, qty, { name: name.trim(), address: address.trim(), note: note.trim() }, canOrder ? money(total) : undefined));
  const field = "w-full rounded-xl border-2 border-parchment bg-ivory px-4 py-3 text-base text-ink outline-none transition focus:border-gold-500 focus:bg-white";

  return (
    <div className="gold-border rounded-[1.75rem] p-5 shadow-[0_30px_70px_-40px_rgba(117,86,26,0.7)] [--bg:#fff] sm:p-7">
      <div className="flex items-end justify-between gap-3">
        <h2 id="pack-label" className="font-sans text-[0.8rem] font-extrabold uppercase tracking-[0.22em] text-ink-400">Choose weight</h2>
        <div className="text-right" aria-live="polite">
          {size?.was && pct > 0 && <s className="mr-2 text-base text-ink-400">{money(size.was)}</s>}
          <span className="font-display text-4xl font-semibold text-emerald-900">{canOrder ? money(unitPrice) : "—"}</span>
          {pct > 0 && <span className="ml-2 inline-block -translate-y-1 rounded-full bg-ruby px-2.5 py-1 text-[0.78rem] font-extrabold uppercase tracking-wider text-white">−{pct}%</span>}
        </div>
      </div>

      <div role="radiogroup" aria-labelledby="pack-label" className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {product.sizes.map((s, i) => {
          const active = i === idx;
          return (
            <button key={s.label} type="button" role="radio" aria-checked={active} onClick={() => setIdx(i)} className={`relative rounded-2xl border-2 px-3 py-3 text-left transition-all duration-300 active:scale-95 ${active ? "border-emerald-700 bg-emerald-100/60 shadow-inner" : "border-parchment bg-ivory hover:border-gold-400"}`}>
              <span className="block text-base font-extrabold text-emerald-900">{s.label}</span>
              <span className="block text-sm text-ink-400">{money(s.price)}</span>
              {active && <span className="absolute right-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-emerald-700 text-white"><CheckIcon className="h-3 w-3" strokeWidth={3} /></span>}
            </button>
          );
        })}
        <button type="button" role="radio" aria-checked={isCustom} onClick={() => setIdx(CUSTOM)} className={`relative rounded-2xl border-2 border-dashed px-3 py-3 text-left transition-all duration-300 active:scale-95 ${isCustom ? "border-emerald-700 bg-emerald-100/60 shadow-inner" : "border-gold-500 bg-gold-200/30 hover:bg-gold-200/60"}`}>
          <span className="block text-base font-extrabold text-emerald-900">Custom</span>
          <span className="block text-sm text-ink-600">Any weight you need</span>
          {isCustom && <span className="absolute right-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-emerald-700 text-white"><CheckIcon className="h-3 w-3" strokeWidth={3} /></span>}
        </button>
      </div>

      {isCustom && (
        <div className="fx-up mt-4 rounded-2xl bg-cream p-4 ring-1 ring-parchment">
          <label htmlFor="custom-amt" className="block text-sm font-bold text-emerald-900">How much do you need?</label>
          <div className="mt-2 flex gap-2">
            <input id="custom-amt" inputMode="decimal" value={amount} onChange={(e) => setAmount(e.target.value.replace(/[^0-9.,]/g, ""))} className={`${field} flex-1`} aria-invalid={!custom.ok} />
            <div className="flex rounded-xl bg-white p-1 ring-1 ring-parchment" role="group" aria-label="Unit">
              {(["small", "big"] as const).map((u) => (
                <button key={u} type="button" onClick={() => setUnit(u)} aria-pressed={unit === u} className={`rounded-lg px-4 text-sm font-extrabold transition ${unit === u ? "bg-emerald-900 text-gold-200" : "text-ink-600"}`}>{u === "small" ? small : big}</button>
              ))}
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {presets.map((p) => <button key={p} type="button" onClick={() => applyPreset(p)} className="rounded-full bg-white px-3.5 py-1.5 text-sm font-bold text-ink-600 ring-1 ring-parchment transition hover:ring-gold-400 active:scale-95">{p}</button>)}
          </div>
          <p className={`mt-3 text-sm ${custom.ok ? "text-ink-600" : "font-semibold text-ruby"}`}>
            {custom.ok ? `${custom.label} at about ${money(product.rate)} per ${big}. Final price is confirmed on WhatsApp.` : `Enter an amount between 100 ${small} and 100 ${big}.`}
          </p>
        </div>
      )}

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-[0.8rem] font-extrabold uppercase tracking-[0.22em] text-ink-400">Quantity</p>
        <div className="flex items-center gap-1 rounded-full bg-cream p-1 ring-1 ring-parchment">
          <button type="button" aria-label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))} disabled={qty <= 1} className="grid h-10 w-10 place-items-center rounded-full bg-white text-emerald-800 shadow transition active:scale-90 disabled:opacity-40"><MinusIcon className="h-4 w-4" /></button>
          <span className="w-10 text-center text-lg font-extrabold tabular-nums text-emerald-900" aria-live="polite">{qty}</span>
          <button type="button" aria-label="Increase quantity" onClick={() => setQty((q) => Math.min(50, q + 1))} className="grid h-10 w-10 place-items-center rounded-full bg-white text-emerald-800 shadow transition active:scale-90"><PlusIcon className="h-4 w-4" /></button>
        </div>
      </div>

      <details className="mt-5 rounded-2xl bg-cream/70 p-4 ring-1 ring-parchment [&_summary::-webkit-details-marker]:hidden" open>
        <summary className="cursor-pointer list-none text-sm font-extrabold uppercase tracking-[0.16em] text-emerald-900">Your details (optional)</summary>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <label className="block text-sm font-bold text-emerald-900">Name<input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" placeholder="Your name" className={`${field} mt-1.5 font-normal`} /></label>
          <label className="block text-sm font-bold text-emerald-900">City / address<input value={address} onChange={(e) => setAddress(e.target.value)} autoComplete="street-address" placeholder="e.g. Lahore, Johar Town" className={`${field} mt-1.5 font-normal`} /></label>
          <label className="block text-sm font-bold text-emerald-900 sm:col-span-2">Note<input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Anything we should know?" className={`${field} mt-1.5 font-normal`} /></label>
        </div>
      </details>

      <div className="mt-5 flex items-center justify-between rounded-2xl bg-emerald-900 px-5 py-4 text-ivory">
        <span className="text-ivory/80">{qty} × {label}</span>
        <span className="font-display text-2xl font-semibold text-gold-200">{canOrder ? money(total) : "—"}</span>
      </div>

      <a href={canOrder ? href : undefined} aria-disabled={!canOrder} target="_blank" rel="noopener noreferrer" className={`btn-gold mt-4 flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-base font-extrabold uppercase tracking-[0.1em] ${canOrder ? "" : "pointer-events-none opacity-50"}`}>
        <WhatsAppIcon className="h-6 w-6" /> Order Now on WhatsApp
      </a>
      <p className="mt-3 text-center text-sm text-ink-400">Opens WhatsApp with your order ready to send. We confirm availability, payment and delivery there.</p>
    </div>
  );
}
