import { BusinessDetailPage } from "@/components/business/business-detail-page";
import { businessPages } from "@/lib/data/business-page-content";

export const metadata = businessPages.events.metadata;

export default function BusinessNetworkingEventsPage() {
  return <BusinessDetailPage pageId="events" />;
}
