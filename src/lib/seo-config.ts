const siteUrl = 
  process.env.NEXT_PUBLIC_SITE_URL || 
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : null) || 
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) || 
  "https://onlinedigitalsolution.com";

export const SITE_CONFIG = {
  name: "Cloud Consultancy",
  legalName: "Cloud Consultancy",
  url: siteUrl,
  description: "We build cloud systems, websites, Shopify stores, and apps for growing businesses. Based in Kolkata, working with clients worldwide.",
  author: "Cloud Consultancy",
  foundingDate: "2021",
  targetMarkets: "Worldwide / Global",
  deliveryMode: "Remote digital engineering team based in Kolkata",
  contact: {
    email: "team.onlinedigitalsolution@gmail.com",
    phone: "+91 9142590800",
    phoneDisplay: "+91 91425 90800",
    whatsapp: "919142590800",
    address: "Salt Lake Tech Hub, Sector V",
    city: "Kolkata",
    state: "West Bengal",
    zip: "700091",
    country: "India"
  },
  social: {
    twitter: "https://twitter.com/onlinedigitalsol",
    linkedin: "https://linkedin.com/company/onlinedigitalsolution",
    github: "https://github.com/onlinedigitalsolution"
  }
};

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": SITE_CONFIG.name,
    "legalName": SITE_CONFIG.legalName,
    "url": SITE_CONFIG.url,
    "logo": `${SITE_CONFIG.url}/images/hero_digital_tech.jpg`,
    "description": SITE_CONFIG.description,
    "email": SITE_CONFIG.contact.email,
    "telephone": SITE_CONFIG.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE_CONFIG.contact.address,
      "addressLocality": SITE_CONFIG.contact.city,
      "addressRegion": SITE_CONFIG.contact.state,
      "postalCode": SITE_CONFIG.contact.zip,
      "addressCountry": SITE_CONFIG.contact.country
    },
    "sameAs": [
      SITE_CONFIG.social.twitter,
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.github
    ],
    "priceRange": "$$$$"
  };
}

export function getServiceJsonLd(service: {
  title: string;
  tagline: string;
  slug: string;
  heroImage: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "name": service.title,
    "description": service.tagline,
    "provider": {
      "@type": "ProfessionalService",
      "name": SITE_CONFIG.name,
      "url": SITE_CONFIG.url
    },
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.title
          }
        }
      ]
    }
  };
}

export function getFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${SITE_CONFIG.url}${item.url}`
    }))
  };
}
