import { DrivingPage } from "@/components/living/driving-page";
import { RideAppsPage } from "@/components/living/ride-apps-page";
import { SongthaewPage } from "@/components/living/songthaew-page";
import {
  SectionDetail,
} from "@/lib/navigation/section-pages";
import { createLivingCategoryMetadata } from "@/lib/i18n/dedicated-page-metadata";
import { getNavItemBySlug } from "@/lib/navigation/site-map";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const SECTION_ID = "living";
const CATEGORY = "transportation";

const DEDICATED_PAGES: Record<string, () => React.JSX.Element> = {
  songthaew: () => <SongthaewPage />,
  "ride-apps": () => <RideAppsPage />,
  driving: () => <DrivingPage />,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [{ slug: "songthaew" }, { slug: "ride-apps" }, { slug: "driving" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return createLivingCategoryMetadata(CATEGORY, slug);
}

export default async function LivingTransportationPage({ params }: PageProps) {
  const { slug } = await params;
  const dedicated = DEDICATED_PAGES[slug];
  if (dedicated) return dedicated();

  const item = getNavItemBySlug(SECTION_ID, [CATEGORY, slug]);
  if (!item) notFound();

  return <SectionDetail sectionId={SECTION_ID} slug={[CATEGORY, slug]} />;
}
