/** ISO calendar dates for Pattaya 2569 / 2026 listings */
export type EventSchedule =
  | { kind: "range"; start: string; end: string }
  | { kind: "ranges"; ranges: { start: string; end: string }[] }
  /** Fri–Sun every week (Thepprasit, Walking Street) */
  | { kind: "weekends" };

export const EVENT_SCHEDULE: Record<string, EventSchedule> = {
  "fireworks-festival": { kind: "range", start: "2026-11-27", end: "2026-11-28" },
  "pattaya-music-festival": { kind: "range", start: "2026-03-06", end: "2026-03-07" },
  "holi-festival": { kind: "range", start: "2026-03-13", end: "2026-03-15" },
  thepprasit: { kind: "weekends" },
  "walking-street": { kind: "weekends" },
  "naklua-food-walk-jan": {
    kind: "ranges",
    ranges: [
      { start: "2026-01-17", end: "2026-01-18" },
      { start: "2026-01-24", end: "2026-01-25" },
    ],
  },
  "jomtien-fishing-cup": { kind: "range", start: "2026-01-23", end: "2026-01-25" },
  "kite-festival": { kind: "range", start: "2026-02-25", end: "2026-03-01" },
  "seafood-festival": { kind: "range", start: "2026-02-20", end: "2026-02-21" },
  "miss-queen": { kind: "range", start: "2026-03-14", end: "2026-03-14" },
  "wan-lai": { kind: "range", start: "2026-04-18", end: "2026-04-19" },
  "kong-khao-pattaya": { kind: "range", start: "2026-04-20", end: "2026-04-20" },
  "fitz-pickleball": { kind: "range", start: "2026-04-11", end: "2026-04-11" },
  "pride-festival": { kind: "range", start: "2026-06-26", end: "2026-06-28" },
  "pattaya-night-run": { kind: "range", start: "2026-06-13", end: "2026-06-13" },
  "circuit-festival": { kind: "range", start: "2026-06-20", end: "2026-06-20" },
  "mixology-open": { kind: "range", start: "2026-07-08", end: "2026-07-08" },
  "pattaya-marathon": { kind: "range", start: "2026-07-18", end: "2026-07-19" },
  "film-festival": { kind: "range", start: "2026-08-15", end: "2026-08-15" },
  "trail-run": { kind: "range", start: "2026-08-16", end: "2026-08-16" },
  "fitz-squash": { kind: "range", start: "2026-09-12", end: "2026-09-12" },
  "loma-run": { kind: "range", start: "2026-09-19", end: "2026-09-19" },
  "music-festival-jomtien": { kind: "range", start: "2026-03-13", end: "2026-03-14" },
  "music-festival-koh-larn": { kind: "range", start: "2026-03-20", end: "2026-03-21" },
  "music-festival-beach-finale": { kind: "range", start: "2026-03-27", end: "2026-03-28" },
  "fitz-tennis": { kind: "range", start: "2026-03-06", end: "2026-03-08" },
  "pattaya-fashion-week": { kind: "range", start: "2026-03-28", end: "2026-03-29" },
  "rolling-loud-thailand": { kind: "range", start: "2026-11-15", end: "2026-11-15" },
  "coffee-on-the-beach": { kind: "range", start: "2026-11-08", end: "2026-11-08" },
  "itf-masters-tennis": { kind: "range", start: "2026-11-22", end: "2026-11-22" },
  "loy-krathong": { kind: "range", start: "2026-11-24", end: "2026-11-24" },
  "wonderfruit-festival": { kind: "range", start: "2026-12-03", end: "2026-12-07" },
  "tomorrow-thailand": { kind: "range", start: "2026-12-11", end: "2026-12-13" },
  "jazz-festival": { kind: "range", start: "2026-12-13", end: "2026-12-14" },
  "naklua-food-walk-dec": { kind: "range", start: "2026-12-20", end: "2026-12-20" },
  "bikini-beach-race": { kind: "range", start: "2026-12-13", end: "2026-12-13" },
  countdown: { kind: "range", start: "2026-12-29", end: "2026-12-31" },
};

function parseIso(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function toIsoKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function isWeekendDay(date: Date): boolean {
  const day = date.getDay();
  return day === 5 || day === 6 || day === 0;
}

function inRange(date: Date, start: string, end: string): boolean {
  const t = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  const s = parseIso(start).getTime();
  const e = parseIso(end).getTime();
  return t >= s && t <= e;
}

/** Whether an event occurs on the given local calendar day */
export function eventOccursOn(eventId: string, dateKey: string): boolean {
  const schedule = EVENT_SCHEDULE[eventId];
  if (!schedule) return false;

  const date = parseIso(dateKey);

  switch (schedule.kind) {
    case "range":
      return inRange(date, schedule.start, schedule.end);
    case "ranges":
      return schedule.ranges.some((r) => inRange(date, r.start, r.end));
    case "weekends":
      return isWeekendDay(date);
    default:
      return false;
  }
}

export function countEventsOnDate(eventIds: string[], dateKey: string): number {
  return eventIds.filter((id) => eventOccursOn(id, dateKey)).length;
}

/** Pattaya 2569 event listings — calendar scope */
export const EVENTS_CALENDAR_YEAR = 2026;

export type MonthCalendarDay = {
  dateKey: string;
  day: number;
  isToday: boolean;
  eventCount: number;
  label: string;
};

export type MonthCalendarCell = { kind: "pad" } | ({ kind: "day" } & MonthCalendarDay);

export type YearMonthPickerItem = {
  month: number;
  shortLabel: string;
  eventCount: number;
};

export function countDistinctEventsInMonth(eventIds: string[], year: number, month: number): number {
  const lastDay = new Date(year, month + 1, 0).getDate();
  let count = 0;
  for (const id of eventIds) {
    for (let d = 1; d <= lastDay; d++) {
      const dateKey = toIsoKey(new Date(year, month, d));
      if (eventOccursOn(id, dateKey)) {
        count++;
        break;
      }
    }
  }
  return count;
}

export function buildYearMonthPicker(
  year: number,
  eventIds: string[],
  locale: string,
): YearMonthPickerItem[] {
  return Array.from({ length: 12 }, (_, month) => ({
    month,
    shortLabel: new Date(year, month, 1).toLocaleDateString(locale, { month: "short" }),
    eventCount: countDistinctEventsInMonth(eventIds, year, month),
  }));
}

export function buildMonthCalendarGrid(
  year: number,
  month: number,
  eventIds: string[],
  locale: string,
  todayLabel: string,
): { weekdayHeaders: string[]; cells: MonthCalendarCell[]; monthLabel: string } {
  const todayKey = toIsoKey(new Date());
  const refSunday = new Date(2026, 0, 4);
  const weekdayHeaders = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(refSunday);
    d.setDate(refSunday.getDate() + i);
    return d.toLocaleDateString(locale, { weekday: "short" });
  });

  const first = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0).getDate();
  const cells: MonthCalendarCell[] = [];

  for (let i = 0; i < first.getDay(); i++) {
    cells.push({ kind: "pad" });
  }

  for (let d = 1; d <= lastDay; d++) {
    const date = new Date(year, month, d);
    const dateKey = toIsoKey(date);
    const eventCount = countEventsOnDate(eventIds, dateKey);
    const isToday = dateKey === todayKey;
    cells.push({
      kind: "day",
      dateKey,
      day: d,
      isToday,
      eventCount,
      label: isToday
        ? todayLabel
        : date.toLocaleDateString(locale, { weekday: "long", day: "numeric", month: "long", year: "numeric" }),
    });
  }

  while (cells.length % 7 !== 0) {
    cells.push({ kind: "pad" });
  }

  const monthLabel = first.toLocaleDateString(locale, { month: "long", year: "numeric" });

  return { weekdayHeaders, cells, monthLabel };
}

export function defaultSelectedDateInMonth(year: number, month: number, eventIds: string[]): string {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayKey = toIsoKey(today);
  const [ty, tm, td] = todayKey.split("-").map(Number);

  if (ty === year && tm === month + 1) {
    return todayKey;
  }

  const lastDay = new Date(year, month + 1, 0).getDate();
  for (let d = 1; d <= lastDay; d++) {
    const dateKey = toIsoKey(new Date(year, month, d));
    if (countEventsOnDate(eventIds, dateKey) > 0) {
      return dateKey;
    }
  }

  return toIsoKey(new Date(year, month, 1));
}

export function formatSelectedDayHeading(dateKey: string, locale: string, todayLabel: string): string {
  const todayKey = toIsoKey(new Date());
  if (dateKey === todayKey) return todayLabel;

  const date = parseIso(dateKey);
  return date.toLocaleDateString(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function initialCalendarMonth(): number {
  const now = new Date();
  return now.getFullYear() === EVENTS_CALENDAR_YEAR ? now.getMonth() : 0;
}

export type EventCalendarDay = {
  offset: number;
  dateKey: string;
  weekday: string;
  day: number;
  month: string;
  isToday: boolean;
  label: string;
  eventCount: number;
};

export function buildEventCalendarDays(
  eventIds: string[],
  locale: string,
  todayLabel: string,
  dayCount = 7,
  from = new Date(),
): EventCalendarDay[] {
  const start = new Date(from);
  start.setHours(0, 0, 0, 0);
  const todayKey = toIsoKey(start);

  return Array.from({ length: dayCount }, (_, offset) => {
    const date = new Date(start);
    date.setDate(start.getDate() + offset);
    const dateKey = toIsoKey(date);
    const eventCount = countEventsOnDate(eventIds, dateKey);

    return {
      offset,
      dateKey,
      weekday: date.toLocaleDateString(locale, { weekday: "short" }),
      day: date.getDate(),
      month: date.toLocaleDateString(locale, { month: "short" }),
      isToday: dateKey === todayKey,
      label:
        dateKey === todayKey
          ? todayLabel
          : date.toLocaleDateString(locale, { weekday: "short", day: "numeric" }),
      eventCount,
    };
  });
}

/** First offset in the calendar strip that has at least one event (falls back to 0) */
export function defaultCalendarOffset(days: EventCalendarDay[]): number {
  return days.find((day) => day.eventCount > 0)?.offset ?? 0;
}

export { toIsoKey as eventDateKey };
