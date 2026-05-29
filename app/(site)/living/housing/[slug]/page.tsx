import { CondoBuyingPage } from "@/components/living/condo-buying-page";
import { OwnershipPage } from "@/components/living/ownership-page";
import { RentalsPage } from "@/components/living/rentals-page";
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
  if (slug === "condo-buying") {
    return {
      title: "Condo Buying Guide Pattaya | ซื้อคอนโด | Pattaya.com",
      description:
        "Pattaya condo buying guide — 49% foreign quota, FET form, due diligence checklist, transfer fees, Land Office steps, and FAQ for foreign freehold buyers.",
      openGraph: {
        title: "Condo Buying | ซื้อคอนโด — Pattaya.com",
        description:
          "Master Pattaya's condo market: legal basics, area guides, transfer process, and free property consultation.",
      },
    };
  }
  if (slug === "rentals") {
    return {
      title: "Rentals Guide Pattaya | เช่าบ้าน | Pattaya.com",
      description:
        "Finding rentals in Pattaya — lease checklist, TM30, deposit rules, area rent ranges, and verified listings.",
      openGraph: {
        title: "Rentals | เช่าบ้าน — Pattaya.com",
        description:
          "Condo and house rentals in Jomtien, Pratumnak, and central Pattaya with contract tips.",
      },
    };
  }
  if (slug === "ownership") {
    return {
      title: "Property Ownership Pattaya | สิทธิการถือครอง | Pattaya.com",
      description:
        "Leasehold vs freehold, foreign condo quota, land rules, and ownership options for expats in Thailand.",
      openGraph: {
        title: "Leasehold vs Freehold — Pattaya.com",
        description: "Understand Thai property ownership frameworks before you buy.",
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
