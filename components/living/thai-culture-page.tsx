"use client";

import { LivingFaqSection } from "@/components/living/living-faq-section";
import {
  LivingCtaActions,
  livingCtaButtonClass,
} from "@/components/living/living-cta-actions";
import { LivingIconCards } from "@/components/living/living-icon-cards";
import { ThaiCultureSurvivalGuide } from "@/components/living/thai-culture-survival-guide";
import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import { useLanguage } from "@/components/layout/language-provider";
import { livingTheme } from "@/lib/design/living-theme";
import { livingImages } from "@/lib/design/living-images";
import { faqEnTh, iconEnTh, L, t } from "@/lib/i18n/living-helpers";
import { getThaiCulturePageCopy } from "@/lib/i18n/messages/living/thai-culture-survival";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import type { LocalizedText } from "@/lib/i18n/text";
import { Calendar, HandHeart, Languages, Sparkles } from "lucide-react";
import Link from "next/link";

function getPillars() {
  return [
    iconEnTh(
      HandHeart,
      "Sanuk & social harmony",
      "สนุกและสังคม",
      "Life should be enjoyable; avoiding public conflict preserves face.",
      "ชีวิตควรสนุก หลีกเลี่ยงขัดแย้งในที่สาธารณะเพื่อรักษาหน้า",
      "乐趣与和谐",
      "Sanuk и гармония",
    ),
    iconEnTh(
      Sparkles,
      "Buddhism in daily life",
      "พุทธศาสนา",
      "Temples, merit-making, and calm demeanor shape holidays and neighbourhoods.",
      "วัด ทำบุญ และความสงบสร้างจังหวะชีวิตชุมชน",
      "日常生活中的佛教",
      "Буддизм в быту",
    ),
    iconEnTh(
      Calendar,
      "Festivals",
      "เทศกาล",
      "Songkran, Loy Krathong, and local fairs — Pattaya celebrates city and beach.",
      "สงกรานต์ ลอยกระทง และงานวัด — พัทยาจัดทั้งเมืองและชายหาด",
      "节庆",
      "Праздники",
    ),
    iconEnTh(
      Languages,
      "Language basics",
      "ภาษาไทย",
      "Sawasdee, khop khun, and khrap/kha open doors everywhere.",
      "สวัสดี ขอบคุณ และ ครับ/ค่ะ ช่วยเปิดประตูทุกที่",
      "基础泰语",
      "Основы языка",
    ),
  ];
}

function getPattayaNotes(): { title: LocalizedText; text: LocalizedText }[] {
  return [
    {
      title: L("Tourism meets community", "ท่องเที่ยวพบชุมชน", "旅游与社区", "Туризм и община"),
      text: L(
        "Respect beach holiday culture and residential sois — noise and dress vary by block.",
        "เคารพวัฒนธรรมนักท่องเที่ยวและซอยที่อยู่อาศัย — เสียงและการแต่งกายต่างกันแต่ละบล็อก",
        "尊重海滩度假与居民小巷文化 — 噪音与着装因街区而异。",
        "Уважайте курорт и жилые soi — нормы различаются.",
      ),
    },
    {
      title: L("Ex-pat integration", "ผสานชาวต่างชาติ", "外籍融入", "Интеграция expat"),
      text: L(
        "Join markets, temple events, and charity drives beyond bar districts.",
        "เข้าร่วมตลาด งานวัด และกิจกรรมการกุศลนอกย่านบาร์",
        "参与市场、寺庙活动与慈善，走出酒吧区。",
        "Рынки, храмы, благотворительность — шире барных районов.",
      ),
    },
    {
      title: L("Business culture", "วัฒนธรรมธุรกิจ", "商务文化", "Деловая культура"),
      text: L(
        "Relationships precede contracts; symbolic gifts are not bribes — punctuality still matters.",
        "ความสัมพันธ์มาก่อนสัญญา ของขวัญเป็นสัญลักษณ์ ไม่ใช่สินบน แต่ต้องตรงเวลา",
        "关系先于合同；礼节性礼物非贿赂，但仍需守时。",
        "Отношения важнее контракта; пунктуальность обязательна.",
      ),
    },
  ];
}

const faqs = [
  faqEnTh(
    "learn",
    "How can I learn Thai quickly?",
    "เรียนภาษาไทยเร็วๆ ได้อย่างไร?",
    "Evening classes, language apps, and daily market practice beat textbook-only study.",
    "เรียนเย็น แอปภาษา และฝึกที่ตลาดทุกวันดีกว่าอ่านอย่างเดียว",
    "如何快速学泰语？",
    "Как быстро выучить тайский?",
  ),
  faqEnTh(
    "etiquette",
    "Where is the full etiquette guide?",
    "คู่มือมารยาทฉบับเต็มอยู่ที่ไหน?",
    "The etiquette page adds temples, monarchy, dress, and Pattaya tips — with the same illustrated shoes, wai, and calm-behavior panels as this page.",
    "หน้ามารยาทมีเรื่องวัด สถาบัน การแต่งกาย และพัทยา — พร้อมภาพรองเท้า ไหว้ และใจเย็นแบบเดียวกับหน้านี้",
    "完整礼仪见礼仪专页，插图与本页相同。",
    "Полный этикет — отдельная страница с теми же иллюстрациями.",
  ),
];

export function ThaiCulturePage() {
  const { language } = useLanguage();
  const copy = getThaiCulturePageCopy(language);

  return (
    <LocalizedLivingPageShell
      shellKey="thaiCulture"
      heroImage={livingImages.cultureCard}
      hideLeadCta
      bottomChildren={
        <LivingCtaActions>
          <Link href="/living" className={livingCtaButtonClass.primary}>
            {copy.livingHub}
          </Link>
          <Link href="/living/culture/etiquette" className={livingCtaButtonClass.outline}>
            {copy.etiquette}
          </Link>
        </LivingCtaActions>
      }
    >
      <section
        className="relative overflow-hidden rounded-2xl border border-[#D7CBBA]/60 bg-gradient-to-br from-[#faf7f2] via-white to-[#f5efe6] p-6 sm:p-8"
        aria-labelledby="culture-intro-title"
      >
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: "#B29475" }}
          >
            <HandHeart className="h-7 w-7" aria-hidden />
          </div>
          <div>
            <h2 id="culture-intro-title" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
              {copy.introTitle}
            </h2>
            <p className={`mt-3 max-w-3xl text-base leading-relaxed ${livingTheme.body}`}>
              {copy.introBody}
            </p>
          </div>
        </div>
      </section>

      <div className="rounded-2xl border border-[#D7CBBA]/60 bg-[#f5f5f7] p-4 sm:p-6">
        <ThaiCultureSurvivalGuide />
      </div>

      <section aria-labelledby="culture-pillars">
        <h2 id="culture-pillars" className={livingTheme.heading}>
          {copy.pillarsTitle}
        </h2>
        <div className="mt-6">
          <LivingIconCards items={getPillars()} />
        </div>
      </section>

      <section aria-labelledby="culture-pattaya">
        <h2 id="culture-pattaya" className={livingTheme.heading}>
          {copy.pattayaTitle}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {getPattayaNotes().map((n) => (
            <article
              key={n.title.en}
              className="rounded-xl border border-[#D7CBBA]/60 bg-white p-5 transition hover:border-[#B29475]/50"
            >
              <h3 className="font-bold text-[#0A192F]">{t(language, n.title)}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${livingTheme.body}`}>
                {t(language, n.text)}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-4">
          <Link
            href="/living/culture/etiquette"
            className="text-sm font-bold text-[#B29475] hover:underline"
          >
            {copy.etiquetteLink}
          </Link>
        </p>
      </section>

      <LivingFaqSection
        faqs={faqs}
        subtitle={faqSubtitle(language, "Thai culture", "วัฒนธรรมไทย", "泰国文化", "Культура")}
      />
    </LocalizedLivingPageShell>
  );
}
