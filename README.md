# Heirloom Gold — Heritage Pantry (Next.js 16 · TypeScript · Tailwind v4)

Static, SEO-ready, animated WhatsApp-ordering catalog. 37 pages, no database, no backend.

## Run
```bash
npm install
cp .env.example .env.local   # set your WhatsApp number first!
npm run dev                  # http://localhost:3000
npm run build && npm start
```
Deploy: push to GitHub → import in Vercel → add the env vars from `.env.example`.

## Edit your content (all in `lib/`)
| File | What |
|---|---|
| `site.ts` | brand name, tagline, **sale name + end date**, nav |
| `products.ts` | 9 products, pack sizes, prices (`was` = old price → sale), `bestSeller` rank |
| `bundles.ts` | gift boxes |
| `reviews.ts` | **sample reviews – replace with real ones**, then set `showSampleLabel:false` in `site.ts` |
| `faqs.ts`, `journal.ts` | FAQs and blog articles |
| `photos.ts` | Unsplash photo IDs (swap for your own photos any time) |

Prices are PLACEHOLDERS (PKR). Policy pages are templates — review before launch.
To rename the brand: `lib/site.ts` + `components/Logo.tsx` + `app/icon.tsx`.

## Notes
- Photos are hotlinked from Unsplash through a custom loader (no Vercel image quota). Replace with your own for brand authenticity.
- Animations intentionally play even if the OS has "reduce motion" on.
