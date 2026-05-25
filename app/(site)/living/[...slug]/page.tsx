import {
  createItemMetadata,
  generateSectionStaticParams,
  SectionDetail,
} from "@/lib/navigation/section-pages";
import { getNavItemBySlug, getSectionById } from "@/lib/navigation/site-map";

const SECTION_ID = "living";

/** Handled by living/housing/[slug] or living/visa/[slug] — omit from catch-all */
const DEDICATED_SLUGS = new Set([
  "visa/retirement",
  "visa/thailand-elite",
  "visa/work-permit",
  "visa/90-day-report",
  "housing/condo-buying",
  "housing/rentals",
  "housing/ownership",
  "culture/etiquette",
  "culture/thai-culture",
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

export default async function LivingDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <SectionDetail sectionId={SECTION_ID} slug={slug} />;
}
