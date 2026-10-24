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
    clientFeedback: {
      quote: string;
      author: string;
      role: string;
      timeInProduction: string;
    };
    productionStats: { label: string; value: string }[];
  };
  pricingModel: {
    startingAt: string;
    period: string;
    includes: string[];
  };
  maintenanceScope: {
    warrantyDays: string;
    slaResponseTime: string;
    monitoringFrequency: string;
    features: string[];
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
        title: "Fragile Maintenance & Security Risks",
        desc: "Fragile codebases require endless manual plugin updates, break on minor version changes, and leave your brand exposed to security exploits."
      }
    ],
    deliverables: [
      {
        title: "Bespoke Next.js App Router Architecture",
        desc: "Server-side rendered and edge-cached static pages with zero client-side layout shifts and blazing fast navigation.",
        iconName: "Code2"
      },
      {
        title: "Interactive Micro-Interactions & Motion",
        desc: "Modern visual polish with smooth hover states, responsive layouts, and accessible dark/light mode tokens.",
        iconName: "Sparkles"
      },
      {
        title: "Headless CMS Integration",
        desc: "Effortless content publishing workflows via Sanity, Contentful, or Strapi with live visual preview and role-based permissions.",
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
      { name: "Sanity.io / Contentful", category: "Headless CMS", badge: "Content" },
      { name: "Node.js / Edge Runtime", category: "Backend", badge: "Scalable" },
      { name: "PostgreSQL / Prisma", category: "Database", badge: "Reliable" },
      { name: "AWS & Vercel Edge", category: "Cloud Edge", badge: "Infra" },
      { name: "Docker", category: "Containerization", badge: "DevOps" }
    ],
    process: [
      { step: "01", title: "Architecture & Blueprints", desc: "User journeys, technical data schemas, and API contracts." },
      { step: "02", title: "High-Fidelity UI Design", desc: "Interactive Figma design systems with component tokens." },
      { step: "03", title: "Sprint-Based Engineering", desc: "Component-driven Next.js development with strict TypeScript linting." },
      { step: "04", title: "Core Web Vitals Tuning", desc: "Image optimization, font subsetting, script debulking, and Lighthouse 95+ audit." },
      { step: "05", title: "Launch & Continuous Maintenance", desc: "Zero-downtime DNS cutover, real-user monitoring, and ongoing SLA retainers." }
    ],
    caseStudy: {
      client: "FinVantage Global",
      industry: "Fintech Enterprise",
      challenge: "Legacy portal loaded in 5.2s with a 72% bounce rate on paid campaign landing pages and frequent unmonitored server crashes.",
      solution: "Engineered a headless Next.js architecture with edge routing, dynamic pricing calculators, and continuous 24/7 uptime monitoring.",
      metric: "+184%",
      metricLabel: "Qualified demo requests within 60 days of launch",
      clientFeedback: {
        quote: "The Next.js architecture has been in live production for 12 months with 100% uptime and zero regressions. Our organic signups doubled because pages load in under 600ms globally, and our internal developers love the clean TypeScript types and documentation.",
        author: "Julian Vance",
        role: "VP of Product Engineering",
        timeInProduction: "12+ Months in Live Production"
      },
      productionStats: [
        { label: "Production Uptime", value: "99.99%" },
        { label: "First Contentful Paint", value: "0.6s" },
        { label: "Lighthouse Mobile", value: "99/100" },
        { label: "Zero-Downtime Releases", value: "32" }
      ]
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
    maintenanceScope: {
      warrantyDays: "30-Day Zero-Defect Warranty",
      slaResponseTime: "< 15 Min Critical Incident SLA",
      monitoringFrequency: "60-Second Real-Time Heartbeats",
      features: [
        "24/7 synthetic uptime & endpoint latency monitoring",
        "Monthly Next.js, Node.js, and package security updates",
        "Google Core Web Vitals performance regression alerts",
        "Edge CDN cache invalidation and SSL certificate management",
        "Guaranteed monthly sprint hours for ongoing feature enhancements"
      ]
    },
    faqs: [
      {
        question: "Do you provide ongoing website maintenance after launch?",
        answer: "Yes, absolutely. Every project includes a 30-day post-launch warranty covering any defects or regressions. Beyond that, over 80% of our clients retain us for monthly continuous maintenance, including 24/7 uptime monitoring, monthly security patch updates, Core Web Vitals speed guardrails, and dedicated engineering hours for new features."
      },
      {
        question: "Why do you recommend Next.js over traditional WordPress?",
        answer: "Next.js delivers unmatched performance through Server-Side Rendering (SSR) and Static Site Generation (SSG). It decouples frontend rendering from backend databases, eliminating the security vulnerabilities, slow load times, and fragile plugin dependencies common in WordPress."
      },
      {
        question: "Who owns the source code, design files, and cloud accounts?",
        answer: "You do—100%. We believe in zero vendor lock-in. All git repositories, Figma design system files, database schemas, and cloud deployment environments (AWS, Vercel, Supabase) are registered in your name and handed over in full on Day 1."
      },
      {
        question: "Can our non-technical team update website copy and blog articles?",
        answer: "Yes. We connect an intuitive headless CMS (such as Sanity, Contentful, or Strapi). Your marketing team gets an intuitive visual editor with real-time preview, scheduled publishing, and drag-and-drop page building without writing any code."
      },
      {
        question: "Do you guarantee a 90+ Google Lighthouse score?",
        answer: "Yes. Every website we build is audited against Google's Core Web Vitals standards (LCP under 1.2s, CLS 0, INP under 100ms) across real mobile and desktop devices before zero-downtime production deployment."
      },
      {
        question: "What is your emergency response SLA if our site experiences an outage?",
        answer: "For clients on our monthly maintenance retainers, we provide a guaranteed sub-15 minute response SLA for P1 critical incidents. Our 24/7 synthetic monitors alert our lead on-call engineers the moment an anomaly is detected."
      },
      {
        question: "Can you take over and maintain an existing website built by another team?",
        answer: "Yes. We regularly inherit legacy codebases. We perform an initial architectural audit, resolve technical debt, upgrade outdated packages, configure automated CI/CD pipelines, and onboard your site into our continuous maintenance program."
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
        title: "Invisible on High-Intent Commercial Searches",
        desc: "Your potential customers are searching for solutions your business provides, but your competitors occupy all top 3 positions."
      },
      {
        title: "Search Console Crawl Errors & Indexing Blocks",
        desc: "JavaScript rendering traps, broken canonicals, and duplicate pages prevent Googlebot from indexing your highest-converting landing pages."
      },
      {
        title: "Traffic That Never Converts into Pipeline",
        desc: "Low-intent informational traffic consumes server bandwidth without generating qualified demo requests or e-commerce purchases."
      }
    ],
    deliverables: [
      {
        title: "Deep Technical Crawler & Core Vitals Audit",
        desc: "Log file analysis, render budget optimization, canonical auditing, and server response tuning to ensure complete indexation.",
        iconName: "Search"
      },
      {
        title: "Commercial Topic Cluster Architecture",
        desc: "Semantic pillar and cluster content hierarchies mapped to buyer intent stages to establish domain topical authority.",
        iconName: "Network"
      },
      {
        title: "Programmatic Schema & Rich Results",
        desc: "Automated JSON-LD schemas (Service, FAQ, Article, Organization) engineered to win Google rich snippets.",
        iconName: "Code"
      },
      {
        title: "Competitive Gap & Authority Roadmap",
        desc: "Reverse engineering competitor backlink profiles and high-converting keyword gaps to capture search share.",
        iconName: "TrendingUp"
      }
    ],
    techStack: [
      { name: "Google Search Console", category: "Diagnostics", badge: "Core" },
      { name: "Ahrefs Enterprise", category: "Competitive Intel", badge: "Research" },
      { name: "Screaming Frog SEO Spider", category: "Crawler", badge: "Audit" },
      { name: "Semrush", category: "Keyword Intel", badge: "Strategy" },
      { name: "JSON-LD Structured Data", category: "Schema", badge: "Semantic" },
      { name: "Google Analytics 4 (GA4)", category: "Attribution", badge: "Analytics" },
      { name: "BigQuery / SQL", category: "Data Warehousing", badge: "Scale" }
    ],
    process: [
      { step: "01", title: "Comprehensive Crawler Audit", desc: "Diagnostic crawl of every URL to uncover indexation barriers." },
      { step: "02", title: "Commercial Gap Analysis", desc: "Targeting high-intent search queries where competitors win traffic." },
      { step: "03", title: "Information Architecture", desc: "Restructuring URL hierarchies and internal link distribution." },
      { step: "04", title: "Schema & On-Page Engineering", desc: "Injecting structured JSON-LD data and semantic metadata." },
      { step: "05", title: "Continuous Monitoring & Reporting", desc: "Bi-weekly tracking of impressions, rankings, and pipeline attribution." }
    ],
    caseStudy: {
      client: "CloudSphere Security",
      industry: "Cybersecurity SaaS",
      challenge: "Stuck on page 3 for 40+ high-value enterprise cloud keywords with zero organic lead flow and widespread Google Search Console crawl errors.",
      solution: "Executed technical sitemap restructure, programmatic glossary clusters, and rich snippet schema optimization.",
      metric: "+420%",
      metricLabel: "Organic search impressions within 90 days, landing #1 for 14 primary terms",
      clientFeedback: {
        quote: "After trying two generic marketing agencies that only gave us PDF reports, Cloud Consultancy actually rewrote our internal linking and JSON-LD schemas. Within 90 days, 14 of our core commercial keywords hit Google Page 1, and our qualified demo requests quadrupled.",
        author: "Sophia Lin",
        role: "Head of Growth",
        timeInProduction: "10+ Months Active Compounding"
      },
      productionStats: [
        { label: "Page 1 Commercial Terms", value: "14" },
        { label: "Search Console Crawl Errors", value: "0" },
        { label: "Organic Pipeline Growth", value: "+420%" },
        { label: "Core Web Vitals Pass Rate", value: "100%" }
      ]
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
    maintenanceScope: {
      warrantyDays: "Ongoing Ranking Retention",
      slaResponseTime: "Same-Day Technical Response",
      monitoringFrequency: "Continuous Crawler Telemetry",
      features: [
        "Weekly Google Search Console crawl anomaly triage",
        "Core Web Vitals latency auditing on target landing pages",
        "Competitor keyword gap & content expansion roadmaps",
        "Programmatic schema & structured data maintenance",
        "Bi-weekly executive pipeline & SERP reporting"
      ]
    },
    faqs: [
      {
        question: "Do you provide ongoing monthly SEO maintenance and monitoring?",
        answer: "Yes. Search engine optimization is an ongoing discipline, not a one-time project. Our monthly SEO retainers actively monitor algorithm shifts, patch indexing anomalies in Google Search Console, refresh content against competitor moves, and audit Core Web Vitals to maintain top SERP positions."
      },
      {
        question: "How long does it take to see tangible SEO results?",
        answer: "Technical fixes, sitemap re-indexing, and schema wins frequently yield visibility jumps in 3 to 6 weeks. Significant organic keyword climbs to Page 1 and inbound pipeline compounding typically mature between months 3 and 6."
      },
      {
        question: "Do you use white-hat, Google-compliant SEO methods?",
        answer: "Exclusively 100% white-hat. We strictly adhere to Google Search Essentials guidelines. We never use spammy automated links or private blog networks that could trigger algorithmic penalties."
      },
      {
        question: "How do you integrate SEO changes directly into our codebase?",
        answer: "Unlike consulting agencies that simply email you audit spreadsheets, our engineers can directly implement canonical tags, JSON-LD schemas, OpenGraph metadata, and server redirects into your Next.js, Shopify, or WordPress repositories."
      },
      {
        question: "How do you track whether organic search traffic converts into revenue?",
        answer: "We configure GA4 event attribution, Google Tag Manager goals, and CRM webhook tracking so you can track organic visitors straight to completed demo requests or e-commerce purchases."
      },
      {
        question: "What happens when Google rolls out a core algorithm update?",
        answer: "Our team continuously monitors Google's search status dashboard. When an update occurs, we audit our client sites against changes, analyze volatility, and proactively refine architecture before drops happen."
      },
      {
        question: "Who owns the content, schema, and research created during the engagement?",
        answer: "You own 100% of all keyword research, content briefs, articles, and schema code. We provide complete transparent access to all spreadsheets and analytics dashboards."
      }
    ]
  },
  {
    id: "android-dev",
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
        title: "Fragmented Android Hardware Performance",
        desc: "Poorly optimized apps stutter and overheat across diverse screen sizes, chipsets, and manufacturer Android skins."
      },
      {
        title: "Offline Sync Failures & Battery Drain",
        desc: "Unoptimized background network polling and database lockups drain user batteries and leave critical data unsynced."
      },
      {
        title: "Google Play Policy Rejections & Crashes",
        desc: "Missing target SDK requirements and unhandled edge crashes trigger low store ratings and account suspension warnings."
      }
    ],
    deliverables: [
      {
        title: "Declarative Jetpack Compose UI",
        desc: "Modern reactive Android architecture supporting Material You dynamic theming and fluid 120Hz animations.",
        iconName: "Smartphone"
      },
      {
        title: "Offline-First Room SQLite Architecture",
        desc: "Local-first data persistence with automated background synchronization and zero data loss on network drops.",
        iconName: "Database"
      },
      {
        title: "Hardware & Sensor Integration",
        desc: "Native camera, BLE, biometric authentication, GPS location tracking, and Bluetooth peripheral communication.",
        iconName: "Cpu"
      },
      {
        title: "CI/CD & Automated Play Console Deployment",
        desc: "Fastlane build pipelines with automated ProGuard code shrinking, unit tests, and staged production rollouts.",
        iconName: "Cloud"
      }
    ],
    techStack: [
      { name: "Kotlin 2.0", category: "Language", badge: "Core" },
      { name: "Jetpack Compose", category: "UI Toolkit", badge: "Modern" },
      { name: "Coroutines & Flow", category: "Concurrency", badge: "Reactive" },
      { name: "Room SQLite", category: "Persistence", badge: "Offline" },
      { name: "Hilt / Koin", category: "Dependency Injection", badge: "Architecture" },
      { name: "Retrofit / Ktor", category: "Networking", badge: "Fast" },
      { name: "Firebase / Crashlytics", category: "Telemetry", badge: "Stability" }
    ],
    process: [
      { step: "01", title: "Device Matrix & Specs", desc: "Defining target SDKs, minimum API levels, and hardware support." },
      { step: "02", title: "Material 3 Wireframes", desc: "Prototyping responsive layouts across phones, foldables, and tablets." },
      { step: "03", title: "Clean Architecture Sprints", desc: "MVVM/MVI implementation with pure Kotlin and strict test coverage." },
      { step: "04", title: "Hardware Benchmarking", desc: "Memory profiling, battery drain analysis, and frame-rate audits." },
      { step: "05", title: "Play Store Release & SLAs", desc: "Staged rollout, Google Play policy review, and ongoing maintenance." }
    ],
    caseStudy: {
      client: "LogiFleet Mobility",
      industry: "Logistics & Transportation",
      challenge: "Legacy hybrid app froze and dropped driver location data on budget Android devices across 1,200 commercial delivery vans.",
      solution: "Engineered a native Kotlin and Jetpack Compose app with offline-first Room persistence and automated BLE telematics sync.",
      metric: "99.94%",
      metricLabel: "Crash-free user sessions across 14 distinct smartphone models",
      clientFeedback: {
        quote: "The Jetpack Compose app glides at 120 FPS even on budget devices used by our logistics drivers. Cloud Consultancy's proactive maintenance handles every Google Play target API requirement and Android OS update well in advance.",
        author: "Marcus Thorne",
        role: "Head of Mobile Operations",
        timeInProduction: "14+ Months Live on Play Store"
      },
      productionStats: [
        { label: "Google Play Store Rating", value: "4.9★" },
        { label: "Crash-Free Sessions", value: "99.9%" },
        { label: "Hardware Frame Rate", value: "120 FPS" },
        { label: "Supported Device Models", value: "2,400+" }
      ]
    },
    pricingModel: {
      startingAt: "$4,500",
      period: "per project",
      includes: [
        "Complete native Android application in Kotlin",
        "Responsive UI across phone and tablet screens",
        "Offline caching & background synchronization",
        "Google Play Store publishing & review handling",
        "30-day post-launch warranty and bug fixes"
      ]
    },
    maintenanceScope: {
      warrantyDays: "30-Day Launch Defect Warranty",
      slaResponseTime: "< 15 Min SLA for Critical Crashes",
      monitoringFrequency: "Real-Time Firebase Crashlytics",
      features: [
        "Target SDK & Google Play policy compliance reviews",
        "Proactive Android OS version upgrade compatibility",
        "Offline database sync & background job monitoring",
        "Dependency security patch management",
        "Regular Play Store release pipeline management"
      ]
    },
    faqs: [
      {
        question: "Do you offer ongoing maintenance for Android apps on the Play Store?",
        answer: "Yes. Google Play introduces new target SDK level mandates and policy updates annually. Our Android maintenance retainers ensure your app stays fully compliant, crash-free across new Android versions, and optimized with regular bug fixes and telemetry audits."
      },
      {
        question: "Why build a native Android app in Kotlin instead of a web wrapper?",
        answer: "Native Kotlin apps compile straight to native bytecode, unlocking silky-smooth 120Hz frame rates, instant hardware access (Bluetooth, GPS, Camera), and true offline SQLite persistence without web view sluggishness."
      },
      {
        question: "How do you test across thousands of different Android devices?",
        answer: "We test on real physical hardware devices across popular manufacturers (Samsung, Google Pixel, Motorola, Xiaomi) and utilize cloud-based device testing labs to benchmark memory usage and frame rates."
      },
      {
        question: "Do you handle the entire Google Play Store submission process?",
        answer: "Yes. We configure app signing keys, write privacy policy declarations, set up target age ratings, and handle communication with Google review teams until public launch."
      },
      {
        question: "Will our app work when the user has no internet connection?",
        answer: "Yes. We architect all native apps with an offline-first philosophy using Room database. Data is saved locally instantly and queued for synchronization as soon as connectivity resumes."
      },
      {
        question: "Who owns the Android source code and release signing keys?",
        answer: "You own 100% of the repository, documentation, and cryptographic keystore files. We hand everything over with full build instructions."
      },
      {
        question: "What is your turnaround time if a critical Android crash occurs in production?",
        answer: "For retained clients, critical crashes are flagged via real-time Crashlytics alerts. We maintain a sub-15 minute response SLA and deploy hotfixes via staged rollout on Google Play."
      }
    ]
  },
  {
    id: "ios-dev",
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
      { value: "< 50ms", label: "Touch Latency & 120Hz ProMotion" },
      { value: "100%", label: "App Store Approval Track Record" }
    ],
    problemPoints: [
      {
        title: "Apple App Store Rejections & Review Delays",
        desc: "Incomplete privacy manifests, non-compliant in-app purchase setups, or UI bugs delay revenue-generating product launches by weeks."
      },
      {
        title: "Sluggish, Non-Native UI Feel",
        desc: "Web wrappers lack Apple's native momentum scrolling, haptic feedback, and dynamic type support, frustrating iOS users."
      },
      {
        title: "Memory Leaks & Rapid Battery Consumption",
        desc: "Poor retain-cycle management and unoptimized background workers trigger app terminations and negative App Store reviews."
      }
    ],
    deliverables: [
      {
        title: "Bespoke Swift 6 & SwiftUI Codebase",
        desc: "Modern reactive iOS architecture supporting iOS 18+, Dynamic Island, Home Screen widgets, and ProMotion displays.",
        iconName: "Smartphone"
      },
      {
        title: "Secure Apple Ecosystem Integration",
        desc: "Seamless integration with Apple Pay, Sign in with Apple, HealthKit, CloudKit, and Keychain secure enclave storage.",
        iconName: "Shield"
      },
      {
        title: "High-Performance Offline Cache",
        desc: "SwiftData and CoreData architectures delivering instant app launches and offline document editing.",
        iconName: "Database"
      },
      {
        title: "Automated TestFlight & App Store CI/CD",
        desc: "Continuous integration pipelines delivering automated beta builds to stakeholders on every git push.",
        iconName: "Cloud"
      }
    ],
    techStack: [
      { name: "Swift 6", category: "Language", badge: "Native" },
      { name: "SwiftUI", category: "UI Framework", badge: "Modern" },
      { name: "SwiftData / CoreData", category: "Persistence", badge: "Offline" },
      { name: "Combine / Async-Await", category: "Concurrency", badge: "Fast" },
      { name: "StoreKit 2", category: "In-App Purchases", badge: "Monetization" },
      { name: "XCTest", category: "Automated Testing", badge: "Quality" },
      { name: "Fastlane / Xcode Cloud", category: "CI/CD", badge: "Automation" }
    ],
    process: [
      { step: "01", title: "Apple HIG Alignment", desc: "Wireframing with Apple Human Interface Guidelines and typography." },
      { step: "02", title: "Interactive Prototype", desc: "Clickable iOS prototypes with haptic feedback and gestures." },
      { step: "03", title: "Native Swift Development", desc: "Modular architecture with strict memory profiling and zero leaks." },
      { step: "04", title: "TestFlight Beta Sprints", desc: "Internal and external beta distribution with automated crash logging." },
      { step: "05", title: "App Store Launch & Retainer", desc: "Expedited review handling, release cutover, and maintenance support." }
    ],
    caseStudy: {
      client: "AuraMed Health",
      industry: "Healthcare & Telehealth",
      challenge: "Legacy patient app had 24% missed appointments due to confusing booking and lacked iOS lock screen notifications.",
      solution: "Built a native Swift 6 and SwiftUI app with Live Activities appointment countdowns, HealthKit sync, and WebRTC video.",
      metric: "6 Weeks",
      metricLabel: "Kickoff to TestFlight release, achieving a 4.9★ rating on the App Store",
      clientFeedback: {
        quote: "Cloud Consultancy took our telehealth concept to TestFlight in 6 weeks with full Apple HealthKit compliance. In production, our crash rate is virtually 0%, and our patients frequently praise the fluid SwiftUI animations. Their continuous maintenance handles every annual iOS beta with ease.",
        author: "Dr. Elena Rostova",
        role: "Chief Medical Officer",
        timeInProduction: "8+ Months Live on App Store"
      },
      productionStats: [
        { label: "App Store User Rating", value: "4.9★" },
        { label: "Crash-Free Rate", value: "99.98%" },
        { label: "Time to TestFlight", value: "6 Weeks" },
        { label: "Apple HIG Compliance", value: "100%" }
      ]
    },
    pricingModel: {
      startingAt: "$4,500",
      period: "per project",
      includes: [
        "Native Swift & SwiftUI codebase",
        "iPhone & iPad universal layout support",
        "Sign in with Apple & Apple Pay integration",
        "App Store submission & approval guarantee",
        "30-day post-launch warranty & monitoring"
      ]
    },
    maintenanceScope: {
      warrantyDays: "30-Day App Store Launch Warranty",
      slaResponseTime: "< 15 Min SLA for P1 Bugs",
      monitoringFrequency: "Real-Time Telemetry & Xcode Metrics",
      features: [
        "Annual iOS / iPadOS beta compatibility audits",
        "Apple App Store Guideline & privacy manifest compliance",
        "HealthKit & biometric API security patch management",
        "SwiftUI animation tuning & memory leak profiling",
        "Continuous TestFlight and App Store build distribution"
      ]
    },
    faqs: [
      {
        question: "Do you maintain our iOS app after it is approved on the App Store?",
        answer: "Yes. Apple releases major iOS updates every autumn, alongside ongoing privacy and SDK mandates throughout the year. Our maintenance retainers test your app on developer betas months in advance, patch deprecated APIs, and deploy updates so your users experience zero disruptions."
      },
      {
        question: "Do you guarantee App Store approval?",
        answer: "Yes. We have a 100% App Store approval record. We follow Apple Human Interface Guidelines and privacy manifest requirements rigorously, and we handle any Apple reviewer questions directly until public release."
      },
      {
        question: "Why do you engineer in pure Swift and SwiftUI?",
        answer: "Pure native Swift code guarantees sub-50ms touch latency, full 120Hz ProMotion support, zero third-party framework overhead, and immediate access to new iOS features like Dynamic Island and Lock Screen widgets."
      },
      {
        question: "Can you implement in-app purchases and Apple Pay subscriptions?",
        answer: "Yes. We implement StoreKit 2 with cryptographic receipt validation, auto-renewing subscriptions, family sharing support, and refund handling."
      },
      {
        question: "How do you ensure user health and financial data remains secure?",
        answer: "We store credentials and tokens in the hardware-backed iOS Keychain Secure Enclave and adhere strictly to HIPAA and Apple HealthKit privacy frameworks."
      },
      {
        question: "Who owns the intellectual property and Xcode project files?",
        answer: "You own 100% of all code, git repositories, and design assets. We transfer the app directly into your Apple Developer Organization account."
      },
      {
        question: "What is your turnaround time for emergency iOS bug fixes?",
        answer: "For clients on our maintenance retainers, critical bugs have a sub-15 minute response SLA, and we submit expedited review requests directly to Apple for immediate store deployment."
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
      { value: "60 FPS", label: "Silky Hardware-Accelerated Performance" }
    ],
    problemPoints: [
      {
        title: "Budget Exhaustion from Separate Teams",
        desc: "Hiring two independent native engineering teams doubles your burn rate and causes feature divergence between iOS and Android."
      },
      {
        title: "Sluggish, Low-Quality Hybrid Wrappers",
        desc: "Cordova or basic WebView wrappers feel noticeably sluggish to users, garnering poor ratings and high uninstall rates."
      },
      {
        title: "Divergent Release Cycles",
        desc: "Your marketing launches a new feature on iOS while the Android version lags 3 months behind due to team resource imbalances."
      }
    ],
    deliverables: [
      {
        title: "Unified Flutter or React Native Architecture",
        desc: "Single codebase delivering authentic native performance and pixel-perfect design on both iOS and Android.",
        iconName: "Code2"
      },
      {
        title: "Native Device API Bridges",
        desc: "High-speed native bridges connecting camera, Bluetooth BLE, push notifications, and biometric authentication.",
        iconName: "Cpu"
      },
      {
        title: "Offline-First State Management",
        desc: "Robust local caching (Bloc, Riverpod, or Zustand) with automated background sync and offline data access.",
        iconName: "Database"
      },
      {
        title: "Automated Dual-Store CI/CD Pipelines",
        desc: "Fastlane automation publishing new builds to TestFlight and Google Play Internal Testing concurrently.",
        iconName: "Cloud"
      }
    ],
    techStack: [
      { name: "Flutter 3.x / Dart", category: "Framework", badge: "High-Performance" },
      { name: "React Native (New Arch)", category: "Framework", badge: "Ecosystem" },
      { name: "TypeScript", category: "Language", badge: "Type-Safe" },
      { name: "Bloc / Riverpod", category: "State", badge: "Predictable" },
      { name: "SQLite / Hive / WatermelonDB", category: "Persistence", badge: "Offline" },
      { name: "Mapbox / Google Maps SDK", category: "Geo", badge: "Location" },
      { name: "Fastlane CI/CD", category: "DevOps", badge: "Automation" }
    ],
    process: [
      { step: "01", title: "Framework Selection Matrix", desc: "Objective analysis to determine whether Flutter or React Native fits your product." },
      { step: "02", title: "Unified Design System", desc: "Figma design adapted seamlessly for both iOS and Android user paradigms." },
      { step: "03", title: "Component Engineering", desc: "Building shared screens, custom widgets, and native hardware bridges." },
      { step: "04", title: "Dual-Platform Testing", desc: "Rigorous automated testing on both iPhones and diverse Android hardware." },
      { step: "05", title: "Simultaneous Store Launch", desc: "Concurrent submission and continuous multi-platform maintenance." }
    ],
    caseStudy: {
      client: "UrbanRider Transit",
      industry: "Transportation & Urban Fleet",
      challenge: "Tight 8-week launch window with insufficient capital to fund two separate native iOS and Android engineering teams.",
      solution: "Engineered a unified Flutter app with native Bluetooth BLE vehicle controllers, Mapbox vectors, and Apple/Google Pay.",
      metric: "7 Weeks",
      metricLabel: "Kickoff to concurrent App Store & Google Play launch",
      clientFeedback: {
        quote: "Shipping a single Flutter codebase cut our initial burn by 40% and let us launch on iOS and Android on the exact same day. Over two years of production, Cloud Consultancy has released 40+ updates without a single feature divergence.",
        author: "Derrick Chen",
        role: "VP of Product",
        timeInProduction: "18+ Months Multi-Platform Production"
      },
      productionStats: [
        { label: "Shared Code Ratio", value: "96%" },
        { label: "Unified Frame Rate", value: "60 FPS" },
        { label: "Cost Savings", value: "40%" },
        { label: "Concurrent Releases", value: "42" }
      ]
    },
    pricingModel: {
      startingAt: "$4,000",
      period: "per project",
      includes: [
        "Single unified codebase for iOS & Android",
        "Native performance & 60 FPS animation guarantee",
        "Offline data sync & push notifications",
        "Submission to both App Store & Google Play",
        "30-day post-launch warranty & maintenance support"
      ]
    },
    maintenanceScope: {
      warrantyDays: "30-Day Multi-Platform Warranty",
      slaResponseTime: "< 15 Min Emergency SLA",
      monitoringFrequency: "Multi-Platform Error Aggregation",
      features: [
        "Synchronized iOS and Android dependency upgrades",
        "Flutter / React Native framework updates and bridge tuning",
        "Native Bluetooth, camera, and background service testing",
        "Performance profiling across budget and flagship hardware",
        "Unified CI/CD build pipelines with fast staging distribution"
      ]
    },
    faqs: [
      {
        question: "Do you maintain cross-platform apps across both stores simultaneously?",
        answer: "Yes! The primary advantage of a unified codebase is that maintenance costs are cut nearly in half. Our monthly retainers apply bug fixes, library upgrades, and OS compatibility patches to both iOS and Android in a single synchronized release."
      },
      {
        question: "How do you decide between Flutter and React Native for a project?",
        answer: "If your app requires bespoke branded UI, complex animations, or high-performance graphics, Flutter's canvas engine is unmatched. If you have an existing web engineering team in TypeScript/React or require extensive third-party web SDKs, React Native is the ideal choice."
      },
      {
        question: "Does cross-platform development sacrifice app performance?",
        answer: "Not with modern Flutter (Impeller engine) or React Native (New Architecture). Both compile directly to native arm64 machine instructions and render hardware-accelerated UI at 60 to 120 FPS."
      },
      {
        question: "How much money does cross-platform development actually save?",
        answer: "Clients typically save 35% to 45% on initial engineering and ongoing maintenance compared to staffing separate native Swift and Kotlin teams, while reaching 100% of the mobile market simultaneously."
      },
      {
        question: "Can a cross-platform app access native device hardware like Bluetooth and GPS?",
        answer: "Yes. We write custom native platform channels (in Swift for iOS and Kotlin for Android) whenever a feature requires direct hardware communication."
      },
      {
        question: "Who owns the shared codebase and store developer accounts?",
        answer: "You own 100% of the git repository, dependencies, and store assets. We configure builds to publish directly to your Apple and Google accounts."
      },
      {
        question: "What is your response time for store policy updates?",
        answer: "Whenever Apple or Google publishes new store requirements (such as privacy manifests or API targets), we audit your codebase and push verified updates well in advance of deadlines."
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
      { value: "2.4x", label: "Average User Retention Uplift" },
      { value: "WCAG 2.2", label: "Accessibility AA Standard Compliant" },
      { value: "0 Ambiguity", label: "Pixel-Perfect Developer Handoff" }
    ],
    problemPoints: [
      {
        title: "High Churn & Confusing User Onboarding",
        desc: "Users abandon onboarding workflows because buttons, terminology, and visual hierarchy feel disjointed and confusing."
      },
      {
        title: "Inconsistent Ad-Hoc Design Without a System",
        desc: "Every new screen introduces random colors, mismatched fonts, and inconsistent buttons, ballooning frontend technical debt."
      },
      {
        title: "Developer Friction During Hand-Off",
        desc: "Static mockups without responsive constraints or state specifications force engineers to guess padding, interactions, and error states."
      }
    ],
    deliverables: [
      {
        title: "Comprehensive Figma Design System",
        desc: "Color variables, typography tokens, auto-layout components, and dark/light modes engineered for developer adoption.",
        iconName: "Palette"
      },
      {
        title: "Interactive High-Fidelity Prototypes",
        desc: "Clickable prototypes simulating real user journeys, micro-interactions, modal flows, and transitions.",
        iconName: "Sparkles"
      },
      {
        title: "User Journey & Usability Architecture",
        desc: "Wireframes, flow diagrams, and frictionless checkout/onboarding paths engineered to maximize conversion.",
        iconName: "Compass"
      },
      {
        title: "Developer Token Handoff Specifications",
        desc: "1:1 mapping between Figma tokens and Tailwind CSS / CSS variables with responsive breakpoints clearly defined.",
        iconName: "Code"
      }
    ],
    techStack: [
      { name: "Figma Enterprise", category: "Design Tool", badge: "Core" },
      { name: "FigJam", category: "Ideation & Flows", badge: "Research" },
      { name: "Tailwind CSS Tokens", category: "Code Mapping", badge: "Handoff" },
      { name: "Lottie / Rive", category: "Vector Motion", badge: "Interactive" },
      { name: "Maze / UserTesting", category: "Usability Testing", badge: "Validation" }
    ],
    process: [
      { step: "01", title: "User Research & Architecture", desc: "Auditing competitor interfaces, user journeys, and key conversion funnels." },
      { step: "02", title: "Low-Fidelity Wireframes", desc: "Rapid validation of information hierarchy and layout structure." },
      { step: "03", title: "Component Design System", desc: "Building scalable Figma tokens with auto-layout and variable modes." },
      { step: "04", title: "Interactive Prototyping", desc: "Conducting usability tests on clickable prototypes with real users." },
      { step: "05", title: "Developer Handoff & Governance", desc: "Token syncing, responsive specs, and ongoing design system maintenance." }
    ],
    caseStudy: {
      client: "Zenith SaaS",
      industry: "Productivity & B2B Software",
      challenge: "High trial drop-off because users could not easily configure their analytics dashboard widgets on desktop and tablet screens.",
      solution: "Redesigned the entire onboarding flow, restructured widget hierarchy, and delivered a scalable 180-component Figma design system.",
      metric: "2.4x",
      metricLabel: "Increase in trial-to-paid conversion within 60 days of release",
      clientFeedback: {
        quote: "The Figma design system and Tailwind token library Cloud Consultancy built eliminated design inconsistencies across our 3 web products. Our frontend developers build new views in half the time because the tokens map 1:1 to our code.",
        author: "Talia Brooks",
        role: "Lead Product Designer",
        timeInProduction: "Design System Adopted Across 12 Repos"
      },
      productionStats: [
        { label: "Figma Component Tokens", value: "180+" },
        { label: "UI Feature Cycle Speed", value: "2.4x" },
        { label: "WCAG Contrast Pass Rate", value: "100%" },
        { label: "Frontend Handover Speed", value: "< 2 Days" }
      ]
    },
    pricingModel: {
      startingAt: "$3,000",
      period: "per project",
      includes: [
        "Complete UX wireframing & user journey mapping",
        "Bespoke high-fidelity Figma UI design",
        "Scalable Figma design system with tokens",
        "Interactive clickable prototype for testing",
        "Pixel-perfect developer handoff documentation"
      ]
    },
    maintenanceScope: {
      warrantyDays: "30-Day Design Token Guarantee",
      slaResponseTime: "Same-Day Design Iteration",
      monitoringFrequency: "Design System Versioning",
      features: [
        "Quarterly design system audits & token updates",
        "Figma library component maintenance & auto-layout updates",
        "Accessibility (WCAG 2.2 AA) contrast compliance checks",
        "Developer handoff specs with Tailwind CSS token sync",
        "User journey friction auditing based on real conversion data"
      ]
    },
    faqs: [
      {
        question: "Do you offer ongoing design system maintenance?",
        answer: "Yes. As products grow, design systems decay if new screens are built without governance. Our monthly retainers maintain and expand your Figma component library, add new responsive tokens, review engineer pull requests for design fidelity, and design new product features seamlessly."
      },
      {
        question: "How do you ensure developers can actually code what you design?",
        answer: "Our designers code! We construct Figma components using auto-layout, semantic spacing tokens, and variables that map 1:1 to Tailwind CSS classes or native mobile layout constraints. No unrealistic mockup surprises."
      },
      {
        question: "Do we receive the original editable Figma source files?",
        answer: "Yes, 100%. We invite your team directly to the Figma project with full edit rights. All component libraries, styles, variables, and prototypes belong permanently to you."
      },
      {
        question: "Are your designs compliant with accessibility standards (WCAG 2.2 AA)?",
        answer: "Yes. Every color contrast ratio, font size, tap target dimension, and focus state is audited to pass WCAG 2.2 AA accessibility requirements."
      },
      {
        question: "How many design revisions are included?",
        answer: "Our design process is iterative. We review wireframes and visual styles with you weekly, ensuring feedback is incorporated before final production handoff."
      },
      {
        question: "Can you redesign an existing product without starting from scratch?",
        answer: "Yes. We frequently conduct UX audits of live applications to identify high-friction drop-off points, refreshing the visual language and component system while preserving your core workflows."
      },
      {
        question: "What assets are delivered upon project completion?",
        answer: "You receive the complete master Figma file, published component library, interactive prototype, SVG vector assets, and a developer handoff guide specifying tokens and animations."
      }
    ]
  },
  {
    id: "ecommerce-dev",
    slug: "shopify-bigcommerce-development",
    title: "Shopify & BigCommerce Custom Storefronts",
    shortTitle: "E-Commerce",
    category: "E-Commerce",
    tagline: "Custom Shopify Plus OS 2.0 and BigCommerce headless storefronts engineered for sub-second page loads, instant checkout, and maximized cart conversion.",
    metaTitle: "Custom Shopify Plus & BigCommerce Development Agency",
    metaDescription: "Scale your online brand with custom Shopify Plus and BigCommerce storefronts. Sub-second mobile speeds, bespoke cart drawers, and custom app integrations.",
    heroImage: "/images/service_shopify_bigcommerce.jpg",
    themeColor: "emerald",
    accentHex: "#10b981",
    metrics: [
      { value: "0.8s", label: "Mobile Product Page Load Time" },
      { value: "+38%", label: "Average Checkout Completion Rate" },
      { value: "99+", label: "Google PageSpeed on Shopify OS 2.0" },
      { value: "0 Sync Lag", label: "ERP & Inventory Synchronization" }
    ],
    problemPoints: [
      {
        title: "Slow, Bloated Off-the-Shelf Themes",
        desc: "Generic marketplace themes loaded with 20+ conflicting app scripts take 5+ seconds to load, cratering your ad ROAS."
      },
      {
        title: "High Mobile Cart Abandonment",
        desc: "Clunky cart popups, slow upsell drawers, and layout shifts cause shoppers to abandon purchases before reaching checkout."
      },
      {
        title: "Inventory Desynchronization with ERPs",
        desc: "Laggy webhooks cause out-of-stock items to remain purchasable, creating customer service nightmares and chargeback fees."
      }
    ],
    deliverables: [
      {
        title: "Bespoke Shopify OS 2.0 Theme",
        desc: "Modular Liquid sections, predictive search, instant cart drawer, and sub-second page loads with zero bloated theme code.",
        iconName: "ShoppingBag"
      },
      {
        title: "High-Converting Custom Cart Drawer",
        desc: "In-cart tiered progress bars (e.g. Free Shipping), one-click dynamic upsells, and instant checkout integration.",
        iconName: "Sparkles"
      },
      {
        title: "ERP & Multi-Channel Inventory Sync",
        desc: "Real-time bi-directional webhooks connecting Shopify to NetSuite, Katana, or custom warehouse management systems.",
        iconName: "RefreshCw"
      },
      {
        title: "Third-Party App Script Debulking",
        desc: "Consolidating fragmented apps into native Liquid code, removing render-blocking JavaScript and securing Lighthouse 90+.",
        iconName: "Zap"
      }
    ],
    techStack: [
      { name: "Shopify Plus / OS 2.0", category: "Platform", badge: "Core" },
      { name: "Liquid & JSON Templates", category: "Templating", badge: "Native" },
      { name: "BigCommerce Multi-Storefront", category: "Platform", badge: "B2B / B2C" },
      { name: "Storefront API (GraphQL)", category: "API", badge: "Headless" },
      { name: "Klaviyo API", category: "Marketing Automation", badge: "Email / SMS" },
      { name: "Tailwind CSS / Vanilla JS", category: "Frontend", badge: "Fast" }
    ],
    process: [
      { step: "01", title: "Conversion & Catalog Audit", desc: "Analyzing checkout drop-off, catalog taxonomy, and third-party app bloat." },
      { step: "02", title: "UX & Cart Wireframing", desc: "Designing intuitive mobile product pages and friction-free cart drawers." },
      { step: "03", title: "Liquid OS 2.0 Engineering", desc: "Writing clean, modular Shopify sections with zero render-blocking scripts." },
      { step: "04", title: "ERP & App Integration", desc: "Wiring up Klaviyo, reviews, ERP inventory feeds, and payment gateways." },
      { step: "05", title: "Launch & Flash Sale Retainers", desc: "Zero-downtime DNS cutover, 24/7 cart synthetics, and campaign support." }
    ],
    caseStudy: {
      client: "Aeterna DTC Apparel",
      industry: "Direct-to-Consumer Fashion",
      challenge: "Heavy WooCommerce theme loaded in 4.8s with a 74% mobile cart drop-off during new seasonal product drops.",
      solution: "Built a custom Shopify OS 2.0 theme with instant AJAX cart drawer, predictive search, and automated ERP inventory sync.",
      metric: "+38%",
      metricLabel: "Checkout completion rate increase, maintaining sub-0.9s load times",
      clientFeedback: {
        quote: "We processed $1.2M during our holiday campaign with 14,000 simultaneous shoppers on our custom Shopify OS 2.0 store. The page loaded in under 0.9s, the cart drawer never stalled, and we had zero checkout drop-offs. Cloud Consultancy's monthly maintenance keeps our store lightning fast.",
        author: "Camille Laurent",
        role: "Founder & Head of DTC",
        timeInProduction: "16+ Months Peak E-Commerce Production"
      },
      productionStats: [
        { label: "Mobile Page Load", value: "0.85s" },
        { label: "Peak Black Friday Sales", value: "$1.2M" },
        { label: "Checkout Completion", value: "+38%" },
        { label: "Inventory Sync Lag", value: "0s" }
      ]
    },
    pricingModel: {
      startingAt: "$4,000",
      period: "per project",
      includes: [
        "Complete bespoke Shopify OS 2.0 theme",
        "Sub-1-second mobile performance guarantee",
        "Custom AJAX cart drawer with upsell triggers",
        "ERP / app integrations & catalog migration",
        "30-day post-launch warranty & training"
      ]
    },
    maintenanceScope: {
      warrantyDays: "30-Day Post-Launch Guarantee",
      slaResponseTime: "< 15 Min SLA During Campaigns",
      monitoringFrequency: "24/7 Cart & Checkout Synthetics",
      features: [
        "App script debulking & Core Web Vitals speed guardrails",
        "Monthly Shopify OS 2.0 theme & app compatibility audits",
        "Pre-campaign load testing & flash sale server readiness",
        "Klaviyo and ERP webhook sync health monitoring",
        "Dedicated engineering retainer for conversion rate experiments"
      ]
    },
    faqs: [
      {
        question: "Do you provide ongoing maintenance and support for Shopify stores?",
        answer: "Yes! High-volume e-commerce stores require continuous care. Our monthly maintenance retainers monitor checkout availability 24/7, audit new third-party app scripts so they don't slow down your store, optimize promotional banners for flash sales, and provide emergency support during Black Friday / Cyber Monday."
      },
      {
        question: "Why should we build a custom Shopify theme instead of buying a $300 template?",
        answer: "Commercial themes are built to appeal to everyone, so they ship with thousands of lines of unused JavaScript and CSS that cause 4+ second load times. Our bespoke Shopify OS 2.0 themes contain only the code your brand needs, guaranteeing sub-second load times and 30%+ higher cart conversion."
      },
      {
        question: "Can our merchandising team easily edit banners, collections, and copy?",
        answer: "Yes, completely! We build exclusively using Shopify OS 2.0 modular sections and blocks. Your non-technical team can drag, drop, reorder, and customize every section within Shopify's native Theme Editor."
      },
      {
        question: "Can you migrate all our customer accounts and order history from WooCommerce or Magento?",
        answer: "Yes. We handle end-to-end data migrations—including customer passwords (via activation links), historical order records, product variants, and SEO 301 URL redirect maps so your search rankings are preserved."
      },
      {
        question: "How do you handle flash sales with massive traffic spikes?",
        answer: "Shopify Plus handles the checkout infrastructure, while our frontend code is cached on global edge CDNs. We conduct pre-sale load testing to ensure your cart drawer and inventory feeds remain responsive under 20,000+ concurrent visitors."
      },
      {
        question: "Who owns the custom Shopify theme code and store assets?",
        answer: "You own 100% of the custom theme code, git repository, and assets. We connect directly to your Shopify Partner or store account with collaborator access."
      },
      {
        question: "What is your emergency SLA during peak marketing campaigns?",
        answer: "During scheduled peak campaigns (like Black Friday or product drops), retained clients receive on-call real-time engineering monitoring with a sub-15 minute critical response SLA."
      }
    ]
  },
  {
    id: "plugins-extensions",
    slug: "plugins-extensions-development",
    title: "Custom Plugins, Browser Extensions & Webhook Microservices",
    shortTitle: "Plugins & Extensions",
    category: "Engineering",
    tagline: "Custom Chrome & Edge extensions (Manifest V3), Shopify custom apps, and resilient serverless microservices tailored for your business workflow.",
    metaTitle: "Browser Extension & Custom Plugin Development | Manifest V3 & APIs",
    metaDescription: "Engineer custom Chrome/Edge browser extensions, Shopify private apps, and webhook microservices. Manifest V3 compliant, fast, and secure.",
    heroImage: "/images/service_plugins_extensions.jpg",
    themeColor: "purple",
    accentHex: "#8b5cf6",
    metrics: [
      { value: "Manifest V3", label: "Full Chromium & Edge Compliance" },
      { value: "< 50ms", label: "Microservice Webhook Execution Latency" },
      { value: "100%", label: "Chrome Web Store Pass Rate" },
      { value: "0 Leaks", label: "Isolated Memory & CSP Security Standard" }
    ],
    problemPoints: [
      {
        title: "Manual, Repetitive Browser Tasks",
        desc: "Your internal team wastes hundreds of weekly hours manually copying data between internal web portals, CRM fields, and partner dashboards."
      },
      {
        title: "Manifest V2 Sunset & Extension Deactivations",
        desc: "Outdated extensions face automatic deactivation in Chrome and Edge, threatening daily operations with immediate obsolescence."
      },
      {
        title: "Fragile Webhook Integrations That Drop Payloads",
        desc: "Custom integration scripts built without retry queues or cryptographic verification drop payloads during server spikes."
      }
    ],
    deliverables: [
      {
        title: "Manifest V3 Browser Extension (Chrome & Edge)",
        desc: "High-performance background service workers, content script injectors, and sleek popup interfaces.",
        iconName: "Puzzle"
      },
      {
        title: "Custom Shopify App or WordPress Plugin",
        desc: "Tailored backend extensions integrating custom pricing logic, wholesale catalogs, or proprietary inventory rules.",
        iconName: "Code2"
      },
      {
        title: "Resilient Serverless Microservices",
        desc: "Lightweight Node.js or Go microservices hosted on AWS Lambda or Cloudflare Workers with automated rate-limiting.",
        iconName: "Server"
      },
      {
        title: "Store Submission & Automated Publishing",
        desc: "Navigating Chrome Web Store and Microsoft Edge Addons review policies, security questionnaires, and automated CI publishing.",
        iconName: "Cloud"
      }
    ],
    techStack: [
      { name: "Chromium Manifest V3", category: "Standard", badge: "Modern" },
      { name: "TypeScript / React", category: "Frontend", badge: "Type-Safe" },
      { name: "Cloudflare Workers / Lambda", category: "Serverless", badge: "Fast" },
      { name: "Shopify CLI / Remix", category: "App Framework", badge: "Shopify" },
      { name: "Tailwind CSS", category: "Styling", badge: "Clean" },
      { name: "Chrome Web Store API", category: "DevOps", badge: "CI/CD" }
    ],
    process: [
      { step: "01", title: "API & Permissions Architecture", desc: "Defining minimum required permissions to ensure swift store approval." },
      { step: "02", title: "Extension UI & Popup Prototyping", desc: "Designing responsive popup interfaces and content script overlays." },
      { step: "03", title: "Service Worker Implementation", desc: "Writing Manifest V3 service workers with memory management." },
      { step: "04", title: "Security & CSP Audits", desc: "Rigorous verification against Cross-Site Scripting (XSS) and data leaks." },
      { step: "05", title: "Store Submission & SLAs", desc: "Review handling, automated deployment, and ongoing version maintenance." }
    ],
    caseStudy: {
      client: "DataSync Edge",
      industry: "Enterprise Compliance & SaaS",
      challenge: "Legacy Manifest V2 extension used by 65,000 daily corporate users faced complete shutdown under Google's deprecation roadmap.",
      solution: "Migrated the entire architecture to Manifest V3 with background service workers, encrypted local storage, and automated store CI.",
      metric: "65,000+",
      metricLabel: "Active daily users migrated with zero downtime and 100% store pass rate",
      clientFeedback: {
        quote: "Our Chrome and Edge extension has over 65,000 active daily enterprise users. Cloud Consultancy migrated our entire codebase to Manifest V3 and maintains automated CI releases without a single store rejection. Their maintenance keeps our browser extensions flawless.",
        author: "Nathaniel Cole",
        role: "VP of Engineering",
        timeInProduction: "18+ Months Active Browser Store Deployment"
      },
      productionStats: [
        { label: "Active Daily Users", value: "65,000+" },
        { label: "Store Review Pass Rate", value: "100%" },
        { label: "Background Latency", value: "< 45ms" },
        { label: "Manifest V3 Compliance", value: "100%" }
      ]
    },
    pricingModel: {
      startingAt: "$2,800",
      period: "per project",
      includes: [
        "Manifest V3 compliant extension for Chrome & Edge",
        "Background service workers & content scripts",
        "Encrypted local storage & secure token management",
        "Chrome Web Store submission & review handling",
        "30-day post-launch warranty & version support"
      ]
    },
    maintenanceScope: {
      warrantyDays: "30-Day Store Approval Warranty",
      slaResponseTime: "< 15 Min Critical Incident SLA",
      monitoringFrequency: "Real-Time Sentry & Telemetry Tracking",
      features: [
        "Quarterly Chrome Web Store & Edge Addons policy compliance",
        "Manifest V3 service worker lifecycle & memory optimization",
        "API token rotation & Content Security Policy (CSP) enforcement",
        "Automated GitHub Actions store publishing pipeline",
        "Proactive browser engine (Chromium/Firefox/Safari) updates"
      ]
    },
    faqs: [
      {
        question: "Do you maintain browser extensions after they are published to the web store?",
        answer: "Yes. Browser vendors (Google, Microsoft, Apple) continuously update their extension security policies and API permissions. Our maintenance retainers keep your extension Manifest V3 compliant, test compatibility against upcoming Chromium Canary releases, and push updates seamlessly via automated CI/CD."
      },
      {
        question: "Is your code fully compliant with Google Manifest V3?",
        answer: "Yes, 100%. We engineer exclusively for Manifest V3 using modern non-persistent service workers, declarativeNetRequest APIs, and strict Content Security Policies (CSP) with zero eval or remotely hosted code."
      },
      {
        question: "Can the extension be distributed privately to our company employees only?",
        answer: "Yes. We configure private deployment via Google Workspace Admin console or self-hosted CRX enterprise distribution, ensuring only verified employees with company email accounts can install it."
      },
      {
        question: "Can a browser extension interact with our internal backend APIs?",
        answer: "Yes. Extensions can securely communicate with your internal REST or GraphQL APIs using authenticated session cookies, bearer tokens, or HMAC signatures stored in encrypted browser storage."
      },
      {
        question: "How do you navigate the Chrome Web Store security review process?",
        answer: "We declare only the minimum necessary permissions in manifest.json and write comprehensive justification documentation for Google reviewers, ensuring fast approval with zero policy rejections."
      },
      {
        question: "Who owns the extension source code and developer store accounts?",
        answer: "You own 100% of all repository code, build scripts, and store listings. We publish under your own Chrome Web Store and Edge Developer accounts."
      },
      {
        question: "What is your turnaround time if a browser update causes an extension issue?",
        answer: "We monitor Chromium beta and canary release channels. For retained clients, we fix compatibility issues weeks before they hit stable user channels, maintaining a sub-15 minute response SLA for any store incident."
      }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
