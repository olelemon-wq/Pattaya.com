export type LifestyleTier = "budget" | "standard" | "premium";

export type ExpenseCategoryId = "housing" | "food" | "entertainment" | "other";

export type ExpenseBreakdown = {
  id: ExpenseCategoryId;
  percent: number;
};

export type TierProfile = {
  totalThb: number;
  breakdown: ExpenseBreakdown[];
};

/** Base monthly Pattaya cost profiles (THB) */
export const TIER_PROFILES: Record<LifestyleTier, TierProfile> = {
  budget: {
    totalThb: 38_000,
    breakdown: [
      { id: "housing", percent: 48 },
      { id: "food", percent: 28 },
      { id: "entertainment", percent: 12 },
      { id: "other", percent: 12 },
    ],
  },
  standard: {
    totalThb: 58_000,
    breakdown: [
      { id: "housing", percent: 45 },
      { id: "food", percent: 25 },
      { id: "entertainment", percent: 15 },
      { id: "other", percent: 15 },
    ],
  },
  premium: {
    totalThb: 66_600,
    breakdown: [
      { id: "housing", percent: 42 },
      { id: "food", percent: 24 },
      { id: "entertainment", percent: 18 },
      { id: "other", percent: 16 },
    ],
  },
};

export const LIFESTYLE_TIERS: LifestyleTier[] = ["budget", "standard", "premium"];

export const BAR_CLASS: Record<ExpenseCategoryId, string> = {
  housing: "cost-living__bar-fill--housing",
  food: "cost-living__bar-fill--food",
  entertainment: "cost-living__bar-fill--entertainment",
  other: "cost-living__bar-fill--other",
};
