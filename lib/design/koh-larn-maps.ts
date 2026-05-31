type KohLarnMapConfig = {
  embedSrc: string;
  openHref: string;
};

function embedFor(query: string, zoom = 16) {
  const q = encodeURIComponent(query);
  return `https://www.google.com/maps?q=${q}&hl=th&z=${zoom}&output=embed`;
}

/** Bali Hai Pier — main Koh Larn ferry departure point */
export const kohLarnMaps = {
  baliHai: {
    embedSrc: embedFor("Bali Hai Pier Pattaya Chon Buri Thailand", 16),
    openHref:
      "https://www.google.com/maps/search/?api=1&query=Bali+Hai+Pier+Pattaya+Thailand",
  },
} satisfies Record<string, KohLarnMapConfig>;
