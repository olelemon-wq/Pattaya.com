"use client";

import { CultureEtiquetteFaq } from "@/components/living/culture-etiquette-faq";
import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import {
  LivingCtaActions,
  livingCtaButtonClass,
} from "@/components/living/living-cta-actions";
import { useLanguage } from "@/components/layout/language-provider";
import { livingTheme } from "@/lib/design/living-theme";
import { livingImages } from "@/lib/design/living-images";
import { iconEnTh, L, t } from "@/lib/i18n/living-helpers";
import type { LocalizedText } from "@/lib/i18n/text";
import {
  Crown,
  Footprints,
  Hand,
  Handshake,
  Landmark,
  Shirt,
  Users,
  VolumeX,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

function getCulturalDos() {
  return [
    iconEnTh(
      Handshake,
      "The Wai Protocol",
      "การไหว้",
      "Bow with palms together to show respect to elders, officials, and new acquaintances.",
      "ไหว้แสดงความเคารพต่อผู้ใหญ่ เจ้าหน้าที่ และคนที่เพิ่งรู้จัก",
      "合十礼",
      "Протокол вай",
      "双手合十鞠躬，向长辈、官员及新识表示尊重。",
      "Сложите ладони и поклонитесь старшим и должностным лицам.",
    ),
    iconEnTh(
      Users,
      "Social Hierarchy",
      "ลำดับชั้นทางสังคม",
      "Acknowledge age and status with appropriate gestures and a calm, polite tone.",
      "ยอมรับอายุและสถานะด้วยท่าทีสุภาพและน้ำเสียงสงบ",
      "社会层级",
      "Социальная иерархия",
      "以适当举止与平和语气体现对年龄与地位的尊重。",
      "Учитывайте возраст и статус в жестах и тоне.",
    ),
    iconEnTh(
      Shirt,
      "Dress Codes",
      "การแต่งกาย",
      "Wear modest clothing (covering shoulders and knees) at temples and official buildings.",
      "แต่งกายสุภาพ (ปิดไหล่และเข่า) เมื่อเข้าวัดและสถานที่ราชการ",
      "着装规范",
      "Дресс-код",
      "进寺庙与官方场所需衣着得体，遮肩盖膝。",
      "В храмах и госучреждениях — скромная одежда.",
    ),
    iconEnTh(
      Landmark,
      "Respect for Monks",
      "ความเคารพต่อพระ",
      "Give up your seat and maintain distance; women should avoid physical contact.",
      "ให้ที่นั่งพระและรักษาระยะห่าง ผู้หญิงไม่สัมผัสพระ",
      "尊重僧侣",
      "Уважение к монахам",
      "让座并保持距离；女性避免与僧侣有身体接触。",
      "Уступайте место; женщинам избегать прикосновений.",
    ),
  ];
}

function getCulturalDonts() {
  return [
    iconEnTh(
      Hand,
      "Touching the Head",
      "จับหัว",
      "The head is sacred; avoid touching anyone's head, even children.",
      "หัวเป็นที่ศักดิ์สิทธิ์ อย่าจับหัวใคร แม้เด็ก",
      "勿摸头",
      "Не трогать голову",
      "头部被视为神圣，勿触摸他人头部。",
      "Голова священна — не трогайте её.",
    ),
    iconEnTh(
      Footprints,
      "Pointing Feet",
      "ชี้เท้า",
      "Never point feet at people, monks, or images of the Buddha.",
      "อย่าชี้เท้าไปที่คน พระ หรือพระพุทธรูป",
      "勿用足指向人",
      "Не направлять ступни",
      "勿将脚指向他人、僧侣或佛像。",
      "Не направляйте ступни на людей или изображения Будды.",
    ),
    iconEnTh(
      VolumeX,
      "Raising Your Voice",
      "พูดเสียงดัง",
      "Maintain calm; losing temper is losing face and counterproductive.",
      "ใจเย็น การโกรธคือการเสียหน้าและไม่ได้ผล",
      "勿高声",
      "Не повышать голос",
      "保持冷静；发脾气即失面子且适得其反。",
      "Сохраняйте спокойствие — гнев = потеря лица.",
    ),
    iconEnTh(
      Crown,
      "Disrespecting the Monarchy",
      "ไม่เคารพสถาบัน",
      "Show utmost respect for the Royal Family. Discussion is subject to strict laws.",
      "แสดงความเคารพต่อสถาบันกษัตริย์ มีกฎหมายเข้มงวด",
      "尊重王室",
      "Уважение к монархии",
        "对王室须充分尊重，相关讨论受严格法律约束。",
      "Проявляйте уважение; обсуждение строго регламентировано.",
    ),
  ];
}

function getPattayaTips(): { title: LocalizedText; text: LocalizedText }[] {
  return [
    {
      title: L("Temples & shrines", "วัดและศาลเจ้า", "寺庙与神龛", "Храмы и святилища"),
      text: L(
        "Big Buddha, Wat Yansangwararam — dress modestly and remove shoes.",
        "พระใหญ่ วัดญาณสังวราราม — แต่งกายสุภาพ ถอดรองเท้า",
        "大佛像、Yansangwararam 寺 — 衣着得体并脱鞋。",
        "Big Buddha, Wat Yansangwararam — скромная одежда, снимите обувь.",
      ),
    },
    {
      title: L("Beach & nightlife", "ชายหาดและไนท์ไลฟ์", "海滩与夜生活", "Пляж и ночная жизнь"),
      text: L(
        "Swimwear stays at the beach. In town and Walking Street, cover up more.",
        "ชุดว่ายน้ำอยู่ที่หาด ในเมืองและ Walking Street แต่งตัวมิดชิดกว่า",
        "泳装限海滩；市区与 Walking Street 需多遮盖。",
        "Купальники только на пляже; в городе одевайтесь скромнее.",
      ),
    },
    {
      title: L("Business & networking", "ธุรกิจ", "商务社交", "Бизнес"),
      text: L(
        "Exchange cards with both hands, arrive on time, open with small talk.",
        "ส่งนามบัตรด้วยสองมือ ตรงเวลา เริ่มด้วยบทสนทนาเบาๆ",
        "双手递名片、准时到场、先寒暄再谈正事。",
        "Визитки двумя руками, пунктуальность, лёгкая беседа в начале.",
      ),
    },
    {
      title: L("Songthaews & queues", "สองแถวและคิว", "双条车与排队", "Сонгthaew и очереди"),
      text: L(
        "Patience and a smile help. Press the buzzer, agree fares, queue politely.",
        "อดทนและยิ้มช่วยได้ กดกริ่ง ตกลงค่าโดยสาร ต่อคิวสุภาพ",
        "耐心与微笑很重要；按铃、讲价、礼貌排队。",
        "Терпение и улыбка; договаривайтесь о цене, соблюдайте очередь.",
      ),
    },
  ];
}

function EtiquetteCard({
  icon: Icon,
  title,
  text,
  variant,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  variant: "do" | "dont";
}) {
  const accent = variant === "do" ? "#B29475" : "#ae2f34";
  return (
    <article className="flex gap-4 rounded-xl border border-[#e2e8f0] bg-white p-5 shadow-sm transition hover:border-[#D7CBBA]">
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-md"
        style={{ backgroundColor: accent }}
      >
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <div>
        <h3 className="font-bold text-[#0A192F]">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#444748]">{text}</p>
      </div>
    </article>
  );
}

export function CultureEtiquettePage() {
  const { language } = useLanguage();
  const intro = {
    title: t(
      language,
      L("The Thai Way in Pattaya", "วิถีไทยในพัทยา", "芭提雅的泰国之道", "Тайский образ жизни в Паттайе"),
    ),
    body: t(
      language,
      L(
        "Pattaya is international, but harmony rests on Thai values — patience, respect, and saving face. These guidelines help expats navigate daily life without unintended offense.",
        "พัทยาเป็นเมืองนานาชาติ แต่ความกลมกลืนยังอาศัยค่านิยมไทย — อดทน เคารพ และรักษาหน้า คู่มือนี้ช่วยชาวต่างชาติใช้ชีวิตโดยไม่ล่วงเกิน",
        "芭提雅虽国际化，和谐仍靠泰国价值观——耐心、尊重与给面子。本指南帮助外籍人士避免无意冒犯。",
        "Паттайя космополитична, но гармония держится на терпении, уважении и «сохранении лица».",
      ),
    ),
    dos: t(language, L("Cultural Dos", "สิ่งที่ควรทำ", "文化宜做", "Что следует делать")),
    donts: t(language, L("Cultural Don'ts", "สิ่งที่ไม่ควรทำ", "文化忌做", "Чего избегать")),
    tips: t(language, L("Pattaya-specific tips", "เคล็ดลับเฉพาะพัทยา", "芭提雅贴士", "Советы для Паттайи")),
    tipsSub: t(
      language,
      L(
        "Common situations in the city",
        "สถานการณ์ที่เจอบ่อยในเมืองพัทยา",
        "城中常见场景",
        "Типичные ситуации в городе",
      ),
    ),
    livingHub: t(language, L("Living hub →", "Living hub →", "生活中心 →", "Раздел «Жизнь» →")),
    thaiCulture: t(language, L("Thai culture →", "วัฒนธรรมไทย →", "泰国文化 →", "Культура →")),
    scamAlerts: t(language, L("Scam alerts →", "แจ้งเตือนมิจฉาชีพ →", "诈骗提醒 →", "Мошенничество →")),
  };

  return (
    <LocalizedLivingPageShell
      shellKey="cultureEtiquette"
      heroImage={livingImages.cultureEtiquette}
      heroAlt="Thai culture and etiquette in Pattaya"
      hideLeadCta
      bottomChildren={
        <LivingCtaActions>
          <Link href="/living" className={livingCtaButtonClass.primary}>
            {intro.livingHub}
          </Link>
          <Link href="/living/culture/thai-culture" className={livingCtaButtonClass.outline}>
            {intro.thaiCulture}
          </Link>
          <Link href="/living/safety/scam-alerts" className={livingCtaButtonClass.danger}>
            {intro.scamAlerts}
          </Link>
        </LivingCtaActions>
      }
    >
      <section className={livingTheme.accentPanel}>
        <h2 className={livingTheme.headingSm}>{intro.title}</h2>
        <p className={`mt-3 max-w-3xl sm:text-base ${livingTheme.body}`}>{intro.body}</p>
      </section>

      <section aria-labelledby="dos-title">
        <h2
          id="dos-title"
          className="flex items-center gap-2 text-2xl font-bold text-[#B29475] sm:text-3xl"
        >
          ✓ {intro.dos}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {getCulturalDos().map((item) => (
            <EtiquetteCard
              key={item.title.en}
              icon={item.icon}
              title={t(language, item.title)}
              text={t(language, item.text)}
              variant="do"
            />
          ))}
        </div>
      </section>

      <section aria-labelledby="donts-title">
        <h2
          id="donts-title"
          className="flex items-center gap-2 text-2xl font-bold text-[#ae2f34] sm:text-3xl"
        >
          ✕ {intro.donts}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {getCulturalDonts().map((item) => (
            <EtiquetteCard
              key={item.title.en}
              icon={item.icon}
              title={t(language, item.title)}
              text={t(language, item.text)}
              variant="dont"
            />
          ))}
        </div>
      </section>

      <section aria-labelledby="pattaya-title">
        <h2 id="pattaya-title" className={livingTheme.heading}>
          {intro.tips}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{intro.tipsSub}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {getPattayaTips().map((tip) => (
            <div key={tip.title.en} className={`p-5 shadow-sm ${livingTheme.cardStatic}`}>
              <h3 className="font-bold text-[#0A192F]">{t(language, tip.title)}</h3>
              <p className={`mt-2 ${livingTheme.body}`}>{t(language, tip.text)}</p>
            </div>
          ))}
        </div>
      </section>

      <CultureEtiquetteFaq />
    </LocalizedLivingPageShell>
  );
}
