"use client";

import { useLanguage } from "@/components/layout/language-provider";
import {
  getSongthaewPage,
  getSongthaewRoutes,
  type SongthaewRouteId,
} from "@/lib/i18n/messages/living/songthaew";
import { AlertTriangle, Bus, Users } from "lucide-react";
import { useState } from "react";

type RideMode = "shared" | "charter";

export function SongthaewGuide() {
  const { language } = useLanguage();
  const copy = getSongthaewPage(language);
  const routes = getSongthaewRoutes(language);
  const [routeId, setRouteId] = useState<SongthaewRouteId>("beach");
  const [mode, setMode] = useState<RideMode>("shared");

  const activeRoute = routes.find((r) => r.id === routeId) ?? routes[0];

  return (
    <section className="songthaew-guide" aria-labelledby="songthaew-guide-title">
      <header className="songthaew-guide__intro">
        <span className="songthaew-guide__badge">{copy.guideBadge}</span>
        <h2 id="songthaew-guide-title" className="songthaew-guide__title">
          {copy.guideTitle}
        </h2>
        <p className="songthaew-guide__subtitle">{copy.guideSubtitle}</p>
      </header>

      <div className="songthaew-guide__card">
        <div className="songthaew-guide__section">
          <h3 className="songthaew-guide__section-title">{copy.howTitle}</h3>
          <ol className="songthaew-guide__steps">
            {copy.howSteps.map((step, i) => (
              <li key={step.title} className="songthaew-guide__step">
                <span className="songthaew-guide__step-num" aria-hidden>
                  {i + 1}
                </span>
                <div>
                  <p className="songthaew-guide__step-title">{step.title}</p>
                  <p className="songthaew-guide__step-body">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <hr className="songthaew-guide__divider" />

        <div className="songthaew-guide__section">
          <h3 className="songthaew-guide__section-title">{copy.routesTitle}</h3>
          <p className="songthaew-guide__hint">{copy.routesHint}</p>

          <div
            className="songthaew-guide__tabs"
            role="tablist"
            aria-label={copy.routesTitle}
          >
            {routes.map((r) => {
              const active = routeId === r.id;
              return (
                <button
                  key={r.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className={`songthaew-guide__tab${active ? " songthaew-guide__tab--active" : ""}`}
                  onClick={() => setRouteId(r.id)}
                >
                  {r.label}
                </button>
              );
            })}
          </div>

          <div className="songthaew-guide__route-panel" role="tabpanel">
            <p className="songthaew-guide__route-corridor">{activeRoute.corridors}</p>
            <p className="songthaew-guide__route-fare">
              <Bus className="h-4 w-4 shrink-0" aria-hidden />
              {copy.sharedLabel}: {activeRoute.fare}
            </p>
            <ul className="songthaew-guide__route-tips">
              {activeRoute.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="songthaew-guide__divider" />

        <div className="songthaew-guide__section">
          <h3 className="songthaew-guide__section-title">{copy.faresTitle}</h3>
          <div
            className="songthaew-guide__mode-toggle"
            role="group"
            aria-label={copy.faresTitle}
          >
            <button
              type="button"
              className={`songthaew-guide__mode-btn${mode === "shared" ? " songthaew-guide__mode-btn--active" : ""}`}
              aria-pressed={mode === "shared"}
              onClick={() => setMode("shared")}
            >
              {copy.sharedLabel}
            </button>
            <button
              type="button"
              className={`songthaew-guide__mode-btn songthaew-guide__mode-btn--charter${mode === "charter" ? " songthaew-guide__mode-btn--active" : ""}`}
              aria-pressed={mode === "charter"}
              onClick={() => setMode("charter")}
            >
              {copy.charterLabel}
            </button>
          </div>
          <p
            className={`songthaew-guide__mode-detail${mode === "charter" ? " songthaew-guide__mode-detail--warn" : ""}`}
          >
            {mode === "shared" ? copy.modeSharedHint : copy.modeCharterHint}
          </p>
          <p className="songthaew-guide__hint">{copy.faresNote}</p>
        </div>

        <div className="songthaew-guide__scam-box">
          <p className="songthaew-guide__scam-title">
            <AlertTriangle className="h-4 w-4" aria-hidden />
            {copy.scamTitle}
          </p>
          <p className="songthaew-guide__scam-body">{copy.scamBody}</p>
        </div>

        <div className="songthaew-guide__queue-box">
          <p className="songthaew-guide__queue-title">
            <Users className="h-4 w-4" aria-hidden />
            {copy.queueTitle}
          </p>
          <p className="songthaew-guide__queue-body">{copy.queueBody}</p>
        </div>
      </div>
    </section>
  );
}
