import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/content/page-hero";
import { buildBreadcrumbs } from "@/lib/navigation/utils";

export const metadata: Metadata = {
  title: "Featured Businesses | Pattaya.com",
  description: "Sponsored business listings in Pattaya",
};

export default function FeaturedBusinessesPage() {
  return (
    <>
      <Breadcrumb
        items={buildBreadcrumbs("Featured Businesses", "/directory/featured")}
      />
      <PageHero
        title="Featured Businesses"
        titleTh="ธุรกิจแนะนำ"
        description="Discover top-rated and sponsored businesses in Pattaya."
        badge="Directory"
      />
      <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center text-sm text-zinc-600">
        Business directory listings coming soon.
      </div>
    </>
  );
}
