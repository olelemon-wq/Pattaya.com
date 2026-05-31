"use client";

import { useLanguage } from "@/components/layout/language-provider";
import {
  compareTransportCosts,
  formatBaht,
  type TransportMode,
} from "@/lib/transportation/cost-comparer-logic";
import {
  getDrivingInteractiveCopy,
  getRentalChecklistItems,
  type ChecklistItemId,
} from "@/lib/i18n/messages/living/driving-interactive";
import { getDrivingSteps, type DrivingStepId } from "@/lib/i18n/messages/living/driving";
import { Bike, Bus, ChevronDown, Smartphone } from "lucide-react";
import { useMemo, useState } from "react";

const LOCALE_MAP = { en: "en-TH", th: "th-TH", zh: "zh-CN", ru: "ru-RU" } as const;

const MODE_META: Record<
  TransportMode,
  { icon: typeof Smartphone; barClass: string }
> = {
  grab: { icon: Smartphone, barClass: "transport-toolkit__bar-fill--grab" },
  songthaew: { icon: Bus, barClass: "transport-toolkit__bar-fill--songthaew" },
  moto: { icon: Bike, barClass: "transport-toolkit__bar-fill--moto" },
};

function CostBar({
  mode,
  label,
  formula,
  amount,
  max,
  formatted,
  isCheapest,
  cheapestLabel,
}: {
  mode: TransportMode;
  label: string;
  formula: string;
  amount: number;
  max: number;
  formatted: string;
  isCheapest: boolean;
  cheapestLabel: string;
}) {
  const pct = Math.max(6, Math.round((amount / max) * 100));
  const Icon = MODE_META[mode].icon;
  return (
    <div className={`transport-toolkit__cost-row${isCheapest ? " transport-toolkit__cost-row--best" : ""}`}>
      <div className="transport-toolkit__cost-head">
        <span className="transport-toolkit__cost-label">
          <Icon className="h-4 w-4 shrink-0" aria-hidden />
          {label}
          {isCheapest && <span className="transport-toolkit__best-pill">{cheapestLabel}</span>}
        </span>
        <span className="transport-toolkit__cost-amount">{formatted}</span>
      </div>
      <p className="transport-toolkit__cost-formula">{formula}</p>
      <div className="transport-toolkit__bar-track" aria-hidden>
        <div
          className={`transport-toolkit__bar-fill ${MODE_META[mode].barClass}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export function PattayaTransportToolkit() {
  const { language } = useLanguage();
  const copy = getDrivingInteractiveCopy(language);
  const checklistItems = getRentalChecklistItems(language);
  const licenseSteps = getDrivingSteps(language);
  const locale = LOCALE_MAP[language];

  const [trips, setTrips] = useState(4);
  const [checked, setChecked] = useState<Set<ChecklistItemId>>(new Set());
  const [openStep, setOpenStep] = useState<DrivingStepId | null>("step-1");

  const costs = useMemo(() => compareTransportCosts(trips), [trips]);

  const rows: { mode: TransportMode; amount: number; label: string; formula: string }[] = [
    { mode: "grab", amount: costs.grab, label: copy.grabLabel, formula: copy.grabFormula },
    {
      mode: "songthaew",
      amount: costs.songthaew,
      label: copy.songthaewLabel,
      formula: copy.songthaewFormula,
    },
    { mode: "moto", amount: costs.moto, label: copy.motoLabel, formula: copy.motoFormula },
  ];

  const cheapestAmount = Math.min(costs.grab, costs.songthaew, costs.moto);
  const progressPct = Math.round((checked.size / checklistItems.length) * 100);

  const toggleCheck = (id: ChecklistItemId) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleStep = (id: DrivingStepId) => {
    setOpenStep((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="transport-toolkit"
      className="transport-toolkit"
      aria-labelledby="transport-toolkit-title"
    >
      <header className="transport-toolkit__intro">
        <span className="transport-toolkit__badge">{copy.badge}</span>
        <h2 id="transport-toolkit-title" className="transport-toolkit__title">
          {copy.title}
        </h2>
        <p className="transport-toolkit__subtitle">{copy.subtitle}</p>
      </header>

      <div className="transport-toolkit__card">
        {/* ——— 1. Cost comparer ——— */}
        <div className="transport-toolkit__section">
          <h3 className="transport-toolkit__section-title">{copy.sectionCost}</h3>
          <div className="transport-toolkit__slider-block">
            <div className="transport-toolkit__slider-meta">
              <label htmlFor="transport-trips-slider" className="transport-toolkit__slider-label">
                {copy.tripsLabel}
              </label>
              <output htmlFor="transport-trips-slider" className="transport-toolkit__slider-value">
                {trips}
              </output>
            </div>
            <input
              id="transport-trips-slider"
              type="range"
              className="transport-toolkit__slider"
              min={1}
              max={10}
              step={1}
              value={trips}
              onChange={(e) => setTrips(Number(e.target.value))}
              aria-valuemin={1}
              aria-valuemax={10}
              aria-valuenow={trips}
            />
            <div className="transport-toolkit__slider-ticks" aria-hidden>
              <span>1</span>
              <span>10</span>
            </div>
            <p className="transport-toolkit__hint">{copy.tripsHint}</p>
          </div>

          <div className="transport-toolkit__chart" aria-live="polite">
            {rows.map((row) => (
              <CostBar
                key={row.mode}
                mode={row.mode}
                label={row.label}
                formula={row.formula}
                amount={row.amount}
                max={costs.max}
                formatted={formatBaht(row.amount, locale)}
                isCheapest={row.amount === cheapestAmount}
                cheapestLabel={copy.cheapest}
              />
            ))}
          </div>
        </div>

        <hr className="transport-toolkit__divider" />

        {/* ——— 2. Pre-rental checklist ——— */}
        <div className="transport-toolkit__section">
          <div className="transport-toolkit__checklist-head">
            <h3 className="transport-toolkit__section-title">{copy.sectionChecklist}</h3>
            <span className="transport-toolkit__progress-label">
              {copy.checklistProgress} {progressPct}%
            </span>
          </div>
          <div
            className="transport-toolkit__progress-track"
            role="progressbar"
            aria-valuenow={progressPct}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={copy.checklistProgress}
          >
            <div
              className="transport-toolkit__progress-fill"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <ul className="transport-toolkit__checklist">
            {checklistItems.map((item) => {
              const done = checked.has(item.id);
              return (
                <li key={item.id}>
                  <label
                    className={`transport-toolkit__check-item${done ? " transport-toolkit__check-item--done" : ""}${item.warning ? " transport-toolkit__check-item--warning" : ""}`}
                  >
                    <input
                      type="checkbox"
                      className="transport-toolkit__checkbox"
                      checked={done}
                      onChange={() => toggleCheck(item.id)}
                    />
                    <span className="transport-toolkit__check-box" aria-hidden />
                    <span className="transport-toolkit__check-text">{item.label}</span>
                  </label>
                </li>
              );
            })}
          </ul>
          {progressPct === 100 && (
            <p className="transport-toolkit__checklist-done">{copy.checklistDone}</p>
          )}
        </div>

        <hr className="transport-toolkit__divider" />

        {/* ——— 3. License stepper ——— */}
        <div id="transport-toolkit-license" className="transport-toolkit__section">
          <h3 className="transport-toolkit__section-title">{copy.sectionLicense}</h3>
          <p className="transport-toolkit__hint">{copy.licenseHint}</p>
          <ol className="transport-toolkit__stepper">
            {licenseSteps.map((step, index) => {
              const isOpen = openStep === step.id;
              const isLast = index === licenseSteps.length - 1;
              return (
                <li
                  key={step.id}
                  className={`transport-toolkit__step${isOpen ? " transport-toolkit__step--open" : ""}`}
                >
                  <button
                    id={`license-step-btn-${step.id}`}
                    type="button"
                    className="transport-toolkit__step-trigger"
                    aria-expanded={isOpen}
                    aria-controls={`license-step-panel-${step.id}`}
                    onClick={() => toggleStep(step.id)}
                  >
                    <span className="transport-toolkit__step-num">{step.step}</span>
                    <span className="transport-toolkit__step-title">{step.title}</span>
                    <ChevronDown
                      className="transport-toolkit__step-chevron"
                      aria-hidden
                    />
                  </button>
                  <div
                    className={`transport-toolkit__step-panel${isOpen ? " transport-toolkit__step-panel--open" : ""}`}
                    id={`license-step-panel-${step.id}`}
                    role="region"
                    aria-labelledby={`license-step-btn-${step.id}`}
                  >
                    <div className="transport-toolkit__step-panel-inner">
                      <p className="transport-toolkit__step-body">{step.note}</p>
                    </div>
                  </div>
                  {!isLast && <span className="transport-toolkit__step-line" aria-hidden />}
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <p className="transport-toolkit__disclaimer">{copy.disclaimer}</p>
    </section>
  );
}
