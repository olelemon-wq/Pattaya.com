"use client";

import Link from "next/link";
import { FeaturedHeroCinematic } from "@/components/home/featured-hero-cinematic";
import { PattayaWeatherWidget } from "@/components/home/pattaya-weather-widget";
import { useLanguage } from "@/components/layout/language-provider";
import { getHomeSidebar } from "@/lib/i18n/messages/home-hub";

function StatusPill({
  status,
  tone,
}: {
  status: string;
  tone: "success" | "warning" | "neutral";
}) {
  const styles = {
    success: "bg-[#dcfce7] text-[#15803d]",
    warning: "bg-[#ffedd5] text-[#c2410c]",
    neutral: "bg-[#e2e8f0] text-[#475569]",
  };
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${styles[tone]}`}>
      {status}
    </span>
  );
}

export function HeroWithSidebar() {
  const { language } = useLanguage();
  const sidebar = getHomeSidebar(language);

  return (
    <section className="mx-auto grid max-w-[1280px] gap-5 px-4 py-6 lg:grid-cols-[1fr_300px] lg:px-6">
      <FeaturedHeroCinematic />

      <aside className="flex flex-col gap-4">
        <div className="rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-bold text-[#0c1a33]">{sidebar.eventsToday}</h2>
            <Link href="/events" className="text-[10px] font-bold text-[#f97316]">
              {sidebar.viewAll}
            </Link>
          </div>
          <ul className="space-y-3">
            {sidebar.events.map((event) => (
              <li key={event.title} className="flex gap-3">
                <span className="shrink-0 text-[10px] font-bold leading-tight text-[#f97316]">
                  {event.date.split(" ").map((part, i) => (
                    <span key={i} className="block">
                      {part}
                    </span>
                  ))}
                </span>
                <span className="text-xs font-medium text-[#0c1a33]">{event.title}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 rounded-xl bg-[#fff7ed] p-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[#f97316]">
              {sidebar.promotedEvent}
            </p>
            <p className="mt-1 text-xs font-semibold text-[#0c1a33]">{sidebar.techMeetup}</p>
          </div>
        </div>

        <PattayaWeatherWidget />

        <div className="rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-sm">
          <h2 className="mb-3 text-sm font-bold text-[#0c1a33]">{sidebar.trafficLive}</h2>
          <ul className="space-y-2.5">
            {sidebar.traffic.map((item) => (
              <li key={item.road} className="flex items-center justify-between gap-2">
                <span className="text-xs font-medium text-[#0c1a33]">{item.road}</span>
                <StatusPill status={item.status} tone={item.tone} />
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
}
