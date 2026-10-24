export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: "Web & SaaS" | "Mobile Apps" | "SEO & Growth" | "CRM & Enterprise" | "E-Commerce";
  summary: string;
  challenge: string;
  solution: string;
  impactMetrics: { value: string; label: string }[];
  tags: string[];
  image: string;
  featured: boolean;
}

export const PORTFOLIO_PROJECTS: CaseStudy[] = [
  {
    id: "wealth-dashboard",
    slug: "finvantage-portal",
    title: "Financial Portfolio Dashboard & Headless CMS",
    client: "Private Wealth Firm (2024)",
    industry: "Financial Services",
    category: "Web & SaaS",
    summary: "Re-engineered a slow legacy portal into a sub-second Next.js platform with real-time portfolio analytics and Sanity CMS.",
    challenge: "The previous portal suffered from a 4.8s initial load time, mobile layout shifts, and frequent connection drops during market hours.",
    solution: "Architected a decoupled Next.js App Router application with static generation for static pages, WebSocket streaming for live quotes, and Sanity CMS.",
    impactMetrics: [
      { value: "0.8s", label: "Average Page Load Time" },
      { value: "+44%", label: "Inbound Qualified Inquiries" },
      { value: "99.9%", label: "Production Uptime" }
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS"],
    image: "/images/service_web_dev.jpg",
    featured: true
  },
  {
    id: "saas-seo-architecture",
    slug: "cloudsphere-seo-overhaul",
    title: "Technical SEO & Documentation Architecture",
    client: "Cloud Infrastructure SaaS (2024)",
    industry: "Enterprise Software",
    category: "SEO & Growth",
    summary: "Rebuilt the marketing and documentation site architecture with static edge pre-rendering and rich structured data.",
    challenge: "Zero organic search visibility for commercial terms; documentation pages were rendered client-side and blocked Google indexing.",
    solution: "Eliminated rendering bottlenecks with static pre-rendering, implemented comprehensive JSON-LD schemas, and established a modular topic cluster.",
    impactMetrics: [
      { value: "+160%", label: "Organic Search Impressions" },
      { value: "48", label: "Target Terms on Page 1" },
      { value: "0.00", label: "Cumulative Layout Shift (CLS)" }
    ],
    tags: ["Technical SEO", "Topic Clusters", "JSON-LD Schema", "Next.js"],
    image: "/images/service_seo.jpg",
    featured: true
  },
  {
    id: "telehealth-ios-app",
    slug: "auramed-ios-telehealth",
    title: "Native iOS Telehealth Consultation App",
    client: "Telehealth Clinic (2025)",
    industry: "Healthcare",
    category: "Mobile Apps",
    summary: "Designed and engineered a native iOS patient consultation app with Apple HealthKit sync and WebRTC video consultations.",
    challenge: "Patients found appointment scheduling confusing; missed appointment rates were at 24% without lock-screen notifications.",
    solution: "Engineered a native Swift 6 and SwiftUI app with Live Activities appointment countdowns and one-tap doctor connect.",
    impactMetrics: [
      { value: "6 Weeks", label: "Kickoff to TestFlight" },
      { value: "-28%", label: "Reduction in Missed Consultations" },
      { value: "4.8★", label: "Average App Store Rating" }
    ],
    tags: ["Swift 6", "SwiftUI", "HealthKit", "WebRTC"],
    image: "/images/service_mobile_app.jpg",
    featured: true
  },
  {
    id: "mobility-flutter-app",
    slug: "urbanrider-cross-platform",
    title: "Cross-Platform Smart Fleet & Dispatch App",
    client: "Urban Mobility Operator (2024)",
    industry: "Transportation & Fleet",
    category: "Mobile Apps",
    summary: "Delivered a unified Flutter mobile application for iOS and Android in 7 weeks to power vehicle rentals and fleet dispatch.",
    challenge: "Strict summer launch timeline with insufficient budget to hire two independent native iOS and Android engineering teams.",
    solution: "Developed a single Flutter codebase with native Bluetooth BLE lock controllers, Mapbox vectors, and Apple/Google Pay.",
    impactMetrics: [
      { value: "7 Weeks", label: "Kickoff to App Store Launch" },
      { value: "1 Codebase", label: "iOS & Android in Flutter" },
      { value: "60 FPS", label: "Smooth Map Navigation" }
    ],
    tags: ["Flutter", "Dart", "Bluetooth BLE", "Mapbox"],
    image: "/images/portfolio_projects.jpg",
    featured: false
  },
  {
    id: "salesforce-cpq-overhaul",
    slug: "innotech-salesforce-lwc",
    title: "Salesforce Quoting Flow & Automation Rebuild",
    client: "Hardware Distributor (2025)",
    industry: "B2B Distribution",
    category: "CRM & Enterprise",
    summary: "Re-architected an unmaintainable legacy Salesforce org with reactive Lightning Web Components (LWC) and bulkified Apex services.",
    challenge: "Complex quoting required 20+ minutes per deal and frequently crashed due to SOQL governor limit errors.",
    solution: "Rebuilt the quoting flow into a reactive Lightning Web Component backed by asynchronous Apex and Record-Triggered Flows.",
    impactMetrics: [
      { value: "65%", label: "Faster Quoting Cycle" },
      { value: "240 Hrs", label: "Monthly Ops Time Saved" },
      { value: "0 Errors", label: "Governor Limit Breaches" }
    ],
    tags: ["Salesforce LWC", "Apex Async", "Salesforce Flow", "REST APIs"],
    image: "/images/service_crm_salesforce.jpg",
    featured: true
  },
  {
    id: "product-analytics-design",
    slug: "zenith-product-design-system",
    title: "Modular Analytics Interface & Figma Design System",
    client: "Productivity SaaS (2025)",
    industry: "Productivity Software",
    category: "Web & SaaS",
    summary: "Crafted a multi-brand Figma design system and high-retention analytics interface for a fast-growing B2B product management tool.",
    challenge: "High trial churn because users could not easily configure their analytics dashboard widgets.",
    solution: "Executed user research, restructured information architecture, and created a component token system in Figma & Tailwind.",
    impactMetrics: [
      { value: "40+", label: "Figma Component Tokens" },
      { value: "3x", label: "Faster UI Feature Releases" },
      { value: "100%", label: "WCAG Contrast Compliance" }
    ],
    tags: ["Figma", "Design Systems", "UI/UX", "Tailwind CSS"],
    image: "/images/about_team_studio.jpg",
    featured: false
  },
  {
    id: "apparel-shopify-store",
    slug: "aeterna-luxury-ecommerce",
    title: "Custom Shopify Plus Theme & Instant Checkout",
    client: "Specialty Apparel Brand (2024)",
    industry: "Direct-to-Consumer",
    category: "E-Commerce",
    summary: "Built a custom Shopify OS 2.0 theme with sub-second page loads, custom cart drawer, and automated inventory synchronization.",
    challenge: "Heavy WooCommerce legacy setup caused 4-second load times and high mobile cart abandonment during new product drops.",
    solution: "Engineered a custom Shopify Liquid OS 2.0 theme with clean modular sections, automated Klaviyo flows, and instant sub-second cart drawer.",
    impactMetrics: [
      { value: "0.9s", label: "Mobile Product Page Speed" },
      { value: "+38%", label: "Checkout Completion Rate" },
      { value: "0 Sync Lag", label: "Real-Time Inventory Sync" }
    ],
    tags: ["Shopify Plus", "Liquid OS 2.0", "Klaviyo", "Next.js"],
    image: "/images/service_shopify_bigcommerce.jpg",
    featured: true
  }
];
