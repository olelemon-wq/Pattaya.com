"use client";

import { CloudSun, Sun, Wind } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const stats = [
  { label: "Sea & UV", value: "High", icon: Sun },
  { label: "Wind", value: "12 km/h", icon: Wind },
] as const;

function formatDateLabel(date: Date, locale: string) {
  const weekday = date.toLocaleDateString(locale, { weekday: "short" });
  const day = date.getDate();
  const month = date.toLocaleDateString(locale, { month: "short" });
  return { weekday, dayMonth: `${day} ${month}` };
}

export function PattayaWeatherWidget() {
  const [dateLabel, setDateLabel] = useState<{ weekday: string; dayMonth: string } | null>(
    null,
  );

  useEffect(() => {
    const now = new Date();
    setDateLabel(formatDateLabel(now, "th-TH"));
  }, []);

  return (
    <Link
      href="/utilities/weather"
      className="group block overflow-hidden rounded-2xl bg-gradient-to-br from-[#dbeafe] via-[#bfdbfe] to-[#93c5fd] p-[1px] shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] px-4 py-4 sm:px-5 sm:py-5">
        <div
          className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-[#FBBF24]/15 blur-2xl"
          aria-hidden
        />

        <div className="relative flex items-start justify-between gap-3">
          <h2 className="text-sm font-bold tracking-tight text-[#0A192F]">
            Pattaya Weather
          </h2>
          <div className="text-right">
            {dateLabel ? (
              <>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-[#10438f]/80">
                  {dateLabel.weekday}
                </p>
                <p className="text-xs font-bold tabular-nums text-[#0A192F]">
                  {dateLabel.dayMonth}
                </p>
              </>
            ) : (
              <p className="h-8 w-14 animate-pulse rounded-md bg-white/50" aria-hidden />
            )}
          </div>
        </div>

        <div className="relative mt-4 flex items-center justify-between gap-2">
          <div className="min-w-0 shrink-0">
            <p className="text-[2.75rem] font-extrabold leading-none tracking-tight text-[#0A192F] sm:text-5xl">
              31
              <span className="text-2xl font-bold text-[#10438f]/90 sm:text-3xl">°C</span>
            </p>
            <p className="mt-1.5 text-xs font-medium text-[#475569]">
              Feels like <span className="font-bold text-[#0A192F]">34°</span>
            </p>
          </div>

          <div className="flex shrink-0 items-center justify-center pr-0.5 sm:pr-1">
            <CloudSun
              className="h-[4.5rem] w-[4.5rem] stroke-[1.25] text-[#0A192F] drop-shadow-sm transition-transform duration-300 group-hover:scale-105 sm:h-24 sm:w-24"
              aria-hidden
            />
          </div>
        </div>

        <div className="relative mt-4 flex flex-wrap gap-2">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <span
                key={item.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/60 px-2.5 py-1 text-[10px] font-semibold text-[#0A192F] backdrop-blur-sm sm:text-[11px]"
              >
                <Icon className="h-3.5 w-3.5 shrink-0 text-[#10438f]" aria-hidden />
                <span className="text-[#64748b]">{item.label}</span>
                <span>{item.value}</span>
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  );
}
