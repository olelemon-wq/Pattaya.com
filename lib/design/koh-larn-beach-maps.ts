export type KohLarnBeachId = "tawaen" | "samae" | "nual" | "tien";

type KohLarnBeachMapConfig = {
  openHref: string;
};

function openFor(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export const kohLarnBeachMaps: Record<KohLarnBeachId, KohLarnBeachMapConfig> = {
  tawaen: { openHref: openFor("Ta Waen Beach Koh Larn Thailand") },
  samae: { openHref: openFor("Samae Beach Koh Larn Thailand") },
  nual: { openHref: openFor("Nual Beach Koh Larn Thailand") },
  tien: { openHref: openFor("Tien Beach Koh Larn Thailand") },
};
