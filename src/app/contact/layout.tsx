import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with MyPetBook. General inquiries, vet registration, and pet shop partnership – we'd love to hear from you.",
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
