import { BusinessDetailPage } from "@/components/business/business-detail-page";
import { businessPages } from "@/lib/data/business-page-content";

export const metadata = businessPages.bar.metadata;

export default function BarGuidePage() {
  return <BusinessDetailPage pageId="bar" />;
}
