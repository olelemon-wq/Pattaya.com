"use client";

import Link from "next/link";
import { useLanguage } from "@/components/layout/language-provider";
import { getHomeForum } from "@/lib/i18n/messages/home-hub";

export function ForumAndCurrency() {
  const { language } = useLanguage();
  const forum = getHomeForum(language);
  const forumTopics = forum.topics.slice(0, 5);

  return (
    <section className="mx-auto grid w-full min-w-0 max-w-[1280px] items-stretch gap-4 px-3 sm:gap-5 sm:px-4 lg:grid-cols-[1fr_300px] lg:px-6">
      <div className="min-w-0 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
          <h2 className="min-w-0 text-sm font-bold leading-snug text-[#0c1a33] sm:text-base">
            {forum.title}
          </h2>
          <Link
            href="/forum/trending"
            className="shrink-0 rounded-full border border-[#0c1a33] px-3 py-1 text-[9px] font-bold uppercase tracking-wide text-[#0c1a33] transition-colors hover:bg-[#0c1a33] hover:text-white sm:px-4 sm:py-1.5 sm:text-[10px]"
          >
            {forum.visitForum}
          </Link>
        </div>
        <ul className="divide-y divide-[#e2e8f0]">
          {forumTopics.map((topic) => (
            <li key={topic.title} className="min-w-0">
              <Link
                href={topic.href}
                className="flex min-w-0 items-center gap-2 py-3 transition-colors hover:bg-[#f1f5f9]/80 sm:gap-3 sm:py-3.5"
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold sm:h-9 sm:w-9 sm:text-xs ${topic.color}`}
                >
                  {topic.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-[#0c1a33]">{topic.title}</p>
                  <p className="truncate text-[10px] text-[#94a3b8]">{topic.meta}</p>
                </div>
                <span
                  className="shrink-0 rounded-full bg-[#e2e8f0] px-1.5 py-0.5 text-[10px] font-bold tabular-nums text-[#475569] sm:px-2"
                  aria-label={`${topic.replies} ${forum.replies}`}
                >
                  {topic.replies}
                  <span className="hidden sm:inline"> {forum.replies}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        id="home-currency"
        className="scroll-mt-24 flex h-full min-w-0 flex-col rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-sm sm:p-5"
      >
        <h2 className="mb-3 text-sm font-bold text-[#0c1a33]">{forum.currencyTitle}</h2>
        <ul className="space-y-2">
          {forum.currencies.map((c) => (
            <li key={c.code} className="flex items-center justify-between gap-2">
              <span className="flex min-w-0 items-center gap-2">
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f8fafc] text-base leading-none ring-1 ring-[#e2e8f0]"
                  role="img"
                  aria-label={c.flagLabel}
                >
                  {c.flag}
                </span>
                <span className="text-xs font-bold text-[#0c1a33]">{c.code}/THB</span>
              </span>
              <span className="flex shrink-0 items-center gap-1.5">
                <span className="text-xs font-semibold tabular-nums text-[#0c1a33]">{c.rate}</span>
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
