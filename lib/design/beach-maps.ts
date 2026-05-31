import type { BeachDetailSlug } from "@/lib/explore/beach-detail-slugs";

type BeachMapConfig = {
  /** Google Maps embed (output=embed) */
  embedSrc: string;
  openHref: string;
};

function embedFor(query: string, zoom = 15) {
  const q = encodeURIComponent(query);
  return `https://www.google.com/maps?q=${q}&hl=th&z=${zoom}&output=embed`;
}

/** Per-beach map embed + deep link (Share → Embed where available; else query embed). */
export const beachMaps: Record<BeachDetailSlug, BeachMapConfig> = {
  "pattaya-beach": {
    embedSrc: embedFor("Pattaya Beach, Pattaya City, Chon Buri", 14),
    openHref:
      "https://www.google.com/maps/search/?api=1&query=Pattaya+Beach+Chon+Buri+Thailand",
  },
  jomtien: {
    embedSrc: embedFor("Jomtien Beach, Pattaya, Chon Buri"),
    openHref:
      "https://www.google.com/maps/search/?api=1&query=Jomtien+Beach+Pattaya+Thailand",
  },
  dongtan: {
    embedSrc: embedFor("Dongtan Beach, Jomtien, Pattaya"),
    openHref:
      "https://www.google.com/maps/search/?api=1&query=Dongtan+Beach+Jomtien+Pattaya+Thailand",
  },
  naklua: {
    embedSrc: embedFor("Naklua Beach, Pattaya, Chon Buri"),
    openHref:
      "https://www.google.com/maps/search/?api=1&query=Naklua+Beach+Pattaya+Thailand",
  },
  wongamat: {
    embedSrc: embedFor("Wongamat Beach, Pattaya, Chon Buri"),
    openHref:
      "https://www.google.com/maps/search/?api=1&query=Wongamat+Beach+Pattaya+Thailand",
  },
  pratumnak: {
    embedSrc: embedFor("Pratumnak Beach, Pattaya, Chon Buri", 14),
    openHref:
      "https://www.google.com/maps/search/?api=1&query=Pratumnak+Beach+Pattaya+Thailand",
  },
};
