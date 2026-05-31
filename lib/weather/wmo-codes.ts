/** WMO weather interpretation codes (Open-Meteo) → UI category */
export type WeatherKind =
  | "clear"
  | "partly"
  | "cloudy"
  | "fog"
  | "drizzle"
  | "rain"
  | "showers"
  | "thunder";

export function wmoToKind(code: number): WeatherKind {
  if (code === 0) return "clear";
  if (code >= 1 && code <= 3) return code === 3 ? "cloudy" : "partly";
  if (code === 45 || code === 48) return "fog";
  if (code >= 51 && code <= 57) return "drizzle";
  if (code >= 61 && code <= 67) return "rain";
  if (code >= 71 && code <= 77) return "rain";
  if (code >= 80 && code <= 82) return "showers";
  if (code >= 95) return "thunder";
  return "partly";
}
