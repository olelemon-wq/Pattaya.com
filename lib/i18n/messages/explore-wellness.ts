import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";
import {
  getWellnessFamilyNote,
  getWellnessGuideIntro,
  getWellnessGuideItems,
  getWellnessMoodPicks,
  getWellnessSafetyNote,
} from "@/lib/i18n/messages/explore-wellness-guide";

export function getWellnessTips(lang: LanguageCode) {
  return {
    title: t(lang, L("Before you book", "ก่อนจอง/เข้าร้าน", "预约前", "Перед визитом")),
    subtitle: t(
      lang,
      L(
        "Practical habits for spa days in Pattaya.",
        "นิสัยก่อนเข้าสปาในพัทยา",
        "芭提雅 spa 日实用习惯。",
        "Советы перед spa-днём.",
      ),
    ),
    items: [
      {
        id: "booking" as const,
        title: t(lang, L("Book peak slots", "จองช่วงคนแน่น", "高峰时段预约", "Бронь")),
        paragraphs: [
          t(
            lang,
            L(
              "Weekends and sunset onsen hours fill fast at Yunomori and Let's Relax — call or book online when possible.",
              "วันหยุดและช่วงเย็นของออนเซ็นที่ Yunomori / Let's Relax เต็มเร็ว — โทรหรือจองออนไลน์ถ้าได้",
              "周末与日落泡汤时段在 Yunomori、Let's Relax 很快满——尽量预约。",
              "В выходные бронируйте онсэны заранее.",
            ),
          ),
          t(
            lang,
            L(
              "Health Land and Oasis accept walk-ins more often, but still expect a short wait at dinner time.",
              "Health Land และ Oasis มักเข้าใช้แบบไม่จองล่วงหน้าได้ แต่มื้อเย็นอาจรอสั้นๆ",
              "Health Land 与 Oasis 常可 walk-in，但晚餐时段可能短等。",
              "Health Land и Oasis — walk-in, но вечером очередь.",
            ),
          ),
        ],
      },
      {
        id: "safe" as const,
        title: t(lang, L("Stick to clear venues", "เลือกร้านชัดเจน", "选明确门店", "Чёткие заведения")),
        paragraphs: [
          t(
            lang,
            L(
              "Hotel spas, onsen, day spas, and chains on this page are easier to read than ambiguous beach-road signs — see the safety note below.",
              "สปาโรงแรม ออนเซ็น สปารายวัน และเครือในลิสต์นี้อ่านเมนูง่ายกว่าป้ายริมหาดที่กำกวม — ดูหมายเหตุด้านล่าง",
              "本页酒店 spa、温泉、day spa 与连锁比海滩路含糊招牌更易判断——见下方安全提示。",
              "Отели, онсэны и сети — понятнее, чем сомнительные вывески.",
            ),
          ),
        ],
      },
      {
        id: "sun" as const,
        title: t(lang, L("Sun & hydration", "แดด & น้ำ", "日晒与补水", "Солнце")),
        paragraphs: [
          t(
            lang,
            L(
              "Skip deep tissue on fresh sunburn — gentle oil or foot massage until skin calms.",
              "แดดไหม้อย่านวดลึก — เลือกน้ำมันเบาๆ หรือเท้าจนกว่าผิวจะดีขึ้น",
              "新鲜晒伤勿深度按摩——改选 gentle 精油或足疗至皮肤恢复。",
              "При ожоге — без deep tissue.",
            ),
          ),
          t(
            lang,
            L(
              "Drink water before onsen and aromatherapy — heavy meals or alcohol right before can make you nauseous.",
              "ดื่มน้ำก่อนออนเซ็นและอโรมา — มื้อหนักหรือแอลกอฮอลก่อนทรีทเมนต์อาจทำให้ไม่สบายตัว",
              "泡汤与芳疗前多喝水——大餐或饮酒后立即护理易不适。",
              "Вода перед онсэном; без алкоголя.",
            ),
          ),
        ],
      },
      {
        id: "tipping" as const,
        title: t(lang, L("Tipping & extras", "ทิป & ของเพิ่ม", "小费与附加", "Чаевые")),
        paragraphs: [
          t(
            lang,
            L(
              "Tip 10–15% at premium spas when service exceeds expectations — agree package name and minutes on the receipt.",
              "ทิป 10–15% ที่สปาพรีเมียมเมื่อบริการเกินความคาดหวัง — ตกลงชื่อแพ็กและนาทีบนใบเสร็จ",
              "高端 spa 超预期服务可给10–15%；收据上确认套餐与分钟数。",
              "10–15% в премиум-spa; фиксируйте пакет на чеке.",
            ),
          ),
        ],
      },
    ],
  };
}

export function getWellnessPage(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  return {
    seoTitle: t(
      lang,
      L(
        "Spa & massage in Pattaya — guide",
        "สปา & นวด พัทยา — คู่มือ",
        "芭提雅水疗按摩指南",
        "Spa и массаж в Паттайе",
      ),
    ),
    breadcrumb: { explore: c.explore, current: c.wellness },
    hero: {
      badge: c.wellness,
      title: t(lang, L("Relax & Wellness", "สปา & นวด", "康养与放松", "Wellness")),
      subtitle: t(
        lang,
        L(
          "Pick spa, onsen, or massage by vibe",
          "เลือกสปา ออนเซ็น หรือนวดตามบรรยากาศที่อยากได้",
          "按气质选 spa、温泉或按摩",
          "Spa, онсэн или массаж по настроению",
        ),
      ),
      body: t(
        lang,
        L(
          "From affordable local massage and Japanese onsen to luxury resort spas and serious recovery chains — eight trusted picks sorted by vibe so you can compare and choose.",
          "พัทยามีครบตั้งแต่ร้านนวดท้องถิ่นราคาดี สปาหรู ออนเซ็นญี่ปุ่น อโรมา ไปจนถึงร้านนวดแก้เมื่อยจริงจัง — รวม 8 ร้านแนะนำแยกประเภท ให้เทียบแล้วเลือกตามบรรยากาศ",
          "从平价本地按摩、日式温泉到奢华度假 spa 与专业恢复连锁——八家精选按类型分组，方便对比选择。",
          "8 проверенных мест по типу — от местного массажа до люкса и онсэна.",
        ),
      ),
      badgeLuxury: t(lang, L("Luxury & onsen", "สายหรูและออนเซ็น", "奢华与温泉", "Люкс и онсэн")),
      badgeLocal: t(lang, L("Local & chains", "นวดท้องถิ่นและเครือ", "本地与连锁", "Местное и сети")),
    },
    guide: getWellnessGuideIntro(lang),
    guideItems: getWellnessGuideItems(lang),
    moodPicks: getWellnessMoodPicks(lang),
    familyNote: getWellnessFamilyNote(lang),
    safetyNote: getWellnessSafetyNote(lang),
    tips: getWellnessTips(lang),
    alsoExplore: {
      title: c.alsoExplore,
      mainBeaches: c.mainBeaches,
      fineDining: c.fineDining,
      hiddenGems: t(lang, L("Hidden gems →", "เริ่มรู้ลึก →", "深入了解 →", "Секреты →")),
      cafesLink: c.cafesLink,
    },
  };
}
