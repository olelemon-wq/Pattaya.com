import { DrivingPage } from "@/components/living/driving-page";
import { RideAppsPage } from "@/components/living/ride-apps-page";
import { SongthaewPage } from "@/components/living/songthaew-page";
import {
  createItemMetadata,
  SectionDetail,
} from "@/lib/navigation/section-pages";
import { getNavItemBySlug, getSectionById } from "@/lib/navigation/site-map";
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
  if (slug === "songthaew") {
    return {
      title: "Songthaew Pattaya | รถสองแถว | Pattaya.com",
      description:
        "Using songthaew baht buses in Pattaya — routes, fares, etiquette, and when to use Grab instead.",
      openGraph: {
        title: "Songthaew | รถสองแถว — Pattaya.com",
        description: "Ride local shared transport like a Pattaya resident.",
      },
    };
  }
  if (slug === "ride-apps") {
    return {
      title: "Grab & Bolt Pattaya | App เดินทาง | Pattaya.com",
      description:
        "Grab and Bolt in Pattaya — fares, safety tips, airport rides, and when to use songthaews instead.",
      openGraph: {
        title: "Grab & Bolt | App เดินทาง — Pattaya.com",
        description: "Ride-hailing guide for Pattaya residents and visitors.",
      },
    };
  }
  if (slug === "driving") {
    return {
      title: "Driving in Thailand Pattaya | ขับรถในไทย | Pattaya.com",
      description:
        "Thai driving license steps, Pattaya traffic tips, insurance, and FAQ for expat drivers.",
      openGraph: {
        title: "Driving in Thailand | ขับรถในไทย — Pattaya.com",
        description: "License guide and road rules for Chonburi residents.",
      },
    };
  }

  const section = getSectionById(SECTION_ID)!;
  const item = getNavItemBySlug(SECTION_ID, [CATEGORY, slug]);
  if (!item) return { title: "Not Found | Pattaya.com" };

  return createItemMetadata(section, item.label, item.description);
}

export default async function LivingTransportationPage({ params }: PageProps) {
  const { slug } = await params;
  const dedicated = DEDICATED_PAGES[slug];
  if (dedicated) return dedicated();

  const item = getNavItemBySlug(SECTION_ID, [CATEGORY, slug]);
  if (!item) notFound();

  return <SectionDetail sectionId={SECTION_ID} slug={[CATEGORY, slug]} />;
}
