/**
 * CUSTOMER REVIEWS
 * -----------------------------------------------------------------------------
 * IMPORTANT: the entries below are SAMPLE reviews so you can see how the section looks.
 * They are clearly marked `sample: true` and the site shows a small "Sample reviews" tag.
 * Before you go live, replace them with REAL feedback from your customers (WhatsApp screenshots,
 * messages, etc.), set `sample: false`, and set `showSampleLabel: false` in lib/site.ts.
 * Never publish invented reviews as if they were real customers.
 */
export interface Review {
  name: string;
  city: string;
  rating: 1 | 2 | 3 | 4 | 5;
  title: string;
  text: string;
  product: string;
  date: string;
  sample: boolean;
}

export const reviews: Review[] = [
  { name: "Sample Customer A", city: "Lahore", rating: 5, title: "Tastes like my nani's kitchen", text: "The jaggery has that deep caramel taste I had almost forgotten. It melts beautifully into chai and the pouch arrived neatly sealed.", product: "Heirloom Jaggery", date: "2026-11-02", sample: true },
  { name: "Sample Customer B", city: "Karachi", rating: 5, title: "Sesame oil with real aroma", text: "Light, nutty and golden. A little in the tadka and the whole kitchen smelled wonderful.", product: "Sesame Oil", date: "2026-10-28", sample: true },
  { name: "Sample Customer C", city: "Islamabad", rating: 5, title: "Ordering on WhatsApp was effortless", text: "I picked the pack size, the message was pre-filled and I got a reply within minutes. No sign-ups, no fuss.", product: "Jaggery with Dry Fruits", date: "2026-10-21", sample: true },
  { name: "Sample Customer D", city: "Faisalabad", rating: 4, title: "Perfect makki di roti", text: "The corn flour is fine and golden. The dough came together easily and the rotis stayed soft.", product: "Corn Flour", date: "2026-10-15", sample: true },
  { name: "Sample Customer E", city: "Rawalpindi", rating: 5, title: "A gift box people actually remember", text: "Sent the Winter Warmth Box to my parents. The presentation was beautiful and they loved the dry-fruit jaggery.", product: "Winter Warmth Box", date: "2026-10-09", sample: true },
  { name: "Sample Customer F", city: "Multan", rating: 5, title: "Sattu sharbat is back in our summers", text: "Fine, toasty and smooth with water and a pinch of salt. We have already reordered the 1kg pack.", product: "Roasted Sattu", date: "2026-09-30", sample: true },
  { name: "Sample Customer G", city: "Peshawar", rating: 4, title: "Fresh, sorted and well packed", text: "The moringa powder was bright green and fragrant. Delivery details were confirmed clearly on chat.", product: "Moringa Powder", date: "2026-09-22", sample: true },
  { name: "Sample Customer H", city: "Sialkot", rating: 5, title: "Mustard oil for achar season", text: "Bold aroma, lovely golden colour and exactly what my pickles needed.", product: "Mustard Oil", date: "2026-09-12", sample: true },
];

export const hasRealReviews = () => reviews.some((r) => !r.sample);
export const averageRating = () => Math.round((reviews.reduce((a, r) => a + r.rating, 0) / reviews.length) * 10) / 10;
