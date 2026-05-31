import type { Metadata } from "next";
import { EventsTodayPage } from "@/components/events/events-today-page";
import { createEventsPageMetadata } from "@/lib/i18n/localized-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createEventsPageMetadata();
}

export default function EventsPage() {
  return <EventsTodayPage />;
}
