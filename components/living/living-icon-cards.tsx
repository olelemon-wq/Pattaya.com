"use client";

import { useLanguage } from "@/components/layout/language-provider";
import type { LivingIconItem } from "@/lib/i18n/living-helpers";
import { t } from "@/lib/i18n/living-helpers";
import type { LucideIcon } from "lucide-react";

type LegacyIconItem = {
  icon: LucideIcon;
  title: string;
  titleTh: string;
  titleZh?: string;
  titleRu?: string;
  text: string;
  textTh?: string;
  textZh?: string;
  textRu?: string;
};

function normalizeItem(item: LivingIconItem | LegacyIconItem): LivingIconItem {
  if ("title" in item && typeof item.title === "object") {
    return item as LivingIconItem;
  }
  const legacy = item as LegacyIconItem;
  return {
    icon: legacy.icon,
    title: {
      en: legacy.title,
      th: legacy.titleTh,
      zh: legacy.titleZh,
      ru: legacy.titleRu,
    },
    text: {
      en: legacy.text,
      th: legacy.textTh,
      zh: legacy.textZh,
      ru: legacy.textRu,
    },
  };
}

export function LivingIconCards({
  items,
  columns = 2,
}: {
  items: (LivingIconItem | LegacyIconItem)[];
  columns?: 2 | 3 | 4;
}) {
  const { language } = useLanguage();
  const grid =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 3
        ? "md:grid-cols-3"
        : "sm:grid-cols-2";

  return (
    <div className={`grid gap-4 ${grid}`}>
      {items.map((raw) => {
        const { icon: Icon, title, text } = normalizeItem(raw);
        const titleStr = t(language, title);
        return (
          <article
            key={title.en}
            className="flex gap-4 rounded-xl border border-[#e2e8f0] bg-white p-5 transition hover:border-[#D7CBBA]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B29475] text-white">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-[#0A192F]">{titleStr}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#444748]">
                {t(language, text)}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
