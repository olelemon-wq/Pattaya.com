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
  titleTh: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
};

export function NewsCategoryHeader({
  category,
  title,
  titleTh,
  description,
  breadcrumbs,
}: NewsCategoryHeaderProps) {
  return (
    <>
      <Breadcrumb items={breadcrumbs} />
      <header className="mb-6 mt-4 sm:mb-8">
        <p className={newsTheme.eyebrow}>{category}</p>
        <h1 className={newsTheme.title}>{title}</h1>
        <p className={newsTheme.titleTh}>{titleTh}</p>
        <p className={newsTheme.description}>{description}</p>
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
