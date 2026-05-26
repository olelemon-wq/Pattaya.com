"use client";

import { ExploreGuideCarousel } from "@/components/explore/explore-guide-carousel";
import { beachToGuideCard, type BeachCardData } from "@/components/explore/beach-card";

export function BeachShorelineCarousel({ beaches }: { beaches: BeachCardData[] }) {
  return (
    <ExploreGuideCarousel
      title="Choose your shoreline"
      description="Each beach has a distinct rhythm. Use this guide to match vibe, crowd level, and access — then dive into island trips or dining from the Explore hub."
      prevLabel="Previous beaches"
      nextLabel="Next beaches"
      items={beaches.map(beachToGuideCard)}
    />
  );
}
