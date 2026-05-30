import type { LanguageCode } from "@/lib/i18n/languages";
import { t } from "@/lib/i18n/living-helpers";
import type { LocalizedText } from "@/lib/i18n/text";

type SpotlightPatch = {
  badge: LocalizedText;
  title: LocalizedText;
  excerpt: LocalizedText;
  cta: LocalizedText;
  imageAlt: LocalizedText;
};

type ArticlePatch = {
  badge: LocalizedText;
  title: LocalizedText;
  excerpt: LocalizedText;
  footer: LocalizedText;
  imageAlt: LocalizedText;
};

export type NewsCategoryBodySet = {
  spotlights: Record<string, SpotlightPatch>;
  articles: Record<string, ArticlePatch>;
};

export type NewsBodyRegistry = Record<string, NewsCategoryBodySet>;

export function createNewsBodyLocalizers(registry: NewsBodyRegistry) {
  function localizeSpotlight<
    T extends {
      id: string;
      badge: string;
      title: string;
      excerpt: string;
      cta: string;
      imageAlt: string;
    },
  >(lang: LanguageCode, slug: string, item: T): T {
    const patch = registry[slug]?.spotlights[item.id];
    if (!patch) return item;
    return {
      ...item,
      badge: t(lang, patch.badge),
      title: t(lang, patch.title),
      excerpt: t(lang, patch.excerpt),
      cta: t(lang, patch.cta),
      imageAlt: t(lang, patch.imageAlt),
    };
  }

  function localizeArticle<
    T extends {
      title: string;
      badge: string;
      excerpt: string;
      footer: string;
      imageAlt: string;
    },
  >(lang: LanguageCode, slug: string, item: T): T {
    const patch = registry[slug]?.articles[item.title];
    if (!patch) return item;
    return {
      ...item,
      badge: t(lang, patch.badge),
      title: t(lang, patch.title),
      excerpt: t(lang, patch.excerpt),
      footer: t(lang, patch.footer),
      imageAlt: t(lang, patch.imageAlt),
    };
  }

  return { localizeSpotlight, localizeArticle };
}
