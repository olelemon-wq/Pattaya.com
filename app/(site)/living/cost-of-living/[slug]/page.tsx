import { UtilitiesPage } from "@/components/living/utilities-page";
import {
  createItemMetadata,
  SectionDetail,
} from "@/lib/navigation/section-pages";
import { getNavItemBySlug, getSectionById } from "@/lib/navigation/site-map";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const SECTION_ID = "living";
const CATEGORY = "cost-of-living";

const DEDICATED_PAGES: Record<string, () => React.JSX.Element> = {
  utilities: () => <UtilitiesPage />,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [{ slug: "utilities" }, { slug: "food" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "utilities") {
    return {
      title: "Utilities Cost Pattaya | ค่าไฟ น้ำ Internet | Pattaya.com",
      description:
        "Electricity, water, and internet costs in Pattaya — condo rates, monthly estimates, and budget tips.",
      openGraph: {
        title: "Utilities Cost | ค่าไฟ น้ำ Internet — Pattaya.com",
        description: "Manage monthly overheads for expat living in Pattaya.",
      },
    };
  }

  const section = getSectionById(SECTION_ID)!;
  const item = getNavItemBySlug(SECTION_ID, [CATEGORY, slug]);
  if (!item) return { title: "Not Found | Pattaya.com" };

  return createItemMetadata(section, item.label, item.description);
}

export default async function LivingCostOfLivingPage({ params }: PageProps) {
  const { slug } = await params;
  const dedicated = DEDICATED_PAGES[slug];
  if (dedicated) return dedicated();

  const item = getNavItemBySlug(SECTION_ID, [CATEGORY, slug]);
  if (!item) notFound();

  return <SectionDetail sectionId={SECTION_ID} slug={[CATEGORY, slug]} />;
}
