import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vet & Pet Shop Directory",
  description:
    "Find verified veterinarians and pet shops near you. Read reviews, compare ratings, and book appointments.",
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
