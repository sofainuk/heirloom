/**
 * PRODUCT CATALOG
 * -----------------------------------------------------------------------------
 * Edit names, prices, pack sizes and descriptions here. All prices are PLACEHOLDERS (PKR).
 *  - `was`      : the old price. When present the product shows as ON SALE.
 *  - `bestSeller`: shows the "Best Seller" badge and lists the product on /best-sellers (lower rank = higher).
 *  - `photos`   : keys from lib/photos.ts (first photo is the main one).
 */
import type { PhotoKey } from "./photos";

export type Category = "Sweeteners" | "Flours & Grains" | "Oils" | "Superfoods";

export interface PackSize {
  label: string;
  price: number;
  was?: number;
}

export interface Product {
  slug: string;
  name: string;
  localName: string;
  category: Category;
  short: string;
  description: string;
  highlights: string[];
  uses: string[];
  sizes: PackSize[];
  photos: PhotoKey[];
  badge?: string;
  bestSeller?: number;
  isNew?: boolean;
  /** Custom-weight ordering: `rate` = price per 1 kg (or per 1 litre when unit is "litre"). */
  unit: "kg" | "litre";
  rate: number;
}

const s = (label: string, price: number, was?: number): PackSize => ({ label, price, was });

export const categories: ("All" | Category)[] = ["All", "Sweeteners", "Flours & Grains", "Oils", "Superfoods"];

export const categoryMeta: Record<Category, { blurb: string; photo: PhotoKey }> = {
  Sweeteners: { blurb: "Gur, desi shakkar and jaggery with dry fruits", photo: "jaggeryPlate" },
  "Flours & Grains": { blurb: "Barley, corn and roasted sattu", photo: "flourBowl" },
  Oils: { blurb: "Mustard and sesame oil for tadka and achar", photo: "oilBottle" },
  Superfoods: { blurb: "Pure moringa leaf powder", photo: "moringaLeaves" },
};

export const products: Product[] = [
  {
    slug: "jaggery-gur",
    name: "Heirloom Jaggery",
    localName: "Gur",
    category: "Sweeteners",
    short: "Slow-cooked golden gur with a deep caramel sweetness — the soul of a desi winter.",
    description:
      "Traditional jaggery made from sugarcane juice, slowly cooked and set into rich golden blocks. Its caramel sweetness and earthy aroma make it the heart of winter sweets, warm milk, tea and everyday desserts.",
    highlights: ["Made from sugarcane juice", "Deep caramel flavour", "No bleaching, no added colour", "Packed fresh in food-safe pouches"],
    uses: ["Stir into chai or warm milk", "Gur-wale chawal and halwa", "Traditional winter sweets", "A pinch in daal and curries"],
    sizes: [s("500g", 360, 420), s("1kg", 690, 800), s("2kg", 1340, 1560)],
    photos: ["jaggeryPlate", "jaggeryPile", "brownCubes", "sweets"],
    unit: "kg",
    rate: 690,
    bestSeller: 1,
    badge: "Best Seller",
  },
  {
    slug: "desi-shakkar",
    name: "Desi Shakkar",
    localName: "Unrefined Cane Sugar",
    category: "Sweeteners",
    short: "Golden-brown shakkar with a warm, mellow sweetness and natural molasses notes.",
    description:
      "Granular desi shakkar made the traditional way. Golden-brown crystals with a soft molasses flavour — a lovely everyday replacement for refined white sugar in tea, sweets and baking.",
    highlights: ["Unrefined golden crystals", "Natural molasses flavour", "Easy to measure and dissolve", "Everyday sugar swap"],
    uses: ["Tea, coffee and lassi", "Baking and mithai", "Kheer and sweet dishes", "Sprinkle on porridge"],
    sizes: [s("500g", 320), s("1kg", 600), s("2kg", 1150)],
    photos: ["sugarCubes", "brownCubes", "jaggeryPowder", "chaiClay"],
    unit: "kg",
    rate: 600,
  },
  {
    slug: "jaggery-with-dry-fruits",
    name: "Jaggery with Dry Fruits",
    localName: "Gur & Mewa",
    category: "Sweeteners",
    short: "Soft jaggery folded with crunchy nuts and dry fruits — a rich after-meal treat.",
    description:
      "Our prepared jaggery is blended with a generous mix of dry fruits and nuts for a rich, crunchy bite. Enjoy a small piece after meals, or crumble it over desserts and warm milk.",
    highlights: ["Jaggery plus mixed dry fruits", "Crunchy, rich and satisfying", "A traditional after-meal sweet", "Beautiful for gifting"],
    uses: ["After-meal sweet", "Crumble over warm milk", "Winter gifting", "Evening snack"],
    sizes: [s("250g", 600, 720), s("500g", 1150, 1380), s("1kg", 2200, 2640)],
    photos: ["nutsRaisins", "fruitNutMix", "mixedNuts", "jaggeryPlate"],
    unit: "kg",
    rate: 2200,
    bestSeller: 4,
  },
  {
    slug: "barley-flour-jau-atta",
    name: "Barley Flour",
    localName: "Jau ka Atta",
    category: "Flours & Grains",
    short: "Finely milled jau atta for soft, nutty rotis and traditional recipes.",
    description:
      "A traditional grain flour with a gentle, nutty flavour. Use it on its own or mix with wheat flour for rotis, parathas and everyday breads with rustic character.",
    highlights: ["Finely milled", "Nutty, rustic flavour", "Blends well with wheat atta", "Traditional grain"],
    uses: ["Mixed-grain rotis", "Parathas", "Porridge and halwa", "Rustic baking"],
    sizes: [s("500g", 260), s("1kg", 480), s("2kg", 920)],
    photos: ["barleyField", "flourBowl", "flourTable", "flatbreadGriddle"],
    unit: "kg",
    rate: 480,
  },
  {
    slug: "corn-flour-makai-atta",
    name: "Corn Flour",
    localName: "Makai ka Atta",
    category: "Flours & Grains",
    short: "Sunny yellow makai atta, perfect for classic makki di roti and winter meals.",
    description:
      "Golden corn flour ground for soft, flavourful makki di roti. A winter favourite that pairs beautifully with sarson ka saag, white butter and a spoon of gur.",
    highlights: ["Bright, golden colour", "Sweet corn flavour", "Ideal for makki di roti", "Freshly packed"],
    uses: ["Makki di roti", "Sarson ka saag partner", "Corn porridge", "Crispy coatings"],
    sizes: [s("500g", 240), s("1kg", 450), s("2kg", 860)],
    photos: ["cornClose", "cornPile", "cornField", "flatbreadHands"],
    unit: "kg",
    rate: 450,
    bestSeller: 6,
  },
  {
    slug: "sattu",
    name: "Roasted Sattu",
    localName: "Bhuna Chana Sattu",
    category: "Flours & Grains",
    short: "Roasted gram flour with a toasty aroma — a cool sattu drink or stuffed parathas.",
    description:
      "Sattu is a beloved traditional flour made from roasted gram. Stir it into cold water with salt or sugar for a refreshing drink, or use it as a flavourful stuffing for parathas and litti.",
    highlights: ["Roasted for a toasty aroma", "Fine, smooth texture", "Quick cool-drink mix", "Versatile stuffing flour"],
    uses: ["Cooling sattu sharbat", "Stuffed parathas", "Litti chokha", "Laddoos and sweet bites"],
    sizes: [s("500g", 300, 350), s("1kg", 560, 650)],
    photos: ["sattuCup", "flourBowl", "barleyField", "jarsGrains"],
    unit: "kg",
    rate: 560,
    bestSeller: 2,
    badge: "Best Seller",
  },
  {
    slug: "moringa-powder",
    name: "Moringa Leaf Powder",
    localName: "Sohanjna",
    category: "Superfoods",
    short: "Vibrant green moringa powder to blend into smoothies, rotis and soups.",
    description:
      "Fine powder made from dried moringa leaves. Its fresh, earthy taste blends easily into smoothies, yoghurt, roti dough and soups for a vibrant green boost to everyday meals.",
    highlights: ["Dried moringa leaves", "Fine, vibrant green powder", "Mild earthy flavour", "Easy to add to meals"],
    uses: ["Smoothies and lassi", "Roti and paratha dough", "Soups and dips", "Warm tea infusion"],
    sizes: [s("100g", 450), s("250g", 1050), s("500g", 2000)],
    photos: ["moringaLeaves", "moringaDark", "jarsGrains", "flourBowl"],
    unit: "kg",
    rate: 4000,
  },
  {
    slug: "mustard-oil",
    name: "Mustard Oil",
    localName: "Sarson ka Tel",
    category: "Oils",
    short: "Golden, pungent sarson oil for tadkas, pickles and traditional cooking.",
    description:
      "A bold, aromatic mustard oil with the sharp, distinctive flavour that traditional kitchens love. Ideal for pickles, tadkas, saag and classic regional dishes.",
    highlights: ["Rich golden colour", "Bold, pungent aroma", "Traditional cooking staple", "Perfect for pickles"],
    uses: ["Achar and pickles", "Tadka and saag", "Fish and vegetable curries", "Traditional recipes"],
    sizes: [s("500ml", 650, 760), s("1 litre", 1250, 1450), s("2 litre", 2400, 2800)],
    photos: ["oilBottle", "mustardField", "oilCruet", "mustardSunset"],
    unit: "litre",
    rate: 1250,
    bestSeller: 3,
  },
  {
    slug: "sesame-oil",
    name: "Sesame Oil",
    localName: "Til ka Tel",
    category: "Oils",
    short: "Warm, nutty til oil with a smooth flavour for cooking and seasoning.",
    description:
      "Smooth, nutty sesame oil with a warm aroma. A versatile oil for sautéing, seasoning and traditional recipes, and a pantry favourite in many homes.",
    highlights: ["Warm, nutty aroma", "Smooth flavour", "Versatile in the kitchen", "Pantry essential"],
    uses: ["Sautéing and stir-fries", "Seasoning and dressings", "Traditional recipes", "Finishing drizzle"],
    sizes: [s("250ml", 650, 760), s("500ml", 1250, 1450), s("1 litre", 2400, 2800)],
    photos: ["sesameSeeds", "oilCruet", "sesamePile", "oilBottle"],
    unit: "litre",
    rate: 2400,
    bestSeller: 5,
  },
];

/* ---------- helpers ---------- */
export const money = (n: number) => `Rs ${n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

export const startingSize = (p: Product) => p.sizes.reduce((a, b) => (b.price < a.price ? b : a));
export const startingPrice = (p: Product) => startingSize(p).price;
export const isOnSale = (p: Product) => p.sizes.some((x) => x.was && x.was > x.price);
export const discountPct = (x: PackSize) => (x.was && x.was > x.price ? Math.round((1 - x.price / x.was) * 100) : 0);
export const maxDiscount = (p: Product) => Math.max(0, ...p.sizes.map(discountPct));

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const bestSellers = () => products.filter((p) => p.bestSeller).sort((a, b) => (a.bestSeller ?? 99) - (b.bestSeller ?? 99));
export const saleProducts = () => products.filter(isOnSale).sort((a, b) => maxDiscount(b) - maxDiscount(a));
