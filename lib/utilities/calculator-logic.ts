/** Pattaya utilities calculator — rates & usage assumptions from living guide */

export type HousingType = "studio" | "oneBed" | "house";
export type AcUsage = "low" | "night" | "high";
export type BillingRate = "gov" | "condo";

/** ฿/unit — PEA gov vs typical condo markup */
export const ELECTRIC_RATE: Record<BillingRate, number> = {
  gov: 4.5,
  condo: 8.0,
};

/** Flat monthly water (gov meter vs condo minimum package) */
export const WATER_FLAT: Record<BillingRate, number> = {
  gov: 250,
  condo: 500,
};

export const INTERNET_MONTHLY = 641;
export const DRINKING_WATER_MONTHLY = 300;

/** kWh/month simulated by floor area + AC pattern */
export const ELECTRIC_UNITS: Record<HousingType, Record<AcUsage, number>> = {
  studio: { low: 150, night: 300, high: 580 },
  oneBed: { low: 250, night: 450, high: 800 },
  house: { low: 400, night: 800, high: 1200 },
};

export type UtilityLineKey = "electric" | "water" | "internet" | "drinking";

export type UtilityBreakdown = {
  electric: number;
  water: number;
  internet: number;
  drinking: number;
  total: number;
  units: number;
  electricRate: number;
};

export type CalculatorInput = {
  housing: HousingType;
  ac: AcUsage;
  billing: BillingRate;
};

export function calculateUtilities(input: CalculatorInput): UtilityBreakdown {
  const units = ELECTRIC_UNITS[input.housing][input.ac];
  const electricRate = ELECTRIC_RATE[input.billing];

  // Electricity = units × ฿/unit
  const electric = Math.round(units * electricRate);
  const water = WATER_FLAT[input.billing];
  const internet = INTERNET_MONTHLY;
  const drinking = DRINKING_WATER_MONTHLY;
  const total = electric + water + internet + drinking;

  return {
    electric,
    water,
    internet,
    drinking,
    total,
    units,
    electricRate,
  };
}

export function formatBaht(amount: number, locale: string): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "THB",
    maximumFractionDigits: 0,
  }).format(amount);
}
