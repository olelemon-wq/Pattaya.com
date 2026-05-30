"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { livingTheme } from "@/lib/design/living-theme";
import {
  getInsurancePlanTierCopy,
  getInsuranceRecommenderCopy,
  getInsuranceScenarioCopy,
} from "@/lib/i18n/messages/living/health-insurance-recommender";
import {
  formatBaht,
  formatBahtRange,
  getRecommendedTier,
  PLAN_TIERS,
  SCENARIO_COSTS,
  type AgeRange,
  type PlanTierId,
  type ScenarioId,
  type VisaProfile,
} from "@/lib/insurance/insurance-recommender-logic";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Bike,
  ChevronRight,
  Globe,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UtensilsCrossed,
} from "lucide-react";
import { useMemo, useState } from "react";

const LOCALE_MAP = { en: "en-TH", th: "th-TH", zh: "zh-CN", ru: "ru-RU" } as const;

const TIER_ORDER: PlanTierId[] = ["local", "standard", "premium"];
const SCENARIO_ORDER: ScenarioId[] = ["foodPoisoning", "motorbike", "heart"];

const TIER_ICONS: Record<PlanTierId, typeof Stethoscope> = {
  local: Stethoscope,
  standard: ShieldCheck,
  premium: Globe,
};

const SCENARIO_ICONS: Record<ScenarioId, typeof UtensilsCrossed> = {
  foodPoisoning: UtensilsCrossed,
  motorbike: Bike,
  heart: Activity,
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
    <fieldset className="insurance-rec__field">
      <legend className="insurance-rec__legend">{label}</legend>
      <div className="insurance-rec__segmented" role="group" aria-label={label}>
        {options.map((opt) => {
          const active = value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              className={`insurance-rec__segment${active ? " insurance-rec__segment--active" : ""}`}
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

function CostBar({
  label,
  amount,
  max,
  variant,
  formatted,
}: {
  label: string;
  amount: number;
  max: number;
  variant: "pocket" | "insured";
  formatted: string;
}) {
  const pct = max > 0 ? Math.max(8, Math.round((amount / max) * 100)) : 0;
  return (
    <div className="insurance-rec__bar-row">
      <div className="insurance-rec__bar-meta">
        <span className="insurance-rec__bar-label">{label}</span>
        <span className="insurance-rec__bar-value">{formatted}</span>
      </div>
      <div className="insurance-rec__bar-track" aria-hidden>
        <div
          className={`insurance-rec__bar-fill insurance-rec__bar-fill--${variant}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function FlowStep({
  n,
  label,
  active,
}: {
  n: number;
  label: string;
  active?: boolean;
}) {
  return (
    <span className={`insurance-rec__flow-step${active ? " insurance-rec__flow-step--active" : ""}`}>
      <span className="insurance-rec__flow-num">{n}</span>
      {label}
    </span>
  );
}

export function HealthInsuranceRecommender() {
  const { language } = useLanguage();
  const copy = getInsuranceRecommenderCopy(language);
  const locale = LOCALE_MAP[language];

  const [age, setAge] = useState<AgeRange>("50-60");
  const [visa, setVisa] = useState<VisaProfile>("oa-ltr");
  const [scenario, setScenario] = useState<ScenarioId>("foodPoisoning");

  const recommended = useMemo(() => getRecommendedTier(age, visa), [age, visa]);
  const costs = SCENARIO_COSTS[scenario];
  const chartMax = Math.max(costs.outOfPocket, costs.withInsurance);
  const scenarioCopy = getInsuranceScenarioCopy(language, scenario);

  const ageLabel =
    age === "under50" ? copy.ageUnder50 : age === "50-60" ? copy.age5060 : copy.age60plus;
  const visaLabel = visa === "general" ? copy.visaGeneral : copy.visaOa;

  return (
    <section
      id="insurance-recommender"
      className="insurance-rec"
      aria-labelledby="insurance-rec-title"
    >
      <div className="insurance-rec__hero">
        <div>
          <span className="insurance-rec__badge">{copy.badge}</span>
          <h2 id="insurance-rec-title" className="insurance-rec__title">
            {copy.title}
          </h2>
          <p className={`mt-2 max-w-2xl ${livingTheme.body}`}>{copy.subtitle}</p>
        </div>
        <div className="insurance-rec__hero-icon" aria-hidden>
          <HeartPulse className="h-7 w-7" />
        </div>
      </div>

      <nav className="insurance-rec__flow" aria-label={copy.flowHint}>
        <FlowStep n={1} label={copy.flowStep1} active />
        <ChevronRight className="insurance-rec__flow-chevron" aria-hidden />
        <FlowStep n={2} label={copy.flowStep2} active />
        <ChevronRight className="insurance-rec__flow-chevron" aria-hidden />
        <FlowStep n={3} label={copy.flowStep3} active />
      </nav>

      <div className="insurance-rec__card">
        {/* Step 1 — inputs */}
        <div className="insurance-rec__panel insurance-rec__panel--input">
          <div className="insurance-rec__step-head">
            <span className="insurance-rec__step-badge">1</span>
            <div>
              <h3 className="insurance-rec__step-title">{copy.flowStep1}</h3>
              <p className="insurance-rec__step-hint insurance-rec__step-hint--desktop">
                {copy.step1Hint}
              </p>
              <p className="insurance-rec__step-hint insurance-rec__step-hint--mobile">
                {copy.step1HintMobile}
              </p>
            </div>
          </div>
          <div className="insurance-rec__controls">
            <SegmentedControl
              label={copy.ageLabel}
              value={age}
              onChange={setAge}
              options={[
                { value: "under50", label: copy.ageUnder50 },
                { value: "50-60", label: copy.age5060 },
                { value: "60plus", label: copy.age60plus },
              ]}
            />
            <SegmentedControl
              label={copy.visaLabel}
              value={visa}
              onChange={setVisa}
              options={[
                { value: "general", label: copy.visaGeneral },
                { value: "oa-ltr", label: copy.visaOa },
              ]}
            />
          </div>
          <div className="insurance-rec__connector insurance-rec__connector--to-plans" aria-hidden>
            <ArrowRight className="insurance-rec__connector-icon insurance-rec__connector-icon--h" />
            <ArrowDown className="insurance-rec__connector-icon insurance-rec__connector-icon--v" />
          </div>
        </div>

        {/* Step 2 — plan results */}
        <div
          className="insurance-rec__panel insurance-rec__panel--results"
          aria-labelledby="insurance-rec-plans-title"
        >
          <div className="insurance-rec__results-banner">
            <span className="insurance-rec__step-badge insurance-rec__step-badge--on-banner">2</span>
            <span>{copy.resultsBanner}</span>
          </div>
          <div className="insurance-rec__step-head">
            <div>
              <h3 id="insurance-rec-plans-title" className="insurance-rec__step-title">
                {copy.plansTitle}
              </h3>
              <p className="insurance-rec__selection-chip">
                {copy.resultsFor}: <strong>{ageLabel}</strong>
                <span aria-hidden> · </span>
                <strong>{visaLabel}</strong>
              </p>
            </div>
          </div>
          <ul className="insurance-rec__plan-grid">
            {TIER_ORDER.map((tierId) => {
              const tier = PLAN_TIERS[tierId];
              const tierCopy = getInsurancePlanTierCopy(language, tierId);
              const Icon = TIER_ICONS[tierId];
              const isRecommended = tierId === recommended;
              return (
                <li
                  key={tierId}
                  className={`insurance-rec__plan${isRecommended ? " insurance-rec__plan--recommended" : ""}`}
                  aria-current={isRecommended ? "true" : undefined}
                >
                  {isRecommended && (
                    <span className="insurance-rec__best-fit">
                      <Sparkles className="h-3 w-3" aria-hidden />
                      {copy.bestFit}
                    </span>
                  )}
                  <div className="insurance-rec__plan-icon" aria-hidden>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="insurance-rec__plan-name">{tierCopy.name}</h4>
                  <p className="insurance-rec__plan-desc">{tierCopy.desc}</p>
                  <p className="insurance-rec__plan-price">
                    {formatBahtRange(tier.monthlyMin, tier.monthlyMax, locale)}
                    <span className="insurance-rec__plan-price-suffix">{copy.perMonth}</span>
                  </p>
                  <ul className="insurance-rec__plan-features">
                    {tierCopy.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  {tier.visaApproved && (
                    <span className="insurance-rec__visa-badge">{copy.visaBadge}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Step 3 — scenario */}
      <div className="insurance-rec__simulator">
        <div className="insurance-rec__step-head">
          <span className="insurance-rec__step-badge">3</span>
          <div>
            <h3 className="insurance-rec__step-title">{copy.scenarioTitle}</h3>
            <p className="insurance-rec__step-hint">{copy.scenarioSubtitle}</p>
          </div>
        </div>
        <div className="insurance-rec__scenario-btns" role="group" aria-label={copy.scenarioTitle}>
          {SCENARIO_ORDER.map((id) => {
            const sc = getInsuranceScenarioCopy(language, id);
            const Icon = SCENARIO_ICONS[id];
            const active = scenario === id;
            return (
              <button
                key={id}
                type="button"
                className={`insurance-rec__scenario-btn${active ? " insurance-rec__scenario-btn--active" : ""}`}
                aria-pressed={active}
                onClick={() => setScenario(id)}
              >
                <Icon className="h-5 w-5 shrink-0" aria-hidden />
                <span>
                  <span className="insurance-rec__scenario-label">{sc.label}</span>
                  <span className="insurance-rec__scenario-desc">{sc.desc}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="insurance-rec__connector insurance-rec__connector--to-chart" aria-hidden>
          <ArrowDown className="insurance-rec__connector-icon" />
        </div>

        <div className="insurance-rec__chart-zone" aria-live="polite">
          <div className="insurance-rec__chart-banner">
            <ArrowDown className="h-4 w-4 shrink-0" aria-hidden />
            {copy.chartBanner}
          </div>
          <p className="insurance-rec__chart-scenario">
            {scenarioCopy.label}
          </p>
          <div className="insurance-rec__chart">
            <CostBar
              label={copy.outOfPocket}
              amount={costs.outOfPocket}
              max={chartMax}
              variant="pocket"
              formatted={formatBaht(costs.outOfPocket, locale)}
            />
            <CostBar
              label={copy.withInsurance}
              amount={costs.withInsurance}
              max={chartMax}
              variant="insured"
              formatted={formatBaht(costs.withInsurance, locale)}
            />
          </div>
        </div>
        <p className="insurance-rec__disclaimer">{copy.disclaimer}</p>
      </div>
    </section>
  );
}
