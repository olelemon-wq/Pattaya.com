import {
  createItemMetadata,
  generateSectionStaticParams,
  SectionDetail,
} from "@/lib/navigation/section-pages";
import { getNavItemBySlug, getSectionById } from "@/lib/navigation/site-map";

const SECTION_ID = "explore";

/** Routes with dedicated pages — omit from catch-all to avoid Turbopack dev issues */
const DEDICATED_SLUGS = new Set([
  "beaches",
  "cafes",
  "islands/koh-larn",
  "luxury/yacht",
  "restaurants/fine-dining",
  "restaurants/street-food",
  "shopping/malls",
  "shopping/markets",
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

export default async function ExploreDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <SectionDetail sectionId={SECTION_ID} slug={slug} />;
}
