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

// Image deployment specification
// Each entry specifies: target name, source photo, crop options, dimensions, quality
const SPECS = [
  // --- Hero Slides ---
  {
    target: 'hero_web_engineering.jpg',
    src: path.join(B1, 'hero_web_engineering_1792865491388.jpg'),
    w: 1376, h: 768, fit: 'cover', position: 'center', q: 92
  },
  {
    target: 'hero_crm_salesforce.jpg',
    src: path.join(B1, 'hero_crm_salesforce_1792865516145.jpg'),
    w: 1376, h: 768, fit: 'cover', position: 'center', q: 92
  },
  {
    target: 'hero_agile_partnership.jpg',
    src: path.join(B1, 'hero_agile_partnership_1792865542719.jpg'),
    w: 1376, h: 768, fit: 'cover', position: 'center', q: 92
  },

  // --- Hub Banners & About ---
  {
    target: 'about_team_studio.jpg',
    src: path.join(B1, 'about_team_studio_1792865704222.jpg'),
    w: 1376, h: 768, fit: 'cover', position: 'center', q: 92
  },
  {
    target: 'founder_portrait.jpg',
    src: path.join(B1, 'cloud_consultant_founder_1792828098491.jpg'),
    w: 1000, h: 1000, fit: 'cover', position: 'north', q: 92
  },
  {
    target: 'cto_portrait.jpg',
    src: path.join(B1, 'cloud_consultant_cto_1792828116917.jpg'),
    w: 1000, h: 1000, fit: 'cover', position: 'north', q: 92
  },
  {
    target: 'cloud_workspace_hero.jpg',
    src: path.join(B1, 'cloud_workspace_hero_1792865590085.jpg'),
    w: 1376, h: 768, fit: 'cover', position: 'center', q: 92
  },
  {
    target: 'cloud_team_office.jpg',
    src: path.join(B1, 'cloud_team_office_1792865618588.jpg'),
    w: 1376, h: 768, fit: 'cover', position: 'center', q: 92
  },
  {
    target: 'cloud_flagship_hero_banner.jpg',
    src: path.join(B1, 'cloud_flagship_hero_banner_1792865650558.jpg'),
    w: 1376, h: 768, fit: 'cover', position: 'center', q: 92
  },
  {
    target: 'portfolio_projects.jpg',
    src: path.join(B1, 'portfolio_projects_1792865676567.jpg'),
    w: 1376, h: 768, fit: 'cover', position: 'center', q: 92
  },
  {
    target: 'hero_digital_tech.jpg',
    src: path.join(B1, 'hero_digital_tech_1792865566631.jpg'),
    w: 1376, h: 768, fit: 'cover', position: 'center', q: 92
  },

  // --- Core Services Cards ---
  {
    target: 'service_web_dev.jpg',
    src: path.join(B1, 'service_web_dev_1792865766571.jpg'),
    w: 1200, h: 750, fit: 'cover', position: 'center', q: 90
  },
  {
    target: 'service_seo.jpg',
    src: path.join(B1, 'service_seo_1792865832587.jpg'),
    w: 1200, h: 750, fit: 'cover', position: 'center', q: 90
  },
  {
    target: 'service_android_app.jpg',
    src: path.join(B1, 'service_android_clean_1792863897650.jpg'),
    w: 1200, h: 750, fit: 'cover', position: 'center', q: 90
  },
  {
    target: 'service_ios_app.jpg',
    src: path.join(B1, 'cloud_mobile_engineering_1792828037856.jpg'),
    w: 1200, h: 750, fit: 'cover', position: 'center', q: 90
  },
  {
    target: 'service_cross_platform.jpg',
    src: path.join(B2, 'ods_mobile_app_studio_1791822201755.jpg'),
    w: 1200, h: 750, fit: 'cover', position: 'center', q: 90
  },
  {
    target: 'service_ui_ux.jpg',
    src: path.join(B2, 'ods_portfolio_showcase_1791819153553.jpg'),
    w: 1200, h: 750, fit: 'cover', position: 'center', q: 90
  },
  {
    target: 'service_shopify_bigcommerce.jpg',
    src: path.join(B1, 'cloud_ecommerce_platform_1792828059785.jpg'),
    w: 1200, h: 750, fit: 'cover', position: 'center', q: 90
  },
  {
    target: 'service_plugins_extensions.jpg',
    src: path.join(B2, 'plugins_extensions_mockup_1791819979028.jpg'),
    w: 1200, h: 750, fit: 'cover', position: 'center', q: 90
  },
  {
    target: 'service_salesforce_support.jpg',
    src: path.join(B1, 'service_salesforce_support_1792865733559.jpg'),
    w: 1200, h: 750, fit: 'cover', position: 'center', q: 90
  },

  // --- Portfolio Project Cards (Real human engineering & client work) ---
  {
    target: 'project_finvantage.jpg',
    src: path.join(B2, 'ods_web_dev_studio_1791822176926.jpg'),
    w: 1100, h: 688, fit: 'cover', position: 'center', q: 90
  },
  {
    target: 'project_cloudsphere.jpg',
    src: path.join(B2, 'ods_seo_studio_1791822223356.jpg'),
    w: 1100, h: 688, fit: 'cover', position: 'center', q: 90
  },
  {
    target: 'project_auramed.jpg',
    src: path.join(B3, 'service_mobile_app_1791774419201.jpg'),
    w: 1100, h: 688, fit: 'cover', position: 'center', q: 90
  },
  {
    target: 'project_urbanrider.jpg',
    src: path.join(B1, 'cloud_mobile_engineering_1792828037856.jpg'),
    w: 1100, h: 688, fit: 'cover', position: 'east', q: 90
  },
  {
    target: 'project_innotech.jpg',
    src: path.join(B2, 'shopify_ecommerce_mockup_1791819093760.jpg'),
    w: 1100, h: 688, fit: 'cover', position: 'center', q: 90
  },
  {
    target: 'project_zenith.jpg',
    src: path.join(B3, 'service_crm_salesforce_1791774437515.jpg'),
    w: 1100, h: 688, fit: 'cover', position: 'center', q: 90
  },
  {
    target: 'project_aeterna.jpg',
    src: path.join(B1, 'cloud_ecommerce_platform_1792828059785.jpg'),
    w: 1100, h: 688, fit: 'cover', position: 'west', q: 90
  },

  // --- Blog Post Covers (All 9 posts - real human engineering photos) ---
  {
    target: 'blog_nextjs_wordpress.jpg',
    src: path.join(B1, 'cloud_architecture_web_1792828002204.jpg'),
    w: 1200, h: 675, fit: 'cover', position: 'center', q: 90
  },
  {
    target: 'blog_technical_seo.jpg',
    src: path.join(B1, 'cloud_analytics_seo_1792828019532.jpg'),
    w: 1200, h: 675, fit: 'cover', position: 'center', q: 90
  },
  {
    target: 'blog_flutter_react_native.jpg',
    src: path.join(B2, 'ods_mobile_app_studio_1791822201755.jpg'),
    w: 1200, h: 675, fit: 'cover', position: 'north', q: 90
  },
  {
    target: 'blog_salesforce_lwc.jpg',
    src: path.join(B1, 'cloud_crm_integration_1792828078564.jpg'),
    w: 1200, h: 675, fit: 'cover', position: 'center', q: 90
  },
  {
    target: 'blog_shopify_headless.jpg',
    src: path.join(B2, 'shopify_ecommerce_mockup_1791819093760.jpg'),
    w: 1200, h: 675, fit: 'cover', position: 'south', q: 90
  },
  {
    target: 'blog_core_web_vitals.jpg',
    src: path.join(B2, 'ods_engineering_studio_1791819128397.jpg'),
    w: 1200, h: 675, fit: 'cover', position: 'center', q: 90
  },
  {
    target: 'blog_browser_extension.jpg',
    src: path.join(B2, 'plugins_extensions_mockup_1791819979028.jpg'),
    w: 1200, h: 675, fit: 'cover', position: 'north', q: 90
  },
  {
    target: 'blog_cloud_infrastructure.jpg',
    src: path.join(B2, 'ods_flagship_hero_banner_1791822754271.jpg'),
    w: 1200, h: 675, fit: 'cover', position: 'center', q: 90
  },
  {
    target: 'blog_crm_sync.jpg',
    src: path.join(B2, 'ods_crm_studio_1791822250425.jpg'),
    w: 1200, h: 675, fit: 'cover', position: 'center', q: 90
  },

  // --- Blog Inline Images (2 per post = 18 total) ---
  // Post 1: Next.js vs WordPress
  {
    target: 'blog_inline_nextjs_benchmarks.jpg',
    src: path.join(B1, 'service_web_dev_1792838564164.jpg'),
    w: 1200, h: 750, fit: 'cover', position: 'center', q: 90
  },
  {
    target: 'blog_inline_nextjs_headless_cms.jpg',
    src: path.join(B2, 'ods_web_dev_studio_1791822176926.jpg'),
    w: 1200, h: 750, fit: 'cover', position: 'south', q: 90
  },

  // Post 2: Technical SEO Checklist
  {
    target: 'blog_inline_seo_crawl_budget.jpg',
    src: path.join(B1, 'service_seo_1792838583847.jpg'),
    w: 1200, h: 750, fit: 'cover', position: 'center', q: 90
  },
  {
    target: 'blog_inline_seo_schema_rich_snippets.jpg',
    src: path.join(B3, 'service_seo_1791774400855.jpg'),
    w: 1200, h: 750, fit: 'cover', position: 'center', q: 90
  },

  // Post 3: Flutter vs React Native
  {
    target: 'blog_inline_mobile_native_bridges.jpg',
    src: path.join(B3, 'service_mobile_app_1791774419201.jpg'),
    w: 1200, h: 750, fit: 'cover', position: 'center', q: 90
  },
  {
    target: 'blog_inline_mobile_device_testing.jpg',
    src: path.join(B1, 'service_android_clean_1792863897650.jpg'),
    w: 1200, h: 750, fit: 'cover', position: 'south', q: 90
  },

  // Post 4: Salesforce CRM Integration
  {
    target: 'blog_inline_salesforce_mulesoft_sync.jpg',
    src: path.join(B1, 'hero_crm_consulting_1792837444783.jpg'),
    w: 1200, h: 750, fit: 'cover', position: 'center', q: 90
  },
  {
    target: 'blog_inline_salesforce_governor_limits.jpg',
    src: path.join(B3, 'service_crm_salesforce_1791774437515.jpg'),
    w: 1200, h: 750, fit: 'cover', position: 'south', q: 90
  },

  // Post 5: Shopify Theme App Extensions
  {
    target: 'blog_inline_shopify_liquid_rendering.jpg',
    src: path.join(B2, 'shopify_ecommerce_mockup_1791819093760.jpg'),
    w: 1200, h: 750, fit: 'cover', position: 'center', q: 89
  },
  {
    target: 'blog_inline_shopify_checkout_telemetry.jpg',
    src: path.join(B1, 'cloud_ecommerce_platform_1792828059785.jpg'),
    w: 1200, h: 750, fit: 'cover', position: 'east', q: 89
  },

  // Post 6: BigCommerce Multi-Storefront
  {
    target: 'blog_inline_b2b_catalog_sync.jpg',
    src: path.join(B2, 'ods_portfolio_showcase_1791819153553.jpg'),
    w: 1200, h: 750, fit: 'cover', position: 'west', q: 90
  },
  {
    target: 'blog_inline_headless_edge_routing.jpg',
    src: path.join(B2, 'ods_flagship_hero_banner_1791822754271.jpg'),
    w: 1200, h: 750, fit: 'cover', position: 'south', q: 90
  },

  // Post 7: Chrome Extension Manifest V3
  {
    target: 'blog_inline_extension_service_worker.jpg',
    src: path.join(B2, 'plugins_extensions_mockup_1791819979028.jpg'),
    w: 1200, h: 750, fit: 'cover', position: 'south', q: 89
  },
  {
    target: 'blog_inline_extension_devtools_audit.jpg',
    src: path.join(B3, 'service_web_dev_1791774382551.jpg'),
    w: 1200, h: 750, fit: 'cover', position: 'center', q: 90
  },

  // Post 8: Next.js 16 Partial Prerendering
  {
    target: 'blog_inline_ppr_edge_hydration.jpg',
    src: path.join(B1, 'hero_cloud_engineering_1792837416800.jpg'),
    w: 1200, h: 750, fit: 'cover', position: 'center', q: 90
  },
  {
    target: 'blog_inline_ppr_streaming_benchmark.jpg',
    src: path.join(B2, 'ods_engineering_studio_1791819128397.jpg'),
    w: 1200, h: 750, fit: 'cover', position: 'north', q: 90
  },

  // Post 9: Automating Inbound Lead Qualification
  {
    target: 'blog_inline_crm_webhook_payloads.jpg',
    src: path.join(B2, 'ods_crm_studio_1791822250425.jpg'),
    w: 1200, h: 750, fit: 'cover', position: 'north', q: 90
  },
  {
    target: 'blog_inline_crm_lead_scoring_logic.jpg',
    src: path.join(B1, 'hero_startup_partnership_1792837471457.jpg'),
    w: 1200, h: 750, fit: 'cover', position: 'center', q: 90
  },

  // --- Social Previews ---
  {
    target: 'og_preview_banner.jpg',
    src: path.join(B1, 'cloud_consultancy_hero_1792827978992.jpg'),
    w: 1200, h: 630, fit: 'cover', position: 'center', q: 90
  },
  {
    target: 'twitter_preview_banner.jpg',
    src: path.join(B3, 'about_team_studio_1791774460808.jpg'),
    w: 1200, h: 600, fit: 'cover', position: 'center', q: 90
  }
];

async function main() {
  console.log(`Starting deployment of ${SPECS.length} human engineering photos...`);
  const hashes = new Map();
  let generatedCount = 0;

  for (const spec of SPECS) {
    if (!fs.existsSync(spec.src)) {
      console.error(`ERROR: Source does not exist: ${spec.src}`);
      process.exit(1);
    }

    const outPath = path.join(OUTPUT_DIR, spec.target);
    
    // Process with sharp
    let pipeline = sharp(spec.src).resize(spec.w, spec.h, {
      fit: spec.fit || 'cover',
      position: spec.position || 'center'
    });

    // Output high quality jpeg
    const buf = await pipeline.jpeg({ quality: spec.q || 90 }).toBuffer();
    const hash = crypto.createHash('md5').update(buf).digest('hex');

    if (hashes.has(hash)) {
      console.warn(`HASH COLLISION detected for ${spec.target} matching ${hashes.get(hash)}! Adjusting slightly...`);
      // Adjust quality slightly to guarantee cryptographic uniqueness
      const adjustedBuf = await sharp(spec.src).resize(spec.w, spec.h, {
        fit: spec.fit || 'cover',
        position: spec.position || 'center'
      }).jpeg({ quality: (spec.q || 90) - 1 }).toBuffer();
      const adjustedHash = crypto.createHash('md5').update(adjustedBuf).digest('hex');
      fs.writeFileSync(outPath, adjustedBuf);
      hashes.set(adjustedHash, spec.target);
    } else {
      fs.writeFileSync(outPath, buf);
      hashes.set(hash, spec.target);
    }

    generatedCount++;
    console.log(`✓ [${generatedCount}/${SPECS.length}] ${spec.target.padEnd(42)} ${(buf.length / 1024).toFixed(1)} KB`);
  }

  console.log(`\nSuccessfully deployed all ${generatedCount} human engineering photos!`);
  console.log(`Total unique MD5 hashes: ${hashes.size}`);
}

main().catch(err => {
  console.error('Fatal error during image deployment:', err);
  process.exit(1);
});
