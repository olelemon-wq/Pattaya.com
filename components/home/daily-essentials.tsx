"use client";

import Link from "next/link";
import {
  Banknote,
  Calendar,
  Car,
  CloudSun,
  Map,
  Megaphone,
  MessageSquare,
  Newspaper,
  Siren,
  Store,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/components/layout/language-provider";
import { getHomeDailyEssentials } from "@/lib/i18n/messages/home-hub";

const iconMap: Record<string, LucideIcon> = {
  newspaper: Newspaper,
  megaphone: Megaphone,
  calendar: Calendar,
  cloud: CloudSun,
  car: Car,
  messages: MessageSquare,
  map: Map,
  siren: Siren,
  banknote: Banknote,
  store: Store,
};

export function DailyEssentials() {
  const { language } = useLanguage();
  const { title, items } = getHomeDailyEssentials(language);

  return (
    <section
      aria-labelledby="daily-essentials-heading"
      className="home-section-reveal mx-auto max-w-[1280px] border-t border-[#e2e8f0] px-4 pt-8 lg:px-6"
      style={{ animationDelay: "60ms" }}
    >
      <div className="mb-4 flex items-end gap-3">
        <h2 id="daily-essentials-heading" className="text-lg font-extrabold text-[#0c1a33] sm:text-xl">
          {title}
        </h2>
        <span className="mb-1 h-1 w-10 shrink-0 rounded-full bg-[#f97316]" aria-hidden />
      </div>

      <ul className="grid grid-cols-5 grid-rows-2 gap-1.5 sm:gap-2 md:grid-cols-10 md:grid-rows-1 md:gap-2 lg:gap-3">
        {items.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <li
              key={item.id}
              className="home-section-reveal min-w-0"
              style={{ animationDelay: `${80 + index * 40}ms` }}
            >
              <Link
                href={item.href}
                className="group flex h-full min-h-[4.5rem] flex-col items-center justify-center gap-0.5 rounded-lg border border-[#e2e8f0] bg-white px-0.5 py-2 text-center shadow-sm transition-all hover:border-[#f97316]/40 hover:shadow-md md:min-h-[5.5rem] md:gap-1 md:rounded-xl md:px-1 md:py-3 lg:px-2 lg:py-3.5"
              >
                <Icon
                  className={`h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none md:h-7 md:w-7 lg:h-8 lg:w-8 ${item.accent}`}
                  strokeWidth={1.75}
                  aria-hidden
                />
                <span className="line-clamp-2 text-[9px] font-bold leading-tight text-[#0c1a33] md:text-[10px] lg:text-xs">
                  {item.label}
                </span>
                <span className="hidden line-clamp-1 text-[8px] font-medium text-[#94a3b8] md:block lg:text-[10px]">
                  {item.sub}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
