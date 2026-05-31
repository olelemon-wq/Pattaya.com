import type { NewsArticleRecord } from "@/lib/data/news-article-index";
import type { LanguageCode } from "@/lib/i18n/languages";
import { getNewsArticleParagraphs } from "@/lib/i18n/messages/news-article-detail-bodies";
import { localizeCityUpdatesArticle } from "@/lib/i18n/messages/news-city-updates-bodies";
import { localizeImmigrationArticle } from "@/lib/i18n/messages/news-immigration-bodies";
import { localizePropertyArticle } from "@/lib/i18n/messages/news-property-bodies";
import { localizeVisaArticle } from "@/lib/i18n/messages/news-visa-bodies";
import { remainingNewsBodyLocalizers } from "@/lib/i18n/messages/news-remaining-bodies";

export type ResolvedNewsArticle = NewsArticleRecord & {
  paragraphs: string[];
};

function localizeArticleCard(
  lang: LanguageCode,
  categorySlug: string,
  article: NewsArticleRecord,
): NewsArticleRecord {
  switch (categorySlug) {
    case "local-news/city-updates":
      return localizeCityUpdatesArticle(lang, article);
    case "business/real-estate":
      return localizePropertyArticle(lang, article);
    case "expat/visa":
      return localizeVisaArticle(lang, article);
    case "expat/immigration":
      return localizeImmigrationArticle(lang, article);
    default:
      return remainingNewsBodyLocalizers.localizeArticle(lang, categorySlug, article);
  }
}

export function resolveNewsArticle(
  lang: LanguageCode,
  record: NewsArticleRecord,
): ResolvedNewsArticle {
  const localized = localizeArticleCard(lang, record.categorySlug, record);
  const pathKey = `${record.categorySlug}/${record.articleSlug}`;

  return {
    ...localized,
    paragraphs: getNewsArticleParagraphs(lang, pathKey, localized.excerpt),
  };
}
