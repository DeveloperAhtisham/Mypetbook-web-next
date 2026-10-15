import type { Metadata } from "next";
import { pageCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Find a Vet Near Me – Verified Veterinarians & Pet Shops",
  description:
    "Find a veterinarian near me and trusted pet shops. Compare verified vets, ratings, hours, and book a vet appointment online with MyPetBook’s directory.",
  keywords: [
    "find veterinarian near me",
    "vet near me",
    "find a vet online",
    "verified veterinarians",
    "pet shop near me",
    "pet store near me",
    "book vet appointment online",
    "trusted vet directory",
    "veterinarian Canada",
  ],
  alternates: { canonical: pageCanonical("/directory") },
  openGraph: {
    title: "Vet & Pet Shop Directory | MyPetBook",
    description:
      "Find verified veterinarians and pet shops near you. Read reviews and book appointments.",
  },
};

export default function DirectoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
