import type { Metadata } from "next";
import { FeaturedDirectoryPageContent } from "@/components/pages/standalone-pages";
import { createStandalonePageMetadata } from "@/lib/i18n/localized-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createStandalonePageMetadata("directory/featured");
}

export default function FeaturedBusinessesPage() {
  return <FeaturedDirectoryPageContent />;
}
