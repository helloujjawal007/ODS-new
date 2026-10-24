const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images');
const BRAIN_DIR = '/Users/ujjawal/.gemini/antigravity-ide/brain/cbb0a15d-c1c1-4477-866d-08659dd34998';

function renderGrid(w = 1600, h = 900, step = 50, opacity = 0.04) {
  let lines = '';
  for (let x = 0; x <= w; x += step) {
    lines += `<line x1='${x}' y1='0' x2='${x}' y2='${h}' stroke='rgba(255,255,255,${opacity})' stroke-width='1'/>`;
  }
  for (let y = 0; y <= h; y += step) {
    lines += `<line x1='0' y1='${y}' x2='${w}' y2='${y}' stroke='rgba(255,255,255,${opacity})' stroke-width='1'/>`;
  }
  return lines;
}

// -------------------------------------------------------------
function escapeXml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function getOgPreviewSvg() {
  return `
<svg width='1200' height='630' viewBox='0 0 1200 630' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bg_og' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#030712'/>
      <stop offset='50%' stop-color='#0a1329'/>
      <stop offset='100%' stop-color='#02040a'/>
    </linearGradient>
    <radialGradient id='cyanGlow' cx='85%' cy='20%' r='55%'>
      <stop offset='0%' stop-color='rgba(6, 182, 212, 0.28)'/>
      <stop offset='100%' stop-color='rgba(6, 182, 212, 0)'/>
    </radialGradient>
    <radialGradient id='blueGlow' cx='15%' cy='80%' r='55%'>
      <stop offset='0%' stop-color='rgba(59, 130, 246, 0.25)'/>
      <stop offset='100%' stop-color='rgba(59, 130, 246, 0)'/>
    </radialGradient>
    <linearGradient id='brandGrad' x1='0%' y1='0%' x2='100%' y2='0%'>
      <stop offset='0%' stop-color='#38bdf8'/>
      <stop offset='50%' stop-color='#818cf8'/>
      <stop offset='100%' stop-color='#34d399'/>
    </linearGradient>
  </defs>

  <rect width='1200' height='630' fill='url(#bg_og)'/>
  <rect width='1200' height='630' fill='url(#cyanGlow)'/>
  <rect width='1200' height='630' fill='url(#blueGlow)'/>
  ${renderGrid(1200, 630, 40, 0.03)}

  <!-- Outer Glass Frame -->
  <g transform='translate(60, 45)'>
    <rect width='1080' height='540' rx='20' fill='rgba(11, 20, 42, 0.75)' stroke='rgba(56, 189, 248, 0.3)' stroke-width='2'/>
    
    <!-- Top Bar -->
    <circle cx='35' cy='30' r='6' fill='#ef4444'/>
    <circle cx='55' cy='30' r='6' fill='#f59e0b'/>
    <circle cx='75' cy='30' r='6' fill='#10b981'/>
    <text x='110' y='35' fill='#94a3b8' font-family='monospace' font-size='12'>cloudconsultancy.in // Enterprise Cloud Engineering &amp; Salesforce Architecture</text>

    <!-- Main Heading -->
    <text x='50' y='130' fill='url(#brandGrad)' font-family='system-ui, sans-serif' font-size='48' font-weight='900'>CLOUD CONSULTANCY</text>
    <text x='50' y='180' fill='#ffffff' font-family='system-ui, sans-serif' font-size='28' font-weight='700'>Full-Stack Web Engineering • Salesforce CRM • Cloud Infrastructure</text>
    <text x='50' y='220' fill='#94a3b8' font-family='system-ui, sans-serif' font-size='16'>Architecting mission-critical, high-availability digital solutions for high-growth startups and global enterprises.</text>

    <!-- Technology Pills -->
    <g transform='translate(50, 260)'>
      ${[
        { name: 'Next.js 16 App Router', color: '#38bdf8' },
        { name: 'React 19 Server Actions', color: '#60a5fa' },
        { name: 'Salesforce Sales Cloud &amp; LWC', color: '#0ea5e9' },
        { name: 'MuleSoft API Integration', color: '#a855f7' },
        { name: 'Kotlin / Swift Mobile', color: '#34d399' },
        { name: 'Kubernetes &amp; AWS FinOps', color: '#f59e0b' },
      ].map((p, i) => {
        const x = (i % 3) * 330;
        const y = Math.floor(i / 3) * 55;
        return `
          <rect x='${x}' y='${y}' width='310' height='42' rx='8' fill='rgba(15, 23, 42, 0.8)' stroke='${p.color}' stroke-width='1.5'/>
          <circle cx='${x + 20}' cy='${y + 21}' r='5' fill='${p.color}'/>
          <text x='${x + 36}' y='${y + 26}' fill='#ffffff' font-family='monospace' font-size='12' font-weight='600'>${p.name}</text>
        `;
      }).join('')}
    </g>

    <!-- Bottom Stat Strip -->
    <g transform='translate(50, 420)'>
      <rect width='980' height='80' rx='10' fill='rgba(6, 12, 28, 0.9)' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      
      <text x='35' y='32' fill='#64748b' font-family='monospace' font-size='11'>UPTIME SLA</text>
      <text x='35' y='58' fill='#10b981' font-family='monospace' font-size='20' font-weight='700'>99.99%</text>

      <text x='240' y='32' fill='#64748b' font-family='monospace' font-size='11'>AVG SPEED SCORE</text>
      <text x='240' y='58' fill='#38bdf8' font-family='monospace' font-size='20' font-weight='700'>100 / 100</text>

      <text x='480' y='32' fill='#64748b' font-family='monospace' font-size='11'>GLOBAL DEPLOYMENT</text>
      <text x='480' y='58' fill='#a855f7' font-family='monospace' font-size='20' font-weight='700'>300+ Edge PoPs</text>

      <text x='740' y='32' fill='#64748b' font-family='monospace' font-size='11'>DELIVERY SPEED</text>
      <text x='740' y='58' fill='#34d399' font-family='monospace' font-size='20' font-weight='700'>2-Week Sprints</text>
    </g>
  </g>
</svg>`;
}

function getTwitterPreviewSvg() {
  return `
<svg width='1200' height='600' viewBox='0 0 1200 600' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bg_tw' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#02050f'/>
      <stop offset='50%' stop-color='#081026'/>
      <stop offset='100%' stop-color='#010308'/>
    </linearGradient>
    <radialGradient id='cyanGlow' cx='80%' cy='20%' r='50%'>
      <stop offset='0%' stop-color='rgba(6, 182, 212, 0.28)'/>
      <stop offset='100%' stop-color='rgba(6, 182, 212, 0)'/>
    </radialGradient>
    <radialGradient id='purpleGlow' cx='20%' cy='80%' r='50%'>
      <stop offset='0%' stop-color='rgba(139, 92, 246, 0.25)'/>
      <stop offset='100%' stop-color='rgba(139, 92, 246, 0)'/>
    </radialGradient>
    <linearGradient id='brandGrad' x1='0%' y1='0%' x2='100%' y2='0%'>
      <stop offset='0%' stop-color='#38bdf8'/>
      <stop offset='100%' stop-color='#818cf8'/>
    </linearGradient>
  </defs>

  <rect width='1200' height='600' fill='url(#bg_tw)'/>
  <rect width='1200' height='600' fill='url(#cyanGlow)'/>
  <rect width='1200' height='600' fill='url(#purpleGlow)'/>
  ${renderGrid(1200, 600, 40, 0.03)}

  <g transform='translate(60, 40)'>
    <rect width='1080' height='520' rx='20' fill='rgba(11, 20, 42, 0.75)' stroke='rgba(56, 189, 248, 0.3)' stroke-width='2'/>
    
    <circle cx='35' cy='30' r='6' fill='#ef4444'/>
    <circle cx='55' cy='30' r='6' fill='#f59e0b'/>
    <circle cx='75' cy='30' r='6' fill='#10b981'/>
    <text x='110' y='35' fill='#94a3b8' font-family='monospace' font-size='12'>@CloudConsultancy // Next.js 16 • Salesforce • Cloud Engineering</text>

    <text x='50' y='125' fill='url(#brandGrad)' font-family='system-ui, sans-serif' font-size='44' font-weight='900'>CLOUD CONSULTANCY</text>
    <text x='50' y='170' fill='#ffffff' font-family='system-ui, sans-serif' font-size='26' font-weight='700'>Production-Grade Full-Stack &amp; Enterprise CRM Architecture</text>
    <text x='50' y='210' fill='#94a3b8' font-family='system-ui, sans-serif' font-size='15'>Delivering scalable cloud microservices, Lightning Web Components, and sub-second web performance.</text>

    <!-- Code Frame -->
    <g transform='translate(50, 245)'>
      <rect width='980' height='150' rx='10' fill='#050b18' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#38bdf8' font-family='monospace' font-size='12'>// High-throughput reactive cloud pipeline</text>
      <text x='25' y='65' fill='#a855f7' font-family='monospace' font-size='12'>export const cloudEngine</text>
      <text x='250' y='65' fill='#ffffff' font-family='monospace' font-size='12'>= defineArchitecture({</text>
      <text x='50' y='95' fill='#94a3b8' font-family='monospace' font-size='12'>runtime: 'edge-serverless', framework: 'nextjs-16', crm: 'salesforce-enterprise',</text>
      <text x='50' y='125' fill='#10b981' font-family='monospace' font-size='12'>performanceTarget: '100/100 Core Web Vitals', sla: '99.99% Availability'</text>
      <text x='25' y='145' fill='#ffffff' font-family='monospace' font-size='12'>});</text>
    </g>

    <!-- Bottom Highlights -->
    <g transform='translate(50, 420)'>
      <text x='0' y='30' fill='#34d399' font-family='monospace' font-size='14' font-weight='700'>✓ 24-HOUR RAPID INQUIRY DISPATCH</text>
      <text x='380' y='30' fill='#38bdf8' font-family='monospace' font-size='14' font-weight='700'>✓ ZERO TECHNICAL DEBT CODEBASE</text>
      <text x='760' y='30' fill='#a855f7' font-family='monospace' font-size='14' font-weight='700'>✓ HIGH SV / LOW KD TRAFFIC</text>
    </g>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// HERO OVERLAY COMPOSITORS (10 images)
// -------------------------------------------------------------

function getHeroHudOverlay(title, subtitle, badge, extraLog, color = '#38bdf8') {
  const safeTitle = escapeXml(title);
  const safeSubtitle = escapeXml(subtitle);
  const safeBadge = escapeXml(badge);
  const safeLog = escapeXml(extraLog);

  return `
<svg width='1600' height='900' viewBox='0 0 1600 900' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <filter id='drop' x='-20%' y='-20%' width='140%' height='140%'>
      <feDropShadow dx='0' dy='8' stdDeviation='12' flood-color='#000000' flood-opacity='0.7'/>
    </filter>
  </defs>

  <!-- Top Right HUD Glass Panel -->
  <g transform='translate(1080, 50)' filter='url(#drop)'>
    <rect width='460' height='200' rx='14' fill='rgba(8, 14, 28, 0.88)' stroke='${color}' stroke-width='1.5'/>
    
    <circle cx='25' cy='25' r='5' fill='#ef4444'/>
    <circle cx='42' cy='25' r='5' fill='#f59e0b'/>
    <circle cx='59' cy='25' r='5' fill='#10b981'/>
    <text x='80' y='29' fill='${color}' font-family='monospace' font-size='11' font-weight='700'>TELEMETRY // ${safeBadge}</text>
    
    <line x1='15' y1='45' x2='445' y2='45' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>

    <text x='25' y='80' fill='#ffffff' font-family='system-ui, sans-serif' font-size='18' font-weight='800'>${safeTitle}</text>
    <text x='25' y='110' fill='#94a3b8' font-family='monospace' font-size='12'>${safeSubtitle}</text>
    
    <rect x='25' y='130' width='410' height='46' rx='6' fill='rgba(255,255,255,0.04)' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    <text x='40' y='158' fill='#10b981' font-family='monospace' font-size='11'>${safeLog}</text>
  </g>

  <!-- Bottom Left Architecture Watermark -->
  <g transform='translate(60, 780)' filter='url(#drop)'>
    <rect width='520' height='65' rx='10' fill='rgba(6, 11, 24, 0.85)' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    <text x='25' y='28' fill='#38bdf8' font-family='monospace' font-size='11' font-weight='700'>CLOUD CONSULTANCY // HIGH-ASSURANCE SYSTEMS</text>
    <text x='25' y='48' fill='#94a3b8' font-family='monospace' font-size='10'>Production Verified • Zero Regression • Sub-Second Edge Delivery</text>
  </g>
</svg>`;
}

async function run() {
  console.log('Rendering Social Banners...');
  
  // 1. OG Banner
  await sharp(Buffer.from(getOgPreviewSvg()))
    .jpeg({ quality: 92 })
    .toFile(path.join(OUTPUT_DIR, 'og_preview_banner.jpg'));
  console.log('✓ Rendered og_preview_banner.jpg');

  // 2. Twitter Banner
  await sharp(Buffer.from(getTwitterPreviewSvg()))
    .jpeg({ quality: 92 })
    .toFile(path.join(OUTPUT_DIR, 'twitter_preview_banner.jpg'));
  console.log('✓ Rendered twitter_preview_banner.jpg');

  console.log('Compositing Hero Banners with High-Tech Telemetry HUDs...');

  const heroConfigs = [
    {
      file: 'hero_web_engineering.jpg',
      title: 'Full-Stack Next.js 16 Engine',
      subtitle: 'React 19 Server Actions • Turbopack',
      badge: 'SPEED: 100/100',
      extraLog: '● Lighthouse: 100/100 • TTFB: 24ms Global',
      color: '#06b6d4'
    },
    {
      file: 'hero_crm_salesforce.jpg',
      title: 'Salesforce Enterprise Architecture',
      subtitle: 'Sales Cloud • Apex Triggers • LWC Core',
      badge: 'CRM TELEMETRY ACTIVE',
      extraLog: '● MuleSoft Anypoint Event Bus: CONNECTED',
      color: '#38bdf8'
    },
    {
      file: 'hero_agile_partnership.jpg',
      title: 'High-Velocity Agile Sprint War Room',
      subtitle: 'Milestone Tracking • CI/CD Continuous Deploy',
      badge: 'SPRINT 42 ON SCHEDULE',
      extraLog: '● Automated Matrix: 42/42 Tests Passing',
      color: '#10b981'
    },
    {
      file: 'cloud_workspace_hero.jpg',
      title: 'Cloud Engineering Workstation',
      subtitle: 'Kubernetes Pods • Microservices Mesh',
      badge: 'EDGE MESH OPERATIONAL',
      extraLog: '● Zero-Downtime Multi-Region Active Cluster',
      color: '#8b5cf6'
    },
    {
      file: 'cloud_team_office.jpg',
      title: 'DevOps & Sprint Review Suite',
      subtitle: 'Automated Playwright & Cypress Test Matrix',
      badge: 'ZERO REGRESSION GUARANTEE',
      extraLog: '● Production Artifacts Verified by Clean CI',
      color: '#34d399'
    },
    {
      file: 'cloud_flagship_hero_banner.jpg',
      title: 'Transparent Milestone Pricing',
      subtitle: 'AWS & GCP Serverless Cost Optimization',
      badge: 'FINOPS SPEND EFFICIENCY',
      extraLog: '● 45% Infrastructure Compute Cost Savings',
      color: '#f59e0b'
    },
    {
      file: 'portfolio_projects.jpg',
      title: 'Production SaaS Software Showcase',
      subtitle: 'Multi-Device Live Enterprise Dashboards',
      badge: '100% PRODUCTION PROVEN',
      extraLog: '● 7 Mission-Critical Systems in Active Operation',
      color: '#38bdf8'
    },
    {
      file: 'about_team_studio.jpg',
      title: 'Engineering Studio Culture',
      subtitle: 'Boutique Cloud Consultancy Engineering Loft',
      badge: 'STUDIO DIRECT DISPATCH',
      extraLog: '● 24h Response Guarantee: sales@cloudconsultancy.in',
      color: '#a855f7'
    },
    {
      file: 'service_salesforce_support.jpg',
      title: 'Salesforce & MuleSoft Dedicated Hub',
      subtitle: 'Service Cloud • CPQ • Flow Automation',
      badge: 'SALESFORCE HUB ONLINE',
      extraLog: '● Real-Time Bi-Directional Event Synchronization',
      color: '#0ea5e9'
    },
    {
      file: 'hero_digital_tech.jpg',
      title: 'Architecture Knowledge Base',
      subtitle: 'Deep-Dive Engineering Articles & Insights',
      badge: 'TECH INSIGHTS REPOSITORY',
      extraLog: '● Next.js • React Native • INP • MV3 • FinOps',
      color: '#06b6d4'
    }
  ];

  for (const h of heroConfigs) {
    const filePath = path.join(OUTPUT_DIR, h.file);
    if (!fs.existsSync(filePath)) {
      console.warn(`File ${h.file} not found, skipping composite`);
      continue;
    }

    const hudSvg = getHeroHudOverlay(h.title, h.subtitle, h.badge, h.extraLog, h.color);

    // Read current image, resize to 1600x900, composite HUD, save back
    await sharp(filePath)
      .resize(1600, 900, { fit: 'cover' })
      .composite([{
        input: Buffer.from(hudSvg),
        top: 0,
        left: 0
      }])
      .jpeg({ quality: 92 })
      .toFile(filePath + '.tmp');

    fs.renameSync(filePath + '.tmp', filePath);
    const sz = fs.statSync(filePath).size;
    console.log(`✓ Composited and saved ${h.file} (${sz} bytes)`);
  }
}

run().catch(err => {
  console.error('Error running heroes and social generators:', err);
  process.exit(1);
});
