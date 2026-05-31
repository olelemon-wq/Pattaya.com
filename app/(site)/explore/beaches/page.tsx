import { MainBeachesPage } from "@/components/explore/main-beaches-page";
import { createExploreDedicatedMetadata } from "@/lib/i18n/dedicated-page-metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return createExploreDedicatedMetadata("beaches");
}

export default function MainBeachesRoutePage() {
  return <MainBeachesPage />;
}
