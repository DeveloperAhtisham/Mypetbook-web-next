import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Pet Shops",
  description:
    "List your pet shop on MyPetBook. Reach thousands of pet owners, manage orders, and grow your business with our marketplace tools.",
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
