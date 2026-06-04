"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { getHomeAqi } from "@/lib/i18n/messages/home-hub";
import { aqiScalePercent, getAqiLevel, type AqiBand } from "@/lib/weather/aqi-levels";
import {
  fetchPattayaAqiPanel,
  type PattayaAqiPanelSnapshot,
} from "@/lib/weather/fetch-pattaya-aqi-panel";
import { CloudFog, Droplets, Thermometer, Wind } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const SCALE_MARKS = [50, 100, 150, 200, 250, 300] as const;

function levelLabel(
  band: AqiBand,
  levels: ReturnType<typeof getHomeAqi>["levels"],
): string {
  return levels[band];
}

export function PattayaAqiWidget() {
  const { language } = useLanguage();
  const copy = getHomeAqi(language);
  const [panel, setPanel] = useState<PattayaAqiPanelSnapshot | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchPattayaAqiPanel();
      setPanel(data);
    } catch {
      setPanel(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const aqi = panel?.air.usAqi;
  const level = aqi != null ? getAqiLevel(aqi) : null;
  const statusLabel = level ? levelLabel(level.band, copy.levels) : null;
  const pm25Line = copy.pm25At.replace("{location}", copy.location);

  return (
    <Link
      href="/utilities/weather"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-sm transition-shadow hover:border-[#86efac]/80 hover:shadow-md"
      aria-busy={loading}
    >
      <div className="flex items-center justify-between gap-2 border-b border-[#bbf7d0]/70 bg-gradient-to-r from-[#ecfdf5] via-[#d1fae5]/50 to-white px-4 py-3.5">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#15803d]/15 text-[#15803d] ring-1 ring-[#86efac]/70">
            <CloudFog className="h-4 w-4" strokeWidth={2.25} aria-hidden />
          </span>
          <h2 className="truncate text-base font-extrabold tracking-tight text-[#0c1a33]">
            {copy.title}
          </h2>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <span className="relative flex h-2 w-2" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-50 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22c55e]" />
          </span>
          <span className="text-[9px] font-bold uppercase tracking-wide text-[#15803d]">
            {copy.updated}
          </span>
        </div>
      </div>

      <div className="relative flex min-h-0 flex-1 flex-col px-4 py-3.5">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#f8fdf9] via-white to-[#f0fdf4]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-6 top-0 h-28 w-28 bg-[radial-gradient(circle,rgba(34,197,94,0.12)_0%,transparent_70%)]"
          aria-hidden
        />

        {loading ? (
          <div className="relative space-y-3">
            <div className="h-14 w-24 animate-pulse rounded-lg bg-[#e2e8f0]/80" />
            <div className="h-3 w-full animate-pulse rounded bg-[#e2e8f0]/60" />
            <div className="h-5 w-full animate-pulse rounded-full bg-[#e2e8f0]/50" />
            <div className="grid grid-cols-3 gap-2 pt-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-10 animate-pulse rounded-lg bg-[#e2e8f0]/40" />
              ))}
            </div>
          </div>
        ) : panel && aqi != null && level && statusLabel ? (
          <div className="relative flex min-h-0 flex-1 flex-col">
            <div className="flex items-start gap-3">
              <p
                className="text-[2.75rem] font-extrabold leading-none tabular-nums tracking-tight sm:text-[3rem]"
                style={{ color: level.valueColor }}
              >
                {aqi}
              </p>
              <div className="min-w-0 pt-1">
                <p
                  className="text-lg font-bold leading-tight"
                  style={{ color: level.labelColor }}
                >
                  {statusLabel}
                </p>
                <p className="mt-1 text-[11px] leading-snug text-[#64748b]">
                  {copy.pm25Label}{" "}
                  <span className="font-bold text-[#0c1a33]">
                    {panel.air.pm25} µg/m³
                  </span>{" "}
                  {pm25Line}
                </p>
              </div>
            </div>

            <div className="mt-3.5">
              <div className="relative h-5 overflow-hidden rounded-full shadow-inner ring-1 ring-black/5">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-[#22c55e] via-[#eab308] via-30% via-[#f97316] via-45% via-[#ef4444] via-60% via-[#ec4899] via-75% to-[#a855f7]"
                  aria-hidden
                />
                {SCALE_MARKS.map((mark) => (
                  <span
                    key={mark}
                    className="absolute top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 text-[8px] font-bold tabular-nums text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.45)]"
                    style={{ left: `${(mark / 300) * 100}%` }}
                    aria-hidden
                  >
                    {mark}
                  </span>
                ))}
                <span
                  className="absolute top-1/2 z-[2] h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#0c1a33] shadow-md"
                  style={{ left: `${aqiScalePercent(aqi)}%` }}
                  aria-hidden
                />
              </div>
            </div>

            <div className="mt-auto grid grid-cols-3 divide-x divide-[#e2e8f0] border-t border-[#e2e8f0] pt-3">
              <div className="pr-2 text-center">
                <p className="flex items-center justify-center gap-1 text-[10px] font-semibold text-[#64748b]">
                  <Thermometer className="h-3 w-3" aria-hidden />
                  {copy.temp}
                </p>
                <p className="mt-0.5 text-sm font-bold tabular-nums text-[#0c1a33]">
                  {panel.weather.current.temperature}°C
                </p>
              </div>
              <div className="px-2 text-center">
                <p className="flex items-center justify-center gap-1 text-[10px] font-semibold text-[#64748b]">
                  <Wind className="h-3 w-3" aria-hidden />
                  {copy.wind}
                </p>
                <p className="mt-0.5 text-sm font-bold tabular-nums text-[#0c1a33]">
                  {panel.weather.current.windKmh} km/h
                </p>
              </div>
              <div className="pl-2 text-center">
                <p className="flex items-center justify-center gap-1 text-[10px] font-semibold text-[#64748b]">
                  <Droplets className="h-3 w-3" aria-hidden />
                  {copy.humidity}
                </p>
                <p className="mt-0.5 text-sm font-bold tabular-nums text-[#0c1a33]">
                  {panel.weather.current.humidity}%
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p className="relative text-sm font-semibold text-[#64748b]">{copy.unavailable}</p>
        )}
      </div>
    </Link>
  );
}
