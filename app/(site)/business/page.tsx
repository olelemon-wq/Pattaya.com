import type { Metadata } from "next";
import { BusinessHubPage } from "@/components/business/business-hub-page";
import { createLocalizedSectionMetadata } from "@/lib/i18n/localized-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createLocalizedSectionMetadata("business");
}

export default function BusinessPage() {
  return <BusinessHubPage />;
}
