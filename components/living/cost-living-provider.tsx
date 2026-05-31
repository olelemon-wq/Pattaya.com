"use client";

import type { LifestyleTier } from "@/lib/cost-of-living/cost-data";
import type { CostCurrency } from "@/lib/cost-of-living/exchange-rates";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CostLivingContextValue = {
  tier: LifestyleTier;
  setTier: (tier: LifestyleTier) => void;
  currency: CostCurrency;
  setCurrency: (currency: CostCurrency) => void;
};

const CostLivingContext = createContext<CostLivingContextValue | null>(null);

type ProviderProps = {
  children: ReactNode;
  defaultTier?: LifestyleTier;
  defaultCurrency?: CostCurrency;
};

export function CostLivingProvider({
  children,
  defaultTier = "standard",
  defaultCurrency = "THB",
}: ProviderProps) {
  const [tier, setTierState] = useState<LifestyleTier>(defaultTier);
  const [currency, setCurrencyState] = useState<CostCurrency>(defaultCurrency);

  const setTier = useCallback((next: LifestyleTier) => setTierState(next), []);
  const setCurrency = useCallback((next: CostCurrency) => setCurrencyState(next), []);

  const value = useMemo(
    () => ({ tier, setTier, currency, setCurrency }),
    [tier, setTier, currency, setCurrency],
  );

  return (
    <CostLivingContext.Provider value={value}>{children}</CostLivingContext.Provider>
  );
}

/** Global lifestyle + currency for cost-of-living pages */
export function useCostLiving(): CostLivingContextValue {
  const ctx = useContext(CostLivingContext);
  if (!ctx) {
    throw new Error("useCostLiving must be used within CostLivingProvider");
  }
  return ctx;
}

export function useCostLivingOptional(): CostLivingContextValue | null {
  return useContext(CostLivingContext);
}
