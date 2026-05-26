import { BusinessDetailPage } from "@/components/business/business-detail-page";
import { businessPages } from "@/lib/data/business-page-content";

export const metadata = businessPages.restaurant.metadata;

export default function RestaurantGuidePage() {
  return <BusinessDetailPage pageId="restaurant" />;
}
