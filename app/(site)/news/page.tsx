import type { Metadata } from "next";
import { NewsHubPage } from "@/components/news/news-hub-page";
import { createLocalizedSectionMetadata } from "@/lib/i18n/localized-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createLocalizedSectionMetadata("news");
}

export default function NewsPage() {
  return <NewsHubPage />;
}
