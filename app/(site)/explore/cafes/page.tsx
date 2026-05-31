import { CafesPage } from "@/components/explore/cafes-page";
import { createExploreDedicatedMetadata } from "@/lib/i18n/dedicated-page-metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return createExploreDedicatedMetadata("cafes");
}

export default function CafesRoutePage() {
  return <CafesPage />;
}
