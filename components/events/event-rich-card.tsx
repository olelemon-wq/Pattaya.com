"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  ExternalLink,
  MapPin,
  MessageSquare,
  Ticket,
  Users,
} from "lucide-react";
import { eventCategoryBadgeStyles } from "@/lib/events/event-category-styles";
import type { EventsHubEvent } from "@/lib/i18n/messages/events-hub";

type EventRichCardProps = {
  event: EventsHubEvent;
  labels: {
    organizerLabel: string;
    viewMap: string;
    forumDiscuss: string;
  };
  layout?: "grid" | "list";
  featuredLabel?: string;
};

function primaryCtaClass(ticketing: EventsHubEvent["ticketing"]) {
  switch (ticketing) {
    case "free":
      return "border border-[#86efac] bg-[#ecfdf5] text-[#15803d] hover:bg-[#dcfce7]";
    case "door":
    case "online":
      return "bg-[#f97316] text-white shadow-sm hover:opacity-90";
    case "guide":
      return "bg-[#f97316] text-white shadow-sm hover:opacity-90";
    default:
      return "bg-[#f97316] text-white shadow-sm hover:opacity-90";
  }
}

export function EventRichCard({ event, labels, layout = "grid", featuredLabel }: EventRichCardProps) {
  const isList = layout === "list";
  const isGrid = !isList;
  const showPrimaryCta = event.ticketing !== "free";
  const showTicketIcon = event.ticketing === "door" || event.ticketing === "online";
  const PrimaryIcon = showTicketIcon ? Ticket : ArrowRight;

  return (
    <article
      className={`group flex h-full w-full overflow-hidden rounded-2xl border bg-white shadow-sm transition-shadow hover:shadow-lg ${
        featuredLabel ? "border-[#fdba74]" : "border-[#e2e8f0]"
      } ${isList ? "flex-col sm:flex-row" : "flex-col"}`}
    >
      <Link
        href={event.href}
        className={`relative block shrink-0 overflow-hidden ${
          isList ? "h-48 sm:h-auto sm:w-56" : "aspect-[5/3] w-full"
        }`}
      >
        <Image
          src={event.image}
          alt={event.imageAlt}
          fill
          unoptimized={!event.image.startsWith("/")}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={isList ? "224px" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"}
        />
        {featuredLabel ? (
          <span className="absolute left-3 top-3 rounded-full bg-[#f97316] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
            {featuredLabel}
          </span>
        ) : (
          <span
            className={`absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${eventCategoryBadgeStyles[event.category]}`}
          >
            {event.categoryLabel}
          </span>
        )}
        {featuredLabel ? (
          <span
            className={`absolute right-3 top-3 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${eventCategoryBadgeStyles[event.category]}`}
          >
            {event.categoryLabel}
          </span>
        ) : null}
      </Link>

      <div className="flex min-h-0 flex-1 flex-col p-4 sm:p-5">
        <div className={isGrid ? "mb-2 min-h-[2.75rem]" : "mb-2"}>
          <div className="flex min-h-5 items-center gap-2 text-[10px] font-semibold text-[#64748b] sm:text-xs">
            <span className="inline-flex min-w-0 items-center gap-1 tabular-nums text-[#f97316]">
              <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <span className="truncate">{event.time}</span>
            </span>
            <span className="shrink-0 rounded-full bg-[#f1f5f9] px-2 py-0.5">{event.priceLabel}</span>
          </div>
          <p className="mt-1 min-h-5 truncate text-[10px] font-semibold text-[#64748b] sm:text-xs">
            {event.languageLabels}
          </p>
        </div>

        <Link href={event.href}>
          <h3
            className={`line-clamp-2 font-bold leading-snug text-[#0c1a33] transition-colors group-hover:text-[#f97316] ${
              isGrid ? "min-h-[3rem] text-base sm:text-lg" : "text-base sm:text-lg"
            }`}
          >
            {event.title}
          </h3>
        </Link>

        <p className="mt-1 flex min-h-5 items-center gap-1.5 text-xs text-[#64748b]">
          <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <span className="line-clamp-1 min-w-0">{event.venue}</span>
          <span className="shrink-0 text-[#94a3b8]">·</span>
          <span className="line-clamp-1 min-w-0">{event.locationLabel}</span>
        </p>

        <p
          className={`mt-2 line-clamp-2 text-sm leading-relaxed text-[#64748b] ${
            isGrid ? "min-h-[2.75rem]" : ""
          }`}
        >
          {event.excerpt}
        </p>

        <p
          className={`mt-2 flex items-start gap-1.5 text-xs text-[#64748b] ${
            isGrid ? "min-h-[2.75rem] line-clamp-2" : ""
          }`}
        >
          <Users className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
          <span>
            <span className="font-semibold text-[#475569]">{labels.organizerLabel}:</span>{" "}
            {event.organizer}
          </span>
        </p>

        <div
          className={`mt-auto border-t border-[#f1f5f9] pt-3 ${
            isGrid
              ? showPrimaryCta
                ? "flex min-h-[5.75rem] flex-col justify-end"
                : "flex min-h-[2.75rem] flex-col justify-end"
              : "flex flex-wrap gap-2"
          }`}
        >
          {showPrimaryCta ? (
            <Link
              href={event.primaryCtaHref}
              className={`inline-flex items-center justify-center gap-1.5 rounded-full px-3.5 py-2 text-[11px] font-bold transition-opacity ${primaryCtaClass(event.ticketing)} ${
                isGrid ? "mb-2 w-full" : ""
              }`}
            >
              <PrimaryIcon className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <span className="truncate">{event.primaryCtaLabel}</span>
            </Link>
          ) : null}
          <div className={`flex gap-2 ${isGrid ? "w-full" : "flex-wrap"}`}>
            <a
              href={event.mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-[#e2e8f0] bg-white px-3 py-2 text-[11px] font-bold text-[#0c1a33] transition-colors hover:border-[#10438f]/30 hover:text-[#10438f] ${
                isGrid ? "min-w-0" : ""
              }`}
            >
              <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <span className="truncate">{labels.viewMap}</span>
              <ExternalLink className="h-3 w-3 shrink-0 opacity-60" aria-hidden />
            </a>
            <Link
              href={event.forumHref}
              className={`inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-[#e2e8f0] bg-white px-3 py-2 text-[11px] font-bold text-[#0c1a33] transition-colors hover:border-[#10438f]/30 hover:text-[#10438f] ${
                isGrid ? "min-w-0" : ""
              }`}
            >
              <MessageSquare className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <span className="truncate">{labels.forumDiscuss}</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
