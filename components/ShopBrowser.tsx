"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";
import { SearchIcon } from "./Icons";
import { categories, maxDiscount, products, startingPrice, type Category } from "@/lib/products";

type Sort = "featured" | "price-asc" | "price-desc" | "discount" | "az";

export default function ShopBrowser({ initialCategory }: { initialCategory?: string }) {
  const params = useSearchParams();
  const urlCat = params.get("cat") ?? initialCategory;
  const [cat, setCat] = useState<"All" | Category>(categories.includes(urlCat as Category) ? (urlCat as Category) : "All");
  const [q, setQ] = useState(params.get("q") ?? "");
  const [sort, setSort] = useState<Sort>("featured");

  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    let out = products.filter((p) => (cat === "All" || p.category === cat) && (!needle || `${p.name} ${p.localName} ${p.category} ${p.short}`.toLowerCase().includes(needle)));
    if (sort === "price-asc") out = [...out].sort((a, b) => startingPrice(a) - startingPrice(b));
    if (sort === "price-desc") out = [...out].sort((a, b) => startingPrice(b) - startingPrice(a));
    if (sort === "discount") out = [...out].sort((a, b) => maxDiscount(b) - maxDiscount(a));
    if (sort === "az") out = [...out].sort((a, b) => a.name.localeCompare(b.name));
    return out;
  }, [cat, q, sort]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div role="tablist" aria-label="Product categories" className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 lg:mx-0 lg:flex-wrap lg:px-0">
          {categories.map((c) => {
            const active = c === cat;
            const count = c === "All" ? products.length : products.filter((p) => p.category === c).length;
            return (
              <button key={c} role="tab" aria-selected={active} type="button" onClick={() => setCat(c)} className={`shrink-0 rounded-full px-5 py-2.5 text-[0.8rem] font-extrabold uppercase tracking-[0.08em] transition-all duration-300 active:scale-95 ${active ? "bg-emerald-900 text-gold-200 shadow-lg shadow-emerald-950/30" : "bg-white text-ink-600 ring-1 ring-parchment hover:ring-gold-400"}`}>
                {c}<span className={`ml-2 rounded-full px-1.5 py-0.5 text-[0.78rem] ${active ? "bg-white/15" : "bg-cream"}`}>{count}</span>
              </button>
            );
          })}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="relative block">
            <span className="sr-only">Search products</span>
            <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400" />
            <input value={q} onChange={(e) => setQ(e.target.value)} type="search" placeholder="Search gur, sattu, oil…" className="w-full rounded-full border-2 border-parchment bg-white py-3 pl-12 pr-5 text-base outline-none transition focus:border-gold-500 sm:w-64" />
          </label>
          <label className="block">
            <span className="sr-only">Sort products</span>
            <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className="w-full rounded-full border-2 border-parchment bg-white px-5 py-3 text-base font-semibold outline-none transition focus:border-gold-500 sm:w-auto">
              <option value="featured">Featured</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
              <option value="discount">Biggest discount</option>
              <option value="az">Name: A–Z</option>
            </select>
          </label>
        </div>
      </div>

      <p className="mt-6 text-sm font-semibold text-ink-400" aria-live="polite">{list.length} {list.length === 1 ? "product" : "products"}</p>

      {list.length === 0 ? (
        <div className="mt-8 rounded-3xl bg-cream p-12 text-center">
          <p className="font-display text-2xl text-emerald-900">Nothing matches “{q}”.</p>
          <p className="mt-2 text-ink-600">Try another word, or message us — we may be able to source it.</p>
        </div>
      ) : (
        <div key={`${cat}-${sort}`} className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((p, i) => (
            <div key={p.slug} className="fx-pop" style={{ "--d": `${Math.min(i, 8) * 55}ms` } as React.CSSProperties}>
              <ProductCard product={p} priority={i < 4} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
