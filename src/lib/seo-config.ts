export const SITE_CONFIG = {
  name: "Online Digital Solution",
  legalName: "Online Digital Solution",
  url: "https://onlinedigitalsolution.com",
  description: "Global online digital engineering agency delivering high-performance Next.js web applications, custom Shopify & BigCommerce stores, native mobile apps, custom plugins & browser extensions, and technical SEO worldwide.",
  keywords: [
    "online digital solution",
    "shopify store development agency",
    "bigcommerce development services",
    "custom chrome extension developers",
    "shopify app extension developers",
    "custom wordpress plugin development",
    "global web development agency",
    "custom Next.js web developers",
    "remote mobile app development",
    "technical SEO agency",
    "React Native and Flutter developers",
    "CRM and Salesforce integrations",
    "high-performance web engineering"
  ],
  author: "Online Digital Solution Engineering",
  foundingDate: "2021",
  targetMarkets: "Worldwide / Global (100% Online Delivery)",
  deliveryMode: "100% Online Global Digital Delivery",
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
