"use client";

import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/content/page-hero";
import { useLanguage } from "@/components/layout/language-provider";
import { buildStandaloneBreadcrumbs } from "@/lib/i18n/resolve-site-nav";
import {
  getStandalonePageCopy,
  getStandalonePlaceholderLinks,
} from "@/lib/i18n/messages/standalone-pages";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import { EmergencyPage } from "@/components/emergency/emergency-page";
import { PattayaWeatherPage } from "@/components/utilities/pattaya-weather-page";
import Link from "next/link";

function ComingSoonPanel({
  messageKey,
  linkKey,
}: {
  messageKey: "guideContentSoon" | "directorySoon" | "forumSoon" | "apiWidgetSoon";
  linkKey?: "guide" | "directory/featured" | "forum/trending";
}) {
  const { language } = useLanguage();
  const links = linkKey ? getStandalonePlaceholderLinks(language, linkKey) : [];

  return (
    <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center text-sm text-zinc-600">
      <p>{tSiteUi(language, messageKey)}</p>
      {links.length > 0 ? (
        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            {tSiteUi(language, "exploreWhileWaiting")}
          </p>
          <ul className="mt-3 flex flex-wrap justify-center gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 transition hover:border-teal-600 hover:text-teal-700"
                >
                  {link.label} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export function GuidePageContent() {
  const { language } = useLanguage();
  const copy = getStandalonePageCopy(language, "guide");

  return (
    <>
      <Breadcrumb
        items={buildStandaloneBreadcrumbs(language, copy.title, "/guide")}
      />
      <PageHero
        title={copy.title}
        description={copy.description}
        badge={copy.badge}
      />
      <ComingSoonPanel messageKey="guideContentSoon" linkKey="guide" />
    </>
  );
}

export function EmergencyPageContent() {
  return <EmergencyPage />;
}

export function FeaturedDirectoryPageContent() {
  const { language } = useLanguage();
  const copy = getStandalonePageCopy(language, "directory/featured");

  return (
    <>
      <Breadcrumb
        items={buildStandaloneBreadcrumbs(
          language,
          copy.title,
          "/directory/featured",
        )}
      />
      <PageHero
        title={copy.title}
        description={copy.description}
        badge={copy.badge}
      />
      <ComingSoonPanel messageKey="directorySoon" linkKey="directory/featured" />
    </>
  );
}

export function TrendingForumPageContent() {
  const { language } = useLanguage();
  const copy = getStandalonePageCopy(language, "forum/trending");

  return (
    <>
      <Breadcrumb
        items={buildStandaloneBreadcrumbs(
          language,
          copy.title,
          "/forum/trending",
        )}
      />
      <PageHero
        title={copy.title}
        description={copy.description}
        badge={copy.badge}
      />
      <ComingSoonPanel messageKey="forumSoon" linkKey="forum/trending" />
    </>
  );
}

type UtilityKey = "utilities/weather" | "utilities/transport" | "utilities/currency";

const utilityPaths: Record<string, UtilityKey> = {
  weather: "utilities/weather",
  transport: "utilities/transport",
  currency: "utilities/currency",
};

export function UtilityPageContent({ utility }: { utility: string }) {
  const { language } = useLanguage();
  const key = utilityPaths[utility];
  if (!key) return null;

  const copy = getStandalonePageCopy(language, key);

  return (
    <>
      <Breadcrumb
        items={buildStandaloneBreadcrumbs(
          language,
          copy.title,
          `/utilities/${utility}`,
        )}
      />
      <PageHero
        title={copy.title}
        description={copy.description}
        badge={copy.badge}
      />
      {utility === "weather" ? (
        <PattayaWeatherPage />
      ) : (
        <ComingSoonPanel messageKey="apiWidgetSoon" />
      )}
    </>
  );
}
