import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Photo from "@/components/Photo";
import JsonLd from "@/components/JsonLd";
import { LinkButton } from "@/components/ui";
import { articles, getArticle } from "@/lib/journal";
import { photoSrc } from "@/lib/photos";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return articles.map((a) => ({ slug: a.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return { title: a.title, description: a.excerpt, alternates: { canonical: `/journal/${a.slug}` }, openGraph: { type: "article", title: a.title, description: a.excerpt, url: `/journal/${a.slug}` } };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const more = articles.filter((x) => x.slug !== a.slug).slice(0, 2);
  return (
    <article>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: a.title, description: a.excerpt, datePublished: a.date, image: `${photoSrc(a.photo)}?auto=format&fit=crop&w=1200&q=75`, author: { "@type": "Organization", name: site.name }, publisher: { "@type": "Organization", name: site.name } }} />
      <header className="mx-auto max-w-3xl px-5 pt-14 text-center sm:px-8">
        <Link href="/journal" className="text-[0.78rem] font-extrabold uppercase tracking-[0.26em] text-gold-600 hover:text-gold-700">← The Journal</Link>
        <p className="mt-6 text-[0.78rem] font-extrabold uppercase tracking-[0.24em] text-ink-400">{a.category} · {a.readMins} min read</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-emerald-900 sm:text-6xl">{a.title}</h1>
        <p className="mt-5 text-lg text-ink-600">{a.excerpt}</p>
      </header>
      <div className="mx-auto mt-10 max-w-5xl px-5 sm:px-8"><div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-parchment shadow-[0_50px_90px_-44px_rgba(117,86,26,0.8)]"><Photo k={a.photo} priority sizes="(min-width:1024px) 1000px, 100vw" alt={a.title} /></div></div>
      <div className="mx-auto mt-12 max-w-2xl px-5 text-[1.08rem] leading-[1.85] text-ink-600 sm:px-8">
        {a.body.map((b, i) => (
          <section key={i} className="mt-8 first:mt-0">
            {b.h && <h2 className="mb-3 text-3xl font-semibold text-emerald-900">{b.h}</h2>}
            {b.p?.map((t, j) => <p key={j} className="mt-4 first:mt-0">{t}</p>)}
            {b.list && (b.ordered
              ? <ol className="mt-4 list-decimal space-y-2 pl-6">{b.list.map((t) => <li key={t}>{t}</li>)}</ol>
              : <ul className="mt-4 list-disc space-y-2 pl-6">{b.list.map((t) => <li key={t}>{t}</li>)}</ul>)}
          </section>
        ))}
        <div className="mt-14 rounded-3xl bg-cream p-8 text-center"><p className="font-display text-2xl text-emerald-900">Ready to cook with it?</p><div className="mt-5"><LinkButton href="/shop">Shop the Pantry</LinkButton></div></div>
      </div>
      <div className="mx-auto mt-20 max-w-5xl px-5 sm:px-8">
        <h2 className="text-3xl font-semibold text-emerald-900">Keep reading</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">{more.map((m) => <Link key={m.slug} href={`/journal/${m.slug}`} className="rounded-2xl bg-white p-6 ring-1 ring-parchment transition hover:ring-gold-400"><p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">{m.category}</p><h3 className="mt-2 text-xl font-semibold text-emerald-900">{m.title}</h3></Link>)}</div>
      </div>
    </article>
  );
}
