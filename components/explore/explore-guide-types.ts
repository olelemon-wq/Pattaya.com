export type GuideIconName =
  | "clock"
  | "mapPin"
  | "film"
  | "coffee"
  | "soup"
  | "users"
  | "navigation"
  | "waves"
  | "store"
  | "anchor"
  | "sparkles"
  | "gem";

export type ExploreGuideDetail = {
  icon: GuideIconName;
  label: string;
  value: string;
};

export type ExploreGuideCardData = {
  id: string;
  name: string;
  nameTh: string;
  image: string;
  tags: string[];
  excerpt: string;
  details: ExploreGuideDetail[];
  href?: string;
  ctaLabel?: string;
};
