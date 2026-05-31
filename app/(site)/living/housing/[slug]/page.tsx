import { CondoBuyingPage } from "@/components/living/condo-buying-page";
import { OwnershipPage } from "@/components/living/ownership-page";
import { RentalsPage } from "@/components/living/rentals-page";
import {
  SectionDetail,
} from "@/lib/navigation/section-pages";
import { createLivingCategoryMetadata } from "@/lib/i18n/dedicated-page-metadata";
import { getNavItemBySlug } from "@/lib/navigation/site-map";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const SECTION_ID = "living";
const CATEGORY = "housing";

const DEDICATED_PAGES: Record<string, () => React.JSX.Element> = {
  "condo-buying": () => <CondoBuyingPage />,
  rentals: () => <RentalsPage />,
  ownership: () => <OwnershipPage />,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [{ slug: "condo-buying" }, { slug: "rentals" }, { slug: "ownership" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return createLivingCategoryMetadata(CATEGORY, slug);
}

export default async function LivingHousingPage({ params }: PageProps) {
  const { slug } = await params;
  const dedicated = DEDICATED_PAGES[slug];
  if (dedicated) return dedicated();

  const item = getNavItemBySlug(SECTION_ID, [CATEGORY, slug]);
  if (!item) notFound();

  return <SectionDetail sectionId={SECTION_ID} slug={[CATEGORY, slug]} />;
}
