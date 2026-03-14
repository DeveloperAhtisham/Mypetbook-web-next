import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Plans for pet owners, veterinarians, and pet shops. Free tier available. Transparent pricing with no hidden fees.",
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
  return children;
}
