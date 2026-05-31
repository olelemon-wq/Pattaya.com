/** Stable URL segment for a news article under `/news/{category}/{slug}`. */
export function slugifyNewsTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function newsArticleHref(categorySlug: string, articleSlug: string): string {
  return `/news/${categorySlug}/${articleSlug}`;
}

export function isNewsArticleHref(href: string): boolean {
  const path = href.replace(/^\/news\/?/, "");
  return path.split("/").filter(Boolean).length >= 3;
}

/** Cards that should not get a `/news/.../article-slug` detail page. */
export function isExternalNewsCardHref(href: string): boolean {
  if (!href.startsWith("/")) return true;
  return href.startsWith("/emergency") || href.startsWith("tel:");
}
