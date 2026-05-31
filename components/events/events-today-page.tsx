"use client";

import { Breadcrumb } from "@/components/layout/breadcrumb";
import { useLanguage } from "@/components/layout/language-provider";
import type { EventsHubEvent } from "@/lib/i18n/messages/events-hub";
import { buildStandaloneBreadcrumbs } from "@/lib/i18n/resolve-site-nav";
import { getEventsHub } from "@/lib/i18n/messages/events-hub";
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categoryStyles: Record<
  EventsHubEvent["category"],
  string
> = {
  festival: "bg-[#ffedd5] text-[#c2410c]",
  market: "bg-[#fee2e2] text-[#b91c1c]",
  nightlife: "bg-[#ede9fe] text-[#6d28d9]",
  food: "bg-[#fce7f3] text-[#be185d]",
  family: "bg-[#dbeafe] text-[#1d4ed8]",
  business: "bg-[#e2e8f0] text-[#334155]",
  sports: "bg-[#dcfce7] text-[#15803d]",
};

function EventRow({ event, cta }: { event: EventsHubEvent; cta: string }) {
  return (
    <Link
      href={event.href}
      className="group flex gap-4 rounded-2xl border border-zinc-200 bg-white p-4 transition-shadow hover:shadow-md sm:p-5"
    >
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-32">
        <Image
          src={event.image}
          alt={event.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="128px"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="text-sm font-bold tabular-nums text-[#f97316]">
            {event.time}
          </span>
          <span
            className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${categoryStyles[event.category]}`}
          >
            {event.categoryLabel}
          </span>
        </div>
        <h3 className="text-base font-bold text-zinc-900 group-hover:text-[#0d9488] sm:text-lg">
          {event.title}
        </h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-zinc-500">
          <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
          {event.venue}
        </p>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-600">
          {event.excerpt}
        </p>
        <span className="mt-2 inline-block text-xs font-semibold text-[#0d9488]">
          {cta}
        </span>
      </div>
    </Link>
  );
}

function WeekCard({ event, cta }: { event: EventsHubEvent; cta: string }) {
  return (
    <Link
      href={event.href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={event.image}
          alt={event.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${categoryStyles[event.category]}`}
        >
          {event.categoryLabel}
        </span>
        <span className="absolute bottom-3 left-3 text-xs font-bold text-white">
          {event.time}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg font-bold text-zinc-900 group-hover:text-[#0d9488]">
          {event.title}
        </h3>
        <p className="mt-1 text-xs text-zinc-500">{event.venue}</p>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-zinc-600">
          {event.excerpt}
        </p>
        <span className="mt-3 text-xs font-semibold text-[#0d9488]">{cta}</span>
      </div>
    </Link>
  );
}

export function EventsTodayPage() {
  const { language } = useLanguage();
  const hub = getEventsHub(language);
  const breadcrumbs = buildStandaloneBreadcrumbs(
    language,
    hub.hero.title,
    "/events",
  );

  return (
    <>
      <Breadcrumb items={breadcrumbs} />

      <div className="mb-8 border-b border-zinc-200 pb-8">
        <span className="mb-3 inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-teal-800">
          {hub.hero.badge}
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          {hub.hero.title}
        </h1>
        {language === "th" && hub.hero.titleTh ? (
          <p className="mt-1 text-lg text-teal-700">{hub.hero.titleTh}</p>
        ) : null}
        <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600">
          {hub.hero.description}
        </p>
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#fff7ed] px-4 py-2 text-sm font-semibold text-[#c2410c]">
          <Calendar className="h-4 w-4" aria-hidden />
          {hub.todayFormatted}
        </p>
      </div>

      <section className="mb-12" aria-labelledby="events-featured">
        <p
          id="events-featured"
          className="mb-4 text-xs font-bold uppercase tracking-widest text-[#f97316]"
        >
          {hub.sections.featuredLabel}
        </p>
        <Link
          href={hub.featured.href}
          className="group relative block overflow-hidden rounded-3xl border border-zinc-200 shadow-lg"
        >
          <div className="relative aspect-[21/9] w-full md:aspect-[2.4/1]">
            <Image
              src={hub.featured.image}
              alt={hub.featured.imageAlt}
              fill
              priority
              className="object-cover transition-transform duration-[2s] group-hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
              <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-[#f97316] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                {hub.sections.featuredLabel}
              </span>
              <h2 className="max-w-2xl text-2xl font-bold text-white md:text-4xl">
                {hub.featured.title}
              </h2>
              <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-white/90">
                <Clock className="h-4 w-4" aria-hidden />
                {hub.featured.time}
              </p>
              <p className="mt-1 flex items-center gap-2 text-sm text-white/80">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden />
                {hub.featured.venue}
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 md:text-base">
                {hub.featured.excerpt}
              </p>
              <span className="mt-5 inline-block w-fit rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#c2410c] transition-colors group-hover:bg-[#fff7ed]">
                {hub.sections.exploreCta}
              </span>
            </div>
          </div>
        </Link>
      </section>

      <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:gap-12">
        <div>
          <section className="mb-14" aria-labelledby="events-today-list">
            <h2
              id="events-today-list"
              className="text-2xl font-bold text-zinc-900 md:text-3xl"
            >
              {hub.sections.todayTitle}
            </h2>
            <p className="mt-2 text-zinc-600">{hub.sections.todaySubtitle}</p>
            <ul className="mt-6 space-y-4">
              {hub.todayEvents.map((event) => (
                <li key={event.id}>
                  <EventRow event={event} cta={hub.sections.exploreCta} />
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="events-week">
            <h2
              id="events-week"
              className="text-2xl font-bold text-zinc-900 md:text-3xl"
            >
              {hub.sections.weekTitle}
            </h2>
            <p className="mt-2 text-zinc-600">{hub.sections.weekSubtitle}</p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {hub.weekEvents.map((event) => (
                <WeekCard key={event.id} event={event} cta={hub.sections.exploreCta} />
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-[#fed7aa] bg-[#fff7ed] p-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#f97316]">
              {hub.sections.promotedTitle}
            </p>
            <h3 className="mt-2 text-lg font-bold text-zinc-900">
              {hub.promoted.title}
            </h3>
            <p className="mt-1 text-sm font-semibold text-[#c2410c]">
              {hub.promoted.when}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              {hub.promoted.excerpt}
            </p>
            <Link
              href={hub.promoted.href}
              className="mt-4 block rounded-xl bg-[#f97316] py-2.5 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {hub.sections.exploreCta}
            </Link>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-bold text-zinc-900">
              {hub.sections.tipsTitle}
            </h3>
            <ul className="mt-4 space-y-4">
              {hub.tips.map((tip) => (
                <li key={tip.title}>
                  <h4 className="text-sm font-bold text-zinc-800">{tip.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                    {tip.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/business/networking/events"
            className="block rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-5 text-center text-sm font-semibold text-zinc-700 transition-colors hover:border-[#0d9488] hover:text-[#0d9488]"
          >
            {hub.sections.addEvent}
          </Link>
        </aside>
      </div>
    </>
  );
}
