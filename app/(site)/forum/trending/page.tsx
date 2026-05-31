import type { Metadata } from "next";
import { TrendingForumPageContent } from "@/components/pages/standalone-pages";
import { createStandalonePageMetadata } from "@/lib/i18n/localized-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createStandalonePageMetadata("forum/trending");
}

export default function TrendingForumPage() {
  return <TrendingForumPageContent />;
}
