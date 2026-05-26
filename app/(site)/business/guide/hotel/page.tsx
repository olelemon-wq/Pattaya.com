import { BusinessDetailPage } from "@/components/business/business-detail-page";
import { businessPages } from "@/lib/data/business-page-content";

export const metadata = businessPages.hotel.metadata;

export default function HotelGuidePage() {
  return <BusinessDetailPage pageId="hotel" />;
}
