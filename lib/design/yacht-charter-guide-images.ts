import type { YachtCharterPinId } from "@/lib/design/yacht-charter-map";

export type YachtCharterImageId = YachtCharterPinId;

export const yachtCharterGuideImagesById: Record<YachtCharterImageId, string> = {
  "ocean-marina": "/images/explore/yacht-ocean-marina.png",
  "bali-hai": "/images/explore/yacht-bali-hai.png",
  "pattaya-yacht-charters": "/images/explore/yacht-pattaya-yacht-charters.png",
  "we-charters": "/images/explore/yacht-we-charters.png",
  "manta-marina": "/images/explore/yacht-manta-marina.png",
  sailbreeze: "/images/explore/yacht-sailbreeze.png",
  "blue-voyage": "/images/explore/yacht-blue-voyage.png",
  "best-yacht-club": "/images/explore/yacht-best-yacht-club.png",
};

export function getYachtCharterGuideImage(id: YachtCharterImageId): string {
  return yachtCharterGuideImagesById[id];
}
