import type { Metadata } from "next";
import { getRequestLanguage } from "@/lib/i18n/server-language";
import { getSiteSectionCopy } from "@/lib/i18n/messages/site-sections";
import {
  getStandalonePageCopy,
  type StandalonePageKey,
} from "@/lib/i18n/messages/standalone-pages";
import { getEventsHub } from "@/lib/i18n/messages/events-hub";
import { localizeNavItem } from "@/lib/i18n/resolve-site-nav";
import { getNavItemBySlug, getSectionById } from "@/lib/navigation/site-map";

const SITE = "Pattaya.com";

export async function createLocalizedSectionMetadata(
  sectionId: string,
): Promise<Metadata> {
  const lang = await getRequestLanguage();
  const section = getSectionById(sectionId);
  if (!section) return { title: `Not Found | ${SITE}` };

  const copy = getSiteSectionCopy(lang, sectionId);
  const label = copy?.label ?? section.label;
  const description = copy?.description ?? section.description;

  return {
    title: `${label} | ${SITE}`,
    description,
  };
}

export async function createLocalizedItemMetadata(
  sectionId: string,
  slug: string[],
): Promise<Metadata> {
  const lang = await getRequestLanguage();
  const section = getSectionById(sectionId);
  const item = getNavItemBySlug(sectionId, slug);

  if (!section || !item) return { title: `Not Found | ${SITE}` };

  const localized = localizeNavItem(lang, sectionId, item);
  const sectionCopy = getSiteSectionCopy(lang, sectionId);
  const sectionLabel = sectionCopy?.label ?? section.label;

  return {
    title: `${localized.label} | ${sectionLabel} | ${SITE}`,
    description: localized.description,
  };
}

export async function createStandalonePageMetadata(
  key: StandalonePageKey,
): Promise<Metadata> {
  const lang = await getRequestLanguage();
  const copy = getStandalonePageCopy(lang, key);
  return {
    title: `${copy.title} | ${SITE}`,
    description: copy.description,
  };
}

export async function createEventsPageMetadata(): Promise<Metadata> {
  const lang = await getRequestLanguage();
  const hub = getEventsHub(lang);
  return {
    title: `${hub.hero.title} | ${SITE}`,
    description: hub.hero.description,
  };
}
