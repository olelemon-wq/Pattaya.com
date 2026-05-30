import type { Metadata } from "next";
import {
  LocalizedSectionDetail,
  LocalizedSectionHub,
} from "@/components/navigation/localized-section-pages";
import {
  getNavItemBySlug,
  getSectionById,
} from "@/lib/navigation/site-map";
import type { MainSection } from "@/lib/navigation/types";

export function createSectionMetadata(section: MainSection): Metadata {
  return {
    title: `${section.label} | Pattaya.com`,
    description: section.description,
  };
}

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
