import { KohLarnPage } from "@/components/explore/koh-larn-page";
import { createExploreDedicatedMetadata } from "@/lib/i18n/dedicated-page-metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return createExploreDedicatedMetadata("islands/koh-larn");
}

export default function KohLarnRoutePage() {
  return <KohLarnPage />;
}
