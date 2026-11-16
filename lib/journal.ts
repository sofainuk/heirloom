import type { PhotoKey } from "./photos";

export interface Block { h?: string; p?: string[]; list?: string[]; ordered?: boolean }
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: "Recipes" | "Guides" | "Traditions";
  date: string;
  readMins: number;
  photo: PhotoKey;
  body: Block[];
}

export const articles: Article[] = [
  {
    slug: "gur-wali-chai",
    title: "Gur Wali Chai: The Winter Ritual in Four Steps",
    excerpt: "Swap sugar for jaggery and your evening chai turns deep, mellow and wonderfully warm.",
    category: "Recipes",
    date: "2026-11-12",
    readMins: 3,
    photo: "chaiClay",
    body: [
      { p: ["Jaggery brings a caramel depth that white sugar simply cannot. The secret to a perfect cup is when you add it — and how gently you stir."] },
      { h: "What you need", list: ["1 cup water and 1 cup full-cream milk", "1½ tsp loose black tea or our Gur Wali Chai Blend", "1–2 tbsp jaggery powder, to taste", "2 crushed green cardamom pods and a slice of ginger"] },
      { h: "Method", ordered: true, list: ["Simmer the water with ginger and cardamom for two minutes.", "Add the tea and let it bubble until the water turns deep amber.", "Pour in the milk and bring it to a gentle boil, then lower the heat.", "Take the pan off the heat and stir in the jaggery powder. Strain and serve at once."] },
      { h: "Why add jaggery last?", p: ["Adding jaggery to boiling milk can make it split. Taking the pan off the heat first keeps the chai silky and smooth."] },
    ],
  },
  {
    slug: "sattu-sharbat",
    title: "Sattu Sharbat and Three More Ways to Use Roasted Sattu",
    excerpt: "A cooling summer drink, a stuffed paratha and more — all from one humble flour.",
    category: "Recipes",
    date: "2026-11-08",
    readMins: 4,
    photo: "sattuCup",
    body: [
      { p: ["Sattu is roasted gram flour with a toasty, nutty aroma. It is wonderfully versatile and needs almost no cooking."] },
      { h: "1. Classic sattu sharbat", ordered: true, list: ["Whisk 3 tbsp sattu into a glass of cold water until smooth.", "Add a pinch of black salt, roasted cumin and a squeeze of lemon — or a spoon of jaggery powder for a sweet version.", "Serve over ice."] },
      { h: "2. Sattu-stuffed paratha", p: ["Mix sattu with chopped onion, green chilli, ajwain, lemon juice and a little mustard oil. Stuff into wheat dough, roll and cook with ghee."] },
      { h: "3. Sattu laddoo", p: ["Roast sattu in a little oil until fragrant, then mix with jaggery powder and cardamom. Shape into balls while warm."] },
      { h: "4. Litti-style filling", p: ["Combine sattu with garlic, ginger, carom seeds and pickle masala for the traditional baked-bread filling."] },
    ],
  },
  {
    slug: "makki-di-roti-tips",
    title: "Makki di Roti Without the Cracks",
    excerpt: "Corn flour has no gluten, so the dough needs a gentler hand. These tips make all the difference.",
    category: "Guides",
    date: "2026-11-04",
    readMins: 4,
    photo: "flatbreadGriddle",
    body: [
      { p: ["Makki di roti is the soul of winter. Because corn flour has no gluten to hold it together, it needs warmth, moisture and patience."] },
      { h: "Five tips", ordered: true, list: ["Use hot (not boiling) water and knead the dough while it is still warm.", "Add a spoonful of wheat flour if you are a beginner — it makes the dough more forgiving.", "Pat the roti between oiled palms or on a sheet of parchment instead of rolling it.", "Cook on a medium-hot tawa, then finish for a few seconds over open flame.", "Brush generously with ghee and serve with sarson ka saag and a piece of jaggery."] },
      { h: "Pair it with", p: ["White butter, spicy pickle and a glass of lassi turn this into a complete winter meal."] },
    ],
  },
  {
    slug: "jaggery-vs-sugar",
    title: "Jaggery vs. White Sugar: How to Swap in Your Kitchen",
    excerpt: "Practical, kitchen-tested guidance for using gur and shakkar in everyday cooking and baking.",
    category: "Guides",
    date: "2026-10-30",
    readMins: 4,
    photo: "jaggeryPile",
    body: [
      { p: ["Jaggery and shakkar are unrefined sweeteners with a caramel, molasses-like flavour. They behave a little differently from white sugar, so here is how to use them confidently."] },
      { h: "Quick rules of thumb", list: ["Start with the same amount, then adjust to taste — jaggery's flavour is stronger and its sweetness can vary by batch.", "Grate or use jaggery powder for even melting in batters and doughs.", "For beverages, add jaggery after taking milk off the heat to avoid splitting.", "In baking, expect a deeper colour and a slightly moister crumb."] },
      { h: "Best uses", p: ["Chai, halwa, kheer, laddoos, daal and curries, and anything with warm spices. Shakkar suits tea, lassi and everyday baking."] },
    ],
  },
  {
    slug: "storing-staples",
    title: "How to Store Jaggery, Flours and Oils",
    excerpt: "Simple storage habits that keep your pantry fresh, fragrant and delicious for longer.",
    category: "Guides",
    date: "2026-10-24",
    readMins: 3,
    photo: "jarsGrains",
    body: [
      { h: "Jaggery", p: ["Keep it in an airtight container in a cool, dry place. Moisture is the enemy — wrap blocks in paper first for extra protection."] },
      { h: "Oils and flours", p: ["Keep oils in a cool, dark cupboard with the cap tightly closed. Store flours in airtight tins and use them within a few months for the best aroma."] },
    ],
  },
  {
    slug: "mustard-oil-in-the-kitchen",
    title: "Mustard Oil in the Kitchen: Tadka, Achar and Beyond",
    excerpt: "Its sharp, aromatic character is a signature of traditional cooking. Here is how to use it well.",
    category: "Traditions",
    date: "2026-10-18",
    readMins: 3,
    photo: "mustardField",
    body: [
      { p: ["Mustard oil has a bold, pungent aroma that defines many regional dishes. A little goes a long way."] },
      { h: "Tips for cooking with it", list: ["Heat the oil until it just begins to smoke lightly, then cool slightly before adding spices — this mellows its sharpness.", "Use it for tadka over daal, in saag, or to fry fish and vegetables.", "It is the classic oil for achar: it coats pickles and helps preserve their flavour.", "Store sealed in a cool, dark place."] },
      { h: "A simple tadka", p: ["Warm 2 tbsp oil, add cumin seeds, dried red chilli and sliced garlic, and pour the sizzling mixture over hot daal."] },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
