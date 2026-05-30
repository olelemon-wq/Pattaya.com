"use client";

import type { NavItem } from "@/lib/navigation/types";
import { useLanguage } from "@/components/layout/language-provider";
import { formatPriorityLocalized, tSiteUi } from "@/lib/i18n/messages/site-ui";
import { priorityColor } from "@/lib/navigation/utils";

interface SectionPlaceholderProps {
  item: NavItem;
}

export function SectionPlaceholder({ item }: SectionPlaceholderProps) {
  const { language } = useLanguage();

  return (
    <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center">
      <p className="text-sm font-medium uppercase tracking-wide text-zinc-400">
        {tSiteUi(language, "comingSoon")}
      </p>
      <p className="mt-2 text-lg font-semibold text-zinc-800">{item.label}</p>
      <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-zinc-600">
        {tSiteUi(language, "placeholderBody")}
      </p>

      <dl className="mx-auto mt-6 grid max-w-lg gap-3 text-left text-sm sm:grid-cols-2">
        <div className="rounded-lg bg-white p-3">
          <dt className="text-zinc-500">{tSiteUi(language, "category")}</dt>
          <dd className="font-medium text-zinc-900">{item.category}</dd>
        </div>
        <div className="rounded-lg bg-white p-3">
          <dt className="text-zinc-500">{tSiteUi(language, "subcategory")}</dt>
          <dd className="font-medium text-zinc-900">{item.subcategory}</dd>
        </div>
        <div className="rounded-lg bg-white p-3">
          <dt className="text-zinc-500">{tSiteUi(language, "priority")}</dt>
          <dd>
            <span
              className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${priorityColor(item.priority)}`}
            >
              {formatPriorityLocalized(language, item.priority)}
            </span>
          </dd>
        </div>
        {item.monetization && (
          <div className="rounded-lg bg-white p-3">
            <dt className="text-zinc-500">{tSiteUi(language, "monetization")}</dt>
            <dd className="font-medium text-zinc-900">{item.monetization}</dd>
          </div>
        )}
      </dl>
    </div>
  );
}
