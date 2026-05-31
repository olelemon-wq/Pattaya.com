import {
  createLocalizedItemMetadata,
  generateSectionStaticParams,
  SectionDetail,
} from "@/lib/navigation/section-pages";

const SECTION_ID = "living";

/** Handled by category [slug] routes — omit from catch-all */
const DEDICATED_SLUGS = new Set([
  "visa/retirement",
  "visa/thailand-elite",
  "visa/work-permit",
  "visa/90-day-report",
  "housing/condo-buying",
  "housing/rentals",
  "housing/ownership",
  "cost-of-living/utilities",
  "healthcare/hospitals",
  "healthcare/insurance",
  "transportation/songthaew",
  "transportation/ride-apps",
  "transportation/driving",
  "culture/etiquette",
  "culture/thai-culture",
  "safety/scam-alerts",
  "safety/emergency-guide",
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

export default async function LivingDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <SectionDetail sectionId={SECTION_ID} slug={slug} />;
}
