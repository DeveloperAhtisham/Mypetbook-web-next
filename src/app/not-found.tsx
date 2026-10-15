import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist on MyPetBook.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-muted/40 px-4">
      <div className="text-center max-w-md">
        <p className="text-sm font-heading font-bold uppercase tracking-wider text-secondary mb-3">
          Error 404
        </p>
        <h1 className="mb-4 text-4xl md:text-5xl font-heading font-black text-foreground">
          Page not found
        </h1>
        <p className="mb-8 text-muted-foreground leading-relaxed">
          That link may be broken or the page may have moved. Try the home page
          or explore features, vets, and our community.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-coral py-2.5 px-6 text-sm text-center">
            Return Home
          </Link>
          <Link
            href="/contact"
            className="btn-outline-primary py-2.5 px-6 text-sm text-center"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
