"use client";

import { EventRichCard } from "@/components/events/event-rich-card";
import { EventsHeroSlider } from "@/components/events/events-hero-slider";
import { EventsMonthCalendar } from "@/components/events/events-month-calendar";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { useLanguage } from "@/components/layout/language-provider";
import type { EventCategoryId, EventLanguageTag, EventLocationArea, EventPriceTier } from "@/lib/i18n/messages/events-hub";
import { buildStandaloneBreadcrumbs } from "@/lib/i18n/resolve-site-nav";
import { getEventsHub } from "@/lib/i18n/messages/events-hub";
import { eventOccursOn, formatSelectedDayHeading, defaultSelectedDateInMonth } from "@/lib/events/event-schedule";
import Link from "next/link";
import { useMemo, useState } from "react";

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function EventsTodayPage() {
  const { language } = useLanguage();
  const hub = getEventsHub(language);
  const breadcrumbs = buildStandaloneBreadcrumbs(language, hub.hero.title, "/events");

  const [selectedDateKey, setSelectedDateKey] = useState(() =>
    defaultSelectedDateInMonth(hub.calendarYear, hub.initialCalendarMonth, hub.eventIds),
  );
  const [category, setCategory] = useState<"all" | EventCategoryId>("all");
  const [location, setLocation] = useState<"all" | EventLocationArea>("all");
  const [price, setPrice] = useState<"all" | EventPriceTier>("all");
  const [langFilter, setLangFilter] = useState<"all" | EventLanguageTag>("all");

  const filteredEvents = useMemo(() => {
    return hub.allEvents.filter((event) => {
      if (!eventOccursOn(event.id, selectedDateKey)) return false;
      if (category !== "all" && event.category !== category) return false;
      if (location !== "all" && event.locationArea !== location) return false;
      if (price !== "all" && event.priceTier !== price) return false;
      if (langFilter !== "all") {
        const matches =
          event.languageTags.includes(langFilter) ||
          (langFilter !== "multi" && event.languageTags.includes("multi"));
        if (!matches) return false;
      }
      return true;
    });
  }, [hub.allEvents, selectedDateKey, category, location, price, langFilter]);

  const hasActiveFilters =
    category !== "all" || location !== "all" || price !== "all" || langFilter !== "all";

  const isToday = selectedDateKey === hub.todayKey;
  const todaySpotlight = hub.todayEvents[0];
  const showSpotlight = isToday && todaySpotlight != null && eventOccursOn(todaySpotlight.id, selectedDateKey);

  const gridEvents = useMemo(() => {
    if (!showSpotlight || !todaySpotlight) return filteredEvents;
    const rest = filteredEvents.filter((event) => event.id !== todaySpotlight.id);
    return [todaySpotlight, ...rest];
  }, [filteredEvents, showSpotlight, todaySpotlight]);

  const cardLabels = {
    organizerLabel: hub.filters.organizerLabel,
    viewMap: hub.filters.viewMap,
    forumDiscuss: hub.filters.forumDiscuss,
  };

  const dayHeading = formatSelectedDayHeading(selectedDateKey, hub.locale, hub.todayLabel);

  return (
    <>
      <Breadcrumb items={breadcrumbs} />

      <section className="mb-10 md:mb-12" aria-label={hub.hero.title}>
        <EventsHeroSlider />
      </section>

      {/* Category browse */}
      <section className="mb-8" aria-label={hub.filters.category}>
        <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {hub.browseCategories.map((item) => {
            const selected = category === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setCategory(item.id)}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2 text-xs font-bold transition-colors sm:text-sm",
                  selected
                    ? "bg-[#f97316] text-white shadow-sm"
                    : "border border-[#e2e8f0] bg-white text-[#475569] hover:border-[#f97316]/40 hover:text-[#f97316]",
                )}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Calendar + events — stacked mobile, sidebar desktop */}
      <div className="mb-10 lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
        <aside className="mb-8 lg:mb-0 lg:sticky lg:top-6" aria-label={hub.filters.calendarTitle}>
          <section className="rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-sm sm:p-5 lg:p-4">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="text-sm font-extrabold text-[#0c1a33]">{hub.filters.calendarTitle}</h2>
              {hasActiveFilters ? (
                <button
                  type="button"
                  onClick={() => {
                    setCategory("all");
                    setLocation("all");
                    setPrice("all");
                    setLangFilter("all");
                  }}
                  className="text-xs font-bold text-[#f97316] hover:text-[#ea580c]"
                >
                  {hub.filters.clearFilters}
                </button>
              ) : null}
            </div>

            <EventsMonthCalendar
              eventIds={hub.eventIds}
              locale={hub.locale}
              labels={{
                today: hub.todayLabel,
                yearOverview: hub.filters.yearOverview,
              }}
              selectedDateKey={selectedDateKey}
              onSelectDate={setSelectedDateKey}
            />

            <div className="mt-5 grid gap-3 border-t border-[#e2e8f0] pt-5 sm:grid-cols-2 lg:grid-cols-2 lg:gap-3 lg:pt-4">
              <label className="block">
                <span className="mb-1 block text-[10px] font-bold uppercase tracking-wide text-[#64748b]">
                  {hub.filters.category}
                </span>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as typeof category)}
                  className="w-full rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-3 py-2.5 text-sm font-semibold text-[#0c1a33] lg:py-2 lg:text-xs"
                >
                  {hub.browseCategories.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mb-1 block text-[10px] font-bold uppercase tracking-wide text-[#64748b]">
                  {hub.filters.location}
                </span>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value as typeof location)}
                  className="w-full rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-3 py-2.5 text-sm font-semibold text-[#0c1a33] lg:py-2 lg:text-xs"
                >
                  {hub.locationFilters.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mb-1 block text-[10px] font-bold uppercase tracking-wide text-[#64748b]">
                  {hub.filters.price}
                </span>
                <select
                  value={price}
                  onChange={(e) => setPrice(e.target.value as typeof price)}
                  className="w-full rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-3 py-2.5 text-sm font-semibold text-[#0c1a33] lg:py-2 lg:text-xs"
                >
                  {hub.priceFilters.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mb-1 block text-[10px] font-bold uppercase tracking-wide text-[#64748b]">
                  {hub.filters.language}
                </span>
                <select
                  value={langFilter}
                  onChange={(e) => setLangFilter(e.target.value as typeof langFilter)}
                  className="w-full rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-3 py-2.5 text-sm font-semibold text-[#0c1a33] lg:py-2 lg:text-xs"
                >
                  {hub.languageFilters.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </section>
        </aside>

        <section aria-labelledby="events-results-heading" className="min-w-0">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-[#e2e8f0] pb-4">
            <div className="flex min-w-0 flex-wrap items-end gap-3">
              <h2 id="events-results-heading" className="text-xl font-extrabold text-[#0c1a33] sm:text-2xl lg:text-xl xl:text-2xl">
                {dayHeading}
              </h2>
              <span className="mb-1.5 h-1 w-10 shrink-0 rounded-full bg-[#f97316]" aria-hidden />
            </div>
            <span className="rounded-full bg-[#fff7ed] px-3.5 py-1.5 text-xs font-bold text-[#c2410c] ring-1 ring-[#fed7aa]">
              {hub.filters.resultsCount(filteredEvents.length)}
            </span>
          </div>

          {gridEvents.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-[#e2e8f0] bg-white p-8 text-center text-sm text-[#64748b]">
              {hub.filters.noResults}
            </p>
          ) : (
            <ul className="grid auto-rows-fr items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-2">
              {gridEvents.map((event) => (
                <li key={event.id} className="h-full min-h-0">
                  <EventRichCard
                    event={event}
                    labels={cardLabels}
                    featuredLabel={showSpotlight && todaySpotlight && event.id === todaySpotlight.id ? hub.sections.featuredLabel : undefined}
                  />
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      <section className="mt-12 grid gap-6 border-t border-[#e2e8f0] pt-10 sm:grid-cols-2 lg:grid-cols-4" aria-label={hub.sections.tipsTitle}>
        <div className="rounded-2xl border border-[#fed7aa] bg-[#fff7ed] p-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#f97316]">
            {hub.sections.promotedTitle}
          </p>
          <h3 className="mt-2 text-lg font-bold text-[#0c1a33]">{hub.promoted.title}</h3>
          <p className="mt-1 text-sm font-semibold text-[#c2410c]">{hub.promoted.when}</p>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#64748b]">{hub.promoted.excerpt}</p>
          <Link
            href={hub.promoted.href}
            className="mt-4 block rounded-xl bg-[#f97316] py-2.5 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            {hub.sections.eventDetailsCta}
          </Link>
        </div>

        <div className="rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm sm:col-span-2">
          <h3 className="text-sm font-bold text-[#0c1a33]">{hub.sections.tipsTitle}</h3>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {hub.tips.map((tip) => (
              <li key={tip.title}>
                <h4 className="text-sm font-bold text-[#334155]">{tip.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-[#64748b]">{tip.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/business/networking/events"
          className="flex items-center justify-center rounded-2xl border border-dashed border-[#cbd5e1] bg-white p-5 text-center text-sm font-semibold text-[#475569] transition-colors hover:border-[#f97316] hover:text-[#f97316]"
        >
          {hub.sections.addEvent}
        </Link>
      </section>
    </>
  );
}
