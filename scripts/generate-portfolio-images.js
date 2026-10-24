const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const crypto = require('crypto');

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images');
const BRAIN_DIR = '/Users/ujjawal/.gemini/antigravity-ide/brain/cbb0a15d-c1c1-4477-866d-08659dd34998';

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

console.log('--- REGENERATING ALL 36 IMAGES WITH ZERO DUPLICATES ---');
console.log('Output Directory:', OUTPUT_DIR);

// Utility to create high-tech grid background
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
// PORTFOLIO GENERATORS (7 images)
// -------------------------------------------------------------

function getFinvantageSvg() {
  return `
<svg width='1600' height='900' viewBox='0 0 1600 900' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bg_fin' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#050814'/>
      <stop offset='50%' stop-color='#0a1026'/>
      <stop offset='100%' stop-color='#03050d'/>
    </linearGradient>
    <radialGradient id='emeraldGlow' cx='85%' cy='25%' r='50%'>
      <stop offset='0%' stop-color='rgba(16, 185, 129, 0.22)'/>
      <stop offset='100%' stop-color='rgba(16, 185, 129, 0)'/>
    </radialGradient>
    <radialGradient id='cyanGlow' cx='15%' cy='75%' r='50%'>
      <stop offset='0%' stop-color='rgba(6, 182, 212, 0.2)'/>
      <stop offset='100%' stop-color='rgba(6, 182, 212, 0)'/>
    </radialGradient>
    <linearGradient id='lineGrad' x1='0%' y1='0%' x2='100%' y2='0%'>
      <stop offset='0%' stop-color='#06b6d4'/>
      <stop offset='60%' stop-color='#10b981'/>
      <stop offset='100%' stop-color='#34d399'/>
    </linearGradient>
  </defs>

  <rect width='1600' height='900' fill='url(#bg_fin)'/>
  <rect width='1600' height='900' fill='url(#emeraldGlow)'/>
  <rect width='1600' height='900' fill='url(#cyanGlow)'/>
  ${renderGrid(1600, 900, 50, 0.03)}

  <g transform='translate(80, 50)'>
    <rect width='1440' height='800' rx='16' fill='#0b1329' stroke='rgba(56, 189, 248, 0.2)' stroke-width='1.5'/>
    
    <!-- Top Bar -->
    <rect width='1440' height='52' rx='16' fill='#0e1738'/>
    <rect y='36' width='1440' height='16' fill='#0e1738'/>
    <line x1='0' y1='52' x2='1440' y2='52' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    
    <circle cx='35' cy='26' r='6' fill='#ef4444'/>
    <circle cx='58' cy='26' r='6' fill='#f59e0b'/>
    <circle cx='81' cy='26' r='6' fill='#10b981'/>
    
    <text x='120' y='31' fill='#94a3b8' font-family='monospace' font-size='13' font-weight='600'>FINVANTAGE // HFT WEALTH PLATFORM &amp; MATCHING ENGINE</text>
    <rect x='1240' y='14' width='170' height='24' rx='6' fill='rgba(16, 185, 129, 0.15)' stroke='#10b981' stroke-width='1'/>
    <text x='1260' y='30' fill='#10b981' font-family='monospace' font-size='11' font-weight='700'>● WEBSOCKET LIVE</text>
    
    <!-- Left KPI Card -->
    <rect x='30' y='75' width='440' height='320' rx='12' fill='#080e21' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
    <text x='55' y='110' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>TOTAL ASSETS UNDER MANAGEMENT</text>
    <text x='55' y='155' fill='#f8fafc' font-family='system-ui, sans-serif' font-size='38' font-weight='800'>$84,291,480.00</text>
    <text x='55' y='185' fill='#10b981' font-family='system-ui, sans-serif' font-size='15' font-weight='700'>▲ +18.4% YTD (+$13.1M Alpha Generated)</text>
    
    <line x1='55' y1='210' x2='445' y2='210' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
    
    <text x='55' y='245' fill='#94a3b8' font-family='monospace' font-size='12'>Order Latency P99</text>
    <text x='55' y='270' fill='#38bdf8' font-family='monospace' font-size='20' font-weight='700'>4.18 ms</text>

    <text x='250' y='245' fill='#94a3b8' font-family='monospace' font-size='12'>Kafka Throughput</text>
    <text x='250' y='270' fill='#a855f7' font-family='monospace' font-size='20' font-weight='700'>240k msg/sec</text>

    <text x='55' y='320' fill='#94a3b8' font-family='monospace' font-size='12'>Distributed Replicas</text>
    <text x='55' y='345' fill='#34d399' font-family='monospace' font-size='20' font-weight='700'>6 Global Regions</text>

    <text x='250' y='320' fill='#94a3b8' font-family='monospace' font-size='12'>Data Compliance</text>
    <text x='250' y='345' fill='#f59e0b' font-family='monospace' font-size='20' font-weight='700'>SOC2 / ISO 27001</text>

    <!-- Right Chart Area -->
    <rect x='495' y='75' width='915' height='450' rx='12' fill='#080e21' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
    <text x='525' y='110' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>REAL-TIME ARBITRAGE DEPTH &amp; LIQUIDITY CURVE</text>
    
    ${Array.from({length: 24}, (_, i) => {
      const x = 535 + i * 36;
      const h = 40 + Math.sin(i * 0.7) * 35 + (i * 4.5);
      const color = i % 3 === 0 ? '#ef4444' : '#10b981';
      return `
        <rect x='${x}' y='${420 - h}' width='22' height='${h}' fill='${color}' opacity='0.75' rx='3'/>
        <line x1='${x + 11}' y1='${400 - h}' x2='${x + 11}' y2='${435}' stroke='${color}' stroke-width='1.5'/>
      `;
    }).join('')}

    <path d='M 535 320 Q 665 260, 795 280 T 1015 180 T 1215 140 T 1385 120' fill='none' stroke='url(#lineGrad)' stroke-width='4'/>
    
    <!-- Bottom Log Strip -->
    <rect x='30' y='415' width='440' height='355' rx='12' fill='#080e21' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
    <text x='55' y='450' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>DISTRIBUTED LEDGER AUDIT STREAM</text>
    <text x='55' y='485' fill='#34d399' font-family='monospace' font-size='12'>[23:42:01.104] MATCH_ENGINE</text>
    <text x='55' y='505' fill='#94a3b8' font-family='monospace' font-size='12'>Routed 4,500 lots @ 1.0842 (0.84ms)</text>
    <text x='55' y='545' fill='#38bdf8' font-family='monospace' font-size='12'>[23:42:01.108] RISK_VALIDATOR</text>
    <text x='55' y='565' fill='#94a3b8' font-family='monospace' font-size='12'>Pre-trade leverage check PASS (0.32ms)</text>
    <text x='55' y='605' fill='#a855f7' font-family='monospace' font-size='12'>[23:42:01.112] KAFKA_PARTITION_4</text>
    <text x='55' y='625' fill='#94a3b8' font-family='monospace' font-size='12'>Committed offset #9,842,109 to cluster</text>
    <text x='55' y='665' fill='#f59e0b' font-family='monospace' font-size='12'>[23:42:01.116] POSTGRES_TIMESCALE</text>
    <text x='55' y='685' fill='#94a3b8' font-family='monospace' font-size='12'>Tick archived with zero WAL replication lag</text>

    <!-- Bottom Right Architecture Pipeline -->
    <rect x='495' y='545' width='915' height='225' rx='12' fill='#080e21' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
    <text x='525' y='580' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>HIGH-FREQUENCY ARCHITECTURE PIPELINE</text>

    <g transform='translate(525, 605)'>
      <rect width='190' height='95' rx='10' fill='#0f172a' stroke='#06b6d4' stroke-width='1.5'/>
      <text x='95' y='35' text-anchor='middle' fill='#38bdf8' font-family='monospace' font-size='12' font-weight='700'>EDGE GATEWAY</text>
      <text x='95' y='60' text-anchor='middle' fill='#94a3b8' font-family='monospace' font-size='11'>Envoy / HTTP3 / WSS</text>
      <text x='95' y='78' text-anchor='middle' fill='#10b981' font-family='monospace' font-size='11'>TLS 1.3 Terminated</text>

      <line x1='195' y1='47' x2='235' y2='47' stroke='#38bdf8' stroke-width='2' stroke-dasharray='4'/>

      <rect x='240' width='190' height='95' rx='10' fill='#0f172a' stroke='#a855f7' stroke-width='1.5'/>
      <text x='335' y='35' text-anchor='middle' fill='#c084fc' font-family='monospace' font-size='12' font-weight='700'>MATCHING ENGINE</text>
      <text x='335' y='60' text-anchor='middle' fill='#94a3b8' font-family='monospace' font-size='11'>Rust / In-Memory Book</text>
      <text x='335' y='78' text-anchor='middle' fill='#10b981' font-family='monospace' font-size='11'>Sub-1ms Tick Match</text>

      <line x1='435' y1='47' x2='475' y2='47' stroke='#a855f7' stroke-width='2' stroke-dasharray='4'/>

      <rect x='480' width='190' height='95' rx='10' fill='#0f172a' stroke='#10b981' stroke-width='1.5'/>
      <text x='575' y='35' text-anchor='middle' fill='#34d399' font-family='monospace' font-size='12' font-weight='700'>EVENT BUS</text>
      <text x='575' y='60' text-anchor='middle' fill='#94a3b8' font-family='monospace' font-size='11'>Apache Kafka 3-Node</text>
      <text x='575' y='78' text-anchor='middle' fill='#10b981' font-family='monospace' font-size='11'>Exact-Once Guarantee</text>

      <line x1='675' y1='47' x2='715' y2='47' stroke='#10b981' stroke-width='2' stroke-dasharray='4'/>

      <rect x='720' width='190' height='95' rx='10' fill='#0f172a' stroke='#f59e0b' stroke-width='1.5'/>
      <text x='815' y='35' text-anchor='middle' fill='#fbbf24' font-family='monospace' font-size='12' font-weight='700'>DATA LAKE</text>
      <text x='815' y='60' text-anchor='middle' fill='#94a3b8' font-family='monospace' font-size='11'>TimescaleDB / S3</text>
      <text x='815' y='78' text-anchor='middle' fill='#10b981' font-family='monospace' font-size='11'>Auto Compaction</text>
    </g>
  </g>
</svg>`;
}

function getCloudSphereSvg() {
  return `
<svg width='1600' height='900' viewBox='0 0 1600 900' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bg_iot' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#030a1c'/>
      <stop offset='50%' stop-color='#071738'/>
      <stop offset='100%' stop-color='#020712'/>
    </linearGradient>
    <radialGradient id='blueGlow' cx='80%' cy='20%' r='50%'>
      <stop offset='0%' stop-color='rgba(59, 130, 246, 0.25)'/>
      <stop offset='100%' stop-color='rgba(59, 130, 246, 0)'/>
    </radialGradient>
    <radialGradient id='tealGlow' cx='20%' cy='80%' r='50%'>
      <stop offset='0%' stop-color='rgba(20, 184, 166, 0.2)'/>
      <stop offset='100%' stop-color='rgba(20, 184, 166, 0)'/>
    </radialGradient>
  </defs>

  <rect width='1600' height='900' fill='url(#bg_iot)'/>
  <rect width='1600' height='900' fill='url(#blueGlow)'/>
  <rect width='1600' height='900' fill='url(#tealGlow)'/>
  ${renderGrid(1600, 900, 50, 0.03)}

  <g transform='translate(80, 50)'>
    <rect width='1440' height='800' rx='16' fill='#09142e' stroke='rgba(59, 130, 246, 0.25)' stroke-width='1.5'/>
    
    <!-- Top Bar -->
    <rect width='1440' height='52' rx='16' fill='#0d1d42'/>
    <rect y='36' width='1440' height='16' fill='#0d1d42'/>
    <line x1='0' y1='52' x2='1440' y2='52' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    
    <circle cx='35' cy='26' r='6' fill='#ef4444'/>
    <circle cx='58' cy='26' r='6' fill='#f59e0b'/>
    <circle cx='81' cy='26' r='6' fill='#10b981'/>
    
    <text x='120' y='31' fill='#93c5fd' font-family='monospace' font-size='13' font-weight='600'>CLOUDSPHERE // INDUSTRIAL IoT TELEMETRY &amp; SENSOR HUB</text>
    <rect x='1230' y='14' width='180' height='24' rx='6' fill='rgba(20, 184, 166, 0.15)' stroke='#14b8a6' stroke-width='1'/>
    <text x='1250' y='30' fill='#14b8a6' font-family='monospace' font-size='11' font-weight='700'>● 12,480 NODES ONLINE</text>

    <!-- 4 Metrics Cards Across Top -->
    <g transform='translate(30, 75)'>
      <!-- Card 1 -->
      <rect width='325' height='130' rx='10' fill='#060d21' stroke='rgba(255,255,255,0.07)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>MQTT STREAM THROUGHPUT</text>
      <text x='25' y='75' fill='#38bdf8' font-family='monospace' font-size='32' font-weight='700'>124,500/s</text>
      <text x='25' y='105' fill='#10b981' font-family='monospace' font-size='12'>● Zero Packet Drops</text>

      <!-- Card 2 -->
      <rect x='350' width='325' height='130' rx='10' fill='#060d21' stroke='rgba(255,255,255,0.07)' stroke-width='1'/>
      <text x='375' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>EDGE INFERENCE LATENCY</text>
      <text x='375' y='75' fill='#a855f7' font-family='monospace' font-size='32' font-weight='700'>1.84 ms</text>
      <text x='375' y='105' fill='#38bdf8' font-family='monospace' font-size='12'>ONNX Runtime Embedded</text>

      <!-- Card 3 -->
      <rect x='700' width='325' height='130' rx='10' fill='#060d21' stroke='rgba(255,255,255,0.07)' stroke-width='1'/>
      <text x='725' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>VIBRATION ANOMALY INDEX</text>
      <text x='725' y='75' fill='#10b981' font-family='monospace' font-size='32' font-weight='700'>0.014 G</text>
      <text x='725' y='105' fill='#34d399' font-family='monospace' font-size='12'>Nominal Baseline 99.8%</text>

      <!-- Card 4 -->
      <rect x='1050' width='330' height='130' rx='10' fill='#060d21' stroke='rgba(255,255,255,0.07)' stroke-width='1'/>
      <text x='1075' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>GREENGRASS REPLICAS</text>
      <text x='1075' y='75' fill='#f59e0b' font-family='monospace' font-size='32' font-weight='700'>48 Hubs</text>
      <text x='1075' y='105' fill='#f59e0b' font-family='monospace' font-size='12'>Auto-Mesh Failover Ready</text>
    </g>

    <!-- Sensor Waveforms & Topology Map -->
    <g transform='translate(30, 230)'>
      <!-- Left: Real-time Multi-Channel Sensor Graph -->
      <rect width='890' height='535' rx='12' fill='#060d21' stroke='rgba(255,255,255,0.07)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>REAL-TIME 12-AXIS SENSOR TELEMETRY &amp; HARMONIC SPECTRUM</text>
      
      <!-- Wave 1 (Cyan) -->
      <path d='M 30 180 Q 120 80, 210 180 T 390 180 T 570 180 T 750 180 T 870 180' fill='none' stroke='#06b6d4' stroke-width='3'/>
      <!-- Wave 2 (Violet) -->
      <path d='M 30 320 Q 150 240, 270 320 T 510 320 T 750 320 T 870 320' fill='none' stroke='#8b5cf6' stroke-width='2.5' stroke-dasharray='4'/>
      <!-- Wave 3 (Amber) -->
      <path d='M 30 460 Q 90 410, 150 460 T 270 460 T 390 460 T 510 460 T 630 460 T 750 460 T 870 460' fill='none' stroke='#f59e0b' stroke-width='2'/>

      <text x='35' y='155' fill='#06b6d4' font-family='monospace' font-size='11' font-weight='700'>SENSOR_01: BEARING VIBRATION (RMS)</text>
      <text x='35' y='295' fill='#8b5cf6' font-family='monospace' font-size='11' font-weight='700'>SENSOR_02: STATOR THERMAL FLUX (°C)</text>
      <text x='35' y='435' fill='#f59e0b' font-family='monospace' font-size='11' font-weight='700'>SENSOR_03: HYDRAULIC LINE PRESSURE (BAR)</text>

      <!-- Right: Distributed Edge Topology -->
      <rect x='915' width='465' height='535' rx='12' fill='#060d21' stroke='rgba(255,255,255,0.07)' stroke-width='1'/>
      <text x='940' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>EDGE MESH NETWORK TOPOLOGY</text>

      <!-- Topology Diagram Nodes -->
      <g transform='translate(940, 60)'>
        <!-- Central Cloud Gateway -->
        <circle cx='215' cy='110' r='45' fill='#0f172a' stroke='#3b82f6' stroke-width='2'/>
        <text x='215' y='110' text-anchor='middle' fill='#93c5fd' font-family='monospace' font-size='11' font-weight='700'>AWS IoT</text>
        <text x='215' y='126' text-anchor='middle' fill='#38bdf8' font-family='monospace' font-size='9'>CORE</text>

        <!-- Node Satellites -->
        ${[
          { cx: 70, cy: 60, label: 'NODE A1', ip: '10.0.1.12' },
          { cx: 360, cy: 60, label: 'NODE A2', ip: '10.0.1.18' },
          { cx: 70, cy: 220, label: 'NODE B1', ip: '10.0.2.44' },
          { cx: 360, cy: 220, label: 'NODE B2', ip: '10.0.2.89' },
          { cx: 215, cy: 280, label: 'GATEWAY', ip: '10.0.0.1' },
        ].map(n => `
          <line x1='215' y1='110' x2='${n.cx}' y2='${n.cy}' stroke='rgba(59, 130, 246, 0.4)' stroke-width='1.5' stroke-dasharray='3'/>
          <circle cx='${n.cx}' cy='${n.cy}' r='30' fill='#0f172a' stroke='#10b981' stroke-width='1.5'/>
          <text x='${n.cx}' y='${n.cy - 2}' text-anchor='middle' fill='#ffffff' font-family='monospace' font-size='9' font-weight='700'>${n.label}</text>
          <text x='${n.cx}' y='${n.cy + 12}' text-anchor='middle' fill='#10b981' font-family='monospace' font-size='8'>${n.ip}</text>
        `).join('')}

        <!-- Live Telemetry Stream Box -->
        <rect y='340' width='430' height='110' rx='8' fill='#091126' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
        <text x='15' y='365' fill='#38bdf8' font-family='monospace' font-size='10'>[TOPIC: telemetry/turbines/t42/metrics]</text>
        <text x='15' y='385' fill='#94a3b8' font-family='monospace' font-size='10'>payload: { rpm: 3602, temp: 74.2, p: 18.4 }</text>
        <text x='15' y='405' fill='#10b981' font-family='monospace' font-size='10'>[AWS_TIMESTREAM] Written 200 batches to TSDB</text>
        <text x='15' y='425' fill='#a855f7' font-family='monospace' font-size='10'>[RULE_ENGINE] Trigger condition nominal. SLA OK.</text>
      </g>
    </g>
  </g>
</svg>`;
}

function getAuraMedSvg() {
  return `
<svg width='1600' height='900' viewBox='0 0 1600 900' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bg_med' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#021217'/>
      <stop offset='50%' stop-color='#052129'/>
      <stop offset='100%' stop-color='#010b0e'/>
    </linearGradient>
    <radialGradient id='tealGlow' cx='80%' cy='20%' r='50%'>
      <stop offset='0%' stop-color='rgba(20, 184, 166, 0.25)'/>
      <stop offset='100%' stop-color='rgba(20, 184, 166, 0)'/>
    </radialGradient>
    <radialGradient id='cyanGlow2' cx='20%' cy='80%' r='50%'>
      <stop offset='0%' stop-color='rgba(6, 182, 212, 0.2)'/>
      <stop offset='100%' stop-color='rgba(6, 182, 212, 0)'/>
    </radialGradient>
  </defs>

  <rect width='1600' height='900' fill='url(#bg_med)'/>
  <rect width='1600' height='900' fill='url(#tealGlow)'/>
  <rect width='1600' height='900' fill='url(#cyanGlow2)'/>
  ${renderGrid(1600, 900, 50, 0.03)}

  <g transform='translate(80, 50)'>
    <rect width='1440' height='800' rx='16' fill='#071921' stroke='rgba(20, 184, 166, 0.25)' stroke-width='1.5'/>
    
    <rect width='1440' height='52' rx='16' fill='#0b2632'/>
    <rect y='36' width='1440' height='16' fill='#0b2632'/>
    <line x1='0' y1='52' x2='1440' y2='52' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    
    <circle cx='35' cy='26' r='6' fill='#ef4444'/>
    <circle cx='58' cy='26' r='6' fill='#f59e0b'/>
    <circle cx='81' cy='26' r='6' fill='#10b981'/>
    
    <text x='120' y='31' fill='#5eead4' font-family='monospace' font-size='13' font-weight='600'>AURAMED // TELEHEALTH TELEMETRY &amp; ENCRYPTED EHR CLINICAL SUITE</text>
    <rect x='1230' y='14' width='180' height='24' rx='6' fill='rgba(20, 184, 166, 0.15)' stroke='#14b8a6' stroke-width='1'/>
    <text x='1250' y='30' fill='#2dd4bf' font-family='monospace' font-size='11' font-weight='700'>● HIPAA / SOC2 COMPLIANT</text>

    <!-- Top Vitals Ribbon -->
    <g transform='translate(30, 75)'>
      <rect width='325' height='120' rx='10' fill='#05131a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12'>HEART RATE (ECG)</text>
      <text x='25' y='75' fill='#f43f5e' font-family='monospace' font-size='32' font-weight='700'>72 BPM</text>
      <text x='25' y='100' fill='#10b981' font-family='monospace' font-size='11'>● Sinus Rhythm Normal</text>

      <rect x='350' width='325' height='120' rx='10' fill='#05131a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='375' y='35' fill='#64748b' font-family='monospace' font-size='12'>OXYGEN SATURATION (SpO2)</text>
      <text x='375' y='75' fill='#06b6d4' font-family='monospace' font-size='32' font-weight='700'>99 %</text>
      <text x='375' y='100' fill='#06b6d4' font-family='monospace' font-size='11'>Nominal Perfusion Index</text>

      <rect x='700' width='325' height='120' rx='10' fill='#05131a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='725' y='35' fill='#64748b' font-family='monospace' font-size='12'>BLOOD PRESSURE</text>
      <text x='725' y='75' fill='#2dd4bf' font-family='monospace' font-size='32' font-weight='700'>120 / 78</text>
      <text x='725' y='100' fill='#2dd4bf' font-family='monospace' font-size='11'>mmHg Optimal Range</text>

      <rect x='1050' width='330' height='120' rx='10' fill='#05131a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='1075' y='35' fill='#64748b' font-family='monospace' font-size='12'>WebRTC ENCRYPTION</text>
      <text x='1075' y='75' fill='#a855f7' font-family='monospace' font-size='28' font-weight='700'>DTLS / SRTP</text>
      <text x='1075' y='100' fill='#a855f7' font-family='monospace' font-size='11'>AES-256 E2E Verified</text>
    </g>

    <!-- ECG Stream & Clinical Record -->
    <g transform='translate(30, 220)'>
      <!-- ECG Canvas -->
      <rect width='890' height='545' rx='12' fill='#05131a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>REAL-TIME ECG RHYTHM TELEMETRY // LEAD II</text>
      
      <!-- ECG Line Pulse -->
      <path d='M 30 240 L 150 240 L 170 210 L 190 270 L 210 130 L 230 310 L 250 240 L 350 240 L 370 210 L 390 270 L 410 130 L 430 310 L 450 240 L 550 240 L 570 210 L 590 270 L 610 130 L 630 310 L 650 240 L 750 240 L 770 210 L 790 270 L 810 130 L 830 310 L 850 240' fill='none' stroke='#10b981' stroke-width='3.5'/>

      <!-- Mini Vitals Histogram -->
      <g transform='translate(25, 340)'>
        <text x='0' y='0' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>FHIR v4.0.1 INTEROPERABILITY JSON GATEWAY</text>
        <rect y='15' width='840' height='160' rx='8' fill='#030d12' stroke='rgba(255,255,255,0.05)' stroke-width='1'/>
        <text x='20' y='45' fill='#38bdf8' font-family='monospace' font-size='12'>GET /api/v4/Observation?patient=pat_94812&amp;code=8867-4</text>
        <text x='20' y='75' fill='#2dd4bf' font-family='monospace' font-size='11'>HTTP/2 200 OK • content-type: application/fhir+json • encrypted: true</text>
        <text x='20' y='105' fill='#94a3b8' font-family='monospace' font-size='11'>{ "resourceType": "Observation", "status": "final", "valueQuantity": { "value": 72, "unit": "beats/minute" } }</text>
        <text x='20' y='135' fill='#10b981' font-family='monospace' font-size='11'>✓ Audit record written to encrypted AWS CloudTrail ledger with zero PHI leakage.</text>
      </g>

      <!-- Right EHR Summary -->
      <rect x='915' width='465' height='545' rx='12' fill='#05131a' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='940' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>PATIENT CLINICAL DOSSIER</text>
      
      <g transform='translate(940, 65)'>
        <text x='0' y='20' fill='#ffffff' font-family='system-ui, sans-serif' font-size='18' font-weight='700'>Clinical Telehealth Session #8412</text>
        <text x='0' y='42' fill='#5eead4' font-family='monospace' font-size='12'>Specialist: Dr. H. Vance, MD (Cardiology)</text>
        <line x1='0' y1='60' x2='415' y2='60' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>

        <text x='0' y='95' fill='#94a3b8' font-family='monospace' font-size='12'>Video Codec: AV1 / 60 FPS HD</text>
        <text x='0' y='125' fill='#94a3b8' font-family='monospace' font-size='12'>Packet Jitter: 0.8 ms</text>
        <text x='0' y='155' fill='#94a3b8' font-family='monospace' font-size='12'>End-to-End Latency: 24 ms</text>
        <text x='0' y='185' fill='#94a3b8' font-family='monospace' font-size='12'>Diagnostic State: STABLE</text>

        <rect y='220' width='415' height='180' rx='8' fill='#081e28' stroke='rgba(45, 212, 191, 0.2)' stroke-width='1'/>
        <text x='15' y='250' fill='#2dd4bf' font-family='monospace' font-size='12' font-weight='700'>AI CLINICAL TRANSCRIPTION ENGINE</text>
        <text x='15' y='280' fill='#e2e8f0' font-family='system-ui, sans-serif' font-size='12'>"Patient notes absence of palpitations after morning beta-blocker titration. Vital signs stable across past 14 days."</text>
        <text x='15' y='340' fill='#10b981' font-family='monospace' font-size='11'>✓ Prescription synced to Epic MyChart via FHIR.</text>
        <text x='15' y='365' fill='#38bdf8' font-family='monospace' font-size='11'>✓ Automated clinical summary generated in 1.2s.</text>
      </g>
    </g>
  </g>
</svg>`;
}

function getUrbanRiderSvg() {
  return `
<svg width='1600' height='900' viewBox='0 0 1600 900' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bg_urban' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#0a0f18'/>
      <stop offset='50%' stop-color='#131d2e'/>
      <stop offset='100%' stop-color='#080c14'/>
    </linearGradient>
    <radialGradient id='orangeGlow' cx='85%' cy='20%' r='50%'>
      <stop offset='0%' stop-color='rgba(249, 115, 22, 0.25)'/>
      <stop offset='100%' stop-color='rgba(249, 115, 22, 0)'/>
    </radialGradient>
    <radialGradient id='yellowGlow' cx='15%' cy='80%' r='50%'>
      <stop offset='0%' stop-color='rgba(234, 179, 8, 0.2)'/>
      <stop offset='100%' stop-color='rgba(234, 179, 8, 0)'/>
    </radialGradient>
  </defs>

  <rect width='1600' height='900' fill='url(#bg_urban)'/>
  <rect width='1600' height='900' fill='url(#orangeGlow)'/>
  <rect width='1600' height='900' fill='url(#yellowGlow)'/>
  ${renderGrid(1600, 900, 50, 0.03)}

  <g transform='translate(80, 50)'>
    <rect width='1440' height='800' rx='16' fill='#0e1624' stroke='rgba(249, 115, 22, 0.25)' stroke-width='1.5'/>
    
    <rect width='1440' height='52' rx='16' fill='#172338'/>
    <rect y='36' width='1440' height='16' fill='#172338'/>
    <line x1='0' y1='52' x2='1440' y2='52' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    
    <circle cx='35' cy='26' r='6' fill='#ef4444'/>
    <circle cx='58' cy='26' r='6' fill='#f59e0b'/>
    <circle cx='81' cy='26' r='6' fill='#10b981'/>
    
    <text x='120' y='31' fill='#fdba74' font-family='monospace' font-size='13' font-weight='600'>URBANRIDER // LAST-MILE LOGISTICS DISPATCH &amp; REAL-TIME ROUTING</text>
    <rect x='1220' y='14' width='190' height='24' rx='6' fill='rgba(249, 115, 22, 0.15)' stroke='#f97316' stroke-width='1'/>
    <text x='1240' y='30' fill='#fb923c' font-family='monospace' font-size='11' font-weight='700'>● 842 COURIERS ACTIVE</text>

    <!-- Top Metrics -->
    <g transform='translate(30, 75)'>
      <rect width='325' height='120' rx='10' fill='#080e18' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12'>DISPATCH SUCCESS RATE</text>
      <text x='25' y='75' fill='#f97316' font-family='monospace' font-size='32' font-weight='700'>99.4 %</text>
      <text x='25' y='100' fill='#10b981' font-family='monospace' font-size='11'>▲ +3.2% vs Monthly Target</text>

      <rect x='350' width='325' height='120' rx='10' fill='#080e18' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='375' y='35' fill='#64748b' font-family='monospace' font-size='12'>AVERAGE DELIVERY TIME</text>
      <text x='375' y='75' fill='#facc15' font-family='monospace' font-size='32' font-weight='700'>18.4 min</text>
      <text x='375' y='100' fill='#38bdf8' font-family='monospace' font-size='11'>AI Route Optimization</text>

      <rect x='700' width='325' height='120' rx='10' fill='#080e18' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='725' y='35' fill='#64748b' font-family='monospace' font-size='12'>GEO-HASH MATCH LATENCY</text>
      <text x='725' y='75' fill='#38bdf8' font-family='monospace' font-size='32' font-weight='700'>8.2 ms</text>
      <text x='725' y='100' fill='#10b981' font-family='monospace' font-size='11'>Uber H3 Spatial Index</text>

      <rect x='1050' width='330' height='120' rx='10' fill='#080e18' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='1075' y='35' fill='#64748b' font-family='monospace' font-size='12'>LIVE ACTIVE PACKAGES</text>
      <text x='1075' y='75' fill='#10b981' font-family='monospace' font-size='32' font-weight='700'>3,814</text>
      <text x='1075' y='100' fill='#10b981' font-family='monospace' font-size='11'>100% Tracked in Transit</text>
    </g>

    <!-- Map & Fleet Telemetry -->
    <g transform='translate(30, 220)'>
      <!-- Vector Map Grid -->
      <rect width='890' height='545' rx='12' fill='#080e18' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>METROPOLITAN FLEET DISPATCH MAP // SECTOR 7</text>
      
      <!-- City Grid Street Lines -->
      <g stroke='rgba(255,255,255,0.06)' stroke-width='2'>
        <line x1='50' y1='100' x2='840' y2='100'/>
        <line x1='50' y1='200' x2='840' y2='200'/>
        <line x1='50' y1='300' x2='840' y2='300'/>
        <line x1='50' y1='400' x2='840' y2='400'/>
        <line x1='50' y1='500' x2='840' y2='500'/>
        
        <line x1='150' y1='60' x2='150' y2='520'/>
        <line x1='300' y1='60' x2='300' y2='520'/>
        <line x1='450' y1='60' x2='450' y2='520'/>
        <line x1='600' y1='60' x2='600' y2='520'/>
        <line x1='750' y1='60' x2='750' y2='520'/>
      </g>

      <!-- Active Delivery Route (Glowing Orange) -->
      <path d='M 150 400 L 300 400 L 300 300 L 600 300 L 600 200 L 750 200' fill='none' stroke='#f97316' stroke-width='5' stroke-linecap='round'/>
      <circle cx='150' cy='400' r='10' fill='#f97316' stroke='#ffffff' stroke-width='2'/>
      <circle cx='750' cy='200' r='10' fill='#10b981' stroke='#ffffff' stroke-width='2'/>

      <!-- Courier Dots on Map -->
      ${[
        { cx: 300, cy: 300, name: 'VAN #42' },
        { cx: 450, cy: 100, name: 'MOTO #18' },
        { cx: 600, cy: 400, name: 'VAN #09' },
        { cx: 750, cy: 300, name: 'CARGO #02' },
      ].map(c => `
        <circle cx='${c.cx}' cy='${c.cy}' r='7' fill='#facc15'/>
        <rect x='${c.cx + 10}' y='${c.cy - 10}' width='75' height='20' rx='4' fill='#0e1624' stroke='rgba(255,255,255,0.1)'/>
        <text x='${c.cx + 15}' y='${c.cy + 4}' fill='#ffffff' font-family='monospace' font-size='9'>${c.name}</text>
      `).join('')}

      <!-- Right Panel: Dispatch Log -->
      <rect x='915' width='465' height='545' rx='12' fill='#080e18' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='940' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>AI DISPATCH EVENT QUEUE</text>

      <g transform='translate(940, 65)'>
        <text x='0' y='20' fill='#f97316' font-family='monospace' font-size='11'>[GEO_DISPATCH_ORCHESTRATOR]</text>
        <text x='0' y='40' fill='#94a3b8' font-family='monospace' font-size='11'>Target: order_8941 • Origin: Downtown Hub</text>
        <text x='0' y='60' fill='#10b981' font-family='monospace' font-size='11'>Assigned to Driver: David K. (ETA 12 min)</text>
        
        <line x1='0' y1='80' x2='415' y2='80' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
        
        <text x='0' y='110' fill='#facc15' font-family='monospace' font-size='11'>[TRAFFIC_CONGESTION_PREDICTOR]</text>
        <text x='0' y='130' fill='#94a3b8' font-family='monospace' font-size='11'>Rerouted 18 units around 5th Ave closure</text>
        <text x='0' y='150' fill='#38bdf8' font-family='monospace' font-size='11'>Saved 142 total courier transit minutes</text>

        <rect y='190' width='415' height='260' rx='8' fill='#0e1624' stroke='rgba(249, 115, 22, 0.2)' stroke-width='1'/>
        <text x='15' y='225' fill='#fb923c' font-family='monospace' font-size='12' font-weight='700'>KAFKA EVENT INGESTION RATE</text>
        <text x='15' y='255' fill='#ffffff' font-family='monospace' font-size='24' font-weight='700'>85,000 GPS Pings/sec</text>
        <text x='15' y='285' fill='#94a3b8' font-family='monospace' font-size='12'>Zero-Lag Redis GeoSpatial Ring Buffer</text>
        <text x='15' y='325' fill='#10b981' font-family='monospace' font-size='11'>✓ WebSockets broadcasted to 28k mobile apps</text>
        <text x='15' y='350' fill='#10b981' font-family='monospace' font-size='11'>✓ ETA updated with 99.8% precision</text>
        <text x='15' y='375' fill='#38bdf8' font-family='monospace' font-size='11'>✓ Fuel efficiency score +14.8% optimized</text>
      </g>
    </g>
  </g>
</svg>`;
}

function getInnoTechSvg() {
  return `
<svg width='1600' height='900' viewBox='0 0 1600 900' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bg_inno' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#080a1e'/>
      <stop offset='50%' stop-color='#121838'/>
      <stop offset='100%' stop-color='#040612'/>
    </linearGradient>
    <radialGradient id='violetGlow' cx='85%' cy='20%' r='50%'>
      <stop offset='0%' stop-color='rgba(139, 92, 246, 0.25)'/>
      <stop offset='100%' stop-color='rgba(139, 92, 246, 0)'/>
    </radialGradient>
    <radialGradient id='skyGlow' cx='15%' cy='80%' r='50%'>
      <stop offset='0%' stop-color='rgba(56, 189, 248, 0.2)'/>
      <stop offset='100%' stop-color='rgba(56, 189, 248, 0)'/>
    </radialGradient>
  </defs>

  <rect width='1600' height='900' fill='url(#bg_inno)'/>
  <rect width='1600' height='900' fill='url(#violetGlow)'/>
  <rect width='1600' height='900' fill='url(#skyGlow)'/>
  ${renderGrid(1600, 900, 50, 0.03)}

  <g transform='translate(80, 50)'>
    <rect width='1440' height='800' rx='16' fill='#0e1329' stroke='rgba(139, 92, 246, 0.25)' stroke-width='1.5'/>
    
    <rect width='1440' height='52' rx='16' fill='#171d3d'/>
    <rect y='36' width='1440' height='16' fill='#171d3d'/>
    <line x1='0' y1='52' x2='1440' y2='52' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    
    <circle cx='35' cy='26' r='6' fill='#ef4444'/>
    <circle cx='58' cy='26' r='6' fill='#f59e0b'/>
    <circle cx='81' cy='26' r='6' fill='#10b981'/>
    
    <text x='120' y='31' fill='#c4b5fd' font-family='monospace' font-size='13' font-weight='600'>INNOTECH // ENTERPRISE B2B WORKFLOW ENGINE &amp; MULTI-TENANT ORCHESTRATOR</text>
    <rect x='1220' y='14' width='190' height='24' rx='6' fill='rgba(139, 92, 246, 0.15)' stroke='#8b5cf6' stroke-width='1'/>
    <text x='1240' y='30' fill='#c084fc' font-family='monospace' font-size='11' font-weight='700'>● 4.2M WORKFLOWS/DAY</text>

    <!-- Top KPIs -->
    <g transform='translate(30, 75)'>
      <rect width='325' height='120' rx='10' fill='#080c1d' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12'>WORKFLOW EXECUTION SPEED</text>
      <text x='25' y='75' fill='#c084fc' font-family='monospace' font-size='32' font-weight='700'>42 ms</text>
      <text x='25' y='100' fill='#10b981' font-family='monospace' font-size='11'>Sub-50ms SLA Guaranteed</text>

      <rect x='350' width='325' height='120' rx='10' fill='#080c1d' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='375' y='35' fill='#64748b' font-family='monospace' font-size='12'>ENTERPRISE TENANTS</text>
      <text x='375' y='75' fill='#38bdf8' font-family='monospace' font-size='32' font-weight='700'>620 +</text>
      <text x='375' y='100' fill='#38bdf8' font-family='monospace' font-size='11'>Row-Level Security Active</text>

      <rect x='700' width='325' height='120' rx='10' fill='#080c1d' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='725' y='35' fill='#64748b' font-family='monospace' font-size='12'>DATABASE REPLICATION LAG</text>
      <text x='725' y='75' fill='#10b981' font-family='monospace' font-size='32' font-weight='700'>0.14 ms</text>
      <text x='725' y='100' fill='#10b981' font-family='monospace' font-size='11'>Aurora Multi-Master Cluster</text>

      <rect x='1050' width='330' height='120' rx='10' fill='#080c1d' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='1075' y='35' fill='#64748b' font-family='monospace' font-size='12'>UPTIME RELIABILITY</text>
      <text x='1075' y='75' fill='#34d399' font-family='monospace' font-size='32' font-weight='700'>99.999%</text>
      <text x='1075' y='100' fill='#34d399' font-family='monospace' font-size='11'>Zero Unplanned Outages</text>
    </g>

    <!-- Node-Based Visual Workflow Canvas -->
    <g transform='translate(30, 220)'>
      <rect width='1380' height='545' rx='12' fill='#080c1d' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='35' y='40' fill='#64748b' font-family='monospace' font-size='13' font-weight='600'>VISUAL RULE-BASED AUTOMATION GRAPH // PIPELINE #924</text>
      
      <!-- Workflow Nodes -->
      <g transform='translate(50, 80)'>
        <!-- Node 1: Webhook Trigger -->
        <rect width='240' height='160' rx='10' fill='#0f1633' stroke='#38bdf8' stroke-width='2'/>
        <text x='25' y='35' fill='#38bdf8' font-family='monospace' font-size='12' font-weight='700'>1. TRIGGER: WEBHOOK</text>
        <text x='25' y='65' fill='#ffffff' font-family='system-ui, sans-serif' font-size='14' font-weight='600'>Inbound Lead Payload</text>
        <text x='25' y='95' fill='#94a3b8' font-family='monospace' font-size='11'>Event: customer.created</text>
        <text x='25' y='125' fill='#10b981' font-family='monospace' font-size='11'>✓ Signature Verified</text>

        <!-- Connector Arrow -->
        <line x1='240' y1='80' x2='320' y2='80' stroke='#38bdf8' stroke-width='3' stroke-dasharray='4'/>

        <!-- Node 2: Data Enricher & Schema -->
        <rect x='320' width='260' height='160' rx='10' fill='#0f1633' stroke='#a855f7' stroke-width='2'/>
        <text x='345' y='35' fill='#c084fc' font-family='monospace' font-size='12' font-weight='700'>2. SCHEMA VALIDATION</text>
        <text x='345' y='65' fill='#ffffff' font-family='system-ui, sans-serif' font-size='14' font-weight='600'>Zod Strict Typecheck</text>
        <text x='345' y='95' fill='#94a3b8' font-family='monospace' font-size='11'>Enriched via Clearbit API</text>
        <text x='345' y='125' fill='#10b981' font-family='monospace' font-size='11'>✓ 100% Validated (1.4ms)</text>

        <!-- Connector Arrow -->
        <line x1='580' y1='80' x2='660' y2='80' stroke='#a855f7' stroke-width='3' stroke-dasharray='4'/>

        <!-- Node 3: Condition Fork -->
        <rect x='660' width='260' height='160' rx='10' fill='#0f1633' stroke='#f59e0b' stroke-width='2'/>
        <text x='685' y='35' fill='#fbbf24' font-family='monospace' font-size='12' font-weight='700'>3. ROUTING LOGIC</text>
        <text x='685' y='65' fill='#ffffff' font-family='system-ui, sans-serif' font-size='14' font-weight='600'>Lead Score &gt;= 80?</text>
        <text x='685' y='95' fill='#94a3b8' font-family='monospace' font-size='11'>Condition: Score is 92</text>
        <text x='685' y='125' fill='#34d399' font-family='monospace' font-size='11'>Route: Enterprise VIP</text>

        <!-- Connector Arrows Branching -->
        <line x1='920' y1='60' x2='1000' y2='40' stroke='#10b981' stroke-width='3'/>
        <line x1='920' y1='100' x2='1000' y2='180' stroke='#38bdf8' stroke-width='3'/>

        <!-- Node 4A: Top Branch (Salesforce Sync) -->
        <rect x='1000' y='-20' width='280' height='130' rx='10' fill='#0f1633' stroke='#10b981' stroke-width='2'/>
        <text x='1025' y='15' fill='#34d399' font-family='monospace' font-size='12' font-weight='700'>4A. SALESFORCE SYNC</text>
        <text x='1025' y='45' fill='#ffffff' font-family='system-ui, sans-serif' font-size='13' font-weight='600'>Create Lead in Sales Cloud</text>
        <text x='1025' y='75' fill='#94a3b8' font-family='monospace' font-size='11'>Apex Trigger Auto-Fired</text>

        <!-- Node 4B: Bottom Branch (Slack VIP Alert) -->
        <rect x='1000' y='140' width='280' height='130' rx='10' fill='#0f1633' stroke='#38bdf8' stroke-width='2'/>
        <text x='1025' y='175' fill='#38bdf8' font-family='monospace' font-size='12' font-weight='700'>4B. SLACK INSTANT ALERT</text>
        <text x='1025' y='205' fill='#ffffff' font-family='system-ui, sans-serif' font-size='13' font-weight='600'>Notify #enterprise-deals</text>
        <text x='1025' y='235' fill='#94a3b8' font-family='monospace' font-size='11'>Dispatched to Mobile App</text>
      </g>

      <!-- Terminal Output Below -->
      <g transform='translate(50, 360)'>
        <rect width='1280' height='140' rx='8' fill='#04060f' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
        <text x='25' y='35' fill='#10b981' font-family='monospace' font-size='12'>[SUCCESS 200] Workflow instance wf_9084 executed in 38ms.</text>
        <text x='25' y='65' fill='#94a3b8' font-family='monospace' font-size='12'>All 4 micro-services replied with HTTP 200 OK. Distributed tracing correlation ID: cc-trace-98412-f0</text>
        <text x='25' y='95' fill='#c084fc' font-family='monospace' font-size='12'>Encrypted backup snapshot committed to multi-region cloud object storage.</text>
      </g>
    </g>
  </g>
</svg>`;
}

function getZenithSvg() {
  return `
<svg width='1600' height='900' viewBox='0 0 1600 900' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bg_zenith' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#06060f'/>
      <stop offset='50%' stop-color='#100d24'/>
      <stop offset='100%' stop-color='#04040a'/>
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

  <rect width='1600' height='900' fill='url(#bg_zenith)'/>
  <rect width='1600' height='900' fill='url(#purpleGlow)'/>
  <rect width='1600' height='900' fill='url(#amberGlow)'/>
  ${renderGrid(1600, 900, 50, 0.03)}

  <g transform='translate(80, 50)'>
    <rect width='1440' height='800' rx='16' fill='#0c0b1f' stroke='rgba(168, 85, 247, 0.25)' stroke-width='1.5'/>
    
    <rect width='1440' height='52' rx='16' fill='#151233'/>
    <rect y='36' width='1440' height='16' fill='#151233'/>
    <line x1='0' y1='52' x2='1440' y2='52' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    
    <circle cx='35' cy='26' r='6' fill='#ef4444'/>
    <circle cx='58' cy='26' r='6' fill='#f59e0b'/>
    <circle cx='81' cy='26' r='6' fill='#10b981'/>
    
    <text x='120' y='31' fill='#d8b4fe' font-family='monospace' font-size='13' font-weight='600'>ZENITH // INSTITUTIONAL WEB3 ASSET MANAGEMENT &amp; MULTI-CHAIN RPC TERMINAL</text>
    <rect x='1230' y='14' width='180' height='24' rx='6' fill='rgba(168, 85, 247, 0.15)' stroke='#a855f7' stroke-width='1'/>
    <text x='1250' y='30' fill='#c084fc' font-family='monospace' font-size='11' font-weight='700'>● RPC NODES SYNCED</text>

    <!-- Top Stats -->
    <g transform='translate(30, 75)'>
      <rect width='325' height='120' rx='10' fill='#070614' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12'>TOTAL VALUE TRACKED</text>
      <text x='25' y='75' fill='#a855f7' font-family='monospace' font-size='32' font-weight='700'>$148,920,400</text>
      <text x='25' y='100' fill='#10b981' font-family='monospace' font-size='11'>▲ +24.8% Multi-Chain Yield</text>

      <rect x='350' width='325' height='120' rx='10' fill='#070614' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='375' y='35' fill='#64748b' font-family='monospace' font-size='12'>RPC CALL LATENCY</text>
      <text x='375' y='75' fill='#38bdf8' font-family='monospace' font-size='32' font-weight='700'>12.4 ms</text>
      <text x='375' y='100' fill='#38bdf8' font-family='monospace' font-size='11'>Dedicated WebSocket Nodes</text>

      <rect x='700' width='325' height='120' rx='10' fill='#070614' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='725' y='35' fill='#64748b' font-family='monospace' font-size='12'>HARDWARE MULTISIG</text>
      <text x='725' y='75' fill='#f59e0b' font-family='monospace' font-size='32' font-weight='700'>4 of 7 Safe</text>
      <text x='725' y='100' fill='#f59e0b' font-family='monospace' font-size='11'>Time-Locked Quorum Active</text>

      <rect x='1050' width='330' height='120' rx='10' fill='#070614' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='1075' y='35' fill='#64748b' font-family='monospace' font-size='12'>SECURITY AUDITS</text>
      <text x='1075' y='75' fill='#10b981' font-family='monospace' font-size='32' font-weight='700'>ZERO Critical</text>
      <text x='1075' y='100' fill='#10b981' font-family='monospace' font-size='11'>Formal Verification Passed</text>
    </g>

    <!-- Multi-Chain Telemetry & Liquidity Curves -->
    <g transform='translate(30, 220)'>
      <rect width='890' height='545' rx='12' fill='#070614' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>LIQUIDITY DEPTH &amp; GAS PRICE TELEMETRY ACROSS CHAINS</text>
      
      <!-- Graph Lines -->
      <path d='M 30 220 Q 200 120, 380 200 T 600 140 T 850 100' fill='none' stroke='#a855f7' stroke-width='3.5'/>
      <path d='M 30 360 Q 240 280, 450 340 T 700 240 T 850 200' fill='none' stroke='#38bdf8' stroke-width='2.5' stroke-dasharray='4'/>
      <path d='M 30 480 Q 180 430, 350 460 T 620 400 T 850 360' fill='none' stroke='#f59e0b' stroke-width='2'/>

      <text x='35' y='180' fill='#a855f7' font-family='monospace' font-size='11' font-weight='700'>ETH MAINNET: LIQUIDITY $92.4M (Gas: 14 Gwei)</text>
      <text x='35' y='320' fill='#38bdf8' font-family='monospace' font-size='11' font-weight='700'>SOLANA HIGH-THROUGHPUT: 3,400 TPS (Latency: 400ms)</text>
      <text x='35' y='440' fill='#f59e0b' font-family='monospace' font-size='11' font-weight='700'>POLYGON zkEVM: FINALITY &lt; 2s (Zero Knowledge Proof)</text>

      <!-- Right Panel: Node Stream -->
      <rect x='915' width='465' height='545' rx='12' fill='#070614' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='940' y='35' fill='#64748b' font-family='monospace' font-size='12' font-weight='600'>RPC WEBSOCKET SUBSCRIPTION LOGS</text>

      <g transform='translate(940, 65)'>
        <text x='0' y='20' fill='#c084fc' font-family='monospace' font-size='11'>[ETH_BLOCK #19,842,109]</text>
        <text x='0' y='40' fill='#94a3b8' font-family='monospace' font-size='11'>Base Fee: 12.8 Gwei • Blob Gas: 1.0 Gwei</text>
        
        <line x1='0' y1='60' x2='415' y2='60' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
        
        <text x='0' y='90' fill='#38bdf8' font-family='monospace' font-size='11'>[SMART_CONTRACT_EVENT]</text>
        <text x='0' y='110' fill='#94a3b8' font-family='monospace' font-size='11'>Swap(tokenIn=USDC, tokenOut=WETH, amt=250k)</text>
        <text x='0' y='130' fill='#10b981' font-family='monospace' font-size='11'>Routing: Uniswap v3 pool #0x88e6a</text>

        <rect y='170' width='415' height='280' rx='8' fill='#0c0b1f' stroke='rgba(168, 85, 247, 0.2)' stroke-width='1'/>
        <text x='15' y='205' fill='#d8b4fe' font-family='monospace' font-size='12' font-weight='700'>CRYPTOGRAPHIC VERIFICATION</text>
        <text x='15' y='235' fill='#ffffff' font-family='monospace' font-size='12'>Signature: Ed25519 Verified</text>
        <text x='15' y='265' fill='#94a3b8' font-family='monospace' font-size='11'>Merkle Proof Root: 0x9f4a...21c8</text>
        <text x='15' y='295' fill='#10b981' font-family='monospace' font-size='11'>✓ State Transition verified across 3 RPC clusters</text>
        <text x='15' y='325' fill='#10b981' font-family='monospace' font-size='11'>✓ Anti-MEV private transaction pool active</text>
        <text x='15' y='355' fill='#38bdf8' font-family='monospace' font-size='11'>✓ Cold storage offline signature ready</text>
      </g>
    </g>
  </g>
</svg>`;
}

function getAeternaSvg() {
  return `
<svg width='1600' height='900' viewBox='0 0 1600 900' xmlns='http://www.w3.org/2000/svg'>
  <defs>
    <linearGradient id='bg_aeterna' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#0a0808'/>
      <stop offset='50%' stop-color='#191114'/>
      <stop offset='100%' stop-color='#060506'/>
    </linearGradient>
    <radialGradient id='roseGlow' cx='85%' cy='20%' r='50%'>
      <stop offset='0%' stop-color='rgba(244, 63, 94, 0.22)'/>
      <stop offset='100%' stop-color='rgba(244, 63, 94, 0)'/>
    </radialGradient>
    <radialGradient id='goldGlow' cx='15%' cy='80%' r='50%'>
      <stop offset='0%' stop-color='rgba(226, 177, 122, 0.2)'/>
      <stop offset='100%' stop-color='rgba(226, 177, 122, 0)'/>
    </radialGradient>
  </defs>

  <rect width='1600' height='900' fill='url(#bg_aeterna)'/>
  <rect width='1600' height='900' fill='url(#roseGlow)'/>
  <rect width='1600' height='900' fill='url(#goldGlow)'/>
  ${renderGrid(1600, 900, 50, 0.03)}

  <g transform='translate(80, 50)'>
    <rect width='1440' height='800' rx='16' fill='#120d11' stroke='rgba(226, 177, 122, 0.25)' stroke-width='1.5'/>
    
    <rect width='1440' height='52' rx='16' fill='#1c141a'/>
    <rect y='36' width='1440' height='16' fill='#1c141a'/>
    <line x1='0' y1='52' x2='1440' y2='52' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>
    
    <circle cx='35' cy='26' r='6' fill='#ef4444'/>
    <circle cx='58' cy='26' r='6' fill='#f59e0b'/>
    <circle cx='81' cy='26' r='6' fill='#10b981'/>
    
    <text x='120' y='31' fill='#fbcfe8' font-family='monospace' font-size='13' font-weight='600'>AETERNA // HEADLESS LUXURY COMMERCE &amp; WEBGL 3D CONFIGURATOR</text>
    <rect x='1230' y='14' width='180' height='24' rx='6' fill='rgba(226, 177, 122, 0.15)' stroke='#e2b17a' stroke-width='1'/>
    <text x='1250' y='30' fill='#e2b17a' font-family='monospace' font-size='11' font-weight='700'>● 60 FPS WEBGL LIVE</text>

    <!-- Top KPIs -->
    <g transform='translate(30, 75)'>
      <rect width='325' height='120' rx='10' fill='#0a0709' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#94a3b8' font-family='monospace' font-size='12'>TIME TO FIRST BYTE (TTFB)</text>
      <text x='25' y='75' fill='#e2b17a' font-family='monospace' font-size='32' font-weight='700'>38 ms</text>
      <text x='25' y='100' fill='#10b981' font-family='monospace' font-size='11'>Edge EdgeWorkers Cache</text>

      <rect x='350' width='325' height='120' rx='10' fill='#0a0709' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='375' y='35' fill='#94a3b8' font-family='monospace' font-size='12'>CHECKOUT CONVERSION</text>
      <text x='375' y='75' fill='#f43f5e' font-family='monospace' font-size='32' font-weight='700'>4.82 %</text>
      <text x='375' y='100' fill='#f43f5e' font-family='monospace' font-size='11'>▲ +68% Above Luxury Avg</text>

      <rect x='700' width='325' height='120' rx='10' fill='#0a0709' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='725' y='35' fill='#94a3b8' font-family='monospace' font-size='12'>3D MODEL ASSET LOAD</text>
      <text x='725' y='75' fill='#38bdf8' font-family='monospace' font-size='32' font-weight='700'>480 KB</text>
      <text x='725' y='100' fill='#38bdf8' font-family='monospace' font-size='11'>Draco Mesh Compression</text>

      <rect x='1050' width='330' height='120' rx='10' fill='#0a0709' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='1075' y='35' fill='#94a3b8' font-family='monospace' font-size='12'>GLOBAL CDN HIT RATIO</text>
      <text x='1075' y='75' fill='#10b981' font-family='monospace' font-size='32' font-weight='700'>99.4 %</text>
      <text x='1075' y='100' fill='#10b981' font-family='monospace' font-size='11'>Cloudflare Enterprise Edge</text>
    </g>

    <!-- 3D Configurator Stage & GraphQL Inspector -->
    <g transform='translate(30, 220)'>
      <!-- 3D Showcase Window -->
      <rect width='890' height='545' rx='12' fill='#0a0709' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='25' y='35' fill='#94a3b8' font-family='monospace' font-size='12' font-weight='600'>THREE.JS / WEBGL INTERACTIVE TIMEPIECE SHOWCASE</text>
      
      <!-- Central Luxury Chronograph Vector Wireframe -->
      <g transform='translate(445, 260)'>
        <circle cx='0' cy='0' r='140' fill='none' stroke='#e2b17a' stroke-width='4'/>
        <circle cx='0' cy='0' r='125' fill='#171015' stroke='rgba(226, 177, 122, 0.4)' stroke-width='2'/>
        
        <!-- Watch Indices -->
        ${Array.from({length: 12}, (_, i) => {
          const angle = (i * 30) * Math.PI / 180;
          const x1 = Math.sin(angle) * 105;
          const y1 = -Math.cos(angle) * 105;
          const x2 = Math.sin(angle) * 120;
          const y2 = -Math.cos(angle) * 120;
          return `<line x1='${x1}' y1='${y1}' x2='${x2}' y2='${y2}' stroke='#e2b17a' stroke-width='3'/>`;
        }).join('')}

        <!-- Watch Hands -->
        <line x1='0' y1='0' x2='45' y2='-55' stroke='#ffffff' stroke-width='4' stroke-linecap='round'/>
        <line x1='0' y1='0' x2='-80' y2='-20' stroke='#e2b17a' stroke-width='3' stroke-linecap='round'/>
        <line x1='0' y1='0' x2='60' y2='40' stroke='#f43f5e' stroke-width='1.5'/>
        <circle cx='0' cy='0' r='6' fill='#e2b17a'/>
        
        <text x='0' y='50' text-anchor='middle' fill='#e2b17a' font-family='serif' font-size='14' font-weight='600'>A E T E R N A</text>
        <text x='0' y='68' text-anchor='middle' fill='#94a3b8' font-family='monospace' font-size='9'>CHRONOMETER 300M</text>
      </g>

      <!-- Bottom Interactive Material Switcher -->
      <g transform='translate(25, 460)'>
        <rect width='840' height='60' rx='8' fill='#171015' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
        <text x='25' y='35' fill='#94a3b8' font-family='monospace' font-size='12'>MATERIAL SHADER:</text>
        
        <rect x='160' y='14' width='140' height='32' rx='6' fill='#e2b17a' fill-opacity='0.2' stroke='#e2b17a' stroke-width='1.5'/>
        <text x='180' y='35' fill='#e2b17a' font-family='monospace' font-size='11' font-weight='700'>● 18K ROSE GOLD</text>

        <rect x='320' y='14' width='140' height='32' rx='6' fill='#0e0a0d' stroke='rgba(255,255,255,0.1)' stroke-width='1'/>
        <text x='345' y='35' fill='#94a3b8' font-family='monospace' font-size='11'>TITANIUM GRADE 5</text>

        <rect x='480' y='14' width='140' height='32' rx='6' fill='#0e0a0d' stroke='rgba(255,255,255,0.1)' stroke-width='1'/>
        <text x='505' y='35' fill='#94a3b8' font-family='monospace' font-size='11'>FORGED CARBON</text>

        <text x='700' y='35' fill='#10b981' font-family='monospace' font-size='11'>PBR Physics OK</text>
      </g>

      <!-- Right GraphQL Schema Inspector -->
      <rect x='915' width='465' height='545' rx='12' fill='#0a0709' stroke='rgba(255,255,255,0.06)' stroke-width='1'/>
      <text x='940' y='35' fill='#94a3b8' font-family='monospace' font-size='12' font-weight='600'>SHOPIFY STOREFRONT GRAPHQL API</text>

      <g transform='translate(940, 65)'>
        <text x='0' y='20' fill='#e2b17a' font-family='monospace' font-size='11'>query GetProductWith3D($handle: String!) {</text>
        <text x='15' y='40' fill='#ffffff' font-family='monospace' font-size='11'>  product(handle: $handle) {</text>
        <text x='30' y='60' fill='#94a3b8' font-family='monospace' font-size='11'>    title, priceRange { minVariantPrice }</text>
        <text x='30' y='80' fill='#f43f5e' font-family='monospace' font-size='11'>    media(first: 5) {</text>
        <text x='45' y='100' fill='#38bdf8' font-family='monospace' font-size='11'>      ... on Model3d { sources { url } }</text>
        <text x='30' y='120' fill='#f43f5e' font-family='monospace' font-size='11'>    }</text>
        <text x='15' y='140' fill='#ffffff' font-family='monospace' font-size='11'>  }</text>
        <text x='0' y='160' fill='#e2b17a' font-family='monospace' font-size='11'>}</text>

        <line x1='0' y1='180' x2='415' y2='180' stroke='rgba(255,255,255,0.08)' stroke-width='1'/>

        <rect y='200' width='415' height='250' rx='8' fill='#171015' stroke='rgba(226, 177, 122, 0.2)' stroke-width='1'/>
        <text x='15' y='235' fill='#e2b17a' font-family='monospace' font-size='12' font-weight='700'>HYDROGEN EDGE RUNTIME</text>
        <text x='15' y='265' fill='#ffffff' font-family='monospace' font-size='11'>Edge Serverless Hydration in 14ms</text>
        <text x='15' y='295' fill='#94a3b8' font-family='monospace' font-size='11'>Cart Mutation Latency: 28ms</text>
        <text x='15' y='325' fill='#10b981' font-family='monospace' font-size='11'>✓ International currencies auto-converted</text>
        <text x='15' y='355' fill='#10b981' font-family='monospace' font-size='11'>✓ Tax jar real-time duty calculated</text>
        <text x='15' y='385' fill='#38bdf8' font-family='monospace' font-size='11'>✓ Apple Pay one-click token ready</text>
      </g>
    </g>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// EXECUTE GENERATION
// -------------------------------------------------------------

async function run() {
  const portfolioItems = [
    { name: 'project_finvantage.jpg', svg: getFinvantageSvg() },
    { name: 'project_cloudsphere.jpg', svg: getCloudSphereSvg() },
    { name: 'project_auramed.jpg', svg: getAuraMedSvg() },
    { name: 'project_urbanrider.jpg', svg: getUrbanRiderSvg() },
    { name: 'project_innotech.jpg', svg: getInnoTechSvg() },
    { name: 'project_zenith.jpg', svg: getZenithSvg() },
    { name: 'project_aeterna.jpg', svg: getAeternaSvg() },
  ];

  for (const item of portfolioItems) {
    const dest = path.join(OUTPUT_DIR, item.name);
    await sharp(Buffer.from(item.svg))
      .jpeg({ quality: 92 })
      .toFile(dest);
    const sz = fs.statSync(dest).size;
    console.log(`✓ Rendered ${item.name} (${sz} bytes)`);
  }
}

run().catch(err => {
  console.error('Error running portfolio generators:', err);
  process.exit(1);
});
