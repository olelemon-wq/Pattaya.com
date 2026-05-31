import {
  createLocalizedItemMetadata,
  generateSectionStaticParams,
  SectionDetail,
} from "@/lib/navigation/section-pages";

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
  return createLocalizedItemMetadata(SECTION_ID, slug);
}

export default async function BusinessDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <SectionDetail sectionId={SECTION_ID} slug={slug} />;
}
