import type { Metadata } from "next";
import { pageCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us – Support, Vets & Shop Partners",
  description:
    "Get in touch with MyPetBook. General inquiries, vet registration, and pet shop partnership – we would love to hear from you.",
  alternates: { canonical: pageCanonical("/contact") },
  openGraph: {
    title: "Contact Us | MyPetBook",
    description:
      "Get in touch with MyPetBook for inquiries, vet registration, or shop partnership.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
