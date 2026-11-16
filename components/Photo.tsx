"use client";

import Image from "next/image";
import { useState } from "react";
import { photoAlt, photoSrc, type PhotoKey } from "@/lib/photos";
import { LogoMark } from "./Logo";

interface PhotoProps {
  k: PhotoKey;
  sizes?: string;
  priority?: boolean;
  className?: string;
  alt?: string;
}

/** Fills its (relative) parent with a photo; shows an elegant branded tile if the image ever fails to load. */
export default function Photo({ k, sizes = "(min-width:1024px) 33vw, 100vw", priority = false, className = "", alt }: PhotoProps) {
  const [bad, setBad] = useState(false);
  if (bad) {
    return (
      <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-parchment via-cream to-gold-300/50">
        <LogoMark className="h-14 w-14 opacity-60" />
      </div>
    );
  }
  return (
    <Image
      src={photoSrc(k)}
      alt={alt ?? photoAlt(k)}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setBad(true)}
      className={`object-cover ${className}`}
    />
  );
}
