export type MainTab = "home" | "news" | "living" | "explore" | "business";

export type Priority = "very-high" | "high" | "medium";

export interface NavItem {
  slug: string;
  label: string;
  labelTh: string;
  description: string;
  category: string;
  subcategory: string;
  priority: Priority;
  monetization?: string;
  features?: string;
  href: string;
}

export interface MainSection {
  id: MainTab;
  label: string;
  labelTh: string;
  description: string;
  href: string;
  items: NavItem[];
}

export interface HomeWidget {
  id: string;
  label: string;
  labelTh: string;
  description: string;
  href?: string;
  priority: Priority;
  monetization?: string;
  features?: string;
}
