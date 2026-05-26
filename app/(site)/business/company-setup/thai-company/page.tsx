import { BusinessDetailPage } from "@/components/business/business-detail-page";
import { businessPages } from "@/lib/data/business-page-content";

export const metadata = businessPages["thai-company"].metadata;

export default function ThaiCompanyPage() {
  return <BusinessDetailPage pageId="thai-company" />;
}
