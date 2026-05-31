import { isNewsArticleHref } from "@/lib/data/news-article-slug";
import type { LanguageCode } from "@/lib/i18n/languages";
import { tNewsArticleUi } from "@/lib/i18n/messages/news-article-ui";
import { tNewsCategoryUi } from "@/lib/i18n/messages/news-category-ui";

export function getNewsLinkLabel(lang: LanguageCode, href: string): string {
  if (isNewsArticleHref(href)) {
    return tNewsArticleUi(lang, "readArticle");
  }
  if (href.startsWith("/news/")) {
    return tNewsCategoryUi(lang, "viewCategory");
  }
  return tNewsCategoryUi(lang, "relatedGuide");
}
