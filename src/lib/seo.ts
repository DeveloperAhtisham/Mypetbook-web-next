export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mypetbook.app";

/**
 * High-intent pet keywords.
 * Note: Google mostly ignores the meta keywords tag. Ranking & clicks come from
 * titles, descriptions, H1s, content, and Search Console — not stuffing this list.
 */
export const primaryKeywords = [
  // Core product
  "pet health app",
  "best pet health app",
  "free pet health app",
  "pet care app",
  "pet wellness app",
  "all in one pet app",
  "pet community app",
  "pet owner app",
  "pet care platform",
  // Health records / tracking (high intent)
  "digital pet records",
  "pet medical records online",
  "pet vaccination tracker",
  "pet vaccination reminders",
  "pet health tracking",
  "dog health tracker",
  "cat health tracker",
  "dog and cat health records",
  // Vet discovery / booking (strong conversion intent)
  "find veterinarian near me",
  "vet near me",
  "find a vet online",
  "book vet appointment online",
  "online vet consultation",
  "virtual vet visit",
  "veterinary telehealth",
  "verified veterinarians",
  "trusted vet directory",
  // Marketplace / shops
  "pet shop marketplace",
  "buy pet food online",
  "pet store near me",
  "pet products online",
  // Audience / local (Canada focus)
  "pet app Canada",
  "veterinarian Canada",
  "pet care Ontario",
  // Brand + problem phrases
  "MyPetBook",
  "manage pet health online",
  "pet care in one place",
] as const;

export type FaqItem = { q: string; a: string };

export const homeFaqs: FaqItem[] = [
  {
    q: "Is MyPetBook free to use?",
    a: "Yes! Our basic plan is completely free for pet owners. You get pet profiles, health tracking, and community access. Premium features like AI consultations and advanced analytics are available on paid plans.",
  },
  {
    q: "How do I find a veterinarian near me?",
    a: "Once you create an account, our platform uses your location to show verified veterinarians in your area. You can browse profiles, read reviews, and book appointments directly.",
  },
  {
    q: "Can I use MyPetBook for multiple pets?",
    a: "Absolutely! You can create individual profiles for each of your pets, each with their own health records, vaccination schedules, and milestone tracking.",
  },
  {
    q: "Is my pet's data secure?",
    a: "We take data security very seriously. All pet and health data is encrypted and stored securely. We never share your information with third parties without your consent.",
  },
  {
    q: "How do veterinarians get verified?",
    a: "Veterinarians must submit their license, credentials, and practice details for verification. Our team reviews each application to ensure only qualified professionals join the platform.",
  },
];

export const pricingFaqs: FaqItem[] = [
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes! All paid plans are month-to-month with no long-term commitment. Cancel anytime from your account settings.",
  },
  {
    q: "Is there a free trial for paid plans?",
    a: "We offer a 14-day free trial on all paid plans so you can explore the full feature set before committing.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, PayPal, and Apple Pay. All transactions are secured with bank-level encryption.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.",
  },
];

export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function pageCanonical(path: string) {
  const normalized = path === "/" ? "" : path.replace(/\/$/, "");
  return `${siteUrl}${normalized}`;
}
