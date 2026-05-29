"use client";

import {
  emergencyContacts,
  emergencyTelHref,
} from "@/lib/data/emergency-contacts";
import { useLanguage } from "@/components/layout/language-provider";
import { getHomeEmergency } from "@/lib/i18n/messages/home-hub";
import { Asterisk, Phone, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";

export function EmergencySupportFab() {
  const { language } = useLanguage();
  const copy = getHomeEmergency(language);
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);
    dialogRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#FF7320] text-white shadow-[0_8px_24px_rgba(255,115,32,0.45)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7320] active:scale-95 sm:right-6 motion-reduce:transition-none motion-reduce:hover:scale-100"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? titleId : undefined}
      >
        <Asterisk className="h-7 w-7" strokeWidth={2.25} aria-hidden />
        <span className="sr-only">{copy.srOnly}</span>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="presentation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-[#0A192F]/60 backdrop-blur-sm motion-reduce:backdrop-blur-none"
            aria-label={copy.closeOverlay}
            onClick={close}
          />

          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <div className="relative bg-[#FF7320] px-5 py-5 pr-14 text-white sm:px-6 sm:py-6">
              <h2 id={titleId} className="text-xl font-bold tracking-tight sm:text-2xl">
                {copy.title}
              </h2>
              <p className="mt-1 text-sm text-white/90">{copy.subtitle}</p>
              <button
                type="button"
                onClick={close}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label={copy.close}
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>

            <ul className="max-h-[min(60vh,28rem)] space-y-3 overflow-y-auto px-4 py-4 sm:px-5 sm:py-5">
              {emergencyContacts.map((contact) => {
                const Icon = contact.icon;
                const tel = emergencyTelHref(contact.number);

                return (
                  <li key={contact.id}>
                    <div className="flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white p-3 shadow-sm sm:gap-4 sm:p-4">
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg sm:h-11 sm:w-11 ${contact.iconClassName}`}
                        aria-hidden
                      >
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#64748B] sm:text-[11px]">
                          {contact.service}
                        </p>
                        <p className="truncate text-xl font-bold text-[#0A192F] sm:text-2xl">
                          {contact.number}
                        </p>
                      </div>
                      <a
                        href={tel}
                        className="flex shrink-0 items-center gap-1.5 rounded-lg bg-[#0A192F] px-3 py-2.5 text-[11px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#132f52] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A192F] sm:px-4"
                      >
                        <Phone className="h-3.5 w-3.5" aria-hidden />
                        {copy.call}
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>

            <p className="border-t border-[#F1F5F9] px-4 py-3 text-center text-[10px] font-medium uppercase tracking-[0.14em] text-[#94A3B8] sm:px-5">
              {copy.footer}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
