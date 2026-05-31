import { ShoppingMarketsPage } from "@/components/explore/shopping-markets-page";
import { createExploreDedicatedMetadata } from "@/lib/i18n/dedicated-page-metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return createExploreDedicatedMetadata("shopping/markets");
}

export default function ShoppingMarketsRoutePage() {
  return <ShoppingMarketsPage />;
}
