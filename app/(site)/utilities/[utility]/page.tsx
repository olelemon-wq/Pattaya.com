import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { UtilityPageContent } from "@/components/pages/standalone-pages";

const utilities = new Set(["weather", "transport", "currency"]);

interface PageProps {
  params: Promise<{ utility: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { utility } = await params;
  if (!utilities.has(utility)) return { title: "Not Found | Pattaya.com" };

  const titles: Record<string, string> = {
    weather: "Weather",
    transport: "Traffic & Transport",
    currency: "Currency Rates",
  };

  return {
    title: `${titles[utility]} | Pattaya.com`,
  };
}

export function generateStaticParams() {
  return [...utilities].map((utility) => ({ utility }));
}

export default async function UtilityPage({ params }: PageProps) {
  const { utility } = await params;
  if (!utilities.has(utility)) notFound();

  return <UtilityPageContent utility={utility} />;
}
