import { RetirementVisaPage } from "@/components/living/retirement-visa-page";
import {
  createItemMetadata,
  SectionDetail,
} from "@/lib/navigation/section-pages";
import { getNavItemBySlug, getSectionById } from "@/lib/navigation/site-map";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const SECTION_ID = "living";
const CATEGORY = "visa";

const DEDICATED_PAGES: Record<string, () => React.JSX.Element> = {
  retirement: () => <RetirementVisaPage />,
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
  if (slug === "retirement") {
    return {
      title: "Retirement Visa Guide Pattaya | วีซ่าเกษียณ | Pattaya.com",
      description:
        "Comprehensive retirement visa guide for Pattaya — age, financial, and insurance requirements, application timeline, FAQ, and expert visa consultation.",
      openGraph: {
        title: "Retirement Visa | วีซ่าเกษียณ — Pattaya.com",
        description:
          "Requirements, step-by-step process, and free consultation for Thailand retirement visa applicants in Pattaya.",
      },
    };
  }

  const section = getSectionById(SECTION_ID)!;
  const item = getNavItemBySlug(SECTION_ID, [CATEGORY, slug]);
  if (!item) return { title: "Not Found | Pattaya.com" };

  return createItemMetadata(section, item.label, item.description);
}

export default async function LivingVisaPage({ params }: PageProps) {
  const { slug } = await params;
  const dedicated = DEDICATED_PAGES[slug];
  if (dedicated) return dedicated();

  const item = getNavItemBySlug(SECTION_ID, [CATEGORY, slug]);
  if (!item) notFound();

  return <SectionDetail sectionId={SECTION_ID} slug={[CATEGORY, slug]} />;
}
