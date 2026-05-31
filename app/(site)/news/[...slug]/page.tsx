import { NewsArticlePage } from "@/components/news/news-article-page";
import { NewsCategoryPage } from "@/components/news/news-category-page";
import {
  createLocalizedItemMetadata,
  generateSectionStaticParams,
  SectionDetail,
} from "@/lib/navigation/section-pages";
import { getNewsCategoryContent } from "@/lib/data/news-category-content";
import {
  getAllNewsArticlePathKeys,
  getNewsArticleRecord,
} from "@/lib/data/news-article-index";
import { createLocalizedNewsArticleMetadata } from "@/lib/i18n/localized-metadata";
import { getNavItemBySlug } from "@/lib/navigation/site-map";
import { notFound } from "next/navigation";

const SECTION_ID = "news";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export function generateStaticParams() {
  if (process.env.NODE_ENV === "development") {
    return [];
  }
  const categoryParams = generateSectionStaticParams(SECTION_ID);
  const articleParams = getAllNewsArticlePathKeys().map((path) => ({
    slug: path.split("/"),
  }));
  return [...categoryParams, ...articleParams];
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getNewsArticleRecord(slug);
  if (article) {
    return createLocalizedNewsArticleMetadata(SECTION_ID, article.categorySlug, article.title);
  }
  return createLocalizedItemMetadata(SECTION_ID, slug);
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const article = getNewsArticleRecord(slug);
  if (article) {
    const categoryItem = getNavItemBySlug(SECTION_ID, article.categorySlug.split("/"));
    if (!categoryItem) notFound();
    return <NewsArticlePage categoryItem={categoryItem} record={article} />;
  }

  const content = getNewsCategoryContent(slug);
  if (content) {
    const item = getNavItemBySlug(SECTION_ID, slug);
    if (!item) notFound();
    return <NewsCategoryPage item={item} content={content} />;
  }

  const item = getNavItemBySlug(SECTION_ID, slug);
  if (!item) notFound();

  return <SectionDetail sectionId={SECTION_ID} slug={slug} />;
}
