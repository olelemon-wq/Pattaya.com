"use client";

import type { BeachCrowdLevel, BeachWhenSlot } from "@/lib/i18n/messages/explore-beach-when-slots";
import { Moon, Sun, Sunset } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const slotIcons: Record<BeachWhenSlot["id"], LucideIcon> = {
  morning: Sun,
  afternoon: Sunset,
  evening: Moon,
};

const crowdStyles: Record<BeachCrowdLevel, string> = {
  quiet: "bg-emerald-500/10 text-emerald-800 ring-emerald-500/20",
  moderate: "bg-amber-500/10 text-amber-900 ring-amber-500/25",
  busy: "bg-[#B52E88]/10 text-[#8a2469] ring-[#B52E88]/20",
};

export function BeachWhenSlots({ slots }: { slots: BeachWhenSlot[] }) {
  return (
    <ul className="grid gap-3">
      {slots.map((item) => {
        const Icon = slotIcons[item.id];
        return (
          <li
            key={item.id}
            className="rounded-xl border border-[#e7e8e9] bg-[#fdf8fb] p-4 transition hover:border-[#B52E88]/20"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#B52E88]/10">
                  <Icon className="h-5 w-5 text-[#B52E88]" aria-hidden />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-[#191c1d]">{item.period}</p>
                  <p className="text-xs font-semibold text-[#747878]">{item.timeRange}</p>
                </div>
              </div>
              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ring-1 ${crowdStyles[item.crowd]}`}
              >
                {item.crowdLabel}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#444748]">{item.tip}</p>
          </li>
        );
      })}
    </ul>
  );
}
