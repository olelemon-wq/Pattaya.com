import { beachesImages } from "@/lib/design/beaches-images";
import { exploreImages } from "@/lib/design/explore-images";

/** Dining zone cards — same order as `getDiningZones` items */
export const fineDiningZoneImages = [
  beachesImages.pratumnak,
  beachesImages.wongAmat,
  beachesImages.pattayaBeach,
] as const;

export const fineDiningTipImages = [
  exploreImages.cafeLifestyle,
  exploreImages.skyGallery,
  exploreImages.hiddenSpots,
  exploreImages.caveBeachClub,
] as const;
