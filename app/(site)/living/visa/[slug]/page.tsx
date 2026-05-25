import { NinetyDayReportPage } from "@/components/living/ninety-day-report-page";
import { RetirementVisaPage } from "@/components/living/retirement-visa-page";
import { ThailandElitePage } from "@/components/living/thailand-elite-page";
import { WorkPermitPage } from "@/components/living/work-permit-page";
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
  if (slug === "thailand-elite") {
    return {
      title: "Thailand Elite Visa Pattaya | Elite Visa | Pattaya.com",
      description:
        "Thailand Elite membership tiers, benefits, airport VIP, long-stay privileges, and application support for Pattaya residents.",
      openGraph: {
        title: "Thailand Elite | Elite Visa — Pattaya.com",
        description:
          "5–20 year privilege visa with concierge service — compare tiers and apply with expert guidance.",
      },
    };
  }
  if (slug === "work-permit") {
    return {
      title: "Work Permit Guide Pattaya | ใบอนุญาตทำงาน | Pattaya.com",
      description:
        "Work permit requirements, Non-B visa steps, employer ratio, LTR options, and legal compliance for professionals in Chonburi.",
      openGraph: {
        title: "Work Permit | ใบอนุญาตทำงาน — Pattaya.com",
        description:
          "Employment visas, Labour Office filings, and digital nomad pathways explained for Pattaya.",
      },
    };
  }
  if (slug === "90-day-report") {
    return {
      title: "90-Day Report Pattaya | รายงานตัว 90 วัน | Pattaya.com",
      description:
        "How to complete 90-day immigration reporting — online TM47, mail, in-person, TM30, deadlines, and FAQ.",
      openGraph: {
        title: "90-Day Report | รายงานตัว 90 วัน — Pattaya.com",
        description: "Stay compliant with Chonburi Immigration address reporting.",
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
