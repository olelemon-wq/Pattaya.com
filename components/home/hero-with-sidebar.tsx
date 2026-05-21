import Link from "next/link";
import { FeaturedHeroCinematic } from "@/components/home/featured-hero-cinematic";

const events = [
  { date: "OCT 24", title: "Pattaya International Fireworks" },
  { date: "OCT 26", title: "Yacht Show 2024" },
];

const traffic = [
  { road: "Sukhumvit Rd.", status: "Clear", tone: "success" as const },
  { road: "Walking Street", status: "Moderate", tone: "warning" as const },
  { road: "UTP Airport", status: "On Schedule", tone: "neutral" as const },
];

function StatusPill({
  status,
  tone,
}: {
  status: string;
  tone: "success" | "warning" | "neutral";
}) {
  const styles = {
    success: "bg-[#dcfce7] text-[#15803d]",
    warning: "bg-[#ffedd5] text-[#c2410c]",
    neutral: "bg-[#e2e8f0] text-[#475569]",
  };
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${styles[tone]}`}>
      {status}
    </span>
  );
}

export function HeroWithSidebar() {
  return (
    <section className="mx-auto grid max-w-[1280px] gap-5 px-4 py-6 lg:grid-cols-[1fr_300px] lg:px-6">
      <FeaturedHeroCinematic />

      {/* Sidebar Widgets */}
      <aside className="flex flex-col gap-4">
        {/* Events Today */}
        <div className="rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-bold text-[#0c1a33]">Events Today</h2>
            <Link href="/events" className="text-[10px] font-bold text-[#f97316]">
              VIEW ALL
            </Link>
          </div>
          <ul className="space-y-3">
            {events.map((event) => (
              <li key={event.title} className="flex gap-3">
                <span className="shrink-0 text-[10px] font-bold leading-tight text-[#f97316]">
                  {event.date.split(" ").map((part, i) => (
                    <span key={i} className="block">
                      {part}
                    </span>
                  ))}
                </span>
                <span className="text-xs font-medium text-[#0c1a33]">
                  {event.title}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-3 rounded-xl bg-[#fff7ed] p-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[#f97316]">
              Promoted Event
            </p>
            <p className="mt-1 text-xs font-semibold text-[#0c1a33]">
              Pattaya Tech Meetup
            </p>
          </div>
        </div>

        {/* Weather */}
        <div className="rounded-2xl bg-[#afccee80] p-4">
          <h2 className="mb-3 text-sm font-bold text-black">
            Pattaya Weather
          </h2>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-4xl font-extrabold text-black">31°C</p>
              <p className="text-xs font-semibold text-black">Feels like 34°</p>
            </div>
            <span className="text-4xl" aria-hidden="true">
              ⛅
            </span>
          </div>
          <div className="mt-3 flex gap-4 text-[10px] font-bold text-black">
            <span>Sea &amp; UV: High</span>
            <span>Wind: 12km/h</span>
          </div>
        </div>

        {/* Traffic */}
        <div className="rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-sm">
          <h2 className="mb-3 text-sm font-bold text-[#0c1a33]">
            Traffic Live
          </h2>
          <ul className="space-y-2.5">
            {traffic.map((item) => (
              <li
                key={item.road}
                className="flex items-center justify-between gap-2"
              >
                <span className="text-xs font-medium text-[#0c1a33]">
                  {item.road}
                </span>
                <StatusPill status={item.status} tone={item.tone} />
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
}
