import type { Metadata } from "next";
import type { BusinessPageId } from "@/lib/data/business-page-content";
import { getRequestLanguage } from "@/lib/i18n/server-language";
import { getSiteSectionCopy } from "@/lib/i18n/messages/site-sections";
import {
  getLivingShell,
  type LivingShellKey,
} from "@/lib/i18n/messages/living/shells";
import { resolveBusinessPage } from "@/lib/i18n/resolve-business-page";
import { getMainBeachesPage } from "@/lib/i18n/messages/explore-beaches";
import { getBeachDetailPage } from "@/lib/i18n/messages/explore-beach-detail";
import { isBeachDetailSlug } from "@/lib/explore/beach-detail-slugs";
import { getCafesPage } from "@/lib/i18n/messages/explore-cafes";
import { getFamilyActivitiesPage } from "@/lib/i18n/messages/explore-family";
import { getHiddenGemsPage } from "@/lib/i18n/messages/explore-hidden-gems";
import { getKohLarnPage } from "@/lib/i18n/messages/explore-koh-larn";
import { getShoppingMallsPage } from "@/lib/i18n/messages/explore-shopping-malls";
import { getShoppingMarketsPage } from "@/lib/i18n/messages/explore-shopping-markets";
import { getStreetFoodPage } from "@/lib/i18n/messages/explore-street-food";
import { getWellnessPage } from "@/lib/i18n/messages/explore-wellness";
import { getYachtPage } from "@/lib/i18n/messages/explore-yacht";
import { getFineDiningPage } from "@/lib/i18n/messages/fine-dining";
import { t } from "@/lib/i18n/living-helpers";
import type { LanguageCode } from "@/lib/i18n/languages";
import { createLocalizedItemMetadata } from "@/lib/i18n/localized-metadata";

const SITE = "Pattaya.com";

function buildSectionMetadata(
  lang: LanguageCode,
  sectionId: string,
  title: string,
  description: string,
): Metadata {
  const section = getSiteSectionCopy(lang, sectionId);
  const sectionLabel = section?.label ?? sectionId;
  return {
    title: `${title} | ${sectionLabel} | ${SITE}`,
    description,
    openGraph: {
      title: `${title} — ${SITE}`,
      description,
    },
  };
}

export async function createLivingShellPageMetadata(
  shellKey: LivingShellKey,
): Promise<Metadata> {
  const lang = await getRequestLanguage();
  const shell = getLivingShell(lang, shellKey);
  return buildSectionMetadata(lang, "living", shell.title, shell.subtitle);
}

export const livingDedicatedShells: Record<string, LivingShellKey> = {
  "visa/retirement": "retirement",
  "visa/thailand-elite": "thailandElite",
  "visa/work-permit": "workPermit",
  "visa/90-day-report": "ninetyDay",
  "housing/condo-buying": "condoBuying",
  "housing/rentals": "rentals",
  "housing/ownership": "ownership",
  "cost-of-living/utilities": "utilities",
  "cost-of-living/food": "food",
  "healthcare/hospitals": "hospitals",
  "healthcare/insurance": "healthInsurance",
  "transportation/songthaew": "songthaew",
  "transportation/ride-apps": "rideApps",
  "transportation/driving": "driving",
  "culture/etiquette": "cultureEtiquette",
  "culture/thai-culture": "thaiCulture",
  "safety/scam-alerts": "scamAlerts",
  "safety/emergency-guide": "emergencyGuide",
};

export async function createLivingDedicatedMetadata(
  slugPath: string,
): Promise<Metadata> {
  const shellKey = livingDedicatedShells[slugPath];
  if (shellKey) return createLivingShellPageMetadata(shellKey);
  const lang = await getRequestLanguage();
  return { title: `Not Found | ${SITE}`, description: "" };
}

type ExploreMetaFn = (lang: LanguageCode) => { title: string; description: string };

const exploreDedicatedMeta: Record<string, ExploreMetaFn> = {
  beaches: (lang) => {
    const p = getMainBeachesPage(lang);
    return { title: p.hero.title, description: p.hero.body };
  },
  "islands/koh-larn": (lang) => {
    const p = getKohLarnPage(lang);
    return { title: p.hero.title, description: p.hero.body };
  },
  "restaurants/fine-dining": (lang) => {
    const p = getFineDiningPage(lang);
    return { title: p.hero.title, description: p.hero.body };
  },
  "restaurants/street-food": (lang) => {
    const p = getStreetFoodPage(lang);
    return { title: p.hero.title, description: p.hero.body };
  },
  cafes: (lang) => {
    const p = getCafesPage(lang);
    return { title: p.hero.title, description: p.hero.body };
  },
  "shopping/malls": (lang) => {
    const p = getShoppingMallsPage(lang);
    return { title: p.hero.title, description: p.hero.body };
  },
  "shopping/markets": (lang) => {
    const p = getShoppingMarketsPage(lang);
    return { title: p.hero.title, description: p.hero.body };
  },
  "family-activities": (lang) => {
    const p = getFamilyActivitiesPage(lang);
    return { title: p.hero.title, description: p.hero.body };
  },
  "luxury/yacht": (lang) => {
    const p = getYachtPage(lang);
    return { title: p.hero.title, description: p.hero.body };
  },
  "hidden-gems": (lang) => {
    const p = getHiddenGemsPage(lang);
    return { title: p.hero.title, description: p.hero.body };
  },
  wellness: (lang) => {
    const p = getWellnessPage(lang);
    return { title: p.hero.title, description: p.hero.body };
  },
};

export async function createExploreDedicatedMetadata(
  pageKey: string,
): Promise<Metadata> {
  const lang = await getRequestLanguage();
  const resolver = exploreDedicatedMeta[pageKey];
  if (!resolver) return { title: `Not Found | ${SITE}` };
  const { title, description } = resolver(lang);
  return buildSectionMetadata(lang, "explore", title, description);
}

export async function createBeachDetailMetadata(slug: string): Promise<Metadata> {
  if (!isBeachDetailSlug(slug)) {
    return { title: `Not Found | ${SITE}`, description: "" };
  }
  const lang = await getRequestLanguage();
  const page = getBeachDetailPage(lang, slug);
  return buildSectionMetadata(lang, "explore", page.hero.title, page.hero.description);
}

export async function createBusinessPageMetadata(
  pageId: BusinessPageId,
): Promise<Metadata> {
  const lang = await getRequestLanguage();
  const page = resolveBusinessPage(lang, pageId);
  return buildSectionMetadata(lang, "business", page.title, page.description);
}

export async function createLivingCategoryMetadata(
  category: string,
  slug: string,
): Promise<Metadata> {
  const path = `${category}/${slug}`;
  if (livingDedicatedShells[path]) {
    return createLivingDedicatedMetadata(path);
  }
  return createLocalizedItemMetadata("living", [category, slug]);
}
