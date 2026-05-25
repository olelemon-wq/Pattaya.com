import { EmergencyGuidePage } from "@/components/living/emergency-guide-page";
import {
  createItemMetadata,
  SectionDetail,
} from "@/lib/navigation/section-pages";
import { getNavItemBySlug, getSectionById } from "@/lib/navigation/site-map";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const SECTION_ID = "living";
const CATEGORY = "safety";

const DEDICATED_PAGES: Record<string, () => React.JSX.Element> = {
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
  if (slug === "emergency-guide") {
    return {
      title: "Emergency Guide Pattaya | วิธีรับมือเหตุฉุกเฉิน | Pattaya.com",
      description:
        "Emergency phone numbers, tourist police, hospitals ER, and what to do in medical and safety crises in Pattaya.",
      openGraph: {
        title: "Emergency Guide | วิธีรับมือเหตุฉุกเฉิน — Pattaya.com",
        description: "Save critical contacts before you need them.",
      },
    };
  }

  const section = getSectionById(SECTION_ID)!;
  const item = getNavItemBySlug(SECTION_ID, [CATEGORY, slug]);
  if (!item) return { title: "Not Found | Pattaya.com" };

  return createItemMetadata(section, item.label, item.description);
}

export default async function LivingSafetyPage({ params }: PageProps) {
  const { slug } = await params;
  const dedicated = DEDICATED_PAGES[slug];
  if (dedicated) return dedicated();

  const item = getNavItemBySlug(SECTION_ID, [CATEGORY, slug]);
  if (!item) notFound();

  return <SectionDetail sectionId={SECTION_ID} slug={[CATEGORY, slug]} />;
}
