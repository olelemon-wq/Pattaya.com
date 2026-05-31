import type { ExploreGuideCardData } from "@/components/explore/explore-guide-types";
import { beachDetailHref } from "@/lib/explore/beach-detail-slugs";

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

export type BeachDetailLabels = {
  bestFor: string;
  access: string;
  water: string;
};

export function beachToGuideCard(
  beach: BeachCardData,
  labels: BeachDetailLabels,
  ctaLabel?: string,
): ExploreGuideCardData {
  const href = beachDetailHref(beach.id);
  return {
    id: beach.id,
    name: beach.name,
    nameTh: beach.nameTh,
    image: beach.image,
    tags: beach.vibe,
    excerpt: beach.excerpt,
    details: [
      { icon: "users", label: labels.bestFor, value: beach.bestFor },
      { icon: "navigation", label: labels.access, value: beach.access },
      { icon: "waves", label: labels.water, value: beach.water },
    ],
    ...(href && ctaLabel ? { href, ctaLabel } : href ? { href } : {}),
  };
}
