import type { WellnessPinId } from "@/lib/design/wellness-map";

export type WellnessImageId = WellnessPinId;

const wellnessGuideImages: Record<WellnessImageId, string> = {
  "oasis-spa-jomtien": "/images/explore/wellness-oasis-spa.jpg",
  "cliff-spa-pattaya": "/images/explore/wellness-cliff-spa.png",
  "yunomori-onsen": "/images/explore/wellness-yunomori-onsen.png",
  "lets-relax-onsen-pattaya": "/images/explore/wellness-lets-relax-onsen.jpg",
  "health-land-sukhumvit": "/images/explore/wellness-health-land.png",
  "tea-tree-spa": "/images/explore/wellness-tea-tree-spa.png",
  "pra-nita-spa": "/images/explore/wellness-pra-nita-spa.jpg",
  "thai-sabai-massage": "/images/explore/wellness-thai-sabai-massage.png",
};

export function getWellnessGuideImage(id: WellnessImageId): string {
  return wellnessGuideImages[id];
}
