/** Health insurance recommender — illustrative Pattaya cost scenarios */

export type AgeRange = "under50" | "50-60" | "60plus";
export type VisaProfile = "general" | "oa-ltr";
export type PlanTierId = "local" | "standard" | "premium";
export type ScenarioId = "foodPoisoning" | "motorbike" | "heart";

export type PlanTier = {
  id: PlanTierId;
  monthlyMin: number;
  monthlyMax: number;
  visaApproved: boolean;
};

export const PLAN_TIERS: Record<PlanTierId, PlanTier> = {
  local: { id: "local", monthlyMin: 1200, monthlyMax: 2800, visaApproved: true },
  standard: { id: "standard", monthlyMin: 3500, monthlyMax: 6500, visaApproved: false },
  premium: { id: "premium", monthlyMin: 8500, monthlyMax: 15000, visaApproved: false },
};

export const SCENARIO_COSTS: Record<
  ScenarioId,
  { outOfPocket: number; withInsurance: number }
> = {
  foodPoisoning: { outOfPocket: 28_000, withInsurance: 4_500 },
  motorbike: { outOfPocket: 165_000, withInsurance: 18_000 },
  heart: { outOfPocket: 850_000, withInsurance: 55_000 },
};

/** Pick recommended tier from profiler answers */
export function getRecommendedTier(age: AgeRange, visa: VisaProfile): PlanTierId {
  if (visa === "oa-ltr") {
    return age === "60plus" ? "local" : "standard";
  }
  if (age === "under50") return "standard";
  if (age === "50-60") return "standard";
  return "premium";
}

export function formatBaht(amount: number, locale: string): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "THB",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatBahtRange(min: number, max: number, locale: string): string {
  return `${formatBaht(min, locale)} – ${formatBaht(max, locale)}`;
}
