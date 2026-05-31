/** Illustrative rates — THB per 1 unit of foreign currency */

export type CostCurrency = "USD" | "THB" | "EUR";

export const EXCHANGE_RATES: Record<CostCurrency, number> = {
  THB: 1,
  USD: 36,
  EUR: 39,
};

/** Convert monthly THB base into selected currency */
export function convertFromThb(amountThb: number, currency: CostCurrency): number {
  if (currency === "THB") return amountThb;
  return Math.round(amountThb / EXCHANGE_RATES[currency]);
}
