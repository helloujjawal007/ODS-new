const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images');

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

// 1. Web Development (Next.js 16 + React 19)
function getServiceWebDevSvg() {
  return `
<svg width='1600' height='900' viewBox='0 0 1600 900' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bg_web' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#030712'/>
      <stop offset='50%' stop-color='#081126'/>
      <stop offset='100%' stop-color='#020409'/>
    </linearGradient>
    <radialGradient id='cyanGlow' cx='85%' cy='20%' r='50%'>
      <stop offset='0%' stop-color='rgba(6, 182, 212, 0.25)'/>
      <stop offset='100%' stop-color='rgba(6, 182, 212, 0)'/>
    </radialGradient>
    <radialGradient id='blueGlow' cx='15%' cy='80%' r='50%'>
      <stop offset='0%' stop-color='rgba(59, 130, 246, 0.2)'/>
      <stop offset='100%' stop-color='rgba(59, 130, 246, 0)'/>
    </radialGradient>
  </defs>

  <rect width='1600' height='900' fill='url(#bg_web)'/>
  <rect width='1600' height='900' fill='url(#cyanGlow)'/>
  <rect width='1600' height='900' fill='url(#blueGlow)'/>
  ${renderGrid(1600, 900, 50, 0.03)}

  <g transform='translate(80, 50)'>
    <rect width='1440' height='800' rx='16' fill='#081124' stroke='rgba(56, 189, 248, 0.25)' stroke-width='1.5'/>
    
    <rect width='1440' height='52' rx='16' fill='#0d1b38'/>
    <rect y='36' width='1440' height='16' fill='#0d1b38'/>
    <line x1='0' y1='52' x2='1440' y2='52' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    
    <circle cx='35' cy='26' r='6' fill='#ef4444'/>
    <circle cx='58' cy='26' r='6' fill='#f59e0b'/>
    <circle cx='81' cy='26' r='6' fill='#10b981'/>
    
    <text x='120' y='31' fill='#38bdf8' font-family='monospace' font-size='13' font-weight='600'>CLOUD CONSULTANCY // FULL-STACK WEB ENGINEERING WORKBENCH</text>
    <rect x='1230' y='14' width='180' height='24' rx='6' fill='rgba(16, 185, 129, 0.15)' stroke='#10b981' stroke-width='1'/>
    <text x='1250' y='30' fill='#10b981' font-family='monospace' font-size='11' font-weight='700'>● TURBOPACK: 42ms</text>

    <!-- Top Speed Ribbon -->
    <g transform='translate(30, 75)'>
      <rect width='325' height='120' rx='10' fill='#050b18' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12'>LIGHTHOUSE PERFORMANCE</text>
      <text x='25' y='75' fill='#10b981' font-family='monospace' font-size='32' font-weight='700'>100 / 100</text>
      <text x='25' y='100' fill='#34d399' font-family='monospace' font-size='11'>Perfect Score Across All Pages</text>

      <rect x='350' width='325' height='120' rx='10' fill='#050b18' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='375' y='35' fill='#64748b' font-family='monospace' font-size='12'>REACT SERVER ACTIONS</text>
      <text x='375' y='75' fill='#38bdf8' font-family='monospace' font-size='32' font-weight='700'>ZERO API BLOB</text>
      <text x='375' y='100' fill='#38bdf8' font-family='monospace' font-size='11'>Type-Safe Direct Server Execution</text>

      <rect x='700' width='325' height='120' rx='10' fill='#050b18' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='725' y='35' fill='#64748b' font-family='monospace' font-size='12'>EDGE BUNDLE SIZE</text>
      <text x='725' y='75' fill='#a855f7' font-family='monospace' font-size='32' font-weight='700'>42 KB Gzip</text>
      <text x='725' y='100' fill='#a855f7' font-family='monospace' font-size='11'>Tree-Shaken Tailwind v4 Engine</text>

      <rect x='1050' width='330' height='120' rx='10' fill='#050b18' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='1075' y='35' fill='#64748b' font-family='monospace' font-size='12'>GLOBAL TTFB</text>
      <text x='1075' y='75' fill='#34d399' font-family='monospace' font-size='32' font-weight='700'>24 ms</text>
      <text x='1075' y='100' fill='#34d399' font-family='monospace' font-size='11'>Serverless Edge Deployment</text>
    </g>

    <!-- Code Editor & Live Preview -->
    <g transform='translate(30, 220)'>
      <!-- IDE Editor -->
      <rect width='890' height='545' rx='12' fill='#050b18' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>// src/app/api/enterprise-sync/route.ts — Next.js 16 Edge Runtime</text>
      
      <g transform='translate(25, 60)'>
        <text x='0' y='25' fill='#38bdf8' font-family='monospace' font-size='12'>export const runtime = 'edge';</text>
        <text x='0' y='55' fill='#38bdf8' font-family='monospace' font-size='12'>import { NextRequest, NextResponse } from 'next/server';</text>
        <text x='0' y='85' fill='#38bdf8' font-family='monospace' font-size='12'>import { z } from 'zod';</text>
        
        <text x='0' y='130' fill='#a855f7' font-family='monospace' font-size='12'>export async function POST(req: NextRequest) {</text>
        <text x='25' y='160' fill='#e2e8f0' font-family='monospace' font-size='12'>  const payload = await req.json();</text>
        <text x='25' y='190' fill='#94a3b8' font-family='monospace' font-size='12'>  const validated = EnterpriseSchema.parse(payload);</text>
        <text x='25' y='220' fill='#10b981' font-family='monospace' font-size='12'>  const result = await processEdgePayload(validated);</text>
        <text x='25' y='250' fill='#e2e8f0' font-family='monospace' font-size='12'>  return NextResponse.json({ success: true, telemetry: result }, {</text>
        <text x='50' y='280' fill='#38bdf8' font-family='monospace' font-size='12'>    headers: { 'Cache-Control': 's-maxage=60, stale-while-revalidate=300' }</text>
        <text x='25' y='310' fill='#e2e8f0' font-family='monospace' font-size='12'>  });</text>
        <text x='0' y='340' fill='#a855f7' font-family='monospace' font-size='12'>}</text>
      </g>

      <!-- Right Test & Deployment Matrix -->
      <rect x='915' width='465' height='545' rx='12' fill='#050b18' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='940' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>CI/CD PIPELINE &amp; AUTOMATED TESTS</text>

      <g transform='translate(940, 65)'>
        <text x='0' y='20' fill='#10b981' font-family='monospace' font-size='11'>✓ TypeScript Typecheck: 0 Errors (1.2s)</text>
        <text x='0' y='45' fill='#10b981' font-family='monospace' font-size='11'>✓ ESLint Strict Mode: 0 Warnings</text>
        <text x='0' y='70' fill='#10b981' font-family='monospace' font-size='11'>✓ Vitest Unit Suites: 84 / 84 Passed</text>
        <text x='0' y='95' fill='#10b981' font-family='monospace' font-size='11'>✓ Playwright E2E: 32 / 32 Passed</text>
        
        <line x1='0' y1='120' x2='415' y2='120' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
        
        <text x='0' y='150' fill='#38bdf8' font-family='monospace' font-size='12' font-weight='700'>PRODUCTION DEPLOYMENT</text>
        <text x='0' y='180' fill='#ffffff' font-family='monospace' font-size='11'>Target: https://cloudconsultancy.in</text>
        <text x='0' y='205' fill='#94a3b8' font-family='monospace' font-size='11'>Commit: git rev-parse HEAD (Main Branch)</text>
        <text x='0' y='230' fill='#34d399' font-family='monospace' font-size='11'>Static Pages Generated: 42 / 42</text>

        <rect y='260' width='415' height='190' rx='8' fill='#0c1a38' stroke='rgba(56, 189, 248, 0.2)' stroke-width='1'/>
        <text x='15' y='295' fill='#38bdf8' font-family='monospace' font-size='12' font-weight='700'>ENTERPRISE SLA GUARANTEE</text>
        <text x='15' y='325' fill='#ffffff' font-family='monospace' font-size='12'>Zero-Downtime Atomic Rollout</text>
        <text x='15' y='355' fill='#10b981' font-family='monospace' font-size='11'>✓ Instant rollback support enabled</text>
        <text x='15' y='380' fill='#10b981' font-family='monospace' font-size='11'>✓ SOC2 / GDPR compliant telemetry</text>
        <text x='15' y='405' fill='#34d399' font-family='monospace' font-size='11'>✓ Sub-second global replication</text>
      </g>
    </g>
  </g>
</svg>`;
}

// 2. Technical SEO
function getServiceSeoSvg() {
  return `
<svg width='1600' height='900' viewBox='0 0 1600 900' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bg_seo_srv' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#020c0f'/>
      <stop offset='50%' stop-color='#061b24'/>
      <stop offset='100%' stop-color='#01070a'/>
    </linearGradient>
    <radialGradient id='emeraldGlow' cx='85%' cy='20%' r='50%'>
      <stop offset='0%' stop-color='rgba(16, 185, 129, 0.25)'/>
      <stop offset='100%' stop-color='rgba(16, 185, 129, 0)'/>
    </radialGradient>
    <radialGradient id='cyanGlow' cx='15%' cy='80%' r='50%'>
      <stop offset='0%' stop-color='rgba(6, 182, 212, 0.2)'/>
      <stop offset='100%' stop-color='rgba(6, 182, 212, 0)'/>
    </radialGradient>
  </defs>

  <rect width='1600' height='900' fill='url(#bg_seo_srv)'/>
  <rect width='1600' height='900' fill='url(#emeraldGlow)'/>
  <rect width='1600' height='900' fill='url(#cyanGlow)'/>
  ${renderGrid(1600, 900, 50, 0.03)}

  <g transform='translate(80, 50)'>
    <rect width='1440' height='800' rx='16' fill='#06151c' stroke='rgba(16, 185, 129, 0.25)' stroke-width='1.5'/>
    
    <rect width='1440' height='52' rx='16' fill='#0c2530'/>
    <rect y='36' width='1440' height='16' fill='#0c2530'/>
    <line x1='0' y1='52' x2='1440' y2='52' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    
    <circle cx='35' cy='26' r='6' fill='#ef4444'/>
    <circle cx='58' cy='26' r='6' fill='#f59e0b'/>
    <circle cx='81' cy='26' r='6' fill='#10b981'/>
    
    <text x='120' y='31' fill='#34d399' font-family='monospace' font-size='13' font-weight='600'>TECHNICAL SEO // ENTERPRISE CRAWL MONITOR &amp; PERFORMANCE TELEMETRY</text>
    <rect x='1230' y='14' width='180' height='24' rx='6' fill='rgba(16, 185, 129, 0.15)' stroke='#10b981' stroke-width='1'/>
    <text x='1250' y='30' fill='#34d399' font-family='monospace' font-size='11' font-weight='700'>● 100% INDEXABLE</text>

    <!-- 4 Stats -->
    <g transform='translate(30, 75)'>
      <rect width='325' height='120' rx='10' fill='#030c11' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12'>SEARCH CONSOLE INDEX RATIO</text>
      <text x='25' y='75' fill='#10b981' font-family='monospace' font-size='32' font-weight='700'>100.0 %</text>
      <text x='25' y='100' fill='#34d399' font-family='monospace' font-size='11'>Zero Crawl Anomaly Errors</text>

      <rect x='350' width='325' height='120' rx='10' fill='#030c11' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='375' y='35' fill='#64748b' font-family='monospace' font-size='12'>CRAWL BUDGET EFFICIENCY</text>
      <text x='375' y='75' fill='#38bdf8' font-family='monospace' font-size='32' font-weight='700'>+84% SPEED</text>
      <text x='375' y='100' fill='#38bdf8' font-family='monospace' font-size='11'>Sub-30ms Dynamic SSR Payload</text>

      <rect x='700' width='325' height='120' rx='10' fill='#030c11' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='725' y='35' fill='#64748b' font-family='monospace' font-size='12'>STRUCTURED DATA COVERAGE</text>
      <text x='725' y='75' fill='#34d399' font-family='monospace' font-size='32' font-weight='700'>42 / 42 URLS</text>
      <text x='725' y='100' fill='#34d399' font-family='monospace' font-size='11'>Rich Snippets Enabled in SERP</text>

      <rect x='1050' width='330' height='120' rx='10' fill='#030c11' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='1075' y='35' fill='#64748b' font-family='monospace' font-size='12'>ORGANIC SEARCH TRAFFIC</text>
      <text x='1075' y='75' fill='#f59e0b' font-family='monospace' font-size='32' font-weight='700'>▲ +248%</text>
      <text x='1075' y='100' fill='#f59e0b' font-family='monospace' font-size='11'>High SV / Low KD Strategy</text>
    </g>

    <!-- Graphs & Crawl Table -->
    <g transform='translate(30, 220)'>
      <rect width='890' height='545' rx='12' fill='#030c11' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>SERP RANKING TRAJECTORY &amp; CORE WEB VITALS DISTRIBUTION</text>
      
      <!-- Graph Line: Steady upward curve -->
      <path d='M 40 440 Q 250 400, 450 280 T 700 160 T 850 90' fill='none' stroke='#10b981' stroke-width='4'/>
      <text x='640' y='140' fill='#34d399' font-family='monospace' font-size='12' font-weight='700'>TOP 3 POSITIONS (+248% IMPRESSIONS)</text>

      <!-- Live Googlebot Crawl Log -->
      <g transform='translate(25, 300)'>
        <rect width='840' height='220' rx='8' fill='#02080c' stroke='rgba(255,255,255,0.05)' stroke-width='1'/>
        <text x='20' y='30' fill='#64748b' font-family='monospace' font-size='11'>TIME</text>
        <text x='150' y='30' fill='#64748b' font-family='monospace' font-size='11'>URL PATH</text>
        <text x='520' y='30' fill='#64748b' font-family='monospace' font-size='11'>STATUS</text>
        <text x='640' y='30' fill='#64748b' font-family='monospace' font-size='11'>RENDER TIME</text>
        <line x1='20' y1='45' x2='820' y2='45' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>

        <text x='20' y='75' fill='#94a3b8' font-family='monospace' font-size='11'>23:58:12</text>
        <text x='150' y='75' fill='#38bdf8' font-family='monospace' font-size='11'>/services/technical-seo/</text>
        <text x='520' y='75' fill='#10b981' font-family='monospace' font-size='11'>200 OK</text>
        <text x='640' y='75' fill='#10b981' font-family='monospace' font-size='11'>18 ms</text>

        <text x='20' y='110' fill='#94a3b8' font-family='monospace' font-size='11'>23:58:14</text>
        <text x='150' y='110' fill='#38bdf8' font-family='monospace' font-size='11'>/salesforce/</text>
        <text x='520' y='110' fill='#10b981' font-family='monospace' font-size='11'>200 OK</text>
        <text x='640' y='110' fill='#10b981' font-family='monospace' font-size='11'>22 ms</text>

        <text x='20' y='145' fill='#94a3b8' font-family='monospace' font-size='11'>23:58:16</text>
        <text x='150' y='110' fill='#38bdf8' font-family='monospace' font-size='11'>/blog/core-web-vitals-inp-guide/</text>
        <text x='520' y='145' fill='#10b981' font-family='monospace' font-size='11'>200 OK</text>
        <text x='640' y='145' fill='#10b981' font-family='monospace' font-size='11'>24 ms</text>

        <text x='20' y='180' fill='#34d399' font-family='monospace' font-size='11'>✓ Canonical link headers verified without redirection hops.</text>
      </g>

      <!-- Right SEO Checklist -->
      <rect x='915' width='465' height='545' rx='12' fill='#030c11' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='940' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>ENTERPRISE SEO VERIFICATION</text>

      <g transform='translate(940, 65)'>
        <text x='0' y='20' fill='#34d399' font-family='monospace' font-size='11'>✓ Sitemaps: auto-generated at build</text>
        <text x='0' y='45' fill='#34d399' font-family='monospace' font-size='11'>✓ Robots.txt: disallows private admin APIs</text>
        <text x='0' y='70' fill='#34d399' font-family='monospace' font-size='11'>✓ OpenGraph &amp; Twitter Cards: 100% Validated</text>
        <text x='0' y='95' fill='#34d399' font-family='monospace' font-size='11'>✓ FAQ Structured Schema: 5 FAQs Injected</text>
        <text x='0' y='120' fill='#34d399' font-family='monospace' font-size='11'>✓ BreadcrumbList Schema: Complete Tree</text>

        <rect y='150' width='415' height='300' rx='8' fill='#0c2530' stroke='rgba(16, 185, 129, 0.2)' stroke-width='1'/>
        <text x='15' y='185' fill='#34d399' font-family='monospace' font-size='12' font-weight='700'>HIGH SV / LOW KD KEYWORDS</text>
        <text x='15' y='215' fill='#ffffff' font-family='monospace' font-size='11'>• Next.js Web Development Agency (KD: 18)</text>
        <text x='15' y='245' fill='#ffffff' font-family='monospace' font-size='11'>• Enterprise Salesforce Consultancy (KD: 24)</text>
        <text x='15' y='275' fill='#ffffff' font-family='monospace' font-size='11'>• Full-Stack Cloud Engineering Partner (KD: 14)</text>
        <text x='15' y='305' fill='#ffffff' font-family='monospace' font-size='11'>• Headless Shopify Hydrogen Experts (KD: 21)</text>
        <text x='15' y='340' fill='#10b981' font-family='monospace' font-size='11'>✓ Target Search Intent: High-Intent Buyer Traffic</text>
        <text x='15' y='365' fill='#38bdf8' font-family='monospace' font-size='11'>✓ Conversion Rate: +4.8% on Target Landers</text>
      </g>
    </g>
  </g>
</svg>`;
}

// 3. Android App Development
function getServiceAndroidAppSvg() {
  return `
<svg width='1600' height='900' viewBox='0 0 1600 900' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bg_android' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#030f0a'/>
      <stop offset='50%' stop-color='#081d14'/>
      <stop offset='100%' stop-color='#020805'/>
    </linearGradient>
    <radialGradient id='emeraldGlow' cx='85%' cy='20%' r='50%'>
      <stop offset='0%' stop-color='rgba(16, 185, 129, 0.25)'/>
      <stop offset='100%' stop-color='rgba(16, 185, 129, 0)'/>
    </radialGradient>
    <radialGradient id='slateGlow' cx='15%' cy='80%' r='50%'>
      <stop offset='0%' stop-color='rgba(52, 211, 153, 0.2)'/>
      <stop offset='100%' stop-color='rgba(52, 211, 153, 0)'/>
    </radialGradient>
  </defs>

  <rect width='1600' height='900' fill='url(#bg_android)'/>
  <rect width='1600' height='900' fill='url(#emeraldGlow)'/>
  <rect width='1600' height='900' fill='url(#slateGlow)'/>
  ${renderGrid(1600, 900, 50, 0.03)}

  <g transform='translate(80, 50)'>
    <rect width='1440' height='800' rx='16' fill='#061710' stroke='rgba(52, 211, 153, 0.25)' stroke-width='1.5'/>
    
    <rect width='1440' height='52' rx='16' fill='#0c261b'/>
    <rect y='36' width='1440' height='16' fill='#0c261b'/>
    <line x1='0' y1='52' x2='1440' y2='52' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    
    <circle cx='35' cy='26' r='6' fill='#ef4444'/>
    <circle cx='58' cy='26' r='6' fill='#f59e0b'/>
    <circle cx='81' cy='26' r='6' fill='#10b981'/>
    
    <text x='120' y='31' fill='#6ee7b7' font-family='monospace' font-size='13' font-weight='600'>ANDROID ENGINEERING LAB // KOTLIN JETPACK COMPOSE &amp; MATERIAL 3 ARCHITECTURE</text>
    <rect x='1230' y='14' width='180' height='24' rx='6' fill='rgba(16, 185, 129, 0.15)' stroke='#10b981' stroke-width='1'/>
    <text x='1250' y='30' fill='#34d399' font-family='monospace' font-size='11' font-weight='700'>● TARGET SDK: 35 (15)</text>

    <!-- Top KPIs -->
    <g transform='translate(30, 75)'>
      <rect width='325' height='120' rx='10' fill='#030d09' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12'>FRAME RENDER TIME</text>
      <text x='25' y='75' fill='#34d399' font-family='monospace' font-size='32' font-weight='700'>7.8 ms</text>
      <text x='25' y='100' fill='#10b981' font-family='monospace' font-size='11'>120 FPS Fluid Scrolling Baseline</text>

      <rect x='350' width='325' height='120' rx='10' fill='#030d09' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='375' y='35' fill='#64748b' font-family='monospace' font-size='12'>COMPOSE RECOMPOSITION OVERHEAD</text>
      <text x='375' y='75' fill='#38bdf8' font-family='monospace' font-size='32' font-weight='700'>0.2 %</text>
      <text x='375' y='100' fill='#38bdf8' font-family='monospace' font-size='11'>Smart Recomposition Skipped</text>

      <rect x='700' width='325' height='120' rx='10' fill='#030d09' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='725' y='35' fill='#64748b' font-family='monospace' font-size='12'>COLD APP LAUNCH SPEED</text>
      <text x='725' y='75' fill='#34d399' font-family='monospace' font-size='32' font-weight='700'>380 ms</text>
      <text x='725' y='100' fill='#34d399' font-family='monospace' font-size='11'>Baseline Profiles Pre-Compiled</text>

      <rect x='1050' width='330' height='120' rx='10' fill='#030d09' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='1075' y='35' fill='#64748b' font-family='monospace' font-size='12'>APK CRASH-FREE SESSIONS</text>
      <text x='1075' y='75' fill='#10b981' font-family='monospace' font-size='32' font-weight='700'>99.98 %</text>
      <text x='1075' y='100' fill='#10b981' font-family='monospace' font-size='11'>Over 2.4M Active Installs</text>
    </g>

    <!-- Kotlin Jetpack Compose Code & Live Pixel Mockup -->
    <g transform='translate(30, 220)'>
      <!-- Kotlin Code IDE -->
      <rect width='890' height='545' rx='12' fill='#030d09' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>// app/src/main/java/in/cloudconsultancy/ui/TelemetryScreen.kt</text>
      
      <g transform='translate(25, 60)'>
        <text x='0' y='25' fill='#34d399' font-family='monospace' font-size='12'>@Composable</text>
        <text x='0' y='55' fill='#34d399' font-family='monospace' font-size='12'>fun TelemetryDashboard(viewModel: TelemetryViewModel = hiltViewModel()) {</text>
        <text x='25' y='85' fill='#e2e8f0' font-family='monospace' font-size='12'>  val state by viewModel.uiState.collectAsStateWithLifecycle()</text>
        
        <text x='25' y='130' fill='#38bdf8' font-family='monospace' font-size='12'>  LazyColumn(modifier = Modifier.fillMaxSize().statusBarsPadding()) {</text>
        <text x='50' y='160' fill='#e2e8f0' font-family='monospace' font-size='12'>    item { HeaderMetricsCard(state.metrics) }</text>
        <text x='50' y='190' fill='#34d399' font-family='monospace' font-size='12'>    items(state.orders, key = { it.id }) { order -&gt;</text>
        <text x='75' y='220' fill='#e2e8f0' font-family='monospace' font-size='12'>      OrderExecutionCard(order, onAction = { viewModel.dispatch(it) })</text>
        <text x='50' y='250' fill='#34d399' font-family='monospace' font-size='12'>    }</text>
        <text x='25' y='280' fill='#38bdf8' font-family='monospace' font-size='12'>  }</text>
        <text x='0' y='310' fill='#34d399' font-family='monospace' font-size='12'>}</text>

        <rect y='340' width='840' height='120' rx='8' fill='#061710' stroke='rgba(52, 211, 153, 0.2)' stroke-width='1'/>
        <text x='20' y='375' fill='#34d399' font-family='monospace' font-size='12' font-weight='700'>COROUTINES &amp; FLOW REACTIVE BACKBONE</text>
        <text x='20' y='405' fill='#ffffff' font-family='monospace' font-size='11'>StateFlow backpressure buffer with Dispatchers.Default compute pool.</text>
        <text x='20' y='435' fill='#10b981' font-family='monospace' font-size='11'>✓ Room 2.6 KSP offline SQLite synchronization enabled</text>
      </g>

      <!-- Right Pixel Device Frame -->
      <rect x='915' width='465' height='545' rx='12' fill='#030d09' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='940' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>GOOGLE PIXEL 9 PRO LIVE PREVIEW</text>

      <g transform='translate(970, 65)'>
        <!-- Phone Frame -->
        <rect width='350' height='460' rx='28' fill='#0a1e16' stroke='#34d399' stroke-width='2'/>
        <circle cx='175' cy='18' r='5' fill='#030d09'/>

        <!-- Screen Content -->
        <g transform='translate(20, 35)'>
          <rect width='310' height='405' rx='16' fill='#04100b'/>
          <text x='15' y='30' fill='#34d399' font-family='monospace' font-size='12' font-weight='700'>CloudConsultancy Android</text>
          
          <rect x='15' y='45' width='280' height='90' rx='8' fill='#082015'/>
          <text x='30' y='75' fill='#94a3b8' font-family='monospace' font-size='10'>ACTIVE BACKGROUND JOBS</text>
          <text x='30' y='105' fill='#ffffff' font-family='monospace' font-size='18' font-weight='700'>WorkManager 100% OK</text>

          <rect x='15' y='150' width='280' height='70' rx='8' fill='#082015'/>
          <text x='30' y='180' fill='#94a3b8' font-family='monospace' font-size='10'>BLUETOOTH BLE SENSOR</text>
          <text x='30' y='205' fill='#34d399' font-family='monospace' font-size='14' font-weight='700'>● Connected (0.4ms Latency)</text>

          <rect x='15' y='235' width='280' height='70' rx='8' fill='#082015'/>
          <text x='30' y='265' fill='#94a3b8' font-family='monospace' font-size='10'>OFFLINE DATA VAULT</text>
          <text x='30' y='290' fill='#38bdf8' font-family='monospace' font-size='14' font-weight='700'>AES-256 SQLCipher Encrypted</text>
        </g>
      </g>
    </g>
  </g>
</svg>`;
}

// 4. iOS App Development
function getServiceIosAppSvg() {
  return `
<svg width='1600' height='900' viewBox='0 0 1600 900' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bg_ios' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#05071a'/>
      <stop offset='50%' stop-color='#0a1036'/>
      <stop offset='100%' stop-color='#030410'/>
    </linearGradient>
    <radialGradient id='indigoGlow' cx='85%' cy='20%' r='50%'>
      <stop offset='0%' stop-color='rgba(99, 102, 241, 0.25)'/>
      <stop offset='100%' stop-color='rgba(99, 102, 241, 0)'/>
    </radialGradient>
    <radialGradient id='blueGlow' cx='15%' cy='80%' r='50%'>
      <stop offset='0%' stop-color='rgba(59, 130, 246, 0.2)'/>
      <stop offset='100%' stop-color='rgba(59, 130, 246, 0)'/>
    </radialGradient>
  </defs>

  <rect width='1600' height='900' fill='url(#bg_ios)'/>
  <rect width='1600' height='900' fill='url(#indigoGlow)'/>
  <rect width='1600' height='900' fill='url(#blueGlow)'/>
  ${renderGrid(1600, 900, 50, 0.03)}

  <g transform='translate(80, 50)'>
    <rect width='1440' height='800' rx='16' fill='#080e29' stroke='rgba(99, 102, 241, 0.25)' stroke-width='1.5'/>
    
    <rect width='1440' height='52' rx='16' fill='#101842'/>
    <rect y='36' width='1440' height='16' fill='#101842'/>
    <line x1='0' y1='52' x2='1440' y2='52' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    
    <circle cx='35' cy='26' r='6' fill='#ef4444'/>
    <circle cx='58' cy='26' r='6' fill='#f59e0b'/>
    <circle cx='81' cy='26' r='6' fill='#10b981'/>
    
    <text x='120' y='31' fill='#a5b4fc' font-family='monospace' font-size='13' font-weight='600'>XCODE 16 WORKBENCH // NATIVE SWIFT 6 &amp; SWIFTUI ARCHITECTURE</text>
    <rect x='1230' y='14' width='180' height='24' rx='6' fill='rgba(99, 102, 241, 0.15)' stroke='#6366f1' stroke-width='1'/>
    <text x='1250' y='30' fill='#a5b4fc' font-family='monospace' font-size='11' font-weight='700'>● SWIFT 6 CONCURRENCY</text>

    <!-- Top KPIs -->
    <g transform='translate(30, 75)'>
      <rect width='325' height='120' rx='10' fill='#04081c' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12'>PROMOTION RENDERING</text>
      <text x='25' y='75' fill='#a5b4fc' font-family='monospace' font-size='32' font-weight='700'>120 FPS</text>
      <text x='25' y='100' fill='#10b981' font-family='monospace' font-size='11'>Metal 3 GPU Shaders Accelerated</text>

      <rect x='350' width='325' height='120' rx='10' fill='#04081c' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='375' y='35' fill='#64748b' font-family='monospace' font-size='12'>DATA RACE SAFETY</text>
      <text x='375' y='75' fill='#10b981' font-family='monospace' font-size='32' font-weight='700'>100% VERIFIED</text>
      <text x='375' y='100' fill='#10b981' font-family='monospace' font-size='11'>Complete Strict Concurrency Check</text>

      <rect x='700' width='325' height='120' rx='10' fill='#04081c' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='725' y='35' fill='#64748b' font-family='monospace' font-size='12'>APP STORE RATING</text>
      <text x='725' y='75' fill='#f59e0b' font-family='monospace' font-size='32' font-weight='700'>4.9 / 5.0</text>
      <text x='725' y='100' fill='#f59e0b' font-family='monospace' font-size='11'>Across 180,000 Verified Reviews</text>

      <rect x='1050' width='330' height='120' rx='10' fill='#04081c' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='1075' y='35' fill='#64748b' font-family='monospace' font-size='12'>COLD START TIME</text>
      <text x='1075' y='75' fill='#38bdf8' font-family='monospace' font-size='32' font-weight='700'>310 ms</text>
      <text x='1075' y='100' fill='#38bdf8' font-family='monospace' font-size='11'>Dyld Pre-Warmed Execution</text>
    </g>

    <!-- Swift 6 Code & iPhone 16 Pro Simulator Frame -->
    <g transform='translate(30, 220)'>
      <!-- Swift Code IDE -->
      <rect width='890' height='545' rx='12' fill='#04081c' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>// Sources/Features/Telemetry/Views/TradingTerminalView.swift — Swift 6</text>
      
      <g transform='translate(25, 60)'>
        <text x='0' y='25' fill='#6366f1' font-family='monospace' font-size='12'>import SwiftUI</text>
        <text x='0' y='55' fill='#6366f1' font-family='monospace' font-size='12'>import Observation</text>
        
        <text x='0' y='100' fill='#a5b4fc' font-family='monospace' font-size='12'>@Observable</text>
        <text x='0' y='130' fill='#a855f7' font-family='monospace' font-size='12'>final class TerminalViewModel: Sendable {</text>
        <text x='25' y='160' fill='#e2e8f0' font-family='monospace' font-size='12'>  var marketTicks: [MarketTick] = []</text>
        <text x='25' y='190' fill='#e2e8f0' font-family='monospace' font-size='12'>  func connectWebSocketStream() async {</text>
        <text x='50' y='220' fill='#10b981' font-family='monospace' font-size='12'>    for await tick in WebSocketChannel.shared.stream {</text>
        <text x='75' y='250' fill='#38bdf8' font-family='monospace' font-size='12'>      await MainActor.run { self.marketTicks.append(tick) }</text>
        <text x='50' y='280' fill='#10b981' font-family='monospace' font-size='12'>    }</text>
        <text x='25' y='310' fill='#e2e8f0' font-family='monospace' font-size='12'>  }</text>
        <text x='0' y='340' fill='#a855f7' font-family='monospace' font-size='12'>}</text>

        <rect y='370' width='840' height='120' rx='8' fill='#0a1036' stroke='rgba(99, 102, 241, 0.2)' stroke-width='1'/>
        <text x='20' y='405' fill='#a5b4fc' font-family='monospace' font-size='12' font-weight='700'>SWIFTDATA PERSISTENCE &amp; CLOUDKIT SYNC</text>
        <text x='20' y='435' fill='#ffffff' font-family='monospace' font-size='11'>Encrypted SQLite local backing with background CloudKit delta replication.</text>
        <text x='20' y='465' fill='#10b981' font-family='monospace' font-size='11'>✓ FaceID / Keychain Biometric authentication integrated</text>
      </g>

      <!-- Right iPhone 16 Pro Frame -->
      <rect x='915' width='465' height='545' rx='12' fill='#04081c' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='940' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>IPHONE 16 PRO SIMULATOR</text>

      <g transform='translate(970, 65)'>
        <!-- Phone Outline -->
        <rect width='350' height='460' rx='32' fill='#0a1236' stroke='#6366f1' stroke-width='2'/>
        <!-- Dynamic Island -->
        <rect x='125' y='12' width='100' height='24' rx='12' fill='#000000'/>
        <circle cx='205' cy='24' r='4' fill='#10b981'/>

        <!-- Screen Content -->
        <g transform='translate(20, 45)'>
          <rect width='310' height='395' rx='16' fill='#050b24'/>
          <text x='15' y='30' fill='#a5b4fc' font-family='monospace' font-size='12' font-weight='700'>CloudConsultancy iOS</text>
          
          <rect x='15' y='45' width='280' height='90' rx='8' fill='#0e1948'/>
          <text x='30' y='75' fill='#94a3b8' font-family='monospace' font-size='10'>PORTFOLIO REAL-TIME BALANCE</text>
          <text x='30' y='105' fill='#ffffff' font-family='monospace' font-size='20' font-weight='700'>$248,910.42</text>

          <rect x='15' y='150' width='280' height='70' rx='8' fill='#0e1948'/>
          <text x='30' y='180' fill='#94a3b8' font-family='monospace' font-size='10'>APPLE PAY BIOMETRIC</text>
          <text x='30' y='205' fill='#10b981' font-family='monospace' font-size='14' font-weight='700'>● Secure Enclave Ready</text>

          <rect x='15' y='235' width='280' height='70' rx='8' fill='#0e1948'/>
          <text x='30' y='265' fill='#94a3b8' font-family='monospace' font-size='10'>BACKGROUND APNs PUSH</text>
          <text x='30' y='290' fill='#38bdf8' font-family='monospace' font-size='14' font-weight='700'>Sub-100ms Delivery Time</text>
        </g>
      </g>
    </g>
  </g>
</svg>`;
}

// 5. Cross-Platform Mobile Apps
function getServiceCrossPlatformSvg() {
  return `
<svg width='1600' height='900' viewBox='0 0 1600 900' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bg_cross_srv' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#060414'/>
      <stop offset='50%' stop-color='#120a2e'/>
      <stop offset='100%' stop-color='#03020a'/>
    </linearGradient>
    <radialGradient id='violetGlow' cx='85%' cy='20%' r='50%'>
      <stop offset='0%' stop-color='rgba(139, 92, 246, 0.25)'/>
      <stop offset='100%' stop-color='rgba(139, 92, 246, 0)'/>
    </radialGradient>
    <radialGradient id='cyanGlow' cx='15%' cy='80%' r='50%'>
      <stop offset='0%' stop-color='rgba(6, 182, 212, 0.2)'/>
      <stop offset='100%' stop-color='rgba(6, 182, 212, 0)'/>
    </radialGradient>
  </defs>

  <rect width='1600' height='900' fill='url(#bg_cross_srv)'/>
  <rect width='1600' height='900' fill='url(#violetGlow)'/>
  <rect width='1600' height='900' fill='url(#cyanGlow)'/>
  ${renderGrid(1600, 900, 50, 0.03)}

  <g transform='translate(80, 50)'>
    <rect width='1440' height='800' rx='16' fill='#0e0924' stroke='rgba(139, 92, 246, 0.25)' stroke-width='1.5'/>
    
    <rect width='1440' height='52' rx='16' fill='#18103d'/>
    <rect y='36' width='1440' height='16' fill='#18103d'/>
    <line x1='0' y1='52' x2='1440' y2='52' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    
    <circle cx='35' cy='26' r='6' fill='#ef4444'/>
    <circle cx='58' cy='26' r='6' fill='#f59e0b'/>
    <circle cx='81' cy='26' r='6' fill='#10b981'/>
    
    <text x='120' y='31' fill='#c4b5fd' font-family='monospace' font-size='13' font-weight='600'>CROSS-PLATFORM ENGINEERING // SINGLE CODEBASE DUAL-NATIVE DEPLOYMENT (IOS &amp; ANDROID)</text>
    <rect x='1230' y='14' width='180' height='24' rx='6' fill='rgba(139, 92, 246, 0.15)' stroke='#8b5cf6' stroke-width='1'/>
    <text x='1250' y='30' fill='#c084fc' font-family='monospace' font-size='11' font-weight='700'>● 98% CODE REUSE</text>

    <!-- Top Architecture Metrics -->
    <g transform='translate(30, 75)'>
      <rect width='325' height='120' rx='10' fill='#070414' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12'>SHARED CODEBASE RATIO</text>
      <text x='25' y='75' fill='#c084fc' font-family='monospace' font-size='32' font-weight='700'>98.2 %</text>
      <text x='25' y='100' fill='#10b981' font-family='monospace' font-size='11'>Only 1.8% Platform-Specific Bridging</text>

      <rect x='350' width='325' height='120' rx='10' fill='#070414' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='375' y='35' fill='#64748b' font-family='monospace' font-size='12'>HOT RELOAD CYCLE</text>
      <text x='375' y='75' fill='#38bdf8' font-family='monospace' font-size='32' font-weight='700'>0.42 s</text>
      <text x='375' y='100' fill='#38bdf8' font-family='monospace' font-size='11'>State Preserved Across Both Devices</text>

      <rect x='700' width='325' height='120' rx='10' fill='#070414' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='725' y='35' fill='#64748b' font-family='monospace' font-size='12'>TIME TO MARKET SAVINGS</text>
      <text x='725' y='75' fill='#10b981' font-family='monospace' font-size='32' font-weight='700'>55 % FASTER</text>
      <text x='725' y='100' fill='#10b981' font-family='monospace' font-size='11'>Single Sprint Multi-Store Publish</text>

      <rect x='1050' width='330' height='120' rx='10' fill='#070414' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='1075' y='35' fill='#64748b' font-family='monospace' font-size='12'>FRAME CONSISTENCY</text>
      <text x='1075' y='75' fill='#34d399' font-family='monospace' font-size='32' font-weight='700'>120 FPS</text>
      <text x='1075' y='100' fill='#34d399' font-family='monospace' font-size='11'>Impeller &amp; Fabric Hardware Sync</text>
    </g>

    <!-- Dual Phone Display (iOS Left, Android Right) -->
    <g transform='translate(50, 230)'>
      <!-- iOS Simulator Window -->
      <rect width='630' height='535' rx='12' fill='#070414' stroke='#38bdf8' stroke-width='1.5'/>
      <text x='30' y='40' fill='#38bdf8' font-family='monospace' font-size='14' font-weight='700'>APPLE iOS 18+ SIMULATOR</text>
      <text x='30' y='65' fill='#94a3b8' font-family='monospace' font-size='11'>Metal Graphics Core • Cupertino Guidelines</text>

      <g transform='translate(30, 90)'>
        <rect width='570' height='300' rx='10' fill='#0e1533' stroke='rgba(56, 189, 248, 0.2)' stroke-width='1'/>
        <text x='25' y='40' fill='#ffffff' font-family='system-ui, sans-serif' font-size='18' font-weight='700'>Synchronized SaaS Mobile Client</text>
        <text x='25' y='70' fill='#34d399' font-family='monospace' font-size='12'>● WebSocket Feed Connected (P99: 4ms)</text>
        
        <rect x='25' y='95' width='520' height='60' rx='8' fill='#17214d'/>
        <text x='45' y='130' fill='#e2e8f0' font-family='monospace' font-size='12'>Biometric Keychain Vault: Authenticated</text>

        <rect x='25' y='175' width='520' height='60' rx='8' fill='#17214d'/>
        <text x='45' y='210' fill='#38bdf8' font-family='monospace' font-size='12'>Push Notifications (APNs HTTP/2): Active</text>
      </g>
      <text x='30' y='430' fill='#10b981' font-family='monospace' font-size='12'>✓ iOS App Store Review Guidelines: 100% Pass</text>

      <!-- Android Simulator Window -->
      <g transform='translate(680, 0)'>
        <rect width='630' height='535' rx='12' fill='#070414' stroke='#10b981' stroke-width='1.5'/>
        <text x='30' y='40' fill='#34d399' font-family='monospace' font-size='14' font-weight='700'>GOOGLE ANDROID 15 SIMULATOR</text>
        <text x='30' y='65' fill='#94a3b8' font-family='monospace' font-size='11'>Vulkan Graphics Core • Material 3 Theming</text>

        <g transform='translate(30, 90)'>
          <rect width='570' height='300' rx='10' fill='#091f16' stroke='rgba(16, 185, 129, 0.2)' stroke-width='1'/>
          <text x='25' y='40' fill='#ffffff' font-family='system-ui, sans-serif' font-size='18' font-weight='700'>Synchronized SaaS Mobile Client</text>
          <text x='25' y='70' fill='#34d399' font-family='monospace' font-size='12'>● WebSocket Feed Connected (P99: 4ms)</text>
          
          <rect x='25' y='95' width='520' height='60' rx='8' fill='#102d20'/>
          <text x='45' y='130' fill='#e2e8f0' font-family='monospace' font-size='12'>Biometric AndroidX Crypto: Authenticated</text>

          <rect x='25' y='175' width='520' height='60' rx='8' fill='#102d20'/>
          <text x='45' y='210' fill='#34d399' font-family='monospace' font-size='12'>Push Notifications (FCM v1 HTTP): Active</text>
        </g>
        <text x='30' y='430' fill='#10b981' font-family='monospace' font-size='12'>✓ Google Play Store Compliance: 100% Pass</text>
      </g>
    </g>
  </g>
</svg>`;
}

// 6. UI/UX Modernization & Design Systems
function getServiceUiUxSvg() {
  return `
<svg width='1600' height='900' viewBox='0 0 1600 900' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bg_ui' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#0a0414'/>
      <stop offset='50%' stop-color='#190c33'/>
      <stop offset='100%' stop-color='#05020a'/>
    </linearGradient>
    <radialGradient id='fuchsiaGlow' cx='85%' cy='20%' r='50%'>
      <stop offset='0%' stop-color='rgba(217, 70, 239, 0.25)'/>
      <stop offset='100%' stop-color='rgba(217, 70, 239, 0)'/>
    </radialGradient>
    <radialGradient id='purpleGlow' cx='15%' cy='80%' r='50%'>
      <stop offset='0%' stop-color='rgba(168, 85, 247, 0.2)'/>
      <stop offset='100%' stop-color='rgba(168, 85, 247, 0)'/>
    </radialGradient>
  </defs>

  <rect width='1600' height='900' fill='url(#bg_ui)'/>
  <rect width='1600' height='900' fill='url(#fuchsiaGlow)'/>
  <rect width='1600' height='900' fill='url(#purpleGlow)'/>
  ${renderGrid(1600, 900, 50, 0.03)}

  <g transform='translate(80, 50)'>
    <rect width='1440' height='800' rx='16' fill='#120a26' stroke='rgba(217, 70, 239, 0.25)' stroke-width='1.5'/>
    
    <rect width='1440' height='52' rx='16' fill='#1c103d'/>
    <rect y='36' width='1440' height='16' fill='#1c103d'/>
    <line x1='0' y1='52' x2='1440' y2='52' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    
    <circle cx='35' cy='26' r='6' fill='#ef4444'/>
    <circle cx='58' cy='26' r='6' fill='#f59e0b'/>
    <circle cx='81' cy='26' r='6' fill='#10b981'/>
    
    <text x='120' y='31' fill='#f0abfc' font-family='monospace' font-size='13' font-weight='600'>UI/UX DESIGN SYSTEM STUDIO // FIGMA DESIGN TOKENS &amp; DARK GLASSMORPHISM</text>
    <rect x='1230' y='14' width='180' height='24' rx='6' fill='rgba(217, 70, 239, 0.15)' stroke='#d946ef' stroke-width='1'/>
    <text x='1250' y='30' fill='#f0abfc' font-family='monospace' font-size='11' font-weight='700'>● WCAG AAA COMPLIANT</text>

    <!-- Top Design Token Badges -->
    <g transform='translate(30, 75)'>
      <rect width='325' height='120' rx='10' fill='#090514' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#94a3b8' font-family='monospace' font-size='12'>ACCESSIBILITY CONTRAST</text>
      <text x='25' y='75' fill='#f0abfc' font-family='monospace' font-size='32' font-weight='700'>12.8 : 1</text>
      <text x='25' y='100' fill='#10b981' font-family='monospace' font-size='11'>Exceeds WCAG AAA Guidelines</text>

      <rect x='350' width='325' height='120' rx='10' fill='#090514' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='375' y='35' fill='#94a3b8' font-family='monospace' font-size='12'>MICRO-INTERACTION FPS</text>
      <text x='375' y='75' fill='#38bdf8' font-family='monospace' font-size='32' font-weight='700'>120 FPS</text>
      <text x='375' y='100' fill='#38bdf8' font-family='monospace' font-size='11'>Hardware Accelerated Springs</text>

      <rect x='700' width='325' height='120' rx='10' fill='#090514' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='725' y='35' fill='#94a3b8' font-family='monospace' font-size='12'>DESIGN SYSTEM TOKENS</text>
      <text x='725' y='75' fill='#a855f7' font-family='monospace' font-size='32' font-weight='700'>480 TOKENS</text>
      <text x='725' y='100' fill='#a855f7' font-family='monospace' font-size='11'>Figma Variables to Tailwind Synced</text>

      <rect x='1050' width='330' height='120' rx='10' fill='#090514' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='1075' y='35' fill='#94a3b8' font-family='monospace' font-size='12'>USER RETENTION UPLIFT</text>
      <text x='1075' y='75' fill='#34d399' font-family='monospace' font-size='32' font-weight='700'>+41 %</text>
      <text x='1075' y='100' fill='#34d399' font-family='monospace' font-size='11'>Post-Modernization Analytics</text>
    </g>

    <!-- Component Showcase Grid -->
    <g transform='translate(30, 220)'>
      <rect width='1380' height='545' rx='12' fill='#090514' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='35' y='40' fill='#94a3b8' font-family='monospace' font-size='13' font-weight='600'>DARK GLASSMORPHIC COMPONENT SYSTEM CANVAS</text>
      
      <g transform='translate(50, 70)'>
        <!-- Glass Card 1 -->
        <rect width='380' height='260' rx='16' fill='#150d29' stroke='rgba(217, 70, 239, 0.4)' stroke-width='1.5'/>
        <text x='25' y='35' fill='#f0abfc' font-family='system-ui, sans-serif' font-size='16' font-weight='700'>Interactive Action Card</text>
        <text x='25' y='65' fill='#94a3b8' font-family='system-ui, sans-serif' font-size='12'>Subtle frosted backdrop blur with dynamic hover elevation.</text>
        
        <rect x='25' y='95' width='330' height='48' rx='8' fill='#d946ef' fill-opacity='0.2' stroke='#d946ef' stroke-width='1'/>
        <text x='45' y='125' fill='#f0abfc' font-family='monospace' font-size='12' font-weight='700'>PRIMARY BUTTON [HOVER]</text>

        <rect x='25' y='160' width='330' height='48' rx='8' fill='#0d0819' stroke='rgba(255,255,255,0.1)' stroke-width='1'/>
        <text x='45' y='190' fill='#ffffff' font-family='monospace' font-size='12'>SECONDARY OUTLINE</text>
        <text x='25' y='235' fill='#10b981' font-family='monospace' font-size='11'>✓ Auto-generated Tailwind CSS Tokens</text>

        <!-- Glass Card 2: Form Controls -->
        <g transform='translate(420, 0)'>
          <rect width='380' height='260' rx='16' fill='#150d29' stroke='rgba(56, 189, 248, 0.3)' stroke-width='1.5'/>
          <text x='25' y='35' fill='#38bdf8' font-family='system-ui, sans-serif' font-size='16' font-weight='700'>Form Input Telemetry</text>
          <text x='25' y='65' fill='#94a3b8' font-family='system-ui, sans-serif' font-size='12'>Accessible states: focus-visible ring 2px cyan.</text>

          <rect x='25' y='95' width='330' height='48' rx='8' fill='#090514' stroke='#38bdf8' stroke-width='1.5'/>
          <text x='45' y='125' fill='#ffffff' font-family='monospace' font-size='12'>sales@cloudconsultancy.in|</text>

          <rect x='25' y='160' width='330' height='48' rx='8' fill='#090514' stroke='rgba(255,255,255,0.1)' stroke-width='1'/>
          <text x='45' y='190' fill='#64748b' font-family='monospace' font-size='12'>Enter organization password</text>
          <text x='25' y='235' fill='#38bdf8' font-family='monospace' font-size='11'>✓ ARIA-invalid and error tooltips ready</text>
        </g>

        <!-- Glass Card 3: Live Toggle & Switch -->
        <g transform='translate(840, 0)'>
          <rect width='440' height='260' rx='16' fill='#150d29' stroke='rgba(16, 185, 129, 0.3)' stroke-width='1.5'/>
          <text x='25' y='35' fill='#34d399' font-family='system-ui, sans-serif' font-size='16' font-weight='700'>Dynamic Theme Mode</text>
          <text x='25' y='65' fill='#94a3b8' font-family='system-ui, sans-serif' font-size='12'>Zero-Flash dark mode SSR state resolution.</text>

          <rect x='25' y='95' width='60' height='32' rx='16' fill='#10b981'/>
          <circle cx='69' cy='111' r='12' fill='#ffffff'/>
          <text x='105' y='116' fill='#ffffff' font-family='monospace' font-size='12'>Cyber Dark Mode Active</text>

          <rect x='25' y='160' width='390' height='48' rx='8' fill='#090514' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
          <text x='45' y='190' fill='#a855f7' font-family='monospace' font-size='11'>Tokens: var(--color-brand-cyan: #06b6d4)</text>
          <text x='25' y='235' fill='#34d399' font-family='monospace' font-size='11'>✓ Synchronized across all 42 web routes</text>
        </g>
      </g>

      <!-- Bottom Token Pipeline Strip -->
      <g transform='translate(50, 360)'>
        <rect width='1280' height='140' rx='8' fill='#06030e' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
        <text x='25' y='35' fill='#f0abfc' font-family='monospace' font-size='12'>[FIGMA_TOKEN_SYNC] Extracted 480 tokens from Token Studio for Figma.</text>
        <text x='25' y='65' fill='#e2e8f0' font-family='monospace' font-size='12'>Compiled to src/styles/theme.css using CSS variables and modern OKLCH color space.</text>
        <text x='25' y='95' fill='#10b981' font-family='monospace' font-size='12'>Zero visual regressions across Mobile, Tablet, and Ultra-Wide Desktop breakpoints.</text>
      </g>
    </g>
  </g>
</svg>`;
}

// 7. Shopify & BigCommerce Headless
function getServiceShopifyBigCommerceSvg() {
  return `
<svg width='1600' height='900' viewBox='0 0 1600 900' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bg_ecom' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#030d0a'/>
      <stop offset='50%' stop-color='#071a14'/>
      <stop offset='100%' stop-color='#010705'/>
    </linearGradient>
    <radialGradient id='emeraldGlow' cx='85%' cy='20%' r='50%'>
      <stop offset='0%' stop-color='rgba(16, 185, 129, 0.25)'/>
      <stop offset='100%' stop-color='rgba(16, 185, 129, 0)'/>
    </radialGradient>
    <radialGradient id='roseGlow' cx='15%' cy='80%' r='50%'>
      <stop offset='0%' stop-color='rgba(244, 63, 94, 0.2)'/>
      <stop offset='100%' stop-color='rgba(244, 63, 94, 0)'/>
    </radialGradient>
  </defs>

  <rect width='1600' height='900' fill='url(#bg_ecom)'/>
  <rect width='1600' height='900' fill='url(#emeraldGlow)'/>
  <rect width='1600' height='900' fill='url(#roseGlow)'/>
  ${renderGrid(1600, 900, 50, 0.03)}

  <g transform='translate(80, 50)'>
    <rect width='1440' height='800' rx='16' fill='#061712' stroke='rgba(16, 185, 129, 0.25)' stroke-width='1.5'/>
    
    <rect width='1440' height='52' rx='16' fill='#0c261e'/>
    <rect y='36' width='1440' height='16' fill='#0c261e'/>
    <line x1='0' y1='52' x2='1440' y2='52' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    
    <circle cx='35' cy='26' r='6' fill='#ef4444'/>
    <circle cx='58' cy='26' r='6' fill='#f59e0b'/>
    <circle cx='81' cy='26' r='6' fill='#10b981'/>
    
    <text x='120' y='31' fill='#6ee7b7' font-family='monospace' font-size='13' font-weight='600'>HEADLESS E-COMMERCE // SHOPIFY HYDROGEN &amp; BIGCOMMERCE CATALYST ARCHITECTURE</text>
    <rect x='1230' y='14' width='180' height='24' rx='6' fill='rgba(16, 185, 129, 0.15)' stroke='#10b981' stroke-width='1'/>
    <text x='1250' y='30' fill='#34d399' font-family='monospace' font-size='11' font-weight='700'>● SUB-50ms CHECKOUT</text>

    <!-- Top KPIs -->
    <g transform='translate(30, 75)'>
      <rect width='325' height='120' rx='10' fill='#030d09' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12'>CART CONVERSION RATE</text>
      <text x='25' y='75' fill='#34d399' font-family='monospace' font-size='32' font-weight='700'>5.24 %</text>
      <text x='25' y='100' fill='#10b981' font-family='monospace' font-size='11'>▲ +52% vs Legacy Monolith</text>

      <rect x='350' width='325' height='120' rx='10' fill='#030d09' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='375' y='35' fill='#64748b' font-family='monospace' font-size='12'>CHECKOUT LATENCY</text>
      <text x='375' y='75' fill='#38bdf8' font-family='monospace' font-size='32' font-weight='700'>38 ms</text>
      <text x='375' y='100' fill='#38bdf8' font-family='monospace' font-size='11'>Sub-request Edge Caching</text>

      <rect x='700' width='325' height='120' rx='10' fill='#030d09' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='725' y='35' fill='#64748b' font-family='monospace' font-size='12'>GLOBAL CDN EDGE POPS</text>
      <text x='725' y='75' fill='#a855f7' font-family='monospace' font-size='32' font-weight='700'>300+ PoPs</text>
      <text x='725' y='100' fill='#a855f7' font-family='monospace' font-size='11'>Worldwide Multi-Region Cache</text>

      <rect x='1050' width='330' height='120' rx='10' fill='#030d09' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='1075' y='35' fill='#64748b' font-family='monospace' font-size='12'>MULTI-CURRENCY SUPPORT</text>
      <text x='1075' y='75' fill='#f59e0b' font-family='monospace' font-size='32' font-weight='700'>135 Currencies</text>
      <text x='1075' y='100' fill='#f59e0b' font-family='monospace' font-size='11'>Automated GeoIP Tax &amp; Duty</text>
    </g>

    <!-- Headless Pipeline Canvas -->
    <g transform='translate(30, 220)'>
      <rect width='1380' height='545' rx='12' fill='#030d09' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='35' y='40' fill='#64748b' font-family='monospace' font-size='13' font-weight='600'>HEADLESS MULTI-STOREFRONT UNIFIED ARCHITECTURE</text>
      
      <g transform='translate(50, 70)'>
        <!-- Box 1: Storefront API -->
        <rect width='380' height='260' rx='16' fill='#071a14' stroke='#10b981' stroke-width='1.5'/>
        <text x='25' y='35' fill='#34d399' font-family='system-ui, sans-serif' font-size='16' font-weight='700'>Shopify / BigCommerce Backends</text>
        <text x='25' y='65' fill='#94a3b8' font-family='system-ui, sans-serif' font-size='12'>Inventory, order fulfillment, customer accounts.</text>

        <rect x='25' y='95' width='330' height='40' rx='6' fill='#04100c'/>
        <text x='40' y='120' fill='#ffffff' font-family='monospace' font-size='11'>GraphQL Storefront API v2026</text>

        <rect x='25' y='145' width='330' height='40' rx='6' fill='#04100c'/>
        <text x='40' y='170' fill='#ffffff' font-family='monospace' font-size='11'>Sanity / Contentful CMS Rich Merchandising</text>
        <text x='25' y='225' fill='#10b981' font-family='monospace' font-size='11'>✓ Decoupled backend zero downtime</text>

        <!-- Arrow -->
        <line x1='380' y1='130' x2='460' y2='130' stroke='#10b981' stroke-width='3' stroke-dasharray='4'/>

        <!-- Box 2: Edge Next.js / Hydrogen Storefront -->
        <g transform='translate(460, 0)'>
          <rect width='400' height='260' rx='16' fill='#071a14' stroke='#38bdf8' stroke-width='1.5'/>
          <text x='25' y='35' fill='#38bdf8' font-family='system-ui, sans-serif' font-size='16' font-weight='700'>Hydrogen React Server Components</text>
          <text x='25' y='65' fill='#94a3b8' font-family='system-ui, sans-serif' font-size='12'>Edge streaming and sub-second instant navigation.</text>

          <rect x='25' y='95' width='350' height='40' rx='6' fill='#04100c'/>
          <text x='40' y='120' fill='#ffffff' font-family='monospace' font-size='11'>Streaming SSR with Suspense Fallbacks</text>

          <rect x='25' y='145' width='350' height='40' rx='6' fill='#04100c'/>
          <text x='40' y='170' fill='#ffffff' font-family='monospace' font-size='11'>Client-Side Instant Cart Mutation (0-Lag)</text>
          <text x='25' y='225' fill='#38bdf8' font-family='monospace' font-size='11'>✓ 100/100 Core Web Vitals on mobile</text>
        </g>

        <!-- Arrow -->
        <line x1='860' y1='130' x2='940' y2='130' stroke='#38bdf8' stroke-width='3' stroke-dasharray='4'/>

        <!-- Box 3: Checkout & Payments -->
        <g transform='translate(940, 0)'>
          <rect width='340' height='260' rx='16' fill='#071a14' stroke='#f59e0b' stroke-width='1.5'/>
          <text x='25' y='35' fill='#fbbf24' font-family='system-ui, sans-serif' font-size='16' font-weight='700'>One-Click Checkout</text>
          <text x='25' y='65' fill='#94a3b8' font-family='system-ui, sans-serif' font-size='12'>Shop Pay, Apple Pay &amp; Google Pay.</text>

          <rect x='25' y='95' width='290' height='40' rx='6' fill='#04100c'/>
          <text x='40' y='120' fill='#ffffff' font-family='monospace' font-size='11'>Shop Pay Accelerated Flow</text>

          <rect x='25' y='145' width='290' height='40' rx='6' fill='#04100c'/>
          <text x='40' y='170' fill='#ffffff' font-family='monospace' font-size='11'>Stripe Elements Tokenized Vault</text>
          <text x='25' y='225' fill='#fbbf24' font-family='monospace' font-size='11'>✓ PCI-DSS Level 1 Compliant</text>
        </g>
      </g>

      <!-- Bottom Log -->
      <g transform='translate(50, 360)'>
        <rect width='1280' height='140' rx='8' fill='#020705' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
        <text x='25' y='35' fill='#34d399' font-family='monospace' font-size='12'>[HEADLESS_CHECKOUT] Cart ID: cart_98412_f0 processed in 38ms.</text>
        <text x='25' y='65' fill='#94a3b8' font-family='monospace' font-size='12'>Order created in Shopify Admin API. Webhook broadcasted to ERP &amp; 3PL warehouse.</text>
        <text x='25' y='95' fill='#38bdf8' font-family='monospace' font-size='12'>Customer confirmed via SMS &amp; WhatsApp instant order tracking link.</text>
      </g>
    </g>
  </g>
</svg>`;
}

// 8. Plugins & Extensions
function getServicePluginsExtensionsSvg() {
  return `
<svg width='1600' height='900' viewBox='0 0 1600 900' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bg_plug' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#050814'/>
      <stop offset='50%' stop-color='#0c1630'/>
      <stop offset='100%' stop-color='#03050c'/>
    </linearGradient>
    <radialGradient id='amberGlow' cx='85%' cy='20%' r='50%'>
      <stop offset='0%' stop-color='rgba(245, 158, 11, 0.25)'/>
      <stop offset='100%' stop-color='rgba(245, 158, 11, 0)'/>
    </radialGradient>
    <radialGradient id='cyanGlow' cx='15%' cy='80%' r='50%'>
      <stop offset='0%' stop-color='rgba(6, 182, 212, 0.2)'/>
      <stop offset='100%' stop-color='rgba(6, 182, 212, 0)'/>
    </radialGradient>
  </defs>

  <rect width='1600' height='900' fill='url(#bg_plug)'/>
  <rect width='1600' height='900' fill='url(#amberGlow)'/>
  <rect width='1600' height='900' fill='url(#cyanGlow)'/>
  ${renderGrid(1600, 900, 50, 0.03)}

  <g transform='translate(80, 50)'>
    <rect width='1440' height='800' rx='16' fill='#081226' stroke='rgba(245, 158, 11, 0.25)' stroke-width='1.5'/>
    
    <rect width='1440' height='52' rx='16' fill='#101e3d'/>
    <rect y='36' width='1440' height='16' fill='#101e3d'/>
    <line x1='0' y1='52' x2='1440' y2='52' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    
    <circle cx='35' cy='26' r='6' fill='#ef4444'/>
    <circle cx='58' cy='26' r='6' fill='#f59e0b'/>
    <circle cx='81' cy='26' r='6' fill='#10b981'/>
    
    <text x='120' y='31' fill='#fcd34d' font-family='monospace' font-size='13' font-weight='600'>ENTERPRISE PLUGINS // BROWSER EXTENSIONS &amp; API CONNECTOR SUITE</text>
    <rect x='1230' y='14' width='180' height='24' rx='6' fill='rgba(245, 158, 11, 0.15)' stroke='#f59e0b' stroke-width='1'/>
    <text x='1250' y='30' fill='#fcd34d' font-family='monospace' font-size='11' font-weight='700'>● MANIFEST V3 ACTIVE</text>

    <!-- Top KPIs -->
    <g transform='translate(30, 75)'>
      <rect width='325' height='120' rx='10' fill='#050c1c' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12'>CROSS-BROWSER RUNTIME</text>
      <text x='25' y='75' fill='#fcd34d' font-family='monospace' font-size='32' font-weight='700'>100% UNIFIED</text>
      <text x='25' y='100' fill='#10b981' font-family='monospace' font-size='11'>Chrome, Firefox, Safari, Edge</text>

      <rect x='350' width='325' height='120' rx='10' fill='#050c1c' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='375' y='35' fill='#64748b' font-family='monospace' font-size='12'>BACKGROUND MEMORY</text>
      <text x='375' y='75' fill='#38bdf8' font-family='monospace' font-size='32' font-weight='700'>&lt; 18 MB</text>
      <text x='375' y='100' fill='#38bdf8' font-family='monospace' font-size='11'>Auto-Sleeping Service Worker</text>

      <rect x='700' width='325' height='120' rx='10' fill='#050c1c' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='725' y='35' fill='#64748b' font-family='monospace' font-size='12'>ENTERPRISE WEBHOOK RATE</text>
      <text x='725' y='75' fill='#10b981' font-family='monospace' font-size='32' font-weight='700'>50k msg/sec</text>
      <text x='725' y='100' fill='#10b981' font-family='monospace' font-size='11'>Bi-directional HMAC Signed</text>

      <rect x='1050' width='330' height='120' rx='10' fill='#050c1c' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='1075' y='35' fill='#64748b' font-family='monospace' font-size='12'>ENTERPRISE SECURITY</text>
      <text x='1075' y='75' fill='#34d399' font-family='monospace' font-size='32' font-weight='700'>ZERO CSP LEAK</text>
      <text x='1075' y='100' fill='#34d399' font-family='monospace' font-size='11'>Isolated World Scripts</text>
    </g>

    <!-- Connector Workspace & Architecture -->
    <g transform='translate(30, 220)'>
      <rect width='890' height='545' rx='12' fill='#050c1c' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>// extension/background/serviceWorker.ts — Chrome MV3 Core</text>
      
      <g transform='translate(25, 60)'>
        <text x='0' y='25' fill='#f59e0b' font-family='monospace' font-size='12'>chrome.runtime.onMessage.addListener((message, sender, sendResponse) =&gt; {</text>
        <text x='25' y='55' fill='#e2e8f0' font-family='monospace' font-size='12'>  if (message.type === 'SYNC_ENTERPRISE_RECORD') {</text>
        <text x='50' y='85' fill='#38bdf8' font-family='monospace' font-size='12'>    handleSecureCrmSync(message.payload)</text>
        <text x='75' y='115' fill='#10b981' font-family='monospace' font-size='12'>      .then(res =&gt; sendResponse({ status: 'OK', data: res }))</text>
        <text x='75' y='145' fill='#ef4444' font-family='monospace' font-size='12'>      .catch(err =&gt; sendResponse({ status: 'ERROR', error: err.message }));</text>
        <text x='50' y='175' fill='#e2e8f0' font-family='monospace' font-size='12'>    return true; // async reply</text>
        <text x='25' y='205' fill='#e2e8f0' font-family='monospace' font-size='12'>  }</text>
        <text x='0' y='235' fill='#f59e0b' font-family='monospace' font-size='12'>});</text>

        <rect y='270' width='840' height='160' rx='8' fill='#0a1630' stroke='rgba(245, 158, 11, 0.2)' stroke-width='1'/>
        <text x='20' y='305' fill='#fcd34d' font-family='monospace' font-size='12' font-weight='700'>declarativeNetRequest INTERCEPTION ENGINE</text>
        <text x='20' y='335' fill='#ffffff' font-family='monospace' font-size='11'>Modifies headers and prevents tracking without user-facing execution delays.</text>
        <text x='20' y='365' fill='#38bdf8' font-family='monospace' font-size='11'>Active rules: 2,400 enterprise compliance filters loaded into browser memory.</text>
        <text x='20' y='395' fill='#10b981' font-family='monospace' font-size='11'>✓ Zero third-party telemetry leakage</text>
      </g>

      <!-- Right Panel -->
      <rect x='915' width='465' height='545' rx='12' fill='#050c1c' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='940' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>API CONNECTOR ECOSYSTEM</text>

      <g transform='translate(940, 65)'>
        <text x='0' y='20' fill='#fcd34d' font-family='monospace' font-size='11'>• Salesforce REST / Bulk API 2.0</text>
        <text x='0' y='45' fill='#38bdf8' font-family='monospace' font-size='11'>• Stripe Webhook Event Ingestion</text>
        <text x='0' y='70' fill='#10b981' font-family='monospace' font-size='11'>• Slack Bolt App &amp; Workflow Steps</text>
        <text x='0' y='95' fill='#a855f7' font-family='monospace' font-size='11'>• HubSpot Bi-Directional CRM Sync</text>
        <text x='0' y='120' fill='#34d399' font-family='monospace' font-size='11'>• Shopify Admin GraphQL Webhooks</text>

        <rect y='150' width='415' height='300' rx='8' fill='#0f1f42' stroke='rgba(245, 158, 11, 0.2)' stroke-width='1'/>
        <text x='15' y='185' fill='#fcd34d' font-family='monospace' font-size='12' font-weight='700'>ENTERPRISE DEPLOYMENT STATUS</text>
        <text x='15' y='215' fill='#ffffff' font-family='monospace' font-size='11'>Chrome Web Store: Published (Auto-Update)</text>
        <text x='15' y='245' fill='#ffffff' font-family='monospace' font-size='11'>Firefox Add-ons: Signed via Mozilla API</text>
        <text x='15' y='275' fill='#ffffff' font-family='monospace' font-size='11'>Safari Web Extension: macOS &amp; iOS Universal</text>
        <text x='15' y='315' fill='#10b981' font-family='monospace' font-size='11'>✓ 100% Manifest V3 Security Compliant</text>
        <text x='15' y='340' fill='#10b981' font-family='monospace' font-size='11'>✓ End-to-end telemetry encrypted</text>
        <text x='15' y='365' fill='#38bdf8' font-family='monospace' font-size='11'>✓ Automated GitHub Actions Release Pipeline</text>
      </g>
    </g>
  </g>
</svg>`;
}

async function run() {
  const serviceItems = [
    { name: 'service_web_dev.jpg', svg: getServiceWebDevSvg() },
    { name: 'service_seo.jpg', svg: getServiceSeoSvg() },
    { name: 'service_android_app.jpg', svg: getServiceAndroidAppSvg() },
    { name: 'service_ios_app.jpg', svg: getServiceIosAppSvg() },
    { name: 'service_cross_platform.jpg', svg: getServiceCrossPlatformSvg() },
    { name: 'service_ui_ux.jpg', svg: getServiceUiUxSvg() },
    { name: 'service_shopify_bigcommerce.jpg', svg: getServiceShopifyBigCommerceSvg() },
    { name: 'service_plugins_extensions.jpg', svg: getServicePluginsExtensionsSvg() },
  ];

  for (const item of serviceItems) {
    const dest = path.join(OUTPUT_DIR, item.name);
    await sharp(Buffer.from(item.svg))
      .jpeg({ quality: 92 })
      .toFile(dest);
    const sz = fs.statSync(dest).size;
    console.log(`✓ Rendered ${item.name} (${sz} bytes)`);
  }
}

run().catch(err => {
  console.error('Error running service generators:', err);
  process.exit(1);
});
