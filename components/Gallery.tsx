"use client";

import { useState } from "react";
import Photo from "./Photo";
import type { PhotoKey } from "@/lib/photos";

export default function Gallery({ photos, name, badges }: { photos: PhotoKey[]; name: string; badges?: React.ReactNode }) {
  const [i, setI] = useState(0);
  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-parchment shadow-[0_50px_90px_-44px_rgba(117,86,26,0.8)] ring-1 ring-parchment">
        {photos.map((k, idx) => (
          <div key={k} className={`absolute inset-0 transition-all duration-700 ${idx === i ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}>
            <Photo k={k} priority={idx === 0} sizes="(min-width:1024px) 50vw, 100vw" alt={`${name} — photo ${idx + 1}`} />
          </div>
        ))}
        {badges && <div className="absolute left-5 top-5 z-10">{badges}</div>}
      </div>
      {photos.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {photos.map((k, idx) => (
            <button key={k} type="button" onClick={() => setI(idx)} aria-label={`Show photo ${idx + 1}`} aria-pressed={idx === i} className={`relative aspect-square overflow-hidden rounded-2xl bg-parchment ring-2 transition-all duration-300 ${idx === i ? "ring-gold-500" : "opacity-70 ring-transparent hover:opacity-100"}`}>
              <Photo k={k} sizes="120px" alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
