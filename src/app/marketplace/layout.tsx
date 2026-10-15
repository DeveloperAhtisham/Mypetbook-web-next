import type { Metadata } from "next";
import { pageCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pet Shop Marketplace – Buy Food, Toys & Accessories Online",
  description:
    "Shop the MyPetBook pet shop marketplace for food, toys, grooming, and health supplies from trusted pet stores—with doorstep delivery for pet owners.",
  keywords: [
    "pet shop marketplace",
    "buy pet food online",
    "pet toys and accessories",
    "pet store platform",
  ],
  alternates: { canonical: pageCanonical("/marketplace") },
  openGraph: {
    title: "Pet Marketplace | MyPetBook",
    description:
      "Browse pet products from trusted shops. Food, toys, accessories, and more.",
  },
};

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
