"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { L, t } from "@/lib/i18n/living-helpers";
import { Banknote, Building2, FileSearch, Scale, type LucideIcon } from "lucide-react";

function getRequirements(lang: import("@/lib/i18n/languages").LanguageCode) {
  return [
    {
      icon: Scale,
      title: t(lang, L("49% Foreign Quota", "โควตาต่างชาติ 49%", "49% 外资配额", "Квота 49%")),
      highlight: "49%",
      body: t(
        lang,
        L(
          "Only units in the building's foreign quota can transfer freehold to non-Thais. Verify before deposit.",
          "เฉพาะห้องในโควตาต่างชาติโอนกรรมสิทธิ์ได้ ตรวจก่อนมัดจำ",
          "仅配额内单元可过户给外籍买家，付定金前须核实。",
          "Только юниты в квоте — проверка до депозита.",
        ),
      ),
      detail: t(
        lang,
        L(
          "Juristic person letter + Land Office check before contract.",
          "หนังสือนิติบุคคล + ตรวจที่ดินก่อนสัญญา",
          "签约前索取物业函并在土地厅核实。",
          "Справка juristic person и Land Office.",
        ),
      ),
    },
    {
      icon: Building2,
      title: t(lang, L("Condominium Act", "พ.ร.บ.อาคารชุด", "公寓法", "Закон о кондо")),
      highlight: t(lang, L("Freehold", "กรรมสิทธิ์", "永久产权", "Freehold")),
      body: t(
        lang,
        L(
          "Foreign freehold applies to condo units only — not land, houses, or villas.",
          "ต่างชาติถือกรรมสิทธิ์คอนโดเท่านั้น ไม่ใช่ที่ดินหรือบ้าน",
          "外籍永久产权仅限公寓单元，不含土地与别墅。",
          "Freehold только для кондо, не для земли.",
        ),
      ),
      detail: t(
        lang,
        L("Houses/land use leasehold or other structures.", "บ้าน/ที่ดินใช้เช่าหรือโครงสร้างอื่น", "房屋/土地需租赁或其他结构。", "Дома — leasehold."),
      ),
    },
    {
      icon: FileSearch,
      title: t(lang, L("Due Diligence", "ตรวจสอบก่อนซื้อ", "尽职调查", "Due diligence")),
      highlight: t(lang, L("Must-do", "ต้องทำ", "必做", "Обязательно")),
      body: t(
        lang,
        L(
          "Review juristic books, fees, sinking fund, developer record, and encumbrances.",
          "ตรวจบัญชีนิติบุคคล ค่าส่วนกลาง กองทุน ผู้พัฒนา และภาระผูกพัน",
          "审查物业账册、管理费、维修基金、开发商与产权负担。",
          "Книги juristic person, фонд, застройщик.",
        ),
      ),
      detail: t(
        lang,
        L("Lawyer review SPA for Pattaya purchases.", "ทนายตรวจ SPA สำหรับซื้อพัทยา", "芭提雅购房须律师审阅 SPA。", "Юрист для SPA."),
      ),
    },
    {
      icon: Banknote,
      title: t(lang, L("FET / funds from abroad", "FET / เงินจากต่างประเทศ", "FET 境外汇款", "FET")),
      highlight: "FET",
      body: t(
        lang,
        L(
          "Purchase funds must be wired from overseas in foreign currency; Thai bank issues FET (ธ.ท.3) for Land Office registration.",
          "โอนเงินจากต่างประเทศเป็นสกุลต่างประเทศ ธนาคารไทยออก FET สำหรับจดทะเบียน",
          "购房款须从境外以外汇汇入；泰国银行出具 FET 用于产权登记。",
          "Перевод из-за рубежа; FET для регистрации.",
        ),
      ),
      detail: t(
        lang,
        L(
          "Most buyers use §19(5) — visa not required for this pathway.",
          "ส่วนใหญ่ใช้มาตรา 19(5) — ไม่ต้องมีวีซ่า",
          "多数买家适用第 19(5) 条——此路径不要求签证。",
          "Путь §19(5) — виза не обязательна.",
        ),
      ),
    },
  ];
}

export function CondoBuyingRequirements() {
  const { language } = useLanguage();
  const requirements = getRequirements(language);

  return (
    <section aria-labelledby="condo-req-title">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#B29475]">
            {t(language, L("Legal basics", "พื้นฐานกฎหมาย", "法律要点", "Основы"))}
          </p>
          <h2 id="condo-req-title" className="mt-1 text-2xl font-bold text-[#0A192F] sm:text-3xl">
            {t(language, L("What every buyer should know", "สิ่งที่ผู้ซื้อต้องรู้", "买家须知", "Что знать покупателю"))}
          </h2>
        </div>
        <span className="rounded-full border border-[#B29475]/30 bg-[#D7CBBA] px-3 py-1 text-xs font-semibold text-[#6b5a48]">
          {t(language, L("Very High Priority", "สำคัญมาก", "极高优先级", "Высокий приоритет"))}
        </span>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {requirements.map((req, index) => (
          <article
            key={req.title}
            className="group relative overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm transition duration-300 hover:border-[#D7CBBA] hover:shadow-lg"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div
              className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#B29475]/5 transition group-hover:bg-[#B29475]/10"
              aria-hidden
            />
            <div className="relative flex items-start justify-between gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#B29475] text-white shadow-md transition group-hover:bg-[#D7CBBA]">
                <req.icon className="h-6 w-6" />
              </div>
              <span className="rounded-lg bg-[#B29475] px-2.5 py-1 text-lg font-bold tabular-nums text-white">
                {req.highlight}
              </span>
            </div>
            <h3 className="relative mt-5 text-lg font-bold text-[#0A192F]">{req.title}</h3>
            <p className="relative mt-3 text-sm leading-relaxed text-[#444748]">{req.body}</p>
            <p className="relative mt-2 border-t border-[#e2e8f0] pt-3 text-xs text-[#777777]">
              {req.detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
