"use client";

import { BusinessPageFooter } from "@/components/business/business-page-footer";
import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { useLanguage } from "@/components/layout/language-provider";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import {
  businessPages,
  type BusinessPageId,
} from "@/lib/data/business-page-content";
import { getBusinessDetailUi } from "@/lib/i18n/messages/business-detail-ui";
import { resolveBusinessPage } from "@/lib/i18n/resolve-business-page";
import {
  AlertTriangle,
  Building2,
  ChartColumnIncreasing,
  Check,
  ChevronDown,
  Coins,
  Factory,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function BusinessDetailPage({ pageId }: { pageId: BusinessPageId }) {
  const { language } = useLanguage();
  const ui = getBusinessDetailUi(language);

  if (!businessPages[pageId]) notFound();
  const page = resolveBusinessPage(language, pageId);
  const economyIconMap: Record<string, LucideIcon> = {
    "👥": Users,
    "📈": ChartColumnIncreasing,
    "💰": Coins,
    "🏗️": Wrench,
    "📊": Building2,
    "🏭": Factory,
  };

  const heroTitleId = `business-${pageId}-hero`;

  return (
    <div data-full-bleed className="bg-[#f5f5f4] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="business" />
      </div>

      <section
        className="relative flex h-[400px] w-full items-center overflow-hidden md:h-[500px]"
        aria-labelledby={heroTitleId}
      >
        <Image
          src={page.heroImage}
          alt={page.heroAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#363636]/90 via-[#363636]/55 to-[#363636]/25" />
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 md:px-16">
          <nav aria-label={tSiteUi(language, "breadcrumb")} className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/80">
              <li>
                <Link href="/business" className="hover:text-white">
                  {ui.business}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span className="text-white">{page.breadcrumb}</span>
              </li>
            </ol>
          </nav>
          <span className="mb-3 inline-flex w-fit rounded-full bg-[#B8860B]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
            {page.badge}
          </span>
          <h1
            id={heroTitleId}
            className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            {page.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
            {page.description}
          </p>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-12 max-w-[900px] px-5 md:-mt-14 md:px-16">
        <aside
          className="rounded-2xl border border-[#c4c7c8]/30 bg-white p-6 shadow-xl md:flex md:items-center md:justify-between md:gap-8 md:p-8"
          aria-label={ui.consultationAria}
        >
          <div className="md:flex-1">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B8860B]">
              {page.cta.eyebrow}
            </p>
            <p className="mt-2 text-lg font-semibold text-[#363636]">
              {page.cta.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#444748]">
              {page.cta.body}
            </p>
          </div>
          <div className="mt-5 grid w-full shrink-0 grid-cols-2 gap-3 md:mt-0 md:w-auto md:grid-cols-1 lg:grid-cols-2">
            <Link
              href={page.cta.href}
              className="inline-flex w-full items-center justify-center rounded-xl bg-[#ae2f34] px-4 py-3.5 text-center text-sm font-bold text-white shadow-lg transition hover:bg-[#ce4749]"
            >
              {page.cta.button}
            </Link>
            {page.ctaSecondary ? (
              <Link
                href={page.ctaSecondary.href}
                className="inline-flex w-full items-center justify-center rounded-xl border-2 border-[#363636] px-4 py-3.5 text-center text-sm font-bold text-[#363636] transition hover:bg-[#363636] hover:text-white"
              >
                {page.ctaSecondary.button}
              </Link>
            ) : null}
          </div>
        </aside>
      </div>

      <div className="mx-auto max-w-[1280px] space-y-16 px-5 py-16 md:px-16 md:py-20">
        {page.quickFacts ? (
          <section aria-labelledby="business-quick-facts">
            <h2
              id="business-quick-facts"
              className="text-2xl font-semibold text-[#363636] md:text-3xl"
            >
              {page.quickFacts.title}
            </h2>
            <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {page.quickFacts.items.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-xl border border-[#c4c7c8]/30 bg-white p-5 shadow-sm"
                >
                  <dt className="text-xs font-bold uppercase tracking-[0.15em] text-[#B8860B]">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 text-lg font-semibold text-[#363636]">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        <section>
          <h2 className="text-2xl font-semibold text-[#363636] md:text-3xl">
            {page.overview.title}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#444748]">
            {page.overview.body}
          </p>
        </section>

        {page.legalNotes ? (
          <section
            className="rounded-2xl border border-[#B8860B]/25 bg-[#fffbeb] p-6 sm:p-8"
            aria-labelledby="business-legal-notes"
          >
            <div className="flex gap-3">
              <AlertTriangle
                className="mt-0.5 h-6 w-6 shrink-0 text-[#B8860B]"
                aria-hidden
              />
              <div className="min-w-0 flex-1">
                <h2
                  id="business-legal-notes"
                  className="text-xl font-semibold text-[#363636] md:text-2xl"
                >
                  {page.legalNotes.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {page.legalNotes.items.map((note) => (
                    <li
                      key={note.slice(0, 48)}
                      className="text-sm leading-relaxed text-[#444748]"
                    >
                      {note}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-[#64748b]">{ui.legalDisclaimer}</p>
              </div>
            </div>
          </section>
        ) : null}

        {page.economyStats && page.economyStats.length > 0 && (
          <section className="relative overflow-hidden rounded-2xl bg-[#363636] p-6 sm:p-10">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            <h2 className="relative text-2xl font-semibold text-white md:text-3xl">
              {ui.economyStatsTitle}
            </h2>
            <div className="relative mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                {page.economyStats.map((stat) => (
                  <div key={stat.label} className="group space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-[#ffb3b0]" aria-hidden>
                        {(() => {
                          const Icon = economyIconMap[stat.icon] ?? ChartColumnIncreasing;
                          return <Icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={2.2} />;
                        })()}
                      </span>
                      <div className="text-2xl font-bold text-white md:text-3xl">
                        {stat.value}
                      </div>
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
                      {stat.label}
                    </p>
                    <div className="h-0.5 w-8 bg-[#ae2f34] transition-all duration-500 group-hover:w-full" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {page.networkingEvents && page.networkingEvents.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold text-[#363636] md:text-3xl">
              {ui.networkingEventsTitle}
            </h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-[#c4c7c8]/30 bg-[#ebebea]">
              {page.networkingEvents.map((event, i) => (
                <div
                  key={event.title}
                  className={`group flex flex-col items-center bg-white p-8 transition-all hover:bg-[#f5f5f4] md:flex-row ${
                    i < page.networkingEvents!.length - 1
                      ? "border-b border-[#c4c7c8]/30"
                      : ""
                  }`}
                >
                  <div className="flex min-w-[140px] flex-col items-center justify-center border-[#c4c7c8]/30 pb-6 md:border-r md:pb-0 md:pr-10">
                    <span className="text-5xl font-bold leading-none text-[#ae2f34]">
                      {event.day}
                    </span>
                    <div className="mt-1 flex flex-col items-center">
                      <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#363636]">
                        {event.month}
                      </span>
                      <span className="text-[11px] text-[#444748]">
                        {event.year}
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 flex-grow text-center md:mt-0 md:px-12 md:text-left">
                    <h3 className="mb-3 text-2xl font-bold text-[#363636]">
                      {event.title}
                    </h3>
                    <p className="flex items-center justify-center gap-2 text-sm font-medium text-[#444748] md:justify-start">
                      <span aria-hidden>📍</span>
                      {event.location}
                    </p>
                  </div>
                  <Link
                    href={event.href ?? "/business/networking/events"}
                    target={event.href?.startsWith("http") ? "_blank" : undefined}
                    rel={event.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="mt-8 whitespace-nowrap rounded-full bg-[#363636] px-10 py-3.5 text-sm font-bold tracking-wide text-white shadow-md transition-all hover:bg-[#363636]/90 md:mt-0"
                  >
                    {ui.registerEarly}
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        <section
          id="registration-roadmap"
          className="scroll-mt-24 rounded-2xl border border-[#c4c7c8]/30 bg-white p-6 sm:p-10"
        >
          <h2 className="text-2xl font-semibold text-[#363636] md:text-3xl">
            {page.steps.title}
          </h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-2">
            {page.steps.items.map((item) => (
              <li
                key={item.step}
                className="flex gap-4 rounded-xl border border-[#c4c7c8]/20 bg-[#f5f5f4] p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#363636] text-sm font-bold text-white">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-bold text-[#191c1d]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#444748]">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div
            id="document-checklist"
            className="scroll-mt-24 rounded-2xl border border-[#c4c7c8]/30 bg-white p-6 sm:p-8"
          >
            <h2 className="text-xl font-semibold text-[#363636] md:text-2xl">
              {page.checklist.title}
            </h2>
            <ul className="mt-6 space-y-4">
              {page.checklist.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-[#444748]"
                >
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#B8860B]"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#B8860B]/20 bg-white p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-[#363636] md:text-2xl">
              {page.highlights.title}
            </h2>
            <ul className="mt-6 space-y-6">
              {page.highlights.items.map((item) => (
                <li key={item.title}>
                  <h3 className="font-bold text-[#363636]">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#444748]">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {page.readingPath ? (
          <section
            id="reading-path"
            className="scroll-mt-24 rounded-2xl border border-[#c4c7c8]/30 bg-white p-6 sm:p-10"
          >
            <h2 className="text-2xl font-semibold text-[#363636] md:text-3xl">
              {page.readingPath.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#444748]">
              {page.readingPath.intro}
            </p>
            <ol className="mt-8 space-y-4">
              {page.readingPath.items.map((item) => (
                <li key={item.step}>
                  <Link
                    href={item.href}
                    className="group flex gap-4 rounded-xl border border-[#c4c7c8]/25 bg-[#f5f5f4] p-5 transition hover:border-[#B8860B]/35 hover:bg-white"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#363636] text-sm font-bold text-white">
                      {item.step}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-[#363636] transition-colors group-hover:text-[#B8860B]">
                        {item.label} →
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-[#444748]">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        ) : null}

        {page.faq ? (
          <section className="rounded-2xl border border-[#c4c7c8]/30 bg-white p-6 sm:p-10">
            <h2 className="text-2xl font-semibold text-[#363636] md:text-3xl">{page.faq.title}</h2>
            <div className="mt-8 divide-y divide-[#c4c7c8]/30">
              {page.faq.items.map((item) => (
                <details
                  key={item.question}
                  className="group py-5 first:pt-0 last:pb-0"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left [&::-webkit-details-marker]:hidden">
                    <span className="min-w-0 pr-2 text-base font-semibold text-[#363636]">
                      {item.question}
                    </span>
                    <span
                      className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#b5b8bb] bg-[#f1f2f3] text-[#363636] transition duration-200 group-open:rotate-180 group-open:border-[#191c1d] group-open:bg-[#191c1d] group-open:text-white"
                      aria-hidden
                    >
                      <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[#444748]">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        ) : null}

        {page.servicePoints ? (
          <section className="rounded-2xl border border-[#c4c7c8]/30 bg-[#ebebea] p-6 sm:p-10">
            <h2 className="text-2xl font-semibold text-[#363636] md:text-3xl">
              {page.servicePoints.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#444748]">
              {page.servicePoints.intro}
            </p>
            <ul className="mt-8 space-y-4">
              {page.servicePoints.items.map((point) => (
                <li
                  key={point.name}
                  className="rounded-xl border border-[#c4c7c8]/25 bg-white p-5"
                >
                  <h3 className="font-bold text-[#363636]">{point.name}</h3>
                  <p className="mt-1 text-sm text-[#444748]">{point.note}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section>
          <h2 className="text-2xl font-semibold text-[#363636] md:text-3xl">
            {ui.exploreMore}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.related.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-[#c4c7c8]/30 bg-white p-5 shadow-sm transition hover:border-[#363636]/30 hover:shadow-md"
              >
                <p className="font-bold text-[#363636]">{link.label} →</p>
                <p className="mt-2 text-sm text-[#444748]">{link.blurb}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <BusinessPageFooter />
    </div>
  );
}
