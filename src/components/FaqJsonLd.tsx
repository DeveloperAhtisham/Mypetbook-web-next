import { buildFaqSchema, type FaqItem } from "@/lib/seo";

export function FaqJsonLd({ faqs }: { faqs: FaqItem[] }) {
  if (!faqs.length) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(buildFaqSchema(faqs)),
      }}
    />
  );
}
