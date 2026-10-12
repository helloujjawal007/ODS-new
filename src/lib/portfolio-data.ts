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
    id: "finvantage",
    slug: "finvantage-portal",
    title: "Next.js Financial Intelligence Dashboard & Headless CMS",
    client: "FinVantage Global",
    industry: "Fintech & Wealth",
    category: "Web & SaaS",
    summary: "Re-engineered a slow legacy financial portal into a sub-second Next.js App Router platform with real-time portfolio tracking.",
    challenge: "The previous portal suffered from a 5.2s load time, 72% mobile bounce rate, and frequent server timeouts during market open hours.",
    solution: "Architected a decoupled frontend on Next.js edge runtime with ISR caching, WebSocket live ticker quotes, and Sanity headless CMS.",
    impactMetrics: [
      { value: "0.6s", label: "Average Page Load Time" },
      { value: "+184%", label: "Inbound Qualified Demo Requests" },
      { value: "99.99%", label: "Uptime During Market Open Surges" }
    ],
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "Sanity CMS", "Edge Network"],
    image: "/images/service_web_dev.jpg",
    featured: true
  },
  {
    id: "cloudsphere",
    slug: "cloudsphere-seo-overhaul",
    title: "Technical SEO & Programmatic Authority Architecture",
    client: "CloudSphere Security",
    industry: "Cybersecurity SaaS",
    category: "SEO & Growth",
    summary: "Conquered page-one Google rankings across 14 enterprise cybersecurity terms through topical clustering and rich schema implementation.",
    challenge: "Zero organic traffic acquisition for commercial keywords; crawled URLs were blocked by JavaScript hydration bottlenecks.",
    solution: "Eliminated rendering blocks with static pre-rendering, built 60 programmatic comparison pillar pages, and added comprehensive FAQ schema.",
    impactMetrics: [
      { value: "+420%", label: "Organic Search Impressions" },
      { value: "#1", label: "Google Rank for 14 Target Terms" },
      { value: "$280k", label: "Estimated Annual Ad-Spend Equivalent Saved" }
    ],
    tags: ["Technical SEO", "Topic Clusters", "JSON-LD Schema", "Programmatic SEO"],
    image: "/images/service_seo.jpg",
    featured: true
  },
  {
    id: "auramed",
    slug: "auramed-ios-telehealth",
    title: "SwiftUI Telehealth Application with Dynamic Island & Live Activities",
    client: "AuraMed Health",
    industry: "Digital Healthcare",
    category: "Mobile Apps",
    summary: "Designed and engineered an award-winning native iOS telehealth consultation app with Apple HealthKit and secure WebRTC video.",
    challenge: "Patients found appointment scheduling cumbersome; missed appointment rates were at 24% without lock-screen notifications.",
    solution: "Engineered a native Swift 6 and SwiftUI app with Live Activities appointment countdowns, FaceID vault, and one-tap doctor connect.",
    impactMetrics: [
      { value: "4.9★", label: "App Store User Rating" },
      { value: "-68%", label: "Reduction in Missed Consultations" },
      { value: "125,000+", label: "Active Monthly Telehealth Consultations" }
    ],
    tags: ["Swift 6", "SwiftUI", "Live Activities", "HealthKit", "WebRTC"],
    image: "/images/service_mobile_app.jpg",
    featured: true
  },
  {
    id: "urbanrider",
    slug: "urbanrider-cross-platform",
    title: "Cross-Platform Smart Fleet & Micro-Mobility App",
    client: "UrbanRider Fleet",
    industry: "Smart Urban Mobility",
    category: "Mobile Apps",
    summary: "Delivered a unified Flutter mobile application for iOS and Android in 7 weeks to power automated e-bike rentals across 12 cities.",
    challenge: "Strict summer launch deadline with insufficient budget to hire two independent native iOS and Android engineering teams.",
    solution: "Developed a single high-performance Flutter codebase with native Bluetooth lock BLE controllers, Mapbox vectors, and Apple/Google Pay.",
    impactMetrics: [
      { value: "7 Weeks", label: "Kickoff to Dual App Store Launch" },
      { value: "40%", label: "Total Engineering Budget Saved" },
      { value: "60 FPS", label: "Smooth Map & Vector Rendering" }
    ],
    tags: ["Flutter", "Dart", "Bluetooth BLE", "Mapbox", "Stripe Mobile"],
    image: "/images/portfolio_projects.jpg",
    featured: false
  },
  {
    id: "innotech",
    slug: "innotech-salesforce-lwc",
    title: "Enterprise Salesforce Quoting Engine & Automation Overhaul",
    client: "InnoTech Global Corp",
    industry: "Enterprise B2B Software",
    category: "CRM & Enterprise",
    summary: "Re-architected an unmaintainable legacy Salesforce org with reactive Lightning Web Components (LWC) and bulkified Apex services.",
    challenge: "Complex quoting required 22 minutes per deal and frequently crashed due to SOQL governor limit errors.",
    solution: "Rebuilt the CPQ quoting flow into a reactive Lightning Web Component backed by bulkified asynchronous Apex and Record-Triggered Flows.",
    impactMetrics: [
      { value: "72%", label: "Reduction in Quoting Cycle Time" },
      { value: "340 Hrs", label: "Sales Operations Time Saved Monthly" },
      { value: "0 Errors", label: "Governor Limit Breaches in Production" }
    ],
    tags: ["Salesforce LWC", "Apex Async", "Salesforce Flow", "REST APIs"],
    image: "/images/service_crm_salesforce.jpg",
    featured: true
  },
  {
    id: "zenith",
    slug: "zenith-product-design-system",
    title: "Design System & Modular Analytics Dashboard UX",
    client: "Zenith SaaS Suite",
    industry: "Productivity & BI",
    category: "Web & SaaS",
    summary: "Crafted a multi-brand Figma design system and high-retention analytics interface for a fast-growing B2B product management tool.",
    challenge: "High initial churn (68%) during free trials because users could not easily configure their custom analytics widgets.",
    solution: "Executed end-to-end user research, restructured information architecture, and created a component token system in Figma & Tailwind.",
    impactMetrics: [
      { value: "+210%", label: "Day-30 User Retention Rate" },
      { value: "3.5x", label: "Faster Account Activation" },
      { value: "100%", label: "Design Token Adoption Across Dev Team" }
    ],
    tags: ["Figma", "Design Systems", "UI/UX", "User Research", "Tailwind CSS"],
    image: "/images/about_team_studio.jpg",
    featured: false
  },
  {
    id: "aeterna-ecommerce",
    slug: "aeterna-luxury-ecommerce",
    title: "Shopify Plus & BigCommerce Omnichannel Store Architecture",
    client: "Aeterna Luxury Goods",
    industry: "Global DTC & Luxury Fashion",
    category: "E-Commerce",
    summary: "Architected a custom Shopify Plus & BigCommerce multi-storefront with sub-second page loads, custom 1-click checkout, and automated ERP inventory synchronization.",
    challenge: "Heavy WooCommerce legacy setup caused 4.2-second load times, 74% mobile cart abandonment, and frequent out-of-stock sync discrepancies during seasonal product drops.",
    solution: "Engineered a custom Shopify Plus Liquid/OS 2.0 theme integrated with BigCommerce multi-catalog API, automated Klaviyo retention flows, and instant sub-second cart drawer.",
    impactMetrics: [
      { value: "+310%", label: "Conversion Rate Uplift" },
      { value: "0.7s", label: "Mobile Checkout Speed" },
      { value: "$480k+", label: "Monthly Gross Merchandise Value (GMV)" }
    ],
    tags: ["Shopify Plus", "BigCommerce", "Liquid OS 2.0", "Next.js", "Klaviyo", "Recharge"],
    image: "/images/service_shopify_bigcommerce.jpg",
    featured: true
  }
];
