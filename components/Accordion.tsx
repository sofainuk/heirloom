"use client";

import { useState } from "react";
import { ChevronDown } from "./Icons";

export interface AccItem { q: string; a: string }

export default function Accordion({ items, dark = false }: { items: AccItem[]; dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div
            key={it.q}
            className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
              dark ? "border-white/10 bg-white/[0.04]" : "border-parchment bg-white"
            } ${isOpen ? (dark ? "border-gold-500/60" : "border-gold-400 shadow-[0_18px_40px_-26px_rgba(117,86,26,0.6)]") : ""}`}
          >
            <h3 className="m-0">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-sans text-base font-bold sm:px-6 sm:text-lg ${dark ? "text-ivory" : "text-emerald-900"}`}
              >
                {it.q}
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${isOpen ? "rotate-180 bg-gold-500 text-ink" : dark ? "bg-white/10 text-gold-300" : "bg-cream text-gold-600"}`}>
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <div className="acc" data-open={isOpen}>
              <div>
                <p className={`px-5 pb-5 leading-relaxed sm:px-6 ${dark ? "text-ivory/75" : "text-ink-600"}`}>{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
