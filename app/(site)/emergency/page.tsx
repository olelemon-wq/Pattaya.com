import type { Metadata } from "next";
import { EmergencyPage } from "@/components/emergency/emergency-page";
import { createStandalonePageMetadata } from "@/lib/i18n/localized-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createStandalonePageMetadata("emergency");
}

export default function EmergencyRoutePage() {
  return <EmergencyPage />;
}
