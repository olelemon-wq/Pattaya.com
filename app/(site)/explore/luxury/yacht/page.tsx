import { YachtMarinaPage } from "@/components/explore/yacht-marina-page";
import { createExploreDedicatedMetadata } from "@/lib/i18n/dedicated-page-metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return createExploreDedicatedMetadata("luxury/yacht");
}

export default function YachtMarinaRoutePage() {
  return <YachtMarinaPage />;
}
