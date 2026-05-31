export const BEACH_DETAIL_SLUGS = [
  "pattaya-beach",
  "jomtien",
  "dongtan",
  "naklua",
  "wongamat",
  "pratumnak",
] as const;

export type BeachDetailSlug = (typeof BEACH_DETAIL_SLUGS)[number];

export function isBeachDetailSlug(slug: string): slug is BeachDetailSlug {
  return (BEACH_DETAIL_SLUGS as readonly string[]).includes(slug);
}

export function beachDetailHref(beachId: string): string | undefined {
  if (!isBeachDetailSlug(beachId)) return undefined;
  return `/explore/beaches/${beachId}`;
}
