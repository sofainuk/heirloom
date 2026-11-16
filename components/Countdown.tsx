"use client";

import { useEffect, useState } from "react";

function parts(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return { d: Math.floor(s / 86400), h: Math.floor((s % 86400) / 3600), m: Math.floor((s % 3600) / 60), s: s % 60 };
}
const pad = (n: number) => n.toString().padStart(2, "0");

export default function Countdown({ to, variant = "boxes" }: { to: string; variant?: "boxes" | "compact" }) {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const end = new Date(to).getTime();
    const tick = () => setLeft(end - Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [to]);

  if (left !== null && left <= 0) {
    return <span className="font-semibold">Sale ended — new offers soon</span>;
  }
  const p = parts(left ?? 0);
  const ready = left !== null;

  if (variant === "compact") {
    return (
      <span className="tabular-nums" aria-label="Time left in the sale">
        {ready ? `${p.d}d ${pad(p.h)}h ${pad(p.m)}m ${pad(p.s)}s` : "—"}
      </span>
    );
  }

  const cells: [string, number][] = [["Days", p.d], ["Hours", p.h], ["Minutes", p.m], ["Seconds", p.s]];
  return (
    <div className="flex items-center gap-2.5 sm:gap-4" role="timer" aria-label="Time left in the sale">
      {cells.map(([label, v]) => (
        <div key={label} className="text-center">
          <div className="gold-border grid h-16 w-16 place-items-center rounded-2xl text-3xl font-semibold tabular-nums text-gold-200 [--bg:#2a0d13] sm:h-20 sm:w-20 sm:text-4xl">
            <span className="font-display">{ready ? pad(v) : "--"}</span>
          </div>
          <div className="mt-2 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-gold-300/80">{label}</div>
        </div>
      ))}
    </div>
  );
}
