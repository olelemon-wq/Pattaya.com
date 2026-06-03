import type { TickerVariant } from "@/lib/i18n/messages/ticker";

/** Background colors for breaking-news ticker bars (shared with home card CTAs). */
export const tickerBarBackground = {
  home: "#f97316",
  news: "#10438f",
  living: "#B29475",
  explore: "#B52E88",
  business: "#363636",
  classifieds: "#C7856D",
} as const satisfies Record<TickerVariant, string>;
