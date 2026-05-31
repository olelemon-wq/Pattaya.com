import { NewsCategoryPage } from "@/components/news/news-category-page";
import {
  createLocalizedItemMetadata,
  generateSectionStaticParams,
  SectionDetail,
} from "@/lib/navigation/section-pages";
import { getNewsCategoryContent } from "@/lib/data/news-category-content";
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
  return generateSectionStaticParams(SECTION_ID);
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return createLocalizedItemMetadata(SECTION_ID, slug);
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getNavItemBySlug(SECTION_ID, slug);
  if (!item) notFound();

  const content = getNewsCategoryContent(slug);
  if (content) {
    return <NewsCategoryPage item={item} content={content} />;
  }

  return <SectionDetail sectionId={SECTION_ID} slug={slug} />;
}
