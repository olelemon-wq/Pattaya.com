"use client";

import { useCostLivingOptional } from "@/components/living/cost-living-provider";
import { TIER_PROFILES, type LifestyleTier } from "@/lib/cost-of-living/cost-data";
import {
  convertFromThb,
  type CostCurrency,
} from "@/lib/cost-of-living/exchange-rates";
import {
  getPlannerTotalThb,
  PATTAYA_COST_CATEGORIES,
  type CostCategoryKey,
  type CostLineItemId,
} from "@/lib/cost-of-living/pattaya-prices";
import { formatCostAmount } from "@/hooks/use-cost-calculator";
import { getCategoryLabel } from "@/lib/i18n/messages/living/cost-of-living-widget";
import type { ExpenseCategoryId } from "@/lib/cost-of-living/cost-data";
import {
  getCostLineLabel,
  getCostCategoryTitle,
} from "@/lib/i18n/messages/living/cost-of-living-food";
import type { LanguageCode } from "@/lib/i18n/languages";
import { useMemo, useState } from "react";
import { BAR_CLASS } from "@/lib/cost-of-living/cost-data";

export type CostLineRow = {
  id: CostLineItemId;
  label: string;
  amountThb: number;
  amount: number;
  formatted: string;
};

export type CostCategoryBlock = {
  key: CostCategoryKey;
  title: string;
  monthlyThb: number;
  monthlyAmount: number;
  monthlyFormatted: string;
  lines: CostLineRow[];
};

function useTierCurrencyState(lang: LanguageCode) {
  const ctx = useCostLivingOptional();
  const [localTier, setLocalTier] = useState<LifestyleTier>("standard");
  const [localCurrency, setLocalCurrency] = useState<CostCurrency>("THB");

  const tier = ctx?.tier ?? localTier;
  const setTier = ctx?.setTier ?? setLocalTier;
  const currency = ctx?.currency ?? localCurrency;
  const setCurrency = ctx?.setCurrency ?? setLocalCurrency;

  const formatThb = useMemo(
    () => (thb: number) =>
      formatCostAmount(convertFromThb(thb, currency), currency, lang),
    [currency, lang],
  );

  return { tier, setTier, currency, setCurrency, formatThb };
}

/**
 * Fetches tier-adjusted Pattaya prices for food, housing, and transport.
 * Separates calculation from UI — safe to call from any child under the provider.
 */
export function useCostData(lang: LanguageCode) {
  const { tier, currency, formatThb } = useTierCurrencyState(lang);

  return useMemo(() => {
    const categories: CostCategoryBlock[] = PATTAYA_COST_CATEGORIES.map((cat) => {
      const monthlyThb = cat.monthlyThbByTier[tier];
      const monthlyAmount = convertFromThb(monthlyThb, currency);
      return {
        key: cat.key,
        title: getCostCategoryTitle(lang, cat.key),
        monthlyThb,
        monthlyAmount,
        monthlyFormatted: formatThb(monthlyThb),
        lines: cat.items.map((item) => {
          const amountThb = item.monthlyThbByTier[tier];
          const amount = convertFromThb(amountThb, currency);
          return {
            id: item.id,
            label: getCostLineLabel(lang, item.id),
            amountThb,
            amount,
            formatted: formatThb(amountThb),
          };
        }),
      };
    });

    const plannerTotalThb = getPlannerTotalThb(tier);
    const profile = TIER_PROFILES[tier];

    const breakdown = profile.breakdown.map((item) => {
      const sliceThb = Math.round((profile.totalThb * item.percent) / 100);
      return {
        id: item.id as ExpenseCategoryId,
        label: getCategoryLabel(lang, item.id),
        percent: item.percent,
        amountThb: sliceThb,
        amount: convertFromThb(sliceThb, currency),
        formatted: formatThb(sliceThb),
        barClass: BAR_CLASS[item.id],
      };
    });

    return {
      tier,
      currency,
      categories,
      plannerTotalThb,
      plannerTotalAmount: convertFromThb(plannerTotalThb, currency),
      plannerTotalFormatted: formatThb(plannerTotalThb),
      profileTotalThb: profile.totalThb,
      profileTotalFormatted: formatThb(profile.totalThb),
      breakdown,
    };
  }, [tier, currency, lang, formatThb]);
}
