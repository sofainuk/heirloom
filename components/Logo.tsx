export function LogoMark({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="hg-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f3df9f" />
          <stop offset="0.5" stopColor="#c9a24a" />
          <stop offset="1" stopColor="#8f6a1f" />
        </linearGradient>
        <linearGradient id="hg-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#12513f" />
          <stop offset="1" stopColor="#05211a" />
        </linearGradient>
      </defs>
      <circle cx="28" cy="28" r="26.5" fill="url(#hg-bg)" stroke="url(#hg-ring)" strokeWidth="2" />
      <circle cx="28" cy="28" r="22" fill="none" stroke="#e6cd85" strokeOpacity="0.35" strokeDasharray="1 3.2" />
      {/* golden wheat sprig */}
      <g fill="url(#hg-ring)">
        <path d="M28 46V19" stroke="url(#hg-ring)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <ellipse cx="28" cy="13.5" rx="2.6" ry="5" />
        <ellipse cx="22.6" cy="20" rx="2.4" ry="4.6" transform="rotate(-38 22.6 20)" />
        <ellipse cx="33.4" cy="20" rx="2.4" ry="4.6" transform="rotate(38 33.4 20)" />
        <ellipse cx="22.2" cy="28" rx="2.4" ry="4.6" transform="rotate(-38 22.2 28)" />
        <ellipse cx="33.8" cy="28" rx="2.4" ry="4.6" transform="rotate(38 33.8 28)" />
        <ellipse cx="22.6" cy="36" rx="2.3" ry="4.2" transform="rotate(-38 22.6 36)" />
        <ellipse cx="33.4" cy="36" rx="2.3" ry="4.2" transform="rotate(38 33.4 36)" />
      </g>
    </svg>
  );
}

export default function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="h-11 w-11 shrink-0 drop-shadow" />
      <span className="leading-none">
        <span className={`font-display block text-[1.45rem] font-semibold tracking-tight ${light ? "text-ivory" : "text-emerald-900"}`}>
          Heirloom <span className="italic text-gold-500">Gold</span>
        </span>
        <span className={`mt-1.5 block text-[0.78rem] font-bold uppercase tracking-[0.34em] ${light ? "text-gold-300/90" : "text-ink-400"}`}>
          Heritage Pantry
        </span>
      </span>
    </span>
  );
}
