"use client";

import Link from "next/link";
import { useLanguage } from "@/components/layout/language-provider";
import { getHomeForum } from "@/lib/i18n/messages/home-hub";

const currencies = [
  { code: "USD", flag: "🇺🇸", flagLabel: "United States", rate: "35.42", trend: "up" as const },
  { code: "EUR", flag: "🇪🇺", flagLabel: "European Union", rate: "38.15", trend: "down" as const },
  { code: "GBP", flag: "🇬🇧", flagLabel: "United Kingdom", rate: "44.80", trend: "up" as const },
];

export function ForumAndCurrency() {
  const { language } = useLanguage();
  const forum = getHomeForum(language);

  return (
    <section className="mx-auto grid max-w-[1280px] gap-5 px-4 lg:grid-cols-[1fr_300px] lg:px-6">
      <div className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-bold text-[#0c1a33]">{forum.title}</h2>
          <Link
            href="/forum/trending"
            className="rounded-full border border-[#0c1a33] px-4 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[#0c1a33] transition-colors hover:bg-[#0c1a33] hover:text-white"
          >
            {forum.visitForum}
          </Link>
        </div>
        <ul className="divide-y divide-[#e2e8f0]">
          {forum.topics.map((topic) => (
            <li key={topic.title}>
              <Link
                href={topic.href}
                className="flex items-center gap-3 py-3 transition-colors first:pt-0 last:pb-0 hover:bg-[#f1f5f9]/80"
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${topic.color}`}
                >
                  {topic.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-[#0c1a33]">{topic.title}</p>
                  <p className="text-[10px] text-[#94a3b8]">{topic.meta}</p>
                </div>
                <span className="shrink-0 rounded-full bg-[#e2e8f0] px-2 py-0.5 text-[10px] font-bold text-[#475569]">
                  {topic.replies} {forum.replies}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        id="home-currency"
        className="scroll-mt-24 rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm"
      >
        <h2 className="mb-4 text-sm font-bold text-[#0c1a33]">{forum.currencyTitle}</h2>
        <ul className="space-y-3">
          {currencies.map((c) => (
            <li key={c.code} className="flex items-center justify-between gap-3">
              <span className="flex min-w-0 items-center gap-2.5">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f8fafc] text-lg leading-none ring-1 ring-[#e2e8f0]"
                  role="img"
                  aria-label={c.flagLabel}
                >
                  {c.flag}
                </span>
                <span className="text-sm font-bold text-[#0c1a33]">{c.code}/THB</span>
              </span>
              <span className="flex shrink-0 items-center gap-2">
                <span className="text-sm font-semibold tabular-nums text-[#0c1a33]">{c.rate}</span>
                <span
                  className={`text-xs ${c.trend === "up" ? "text-[#15803d]" : "text-[#dc2626]"}`}
                  aria-hidden
                >
                  {c.trend === "up" ? "▲" : "▼"}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
