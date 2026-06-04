"use client";

import * as React from "react";
import type { DayButton } from "react-day-picker";
import { enUS, ru, th, zhCN } from "react-day-picker/locale";

import { Calendar, CalendarDayButton } from "@/components/ui/calendar";
import {
  EVENTS_CALENDAR_YEAR,
  countEventsOnDate,
  eventDateKey,
} from "@/lib/events/event-schedule";
import { cn } from "@/lib/utils";

export type EventsMonthCalendarLabels = {
  today: string;
  yearOverview: string;
};

type EventsMonthCalendarProps = {
  eventIds: string[];
  locale: string;
  labels: EventsMonthCalendarLabels;
  selectedDateKey: string;
  onSelectDate: (dateKey: string) => void;
};

function parseSelectedDate(dateKey: string): Date {
  const [y, m, d] = dateKey.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function dayPickerLocale(locale: string) {
  if (locale.startsWith("th")) return th;
  if (locale.startsWith("zh")) return zhCN;
  if (locale.startsWith("ru")) return ru;
  return enUS;
}

function EventsCalendarDayButton({
  eventIds,
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton> & { eventIds: string[] }) {
  const hasEvents = countEventsOnDate(eventIds, eventDateKey(day.date)) > 0;

  return (
    <CalendarDayButton
      day={day}
      modifiers={modifiers}
      className={cn(
        className,
        "text-base font-semibold sm:text-lg lg:text-xl",
        hasEvents &&
          !modifiers.selected &&
          "bg-[#fff7ed] font-semibold text-[#c2410c] hover:bg-[#ffedd5] hover:text-[#c2410c]",
        hasEvents &&
          modifiers.today &&
          !modifiers.selected &&
          "ring-1 ring-[#f97316]",
        hasEvents &&
          modifiers.outside &&
          !modifiers.selected &&
          "bg-[#fff7ed]/70 text-[#ea580c]",
      )}
      {...props}
    />
  );
}

export function EventsMonthCalendar({
  eventIds,
  locale,
  labels,
  selectedDateKey,
  onSelectDate,
}: EventsMonthCalendarProps) {
  const selected = parseSelectedDate(selectedDateKey);
  const dpLocale = dayPickerLocale(locale);

  return (
    <div className="space-y-3">
      <p className="text-[10px] font-bold uppercase tracking-widest text-[#64748b]">{labels.yearOverview}</p>
      <Calendar
        mode="single"
        selected={selected}
        onSelect={(date) => {
          if (date) onSelectDate(eventDateKey(date));
        }}
        locale={dpLocale}
        captionLayout="dropdown-months"
        startMonth={new Date(EVENTS_CALENDAR_YEAR, 0, 1)}
        endMonth={new Date(EVENTS_CALENDAR_YEAR, 11, 31)}
        defaultMonth={selected}
        showOutsideDays
        className="w-full rounded-lg border border-[#e2e8f0] bg-white p-3 shadow-none [--cell-size:3rem] sm:[--cell-size:3.5rem] lg:[--cell-size:4rem]"
        classNames={{
          root: "w-full",
          months: "w-full",
          month: "w-full",
          month_grid: "w-full",
          weekday: "flex-1 text-sm font-bold text-[#64748b] select-none sm:text-base",
          week: "mt-2 flex w-full",
        }}
        components={{
          DayButton: (props) => <EventsCalendarDayButton {...props} eventIds={eventIds} />,
        }}
      />
    </div>
  );
}
