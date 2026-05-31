"use client";

import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/content/page-hero";
import { useLanguage } from "@/components/layout/language-provider";
import { buildStandaloneBreadcrumbs } from "@/lib/i18n/resolve-site-nav";
import {
  getEmergencyServiceName,
  getStandalonePageCopy,
  getStandalonePlaceholderLinks,
  type EmergencyServiceId,
} from "@/lib/i18n/messages/standalone-pages";
import { tSiteUi, tSiteUiTemplate } from "@/lib/i18n/messages/site-ui";
import { emergencyContacts, emergencyTelHref } from "@/lib/data/emergency-contacts";
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
            <a
              href={emergencyTelHref(entry.number)}
              className="mt-4 inline-flex rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-800"
              aria-label={tSiteUiTemplate(language, "callNumber", { number: entry.number })}
            >
              {tSiteUiTemplate(language, "callNumber", { number: entry.number })}
            </a>
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
      <ComingSoonPanel messageKey="apiWidgetSoon" />
    </>
  );
}
