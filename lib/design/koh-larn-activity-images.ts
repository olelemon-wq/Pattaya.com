import type { KohLarnActivityId } from "@/lib/i18n/messages/explore-koh-larn-activities-guide";

export const kohLarnActivityImages: Record<KohLarnActivityId, string> = {
  jetski: "/images/explore/koh-larn-activity-jetski.png",
  "banana-boat": "/images/explore/koh-larn-activity-banana-boat.png",
  parasailing: "/images/explore/koh-larn-activity-parasailing.png",
  snorkeling: "/images/explore/koh-larn-activity-snorkeling.png",
  "island-tour": "/images/explore/koh-larn-activity-island-tour.png",
  "paddle-kayak": "/images/explore/koh-larn-activity-paddle-kayak.png",
  "sunset-boat": "/images/explore/koh-larn-activity-sunset-boat.png",
};

export function getKohLarnActivityImage(id: KohLarnActivityId): string {
  return kohLarnActivityImages[id];
}
