import type { Metadata } from "next";
import { pageCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pet Shop Marketplace – Sell Online to Pet Owners",
  description:
    "List your pet shop on the MyPetBook pet shop marketplace. Reach pet owners, sell food & accessories, manage orders, and grow your pet business online.",
  keywords: [
    "pet shop marketplace",
    "sell pet products online",
    "pet store platform",
    "pet owner app",
    "pet care platform",
  ],
  alternates: { canonical: pageCanonical("/for-pet-shops") },
  openGraph: {
    title: "For Pet Shops | MyPetBook",
    description:
      "List your pet shop. Reach thousands of pet owners and grow with our marketplace tools.",
  },
};

export default function ForPetShopsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
