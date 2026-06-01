import { shoppingImages } from "@/lib/design/shopping-images";

export type ShoppingMallImageId =
  | "central-pattaya"
  | "terminal-21"
  | "outlet-mall"
  | "central-marina"
  | "gems-gallery";

export const shoppingMallGuideImages: Record<ShoppingMallImageId, string> = {
  "central-pattaya": shoppingImages.centralFestival,
  "terminal-21": shoppingImages.terminal21,
  "outlet-mall": "/images/explore/mall-outlet-mall.png",
  "central-marina": "/images/explore/mall-central-marina.png",
  "gems-gallery": "/images/explore/mall-gems-gallery.png",
};

export function getMallGuideImage(id: ShoppingMallImageId): string {
  return shoppingMallGuideImages[id];
}
