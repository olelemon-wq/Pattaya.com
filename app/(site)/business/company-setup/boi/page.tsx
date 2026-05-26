import { BusinessDetailPage } from "@/components/business/business-detail-page";
import { businessPages } from "@/lib/data/business-page-content";

export const metadata = businessPages.boi.metadata;

export default function BoiPromotionPage() {
  return <BusinessDetailPage pageId="boi" />;
}
