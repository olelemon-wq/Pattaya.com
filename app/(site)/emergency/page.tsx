import type { Metadata } from "next";
import { EmergencyPageContent } from "@/components/pages/standalone-pages";
import { createStandalonePageMetadata } from "@/lib/i18n/localized-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createStandalonePageMetadata("emergency");
}

export default function EmergencyPage() {
  return <EmergencyPageContent />;
}
