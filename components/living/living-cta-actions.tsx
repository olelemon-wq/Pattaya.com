import type { ReactNode } from "react";

/** Equal-width stacked buttons on mobile; inline from sm+ */
export function LivingCtaActions({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto mt-6 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
      {children}
    </div>
  );
}

const btnBase =
  "inline-flex w-full items-center justify-center rounded-lg px-8 py-3.5 text-sm font-bold sm:w-auto sm:min-w-[12rem]";

export const livingCtaButtonClass = {
  primary: `${btnBase} bg-[#B29475] text-white shadow-lg transition hover:bg-[#B29475]/90`,
  outline: `${btnBase} border border-[#B29475] text-[#B29475] transition hover:bg-[#B29475]/10`,
  danger: `${btnBase} border border-[#ae2f34]/40 text-[#ae2f34] transition hover:bg-[#ae2f34]/5`,
} as const;
