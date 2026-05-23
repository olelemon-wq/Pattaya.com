export type NewsCategoryHero = {
  title: string;
  excerpt: string;
  byline: string;
  image: string;
  imageAlt: string;
  ctaLabel?: string;
  featuredLabel?: string;
};

export type NewsCategorySpotlight = {
  id: string;
  badge: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  overlayClass: string;
  href: string;
  cta: string;
};

export type NewsCategoryArticle = {
  href: string;
  image: string;
  imageAlt: string;
  badge: string;
  badgeClass: string;
  title: string;
  excerpt: string;
  footer: string;
};

export type NewsCategoryFooter = {
  title: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  variant?: "default" | "accent" | "property";
};

export type NewsCategoryContent = {
  hero: NewsCategoryHero;
  spotlights: NewsCategorySpotlight[];
  articles: NewsCategoryArticle[];
  headlinesTitle?: string;
  footer?: NewsCategoryFooter;
};
