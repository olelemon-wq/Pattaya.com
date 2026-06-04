import {
  PATTAYA_LAT,
  PATTAYA_LON,
  PATTAYA_TIMEZONE,
} from "@/lib/weather/pattaya-coords";

export type PattayaAirQualitySnapshot = {
  fetchedAt: string;
  usAqi: number;
  pm25: number;
  pm10: number;
};

type OpenMeteoAirResponse = {
  current?: {
    time: string;
    us_aqi: number;
    pm2_5: number;
    pm10: number;
  };
};

const AIR_URL = new URL("https://air-quality-api.open-meteo.com/v1/air-quality");
AIR_URL.searchParams.set("latitude", String(PATTAYA_LAT));
AIR_URL.searchParams.set("longitude", String(PATTAYA_LON));
AIR_URL.searchParams.set("current", "us_aqi,pm2_5,pm10");
AIR_URL.searchParams.set("timezone", PATTAYA_TIMEZONE);

export async function fetchPattayaAirQuality(): Promise<PattayaAirQualitySnapshot> {
  const res = await fetch(AIR_URL.toString(), { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Air quality API ${res.status}`);
  }
  const data = (await res.json()) as OpenMeteoAirResponse;
  const cur = data.current;
  if (!cur || cur.us_aqi == null || cur.pm2_5 == null) {
    throw new Error("Incomplete air quality response");
  }

  return {
    fetchedAt: cur.time,
    usAqi: Math.round(cur.us_aqi),
    pm25: Math.round(cur.pm2_5 * 10) / 10,
    pm10: Math.round((cur.pm10 ?? 0) * 10) / 10,
  };
}
