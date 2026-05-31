import { HiddenGemsPage } from "@/components/explore/hidden-gems-page";
import { createExploreDedicatedMetadata } from "@/lib/i18n/dedicated-page-metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return createExploreDedicatedMetadata("hidden-gems");
}

export default function HiddenGemsRoutePage() {
  return <HiddenGemsPage />;
}
