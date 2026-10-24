import { Metadata } from "next";
import SalesforcePage from "./SalesforcePage";
import { SITE_CONFIG } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Salesforce Consulting, Multi-Cloud Architecture & MuleSoft Integration",
  description: "Certified Salesforce Technical Architects delivering Sales Cloud, Service Cloud, custom Apex trigger frameworks, high-speed Flows, LWC, and MuleSoft enterprise integrations.",
  alternates: {
    canonical: "/salesforce/"
  },
  openGraph: {
    title: "Salesforce Multi-Cloud Consulting & MuleSoft Architecture | Cloud Consultancy",
    description: "Certified Salesforce architects delivering Sales Cloud, Service Cloud, custom Apex, high-speed Flows, LWC, and MuleSoft enterprise integrations.",
    url: `${SITE_CONFIG.url}/salesforce/`,
    type: "website"
  }
};

export default SalesforcePage;
