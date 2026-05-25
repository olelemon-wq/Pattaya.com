import { CultureEtiquettePage } from "@/components/living/culture-etiquette-page";
import { ThaiCulturePage } from "@/components/living/thai-culture-page";
import {
  createItemMetadata,
  SectionDetail,
} from "@/lib/navigation/section-pages";
import { getNavItemBySlug, getSectionById } from "@/lib/navigation/site-map";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const SECTION_ID = "living";
const CATEGORY = "culture";

const DEDICATED_PAGES: Record<string, () => React.JSX.Element> = {
  etiquette: () => <CultureEtiquettePage />,
  "thai-culture": () => <ThaiCulturePage />,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [{ slug: "etiquette" }, { slug: "thai-culture" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "etiquette") {
    return {
      title: "Cultural Do & Don't | มารยาทไทย | Pattaya Living | Pattaya.com",
      description:
        "Cultural etiquette for expats in Pattaya — wai protocol, temple dress, monks, saving face, and Pattaya-specific social tips.",
      openGraph: {
        title: "Do & Don't | สิ่งควรทำ/ไม่ควรทำ — Pattaya.com",
        description:
          "Master Thai cultural dos and don'ts for respectful, rewarding life in Pattaya.",
      },
    };
  }
  if (slug === "thai-culture") {
    return {
      title: "Thai Culture Guide Pattaya | วัฒนธรรมไทย | Pattaya.com",
      description:
        "Understanding Thai culture as a Pattaya resident — festivals, language, social values, and integration tips.",
      openGraph: {
        title: "Thai Culture | วัฒนธรรมไทย — Pattaya.com",
        description: "Live respectfully and confidently in Thailand's coastal expat hub.",
      },
    };
  }

  const section = getSectionById(SECTION_ID)!;
  const item = getNavItemBySlug(SECTION_ID, [CATEGORY, slug]);
  if (!item) return { title: "Not Found | Pattaya.com" };

  return createItemMetadata(section, item.label, item.description);
}

export default async function LivingCulturePage({ params }: PageProps) {
  const { slug } = await params;
  const dedicated = DEDICATED_PAGES[slug];
  if (dedicated) return dedicated();

  const item = getNavItemBySlug(SECTION_ID, [CATEGORY, slug]);
  if (!item) notFound();

  return <SectionDetail sectionId={SECTION_ID} slug={[CATEGORY, slug]} />;
}
