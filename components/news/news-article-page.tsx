"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { NewsPageFrame } from "@/components/news/news-layout";
import { NewsBadge } from "@/components/news/news-ui";
import type { NewsArticleRecord } from "@/lib/data/news-article-index";
import { newsArticleHref } from "@/lib/data/news-article-slug";
import { buildLocalizedBreadcrumbs } from "@/lib/i18n/resolve-site-nav";
import { localizeNewsNavItem } from "@/lib/i18n/messages/news-nav";
import { tNewsArticleUi } from "@/lib/i18n/messages/news-article-ui";
import { resolveNewsArticle } from "@/lib/i18n/resolve-news-article";
import { newsTheme } from "@/lib/design/news-theme";
import type { NavItem } from "@/lib/navigation/types";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import Image from "next/image";
import Link from "next/link";

type NewsArticlePageProps = {
  categoryItem: NavItem;
  record: NewsArticleRecord;
};

function formatArticleFooter(footer: string) {
  return footer.replace(/^🕐\s*/, "").replace(/^⚠\s*/, "");
}

export function NewsArticlePage({ categoryItem, record }: NewsArticlePageProps) {
  const { language } = useLanguage();
  const category = localizeNewsNavItem(language, categoryItem);
  const article = resolveNewsArticle(language, record);
  const categoryHref = categoryItem.href;

  const breadcrumbs = [
    ...buildLocalizedBreadcrumbs(
      language,
      "news",
      "/news",
      category.label,
      categoryHref,
    ),
    { label: article.title, href: newsArticleHref(record.categorySlug, record.articleSlug) },
  ];

  const isLocalAsset = article.image.startsWith("/");

  return (
    <NewsPageFrame>
      <Breadcrumb items={breadcrumbs} />

      <article className="mt-6 sm:mt-8">
        <p className={newsTheme.eyebrow}>{tNewsArticleUi(language, "articleBadge")}</p>

        <div className="mt-4 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-sm">
          <div className="relative h-48 overflow-hidden sm:h-64 md:h-80">
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              unoptimized={!isLocalAsset}
              className="object-cover"
              sizes="(max-width: 1280px) 100vw"
              priority
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0c1a33]/80 via-transparent to-transparent"
              aria-hidden
            />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
              <NewsBadge className={article.badgeClass}>{article.badge}</NewsBadge>
            </div>
          </div>

          <div className="border-t border-[#f1f5f9] p-5 sm:p-8">
            <h1 className="text-2xl font-bold leading-tight text-[#0c1a33] sm:text-3xl md:text-4xl">
              {article.title}
            </h1>
            <p className="mt-3 text-sm text-[#94a3b8]">
              {tNewsArticleUi(language, "updated")}{" "}
              {formatArticleFooter(article.footer)}
            </p>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#334155] sm:text-[1.05rem] sm:leading-8">
              {article.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>

            <Link
              href={categoryHref}
              className={`mt-8 inline-flex ${newsTheme.link}`}
            >
              {tNewsArticleUi(language, "backToCategory")}
            </Link>
          </div>
        </div>
      </article>
    </NewsPageFrame>
  );
}
