import { BusinessDetailPage } from "@/components/business/business-detail-page";
import { createBusinessPageMetadata } from "@/lib/i18n/dedicated-page-metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return createBusinessPageMetadata("economy");
}

export default function EconomyPage() {
  return <BusinessDetailPage pageId="economy" />;
}
