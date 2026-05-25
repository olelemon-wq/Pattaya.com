import type { LucideIcon } from "lucide-react";

export function LivingIconCards({
  items,
  columns = 2,
}: {
  items: { icon: LucideIcon; title: string; titleTh: string; text: string }[];
  columns?: 2 | 3 | 4;
}) {
  const grid =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 3
        ? "md:grid-cols-3"
        : "sm:grid-cols-2";

  return (
    <div className={`grid gap-4 ${grid}`}>
      {items.map(({ icon: Icon, title, titleTh, text }) => (
        <article
          key={title}
          className="flex gap-4 rounded-xl border border-[#e2e8f0] bg-white p-5 transition hover:border-[#D7CBBA]"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B29475] text-white">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold text-[#0A192F]">{title}</h3>
            <p className="text-xs font-medium text-[#B29475]">{titleTh}</p>
            <p className="mt-2 text-sm leading-relaxed text-[#444748]">{text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
