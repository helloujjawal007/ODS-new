export interface SalesforceCapability {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  iconName: string;
}

export interface SalesforceCloudSpecialty {
  id: string;
  name: string;
  badge: string;
  headline: string;
  description: string;
  keyUseCases: string[];
  coreTech: string[];
  metric: { value: string; label: string };
}

export interface SalesforceIntegrationFeature {
  system: string;
  category: string;
  protocol: string;
  description: string;
  features: string[];
}

export interface SalesforcePricingTier {
  name: string;
  badge: string;
  rate: string;
  period: string;
  idealFor: string;
  deliverables: string[];
  sla: string;
  highlighted?: boolean;
}

export const SALESFORCE_METRICS = [
  { value: "100%", label: "Certified Salesforce Architects" },
  { value: "0", label: "Governor Limit Breaches" },
  { value: "65%", label: "Faster Quote-to-Close Velocity" },
  { value: "< 15m", label: "P1 Emergency Incident SLA" },
  { value: "99.9%", label: "Apex Unit Test Coverage" },
  { value: "100%", label: "Client Code & IP Ownership" }
];

export const SALESFORCE_HERO_PILLARS = [
  {
    title: "Sales Cloud & Revenue Ops",
    desc: "CPQ pricing rules, automated lead-to-cash routing, and predictive pipeline forecasting."
  },
  {
    title: "Service Cloud & Support",
    desc: "Omni-channel case routing, CTI voice integration, SLA milestones, and Agentforce deflection."
  },
  {
    title: "Apex, Triggers & Flows",
    desc: "Bulkified trigger handler frameworks, reactive LWC, and zero-recursion record flows."
  },
  {
    title: "MuleSoft & Enterprise Sync",
    desc: "API-led connectivity, SAP/NetSuite ERP sync, and real-time Kafka event streaming."
  }
];

export const SALESFORCE_CLOUDS: SalesforceCloudSpecialty[] = [
  {
    id: "sales-cloud",
    name: "Salesforce Sales Cloud",
    badge: "Pipeline & Revenue Ops",
    headline: "Accelerate Lead-to-Cash with Zero Operational Friction",
    description: "We configure, customize, and optimize Sales Cloud so your account executives close deals faster. We eliminate spreadsheet chaos by deploying automated lead scoring, dynamic CPQ quoting rules, territory management, and revenue forecasting that leadership trusts.",
    keyUseCases: [
      "Custom CPQ pricing rules, product bundling, and automated discount approvals",
      "Algorithmic lead assignment based on rep capacity, geography, and deal tier",
      "Opportunity pipeline automation with automated stage-gating and milestone tasks",
      "Dynamic contract and quote PDF generation with DocuSign/Adobe Sign e-signature sync",
      "Executive pipeline analytics, ARR/MRR cohort reporting, and commission forecasting"
    ],
    coreTech: ["Sales Cloud", "Salesforce CPQ", "Territory Management", "Revenue Cloud"],
    metric: { value: "3.2x", label: "Faster Pipeline Turnaround" }
  },
  {
    id: "service-cloud",
    name: "Salesforce Service Cloud",
    badge: "Omni-Channel Support & SLA",
    headline: "Omni-Channel Customer Care with Automated Case Deflection",
    description: "Transform your support operations into an effortless customer satisfaction engine. We implement Omni-Channel routing across email, webchat, SMS, and WhatsApp, integrate telephony via Service Cloud Voice (CTI), and deploy self-service knowledge bases backed by automated milestone SLA timers.",
    keyUseCases: [
      "Intelligent Omni-Channel routing prioritizing VIP cases and specialized skills",
      "Service Cloud Voice & Computer Telephony Integration (CTI) with screen pops",
      "Automated SLA milestone timers with proactive escalation alerts before breach",
      "Customer self-service Knowledge Base with automated article suggestion algorithms",
      "Agentforce & Einstein generative AI copilot for instant agent case summaries"
    ],
    coreTech: ["Service Cloud", "Omni-Channel", "Service Cloud Voice (CTI)", "Field Service"],
    metric: { value: "48%", label: "Faster Case Resolution (MTTR)" }
  },
  {
    id: "platform-engineering",
    name: "Apex, Triggers, Flows & LWC",
    badge: "Core Platform Engineering",
    headline: "Enterprise-Grade Code Craftsmanship That Scales Safely",
    description: "Salesforce is only as resilient as its underlying code architecture. Our certified technical architects design decoupled Apex trigger frameworks following enterprise patterns, build sub-second reactive Lightning Web Components (LWC), and orchestrate high-speed Flows with zero recursion or governor limit exceptions.",
    keyUseCases: [
      "One-Trigger-Per-Object architecture with strict recursion control and handler decoupling",
      "Asynchronous Batch Apex, Queueable jobs, and scheduled data sync workers",
      "Custom reactive Lightning Web Components (LWC) with Lightning Data Service (LDS) caching",
      "Record-Triggered Flow optimization and legacy Process Builder / Workflow Rule cleanup",
      "Automated unit test suites with >= 90% real-world assertion coverage"
    ],
    coreTech: ["Apex", "Lightning Web Components", "Record-Triggered Flows", "SOQL / SOSL"],
    metric: { value: "0", label: "Governor Limit Breaches" }
  },
  {
    id: "mulesoft-integrations",
    name: "MuleSoft & Enterprise Integrations",
    badge: "API-Led Connectivity",
    headline: "Zero-Data-Loss Bi-Directional Integration Mesh",
    description: "Break down data silos between Salesforce and your enterprise tech stack. We architect robust API-led connectivity using MuleSoft Anypoint Platform, composite REST/GraphQL endpoints, and event-driven architectures (Platform Events & Change Data Capture) for real-time ERP, billing, and database synchronization.",
    keyUseCases: [
      "MuleSoft Anypoint Platform System, Process, and Experience API layer design",
      "Bi-directional ERP synchronization with SAP S/4HANA, NetSuite, and Oracle",
      "Real-time event streaming via Salesforce Platform Events and Apache Kafka",
      "Automated e-commerce sync with Shopify Plus, BigCommerce, and custom Next.js storefronts",
      "Payment & billing pipeline integration with Stripe, QuickBooks, and Zuora with retry queues"
    ],
    coreTech: ["MuleSoft Anypoint", "Platform Events", "Salesforce REST / Bulk API 2.0", "Kafka / Webhooks"],
    metric: { value: "< 340ms", label: "P99 Integration Latency" }
  },
  {
    id: "experience-cloud",
    name: "Experience Cloud & Portals",
    badge: "B2B & Customer Portals",
    headline: "Secure, Branded Digital Experiences for Customers & Partners",
    description: "Extend your Salesforce CRM directly to external partners, dealers, and customers. We build high-speed Experience Cloud portals and authenticated communities on Lightning Web Runtime (LWR), giving external stakeholders self-service account access, order placement, and support tickets with strict role-based access control.",
    keyUseCases: [
      "B2B partner and distributor portals with custom pricing tiers and order submission",
      "Customer account self-service portals for invoice review, subscriptions, and profile management",
      "Single Sign-On (SSO) integration via Okta, Azure AD, Auth0, or SAML 2.0 / OpenID Connect",
      "Custom branded LWR (Lightning Web Runtime) implementations for sub-second page loads",
      "Granular permission set architectures ensuring external users only access designated data"
    ],
    coreTech: ["Experience Cloud", "Lightning Web Runtime (LWR)", "SSO / SAML 2.0", "Community Builder"],
    metric: { value: "98/100", label: "LWR Performance Score" }
  },
  {
    id: "data-cloud-ai",
    name: "Data Cloud & Agentforce AI",
    badge: "Unified 360 & AI Agents",
    headline: "Real-Time Customer 360 & Autonomous AI Workflows",
    description: "Harness the full power of modern Salesforce Data Cloud and Agentforce. We ingest, harmonize, and unify customer data across mobile apps, websites, POS terminals, and data lakes (Snowflake, BigQuery) to power real-time personalization, predictive scoring, and autonomous generative AI agent execution.",
    keyUseCases: [
      "Real-time customer identity resolution and profile unification across touchpoints",
      "Zero-copy lakehouse federation connecting Snowflake, Google BigQuery, and Databricks",
      "Autonomous Agentforce AI agent setup for lead qualification and customer support triage",
      "Real-time segment streaming triggering automated marketing journeys and sales alerts",
      "Einstein Copilot prompt engineering and grounded CRM data grounding"
    ],
    coreTech: ["Salesforce Data Cloud", "Agentforce", "Einstein 1 Platform", "Zero-Copy Lakehouse"],
    metric: { value: "100%", label: "Real-Time 360 View" }
  }
];

export const SALESFORCE_INTEGRATION_SYSTEMS: SalesforceIntegrationFeature[] = [
  {
    system: "MuleSoft Anypoint Platform",
    category: "Enterprise iPaaS",
    protocol: "REST / RAML / OAS",
    description: "Architect API-led connectivity with System, Process, and Experience APIs. Reusable connectors that scale without tight coupling.",
    features: ["API Manager & Policy Enforcement", "Runtime Fabric Deployment", "Automated Error Handling", "Payload Transformation (DataWeave)"]
  },
  {
    system: "SAP & NetSuite ERP",
    category: "Financials & Inventory",
    protocol: "OData / SOAP / Webhooks",
    description: "Sync inventory availability, customer financial credit limits, sales orders, and invoices bi-directionally with zero double-entry.",
    features: ["Order-to-Cash Automation", "Credit Limit Validation", "Real-Time Inventory Allocation", "Tax & Invoice Reconciliation"]
  },
  {
    system: "Shopify Plus & BigCommerce",
    category: "E-Commerce",
    protocol: "GraphQL / Webhooks",
    description: "Synchronize online B2C and B2B customers, orders, abandoned carts, and support inquiries directly into Salesforce contacts and cases.",
    features: ["Bi-Directional Customer Sync", "High-Surge Order Ingestion", "Tiered B2B Pricing Sync", "Return & RMA Management"]
  },
  {
    system: "Stripe & Billing Engines",
    category: "Payments & Subscriptions",
    protocol: "REST API / Webhooks",
    description: "Automate invoice payment collection, subscription recurring billing, and failed payment dunning directly linked to Salesforce Accounts.",
    features: ["PCI-Compliant Tokenization", "Stripe Checkout & Billing Sync", "Automated Dunning Workflows", "Revenue Recognition Tracking"]
  },
  {
    system: "Apache Kafka & EventBridge",
    category: "Event Streaming",
    protocol: "Pub/Sub API / CDC",
    description: "High-throughput asynchronous message streaming. Stream Salesforce Change Data Capture (CDC) events to data warehouses in milliseconds.",
    features: ["Zero Governor Impact Streaming", "Change Data Capture (CDC)", "Platform Event Ingestion", "Guaranteed At-Least-Once Delivery"]
  },
  {
    system: "Next.js Web Platforms",
    category: "Headless Frontend",
    protocol: "Composite REST / OAuth",
    description: "Connect high-speed marketing websites and customer portals with Salesforce lead routing, gated assets, and customer profile portals.",
    features: ["Redis Webhook Buffering", "Lead Deduplication Logic", "Instant UTM Attribution", "HMAC Signature Verification"]
  }
];

export const SALESFORCE_PLATFORM_DETAILS = [
  {
    title: "Apex Architecture & Trigger Frameworks",
    badge: "Zero Governor Exceptions",
    description: "Enterprise pattern implementation that separates trigger orchestration from domain logic, service layers, and selector classes.",
    points: [
      "Single-Trigger-Per-Object dispatcher preventing nested trigger recursion",
      "Selector Layer isolating SOQL queries for query plan optimization and caching",
      "Domain Layer enforcing validation rules and default values consistently",
      "Service Layer encapsulating reusable business logic and cross-object transactions"
    ]
  },
  {
    title: "Next-Gen Flow Orchestration",
    badge: "Modern Low-Code Automation",
    description: "Eliminate sluggish legacy Process Builders and Workflow Rules with streamlined, maintainable Flow architectures.",
    points: [
      "Before-Save record triggered flows for ultra-fast field updates without DML overhead",
      "After-Save record triggered flows with explicit entry criteria for related record actions",
      "Subflow modularization preventing monolithic, unmaintainable automation diagrams",
      "Fault path error handling with automated Slack notifications and error record logging"
    ]
  },
  {
    title: "Reactive Lightning Web Components (LWC)",
    badge: "Sub-Second UI Performance",
    description: "Custom UI engineered to modern web standards, replacing slow Visualforce and bulky Aura components.",
    points: [
      "Lightweight Shadow DOM architecture ensuring lightning-fast client render cycles",
      "Lightning Data Service (LDS) wire adapters for automatic client-side data caching",
      "Custom multi-step guided wizards and interactive CPQ configurators",
      "Seamless responsive layouts across Salesforce Desktop, Tablet, and Mobile apps"
    ]
  },
  {
    title: "DevOps & Source-Driven Development",
    badge: "SFDX & Version Controlled",
    description: "Professional release management ensuring zero regressions and continuous delivery into production.",
    points: [
      "100% source-driven workflow using SFDX CLI and Git version control",
      "Automated CI/CD validation pipelines running full Apex test suites on every pull request",
      "Isolated scratch orgs and developer sandboxes preventing concurrent code collisions",
      "Automated rollback strategies and metadata package backups"
    ]
  }
];

export const SALESFORCE_PRICING_TIERS: SalesforcePricingTier[] = [
  {
    name: "Ad-Hoc Advisory & Support",
    badge: "Flexible Hourly",
    rate: "$95 - $125",
    period: "per hour",
    idealFor: "Targeted bug fixes, urgent Flow updates, governor limit triage, and code reviews.",
    deliverables: [
      "No long-term commitment required",
      "Direct pairing with certified Technical Architect",
      "Time logged in transparent 15-minute increments",
      "Sandbox deployment & automated test validation",
      "Standard 24h turnaround for non-critical tasks"
    ],
    sla: "Standard 24h response"
  },
  {
    name: "Dedicated Engineering Sprint",
    badge: "High Velocity",
    rate: "$4,500 - $7,500",
    period: "per 2-week sprint",
    idealFor: "Building custom LWC modules, MuleSoft/ERP integrations, CPQ workflows, or legacy debt migration.",
    deliverables: [
      "Dedicated senior architect & developer sprint allocation",
      "Sprint planning, daily async standups, and demo review",
      "100% source code ownership delivered to your Git repository",
      "Comprehensive unit test coverage (>= 90%) and technical docs",
      "30-day post-sprint deployment warranty and hypercare"
    ],
    sla: "Priority daily sprint communication",
    highlighted: true
  },
  {
    name: "Managed Org Retainer",
    badge: "Continuous Excellence",
    rate: "From $2,800",
    period: "per month",
    idealFor: "Ongoing org administration, seasonal release testing, security audits, and guaranteed emergency SLAs.",
    deliverables: [
      "Guaranteed monthly pool of senior engineering hours",
      "Sub-15 minute P1 emergency incident response SLA",
      "3x annual seasonal release regression testing & validation",
      "Proactive security health audits and user access management",
      "Unused hours roll over for up to 30 days"
    ],
    sla: "15-minute P1 emergency SLA"
  }
];

export const SALESFORCE_FAQS = [
  {
    question: "Do you support all Salesforce Clouds including Sales Cloud, Service Cloud, and MuleSoft?",
    answer: "Yes. Our practice covers the full Salesforce ecosystem: Sales Cloud (pipeline, forecasting, CPQ), Service Cloud (Omni-Channel, CTI, SLA milestones), Experience Cloud (partner/customer portals), MuleSoft Anypoint Platform (enterprise API integration), and Data Cloud / Agentforce. All implementations are designed and reviewed by certified Salesforce Technical Architects."
  },
  {
    question: "Do we retain 100% ownership of custom Apex, Flow, and LWC code?",
    answer: "Yes, absolutely. We do not use proprietary locked packages. Every custom Lightning Web Component, Apex trigger framework, Flow, and integration connector is committed directly to your version control repository (GitHub, GitLab, Bitbucket) and deployed into your org with 100% client intellectual property ownership from day one."
  },
  {
    question: "When should we choose MuleSoft vs custom REST/GraphQL integrations?",
    answer: "For complex enterprise architectures connecting multiple backend systems (such as SAP, NetSuite, Oracle, and data lakes) with high transaction volumes and reusable API governance, MuleSoft Anypoint Platform is the gold standard. For straightforward point-to-point connections with modern web apps (like Next.js or Shopify), we often engineer lightweight, secure REST/Composite API endpoints with Redis queue buffering to save licensing overhead."
  },
  {
    question: "How do you eliminate SOQL 101 and CPU governor limit crashes in Apex?",
    answer: "Governor limit crashes stem from unbulkified triggers, SOQL queries inside FOR loops, or cascading recursive Flows. We implement an enterprise One-Trigger-Per-Object dispatcher framework, separate queries into indexed selector classes, offload heavy calculations to asynchronous Queueable or Batch Apex, and enforce strict collection bulkification across all DML operations."
  },
  {
    question: "Can you help migrate our legacy Process Builders and Workflow Rules to Flows?",
    answer: "Yes. Salesforce has retired Workflow Rules and Process Builders. We perform a comprehensive dependency audit of your active automation, consolidate redundant rules into high-performance Record-Triggered Flows (optimizing between fast Before-Save and After-Save criteria), and resolve recursion conflicts to dramatically speed up record save times."
  },
  {
    question: "How do you handle deployments, CI/CD, and sandbox testing?",
    answer: "We follow strict modern Salesforce DevOps practices using the SFDX CLI and Git. Code is developed in isolated developer sandboxes or scratch orgs, tested against full-copy sandboxes with automated Apex unit test suites (>= 90% coverage), and deployed via automated CI/CD pipelines (GitHub Actions / Azure DevOps) with zero production downtime."
  },
  {
    question: "What is your emergency SLA for production org outages?",
    answer: "Clients on our Managed Org Retainer receive guaranteed sub-15 minute response times for critical P1 production incidents, with 24/7 on-call coverage from senior architects. For ad-hoc clients, our team typically responds within 2 to 4 business hours."
  }
];
