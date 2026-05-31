"use client";

import {
  BAR_CLASS,
  TIER_PROFILES,
  type ExpenseCategoryId,
  type LifestyleTier,
} from "@/lib/cost-of-living/cost-data";
import {
  convertFromThb,
  type CostCurrency,
} from "@/lib/cost-of-living/exchange-rates";
import {
  getCategoryLabel,
  getCurrencyOptions,
  getTierOptions,
} from "@/lib/i18n/messages/living/cost-of-living-widget";
import { useCostLivingOptional } from "@/components/living/cost-living-provider";
import type { LanguageCode } from "@/lib/i18n/languages";
import { useMemo, useState } from "react";

export type CostCategoryRow = {
  id: ExpenseCategoryId;
  label: string;
  percent: number;
  amount: number;
  amountFormatted: string;
  barClass: string;
};

const LOCALE_MAP: Record<LanguageCode, string> = {
  en: "en-US",
  th: "th-TH",
  zh: "zh-CN",
  ru: "ru-RU",
};

export function formatCostAmount(
  amount: number,
  currency: CostCurrency,
  lang: LanguageCode,
): string {
  const locale = LOCALE_MAP[lang] ?? "en-US";
  if (currency === "THB") {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: "THB",
      maximumFractionDigits: 0,
    }).format(amount);
  }
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Computes localized cost-of-living breakdown from tier + currency.
 * UI should only consume returned values — no calculation in components.
 */
export function useCostCalculator(lang: LanguageCode) {
  const ctx = useCostLivingOptional();
  const [localTier, setLocalTier] = useState<LifestyleTier>("premium");
  const [localCurrency, setLocalCurrency] = useState<CostCurrency>("USD");
  const tier = ctx?.tier ?? localTier;
  const setTier = ctx?.setTier ?? setLocalTier;
  const currency = ctx?.currency ?? localCurrency;
  const setCurrency = ctx?.setCurrency ?? setLocalCurrency;

  const tierOptions = useMemo(() => getTierOptions(lang), [lang]);
  const currencyOptions = useMemo(() => getCurrencyOptions(lang), [lang]);

  const calculation = useMemo(() => {
    const profile = TIER_PROFILES[tier];
    const totalAmount = convertFromThb(profile.totalThb, currency);
    const categories: CostCategoryRow[] = profile.breakdown.map((item) => {
      const sliceThb = Math.round((profile.totalThb * item.percent) / 100);
      const amount = convertFromThb(sliceThb, currency);
      return {
        id: item.id,
        label: getCategoryLabel(lang, item.id),
        percent: item.percent,
        amount,
        amountFormatted: formatCostAmount(amount, currency, lang),
        barClass: BAR_CLASS[item.id],
      };
    });

    return {
      totalAmount,
      totalFormatted: formatCostAmount(totalAmount, currency, lang),
      categories,
      totalThb: profile.totalThb,
    };
  }, [tier, currency, lang]);

  return {
    tier,
    setTier,
    currency,
    setCurrency,
    tierOptions,
    currencyOptions,
    ...calculation,
  };
}
