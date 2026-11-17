export const siteUrl = "https://intellogi.com";

export const siteName = "Intellogi Technologies";

export const siteDescription =
  "Intellogi Technologies is the technology partner for government, UN and humanitarian programmes: requirement, architecture, delivery, operation and planned handover. London and Hyderabad.";

/**
 * Add the company's public profiles here (LinkedIn company page, Companies
 * House, Clutch, UNGM…). Search engines use these to confirm the entity.
 */
export const sameAs: string[] = [
  "https://find-and-update.company-information.service.gov.uk/company/15973922",
];

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  legalName: "Intellogi Technologies Limited",
  alternateName: ["Intellogi", "Intellogi Technologies Ltd"],
  url: siteUrl,
  logo: `${siteUrl}/intellogi-logo.png`,
  description: siteDescription,
  email: "nihal@intellogi.com",
  foundingDate: "2014",
  identifier: {
    "@type": "PropertyValue",
    propertyID: "UK Companies House",
    value: "15973922",
  },
  founder: { "@type": "Person", name: "Nihal Mirza", jobTitle: "Director" },
  employee: [
    { "@type": "Person", name: "Nihal Mirza", jobTitle: "Director, United Kingdom" },
    { "@type": "Person", name: "Tarun Aellaboina", jobTitle: "Director, India" },
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "86 Copal House, 25 Minnie Baldock Street",
      addressLocality: "London",
      postalCode: "E16 1DT",
      addressCountry: "GB",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "14/B, Greenland Colony, Madhava Reddy Colony, Gachibowli",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500032",
      addressCountry: "IN",
    },
  ],
  areaServed: ["United Kingdom", "Sudan", "East Africa", "Africa", "India", "Worldwide"],
  knowsAbout: [
    "Early warning systems",
    "Humanitarian information systems",
    "Grant management and donor compliance",
    "Sanctions screening",
    "Government digital services",
    "Programme technology delivery",
    "Data platforms and reporting",
    "Build-operate-transfer",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "business enquiries",
    email: "nihal@intellogi.com",
    availableLanguage: ["English"],
  },
  sameAs,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  alternateName: "Intellogi",
  url: siteUrl,
  publisher: { "@id": `${siteUrl}/#organization` },
};
