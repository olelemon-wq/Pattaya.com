import {
  createItemMetadata,
  generateSectionStaticParams,
  SectionDetail,
} from "@/lib/navigation/section-pages";
import { getNavItemBySlug, getSectionById } from "@/lib/navigation/site-map";

const SECTION_ID = "business";

const DEDICATED_SLUGS = new Set([
  "company-setup/thai-company",
  "company-setup/boi",
  "guide/restaurant",
  "guide/bar",
  "guide/hotel",
  "investment/real-estate",
  "investment/economy",
  "networking/events",
]);

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export function generateStaticParams() {
  return generateSectionStaticParams(SECTION_ID).filter(
    ({ slug }) => !DEDICATED_SLUGS.has(slug.join("/")),
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const section = getSectionById(SECTION_ID)!;
  const item = getNavItemBySlug(SECTION_ID, slug);

  if (!item) return { title: "Not Found | Pattaya.com" };

  return createItemMetadata(section, item.label, item.description);
}

export default async function BusinessDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <SectionDetail sectionId={SECTION_ID} slug={slug} />;
}
