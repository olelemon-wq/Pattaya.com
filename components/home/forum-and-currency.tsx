import Link from "next/link";

const forumTopics = [
  {
    initials: "JD",
    color: "bg-[#dbeafe] text-[#1d4ed8]",
    title: "Visa Extension 2024 Updates",
    meta: "Last reply 2m ago",
    replies: 42,
  },
  {
    initials: "MK",
    color: "bg-[#fce7f3] text-[#be185d]",
    title: "Best Condo Areas for Expats?",
    meta: "Last reply 15m ago",
    replies: 18,
  },
  {
    initials: "RS",
    color: "bg-[#dcfce7] text-[#15803d]",
    title: "Songthaew Routes Explained",
    meta: "Last reply 1h ago",
    replies: 7,
  },
];

const currencies = [
  { code: "USD", rate: "35.42", trend: "up" as const },
  { code: "EUR", rate: "38.15", trend: "down" as const },
  { code: "GBP", rate: "44.80", trend: "up" as const },
];

export function ForumAndCurrency() {
  return (
    <section className="mx-auto grid max-w-[1280px] gap-5 px-4 lg:grid-cols-[1fr_300px] lg:px-6">
      {/* Forum */}
      <div className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-bold text-[#0c1a33]">
            Trending Forum Topics
          </h2>
          <Link
            href="/forum/trending"
            className="rounded-full border border-[#0c1a33] px-4 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[#0c1a33] transition-colors hover:bg-[#0c1a33] hover:text-white"
          >
            Visit Forum
          </Link>
        </div>
        <ul className="divide-y divide-[#e2e8f0]">
          {forumTopics.map((topic) => (
            <li
              key={topic.title}
              className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${topic.color}`}
              >
                {topic.initials}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-[#0c1a33]">
                  {topic.title}
                </p>
                <p className="text-[11px] text-[#64748b]">{topic.meta}</p>
              </div>
              <span className="shrink-0 text-xs font-bold text-[#64748b]">
                {topic.replies}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Currency */}
      <div className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-5">
        <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[#64748b]">
          Live Currency (vs THB)
        </h2>
        <ul className="space-y-3">
          {currencies.map((currency) => (
            <li
              key={currency.code}
              className="flex items-center justify-between border-b border-[#e2e8f0] pb-3 last:border-0 last:pb-0"
            >
              <span className="text-sm font-bold text-[#0c1a33]">
                {currency.code}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-[#0c1a33]">
                  {currency.rate}
                </span>
                <span
                  className={
                    currency.trend === "up"
                      ? "text-[#22c55e]"
                      : "text-[#ef4444]"
                  }
                >
                  {currency.trend === "up" ? "▲" : "▼"}
                </span>
              </div>
            </li>
          ))}
        </ul>
        <Link
          href="/utilities/currency"
          className="mt-4 block text-[11px] font-semibold text-[#f97316] hover:underline"
        >
          Best rates at TT Exchange? Compare →
        </Link>
      </div>
    </section>
  );
}
