"use client";

import { LivingFaqSection } from "@/components/living/living-faq-section";
import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import { useLanguage } from "@/components/layout/language-provider";
import { livingImages } from "@/lib/design/living-images";
import { livingTheme } from "@/lib/design/living-theme";
import { faqEnTh, iconEnTh, L, t } from "@/lib/i18n/living-helpers";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import { Car, CreditCard, MapPin, Smartphone, UtensilsCrossed } from "lucide-react";

function getApps(lang: import("@/lib/i18n/languages").LanguageCode) {
  return [
    {
      name: "Grab",
      color: "#00B14F",
      tagline: t(lang, L("GrabCar, GrabBike, GrabFood", "รถ มอไซค์ ส่งอาหาร", "网约车、摩托、外卖", "GrabCar, GrabBike, GrabFood")),
      body: t(
        lang,
        L(
          "Largest network in Pattaya — airport runs and GrabFood across Jomtien to Naklua.",
          "เครือข่ายใหญ่ในพัทยา — สนามบินและ GrabFood จอมเทียนถึงนาเกลือ",
          "芭提雅最大网络 — 机场与仲天至那库拉外卖。",
          "Крупнейшая сеть — аэропорт и GrabFood.",
        ),
      ),
      tips: t(
        lang,
        L("Enable GrabPay; screenshot OTP and plate before boarding.", "เปิด GrabPay แคป OTP และป้ายก่อนขึ้น", "开通 GrabPay；上车前截图 OTP 与车牌。", "GrabPay; скрин OTP и номера."),
      ),
    },
    {
      name: "Bolt",
      color: "#0047FF",
      tagline: t(lang, L("Bolt Ride, Bolt Food", "รถและอาหาร", "出行与外卖", "Bolt Ride, Bolt Food")),
      body: t(
        lang,
        L(
          "Often competitive on short hops in central Pattaya and Pratumnak.",
          "มักถูกกว่าในทริปสั้นกลางพัทยาและพระตำหนัก",
          "市中心与帕塔姆纳克短途常更便宜。",
          "Часто дешевле на коротких поездках.",
        ),
      ),
      tips: t(
        lang,
        L("Compare both apps; watch pickup pin on busy Sois.", "เทียบสองแอป ดูหมุดรับบนซอยแออัด", "对比两 App；繁忙小巷注意上车点。", "Сравните оба приложения."),
      ),
    },
  ];
}

function getFeatures() {
  return [
    iconEnTh(
      Smartphone,
      "Upfront pricing",
      "ราคาก่อนเรียก",
      "Fare shown before confirm — avoids meter disputes.",
      "เห็นราคาก่อนยืนยัน ลดปัญหามิเตอร์",
      "明码标价",
      "Цена заранее",
    ),
    iconEnTh(
      MapPin,
      "Pin pickup carefully",
      "ปักหมุดจุดรับ",
      "Beach Road and malls have multiple gates — message driver with Soi number.",
      "Beach Road และห้างมีหลายทางเข้า แจ้งซอยในแอป",
      "精确定位",
      "Точка посадки",
    ),
    iconEnTh(
      CreditCard,
      "Cashless preferred",
      "จ่ายผ่านแอป",
      "Reduces change scams; keep cash for tolls.",
      "ลดปัญหาทอน เก็บเงินสดค่าทางด่วน",
      "优先无现金",
      "Безнал",
    ),
    iconEnTh(
      UtensilsCrossed,
      "Food delivery",
      "ส่งอาหาร",
      "GrabFood and Bolt Food with English menus — popular in Jomtien condos.",
      "เมนูอังกฤษ นิยมในคอนโดจอมเทียน",
      "外卖",
      "Доставка еды",
    ),
    iconEnTh(
      Car,
      "Airport & intercity",
      "สนามบิน",
      "Book BKK or U-Tapao 2–3 hours ahead; fixed quotes beat curbside touts.",
      "จองล่วงหน้า 2–3 ชม. ราคาในแอปดีกว่าคนเรียกริมถนน",
      "机场长途",
      "Аэропорт",
    ),
  ];
}

function getFareGuide(lang: import("@/lib/i18n/languages").LanguageCode) {
  return [
    {
      route: t(lang, L("Beach Road → Jomtien", "Beach Road → จอมเทียน", "海滩路 → 仲天", "Beach Road → Jomtien")),
      grab: "฿80–140",
      bolt: "฿70–130",
      note: t(lang, L("Traffic dependent", "ขึ้นกับจราจร", "视交通而定", "Зависит от трафика")),
    },
    {
      route: t(lang, L("Central Pattaya → Pratumnak", "กลางพัทยา → พระตำหนัก", "市中心 → 帕塔姆纳克", "Центр → Pratumnak")),
      grab: "฿60–100",
      bolt: "฿55–95",
      note: t(lang, L("Short hop", "ทริปสั้น", "短途", "Коротко")),
    },
    {
      route: t(lang, L("Pattaya → U-Tapao", "พัทยา → อู่ตะเภา", "芭提雅 → 乌塔保", "Паттайя → U-Tapao")),
      grab: "฿350–500",
      bolt: "฿320–480",
      note: t(lang, L("Book ahead", "จองล่วงหน้า", "提前预约", "Заранее")),
    },
    {
      route: t(lang, L("Pattaya → Suvarnabhumi", "พัทยา → สุวรรณภูมิ", "芭提雅 → 素万那普", "Паттайя → BKK")),
      grab: "฿1,200–1,600",
      bolt: "฿1,100–1,550",
      note: t(lang, L("Toll extra", "ค่าทางด่วนแยก", "过路费另计", "Плюс toll")),
    },
  ];
}

const faqs = [
  faqEnTh(
    "songthaew",
    "Grab vs songthaew — which is cheaper?",
    "สองแถวหรือแอปถูกกว่า?",
    "Songthaews cost ฿10–20 on fixed routes. Apps cost more but offer door-to-door AC and safety at night.",
    "สองแถว ฿10–20 แอปแพงกว่าแต่ถึงหน้าประตู มีแอร์ ปลอดภัยกลางคืน",
    "Grab 还是双条车便宜？",
    "Grab или songthaew?",
  ),
  faqEnTh(
    "cancel",
    "Driver cancelled — what now?",
    "คนขับยกเลิกทำอย่างไร?",
    "Rebook or switch apps. Peak hours near Walking Street have higher cancel rates.",
    "จองใหม่หรือเปลี่ยนแอป ช่วงคึก Walking Street ยกเลิกบ่อย",
    "司机取消怎么办？",
    "Отмена водителем?",
  ),
  faqEnTh(
    "motorbike",
    "Is GrabBike safe?",
    "GrabBike ปลอดภัยไหม?",
    "Helmet quality varies. GrabCar is safer for luggage and rain.",
    "หมวกคุณภาพต่างกัน ฝนหนักหรือมีกระเป๋าใช้ GrabCar",
    "GrabBike 安全吗？",
    "GrabBike?",
  ),
];

export function RideAppsPage() {
  const { language } = useLanguage();
  const tipLabel = t(language, L("Tip:", "เคล็ดลับ:", "提示：", "Совет:"));
  const h = {
    apps: t(language, L("Apps in Pattaya", "แอปในพัทยา", "芭提雅常用 App", "Приложения")),
    safe: t(language, L("How to ride safely", "ขับปลอดภัย", "安全乘车", "Безопасность")),
    fares: t(language, L("Indicative fares", "ราคาโดยประมาณ", "参考车费", "Тарифы")),
    faresSub: t(
      language,
      L("2025 estimates, excl. surge — check app before confirm", "ประมาณปี 2025 ไม่รวม surge ตรวจในแอปก่อนยืนยัน", "2025 估价，不含高峰 — 确认前在 App 查看", "2025, без surge"),
    ),
    route: t(language, L("Route", "เส้นทาง", "路线", "Маршрут")),
    notes: t(language, L("Notes", "หมายเหตุ", "备注", "Примечания")),
  };

  return (
    <LocalizedLivingPageShell
      shellKey="rideApps"
      heroImage={livingImages.rideApps}
      heroAlt="Ride-hailing app"
      ctaHref="https://www.grab.com/th/download/"
      ctaAriaLabel="Grab app download"
    >
      <section aria-labelledby="apps-title">
        <h2 id="apps-title" className={livingTheme.heading}>
          {h.apps}
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {getApps(language).map((app) => (
            <article key={app.name} className={`p-6 ${livingTheme.card}`}>
              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-lg text-lg font-bold text-white"
                  style={{ backgroundColor: app.color }}
                >
                  {app.name[0]}
                </div>
                <h3 className="text-lg font-bold text-[#0A192F]">{app.name}</h3>
              </div>
              <p className="mt-1 text-sm font-semibold text-[#444748]">{app.tagline}</p>
              <p className={`mt-3 ${livingTheme.body}`}>{app.body}</p>
              <p className="mt-3 rounded-lg bg-[#F8FAFC] px-3 py-2 text-xs text-[#444748]">
                <span className="font-bold text-[#B29475]">{tipLabel}</span> {app.tips}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="features-title">
        <h2 id="features-title" className={livingTheme.heading}>
          {h.safe}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {getFeatures().map((item) => (
            <div key={item.title.en} className={`flex gap-4 p-5 ${livingTheme.card}`}>
              <div className={livingTheme.iconBox}>
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-[#0A192F]">{t(language, item.title)}</h3>
                <p className={`mt-2 ${livingTheme.body}`}>{t(language, item.text)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="fares-title">
        <h2 id="fares-title" className={livingTheme.heading}>
          {h.fares}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{h.faresSub}</p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#D7CBBA]/60 text-xs font-bold uppercase tracking-wide text-[#6b5a48]">
              <tr>
                <th className="px-4 py-3 sm:px-6">{h.route}</th>
                <th className="px-4 py-3 sm:px-6">Grab</th>
                <th className="px-4 py-3 sm:px-6">Bolt</th>
                <th className="hidden px-4 py-3 sm:table-cell sm:px-6">{h.notes}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0] text-[#444748]">
              {getFareGuide(language).map((row) => (
                <tr key={row.route}>
                  <td className="px-4 py-3 font-medium text-[#0A192F] sm:px-6">{row.route}</td>
                  <td className="px-4 py-3 sm:px-6">{row.grab}</td>
                  <td className="px-4 py-3 sm:px-6">{row.bolt}</td>
                  <td className="hidden px-4 py-3 sm:table-cell sm:px-6">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <LivingFaqSection
        faqs={faqs}
        subtitle={faqSubtitle(language, "Grab & Bolt", "Grab & Bolt", "Grab 与 Bolt", "Grab и Bolt")}
      />
    </LocalizedLivingPageShell>
  );
}
