import type { Metadata } from "next";
import { ExploreHubPage } from "@/components/explore/explore-hub-page";

export const metadata: Metadata = {
  title: "Explore | Pattaya.com",
  description:
    "Discover Pattaya — beaches, islands, dining, cafes, shopping, family activities, yacht charters, and hidden gems.",
};

export default function ExplorePage() {
  return <ExploreHubPage />;
}
