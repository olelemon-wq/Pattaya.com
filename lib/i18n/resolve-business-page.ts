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
    ctaSecondary:
      copy.ctaSecondary && base.ctaSecondary
        ? {
            button: t(lang, copy.ctaSecondary.button),
            href: base.ctaSecondary.href,
          }
        : undefined,
    overview: {
      title: t(lang, copy.overview.title),
      body: t(lang, copy.overview.body),
    },
    quickFacts: copy.quickFacts
      ? {
          title: t(lang, copy.quickFacts.title),
          items: copy.quickFacts.items.map((item) => ({
            label: t(lang, item.label),
            value: t(lang, item.value),
          })),
        }
      : undefined,
    legalNotes: copy.legalNotes
      ? {
          title: t(lang, copy.legalNotes.title),
          items: copy.legalNotes.items.map((item) => t(lang, item)),
        }
      : undefined,
    steps: {
      title: t(lang, copy.steps.title),
      items: copy.steps.items.map((item, i) => ({
        step: base.steps.items[i].step,
        title: t(lang, item.title),
        description: t(lang, item.description),
      })),
    },
    readingPath:
      copy.readingPath && base.readingPath
        ? {
            title: t(lang, copy.readingPath.title),
            intro: t(lang, copy.readingPath.intro),
            items: copy.readingPath.items.map((item, i) => ({
              step: base.readingPath!.items[i].step,
              label: t(lang, item.label),
              description: t(lang, item.description),
              href: base.readingPath!.items[i].href,
            })),
          }
        : undefined,
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
    faq: copy.faq
      ? {
          title: t(lang, copy.faq.title),
          items: copy.faq.items.map((item) => ({
            question: t(lang, item.q),
            answer: t(lang, item.a),
          })),
        }
      : undefined,
    servicePoints:
      copy.servicePoints && base.servicePoints
        ? {
            title: t(lang, copy.servicePoints.title),
            intro: t(lang, copy.servicePoints.intro),
            items: copy.servicePoints.items.map((item, i) => ({
              name: t(lang, item.name),
              note: t(lang, item.note),
            })),
          }
        : undefined,
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
