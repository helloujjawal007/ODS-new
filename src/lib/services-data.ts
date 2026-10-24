export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  themeColor: "cyan" | "emerald" | "purple" | "blue" | "amber";
  accentHex: string;
  problemPoints: { title: string; desc: string }[];
  deliverables: { title: string; desc: string; iconName: string }[];
  techStack: { name: string; category: string; badge: string }[];
  metrics: { value: string; label: string }[];
  process: { step: string; title: string; desc: string }[];
  caseStudy: {
    client: string;
    industry: string;
    challenge: string;
    solution: string;
    metric: string;
    metricLabel: string;
  };
  pricingModel: {
    startingAt: string;
    period: string;
    includes: string[];
  };
  faqs: { question: string; answer: string }[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    slug: "website-development",
    title: "High-Performance Website Development",
    shortTitle: "Web Development",
    category: "Engineering",
    tagline: "Ultra-fast Next.js & React architectures engineered for flawless Core Web Vitals, sub-second latency, and maximum conversion rates.",
    metaTitle: "Custom Website Development Services | Next.js & Full-Stack Agency",
    metaDescription: "Partner with premier Next.js & full-stack web development experts. We engineer responsive, SEO-optimized, accessible digital platforms that drive revenue.",
    heroImage: "/images/service_web_dev.jpg",
    themeColor: "cyan",
    accentHex: "#06b6d4",
    metrics: [
      { value: "99+", label: "Google Lighthouse Performance Score" },
      { value: "< 0.8s", label: "Average First Contentful Paint" },
      { value: "3.2x", label: "Average Conversion Rate Uplift" },
      { value: "100%", label: "Mobile & WCAG 2.2 AA Compliant" }
    ],
    problemPoints: [
      {
        title: "Slow, Bloated Legacy Sites",
        desc: "Outdated WordPress themes or heavy templates take 4+ seconds to load, bleeding 53% of mobile visitors before your hero section even renders."
      },
      {
        title: "Terrible Core Web Vitals",
        desc: "Layout shifts and high interaction latencies trigger Google ranking penalties, driving qualified organic traffic straight to your competitors."
      },
      {
        title: "Hard-to-Maintain Monoliths",
        desc: "Fragile codebases require constant plugin updates, break on version changes, and leave your brand vulnerable to critical security exploits."
      }
    ],
    deliverables: [
      {
        title: "Bespoke Next.js App Router Architecture",
        desc: "Server-side rendered and edge-cached static pages with zero client-side layout shifts and blazing fast navigation.",
        iconName: "Code2"
      },
      {
        title: "Interactive Micro-Interactions & 3D Elements",
        desc: "Modern visual polish with Framer Motion, smooth hover states, and immersive dark/light mode toggles.",
        iconName: "Sparkles"
      },
      {
        title: "Headless CMS Integration",
        desc: "Effortless content publishing workflows via Sanity, Contentful, or Strapi with live visual preview.",
        iconName: "Layers"
      },
      {
        title: "Automated CI/CD & Edge Hosting",
        desc: "Global edge CDN deployment with Vercel or AWS, instant rollbacks, and preview deployments for every pull request.",
        iconName: "Cloud"
      }
    ],
    techStack: [
      { name: "Next.js 16 (App Router)", category: "Framework", badge: "Core" },
      { name: "TypeScript", category: "Language", badge: "Type-Safe" },
      { name: "Tailwind CSS", category: "Styling", badge: "Modern" },
      { name: "Framer Motion", category: "Animation", badge: "Interactive" },
      { name: "Sanity.io", category: "Headless CMS", badge: "Content" },
      { name: "Node.js / Edge Runtime", category: "Backend", badge: "Scalable" },
      { name: "PostgreSQL / Prisma", category: "Database", badge: "Reliable" },
      { name: "Vercel / Cloudflare", category: "Cloud Edge", badge: "Infra" }
    ],
    process: [
      { step: "01", title: "Architecture & Wireframes", desc: "User journeys, technical blueprints, and headless data modeling." },
      { step: "02", title: "High-Fidelity UI Design", desc: "Interactive Figma design systems with component tokens and dark/light modes." },
      { step: "03", title: "Sprint-Based Engineering", desc: "Component-driven Next.js development with strict TypeScript linting." },
      { step: "04", title: "Core Web Vitals Tuning", desc: "Image optimization, font subsetting, script debulking, and Lighthouse 95+ audit." },
      { step: "05", title: "Launch & Monitoring", desc: "Zero-downtime DNS cutover, Google Search Console indexing, and real-user monitoring." }
    ],
    caseStudy: {
      client: "FinVantage Global",
      industry: "Fintech Enterprise",
      challenge: "Legacy portal loaded in 5.2s with a 72% bounce rate on paid campaign landing pages.",
      solution: "Engineered a headless Next.js architecture with edge routing and dynamic pricing calculators.",
      metric: "+184%",
      metricLabel: "Qualified demo requests within 60 days of launch"
    },
    pricingModel: {
      startingAt: "$3,500",
      period: "per project",
      includes: [
        "Complete bespoke design & responsive frontend",
        "Headless CMS integration & content migration",
        "Sub-1-second Core Web Vitals guarantee",
        "Technical SEO metadata & schema markup",
        "30 days post-launch warranty & training"
      ]
    },
    faqs: [
      {
        question: "Why do you recommend Next.js over traditional WordPress?",
        answer: "Next.js delivers unmatched performance through Server-Side Rendering (SSR) and Static Site Generation (SSG). It decouples frontend rendering from backend databases, eliminating the security vulnerabilities, slow load times, and fragile plugin dependencies common in WordPress."
      },
      {
        question: "Can our non-technical team update website copy and blog articles?",
        answer: "Yes, absolutely! We connect a modern headless CMS (such as Sanity or Contentful). Your team gets an intuitive visual editor with real-time preview, scheduling, and drag-and-drop page building without writing any code."
      },
      {
        question: "Do you guarantee a 90+ Google Lighthouse score?",
        answer: "Yes. Every website we launch is audited against Google's Core Web Vitals standards (LCP under 1.2s, CLS 0, INP under 100ms) across mobile and desktop devices."
      },
      {
        question: "How long does a custom web development project typically take?",
        answer: "Standard corporate websites usually take 3 to 5 weeks from kickoff to deployment. Complex platforms with customer portals, calculations, and CRM integrations range from 6 to 10 weeks."
      }
    ]
  },
  {
    id: "seo",
    slug: "seo",
    title: "Organic Growth & Technical SEO Services",
    shortTitle: "Search Engine Optimization",
    category: "Growth",
    tagline: "Data-driven SEO strategies that capture high-intent search queries, dominate SERP rankings, and compound qualified organic pipeline.",
    metaTitle: "Enterprise SEO Services & Technical Audits | Organic Growth Engineering",
    metaDescription: "Dominate Google search results with our technical SEO audits, topic cluster architecture, programmatic SEO, and authoritative link acquisition.",
    heroImage: "/images/service_seo.jpg",
    themeColor: "emerald",
    accentHex: "#10b981",
    metrics: [
      { value: "#1", label: "Rankings Secured for Target Keywords" },
      { value: "+380%", label: "Average Organic Traffic Growth (6 Mo)" },
      { value: "0 Error", label: "Core Web Vitals & Search Console Health" },
      { value: "100%", label: "White-Hat Search Engine Compliance" }
    ],
    problemPoints: [
      {
        title: "Invisible to Ready-to-Buy Searchers",
        desc: "Without programmatic keyword targeting, high-margin prospective clients never discover your domain when seeking urgent solutions."
      },
      {
        title: "Silent Technical Indexing Errors",
        desc: "Crawl budget wastage, canonical conflicts, missing schema, and JavaScript hydration failures block Googlebot from indexing your highest-value content."
      },
      {
        title: "Disjointed Keyword Guesswork",
        desc: "Publishing blog posts without semantic cluster architecture leads to keyword cannibalization and zero commercial ranking traction."
      }
    ],
    deliverables: [
      {
        title: "200+ Point Technical SEO & Crawl Audit",
        desc: "Deep inspection of robots.txt, sitemaps, canonical tags, rendering budgets, and structured data hierarchy.",
        iconName: "ShieldCheck"
      },
      {
        title: "Topic Cluster & Pillar Strategy",
        desc: "High-intent keyword grouping that establishes definitive topical authority across your core industry verticals.",
        iconName: "Network"
      },
      {
        title: "Schema.org & Rich Snippets Implementation",
        desc: "Comprehensive JSON-LD integration for FAQ, Organization, Service, Breadcrumbs, and Review rich cards in SERPs.",
        iconName: "FileCode"
      },
      {
        title: "Conversion-Focused On-Page Optimization",
        desc: "Meta descriptions, dynamic OpenGraph assets, semantic heading restructuring, and internal linking graph optimization.",
        iconName: "TrendingUp"
      }
    ],
    techStack: [
      { name: "Google Search Console", category: "Analytics", badge: "Google" },
      { name: "Ahrefs & Semrush", category: "Intelligence", badge: "Enterprise" },
      { name: "Screaming Frog", category: "Crawler", badge: "Technical" },
      { name: "Schema.org JSON-LD", category: "Microdata", badge: "Rich Results" },
      { name: "PageSpeed Insights API", category: "Core Vitals", badge: "Speed" },
      { name: "GA4 & Looker Studio", category: "BI Reporting", badge: "Dashboard" }
    ],
    process: [
      { step: "01", title: "Comprehensive Baseline Audit", desc: "Benchmarking current keyword rankings, crawl errors, and competitor gap analysis." },
      { step: "02", title: "Technical Infrastructure Fixes", desc: "Resolving server status codes, sitemaps, canonicals, and Core Web Vitals speed bottlenecks." },
      { step: "03", title: "Topical Authority Blueprint", desc: "Designing pillar pages and cluster topics with targeted commercial search intent." },
      { step: "04", title: "On-Page & Schema Integration", desc: "Injecting structured JSON-LD data and perfecting semantic internal link networks." },
      { step: "05", title: "Bi-Weekly Ranking Dashboards", desc: "Transparent tracking of organic impressions, SERP positions, and conversion attribution." }
    ],
    caseStudy: {
      client: "CloudSphere Security",
      industry: "Cybersecurity SaaS",
      challenge: "Stuck on page 3 for 40+ high-value enterprise cloud keywords with zero organic lead flow.",
      solution: "Executed technical sitemap restructure, programmatic glossary clusters, and schema optimization.",
      metric: "+420%",
      metricLabel: "Organic search impressions within 90 days, landing #1 for 14 primary terms"
    },
    pricingModel: {
      startingAt: "$2,000",
      period: "per month",
      includes: [
        "Full technical crawler audit & implementation",
        "Competitor gap & commercial keyword roadmap",
        "4 high-authority SEO cluster articles per month",
        "Rich snippet schema & metadata optimization",
        "Bi-weekly ranking reporting & executive calls"
      ]
    },
    faqs: [
      {
        question: "How long does it take to see tangible SEO results?",
        answer: "Technical fixes and indexing improvements often yield visibility jumps in 3 to 6 weeks. Significant organic keyword climb and inbound lead compounding typically mature between months 3 and 6."
      },
      {
        question: "Do you build or buy questionable backlinks?",
        answer: "Never. We adhere strictly to 100% white-hat Google Search Essentials guidelines. We earn authority through superior content, digital PR, technical excellence, and industry citations."
      },
      {
        question: "How do you track and report our return on investment?",
        answer: "We connect Google Search Console and GA4 with custom Looker Studio dashboards tracking keyword SERP positions, organic visitor sessions, and exact form submissions / pipeline generated."
      }
    ]
  },
  {
    id: "android-app",
    slug: "android-app-development",
    title: "Native Android App Development",
    shortTitle: "Android Apps",
    category: "Mobile",
    tagline: "High-performance native Android applications built with Kotlin and Jetpack Compose, delivering fluid 120Hz UI and Google Play excellence.",
    metaTitle: "Native Android App Development Company | Kotlin & Jetpack Compose",
    metaDescription: "Build top-rated native Android apps. We design and engineer secure, offline-first, Material You Android experiences optimized for every screen size.",
    heroImage: "/images/service_android_app.jpg",
    themeColor: "emerald",
    accentHex: "#10b981",
    metrics: [
      { value: "4.9★", label: "Average Play Store App Rating" },
      { value: "120 FPS", label: "Silky Smooth Hardware-Accelerated UI" },
      { value: "100%", label: "Google Play Store Launch Success" },
      { value: "99.9%", label: "Crash-Free User Sessions" }
    ],
    problemPoints: [
      {
        title: "Device Fragmentation Glitches",
        desc: "Apps that fail across different Android versions, display aspect ratios, and CPU chipsets suffer devastating 1-star reviews."
      },
      {
        title: "Battery & Memory Leaks",
        desc: "Poor background service handling triggers OS memory termination and rapid battery drainage, leading to instant uninstalls."
      },
      {
        title: "Strict Play Store Policy Rejections",
        desc: "Navigating Google Play console privacy disclosures, target API levels, and security verification delays app go-to-market."
      }
    ],
    deliverables: [
      {
        title: "Kotlin & Jetpack Compose Architecture",
        desc: "Modern reactive UI paradigm that drastically reduces boilerplate and powers fluid animations.",
        iconName: "Smartphone"
      },
      {
        title: "Offline-First Room & SQLite Sync",
        desc: "Instant data persistence and intelligent offline caching so users stay productive with zero connection.",
        iconName: "Database"
      },
      {
        title: "Hardware & Sensor Integration",
        desc: "Biometrics (Fingerprint/Face), BLE, NFC, GPS, camera processing, and push notifications.",
        iconName: "Cpu"
      },
      {
        title: "Play Console Release Management",
        desc: "App bundle optimization, staged rollouts, Play Integrity API, and Play Store Optimization (ASO).",
        iconName: "ShieldAlert"
      }
    ],
    techStack: [
      { name: "Kotlin", category: "Language", badge: "Official" },
      { name: "Jetpack Compose", category: "UI Engine", badge: "Modern" },
      { name: "Coroutines & Flow", category: "Async", badge: "Reactive" },
      { name: "Koin / Hilt D.I.", category: "Architecture", badge: "Clean" },
      { name: "Room DB", category: "Persistence", badge: "Offline" },
      { name: "Firebase Suite", category: "Cloud & Analytics", badge: "Realtime" }
    ],
    process: [
      { step: "01", title: "Device Matrix Specification", desc: "Defining screen breakpoint strategies and min-SDK target requirements." },
      { step: "02", title: "Material You Design System", desc: "Creating dynamic dark theme assets, accessibility contrast, and micro-haptics." },
      { step: "03", title: "Native Kotlin Architecture", desc: "Clean MVVM / MVI implementation with unit-tested business logic." },
      { step: "04", title: "Firebase Test Lab QA", desc: "Automated regression testing across dozens of physical Samsung, Pixel, and Xiaomi devices." },
      { step: "05", title: "Google Play Store Launch", desc: "Production release with App Bundle optimization and proactive crash monitoring." }
    ],
    caseStudy: {
      client: "TransLogix Driver",
      industry: "Logistics & Supply Chain",
      challenge: "Drivers in low-connectivity areas faced constant app crashes and lost freight delivery signatures.",
      solution: "Rebuilt as an offline-first Jetpack Compose app with background GPS queueing and instant camera scanning.",
      metric: "99.98%",
      metricLabel: "Crash-free session rate across 35,000 daily active drivers"
    },
    pricingModel: {
      startingAt: "$5,000",
      period: "per application",
      includes: [
        "Full native Kotlin codebase with Jetpack Compose",
        "Offline database sync & push notification setup",
        "Tablet and foldable display optimization",
        "Play Console setup & store listing deployment",
        "60 days post-launch warranty & telemetry"
      ]
    },
    faqs: [
      {
        question: "Why choose Native Kotlin over cross-platform for Android?",
        answer: "Native Kotlin provides 100% immediate access to newly released Android OS APIs, superior hardware-level performance for camera and BLE tasks, and the smallest possible app download footprint."
      },
      {
        question: "How do you handle Android fragmentation across devices?",
        answer: "We use Jetpack WindowManager adaptive layouts, dynamic resource vectors, and automated testing across Firebase Test Lab device farms to guarantee flawless rendering on phones, foldables, and tablets."
      }
    ]
  },
  {
    id: "ios-app",
    slug: "ios-app-development",
    title: "Premium iOS & iPadOS App Development",
    shortTitle: "iOS Apps",
    category: "Mobile",
    tagline: "Elegant, fluid, and secure iOS applications crafted with Swift and SwiftUI in uncompromising harmony with Apple Human Interface Guidelines.",
    metaTitle: "Custom iOS App Development Company | Swift & SwiftUI Agency",
    metaDescription: "Create award-winning iOS and iPadOS applications. We engineer elegant Swift and SwiftUI mobile experiences tailored for the Apple ecosystem.",
    heroImage: "/images/service_ios_app.jpg",
    themeColor: "purple",
    accentHex: "#8b5cf6",
    metrics: [
      { value: "SwiftUI", label: "State-of-the-Art Native Architecture" },
      { value: "4.9★", label: "App Store User Rating Standard" },
      { value: "100%", label: "App Store Review Approval" },
      { value: "0ms", label: "ProMotion 120Hz Animation Lag" }
    ],
    problemPoints: [
      {
        title: "Apple Human Interface Non-Compliance",
        desc: "Apps that don't feel inherently 'iOS native' suffer poor retention and rejection during strict Apple App Review."
      },
      {
        title: "Complex In-App Purchases & Subscriptions",
        desc: "Improper StoreKit 2 handling causes transaction drops, receipt validation loopholes, and revenue loss."
      },
      {
        title: "Underutilized Apple Ecosystem Features",
        desc: "Missing Dynamic Island, Live Activities, Home Screen widgets, and Apple Pay puts your app at a massive competitive disadvantage."
      }
    ],
    deliverables: [
      {
        title: "Swift 6 & SwiftUI Native Development",
        desc: "Modern concurrency with structured async/await, elegant declarative layouts, and glassmorphic depth.",
        iconName: "Apple"
      },
      {
        title: "Live Activities & Dynamic Island",
        desc: "Real-time lock screen updates and interactive Dynamic Island expansions for active user tasks.",
        iconName: "Compass"
      },
      {
        title: "StoreKit 2 & Apple Pay Integration",
        desc: "Frictionless in-app subscriptions, one-tap checkout, and secure family sharing workflows.",
        iconName: "CreditCard"
      },
      {
        title: "App Store Review Guarantee",
        desc: "Flawless compliance with privacy nutrition labels, App Tracking Transparency (ATT), and store guidelines.",
        iconName: "CheckCircle"
      }
    ],
    techStack: [
      { name: "Swift 6", category: "Language", badge: "Latest" },
      { name: "SwiftUI & Combine", category: "UI Engine", badge: "Native" },
      { name: "StoreKit 2", category: "Monetization", badge: "Apple IAP" },
      { name: "CoreData & SwiftData", category: "Storage", badge: "Encrypted" },
      { name: "WidgetKit", category: "Widgets", badge: "Dynamic" },
      { name: "TestFlight CI/CD", category: "Deployment", badge: "Apple" }
    ],
    process: [
      { step: "01", title: "Apple HIG User Experience Design", desc: "Crafting native navigation patterns, typography hierarchy, and haptic feedback." },
      { step: "02", title: "Modular SwiftUI Architecture", desc: "Component architecture with clean ViewModels and thread-safe data flow." },
      { step: "03", title: "Ecosystem Integrations", desc: "Apple Pay, Face ID Keychain authentication, and iCloud CloudKit sync." },
      { step: "04", title: "TestFlight Closed Beta", desc: "Beta testing with real iOS devices, measuring battery impact and frame rates." },
      { step: "05", title: "App Store Production Release", desc: "App Store Connect submission, screenshots localization, and launch support." }
    ],
    caseStudy: {
      client: "AuraMed Health",
      industry: "Digital Health & Telemedicine",
      challenge: "Needed a compliant, ultra-secure iOS app featuring FaceID, Apple HealthKit sync, and one-tap doctor video calls.",
      solution: "Engineered in SwiftUI with HealthKit authorization, Live Activities appointment countdowns, and WebRTC.",
      metric: "4.9★",
      metricLabel: "Rating across 12,000+ App Store reviews within 4 months"
    },
    pricingModel: {
      startingAt: "$5,000",
      period: "per application",
      includes: [
        "Native Swift & SwiftUI codebase",
        "Apple Pay & StoreKit 2 monetization",
        "Dynamic Island & Live Activity implementation",
        "TestFlight beta setup & App Store approval",
        "60 days post-launch technical support"
      ]
    },
    faqs: [
      {
        question: "Do you support the latest iOS versions and devices?",
        answer: "Yes, all our apps target the newest iOS versions, full ProMotion 120Hz displays, Dynamic Island, and iPadOS split-view capabilities."
      },
      {
        question: "Will you help us get approved in the Apple App Store?",
        answer: "Yes, we handle the entire App Store submission process, including App Privacy Nutrition labels, TestFlight distribution, and resolving any App Review inquiries until approved."
      }
    ]
  },
  {
    id: "cross-platform",
    slug: "cross-platform-app-development",
    title: "Cross-Platform App Development (Flutter & React Native)",
    shortTitle: "Cross-Platform Apps",
    category: "Mobile",
    tagline: "Single codebase, dual native performance. Ship simultaneously to iOS and Android at 40% reduced cost and 2x faster go-to-market speed.",
    metaTitle: "Cross-Platform Mobile App Development | Flutter & React Native",
    metaDescription: "Accelerate your launch with Flutter and React Native cross-platform apps. Single codebase, native 60+ FPS performance on iOS and Android.",
    heroImage: "/images/service_cross_platform.jpg",
    themeColor: "cyan",
    accentHex: "#06b6d4",
    metrics: [
      { value: "40%", label: "Development & Maintenance Cost Savings" },
      { value: "2x", label: "Faster Speed-to-Market" },
      { value: "95%+", label: "Shared Codebase Between iOS & Android" },
      { value: "60+ FPS", label: "Native Rendering Engine Performance" }
    ],
    problemPoints: [
      {
        title: "Double the Engineering Budget",
        desc: "Building two separate native codebases doubles your team size, maintenance costs, and QA timeline."
      },
      {
        title: "Feature Desynchronization",
        desc: "Features rolling out weeks apart between Android and iOS confuses users and disrupts unified marketing launches."
      },
      {
        title: "Subpar Web-View Wrappers",
        desc: "Outdated hybrid wrappers feel sluggish, have input delay, and disappoint modern mobile users."
      }
    ],
    deliverables: [
      {
        title: "Flutter (Dart) & React Native (Expo) Solutions",
        desc: "We pick the exact framework optimized for your specific product requirements, team skills, and roadmap.",
        iconName: "Code2"
      },
      {
        title: "Pixel-Identical Design Across Operating Systems",
        desc: "Unified UI experience while respecting platform-specific navigation idioms and gestures.",
        iconName: "Maximize2"
      },
      {
        title: "Native Bridge & Hardware Integration",
        desc: "Direct native plugins for camera, bluetooth, location, background push notifications, and biometric auth.",
        iconName: "Cpu"
      },
      {
        title: "Unified CI/CD Fastlane Pipeline",
        desc: "Single automated push deploys beta builds to both Apple TestFlight and Google Play Internal Track.",
        iconName: "GitPullRequest"
      }
    ],
    techStack: [
      { name: "Flutter & Dart", category: "Engine", badge: "Google" },
      { name: "React Native & Expo", category: "Engine", badge: "Meta" },
      { name: "TypeScript", category: "Language", badge: "Type-Safe" },
      { name: "Redux Toolkit / Zustand", category: "State", badge: "Predictable" },
      { name: "Fastlane", category: "Automation", badge: "CI/CD" },
      { name: "Supabase / Firebase", category: "Backend", badge: "Serverless" }
    ],
    process: [
      { step: "01", title: "Tech Selection (Flutter vs React Native)", desc: "Analyzing device needs, team capabilities, and animations to select the ideal engine." },
      { step: "02", title: "Universal Component Library", desc: "Building a shared design system that runs seamlessly on both iOS and Android." },
      { step: "03", title: "Single-Source Engineering", desc: "Writing unified business logic with native platform bridge overrides where needed." },
      { step: "04", title: "Simultaneous Dual-Platform QA", desc: "Automated regression testing across both physical iPhones and Android devices." },
      { step: "05", title: "Dual Store Deployment", desc: "Simultaneous launch on Apple App Store and Google Play with unified versioning." }
    ],
    caseStudy: {
      client: "UrbanRider Fleet",
      industry: "Smart Urban Mobility",
      challenge: "Needed to launch consumer bike-rental app on iOS and Android in under 8 weeks before summer season.",
      solution: "Built a production Flutter app with Mapbox integrations, Bluetooth lock unlocking, and Stripe payments.",
      metric: "7 Weeks",
      metricLabel: "From kickoff to simultaneous launch on App Store & Google Play"
    },
    pricingModel: {
      startingAt: "$4,500",
      period: "per application",
      includes: [
        "Single unified codebase for iOS and Android",
        "State management & REST/GraphQL API integration",
        "Push notifications, deep links, and analytics",
        "Simultaneous Apple & Google Play Store submission",
        "45 days post-launch warranty"
      ]
    },
    faqs: [
      {
        question: "Does a cross-platform app feel like a native app?",
        answer: "Yes! Flutter compiles directly to native ARM machine code, and React Native leverages genuine native platform UI components. Users cannot tell the difference when built by skilled engineers."
      },
      {
        question: "Should we choose Flutter or React Native?",
        answer: "Flutter is ideal for custom animations, heavy graphics, and 100% pixel-perfect uniformity. React Native is optimal if you already have a React web team and want to share web and mobile business logic."
      }
    ]
  },
  {
    id: "crm-integration",
    slug: "crm-management-integration",
    title: "CRM Management & Multi-System Integration",
    shortTitle: "CRM & Integrations",
    category: "Enterprise",
    tagline: "Synchronize leads, automate pipelines, and bridge your CRM with ERP, email marketing, and payment systems with zero data leaks.",
    metaTitle: "CRM Integration & Management Services | HubSpot, Zoho & Custom APIs",
    metaDescription: "Connect your CRM with your website, billing, and marketing stack. Expert CRM integration for HubSpot, Zoho, Pipedrive, and custom databases.",
    heroImage: "/images/service_crm_salesforce.jpg",
    themeColor: "blue",
    accentHex: "#3b82f6",
    metrics: [
      { value: "100%", label: "Real-Time Bi-Directional Data Sync" },
      { value: "18+ Hrs", label: "Weekly Manual Data Entry Eliminated" },
      { value: "0 Loss", label: "Zero Lead Drop-off Guarantee" },
      { value: "40+ Platforms", label: "Supported Native Connectors" }
    ],
    problemPoints: [
      {
        title: "Disconnected Data Silos",
        desc: "Sales reps, marketing teams, and support staff work out of conflicting spreadsheets, dropping hot enterprise leads."
      },
      {
        title: "Manual Copy-Pasting Errors",
        desc: "Relying on manual lead entry causes typo-ridden contacts, delayed follow-up times, and lost revenue opportunities."
      },
      {
        title: "Broken Zapier/Webhook Chains",
        desc: "Fragile no-code zaps fail silently during peak traffic spikes without error alerts, leaving customer records out of sync."
      }
    ],
    deliverables: [
      {
        title: "Real-Time Webhook & API Middleware",
        desc: "Custom resilient microservices with retry queues and deduplication that guarantee 100% delivery.",
        iconName: "Webhook"
      },
      {
        title: "HubSpot & Zoho Ecosystem Setup",
        desc: "Pipeline structuring, lifecycle stage definitions, automated email sequences, and lead scoring matrices.",
        iconName: "CheckSquare"
      },
      {
        title: "ERP & Billing Synchronization",
        desc: "Connecting your CRM directly with Stripe, QuickBooks, NetSuite, or Xero for instant contract invoicing.",
        iconName: "Receipt"
      },
      {
        title: "UTM Attribution & Marketing Tracking",
        desc: "Capturing Google Ads, LinkedIn Ads, and organic search sources directly into customer CRM cards.",
        iconName: "BarChart3"
      }
    ],
    techStack: [
      { name: "HubSpot API", category: "CRM", badge: "Certified" },
      { name: "Zoho CRM & Creator", category: "CRM", badge: "Partner" },
      { name: "Pipedrive / ActiveCampaign", category: "CRM", badge: "Automation" },
      { name: "Node.js / Python Webhooks", category: "Middleware", badge: "Custom" },
      { name: "Stripe Billing API", category: "Fintech", badge: "Payments" },
      { name: "Redis Message Queues", category: "Resilience", badge: "No Data Loss" }
    ],
    process: [
      { step: "01", title: "Data Architecture Mapping", desc: "Auditing all customer touchpoints, contact properties, and trigger workflows." },
      { step: "02", title: "Middleware Engineering", desc: "Building secure, token-authenticated API endpoints with validation and error retries." },
      { step: "03", title: "Legacy Data Cleansing & Migration", desc: "De-duplicating records, standardizing fields, and bulk migrating legacy spreadsheets." },
      { step: "04", title: "End-to-End Sandbox Simulation", desc: "Simulating high-volume lead submissions, edge-case payloads, and network drops." },
      { step: "05", title: "Go-Live & Team Enablement", desc: "Production cutover with staff training videos and workflow documentation." }
    ],
    caseStudy: {
      client: "Apex Wealth Advisory",
      industry: "Financial Advisory",
      challenge: "High net-worth website leads were sitting in an email inbox for 48 hours before being assigned to advisors.",
      solution: "Built automated lead enrichment and routing into Zoho CRM with instant SMS alerts to on-duty advisors.",
      metric: "< 4 Min",
      metricLabel: "Average lead response time down from 48 hours"
    },
    pricingModel: {
      startingAt: "$2,500",
      period: "per setup",
      includes: [
        "Complete CRM architecture design & pipeline build",
        "Resilient website-to-CRM API middleware with retries",
        "Lead scoring & automated notification triggers",
        "Data deduplication & legacy contact migration",
        "Staff onboarding session & 30 days support"
      ]
    },
    faqs: [
      {
        question: "Can you connect our custom website to our existing CRM?",
        answer: "Yes, we integrate any custom website or web app with HubSpot, Zoho, Salesforce, Pipedrive, or custom databases using official REST APIs and secure webhooks."
      },
      {
        question: "What happens if our CRM API goes down temporarily?",
        answer: "Our middleware includes resilient Redis queueing with exponential backoff retries. If the CRM is briefly unreachable, your lead submissions are safely stored and dispatched the second it comes back online."
      }
    ]
  },
  {
    id: "salesforce-support",
    slug: "salesforce-development-support",
    title: "Salesforce Development & Managed Support",
    shortTitle: "Salesforce Support",
    category: "Enterprise",
    tagline: "Certified Salesforce architects providing custom Lightning Web Components (LWC), Apex triggers, Flow automation, and 24/7 dedicated org support.",
    metaTitle: "Salesforce Development & Support Services | Certified Architects",
    metaDescription: "Maximize your Salesforce investment. Custom Apex, LWC development, Salesforce Flow automation, third-party integrations, and managed admin support.",
    heroImage: "/images/service_salesforce_support.jpg",
    themeColor: "blue",
    accentHex: "#3b82f6",
    metrics: [
      { value: "100%", label: "Certified Salesforce Developers" },
      { value: "45%", label: "Average Efficiency Increase in Sales Ops" },
      { value: "99.9%", label: "Apex Unit Test Coverage" },
      { value: "24/7", label: "Managed Support SLAs Available" }
    ],
    problemPoints: [
      {
        title: "Technical Debt & Spaghetti Apex Code",
        desc: "Over-engineered legacy triggers, hardcoded IDs, and unmaintained custom code cause governor limit errors that stall daily operations."
      },
      {
        title: "Clunky Classic UI Dragging Team Adoption",
        desc: "Sales reps resist using Salesforce because outdated page layouts require 15 clicks to log a single customer conversation."
      },
      {
        title: "High Full-Time In-House Architect Costs",
        desc: "Hiring a full-time senior Salesforce architect costs $180k+/year plus benefits, even when you only need ongoing maintenance and targeted sprints."
      }
    ],
    deliverables: [
      {
        title: "Custom Lightning Web Components (LWC)",
        desc: "Modern, reactive UI components that conform to Lightning Design System and streamline complex sales workflows.",
        iconName: "Zap"
      },
      {
        title: "Apex Automation & Batch Jobs",
        desc: "Optimized, bulkified Apex triggers, REST web services, and scheduled batch jobs that never breach governor limits.",
        iconName: "Code"
      },
      {
        title: "Salesforce Flow Architecture",
        desc: "Replacing deprecated Process Builders and Workflow Rules with lightning-fast screen flows and record-triggered flows.",
        iconName: "Workflow"
      },
      {
        title: "Managed Admin & Developer Support",
        desc: "Ongoing org health audits, user permissions management, security patch deployment, and release preview testing.",
        iconName: "Shield"
      }
    ],
    techStack: [
      { name: "Lightning Web Components (LWC)", category: "Frontend", badge: "Modern" },
      { name: "Apex (Async & Batch)", category: "Backend", badge: "Bulkified" },
      { name: "Salesforce Flow", category: "Automation", badge: "Declarative" },
      { name: "Sales Cloud & Service Cloud", category: "Platform", badge: "Core" },
      { name: "Salesforce DX & Git CI/CD", category: "DevOps", badge: "Enterprise" },
      { name: "SOQL & SOSL Optimization", category: "Querying", badge: "Fast" }
    ],
    process: [
      { step: "01", title: "Salesforce Org Health Assessment", desc: "Running code scanners, checking governor limit thresholds, and auditing user permission sets." },
      { step: "02", title: "Architecture Refactoring Plan", desc: "Prioritizing high-impact automation quick wins and code cleanup opportunities." },
      { step: "03", title: "Sprint-Based Development in Sandboxes", desc: "Developing LWC and Apex in dedicated scratch orgs with 90%+ unit test coverage." },
      { step: "04", title: "User Acceptance Testing (UAT)", desc: "Guided testing with your sales and operations leadership in staging environments." },
      { step: "05", title: "Production Deployment & Ongoing SLA", desc: "Seamless change set or DevOps Center deployment with proactive 24/7 org monitoring." }
    ],
    caseStudy: {
      client: "InnoTech Global Corp",
      industry: "B2B SaaS Enterprise",
      challenge: "Sales reps took 22 minutes to configure custom client quote contracts due to governor limit crashes.",
      solution: "Rebuilt the quoting engine into a reactive Lightning Web Component backed by bulkified Apex services.",
      metric: "72% Reduction",
      metricLabel: "In quoting cycle duration, freeing 340 sales rep hours per month"
    },
    pricingModel: {
      startingAt: "$2,000",
      period: "per month",
      includes: [
        "Dedicated Certified Salesforce Administrator & Developer",
        "40 hours of custom LWC, Flow, or Apex sprint tasks",
        "Quarterly governor limits & technical debt audit",
        "3 major Salesforce seasonal release impact reviews",
        "Dedicated Slack channel with 4-hour SLA"
      ]
    },
    faqs: [
      {
        question: "Can you help migrate our legacy Workflow Rules and Process Builders to Salesforce Flow?",
        answer: "Yes. Salesforce has retired Workflow Rules and Process Builders. We safely consolidate legacy automations into optimized, well-documented Record-Triggered Flows with zero business interruption."
      },
      {
        question: "Are your developers certified by Salesforce?",
        answer: "Yes, our team holds official credentials including Salesforce Certified Administrator, Platform Developer I & II, and Application Architect."
      }
    ]
  },
  {
    id: "ui-ux",
    slug: "ui-ux-design",
    title: "Product UI/UX Design & Design Systems",
    shortTitle: "UI/UX Design",
    category: "Design",
    tagline: "High-conversion, accessible digital interfaces and scalable Figma design systems crafted with psychological precision.",
    metaTitle: "UI/UX Design, Interactive Wireframing & Design Systems Agency",
    metaDescription: "Elevate your digital product with world-class UI/UX design. Interactive prototypes, design tokens, and user research that drives retention.",
    heroImage: "/images/service_ui_ux.jpg",
    themeColor: "amber",
    accentHex: "#f59e0b",
    metrics: [
      { value: "100%", label: "Interactive Prototype in Figma" },
      { value: "4.8x", label: "User Task Completion Speed" },
      { value: "WCAG AA", label: "Accessibility Contrast Standard" },
      { value: "0 Ambiguity", label: "Complete Developer Handoff Tokens" }
    ],
    problemPoints: [
      {
        title: "Confusing User Journeys",
        desc: "Users get frustrated trying to find key actions, resulting in high churn and low product trial activation."
      },
      {
        title: "Inconsistent Design Assets",
        desc: "Different developers using mismatched buttons, colors, and font sizes ruins brand authority and slows feature delivery."
      },
      {
        title: "Designing for Aesthetics, Not Usability",
        desc: "Pretty mockups that fail accessibility standards and are impossible to build efficiently in code."
      }
    ],
    deliverables: [
      {
        title: "Scalable Figma Design System",
        desc: "Variables, design tokens, light/dark mode components, and auto-layout frames ready for development.",
        iconName: "Palette"
      },
      {
        title: "Interactive Clickable Prototypes",
        desc: "Realistic prototypes for stakeholder alignment and user testing before writing a single line of code.",
        iconName: "MousePointerClick"
      },
      {
        title: "User Journey & Usability Research",
        desc: "Information architecture, wireframes, and friction-point reduction across critical conversion flows.",
        iconName: "Search"
      },
      {
        title: "Production Developer Handoff",
        desc: "Complete documentation with spacing tokens, responsive breakpoint states, and CSS snippet exports.",
        iconName: "FileSpreadsheet"
      }
    ],
    techStack: [
      { name: "Figma & FigJam", category: "Tooling", badge: "Primary" },
      { name: "Tailwind Token Architecture", category: "Handoff", badge: "CSS" },
      { name: "Protopie", category: "Micro-Interaction", badge: "Advanced" },
      { name: "Maze", category: "User Testing", badge: "Validation" }
    ],
    process: [
      { step: "01", title: "User Research & Discovery", desc: "Analyzing user behavior, competitor audits, and identifying drop-off friction." },
      { step: "02", title: "Information Architecture", desc: "Defining navigation hierarchy, user personas, and low-fidelity wireframes." },
      { step: "03", title: "High-Fidelity Visual Design", desc: "Applying brand aesthetics, dark/light themes, and responsive auto-layouts." },
      { step: "04", title: "Interactive Prototyping & Testing", desc: "Clickable prototypes validated with target users and revised based on feedback." },
      { step: "05", title: "Design System & Dev Handoff", desc: "Structured component library with exact token guidelines for frontend engineering." }
    ],
    caseStudy: {
      client: "Zenith SaaS Suite",
      industry: "Enterprise Collaboration",
      challenge: "Onboarding churn was 68% due to confusing navigation and cluttered dashboard metrics.",
      solution: "Redesigned the entire product experience into a clean modular dashboard with contextual step guidance.",
      metric: "+210%",
      metricLabel: "Day-30 user retention and 3.5x faster account activation"
    },
    pricingModel: {
      startingAt: "$3,000",
      period: "per project",
      includes: [
        "Complete UX wireframing & user flow architecture",
        "High-fidelity Figma UI design (Desktop + Mobile)",
        "Comprehensive component library with tokens",
        "Clickable interactive prototype for user testing",
        "Detailed developer handoff documentation"
      ]
    },
    faqs: [
      {
        question: "What files do you deliver at the end of the project?",
        answer: "You receive an organized Figma master file containing all responsive screens, a documented component design system with tokens, and clickable prototype links."
      },
      {
        question: "Can your team also code the designs into our Next.js or React app?",
        answer: "Yes! Because our UI designers work closely with our frontend engineers, we can seamlessly deliver both design and pixel-perfect Next.js / Tailwind code."
      }
    ]
  },
  {
    id: "shopify-bigcommerce",
    slug: "shopify-bigcommerce-development",
    title: "Shopify & BigCommerce Store Development",
    shortTitle: "Shopify & BigCommerce",
    category: "E-Commerce",
    tagline: "Custom Shopify Plus and BigCommerce storefronts engineered for sub-second page loads, frictionless 1-click checkouts, headless architectures, and maximum conversion rates.",
    metaTitle: "Shopify & BigCommerce Store Development Agency",
    metaDescription: "Partner with certified Shopify Plus and BigCommerce experts. We engineer custom Liquid themes, Stencil architectures, headless commerce, and ERP/CRM syncing.",
    heroImage: "/images/service_shopify_bigcommerce.jpg",
    themeColor: "emerald",
    accentHex: "#10b981",
    metrics: [
      { value: "+240%", label: "Average GMV Uplift Post-Migration" },
      { value: "< 0.9s", label: "Mobile Checkout Load Time" },
      { value: "99+", label: "Google PageSpeed on Shopify OS 2.0" },
      { value: "100%", label: "Multi-Storefront & ERP Sync Accuracy" }
    ],
    problemPoints: [
      {
        title: "Bloated Off-the-Shelf Themes",
        desc: "Generic marketplace themes loaded with 20+ conflicting apps drag your mobile speed down to 4+ seconds, costing millions in abandoned carts."
      },
      {
        title: "Inventory & Multi-Warehouse Desync",
        desc: "Out-of-sync catalog stock across multiple warehouses or brick-and-mortar ERPs leads to overselling, order cancellations, and frustrated customers."
      },
      {
        title: "High Checkout Abandonment",
        desc: "Clunky multi-step checkouts and poor mobile UX cause up to 74% of prospective buyers to abandon their purchase at the final step."
      }
    ],
    deliverables: [
      {
        title: "Custom Shopify OS 2.0 Theme Engineering",
        desc: "Hand-coded, lightweight Liquid themes adhering to modern modular section standards with zero app bloat and instant rendering.",
        iconName: "ShoppingBag"
      },
      {
        title: "BigCommerce Multi-Storefront (MSF)",
        desc: "Enterprise BigCommerce Stencil architecture with multi-region catalogs, multi-currency support, and B2B wholesale pricing portals.",
        iconName: "Globe"
      },
      {
        title: "Headless E-Commerce (Next.js)",
        desc: "Decoupled frontend architecture powered by Next.js Commerce and Shopify/BigCommerce GraphQL Storefront APIs for instant page loads.",
        iconName: "Code2"
      },
      {
        title: "1-Click Checkout & Cart Drawer UX",
        desc: "High-converting sticky slide-out cart drawers, dynamic product upsells, and accelerated checkout integrations (Shop Pay, Apple Pay, PayPal).",
        iconName: "Zap"
      },
      {
        title: "ERP, CRM & Warehouse Integration",
        desc: "Real-time bi-directional synchronization with Netsuite, SAP, Salesforce, Katana, and custom inventory APIs.",
        iconName: "Database"
      },
      {
        title: "Zero-Downtime Store Migration",
        desc: "Risk-free catalog, customer, order history, and 301 redirect migration from WooCommerce, Magento, or legacy custom stacks.",
        iconName: "ShieldCheck"
      }
    ],
    techStack: [
      { name: "Shopify Plus", category: "E-Commerce Engine", badge: "Plus Partner" },
      { name: "BigCommerce", category: "Enterprise Commerce", badge: "Certified Partner" },
      { name: "Liquid & Stencil", category: "Theme Engines", badge: "Native Architecture" },
      { name: "Next.js Commerce", category: "Headless Frontend", badge: "Sub-Second" },
      { name: "Storefront API", category: "GraphQL Integration", badge: "Edge Speed" },
      { name: "Klaviyo & Recharge", category: "Retention & Subscriptions", badge: "Ecosystem" }
    ],
    process: [
      { step: "01", title: "Catalog & Conversion Architecture", desc: "Auditing catalog taxonomy, customer journeys, checkout friction, and multi-channel inventory flows." },
      { step: "02", title: "Custom Theme & UX Prototyping", desc: "Designing responsive, brand-aligned desktop and mobile shopping experiences in Figma before clean code implementation." },
      { step: "03", title: "Integration, Apps & Checkout Tuning", desc: "Connecting payment gateways, ERPs, shipping calculators, and automated email/SMS marketing funnels." },
      { step: "04", title: "Speed Optimization & Go-Live QA", desc: "Tuning Core Web Vitals, executing 301 redirect validation, and orchestrating flawless cutover without downtime." }
    ],
    caseStudy: {
      client: "LuxeVibe Apparel",
      industry: "Global DTC Fashion",
      challenge: "Legacy WooCommerce site suffered from 4.2s page loads, crashing during seasonal flash sales, and losing 68% of mobile shoppers.",
      solution: "Replatformed to custom Shopify Plus with high-performance Liquid OS 2.0 sections, sub-second slide cart, and automated Klaviyo flows.",
      metric: "+310%",
      metricLabel: "E-Commerce Conversion Rate Uplift"
    },
    pricingModel: {
      startingAt: "$4,000",
      period: "Fixed Project Scope",
      includes: [
        "Custom Shopify / BigCommerce Theme",
        "Mobile-First UX & Cart Optimization",
        "ERP / Inventory / CRM Integration",
        "Zero-Downtime Data Migration",
        "90-Day Post-Launch Warranty"
      ]
    },
    faqs: [
      {
        question: "Can you build both Shopify and BigCommerce stores?",
        answer: "Yes! We specialize in both platforms. We build custom Shopify (including Shopify Plus) and BigCommerce stores, choosing the platform that best fits your business model—Shopify for consumer DTC agility and brand customization, or BigCommerce for complex multi-storefront, B2B wholesale pricing, and zero transaction fees."
      },
      {
        question: "Can you migrate our existing store from WooCommerce or Magento?",
        answer: "Absolutely. We specialize in seamless, zero-downtime migrations. We safely migrate your complete product catalog, customer accounts, order history, and ensure 100% of your SEO ranking authority is preserved using comprehensive 301 redirect mappings."
      },
      {
        question: "Do you build custom themes or use pre-made templates?",
        answer: "We build bespoke, lightweight themes from scratch using Shopify Online Store 2.0 or BigCommerce Stencil. This guarantees your store loads in under 1 second, avoids third-party code bloat, and is 100% tailored to your brand aesthetics and conversion goals."
      },
      {
        question: "Can you integrate our store with our ERP, CRM, or warehouse?",
        answer: "Yes. We build robust, real-time API integrations connecting your Shopify or BigCommerce store with ERPs (NetSuite, SAP), CRMs (Salesforce, HubSpot), and third-party logistics/warehouse management systems."
      }
    ]
  },
  {
    id: "plugins-extensions",
    slug: "plugins-extensions-development",
    title: "Custom Plugins & Extensions Development",
    shortTitle: "Plugins & Extensions",
    category: "Extensions",
    tagline: "Custom Chrome & browser extensions, Shopify app extensions, WordPress plugins, and workflow automation add-ons built with enterprise security, sub-second execution, and modern APIs.",
    metaTitle: "Custom Plugins & Browser Extension Development Agency",
    metaDescription: "Partner with expert extension developers. We build Manifest V3 Chrome extensions, Shopify Theme App Extensions, WordPress plugins, and SaaS add-ons.",
    heroImage: "/images/service_plugins_extensions.jpg",
    themeColor: "purple",
    accentHex: "#a855f7",
    metrics: [
      { value: "100k+", label: "Active Users Scaled Across Extensions" },
      { value: "100%", label: "Chrome Store & Shopify App Review Approval" },
      { value: "< 15ms", label: "Background Worker Execution Latency" },
      { value: "V3", label: "Modern Manifest V3 Security Compliant" }
    ],
    problemPoints: [
      {
        title: "Manifest V2 Deprecation & Store Rejections",
        desc: "Google Chrome and Edge are deprecating Manifest V2. Unmigrated extensions fail security audits and get pulled from the web store."
      },
      {
        title: "Third-Party App Bloat & Performance Lag",
        desc: "Over-relying on generic apps injects bloated external scripts, exposing sensitive API credentials and killing web page performance."
      },
      {
        title: "Manual, Inefficient Business Workflows",
        desc: "Your internal operations team wastes dozens of hours weekly manually cross-referencing and copying data across SaaS portals and internal ERPs."
      }
    ],
    deliverables: [
      {
        title: "Manifest V3 Chrome & Edge Extensions",
        desc: "High-performance browser extensions using modern Service Workers, Declarative Net Request rules, and lightweight React/TypeScript popups.",
        iconName: "Puzzle"
      },
      {
        title: "Shopify Theme & Admin App Extensions",
        desc: "Custom Shopify CLI extensions, checkout post-purchase UI, and admin action triggers that integrate seamlessly into merchant backends.",
        iconName: "ShoppingBag"
      },
      {
        title: "Custom WordPress & WooCommerce Plugins",
        desc: "Secure, object-oriented PHP & REST API plugins with zero performance overhead, clean admin settings, and automated database migrations.",
        iconName: "Code2"
      },
      {
        title: "Secure Authentication & API Gateways",
        desc: "Enterprise OAuth2, JWT token vaulting, secure backend proxies, and encrypted local storage preventing credential leaks.",
        iconName: "ShieldCheck"
      },
      {
        title: "Automated Data Scraping & Workflow Sync",
        desc: "Context-aware DOM injectors, background polling, and webhook broadcasters connecting external web pages to your central databases.",
        iconName: "Zap"
      },
      {
        title: "Store Submission & Update Pipeline",
        desc: "End-to-end guidance through Chrome Web Store, Microsoft Edge, and Shopify App Store compliance reviews with CI/CD release pipelines.",
        iconName: "CheckCircle2"
      }
    ],
    techStack: [
      { name: "Manifest V3", category: "Extension Engine", badge: "Standards" },
      { name: "TypeScript", category: "Core Logic", badge: "Type-Safe" },
      { name: "React 19", category: "Popup UI", badge: "Sub-Second" },
      { name: "Shopify CLI", category: "E-Commerce Apps", badge: "Certified" },
      { name: "WebExtensions API", category: "Browser Runtime", badge: "Cross-Browser" },
      { name: "Service Workers", category: "Background Tasks", badge: "Low Memory" }
    ],
    process: [
      { step: "01", title: "API Scope & Security Architecture", desc: "Defining background worker scopes, permission boundaries, and sandbox security compliance." },
      { step: "02", title: "Lightweight UI/UX Design", desc: "Crafting intuitive popup drawers, options pages, and contextual floating badges in Figma." },
      { step: "03", title: "Service Worker & Token Engineering", desc: "Implementing background event listeners, secure storage vaulting, and bi-directional API endpoints." },
      { step: "04", title: "Store Submission & QA Readiness", desc: "Validating privacy policies, executing automated end-to-end tests, and steering through official store review." }
    ],
    caseStudy: {
      client: "Omnichannel Commerce Suite",
      industry: "Retail Automation & SaaS",
      challenge: "Store managers were spending 14 hours weekly manually copying pricing and stock status between their custom ERP and Shopify stores.",
      solution: "Engineered a Manifest V3 browser extension and Shopify App Extension with automated background price scraping and 1-click inventory overrides.",
      metric: "92%",
      metricLabel: "Reduction in manual catalog maintenance labor"
    },
    pricingModel: {
      startingAt: "$2,000",
      period: "Fixed Project Scope",
      includes: [
        "Full Manifest V3 / Store Compliance Architecture",
        "Custom Popup UI & Background Workers",
        "Secure OAuth2 / API Token Storage",
        "Chrome / Shopify Store Review Guidance",
        "60-Day Post-Launch Maintenance & Bug Fixes"
      ]
    },
    faqs: [
      {
        question: "Can you build extensions that work on both Chrome and Edge?",
        answer: "Yes! Modern Chrome and Microsoft Edge both run on the Chromium engine. We build cross-browser compatible WebExtensions adhering strictly to Manifest V3 standards."
      },
      {
        question: "Can you build private internal extensions for our team only?",
        answer: "Absolutely. We build both public store-listed extensions and private enterprise extensions that can be distributed internally via Google Workspace Admin or zipped enterprise deployments."
      },
      {
        question: "Can you build custom Shopify App Extensions?",
        answer: "Yes. We build custom Shopify apps, Theme App Extensions (which inject zero bloat into client stores), and Admin UI extensions using the latest Shopify CLI and App Bridge standards."
      },
      {
        question: "Do you help with Chrome Web Store and Shopify App Store approval?",
        answer: "Yes! We structure your code, permissions, and privacy disclosures to pass strict Chrome Web Store and Shopify App Store reviews on the very first submission."
      }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
