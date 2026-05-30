/** Pattaya monthly transport cost estimates (illustrative) */

export const GRAB_PER_TRIP = 100;
export const SONGTHAEW_PER_TRIP = 20;
export const MOTO_RENT_MONTHLY = 3_500;
export const MOTO_FUEL_MONTHLY = 1_500;
export const DAYS_PER_MONTH = 30;

export type TransportMode = "grab" | "songthaew" | "moto";

export function monthlyGrabCost(tripsPerDay: number): number {
  return tripsPerDay * GRAB_PER_TRIP * DAYS_PER_MONTH;
}

export function monthlySongthaewCost(tripsPerDay: number): number {
  return tripsPerDay * SONGTHAEW_PER_TRIP * DAYS_PER_MONTH;
}

export function monthlyMotoCost(): number {
  return MOTO_RENT_MONTHLY + MOTO_FUEL_MONTHLY;
}

export function compareTransportCosts(tripsPerDay: number) {
  const grab = monthlyGrabCost(tripsPerDay);
  const songthaew = monthlySongthaewCost(tripsPerDay);
  const moto = monthlyMotoCost();
  const max = Math.max(grab, songthaew, moto, 1);
  return { grab, songthaew, moto, max };
}

export function formatBaht(amount: number, locale: string): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "THB",
    maximumFractionDigits: 0,
  }).format(amount);
}
