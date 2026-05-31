/** Days before due date when advance reporting is typically allowed (Immigration TM47). */
export const ADVANCE_REPORT_DAYS = 15;

/** Grace days after due date before penalties are commonly applied — verify with Immigration. */
export const GRACE_DAYS_AFTER_DUE = 7;

export const REPORT_CYCLE_DAYS = 90;

export const TM47_ESERVICE_URL = "https://tm47.immigration.go.th/";

export type TimelineMilestoneId = "earliest" | "due" | "lastGrace";

export interface TimelineMilestone {
  id: TimelineMilestoneId;
  date: Date;
}

export interface NinetyDayTimeline {
  anchor: Date;
  milestones: TimelineMilestone[];
}

function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  d.setHours(12, 0, 0, 0);
  return d;
}

export function parseDateInput(value: string): Date | null {
  if (!value) return null;
  const [y, m, day] = value.split("-").map(Number);
  if (!y || !m || !day) return null;
  const d = new Date(y, m - 1, day, 12, 0, 0, 0);
  return Number.isNaN(d.getTime()) ? null : d;
}

export function toDateInputValue(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/** Build timeline from last entry or last 90-day report date. */
export function buildNinetyDayTimeline(anchor: Date): NinetyDayTimeline {
  const due = addDays(anchor, REPORT_CYCLE_DAYS);
  const earliest = addDays(due, -ADVANCE_REPORT_DAYS);
  const lastGrace = addDays(due, GRACE_DAYS_AFTER_DUE);

  return {
    anchor,
    milestones: [
      { id: "earliest", date: earliest },
      { id: "due", date: due },
      { id: "lastGrace", date: lastGrace },
    ],
  };
}

export function daysUntil(target: Date, from: Date = new Date()): number {
  const a = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  const b = new Date(target.getFullYear(), target.getMonth(), target.getDate());
  return Math.round((b.getTime() - a.getTime()) / 86400000);
}
