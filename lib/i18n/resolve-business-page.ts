import {
  businessPages,
  type BusinessPageId,
} from "@/lib/data/business-page-content";
import type { LanguageCode } from "@/lib/i18n/languages";
import { t } from "@/lib/i18n/living-helpers";
import { businessPageCopy } from "@/lib/i18n/messages/business-detail/pages";

export function resolveBusinessPage(lang: LanguageCode, pageId: BusinessPageId) {
  const base = businessPages[pageId];
  const copy = businessPageCopy[pageId];

  return {
    heroImage: base.heroImage,
    heroAlt: t(lang, copy.heroAlt),
    badge: t(lang, copy.badge),
    breadcrumb: t(lang, copy.breadcrumb),
    title: t(lang, copy.title),
    description: t(lang, copy.description),
    cta: {
      eyebrow: t(lang, copy.cta.eyebrow),
      title: t(lang, copy.cta.title),
      body: t(lang, copy.cta.body),
      button: t(lang, copy.cta.button),
      href: base.cta.href,
    },
    overview: {
      title: t(lang, copy.overview.title),
      body: t(lang, copy.overview.body),
    },
    steps: {
      title: t(lang, copy.steps.title),
      items: copy.steps.items.map((item, i) => ({
        step: base.steps.items[i].step,
        title: t(lang, item.title),
        description: t(lang, item.description),
      })),
    },
    checklist: {
      title: t(lang, copy.checklist.title),
      items: copy.checklist.items.map((item) => t(lang, item)),
    },
    highlights: {
      title: t(lang, copy.highlights.title),
      items: copy.highlights.items.map((item) => ({
        title: t(lang, item.title),
        description: t(lang, item.description),
      })),
    },
    related: copy.related.map((item, i) => ({
      label: t(lang, item.label),
      href: base.related[i].href,
      blurb: t(lang, item.blurb),
    })),
    economyStats: base.economyStats?.map((stat, i) => ({
      icon: stat.icon,
      value: stat.value,
      label: t(lang, copy.economyStatLabels![i]),
    })),
    networkingEvents: base.networkingEvents?.map((event, i) => ({
      day: event.day,
      month: event.month,
      year: event.year,
      title: t(lang, copy.networkingEvents![i].title),
      location: t(lang, copy.networkingEvents![i].location),
    })),
  };
}

export type ResolvedBusinessPage = ReturnType<typeof resolveBusinessPage>;
