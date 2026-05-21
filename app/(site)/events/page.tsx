import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/content/page-hero";
import { buildBreadcrumbs } from "@/lib/navigation/utils";

export const metadata: Metadata = {
  title: "Events Today | Pattaya.com",
  description: "Daily events and happenings in Pattaya",
};

export default function EventsPage() {
  return (
    <>
      <Breadcrumb items={buildBreadcrumbs("Events Today", "/events")} />
      <PageHero
        title="Events Today"
        titleTh="งานวันนี้"
        description="Discover what's happening in Pattaya today — festivals, markets, and local events."
        badge="Calendar"
      />
      <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center text-sm text-zinc-600">
        Event calendar integration coming soon.
      </div>
    </>
  );
}
