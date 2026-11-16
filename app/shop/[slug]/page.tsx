import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import OrderPanel from "@/components/OrderPanel";
import ProductCard, { Badges } from "@/components/ProductCard";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import { CheckIcon } from "@/components/Icons";
import { getProduct, products, startingPrice } from "@/lib/products";
import { photoSrc } from "@/lib/photos";
import { faqs } from "@/lib/faqs";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() { return products.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: `${p.name} (${p.localName})`,
    description: p.short,
    alternates: { canonical: `/shop/${p.slug}` },
    openGraph: { title: `${p.name} | ${site.name}`, description: p.short, url: `/shop/${p.slug}`, type: "website" },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  const related = products.filter((x) => x.category === p.category && x.slug !== p.slug).concat(products.filter((x) => x.category !== p.category)).slice(0, 4);
  const prices = p.sizes.map((s) => s.price);

  return (
    <>
      <JsonLd data={[
        {
          "@context": "https://schema.org", "@type": "Product", name: p.name, description: p.description,
          image: p.photos.map((k) => `${photoSrc(k)}?auto=format&fit=crop&w=1200&q=75`), category: p.category, brand: { "@type": "Brand", name: site.name },
          offers: { "@type": "AggregateOffer", priceCurrency: site.currency, lowPrice: Math.min(...prices), highPrice: Math.max(...prices), offerCount: prices.length, availability: "https://schema.org/InStock", url: `${site.url}/shop/${p.slug}` },
        },
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Shop", item: `${site.url}/shop` },
          { "@type": "ListItem", position: 3, name: p.name, item: `${site.url}/shop/${p.slug}` },
        ] },
      ]} />
      <div className="mx-auto max-w-7xl px-5 pt-8 sm:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-ink-400">
          <Link href="/" className="hover:text-gold-700">Home</Link> / <Link href="/shop" className="hover:text-gold-700">Shop</Link> / <Link href={`/shop?cat=${encodeURIComponent(p.category)}`} className="hover:text-gold-700">{p.category}</Link> / <span className="text-emerald-900">{p.name}</span>
        </nav>

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <div className="lg:sticky lg:top-28 lg:self-start"><Gallery photos={p.photos} name={p.name} badges={<Badges product={p} />} /></div>
          <div>
            <p className="text-[0.78rem] font-extrabold uppercase tracking-[0.26em] text-gold-600">{p.category}</p>
            <h1 className="mt-2 text-4xl font-semibold leading-tight text-emerald-900 sm:text-5xl">{p.name}</h1>
            <p className="mt-1 text-lg font-medium text-ink-400">{p.localName}</p>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">{p.description}</p>
            <div className="mt-8"><OrderPanel product={p} /></div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 rounded-2xl bg-cream p-4 text-[0.95rem] text-ink-600">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-800 text-gold-200"><CheckIcon className="h-3 w-3" strokeWidth={3} /></span>{h}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-emerald-900">Ways to use it</h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-ink-600">{p.uses.map((u) => <li key={u}>{u}</li>)}</ul>
            </div>
          </div>
        </div>

        <section className="mt-24 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2"><h2 className="text-3xl font-semibold text-emerald-900 sm:text-4xl">Good to know</h2><p className="mt-3 text-ink-600">Quick answers about ordering and delivery.</p></div>
          <div className="lg:col-span-3"><Accordion items={faqs.filter((f) => f.group === "Payment & Delivery" || f.group === "Ordering").slice(0, 5)} /></div>
        </section>

        <section className="mt-24">
          <h2 className="text-3xl font-semibold text-emerald-900 sm:text-4xl">You may also like</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{related.map((r, i) => <Reveal key={r.slug} delay={i * 80} dir="zoom"><ProductCard product={r} /></Reveal>)}</div>
        </section>
        <p className="sr-only">From Rs {startingPrice(p)}</p>
      </div>
    </>
  );
}
