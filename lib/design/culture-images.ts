import type { FlipCardId } from "@/lib/i18n/messages/living/thai-culture-survival";

const base = "/images/living/culture/dos-donts";

/** Individual do / don't illustrations per topic */
export const dosDontsImages: Record<FlipCardId, { do: string; dont: string }> = {
  shoes: { do: `${base}/shoes-do.png`, dont: `${base}/shoes-dont.png` },
  "head-feet": { do: `${base}/head-feet-do.png`, dont: `${base}/head-feet-dont.png` },
  temper: { do: `${base}/temper-do.png`, dont: `${base}/temper-dont.png` },
};
