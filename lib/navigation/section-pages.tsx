import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CategoryGrid } from "@/components/content/category-grid";
import { PageHero } from "@/components/content/page-hero";
import { SectionPlaceholder } from "@/components/content/section-placeholder";
import {
  getNavItemBySlug,
  getSectionById,
} from "@/lib/navigation/site-map";
import type { MainSection } from "@/lib/navigation/types";
import { buildBreadcrumbs } from "@/lib/navigation/utils";

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
  const section = getSectionById(sectionId);
  if (!section) notFound();

  const breadcrumbs = buildBreadcrumbs(section.label, section.href);

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <PageHero
        title={section.label}
        titleTh={section.labelTh}
        description={section.description}
        badge={`${section.items.length} categories`}
      />
      <CategoryGrid items={section.items} />
    </>
  );
}

interface SectionDetailProps {
  sectionId: string;
  slug: string[];
}

export function SectionDetail({ sectionId, slug }: SectionDetailProps) {
  const section = getSectionById(sectionId);
  if (!section) notFound();

  const item = getNavItemBySlug(sectionId, slug);
  if (!item) notFound();

  const breadcrumbs = buildBreadcrumbs(
    section.label,
    section.href,
    item.label,
    item.href,
  );

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <PageHero
        title={item.label}
        titleTh={item.labelTh}
        description={item.description}
        badge={item.category}
      />
      <SectionPlaceholder item={item} />
    </>
  );
}

export function generateSectionStaticParams(sectionId: string) {
  const section = getSectionById(sectionId);
  if (!section) return [];

  return section.items.map((item) => ({
    slug: item.slug.split("/"),
  }));
}
