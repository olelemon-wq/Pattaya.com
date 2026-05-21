import { exploreImages } from "@/lib/design/explore-images";
import { images } from "@/lib/design/images";

/** Yacht & Marina page — verified HTTP 200 image URLs */
export const yachtImages = {
  hero: exploreImages.yacht,
  charterCatamaran: exploreImages.islandHopping,
  charterMotor: images.guideYacht,
  charterSuperyacht: exploreImages.skyGallery,
  routeSunset: exploreImages.skyGallery,
  routeKohKhram: exploreImages.hiddenSpots,
  routeKohLarn: images.guideBeach,
  marina: exploreImages.yacht,
  marinaLifestyle: exploreImages.caveBeachClub,
} as const;
