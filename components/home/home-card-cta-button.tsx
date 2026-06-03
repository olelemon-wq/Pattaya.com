import type { TickerVariant } from "@/lib/i18n/messages/ticker";
import { tickerBarBackground } from "@/lib/ui/ticker-bar-colors";

type HomeCardCtaButtonProps = {
  label: string;
  /** Matches the breaking-news ticker accent for that home section */
  variant?: TickerVariant;
};

export function HomeCardCtaButton({ label, variant = "home" }: HomeCardCtaButtonProps) {
  return (
    <span
      className="inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold text-white shadow-[0_2px_8px_rgba(0,0,0,0.14)] transition-opacity group-hover:opacity-90 sm:px-5 sm:py-2.5 sm:text-sm"
      style={{ backgroundColor: tickerBarBackground[variant] }}
    >
      {label}
    </span>
  );
}
