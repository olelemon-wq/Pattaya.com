"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { livingTheme } from "@/lib/design/living-theme";
import { getUtilitiesCalculatorCopy } from "@/lib/i18n/messages/living/utilities-calculator";
import {
  calculateUtilities,
  formatBaht,
  type AcUsage,
  type BillingRate,
  type HousingType,
  type UtilityLineKey,
} from "@/lib/utilities/calculator-logic";
import { Calculator, Droplets, GlassWater, Wifi, Zap } from "lucide-react";
import { useMemo, useState } from "react";

const LOCALE_MAP = { en: "en-TH", th: "th-TH", zh: "zh-CN", ru: "ru-RU" } as const;

const BAR_ICONS: Record<UtilityLineKey, typeof Zap> = {
  electric: Zap,
  water: Droplets,
  internet: Wifi,
  drinking: GlassWater,
};

function SegmentedControl<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <fieldset className="utilities-calc__field">
      <legend className="utilities-calc__legend">{label}</legend>
      <div className="utilities-calc__segmented" role="group" aria-label={label}>
        {options.map((opt) => {
          const active = value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              className={`utilities-calc__segment${active ? " utilities-calc__segment--active" : ""}`}
              aria-pressed={active}
              onClick={() => onChange(opt.value)}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export function UtilitiesCostCalculator() {
  const { language } = useLanguage();
  const copy = getUtilitiesCalculatorCopy(language);
  const locale = LOCALE_MAP[language] ?? "en-TH";

  const [housing, setHousing] = useState<HousingType>("studio");
  const [ac, setAc] = useState<AcUsage>("night");
  const [billing, setBilling] = useState<BillingRate>("gov");

  const result = useMemo(
    () => calculateUtilities({ housing, ac, billing }),
    [housing, ac, billing],
  );

  const lines: { key: UtilityLineKey; label: string; amount: number }[] = [
    { key: "electric", label: copy.lineElectric, amount: result.electric },
    { key: "water", label: copy.lineWater, amount: result.water },
    { key: "internet", label: copy.lineInternet, amount: result.internet },
    { key: "drinking", label: copy.lineDrinking, amount: result.drinking },
  ];

  const maxBar = result.total || 1;

  const unitsNote = copy.unitsNote
    .replace("{units}", String(result.units))
    .replace("{rate}", String(result.electricRate));

  return (
    <section className="utilities-calc" aria-labelledby="utilities-calc-title">
      <div className="utilities-calc__header">
        <div>
          <span className={livingTheme.badge}>{copy.badge}</span>
          <h2 id="utilities-calc-title" className={`mt-3 ${livingTheme.heading}`}>
            {copy.title}
          </h2>
          <p className={`mt-2 max-w-2xl ${livingTheme.muted}`}>{copy.subtitle}</p>
        </div>
        <div className="utilities-calc__header-icon" aria-hidden>
          <Calculator className="h-8 w-8" />
        </div>
      </div>

      <div className="utilities-calc__card">
        <div className="utilities-calc__controls">
          <div className="utilities-calc__field">
            <label htmlFor="utilities-housing" className="utilities-calc__legend">
              {copy.housingLabel}
            </label>
            <div className="utilities-calc__select-wrap">
              <select
                id="utilities-housing"
                className="utilities-calc__select"
                value={housing}
                onChange={(e) => setHousing(e.target.value as HousingType)}
              >
                <option value="studio">{copy.housingStudio}</option>
                <option value="oneBed">{copy.housingOneBed}</option>
                <option value="house">{copy.housingHouse}</option>
              </select>
            </div>
          </div>

          <SegmentedControl
            label={copy.acLabel}
            value={ac}
            onChange={setAc}
            options={[
              { value: "low", label: copy.acLow },
              { value: "night", label: copy.acNight },
              { value: "high", label: copy.acHigh },
            ]}
          />

          <SegmentedControl
            label={copy.billingLabel}
            value={billing}
            onChange={setBilling}
            options={[
              { value: "gov", label: copy.billingGov },
              { value: "condo", label: copy.billingCondo },
            ]}
          />
        </div>

        <div className="utilities-calc__results" aria-live="polite">
          <div className="utilities-calc__total-block">
            <p className="utilities-calc__total-label">{copy.totalLabel}</p>
            <p className="utilities-calc__total-value">{formatBaht(result.total, locale)}</p>
            <p className="utilities-calc__units-hint">{unitsNote}</p>
          </div>

          <ul className="utilities-calc__bars">
            {lines.map((line) => {
              const pct = Math.round((line.amount / maxBar) * 100);
              const Icon = BAR_ICONS[line.key];
              return (
                <li
                  key={line.key}
                  className="utilities-calc__bar-row"
                  data-category={line.key}
                >
                  <div className="utilities-calc__bar-meta">
                    <span className="utilities-calc__bar-label">
                      <span className="utilities-calc__bar-icon" aria-hidden>
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      {line.label}
                    </span>
                    <span className="utilities-calc__bar-amount">
                      {formatBaht(line.amount, locale)}
                    </span>
                  </div>
                  <div className="utilities-calc__bar-track">
                    <div
                      className="utilities-calc__bar-fill"
                      style={{ width: `${pct}%` }}
                      role="presentation"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <p className="utilities-calc__disclaimer">{copy.disclaimer}</p>
    </section>
  );
}
