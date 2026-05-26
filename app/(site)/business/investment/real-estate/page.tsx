import { BusinessDetailPage } from "@/components/business/business-detail-page";
import { businessPages } from "@/lib/data/business-page-content";

export const metadata = businessPages["real-estate"].metadata;

export default function RealEstateInvestmentPage() {
  return <BusinessDetailPage pageId="real-estate" />;
}
