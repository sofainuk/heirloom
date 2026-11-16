import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

const playfair = localFont({
  src: [
    { path: "./fonts/playfair-display-latin-wght-normal.woff2", style: "normal", weight: "400 900" },
    { path: "./fonts/playfair-display-latin-wght-italic.woff2", style: "italic", weight: "400 900" },
  ],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = localFont({
  src: [{ path: "./fonts/manrope-latin-wght-normal.woff2", style: "normal", weight: "200 800" }],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#05211a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Heritage Pantry: Jaggery, Desi Shakkar, Sattu, Flours & Oils`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "jaggery", "gur", "desi shakkar", "jaggery with dry fruits", "barley flour", "jau atta", "corn flour", "makai atta", "sattu", "moringa powder",
    "mustard oil", "sesame oil", "sarson ka oil", "til ka oil", "gift boxes",
    "heritage pantry", "order on WhatsApp", site.name,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: "/",
    locale: "en_PK",
  },
  twitter: { card: "summary_large_image", title: `${site.name} — ${site.tagline}`, description: site.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  formatDetection: { telephone: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const sameAs = Object.values(site.socials).filter(Boolean);
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal,.curtain{opacity:1!important;transform:none!important;clip-path:none!important}.word>span,.fx-up,.fx-in,.fx-pop{opacity:1!important;transform:none!important;animation:none!important}`}</style>
        </noscript>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${site.url}/#org`,
                name: site.name,
                url: site.url,
                logo: `${site.url}/icon`,
                description: site.description,
                sameAs,
                contactPoint: [{ "@type": "ContactPoint", telephone: `+${site.whatsapp}`, contactType: "customer service", availableLanguage: ["English", "Urdu"] }],
              },
              { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, publisher: { "@id": `${site.url}/#org` }, inLanguage: "en" },
            ],
          }}
        />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
