import type { Metadata } from "next";
import { EventsTodayPage } from "@/components/events/events-today-page";

export const metadata: Metadata = {
  title: "Events Today | Pattaya.com",
  description:
    "Daily events in Pattaya — fireworks, night markets, live music, family activities, and local happenings.",
  openGraph: {
    title: "Events Today | Pattaya.com",
    description:
      "What's on in Pattaya today — festivals, markets, nightlife, and community events.",
  },
};

export default function EventsPage() {
  return <EventsTodayPage />;
}
