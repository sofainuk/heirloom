export interface Faq { q: string; a: string; group: "Ordering" | "Payment & Delivery" | "Products" | "Sale & Gifts" }

export const faqs: Faq[] = [
  { group: "Ordering", q: "Can I order a custom weight?", a: "Yes. On any product page choose Custom and type the weight you need — for example 750g, 3kg or 5 litres. The estimated price updates instantly and we confirm the final price on WhatsApp." },
  { group: "Ordering", q: "How do I place an order?", a: "Open any product, choose a pack size and quantity, then tap “Order Now on WhatsApp”. A message with your product, pack size and quantity is pre-filled — just press send. We reply personally to confirm everything." },
  { group: "Ordering", q: "Do I need to create an account?", a: "No. There are no accounts, logins or carts. Ordering is simply a WhatsApp conversation with us." },
  { group: "Ordering", q: "Can I order several products at once?", a: "Yes. Send one message per product from the website, or tell us your full list in a single WhatsApp chat and we'll put it together for you." },
  { group: "Ordering", q: "What are your order hours?", a: "You can message us any time. We reply during our opening hours shown on the Contact page, usually within a few hours." },
  { group: "Payment & Delivery", q: "How do I pay?", a: "There is no online checkout. We confirm your total and the available payment options with you on WhatsApp before anything is dispatched." },
  { group: "Payment & Delivery", q: "Do you deliver to my city?", a: "Send us your city and address on WhatsApp and we'll confirm whether we deliver there, along with the delivery charges and expected time." },
  { group: "Payment & Delivery", q: "Are the prices on the website final?", a: "Prices shown are per pack size. We confirm the final amount, including delivery, when you message us." },
  { group: "Payment & Delivery", q: "What if my order arrives damaged?", a: "Message us on WhatsApp within 24 hours with a photo and your order details, and we'll make it right." },
  { group: "Products", q: "Are your products natural?", a: "We stock traditional, simply-made staples and avoid unnecessary additives. Each product page lists what to expect, and you can ask us anything about a specific product on WhatsApp." },
  { group: "Products", q: "How should I store jaggery, flours and oils?", a: "Keep jaggery in an airtight container away from moisture, flours in dry airtight tins, and oils sealed in a cool, dark cupboard. Our Journal has a full storage guide." },
  { group: "Products", q: "Can I choose a different pack size?", a: "Each product lists the available pack sizes. If you need a different quantity, ask us on WhatsApp and we'll do our best to help." },
  { group: "Products", q: "Do the product photos show the exact pack?", a: "Photos are illustrative of the ingredient and its quality. Pack designs may vary slightly by batch." },
  { group: "Sale & Gifts", q: "How long does the sale last?", a: "The sale runs until the date shown in the countdown on the Sale page. Sale prices apply to the pack sizes marked with a reduced price." },
  { group: "Sale & Gifts", q: "Can I send a gift box to someone else?", a: "Absolutely. Order a gift box on WhatsApp and share the recipient's address and a short message — we'll include it with the box." },
  { group: "Sale & Gifts", q: "Do you offer bulk or wedding orders?", a: "Yes. Message us with the products and quantities you need for weddings, Eid, corporate gifting or events and we'll prepare a custom quote." },
];
