import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import {
  Breadcrumb,
  type BreadcrumbItem,
} from "@/components/layout/breadcrumb";
import { newsTheme } from "@/lib/design/news-theme";
import type { ReactNode } from "react";

export function NewsPageFrame({ children }: { children: ReactNode }) {
  return (
    <div data-full-bleed className={newsTheme.page}>
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="news" />
      </div>
      <div className={newsTheme.container}>{children}</div>
    </div>
  );
}

type NewsCategoryHeaderProps = {
  category: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  categoryBadge: string;
  categoryIntro?: string;
};

export function NewsCategoryHeader({
  category,
  title,
  description,
  breadcrumbs,
  categoryBadge,
  categoryIntro,
}: NewsCategoryHeaderProps) {
  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <header className="mb-6 mt-4 sm:mb-8">
        <span className="inline-block rounded-full border border-[#10438f]/20 bg-[#eff6ff] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#10438f]">
          {categoryBadge}
        </span>
        <p className={`${newsTheme.eyebrow} mt-3`}>{category}</p>
        <h1 className={newsTheme.title}>{title}</h1>
        <p className={newsTheme.description}>{description}</p>
        {categoryIntro ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#64748b]">{categoryIntro}</p>
        ) : null}
      </header>
    </>
  );
}

export function NewsSectionHeading({
  title,
  action,
}: {
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className={`${newsTheme.sectionBorder} gap-4`}>
      <h2 className={newsTheme.sectionTitle}>{title}</h2>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
