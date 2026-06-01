import { kohLarnImages } from "@/lib/design/koh-larn-images";

export type FamilyActivityImageId =
  | "aquaverse"
  | "tiger-park"
  | "underwater-world"
  | "khao-kheow"
  | "koh-larn"
  | "harborland"
  | "nong-nooch";

export const familyActivityImagesById: Record<FamilyActivityImageId, string> = {
  aquaverse: "/images/explore/family-activity-aquaverse.png",
  "tiger-park": "/images/explore/family-activity-tiger-park.png",
  "underwater-world": "/images/explore/family-activity-underwater-world.png",
  "khao-kheow": "/images/explore/family-activity-khao-kheow.png",
  "koh-larn": kohLarnImages.hero,
  harborland: "/images/explore/family-activity-harborland.png",
  "nong-nooch": "/images/explore/family-activity-nong-nooch.png",
};

export function getFamilyActivityImage(id: FamilyActivityImageId): string {
  return familyActivityImagesById[id];
}
