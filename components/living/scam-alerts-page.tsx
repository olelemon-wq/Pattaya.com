"use client";

import { LivingFaqSection } from "@/components/living/living-faq-section";
import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import { useLanguage } from "@/components/layout/language-provider";
import { livingImages } from "@/lib/design/living-images";
import { livingTheme } from "@/lib/design/living-theme";
import { faqEnTh, L, t } from "@/lib/i18n/living-helpers";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import type { LocalizedText } from "@/lib/i18n/text";
import { AlertTriangle, ShieldCheck } from "lucide-react";
import Link from "next/link";

function getScams(): { title: LocalizedText; body: LocalizedText }[] {
  return [
    {
      title: L(
        "Fake property & deposit fraud",
        "หลอกขายอสังหาฯ / มัดจำ",
        "虚假房产与定金诈骗",
        "Подделка недвижимости / залог",
      ),
      body: L(
        "Below-market listings, pressure to wire deposits, no quota letter. Never pay before Land Office verification.",
        "ราคาต่ำกว่าตลาด เร่งโอน ไม่มีหนังสือโควตา อย่าจ่ายก่อนตรวจที่ดิน",
        "低价房源、催促汇款、无配额函 — 土地厅核实前勿付款。",
        "Заниженные цены, давление на перевод — проверка в Land Office обязательна.",
      ),
    },
    {
      title: L('"Express" visa & stamp agents', "ตัวแทนวีซ่าด่วน", "「加急」签证代理", "«Экспресс» визовые агенты"),
      body: L(
        "Unlicensed brokers promise extensions without receipts. Use Immigration or accredited law firms only.",
        "นายหน้าไม่มีใบอนุญาตสัญญาต่ออายุโดยไม่มีใบเสร็จ ใช้ตม.หรือทนายที่ได้รับการรับรอง",
        "无照中介承诺延签却无收据 — 仅通过移民局或合规律所。",
        "Нелицензированные брокеры — только Immigration или юрфирмы.",
      ),
    },
    {
      title: L(
        "Offshore investment & crypto ATMs",
        "ลงทุน / ตู้ crypto",
        "离岸投资与加密 ATM",
        "Offshore / crypto-банкоматы",
      ),
      body: L(
        "High-return schemes and street crypto kiosks with poor rates or skimmers. Use licensed banks.",
        "ผลตอบแทนสูงเกินจริง ตู้ crypto ริมถนน อัตราแย่หรือติดอุปกรณ์ขูดบัตร ใช้ธนาคารที่มีใบอนุญาต",
        "高回报骗局与街头加密机 — 请用持牌银行。",
        "Схемы с высокой доходностью — только лицензированные банки.",
      ),
    },
    {
      title: L(
        "Jet-ski & beach rental damage",
        "เจ็ทสกี / เช่าอุปกรณ์ชายหาด",
        "摩托艇与海滩租赁损坏索赔",
        "Jet-ski / прокат на пляже",
      ),
      body: L(
        "Operators claim pre-existing damage. Photograph condition, agree price in writing.",
        "อ้างความเสียหายเดิม ถ่ายรูปสภาพ ตกลงราคาเป็นลายลักษณ์อักษร",
        "商家声称原有损坏 — 拍照留证并书面议价。",
        "Фото состояния, цена письменно.",
      ),
    },
    {
      title: L(
        "Romance & online transfer scams",
        "หลอกโอนเงินออนไลน์",
        "网恋与在线转账诈骗",
        "Романтические / переводы",
      ),
      body: L(
        "Dating-app contacts ask for emergency transfers abroad. Never send money to unmet contacts.",
        "คนจากแอปหาคู่ขอโอนฉุกเฉินต่างประเทศ อย่าโอนให้คนที่ไม่เคยเจอ",
        "交友软件联系人索紧急汇款 — 勿向未见面者转账。",
        "Не переводите деньги незнакомцам из приложений.",
      ),
    },
    {
      title: L(
        "Taxi & baht-bus overcharging",
        "แท็กซี่ / สองแถวเก็บเกิน",
        "出租车与双条乱收费",
        "Такси / songthaew",
      ),
      body: L(
        "Refuse meters-off taxis; agree songthaew fare before boarding. Grab/Bolt give upfront pricing.",
        "ปฏิเสธแท็กซี่ไม่เปิดมิเตอร์ ตกลงค่าสองแถวก่อนขึ้น Grab/Bolt ราคาชัด",
        "拒载不打表出租车；上车前讲价双条车。",
        "Grab/Bolt — цена заранее; договаривайтесь о fare.",
      ),
    },
    {
      title: L(
        "Bar bill & entertainment scams",
        "บิลบาร์ / โชว์",
        "酒吧账单与娱乐诈骗",
        "Счета в барах",
      ),
      body: L(
        "Drink prices not shown, inflated tabs. Ask for menu prices upfront; pay at bar only.",
        "ไม่แสดงราคา บิลพอง ถามราคาก่อน จ่ายที่บาร์เท่านั้น",
        "不标价、账单虚高 — 先问价，仅在吧台付款。",
        "Спрашивайте цены заранее; платите только у бара.",
      ),
    },
  ];
}

function getEssentials(lang: import("@/lib/i18n/languages").LanguageCode): string[] {
  return [
    t(
      lang,
      L(
        "Use licensed real estate agencies with registered company documents.",
        "ใช้นายหน้าอสังหาที่มีใบอนุญาตและเอกสารบริษัท",
        "选用持牌、有公司登记的房产中介。",
        "Агентства недвижимости с лицензией и документами.",
      ),
    ),
    t(
      lang,
      L(
        "Verify visa advice at Chonburi Immigration — not sidewalk agents.",
        "ยืนยันคำแนะนำวีซ่าที่ตม.ชลบุรี ไม่ใช่ตัวแทนริมถนน",
        "签证事宜以春武里移民局为准，勿信路边代理。",
        "Визы — только Immigration Chonburi.",
      ),
    ),
    t(
      lang,
      L(
        "Screenshot Grab/Bolt trips; save rental contracts and TM30 copies.",
        "แคปหน้าจอ Grab/Bolt เก็บสัญญาเช่าและสำเนา TM30",
        "截图 Grab/Bolt 行程；保存租约与 TM30 副本。",
        "Скриншоты поездок; договоры аренды и TM30.",
      ),
    ),
    t(
      lang,
      L(
        "Report crimes to Tourist Police 1155 (English) and keep case numbers.",
        "แจ้ง Tourist Police 1155 (อังกฤษ) และเก็บเลขคดี",
        "向旅游警察 1155（英语）报案并保留案件号。",
        "Tourist Police 1155 — сохраняйте номер дела.",
      ),
    ),
  ];
}

const faqs = [
  faqEnTh(
    "report",
    "Where do I report a scam in Pattaya?",
    "แจ้งความที่ไหน?",
    "Tourist Police 1155 for English; dial 191 for immediate threats. Second Road office for written reports.",
    "Tourist Police 1155 ภาษาอังกฤษ 191 ฉุกเฉิน สำนักงาน Second Road สำหรับรายงานเป็นลายลักษณ์อักษร",
    "在芭提雅如何报案？",
    "Куда сообщить о мошенничестве?",
  ),
  faqEnTh(
    "money",
    "Can I recover money sent to a scammer?",
    "ขอเงินคืนได้ไหม?",
    "Recovery is difficult once transferred overseas. Report quickly with bank receipts.",
    "ยากเมื่อโอนต่างประเทศแล้ว แจ้งเร็วพร้อมสลิปธนาคาร",
    "转给骗子后能追回吗？",
    "Можно ли вернуть деньги?",
  ),
  faqEnTh(
    "rental",
    "How do I avoid rental deposit fraud?",
    "หลีกเลี่ยงโกงค่ามัดจำเช่า?",
    "Sign bilingual leases, photograph move-in condition, confirm TM30, never wire full year to personal accounts.",
    "สัญญาสองภาษา ถ่ายรูปสภาพห้อง ยืนยัน TM30 อย่าโอนปีเต็มเข้าบัญชีส่วนตัว",
    "如何避免租房押金诈骗？",
    "Как избежать мошенничества с залогом?",
  ),
];

export function ScamAlertsPage() {
  const { language } = useLanguage();
  const copy = {
    intro: t(language, L("Stay alert in Pattaya", "ระวังในพัทยา", "在芭提雅保持警惕", "Будьте бдительны")),
    introBody: t(
      language,
      L(
        "Pattaya is generally safe, but tourist turnover attracts scams — especially Beach Road, Walking Street, and online property groups. If a deal feels rushed, walk away.",
        "พัทยาโดยทั่วไปปลอดภัย แต่นักท่องเที่ยวหมุนเวียนเร็ว มีมิจฉาชีพ โดยเฉพาะ Beach Road Walking Street และกลุ่มอสังหาออนไลน์ ถ้ารีบเร่งให้ถอย",
        "芭提雅总体安全，但游客流动大易有诈骗 — 尤其海滩路、Walking Street 与线上房产群。交易仓促则离开。",
        "Паттайя в целом безопасна, но мошенники активны у Beach Road и в группах недвижимости.",
      ),
    ),
    list: t(language, L("Common scams", "รูปแบบการโกงที่พบบ่อย", "常见骗局", "Типичные схемы")),
    essentials: t(language, L("Safety essentials", "สิ่งที่ควรทำเป็นประจำ", "安全要点", "Безопасность")),
    rental: t(language, L("Rental checklist →", "เช็กลิสต์เช่า →", "租房清单 →", "Аренда →")),
    culture: t(
      language,
      L("Cultural do's & don'ts →", "มารยาทไทย →", "文化宜忌 →", "Этикет →"),
    ),
  };

  return (
    <LocalizedLivingPageShell
      shellKey="scamAlerts"
      heroImage={livingImages.scamAlerts}
      heroAlt="Pattaya tourist police and safety advisory"
      ctaHref="/living/safety/emergency-guide"
      ctaAriaLabel="Emergency safety contacts"
    >
      <section
        className="rounded-2xl border border-[#ae2f34]/25 bg-[#ae2f34]/5 p-6 sm:p-8"
        aria-labelledby="scam-intro"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ae2f34] text-white">
            <AlertTriangle className="h-6 w-6" aria-hidden />
          </div>
          <div>
            <h2 id="scam-intro" className={livingTheme.headingSm}>
              {copy.intro}
            </h2>
            <p className={`mt-2 ${livingTheme.body}`}>{copy.introBody}</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="scam-list-title">
        <h2 id="scam-list-title" className={livingTheme.heading}>
          {copy.list}
        </h2>
        <ul className="mt-6 space-y-4">
          {getScams().map((scam) => (
            <li
              key={scam.title.en}
              className="rounded-xl border border-[#ae2f34]/20 bg-white p-5 shadow-sm transition hover:border-[#ae2f34]/40"
            >
              <h3 className="font-bold text-[#8c1520]">{t(language, scam.title)}</h3>
              <p className={`mt-2 ${livingTheme.body}`}>{t(language, scam.body)}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={livingTheme.accentPanel} aria-labelledby="scam-essentials-title">
        <div className="flex items-start gap-4">
          <div className={livingTheme.iconBox}>
            <ShieldCheck className="h-6 w-6" aria-hidden />
          </div>
          <div>
            <h2 id="scam-essentials-title" className={livingTheme.headingSm}>
              {copy.essentials}
            </h2>
            <ul className={`mt-4 list-inside list-disc space-y-2 ${livingTheme.body}`}>
              {getEssentials(language).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm">
              <Link
                href="/living/housing/rentals"
                className="font-bold text-[#B29475] hover:underline"
              >
                {copy.rental}
              </Link>
              {" · "}
              <Link
                href="/living/culture/etiquette"
                className="font-bold text-[#B29475] hover:underline"
              >
                {copy.culture}
              </Link>
            </p>
          </div>
        </div>
      </section>

      <LivingFaqSection
        faqs={faqs}
        subtitle={faqSubtitle(language, "Scam alerts", "มิจฉาชีพ", "诈骗提醒", "Мошенничество")}
      />
    </LocalizedLivingPageShell>
  );
}
