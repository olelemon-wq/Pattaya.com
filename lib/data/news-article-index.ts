import type { NewsCategoryArticle } from "@/lib/data/news-category-types";
import { newsCategoryBySlug } from "@/lib/data/news-category-content";
import {
  isExternalNewsCardHref,
  newsArticleHref,
} from "@/lib/data/news-article-slug";
import { resolveNewsArticleSlug } from "@/lib/data/news-article-slug-registry";

export type NewsArticleRecord = NewsCategoryArticle & {
  categorySlug: string;
  articleSlug: string;
};

const articleByPath = new Map<string, NewsArticleRecord>();

function pathKey(categorySlug: string, articleSlug: string): string {
  return `${categorySlug}/${articleSlug}`;
}

function buildIndex() {
  if (articleByPath.size > 0) return;

  for (const [categorySlug, content] of Object.entries(newsCategoryBySlug)) {
    for (const article of content.articles) {
      if (isExternalNewsCardHref(article.href)) continue;

      const articleSlug = resolveNewsArticleSlug(categorySlug, article.title);
      const key = pathKey(categorySlug, articleSlug);

      if (articleByPath.has(key)) continue;

      articleByPath.set(key, {
        ...article,
        categorySlug,
        articleSlug,
        href: newsArticleHref(categorySlug, articleSlug),
      });
    }
  }
}

export function getAllNewsArticlePathKeys(): string[] {
  buildIndex();
  return [...articleByPath.keys()];
}

export function getNewsArticleRecord(slug: string[]): NewsArticleRecord | null {
  if (slug.length < 3) return null;
  buildIndex();
  const key = slug.join("/");
  return articleByPath.get(key) ?? null;
}

export function getNewsArticleHrefForCard(
  categorySlug: string,
  article: Pick<NewsCategoryArticle, "title" | "href">,
): string | null {
  if (isExternalNewsCardHref(article.href)) return null;
  const articleSlug = resolveNewsArticleSlug(categorySlug, article.title);
  return newsArticleHref(categorySlug, articleSlug);
}
