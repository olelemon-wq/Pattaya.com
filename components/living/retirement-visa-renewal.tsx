"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { L, t } from "@/lib/i18n/living-helpers";
import { AlertCircle, RefreshCw } from "lucide-react";

export function RetirementVisaRenewal() {
  const { language } = useLanguage();

  const renewalPoints = [
    t(
      language,
      L(
        "Annual extension: submit before your permit expires with updated bank proof, insurance, photos, and TM.7.",
        "ต่ออายุรายปี: ยื่นก่อนหมดอายุพร้อมหลักฐานธนาคาร ประกัน รูป และ TM.7",
        "年度延期：在居留许可到期前提交更新的银行证明、保险、照片及 TM.7。",
        "Ежегодное продление до истечения срока + выписки, страховка, TM.7.",
      ),
    ),
    t(
      language,
      L(
        "Many offices expect 800,000 THB in your Thai account for 3 months before renewal (not only 2 months for first application).",
        "หลายสำนักงานต้องการ 800,000 บาทในบัญชีไทย 3 เดือนก่อนต่ออายุ (ต่างจากยื่นครั้งแรก 2 เดือน)",
        "许多办事处要求续签前在泰账户存满 80 万泰铢满 3 个月（首次申请常为 2 个月）。",
        "При продлении часто 800 000 THB на счёте 3 месяца.",
      ),
    ),
    t(
      language,
      L(
        "Keep compliant health insurance for the full stay — policies are checked each year.",
        "ประกันต้องคุ้มครองตลอดระยะเวลา — ตรวจทุกปีเมื่อต่ออายุ",
        "整个停留期保持合规保险——每年续签都会核查。",
        "Страховка на весь срок — проверяют ежегодно.",
      ),
    ),
    t(
      language,
      L(
        "90-day reporting continues every 90 days (online, by mail, or in person) unless you leave Thailand.",
        "รายงานตัว 90 วันยังต้องทำทุก 90 วัน (ออนไลน์ ไปรษณีย์ หรือด้วยตน) เว้นแต่ออกนอกประเทศ",
        "除非离境，每 90 天仍需报到（网上、邮寄或现场）。",
        "Отчёт 90 дней каждые 90 дней, если не выезжаете.",
      ),
    ),
  ];

  return (
    <section aria-labelledby="renewal-title" className="mt-16">
      <div className="rounded-2xl border border-[#FF7320]/20 bg-gradient-to-br from-[#fff7ed] to-white p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FF7320]/15 text-[#c2410c]">
            <RefreshCw className="h-6 w-6" aria-hidden />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#c2410c]">
              {t(language, L("Annual renewal", "ต่ออายุประจำปี", "年度续签", "Ежегодное продление"))}
            </p>
            <h2
              id="renewal-title"
              className="mt-1 text-xl font-bold text-[#0A192F] sm:text-2xl"
            >
              {t(
                language,
                L(
                  "Staying compliant year after year",
                  "รักษาสถานะถูกต้องทุกปี",
                  "每年保持合规",
                  "Соблюдение требований каждый год",
                ),
              )}
            </h2>
          </div>
        </div>

        <ul className="mt-6 space-y-3">
          {renewalPoints.map((point) => (
            <li
              key={point}
              className="flex gap-3 text-sm leading-relaxed text-[#444748]"
            >
              <AlertCircle
                className="mt-0.5 h-4 w-4 shrink-0 text-[#FF7320]"
                aria-hidden
              />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
