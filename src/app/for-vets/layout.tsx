import type { Metadata } from "next";
import { pageCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Vet Telehealth & Practice Software for Clinics",
  description:
    "Grow your clinic with MyPetBook: veterinary telehealth, online vet consultations, appointment booking, digital pet records, and discovery by pet owners searching for a vet near them.",
  keywords: [
    "veterinary telehealth",
    "online vet consultation",
    "virtual vet visit",
    "vet practice software",
    "book vet appointment online",
    "verified veterinarians",
    "digital pet records",
    "veterinarian Canada",
  ],
  alternates: { canonical: pageCanonical("/for-vets") },
  openGraph: {
    title: "For Veterinarians | MyPetBook",
    description:
      "Join as a verified vet. Manage appointments, offer online consultations, grow your practice.",
  },
};

export default function ForVetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
