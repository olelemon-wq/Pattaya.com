import type { Metadata } from "next";
import { TrendingForumPageContent } from "@/components/pages/standalone-pages";

export const metadata: Metadata = {
  title: "Trending Forum | Pattaya.com",
  description: "Popular community discussions in Pattaya",
};

export default function TrendingForumPage() {
  return <TrendingForumPageContent />;
}
