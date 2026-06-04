export type AqiBand =
  | "good"
  | "moderate"
  | "unhealthySensitive"
  | "unhealthy"
  | "veryUnhealthy"
  | "hazardous";

export type AqiLevel = {
  band: AqiBand;
  /** Large AQI number color */
  valueColor: string;
  /** Status label text color */
  labelColor: string;
};

const LEVELS: Array<{ max: number; level: AqiLevel }> = [
  {
    max: 50,
    level: {
      band: "good",
      valueColor: "#4d7c0f",
      labelColor: "#0c1a33",
    },
  },
  {
    max: 100,
    level: {
      band: "moderate",
      valueColor: "#a16207",
      labelColor: "#0c1a33",
    },
  },
  {
    max: 150,
    level: {
      band: "unhealthySensitive",
      valueColor: "#c2410c",
      labelColor: "#0c1a33",
    },
  },
  {
    max: 200,
    level: {
      band: "unhealthy",
      valueColor: "#dc2626",
      labelColor: "#0c1a33",
    },
  },
  {
    max: 300,
    level: {
      band: "veryUnhealthy",
      valueColor: "#db2777",
      labelColor: "#0c1a33",
    },
  },
  {
    max: Infinity,
    level: {
      band: "hazardous",
      valueColor: "#7e22ce",
      labelColor: "#0c1a33",
    },
  },
];

export function getAqiLevel(aqi: number): AqiLevel {
  const safe = Math.max(0, Math.round(aqi));
  return (LEVELS.find((entry) => safe <= entry.max) ?? LEVELS[LEVELS.length - 1]).level;
}

/** 0–300+ mapped to scale bar (reference UI) */
export function aqiScalePercent(aqi: number): number {
  return Math.min(100, Math.max(0, (aqi / 300) * 100));
}
