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
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-sm transition-shadow hover:border-[#bae6fd]/80 hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-2 border-b border-[#bae6fd]/70 bg-gradient-to-r from-[#e0f2fe] via-[#bae6fd]/35 to-white px-4 py-3.5">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0ea5e9]/20 text-[#0284c7] ring-1 ring-[#7dd3fc]/70">
            <CloudSun className="h-4 w-4" strokeWidth={2.25} aria-hidden />
          </span>
          <h2 className="truncate text-base font-extrabold tracking-tight text-[#0c1a33]">
            {copy.title}
          </h2>
        </div>
        <div className="shrink-0 text-right">
          {dateLabel ? (
            <>
              <p className="text-[9px] font-bold uppercase tracking-wide text-[#0284c7]/90">
                {dateLabel.weekday}
              </p>
              <p className="text-[11px] font-bold tabular-nums text-[#0c1a33]">
                {dateLabel.dayMonth}
              </p>
            </>
          ) : (
            <p className="h-7 w-12 animate-pulse rounded-md bg-white/60" aria-hidden />
          )}
        </div>
      </div>

      <div className="relative flex min-h-0 flex-1 flex-col justify-between overflow-hidden px-4 py-3.5 sm:px-4 sm:py-4">
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

        <div className="relative flex w-full max-w-[17.5rem] items-center justify-between gap-3 pt-0.5 sm:max-w-[19rem] sm:gap-4">
          <div className="min-w-0 shrink-0 pl-1 sm:pl-1.5">
            <p className="text-[3.05rem] font-extrabold leading-none tracking-tight text-[#0A192F] sm:text-[3.25rem]">
              31
              <span className="text-[1.95rem] font-bold text-[#2f5aa3] sm:text-[2.1rem]">°C</span>
            </p>
            <p className="mt-1 text-[0.92rem] font-semibold text-[#64748b]">
              {copy.feelsLike} <span className="font-bold text-[#0A192F]">34°</span>
            </p>
          </div>

          <div className="relative flex shrink-0 items-center justify-center">
            <span
              className="absolute h-16 w-16 rounded-full bg-white/50 ring-1 ring-white/80 sm:h-[4.5rem] sm:w-[4.5rem]"
              aria-hidden
            />
            <CloudSun
              className="relative h-16 w-16 stroke-[1.15] text-[#0c4a6e] transition-transform duration-300 group-hover:scale-105 sm:h-[4.5rem] sm:w-[4.5rem]"
              aria-hidden
            />
          </div>
        </div>

        <div className="relative flex flex-wrap gap-2.5 pt-3.5">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <span
                key={item.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#dbeafe] bg-white/85 px-3 py-1 text-xs font-semibold text-[#0A192F] shadow-[0_1px_2px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-[13px]"
              >
                <Icon className="h-3.5 w-3.5 shrink-0 text-[#10438f] sm:h-4 sm:w-4" aria-hidden />
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
