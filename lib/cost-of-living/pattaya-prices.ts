import type { LifestyleTier } from "@/lib/cost-of-living/cost-data";

export type CostCategoryKey = "food" | "housing" | "transport";

export type CostLineItemId =
  | "streetFood"
  | "groceries"
  | "diningOut"
  | "rent"
  | "utilitiesBundle"
  | "condoFees"
  | "songthaew"
  | "rideHail"
  | "fuelParking";

export type CostLineItem = {
  id: CostLineItemId;
  monthlyThbByTier: Record<LifestyleTier, number>;
};

export type CostCategoryData = {
  key: CostCategoryKey;
  monthlyThbByTier: Record<LifestyleTier, number>;
  items: CostLineItem[];
};

/** Illustrative monthly Pattaya costs (THB) — tier-adjusted */
export const PATTAYA_COST_CATEGORIES: CostCategoryData[] = [
  {
    key: "food",
    monthlyThbByTier: { budget: 10_600, standard: 14_500, premium: 16_000 },
    items: [
      {
        id: "streetFood",
        monthlyThbByTier: { budget: 5_200, standard: 4_800, premium: 3_200 },
      },
      {
        id: "groceries",
        monthlyThbByTier: { budget: 3_800, standard: 4_200, premium: 4_500 },
      },
      {
        id: "diningOut",
        monthlyThbByTier: { budget: 1_600, standard: 5_500, premium: 8_300 },
      },
    ],
  },
  {
    key: "housing",
    monthlyThbByTier: { budget: 18_200, standard: 26_100, premium: 28_000 },
    items: [
      {
        id: "rent",
        monthlyThbByTier: { budget: 12_000, standard: 18_500, premium: 22_000 },
      },
      {
        id: "utilitiesBundle",
        monthlyThbByTier: { budget: 4_200, standard: 5_600, premium: 4_800 },
      },
      {
        id: "condoFees",
        monthlyThbByTier: { budget: 2_000, standard: 2_000, premium: 1_200 },
      },
    ],
  },
  {
    key: "transport",
    monthlyThbByTier: { budget: 3_800, standard: 8_700, premium: 12_000 },
    items: [
      {
        id: "songthaew",
        monthlyThbByTier: { budget: 1_800, standard: 1_200, premium: 400 },
      },
      {
        id: "rideHail",
        monthlyThbByTier: { budget: 1_600, standard: 5_500, premium: 9_200 },
      },
      {
        id: "fuelParking",
        monthlyThbByTier: { budget: 400, standard: 2_000, premium: 2_400 },
      },
    ],
  },
];

export function getCategoryMonthlyThb(
  key: CostCategoryKey,
  tier: LifestyleTier,
): number {
  const cat = PATTAYA_COST_CATEGORIES.find((c) => c.key === key);
  return cat?.monthlyThbByTier[tier] ?? 0;
}

export function getPlannerTotalThb(tier: LifestyleTier): number {
  return PATTAYA_COST_CATEGORIES.reduce(
    (sum, cat) => sum + cat.monthlyThbByTier[tier],
    0,
  );
}
