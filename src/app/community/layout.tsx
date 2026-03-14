import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join the MyPetBook community. Share moments, get advice, and connect with pet lovers and experts worldwide.",
  openGraph: {
    title: "Community | MyPetBook",
    description:
      "Share moments and connect with pet lovers and experts worldwide.",
  },
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
