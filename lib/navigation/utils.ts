import type { Priority } from "./types";

export function formatPriority(priority: Priority): string {
  const labels: Record<Priority, string> = {
    "very-high": "Very High",
    high: "High",
    medium: "Medium",
  };
  return labels[priority];
}

export function priorityColor(priority: Priority): string {
  const colors: Record<Priority, string> = {
    "very-high": "bg-red-100 text-red-800",
    high: "bg-amber-100 text-amber-800",
    medium: "bg-sky-100 text-sky-800",
  };
  return colors[priority];
}

export function buildBreadcrumbs(
  sectionLabel: string,
  sectionHref: string,
  itemLabel?: string,
  itemHref?: string,
) {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: sectionLabel, href: sectionHref },
  ];

  if (itemLabel && itemHref) {
    crumbs.push({ label: itemLabel, href: itemHref });
  }

  return crumbs;
}
