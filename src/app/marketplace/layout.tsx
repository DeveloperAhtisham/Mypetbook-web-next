import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Marketplace",
  description:
    "Browse pet products from trusted shops. Food, toys, accessories, grooming, and health supplies with doorstep delivery.",
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
