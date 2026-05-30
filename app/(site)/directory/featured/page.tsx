import type { Metadata } from "next";
import { FeaturedDirectoryPageContent } from "@/components/pages/standalone-pages";

export const metadata: Metadata = {
  title: "Featured Businesses | Pattaya.com",
  description: "Sponsored business listings in Pattaya",
};

export default function FeaturedBusinessesPage() {
  return <FeaturedDirectoryPageContent />;
}
