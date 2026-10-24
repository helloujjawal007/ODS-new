import { Metadata } from "next";
import ThankYouPage from "./ThankYouPage";

export const metadata: Metadata = {
  title: "Thank You | We Will Get Back to You in 24 Hours",
  description: "Thank you for reaching out to Cloud Consultancy. Your inquiry has been received and our senior engineering team will respond within 24 hours.",
  alternates: {
    canonical: "/thank-you/"
  },
  robots: {
    index: false,
    follow: true
  }
};

export default function Page() {
  return <ThankYouPage />;
}
