"use client";

import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/content/page-hero";
import { useLanguage } from "@/components/layout/language-provider";
import { buildStandaloneBreadcrumbs } from "@/lib/i18n/resolve-site-nav";
import {
  getEmergencyServiceName,
  getStandalonePageCopy,
  type EmergencyServiceId,
} from "@/lib/i18n/messages/standalone-pages";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import { emergencyContacts } from "@/lib/data/emergency-contacts";

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
      <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center text-sm text-zinc-600">
        {tSiteUi(language, "guideContentSoon")}
      </div>
    </>
  );
}

export function EmergencyPageContent() {
  const { language } = useLanguage();
  const copy = getStandalonePageCopy(language, "emergency");

  return (
    <>
      <Breadcrumb
        items={buildStandaloneBreadcrumbs(language, copy.title, "/emergency")}
      />
      <PageHero
        title={copy.title}
        description={copy.description}
        badge={copy.badge}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {emergencyContacts.map((entry) => (
          <div
            key={entry.id}
            className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"
          >
            <p className="font-semibold text-zinc-900">
              {getEmergencyServiceName(language, entry.id as EmergencyServiceId)}
            </p>
            <p className="mt-2 text-2xl font-bold text-teal-700">{entry.number}</p>
          </div>
        ))}
      </div>
    </>
  );
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
      <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center text-sm text-zinc-600">
        {tSiteUi(language, "directorySoon")}
      </div>
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
      <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center text-sm text-zinc-600">
        {tSiteUi(language, "forumSoon")}
      </div>
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
      <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center text-sm text-zinc-600">
        {tSiteUi(language, "apiWidgetSoon")}
      </div>
    </>
  );
}
