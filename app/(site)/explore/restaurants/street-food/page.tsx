import { StreetFoodPage } from "@/components/explore/street-food-page";
import { createExploreDedicatedMetadata } from "@/lib/i18n/dedicated-page-metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return createExploreDedicatedMetadata("restaurants/street-food");
}

export default function StreetFoodRoutePage() {
  return <StreetFoodPage />;
}
