import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/sonner";

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
  },
  twitter: {
    card: "summary_large_image",
    title: "MyPetBook – Pet Community App",
    description:
      "Your ultimate pet community app connecting pet owners, veterinary doctors, and pet shopkeepers in one beautiful platform.",
  },
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
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
