"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { getHomeWeather } from "@/lib/i18n/messages/home-hub";
import { CloudSun, Sun, Wind } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

function formatDateLabel(date: Date, locale: string) {
  const weekday = date.toLocaleDateString(locale, { weekday: "short" });
  const day = date.getDate();
  const month = date.toLocaleDateString(locale, { month: "short" });
  return { weekday, dayMonth: `${day} ${month}` };
}

export function PattayaWeatherWidget() {
  const { language } = useLanguage();
  const copy = getHomeWeather(language);
  const [dateLabel, setDateLabel] = useState<{ weekday: string; dayMonth: string } | null>(
    null,
  );

  useEffect(() => {
    setDateLabel(formatDateLabel(new Date(), copy.locale));
  }, [copy.locale]);

  const stats = [
    { label: copy.seaUv, value: copy.high, icon: Sun },
    { label: copy.wind, value: "12 km/h", icon: Wind },
  ] as const;

  return (
    <Link
      href="/utilities/weather"
      className="group flex h-full overflow-hidden rounded-2xl border border-[#e2e8f0]/90 bg-white shadow-sm transition-shadow hover:border-[#bae6fd]/80 hover:shadow-md"
    >
      <div className="relative flex min-h-full flex-1 flex-col overflow-hidden px-4 py-4 sm:px-5 sm:py-5">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#fafcff] via-[#f4f9ff] to-[#eef6fc]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-4 -top-4 h-36 w-36 bg-[radial-gradient(circle,rgba(251,191,36,0.14)_0%,transparent_68%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-10 -left-6 h-32 w-32 bg-[radial-gradient(circle,rgba(125,211,252,0.12)_0%,transparent_70%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent"
          aria-hidden
        />

        <div className="relative flex items-start justify-between gap-3">
          <h2 className="text-sm font-bold tracking-tight text-[#0A192F]">{copy.title}</h2>
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
              {copy.feelsLike} <span className="font-bold text-[#0A192F]">34°</span>
            </p>
          </div>

          <div className="relative flex shrink-0 items-center justify-center pr-0.5 sm:pr-1">
            <span
              className="absolute h-16 w-16 rounded-full bg-white/50 ring-1 ring-white/80 sm:h-20 sm:w-20"
              aria-hidden
            />
            <CloudSun
              className="relative h-[4.5rem] w-[4.5rem] stroke-[1.15] text-[#0c4a6e] transition-transform duration-300 group-hover:scale-105 sm:h-24 sm:w-24"
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
                className="inline-flex items-center gap-1.5 rounded-full border border-[#e2e8f0]/60 bg-white/75 px-2.5 py-1 text-[10px] font-semibold text-[#0A192F] shadow-[0_1px_2px_rgba(15,23,42,0.04)] backdrop-blur-sm sm:text-[11px]"
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
