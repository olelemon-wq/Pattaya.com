import type { FineDiningMapPinId } from "@/lib/design/fine-dining-map";

export type FineDiningImageId = FineDiningMapPinId;

export const fineDiningGuideImages: Record<FineDiningImageId, string> = {
  "horizon-rooftop": "/images/explore/fine-dining-horizon-rooftop.png",
  "cafe-des-amis": "/images/explore/fine-dining-cafe-des-amis.png",
  "casa-pascal": "/images/explore/fine-dining-casa-pascal.png",
  "harlans": "/images/explore/fine-dining-harlans.png",
  "the-view": "/images/explore/fine-dining-the-view.png",
  "prego": "/images/explore/fine-dining-prego.png",
  "sky32": "/images/explore/fine-dining-sky32.png",
};

export function getFineDiningGuideImage(id: FineDiningImageId): string {
  return fineDiningGuideImages[id];
}
