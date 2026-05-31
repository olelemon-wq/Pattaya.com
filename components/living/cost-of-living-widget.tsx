"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { formatCostAmount, useCostCalculator } from "@/hooks/use-cost-calculator";
import { getCostLivingWidgetCopy } from "@/lib/i18n/messages/living/cost-of-living-widget";
import type { LifestyleTier } from "@/lib/cost-of-living/cost-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useAnimatedAmount } from "@/hooks/use-animated-amount";
import { useMemo } from "react";
import type { CostCurrency } from "@/lib/cost-of-living/exchange-rates";
import type { LanguageCode } from "@/lib/i18n/languages";

function AnimatedTotal({
  amount,
  currency,
  lang,
}: {
  amount: number;
  currency: CostCurrency;
  lang: LanguageCode;
}) {
  const animated = useAnimatedAmount(amount);
  const display = useMemo(
    () => formatCostAmount(animated, currency, lang),
    [animated, currency, lang],
  );

  return (
    <p className="cost-living__total-value" aria-live="polite">
      {display}
    </p>
  );
}

function ExpenseBar({
  label,
  percent,
  barClass,
}: {
  label: string;
  percent: number;
  barClass: string;
}) {
  return (
    <div className="cost-living__bar-row">
      <div className="cost-living__bar-head">
        <span className="cost-living__bar-label">{label}</span>
        <span className="cost-living__bar-pct">{percent}%</span>
      </div>
      <div className="cost-living__bar-track">
        <div
          className={`cost-living__bar-fill ${barClass}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export function CostOfLivingWidget({
  analysisHref = "/living/cost-of-living/food",
  hideTierTabs = false,
}: {
  analysisHref?: string;
  /** Hide pills when page uses LifestyleSegmentedControl + provider */
  hideTierTabs?: boolean;
}) {
  const { language } = useLanguage();
  const copy = getCostLivingWidgetCopy(language);
  const {
    tier,
    setTier,
    currency,
    setCurrency,
    tierOptions,
    currencyOptions,
    categories,
    totalAmount,
  } = useCostCalculator(language);

  return (
    <article className="cost-living" aria-labelledby="cost-living-title">
      {!hideTierTabs ? (
        <div className="cost-living__tier-tabs" role="tablist" aria-label={copy.title}>
          {tierOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="tab"
              aria-selected={tier === opt.value}
              className={`cost-living__tier-tab${tier === opt.value ? " cost-living__tier-tab--active" : ""}`}
              onClick={() => setTier(opt.value as LifestyleTier)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      ) : null}

      <div className="cost-living__card">
        <header className="cost-living__card-head">
          <span className="cost-living__badge">{copy.badge}</span>
          <h3 id="cost-living-title" className="cost-living__title">
            {copy.title}
          </h3>
          <p className="cost-living__subtitle">{copy.subtitle}</p>
        </header>

        <div className="cost-living__body">
          <div className="cost-living__breakdown">
            {categories.map((cat) => (
              <ExpenseBar
                key={`${tier}-${cat.id}`}
                label={cat.label}
                percent={cat.percent}
                barClass={cat.barClass}
              />
            ))}
          </div>

          <aside className="cost-living__highlight">
            <label className="cost-living__currency-wrap">
              <span className="sr-only">{copy.totalLabel}</span>
              <select
                className="cost-living__currency-select"
                value={currency}
                onChange={(e) =>
                  setCurrency(e.target.value as typeof currency)
                }
                aria-label="Currency"
              >
                {currencyOptions.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </label>

            <p className="cost-living__total-label">{copy.totalLabel}</p>
            <AnimatedTotal amount={totalAmount} currency={currency} lang={language} />

            <ul className="cost-living__slice-list">
              {categories.map((cat) => (
                <li key={cat.id} className="cost-living__slice-item">
                  <span>{cat.label}</span>
                  <span className="cost-living__slice-amount">{cat.amountFormatted}</span>
                </li>
              ))}
            </ul>

            <p className="cost-living__total-note">{copy.totalNote}</p>

            <Link href={analysisHref} className="cost-living__analysis-link">
              <span>{copy.fullAnalysis}</span>
              <ArrowRight className="cost-living__analysis-arrow" aria-hidden />
            </Link>
          </aside>
        </div>

        <p className="cost-living__disclaimer">{copy.disclaimer}</p>
      </div>
    </article>
  );
}
