"use client";

import { LivingFaqSection } from "@/components/living/living-faq-section";
import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import { useLanguage } from "@/components/layout/language-provider";
import { livingImages } from "@/lib/design/living-images";
import { faqEnTh, L, t } from "@/lib/i18n/living-helpers";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import type { LocalizedText } from "@/lib/i18n/text";

function getRoutes(lang: import("@/lib/i18n/languages").LanguageCode) {
  return [
    {
      route: t(lang, L("Beach Road ↔ Sukhumvit loop", "Beach Road ↔ สุขุมวิท", "海滩路 ↔ 素坤逸环线", "Beach Road ↔ Sukhumvit")),
      fare: "฿10 / ฿20",
      tip: t(
        lang,
        L("Press buzzer to stop; say destination when boarding.", "กดกริ่งลง บอกปลายทางตอนขึ้น", "按铃下车；上车时报目的地。", "Звонок; назовите пункт."),
      ),
    },
    {
      route: t(lang, L("Jomtien ↔ Pattaya Second Road", "จอมเทียน ↔ ถนนพัทยา 2", "仲天 ↔ 芭提雅二路", "Jomtien ↔ 2nd Road")),
      fare: "฿10–20",
      tip: t(
        lang,
        L("Shared ride — wait until full or negotiate charter.", "รถร่วม — รอเต็มหรือเช่าเหมา", "合乘 — 坐满或包车。", "Попутно или чартер."),
      ),
    },
    {
      route: t(lang, L("Naklua / Wong Amat", "นาเกลือ / วงอามาด", "那库拉 / Wong Amat", "Naklua")),
      fare: "฿10–30",
      tip: t(lang, L("Fewer vehicles after 22:00 — use Grab backup.", "รถน้อยหลัง 22:00 ใช้ Grab สำรอง", "22 点后车少 — 备 Grab。", "После 22:00 мало машин."),
      ),
    },
    {
      route: t(lang, L("Charter (private hire)", "เช่าเหมา", "包车", "Чартер")),
      fare: "฿100–300+",
      tip: t(lang, L("Agree price before departure.", "ตกลงราคาก่อนออก", "出发前讲价。", "Договоритесь о цене заранее."),
      ),
    },
  ];
}

function getEtiquette(lang: import("@/lib/i18n/languages").LanguageCode): string[] {
  return [
    t(lang, L("Enter from the back; offer seats to monks and elderly.", "ขึ้นท้ายรถ ให้ที่นั่งพระและผู้สูงอายุ", "从后方上车；为僧侣与老人让座。", "Садитесь сзади; уступайте место.")),
    t(lang, L("Keep voices low at night.", "พูดเบาตอนกลางคืน", "夜间轻声。", "Тихо ночью.")),
    t(lang, L("Do not eat messy food; water is fine.", "อย่ากินอาหารเลอะ น้ำได้", "勿吃易脏食物；可带水。", "Не ешьте messy food.")),
    t(lang, L("Say khop khun when paying.", "ขอบคุณตอนจ่ายเงิน", "付款时说谢谢。", "Khop khun при оплате.")),
  ];
}

const faqs = [
  faqEnTh(
    "stop",
    "How do I stop a songthaew?",
    "ลงรถอย่างไร?",
    "Ring the buzzer or tap the roof. Have small notes ready.",
    "กดกริ่งหรือเคาะหลังคา เตรียมเงินย่อย",
    "如何下车？",
    "Как выйти?",
  ),
  faqEnTh(
    "grab",
    "Songthaew vs Grab?",
    "สองแถวหรือ Grab?",
    "Songthaews cheapest on fixed corridors. Grab wins for AC and late night.",
    "สองแถวถูกบนเส้นทางคงที่ Grab ดีกลางคืนและแอร์",
    "双条车还是 Grab？",
    "Songthaew или Grab?",
  ),
  faqEnTh(
    "safety",
    "Are songthaews safe?",
    "ปลอดภัยไหม?",
    "Generally yes on main routes. Hold handrails and agree charter fare.",
    "โดยทั่วไปปลอดภัยบนเส้นหลัก จับราวและตกลงราคาเช่าเหมา",
    "安全吗？",
    "Безопасно?",
  ),
];

export function SongthaewPage() {
  const { language } = useLanguage();

  return (
    <LocalizedLivingPageShell shellKey="songthaew" heroImage={livingImages.localTransport} heroAlt="Songthaew">
      <section aria-labelledby="songthaew-routes">
        <h2 id="songthaew-routes" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          {t(language, L("Common routes & fares", "เส้นทางและค่าโดยสาร", "常见路线与票价", "Маршруты и тарифы"))}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {getRoutes(language).map((r) => (
            <article
              key={r.route}
              className="rounded-xl border border-[#e2e8f0] bg-white p-5 transition hover:border-[#D7CBBA]"
            >
              <h3 className="font-bold text-[#0A192F]">{r.route}</h3>
              <p className="mt-1 text-sm font-semibold text-[#B29475]">{r.fare}</p>
              <p className="mt-2 text-sm text-[#444748]">{r.tip}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="rounded-2xl border border-[#B29475]/20 bg-[#D7CBBA] p-6 sm:p-8"
        aria-labelledby="songthaew-etiquette"
      >
        <h2 id="songthaew-etiquette" className="text-xl font-bold text-[#0A192F]">
          {t(language, L("Rider etiquette", "มารยาทผู้โดยสาร", "乘车礼仪", "Этикет"))}
        </h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-[#444748]">
          {getEtiquette(language).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <LivingFaqSection
        faqs={faqs}
        subtitle={faqSubtitle(language, "Songthaew", "สองแถว", "双条车", "Songthaew")}
      />
    </LocalizedLivingPageShell>
  );
}
