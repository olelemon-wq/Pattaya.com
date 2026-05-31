import { FamilyActivitiesPage } from "@/components/explore/family-activities-page";
import { createExploreDedicatedMetadata } from "@/lib/i18n/dedicated-page-metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return createExploreDedicatedMetadata("family-activities");
}

export default function FamilyActivitiesRoutePage() {
  return <FamilyActivitiesPage />;
}
