import { shoppingImages } from "@/lib/design/shopping-images";

/** Mall cards — same order as `getShoppingMalls` items */
export const shoppingMallImages = [
  shoppingImages.centralFestival,
  "/images/explore/terminal-21-pattaya.png",
  "/images/explore/royal-garden-plaza.png",
  "/images/explore/harbor-mike-mall.png",
] as const;

/** Mall guide tip cards — same order as `getMallTips` items (HTTP 200 verified) */
export const shoppingMallTipImages = [
  "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
] as const;
