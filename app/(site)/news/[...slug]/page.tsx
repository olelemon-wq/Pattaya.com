import { NewsCategoryPage } from "@/components/news/news-category-page";
import {
  createItemMetadata,
  generateSectionStaticParams,
  SectionDetail,
} from "@/lib/navigation/section-pages";
import { getNewsCategoryContent } from "@/lib/data/news-category-content";
import { getNavItemBySlug, getSectionById } from "@/lib/navigation/site-map";
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
  const section = getSectionById(SECTION_ID)!;
  const item = getNavItemBySlug(SECTION_ID, slug);

  if (!item) return { title: "Not Found | Pattaya.com" };

  return createItemMetadata(section, item.label, item.description);
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
