import { Metadata } from "next";
import SalesforcePage from "./SalesforcePage";
import { SITE_CONFIG } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Salesforce Consulting, Custom LWC & CRM Architecture",
  description: "Certified Salesforce technical architects delivering custom Lightning Web Components (LWC), bulkified Apex engineering, Data Cloud sync, and managed support.",
  alternates: {
    canonical: "/salesforce/"
  },
  openGraph: {
    title: "Salesforce Architecture & Custom LWC Engineering | Cloud Consultancy",
    description: "Certified Salesforce architects delivering custom Lightning Web Components, bulkified Apex backend services, and multi-system integrations.",
    url: `${SITE_CONFIG.url}/salesforce/`,
    type: "website"
  }
};

export default SalesforcePage;
