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
  name: string;
  badge: string;
  description: string;
  keyUseCases: string[];
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
  { value: "100%", label: "Certified Salesforce Developers" },
  { value: "0", label: "Governor Limit Breaches" },
  { value: "65%", label: "Faster Quote-to-Close Velocity" },
  { value: "< 15m", label: "P1 Emergency SLA Response" },
  { value: "99.9%", label: "Apex Unit Test Coverage" },
  { value: "100%", label: "Client Code & IP Ownership" }
];

export const SALESFORCE_CLOUDS: SalesforceCloudSpecialty[] = [
  {
    name: "Sales Cloud & Revenue Ops",
    badge: "Pipeline Velocity",
    description: "Streamline high-velocity sales workflows, automated lead routing, and opportunity forecasting without technical bottlenecks.",
    keyUseCases: [
      "Custom CPQ quoting rules and approval flows",
      "Automated lead enrichment and territory assignment",
      "Real-time pipeline analytics & KPI dashboards",
      "Contract generation & electronic signature sync"
    ]
  },
  {
    name: "Service Cloud & Field Service",
    badge: "Case Deflection & SLA",
    description: "Equip your customer support teams with omnichannel routing, automated case deflection, and milestone-backed SLAs.",
    keyUseCases: [
      "Omnichannel queue and priority case routing",
      "Einstein AI bot routing and automated responses",
      "Knowledge base integration & self-service search",
      "SLA milestone timers and automatic escalations"
    ]
  },
  {
    name: "Experience Cloud (Portals)",
    badge: "External Engagement",
    description: "Secure, high-performance customer and partner portals with custom branded Lightning Web Components and single sign-on.",
    keyUseCases: [
      "Custom branded partner & dealer community portals",
      "Customer account management & self-checkout",
      "Headless authentication and profile sync",
      "Role-based document sharing and approval workflows"
    ]
  },
  {
    name: "Data Cloud & Multi-System Sync",
    badge: "Customer 360",
    description: "Unify fragmented customer touchpoints from websites, mobile apps, ERPs, and billing engines into a single source of truth.",
    keyUseCases: [
      "Bi-directional sync with Next.js, Shopify, and Stripe",
      "Redis-buffered webhook message queues",
      "Real-time customer 360 profile consolidation",
      "Automated marketing segment triggers"
    ]
  }
];

export const SALESFORCE_CAPABILITIES: SalesforceCapability[] = [
  {
    id: "lwc",
    title: "Custom Lightning Web Components (LWC)",
    tagline: "Ultra-fast, reactive UI components engineered with modern web standards.",
    description: "We replace clunky legacy Visualforce pages and slow Aura components with lightweight, reactive Lightning Web Components (LWC). Built on shadow DOM and Lightning Data Service (LDS) for sub-second UI responsiveness.",
    deliverables: [
      "Dynamic multi-step guided sales wizards and custom modal dialogs",
      "Interactive data tables with inline editing and bulk actions",
      "Real-time reactive charts and telemetry widgets",
      "Custom record page overrides optimized for sales productivity"
    ],
    techStack: ["Lightning Web Components", "ES6+ JavaScript", "SLDS", "LDS Caching"],
    iconName: "Code2"
  },
  {
    id: "apex",
    title: "Bulkified Enterprise Apex Engineering",
    tagline: "Resilient backend business logic that never hits governor limits.",
    description: "Our certified Technical Architects design clean, decoupled Apex architectures using modern trigger frameworks. Every query is indexed and bulkified to handle massive data volumes effortlessly.",
    deliverables: [
      "Single-trigger-per-object architectural framework",
      "Asynchronous Batch Apex, Queueable jobs, and Schedulables",
      "REST & SOAP custom Apex web services with API key authentication",
      "Comprehensive unit test suites with >= 90% real-world assertion coverage"
    ],
    techStack: ["Apex", "SOQL / SOSL", "Queueable Apex", "Apex Enterprise Patterns"],
    iconName: "Database"
  },
  {
    id: "flow-automation",
    title: "Salesforce Flow Optimization & Debt Elimination",
    tagline: "Modern low-code automation without recursive performance penalties.",
    description: "We audit, consolidate, and migrate legacy Process Builders and Workflow Rules into streamlined Record-Triggered Flows. We eliminate trigger recursion, flow conflicts, and save orders of magnitude in CPU execution time.",
    deliverables: [
      "Legacy Process Builder and Workflow Rule modernization",
      "High-speed Record-Triggered Flows with explicit entry criteria",
      "Interactive Screen Flows with custom LWC screen components",
      "Flow error-handling and automated alert notifications"
    ],
    techStack: ["Record-Triggered Flow", "Screen Flow", "Sub-flows", "Flow Orchestrator"],
    iconName: "Workflow"
  },
  {
    id: "integrations",
    title: "Multi-Cloud & Third-Party API Integrations",
    tagline: "Zero-data-loss bi-directional pipelines between your app and Salesforce.",
    description: "Connect your Next.js website, Shopify Plus store, custom mobile app, or internal database with Salesforce. We architect buffered queues that protect against API rate limits and handle network drops automatically.",
    deliverables: [
      "Secure OAuth 2.0 connected app configuration",
      "Redis and BullMQ message queue buffers with exponential retries",
      "Bi-directional sync with Stripe, QuickBooks, HubSpot, and ERPs",
      "Automated lead deduplication and conflict-resolution rules"
    ],
    techStack: ["Salesforce REST API", "Composite API", "Bulk API 2.0", "Webhooks / Redis"],
    iconName: "Share2"
  },
  {
    id: "health-audit",
    title: "Comprehensive Org Health & Security Audits",
    tagline: "Uncover hidden performance bottlenecks, security risks, and technical debt.",
    description: "Our senior architects perform a forensic review of your Salesforce org. We analyze code quality, object schema architecture, user access controls, and storage consumption to optimize operational health.",
    deliverables: [
      "Governor limit vulnerability report and SOQL loop identification",
      "Permission Set and Profile access security review (OWASP compliant)",
      "Unused custom fields and legacy metadata pruning plan",
      "Actionable roadmap for performance gains and licensing savings"
    ],
    techStack: ["Apex PMD", "Salesforce Optimizer", "Security Health Check", "Code Analyzer"],
    iconName: "ShieldCheck"
  },
  {
    id: "managed-support",
    title: "Managed Support & Fractional Architect Retainers",
    tagline: "Dedicated senior Salesforce engineering bandwidth without full-time overhead.",
    description: "Avoid the $180k+ annual expense of an in-house Salesforce architect. Our boutique managed retainers give your team on-demand access to certified senior developers, proactive health checks, and 24/7 SLA emergency coverage.",
    deliverables: [
      "Sub-15 minute P1 emergency incident response SLA",
      "3x annual Salesforce seasonal release compatibility audits",
      "User onboarding, security policy updates, and report building",
      "Dedicated Slack/Teams communication with lead engineer"
    ],
    techStack: ["Git / SFDX", "CI/CD Deployment", "Sandbox Refresh", "Dedicated SLA"],
    iconName: "Clock"
  }
];

export const SALESFORCE_PRICING_TIERS: SalesforcePricingTier[] = [
  {
    name: "Ad-Hoc Support",
    badge: "Flexible Hourly",
    rate: "$95 - $125",
    period: "per hour",
    idealFor: "Quick bug fixes, urgent LWC updates, and targeted technical troubleshooting.",
    deliverables: [
      "No long-term commitment",
      "Direct communication with certified engineer",
      "Time tracked in transparent 15-minute increments",
      "Sandbox deployment & automated regression testing"
    ],
    sla: "Standard 24h response"
  },
  {
    name: "Dedicated Sprint",
    badge: "High Velocity",
    rate: "$4,000 - $6,500",
    period: "per 2-week sprint",
    idealFor: "Building custom LWC features, complex API integrations, or Flow modernization.",
    deliverables: [
      "Full 2-week focused sprint allocation",
      "Sprint planning, daily async standups, and demo",
      "100% source code ownership in your GitHub",
      "Comprehensive test coverage & documentation",
      "Standard 30-day post-sprint warranty"
    ],
    sla: "Daily communication & priority queue",
    highlighted: true
  },
  {
    name: "Managed Retainer",
    badge: "Continuous Excellence",
    rate: "From $2,500",
    period: "per month",
    idealFor: "Ongoing admin, security reviews, feature releases, and emergency production SLAs.",
    deliverables: [
      "Guaranteed monthly engineering hours pool",
      "Sub-15 minute critical P1 incident response SLA",
      "3x annual seasonal release regression testing",
      "Proactive health monitoring & security tuning",
      "Unused hours roll over for 30 days"
    ],
    sla: "15-minute P1 emergency SLA"
  }
];

export const SALESFORCE_FAQS = [
  {
    question: "Do we retain 100% ownership of custom Apex and LWC code?",
    answer: "Yes, absolutely. We do not use proprietary locked packages. Every custom Lightning Web Component, Apex class, trigger framework, and Flow is deployed directly into your repository and production org with 100% intellectual property ownership from day one."
  },
  {
    question: "How do you handle deployments and sandbox testing?",
    answer: "We follow strict modern Salesforce DevOps best practices using SFDX and Git version control. Code is developed in isolated developer sandboxes, tested against full copy sandboxes with automated Apex unit test suites, and deployed to production via zero-downtime release pipelines."
  },
  {
    question: "Can you fix our existing SOQL and CPU governor limit crashes?",
    answer: "Yes. Governor limit crashes are typically caused by unbulkified trigger logic, SOQL queries inside FOR loops, or cascading recursive Flows. Our architectural health audit identifies the exact execution culprits and refactors them into efficient bulkified services that run safely well beneath Salesforce threshold limits."
  },
  {
    question: "Can Salesforce integrate with our custom Next.js frontend or Shopify store?",
    answer: "Yes, seamlessly. We specialize in connecting modern web applications and e-commerce platforms with Salesforce. We build resilient webhook ingestion endpoints and Redis-buffered queues that ensure two-way data consistency with zero dropped leads or rate-limit throttling."
  },
  {
    question: "What is your turnaround time for urgent Salesforce issues?",
    answer: "For clients on our managed support retainers, critical org-blocking issues carry a guaranteed sub-15 minute response SLA. For ad-hoc clients, we typically respond within 2 to 4 business hours."
  },
  {
    question: "Are your developers certified Salesforce Technical Architects?",
    answer: "Yes. Our Salesforce practice is staffed exclusively by certified professionals including Salesforce Certified Platform Developers, Technical Architects, and Administrators with years of real-world production experience."
  }
];
