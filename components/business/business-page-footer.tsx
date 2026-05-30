"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { getBusinessDetailUi } from "@/lib/i18n/messages/business-detail-ui";

export function BusinessPageFooter() {
  const { language } = useLanguage();
  const ui = getBusinessDetailUi(language);

  return (
    <section className="px-5 pb-16 pt-8 md:px-16 md:pb-20 md:pt-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-center justify-between gap-10 rounded-2xl bg-[#363636] p-8 sm:p-10 md:flex-row md:p-14">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              {ui.footerTitle}
            </h2>
            <p className="mt-3 text-white/75">{ui.footerBody}</p>
          </div>
          <form className="flex w-full flex-col gap-4 sm:flex-row md:w-auto md:shrink-0">
            <input
              type="email"
              placeholder={ui.footerPlaceholder}
              className="min-w-0 flex-1 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-white transition-all placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#ae2f34] sm:min-w-[280px] md:min-w-[320px]"
            />
            <button
              type="submit"
              className="whitespace-nowrap rounded-2xl bg-[#ae2f34] px-8 py-4 font-bold text-white transition-all hover:bg-[#ce4749] md:px-10"
            >
              {ui.footerButton}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
