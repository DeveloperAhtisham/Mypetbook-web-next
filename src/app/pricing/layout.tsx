import type { Metadata } from "next";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { pageCanonical, pricingFaqs } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pet App Pricing – Free Plans for Owners, Vets & Shops",
  description:
    "Transparent MyPetBook pricing for the best pet health app experience. Free tier for pet owners, plus professional plans for veterinarians and pet shops—no hidden fees.",
  keywords: [
    "pet health app pricing",
    "free pet care app",
    "vet practice software pricing",
    "pet shop marketplace plans",
  ],
  alternates: { canonical: pageCanonical("/pricing") },
  openGraph: {
    title: "Pricing | MyPetBook",
    description:
      "Plans for pet owners, veterinarians, and pet shops. Free tier available.",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FaqJsonLd faqs={pricingFaqs} />
      {children}
    </>
  );
}
