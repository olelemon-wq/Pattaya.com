import { ShoppingMallsPage } from "@/components/explore/shopping-malls-page";
import { createExploreDedicatedMetadata } from "@/lib/i18n/dedicated-page-metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return createExploreDedicatedMetadata("shopping/malls");
}

export default function ShoppingMallsRoutePage() {
  return <ShoppingMallsPage />;
}
