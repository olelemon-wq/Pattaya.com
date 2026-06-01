/** Hero images for hidden / local-secret markets (reuse on-site assets until dedicated photos) */
export const hiddenMarketImagesById = {
  "wat-chai-mongkhon": "/images/explore/hidden-wat-chai-mongkhon.jpg",
  "lan-pho-naklua": "/images/explore/hidden-lan-pho-naklua.jpg",
  "noen-plub-wan": "/images/explore/hidden-noen-plub-wan.jpg",
  "wat-tham-samakkee": "/images/explore/hidden-wat-tham-samakkee.jpg",
  "naklua-old-town": "/images/explore/hidden-naklua-old-town.jpg",
} as const;

export type HiddenMarketImageId = keyof typeof hiddenMarketImagesById;

export function getHiddenMarketImage(id: HiddenMarketImageId): string {
  return hiddenMarketImagesById[id];
}
