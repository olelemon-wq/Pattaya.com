/** Illustrative thresholds — verify with Immigration before applying */

export const DEPOSIT_REQUIREMENT_THB = 800_000;
export const MONTHLY_REQUIREMENT_THB = 65_000;
export const COMBINED_REQUIREMENT_THB = 800_000;
export const MIN_RETIREMENT_AGE = 50;

export type FinancialMode = "deposit" | "monthly" | "combined";
export type ApplyLocation = "embassy" | "thailand";
export type EligibilityPath = "none" | "ox" | "oa" | "extension";

export type CurrencyCode = "THB" | "USD" | "EUR" | "GBP" | "AUD";

/** Approximate rates for planning — not live FX */
export const CURRENCY_TO_THB: Record<CurrencyCode, number> = {
  THB: 1,
  USD: 36,
  EUR: 39,
  GBP: 46,
  AUD: 24,
};

export function convertToThb(amount: number, currency: CurrencyCode): number {
  return Math.round(amount * CURRENCY_TO_THB[currency]);
}

export function getFinancialThreshold(mode: FinancialMode): number {
  if (mode === "monthly") return MONTHLY_REQUIREMENT_THB;
  return DEPOSIT_REQUIREMENT_THB;
}

export function evaluateFinancial(
  amountForeign: number,
  currency: CurrencyCode,
  mode: FinancialMode,
): { thb: number; threshold: number; passes: boolean } {
  const thb = convertToThb(amountForeign, currency);
  const threshold = getFinancialThreshold(mode);
  return { thb, threshold, passes: thb >= threshold };
}

export function evaluateEligibility(
  age: number,
  passportValid18Months: boolean,
  applyLocation: ApplyLocation,
  oxNationality: boolean,
): EligibilityPath {
  if (age < MIN_RETIREMENT_AGE) return "none";
  if (applyLocation === "thailand") return "extension";
  if (passportValid18Months && oxNationality) return "ox";
  if (passportValid18Months) return "oa";
  return "oa";
}

/** Illustrative annual premium for retirement-age applicants */
export function estimateInsuranceAnnual(age: number): number {
  const clamped = Math.min(85, Math.max(MIN_RETIREMENT_AGE, age));
  return Math.round(22_000 + (clamped - MIN_RETIREMENT_AGE) * 720);
}

export const TIMELINE_STEP_COUNT = 4;

export type TimelineStepId = 1 | 2 | 3 | 4;
