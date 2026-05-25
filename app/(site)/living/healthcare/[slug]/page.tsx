import { HealthInsurancePage } from "@/components/living/health-insurance-page";
import { HospitalsPage } from "@/components/living/hospitals-page";
import {
  createItemMetadata,
  SectionDetail,
} from "@/lib/navigation/section-pages";
import { getNavItemBySlug, getSectionById } from "@/lib/navigation/site-map";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const SECTION_ID = "living";
const CATEGORY = "healthcare";

const DEDICATED_PAGES: Record<string, () => React.JSX.Element> = {
  hospitals: () => <HospitalsPage />,
  insurance: () => <HealthInsurancePage />,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [{ slug: "hospitals" }, { slug: "insurance" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "hospitals") {
    return {
      title: "Hospitals Pattaya | โรงพยาบาล | Pattaya.com",
      description:
        "International hospitals and clinics in Pattaya — ER, health check-ups, insurance billing, and expat healthcare directory.",
      openGraph: {
        title: "Hospitals | โรงพยาบาล — Pattaya.com",
        description:
          "Bangkok Hospital Pattaya, Phyathai, and more — curated guide for residents.",
      },
    };
  }
  if (slug === "insurance") {
    return {
      title: "Health Insurance Pattaya | ประกันสุขภาพ | Pattaya.com",
      description:
        "Expat health insurance — international vs local plans, visa compliance, and hospital direct billing in Pattaya.",
      openGraph: {
        title: "Health Insurance | ประกันสุขภาพ — Pattaya.com",
        description: "Compare approved plans for long-stay residents.",
      },
    };
  }

  const section = getSectionById(SECTION_ID)!;
  const item = getNavItemBySlug(SECTION_ID, [CATEGORY, slug]);
  if (!item) return { title: "Not Found | Pattaya.com" };

  return createItemMetadata(section, item.label, item.description);
}

export default async function LivingHealthcarePage({ params }: PageProps) {
  const { slug } = await params;
  const dedicated = DEDICATED_PAGES[slug];
  if (dedicated) return dedicated();

  const item = getNavItemBySlug(SECTION_ID, [CATEGORY, slug]);
  if (!item) notFound();

  return <SectionDetail sectionId={SECTION_ID} slug={[CATEGORY, slug]} />;
}
