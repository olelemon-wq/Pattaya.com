import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";
import {
  getMarketGuideCategories,
  getMarketGuideIntro,
  getMarketRankings,
  getMarketSchedule,
} from "@/lib/i18n/messages/explore-shopping-markets-guide";
import { getHiddenMarketsSection } from "@/lib/i18n/messages/explore-shopping-markets-hidden";

export function getMarketTips(lang: LanguageCode) {
  return {
    title: t(lang, L("Market tips", "เคล็ดลับตลาด", "市场贴士", "Советы")),
    subtitle: t(
      lang,
      L(
        "Straightforward tips for bargaining, timing, and checking goods — nothing sponsored on this page.",
        "Tips ตรงๆ เรื่องต่อราคา เวลา เช็คของ — หน้านี้ไม่มีโฆษณา",
        "议价、时间与验货实用建议，本页无商业推广。",
        "Простые советы без рекламы.",
      ),
    ),
    items: [
      {
        id: "bargain" as const,
        title: t(lang, L("Bargaining", "ต่อราคา", "议价", "Торг")),
        paragraphs: [
          t(
            lang,
            L(
              "At independent stalls, smile and try 'lod dai mai?' (can you reduce the price?) — a friendly no is normal. Malls and fixed-price souvenir chains rarely budge.",
              "แผงอิสระ ยิ้มแล้วถาม 'ลดได้ไหม' ได้ — ไม่ลดก็ปกติ ห้างหรือร้านราคาตายตัวแทบไม่ต่อ",
              "独立摊位可微笑问「ลดได้ไหม」；商场固定价店通常不能讲价。",
              "На лавках спросите «lod dai mai?» — в ТРЦ цена фиксирована.",
            ),
          ),
          t(
            lang,
            L(
              "Walk two or three stalls before you buy the same item — prices on tees, bags, and magnets vary more than you would expect.",
              "เดินดู 2–3 ร้านก่อนซื้อของชิ้นเดียวกัน — เสื้อ กระเป๋า แม่เหล็ก ราคาต่างกันมาก",
              "同类商品先逛两三摊再下手 — T恤、包、磁贴价差可能很大。",
              "Сравните 2–3 лавки — цены сильно различаются.",
            ),
          ),
        ],
      },
      {
        id: "timing" as const,
        title: t(lang, L("When to go", "ไปกี่โมงดี", "何时去", "Когда идти")),
        paragraphs: [
          t(
            lang,
            L(
              "Morning markets (Naklua area) are best before 09:00. Big night markets like Thepprasit peak around 19:00–21:00 any day — weekends are busiest.",
              "ตลาดเช้า (นาเกลือ) มาก่อน 9 โมงของครบ ตลาดกลางคืนใหญ่ ๆ เช่น เทพประสิทธิ์ คนเยอะช่วง 19–21 น. ทุกวัน เสาร์–อาทิตย์จะแน่นเป็นพิเศษ",
              "早市建议9:00前到；Thepprasit 等大夜市每天 19–21 点最热闹，周末更挤。",
              "Утром до 9:00; Thepprasit и др. — пик 19–21 ежедневно, в выходные люднее.",
            ),
          ),
          t(
            lang,
            L(
              "Arrive by 17:30 at Thepprasit for easier parking and the best food selection before the crowds build.",
              "เทพประสิทธิ์ มา 17:30 จอดง่าย ของกินครบก่อนคนแน่น",
              "Thepprasit 建议17:30前到，停车和食物选择更好。",
              "Thepprasit — к 17:30 проще с парковкой и едой.",
            ),
          ),
        ],
      },
      {
        id: "cash" as const,
        title: t(lang, L("Cash & bags", "เงินสด & ถุง", "现金与袋子", "Наличные")),
        paragraphs: [
          t(
            lang,
            L(
              "Most stalls are cash-only — break larger notes at a 7-Eleven first. Small bills (20–100 baht) speed things up at busy counters.",
              "ส่วนใหญ่เงินสด — แบ่งแบงก์ที่ 7-Eleven ก่อน แบงก์ 20–100 จ่ายเร็วตอนคนเยอะ",
              "多数摊位只收现金 — 先在7-Eleven换零钱；20–100泰铢面额更方便。",
              "Чаще наличные — разменяйте в 7-Eleven.",
            ),
          ),
          t(
            lang,
            L(
              "Bring a foldable bag — many vendors skip plastic now. Wet-market mornings can be muddy near the entrance; wear shoes you do not mind getting dusty.",
              "เอาถุงพก — หลายร้านไม่ให้ถุงแล้ว ตลาดเช้าหน้าทางอาจโคลน ใส่รองเท้าที่ไม่เสียดาย",
              "自备折叠袋 — 许多摊位不再提供塑料袋；早市入口可能较脏，穿不怕弄脏的鞋。",
              "Складная сумка; утром у входа может быть грязно.",
            ),
          ),
        ],
      },
      {
        id: "quality" as const,
        title: t(lang, L("Checking before you pay", "เช็คก่อนจ่าย", "付款前检查", "Проверка товара")),
        paragraphs: [
          t(
            lang,
            L(
              "Quick-test electronics if the stall allows it — chargers, cables, and earbuds vary a lot in quality. For clothes, check seams and zippers on the spot.",
              "ลองอิเล็กฯ สั้นๆ ถ้าร้านให้ — สายชาร์จ หูฟัง คุณภาพต่างกันมาก เสื้อผ้าเช็ครอยเย็บ ซิป ต่อหน้า",
              "允许的话快速试电子产品；衣服当场检查缝线和拉链。",
              "Проверьте электронику и швы на одежде.",
            ),
          ),
          t(
            lang,
            L(
              "Ask if it is made in Thailand on crafts you care about — some 'local' items are imported. Keep receipts for anything over ~1,000 baht.",
              "ถาม 'ของไทยไหม' งานฝีมือที่สนใจ — บางชิ้นนำเข้า เก็บใบเสร็จของราคา ~1,000+",
              "手工艺品可问是否泰国制造；千元以上保留收据。",
              "Спросите про происхождение; сохраняйте чеки от 1000+ бат.",
            ),
          ),
        ],
      },
    ],
  };
}

export function getShoppingMarketsPage(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  return {
    breadcrumb: {
      explore: c.explore,
      shopping: c.shopping,
      current: t(lang, L("Local Markets", "ตลาดท้องถิ่น", "本地市场", "Местные рынки")),
    },
    hero: {
      badge: c.shopping,
      title: t(lang, L("Local Markets", "ตลาดท้องถิ่น", "本地市场", "Местные рынки")),
      subtitle: t(lang, L("Local markets", "ตลาดท้องถิ่น", "本地市场", "Рынки")),
      body: t(
        lang,
        L(
          "Pattaya is not just Walking Street — night food bazaars, morning wet markets, seafood halls, plant fairs, and second-hand hunts each feel different. Browse by style below.",
          "พัทยาไม่ได้มีแค่ Walking Street — ตลาดกลางคืน ตลาดสดเช้า ซีฟู้ด ต้นไม้ และคลองถม ฟีลต่างกันทุกที่ เลือกตามสไตล์ด้านล่าง",
          "芭提雅不只是步行街——夜市、早市、海鲜、植物与二手市场，风格各异。",
          "Паттайя — не только Walking Street: рынки на любой вкус.",
        ),
      ),
      badgeAreas: t(
        lang,
        L(
          "Thepprasit · Naklua · Jomtien · Buakhao · Floating",
          "เทพประสิทธิ์ · นาเกลือ · จอมเทียน · บัวขาว · ตลาดน้ำ",
          "Thepprasit · Naklua · Jomtien · Buakhao · 水上市场",
          "Thepprasit · Naklua · Jomtien · Buakhao · Floating",
        ),
      ),
    },
    guide: getMarketGuideIntro(lang),
    schedule: getMarketSchedule(lang),
    categories: getMarketGuideCategories(lang),
    rankings: getMarketRankings(lang),
    hidden: getHiddenMarketsSection(lang),
    tips: getMarketTips(lang),
    alsoExplore: {
      title: c.alsoExplore,
      shoppingMalls: c.shoppingMalls,
      streetFood: c.streetFood,
      mainBeaches: c.mainBeaches,
    },
  };
}
