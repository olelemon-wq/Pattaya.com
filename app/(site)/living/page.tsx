import type { Metadata } from "next";
import { LivingHubPage } from "@/components/living/living-hub-page";
import { createLocalizedSectionMetadata } from "@/lib/i18n/localized-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createLocalizedSectionMetadata("living");
}

export default function LivingPage() {
  return <LivingHubPage />;
}
