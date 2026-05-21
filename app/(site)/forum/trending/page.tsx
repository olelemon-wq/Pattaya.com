import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/content/page-hero";
import { buildBreadcrumbs } from "@/lib/navigation/utils";

export const metadata: Metadata = {
  title: "Trending Forum | Pattaya.com",
  description: "Popular community discussions in Pattaya",
};

export default function TrendingForumPage() {
  return (
    <>
      <Breadcrumb
        items={buildBreadcrumbs("Trending Forum", "/forum/trending")}
      />
      <PageHero
        title="Trending Forum"
        titleTh="กระทู้ยอดนิยม"
        description="See what the Pattaya community is talking about right now."
        badge="Community"
      />
      <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center text-sm text-zinc-600">
        Forum integration planned for a future phase.
      </div>
    </>
  );
}
