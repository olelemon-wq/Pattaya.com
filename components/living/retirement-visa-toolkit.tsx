"use client";

import { useLanguage } from "@/components/layout/language-provider";
import {
  getCurrencyOptions,
  getEligibilityResult,
  getFinancialModeOptions,
  getRetirementToolkitCopy,
  getTimelineSteps,
} from "@/lib/i18n/messages/living/retirement-visa-toolkit";
import {
  estimateInsuranceAnnual,
  evaluateEligibility,
  evaluateFinancial,
  MIN_RETIREMENT_AGE,
  type ApplyLocation,
  type CurrencyCode,
  type EligibilityPath,
  type FinancialMode,
} from "@/lib/visa/retirement-visa-logic";
import Link from "next/link";
import { useMemo, useState } from "react";

function formatThb(n: number, lang: string) {
  return new Intl.NumberFormat(lang === "th" ? "th-TH" : "en-US", {
    style: "currency",
    currency: "THB",
    maximumFractionDigits: 0,
  }).format(n);
}

export function RetirementVisaToolkit() {
  const { language } = useLanguage();
  const copy = getRetirementToolkitCopy(language);
  const currencyOptions = getCurrencyOptions(language);
  const modeOptions = getFinancialModeOptions(language);
  const timelineSteps = getTimelineSteps(language);

  const [age, setAge] = useState(55);
  const [passportValid, setPassportValid] = useState<boolean | null>(null);
  const [applyLocation, setApplyLocation] = useState<ApplyLocation>("embassy");
  const [oxNationality, setOxNationality] = useState(false);
  const [eligibilityPath, setEligibilityPath] = useState<EligibilityPath | null>(null);

  const [amount, setAmount] = useState("800000");
  const [currency, setCurrency] = useState<CurrencyCode>("THB");
  const [financeMode, setFinanceMode] = useState<FinancialMode>("deposit");

  const [insuranceAge, setInsuranceAge] = useState(60);
  const [activeTimeline, setActiveTimeline] = useState(0);

  const finance = useMemo(() => {
    const num = Number.parseFloat(amount.replace(/,/g, "")) || 0;
    return evaluateFinancial(num, currency, financeMode);
  }, [amount, currency, financeMode]);

  const annualPremium = estimateInsuranceAnnual(insuranceAge);
  const monthlyPremium = Math.round(annualPremium / 12);

  const runEligibility = () => {
    if (passportValid === null) return;
    setEligibilityPath(
      evaluateEligibility(age, passportValid, applyLocation, oxNationality),
    );
  };

  const eligibility = eligibilityPath
    ? getEligibilityResult(language, eligibilityPath)
    : null;

  return (
    <section
      id="retirement-toolkit"
      className="retirement-toolkit"
      aria-labelledby="retirement-toolkit-title"
    >
      <header className="retirement-toolkit__intro">
        <span className="retirement-toolkit__badge">{copy.badge}</span>
        <h2 id="retirement-toolkit-title" className="retirement-toolkit__title">
          {copy.title}
        </h2>
        <p className="retirement-toolkit__subtitle">{copy.subtitle}</p>
      </header>

      <div className="retirement-toolkit__card">
        {/* Eligibility */}
        <div className="retirement-toolkit__section">
          <h3 className="retirement-toolkit__section-title">{copy.eligibilityTitle}</h3>
          <p className="retirement-toolkit__hint">{copy.eligibilityHint}</p>

          <div className="retirement-toolkit__field-grid">
            <label className="retirement-toolkit__field">
              <span className="retirement-toolkit__label">{copy.ageLabel}</span>
              <input
                type="number"
                min={40}
                max={99}
                className="retirement-toolkit__input retirement-toolkit__input--compact"
                value={age}
                onChange={(e) => setAge(Number(e.target.value) || MIN_RETIREMENT_AGE)}
              />
            </label>

            <fieldset className="retirement-toolkit__fieldset">
              <legend className="retirement-toolkit__label">{copy.passportLabel}</legend>
              <div className="retirement-toolkit__segmented">
                <button
                  type="button"
                  className={`retirement-toolkit__seg-btn${passportValid === true ? " retirement-toolkit__seg-btn--active" : ""}`}
                  onClick={() => setPassportValid(true)}
                >
                  {copy.yes}
                </button>
                <button
                  type="button"
                  className={`retirement-toolkit__seg-btn${passportValid === false ? " retirement-toolkit__seg-btn--active" : ""}`}
                  onClick={() => setPassportValid(false)}
                >
                  {copy.no}
                </button>
              </div>
            </fieldset>

            <fieldset className="retirement-toolkit__fieldset">
              <legend className="retirement-toolkit__label">{copy.applyLabel}</legend>
              <div className="retirement-toolkit__segmented">
                <button
                  type="button"
                  className={`retirement-toolkit__seg-btn${applyLocation === "embassy" ? " retirement-toolkit__seg-btn--active" : ""}`}
                  onClick={() => setApplyLocation("embassy")}
                >
                  {copy.applyEmbassy}
                </button>
                <button
                  type="button"
                  className={`retirement-toolkit__seg-btn${applyLocation === "thailand" ? " retirement-toolkit__seg-btn--active" : ""}`}
                  onClick={() => setApplyLocation("thailand")}
                >
                  {copy.applyThailand}
                </button>
              </div>
            </fieldset>

            {applyLocation === "embassy" ? (
              <label className="retirement-toolkit__checkbox-row">
                <input
                  type="checkbox"
                  className="retirement-toolkit__checkbox"
                  checked={oxNationality}
                  onChange={(e) => setOxNationality(e.target.checked)}
                />
                <span>
                  <span className="retirement-toolkit__label">{copy.oxLabel}</span>
                  <span className="retirement-toolkit__hint retirement-toolkit__hint--inline">
                    {copy.oxHint}
                  </span>
                </span>
              </label>
            ) : null}
          </div>

          <button
            type="button"
            className="retirement-toolkit__btn"
            onClick={runEligibility}
            disabled={passportValid === null}
          >
            {copy.checkBtn}
          </button>

          {eligibility ? (
            <div
              className={`retirement-toolkit__result retirement-toolkit__result--${eligibility.tone === "bad" ? "error" : "success"}`}
              role="status"
            >
              <p className="retirement-toolkit__result-label">{copy.resultLabel}</p>
              <p className="retirement-toolkit__result-title">{eligibility.title}</p>
              <p className="retirement-toolkit__result-body">{eligibility.body}</p>
            </div>
          ) : null}
        </div>

        <hr className="retirement-toolkit__divider" />

        {/* Financial */}
        <div className="retirement-toolkit__section">
          <h3 className="retirement-toolkit__section-title">{copy.financeTitle}</h3>
          <p className="retirement-toolkit__hint">{copy.financeHint}</p>

          <div className="retirement-toolkit__mode-tabs" role="tablist">
            {modeOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                role="tab"
                aria-selected={financeMode === opt.value}
                className={`retirement-toolkit__mode-tab${financeMode === opt.value ? " retirement-toolkit__mode-tab--active" : ""}`}
                onClick={() => setFinanceMode(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="retirement-toolkit__finance-row">
            <label className="retirement-toolkit__field retirement-toolkit__field--grow">
              <span className="retirement-toolkit__label">{copy.amountLabel}</span>
              <input
                type="text"
                inputMode="decimal"
                className="retirement-toolkit__input"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </label>
            <label className="retirement-toolkit__field">
              <span className="retirement-toolkit__label">{copy.currencyLabel}</span>
              <select
                className="retirement-toolkit__select"
                value={currency}
                onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
              >
                {currencyOptions.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div
            className={`retirement-toolkit__finance-result${finance.passes ? " retirement-toolkit__finance-result--success" : " retirement-toolkit__finance-result--error"}`}
          >
            <div className="retirement-toolkit__finance-metric">
              <span className="retirement-toolkit__metric-label">{copy.thbEquivalent}</span>
              <span className="retirement-toolkit__metric-value">
                {formatThb(finance.thb, language)}
              </span>
            </div>
            <div className="retirement-toolkit__finance-metric">
              <span className="retirement-toolkit__metric-label">{copy.threshold}</span>
              <span className="retirement-toolkit__metric-value">
                {formatThb(finance.threshold, language)}
              </span>
            </div>
            <p
              className={`retirement-toolkit__status-pill${finance.passes ? " retirement-toolkit__status-pill--ok" : " retirement-toolkit__status-pill--fail"}`}
            >
              {finance.passes ? copy.statusPass : copy.statusFail}
            </p>
          </div>
        </div>

        <hr className="retirement-toolkit__divider" />

        {/* Insurance */}
        <div className="retirement-toolkit__section">
          <h3 className="retirement-toolkit__section-title">{copy.insuranceTitle}</h3>
          <p className="retirement-toolkit__hint">{copy.insuranceHint}</p>

          <div className="retirement-toolkit__slider-block">
            <div className="retirement-toolkit__slider-meta">
              <span className="retirement-toolkit__slider-label">{copy.insuranceAge}</span>
              <span className="retirement-toolkit__slider-value" aria-live="polite">
                {insuranceAge}
              </span>
            </div>
            <input
              type="range"
              className="retirement-toolkit__slider"
              min={MIN_RETIREMENT_AGE}
              max={85}
              value={insuranceAge}
              onChange={(e) => setInsuranceAge(Number(e.target.value))}
              style={{
                background: `linear-gradient(90deg, var(--rt-accent) 0%, var(--rt-accent) ${((insuranceAge - MIN_RETIREMENT_AGE) / (85 - MIN_RETIREMENT_AGE)) * 100}%, #e5e5ea ${((insuranceAge - MIN_RETIREMENT_AGE) / (85 - MIN_RETIREMENT_AGE)) * 100}%, #e5e5ea 100%)`,
              }}
            />
            <div className="retirement-toolkit__slider-ticks">
              <span>{MIN_RETIREMENT_AGE}</span>
              <span>85</span>
            </div>
          </div>

          <div className="retirement-toolkit__premium-grid">
            <div className="retirement-toolkit__premium-card">
              <span className="retirement-toolkit__metric-label">{copy.estimatedAnnual}</span>
              <span className="retirement-toolkit__premium-amount" title={formatThb(annualPremium, language)}>
                {formatThb(annualPremium, language)}
              </span>
            </div>
            <div className="retirement-toolkit__premium-card">
              <span className="retirement-toolkit__metric-label">{copy.estimatedMonthly}</span>
              <span className="retirement-toolkit__premium-amount">
                {formatThb(monthlyPremium, language)}
              </span>
            </div>
          </div>
        </div>

        <hr className="retirement-toolkit__divider" />

        {/* Timeline */}
        <div className="retirement-toolkit__section">
          <h3 className="retirement-toolkit__section-title">{copy.timelineTitle}</h3>
          <p className="retirement-toolkit__hint">{copy.timelineHint}</p>

          <div className="retirement-toolkit__timeline" role="list">
            <div className="retirement-toolkit__timeline-rail" aria-hidden />
            {timelineSteps.map((step, index) => {
              const status =
                index < activeTimeline
                  ? "completed"
                  : index === activeTimeline
                    ? "current"
                    : "upcoming";
              const statusLabel =
                status === "completed"
                  ? copy.stepCompleted
                  : status === "current"
                    ? copy.stepCurrent
                    : copy.stepUpcoming;

              return (
                <button
                  key={step.id}
                  type="button"
                  role="listitem"
                  className={`retirement-toolkit__timeline-step retirement-toolkit__timeline-step--${status}`}
                  onClick={() => setActiveTimeline(index)}
                  aria-current={status === "current" ? "step" : undefined}
                >
                  <span className="retirement-toolkit__timeline-node" aria-hidden>
                    {status === "completed" ? (
                      <svg width="12" height="10" viewBox="0 0 12 10" aria-hidden>
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          d="M1 5l3 3 7-7"
                        />
                      </svg>
                    ) : (
                      step.id
                    )}
                  </span>
                  <span className="retirement-toolkit__timeline-content">
                    <span className="retirement-toolkit__timeline-status">{statusLabel}</span>
                    <span className="retirement-toolkit__timeline-title">{step.title}</span>
                    <span className="retirement-toolkit__timeline-duration">{step.duration}</span>
                    {status === "current" ? (
                      <span className="retirement-toolkit__timeline-body">{step.body}</span>
                    ) : null}
                    {step.id === 4 && status === "current" ? (
                      <Link
                        href="/living/visa/90-day-report"
                        className="retirement-toolkit__link"
                      >
                        {copy.ninetyDayLink}
                      </Link>
                    ) : null}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <p className="retirement-toolkit__disclaimer">{copy.disclaimer}</p>
      </div>
    </section>
  );
}
