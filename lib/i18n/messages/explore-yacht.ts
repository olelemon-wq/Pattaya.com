import type { LanguageCode } from "@/lib/i18n/languages";
import { exploreImages } from "@/lib/design/explore-images";
import { L, t } from "@/lib/i18n/living-helpers";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";
import {
  getYachtCatamaranNote,
  getYachtCharterCategories,
  getYachtCharterQuickRef,
  getYachtFamilyOnBoard,
  getYachtGuideIntro,
  getYachtHubCards,
  getYachtMoodPicks,
  getYachtPriceGuide,
  getYachtRoutes,
  getYachtValueNote,
} from "@/lib/i18n/messages/explore-yacht-guide";

export function getYachtTips(lang: LanguageCode) {
  return {
    title: t(
      lang,
      L(
        "What to know before you book",
        "สิ่งที่ควรรู้ก่อนจองเรือ",
        "预订前须知",
        "Перед бронированием",
      ),
    ),
    subtitle: t(
      lang,
      L(
        "Choose your time slot, check sea conditions, and confirm every detail in writing before you pay a deposit. This page is editorial only — no ads or commissions.",
        "เลือกเวลาเดินทาง ตรวจสอบสภาพทะเล และถามรายละเอียดให้ครบก่อนโอนมัดจำ — หน้านี้รวบรวมข้อมูลเพื่อช่วยตัดสินใจ ไม่มีโฆษณาหรือรับค่าคอมมิชชัน",
        "选好时段、了解海况、付定金前书面确认各项——本页仅为信息整理，无商业推广。",
        "Время, море и условия — письменно до оплаты. Без рекламы.",
      ),
    ),
    items: [
      {
        id: "timing" as const,
        title: t(lang, L("Choose departure time", "เลือกเวลาออกเรือ", "选择出发时段", "Время выхода")),
        paragraphs: [
          t(
            lang,
            L(
              "Morning trips often have calmer wind and clearer water — better for swimming and relaxing on deck. Late afternoon to evening suits sunset views and photos when the light is softer.",
              "ถ้าออกเช้า ลมมักเบาและน้ำทะเลมักใสกว่า เหมาะว่ายน้ำและพักผ่อนบนดาดฟ้า ช่วงบ่ายแก่ถึงเย็นเหมาะดูพระอาทิตย์ตกและถ่ายรูป เพราะแสงนุ่มกว่า",
              "早班通常风小、水更清，适合游泳和甲板休息；傍晚至夜间适合日落与拍照。",
              "Утром спокойнее и прозрачнее вода; вечером — закат и фото.",
            ),
          ),
        ],
      },
      {
        id: "seas" as const,
        title: t(lang, L("Check sea conditions", "ตรวจสอบสภาพทะเล", "了解海况", "Состояние моря")),
        paragraphs: [
          t(
            lang,
            L(
              "During monsoon season the bay can be rough and the boat may rock a lot. Many operators reschedule instead of giving a full refund. If anyone in your group gets seasick easily — especially children — ask the captain or office one day ahead.",
              "ช่วงมรสุมอ่าวพัทยาทะเลอาจขึ้นคลื่น ทำให้เรือโยกมาก ผู้ให้บริการหลายรายมักเลื่อนวันแทนการคืนเงินเต็มจำนวน ถ้ามีคนในทริปเคยเมาเรือ โดยเฉพาะเด็ก ควรถามกัปตันหรือร้านล่วงหน้า 1 วัน",
              "季风期海湾可能浪大、船晃；运营商常改期而非全额退款。易晕船者（尤其儿童）请提前一天问船长或门店。",
              "В муссон залив неспокоен; часто переносят дату. При морской болезни спросите заранее.",
            ),
          ),
        ],
      },
      {
        id: "inclusions" as const,
        title: t(lang, L("What is included in the price?", "ราคารวมอะไรบ้าง", "价格包含什么", "Что входит в цену")),
        paragraphs: [
          t(
            lang,
            L(
              "Quotes differ: some include meals, drinking water, paddle boards, and snorkel gear; others charge each extra separately. Ask in writing about fuel, marine park fees, and what happens if you return late.",
              "ราคาแต่ละร้านไม่เหมือนกัน — บางที่รวมอาหาร น้ำดื่ม บอร์ดเล่นน้ำ และอุปกรณ์ดำน้ำตื้นแล้ว บางที่คิดเพิ่มทีละรายการ ขอให้ยืนยันเป็นลายลักษณ์อักษรเรื่องค่าน้ำมัน ค่าเข้าอุทยานทางทะเล และค่าเกินเวลาที่กำหนด",
              "报价不同：有的含餐、饮用水、桨板与浮潜装备，有的逐项另计。请书面确认燃油、海洋公园费与超时规则。",
              "Уточните письменно: еда, топливо, парк, переработка.",
            ),
          ),
        ],
      },
      {
        id: "kids" as const,
        title: t(lang, L("Traveling with young children", "ถ้าพาเด็กเล็กไปด้วย", "带幼童出行", "С маленькими детьми")),
        paragraphs: [
          t(
            lang,
            L(
              "Before you book, ask about child-sized life jackets, toilets on board, and whether there is an air-conditioned cabin. These details matter a lot on a 3–4 hour trip at sea.",
              "ก่อนจอง ถามเรื่องเสื้อชูชีพขนาดเด็ก ห้องน้ำบนเรือ และว่ามีห้องแอร์หรือไม่ — สำคัญมากในการเดินทาง 3–4 ชั่วโมงบนทะเล",
              "预订前问清儿童救生衣、船上卫生间及是否有空调舱——海上三四个小时很需要这些。",
              "Детские спасжилеты, туалет, кондиционер — важно на 3–4 часа.",
            ),
          ),
        ],
      },
      {
        id: "pier" as const,
        title: t(lang, L("Confirm the correct pier", "ยืนยันท่าเรือให้ถูก", "确认正确码头", "Правильный причал")),
        paragraphs: [
          t(
            lang,
            L(
              "Private yacht charters usually leave from Ocean Marina. Ferries to Koh Larn leave from Bali Hai Pier. Tell your driver exactly which pier — it is easy to be dropped at the wrong gate.",
              "เรือยอชต์ส่วนตัวส่วนใหญ่ออกจาก Ocean Marina ส่วนเรือไปเกาะล้านออกจากท่า Bali Hai แจ้งคนขับรถให้ชัดเจนเพื่อไม่ให้ไปผิดท่า",
              "私人游艇多从 Ocean Marina 出发；去格兰岛的渡轮从 Bali Hai 码头出发。请明确告诉司机，以免送错。",
              "Чартер — Ocean Marina; паром на Ко Лан — Bali Hai. Скажите водителю точно.",
            ),
          ),
          t(
            lang,
            L(
              "Pattaya.com does not book charters or receive commission. Contact operators directly and only pay people you trust.",
              "Pattaya.com ไม่จัดเรือหรือรับค่าคอมมิชชัน — ติดต่อผู้ให้บริการโดยตรง และโอนเงินเฉพาะร้านที่คุณเชื่อถือ",
              "Pattaya.com 不代订包船、不抽佣——请直接联系运营商，并向您信任的一方付款。",
              "Pattaya.com не продаёт чартеры — бронируйте напрямую.",
            ),
          ),
        ],
      },
    ],
  };
}

export function getYachtPage(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  return {
    breadcrumb: {
      explore: c.explore,
      luxury: c.luxury,
      current: t(lang, L("Yacht & Marina", "เรือยอร์ช & มารีน่า", "游艇与码头", "Яхты и марина")),
    },
    hero: {
      badge: c.luxury,
      title: t(lang, L("Yacht & Marina", "เรือยอร์ช & มารีน่า", "游艇与码头", "Яхты")),
      subtitle: t(
        lang,
        L(
          "Private charters · catamarans · sunset cruises",
          "เช่าเรือส่วนตัว · catamaran · sunset",
          "私人包船 · 双体船 · 日落巡航",
          "Чартеры · катамараны · закат",
        ),
      ),
      body: t(
        lang,
        L(
          "Pattaya is an easy yacht city — boats from speedboats to superyachts, great for couples, families, and parties. Compare operators, piers, and guide prices; we link to Maps only.",
          "พัทยาล่องยอร์ชง่าย มีตั้งแต่เรือเล็กถึง super yacht เหมาะคู่รัก ครอบครัว ปาร์ตี้ เทียบ operator ท่าเรือ ราคาคร่าว ๆ ลิงก์แผนที่เท่านั้น",
          "芭提雅很适合游艇——从小艇到超级游艇，情侣、家庭、派对皆可；对比运营商、码头与参考价，仅链地图。",
          "Паттайя — от speedboat до superyacht.",
        ),
      ),
      badgeAreas: t(
        lang,
        L(
          "Ocean Marina · Bali Hai · Beach Rd operators",
          "Ocean Marina · บาลีไฮ · Beach Rd",
          "Ocean Marina · Bali Hai · 海滨路",
          "Ocean Marina · Bali Hai",
        ),
      ),
      image: exploreImages.yacht,
    },
    guide: getYachtGuideIntro(lang),
    quickRef: getYachtCharterQuickRef(lang),
    catamaranNote: getYachtCatamaranNote(lang),
    categories: getYachtCharterCategories(lang),
    hubCards: getYachtHubCards(lang),
    hubsSection: {
      title: t(lang, L("Main piers", "ท่าเรือหลัก", "主要码头", "Главные причалы")),
      subtitle: t(
        lang,
        L(
          "Most private yachts use Ocean Marina — Bali Hai is for Koh Larn ferries.",
          "ยอชต์ส่วนตัวส่วนใหญ่ใช้ Ocean Marina — บาลีไฮคือเรือเกาะล้าน",
          "私人游艇多用 Ocean Marina——Bali Hai 为格兰岛渡轮。",
          "Чартеры — Ocean Marina; паром — Bali Hai.",
        ),
      ),
    },
    moodPicks: getYachtMoodPicks(lang),
    priceGuide: getYachtPriceGuide(lang),
    routes: getYachtRoutes(lang),
    familyOnBoard: getYachtFamilyOnBoard(lang),
    valueNote: getYachtValueNote(lang),
    tips: getYachtTips(lang),
    alsoExplore: {
      title: c.alsoExplore,
      kohLarnDayTrip: c.kohLarnDayTrip,
      fineDining: c.fineDining,
      wellness: t(lang, L("Wellness →", "สปา & สุขภาพ →", "康养 →", "Wellness →")),
      familyActivities: t(lang, L("Family activities →", "กิจกรรมครอบครัว →", "亲子活动 →", "Семья →")),
      familyActivitiesHref: "/explore/family-activities",
    },
  };
}
