"use client";

import { LivingFaqSection } from "@/components/living/living-faq-section";
import { LivingIconCards } from "@/components/living/living-icon-cards";
import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import { useLanguage } from "@/components/layout/language-provider";
import { faqEnTh, iconEnTh, L, t } from "@/lib/i18n/living-helpers";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import { livingUi } from "@/lib/i18n/messages/living/common";
import { livingImages } from "@/lib/design/living-images";
import { Droplets, Plug, Wifi } from "lucide-react";

function getServices() {
  return [
    iconEnTh(
      Plug,
      "Electricity (MEA/PEA)",
      "ค่าไฟ",
      "Condos often bill above government rates (฿5–8/unit vs ~฿4). Check meter photos at move-in.",
      "คอนโดมักคิดค่าไฟสูงกว่าอัตราราชการ ตรวจมิเตอร์ตอนเข้าพัก",
      "电费 (MEA/PEA)",
      "Электричество",
      "公寓电费常高于政府电价，入住时核对电表。",
      "Кондо часто выставляет счёт выше гостарифа.",
    ),
    iconEnTh(
      Droplets,
      "Water",
      "ค่าน้ำ",
      "Usually inexpensive; juristic person may add a service fee.",
      "มักถูก นิติบุคคลอาจเก็บค่าบริการเพิ่ม",
      "水费",
      "Вода",
      "通常较便宜；物业可能加收服务费。",
      "Обычно дёшево; управляющая компания может добавить сбор.",
    ),
    iconEnTh(
      Wifi,
      "Internet & TV",
      "อินเทอร์เน็ต",
      "Fiber from AIS, True, 3BB — ฿599–1,200/month common.",
      "ไฟเบอร์ AIS, True, 3BB ประมาณ ฿599–1,200/เดือน",
      "网络与电视",
      "Интернет",
      "AIS/True/3BB 光纤约 ฿599–1,200/月。",
      "Оптоволокно AIS, True, 3BB — ฿599–1,200/мес.",
    ),
  ];
}

function getEstimates(lang: import("@/lib/i18n/languages").LanguageCode) {
  return [
    {
      item: t(
        lang,
        L("Studio condo (moderate AC)", "คอนโดสตูดิโอ (แอร์ปานกลาง)", "单间公寓（适度开空调）", "Студия (умеренный AC)"),
      ),
      monthly: "฿2,500–4,500",
    },
    {
      item: t(
        lang,
        L("2-bed sea-view (daily AC)", "2 ห้องนอนวิวทะเล (แอร์ทุกวัน)", "两卧海景（每天开空调）", "2 спальни, вид на море"),
      ),
      monthly: "฿4,500–8,000",
    },
    {
      item: t(
        lang,
        L("House with pool", "บ้านมีสระ", "带泳池别墅", "Дом с бассейном"),
      ),
      monthly: "฿8,000–15,000+",
    },
    {
      item: t(lang, L("Fiber 1 Gbps", "ไฟเบอร์ 1 Gbps", "千兆光纤", "Оптика 1 Gbps")),
      monthly: "฿599–999",
    },
  ];
}

const faqs = [
  faqEnTh(
    "high-bill",
    "Why is my electric bill so high?",
    "ค่าไฟแพงผิดปกติ?",
    "Old AC, 24/7 cooling, and landlord markups are common causes. Compare per-unit rates in your lease.",
    "แอร์เก่า เปิดตลอด และคิดเกินอัตราราชการ — เปรียบเทียบใน สัญญาเช่า",
    "电费为何很高？",
    "Почему счёт за свет высокий?",
    "空调老旧、全天制冷与加价是常见原因。",
    "Старые кондиционеры и наценка арендодателя.",
  ),
  faqEnTh(
    "transfer",
    "How do I put utilities in my name?",
    "โอนมิเตอร์เป็นชื่อเราได้ไหม?",
    "Long-term renters rarely transfer MEA; owners apply with juristic support.",
    "ผู้เช่าระยะยาวมักจ่ายผ่านเจ้าของ ไม่โอนมิเตอร์",
    "如何把公用事业过户到自己名下？",
    "Как оформить на своё имя?",
    "长期租客通常不过户；业主可通过物业申请。",
    "Арендаторы редко переоформляют MEA.",
  ),
];

export function UtilitiesPage() {
  const { language } = useLanguage();
  const estimates = getEstimates(language);

  return (
    <LocalizedLivingPageShell
      shellKey="utilities"
      heroImage={livingImages.utilities}
      heroAlt="Modern apartment utilities"
    >
      <section aria-labelledby="util-services">
        <h2 id="util-services" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          {t(language, livingUi.utilityBreakdown)}
        </h2>
        <div className="mt-6">
          <LivingIconCards items={getServices()} columns={3} />
        </div>
      </section>

      <section aria-labelledby="util-estimates">
        <h2 id="util-estimates" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          {t(language, livingUi.indicativeCosts)}
        </h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#D7CBBA]/60 text-xs font-bold uppercase tracking-wide text-[#6b5a48]">
              <tr>
                <th className="px-4 py-3 sm:px-6">{t(language, livingUi.profile)}</th>
                <th className="px-4 py-3 sm:px-6">{t(language, livingUi.utilitiesApprox)}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0] text-[#444748]">
              {estimates.map((row) => (
                <tr key={row.item}>
                  <td className="px-4 py-3 font-medium text-[#0A192F] sm:px-6">{row.item}</td>
                  <td className="px-4 py-3 sm:px-6">{row.monthly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <LivingFaqSection
        faqs={faqs}
        subtitle={faqSubtitle(language, "Utilities", "สาธารณูปโภค", "公用事业", "Коммуналка")}
      />
    </LocalizedLivingPageShell>
  );
}
