import type { Metadata } from "next";
import { pageCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pet Community App – Share Tips, Stories & Advice",
  description:
    "Join the MyPetBook pet community app. Share pet stories, get care advice from owners and experts, and connect with dog and cat lovers worldwide.",
  keywords: [
    "pet community app",
    "pet owner community",
    "dog and cat care tips",
    "pet care platform",
    "pet lovers network",
  ],
  alternates: { canonical: pageCanonical("/community") },
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
