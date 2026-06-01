"use client";

import { Breadcrumb } from "@/components/layout/breadcrumb";
import { useLanguage } from "@/components/layout/language-provider";
import { PattayaEmergencyHub } from "@/components/living/pattaya-emergency-hub";
import {
  emergencyContacts,
  emergencyTelHref,
} from "@/lib/data/emergency-contacts";
import { getEmergencyPageCopy } from "@/lib/i18n/messages/emergency-page";
import { getEmergencyHubCopy } from "@/lib/i18n/messages/living/emergency-hub";
import {
  getEmergencyServiceName,
  getStandalonePageCopy,
  type EmergencyServiceId,
} from "@/lib/i18n/messages/standalone-pages";
import { buildStandaloneBreadcrumbs } from "@/lib/i18n/resolve-site-nav";
import { tSiteUiTemplate } from "@/lib/i18n/messages/site-ui";
import { BookOpen, Phone, ShieldAlert } from "lucide-react";
import Link from "next/link";

const PRIORITY_IDS = new Set(["tourist-police", "medical-ems", "fire-dept"]);

function EmergencyContactCard({
  number,
  icon: Icon,
  iconClassName,
  name,
  callLabel,
  priority,
}: {
  number: string;
  icon: (typeof emergencyContacts)[0]["icon"];
  iconClassName: string;
  name: string;
  callLabel: string;
  priority?: boolean;
}) {
  return (
    <a
      href={emergencyTelHref(number)}
      aria-label={callLabel}
      className={`group flex h-full flex-col rounded-2xl border bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${
        priority
          ? "border-[#fecaca] ring-1 ring-[#ff3b30]/15 hover:border-[#f87171]"
          : "border-[#e2e8f0] hover:border-[#10438f]/30"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${iconClassName}`}
        >
          <Icon className="h-6 w-6" strokeWidth={2} aria-hidden />
        </span>
        {priority ? (
          <span className="rounded-full bg-[#fef2f2] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#b91c1c]">
            SOS
          </span>
        ) : (
          <Phone
            className="h-5 w-5 shrink-0 text-[#94a3b8] transition-colors group-hover:text-[#10438f]"
            aria-hidden
          />
        )}
      </div>
      <h3 className="mt-4 text-sm font-semibold leading-snug text-[#0c1a33]">{name}</h3>
      <p className="mt-2 text-3xl font-extrabold tabular-nums tracking-tight text-[#0c1a33] group-hover:text-[#10438f]">
        {number}
      </p>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-bold text-[#10438f] group-hover:underline">
        <Phone className="h-3.5 w-3.5" aria-hidden />
        {callLabel}
      </span>
    </a>
  );
}

export function EmergencyPage() {
  const { language } = useLanguage();
  const standalone = getStandalonePageCopy(language, "emergency");
  const copy = getEmergencyPageCopy(language);
  const hubCopy = getEmergencyHubCopy(language);

  const breadcrumbs = buildStandaloneBreadcrumbs(language, standalone.title, "/emergency");

  const sortedContacts = [...emergencyContacts].sort((a, b) => {
    const ap = PRIORITY_IDS.has(a.id) ? 0 : 1;
    const bp = PRIORITY_IDS.has(b.id) ? 0 : 1;
    return ap - bp;
  });

  return (
    <div className="pb-12">
      <Breadcrumb items={breadcrumbs} />

      <header className="relative mt-2 overflow-hidden rounded-2xl bg-gradient-to-br from-[#7f1d1d] via-[#991b1b] to-[#0a192f] px-6 py-10 text-white shadow-lg sm:px-10 sm:py-12">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12)_0%,transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#ff3b30]/20 blur-3xl"
          aria-hidden
        />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">
              <ShieldAlert className="h-3.5 w-3.5" aria-hidden />
              {copy.heroBadge}
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{copy.heroTitle}</h1>
            <p className="mt-3 text-base leading-relaxed text-white/90">{copy.heroSubtitle}</p>
          </div>
          <ul className="flex flex-wrap gap-2 lg:justify-end">
            {copy.heroChips.map((chip) => (
              <li key={chip.number}>
                <a
                  href={emergencyTelHref(chip.number)}
                  className="flex min-w-[7rem] flex-col rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-center backdrop-blur-sm transition hover:bg-white/20"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-white/80">
                    {chip.label}
                  </span>
                  <span className="mt-0.5 text-xl font-extrabold tabular-nums">{chip.number}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <section className="mt-8" aria-labelledby="emergency-hub-heading">
        <h2 id="emergency-hub-heading" className="sr-only">
          {copy.hubTitle}
        </h2>
        <div className="rounded-2xl border border-[#e2e8f0]/80 bg-[#f5f5f7] p-4 shadow-sm sm:p-6">
          <PattayaEmergencyHub hideIntro />
        </div>
      </section>

      <section className="mt-10" aria-labelledby="emergency-directory-heading">
        <h2
          id="emergency-directory-heading"
          className="text-xl font-bold text-[#0c1a33] sm:text-2xl"
        >
          {copy.directoryTitle}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#64748b]">
          {copy.directorySubtitle}
        </p>
        <div className="mt-6 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sortedContacts.map((entry) => (
            <EmergencyContactCard
              key={entry.id}
              number={entry.number}
              icon={entry.icon}
              iconClassName={entry.iconClassName}
              name={getEmergencyServiceName(language, entry.id as EmergencyServiceId)}
              callLabel={tSiteUiTemplate(language, "callNumber", { number: entry.number })}
              priority={PRIORITY_IDS.has(entry.id)}
            />
          ))}
        </div>
      </section>

      <aside className="mt-10 flex flex-col gap-4 rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <div className="flex gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eff6ff] text-[#10438f]">
            <BookOpen className="h-6 w-6" aria-hidden />
          </span>
          <div>
            <h3 className="font-bold text-[#0c1a33]">{copy.fullGuideTitle}</h3>
            <p className="mt-1 text-sm leading-relaxed text-[#64748b]">{copy.fullGuideBody}</p>
          </div>
        </div>
        <Link
          href="/living/safety/emergency-guide"
          className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#10438f] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0c2d5c]"
        >
          {copy.fullGuideLink}
        </Link>
      </aside>

      <p className="mt-8 text-center text-xs leading-relaxed text-[#64748b]">{hubCopy.disclaimer}</p>
    </div>
  );
}
