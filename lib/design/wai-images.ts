import type { WaiTabId } from "@/lib/i18n/messages/living/thai-culture-survival";

/** Instructional wai photos — one per relationship context */
export const waiPhotos: Record<WaiTabId, string> = {
  monks: "/images/living/wai/wai-monks.jpg",
  elders: "/images/living/wai/wai-elders.jpg",
  peers: "/images/living/wai/wai-peers.jpg",
};

/** Thumb guide line position on photo (percentage from top) */
export const waiThumbGuideTop: Record<WaiTabId, string> = {
  monks: "22%",
  elders: "42%",
  peers: "62%",
};
