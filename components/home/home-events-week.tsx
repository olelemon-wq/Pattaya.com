"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/layout/language-provider";
import type { EventsHubEventPreview } from "@/lib/i18n/messages/events-hub";
import { HomeCardCtaButton } from "@/components/home/home-card-cta-button";
import { getHomeEventsWeek } from "@/lib/i18n/messages/events-hub";

import { eventCategoryTextStyles } from "@/lib/events/event-category-styles";

function EventCard({ event, cta }: { event: EventsHubEventPreview; cta: string }) {
  return (
    <Link
      href={event.href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative h-36 overflow-hidden sm:h-40">
        <Image
          src={event.image}
          alt={event.imageAlt}
          fill
          unoptimized={!event.image.startsWith("/")}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a33]/70 via-[#0c1a33]/10 to-transparent" />
        <span
          className={`absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${eventCategoryTextStyles[event.category]}`}
        >
          {event.categoryLabel}
        </span>
        <span className="absolute bottom-3 left-3 text-xs font-bold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)]">
          {event.time}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4 sm:gap-2">
        <h3 className="line-clamp-2 text-sm font-bold leading-snug text-[#0c1a33] transition-colors group-hover:text-[#f97316] sm:text-base">
          {event.title}
        </h3>
        {event.lines.map((line, i) => (
          <p key={i} className="line-clamp-1 text-xs leading-relaxed text-[#64748b] sm:text-sm">
            {line}
          </p>
        ))}
        <div className="mt-auto border-t border-[#f1f5f9] pt-3">
          <HomeCardCtaButton label={cta} variant="home" />
        </div>
      </div>
    </Link>
  );
}

export function HomeEventsWeek() {
  const { language } = useLanguage();
  const copy = getHomeEventsWeek(language);

  return (
    <section
      aria-labelledby="home-events-week-heading"
      className="home-section-reveal mx-auto max-w-[1280px] px-3 sm:px-4 lg:px-6"
      style={{ animationDelay: "140ms" }}
    >
      <div className="mb-5 flex items-end justify-between border-b border-[#e2e8f0] pb-3">
        <div>
          <h2 id="home-events-week-heading" className="text-xl font-extrabold text-[#0c1a33] sm:text-2xl">
            {copy.title}
          </h2>
          <p className="mt-1 text-sm text-[#64748b]">{copy.subtitle}</p>
        </div>
        <Link
          href={copy.viewAllHref}
          className="shrink-0 text-xs font-bold text-[#f97316] transition-colors hover:text-[#ea580c] sm:text-sm"
        >
          {copy.viewAll}
        </Link>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {copy.events.map((event) => (
          <EventCard key={event.id} event={event} cta={copy.eventCta} />
        ))}
      </div>
    </section>
  );
}
