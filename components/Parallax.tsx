"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Smooth scroll-linked vertical drift. Uses only transform + rAF, so it stays 60fps on big screens and phones. */
export default function Parallax({ children, speed = 0.12, className = "" }: { children: ReactNode; speed?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let visible = true;
    let cur = 0; // the translate we applied last frame — subtracted so the measurement is of the un-shifted layout
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) onScroll();
    });
    io.observe(el);
    const update = () => {
      raf = 0;
      if (!visible) return;
      const r = el.getBoundingClientRect();
      const c = r.top - cur + r.height / 2 - window.innerHeight / 2;
      cur = Math.max(-90, Math.min(90, -c * speed));
      el.style.transform = `translate3d(0, ${cur.toFixed(1)}px, 0)`;
    };
    function onScroll() {
      if (!raf) raf = requestAnimationFrame(update);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
