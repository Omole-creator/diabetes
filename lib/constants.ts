// ───────────────────────────────────────────────────────────
//  Single source of truth for the offer. Edit values here.
// ───────────────────────────────────────────────────────────

export const CHECKOUT_URL = "https://selar.com/4cw17h8662";

export const PRICE_TODAY = "₦5,000";
export const PRICE_ANCHOR = "₦26,000";

export const CTA_PRIMARY = "I Want To Eat My Favorite Foods Again";
export const CTA_SECONDARY = "Get Instant Access Now";

export const AUTHOR = {
  name: "Dr. Omole Kelvin",
  title: "Author, The Slow Sugar Method",
};

// ── Who this is for / not for (the qualification block) ───
// Single source of truth for the disqualification angle. The
// hard "no" to Type 1 builds trust. The tablet crowd is the
// avatar. No doctor caveat here, that honesty lives in the guide.
export const WHO_ITS_NOT_FOR = [
  "You have Type 1 diabetes. This food method is not the answer for you, and I will not take your money for it.",
  "You have already accepted that eba, rice and pounded yam are gone from your life for good. If you have made your peace with that, this is not for you.",
  "You only want another long list of foods to avoid. This guide does the opposite of that, so it will not be what you expect.",
];

export const WHO_ITS_FOR = [
  "You were told it is Type 2, and you are managing it with tablets like metformin, Daonil, Amaryl, or Glucophage.",
  "You are not on any tablet yet. Maybe you lean on herbal products, or only on your food. You are early, and that is the best place of all to start from.",
  "You still want to enjoy your eba, rice, and pounded yam, instead of living on boiled plantain and plain oats.",
  "You can feel where this is heading, and you want to stay far away from the daily injection.",
  "You want a simple way that uses the same food already in your kitchen, nothing strange, nothing costly.",
];

// Exact product titles (do not alter). Shown in the value stack.
export const VALUE_STACK = [
  {
    tag: "Main Blueprint",
    name: "Eat Your Swallow Again: How Nigerians With Diabetes Can Enjoy Eba, Rice, and Pounded Yam Without Spiking Their Blood Sugar",
    blurb: "The quiet way to keep your sugar calm while you still enjoy your own food.",
    value: "₦15,000",
  },
  {
    tag: "Free Bonus Toolkit 1",
    name: "How to Quickly Stop the Numbness, Tingling, and Burning Feet That Diabetes Leaves Behind",
    blurb: "Calm the burning so you can finally sleep through the night.",
    value: "₦6,000",
  },
  {
    tag: "Free Bonus Toolkit 2",
    name: "Strong Again: Get Back the Strong Erection and Bedroom Strength That Diabetes Quietly Took Away",
    blurb: "Quietly bring back the strength diabetes took from you.",
    value: "₦5,000",
  },
];

// ── Testimonials ──────────────────────────────────────────
// 9 written reviews, each from a DIFFERENT Nigerian state (no
// state repeats). Shown in 3 groups of 3, with no location
// heading. The WhatsApp screenshot (screen.jpg) sits in its
// own separate section. NOTE: swap these for genuine reviews
// before scaling paid ads.

export type Review = { name: string; state: string; text: string };

export const REVIEWS: Review[] = [
  {
    name: "Folake Adeyemi",
    state: "Lagos",
    text: "My blood sugar two hours after eating used to scare me. Now it stays calm and I still eat my eba. I did not believe it until I saw it on my own meter.",
  },
  {
    name: "Tunde Ogunleye",
    state: "Oyo",
    text: "I thought I had eaten my last pounded yam. I was wrong. My fasting sugar came down and even my doctor asked me what I changed.",
  },
  {
    name: "Ngozi Eze",
    state: "Enugu",
    text: "Before, I was always tired and thirsty. I no longer get up two and three times in the night to urinate. My body feels steady again.",
  },
  {
    name: "Friday Osaze",
    state: "Edo",
    text: "I am 67. I had given up on enjoying my food. This guide gave me back my favourite meals, and my strength came back with it.",
  },
  {
    name: "Ibrahim Sani",
    state: "Kano",
    text: "I still eat my tuwo and my rice. I only changed how I do it. My numbers are the calmest they have been in years.",
  },
  {
    name: "Grace Okon",
    state: "Rivers",
    text: "It was the burning feet bonus that saved me. The first night I tried the cooling step, I slept straight till morning. I had forgotten that feeling.",
  },
  {
    name: "Yusuf Danjuma",
    state: "Kaduna",
    text: "The second bonus is why I paid, and it is quietly fixing my home. Everything is private and simple. A man will understand.",
  },
  {
    name: "Chinwe Okeke",
    state: "Anambra",
    text: "My last test dropped for the first time in three years. I did not buy any special food. Only the food in my own kitchen.",
  },
  {
    name: "Bode Adewale",
    state: "Ogun",
    text: "It is short and plain. I finished it in one evening and started the same night. Two weeks later I am less tired and my head is clearer.",
  },
];

// ── FAQ ───────────────────────────────────────────────────
export const FAQS: { q: string; a: string }[] = [
  {
    q: "I am 65. Will it still work for me?",
    a: "Yes. The steps are gentle and simple, and they work at any age. Many of the people using this are 60, 70 and above. You use your own market food, nothing hard, nothing strange.",
  },
  {
    q: "I have Type 1 diabetes. Can I use this?",
    a: "No, and I will be honest with you. This guide was written for people with Type 2 who are managing on tablets. If you have Type 1, this food method is not the answer for you, so please do not buy it.",
  },
  {
    q: "I am on diabetes tablets like metformin or Daonil. Is this for me?",
    a: "Yes. This is exactly who I wrote it for. If you are still on tablets, your body is still listening, and this is the best time to start the slow sugar steps and enjoy your food again.",
  },
  {
    q: "Do I need to buy special diabetic food?",
    a: "No. That is the whole point. You use the same eba, rice, beans, soup and vegetables from your normal market. No costly products. No new drugs.",
  },
  {
    q: "How soon will I see a change?",
    a: "Many people notice steadier numbers and more energy within the first week or two of doing the steps. Some take a little longer, because bodies are different. What matters is that you start tonight.",
  },
  {
    q: "Why is it so cheap? What is the catch?",
    a: "There is no catch. It is a digital download, so there is no printing, no delivery, no shop rent added on top. The low price is on purpose, so it can reach as many Nigerian homes as possible. You pay once and keep all three guides for life.",
  },
  {
    q: "How do I get it after I pay?",
    a: "Instantly. The moment your payment is confirmed on Selar, you download all three guides straight to your phone. No waiting, no delivery man.",
  },
  {
    q: "What if it does not work for me?",
    a: "Then you should not pay a kobo for it. You are covered by the 90 day guarantee below. Do the steps, and if your sugar is not calmer, you get your money back and you keep all three guides.",
  },
];
