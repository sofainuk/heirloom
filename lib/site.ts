export const site = {
  name: "Heirloom Gold",
  short: "Heirloom Gold",
  descriptor: "Heritage Pantry",
  tagline: "Timeless foods. Golden by nature.",
  description:
    "Heirloom Gold is a heritage pantry of golden, traditional foods — jaggery (gur), desi shakkar, jaggery with dry fruits, barley and corn flour, sattu, moringa powder and pure mustard and sesame oil. Browse and order in one tap on WhatsApp.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://heirloom-gold.vercel.app").replace(/\/$/, ""),
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "923226926011").replace(/\D/g, ""),
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "+92 322 6926011",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "",
  city: process.env.NEXT_PUBLIC_CITY ?? "Pakistan",
  hours: process.env.NEXT_PUBLIC_HOURS ?? "Daily · 10:00 am – 10:00 pm",
  currency: "PKR",
  socials: {
    // TODO: replace with your real profile links (or set the NEXT_PUBLIC_* env vars in Vercel).
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM || "https://www.instagram.com/",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK || "https://www.facebook.com/",
    tiktok: process.env.NEXT_PUBLIC_TIKTOK || "https://www.tiktok.com/",
  },
  /** SALE — edit the end date / name here. Per-product sale prices live in lib/products.ts (`was`). */
  sale: {
    name: "Winter Gold Sale",
    headline: "Up to 20% off our winter favourites",
    endsAt: "2026-12-31T23:59:59+05:00",
  },
  /** Reviews shown on the site are SAMPLES until you replace lib/reviews.ts with real customer feedback. */
  showSampleLabel: true,
  nav: [
    { href: "/shop", label: "Shop" },
    { href: "/best-sellers", label: "Best Sellers" },
    { href: "/sale", label: "Sale", highlight: true },
    { href: "/gift-boxes", label: "Gift Boxes" },
    { href: "/about", label: "Our Story" },
    { href: "/journal", label: "Journal" },
    { href: "/contact", label: "Contact" },
  ],
} as const;
