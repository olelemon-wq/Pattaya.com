import { EmergencyGuidePage } from "@/components/living/emergency-guide-page";
import { ScamAlertsPage } from "@/components/living/scam-alerts-page";
import {
  SectionDetail,
} from "@/lib/navigation/section-pages";
import { createLivingCategoryMetadata } from "@/lib/i18n/dedicated-page-metadata";
import { getNavItemBySlug } from "@/lib/navigation/site-map";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const SECTION_ID = "living";
const CATEGORY = "safety";

const DEDICATED_PAGES: Record<string, () => React.JSX.Element> = {
  "scam-alerts": () => <ScamAlertsPage />,
  "emergency-guide": () => <EmergencyGuidePage />,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [{ slug: "scam-alerts" }, { slug: "emergency-guide" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return createLivingCategoryMetadata(CATEGORY, slug);
}

export default async function LivingSafetyPage({ params }: PageProps) {
  const { slug } = await params;
  const dedicated = DEDICATED_PAGES[slug];
  if (dedicated) return dedicated();

  const item = getNavItemBySlug(SECTION_ID, [CATEGORY, slug]);
  if (!item) notFound();

  return <SectionDetail sectionId={SECTION_ID} slug={[CATEGORY, slug]} />;
}
