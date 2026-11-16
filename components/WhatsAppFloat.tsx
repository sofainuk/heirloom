"use client";

import { useEffect, useState } from "react";
import { CloseIcon, WhatsAppIcon } from "./Icons";
import { generalMessage, waLink } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  const [bubble, setBubble] = useState(false);

  useEffect(() => {
    const a = setTimeout(() => setShow(true), 1000);
    const b = setTimeout(() => setBubble(true), 6000);
    const c = setTimeout(() => setBubble(false), 15000);
    return () => [a, b, c].forEach(clearTimeout);
  }, []);

  return (
    <div
      className={`wa-float fixed bottom-5 right-4 z-50 flex items-end gap-3 transition-all duration-700 ease-out sm:bottom-7 sm:right-7 ${show ? "translate-y-0 scale-100 opacity-100" : "translate-y-10 scale-75 opacity-0"}`}
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className={`relative mb-1 max-w-[13rem] origin-bottom-right rounded-2xl rounded-br-sm bg-ivory px-4 py-3 text-sm shadow-2xl ring-1 ring-gold-400/50 transition-all duration-500 ${bubble ? "scale-100 opacity-100" : "pointer-events-none scale-75 opacity-0"}`}>
        <button type="button" aria-label="Dismiss" onClick={() => setBubble(false)} className="absolute -left-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-ink text-ivory"><CloseIcon className="h-3 w-3" /></button>
        <b className="block text-emerald-900">Need help choosing?</b>
        <span className="text-ink-600">Chat with us — we reply personally.</span>
      </div>
      <a href={waLink(generalMessage)} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" className="group relative grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_34px_-6px_rgba(37,211,102,0.7)] transition-transform duration-300 hover:scale-110 active:scale-95">
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" />
        <WhatsAppIcon className="relative h-8 w-8" />
      </a>
    </div>
  );
}
