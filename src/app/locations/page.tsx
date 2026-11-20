import { Metadata } from "next";
import LocationsHubPage from "./LocationsHubPage";

export const metadata: Metadata = {
  title: "Software Engineering & Cloud Locations USA | Cloud Consultancy",
  description: "Explore our US software engineering presence across 25 major state technology hubs. Senior Next.js, Salesforce, and cloud development with US timezone overlap.",
  alternates: {
    canonical: "/locations/"
  },
  openGraph: {
    title: "Software Engineering & Cloud Locations USA | Cloud Consultancy",
    description: "Explore our US software engineering presence across 25 major state technology hubs. Senior Next.js, Salesforce, and cloud development with US timezone overlap.",
    url: "https://cloudconsultancy.in/locations/",
    siteName: "Cloud Consultancy",
    type: "website"
  }
};

export default function LocationsPage() {
  return <LocationsHubPage />;
}
