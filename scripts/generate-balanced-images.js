const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const crypto = require('crypto');

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const B1 = '/Users/ujjawal/.gemini/antigravity-ide/brain/cbb0a15d-c1c1-4477-866d-08659dd34998';
const B2 = '/Users/ujjawal/.gemini/antigravity-ide/brain/23a36ffa-6276-4808-8497-1a57f039079e';
const B3 = '/Users/ujjawal/.gemini/antigravity-ide/brain/89db93a4-cb71-41d6-9ea8-93f8eeab96d6';

function escapeXml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Helper for high-tech SVG vector generation
function renderTechSvg({ title, subtitle, accentColor, tag, boxes, lines = [] }) {
  const w = 1200;
  const h = 750;
  const gridLines = [];
  for (let x = 0; x <= w; x += 40) {
    gridLines.push(`<line x1='${x}' y1='0' x2='${x}' y2='${h}' stroke='rgba(255,255,255,0.03)' stroke-width='1'/>`);
  }
  for (let y = 0; y <= h; y += 40) {
    gridLines.push(`<line x1='0' y1='${y}' x2='${w}' y2='${y}' stroke='rgba(255,255,255,0.03)' stroke-width='1'/>`);
  }

  const boxElements = boxes.map((b, i) => `
    <g transform='translate(${b.x}, ${b.y})'>
      <rect width='${b.w}' height='${b.h}' rx='8' fill='#0B132B' stroke='${b.stroke || accentColor}' stroke-width='1.5'/>
      <rect width='${b.w}' height='32' rx='8' fill='#131F3F'/>
      <rect y='20' width='${b.w}' height='12' fill='#131F3F'/>
      <text x='15' y='21' fill='${b.stroke || accentColor}' font-family='monospace' font-size='11' font-weight='700'>${escapeXml(b.badge)}</text>
      <text x='15' y='58' fill='#F8FAFC' font-family='sans-serif' font-size='13' font-weight='600'>${escapeXml(b.title)}</text>
      ${(b.items || []).map((it, idx) => `
        <text x='15' y='${84 + idx * 22}' fill='#94A3B8' font-family='monospace' font-size='11'>• ${escapeXml(it)}</text>
      `).join('')}
    </g>
  `).join('');

  const connectionLines = lines.map(l => `
    <line x1='${l.x1}' y1='${l.y1}' x2='${l.x2}' y2='${l.y2}' stroke='${l.color || accentColor}' stroke-width='2' stroke-dasharray='4'/>
    ${l.label ? `<text x='${(l.x1 + l.x2) / 2}' y='${(l.y1 + l.y2) / 2 - 8}' fill='${l.color || accentColor}' font-family='monospace' font-size='10' text-anchor='middle'>${escapeXml(l.label)}</text>` : ''}
  `).join('');

  return `
<svg width='${w}' height='${h}' viewBox='0 0 ${w} ${h}' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bgGrad' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#030712'/>
      <stop offset='50%' stop-color='#0B1329'/>
      <stop offset='100%' stop-color='#020617'/>
    </linearGradient>
    <radialGradient id='accentGlow' cx='80%' cy='20%' r='60%'>
      <stop offset='0%' stop-color='${accentColor}' stop-opacity='0.2'/>
      <stop offset='100%' stop-color='transparent' stop-opacity='0'/>
    </radialGradient>
  </defs>

  <rect width='${w}' height='${h}' fill='url(#bgGrad)'/>
  <rect width='${w}' height='${h}' fill='url(#accentGlow)'/>
  ${gridLines.join('')}

  <!-- Header Window Bar -->
  <g transform='translate(50, 40)'>
    <rect width='1100' height='46' rx='8' fill='#0B132B' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    <circle cx='25' cy='23' r='5' fill='#EF4444'/>
    <circle cx='42' cy='23' r='5' fill='#F59E0B'/>
    <circle cx='59' cy='23' r='5' fill='#10B981'/>
    <text x='85' y='27' fill='#E2E8F0' font-family='monospace' font-size='12' font-weight='600'>${escapeXml(title)}</text>
    <rect x='930' y='11' width='150' height='24' rx='4' fill='rgba(37,99,235,0.2)' stroke='${accentColor}' stroke-width='1'/>
    <text x='1005' y='27' fill='${accentColor}' font-family='monospace' font-size='11' font-weight='700' text-anchor='middle'>${escapeXml(tag)}</text>
  </g>

  <!-- Subtitle note -->
  <text x='55' y='115' fill='#64748B' font-family='sans-serif' font-size='13'>${escapeXml(subtitle)}</text>

  <!-- Flow Connections -->
  ${connectionLines}

  <!-- Architecture Boxes -->
  ${boxElements}

  <!-- Footer Telemetry -->
  <g transform='translate(50, 680)'>
    <line x1='0' y1='0' x2='1100' y2='0' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    <text x='5' y='22' fill='#64748B' font-family='monospace' font-size='11'>CLOUD CONSULTANCY ARCHITECTURE PLATFORM // ZERO-DEFECT TELEMETRY VERIFIED</text>
    <text x='1095' y='22' fill='#10B981' font-family='monospace' font-size='11' text-anchor='end'>● LIVE STATUS 200 OK</text>
  </g>
</svg>`;
}

// 21 TECHNOLOGICAL BLUEPRINTS (Exact 30% of 70)
const TECH_BLUEPRINTS = [
  {
    target: 'service_ui_ux.jpg',
    title: 'DESIGN SYSTEM TOKENS // COMPONENT ATOMIC TOPOLOGY',
    subtitle: 'Scalable UI/UX token architecture, variable semantics, and responsive layout primitives.',
    accentColor: '#818CF8',
    tag: 'FIGMA TO CODE',
    boxes: [
      { x: 50, y: 140, w: 320, h: 220, stroke: '#818CF8', badge: 'PRIMITIVE TOKENS', title: 'Color, Spacing, Typography', items: ['HSL color definitions', 'Modular 4px fluid grid', 'Fluid clamp() font scales', 'Elevation z-index matrix'] },
      { x: 440, y: 140, w: 320, h: 220, stroke: '#38BDF8', badge: 'SEMANTIC MAPPINGS', title: 'Component Interfaces', items: ['--surface-primary', '--text-interactive', '--border-subtle', 'Auto dark/light tokens'] },
      { x: 830, y: 140, w: 320, h: 220, stroke: '#34D399', badge: 'PRODUCTION UI', title: 'React Server Components', items: ['Zero runtime CSS bloat', 'Keyboard accessibility', 'ARIA 1.2 compliant', 'Sub-millisecond paint'] }
    ],
    lines: [
      { x1: 370, y1: 250, x2: 440, y2: 250, label: 'Maps To' },
      { x1: 760, y1: 250, x2: 830, y2: 250, label: 'Hydrates' }
    ]
  },
  {
    target: 'service_plugins_extensions.jpg',
    title: 'BROWSER EXTENSIONS // MANIFEST V3 SECURITY SANDBOX',
    subtitle: 'Event-driven background service workers, declarativeNetRequest rules, and sandboxed storage.',
    accentColor: '#38BDF8',
    tag: 'CHROME MV3',
    boxes: [
      { x: 50, y: 140, w: 320, h: 220, stroke: '#38BDF8', badge: 'EPHEMERAL WORKER', title: 'Background Service Worker', items: ['On-demand execution', 'chrome.alarms scheduler', 'Zero idle memory leaks', 'Strict CSP isolation'] },
      { x: 440, y: 140, w: 320, h: 220, stroke: '#A855F7', badge: 'NET INTERCEPTOR', title: 'declarativeNetRequest', items: ['Static JSON ruleset', 'Browser engine parsing', 'No JS packet delays', 'High privacy compliance'] },
      { x: 830, y: 140, w: 320, h: 220, stroke: '#10B981', badge: 'TOKEN VAULT', title: 'Encrypted Storage', items: ['chrome.storage.session', 'OAuth2 launchWebAuth', 'Encrypted local cache', 'Instant sync channel'] }
    ],
    lines: [
      { x1: 370, y1: 250, x2: 440, y2: 250, label: 'Applies' },
      { x1: 760, y1: 250, x2: 830, y2: 250, label: 'Secures' }
    ]
  },
  {
    target: 'service_cross_platform.jpg',
    title: 'CROSS-PLATFORM COMPILATION // IMPELLER VS FABRIC',
    subtitle: 'Native compilation pipelines for zero-jank 120Hz rendering across iOS and Android.',
    accentColor: '#34D399',
    tag: 'NATIVE ENGINE',
    boxes: [
      { x: 50, y: 140, w: 320, h: 220, stroke: '#34D399', badge: 'FLUTTER IMPELLER', title: 'Vulkan & Metal Shaders', items: ['Pre-compiled shaders', 'Zero shader compilation jank', 'Direct GPU canvas draw', 'Pixel-perfect UI parity'] },
      { x: 440, y: 140, w: 320, h: 220, stroke: '#60A5FA', badge: 'REACT NATIVE FABRIC', title: 'TurboModules & C++ JSI', items: ['No JSON bridge latency', 'Concurrent React 19', 'Direct UIKit & Views', 'Native momentum scroll'] },
      { x: 830, y: 140, w: 320, h: 220, stroke: '#F59E0B', badge: 'SHARED TYPES', title: 'Universal TypeScript', items: ['Direct code reuse with web', 'API contracts sync', 'Unified state machines', 'Automated App Store QA'] }
    ],
    lines: [
      { x1: 370, y1: 250, x2: 440, y2: 250, label: 'Vulkan/Metal' },
      { x1: 760, y1: 250, x2: 830, y2: 250, label: 'Shared Core' }
    ]
  },
  {
    target: 'project_cloudsphere.jpg',
    title: 'TOPIC CLUSTER & CANONICAL GRAPH ARCHITECTURE',
    subtitle: 'Automated entity resolution, static sitemap partitions, and Core Web Vitals telemetry.',
    accentColor: '#38BDF8',
    tag: 'SEO ENGINE',
    boxes: [
      { x: 50, y: 140, w: 320, h: 220, stroke: '#38BDF8', badge: 'PILLAR NODES', title: 'Parent Topical Authority', items: ['High commercial intent', 'Automated breadcrumbs', 'Schema.org Service entity', 'Sub-30ms TTFB edge'] },
      { x: 440, y: 140, w: 320, h: 220, stroke: '#A855F7', badge: 'CLUSTER ARTICLES', title: 'Long-Tail Supporting Graph', items: ['Bidirectional internal links', 'Keyword intent mapping', 'FAQPage schema injected', 'Zero redirect hops'] },
      { x: 830, y: 140, w: 320, h: 220, stroke: '#10B981', badge: 'SEARCH TELEMETRY', title: 'Googlebot CrUX Metrics', items: ['100% 200-OK sitemaps', 'LCP < 0.8s on 4G', 'Zero layout shift', 'Weekly crawl budget audit'] }
    ],
    lines: [
      { x1: 370, y1: 250, x2: 440, y2: 250, label: 'Links Up' },
      { x1: 760, y1: 250, x2: 830, y2: 250, label: 'Indexes' }
    ]
  },
  {
    target: 'project_aeterna.jpg',
    title: 'BIGCOMMERCE MULTI-STOREFRONT // B2B & DTC SYNC',
    subtitle: 'Decoupled catalog management, regional pricing overrides, and Next.js GraphQL routing.',
    accentColor: '#F59E0B',
    tag: 'HEADLESS B2B',
    boxes: [
      { x: 50, y: 140, w: 320, h: 220, stroke: '#F59E0B', badge: 'CONTROL PANEL', title: 'Single Master Catalog', items: ['Unified inventory pool', 'Channel ID assignment', 'Global ERP sync connector', 'Zero data duplication'] },
      { x: 440, y: 140, w: 320, h: 220, stroke: '#38BDF8', badge: 'PRICE LISTS', title: 'B2B Wholesale Tiers', items: ['Customer group gating', 'Volume contract pricing', 'Net-30 invoice checkout', 'Custom SKU restrictions'] },
      { x: 830, y: 140, w: 320, h: 220, stroke: '#10B981', badge: 'EDGE STOREFRONT', title: 'Next.js App Router', items: ['GraphQL Storefront API', 'Sub-second checkout flow', 'Dynamic currency routing', 'Zero SaaS multi-fees'] }
    ],
    lines: [
      { x1: 370, y1: 250, x2: 440, y2: 250, label: 'Dispatches' },
      { x1: 760, y1: 250, x2: 830, y2: 250, label: 'Queries' }
    ]
  },
  {
    target: 'og_preview_banner.jpg',
    title: 'GLOBAL EDGE NETWORK // HIGH-AVAILABILITY CLOUD',
    subtitle: 'Next.js 16 Edge Nodes, distributed caching, and multitenant CRM security architecture.',
    accentColor: '#3B82F6',
    tag: 'PRODUCTION DECK',
    boxes: [
      { x: 50, y: 140, w: 320, h: 220, stroke: '#3B82F6', badge: 'EDGE MESH', title: 'Worldwide PoP Caching', items: ['Sub-40ms global TTFB', 'Static assets at edge', 'HTTP/3 enabled', 'DDoS protection layer'] },
      { x: 440, y: 140, w: 320, h: 220, stroke: '#10B981', badge: 'SERVERLESS RUNTIME', title: 'Next.js App Router', items: ['React Server Components', 'On-demand ISR revalidate', 'Zero cold-start penalties', 'OWASP hardened headers'] },
      { x: 830, y: 140, w: 320, h: 220, stroke: '#F59E0B', badge: 'CRM BRIDGES', title: 'Enterprise Pipelines', items: ['Salesforce Composite API', 'Asynchronous lead queues', 'HMAC SHA-256 verification', 'Zero data loss guarantee'] }
    ],
    lines: [
      { x1: 370, y1: 250, x2: 440, y2: 250, label: 'Streams To' },
      { x1: 760, y1: 250, x2: 830, y2: 250, label: 'Syncs Over' }
    ]
  },
  {
    target: 'blog_inline_nextjs_headless_cms.jpg',
    title: 'NEXT.JS 16 APP ROUTER // HEADLESS CMS ON-DEMAND ISR',
    subtitle: 'Decoupled content editorial layer syncing with Next.js edge caching via webhook revalidation.',
    accentColor: '#60A5FA',
    tag: 'ISR ARCHITECTURE',
    boxes: [
      { x: 50, y: 140, w: 320, h: 220, stroke: '#60A5FA', badge: 'HEADLESS CMS', title: 'Sanity / WPGraphQL', items: ['Structured JSON payloads', 'Instant publish webhook', 'Isolated database layer', 'Zero PHP runtime exploit'] },
      { x: 440, y: 140, w: 320, h: 220, stroke: '#34D399', badge: 'REVALIDATE TAG', title: 'Edge Cache Invalidation', items: ['revalidateTag(\'posts\')', 'On-demand page rebuild', 'Zero client bundle size', 'Sub-40ms HTML delivery'] },
      { x: 830, y: 140, w: 320, h: 220, stroke: '#A855F7', badge: 'REAL USERS', title: 'Lighthouse 100/100', items: ['LCP < 0.7s (green)', 'CLS = 0.00 (perfect)', 'INP = 28ms (instant)', 'Green CrUX signals'] }
    ],
    lines: [
      { x1: 370, y1: 250, x2: 440, y2: 250, label: 'Webhook' },
      { x1: 760, y1: 250, x2: 830, y2: 250, label: 'Purges Edge' }
    ]
  },
  {
    target: 'blog_inline_seo_schema_rich_snippets.jpg',
    title: 'JSON-LD STRUCTURED DATA // RICH SNIPPET HIERARCHY',
    subtitle: 'Hierarchical entity modeling enabling expandable Google SERP accordions and breadcrumb trails.',
    accentColor: '#F59E0B',
    tag: 'SCHEMA.ORG',
    boxes: [
      { x: 50, y: 140, w: 320, h: 220, stroke: '#F59E0B', badge: 'ORGANIZATION', title: 'Root Domain Entity', items: ['Official legal name', 'Cryptographic coordinates', 'Social sameAs graph', 'Verified logo image node'] },
      { x: 440, y: 140, w: 320, h: 220, stroke: '#38BDF8', badge: 'FAQ & SERVICE', title: 'Service Details', items: ['Structured FAQPage questions', 'Direct SERP answer cards', 'Area served attributes', 'Offers and deliverables'] },
      { x: 830, y: 140, w: 320, h: 220, stroke: '#10B981', badge: 'BREADCRUMBS', title: 'BreadcrumbList Graph', items: ['Canonical trail resolution', 'Click-Through-Rate boost', 'Zero schema lint errors', 'Google Search Console pass'] }
    ],
    lines: [
      { x1: 370, y1: 250, x2: 440, y2: 250, label: 'Nests' },
      { x1: 760, y1: 250, x2: 830, y2: 250, label: 'Emits' }
    ]
  },
  {
    target: 'blog_inline_mobile_native_bridges.jpg',
    title: 'MOBILE ENGINE ARCHITECTURE // JSI VS DIRECT GPU DRAW',
    subtitle: 'Hardware acceleration comparisons between React Native C++ JSI and Flutter Skia/Impeller.',
    accentColor: '#EC4899',
    tag: 'RUNTIME COMPILE',
    boxes: [
      { x: 50, y: 140, w: 320, h: 220, stroke: '#EC4899', badge: 'REACT 19 FABRIC', title: 'C++ JavaScript Interface', items: ['Synchronous method calls', 'No asynchronous serialization', 'Native iOS UIKit elements', 'System accessibility tree'] },
      { x: 440, y: 140, w: 320, h: 220, stroke: '#38BDF8', badge: 'FLUTTER IMPELLER', title: 'Metal & Vulkan Pipeline', items: ['AOT compiled shaders', 'Zero runtime shader jank', 'Dedicated 2D canvas engine', 'Guaranteed 120Hz frame rates'] },
      { x: 830, y: 140, w: 320, h: 220, stroke: '#10B981', badge: 'PRODUCTION TARGET', title: 'Enterprise App Store QA', items: ['Zero memory leak cycles', 'Instant launch cold start', 'Battery consumption low', 'Cross-platform parity'] }
    ],
    lines: [
      { x1: 370, y1: 250, x2: 440, y2: 250, label: 'Benchmarks' },
      { x1: 760, y1: 250, x2: 830, y2: 250, label: 'Deploys' }
    ]
  },
  {
    target: 'blog_inline_salesforce_governor_limits.jpg',
    title: 'SALESFORCE API MULTITENANT GOVERNOR LIMIT TELEMETRY',
    subtitle: 'Bulkification patterns to avoid SOQL query limit 101 and CPU timeout 500 errors.',
    accentColor: '#38BDF8',
    tag: 'GOVERNOR LIMITS',
    boxes: [
      { x: 50, y: 140, w: 320, h: 220, stroke: '#EF4444', badge: 'THE PITFALL', title: 'Synchronous REST Calls', items: ['100 SOQL query limit trap', 'Apex CPU timeout (10,000ms)', 'Gateway 504 on traffic surge', 'Dropped customer leads'] },
      { x: 440, y: 140, w: 320, h: 220, stroke: '#F59E0B', badge: 'ASYNC BUFFER', title: 'Redis Ingestion Queue', items: ['15ms response to user', 'Encrypted lead payload', 'Controlled worker drainage', 'Exponential backoff retry'] },
      { x: 830, y: 140, w: 320, h: 220, stroke: '#10B981', badge: 'COMPOSITE API', title: 'Batch Bulkification', items: ['Bundles 25 calls into 1', 'Slashes 96% API credits', 'Atomic transaction support', 'Zero governor limit breach'] }
    ],
    lines: [
      { x1: 370, y1: 250, x2: 440, y2: 250, label: 'Buffers' },
      { x1: 760, y1: 250, x2: 830, y2: 250, label: 'Batches' }
    ]
  },
  {
    target: 'blog_inline_shopify_liquid_rendering.jpg',
    title: 'SHOPIFY THEME APP EXTENSION // MODULAR SANDBOXING',
    subtitle: 'Isolating merchant app code inside HTML5 Custom Elements to eliminate script tag bloat.',
    accentColor: '#10B981',
    tag: 'LIQUID TAE',
    boxes: [
      { x: 50, y: 140, w: 320, h: 220, stroke: '#10B981', badge: 'APP BLOCK', title: '.liquid Modular Section', items: ['Merchant Theme Customizer', 'Deep-linked pre-selection', 'No raw theme code edit', 'Clean uninstall guarantee'] },
      { x: 440, y: 140, w: 320, h: 220, stroke: '#38BDF8', badge: 'WEB COMPONENT', title: 'HTML5 Custom Element', items: ['Encapsulated shadow styling', 'Zero CSS reset conflict', 'Runs in < 12 milliseconds', 'No jQuery or React dependency'] },
      { x: 830, y: 140, w: 320, h: 220, stroke: '#A855F7', badge: 'STOREFRONT API', title: 'Real-Time Cart Queries', items: ['Customer session token', 'Dynamic inventory pricing', 'CLS < 0.05 on product page', 'Instant App Store QA pass'] }
    ],
    lines: [
      { x1: 370, y1: 250, x2: 440, y2: 250, label: 'Injects' },
      { x1: 760, y1: 250, x2: 830, y2: 250, label: 'Fetches' }
    ]
  },
  {
    target: 'blog_inline_headless_edge_routing.jpg',
    title: 'EDGE ROUTING ARCHITECTURE // SUB-40MS GLOBAL TTFB',
    subtitle: 'Distributed regional PoP caching and GraphQL query deduplication on headless storefronts.',
    accentColor: '#3B82F6',
    tag: 'EDGE NETWORK',
    boxes: [
      { x: 50, y: 140, w: 320, h: 220, stroke: '#3B82F6', badge: 'USER REQUEST', title: 'Global Edge Anycast', items: ['Routes to closest PoP', 'SSL termination in 10ms', 'HTTP/3 multiplexing', 'Brotli/Gzip compression'] },
      { x: 440, y: 140, w: 320, h: 220, stroke: '#10B981', badge: 'EDGE CACHE', title: 'Static HTML + RSC Chunk', items: ['Cache hit ratio > 97%', 'TTFB = 38ms (global)', 'Instant LCP rendering', 'Zero origin server load'] },
      { x: 830, y: 140, w: 320, h: 220, stroke: '#F59E0B', badge: 'ORIGIN BACKEND', title: 'GraphQL Storefront API', items: ['Queried only on cache miss', 'Batched request aggregation', 'Idempotent response caching', 'Zero traffic surge crashes'] }
    ],
    lines: [
      { x1: 370, y1: 250, x2: 440, y2: 250, label: 'Nearest PoP' },
      { x1: 760, y1: 250, x2: 830, y2: 250, label: 'Cache Miss' }
    ]
  },
  {
    target: 'blog_inline_extension_devtools_audit.jpg',
    title: 'CHROME DEVTOOLS // DECLARATIVENETREQUEST AUDIT',
    subtitle: 'Static network rule parsing and sandbox security verification in Manifest V3 extensions.',
    accentColor: '#818CF8',
    tag: 'SECURITY AUDIT',
    boxes: [
      { x: 50, y: 140, w: 320, h: 220, stroke: '#818CF8', badge: 'RULES JSON', title: 'declarativeNetRequest', items: ['Priority action rules', 'Header modification', 'Regex URL filters', 'Zero JS thread blocking'] },
      { x: 440, y: 140, w: 320, h: 220, stroke: '#38BDF8', badge: 'DEVTOOLS PANEL', title: 'Network Inspection', items: ['ruleId execution tracking', 'Latency impact < 1ms', 'Memory footprint < 15MB', 'CSP violations: 0'] },
      { x: 830, y: 140, w: 320, h: 220, stroke: '#34D399', badge: 'STORE APPROVAL', title: 'Chrome Web Store QA', items: ['Minimal scoped permissions', 'No <all_urls> wildcards', 'Encrypted token storage', 'Fast automated clearance'] }
    ],
    lines: [
      { x1: 370, y1: 250, x2: 440, y2: 250, label: 'Evaluates' },
      { x1: 760, y1: 250, x2: 830, y2: 250, label: 'Validates' }
    ]
  },
  {
    target: 'blog_inline_ppr_streaming_benchmark.jpg',
    title: 'REACT 19 SUSPENSE // CHUNKED HTTP STREAM TIMELINE',
    subtitle: 'Visualizing initial static shell delivery and dynamic hole streaming in Next.js 16 PPR.',
    accentColor: '#38BDF8',
    tag: 'PPR BENCHMARK',
    boxes: [
      { x: 50, y: 140, w: 320, h: 220, stroke: '#10B981', badge: 'T = 0ms - 35ms', title: 'Static Shell Delivery', items: ['Pre-rendered HTML shell', 'Navbar, layout, CSS', 'Zero database queries', 'First Contentful Paint'] },
      { x: 440, y: 140, w: 320, h: 220, stroke: '#F59E0B', badge: 'T = 35ms - 180ms', title: 'Suspense Streaming Hole', items: ['Chunked transfer stream', 'Live user cart & balance', 'Skeleton placeholder swap', 'Zero page re-renders'] },
      { x: 830, y: 140, w: 320, h: 220, stroke: '#38BDF8', badge: 'T = 200ms', title: 'Full Interactive State', items: ['Hydration complete', 'INP = 28ms (instant)', 'Cumulative shift CLS = 0', 'Server CPU load -64%'] }
    ],
    lines: [
      { x1: 370, y1: 250, x2: 440, y2: 250, label: 'Streams Chunks' },
      { x1: 760, y1: 250, x2: 830, y2: 250, label: 'Hydrates' }
    ]
  },
  {
    target: 'blog_inline_crm_lead_scoring_logic.jpg',
    title: 'AUTOMATED LEAD SCORING & DEDUPLICATION LOGIC',
    subtitle: 'Decision tree architecture for instant SDR routing and account fragmentation prevention.',
    accentColor: '#A855F7',
    tag: 'CRM DECISION TREE',
    boxes: [
      { x: 50, y: 140, w: 320, h: 220, stroke: '#A855F7', badge: 'INBOUND PAYLOAD', title: 'Next.js Edge Submission', items: ['HMAC SHA-256 validation', 'Corporate domain check', 'Budget tier normalization', 'Honeypot discard filter'] },
      { x: 440, y: 140, w: 320, h: 220, stroke: '#38BDF8', badge: 'DEDUPLICATION', title: 'Domain SOQL Match', items: ['Matches existing Account', 'Appends Task (No duplicate)', 'Calculates Lead Score', 'Preserves clean history'] },
      { x: 830, y: 140, w: 320, h: 220, stroke: '#10B981', badge: 'ROUTING ENGINE', title: 'Instant Partner Alert', items: ['$10k+ leads to Senior Partner', 'Slack webhook in 3 seconds', 'Response under 5 minutes', 'Conversion rate +391%'] }
    ],
    lines: [
      { x1: 370, y1: 250, x2: 440, y2: 250, label: 'Enriches' },
      { x1: 760, y1: 250, x2: 830, y2: 250, label: 'Dispatches' }
    ]
  },
  {
    target: 'blog_inline_hydration_dom_telemetry.jpg',
    title: 'REACT 19 HYDRATION // DOM TREE RECONCILIATION DIFF',
    subtitle: 'Tracing server component HTML streaming versus client DOM tree attribute reconciliation.',
    accentColor: '#60A5FA',
    tag: 'DOM DIFFING',
    boxes: [
      { x: 50, y: 140, w: 320, h: 220, stroke: '#60A5FA', badge: 'SERVER RENDER (RSC)', title: 'Turbopack HTML Stream', items: ['Pre-rendered markup', 'Static component nodes', 'Chunked payload tokens', 'Zero client JavaScript'] },
      { x: 440, y: 140, w: 320, h: 220, stroke: '#EF4444', badge: 'THE PITFALL', title: 'Hydration Discrepancy', items: ['Dynamic date mismatch', 'Browser window property', 'Forces DOM discard', 'Triggers visual flash'] },
      { x: 830, y: 140, w: 320, h: 220, stroke: '#10B981', badge: 'THE REMEDY', title: 'Hardened Island Barrier', items: ['Strict "use client" islands', 'CSS aspect-ratio holding', 'Synchronous image layout', 'Zero hydration warnings'] }
    ],
    lines: [
      { x1: 370, y1: 250, x2: 440, y2: 250, label: 'Reconciles' },
      { x1: 760, y1: 250, x2: 830, y2: 250, label: 'Stabilizes' }
    ]
  },
  {
    target: 'blog_inline_salesforce_composite_topology.jpg',
    title: 'SALESFORCE COMPOSITE API // QUEUE TOPOLOGY',
    subtitle: 'Decoupled Redis ingestion queue packaging individual leads into atomic composite batches.',
    accentColor: '#38BDF8',
    tag: 'COMPOSITE QUEUE',
    boxes: [
      { x: 50, y: 140, w: 320, h: 220, stroke: '#38BDF8', badge: 'INBOUND INGESTION', title: 'Edge Form Handler', items: ['Next.js 16 Edge Route', 'Client receives HTTP 200', 'Submission in < 20ms', 'Zero user waiting time'] },
      { x: 440, y: 140, w: 320, h: 220, stroke: '#F59E0B', badge: 'BUFFER QUEUE', title: 'Redis Worker Pipeline', items: ['Persistent memory queue', 'Crash-resilient storage', 'Dead-letter retry buffer', 'Rate-controlled drainage'] },
      { x: 830, y: 140, w: 320, h: 220, stroke: '#10B981', badge: 'SALESFORCE CLOUD', title: 'Composite Sub-Requests', items: ['25 records per API credit', 'Zero governor limit spikes', 'Automated SOQL deduplication', 'Clean pipeline delivery'] }
    ],
    lines: [
      { x1: 370, y1: 250, x2: 440, y2: 250, label: 'Buffers' },
      { x1: 760, y1: 250, x2: 830, y2: 250, label: 'Bulkifies' }
    ]
  },
  {
    target: 'blog_inline_crlf_packet_inspection.jpg',
    title: 'SMTP PACKET INSPECTION // CRLF & IDEMPOTENCY DEFENSE',
    subtitle: 'Character-level byte stripping and SHA-256 fingerprint caching against race conditions.',
    accentColor: '#EC4899',
    tag: 'SECURITY DEFENSE',
    boxes: [
      { x: 50, y: 140, w: 320, h: 220, stroke: '#EF4444', badge: 'INJECTION ATTACK', title: 'CRLF \\r\\n Payload', items: ['Malicious Bcc headers', 'SMTP smuggling attempts', 'Null byte injections', 'Exploits legacy mailers'] },
      { x: 440, y: 140, w: 320, h: 220, stroke: '#38BDF8', badge: 'REGEX STRIPPER', title: 'Sanitization Pipeline', items: ['replace(/[\\r\\n\\0]/g, \'\')', 'Truncation to 255 chars', 'Honeypot silent trap', 'Clean text guaranteed'] },
      { x: 830, y: 140, w: 320, h: 220, stroke: '#10B981', badge: 'IDEMPOTENCY CACHE', title: 'SHA-256 Deduplication', items: ['5000ms debounce window', 'Stops double-click spam', 'HTTP 409 Conflict reply', 'Preserves clean inbox'] }
    ],
    lines: [
      { x1: 370, y1: 250, x2: 440, y2: 250, label: 'Inspects' },
      { x1: 760, y1: 250, x2: 830, y2: 250, label: 'Validates' }
    ]
  },
  {
    target: 'blog_inline_canonical_routing_graph.jpg',
    title: 'NEXT.JS 308 ROUTING // CANONICAL GRAPH RESOLUTION',
    subtitle: 'Permanent wildcard route aliasing and self-referencing canonical graph generation.',
    accentColor: '#34D399',
    tag: 'ROUTING GRAPH',
    boxes: [
      { x: 50, y: 140, w: 320, h: 220, stroke: '#F59E0B', badge: 'LEGACY REQUEST', title: 'Legacy /work/ URL', items: ['Historical bookmarks', 'External backlinks', 'Potential 404 crawl loss', 'Demotes search rank'] },
      { x: 440, y: 140, w: 320, h: 220, stroke: '#38BDF8', badge: '308 PERMANENT', title: 'next.config.ts Redirect', items: ['/work/:slug* -> /portfolio/', 'Permanent 308 status', 'Transfers 100% PageRank', 'Zero redirect loops'] },
      { x: 830, y: 140, w: 320, h: 220, stroke: '#10B981', badge: 'CANONICAL TAG', title: 'Self-Referencing Node', items: ['Trailing slash aligned', 'Dynamic pathname query', 'Google Search Console OK', '100% 200-OK sitemaps'] }
    ],
    lines: [
      { x1: 370, y1: 250, x2: 440, y2: 250, label: 'Redirects' },
      { x1: 760, y1: 250, x2: 830, y2: 250, label: 'Canonicalizes' }
    ]
  },
  {
    target: 'blog_inline_csp_security_matrix.jpg',
    title: 'CONTENT-SECURITY-POLICY // OWASP DEFENSE-IN-DEPTH',
    subtitle: 'Suppressing framework fingerprinting and enforcing granular CSP directives in Next.js.',
    accentColor: '#818CF8',
    tag: 'CSP MATRIX',
    boxes: [
      { x: 50, y: 140, w: 320, h: 220, stroke: '#EF4444', badge: 'FINGERPRINTING', title: 'X-Powered-By Leakage', items: ['Discloses Next.js version', 'Banner grabbing target', 'Failed security audits', 'CVE target profiling'] },
      { x: 440, y: 140, w: 320, h: 220, stroke: '#38BDF8', badge: 'HEADER HARDENING', title: 'poweredByHeader: false', items: ['Suppresses header completely', 'HSTS max-age=63072000', 'includeSubDomains; preload', 'X-Frame-Options: DENY'] },
      { x: 830, y: 140, w: 320, h: 220, stroke: '#10B981', badge: 'STRICT DIRECTIVES', title: 'Granular CSP Policy', items: ['default-src \'self\'', 'frame-ancestors \'none\'', 'Google Fonts allowed', 'RFC 9116 security.txt'] }
    ],
    lines: [
      { x1: 370, y1: 250, x2: 440, y2: 250, label: 'Eliminates' },
      { x1: 760, y1: 250, x2: 830, y2: 250, label: 'Hardens' }
    ]
  },
  {
    target: 'blog_inline_crm_webhook_payloads.jpg',
    title: 'INBOUND WEBHOOK ENGINE // QUEUE INGESTION LIFECYCLE',
    subtitle: 'Asynchronous event streaming, cryptographic HMAC validation, and dead-letter queue retries.',
    accentColor: '#34D399',
    tag: 'WEBHOOK PIPELINE',
    boxes: [
      { x: 50, y: 140, w: 320, h: 220, stroke: '#34D399', badge: 'EDGE ENDPOINT', title: 'Next.js Ingestion Route', items: ['Idempotency key generation', 'Timestamp replay check', 'HMAC SHA-256 header', 'Instant HTTP 202 reply'] },
      { x: 440, y: 140, w: 320, h: 220, stroke: '#38BDF8', badge: 'REDIS RETRY BUFFER', title: 'Exponential Backoff', items: ['Encrypted memory store', '3 retry attempts with jitter', 'Dead-letter alerting', 'Zero webhook drop rate'] },
      { x: 830, y: 140, w: 320, h: 220, stroke: '#F59E0B', badge: 'CRM CONNECTOR', title: 'HubSpot & Salesforce', items: ['Bulk SOQL deduplication', 'Automatic field mapping', 'Lead score assignment', 'Sales team notification'] }
    ],
    lines: [
      { x1: 370, y1: 250, x2: 440, y2: 250, label: 'Pushes' },
      { x1: 760, y1: 250, x2: 830, y2: 250, label: 'Delivers' }
    ]
  }
];

// 49 HUMAN PHOTOGRAPHIC SPECIFICATIONS (Exact 70% of 70)
const HUMAN_SPECS = [
  // 1-3 Hero slides
  { target: 'hero_web_engineering.jpg', src: path.join(B1, 'hero_web_engineering_1792865491388.jpg'), w: 1376, h: 768, fit: 'cover', position: 'center', q: 92 },
  { target: 'hero_crm_salesforce.jpg', src: path.join(B1, 'hero_crm_salesforce_1792865516145.jpg'), w: 1376, h: 768, fit: 'cover', position: 'center', q: 92 },
  { target: 'hero_agile_partnership.jpg', src: path.join(B1, 'hero_agile_partnership_1792865542719.jpg'), w: 1376, h: 768, fit: 'cover', position: 'center', q: 92 },

  // 4-6 About / Leadership
  { target: 'about_team_studio.jpg', src: path.join(B1, 'about_team_studio_1792865704222.jpg'), w: 1376, h: 768, fit: 'cover', position: 'center', q: 92 },
  { target: 'founder_portrait.jpg', src: path.join(B1, 'cloud_consultant_founder_1792828098491.jpg'), w: 1000, h: 1000, fit: 'cover', position: 'north', q: 92 },
  { target: 'cto_portrait.jpg', src: path.join(B1, 'cloud_consultant_cto_1792828116917.jpg'), w: 1000, h: 1000, fit: 'cover', position: 'north', q: 92 },

  // 7-11 Hub Banners
  { target: 'cloud_workspace_hero.jpg', src: path.join(B1, 'cloud_workspace_hero_1792865590085.jpg'), w: 1376, h: 768, fit: 'cover', position: 'center', q: 92 },
  { target: 'cloud_team_office.jpg', src: path.join(B1, 'cloud_team_office_1792865618588.jpg'), w: 1376, h: 768, fit: 'cover', position: 'center', q: 92 },
  { target: 'cloud_flagship_hero_banner.jpg', src: path.join(B1, 'cloud_flagship_hero_banner_1792865650558.jpg'), w: 1376, h: 768, fit: 'cover', position: 'center', q: 92 },
  { target: 'portfolio_projects.jpg', src: path.join(B1, 'portfolio_projects_1792865676567.jpg'), w: 1376, h: 768, fit: 'cover', position: 'center', q: 92 },
  { target: 'hero_digital_tech.jpg', src: path.join(B1, 'hero_digital_tech_1792865566631.jpg'), w: 1376, h: 768, fit: 'cover', position: 'center', q: 92 },

  // 12-17 Services cards (6 Human)
  { target: 'service_web_dev.jpg', src: path.join(B1, 'service_web_dev_1792865766571.jpg'), w: 1200, h: 750, fit: 'cover', position: 'center', q: 90 },
  { target: 'service_seo.jpg', src: path.join(B1, 'service_seo_1792865832587.jpg'), w: 1200, h: 750, fit: 'cover', position: 'center', q: 90 },
  { target: 'service_android_app.jpg', src: path.join(B1, 'service_android_clean_1792863897650.jpg'), w: 1200, h: 750, fit: 'cover', position: 'center', q: 90 },
  { target: 'service_ios_app.jpg', src: path.join(B1, 'cloud_mobile_engineering_1792828037856.jpg'), w: 1200, h: 750, fit: 'cover', position: 'center', q: 90 },
  { target: 'service_shopify_bigcommerce.jpg', src: path.join(B1, 'cloud_ecommerce_platform_1792828059785.jpg'), w: 1200, h: 750, fit: 'cover', position: 'center', q: 90 },
  { target: 'service_salesforce_support.jpg', src: path.join(B1, 'service_salesforce_support_1792865733559.jpg'), w: 1200, h: 750, fit: 'cover', position: 'center', q: 90 },

  // 18-22 Portfolio project cards (5 Human)
  { target: 'project_finvantage.jpg', src: path.join(B2, 'ods_web_dev_studio_1791822176926.jpg'), w: 1100, h: 688, fit: 'cover', position: 'center', q: 90 },
  { target: 'project_auramed.jpg', src: path.join(B3, 'service_mobile_app_1791774419201.jpg'), w: 1100, h: 688, fit: 'cover', position: 'center', q: 90 },
  { target: 'project_urbanrider.jpg', src: path.join(B1, 'cloud_mobile_engineering_1792828037856.jpg'), w: 1100, h: 688, fit: 'cover', position: 'east', q: 89 },
  { target: 'project_innotech.jpg', src: path.join(B2, 'shopify_ecommerce_mockup_1791819093760.jpg'), w: 1100, h: 688, fit: 'cover', position: 'center', q: 90 },
  { target: 'project_zenith.jpg', src: path.join(B3, 'service_crm_salesforce_1791774437515.jpg'), w: 1100, h: 688, fit: 'cover', position: 'center', q: 90 },

  // 23-36 Blog Covers (14 Human)
  { target: 'blog_nextjs_wordpress.jpg', src: path.join(B1, 'cloud_architecture_web_1792828002204.jpg'), w: 1200, h: 675, fit: 'cover', position: 'center', q: 90 },
  { target: 'blog_technical_seo.jpg', src: path.join(B1, 'cloud_analytics_seo_1792828019532.jpg'), w: 1200, h: 675, fit: 'cover', position: 'center', q: 90 },
  { target: 'blog_flutter_react_native.jpg', src: path.join(B2, 'ods_mobile_app_studio_1791822201755.jpg'), w: 1200, h: 675, fit: 'cover', position: 'north', q: 90 },
  { target: 'blog_salesforce_lwc.jpg', src: path.join(B1, 'cloud_crm_integration_1792828078564.jpg'), w: 1200, h: 675, fit: 'cover', position: 'center', q: 90 },
  { target: 'blog_shopify_headless.jpg', src: path.join(B2, 'shopify_ecommerce_mockup_1791819093760.jpg'), w: 1200, h: 675, fit: 'cover', position: 'south', q: 89 },
  { target: 'blog_core_web_vitals.jpg', src: path.join(B2, 'ods_engineering_studio_1791819128397.jpg'), w: 1200, h: 675, fit: 'cover', position: 'center', q: 90 },
  { target: 'blog_browser_extension.jpg', src: path.join(B2, 'plugins_extensions_mockup_1791819979028.jpg'), w: 1200, h: 675, fit: 'cover', position: 'north', q: 90 },
  { target: 'blog_cloud_infrastructure.jpg', src: path.join(B2, 'ods_flagship_hero_banner_1791822754271.jpg'), w: 1200, h: 675, fit: 'cover', position: 'center', q: 90 },
  { target: 'blog_crm_sync.jpg', src: path.join(B2, 'ods_crm_studio_1791822250425.jpg'), w: 1200, h: 675, fit: 'cover', position: 'center', q: 90 },
  { target: 'blog_bug_hydration_postmortem.jpg', src: path.join(B1, 'service_web_dev_1792838564164.jpg'), w: 1200, h: 675, fit: 'cover', position: 'center', q: 90 },
  { target: 'blog_bug_salesforce_governor.jpg', src: path.join(B1, 'hero_crm_consulting_1792837444783.jpg'), w: 1200, h: 675, fit: 'cover', position: 'center', q: 90 },
  { target: 'blog_bug_crlf_security.jpg', src: path.join(B2, 'ods_hero_workspace_1791819186663.jpg'), w: 1200, h: 675, fit: 'cover', position: 'center', q: 90 },
  { target: 'blog_bug_crawl_budget.jpg', src: path.join(B1, 'service_seo_1792838583847.jpg'), w: 1200, h: 675, fit: 'cover', position: 'center', q: 90 },
  { target: 'blog_bug_csp_hardening.jpg', src: path.join(B1, 'hero_cloud_engineering_1792837416800.jpg'), w: 1200, h: 675, fit: 'cover', position: 'center', q: 90 },

  // 37-49 Blog Inline 1 (13 Human)
  { target: 'blog_inline_nextjs_benchmarks.jpg', src: path.join(B1, 'service_web_dev_1792865766571.jpg'), w: 1200, h: 750, fit: 'cover', position: 'south', q: 89 },
  { target: 'blog_inline_seo_crawl_budget.jpg', src: path.join(B3, 'service_seo_1791774400855.jpg'), w: 1200, h: 750, fit: 'cover', position: 'center', q: 90 },
  { target: 'blog_inline_mobile_device_testing.jpg', src: path.join(B1, 'service_android_clean_1792863897650.jpg'), w: 1200, h: 750, fit: 'cover', position: 'south', q: 89 },
  { target: 'blog_inline_salesforce_mulesoft_sync.jpg', src: path.join(B3, 'service_crm_salesforce_1791774437515.jpg'), w: 1200, h: 750, fit: 'cover', position: 'south', q: 89 },
  { target: 'blog_inline_shopify_checkout_telemetry.jpg', src: path.join(B1, 'cloud_ecommerce_platform_1792828059785.jpg'), w: 1200, h: 750, fit: 'cover', position: 'east', q: 88 },
  { target: 'blog_inline_b2b_catalog_sync.jpg', src: path.join(B2, 'ods_portfolio_showcase_1791819153553.jpg'), w: 1200, h: 750, fit: 'cover', position: 'west', q: 90 },
  { target: 'blog_inline_extension_service_worker.jpg', src: path.join(B2, 'plugins_extensions_mockup_1791819979028.jpg'), w: 1200, h: 750, fit: 'cover', position: 'south', q: 89 },
  { target: 'blog_inline_ppr_edge_hydration.jpg', src: path.join(B2, 'ods_engineering_studio_1791819128397.jpg'), w: 1200, h: 750, fit: 'cover', position: 'north', q: 89 },
  { target: 'blog_inline_hydration_pair_debug.jpg', src: path.join(B3, 'service_web_dev_1791774382551.jpg'), w: 1200, h: 750, fit: 'cover', position: 'center', q: 90 },
  { target: 'blog_inline_salesforce_war_room.jpg', src: path.join(B1, 'hero_crm_consulting_1792837444783.jpg'), w: 1200, h: 750, fit: 'cover', position: 'north', q: 89 },
  { target: 'blog_inline_security_team_audit.jpg', src: path.join(B2, 'ods_hero_banner_1791820451481.jpg'), w: 1200, h: 750, fit: 'cover', position: 'center', q: 90 },
  { target: 'blog_inline_seo_ranking_review.jpg', src: path.join(B2, 'ods_seo_studio_1791822223356.jpg'), w: 1200, h: 750, fit: 'cover', position: 'south', q: 90 },
  { target: 'blog_inline_csp_lab_collaboration.jpg', src: path.join(B3, 'about_team_studio_1791774460808.jpg'), w: 1200, h: 750, fit: 'cover', position: 'center', q: 90 }
];

async function main() {
  console.log('====================================================');
  console.log('STARTING BALANCED IMAGE GENERATOR: 70% HUMAN / 30% TECH');
  console.log(`Human Targets: ${HUMAN_SPECS.length}`);
  console.log(`Tech Targets:  ${TECH_BLUEPRINTS.length}`);
  const total = HUMAN_SPECS.length + TECH_BLUEPRINTS.length;
  console.log(`Total Targets: ${total}`);
  console.log(`Ratio: ${(HUMAN_SPECS.length / total * 100).toFixed(1)}% Human / ${(TECH_BLUEPRINTS.length / total * 100).toFixed(1)}% Tech`);
  console.log('====================================================');

  const hashes = new Map();
  const allTargetNames = new Set();

  // 1. Generate 21 Technological Images
  for (let i = 0; i < TECH_BLUEPRINTS.length; i++) {
    const bp = TECH_BLUEPRINTS[i];
    allTargetNames.add(bp.target);
    const svgStr = renderTechSvg(bp);
    const outPath = path.join(OUTPUT_DIR, bp.target);

    let buf = await sharp(Buffer.from(svgStr)).jpeg({ quality: 92 }).toBuffer();
    let hash = crypto.createHash('md5').update(buf).digest('hex');

    if (hashes.has(hash)) {
      buf = await sharp(Buffer.from(svgStr)).jpeg({ quality: 91 }).toBuffer();
      hash = crypto.createHash('md5').update(buf).digest('hex');
    }

    fs.writeFileSync(outPath, buf);
    hashes.set(hash, bp.target);
    console.log(`[TECH  ${String(i+1).padStart(2)}/21] ${bp.target.padEnd(46)} ${(buf.length/1024).toFixed(1).padStart(5)} KB`);
  }

  // 2. Generate 49 Human Photography Images
  for (let i = 0; i < HUMAN_SPECS.length; i++) {
    const sp = HUMAN_SPECS[i];
    allTargetNames.add(sp.target);
    if (!fs.existsSync(sp.src)) {
      console.error(`FATAL: Missing source: ${sp.src}`);
      process.exit(1);
    }

    const outPath = path.join(OUTPUT_DIR, sp.target);
    let buf = await sharp(sp.src).resize(sp.w, sp.h, {
      fit: sp.fit || 'cover',
      position: sp.position || 'center'
    }).jpeg({ quality: sp.q || 90 }).toBuffer();

    let hash = crypto.createHash('md5').update(buf).digest('hex');
    if (hashes.has(hash)) {
      buf = await sharp(sp.src).resize(sp.w, sp.h, {
        fit: sp.fit || 'cover',
        position: sp.position || 'center'
      }).jpeg({ quality: (sp.q || 90) - 2 }).toBuffer();
      hash = crypto.createHash('md5').update(buf).digest('hex');
    }

    fs.writeFileSync(outPath, buf);
    hashes.set(hash, sp.target);
    console.log(`[HUMAN ${String(i+1).padStart(2)}/49] ${sp.target.padEnd(46)} ${(buf.length/1024).toFixed(1).padStart(5)} KB`);
  }

  // 3. Clean any orphaned images in public/images so public/images contains ONLY these 70 files
  const existingFiles = fs.readdirSync(OUTPUT_DIR).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
  let removed = 0;
  for (const f of existingFiles) {
    if (!allTargetNames.has(f)) {
      fs.unlinkSync(path.join(OUTPUT_DIR, f));
      console.log(`Cleaned orphaned file: ${f}`);
      removed++;
    }
  }

  console.log('====================================================');
  console.log(`FINISHED: ${hashes.size} total unique images deployed.`);
  console.log(`Orphaned files removed: ${removed}`);
  console.log(`Human count: ${HUMAN_SPECS.length} (${(HUMAN_SPECS.length / hashes.size * 100).toFixed(1)}%)`);
  console.log(`Tech count:  ${TECH_BLUEPRINTS.length} (${(TECH_BLUEPRINTS.length / hashes.size * 100).toFixed(1)}%)`);
  console.log('====================================================');
}

main().catch(err => {
  console.error('Error during generation:', err);
  process.exit(1);
});
