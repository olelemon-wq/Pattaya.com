import {
  PATTAYA_LAT,
  PATTAYA_LON,
  PATTAYA_TIMEZONE,
} from "@/lib/weather/pattaya-coords";

export type PattayaWeatherSnapshot = {
  fetchedAt: string;
  current: {
    temperature: number;
    apparentTemperature: number;
    humidity: number;
    windKmh: number;
    uvIndex: number;
    precipitation: number;
    weatherCode: number;
  };
  daily: Array<{
    date: string;
    weatherCode: number;
    tempMax: number;
    tempMin: number;
    precipChance: number;
    uvMax: number;
  }>;
};

type OpenMeteoResponse = {
  current?: {
    time: string;
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    precipitation: number;
    weather_code: number;
    wind_speed_10m: number;
    uv_index: number;
  };
  daily?: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_probability_max: number[];
    uv_index_max: number[];
  };
};

const FORECAST_URL = new URL("https://api.open-meteo.com/v1/forecast");
FORECAST_URL.searchParams.set("latitude", String(PATTAYA_LAT));
FORECAST_URL.searchParams.set("longitude", String(PATTAYA_LON));
FORECAST_URL.searchParams.set(
  "current",
  "temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,uv_index",
);
FORECAST_URL.searchParams.set(
  "daily",
  "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max",
);
FORECAST_URL.searchParams.set("timezone", PATTAYA_TIMEZONE);
FORECAST_URL.searchParams.set("forecast_days", "7");

export async function fetchPattayaWeather(): Promise<PattayaWeatherSnapshot> {
  const res = await fetch(FORECAST_URL.toString(), { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Weather API ${res.status}`);
  }
  const data = (await res.json()) as OpenMeteoResponse;
  const cur = data.current;
  const daily = data.daily;
  if (!cur || !daily?.time?.length) {
    throw new Error("Incomplete weather response");
  }

  return {
    fetchedAt: cur.time,
    current: {
      temperature: Math.round(cur.temperature_2m),
      apparentTemperature: Math.round(cur.apparent_temperature),
      humidity: Math.round(cur.relative_humidity_2m),
      windKmh: Math.round(cur.wind_speed_10m),
      uvIndex: Math.round(cur.uv_index * 10) / 10,
      precipitation: cur.precipitation,
      weatherCode: cur.weather_code,
    },
    daily: daily.time.map((date, i) => ({
      date,
      weatherCode: daily.weather_code[i] ?? 0,
      tempMax: Math.round(daily.temperature_2m_max[i] ?? 0),
      tempMin: Math.round(daily.temperature_2m_min[i] ?? 0),
      precipChance: Math.round(daily.precipitation_probability_max[i] ?? 0),
      uvMax: Math.round((daily.uv_index_max[i] ?? 0) * 10) / 10,
    })),
  };
}
