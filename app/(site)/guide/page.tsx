import type { Metadata } from "next";
import { GuidePageContent } from "@/components/pages/standalone-pages";
import { createStandalonePageMetadata } from "@/lib/i18n/localized-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createStandalonePageMetadata("guide");
}

export default function GuidePage() {
  return <GuidePageContent />;
}
