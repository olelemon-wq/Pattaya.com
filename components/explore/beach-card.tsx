import type { ExploreGuideCardData } from "@/components/explore/explore-guide-types";

export type BeachCardData = {
  id: string;
  name: string;
  nameTh: string;
  image: string;
  vibe: string[];
  bestFor: string;
  access: string;
  water: string;
  excerpt: string;
};

export function beachToGuideCard(beach: BeachCardData): ExploreGuideCardData {
  return {
    id: beach.id,
    name: beach.name,
    nameTh: beach.nameTh,
    image: beach.image,
    tags: beach.vibe,
    excerpt: beach.excerpt,
    details: [
      { icon: "users", label: "Best for", value: beach.bestFor },
      { icon: "navigation", label: "Access", value: beach.access },
      { icon: "waves", label: "Water", value: beach.water },
    ],
  };
}
