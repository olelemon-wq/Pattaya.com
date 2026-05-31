"use client";

import { useLanguage } from "@/components/layout/language-provider";
import {
  getNinetyDayAssistantCopy,
  getTimelineLabels,
  type ReportMethodTabId,
} from "@/lib/i18n/messages/living/ninety-day-report-assistant";
import {
  buildNinetyDayTimeline,
  daysUntil,
  parseDateInput,
  TM47_ESERVICE_URL,
  toDateInputValue,
  type TimelineMilestoneId,
} from "@/lib/visa/ninety-day-report-logic";
import { AlertCircle, Calendar, ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";

const LOCALE_MAP = { en: "en-TH", th: "th-TH", zh: "zh-CN", ru: "ru-RU" } as const;

const TAB_ORDER: ReportMethodTabId[] = ["online", "in-person", "mail"];

const MILESTONE_CLASS: Record<TimelineMilestoneId, string> = {
  earliest: "report-assistant__node--green",
  due: "report-assistant__node--blue",
  lastGrace: "report-assistant__node--red",
};

function formatRelative(
  date: Date,
  copy: ReturnType<typeof getNinetyDayAssistantCopy>,
  locale: string,
): string {
  const diff = daysUntil(date);
  if (diff === 0) return copy.todayLabel;
  if (diff > 0) return copy.daysLeft(diff);
  return copy.daysAgo(Math.abs(diff));
}

export function NinetyDayReportAssistant() {
  const { language } = useLanguage();
  const copy = getNinetyDayAssistantCopy(language);
  const timelineLabels = getTimelineLabels(language);
  const locale = LOCALE_MAP[language];

  const defaultDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() - 75);
    return toDateInputValue(d);
  }, []);

  const [dateValue, setDateValue] = useState(defaultDate);
  const [tab, setTab] = useState<ReportMethodTabId>("online");

  const anchor = parseDateInput(dateValue);
  const timeline = anchor ? buildNinetyDayTimeline(anchor) : null;

  const tabLabels: Record<ReportMethodTabId, string> = {
    online: copy.tabOnline,
    "in-person": copy.tabInPerson,
    mail: copy.tabMail,
  };

  return (
    <section className="report-assistant" aria-labelledby="report-assistant-title">
      <header className="report-assistant__intro">
        <span className="report-assistant__badge">{copy.badge}</span>
        <h2 id="report-assistant-title" className="report-assistant__title">
          {copy.title}
        </h2>
        <p className="report-assistant__subtitle">{copy.subtitle}</p>
      </header>

      <div className="report-assistant__card">
        {/* Part 1: Calculator */}
        <div className="report-assistant__section">
          <h3 className="report-assistant__section-title">{copy.calcTitle}</h3>
          <p className="report-assistant__hint">{copy.calcHint}</p>

          <label className="report-assistant__date-field">
            <span className="report-assistant__date-label">
              <Calendar className="h-4 w-4 shrink-0" aria-hidden />
              {copy.dateLabel}
            </span>
            <input
              type="date"
              className="report-assistant__date-input"
              value={dateValue}
              max={toDateInputValue(new Date())}
              onChange={(e) => setDateValue(e.target.value)}
            />
          </label>

          {timeline ? (
            <div className="report-assistant__timeline" role="list" aria-label={copy.calcTitle}>
              <div className="report-assistant__timeline-track" aria-hidden />
              {timeline.milestones.map((m, i) => (
                <div
                  key={m.id}
                  className="report-assistant__timeline-item"
                  role="listitem"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <div
                    className={`report-assistant__node ${MILESTONE_CLASS[m.id]}`}
                    aria-hidden
                  />
                  <div className="report-assistant__timeline-copy">
                    <span className="report-assistant__timeline-label">
                      {timelineLabels[m.id]}
                    </span>
                    <time
                      className="report-assistant__timeline-date"
                      dateTime={toDateInputValue(m.date)}
                    >
                      {m.date.toLocaleDateString(locale, {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                    <span className="report-assistant__timeline-relative">
                      {formatRelative(m.date, copy, locale)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="report-assistant__timeline-empty">{copy.timelineEmpty}</p>
          )}
        </div>

        <hr className="report-assistant__divider" />

        {/* Part 2: Action guide tabs */}
        <div className="report-assistant__section">
          <h3 className="report-assistant__section-title">{copy.guideTitle}</h3>

          <div
            className="report-assistant__tabs"
            role="tablist"
            aria-label={copy.guideTitle}
          >
            {TAB_ORDER.map((id) => {
              const active = tab === id;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className={`report-assistant__tab${active ? " report-assistant__tab--active" : ""}`}
                  onClick={() => setTab(id)}
                >
                  {tabLabels[id]}
                </button>
              );
            })}
          </div>

          <div className="report-assistant__tab-panel" role="tabpanel">
            {tab === "online" && (
              <div className="report-assistant__panel-content">
                <p className="report-assistant__panel-lead">{copy.onlineLead}</p>
                <a
                  href={TM47_ESERVICE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="report-assistant__cta"
                >
                  {copy.onlineCta}
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </a>
                <div className="report-assistant__note-box">
                  <p className="report-assistant__note-title">
                    <AlertCircle className="h-4 w-4" aria-hidden />
                    {copy.onlineNoteTitle}
                  </p>
                  <ul className="report-assistant__note-list">
                    {copy.onlineNotes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {tab === "in-person" && (
              <div className="report-assistant__panel-content">
                <p className="report-assistant__panel-lead">{copy.inPersonLead}</p>
                <p className="report-assistant__checklist-title">{copy.inPersonChecklistTitle}</p>
                <ul className="report-assistant__checklist">
                  {copy.inPersonChecklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {tab === "mail" && (
              <div className="report-assistant__panel-content">
                <p className="report-assistant__panel-lead">{copy.mailLead}</p>
                <p className="report-assistant__address-title">{copy.mailAddressTitle}</p>
                <address className="report-assistant__address">
                  {copy.mailAddressLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
                <div className="report-assistant__note-box">
                  <p className="report-assistant__note-title">{copy.mailNoteTitle}</p>
                  <p className="report-assistant__note-text">{copy.mailNote}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <p className="report-assistant__disclaimer">{copy.disclaimer}</p>
    </section>
  );
}
