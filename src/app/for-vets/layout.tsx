import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Veterinarians",
  description:
    "Join MyPetBook as a verified vet. Manage appointments, offer online consultations, and grow your practice with pet owners who trust you.",
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
