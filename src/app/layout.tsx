import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import ConditionalLayout from "@/components/ConditionalLayout";
import { JsonLd } from "@/components/JsonLd";
import { primaryKeywords } from "@/lib/seo";

const Toaster = dynamic(
  () => import("@/components/ui/sonner").then((m) => ({ default: m.Toaster })),
  { ssr: false }
);

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mypetbook.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MyPetBook – Free Pet Health App | Find Vets Near You",
    template: "%s | MyPetBook",
  },
  description:
    "Free all-in-one pet care app for owners, vets, and pet shops. Track vaccinations, manage digital pet records, find a veterinarian near you, book online vet consultations, and shop trusted pet products.",
  keywords: [...primaryKeywords],
  authors: [{ name: "MyPetBook" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "MyPetBook",
    title: "MyPetBook – Free Pet Health App | Find Vets Near You",
    description:
      "Track pet health, find verified vets near you, book online consultations, and join a pet community—free to start.",
    images: [{ url: "/opengraph.png", width: 1200, height: 630, alt: "MyPetBook – Free Pet Health App" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyPetBook – Free Pet Health App | Find Vets Near You",
    description:
      "Track pet health, find verified vets near you, book online consultations, and join a pet community—free to start.",
    images: ["/opengraph.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.variable} font-nunito antialiased overflow-x-hidden`}>
        <JsonLd />
        <Providers>
          <ConditionalLayout>{children}</ConditionalLayout>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
