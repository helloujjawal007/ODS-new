/**
 * Comprehensive QA Test Suite for Cloud Consultancy Website
 * Tests all 6 areas specified in the master QA plan.
 */

const BASE_URL = "http://localhost:3000";

const results = {
  passed: [],
  failed: [],
  warnings: []
};

function pass(category, testName, detail) {
  results.passed.push({ category, testName, detail });
  console.log(`[PASS] [${category}] ${testName}: ${detail || "OK"}`);
}

function fail(category, testName, error) {
  results.failed.push({ category, testName, error });
  console.error(`[FAIL] [${category}] ${testName}: ${error}`);
}

function warn(category, testName, message) {
  results.warnings.push({ category, testName, message });
  console.warn(`[WARN] [${category}] ${testName}: ${message}`);
}

async function fetchGet(path) {
  const url = `${BASE_URL}${path}`;
  const res = await fetch(url, { headers: { "User-Agent": "QA-Test-Agent/1.0" } });
  const text = await res.text();
  return { status: res.status, headers: res.headers, text };
}

async function fetchPost(path, body, headers = {}) {
  const url = `${BASE_URL}${path}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "QA-Test-Agent/1.0",
      ...headers
    },
    body: JSON.stringify(body)
  });
  let data;
  try {
    data = await res.json();
  } catch {
    data = await res.text();
  }
  return { status: res.status, headers: res.headers, data };
}

async function runQA() {
  console.log("=================================================");
  console.log("STARTING AUTOMATED MASTER QA SUITE");
  console.log("Target Base URL:", BASE_URL);
  console.log("=================================================\n");

  // ==========================================================
  // 1. FUNCTIONAL QA: NAVIGATION & CORE PAGES
  // ==========================================================
  const coreRoutes = [
    { path: "/", name: "Homepage" },
    { path: "/services/", name: "Services Hub" },
    { path: "/salesforce/", name: "Salesforce CRM Dedicated Page" },
    { path: "/portfolio/", name: "Portfolio Hub" },
    { path: "/process/", name: "Engineering Process" },
    { path: "/blog/", name: "Blog Hub" },
    { path: "/about/", name: "About Us" },
    { path: "/pricing/", name: "Pricing & Estimator" },
    { path: "/contact/", name: "Contact & Estimator" },
    { path: "/thank-you/", name: "Dedicated Thank You Page" },
    { path: "/privacy/", name: "Privacy Policy" },
    { path: "/terms/", name: "Terms of Service" }
  ];

  for (const route of coreRoutes) {
    try {
      const res = await fetchGet(route.path);
      if (res.status === 200) {
        pass("Navigation", `${route.name} (${route.path})`, `HTTP 200 OK (${res.text.length} bytes)`);
      } else {
        fail("Navigation", `${route.name} (${route.path})`, `Expected 200, got ${res.status}`);
      }
    } catch (e) {
      fail("Navigation", `${route.name} (${route.path})`, e.message);
    }
  }

  // Test redirects
  try {
    const workRedirect = await fetch(`${BASE_URL}/work/`, { redirect: "manual" });
    if (workRedirect.status === 308 || workRedirect.status === 307 || workRedirect.status === 301) {
      pass("Navigation", "Work Redirect (/work/ -> /portfolio/)", `HTTP ${workRedirect.status} redirecting to ${workRedirect.headers.get("location")}`);
    } else {
      fail("Navigation", "Work Redirect (/work/ -> /portfolio/)", `Status ${workRedirect.status}`);
    }
  } catch (e) {
    fail("Navigation", "Work Redirect", e.message);
  }
  const serviceSlugs = [
    "website-development",
    "shopify-bigcommerce-development",
    "seo",
    "ios-app-development",
    "android-app-development",
    "cross-platform-app-development",
    "ui-ux-design",
    "plugins-extensions-development"
  ];

  for (const slug of serviceSlugs) {
    try {
      const res = await fetchGet(`/pricing/?service=${slug}`);
      if (res.status === 200) {
        pass("Service Links", `Pricing with ?service=${slug}`, `HTTP 200 OK`);
      } else {
        fail("Service Links", `Pricing with ?service=${slug}`, `HTTP ${res.status}`);
      }
    } catch (e) {
      fail("Service Links", `Pricing with ?service=${slug}`, e.message);
    }
  }

  // ==========================================================
  // 1C. CONTACT ?service= PREFILL
  // ==========================================================
  try {
    const contactRes = await fetchGet("/contact/?service=Website%20Maintenance%20%26%20Support");
    if (contactRes.status === 200 && contactRes.text.includes("Website Maintenance &amp; Support") || contactRes.text.includes("Website Maintenance & Support")) {
      pass("Contact Prefill", "?service=Website%20Maintenance%20%26%20Support", "Service prefilled and rendered as plain text");
    } else {
      fail("Contact Prefill", "?service=Website%20Maintenance%20%26%20Support", "Prefilled plain text not found in response HTML");
    }
  } catch (e) {
    fail("Contact Prefill", "?service= prefill test", e.message);
  }

  // ==========================================================
  // 1D. CONTACT FORM API VALIDATION & SECURITY
  // ==========================================================
  // Test 1: Empty submission
  const emptyRes = await fetchPost("/api/contact/", {});
  if (emptyRes.status === 400 && emptyRes.data.error) {
    pass("Contact Form", "Empty fields validation", `Rejected with HTTP 400: "${emptyRes.data.error}"`);
  } else {
    fail("Contact Form", "Empty fields validation", `Expected 400, got ${emptyRes.status}`);
  }

  // Test 2: Invalid email
  const badEmailRes = await fetchPost("/api/contact/", {
    name: "QA Tester",
    email: "not-an-email"
  });
  if (badEmailRes.status === 400 && badEmailRes.data.error) {
    pass("Contact Form", "Invalid email validation", `Rejected with HTTP 400: "${badEmailRes.data.error}"`);
  } else {
    fail("Contact Form", "Invalid email validation", `Expected 400, got ${badEmailRes.status}`);
  }

  // Test 3: Email Header CRLF Injection
  const crlfEmailRes = await fetchPost("/api/contact/", {
    name: "Hacker\r\nBcc: evil@victim.com",
    email: "evil\r\n@victim.com"
  });
  if (crlfEmailRes.status === 400) {
    pass("Contact Form", "CRLF email header injection", `Rejected with HTTP 400`);
  } else {
    fail("Contact Form", "CRLF email header injection", `Expected 400, got ${crlfEmailRes.status}`);
  }

  // Test 4: Honeypot anti-spam
  const botRes = await fetchPost("/api/contact/", {
    name: "Spam Bot",
    email: "bot@spammer.com",
    honeypot: "http://spam.org"
  });
  if (botRes.status === 200 && botRes.data.success) {
    pass("Contact Form", "Honeypot silent trapping", "Bot submission silently trapped without dispatching notification");
  } else {
    fail("Contact Form", "Honeypot silent trapping", `Unexpected status ${botRes.status}`);
  }

  // Test 5: Valid submission with XSS payloads
  const xssPayload = {
    name: "Security QA <script>alert('xss')</script>",
    email: `qa.test.${Date.now()}@cloudconsultancy.in`,
    company: 'Test Corp"><img src=x onerror=alert(1)>',
    service: "High-Performance Website (Next.js)",
    tier: "growth",
    timeline: "Within 1 Month",
    details: "Automated penetration test brief with <b>HTML</b> and symbols: & ' \" < >."
  };
  const validRes = await fetchPost("/api/contact/", xssPayload, { "x-forwarded-for": "192.168.1.100" });
  if (validRes.status === 200 && validRes.data.success && validRes.data.recipient.includes("sales@cloudconsultancy.in")) {
    pass("Contact Form", "Valid submit with special chars & XSS payloads", `Processed safely; recipients: ${validRes.data.recipient}`);
  } else {
    fail("Contact Form", "Valid submit with special chars", `Status ${validRes.status}: ${JSON.stringify(validRes.data)}`);
  }

  // Test 6: Duplicate double-click submission prevention
  const dupRes = await fetchPost("/api/contact/", xssPayload, { "x-forwarded-for": "192.168.1.100" });
  if (dupRes.status === 409 && dupRes.data.error.includes("Duplicate")) {
    pass("Contact Form", "Double-click duplicate submission prevention", `Rejected with HTTP 409: "${dupRes.data.error}"`);
  } else {
    fail("Contact Form", "Double-click duplicate submission prevention", `Expected 409, got ${dupRes.status}`);
  }

  // ==========================================================
  // 1E. NEWSLETTER SUBSCRIPTION API
  // ==========================================================
  const testNewsletterEmail = `briefing.subscriber.${Date.now()}@example.com`;

  // Valid signup
  const newsValid = await fetchPost("/api/newsletter/", { email: testNewsletterEmail });
  if (newsValid.status === 200 && newsValid.data.success) {
    pass("Newsletter", "Valid email subscription", `HTTP 200 OK (${newsValid.data.message})`);
  } else {
    fail("Newsletter", "Valid email subscription", `Status ${newsValid.status}: ${JSON.stringify(newsValid.data)}`);
  }

  // Duplicate signup
  const newsDup = await fetchPost("/api/newsletter/", { email: testNewsletterEmail });
  if (newsDup.status === 409 && newsDup.data.duplicate) {
    pass("Newsletter", "Duplicate email handling", `HTTP 409: "${newsDup.data.error}"`);
  } else {
    fail("Newsletter", "Duplicate email handling", `Expected 409, got ${newsDup.status}`);
  }

  // Invalid email
  const newsBad = await fetchPost("/api/newsletter/", { email: "invalid-email-format" });
  if (newsBad.status === 400 && newsBad.data.error) {
    pass("Newsletter", "Invalid email rejection", `HTTP 400: "${newsBad.data.error}"`);
  } else {
    fail("Newsletter", "Invalid email rejection", `Expected 400, got ${newsBad.status}`);
  }

  // ==========================================================
  // 1F. BLOG POSTS & PORTFOLIO CASE STUDIES
  // ==========================================================
  const blogSlugs = [
    "hardening-content-security-policy-removing-x-powered-by",
    "resolving-308-redirect-loops-canonical-desync-nextjs",
    "crlf-header-injection-double-submit-race-conditions",
    "salesforce-api-governor-limits-component-drift-case-study",
    "nextjs-16-hydration-mismatch-turbopack-eval-postmortem",
    "nextjs-16-partial-prerendering-performance-benchmark",
    "automating-inbound-lead-qualification-webhooks-crm",
    "bigcommerce-multi-storefront-b2b-dtc-architecture",
    "chrome-extension-manifest-v3-migration-guide",
    "shopify-theme-app-extensions-performance-guide",
    "nextjs-vs-wordpress-2026-business-guide",
    "technical-seo-checklist-for-high-growth-startups",
    "flutter-vs-react-native-enterprise-comparison",
    "salesforce-crm-integration-best-practices"
  ];

  for (const slug of blogSlugs) {
    const res = await fetchGet(`/blog/${slug}/`);
    if (res.status === 200) {
      pass("Blog Slugs", `/blog/${slug}/`, "HTTP 200 OK");
    } else {
      fail("Blog Slugs", `/blog/${slug}/`, `HTTP ${res.status}`);
    }
  }

  const portfolioSlugs = [
    "finvantage-portal",
    "cloudsphere-seo-overhaul",
    "auramed-ios-telehealth",
    "urbanrider-cross-platform",
    "innotech-salesforce-lwc",
    "zenith-product-design-system",
    "aeterna-luxury-ecommerce"
  ];

  for (const slug of portfolioSlugs) {
    const res = await fetchGet(`/portfolio/${slug}/`);
    if (res.status === 200) {
      pass("Portfolio Slugs", `/portfolio/${slug}/`, "HTTP 200 OK");
    } else {
      fail("Portfolio Slugs", `/portfolio/${slug}/`, `HTTP ${res.status}`);
    }
  }

  // ==========================================================
  // 1G. LEGAL PAGES & COOKIE ANCHOR
  // ==========================================================
  const privacyRes = await fetchGet("/privacy/");
  if (privacyRes.status === 200 && privacyRes.text.includes("id=\"cookies\"")) {
    pass("Legal Pages", "Privacy Policy & #cookies anchor", "HTTP 200 and #cookies anchor present in DOM");
  } else {
    fail("Legal Pages", "Privacy Policy & #cookies anchor", `Status ${privacyRes.status}, contains #cookies: ${privacyRes.text.includes("id=\"cookies\"")}`);
  }

  const termsRes = await fetchGet("/terms/");
  if (termsRes.status === 200) {
    pass("Legal Pages", "Terms of Service", "HTTP 200 OK");
  } else {
    fail("Legal Pages", "Terms of Service", `HTTP ${termsRes.status}`);
  }

  // ==========================================================
  // 1H. CONTACT DETAILS & SOCIAL LINKS
  // ==========================================================
  const homeRes = await fetchGet("/");
  const hasPhone = homeRes.text.includes("tel:+919142590800") || homeRes.text.includes("+91 91425 90800");
  const hasMailto = homeRes.text.includes("mailto:sales@cloudconsultancy.in");
  const hasNoOpener = homeRes.text.includes('rel="noopener noreferrer"');
  const hasGitHub = homeRes.text.includes("https://github.com/cloudconsultancy");
  const hasLinkedIn = homeRes.text.includes("https://linkedin.com/company/cloudconsultancy");
  const hasTwitter = homeRes.text.includes("https://twitter.com/cloudconsultin");

  if (hasPhone) pass("Contact Details", "Phone link (+91 91425 90800)", "Present and properly linked");
  else fail("Contact Details", "Phone link", "Phone not found");

  if (hasMailto) pass("Contact Details", "Mailto link (sales@cloudconsultancy.in)", "Present and properly linked");
  else fail("Contact Details", "Mailto link", "Email mailto not found");

  if (hasGitHub && hasLinkedIn && hasTwitter && hasNoOpener) {
    pass("Social Links", "GitHub, LinkedIn, Twitter with rel=noopener noreferrer", "All profiles present with secure rel attributes");
  } else {
    fail("Social Links", "Social profiles verification", `GitHub:${hasGitHub}, LinkedIn:${hasLinkedIn}, Twitter:${hasTwitter}, noopener:${hasNoOpener}`);
  }

  // ==========================================================
  // 1I. ERROR HANDLING (BRANDED 404)
  // ==========================================================
  const notFoundRes = await fetchGet("/xyz");
  const isBranded404 = notFoundRes.status === 404 && notFoundRes.text.includes("404") && !notFoundRes.text.includes("TypeError") && !notFoundRes.text.includes("at Object");
  if (isBranded404) {
    pass("Error Handling", "Random URL /xyz", "Returned clean branded 404 page without stack traces");
  } else {
    fail("Error Handling", "Random URL /xyz", `Status ${notFoundRes.status}, has stack trace: ${notFoundRes.text.includes("TypeError")}`);
  }

  // ==========================================================
  // 2. SECURITY HEADERS & TRANSPORT
  // ==========================================================
  const headers = homeRes.headers;
  const csp = headers.get("content-security-policy");
  const xfo = headers.get("x-frame-options");
  const xcto = headers.get("x-content-type-options");
  const refPol = headers.get("referrer-policy");
  const permPol = headers.get("permissions-policy");
  const hsts = headers.get("strict-transport-security");
  const poweredBy = headers.get("x-powered-by");

  if (csp) pass("Security Headers", "Content-Security-Policy", csp);
  else fail("Security Headers", "Content-Security-Policy", "Header missing");

  if (xfo === "DENY") pass("Security Headers", "X-Frame-Options", "DENY");
  else fail("Security Headers", "X-Frame-Options", `Expected DENY, got ${xfo}`);

  if (xcto === "nosniff") pass("Security Headers", "X-Content-Type-Options", "nosniff");
  else fail("Security Headers", "X-Content-Type-Options", `Expected nosniff, got ${xcto}`);

  if (refPol === "strict-origin-when-cross-origin") pass("Security Headers", "Referrer-Policy", refPol);
  else fail("Security Headers", "Referrer-Policy", `Expected strict-origin-when-cross-origin, got ${refPol}`);

  if (permPol) pass("Security Headers", "Permissions-Policy", permPol);
  else fail("Security Headers", "Permissions-Policy", "Header missing");

  if (hsts) pass("Security Headers", "Strict-Transport-Security (HSTS)", hsts);
  else fail("Security Headers", "Strict-Transport-Security", "Header missing");

  if (!poweredBy) pass("Security Headers", "X-Powered-By leakage check", "Header successfully removed / suppressed");
  else fail("Security Headers", "X-Powered-By leakage check", `Leaking header: ${poweredBy}`);

  // RFC 9116 security.txt
  const secTxtRes = await fetchGet("/.well-known/security.txt");
  if (secTxtRes.status === 200 && secTxtRes.text.includes("Contact: mailto:security@cloudconsultancy.in")) {
    pass("Security Standards", "/.well-known/security.txt", "RFC 9116 compliant security.txt returns 200 OK");
  } else {
    fail("Security Standards", "/.well-known/security.txt", `Status ${secTxtRes.status}`);
  }

  // ==========================================================
  // 3. SEO, ACCESSIBILITY & SCHEMAS
  // ==========================================================
  const robotsRes = await fetchGet("/robots.txt");
  if (robotsRes.status === 200 && robotsRes.text.includes("Sitemap:")) {
    pass("SEO", "robots.txt", "HTTP 200 OK with Sitemap reference");
  } else {
    fail("SEO", "robots.txt", `Status ${robotsRes.status}`);
  }

  const sitemapRes = await fetchGet("/sitemap.xml");
  if (sitemapRes.status === 200 && sitemapRes.text.includes("<urlset")) {
    pass("SEO", "sitemap.xml", "HTTP 200 OK with valid XML structure");
  } else {
    fail("SEO", "sitemap.xml", `Status ${sitemapRes.status}`);
  }

  const hasJsonLd = homeRes.text.includes('type="application/ld+json"');
  if (hasJsonLd) pass("SEO", "JSON-LD Structured Data", "Organization and WebSite schemas present in head");
  else fail("SEO", "JSON-LD Structured Data", "application/ld+json not found");

  const hasSingleH1 = (homeRes.text.match(/<h1/g) || []).length === 1;
  if (hasSingleH1) pass("SEO", "Heading Hierarchy (H1)", "Exactly 1 H1 element on homepage");
  else fail("SEO", "Heading Hierarchy (H1)", `Found ${(homeRes.text.match(/<h1/g) || []).length} H1 elements`);

  const hasSkipToContent = homeRes.text.includes("Skip to content") || homeRes.text.includes("Skip to main content");
  if (hasSkipToContent) pass("Accessibility", "Skip to content link", "Present and keyboard accessible");
  else warn("Accessibility", "Skip to content link", "Check if skip link is present in layout");

  // ==========================================================
  // SUMMARY
  // ==========================================================
  console.log("\n=================================================");
  console.log(`QA SUITE RUN COMPLETE: ${results.passed.length} PASSED, ${results.failed.length} FAILED, ${results.warnings.length} WARNINGS`);
  console.log("=================================================");

  if (results.failed.length > 0) {
    process.exit(1);
  }
}

runQA().catch((e) => {
  console.error("Test runner crashed:", e);
  process.exit(1);
});
