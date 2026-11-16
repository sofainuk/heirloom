import type { PhotoKey } from "./photos";

/** GIFT BOXES — edit freely. `items` are product slugs; prices are PLACEHOLDERS (PKR). */
export interface Bundle {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  items: { slug: string; label: string }[];
  price: number;
  was: number;
  photo: PhotoKey;
  badge?: string;
}

export const bundles: Bundle[] = [
  {
    slug: "winter-warmth-box",
    name: "The Winter Warmth Box",
    tagline: "Everything for a cosy desi evening",
    description:
      "Heirloom jaggery, jaggery with dry fruits and desi shakkar, packed in a keepsake crate — the sweetness of a traditional winter, ready to gift.",
    items: [
      { slug: "jaggery-gur", label: "Heirloom Jaggery 1kg" },
      { slug: "jaggery-with-dry-fruits", label: "Jaggery with Dry Fruits 250g" },
      { slug: "desi-shakkar", label: "Desi Shakkar 500g" },
    ],
    price: 2299,
    was: 2650,
    photo: "giftCrate",
    badge: "Most Gifted",
  },
  {
    slug: "heritage-kitchen-box",
    name: "The Heritage Kitchen Box",
    tagline: "The staples of a traditional kitchen",
    description:
      "Mustard oil, corn flour and roasted sattu: the staples that bring makki di roti, saag and stuffed parathas to your table.",
    items: [
      { slug: "mustard-oil", label: "Mustard Oil 500ml" },
      { slug: "corn-flour-makai-atta", label: "Corn Flour 1kg" },
      { slug: "sattu", label: "Roasted Sattu 500g" },
      { slug: "barley-flour-jau-atta", label: "Barley Flour 500g" },
    ],
    price: 1999,
    was: 2300,
    photo: "jarsShelf",
  },
  {
    slug: "wellness-box",
    name: "The Wellness Box",
    tagline: "Simple, nourishing everyday goodness",
    description:
      "Moringa powder, sesame oil, roasted sattu and barley flour — a thoughtful hamper for health-conscious families.",
    items: [
      { slug: "moringa-powder", label: "Moringa Powder 100g" },
      { slug: "sesame-oil", label: "Sesame Oil 250ml" },
      { slug: "sattu", label: "Roasted Sattu 500g" },
      { slug: "barley-flour-jau-atta", label: "Barley Flour 500g" },
    ],
    price: 1799,
    was: 2050,
    photo: "giftBasket",
    badge: "New",
  },
];
