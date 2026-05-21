import type { Metadata } from "next";
import { NewsHubPage } from "@/components/news/news-hub-page";

export const metadata: Metadata = {
  title: "News | Pattaya.com",
  description:
    "Pattaya news hub — city updates, tourism, expat visa news, nightlife, sports, and international coverage.",
};

export default function NewsPage() {
  return <NewsHubPage />;
}
