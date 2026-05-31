import { exploreImages } from "@/lib/design/explore-images";
import { images } from "@/lib/design/images";

/** Departure points — same order as `getYachtDeparturePoints` items */
export const yachtDepartureImages = [
  exploreImages.yacht,
  images.guideBeach,
  exploreImages.islandHopping,
] as const;

/** Charter styles — same order as `getYachtCharterTypes` items */
export const yachtCharterTypeImages = [
  exploreImages.islandHopping,
  images.guideYacht,
  exploreImages.skyGallery,
] as const;

/** Day plan cards — same order as `getYachtDayPlans` items */
export const yachtDayPlanImages = [
  exploreImages.yacht,
  images.guideBeach,
  exploreImages.hiddenSpots,
] as const;

/** Yacht guide tips — same order as `getYachtTips` items (HTTP 200 verified) */
export const yachtTipImages = [
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80",
] as const;
