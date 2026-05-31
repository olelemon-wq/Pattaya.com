"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { LivingFaqSection } from "@/components/living/living-faq-section";
import { livingCtaButtonClass } from "@/components/living/living-cta-actions";
import { livingTheme } from "@/lib/design/living-theme";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import {
  getWeatherKindLabel,
  getWeatherPage,
  weatherFaqs,
} from "@/lib/i18n/messages/utilities/weather-page";
import { fetchPattayaWeather, type PattayaWeatherSnapshot } from "@/lib/weather/fetch-pattaya-weather";
import { wmoToKind, type WeatherKind } from "@/lib/weather/wmo-codes";
import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSun,
  Droplets,
  RefreshCw,
  Sun,
  Umbrella,
  Wind,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const kindIcons: Record<WeatherKind, typeof Sun> = {
  clear: Sun,
  partly: CloudSun,
  cloudy: Cloud,
  fog: CloudFog,
  drizzle: CloudDrizzle,
  rain: CloudRain,
  showers: CloudRain,
  thunder: CloudLightning,
};

function WeatherIcon({
  kind,
  className,
}: {
  kind: WeatherKind;
  className?: string;
}) {
  const Icon = kindIcons[kind];
  return <Icon className={className} aria-hidden />;
}

function formatUpdated(iso: string, locale: string) {
  try {
    return new Date(iso).toLocaleString(locale, {
      dateStyle: "medium",
      timeStyle: "short",
    });
  } catch {
    return iso;
  }
}

function formatDay(dateIso: string, locale: string, todayLabel: string, index: number) {
  if (index === 0) return todayLabel;
  try {
    return new Date(dateIso + "T12:00:00").toLocaleDateString(locale, {
      weekday: "short",
    });
  } catch {
    return dateIso;
  }
}

function CurrentWeatherCard({
  data,
  locale,
  copy,
}: {
  data: PattayaWeatherSnapshot;
  locale: string;
  copy: ReturnType<typeof getWeatherPage>;
}) {
  const { language } = useLanguage();
  const kind = wmoToKind(data.current.weatherCode);
  const label = getWeatherKindLabel(language, kind);

  return (
    <section
      className="relative overflow-hidden rounded-2xl border border-[#bae6fd]/80 bg-gradient-to-br from-[#f0f9ff] via-white to-[#e0f2fe] p-6 shadow-sm sm:p-8"
      aria-label={label}
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.2)_0%,transparent_70%)]"
        aria-hidden
      />
      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-[#10438f]">{label}</p>
          <p className="mt-1 text-6xl font-extrabold tracking-tight text-[#0A192F] sm:text-7xl">
            {data.current.temperature}
            <span className="text-3xl font-bold text-[#10438f]/90 sm:text-4xl">°C</span>
          </p>
          <p className="mt-2 text-sm text-[#475569]">
            {copy.feelsLike}{" "}
            <span className="font-bold text-[#0A192F]">{data.current.apparentTemperature}°</span>
          </p>
          <p className="mt-3 text-xs text-[#64748b]">
            {copy.updated}: {formatUpdated(data.fetchedAt, locale)}
          </p>
        </div>
        <div className="flex shrink-0 items-center justify-center">
          <span
            className="flex h-28 w-28 items-center justify-center rounded-full bg-white/70 ring-1 ring-white shadow-inner sm:h-32 sm:w-32"
            aria-hidden
          >
            <WeatherIcon kind={kind} className="h-16 w-16 text-[#0c4a6e] sm:h-20 sm:w-20" />
          </span>
        </div>
      </div>

      <dl className="relative mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { icon: Droplets, label: copy.humidity, value: `${data.current.humidity}%` },
          { icon: Wind, label: copy.wind, value: `${data.current.windKmh} km/h` },
          { icon: Sun, label: copy.uv, value: String(data.current.uvIndex) },
          {
            icon: Umbrella,
            label: copy.precip,
            value: `${data.current.precipitation} ${copy.mm}`,
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-white/80 bg-white/75 px-3 py-2.5 shadow-sm backdrop-blur-sm"
          >
            <dt className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-[#64748b]">
              <item.icon className="h-3.5 w-3.5 text-[#10438f]" aria-hidden />
              {item.label}
            </dt>
            <dd className="mt-1 text-sm font-bold text-[#0A192F]">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function ForecastRow({
  data,
  copy,
}: {
  data: PattayaWeatherSnapshot;
  copy: ReturnType<typeof getWeatherPage>;
}) {
  const { language } = useLanguage();

  return (
    <section aria-labelledby="forecast-title">
      <h2 id="forecast-title" className={livingTheme.headingSm}>
        {copy.sevenDay}
      </h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
        {data.daily.map((day, index) => {
          const kind = wmoToKind(day.weatherCode);
          return (
            <li
              key={day.date}
              className="flex flex-col rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-sm"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-[#10438f]">
                {formatDay(day.date, copy.locale, copy.today, index)}
              </p>
              <div className="mt-2 flex items-center justify-between gap-2">
                <WeatherIcon kind={kind} className="h-8 w-8 text-[#0c4a6e]" />
                <p className="text-lg font-bold text-[#0A192F]">
                  {day.tempMax}°
                  <span className="text-sm font-medium text-[#64748b]"> / {day.tempMin}°</span>
                </p>
              </div>
              <p className="mt-2 text-[11px] text-[#64748b]">
                {copy.rainChance}:{" "}
                <span className="font-semibold text-[#0A192F]">{day.precipChance}%</span>
              </p>
              <p className="mt-0.5 text-[11px] text-[#64748b]">
                {copy.uv}: <span className="font-semibold text-[#0A192F]">{day.uvMax}</span>
              </p>
              <p className="mt-2 line-clamp-2 text-[10px] leading-snug text-[#475569]">
                {getWeatherKindLabel(language, kind)}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-6" aria-busy="true">
      <div className="h-48 rounded-2xl bg-[#e2e8f0]" />
      <div className="grid gap-3 sm:grid-cols-4 lg:grid-cols-7">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="h-28 rounded-xl bg-[#e2e8f0]" />
        ))}
      </div>
    </div>
  );
}

export function PattayaWeatherPage() {
  const { language } = useLanguage();
  const copy = getWeatherPage(language);
  const [weather, setWeather] = useState<PattayaWeatherSnapshot | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const data = await fetchPattayaWeather();
      setWeather(data);
    } catch {
      setError(true);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-[#64748b]">{copy.source}</p>
        <button
          type="button"
          onClick={() => void load()}
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-lg border border-[#e2e8f0] bg-white px-3 py-2 text-sm font-semibold text-[#0A192F] transition hover:border-[#0ea5e9] hover:text-[#0369a1] disabled:opacity-50"
        >
          <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} aria-hidden />
          {copy.refresh}
        </button>
      </div>

      {loading && !weather ? <LoadingSkeleton /> : null}

      {error && !weather ? (
        <p
          className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950"
          role="status"
        >
          {copy.loadError}
        </p>
      ) : null}

      {weather ? (
        <>
          <CurrentWeatherCard data={weather} locale={copy.locale} copy={copy} />
          <ForecastRow data={weather} copy={copy} />
        </>
      ) : null}

      <section aria-labelledby="seasons-title">
        <h2 id="seasons-title" className={livingTheme.heading}>
          {copy.seasonsTitle}
        </h2>
        <p className={`mt-2 max-w-3xl ${livingTheme.muted}`}>{copy.seasonsSubtitle}</p>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {copy.seasons.map((season) => (
            <li
              key={season.id}
              className="rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-[#0ea5e9]">
                {season.months}
              </p>
              <h3 className="mt-2 text-lg font-bold text-[#0A192F]">{season.title}</h3>
              <p className="mt-1 text-sm font-semibold text-[#10438f]">{season.temp}</p>
              <p className={`mt-3 ${livingTheme.body}`}>{season.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="tips-title">
        <h2 id="tips-title" className={livingTheme.headingSm}>
          {copy.tipsTitle}
        </h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-3">
          {copy.tips.map((tip) => (
            <li
              key={tip.title}
              className="rounded-xl border border-[#D7CBBA]/50 bg-[#faf7f2] p-4"
            >
              <h3 className="font-bold text-[#0A192F]">{tip.title}</h3>
              <p className={`mt-2 ${livingTheme.body}`}>{tip.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <LivingFaqSection
        faqs={weatherFaqs}
        subtitle={faqSubtitle(language, "Weather", "สภาพอากาศ", "天气", "Погода")}
        titleId="weather-faq-title"
      />

      <nav
        className="flex flex-wrap gap-3 border-t border-[#e2e8f0] pt-8"
        aria-label="Related"
      >
        <Link href="/living" className={livingCtaButtonClass.primary}>
          {copy.livingHub}
        </Link>
        <Link href="/events" className={livingCtaButtonClass.outline}>
          {copy.events}
        </Link>
        <Link href="/explore/beaches" className={livingCtaButtonClass.outline}>
          {copy.beaches}
        </Link>
        <Link href="/living/transportation/songthaew" className={livingCtaButtonClass.outline}>
          {copy.transport}
        </Link>
      </nav>
    </div>
  );
}
