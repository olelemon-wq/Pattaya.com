import type { Metadata } from "next";
import { BusinessHubPage } from "@/components/business/business-hub-page";

export const metadata: Metadata = {
  title: "Business | Pattaya.com",
  description:
    "Pattaya business gateway — company setup, BOI incentives, industry guides, investment insights, and networking events.",
};

export default function BusinessPage() {
  return <BusinessHubPage />;
}
