import Link from "next/link";

const businesses = [
  {
    name: "Royal Cliff Hotels",
    badge: "Verified",
    badgeStyle: "bg-[#fff7ed] text-[#f97316]",
    icon: "★",
  },
  {
    name: "Siam Yacht Club",
    badge: "Featured",
    badgeStyle: "bg-[#eff6ff] text-[#2563eb]",
    icon: "⚓",
  },
  {
    name: "Bangkok Hospital",
    badge: "Featured",
    badgeStyle: "bg-[#eff6ff] text-[#2563eb]",
    icon: "✚",
  },
];

export function FeaturedBusinesses() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-10 lg:px-6">
      <h2 className="mb-6 text-center text-sm font-extrabold uppercase tracking-[0.2em] text-[#0c1a33]">
        Featured Businesses
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {businesses.map((biz) => (
          <Link
            key={biz.name}
            href="/directory/featured"
            className="flex flex-col items-center rounded-2xl border border-[#e2e8f0] bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#fff7ed] text-xl text-[#f97316]">
              {biz.icon}
            </span>
            <span
              className={`mb-2 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${biz.badgeStyle}`}
            >
              {biz.badge}
            </span>
            <span className="text-xs font-bold text-[#0c1a33]">{biz.name}</span>
          </Link>
        ))}

        {[1, 2].map((slot) => (
          <div
            key={slot}
            className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#cbd5e1] bg-[#f8fafc] p-6 text-center"
          >
            <span className="mb-2 text-2xl text-[#cbd5e1]">+</span>
            <span className="text-[10px] font-bold uppercase tracking-wide text-[#94a3b8]">
              Add Branch
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

