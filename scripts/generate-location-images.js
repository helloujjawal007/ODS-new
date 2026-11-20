const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'locations');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const LOCATIONS = [
  { slug: "california", name: "California", code: "CA", tz: "Pacific Time (PT)", cities: ["San Francisco", "San Jose", "Los Angeles", "San Diego"], focus: "Silicon Valley SaaS & AI/ML Architecture" },
  { slug: "new-york", name: "New York", code: "NY", tz: "Eastern Time (ET)", cities: ["New York City", "Brooklyn", "Albany", "Buffalo"], focus: "Wall Street FinTech & Headless Media Portals" },
  { slug: "texas", name: "Texas", code: "TX", tz: "Central Time (CT)", cities: ["Austin", "Dallas", "Houston", "San Antonio"], focus: "Silicon Hills Cloud Scale & Energy Telemetry" },
  { slug: "florida", name: "Florida", code: "FL", tz: "Eastern Time (ET)", cities: ["Miami", "Tampa", "Orlando", "Jacksonville"], focus: "FinTech Hubs & Hospitality Mobile Platforms" },
  { slug: "washington", name: "Washington", code: "WA", tz: "Pacific Time (PT)", cities: ["Seattle", "Bellevue", "Redmond", "Spokane"], focus: "Cloud Capital Distributed Systems & E-Commerce" },
  { slug: "massachusetts", name: "Massachusetts", code: "MA", tz: "Eastern Time (ET)", cities: ["Boston", "Cambridge", "Waltham", "Worcester"], focus: "Biotech Genomics & HealthTech Portals" },
  { slug: "illinois", name: "Illinois", code: "IL", tz: "Central Time (CT)", cities: ["Chicago", "Naperville", "Evanston", "Peoria"], focus: "Trading Systems & Freight Logistics Architecture" },
  { slug: "colorado", name: "Colorado", code: "CO", tz: "Mountain Time (MT)", cities: ["Denver", "Boulder", "Colorado Springs", "Fort Collins"], focus: "Silicon Mountain SaaS & CleanTech Telemetry" },
  { slug: "georgia", name: "Georgia", code: "GA", tz: "Eastern Time (ET)", cities: ["Atlanta", "Alpharetta", "Savannah", "Augusta"], focus: "Transaction Alley Payments & Port Logistics" },
  { slug: "north-carolina", name: "North Carolina", code: "NC", tz: "Eastern Time (ET)", cities: ["Raleigh", "Durham", "Charlotte", "Greensboro"], focus: "Research Triangle BioTech & Banking Systems" },
  { slug: "virginia", name: "Virginia", code: "VA", tz: "Eastern Time (ET)", cities: ["Tysons", "Reston", "Richmond", "Arlington"], focus: "Internet Capital GovTech & Zero-Trust Cloud" },
  { slug: "pennsylvania", name: "Pennsylvania", code: "PA", tz: "Eastern Time (ET)", cities: ["Philadelphia", "Pittsburgh", "King of Prussia", "Allentown"], focus: "Healthcare Networks & Robotics Telemetry" },
  { slug: "ohio", name: "Ohio", code: "OH", tz: "Eastern Time (ET)", cities: ["Columbus", "Cleveland", "Cincinnati", "Dayton"], focus: "Silicon Heartland InsurTech & CPG Commerce" },
  { slug: "michigan", name: "Michigan", code: "MI", tz: "Eastern Time (ET)", cities: ["Detroit", "Ann Arbor", "Grand Rapids", "Lansing"], focus: "Motor City EV Mobility & Industrial IoT" },
  { slug: "new-jersey", name: "New Jersey", code: "NJ", tz: "Eastern Time (ET)", cities: ["Jersey City", "Princeton", "Newark", "Morristown"], focus: "Pharma Clinical Portals & Jersey City FinTech" },
  { slug: "arizona", name: "Arizona", code: "AZ", tz: "Mountain Standard (MST)", cities: ["Phoenix", "Scottsdale", "Tempe", "Tucson"], focus: "Silicon Desert PropTech & Semiconductor Tech" },
  { slug: "minnesota", name: "Minnesota", code: "MN", tz: "Central Time (CT)", cities: ["Minneapolis", "St. Paul", "Rochester", "Bloomington"], focus: "MedTech Innovations & Retail Enterprise Platforms" },
  { slug: "tennessee", name: "Tennessee", code: "TN", tz: "Central Time (CT)", cities: ["Nashville", "Memphis", "Chattanooga", "Knoxville"], focus: "Healthcare Capital Systems & Logistics Portals" },
  { slug: "maryland", name: "Maryland", code: "MD", tz: "Eastern Time (ET)", cities: ["Bethesda", "Baltimore", "Silver Spring", "Rockville"], focus: "BioHealth Genomics & Federal Cyber Defense" },
  { slug: "utah", name: "Utah", code: "UT", tz: "Mountain Time (MT)", cities: ["Salt Lake City", "Provo", "Lehi", "Park City"], focus: "Silicon Slopes B2B SaaS & Product Velocity" },
  { slug: "oregon", name: "Oregon", code: "OR", tz: "Pacific Time (PT)", cities: ["Portland", "Beaverton", "Hillsboro", "Bend"], focus: "Silicon Forest Tech & Athletic E-Commerce" },
  { slug: "missouri", name: "Missouri", code: "MO", tz: "Central Time (CT)", cities: ["St. Louis", "Kansas City", "Springfield", "Columbia"], focus: "AgTech BioSciences & Regional Financial Tech" },
  { slug: "indiana", name: "Indiana", code: "IN", tz: "Eastern Time (ET)", cities: ["Indianapolis", "Bloomington", "West Lafayette", "Carmel"], focus: "Marketing Cloud Center & Freight Hub Systems" },
  { slug: "wisconsin", name: "Wisconsin", code: "WI", tz: "Central Time (CT)", cities: ["Milwaukee", "Madison", "Green Bay", "Kenosha"], focus: "Epic Healthcare IT & Industrial Automation" },
  { slug: "nevada", name: "Nevada", code: "NV", tz: "Pacific Time (PT)", cities: ["Las Vegas", "Reno", "Henderson", "Carson City"], focus: "Hospitality Concurrency & Gigafactory CleanTech" }
];

function escapeXml(unsafe) {
  return String(unsafe).replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

function renderGrid(w = 1200, h = 675, step = 40, opacity = 0.04) {
  let lines = '';
  for (let x = 0; x <= w; x += step) {
    lines += `<line x1='${x}' y1='0' x2='${x}' y2='${h}' stroke='rgba(255,255,255,${opacity})' stroke-width='1'/>`;
  }
  for (let y = 0; y <= h; y += step) {
    lines += `<line x1='0' y1='${y}' x2='${w}' y2='${y}' stroke='rgba(255,255,255,${opacity})' stroke-width='1'/>`;
  }
  return lines;
}

function generateHeroSvg(loc) {
  const safeName = escapeXml(loc.name);
  const safeCode = escapeXml(loc.code);
  const safeTz = escapeXml(loc.tz);
  const safeFocus = escapeXml(loc.focus);
  const citiesStr = escapeXml(loc.cities.join("  //  "));

  return `
<svg width='1200' height='675' viewBox='0 0 1200 675' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bgGrad' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#0B132B'/>
      <stop offset='50%' stop-color='#1C2541'/>
      <stop offset='100%' stop-color='#0F172A'/>
    </linearGradient>
    <radialGradient id='accentGlow' cx='80%' cy='20%' r='60%'>
      <stop offset='0%' stop-color='rgba(37, 99, 235, 0.35)'/>
      <stop offset='100%' stop-color='rgba(37, 99, 235, 0)'/>
    </radialGradient>
    <radialGradient id='cyanGlow' cx='15%' cy='85%' r='50%'>
      <stop offset='0%' stop-color='rgba(6, 182, 212, 0.25)'/>
      <stop offset='100%' stop-color='rgba(6, 182, 212, 0)'/>
    </radialGradient>
  </defs>

  <rect width='1200' height='675' fill='url(#bgGrad)'/>
  <rect width='1200' height='675' fill='url(#accentGlow)'/>
  <rect width='1200' height='675' fill='url(#cyanGlow)'/>
  ${renderGrid(1200, 675, 45, 0.05)}

  <!-- Outer Console Frame -->
  <g transform='translate(50, 40)'>
    <rect width='1100' height='595' rx='14' fill='#0A101D' stroke='rgba(59, 130, 246, 0.3)' stroke-width='1.5'/>
    
    <!-- Top Console Titlebar -->
    <rect width='1100' height='46' rx='14' fill='#0F1A30'/>
    <rect y='32' width='1100' height='14' fill='#0F1A30'/>
    <line x1='0' y1='46' x2='1100' y2='46' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    
    <circle cx='25' cy='23' r='5' fill='#EF4444'/>
    <circle cx='42' cy='23' r='5' fill='#F59E0B'/>
    <circle cx='59' cy='23' r='5' fill='#10B981'/>
    
    <text x='90' y='27' fill='#60A5FA' font-family='monospace' font-size='12' font-weight='600'>CLOUD CONSULTANCY // USA PRACTICE: ${safeName.toUpperCase()} [${safeCode}]</text>
    <rect x='890' y='12' width='190' height='22' rx='4' fill='rgba(16, 185, 129, 0.15)' stroke='#10B981' stroke-width='1'/>
    <text x='905' y='27' fill='#10B981' font-family='monospace' font-size='11' font-weight='700'>● SLA: 100% PRODUCTION</text>

    <!-- Main Hero Banner Card -->
    <g transform='translate(30, 70)'>
      <rect width='1040' height='160' rx='10' fill='#070D18' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      
      <!-- State Badge -->
      <rect x='30' y='25' width='60' height='30' rx='6' fill='#2563EB'/>
      <text x='43' y='46' fill='#FFFFFF' font-family='sans-serif' font-size='16' font-weight='800'>${safeCode}</text>
      
      <text x='105' y='46' fill='#FFFFFF' font-family='sans-serif' font-size='22' font-weight='700'>Software Engineering &amp; Cloud Platform Delivery: ${safeName}</text>
      
      <text x='30' y='85' fill='#94A3B8' font-family='sans-serif' font-size='14'>Primary Hub Focus: ${safeFocus}</text>
      
      <rect x='30' y='110' width='980' height='32' rx='6' fill='#0F172A' stroke='rgba(59, 130, 246, 0.2)' stroke-width='1'/>
      <text x='45' y='131' fill='#38BDF8' font-family='monospace' font-size='12'>METROS SERVED: ${citiesStr}</text>
    </g>

    <!-- 3 Key Metric Tiles -->
    <g transform='translate(30, 250)'>
      <!-- Tile 1 -->
      <g transform='translate(0, 0)'>
        <rect width='330' height='140' rx='10' fill='#070D18' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
        <text x='25' y='35' fill='#64748B' font-family='monospace' font-size='11' font-weight='600'>TIMEZONE SYNCHRONIZATION</text>
        <text x='25' y='72' fill='#FFFFFF' font-family='sans-serif' font-size='18' font-weight='700'>${safeTz}</text>
        <text x='25' y='105' fill='#10B981' font-family='monospace' font-size='12'>✓ 4-6 Hrs Real-time Overlap</text>
        <line x1='25' y1='120' x2='305' y2='120' stroke='rgba(16, 185, 129, 0.3)' stroke-width='1'/>
      </g>

      <!-- Tile 2 -->
      <g transform='translate(355, 0)'>
        <rect width='330' height='140' rx='10' fill='#070D18' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
        <text x='25' y='35' fill='#64748B' font-family='monospace' font-size='11' font-weight='600'>PERFORMANCE &amp; SPEED</text>
        <text x='25' y='72' fill='#FFFFFF' font-family='sans-serif' font-size='22' font-weight='700'>&lt; 0.9s LCP</text>
        <text x='25' y='105' fill='#38BDF8' font-family='monospace' font-size='12'>React 19 Server Components</text>
        <line x1='25' y1='120' x2='305' y2='120' stroke='rgba(56, 189, 248, 0.3)' stroke-width='1'/>
      </g>

      <!-- Tile 3 -->
      <g transform='translate(710, 0)'>
        <rect width='330' height='140' rx='10' fill='#070D18' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
        <text x='25' y='35' fill='#64748B' font-family='monospace' font-size='11' font-weight='600'>SECURITY &amp; OWNERSHIP</text>
        <text x='25' y='72' fill='#FFFFFF' font-family='sans-serif' font-size='22' font-weight='700'>100% Client IP</text>
        <text x='25' y='105' fill='#A855F7' font-family='monospace' font-size='12'>Zero Vendor Lock-In</text>
        <line x1='25' y1='120' x2='305' y2='120' stroke='rgba(168, 85, 247, 0.3)' stroke-width='1'/>
      </g>
    </g>

    <!-- Bottom Architectural Blueprint Strip -->
    <g transform='translate(30, 410)'>
      <rect width='1040' height='155' rx='10' fill='#070D18' stroke='rgba(59, 130, 246, 0.2)' stroke-width='1'/>
      <text x='25' y='30' fill='#38BDF8' font-family='monospace' font-size='12' font-weight='600'>ENTERPRISE STACK DELIVERED TO ${safeName.toUpperCase()} CLIENTS</text>
      
      <g transform='translate(25, 50)'>
        <!-- Step 1 -->
        <rect width='225' height='80' rx='6' fill='#0F172A' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
        <text x='15' y='25' fill='#60A5FA' font-family='sans-serif' font-size='12' font-weight='700'>Next.js App Router</text>
        <text x='15' y='45' fill='#94A3B8' font-family='sans-serif' font-size='11'>Edge SSR &amp; Hydration</text>
        <text x='15' y='65' fill='#10B981' font-family='monospace' font-size='10'>100/100 Lighthouse</text>

        <!-- Arrow -->
        <text x='235' y='45' fill='#64748B' font-size='16'>→</text>

        <!-- Step 2 -->
        <rect x='255' width='225' height='80' rx='6' fill='#0F172A' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
        <text x='270' y='25' fill='#60A5FA' font-family='sans-serif' font-size='12' font-weight='700'>Salesforce Integration</text>
        <text x='270' y='45' fill='#94A3B8' font-family='sans-serif' font-size='11'>Apex, LWC &amp; MuleSoft</text>
        <text x='270' y='65' fill='#38BDF8' font-family='monospace' font-size='10'>CDC Event Streaming</text>

        <!-- Arrow -->
        <text x='490' y='45' fill='#64748B' font-size='16'>→</text>

        <!-- Step 3 -->
        <rect x='510' width='225' height='80' rx='6' fill='#0F172A' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
        <text x='525' y='25' fill='#60A5FA' font-family='sans-serif' font-size='12' font-weight='700'>Cross-Platform Mobile</text>
        <text x='525' y='45' fill='#94A3B8' font-family='sans-serif' font-size='11'>React Native &amp; Flutter</text>
        <text x='525' y='65' fill='#F59E0B' font-family='monospace' font-size='10'>Offline-First SQLite</text>

        <!-- Arrow -->
        <text x='745' y='45' fill='#64748B' font-size='16'>→</text>

        <!-- Step 4 -->
        <rect x='765' width='225' height='80' rx='6' fill='#0F172A' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
        <text x='780' y='25' fill='#60A5FA' font-family='sans-serif' font-size='12' font-weight='700'>Cloud DevOps</text>
        <text x='780' y='45' fill='#94A3B8' font-family='sans-serif' font-size='11'>AWS, GCP &amp; Vercel</text>
        <text x='780' y='65' fill='#10B981' font-family='monospace' font-size='10'>Automated CI/CD Tests</text>
      </g>
    </g>
  </g>
</svg>
`;
}

function generateArchitectureSvg(loc) {
  const safeName = escapeXml(loc.name);
  const safeCode = escapeXml(loc.code);
  const safeFocus = escapeXml(loc.focus);

  return `
<svg width='1200' height='675' viewBox='0 0 1200 675' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bgGrad2' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#050B14'/>
      <stop offset='60%' stop-color='#0B132B'/>
      <stop offset='100%' stop-color='#020617'/>
    </linearGradient>
    <radialGradient id='purpleGlow' cx='85%' cy='80%' r='50%'>
      <stop offset='0%' stop-color='rgba(147, 51, 234, 0.25)'/>
      <stop offset='100%' stop-color='rgba(147, 51, 234, 0)'/>
    </radialGradient>
    <radialGradient id='blueGlow2' cx='20%' cy='20%' r='50%'>
      <stop offset='0%' stop-color='rgba(59, 130, 246, 0.3)'/>
      <stop offset='100%' stop-color='rgba(59, 130, 246, 0)'/>
    </radialGradient>
  </defs>

  <rect width='1200' height='675' fill='url(#bgGrad2)'/>
  <rect width='1200' height='675' fill='url(#purpleGlow)'/>
  <rect width='1200' height='675' fill='url(#blueGlow2)'/>
  ${renderGrid(1200, 675, 40, 0.04)}

  <g transform='translate(50, 40)'>
    <rect width='1100' height='595' rx='14' fill='#080F1E' stroke='rgba(99, 102, 241, 0.3)' stroke-width='1.5'/>
    
    <!-- Header -->
    <rect width='1100' height='46' rx='14' fill='#0E172E'/>
    <rect y='32' width='1100' height='14' fill='#0E172E'/>
    <line x1='0' y1='46' x2='1100' y2='46' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    
    <text x='30' y='28' fill='#818CF8' font-family='monospace' font-size='12' font-weight='600'>SYSTEM BLUEPRINT // ${safeName.toUpperCase()} [${safeCode}] ENTERPRISE ARCHITECTURE</text>
    <rect x='890' y='12' width='185' height='22' rx='4' fill='rgba(99, 102, 241, 0.15)' stroke='#818CF8' stroke-width='1'/>
    <text x='910' y='27' fill='#818CF8' font-family='monospace' font-size='11' font-weight='700'>ZERO DOWNTIME STACK</text>

    <!-- Subtitle Bar -->
    <g transform='translate(30, 65)'>
      <text x='0' y='20' fill='#F8FAFC' font-family='sans-serif' font-size='16' font-weight='700'>Decoupled Cloud &amp; CRM Architecture Optimized for ${safeName}</text>
      <text x='0' y='42' fill='#94A3B8' font-family='sans-serif' font-size='12'>Target Sectors: ${safeFocus} — High Concurrency &amp; Multi-Tenant Resiliency</text>
    </g>

    <!-- Architecture Visual Topology -->
    <g transform='translate(30, 130)'>
      <!-- Column 1: Client Layer -->
      <rect x='0' y='0' width='230' height='410' rx='8' fill='#050B16' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <rect x='0' y='0' width='230' height='36' rx='8' fill='#0C162D'/>
      <rect x='0' y='24' width='230' height='12' fill='#0C162D'/>
      <text x='15' y='23' fill='#38BDF8' font-family='sans-serif' font-size='12' font-weight='700'>1. Presentation &amp; Edge</text>
      
      <g transform='translate(15, 55)'>
        <rect width='200' height='75' rx='6' fill='#0D1B36' stroke='rgba(56, 189, 248, 0.2)' stroke-width='1'/>
        <text x='15' y='25' fill='#FFFFFF' font-family='sans-serif' font-size='12' font-weight='700'>Next.js App Router</text>
        <text x='15' y='45' fill='#94A3B8' font-family='sans-serif' font-size='11'>React 19 Server Comps</text>
        <text x='15' y='63' fill='#10B981' font-family='monospace' font-size='10'>Edge TTFB &lt; 40ms</text>
      </g>
      <g transform='translate(15, 145)'>
        <rect width='200' height='75' rx='6' fill='#0D1B36' stroke='rgba(56, 189, 248, 0.2)' stroke-width='1'/>
        <text x='15' y='25' fill='#FFFFFF' font-family='sans-serif' font-size='12' font-weight='700'>Cross-Platform Mobile</text>
        <text x='15' y='45' fill='#94A3B8' font-family='sans-serif' font-size='11'>React Native / Flutter</text>
        <text x='15' y='63' fill='#10B981' font-family='monospace' font-size='10'>60fps Native Bridges</text>
      </g>
      <g transform='translate(15, 235)'>
        <rect width='200' height='75' rx='6' fill='#0D1B36' stroke='rgba(56, 189, 248, 0.2)' stroke-width='1'/>
        <text x='15' y='25' fill='#FFFFFF' font-family='sans-serif' font-size='12' font-weight='700'>Headless Storefront</text>
        <text x='15' y='45' fill='#94A3B8' font-family='sans-serif' font-size='11'>Shopify Hydrogen / OS 2</text>
        <text x='15' y='63' fill='#10B981' font-family='monospace' font-size='10'>Checkout Extensibility</text>
      </g>
      <g transform='translate(15, 325)'>
        <rect width='200' height='65' rx='6' fill='#0F172A' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
        <text x='15' y='25' fill='#64748B' font-family='monospace' font-size='10' font-weight='600'>SECURITY PROTOCOLS</text>
        <text x='15' y='45' fill='#38BDF8' font-family='sans-serif' font-size='11'>Strict CSP + TLS 1.3 + HSTS</text>
      </g>

      <!-- Connectors 1 to 2 -->
      <line x1='230' y1='92' x2='270' y2='92' stroke='#38BDF8' stroke-width='2' stroke-dasharray='4,4'/>
      <line x1='230' y1='182' x2='270' y2='182' stroke='#38BDF8' stroke-width='2' stroke-dasharray='4,4'/>
      <line x1='230' y1='272' x2='270' y2='272' stroke='#38BDF8' stroke-width='2' stroke-dasharray='4,4'/>

      <!-- Column 2: API Gateway & Auth -->
      <g transform='translate(270, 0)'>
        <rect width='230' height='410' rx='8' fill='#050B16' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
        <rect width='230' height='36' rx='8' fill='#0C162D'/>
        <rect y='24' width='230' height='12' fill='#0C162D'/>
        <text x='15' y='23' fill='#A855F7' font-family='sans-serif' font-size='12' font-weight='700'>2. Gateway &amp; Middleware</text>
        
        <g transform='translate(15, 55)'>
          <rect width='200' height='90' rx='6' fill='#151130' stroke='rgba(168, 85, 247, 0.2)' stroke-width='1'/>
          <text x='15' y='25' fill='#FFFFFF' font-family='sans-serif' font-size='12' font-weight='700'>Cloudflare Workers / Edge</text>
          <text x='15' y='45' fill='#94A3B8' font-family='sans-serif' font-size='11'>Sub-millisecond Routing</text>
          <text x='15' y='65' fill='#A855F7' font-family='monospace' font-size='10'>DDoS &amp; WAF Protection</text>
        </g>
        <g transform='translate(15, 160)'>
          <rect width='200' height='90' rx='6' fill='#151130' stroke='rgba(168, 85, 247, 0.2)' stroke-width='1'/>
          <text x='15' y='25' fill='#FFFFFF' font-family='sans-serif' font-size='12' font-weight='700'>Identity &amp; Auth (SSO)</text>
          <text x='15' y='45' fill='#94A3B8' font-family='sans-serif' font-size='11'>OAuth2, SAML, JWT</text>
          <text x='15' y='65' fill='#A855F7' font-family='monospace' font-size='10'>Role-Based Access (RBAC)</text>
        </g>
        <g transform='translate(15, 265)'>
          <rect width='200' height='125' rx='6' fill='#0F172A' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
          <text x='15' y='25' fill='#64748B' font-family='monospace' font-size='10' font-weight='600'>REGIONAL COMPLIANCE</text>
          <text x='15' y='48' fill='#10B981' font-family='sans-serif' font-size='11' font-weight='600'>✓ Encrypted Session Tokens</text>
          <text x='15' y='70' fill='#10B981' font-family='sans-serif' font-size='11' font-weight='600'>✓ Audit Logging Pipelines</text>
          <text x='15' y='92' fill='#10B981' font-family='sans-serif' font-size='11' font-weight='600'>✓ Automated Backpressure</text>
        </g>
      </g>

      <!-- Connectors 2 to 3 -->
      <line x1='500' y1='100' x2='540' y2='100' stroke='#A855F7' stroke-width='2' stroke-dasharray='4,4'/>
      <line x1='500' y1='205' x2='540' y2='205' stroke='#A855F7' stroke-width='2' stroke-dasharray='4,4'/>

      <!-- Column 3: Salesforce & Services -->
      <g transform='translate(540, 0)'>
        <rect width='230' height='410' rx='8' fill='#050B16' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
        <rect width='230' height='36' rx='8' fill='#0C162D'/>
        <rect y='24' width='230' height='12' fill='#0C162D'/>
        <text x='15' y='23' fill='#3B82F6' font-family='sans-serif' font-size='12' font-weight='700'>3. Salesforce CRM &amp; APIs</text>
        
        <g transform='translate(15, 55)'>
          <rect width='200' height='90' rx='6' fill='#0F1E3D' stroke='rgba(59, 130, 246, 0.2)' stroke-width='1'/>
          <text x='15' y='25' fill='#FFFFFF' font-family='sans-serif' font-size='12' font-weight='700'>Salesforce Enterprise</text>
          <text x='15' y='45' fill='#94A3B8' font-family='sans-serif' font-size='11'>LWC &amp; Apex Automation</text>
          <text x='15' y='65' fill='#60A5FA' font-family='monospace' font-size='10'>Platform Events / CDC</text>
        </g>
        <g transform='translate(15, 160)'>
          <rect width='200' height='90' rx='6' fill='#0F1E3D' stroke='rgba(59, 130, 246, 0.2)' stroke-width='1'/>
          <text x='15' y='25' fill='#FFFFFF' font-family='sans-serif' font-size='12' font-weight='700'>MuleSoft Anypoint</text>
          <text x='15' y='45' fill='#94A3B8' font-family='sans-serif' font-size='11'>ERP / NetSuite / SAP Sync</text>
          <text x='15' y='65' fill='#60A5FA' font-family='monospace' font-size='10'>Zero Data-Loss Queues</text>
        </g>
        <g transform='translate(15, 265)'>
          <rect width='200' height='125' rx='6' fill='#0F172A' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
          <text x='15' y='25' fill='#64748B' font-family='monospace' font-size='10' font-weight='600'>GOVERNOR LIMIT AUDITING</text>
          <text x='15' y='48' fill='#38BDF8' font-family='sans-serif' font-size='11'>Bulkified Triggers</text>
          <text x='15' y='70' fill='#38BDF8' font-family='sans-serif' font-size='11'>Composite Batch APIs</text>
          <text x='15' y='92' fill='#38BDF8' font-family='sans-serif' font-size='11'>95% Unit Test Coverage</text>
        </g>
      </g>

      <!-- Connectors 3 to 4 -->
      <line x1='770' y1='100' x2='810' y2='100' stroke='#3B82F6' stroke-width='2' stroke-dasharray='4,4'/>
      <line x1='770' y1='205' x2='810' y2='205' stroke='#3B82F6' stroke-width='2' stroke-dasharray='4,4'/>

      <!-- Column 4: Cloud Data & Storage -->
      <g transform='translate(810, 0)'>
        <rect width='230' height='410' rx='8' fill='#050B16' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
        <rect width='230' height='36' rx='8' fill='#0C162D'/>
        <rect y='24' width='230' height='12' fill='#0C162D'/>
        <text x='15' y='23' fill='#10B981' font-family='sans-serif' font-size='12' font-weight='700'>4. Cloud Data &amp; DB</text>
        
        <g transform='translate(15, 55)'>
          <rect width='200' height='90' rx='6' fill='#092318' stroke='rgba(16, 185, 129, 0.2)' stroke-width='1'/>
          <text x='15' y='25' fill='#FFFFFF' font-family='sans-serif' font-size='12' font-weight='700'>PostgreSQL &amp; Redis</text>
          <text x='15' y='45' fill='#94A3B8' font-family='sans-serif' font-size='11'>Connection Pooling (PgBouncer)</text>
          <text x='15' y='65' fill='#10B981' font-family='monospace' font-size='10'>Automated Read Replicas</text>
        </g>
        <g transform='translate(15, 160)'>
          <rect width='200' height='90' rx='6' fill='#092318' stroke='rgba(16, 185, 129, 0.2)' stroke-width='1'/>
          <text x='15' y='25' fill='#FFFFFF' font-family='sans-serif' font-size='12' font-weight='700'>Kafka / Event Ingestion</text>
          <text x='15' y='45' fill='#94A3B8' font-family='sans-serif' font-size='11'>Event-Driven CDC Pipelines</text>
          <text x='15' y='65' fill='#10B981' font-family='monospace' font-size='10'>Sub-50ms Event Delivery</text>
        </g>
        <g transform='translate(15, 265)'>
          <rect width='200' height='125' rx='6' fill='#0F172A' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
          <text x='15' y='25' fill='#64748B' font-family='monospace' font-size='10' font-weight='600'>INFRASTRUCTURE CODE</text>
          <text x='15' y='48' fill='#10B981' font-family='sans-serif' font-size='11'>Terraform Cloud Modules</text>
          <text x='15' y='70' fill='#10B981' font-family='sans-serif' font-size='11'>Automated GitHub Actions</text>
          <text x='15' y='92' fill='#10B981' font-family='sans-serif' font-size='11'>Encrypted AES-256 Storage</text>
        </g>
      </g>
    </g>
  </g>
</svg>
`;
}

function generateDeliverySvg(loc) {
  const safeName = escapeXml(loc.name);
  const safeCode = escapeXml(loc.code);
  const safeTz = escapeXml(loc.tz);

  return `
<svg width='1200' height='675' viewBox='0 0 1200 675' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bgGrad3' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#040B15'/>
      <stop offset='50%' stop-color='#0B1528'/>
      <stop offset='100%' stop-color='#020612'/>
    </linearGradient>
    <radialGradient id='greenGlow' cx='80%' cy='15%' r='55%'>
      <stop offset='0%' stop-color='rgba(16, 185, 129, 0.25)'/>
      <stop offset='100%' stop-color='rgba(16, 185, 129, 0)'/>
    </radialGradient>
    <radialGradient id='blueGlow3' cx='20%' cy='85%' r='50%'>
      <stop offset='0%' stop-color='rgba(37, 99, 235, 0.25)'/>
      <stop offset='100%' stop-color='rgba(37, 99, 235, 0)'/>
    </radialGradient>
  </defs>

  <rect width='1200' height='675' fill='url(#bgGrad3)'/>
  <rect width='1200' height='675' fill='url(#greenGlow)'/>
  <rect width='1200' height='675' fill='url(#blueGlow3)'/>
  ${renderGrid(1200, 675, 45, 0.04)}

  <g transform='translate(50, 40)'>
    <rect width='1100' height='595' rx='14' fill='#080F1E' stroke='rgba(16, 185, 129, 0.3)' stroke-width='1.5'/>
    
    <!-- Titlebar -->
    <rect width='1100' height='46' rx='14' fill='#0C172E'/>
    <rect y='32' width='1100' height='14' fill='#0C172E'/>
    <line x1='0' y1='46' x2='1100' y2='46' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    
    <text x='30' y='28' fill='#10B981' font-family='monospace' font-size='12' font-weight='600'>AGILE SPRINT TELEMETRY // ${safeName.toUpperCase()} SQUAD VELOCITY</text>
    <rect x='880' y='12' width='200' height='22' rx='4' fill='rgba(16, 185, 129, 0.15)' stroke='#10B981' stroke-width='1'/>
    <text x='895' y='27' fill='#10B981' font-family='monospace' font-size='11' font-weight='700'>● LIVE TIMEZONE SYNC: ${safeCode}</text>

    <!-- Top Dashboard Header -->
    <g transform='translate(30, 65)'>
      <text x='0' y='20' fill='#F8FAFC' font-family='sans-serif' font-size='16' font-weight='700'>Dedicated Remote Engineering Pod SLA for ${safeName}</text>
      <text x='0' y='42' fill='#94A3B8' font-family='sans-serif' font-size='12'>Coordinated across ${safeTz} with real-time Slack/Teams, Loom async walk-throughs &amp; GitHub PRs</text>
    </g>

    <!-- 4 Live Metric Badges -->
    <g transform='translate(30, 130)'>
      <g transform='translate(0, 0)'>
        <rect width='245' height='110' rx='8' fill='#060C18' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
        <text x='20' y='30' fill='#64748B' font-family='monospace' font-size='10' font-weight='600'>UNIT &amp; E2E TEST COVERAGE</text>
        <text x='20' y='65' fill='#10B981' font-family='sans-serif' font-size='28' font-weight='800'>92.4%</text>
        <text x='20' y='90' fill='#94A3B8' font-family='sans-serif' font-size='11'>Jest, Vitest &amp; Playwright</text>
      </g>
      <g transform='translate(265, 0)'>
        <rect width='245' height='110' rx='8' fill='#060C18' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
        <text x='20' y='30' fill='#64748B' font-family='monospace' font-size='10' font-weight='600'>EMERGENCY SLA RESPONSE</text>
        <text x='20' y='65' fill='#38BDF8' font-family='sans-serif' font-size='28' font-weight='800'>&lt; 15 min</text>
        <text x='20' y='90' fill='#94A3B8' font-family='sans-serif' font-size='11'>P1 Incident Guarantee</text>
      </g>
      <g transform='translate(530, 0)'>
        <rect width='245' height='110' rx='8' fill='#060C18' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
        <text x='20' y='30' fill='#64748B' font-family='monospace' font-size='10' font-weight='600'>SPRINT CYCLE CADENCE</text>
        <text x='20' y='65' fill='#A855F7' font-family='sans-serif' font-size='28' font-weight='800'>2 Weeks</text>
        <text x='20' y='90' fill='#94A3B8' font-family='sans-serif' font-size='11'>Live Staging Previews</text>
      </g>
      <g transform='translate(795, 0)'>
        <rect width='245' height='110' rx='8' fill='#060C18' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
        <text x='20' y='30' fill='#64748B' font-family='monospace' font-size='10' font-weight='600'>CODE &amp; REPO ACCESS</text>
        <text x='20' y='65' fill='#F59E0B' font-family='sans-serif' font-size='28' font-weight='800'>100% Day 1</text>
        <text x='20' y='90' fill='#94A3B8' font-family='sans-serif' font-size='11'>Direct GitHub Organization</text>
      </g>
    </g>

    <!-- CI/CD Sprint Pipeline Visualization -->
    <g transform='translate(30, 270)'>
      <rect width='1040' height='295' rx='10' fill='#060C18' stroke='rgba(16, 185, 129, 0.2)' stroke-width='1'/>
      <text x='25' y='32' fill='#10B981' font-family='monospace' font-size='12' font-weight='700'>AUTOMATED CI/CD &amp; QUALITY VERIFICATION PIPELINE</text>

      <g transform='translate(25, 55)'>
        <!-- Stage 1 -->
        <rect width='225' height='100' rx='6' fill='#0F1B30' stroke='rgba(59, 130, 246, 0.3)' stroke-width='1'/>
        <text x='15' y='25' fill='#38BDF8' font-family='sans-serif' font-size='12' font-weight='700'>1. Branch &amp; Commit</text>
        <text x='15' y='48' fill='#94A3B8' font-family='sans-serif' font-size='11'>Feature PR on Client Git</text>
        <text x='15' y='70' fill='#10B981' font-family='monospace' font-size='10'>ESLint + Prettier pass</text>
        <text x='15' y='88' fill='#60A5FA' font-family='monospace' font-size='10'>Signed GPG Commits</text>

        <!-- Stage 2 -->
        <rect x='255' width='225' height='100' rx='6' fill='#0F1B30' stroke='rgba(59, 130, 246, 0.3)' stroke-width='1'/>
        <text x='270' y='25' fill='#38BDF8' font-family='sans-serif' font-size='12' font-weight='700'>2. Automated Test Run</text>
        <text x='270' y='48' fill='#94A3B8' font-family='sans-serif' font-size='11'>Unit + Integration Tests</text>
        <text x='270' y='70' fill='#10B981' font-family='monospace' font-size='10'>Jest / Apex 90%+ pass</text>
        <text x='270' y='88' fill='#60A5FA' font-family='monospace' font-size='10'>Playwright E2E suites</text>

        <!-- Stage 3 -->
        <rect x='510' width='225' height='100' rx='6' fill='#0F1B30' stroke='rgba(59, 130, 246, 0.3)' stroke-width='1'/>
        <text x='525' y='25' fill='#38BDF8' font-family='sans-serif' font-size='12' font-weight='700'>3. Security &amp; Audit</text>
        <text x='525' y='48' fill='#94A3B8' font-family='sans-serif' font-size='11'>OWASP SAST Scanning</text>
        <text x='525' y='70' fill='#10B981' font-family='monospace' font-size='10'>Zero High/Critical CVEs</text>
        <text x='525' y='88' fill='#60A5FA' font-family='monospace' font-size='10'>CSP &amp; Secret Detection</text>

        <!-- Stage 4 -->
        <rect x='765' width='225' height='100' rx='6' fill='#0F1B30' stroke='rgba(16, 185, 129, 0.3)' stroke-width='1'/>
        <text x='780' y='25' fill='#10B981' font-family='sans-serif' font-size='12' font-weight='700'>4. Staging Preview</text>
        <text x='780' y='48' fill='#94A3B8' font-family='sans-serif' font-size='11'>Isolated Ephemeral URL</text>
        <text x='780' y='70' fill='#10B981' font-family='monospace' font-size='10'>Ready for Client Review</text>
        <text x='780' y='88' fill='#38BDF8' font-family='monospace' font-size='10'>One-Click Prod Rollout</text>
      </g>

      <!-- Bottom Sprint Summary Quote -->
      <g transform='translate(25, 185)'>
        <rect width='990' height='80' rx='6' fill='#091322' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
        <text x='20' y='32' fill='#FFFFFF' font-family='sans-serif' font-size='12' font-weight='600'>COLLABORATION GUARANTEE FOR ${safeName.toUpperCase()} EXECUTIVES &amp; FOUNDERS:</text>
        <text x='20' y='55' fill='#94A3B8' font-family='sans-serif' font-size='11'>Every sprint ends with working software deployed to staging, accompanied by high-level architectural walkthroughs. No black-box development, no runaway hourly billing, and zero vendor lock-in.</text>
      </g>
    </g>
  </g>
</svg>
`;
}

async function run() {
  console.log(`Starting image generation for ${LOCATIONS.length} locations (3 images each = ${LOCATIONS.length * 3} images)...`);

  for (const loc of LOCATIONS) {
    const heroSvg = Buffer.from(generateHeroSvg(loc));
    const archSvg = Buffer.from(generateArchitectureSvg(loc));
    const delSvg = Buffer.from(generateDeliverySvg(loc));

    const heroPath = path.join(OUTPUT_DIR, `location_${loc.slug}_hero.jpg`);
    const archPath = path.join(OUTPUT_DIR, `location_${loc.slug}_architecture.jpg`);
    const delPath = path.join(OUTPUT_DIR, `location_${loc.slug}_delivery.jpg`);

    await sharp(heroSvg).jpeg({ quality: 85 }).toFile(heroPath);
    await sharp(archSvg).jpeg({ quality: 85 }).toFile(archPath);
    await sharp(delSvg).jpeg({ quality: 85 }).toFile(delPath);

    console.log(`✓ Generated 3 images for ${loc.name} (${loc.slug})`);
  }

  console.log(`\nAll ${LOCATIONS.length * 3} location images generated successfully in ${OUTPUT_DIR}!`);
}

run().catch((err) => {
  console.error('Image generation error:', err);
  process.exit(1);
});
