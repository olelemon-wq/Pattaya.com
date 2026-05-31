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
  "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
] as const;
