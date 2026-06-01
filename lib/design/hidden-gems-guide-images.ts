import type { HiddenGemPinId } from "@/lib/design/hidden-gems-map";

export type HiddenGemImageId = HiddenGemPinId;

const hiddenGemGuideImages: Record<HiddenGemImageId, string> = {
  "white-house-beach-cafe": "/images/explore/hidden-white-house-beach-cafe.jpg",
  "cave-beach-club-morning": "/images/explore/hidden-cave-beach-club.jpg",
  "bang-saray-beach": "/images/explore/hidden-bang-saray-beach.jpg",
  "khao-chi-chan-golden-hour": "/images/explore/hidden-khao-chi-chan.jpg",
  "je-tum-seafood-bang-saray": "/images/explore/hidden-je-tum-seafood.jpg",
  "pa-tid-kitchen-naklua": "/images/explore/hidden-pa-tid-kitchen.jpg",
  "dicey-reillys-bars": "/images/explore/hidden-dicey-reillys.jpg",
  "sky-mountain-pattaya": "/images/explore/hidden-sky-mountain.jpg",
  "mabprachan-lake-cafes": "/images/explore/hidden-mabprachan-lake.png",
};

export function getHiddenGemGuideImage(id: HiddenGemImageId): string {
  return hiddenGemGuideImages[id];
}
