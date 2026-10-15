import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { pageCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How MyPetBook collects, uses, and protects your personal and pet-related data.",
  alternates: { canonical: pageCanonical("/privacy") },
};

  const PrivacyPage = () => {
  return (
    <div>
      <section className="gradient-hero pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <PageBreadcrumbs items={[{ label: "Privacy Policy" }]} />
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6 border border-white/10">
              Privacy Policy
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Your privacy is important to us. This page outlines our privacy
              practices.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
