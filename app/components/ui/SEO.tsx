"use client";
import Script from "next/script";

export default function SEO() {
  const siteUrl = "https://beadersafrica.com";
  const logoUrl = "/logo-1.png";

  return (
    <>
      {/* Organization Schema */}
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            url: siteUrl,
            logo: `${siteUrl}${logoUrl}`,
            name: "Beaders Africa",
            alternateName: [
              "Beaders Africa Marketplace",
              "Beaders Academy",
              "Beaders Africa Community",
            ],
            description:
              "Africa’s digital home for bead makers, suppliers, and buyers. A marketplace, community, and academy empowering millions of artisans.",
            sameAs: [
              "https://www.instagram.com/beadersafrica",
              "https://www.facebook.com/beadersafrica",
              "https://twitter.com/beadersafrica",
              "https://www.linkedin.com/company/beadersafrica",
            ],
          }),
        }}
      />

      {/* Website Schema */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: siteUrl,
            name: "Beaders Africa",
            description:
              "A unified platform for bead makers and sellers across Africa. Buy, sell, learn, and connect with creatives in the bead industry.",
            potentialAction: {
              "@type": "SearchAction",
              target: `${siteUrl}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* Local Business / Professional Service Schema */}
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Beaders Africa",
            url: siteUrl,
            logo: `${siteUrl}${logoUrl}`,
            image: `${siteUrl}${logoUrl}`,
            description:
              "Beaders Africa provides an online marketplace, craft training, and community support for bead makers across Africa.",
            areaServed: [
              "Nigeria",
              "Ghana",
              "Kenya",
              "South Africa",
              "Uganda",
              "Tanzania",
              "All of Africa",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              email: "support@beadersafrica.com",
              availableLanguage: ["English"],
            },
            sameAs: [
              "https://www.instagram.com/beadersafrica",
              "https://www.facebook.com/beadersafrica",
              "https://twitter.com/beadersafrica",
              "https://www.linkedin.com/company/beadersafrica",
            ],
          }),
        }}
      />
    </>
  );
}
