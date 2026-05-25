import { CondoBuyingPage } from "@/components/living/condo-buying-page";
import {
  createItemMetadata,
  SectionDetail,
} from "@/lib/navigation/section-pages";
import { getNavItemBySlug, getSectionById } from "@/lib/navigation/site-map";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const SECTION_ID = "living";
const CATEGORY = "housing";

const DEDICATED_PAGES: Record<string, () => React.JSX.Element> = {
  "condo-buying": () => <CondoBuyingPage />,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [{ slug: "condo-buying" }, { slug: "rentals" }, { slug: "ownership" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "condo-buying") {
    return {
      title: "Condo Buying Guide Pattaya | ซื้อคอนโด | Pattaya.com",
      description:
        "Guide to buying a condo in Pattaya — 49% foreign quota, due diligence, step-by-step timeline, costs, and FAQ for expat buyers.",
      openGraph: {
        title: "Condo Buying | ซื้อคอนโด — Pattaya.com",
        description:
          "Master Pattaya's condo market: legal basics, area guides, transfer process, and free property consultation.",
      },
    };
  }

  const section = getSectionById(SECTION_ID)!;
  const item = getNavItemBySlug(SECTION_ID, [CATEGORY, slug]);
  if (!item) return { title: "Not Found | Pattaya.com" };

  return createItemMetadata(section, item.label, item.description);
}

export default async function LivingHousingPage({ params }: PageProps) {
  const { slug } = await params;
  const dedicated = DEDICATED_PAGES[slug];
  if (dedicated) return dedicated();

  const item = getNavItemBySlug(SECTION_ID, [CATEGORY, slug]);
  if (!item) notFound();

  return <SectionDetail sectionId={SECTION_ID} slug={[CATEGORY, slug]} />;
}
