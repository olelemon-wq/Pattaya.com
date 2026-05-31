import { exploreImages } from "@/lib/design/explore-images";

/** Family activity cards — same order as `getFamilyActivitiesList` items */
export const familyActivityImages = [
  exploreImages.aquaverse,
  exploreImages.aquaverse,
  exploreImages.centralFestival,
  exploreImages.hiddenSpots,
] as const;

/** Day plan cards — same order as `getFamilyDayPlans` items */
export const familyDayPlanImages = [
  exploreImages.aquaverse,
  exploreImages.centralFestival,
  exploreImages.hiddenSpots,
] as const;

/** Family guide tips — same order as `getFamilyTips` items (HTTP 200 verified) */
export const familyTipImages = [
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80",
] as const;
