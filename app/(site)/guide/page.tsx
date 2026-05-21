import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/content/page-hero";
import { buildBreadcrumbs } from "@/lib/navigation/utils";

export const metadata: Metadata = {
  title: "Pattaya Guide | Pattaya.com",
  description: "Essential city guide for visitors and residents in Pattaya",
};

export default function GuidePage() {
  return (
    <>
      <Breadcrumb items={buildBreadcrumbs("Pattaya Guide", "/guide")} />
      <PageHero
        title="Pattaya Guide"
        titleTh="คู่มือเมือง"
        description="Your essential guide to navigating Pattaya — neighborhoods, basics, and must-know tips."
        badge="Home Widget"
      />
      <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center text-sm text-zinc-600">
        City guide content coming soon.
      </div>
    </>
  );
}
