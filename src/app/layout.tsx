import type { Metadata, Viewport } from "next";
import { Newsreader, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/layout/CookieConsent";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_CONFIG, getOrganizationJsonLd } from "@/lib/seo-config";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap"
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap"
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  display: "swap"
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Cloud Consultancy | Cloud Architecture, Web & App Engineering",
    template: `%s | ${SITE_CONFIG.name}`
  },
  description: SITE_CONFIG.description,
  authors: [{ name: SITE_CONFIG.author, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: "Cloud Consultancy | Cloud Architecture, Web & App Engineering",
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/images/og_preview_banner.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} — Cloud Architecture, Web & App Engineering`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Consultancy | Cloud Architecture, Web & App Engineering",
    description: SITE_CONFIG.description,
    images: ["/images/og_preview_banner.jpg"],
    creator: "@onlinedigitalsol"
  },
  icons: {
    icon: "/brand/cloud-consultancy-icon.png",
    apple: "/brand/cloud-consultancy-icon.png"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = getOrganizationJsonLd();
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_CONFIG.name,
    "url": SITE_CONFIG.url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_CONFIG.url}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${newsreader.variable} ${publicSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-white text-[#0F172A] selection:bg-[#2563EB] selection:text-white"
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#2563EB] focus:text-white focus:font-semibold focus:rounded focus:outline-none"
        >
          Skip to content
        </a>
        <JsonLd id="schema-org" data={orgSchema} />
        <JsonLd id="schema-website" data={websiteSchema} />
        <Navbar />
        <main id="main-content" className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
