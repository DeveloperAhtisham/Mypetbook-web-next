const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mypetbook.app";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MyPetBook",
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  description:
    "Your ultimate pet community app connecting pet owners, veterinary doctors, and pet shopkeepers in one beautiful platform.",
  sameAs: [
    "https://twitter.com/mypetbook",
    "https://www.facebook.com/mypetbook",
    "https://www.linkedin.com/company/mypetbook",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@mypetbook.com",
    availableLanguage: "English",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MyPetBook",
  url: siteUrl,
  description:
    "Your ultimate pet community app connecting pet owners, veterinarians, and pet shopkeepers.",
  publisher: {
    "@type": "Organization",
    name: "MyPetBook",
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/icon.png`,
    },
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/directory?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
