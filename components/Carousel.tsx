"use client";

import { useCallback, useEffect, useRef, type ReactNode } from "react";
import { ArrowRight } from "./Icons";

interface Props {
  children: ReactNode;
  autoplay?: number; // ms; 0 = off
  className?: string;
  label?: string;
}

/** Scroll-snap carousel with arrow buttons, touch swiping and optional autoplay. */
export default function Carousel({ children, autoplay = 0, className = "", label = "Carousel" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  const go = useCallback((dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const step = el.firstElementChild ? (el.firstElementChild as HTMLElement).offsetWidth + 20 : el.clientWidth * 0.8;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
    if (dir === 1 && atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else el.scrollBy({ left: dir * step, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => {
      if (!paused.current) go(1);
    }, autoplay);
    return () => clearInterval(id);
  }, [autoplay, go]);

  return (
    <div className={`relative ${className}`} role="region" aria-label={label}>
      <div
        ref={ref}
        onPointerEnter={() => (paused.current = true)}
        onPointerLeave={() => (paused.current = false)}
        onTouchStart={() => (paused.current = true)}
        className="snap-row no-scrollbar -mx-5 flex gap-5 overflow-x-auto scroll-smooth px-5 pb-4 sm:mx-0 sm:px-0"
      >
        {children}
      </div>
      <div className="mt-6 flex items-center justify-center gap-3">
        <button type="button" onClick={() => go(-1)} aria-label="Previous" className="grid h-12 w-12 rotate-180 place-items-center rounded-full border border-gold-500/60 text-gold-500 transition hover:bg-gold-500 hover:text-ink active:scale-90">
          <ArrowRight className="h-5 w-5" />
        </button>
        <button type="button" onClick={() => go(1)} aria-label="Next" className="grid h-12 w-12 place-items-center rounded-full border border-gold-500/60 text-gold-500 transition hover:bg-gold-500 hover:text-ink active:scale-90">
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
