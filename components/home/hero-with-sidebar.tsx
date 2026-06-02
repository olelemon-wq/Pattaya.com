"use client";

import Link from "next/link";
import { FeaturedHeroCinematic } from "@/components/home/featured-hero-cinematic";
import { PattayaWeatherWidget } from "@/components/home/pattaya-weather-widget";
import { useLanguage } from "@/components/layout/language-provider";
import { getHomeSidebar } from "@/lib/i18n/messages/home-hub";
import {
  CalendarDays,
  Car,
  ChevronRight,
  Plane,
  Radio,
  Sparkles,
} from "lucide-react";

function parseEventDate(date: string) {
  const [month, day] = date.trim().split(/\s+/);
  return { month: month ?? "", day: day ?? "" };
}

function EventsTodayCard({
  eventsToday,
  viewAll,
  promotedEvent,
  techMeetup,
  events,
}: ReturnType<typeof getHomeSidebar>) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-sm">
      <div className="flex items-center justify-between gap-2 border-b border-[#fed7aa]/70 bg-gradient-to-r from-[#fff7ed] via-[#ffedd5]/60 to-white px-4 py-3.5">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#f97316]/20 text-[#ea580c] ring-1 ring-[#fdba74]/70">
            <CalendarDays className="h-4.5 w-4.5" strokeWidth={2.25} aria-hidden />
          </span>
          <h2 className="truncate text-base font-extrabold tracking-tight text-[#0c1a33]">{eventsToday}</h2>
        </div>
        <Link
          href="/events"
          className="inline-flex shrink-0 items-center gap-0.5 rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-[#ea580c] transition-colors hover:bg-[#fff7ed] hover:text-[#c2410c]"
        >
          {viewAll}
          <ChevronRight className="h-3 w-3" aria-hidden />
        </Link>
      </div>

      <ul className="divide-y divide-[#f1f5f9] px-3 py-1">
        {events.map((event) => {
          const { month, day } = parseEventDate(event.date);
          return (
            <li key={event.title}>
              <Link
                href="/events"
                className="group flex gap-2.5 rounded-xl px-1 py-2.5 transition-colors hover:bg-[#f8fafc]"
              >
                <span
                  className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg bg-gradient-to-b from-[#fff7ed] to-[#ffedd5] text-[#ea580c] ring-1 ring-[#fed7aa]/80"
                  aria-hidden
                >
                  <span className="text-[9px] font-bold uppercase leading-none tracking-wider opacity-90">
                    {month}
                  </span>
                  <span className="mt-0.5 text-sm font-extrabold leading-none tabular-nums">{day}</span>
                </span>
                <span className="min-w-0 flex-1 pt-0.5">
                  <span className="line-clamp-2 text-[11px] font-semibold leading-snug text-[#334155] transition-colors group-hover:text-[#ea580c]">
                    {event.title}
                  </span>
                </span>
                <ChevronRight
                  className="mt-1.5 h-3.5 w-3.5 shrink-0 text-[#cbd5e1] transition-all group-hover:translate-x-0.5 group-hover:text-[#f97316]"
                  aria-hidden
                />
              </Link>
            </li>
          );
        })}
      </ul>

      <Link
        href="/events"
        className="group mx-3 mb-3 mt-auto block overflow-hidden rounded-xl border border-[#fed7aa]/60 bg-gradient-to-br from-[#fff7ed] via-[#fffbeb] to-[#fff7ed] p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition-shadow hover:shadow-md"
      >
        <div className="flex items-start gap-2">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f97316] text-white shadow-sm">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2.25} aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#f97316]">
              {promotedEvent}
            </p>
            <p className="mt-0.5 text-[11px] font-bold leading-snug text-[#0c1a33] group-hover:text-[#ea580c]">
              {techMeetup}
            </p>
          </div>
          <ChevronRight
            className="h-4 w-4 shrink-0 text-[#f97316]/50 transition-transform group-hover:translate-x-0.5 group-hover:text-[#f97316]"
            aria-hidden
          />
        </div>
      </Link>
    </div>
  );
}

const toneBar: Record<"success" | "warning" | "neutral", string> = {
  success: "bg-[#22c55e]",
  warning: "bg-[#f97316]",
  neutral: "bg-[#94a3b8]",
};

const tonePill: Record<"success" | "warning" | "neutral", string> = {
  success: "bg-[#dcfce7] text-[#15803d]",
  warning: "bg-[#ffedd5] text-[#c2410c] motion-safe:animate-pulse",
  neutral: "bg-[#e2e8f0] text-[#475569]",
};

function TrafficLiveCard({
  trafficLive,
  trafficUpdated,
  trafficViewAll,
  traffic,
}: ReturnType<typeof getHomeSidebar>) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-sm">
      <div className="flex items-center justify-between gap-2 border-b border-[#bbf7d0]/70 bg-gradient-to-r from-[#ecfdf5] via-[#bbf7d0]/35 to-white px-4 py-3.5">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#15803d]/15 text-[#15803d] ring-1 ring-[#86efac]/70">
            <Radio className="h-4 w-4" strokeWidth={2.25} aria-hidden />
          </span>
          <div className="flex min-w-0 items-center gap-1.5">
            <h2 className="truncate text-base font-extrabold tracking-tight text-[#0c1a33]">
              {trafficLive}
            </h2>
            <span className="relative flex h-2 w-2 shrink-0" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-50 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22c55e]" />
            </span>
          </div>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-[9px] font-bold uppercase tracking-wide text-[#15803d]/90">
            {trafficUpdated}
          </p>
          <Link
            href="/living/transportation/songthaew"
            className="inline-flex items-center gap-0.5 text-[11px] font-bold text-[#0c1a33] transition-colors hover:text-[#15803d]"
          >
            {trafficViewAll}
            <ChevronRight className="h-3 w-3" aria-hidden />
          </Link>
        </div>
      </div>

      <ul className="flex flex-1 flex-col justify-center divide-y divide-[#f1f5f9] px-3 py-3">
        {traffic.map((item) => {
          const Icon = item.kind === "airport" ? Plane : Car;
          return (
            <li key={item.road}>
              <Link
                href={item.href}
                className="group flex items-center gap-2.5 rounded-xl py-2 pl-1 pr-1 transition-colors hover:bg-[#f8fafc]"
              >
                <span
                  className={`w-1 shrink-0 self-stretch rounded-full ${toneBar[item.tone]}`}
                  aria-hidden
                />
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f8fafc] text-[#475569] ring-1 ring-[#e2e8f0]">
                  <Icon className="h-4 w-4" strokeWidth={2} aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-xs font-semibold text-[#0c1a33] group-hover:text-[#15803d]">
                    {item.road}
                  </span>
                </span>
                <span
                  className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${tonePill[item.tone]}`}
                >
                  {item.status}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function HeroWithSidebar() {
  const { language } = useLanguage();
  const sidebar = getHomeSidebar(language);

  return (
    <section className="mx-auto max-w-[1280px] space-y-5 px-4 py-6 lg:px-6">
      <FeaturedHeroCinematic />

      <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-3 md:gap-5">
        <EventsTodayCard {...sidebar} />
        <div className="h-full min-h-0">
          <PattayaWeatherWidget />
        </div>
        <TrafficLiveCard {...sidebar} />
      </div>
    </section>
  );
}
