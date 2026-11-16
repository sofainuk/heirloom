"use client";

import { useState } from "react";
import { WhatsAppIcon } from "./Icons";
import { waLink } from "@/lib/whatsapp";
import { site } from "@/lib/site";

const topics = ["Place an order", "Gift box / bulk order", "Product question", "Delivery question"];

/** No backend needed: builds a WhatsApp link from the typed message. */
export default function QuickMessage() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState(topics[0]);
  const [msg, setMsg] = useState("");

  const text = [
    `Hello ${site.name}!`,
    name.trim() ? `My name is ${name.trim()}.` : "",
    `Topic: ${topic}`,
    msg.trim() || "I'd like to know more about your products.",
  ].filter(Boolean).join("\n");

  const field = "w-full rounded-2xl border-2 border-parchment bg-ivory px-4 py-3.5 text-base text-ink outline-none transition focus:border-gold-500 focus:bg-white";

  return (
    <form onSubmit={(e) => { e.preventDefault(); window.open(waLink(text), "_blank", "noopener,noreferrer"); }} className="space-y-5">
      <div>
        <label htmlFor="qm-name" className="mb-1.5 block text-sm font-bold text-emerald-900">Your name</label>
        <input id="qm-name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" placeholder="e.g. Ayesha" className={field} />
      </div>
      <fieldset>
        <legend className="mb-2 text-sm font-bold text-emerald-900">What can we help with?</legend>
        <div className="flex flex-wrap gap-2">
          {topics.map((t) => (
            <button key={t} type="button" aria-pressed={topic === t} onClick={() => setTopic(t)} className={`rounded-full px-4 py-2 text-sm font-bold transition active:scale-95 ${topic === t ? "bg-emerald-900 text-gold-200" : "bg-cream text-ink-600 ring-1 ring-parchment hover:ring-gold-400"}`}>{t}</button>
          ))}
        </div>
      </fieldset>
      <div>
        <label htmlFor="qm-msg" className="mb-1.5 block text-sm font-bold text-emerald-900">Your message</label>
        <textarea id="qm-msg" value={msg} onChange={(e) => setMsg(e.target.value)} rows={4} placeholder="Tell us what you need — products, pack sizes, city…" className={`${field} resize-none`} />
      </div>
      <button type="submit" className="btn-gold flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-base font-extrabold uppercase tracking-[0.1em]">
        <WhatsAppIcon className="h-6 w-6" /> Send on WhatsApp
      </button>
    </form>
  );
}
