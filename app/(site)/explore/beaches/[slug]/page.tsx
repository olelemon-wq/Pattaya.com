import { BeachDetailPage } from "@/components/explore/beach-detail-page";
import { BEACH_DETAIL_SLUGS, isBeachDetailSlug } from "@/lib/explore/beach-detail-slugs";
import { createBeachDetailMetadata } from "@/lib/i18n/dedicated-page-metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BEACH_DETAIL_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return createBeachDetailMetadata(slug);
}

export default async function BeachDetailRoutePage({ params }: PageProps) {
  const { slug } = await params;
  if (!isBeachDetailSlug(slug)) notFound();
  return <BeachDetailPage slug={slug} />;
}
