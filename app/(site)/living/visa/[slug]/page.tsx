import { NinetyDayReportPage } from "@/components/living/ninety-day-report-page";
import { RetirementVisaPage } from "@/components/living/retirement-visa-page";
import { ThailandElitePage } from "@/components/living/thailand-elite-page";
import { WorkPermitPage } from "@/components/living/work-permit-page";
import {
  SectionDetail,
} from "@/lib/navigation/section-pages";
import { createLivingCategoryMetadata } from "@/lib/i18n/dedicated-page-metadata";
import { getNavItemBySlug } from "@/lib/navigation/site-map";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const SECTION_ID = "living";
const CATEGORY = "visa";

const DEDICATED_PAGES: Record<string, () => React.JSX.Element> = {
  retirement: () => <RetirementVisaPage />,
  "thailand-elite": () => <ThailandElitePage />,
  "work-permit": () => <WorkPermitPage />,
  "90-day-report": () => <NinetyDayReportPage />,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [
    { slug: "retirement" },
    { slug: "thailand-elite" },
    { slug: "work-permit" },
    { slug: "90-day-report" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return createLivingCategoryMetadata(CATEGORY, slug);
}

export default async function LivingVisaPage({ params }: PageProps) {
  const { slug } = await params;
  const dedicated = DEDICATED_PAGES[slug];
  if (dedicated) return dedicated();

  const item = getNavItemBySlug(SECTION_ID, [CATEGORY, slug]);
  if (!item) notFound();

  return <SectionDetail sectionId={SECTION_ID} slug={[CATEGORY, slug]} />;
}
