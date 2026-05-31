import {
  createLocalizedItemMetadata,
  generateSectionStaticParams,
  SectionDetail,
} from "@/lib/navigation/section-pages";

const SECTION_ID = "explore";

/** Routes with dedicated pages — omit from catch-all to avoid Turbopack dev issues */
const DEDICATED_SLUGS = new Set([
  "beaches",
  "cafes",
  "family-activities",
  "hidden-gems",
  "islands/koh-larn",
  "luxury/yacht",
  "restaurants/fine-dining",
  "restaurants/street-food",
  "shopping/malls",
  "shopping/markets",
  "wellness",
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
  return createLocalizedItemMetadata(SECTION_ID, slug);
}

export default async function ExploreDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <SectionDetail sectionId={SECTION_ID} slug={slug} />;
}
