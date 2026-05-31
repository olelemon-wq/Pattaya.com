import { WellnessPage } from "@/components/explore/wellness-page";
import { createExploreDedicatedMetadata } from "@/lib/i18n/dedicated-page-metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return createExploreDedicatedMetadata("wellness");
}

export default function WellnessRoutePage() {
  return <WellnessPage />;
}
