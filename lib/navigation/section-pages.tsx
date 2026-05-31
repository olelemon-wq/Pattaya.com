import type { Metadata } from "next";
import {
  LocalizedSectionDetail,
  LocalizedSectionHub,
} from "@/components/navigation/localized-section-pages";
import {
  createLocalizedItemMetadata,
  createLocalizedSectionMetadata,
} from "@/lib/i18n/localized-metadata";
import {
  getNavItemBySlug,
  getSectionById,
} from "@/lib/navigation/site-map";
import type { MainSection } from "@/lib/navigation/types";

/** @deprecated Use createLocalizedSectionMetadata for generateMetadata */
export function createSectionMetadata(section: MainSection): Metadata {
  return {
    title: `${section.label} | Pattaya.com`,
    description: section.description,
  };
}

/** @deprecated Use createLocalizedItemMetadata for generateMetadata */
export function createItemMetadata(
  section: MainSection,
  label: string,
  description: string,
): Metadata {
  return {
    title: `${label} | ${section.label} | Pattaya.com`,
    description,
  };
}

export { createLocalizedItemMetadata, createLocalizedSectionMetadata };

interface SectionHubProps {
  sectionId: string;
}

export function SectionHub({ sectionId }: SectionHubProps) {
  return <LocalizedSectionHub sectionId={sectionId} />;
}

interface SectionDetailProps {
  sectionId: string;
  slug: string[];
}

export function SectionDetail({ sectionId, slug }: SectionDetailProps) {
  return <LocalizedSectionDetail sectionId={sectionId} slug={slug} />;
}

export function generateSectionStaticParams(sectionId: string) {
  const section = getSectionById(sectionId);
  if (!section) return [];

  return section.items.map((item) => ({
    slug: item.slug.split("/"),
  }));
}
