import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/content/page-hero";
import { buildBreadcrumbs } from "@/lib/navigation/utils";

const utilities: Record<
  string,
  { title: string; titleTh: string; description: string }
> = {
  weather: {
    title: "Weather",
    titleTh: "สภาพอากาศ",
    description: "Current weather conditions and forecast for Pattaya.",
  },
  transport: {
    title: "Traffic & Transport",
    titleTh: "การเดินทาง",
    description: "Road conditions, local transport, and U-Tapao airport info.",
  },
  currency: {
    title: "Currency Rates",
    titleTh: "ค่าเงิน",
    description: "Live exchange rates for major currencies in Thailand.",
  },
};

interface PageProps {
  params: Promise<{ utility: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { utility } = await params;
  const data = utilities[utility];
  if (!data) return { title: "Not Found | Pattaya.com" };

  return {
    title: `${data.title} | Pattaya.com`,
    description: data.description,
  };
}

export function generateStaticParams() {
  return Object.keys(utilities).map((utility) => ({ utility }));
}

export default async function UtilityPage({ params }: PageProps) {
  const { utility } = await params;
  const data = utilities[utility];
  if (!data) notFound();

  return (
    <>
      <Breadcrumb
        items={buildBreadcrumbs(data.title, `/utilities/${utility}`)}
      />
      <PageHero
        title={data.title}
        titleTh={data.titleTh}
        description={data.description}
        badge="Utility Widget"
      />
      <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center text-sm text-zinc-600">
        API widget integration coming soon.
      </div>
    </>
  );
}
