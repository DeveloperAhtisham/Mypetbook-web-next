import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { homeFaqs, pageCanonical, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "MyPetBook – Free Pet Health App | Find Vets Near You",
  },
  description:
    "Free all-in-one pet health app: track vaccinations & digital pet records, find a veterinarian near you, book online vet consultations, shop pet products, and join a real pet community. For owners, vets & pet shops.",
  keywords: [
    "free pet health app",
    "best pet health app",
    "find veterinarian near me",
    "vet near me",
    "online vet consultation",
    "pet vaccination tracker",
    "digital pet records",
    "book vet appointment online",
    "pet community app",
    "pet care app",
    "all in one pet app",
    "pet app Canada",
  ],
  alternates: { canonical: pageCanonical("/") },
  openGraph: {
    title: "MyPetBook – Free Pet Health App | Find Vets Near You",
    description:
      "Track pet health, find verified vets near you, book online consultations, and join a caring pet community—free to start.",
    url: siteUrl,
  },
};

export default function HomePage() {
  return (
    <>
      <FaqJsonLd faqs={homeFaqs} />
      <HomeClient />
    </>
  );
}
