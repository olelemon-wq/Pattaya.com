import type { LanguageCode } from "@/lib/i18n/languages";
import { localizeBusinessNavItem } from "@/lib/i18n/messages/business-nav";
import { localizeExploreNavItem } from "@/lib/i18n/messages/explore-nav";
import { localizeLivingNavItem } from "@/lib/i18n/messages/living-nav";
import { localizeNewsNavItem } from "@/lib/i18n/messages/news-nav";
import { getSiteSectionCopy } from "@/lib/i18n/messages/site-sections";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import type { NavItem } from "@/lib/navigation/types";
import type { BreadcrumbItem } from "@/components/layout/breadcrumb";

export function localizeNavItem(
  lang: LanguageCode,
  sectionId: string,
  item: NavItem,
): NavItem {
  switch (sectionId) {
    case "news":
      return localizeNewsNavItem(lang, item);
    case "living":
      return localizeLivingNavItem(lang, item);
    case "explore":
      return localizeExploreNavItem(lang, item);
    case "business":
      return localizeBusinessNavItem(lang, item);
    default:
      return item;
  }
}

export function buildLocalizedBreadcrumbs(
  lang: LanguageCode,
  sectionId: string,
  sectionHref: string,
  itemLabel?: string,
  itemHref?: string,
): BreadcrumbItem[] {
  const section = getSiteSectionCopy(lang, sectionId);
  const crumbs: BreadcrumbItem[] = [
    { label: tSiteUi(lang, "home"), href: "/" },
    {
      label: section?.label ?? sectionId,
      href: sectionHref,
    },
  ];

  if (itemLabel && itemHref) {
    crumbs.push({ label: itemLabel, href: itemHref });
  }

  return crumbs;
}

export function buildStandaloneBreadcrumbs(
  lang: LanguageCode,
  pageLabel: string,
  pageHref: string,
): BreadcrumbItem[] {
  return [
    { label: tSiteUi(lang, "home"), href: "/" },
    { label: pageLabel, href: pageHref },
  ];
}
