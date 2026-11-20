import { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCATIONS, getLocationBySlug } from "@/lib/locations-data";
import LocationDetailPage from "./LocationDetailPage";
import { SITE_CONFIG } from "@/lib/seo-config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LOCATIONS.map((loc) => ({
    slug: loc.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      title: "Location Not Found | Cloud Consultancy"
    };
  }

  const pageUrl = `${SITE_CONFIG.url}/locations/${location.slug}/`;

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: pageUrl
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: pageUrl,
      siteName: SITE_CONFIG.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: location.images.hero,
          width: 1200,
          height: 675,
          alt: `Custom Software Engineering & Cloud Platform Command Center in ${location.name}`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: location.metaTitle,
      description: location.metaDescription,
      images: [location.images.hero]
    }
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  return <LocationDetailPage location={location} />;
}
