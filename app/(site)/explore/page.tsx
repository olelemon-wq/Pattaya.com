import type { Metadata } from "next";
import { ExploreHubPage } from "@/components/explore/explore-hub-page";
import { createLocalizedSectionMetadata } from "@/lib/i18n/localized-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createLocalizedSectionMetadata("explore");
}

export default function ExplorePage() {
  return <ExploreHubPage />;
}
