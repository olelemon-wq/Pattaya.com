import { fetchPattayaAirQuality } from "@/lib/weather/fetch-pattaya-air-quality";
import { fetchPattayaWeather } from "@/lib/weather/fetch-pattaya-weather";

export type PattayaAqiPanelSnapshot = {
  air: Awaited<ReturnType<typeof fetchPattayaAirQuality>>;
  weather: Awaited<ReturnType<typeof fetchPattayaWeather>>;
};

export async function fetchPattayaAqiPanel(): Promise<PattayaAqiPanelSnapshot> {
  const [air, weather] = await Promise.all([
    fetchPattayaAirQuality(),
    fetchPattayaWeather(),
  ]);
  return { air, weather };
}
