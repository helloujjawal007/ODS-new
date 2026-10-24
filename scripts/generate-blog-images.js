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

// 1. Next.js + Headless WordPress
function getNextjsWordpressSvg() {
  return `
<svg width='1600' height='900' viewBox='0 0 1600 900' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bg_wp' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#040817'/>
      <stop offset='50%' stop-color='#0a122e'/>
      <stop offset='100%' stop-color='#02040b'/>
    </linearGradient>
    <radialGradient id='blueGlow' cx='85%' cy='20%' r='50%'>
      <stop offset='0%' stop-color='rgba(59, 130, 246, 0.25)'/>
      <stop offset='100%' stop-color='rgba(59, 130, 246, 0)'/>
    </radialGradient>
    <radialGradient id='cyanGlow' cx='15%' cy='80%' r='50%'>
      <stop offset='0%' stop-color='rgba(6, 182, 212, 0.2)'/>
      <stop offset='100%' stop-color='rgba(6, 182, 212, 0)'/>
    </radialGradient>
  </defs>

  <rect width='1600' height='900' fill='url(#bg_wp)'/>
  <rect width='1600' height='900' fill='url(#blueGlow)'/>
  <rect width='1600' height='900' fill='url(#cyanGlow)'/>
  ${renderGrid(1600, 900, 50, 0.03)}

  <g transform='translate(80, 50)'>
    <rect width='1440' height='800' rx='16' fill='#081129' stroke='rgba(56, 189, 248, 0.25)' stroke-width='1.5'/>
    
    <rect width='1440' height='52' rx='16' fill='#0d1b3d'/>
    <rect y='36' width='1440' height='16' fill='#0d1b3d'/>
    <line x1='0' y1='52' x2='1440' y2='52' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    
    <circle cx='35' cy='26' r='6' fill='#ef4444'/>
    <circle cx='58' cy='26' r='6' fill='#f59e0b'/>
    <circle cx='81' cy='26' r='6' fill='#10b981'/>
    
    <text x='120' y='31' fill='#93c5fd' font-family='monospace' font-size='13' font-weight='600'>ARCHITECTURE ARCHIVE // HEADLESS NEXT.JS APP ROUTER + WORDPRESS GRAPHQL</text>
    <rect x='1230' y='14' width='180' height='24' rx='6' fill='rgba(16, 185, 129, 0.15)' stroke='#10b981' stroke-width='1'/>
    <text x='1250' y='30' fill='#10b981' font-family='monospace' font-size='11' font-weight='700'>● ISR ON-DEMAND READY</text>

    <!-- Top Architecture Flow Diagram -->
    <g transform='translate(50, 90)'>
      <!-- Box 1: WordPress CMS -->
      <rect width='360' height='260' rx='12' fill='#060c1f' stroke='#38bdf8' stroke-width='1.5'/>
      <text x='25' y='40' fill='#38bdf8' font-family='monospace' font-size='13' font-weight='700'>WORDPRESS HEADLESS BACKEND</text>
      <text x='25' y='70' fill='#94a3b8' font-family='monospace' font-size='11'>Content Editorial Layer</text>
      <line x1='25' y1='90' x2='335' y2='90' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
      
      <text x='25' y='125' fill='#e2e8f0' font-family='monospace' font-size='12'>• WPGraphQL API Engine</text>
      <text x='25' y='155' fill='#e2e8f0' font-family='monospace' font-size='12'>• Advanced Custom Fields (ACF Pro)</text>
      <text x='25' y='185' fill='#e2e8f0' font-family='monospace' font-size='12'>• Instant Webhook Dispatch on Publish</text>
      <text x='25' y='225' fill='#10b981' font-family='monospace' font-size='11'>✓ Decoupled MySQL isolation</text>

      <!-- Arrow 1 -->
      <g transform='translate(380, 110)'>
        <line x1='0' y1='20' x2='100' y2='20' stroke='#38bdf8' stroke-width='3' stroke-dasharray='5'/>
        <text x='50' y='10' text-anchor='middle' fill='#38bdf8' font-family='monospace' font-size='10'>GraphQL Query</text>
        <text x='50' y='42' text-anchor='middle' fill='#94a3b8' font-family='monospace' font-size='9'>JSON Payload</text>
      </g>

      <!-- Box 2: Next.js App Router Edge -->
      <rect x='500' width='380' height='260' rx='12' fill='#060c1f' stroke='#a855f7' stroke-width='1.5'/>
      <text x='525' y='40' fill='#c084fc' font-family='monospace' font-size='13' font-weight='700'>NEXT.JS 16 APP ROUTER</text>
      <text x='525' y='70' fill='#94a3b8' font-family='monospace' font-size='11'>React Server Components (RSC)</text>
      <line x1='525' y1='90' x2='855' y2='90' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
      
      <text x='525' y='125' fill='#e2e8f0' font-family='monospace' font-size='12'>• generateStaticParams() caching</text>
      <text x='525' y='155' fill='#e2e8f0' font-family='monospace' font-size='12'>• revalidateTag('posts') on webhook</text>
      <text x='525' y='185' fill='#e2e8f0' font-family='monospace' font-size='12'>• Zero client-side bundle for markup</text>
      <text x='525' y='225' fill='#10b981' font-family='monospace' font-size='11'>✓ Incremental Static Regeneration</text>

      <!-- Arrow 2 -->
      <g transform='translate(900, 110)'>
        <line x1='0' y1='20' x2='100' y2='20' stroke='#10b981' stroke-width='3' stroke-dasharray='5'/>
        <text x='50' y='10' text-anchor='middle' fill='#10b981' font-family='monospace' font-size='10'>Edge Caching</text>
        <text x='50' y='42' text-anchor='middle' fill='#94a3b8' font-family='monospace' font-size='9'>HTML / RSC</text>
      </g>

      <!-- Box 3: Global Edge CDN -->
      <rect x='1020' width='320' height='260' rx='12' fill='#060c1f' stroke='#10b981' stroke-width='1.5'/>
      <text x='1045' y='40' fill='#34d399' font-family='monospace' font-size='13' font-weight='700'>GLOBAL EDGE NETWORK</text>
      <text x='1045' y='70' fill='#94a3b8' font-family='monospace' font-size='11'>Worldwide 300+ PoPs</text>
      <line x1='1045' y1='90' x2='1315' y2='90' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
      
      <text x='1045' y='125' fill='#e2e8f0' font-family='monospace' font-size='12'>• TTFB: Sub-35ms Global</text>
      <text x='1045' y='155' fill='#e2e8f0' font-family='monospace' font-size='12'>• Automated Brotli / AVIF</text>
      <text x='1045' y='185' fill='#e2e8f0' font-family='monospace' font-size='12'>• DDoS &amp; Bot Defense Shield</text>
      <text x='1045' y='225' fill='#10b981' font-family='monospace' font-size='11'>✓ 100/100 Lighthouse Performance</text>
    </g>

    <!-- Bottom Code & Diagnostics Split -->
    <g transform='translate(50, 380)'>
      <!-- Code Snippet -->
      <rect width='760' height='370' rx='12' fill='#040918' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='30' y='40' fill='#64748b' font-family='monospace' font-size='12'>// src/app/blog/[slug]/page.tsx</text>
      
      <text x='30' y='80' fill='#a855f7' font-family='monospace' font-size='12'>export async function</text>
      <text x='230' y='80' fill='#38bdf8' font-family='monospace' font-size='12'>generateStaticParams() {</text>
      <text x='50' y='110' fill='#94a3b8' font-family='monospace' font-size='12'>const posts = await fetchGraphQL(ALL_POSTS_QUERY, { next: { tags: ['posts'] } });</text>
      <text x='50' y='140' fill='#94a3b8' font-family='monospace' font-size='12'>return posts.map((post) =&gt; ({ slug: post.slug }));</text>
      <text x='30' y='170' fill='#38bdf8' font-family='monospace' font-size='12'>}</text>

      <text x='30' y='220' fill='#a855f7' font-family='monospace' font-size='12'>export default async function</text>
      <text x='290' y='220' fill='#38bdf8' font-family='monospace' font-size='12'>BlogPost({ params }: Props) {</text>
      <text x='50' y='250' fill='#94a3b8' font-family='monospace' font-size='12'>const { slug } = await params;</text>
      <text x='50' y='280' fill='#94a3b8' font-family='monospace' font-size='12'>const data = await getPostBySlug(slug);</text>
      <text x='50' y='310' fill='#10b981' font-family='monospace' font-size='12'>return &lt;article className="prose dark:prose-invert"&gt;{data.content}&lt;/article&gt;;</text>
      <text x='30' y='340' fill='#38bdf8' font-family='monospace' font-size='12'>}</text>

      <!-- Right Benchmark Box -->
      <rect x='790' width='550' height='370' rx='12' fill='#040918' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='820' y='40' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>PERFORMANCE BENCHMARK COMPARISON</text>
      
      <g transform='translate(820, 70)'>
        <text x='0' y='25' fill='#94a3b8' font-family='monospace' font-size='12'>Traditional Monolith WP TTFB:</text>
        <text x='350' y='25' fill='#ef4444' font-family='monospace' font-size='14' font-weight='700'>850 ms</text>
        <rect y='35' width='490' height='12' rx='6' fill='#1e293b'/>
        <rect y='35' width='440' height='12' rx='6' fill='#ef4444' opacity='0.7'/>

        <text x='0' y='85' fill='#94a3b8' font-family='monospace' font-size='12'>Headless Next.js App Router TTFB:</text>
        <text x='350' y='85' fill='#10b981' font-family='monospace' font-size='14' font-weight='700'>28 ms</text>
        <rect y='95' width='490' height='12' rx='6' fill='#1e293b'/>
        <rect y='95' width='45' height='12' rx='6' fill='#10b981'/>

        <line x1='0' y1='140' x2='490' y2='140' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>

        <text x='0' y='180' fill='#38bdf8' font-family='monospace' font-size='13' font-weight='700'>SPEED ADVANTAGE: +30x FASTER RENDERING</text>
        <text x='0' y='210' fill='#e2e8f0' font-family='system-ui, sans-serif' font-size='12'>By moving database queries to build time and invalidating on webhooks, visitors never hit PHP/MySQL directly.</text>
        <text x='0' y='245' fill='#10b981' font-family='monospace' font-size='11'>✓ Server load reduced by 94.2%</text>
        <text x='0' y='270' fill='#10b981' font-family='monospace' font-size='11'>✓ Zero WordPress vulnerability exposure to public web</text>
      </g>
    </g>
  </g>
</svg>`;
}

// 2. Technical SEO for SPAs
function getTechnicalSeoSvg() {
  return `
<svg width='1600' height='900' viewBox='0 0 1600 900' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bg_seo' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#030d12'/>
      <stop offset='50%' stop-color='#081e28'/>
      <stop offset='100%' stop-color='#02070a'/>
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

  <rect width='1600' height='900' fill='url(#bg_seo)'/>
  <rect width='1600' height='900' fill='url(#emeraldGlow)'/>
  <rect width='1600' height='900' fill='url(#cyanGlow)'/>
  ${renderGrid(1600, 900, 50, 0.03)}

  <g transform='translate(80, 50)'>
    <rect width='1440' height='800' rx='16' fill='#08161e' stroke='rgba(16, 185, 129, 0.25)' stroke-width='1.5'/>
    
    <rect width='1440' height='52' rx='16' fill='#0e2533'/>
    <rect y='36' width='1440' height='16' fill='#0e2533'/>
    <line x1='0' y1='52' x2='1440' y2='52' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    
    <circle cx='35' cy='26' r='6' fill='#ef4444'/>
    <circle cx='58' cy='26' r='6' fill='#f59e0b'/>
    <circle cx='81' cy='26' r='6' fill='#10b981'/>
    
    <text x='120' y='31' fill='#6ee7b7' font-family='monospace' font-size='13' font-weight='600'>TECHNICAL SEO ENGINE // NEXT.JS SPA CRAWLABILITY &amp; RICH SCHEMA INSPECTOR</text>
    <rect x='1230' y='14' width='180' height='24' rx='6' fill='rgba(16, 185, 129, 0.15)' stroke='#10b981' stroke-width='1'/>
    <text x='1250' y='30' fill='#10b981' font-family='monospace' font-size='11' font-weight='700'>● 100/100 SEO HEALTH</text>

    <!-- Top Diagnostics Cards -->
    <g transform='translate(30, 75)'>
      <rect width='325' height='120' rx='10' fill='#040c11' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12'>CANONICAL URL STATUS</text>
      <text x='25' y='75' fill='#10b981' font-family='monospace' font-size='28' font-weight='700'>100% VALID</text>
      <text x='25' y='100' fill='#34d399' font-family='monospace' font-size='11'>Zero Trailing Slash Redirects</text>

      <rect x='350' width='325' height='120' rx='10' fill='#040c11' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='375' y='35' fill='#64748b' font-family='monospace' font-size='12'>DYNAMIC JSON-LD SCHEMAS</text>
      <text x='375' y='75' fill='#38bdf8' font-family='monospace' font-size='28' font-weight='700'>5 TYPES INJECTED</text>
      <text x='375' y='100' fill='#38bdf8' font-family='monospace' font-size='11'>Organization, Service, FAQ, Article</text>

      <rect x='700' width='325' height='120' rx='10' fill='#040c11' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='725' y='35' fill='#64748b' font-family='monospace' font-size='12'>GOOGLEBOT RENDER LATENCY</text>
      <text x='725' y='75' fill='#a855f7' font-family='monospace' font-size='28' font-weight='700'>42 ms SSR</text>
      <text x='725' y='100' fill='#a855f7' font-family='monospace' font-size='11'>Pre-Rendered HTML Payload</text>

      <rect x='1050' width='330' height='120' rx='10' fill='#040c11' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='1075' y='35' fill='#64748b' font-family='monospace' font-size='12'>CORE WEB VITALS STATUS</text>
      <text x='1075' y='75' fill='#34d399' font-family='monospace' font-size='28' font-weight='700'>ALL GREEN</text>
      <text x='1075' y='100' fill='#34d399' font-family='monospace' font-size='11'>LCP 0.8s • INP 34ms • CLS 0.00</text>
    </g>

    <!-- Schema Tree Validator & Crawl Visualizer -->
    <g transform='translate(30, 220)'>
      <!-- Left: Schema Tree -->
      <rect width='890' height='545' rx='12' fill='#040c11' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>JSON-LD STRUCTURED DATA HIERARCHY TREE</text>
      
      <g transform='translate(25, 60)'>
        <rect width='840' height='460' rx='8' fill='#02070a' stroke='rgba(255,255,255,0.05)' stroke-width='1'/>
        
        <text x='20' y='35' fill='#a855f7' font-family='monospace' font-size='12'>{</text>
        <text x='40' y='60' fill='#38bdf8' font-family='monospace' font-size='12'>"@context":</text> <text x='150' y='60' fill='#10b981' font-family='monospace' font-size='12'>"https://schema.org",</text>
        <text x='40' y='85' fill='#38bdf8' font-family='monospace' font-size='12'>"@graph": [</text>
        
        <text x='60' y='115' fill='#a855f7' font-family='monospace' font-size='12'>{</text>
        <text x='80' y='140' fill='#38bdf8' font-family='monospace' font-size='12'>"@type":</text> <text x='160' y='140' fill='#10b981' font-family='monospace' font-size='12'>"Organization",</text>
        <text x='80' y='165' fill='#38bdf8' font-family='monospace' font-size='12'>"name":</text> <text x='160' y='165' fill='#10b981' font-family='monospace' font-size='12'>"Cloud Consultancy",</text>
        <text x='80' y='190' fill='#38bdf8' font-family='monospace' font-size='12'>"url":</text> <text x='160' y='190' fill='#10b981' font-family='monospace' font-size='12'>"https://cloudconsultancy.in",</text>
        <text x='80' y='215' fill='#38bdf8' font-family='monospace' font-size='12'>"logo":</text> <text x='160' y='215' fill='#10b981' font-family='monospace' font-size='12'>"https://cloudconsultancy.in/brand/cloud-consultancy-icon.png"</text>
        <text x='60' y='240' fill='#a855f7' font-family='monospace' font-size='12'>},</text>

        <text x='60' y='270' fill='#a855f7' font-family='monospace' font-size='12'>{</text>
        <text x='80' y='295' fill='#38bdf8' font-family='monospace' font-size='12'>"@type":</text> <text x='160' y='295' fill='#10b981' font-family='monospace' font-size='12'>"FAQPage",</text>
        <text x='80' y='320' fill='#38bdf8' font-family='monospace' font-size='12'>"mainEntity":</text> <text x='200' y='320' fill='#94a3b8' font-family='monospace' font-size='12'>[ 5 Structured FAQ Q&amp;A Nodes ]</text>
        <text x='60' y='345' fill='#a855f7' font-family='monospace' font-size='12'>},</text>

        <text x='60' y='375' fill='#a855f7' font-family='monospace' font-size='12'>{</text>
        <text x='80' y='400' fill='#38bdf8' font-family='monospace' font-size='12'>"@type":</text> <text x='160' y='400' fill='#10b981' font-family='monospace' font-size='12'>"BreadcrumbList",</text>
        <text x='80' y='425' fill='#38bdf8' font-family='monospace' font-size='12'>"itemListElement":</text> <text x='240' y='425' fill='#94a3b8' font-family='monospace' font-size='12'>[ Home &gt; Blog &gt; Technical SEO ]</text>
        <text x='60' y='445' fill='#a855f7' font-family='monospace' font-size='12'>}</text>
      </g>

      <!-- Right: Search Bot Crawlability -->
      <rect x='915' width='465' height='545' rx='12' fill='#040c11' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='940' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>SEARCH ENGINE BOT AUDIT FEED</text>

      <g transform='translate(940, 65)'>
        <text x='0' y='20' fill='#10b981' font-family='monospace' font-size='11'>[Googlebot Desktop &amp; Smartphone]</text>
        <text x='0' y='40' fill='#94a3b8' font-family='monospace' font-size='11'>GET /blog/technical-seo-nextjs-spa/ HTTP/2</text>
        <text x='0' y='60' fill='#34d399' font-family='monospace' font-size='11'>Status: 200 OK • Content-Type: text/html</text>
        
        <line x1='0' y1='80' x2='415' y2='80' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
        
        <text x='0' y='110' fill='#38bdf8' font-family='monospace' font-size='11'>[METADATA_EXTRACTOR]</text>
        <text x='0' y='130' fill='#e2e8f0' font-family='system-ui, sans-serif' font-size='11'>Title tag length: 58 chars (Optimal)</text>
        <text x='0' y='150' fill='#e2e8f0' font-family='system-ui, sans-serif' font-size='11'>Meta description: 154 chars (Optimal)</text>
        <text x='0' y='170' fill='#e2e8f0' font-family='system-ui, sans-serif' font-size='11'>OpenGraph Image: 1200x630 JPEG (Verified)</text>

        <rect y='200' width='415' height='270' rx='8' fill='#081e28' stroke='rgba(16, 185, 129, 0.2)' stroke-width='1'/>
        <text x='15' y='235' fill='#34d399' font-family='monospace' font-size='12' font-weight='700'>INDEXING CONFIRMATION</text>
        <text x='15' y='265' fill='#ffffff' font-family='monospace' font-size='12'>Mobile-Friendly: YES (100%)</text>
        <text x='15' y='295' fill='#94a3b8' font-family='monospace' font-size='11'>Cumulative Layout Shift (CLS): 0.000</text>
        <text x='15' y='325' fill='#10b981' font-family='monospace' font-size='11'>✓ Sitemaps auto-updated on build</text>
        <text x='15' y='350' fill='#10b981' font-family='monospace' font-size='11'>✓ Robots.txt properly configured</text>
        <text x='15' y='375' fill='#38bdf8' font-family='monospace' font-size='11'>✓ Zero JavaScript render blocking</text>
      </g>
    </g>
  </g>
</svg>`;
}

// 3. Flutter vs React Native in 2026
function getFlutterReactNativeSvg() {
  return `
<svg width='1600' height='900' viewBox='0 0 1600 900' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bg_cross' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#050818'/>
      <stop offset='50%' stop-color='#0c1336'/>
      <stop offset='100%' stop-color='#030510'/>
    </linearGradient>
    <radialGradient id='cyanGlow' cx='20%' cy='20%' r='50%'>
      <stop offset='0%' stop-color='rgba(6, 182, 212, 0.25)'/>
      <stop offset='100%' stop-color='rgba(6, 182, 212, 0)'/>
    </radialGradient>
    <radialGradient id='blueGlow' cx='80%' cy='80%' r='50%'>
      <stop offset='0%' stop-color='rgba(59, 130, 246, 0.25)'/>
      <stop offset='100%' stop-color='rgba(59, 130, 246, 0)'/>
    </radialGradient>
  </defs>

  <rect width='1600' height='900' fill='url(#bg_cross)'/>
  <rect width='1600' height='900' fill='url(#cyanGlow)'/>
  <rect width='1600' height='900' fill='url(#blueGlow)'/>
  ${renderGrid(1600, 900, 50, 0.03)}

  <g transform='translate(80, 50)'>
    <rect width='1440' height='800' rx='16' fill='#0a1029' stroke='rgba(56, 189, 248, 0.25)' stroke-width='1.5'/>
    
    <rect width='1440' height='52' rx='16' fill='#101a40'/>
    <rect y='36' width='1440' height='16' fill='#101a40'/>
    <line x1='0' y1='52' x2='1440' y2='52' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    
    <circle cx='35' cy='26' r='6' fill='#ef4444'/>
    <circle cx='58' cy='26' r='6' fill='#f59e0b'/>
    <circle cx='81' cy='26' r='6' fill='#10b981'/>
    
    <text x='120' y='31' fill='#7dd3fc' font-family='monospace' font-size='13' font-weight='600'>BENCHMARK LAB // FLUTTER (IMPELLER) vs REACT NATIVE (BRIDGELESS FABRIC) 2026</text>
    <rect x='1230' y='14' width='180' height='24' rx='6' fill='rgba(56, 189, 248, 0.15)' stroke='#38bdf8' stroke-width='1'/>
    <text x='1250' y='30' fill='#38bdf8' font-family='monospace' font-size='11' font-weight='700'>● 120 FPS CONSISTENCY</text>

    <!-- Side-by-side Comparative Panels -->
    <g transform='translate(40, 80)'>
      <!-- Left: Flutter Architecture -->
      <rect width='660' height='680' rx='12' fill='#060c21' stroke='#06b6d4' stroke-width='1.5'/>
      <text x='30' y='45' fill='#38bdf8' font-family='monospace' font-size='16' font-weight='700'>FLUTTER 3.29+ // IMPELLER RENDERING</text>
      <text x='30' y='75' fill='#94a3b8' font-family='monospace' font-size='12'>Direct GPU Tessellation (Vulkan / Metal)</text>
      <line x1='30' y1='95' x2='630' y2='95' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>

      <!-- Metric 1 -->
      <text x='30' y='135' fill='#64748b' font-family='monospace' font-size='11'>FIRST FRAME TIME TO INTERACTIVE</text>
      <text x='30' y='170' fill='#ffffff' font-family='monospace' font-size='26' font-weight='700'>180 ms</text>
      <rect x='30' y='185' width='600' height='10' rx='5' fill='#1e293b'/>
      <rect x='30' y='185' width='520' height='10' rx='5' fill='#06b6d4'/>

      <!-- Metric 2 -->
      <text x='30' y='235' fill='#64748b' font-family='monospace' font-size='11'>FRAME DROPS PER 1,000 SCROLL FRAMES</text>
      <text x='30' y='270' fill='#10b981' font-family='monospace' font-size='26' font-weight='700'>0.02 % (Zero Jank)</text>
      <rect x='30' y='285' width='600' height='10' rx='5' fill='#1e293b'/>
      <rect x='30' y='285' width='580' height='10' rx='5' fill='#10b981'/>

      <!-- Metric 3 -->
      <text x='30' y='335' fill='#64748b' font-family='monospace' font-size='11'>MEMORY CONSUMPTION (BASELINE)</text>
      <text x='30' y='370' fill='#f59e0b' font-family='monospace' font-size='26' font-weight='700'>48.2 MB</text>
      <rect x='30' y='385' width='600' height='10' rx='5' fill='#1e293b'/>
      <rect x='30' y='385' width='380' height='10' rx='5' fill='#f59e0b'/>

      <!-- Code Box -->
      <rect x='30' y='425' width='600' height='220' rx='8' fill='#020512' stroke='rgba(255,255,255,0.05)' stroke-width='1'/>
      <text x='50' y='460' fill='#38bdf8' font-family='monospace' font-size='11'>// Dart AOT Compilation</text>
      <text x='50' y='490' fill='#e2e8f0' font-family='monospace' font-size='11'>class HighFpsCanvas extends StatelessWidget {</text>
      <text x='70' y='520' fill='#e2e8f0' font-family='monospace' font-size='11'>  Widget build(BuildContext context) =&gt;</text>
      <text x='90' y='550' fill='#10b981' font-family='monospace' font-size='11'>CustomPaint(painter: ImpellerCustomPainter());</text>
      <text x='50' y='580' fill='#e2e8f0' font-family='monospace' font-size='11'>}</text>
      <text x='50' y='620' fill='#06b6d4' font-family='monospace' font-size='11'>✓ Pre-compiled shaders eliminate jank entirely.</text>

      <!-- Right: React Native Architecture -->
      <g transform='translate(700, 0)'>
        <rect width='660' height='680' rx='12' fill='#060c21' stroke='#3b82f6' stroke-width='1.5'/>
        <text x='30' y='45' fill='#60a5fa' font-family='monospace' font-size='16' font-weight='700'>REACT NATIVE 0.76+ // BRIDGELESS ARCHITECTURE</text>
        <text x='30' y='75' fill='#94a3b8' font-family='monospace' font-size='12'>Hermes JS Engine + TurboModules C++ JSI</text>
        <line x1='30' y1='95' x2='630' y2='95' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>

        <!-- Metric 1 -->
        <text x='30' y='135' fill='#64748b' font-family='monospace' font-size='11'>FIRST FRAME TIME TO INTERACTIVE</text>
        <text x='30' y='170' fill='#ffffff' font-family='monospace' font-size='26' font-weight='700'>210 ms</text>
        <rect x='30' y='185' width='600' height='10' rx='5' fill='#1e293b'/>
        <rect x='30' y='185' width='470' height='10' rx='5' fill='#3b82f6'/>

        <!-- Metric 2 -->
        <text x='30' y='235' fill='#64748b' font-family='monospace' font-size='11'>FRAME DROPS PER 1,000 SCROLL FRAMES</text>
        <text x='30' y='270' fill='#10b981' font-family='monospace' font-size='26' font-weight='700'>0.08 % (Near Zero)</text>
        <rect x='30' y='285' width='600' height='10' rx='5' fill='#1e293b'/>
        <rect x='30' y='285' width='540' height='10' rx='5' fill='#10b981'/>

        <!-- Metric 3 -->
        <text x='30' y='335' fill='#64748b' font-family='monospace' font-size='11'>MEMORY CONSUMPTION (BASELINE)</text>
        <text x='30' y='370' fill='#10b981' font-family='monospace' font-size='26' font-weight='700'>39.4 MB</text>
        <rect x='30' y='385' width='600' height='10' rx='5' fill='#1e293b'/>
        <rect x='30' y='385' width='310' height='10' rx='5' fill='#10b981'/>

        <!-- Code Box -->
        <rect x='30' y='425' width='600' height='220' rx='8' fill='#020512' stroke='rgba(255,255,255,0.05)' stroke-width='1'/>
        <text x='50' y='460' fill='#60a5fa' font-family='monospace' font-size='11'>// TypeScript Bridgeless TurboModule</text>
        <text x='50' y='490' fill='#e2e8f0' font-family='monospace' font-size='11'>import { TurboModuleRegistry } from 'react-native';</text>
        <text x='50' y='520' fill='#e2e8f0' font-family='monospace' font-size='11'>export interface Spec extends TurboModule {</text>
        <text x='70' y='550' fill='#10b981' font-family='monospace' font-size='11'>  syncTelemetry(data: ArrayBuffer): boolean;</text>
        <text x='50' y='580' fill='#e2e8f0' font-family='monospace' font-size='11'>}</text>
        <text x='50' y='620' fill='#60a5fa' font-family='monospace' font-size='11'>✓ Synchronous C++ memory sharing with zero serialization.</text>
      </g>
    </g>
  </g>
</svg>`;
}

// 4. Salesforce LWC Performance Optimization
function getSalesforceLwcSvg() {
  return `
<svg width='1600' height='900' viewBox='0 0 1600 900' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bg_lwc' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#030a17'/>
      <stop offset='50%' stop-color='#071836'/>
      <stop offset='100%' stop-color='#020610'/>
    </linearGradient>
    <radialGradient id='blueGlow' cx='85%' cy='20%' r='50%'>
      <stop offset='0%' stop-color='rgba(14, 165, 233, 0.25)'/>
      <stop offset='100%' stop-color='rgba(14, 165, 233, 0)'/>
    </radialGradient>
    <radialGradient id='indigoGlow' cx='15%' cy='80%' r='50%'>
      <stop offset='0%' stop-color='rgba(99, 102, 241, 0.2)'/>
      <stop offset='100%' stop-color='rgba(99, 102, 241, 0)'/>
    </radialGradient>
  </defs>

  <rect width='1600' height='900' fill='url(#bg_lwc)'/>
  <rect width='1600' height='900' fill='url(#blueGlow)'/>
  <rect width='1600' height='900' fill='url(#indigoGlow)'/>
  ${renderGrid(1600, 900, 50, 0.03)}

  <g transform='translate(80, 50)'>
    <rect width='1440' height='800' rx='16' fill='#08142a' stroke='rgba(14, 165, 233, 0.25)' stroke-width='1.5'/>
    
    <rect width='1440' height='52' rx='16' fill='#0e2042'/>
    <rect y='36' width='1440' height='16' fill='#0e2042'/>
    <line x1='0' y1='52' x2='1440' y2='52' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    
    <circle cx='35' cy='26' r='6' fill='#ef4444'/>
    <circle cx='58' cy='26' r='6' fill='#f59e0b'/>
    <circle cx='81' cy='26' r='6' fill='#10b981'/>
    
    <text x='120' y='31' fill='#7dd3fc' font-family='monospace' font-size='13' font-weight='600'>SALESFORCE PERFORMANCE LAB // LIGHTNING WEB COMPONENTS (LWC) SHADOW DOM PROFILER</text>
    <rect x='1230' y='14' width='180' height='24' rx='6' fill='rgba(14, 165, 233, 0.15)' stroke='#0ea5e9' stroke-width='1'/>
    <text x='1250' y='30' fill='#38bdf8' font-family='monospace' font-size='11' font-weight='700'>● LDS CACHE ACTIVE</text>

    <!-- Top KPIs -->
    <g transform='translate(30, 75)'>
      <rect width='325' height='120' rx='10' fill='#040c1a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12'>LIGHTNING DATA SERVICE CACHE</text>
      <text x='25' y='75' fill='#38bdf8' font-family='monospace' font-size='32' font-weight='700'>98.4 %</text>
      <text x='25' y='100' fill='#10b981' font-family='monospace' font-size='11'>Zero Redundant SOQL Roundtrips</text>

      <rect x='350' width='325' height='120' rx='10' fill='#040c1a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='375' y='35' fill='#64748b' font-family='monospace' font-size='12'>SHADOW DOM RENDER LATENCY</text>
      <text x='375' y='75' fill='#10b981' font-family='monospace' font-size='32' font-weight='700'>14 ms</text>
      <text x='375' y='100' fill='#10b981' font-family='monospace' font-size='11'>Synthetic Shadow Root Optimized</text>

      <rect x='700' width='325' height='120' rx='10' fill='#040c1a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='725' y='35' fill='#64748b' font-family='monospace' font-size='12'>SOQL BULKIFICATION FACTOR</text>
      <text x='725' y='75' fill='#a855f7' font-family='monospace' font-size='32' font-weight='700'>200 / 200</text>
      <text x='725' y='100' fill='#a855f7' font-family='monospace' font-size='11'>Governor Limits Respected 100%</text>

      <rect x='1050' width='330' height='120' rx='10' fill='#040c1a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='1075' y='35' fill='#64748b' font-family='monospace' font-size='12'>ENTERPRISE GOVERNOR LOAD</text>
      <text x='1075' y='75' fill='#34d399' font-family='monospace' font-size='32' font-weight='700'>12% Max</text>
      <text x='1075' y='100' fill='#34d399' font-family='monospace' font-size='11'>Headroom for Massive Scale</text>
    </g>

    <!-- Code Editor & Apex Sync -->
    <g transform='translate(30, 220)'>
      <!-- LWC JavaScript Controller -->
      <rect width='890' height='545' rx='12' fill='#040c1a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>// force-app/main/default/lwc/telemetryLeadPipeline/telemetryLeadPipeline.js</text>
      
      <g transform='translate(25, 60)'>
        <text x='0' y='25' fill='#38bdf8' font-family='monospace' font-size='12'>import { LightningElement, wire, api } from 'lwc';</text>
        <text x='0' y='55' fill='#38bdf8' font-family='monospace' font-size='12'>import getOptimizedPipeline from '@salesforce/apex/LeadTelemetryController.getOptimizedPipeline';</text>
        <text x='0' y='85' fill='#38bdf8' font-family='monospace' font-size='12'>import { refreshApex } from '@salesforce/apex';</text>
        
        <text x='0' y='130' fill='#a855f7' font-family='monospace' font-size='12'>export default class TelemetryLeadPipeline extends LightningElement {</text>
        <text x='25' y='160' fill='#e2e8f0' font-family='monospace' font-size='12'>  @api accountId;</text>
        <text x='25' y='190' fill='#e2e8f0' font-family='monospace' font-size='12'>  @wire(getOptimizedPipeline, { accountId: '$accountId' })</text>
        <text x='25' y='220' fill='#10b981' font-family='monospace' font-size='12'>  wiredPipeline({ error, data }) {</text>
        <text x='50' y='250' fill='#e2e8f0' font-family='monospace' font-size='12'>    if (data) {</text>
        <text x='75' y='280' fill='#94a3b8' font-family='monospace' font-size='12'>      this.pipelineStats = Object.freeze(data); // prevent synthetic reactive overhead</text>
        <text x='75' y='310' fill='#10b981' font-family='monospace' font-size='12'>      this.dispatchEvent(new CustomEvent('pipeline_synced', { detail: data }));</text>
        <text x='50' y='340' fill='#e2e8f0' font-family='monospace' font-size='12'>    }</text>
        <text x='25' y='370' fill='#10b981' font-family='monospace' font-size='12'>  }</text>
        <text x='0' y='400' fill='#a855f7' font-family='monospace' font-size='12'>}</text>
      </g>

      <!-- Right Apex Profiler -->
      <rect x='915' width='465' height='545' rx='12' fill='#040c1a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='940' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>APEX EXECUTION PROFILER &amp; LIMITS</text>

      <g transform='translate(940, 65)'>
        <text x='0' y='20' fill='#38bdf8' font-family='monospace' font-size='11'>[APEX_CODE_PROFILING]</text>
        <text x='0' y='40' fill='#94a3b8' font-family='monospace' font-size='11'>Class: LeadTelemetryController.cls</text>
        <text x='0' y='60' fill='#10b981' font-family='monospace' font-size='11'>CPU Time: 42ms / 10,000ms (0.42%)</text>
        
        <line x1='0' y1='80' x2='415' y2='80' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
        
        <text x='0' y='110' fill='#a855f7' font-family='monospace' font-size='11'>[SOQL_QUERY_STATS]</text>
        <text x='0' y='130' fill='#ffffff' font-family='monospace' font-size='11'>SELECT Id, StageName, Amount FROM Lead</text>
        <text x='0' y='150' fill='#94a3b8' font-family='monospace' font-size='11'>Indexed on AccountId. Scanned 48 rows.</text>
        <text x='0' y='170' fill='#10b981' font-family='monospace' font-size='11'>Query Execution Time: 6.2 ms</text>

        <rect y='200' width='415' height='260' rx='8' fill='#081e33' stroke='rgba(14, 165, 233, 0.2)' stroke-width='1'/>
        <text x='15' y='235' fill='#38bdf8' font-family='monospace' font-size='12' font-weight='700'>LIGHTNING EXPERIENCE METRICS</text>
        <text x='15' y='265' fill='#ffffff' font-family='monospace' font-size='12'>Page Load Time (EPT): 1.1s</text>
        <text x='15' y='295' fill='#94a3b8' font-family='monospace' font-size='11'>Salesforce Standard Benchmark: 3.5s</text>
        <text x='15' y='325' fill='#10b981' font-family='monospace' font-size='11'>✓ 68% EPT Latency Reduction</text>
        <text x='15' y='350' fill='#10b981' font-family='monospace' font-size='11'>✓ 100% Test Coverage across Apex Triggers</text>
        <text x='15' y='375' fill='#38bdf8' font-family='monospace' font-size='11'>✓ MuleSoft Anypoint bi-directional live</text>
      </g>
    </g>
  </g>
</svg>`;
}

// 5. Headless Shopify with Hydrogen
function getShopifyHeadlessSvg() {
  return `
<svg width='1600' height='900' viewBox='0 0 1600 900' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bg_hydro' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#030f0b'/>
      <stop offset='50%' stop-color='#081e17'/>
      <stop offset='100%' stop-color='#020806'/>
    </linearGradient>
    <radialGradient id='emeraldGlow' cx='85%' cy='20%' r='50%'>
      <stop offset='0%' stop-color='rgba(16, 185, 129, 0.25)'/>
      <stop offset='100%' stop-color='rgba(16, 185, 129, 0)'/>
    </radialGradient>
    <radialGradient id='tealGlow' cx='15%' cy='80%' r='50%'>
      <stop offset='0%' stop-color='rgba(20, 184, 166, 0.2)'/>
      <stop offset='100%' stop-color='rgba(20, 184, 166, 0)'/>
    </radialGradient>
  </defs>

  <rect width='1600' height='900' fill='url(#bg_hydro)'/>
  <rect width='1600' height='900' fill='url(#emeraldGlow)'/>
  <rect width='1600' height='900' fill='url(#tealGlow)'/>
  ${renderGrid(1600, 900, 50, 0.03)}

  <g transform='translate(80, 50)'>
    <rect width='1440' height='800' rx='16' fill='#061712' stroke='rgba(16, 185, 129, 0.25)' stroke-width='1.5'/>
    
    <rect width='1440' height='52' rx='16' fill='#0c261e'/>
    <rect y='36' width='1440' height='16' fill='#0c261e'/>
    <line x1='0' y1='52' x2='1440' y2='52' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    
    <circle cx='35' cy='26' r='6' fill='#ef4444'/>
    <circle cx='58' cy='26' r='6' fill='#f59e0b'/>
    <circle cx='81' cy='26' r='6' fill='#10b981'/>
    
    <text x='120' y='31' fill='#6ee7b7' font-family='monospace' font-size='13' font-weight='600'>HEADLESS COMMERCE // SHOPIFY HYDROGEN &amp; REACT SERVER COMPONENTS AT THE EDGE</text>
    <rect x='1230' y='14' width='180' height='24' rx='6' fill='rgba(16, 185, 129, 0.15)' stroke='#10b981' stroke-width='1'/>
    <text x='1250' y='30' fill='#10b981' font-family='monospace' font-size='11' font-weight='700'>● 28ms TTFB OXYGEN</text>

    <!-- Top Architecture Metrics -->
    <g transform='translate(30, 75)'>
      <rect width='325' height='120' rx='10' fill='#030d0a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12'>STOREFRONT GRAPHQL SPEED</text>
      <text x='25' y='75' fill='#10b981' font-family='monospace' font-size='32' font-weight='700'>18 ms</text>
      <text x='25' y='100' fill='#34d399' font-family='monospace' font-size='11'>Sub-request Cache Hit</text>

      <rect x='350' width='325' height='120' rx='10' fill='#030d0a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='375' y='35' fill='#64748b' font-family='monospace' font-size='12'>CHECKOUT CONVERSION ALPHA</text>
      <text x='375' y='75' fill='#34d399' font-family='monospace' font-size='32' font-weight='700'>+42.6%</text>
      <text x='375' y='100' fill='#34d399' font-family='monospace' font-size='11'>Instant Cart Line Mutations</text>

      <rect x='700' width='325' height='120' rx='10' fill='#030d0a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='725' y='35' fill='#64748b' font-family='monospace' font-size='12'>OXYGEN EDGE LATENCY</text>
      <text x='725' y='75' fill='#38bdf8' font-family='monospace' font-size='32' font-weight='700'>24 ms P95</text>
      <text x='725' y='100' fill='#38bdf8' font-family='monospace' font-size='11'>Cloudflare Workers Underhood</text>

      <rect x='1050' width='330' height='120' rx='10' fill='#030d0a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='1075' y='35' fill='#64748b' font-family='monospace' font-size='12'>CATALOG RE-HYDRATION</text>
      <text x='1075' y='75' fill='#a855f7' font-family='monospace' font-size='32' font-weight='700'>0.04s</text>
      <text x='1075' y='100' fill='#a855f7' font-family='monospace' font-size='11'>RSC Streaming Payload</text>
    </g>

    <!-- Code & Live Pipeline -->
    <g transform='translate(30, 220)'>
      <!-- Hydrogen Code -->
      <rect width='890' height='545' rx='12' fill='#030d0a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>// app/routes/products.$handle.tsx — Hydrogen React Server Component</text>
      
      <g transform='translate(25, 60)'>
        <text x='0' y='25' fill='#10b981' font-family='monospace' font-size='12'>export async function loader({ params, context }: LoaderFunctionArgs) {</text>
        <text x='25' y='55' fill='#e2e8f0' font-family='monospace' font-size='12'>  const { handle } = params;</text>
        <text x='25' y='85' fill='#e2e8f0' font-family='monospace' font-size='12'>  const { product } = await context.storefront.query(PRODUCT_QUERY, {</text>
        <text x='50' y='115' fill='#38bdf8' font-family='monospace' font-size='12'>    variables: { handle },</text>
        <text x='50' y='145' fill='#38bdf8' font-family='monospace' font-size='12'>    cache: context.storefront.CacheShort(),</text>
        <text x='25' y='175' fill='#e2e8f0' font-family='monospace' font-size='12'>  });</text>
        <text x='25' y='215' fill='#34d399' font-family='monospace' font-size='12'>  return defer({ product, deferredReviews: context.reviews.get(product.id) });</text>
        <text x='0' y='245' fill='#10b981' font-family='monospace' font-size='12'>}</text>

        <text x='0' y='295' fill='#a855f7' font-family='monospace' font-size='12'>export default function ProductRoute() {</text>
        <text x='25' y='325' fill='#e2e8f0' font-family='monospace' font-size='12'>  const { product, deferredReviews } = useLoaderData&lt;typeof loader&gt;();</text>
        <text x='25' y='355' fill='#e2e8f0' font-family='monospace' font-size='12'>  return (</text>
        <text x='50' y='385' fill='#38bdf8' font-family='monospace' font-size='12'>    &lt;ProductMain product={product}&gt;</text>
        <text x='75' y='415' fill='#10b981' font-family='monospace' font-size='12'>      &lt;Suspense fallback={&lt;ReviewSkeleton /&gt;}&gt;</text>
        <text x='100' y='445' fill='#34d399' font-family='monospace' font-size='12'>        &lt;Await resolve={deferredReviews}&gt;{(r) =&gt; &lt;Reviews list={r} /&gt;}&lt;/Await&gt;</text>
        <text x='75' y='475' fill='#10b981' font-family='monospace' font-size='12'>      &lt;/Suspense&gt;</text>
        <text x='50' y='505' fill='#38bdf8' font-family='monospace' font-size='12'>    &lt;/ProductMain&gt;</text>
        <text x='25' y='535' fill='#e2e8f0' font-family='monospace' font-size='12'>  );</text>
        <text x='0' y='565' fill='#a855f7' font-family='monospace' font-size='12'>}</text>
      </g>

      <!-- Right GraphQL Pipeline Box -->
      <rect x='915' width='465' height='545' rx='12' fill='#030d0a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='940' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>SHOPIFY STOREFRONT GRAPHQL CACHE</text>

      <g transform='translate(940, 65)'>
        <text x='0' y='20' fill='#10b981' font-family='monospace' font-size='11'>[CACHE_STRATEGY: CacheShort()]</text>
        <text x='0' y='40' fill='#94a3b8' font-family='monospace' font-size='11'>max-age=1, stale-while-revalidate=86400</text>
        <text x='0' y='60' fill='#34d399' font-family='monospace' font-size='11'>Sub-request Tag: product:849128</text>
        
        <line x1='0' y1='80' x2='415' y2='80' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
        
        <text x='0' y='110' fill='#38bdf8' font-family='monospace' font-size='11'>[CART_MUTATION_METRICS]</text>
        <text x='0' y='130' fill='#ffffff' font-family='monospace' font-size='11'>cartLinesAdd(cartId, lines) executed</text>
        <text x='0' y='150' fill='#10b981' font-family='monospace' font-size='11'>Mutation Time: 34ms (Optimistic UI)</text>

        <rect y='190' width='415' height='270' rx='8' fill='#0a241b' stroke='rgba(16, 185, 129, 0.2)' stroke-width='1'/>
        <text x='15' y='225' fill='#34d399' font-family='monospace' font-size='12' font-weight='700'>ECOMMERCE SPEED CONVERSION</text>
        <text x='15' y='255' fill='#ffffff' font-family='monospace' font-size='12'>Bounce Rate Drop: -38%</text>
        <text x='15' y='285' fill='#94a3b8' font-family='monospace' font-size='11'>Checkout Completion Time: 4.2 sec</text>
        <text x='15' y='320' fill='#10b981' font-family='monospace' font-size='11'>✓ International localized currencies synced</text>
        <text x='15' y='345' fill='#10b981' font-family='monospace' font-size='11'>✓ Shopify Customer Privacy API enforced</text>
        <text x='15' y='370' fill='#38bdf8' font-family='monospace' font-size='11'>✓ Zero liquid template overhead</text>
      </g>
    </g>
  </g>
</svg>`;
}

// 6. Core Web Vitals Optimization
function getCoreWebVitalsSvg() {
  return `
<svg width='1600' height='900' viewBox='0 0 1600 900' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bg_cwv' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#050d17'/>
      <stop offset='50%' stop-color='#0a1e36'/>
      <stop offset='100%' stop-color='#03070d'/>
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

  <rect width='1600' height='900' fill='url(#bg_cwv)'/>
  <rect width='1600' height='900' fill='url(#emeraldGlow)'/>
  <rect width='1600' height='900' fill='url(#cyanGlow)'/>
  ${renderGrid(1600, 900, 50, 0.03)}

  <g transform='translate(80, 50)'>
    <rect width='1440' height='800' rx='16' fill='#081829' stroke='rgba(56, 189, 248, 0.25)' stroke-width='1.5'/>
    
    <rect width='1440' height='52' rx='16' fill='#0f2742'/>
    <rect y='36' width='1440' height='16' fill='#0f2742'/>
    <line x1='0' y1='52' x2='1440' y2='52' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    
    <circle cx='35' cy='26' r='6' fill='#ef4444'/>
    <circle cx='58' cy='26' r='6' fill='#f59e0b'/>
    <circle cx='81' cy='26' r='6' fill='#10b981'/>
    
    <text x='120' y='31' fill='#7dd3fc' font-family='monospace' font-size='13' font-weight='600'>CORE WEB VITALS 2026 // INTERACTION TO NEXT PAINT (INP) &amp; MAIN THREAD SPLITTING</text>
    <rect x='1230' y='14' width='180' height='24' rx='6' fill='rgba(16, 185, 129, 0.15)' stroke='#10b981' stroke-width='1'/>
    <text x='1250' y='30' fill='#10b981' font-family='monospace' font-size='11' font-weight='700'>● INP: 34ms (GOOD)</text>

    <!-- 3 Core Web Vitals Dials -->
    <g transform='translate(30, 75)'>
      <!-- LCP -->
      <rect width='430' height='160' rx='12' fill='#040e1a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='30' y='40' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>LARGEST CONTENTFUL PAINT (LCP)</text>
      <text x='30' y='85' fill='#10b981' font-family='monospace' font-size='38' font-weight='800'>0.82 s</text>
      <text x='30' y='115' fill='#34d399' font-family='system-ui, sans-serif' font-size='14' font-weight='600'>● Target &lt; 2.5s (99.8th Percentile Good)</text>
      <text x='30' y='140' fill='#94a3b8' font-family='monospace' font-size='11'>Preloaded AVIF hero with high fetchpriority</text>

      <!-- INP -->
      <rect x='460' width='440' height='160' rx='12' fill='#040e1a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='490' y='40' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>INTERACTION TO NEXT PAINT (INP)</text>
      <text x='490' y='85' fill='#10b981' font-family='monospace' font-size='38' font-weight='800'>34 ms</text>
      <text x='490' y='115' fill='#34d399' font-family='system-ui, sans-serif' font-size='14' font-weight='600'>● Target &lt; 200ms (Real-User P75 Good)</text>
      <text x='490' y='140' fill='#94a3b8' font-family='monospace' font-size='11'>Task chunking with scheduler.yield()</text>

      <!-- CLS -->
      <rect x='930' width='480' height='160' rx='12' fill='#040e1a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='960' y='40' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>CUMULATIVE LAYOUT SHIFT (CLS)</text>
      <text x='960' y='85' fill='#10b981' font-family='monospace' font-size='38' font-weight='800'>0.000</text>
      <text x='960' y='115' fill='#34d399' font-family='system-ui, sans-serif' font-size='14' font-weight='600'>● Target &lt; 0.1 (Zero Visual Drift)</text>
      <text x='960' y='140' fill='#94a3b8' font-family='monospace' font-size='11'>Explicit CSS aspect-ratio on all containers</text>
    </g>

    <!-- Chrome Performance Timeline Waterfall -->
    <g transform='translate(30, 260)'>
      <rect width='1380' height='505' rx='12' fill='#040e1a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='35' y='40' fill='#64748b' font-family='monospace' font-size='13' font-weight='600'>CHROME DEVTOOLS // LONG ANIMATION FRAMES (LoAF) MAIN THREAD TIMELINE</text>
      
      <!-- Timeline Header -->
      <g stroke='rgba(255,255,255,0.08)' stroke-width='1'>
        <line x1='35' y1='65' x2='1345' y2='65'/>
        <text x='50' y='85' fill='#94a3b8' font-family='monospace' font-size='11'>0 ms</text>
        <text x='350' y='85' fill='#94a3b8' font-family='monospace' font-size='11'>50 ms (Long Task Threshold)</text>
        <text x='700' y='85' fill='#94a3b8' font-family='monospace' font-size='11'>100 ms</text>
        <text x='1050' y='85' fill='#94a3b8' font-family='monospace' font-size='11'>150 ms</text>
      </g>

      <!-- Task Bars -->
      <g transform='translate(50, 110)'>
        <!-- Row 1: Unoptimized Monolithic Task (Crossed out) -->
        <text x='0' y='25' fill='#ef4444' font-family='monospace' font-size='12'>[UNOPTIMIZED] Monolithic Event Handler</text>
        <rect y='35' width='920' height='28' rx='4' fill='#ef4444' opacity='0.7'/>
        <text x='15' y='54' fill='#ffffff' font-family='monospace' font-size='11'>Input Delay: 42ms + Script Duration: 140ms + Presentation Delay: 18ms = INP 200ms (POOR)</text>

        <!-- Row 2: Optimized Yielded Chunks -->
        <text x='0' y='105' fill='#10b981' font-family='monospace' font-size='12'>[OPTIMIZED] scheduler.yield() Chunked Architecture</text>
        
        <rect y='115' width='140' height='28' rx='4' fill='#10b981'/>
        <text x='15' y='134' fill='#ffffff' font-family='monospace' font-size='11'>Chunk 1 (12ms)</text>

        <rect x='155' y='115' width='140' height='28' rx='4' fill='#10b981'/>
        <text x='170' y='134' fill='#ffffff' font-family='monospace' font-size='11'>Chunk 2 (8ms)</text>

        <rect x='310' y='115' width='140' height='28' rx='4' fill='#10b981'/>
        <text x='325' y='134' fill='#ffffff' font-family='monospace' font-size='11'>Chunk 3 (10ms)</text>

        <rect x='465' y='115' width='140' height='28' rx='4' fill='#38bdf8'/>
        <text x='480' y='134' fill='#ffffff' font-family='monospace' font-size='11'>Render (4ms)</text>

        <text x='625' y='134' fill='#34d399' font-family='monospace' font-size='12' font-weight='700'>TOTAL INP: 34ms (ULTRA FAST)</text>
      </g>

      <!-- Code Snippet Box Below -->
      <g transform='translate(50, 300)'>
        <rect width='1280' height='160' rx='8' fill='#02070e' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
        <text x='25' y='35' fill='#38bdf8' font-family='monospace' font-size='12'>async function handleComplexDataGridInteraction(rows: DataRow[]) {</text>
        <text x='50' y='65' fill='#e2e8f0' font-family='monospace' font-size='12'>  for (const chunk of chunkArray(rows, 50)) {</text>
        <text x='75' y='95' fill='#94a3b8' font-family='monospace' font-size='12'>    processDataChunk(chunk);</text>
        <text x='75' y='125' fill='#10b981' font-family='monospace' font-size='12'>    await scheduler.yield(); // yield control back to main thread for paint!</text>
        <text x='50' y='150' fill='#e2e8f0' font-family='monospace' font-size='12'>  }</text>
        <text x='25' y='175' fill='#38bdf8' font-family='monospace' font-size='12'>}</text>
      </g>
    </g>
  </g>
</svg>`;
}

// 7. Chrome Extension Manifest V3
function getBrowserExtensionSvg() {
  return `
<svg width='1600' height='900' viewBox='0 0 1600 900' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bg_ext' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#080614'/>
      <stop offset='50%' stop-color='#140e2b'/>
      <stop offset='100%' stop-color='#04030a'/>
    </linearGradient>
    <radialGradient id='purpleGlow' cx='85%' cy='20%' r='50%'>
      <stop offset='0%' stop-color='rgba(168, 85, 247, 0.25)'/>
      <stop offset='100%' stop-color='rgba(168, 85, 247, 0)'/>
    </radialGradient>
    <radialGradient id='amberGlow' cx='15%' cy='80%' r='50%'>
      <stop offset='0%' stop-color='rgba(245, 158, 11, 0.2)'/>
      <stop offset='100%' stop-color='rgba(245, 158, 11, 0)'/>
    </radialGradient>
  </defs>

  <rect width='1600' height='900' fill='url(#bg_ext)'/>
  <rect width='1600' height='900' fill='url(#purpleGlow)'/>
  <rect width='1600' height='900' fill='url(#amberGlow)'/>
  ${renderGrid(1600, 900, 50, 0.03)}

  <g transform='translate(80, 50)'>
    <rect width='1440' height='800' rx='16' fill='#0e0a1f' stroke='rgba(168, 85, 247, 0.25)' stroke-width='1.5'/>
    
    <rect width='1440' height='52' rx='16' fill='#171133'/>
    <rect y='36' width='1440' height='16' fill='#171133'/>
    <line x1='0' y1='52' x2='1440' y2='52' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    
    <circle cx='35' cy='26' r='6' fill='#ef4444'/>
    <circle cx='58' cy='26' r='6' fill='#f59e0b'/>
    <circle cx='81' cy='26' r='6' fill='#10b981'/>
    
    <text x='120' y='31' fill='#d8b4fe' font-family='monospace' font-size='13' font-weight='600'>ENTERPRISE CHROMIUM // CHROME EXTENSION MANIFEST V3 SERVICE WORKER ARCHITECTURE</text>
    <rect x='1230' y='14' width='180' height='24' rx='6' fill='rgba(168, 85, 247, 0.15)' stroke='#a855f7' stroke-width='1'/>
    <text x='1250' y='30' fill='#c084fc' font-family='monospace' font-size='11' font-weight='700'>● MV3 COMPLIANT</text>

    <!-- Top Architecture Specs -->
    <g transform='translate(30, 75)'>
      <rect width='325' height='120' rx='10' fill='#070512' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12'>declarativeNetRequest SPEED</text>
      <text x='25' y='75' fill='#a855f7' font-family='monospace' font-size='32' font-weight='700'>0.4 ms</text>
      <text x='25' y='100' fill='#10b981' font-family='monospace' font-size='11'>Zero WebRequest Blocking Overhead</text>

      <rect x='350' width='325' height='120' rx='10' fill='#070512' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='375' y='35' fill='#64748b' font-family='monospace' font-size='12'>SERVICE WORKER WAKE-UP</text>
      <text x='375' y='75' fill='#38bdf8' font-family='monospace' font-size='32' font-weight='700'>14 ms</text>
      <text x='375' y='100' fill='#38bdf8' font-family='monospace' font-size='11'>IndexedDB Session Restoration</text>

      <rect x='700' width='325' height='120' rx='10' fill='#070512' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='725' y='35' fill='#64748b' font-family='monospace' font-size='12'>CROSS-ORIGIN ISOLATION</text>
      <text x='725' y='75' fill='#10b981' font-family='monospace' font-size='32' font-weight='700'>ENABLED</text>
      <text x='725' y='100' fill='#10b981' font-family='monospace' font-size='11'>SharedArrayBuffer / WebAssembly Ready</text>

      <rect x='1050' width='330' height='120' rx='10' fill='#070512' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='1075' y='35' fill='#64748b' font-family='monospace' font-size='12'>WEB STORE SECURITY RATING</text>
      <text x='1075' y='75' fill='#f59e0b' font-family='monospace' font-size='32' font-weight='700'>TIER 1</text>
      <text x='1075' y='100' fill='#f59e0b' font-family='monospace' font-size='11'>Automated Cloud Scanning Verified</text>
    </g>

    <!-- Component Diagram & Manifest V3 JSON -->
    <g transform='translate(30, 220)'>
      <!-- Manifest JSON -->
      <rect width='890' height='545' rx='12' fill='#070512' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>// manifest.json — Manifest V3 Specification</text>
      
      <g transform='translate(25, 60)'>
        <text x='0' y='25' fill='#a855f7' font-family='monospace' font-size='12'>{</text>
        <text x='25' y='55' fill='#38bdf8' font-family='monospace' font-size='12'>"manifest_version":</text> <text x='200' y='55' fill='#10b981' font-family='monospace' font-size='12'>3,</text>
        <text x='25' y='85' fill='#38bdf8' font-family='monospace' font-size='12'>"name":</text> <text x='200' y='85' fill='#10b981' font-family='monospace' font-size='12'>"CloudConsultancy Enterprise Connector",</text>
        <text x='25' y='115' fill='#38bdf8' font-family='monospace' font-size='12'>"background":</text> <text x='200' y='115' fill='#e2e8f0' font-family='monospace' font-size='12'>{ "service_worker": "background.js", "type": "module" },</text>
        <text x='25' y='145' fill='#38bdf8' font-family='monospace' font-size='12'>"permissions":</text> <text x='200' y='145' fill='#e2e8f0' font-family='monospace' font-size='12'>[ "declarativeNetRequest", "storage", "alarms", "offscreen" ],</text>
        <text x='25' y='175' fill='#38bdf8' font-family='monospace' font-size='12'>"declarative_net_request":</text> <text x='260' y='175' fill='#e2e8f0' font-family='monospace' font-size='12'>{ "rule_resources": [{ "id": "rules", "enabled": true, "path": "rules.json" }] },</text>
        <text x='25' y='205' fill='#38bdf8' font-family='monospace' font-size='12'>"content_scripts":</text> <text x='200' y='205' fill='#e2e8f0' font-family='monospace' font-size='12'>[{ "matches": ["https://*/*"], "js": ["content.js"], "run_at": "document_idle" }]</text>
        <text x='0' y='235' fill='#a855f7' font-family='monospace' font-size='12'>}</text>

        <!-- Message Passing Flow Inside Box -->
        <rect y='270' width='840' height='180' rx='8' fill='#0e0a1f' stroke='rgba(168, 85, 247, 0.2)' stroke-width='1'/>
        <text x='20' y='305' fill='#d8b4fe' font-family='monospace' font-size='12' font-weight='700'>OFFSCREEN DOCUMENT &amp; WEB WORKER COMPUTE</text>
        <text x='20' y='335' fill='#ffffff' font-family='monospace' font-size='11'>chrome.offscreen.createDocument({ url: 'offscreen.html', reasons: ['DOM_PARSER'] });</text>
        <text x='20' y='365' fill='#94a3b8' font-family='monospace' font-size='11'>Transfers heavy audio/canvas processing out of the service worker to avoid execution timeouts.</text>
        <text x='20' y='405' fill='#10b981' font-family='monospace' font-size='11'>✓ In-memory IPC port communication running at 0.12ms round-trip</text>
      </g>

      <!-- Right Panel: Rule Engine -->
      <rect x='915' width='465' height='545' rx='12' fill='#070512' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='940' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>declarativeNetRequest STATS</text>

      <g transform='translate(940, 65)'>
        <text x='0' y='20' fill='#c084fc' font-family='monospace' font-size='11'>[DYNAMIC_RULE_ENGINE]</text>
        <text x='0' y='40' fill='#94a3b8' font-family='monospace' font-size='11'>Active Rule Count: 4,810 rules</text>
        <text x='0' y='60' fill='#10b981' font-family='monospace' font-size='11'>Native Browser Regex Engine: ACTIVE</text>
        
        <line x1='0' y1='80' x2='415' y2='80' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
        
        <text x='0' y='110' fill='#f59e0b' font-family='monospace' font-size='11'>[STORAGE_SESSION_CACHE]</text>
        <text x='0' y='130' fill='#ffffff' font-family='monospace' font-size='11'>chrome.storage.session.set({ token })</text>
        <text x='0' y='150' fill='#94a3b8' font-family='monospace' font-size='11'>Keeps auth keys in volatile RAM only.</text>

        <rect y='190' width='415' height='270' rx='8' fill='#171133' stroke='rgba(168, 85, 247, 0.2)' stroke-width='1'/>
        <text x='15' y='225' fill='#d8b4fe' font-family='monospace' font-size='12' font-weight='700'>ENTERPRISE DEPLOYMENT READY</text>
        <text x='15' y='255' fill='#ffffff' font-family='monospace' font-size='12'>Zero Security Warnings on Audit</text>
        <text x='15' y='285' fill='#94a3b8' font-family='monospace' font-size='11'>Auto-update manifest signing key: ED25519</text>
        <text x='15' y='320' fill='#10b981' font-family='monospace' font-size='11'>✓ Full Chrome, Edge &amp; Brave support</text>
        <text x='15' y='345' fill='#10b981' font-family='monospace' font-size='11'>✓ 100k+ concurrent active users verified</text>
        <text x='15' y='370' fill='#38bdf8' font-family='monospace' font-size='11'>✓ Memory footprint &lt; 22MB RAM</text>
      </g>
    </g>
  </g>
</svg>`;
}

// 8. Cloud Infrastructure Cost Reduction
function getCloudInfrastructureSvg() {
  return `
<svg width='1600' height='900' viewBox='0 0 1600 900' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bg_cost' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#030b14'/>
      <stop offset='50%' stop-color='#071a2e'/>
      <stop offset='100%' stop-color='#02070d'/>
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

  <rect width='1600' height='900' fill='url(#bg_cost)'/>
  <rect width='1600' height='900' fill='url(#emeraldGlow)'/>
  <rect width='1600' height='900' fill='url(#cyanGlow)'/>
  ${renderGrid(1600, 900, 50, 0.03)}

  <g transform='translate(80, 50)'>
    <rect width='1440' height='800' rx='16' fill='#071626' stroke='rgba(16, 185, 129, 0.25)' stroke-width='1.5'/>
    
    <rect width='1440' height='52' rx='16' fill='#0e253e'/>
    <rect y='36' width='1440' height='16' fill='#0e253e'/>
    <line x1='0' y1='52' x2='1440' y2='52' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    
    <circle cx='35' cy='26' r='6' fill='#ef4444'/>
    <circle cx='58' cy='26' r='6' fill='#f59e0b'/>
    <circle cx='81' cy='26' r='6' fill='#10b981'/>
    
    <text x='120' y='31' fill='#34d399' font-family='monospace' font-size='13' font-weight='600'>FINOPS ARCHITECTURE // 45% CLOUD SPEND REDUCTION &amp; ZERO-DOWNTIME AUTOSCALING</text>
    <rect x='1220' y='14' width='190' height='24' rx='6' fill='rgba(16, 185, 129, 0.15)' stroke='#10b981' stroke-width='1'/>
    <text x='1240' y='30' fill='#34d399' font-family='monospace' font-size='11' font-weight='700'>● $142,000/YR SAVED</text>

    <!-- Top Cost Savings Ribbon -->
    <g transform='translate(30, 75)'>
      <rect width='325' height='120' rx='10' fill='#040e1a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12'>MONTHLY AWS RUN RATE</text>
      <text x='25' y='75' fill='#34d399' font-family='monospace' font-size='32' font-weight='700'>$11,840</text>
      <text x='25' y='100' fill='#10b981' font-family='monospace' font-size='11'>▼ -45.4% from $21,680</text>

      <rect x='350' width='325' height='120' rx='10' fill='#040e1a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='375' y='35' fill='#64748b' font-family='monospace' font-size='12'>KUBERNETES KARPENTER BIN-PACK</text>
      <text x='375' y='75' fill='#38bdf8' font-family='monospace' font-size='32' font-weight='700'>94.8 %</text>
      <text x='375' y='100' fill='#38bdf8' font-family='monospace' font-size='11'>Zero Idle vCPU Waste</text>

      <rect x='700' width='325' height='120' rx='10' fill='#040e1a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='725' y='35' fill='#64748b' font-family='monospace' font-size='12'>SPOT INSTANCE INTERRUPTION</text>
      <text x='725' y='75' fill='#10b981' font-family='monospace' font-size='32' font-weight='700'>0.00% LOSS</text>
      <text x='725' y='100' fill='#10b981' font-family='monospace' font-size='11'>Graceful Drain in 120s</text>

      <rect x='1050' width='330' height='120' rx='10' fill='#040e1a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='1075' y='35' fill='#64748b' font-family='monospace' font-size='12'>SERVICE LEVEL AGREEMENT (SLA)</text>
      <text x='1075' y='75' fill='#34d399' font-family='monospace' font-size='32' font-weight='700'>99.99 %</text>
      <text x='1075' y='100' fill='#34d399' font-family='monospace' font-size='11'>Zero Production Dropouts</text>
    </g>

    <!-- Cost Reduction Trajectory Chart -->
    <g transform='translate(30, 220)'>
      <rect width='890' height='545' rx='12' fill='#040e1a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>FINOPS 12-MONTH CLOUD SPEND TRAJECTORY (BEFORE vs AFTER)</text>
      
      <!-- Graph Lines: Red before, Green after -->
      <!-- Red Line: Flat high before -->
      <path d='M 40 180 L 250 180 L 400 200 L 500 210' fill='none' stroke='#ef4444' stroke-width='3' stroke-dasharray='4'/>
      <text x='50' y='165' fill='#ef4444' font-family='monospace' font-size='11'>ORIGINAL RUN RATE: $22,000/mo (Overprovisioned)</text>

      <!-- Green Line: Steep drop after Karpenter + Graviton3 -->
      <path d='M 500 210 Q 560 380, 650 420 L 850 440' fill='none' stroke='#10b981' stroke-width='4'/>
      <text x='620' y='390' fill='#34d399' font-family='monospace' font-size='12' font-weight='700'>▼ FINOPS OPTIMIZATION (-45%)</text>
      <text x='620' y='470' fill='#10b981' font-family='monospace' font-size='11'>CURRENT RUN RATE: $11,840/mo (Arm64 Graviton3)</text>

      <!-- Right Panel: Optimization Stack -->
      <rect x='915' width='465' height='545' rx='12' fill='#040e1a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='940' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>AUTOMATED COST SAVINGS ENGINES</text>

      <g transform='translate(940, 65)'>
        <text x='0' y='20' fill='#34d399' font-family='monospace' font-size='11'>1. AWS Graviton3 Migration (Arm64)</text>
        <text x='0' y='40' fill='#94a3b8' font-family='monospace' font-size='11'>+25% price-performance vs x86_64</text>
        
        <line x1='0' y1='60' x2='415' y2='60' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
        
        <text x='0' y='90' fill='#38bdf8' font-family='monospace' font-size='11'>2. Karpenter Just-In-Time Node Scaling</text>
        <text x='0' y='110' fill='#94a3b8' font-family='monospace' font-size='11'>Deallocates vacant EC2 instances in 45s</text>

        <line x1='0' y1='130' x2='415' y2='130' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>

        <text x='0' y='160' fill='#f59e0b' font-family='monospace' font-size='11'>3. S3 Intelligent-Tiering &amp; Lifecycle</text>
        <text x='0' y='180' fill='#94a3b8' font-family='monospace' font-size='11'>Auto-moves cold blobs to Glacier Deep Archive</text>

        <rect y='220' width='415' height='240' rx='8' fill='#0e253e' stroke='rgba(16, 185, 129, 0.2)' stroke-width='1'/>
        <text x='15' y='255' fill='#34d399' font-family='monospace' font-size='12' font-weight='700'>ROI &amp; CAPITAL EFFICIENCY</text>
        <text x='15' y='285' fill='#ffffff' font-family='monospace' font-size='12'>Engineering Investment Payback: 6 Weeks</text>
        <text x='15' y='315' fill='#94a3b8' font-family='monospace' font-size='11'>Carbon footprint reduced by 34%</text>
        <text x='15' y='350' fill='#10b981' font-family='monospace' font-size='11'>✓ Terraform IaC automated rollback safe</text>
        <text x='15' y='375' fill='#38bdf8' font-family='monospace' font-size='11'>✓ Datadog FinOps alerts configured</text>
      </g>
    </g>
  </g>
</svg>`;
}

// 9. Bi-Directional CRM Sync
function getCrmSyncSvg() {
  return `
<svg width='1600' height='900' viewBox='0 0 1600 900' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bg_crm' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#030a1c'/>
      <stop offset='50%' stop-color='#091638'/>
      <stop offset='100%' stop-color='#020612'/>
    </linearGradient>
    <radialGradient id='blueGlow' cx='85%' cy='20%' r='50%'>
      <stop offset='0%' stop-color='rgba(59, 130, 246, 0.25)'/>
      <stop offset='100%' stop-color='rgba(59, 130, 246, 0)'/>
    </radialGradient>
    <radialGradient id='amberGlow' cx='15%' cy='80%' r='50%'>
      <stop offset='0%' stop-color='rgba(245, 158, 11, 0.2)'/>
      <stop offset='100%' stop-color='rgba(245, 158, 11, 0)'/>
    </radialGradient>
  </defs>

  <rect width='1600' height='900' fill='url(#bg_crm)'/>
  <rect width='1600' height='900' fill='url(#blueGlow)'/>
  <rect width='1600' height='900' fill='url(#amberGlow)'/>
  ${renderGrid(1600, 900, 50, 0.03)}

  <g transform='translate(80, 50)'>
    <rect width='1440' height='800' rx='16' fill='#091530' stroke='rgba(59, 130, 246, 0.25)' stroke-width='1.5'/>
    
    <rect width='1440' height='52' rx='16' fill='#10214c'/>
    <rect y='36' width='1440' height='16' fill='#10214c'/>
    <line x1='0' y1='52' x2='1440' y2='52' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    
    <circle cx='35' cy='26' r='6' fill='#ef4444'/>
    <circle cx='58' cy='26' r='6' fill='#f59e0b'/>
    <circle cx='81' cy='26' r='6' fill='#10b981'/>
    
    <text x='120' y='31' fill='#93c5fd' font-family='monospace' font-size='13' font-weight='600'>ENTERPRISE INTEGRATION // REAL-TIME BI-DIRECTIONAL CRM &amp; ERP SYNCHRONIZATION</text>
    <rect x='1230' y='14' width='180' height='24' rx='6' fill='rgba(59, 130, 246, 0.15)' stroke='#3b82f6' stroke-width='1'/>
    <text x='1250' y='30' fill='#60a5fa' font-family='monospace' font-size='11' font-weight='700'>● KAFKA CDC ACTIVE</text>

    <!-- Top Architecture Metrics -->
    <g transform='translate(30, 75)'>
      <rect width='325' height='120' rx='10' fill='#050e24' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12'>SYNC PROPAGATION LATENCY</text>
      <text x='25' y='75' fill='#38bdf8' font-family='monospace' font-size='32' font-weight='700'>120 ms</text>
      <text x='25' y='100' fill='#10b981' font-family='monospace' font-size='11'>Sub-Second Cross-Cloud Consistency</text>

      <rect x='350' width='325' height='120' rx='10' fill='#050e24' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='375' y='35' fill='#64748b' font-family='monospace' font-size='12'>DAILY RECORD TRANSACTIONS</text>
      <text x='375' y='75' fill='#60a5fa' font-family='monospace' font-size='32' font-weight='700'>8.4M</text>
      <text x='375' y='100' fill='#60a5fa' font-family='monospace' font-size='11'>Zero Data Discrepancy</text>

      <rect x='700' width='325' height='120' rx='10' fill='#050e24' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='725' y='35' fill='#64748b' font-family='monospace' font-size='12'>CONFLICT RESOLUTION ENGINE</text>
      <text x='725' y='75' fill='#10b981' font-family='monospace' font-size='32' font-weight='700'>AUTOMATED</text>
      <text x='725' y='100' fill='#10b981' font-family='monospace' font-size='11'>Vector Clocks &amp; Deterministic Rules</text>

      <rect x='1050' width='330' height='120' rx='10' fill='#050e24' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='1075' y='35' fill='#64748b' font-family='monospace' font-size='12'>REDIS DEDUPLICATION HIT</text>
      <text x='1075' y='75' fill='#f59e0b' font-family='monospace' font-size='32' font-weight='700'>99.98 %</text>
      <text x='1075' y='100' fill='#f59e0b' font-family='monospace' font-size='11'>Guaranteed Idempotent Delivery</text>
    </g>

    <!-- Bi-Directional Bus Diagram -->
    <g transform='translate(30, 220)'>
      <rect width='1380' height='545' rx='12' fill='#050e24' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='35' y='40' fill='#64748b' font-family='monospace' font-size='13' font-weight='600'>BI-DIRECTIONAL EVENT-DRIVEN PIPELINE SCHEMATIC</text>
      
      <!-- Box Left: Salesforce Sales Cloud CDC -->
      <g transform='translate(50, 80)'>
        <rect width='360' height='220' rx='12' fill='#0c1a3b' stroke='#38bdf8' stroke-width='2'/>
        <text x='25' y='40' fill='#38bdf8' font-family='monospace' font-size='14' font-weight='700'>SALESFORCE SALES CLOUD</text>
        <text x='25' y='70' fill='#94a3b8' font-family='monospace' font-size='11'>Source of Truth for Customer Accounts</text>
        <line x1='25' y1='90' x2='335' y2='90' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
        
        <text x='25' y='125' fill='#e2e8f0' font-family='monospace' font-size='12'>• Change Data Capture (CDC)</text>
        <text x='25' y='155' fill='#e2e8f0' font-family='monospace' font-size='12'>• /data/ChangeEvents CometD stream</text>
        <text x='25' y='190' fill='#10b981' font-family='monospace' font-size='11'>✓ Real-time event publishing</text>
      </g>

      <!-- Center Kafka Event Mesh -->
      <g transform='translate(510, 80)'>
        <rect width='360' height='220' rx='12' fill='#0c1a3b' stroke='#a855f7' stroke-width='2'/>
        <text x='25' y='40' fill='#c084fc' font-family='monospace' font-size='14' font-weight='700'>APACHE KAFKA / REDIS CLUSTER</text>
        <text x='25' y='70' fill='#94a3b8' font-family='monospace' font-size='11'>Event Bus &amp; Idempotency Layer</text>
        <line x1='25' y1='90' x2='335' y2='90' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
        
        <text x='25' y='125' fill='#e2e8f0' font-family='monospace' font-size='12'>• Partitioned Event Topics</text>
        <text x='25' y='155' fill='#e2e8f0' font-family='monospace' font-size='12'>• Redis SHA256 Deduplication</text>
        <text x='25' y='190' fill='#10b981' font-family='monospace' font-size='11'>✓ Exactly-once delivery semantics</text>
      </g>

      <!-- Box Right: Enterprise ERP (SAP / NetSuite) -->
      <g transform='translate(970, 80)'>
        <rect width='360' height='220' rx='12' fill='#0c1a3b' stroke='#10b981' stroke-width='2'/>
        <text x='25' y='40' fill='#34d399' font-family='monospace' font-size='14' font-weight='700'>ENTERPRISE ERP (NETSUITE)</text>
        <text x='25' y='70' fill='#94a3b8' font-family='monospace' font-size='11'>Source of Truth for Invoices &amp; Ledger</text>
        <line x1='25' y1='90' x2='335' y2='90' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
        
        <text x='25' y='125' fill='#e2e8f0' font-family='monospace' font-size='12'>• RESTlet Bi-Directional Endpoints</text>
        <text x='25' y='155' fill='#e2e8f0' font-family='monospace' font-size='12'>• Two-Phase Commit Transaction</text>
        <text x='25' y='190' fill='#10b981' font-family='monospace' font-size='11'>✓ General Ledger reconciliation OK</text>
      </g>

      <!-- Bi-directional arrows -->
      <g transform='translate(420, 160)'>
        <line x1='0' y1='10' x2='80' y2='10' stroke='#38bdf8' stroke-width='3' stroke-dasharray='4'/>
        <line x1='80' y1='30' x2='0' y2='30' stroke='#a855f7' stroke-width='3' stroke-dasharray='4'/>
      </g>
      <g transform='translate(880, 160)'>
        <line x1='0' y1='10' x2='80' y2='10' stroke='#a855f7' stroke-width='3' stroke-dasharray='4'/>
        <line x1='80' y1='30' x2='0' y2='30' stroke='#10b981' stroke-width='3' stroke-dasharray='4'/>
      </g>

      <!-- Terminal Logs Below -->
      <g transform='translate(50, 340)'>
        <rect width='1280' height='160' rx='8' fill='#02050f' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
        <text x='25' y='35' fill='#38bdf8' font-family='monospace' font-size='12'>[23:55:01.402] CDC_CONSUMER: Ingested OpportunityChangeEvent (id: 0064W000021A)</text>
        <text x='25' y='65' fill='#a855f7' font-family='monospace' font-size='12'>[23:55:01.440] REDIS_CHECK: Key cdc:opp:0064W000021A is unique. Acquired distributed mutex.</text>
        <text x='25' y='95' fill='#10b981' font-family='monospace' font-size='12'>[23:55:01.512] ERP_SINK: Created SalesOrder in NetSuite #SO-98412 in 72ms. Response HTTP 201.</text>
        <text x='25' y='125' fill='#34d399' font-family='monospace' font-size='12'>[23:55:01.520] STATUS: Bi-directional cycle completed in 118ms. State reconciled across both clouds.</text>
      </g>
    </g>
  </g>
</svg>`;
}

async function run() {
  const blogItems = [
    { name: 'blog_nextjs_wordpress.jpg', svg: getNextjsWordpressSvg() },
    { name: 'blog_technical_seo.jpg', svg: getTechnicalSeoSvg() },
    { name: 'blog_flutter_react_native.jpg', svg: getFlutterReactNativeSvg() },
    { name: 'blog_salesforce_lwc.jpg', svg: getSalesforceLwcSvg() },
    { name: 'blog_shopify_headless.jpg', svg: getShopifyHeadlessSvg() },
    { name: 'blog_core_web_vitals.jpg', svg: getCoreWebVitalsSvg() },
    { name: 'blog_browser_extension.jpg', svg: getBrowserExtensionSvg() },
    { name: 'blog_cloud_infrastructure.jpg', svg: getCloudInfrastructureSvg() },
    { name: 'blog_crm_sync.jpg', svg: getCrmSyncSvg() },
  ];

  for (const item of blogItems) {
    const dest = path.join(OUTPUT_DIR, item.name);
    await sharp(Buffer.from(item.svg))
      .jpeg({ quality: 92 })
      .toFile(dest);
    const sz = fs.statSync(dest).size;
    console.log(`✓ Rendered ${item.name} (${sz} bytes)`);
  }
}

run().catch(err => {
  console.error('Error running blog generators:', err);
  process.exit(1);
});
