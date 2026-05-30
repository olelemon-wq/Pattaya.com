"use client";

import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CategoryGrid } from "@/components/content/category-grid";
import { PageHero } from "@/components/content/page-hero";
import { SectionPlaceholder } from "@/components/content/section-placeholder";
import { useLanguage } from "@/components/layout/language-provider";
import {
  buildLocalizedBreadcrumbs,
  localizeNavItem,
} from "@/lib/i18n/resolve-site-nav";
import { getSiteSectionCopy } from "@/lib/i18n/messages/site-sections";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import {
  getNavItemBySlug,
  getSectionById,
} from "@/lib/navigation/site-map";

interface SectionHubProps {
  sectionId: string;
}

export function LocalizedSectionHub({ sectionId }: SectionHubProps) {
  const { language } = useLanguage();
  const section = getSectionById(sectionId);
  if (!section) notFound();

  const sectionCopy = getSiteSectionCopy(language, sectionId);
  const items = section.items.map((item) =>
    localizeNavItem(language, sectionId, item),
  );
  const breadcrumbs = buildLocalizedBreadcrumbs(
    language,
    sectionId,
    section.href,
  );

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <PageHero
        title={sectionCopy?.label ?? section.label}
        description={sectionCopy?.description ?? section.description}
        badge={`${section.items.length} ${tSiteUi(language, "categoriesCount")}`}
      />
      <CategoryGrid items={items} />
    </>
  );
}

interface SectionDetailProps {
  sectionId: string;
  slug: string[];
}

export function LocalizedSectionDetail({ sectionId, slug }: SectionDetailProps) {
  const { language } = useLanguage();
  const section = getSectionById(sectionId);
  if (!section) notFound();

  const item = getNavItemBySlug(sectionId, slug);
  if (!item) notFound();

  const localized = localizeNavItem(language, sectionId, item);
  const breadcrumbs = buildLocalizedBreadcrumbs(
    language,
    sectionId,
    section.href,
    localized.label,
    localized.href,
  );

  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <PageHero
        title={localized.label}
        description={localized.description}
        badge={localized.category}
      />
      <SectionPlaceholder item={localized} />
    </>
  );
}
