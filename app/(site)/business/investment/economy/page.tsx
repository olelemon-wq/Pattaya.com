import { BusinessDetailPage } from "@/components/business/business-detail-page";
import { businessPages } from "@/lib/data/business-page-content";

export const metadata = businessPages.economy.metadata;

export default function PattayaEconomyPage() {
  return <BusinessDetailPage pageId="economy" />;
}
