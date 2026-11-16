type LoaderArgs = { src: string; width: number; quality?: number };

/** Unsplash CDN loader: resized, auto-format (WebP/AVIF) image for every screen size. */
export default function imageLoader({ src, width, quality }: LoaderArgs): string {
  if (!src.startsWith("https://images.unsplash.com/")) return src;
  const sep = src.includes("?") ? "&" : "?";
  return `${src}${sep}auto=format&fit=crop&w=${width}&q=${quality ?? 72}`;
}
