"use client";

import Link from "next/link";
import type { NavItem } from "@/lib/navigation/types";
import { useLanguage } from "@/components/layout/language-provider";
import { formatPriorityLocalized } from "@/lib/i18n/messages/site-ui";
import { priorityColor } from "@/lib/navigation/utils";

interface CategoryCardProps {
  item: NavItem;
}

export function CategoryCard({ item }: CategoryCardProps) {
  const { language } = useLanguage();

  return (
    <Link
      href={item.href}
      className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:border-teal-300 hover:shadow-md"
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-zinc-400">
          {item.category}
        </span>
        <span
          className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${priorityColor(item.priority)}`}
        >
          {formatPriorityLocalized(language, item.priority)}
        </span>
      </div>

      <h3 className="text-base font-semibold text-zinc-900 group-hover:text-teal-700">
        {item.label}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600">
        {item.description}
      </p>

      {(item.monetization || item.features) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.monetization && (
            <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600">
              {item.monetization}
            </span>
          )}
          {item.features && (
            <span className="rounded-md bg-teal-50 px-2 py-1 text-xs text-teal-700">
              {item.features}
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
