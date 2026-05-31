import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { UtilityPageContent } from "@/components/pages/standalone-pages";
import { createStandalonePageMetadata } from "@/lib/i18n/localized-metadata";
import type { StandalonePageKey } from "@/lib/i18n/messages/standalone-pages";

const utilityKeys: Record<string, StandalonePageKey> = {
  weather: "utilities/weather",
  transport: "utilities/transport",
  currency: "utilities/currency",
};

interface PageProps {
  params: Promise<{ utility: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { utility } = await params;
  const key = utilityKeys[utility];
  if (!key) return { title: "Not Found | Pattaya.com" };
  return createStandalonePageMetadata(key);
}

export function generateStaticParams() {
  return Object.keys(utilityKeys).map((utility) => ({ utility }));
}

export default async function UtilityPage({ params }: PageProps) {
  const { utility } = await params;
  if (!utilityKeys[utility]) notFound();

  return <UtilityPageContent utility={utility} />;
}
