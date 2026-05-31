import { FineDiningPage } from "@/components/explore/fine-dining-page";
import { createExploreDedicatedMetadata } from "@/lib/i18n/dedicated-page-metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return createExploreDedicatedMetadata("restaurants/fine-dining");
}

export default function FineDiningRoutePage() {
  return <FineDiningPage />;
}
