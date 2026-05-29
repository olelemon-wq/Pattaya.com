"use client";

import { LivingFaqSection } from "@/components/living/living-faq-section";
import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import { useLanguage } from "@/components/layout/language-provider";
import { livingTheme } from "@/lib/design/living-theme";
import { livingImages } from "@/lib/design/living-images";
import { faqEnTh, L, t } from "@/lib/i18n/living-helpers";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import type { LocalizedText } from "@/lib/i18n/text";
import { Crown, Globe, Plane, Sparkles, Star, type LucideIcon } from "lucide-react";

function getTiers(lang: import("@/lib/i18n/languages").LanguageCode) {
  return [
    {
      name: "Easy Access",
      term: t(lang, L("5 years", "5 ปี", "5 年", "5 лет")),
      fee: t(lang, L("From ฿600,000", "จาก ฿600,000", "起 60 万泰铢", "от 600 000 бат")),
      perks: t(
        lang,
        L("Airport fast track, government liaison, annual health check", "Fast track สนามบิน ประสานงานราชการ ตรวจสุขภาพประจำปี", "机场快速通道、政务协调、年度体检", "Fast track, liaison, check-up"),
      ),
    },
    {
      name: "Exclusive",
      term: t(lang, L("10 years", "10 ปี", "10 年", "10 лет")),
      fee: t(lang, L("From ฿1,000,000", "จาก ฿1,000,000", "起 100 万泰铢", "от 1 млн бат")),
      perks: t(
        lang,
        L("Priority lanes, golf & spa privileges, dedicated Elite staff", "ช่องพิเศษ กอล์ฟ สปา ทีม Elite เฉพาะ", "优先通道、高尔夫与水疗、专属团队", "Приоритет, гольф, spa, персонал"),
      ),
    },
    {
      name: "Ultimate",
      term: t(lang, L("20 years", "20 ปี", "20 年", "20 лет")),
      fee: t(lang, L("From ฿2,000,000", "จาก ฿2,000,000", "起 200 万泰铢", "от 2 млн бат")),
      perks: t(
        lang,
        L("Maximum privileges, family options, premium concierge", "สิทธิ์สูงสุด ครอบครัว คอนเซียร์จพรีเมียม", "最高权益、家属选项、高端礼宾", "Максимум привилегий, семья, concierge"),
      ),
    },
  ];
}

function getBenefits(): { icon: LucideIcon; title: LocalizedText; text: LocalizedText }[] {
  return [
    {
      icon: Plane,
      title: L("Airport VIP", "บริการสนามบิน", "机场 VIP", "VIP в аэропорту"),
      text: L("Fast-track immigration and lounge access at major Thai airports.", "Fast track ตม. และเลานจ์สนามบินหลัก", "主要机场快速入境与休息室。", "Fast track и лаунжи."),
    },
    {
      icon: Globe,
      title: L("Long-stay visa", "วีซ่าพำนักระยะยาว", "长期居留", "Долгосрочная виза"),
      text: L("Multi-year stay with simplified 90-day reporting support.", "พำนักหลายปี รองรับรายงาน 90 วัน", "多年居留，简化 90 天报到。", "Многолетнее пребывание, 90 дней."),
    },
    {
      icon: Crown,
      title: L("Concierge", "คอนเซียร์จ", "礼宾", "Консьерж"),
      text: L("Dedicated Elite team for government services and lifestyle requests.", "ทีม Elite ประสานงานราชการและไลฟ์สไตล์", "专属团队协调政务与生活需求。", "Команда Elite для госуслуг."),
    },
    {
      icon: Sparkles,
      title: L("Lifestyle perks", "สิทธิพิเศษ", "生活方式权益", "Привилегии"),
      text: L("Partner discounts on hotels, golf, spas, and medical networks.", "ส่วนลดโรงแรม กอล์ฟ สปา และเครือข่ายการแพทย์", "酒店、高尔夫、水疗与医疗合作折扣。", "Скидки партнёров."),
    },
  ];
}

const faqs = [
  faqEnTh(
    "who",
    "Who is Thailand Elite best for?",
    "เหมาะกับใคร?",
    "High-net-worth individuals and frequent visitors who want premium long-stay without managing standard extensions.",
    "ผู้มีทรัพย์สินสูงและมาไทยบ่อย ต้องการพำนักระยะยาวแบบพรีเมียม",
    "适合谁？",
    "Для кого Elite?",
  ),
  faqEnTh(
    "quota",
    "Can I work or buy property on Elite?",
    "ทำงานหรือซื้อคอนโดได้ไหม?",
    "Elite is membership — employment still needs work permit. Property follows standard foreign rules.",
    "Elite เป็นสมาชิกภาพ ทำงานต้องมี work permit ซื้ออสังหาตามกฎต่างชาติ",
    "能工作或买房吗？",
    "Работа и недвижимость?",
  ),
  faqEnTh(
    "family",
    "Can family members join?",
    "ครอบครัวเข้าร่วมได้ไหม?",
    "Dependent add-ons on higher tiers — separate applications and fees.",
    "เพิ่มผู้อยู่ในอุปการณ์ในแพ็กเกจสูง ยื่นและจ่ายแยก",
    "家属能加入吗？",
    "Семья?",
  ),
];

export function ThailandElitePage() {
  const { language } = useLanguage();

  return (
    <LocalizedLivingPageShell
      shellKey="thailandElite"
      heroImage={livingImages.thailandElite}
      heroAlt="Thailand Elite"
      ctaAriaLabel="Elite membership consultation"
    >
      <section aria-labelledby="tiers-title">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className={livingTheme.eyebrow}>
              {t(language, L("Membership", "สมาชิกภาพ", "会员", "Членство"))}
            </p>
            <h2 id="tiers-title" className={`mt-1 ${livingTheme.heading}`}>
              {t(language, L("Popular tiers", "แพ็กเกจยอดนิยม", "热门档位", "Популярные пакеты"))}
            </h2>
          </div>
          <Star className="h-8 w-8 text-[#B29475]" aria-hidden />
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {getTiers(language).map((tier) => (
            <article
              key={tier.name}
              className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm transition hover:border-[#D7CBBA] hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-[#0A192F]">{tier.name}</h3>
              <p className="mt-1 text-sm font-semibold text-[#B29475]">{tier.term}</p>
              <p className="mt-3 text-2xl font-bold tabular-nums text-[#0A192F]">{tier.fee}</p>
              <p className={`mt-3 ${livingTheme.body}`}>{tier.perks}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="benefits-title">
        <h2 id="benefits-title" className={livingTheme.heading}>
          {t(language, L("Key benefits", "สิทธิประโยชน์หลัก", "核心权益", "Преимущества"))}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {getBenefits().map((b) => (
            <div key={b.title.en} className={`flex gap-4 p-5 ${livingTheme.card}`}>
              <div className={livingTheme.iconBox}>
                <b.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-[#0A192F]">{t(language, b.title)}</h3>
                <p className={`mt-2 ${livingTheme.body}`}>{t(language, b.text)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <LivingFaqSection
        faqs={faqs}
        subtitle={faqSubtitle(language, "Thailand Elite", "Thailand Elite", "泰国精英签", "Thailand Elite")}
        titleId="elite-faq-title"
      />
    </LocalizedLivingPageShell>
  );
}
