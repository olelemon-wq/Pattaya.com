import { beachesImages } from "@/lib/design/beaches-images";
import { exploreImages } from "@/lib/design/explore-images";

/** Café zone cards — same order as `getCafeZones` items */
export const cafeZoneImages = [
  beachesImages.jomtien,
  beachesImages.pattayaBeach,
  beachesImages.pratumnak,
  beachesImages.wongAmat,
] as const;

export const cafeTipImages = [
  exploreImages.skyGallery,
  exploreImages.cafeLifestyle,
  exploreImages.caveBeachClub,
  exploreImages.weekendGuide,
] as const;
