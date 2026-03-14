import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import ConditionalLayout from "@/components/ConditionalLayout";
import { JsonLd } from "@/components/JsonLd";

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
    default: "MyPetBook – Pet Community App",
    template: "%s | MyPetBook",
  },
  description:
    "Your ultimate pet community app connecting pet owners, veterinary doctors, and pet shopkeepers in one beautiful platform.",
  keywords: ["pet", "community", "veterinary", "pet shop", "pet owners"],
  authors: [{ name: "MyPetBook" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "MyPetBook",
    title: "MyPetBook – Pet Community App",
    description:
      "Your ultimate pet community app connecting pet owners, veterinary doctors, and pet shopkeepers in one beautiful platform.",
    images: [{ url: "/opengraph.png", width: 1200, height: 630, alt: "MyPetBook – Pet Community App" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyPetBook – Pet Community App",
    description:
      "Your ultimate pet community app connecting pet owners, veterinary doctors, and pet shopkeepers in one beautiful platform.",
    images: ["/opengraph.png"],
  },
  alternates: { canonical: siteUrl },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.variable} font-nunito antialiased`}>
        <JsonLd />
        <Providers>
          <ConditionalLayout>{children}</ConditionalLayout>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
