import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import Parallax from "@/components/Parallax";
import Counter from "@/components/Counter";
import Countdown from "@/components/Countdown";
import Carousel from "@/components/Carousel";
import Accordion from "@/components/Accordion";
import ProductCard from "@/components/ProductCard";
import ReviewCard from "@/components/ReviewCard";
import JsonLd from "@/components/JsonLd";
import { Eyebrow, LinkButton, Marquee, SectionHeading, Words } from "@/components/ui";
import { ArrowRight, BoxIcon, HandIcon, LeafIcon, ShieldIcon, TruckIcon, WhatsAppIcon, WheatIcon } from "@/components/Icons";
import SocialLinks from "@/components/SocialLinks";
import { bestSellers, categories, categoryMeta, money, products, saleProducts, type Category } from "@/lib/products";
import { bundles } from "@/lib/bundles";
import { reviews } from "@/lib/reviews";
import { faqs } from "@/lib/faqs";
import { articles } from "@/lib/journal";
import { site } from "@/lib/site";
import { generalMessage, waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: { absolute: `${site.name} — Heritage Pantry: Jaggery, Desi Shakkar, Sattu, Flours & Pure Oils | Order on WhatsApp` },
  alternates: { canonical: "/" },
};

const marquee = ["Heirloom Jaggery", "Desi Shakkar", "Jaggery with Dry Fruits", "Jau Ka Atta", "Makai Ka Atta", "Roasted Sattu", "Moringa Powder", "Sarson Ka Oil", "Til Ka Oil"];

const steps = [
  { icon: WheatIcon, title: "Sourced with care", text: "We choose traditional staples from growers and makers who still do things the slow way." },
  { icon: ShieldIcon, title: "Checked by hand", text: "Every batch is looked over for aroma, texture and colour before it earns a place in our pantry." },
  { icon: BoxIcon, title: "Packed fresh", text: "Sealed in food-safe pouches, jars and bottles in small lots so flavour stays at its peak." },
  { icon: TruckIcon, title: "Delivered to you", text: "Confirm on WhatsApp and we dispatch to your door, with updates all the way." },
];

const whys = [
  { icon: LeafIcon, t: "Traditional & simple", d: "Honest staples, no unnecessary fuss." },
  { icon: HandIcon, t: "Hand-selected", d: "Each product chosen for quality, not volume." },
  { icon: WhatsAppIcon, t: "Real people on chat", d: "Order and ask questions on WhatsApp." },
];

export default function HomePage() {
  const best = bestSellers().slice(0, 4);
  const sale = saleProducts().slice(0, 4);
  const topReviews = reviews.slice(0, 6);
  const faqTop = faqs.slice(0, 6);

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqTop.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />

      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden bg-emerald-950 text-ivory">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 animate-kenburns"><Photo k="wheatGolden" priority sizes="100vw" className="opacity-50" /></div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/75 to-emerald-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-emerald-950/60" />
          <div className="grain absolute inset-0 opacity-[0.07]" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-28 pt-14 sm:px-8 lg:min-h-[calc(100svh-7.4rem)] lg:grid-cols-12 lg:pb-32 lg:pt-10">
          <div className="lg:col-span-7">
            <div className="fx-in ornament !justify-start mb-6 [--d:100ms]"><Eyebrow light>Heritage pantry · Golden by nature</Eyebrow></div>
            <h1 className="text-[2.9rem] font-semibold leading-[1.02] sm:text-6xl lg:text-[4.4rem]">
              <Words text="Golden foods," delay={200} /><br />
              <Words text="grown the" delay={420} />{" "}
              <span className="word"><span className="text-gold italic" style={{ "--d": "700ms" } as React.CSSProperties}>heirloom&nbsp;way.</span></span>
            </h1>
            <p className="fx-up mt-7 max-w-xl text-lg leading-relaxed text-ivory/80 [--d:1000ms]">
              Jaggery, desi shakkar, sattu, traditional flours, moringa and pure oils — nine honest staples chosen with care and sent to your door. Order any weight you like in one tap on WhatsApp.
            </p>
            <div className="fx-up mt-9 flex flex-col gap-3 sm:flex-row [--d:1200ms]">
              <LinkButton href="/shop">Shop the Pantry</LinkButton>
              <a href={waLink(generalMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-gold-400/70 px-8 py-4 text-[0.85rem] font-extrabold uppercase tracking-[0.12em] text-gold-200 transition-all hover:bg-gold-400 hover:text-ink active:scale-95">
                <WhatsAppIcon className="h-5 w-5" /> Order on WhatsApp
              </a>
            </div>
            <ul className="fx-up mt-12 grid max-w-xl gap-5 border-t border-gold-400/25 pt-7 sm:grid-cols-3 [--d:1400ms]">
              {whys.map((w) => (
                <li key={w.t} className="flex items-start gap-3">
                  <w.icon className="mt-0.5 h-6 w-6 shrink-0 text-gold-400" />
                  <span className="text-sm leading-snug"><b className="block text-ivory">{w.t}</b><span className="text-ivory/60">{w.d}</span></span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto hidden h-[36rem] w-full max-w-md lg:col-span-5 lg:block lg:max-w-none">
            <Parallax speed={0.07} className="h-full w-full">
              <div className="fx-pop absolute right-6 top-0 h-[28rem] w-[20rem] [--d:500ms]">
                <div className="animate-float h-full w-full">
                  <div className="gold-border relative h-full w-full overflow-hidden rounded-t-[999px] rounded-b-[2rem] p-2 shadow-[0_50px_90px_-30px_rgba(0,0,0,0.8)] [--bg:#05211a]">
                    <div className="relative h-full w-full overflow-hidden rounded-t-[999px] rounded-b-[1.4rem]"><Photo k="jaggeryPlate" priority sizes="320px" /></div>
                  </div>
                </div>
              </div>
              <div className="fx-pop absolute bottom-6 left-0 h-52 w-44 [--d:800ms]">
                <div className="animate-float-rev h-full w-full [--r:-5deg]">
                  <div className="gold-border relative h-full w-full -rotate-6 overflow-hidden rounded-[1.6rem] p-1.5 shadow-2xl [--bg:#05211a]">
                    <div className="relative h-full w-full overflow-hidden rounded-[1.2rem]"><Photo k="oilBottle" sizes="180px" /></div>
                  </div>
                </div>
              </div>
              <div className="fx-pop absolute bottom-0 right-0 h-44 w-40 [--d:1000ms]">
                <div className="animate-float h-full w-full [--r:6deg]">
                  <div className="gold-border relative h-full w-full rotate-6 overflow-hidden rounded-[1.6rem] p-1.5 shadow-2xl [--bg:#05211a]">
                    <div className="relative h-full w-full overflow-hidden rounded-[1.2rem]"><Photo k="cornClose" sizes="160px" /></div>
                  </div>
                </div>
              </div>
              {/* rotating seal */}
              <div className="fx-pop absolute left-2 top-10 h-36 w-36 [--d:1200ms]">
                <svg viewBox="0 0 200 200" className="h-full w-full animate-spin-slow" aria-hidden="true">
                  <defs><path id="seal" d="M100 100m-76 0a76 76 0 1 1 152 0a76 76 0 1 1-152 0" /></defs>
                  <circle cx="100" cy="100" r="98" fill="#05211a" stroke="#c9a24a" strokeWidth="2" />
                  <text fill="#e6cd85" fontSize="15" fontWeight="800" letterSpacing="4.6"><textPath href="#seal">NATURALLY GOLDEN • HAND SELECTED • </textPath></text>
                </svg>
                <WheatIcon className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 text-gold-300" />
              </div>
            </Parallax>
          </div>
        </div>
        <svg className="absolute -bottom-px left-0 w-full text-ivory" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true"><path fill="currentColor" d="M0 70V34C240 0 480 0 720 26s480 22 720-8v52Z" /></svg>
      </section>

      {/* ================= MARQUEE ================= */}
      <section aria-label="Our staples" className="border-b border-gold-400/30 py-6 text-emerald-900/80">
        <Marquee items={marquee} />
      </section>

      {/* ================= SALE ================= */}
      <section className="relative isolate mt-24 overflow-hidden bg-gradient-to-br from-[#1f0910] via-ruby-700 to-[#2a0d13] py-20 text-ivory">
        <div className="grain absolute inset-0 -z-10 opacity-[0.08]" />
        <div className="absolute -right-20 -top-20 -z-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(230,205,133,0.28),transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <Reveal>
              <span className="inline-block rounded-full bg-gold-400 px-4 py-1.5 text-[0.78rem] font-extrabold uppercase tracking-[0.25em] text-ink">Sale on right now</span>
              <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">{site.sale.name}</h2>
              <p className="mt-3 max-w-lg text-lg text-ivory/75">{site.sale.headline}. Reduced prices on pantry favourites for a limited time.</p>
            </Reveal>
            <Reveal dir="right"><Countdown to={site.sale.endsAt} /></Reveal>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sale.map((p, i) => <Reveal key={p.slug} delay={i * 90} dir="zoom"><ProductCard product={p} /></Reveal>)}
          </div>
          <Reveal className="mt-12 text-center"><LinkButton href="/sale">Shop All Sale Items</LinkButton></Reveal>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="mx-auto max-w-7xl px-5 pt-28 sm:px-8">
        <Reveal><SectionHeading eyebrow="Shop by category" title={<>A pantry for <span className="italic text-gold-600">every</span> kitchen</>} intro="From winter sweets to everyday staples — find exactly what your kitchen is missing." /></Reveal>
        <div className="mt-14 grid auto-rows-[15rem] gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[17rem]">
          {(categories.filter((c) => c !== "All") as Category[]).map((c, i) => {
            const span = i === 0 ? "lg:col-span-3 lg:row-span-2" : i === 3 ? "lg:col-span-6" : "lg:col-span-3";
            return (
              <Reveal key={c} dir="curtain" delay={i * 110} className={span}>
                <Link href={`/shop?cat=${encodeURIComponent(c)}`} className="group relative block h-full overflow-hidden rounded-[1.75rem] bg-parchment">
                  <div className="absolute inset-0 transition-transform duration-[1400ms] ease-out group-hover:scale-110"><Photo k={categoryMeta[c].photo} sizes="(min-width:1024px) 40vw, 100vw" /></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent transition-opacity duration-500 group-hover:from-emerald-950/90" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
                    <h3 className="text-2xl font-semibold sm:text-3xl">{c}</h3>
                    <p className="mt-1 text-sm text-ivory/75">{categoryMeta[c].blurb}</p>
                    <span className="mt-3 inline-flex items-center gap-2 text-[0.78rem] font-extrabold uppercase tracking-[0.2em] text-gold-300">Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" /></span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ================= BEST SELLERS ================= */}
      <section className="mx-auto max-w-7xl px-5 pt-28 sm:px-8">
        <Reveal><SectionHeading eyebrow="Best sellers" title={<>Loved, reordered, <span className="italic text-gold-600">gifted</span></>} intro="The staples our customers reach for first." /></Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {best.map((p, i) => <Reveal key={p.slug} delay={i * 90} dir="zoom"><ProductCard product={p} rank={i + 1} priority={i < 2} /></Reveal>)}
        </div>
        <Reveal className="mt-12 text-center"><LinkButton href="/best-sellers" variant="outline">See All Best Sellers</LinkButton></Reveal>
      </section>


      {/* ================= CUSTOM WEIGHT ================= */}
      <section className="mx-auto mt-28 max-w-7xl px-5 sm:px-8">
        <Reveal dir="zoom">
          <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-gold-200 via-gold-300 to-gold-500 p-8 text-ink sm:p-14">
            <div className="grain absolute inset-0 -z-10 opacity-[0.12]" />
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="text-[0.85rem] font-extrabold uppercase tracking-[0.28em] text-emerald-900">Custom weight</p>
                <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">Need more than the pack sizes?</h2>
                <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink/80">Families, shops and events can order <b>any quantity</b> — 750g, 3kg, 10kg or 5 litres. Type the weight on any product page and the price updates instantly.</p>
                <div className="mt-8"><LinkButton href="/shop" variant="dark">Choose your weight</LinkButton></div>
              </div>
              <ul className="grid grid-cols-2 gap-3 sm:gap-4">
                {["750 g", "1.5 kg", "5 kg", "10 kg", "750 ml", "3 litre"].map((w, i) => (
                  <li key={w} className="fx-pop rounded-2xl bg-white/70 px-5 py-5 text-center font-display text-3xl font-semibold text-emerald-900 shadow-lg ring-1 ring-white/60" style={{ "--d": `${i * 90}ms` } as React.CSSProperties}>{w}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ================= COMPLETE PANTRY ================= */}
      <section className="mx-auto max-w-7xl px-5 pt-28 sm:px-8">
        <Reveal><SectionHeading eyebrow="The complete pantry" title={<>All nine <span className="italic text-gold-600">staples</span></>} intro="Every product we stock — each in several pack sizes, or any custom weight." /></Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => <Reveal key={p.slug} delay={(i % 3) * 90} dir="zoom"><ProductCard product={p} /></Reveal>)}
        </div>
      </section>

      {/* ================= STORY + COUNTERS ================= */}
      <section className="relative mt-28 overflow-hidden bg-cream py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
          <div className="relative mx-auto h-[30rem] w-full max-w-md sm:h-[36rem]">
            <Reveal dir="curtain" className="absolute left-0 top-0 h-[85%] w-[72%]">
              <div className="gold-border relative h-full w-full overflow-hidden rounded-t-[999px] rounded-b-3xl p-2 shadow-2xl [--bg:#f5eddd]"><div className="relative h-full w-full overflow-hidden rounded-t-[999px] rounded-b-2xl"><Photo k="farmer" sizes="400px" /></div></div>
            </Reveal>
            <Parallax speed={0.1} className="absolute bottom-0 right-0 w-[55%]">
              <Reveal dir="zoom" delay={300}>
                <div className="relative aspect-square overflow-hidden rounded-3xl border-[6px] border-cream shadow-2xl"><Photo k="jaggeryPile" sizes="300px" /></div>
              </Reveal>
            </Parallax>
          </div>
          <Reveal dir="right">
            <div className="ornament !justify-start mb-4"><Eyebrow>Our story</Eyebrow></div>
            <h2 className="text-4xl font-semibold leading-[1.1] text-emerald-900 sm:text-5xl">A kothi is where families kept their <span className="italic text-gold-600">best</span>.</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-600">In traditional homes the kothi was the granary — the full, safe room that fed the family through every season. {site.name} brings that spirit to a modern pantry: golden, traditional staples chosen for flavour and simplicity, nothing more.</p>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gold-400/40 pt-8 sm:grid-cols-4">
              {[[9, "", "Pantry staples"], [4, "", "Categories"], [3, "", "Gift boxes"], [1, "-tap", "WhatsApp order"]].map(([n, s, l]) => (
                <div key={l as string}>
                  <dt className="font-display text-4xl font-semibold text-emerald-900"><Counter to={n as number} suffix={s as string} /></dt>
                  <dd className="mt-1 text-[0.78rem] font-extrabold uppercase tracking-[0.18em] text-ink-400">{l}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10"><LinkButton href="/about" variant="dark">Read Our Story</LinkButton></div>
          </Reveal>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="relative isolate overflow-hidden bg-emerald-950 py-24 text-ivory">
        <div className="grain absolute inset-0 -z-10 opacity-[0.07]" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal><SectionHeading light eyebrow="From farm to pantry" title={<>The journey of every <span className="text-gold italic">golden</span> grain</>} intro="Four simple steps between a good harvest and your kitchen table." /></Reveal>
          <div className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <svg className="pointer-events-none absolute left-[12%] right-[12%] top-9 hidden h-2 w-[76%] lg:block" preserveAspectRatio="none" viewBox="0 0 100 2" aria-hidden="true"><line className="draw-line" pathLength="1" x1="0" y1="1" x2="100" y2="1" stroke="#c9a24a" strokeWidth="0.6" strokeDasharray="1 0" /></svg>
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 140} className="relative text-center">
                <span className="relative mx-auto grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full bg-gradient-to-br from-gold-300 to-gold-600 text-ink shadow-[0_0_0_8px_#05211a,0_0_0_9px_rgba(201,162,74,0.5)]"><s.icon className="h-8 w-8" /></span>
                <p className="mt-5 text-[0.78rem] font-extrabold uppercase tracking-[0.3em] text-gold-400">Step 0{i + 1}</p>
                <h3 className="mt-2 text-2xl font-semibold">{s.title}</h3>
                <p className="mx-auto mt-3 max-w-xs leading-relaxed text-ivory/70">{s.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 text-center"><LinkButton href="/our-process" variant="light">Explore Our Process</LinkButton></Reveal>
        </div>
      </section>

      {/* ================= GIFT BOXES ================= */}
      <section className="mx-auto max-w-7xl px-5 pt-28 sm:px-8">
        <Reveal><SectionHeading eyebrow="Gift boxes" title={<>Give something <span className="italic text-gold-600">golden</span></>} intro="Beautifully packed hampers for Eid, weddings, winters and thank-yous." /></Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {bundles.map((b, i) => (
            <Reveal key={b.slug} delay={i * 120} dir="zoom">
              <Link href="/gift-boxes" className="group block overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_50px_-34px_rgba(20,16,12,0.6)] ring-1 ring-parchment transition-shadow hover:shadow-[0_40px_70px_-34px_rgba(117,86,26,0.65)]">
                <div className="relative aspect-[5/4] overflow-hidden bg-parchment"><div className="absolute inset-0 transition-transform duration-[1400ms] group-hover:scale-110"><Photo k={b.photo} sizes="(min-width:768px) 33vw, 100vw" /></div>{b.badge && <span className="btn-gold absolute left-4 top-4 rounded-full px-3 py-1 text-[0.78rem] font-extrabold uppercase tracking-wider">{b.badge}</span>}</div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-emerald-900">{b.name}</h3>
                  <p className="mt-1 text-ink-600">{b.tagline}</p>
                  <p className="mt-4 flex items-baseline gap-2"><span className="font-display text-2xl font-semibold text-emerald-900">{money(b.price)}</span><s className="text-sm text-ink-400">{money(b.was)}</s></p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <section className="relative isolate mt-28 overflow-hidden bg-emerald-900 py-24 text-ivory">
        <div className="grain absolute inset-0 -z-10 opacity-[0.07]" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal><SectionHeading light eyebrow="Kind words" title={<>What our customers <span className="text-gold italic">say</span></>} intro={site.showSampleLabel ? "Sample reviews shown for preview — replace with your real customer feedback." : "Real feedback from the people who stock their pantry with us."} /></Reveal>
          <div className="mt-14">
            <Carousel autoplay={6000} label="Customer reviews">
              {topReviews.map((r) => (
                <div key={r.name} className="w-[85%] shrink-0 sm:w-[26rem]"><ReviewCard r={r} dark /></div>
              ))}
            </Carousel>
          </div>
          <Reveal className="mt-10 text-center"><LinkButton href="/reviews" variant="light">Read All Reviews</LinkButton></Reveal>
        </div>
      </section>

      {/* ================= JOURNAL ================= */}
      <section className="mx-auto max-w-7xl px-5 pt-28 sm:px-8">
        <Reveal><SectionHeading eyebrow="The journal" title={<>Recipes, rituals &amp; <span className="italic text-gold-600">pantry wisdom</span></>} /></Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {articles.slice(0, 3).map((a, i) => (
            <Reveal key={a.slug} delay={i * 110}>
              <Link href={`/journal/${a.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-parchment"><div className="absolute inset-0 transition-transform duration-[1400ms] group-hover:scale-110"><Photo k={a.photo} sizes="(min-width:768px) 33vw, 100vw" /></div></div>
                <p className="mt-5 text-[0.78rem] font-extrabold uppercase tracking-[0.24em] text-gold-600">{a.category} · {a.readMins} min read</p>
                <h3 className="mt-2 text-2xl font-semibold leading-snug text-emerald-900 transition-colors group-hover:text-gold-700">{a.title}</h3>
                <p className="mt-2 text-ink-600">{a.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="mx-auto mt-28 max-w-7xl px-5 sm:px-8">
        <div className="grid auto-rows-[10rem] grid-cols-2 gap-4 sm:auto-rows-[13rem] md:grid-cols-4">
          {([["mustardField", "col-span-2 row-span-2"], ["flatbreadHands", ""], ["sesameSeeds", "row-span-2"], ["jaggeryPowder", ""], ["chaiClay", "col-span-2"], ["moringaLeaves", ""]] as const).map(([k, cls], i) => (
            <Reveal key={k} dir="curtain" delay={i * 90} className={cls}>
              <div className="group relative h-full w-full overflow-hidden rounded-3xl bg-parchment"><div className="absolute inset-0 transition-transform duration-[1400ms] group-hover:scale-110"><Photo k={k} sizes="(min-width:768px) 25vw, 50vw" /></div></div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="mx-auto grid max-w-7xl gap-14 px-5 pt-28 sm:px-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="ornament !justify-start mb-4"><Eyebrow>FAQs</Eyebrow></div>
          <h2 className="text-4xl font-semibold leading-[1.1] text-emerald-900 sm:text-5xl">Questions, <span className="italic text-gold-600">answered</span></h2>
          <p className="mt-5 text-lg text-ink-600">Everything about ordering, delivery and our products. Can&apos;t find it? Just message us.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="/faq" variant="dark">All FAQs</LinkButton>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-3" dir="right"><Accordion items={faqTop} /></Reveal>
      </section>


      {/* ================= SOCIAL ================= */}
      <section className="mx-auto mt-28 max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-emerald-950 px-6 py-16 text-ivory sm:px-14">
            <div className="grain absolute inset-0 -z-10 opacity-[0.08]" />
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="ornament !justify-start mb-4"><Eyebrow light>Stay connected</Eyebrow></div>
                <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">Follow the <span className="text-gold italic">harvest</span></h2>
                <p className="mt-4 max-w-md text-lg text-ivory/75">New stock, winter offers and kitchen ideas — find us on your favourite platform, or message us directly on WhatsApp.</p>
              </div>
              <SocialLinks variant="labelled" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="mx-auto mt-28 max-w-7xl px-5 sm:px-8">
        <Reveal dir="zoom">
          <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-emerald-950 px-6 py-20 text-center text-ivory sm:px-12 sm:py-28">
            <div className="absolute inset-0 -z-10"><div className="absolute inset-0 animate-kenburns"><Photo k="mustardSunset" sizes="100vw" className="opacity-45" /></div><div className="absolute inset-0 bg-gradient-to-b from-emerald-950/60 to-emerald-950/90" /><div className="grain absolute inset-0 opacity-[0.08]" /></div>
            <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">Stock your pantry with <span className="text-gold italic">something golden.</span></h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ivory/80">Message us on WhatsApp — we reply personally and confirm availability and delivery.</p>
            <a href={waLink(generalMessage)} target="_blank" rel="noopener noreferrer" className="btn-gold mt-10 inline-flex items-center gap-3 rounded-full px-10 py-5 text-base font-extrabold uppercase tracking-[0.1em]"><WhatsAppIcon className="h-6 w-6" /> Start a WhatsApp chat</a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
