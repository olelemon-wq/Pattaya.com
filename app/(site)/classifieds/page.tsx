import type { Metadata } from "next";
import { ClassifiedsHubPage } from "@/components/classifieds/classifieds-hub-page";
import { createClassifiedsPageMetadata } from "@/lib/i18n/localized-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createClassifiedsPageMetadata();
}

export default function ClassifiedsPage() {
  return <ClassifiedsHubPage />;
}
