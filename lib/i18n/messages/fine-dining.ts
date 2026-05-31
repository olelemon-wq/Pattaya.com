import type { LanguageCode } from "@/lib/i18n/languages";
import {
  fineDiningTipImages,
  fineDiningZoneImages,
} from "@/lib/design/fine-dining-zone-images";
import { L, t } from "@/lib/i18n/living-helpers";

export const fineDiningUi = {
  explore: L("Explore", "สำรวจ", "探索", "Explore"),
  restaurants: L("Restaurants", "ร้านอาหาร", "餐厅", "Рестораны"),
  fineDining: L("Fine Dining", "ร้านอาหารหรู", "精致餐饮", "Fine dining"),
  heroSub: L("Luxury restaurants", "ร้านอาหารหรู", "高端餐饮", "Премиум-рестораны"),
  heroImageAlt: L(
    "Luxury fine dining in Pattaya",
    "ร้านอาหารหรูในพัทยา",
    "芭提雅精致餐饮",
    "Fine dining в Паттайе",
  ),
  heroBody: L(
    "Cliff terraces, bay-view tables, and special-occasion dining across Pattaya — book directly with each venue.",
    "ดินเนอร์หรูพัทยา — ระเบียงหน้าผา วิวอ่าว โอกาสพิเศษ จองตรงกับร้าน",
    "芭提雅高端餐饮 — 悬崖露台与海湾景观，请直接向餐厅预订。",
    "Премиум-рестораны Паттайи — бронируйте напрямую.",
  ),
  collections: L("Curated Collections", "คอลเลกชันคัดสรร", "精选合集", "Подборки"),
  collectionsSub: L(
    "Explore by mood, view, and dining style",
    "เลือกตามบรรยากาศ วิว และสไตล์",
    "按氛围、景观与风格探索",
    "По настроению и виду",
  ),
  browseZoneGuide: L("See recommended area →", "ดูโซนแนะนำ →", "查看推荐区域 →", "Район →"),
  readGuide: L("Read guide →", "อ่านคู่มือ →", "阅读指南 →", "Гид →"),
} as const;

export function tFineDining(lang: LanguageCode, key: keyof typeof fineDiningUi): string {
  return t(lang, fineDiningUi[key]);
}

export function getDiningZones(lang: LanguageCode) {
  return {
    title: t(lang, L("Choose your dining area", "เลือกโซนรับประทาน", "选择用餐区域", "Выберите район")),
    subtitle: t(
      lang,
      L(
        "Where to look for cliff views, quiet bays, or central beach-road convenience — price ranges are guides only; reserve with restaurants directly.",
        "โซนวิวหน้าผา อ่าวเงียบ หรือกลางเมือง — ราคาเป็นคร่าวๆ จองตรงกับร้าน",
        "悬崖景观、安静海湾或市中心便利 — 价格为参考，请直接向餐厅预订。",
        "Где искать виды и тишину — цены ориентировочные.",
      ),
    ),
    priceRangeLabel: t(lang, L("Typical per person", "ราคาโดยประมาณ/คน", "人均参考", "На человека")),
    styleLabel: t(lang, L("Style", "สไตล์", "风格", "Стиль")),
    items: [
      {
        id: "pratumnak" as const,
        name: t(
          lang,
          L("Pratumnak Hill & cliff terraces", "พระตำหนัก & ร้านหน้าผา", "帕坦纳克山与悬崖餐厅", "Pratumnak — террасы"),
        ),
        style: t(lang, L("Sunset · Thai–international", "พระอาทิตย์ตก · ไทย–นานาชาติ", "日落 · 泰式与国际", "Закат · fusion")),
        text: t(
          lang,
          L(
            "The classic Pattaya fine-dining strip — panoramic bay views, arrive 45–60 min before sunset on weekends.",
            "โซนดินเนอร์หรูคลาสสิก — วิวอ่าว วันหยุดมาก่อนพระอาทิตย์ตก 45–60 นาที",
            "经典高端餐饮带 — 全湾景观，周末建议日落前45–60分钟到。",
            "Классические террасы с видом — на выходных приходите заранее.",
          ),
        ),
        priceRange: t(lang, L("~500–2,000+ THB", "~500–2,000+ บาท", "约500–2000+泰铢", "~500–2000+ бат")),
        href: "/explore/beaches/pratumnak",
        linkLabel: t(lang, L("Pratumnak beach guide →", "คู่มือหาดพระตำหนัก →", "帕坦纳克指南 →", "Гид Pratumnak →")),
        external: false,
        image: fineDiningZoneImages[0],
      },
      {
        id: "wongamat" as const,
        name: t(lang, L("Wongamat & Naklua bay", "วงอมาตย์ & อ่าวนาเกลือ", "Wongamat 与那库拉湾", "Wongamat & Naklua")),
        style: t(lang, L("Quiet bay · Seafood & resort dining", "อ่าวเงียบ · ซีฟู้ด & รีสอร์ท", "静湾 · 海鲜与度假村", "Тихая бухта · морепродукты")),
        text: t(
          lang,
          L(
            "Upscale northern cove — calmer than central Pattaya, popular for long lunches and Sanctuary of Truth day trips.",
            "อ่าวเหนือหรู เงียบกว่ากลางเมือง เหมาะมื้อยาว แวร์ปราสาทสัจธรรม",
            "北部高端静湾，比市中心安静，适合长午餐与真理寺一日游。",
            "Северная бухта — спокойнее центра.",
          ),
        ),
        priceRange: t(lang, L("~400–1,800 THB", "~400–1,800 บาท", "约400–1800泰铢", "~400–1800 бат")),
        href: "/explore/beaches/wongamat",
        linkLabel: t(lang, L("Wongamat beach guide →", "คู่มือหาดวงอมาตย์ →", "Wongamat 指南 →", "Гид Wongamat →")),
        external: false,
        image: fineDiningZoneImages[1],
      },
      {
        id: "pattaya-beach" as const,
        name: t(lang, L("Pattaya Beach & Beach Road", "หาดพัทยา & Beach Road", "芭提雅海滩与 Beach Road", "Pattaya Beach Road")),
        style: t(lang, L("Central · Hotel & rooftop venues", "กลางเมือง · โรงแรม & ดาดฟ้า", "中心 · 酒店与屋顶", "Центр · отели")),
        text: t(
          lang,
          L(
            "Walkable from the main bay — hotel restaurants, steakhouses, and evening skyline views; easy after a beach day.",
            "เดินจากอ่าวหลัก — ร้านโรงแรม สเต็ก วิวเมืองเย็น สะดวกหลังเล่นหาด",
            "步行可达主湾 — 酒店餐厅、牛排馆与 evening 城市景观。",
            "От главной бухты — отели и стейки.",
          ),
        ),
        priceRange: t(lang, L("~400–1,500 THB", "~400–1,500 บาท", "约400–1500泰铢", "~400–1500 бат")),
        href: "/explore/beaches/pattaya-beach",
        linkLabel: t(lang, L("Pattaya Beach guide →", "คู่มือหาดพัทยา →", "芭提雅海滩指南 →", "Гид Pattaya Beach →")),
        external: false,
        image: fineDiningZoneImages[2],
      },
    ],
  };
}

export function getDiningTips(lang: LanguageCode) {
  return {
    title: t(lang, L("Dining guides", "คู่มือดินเนอร์", "餐饮指南", "Гиды")),
    subtitle: t(
      lang,
      L(
        "Practical tips for dress, timing, and etiquette — no paid listings on this page.",
        "เคล็ดลับแต่งกาย เวลา มารยาท — ไม่มีรายการโฆษณาในหน้านี้",
        "着装、时间与礼仪实用建议 — 本页无商业推广。",
        "Советы по дресс-коду и этикету.",
      ),
    ),
    items: [
      {
        id: "dress-code" as const,
        title: t(
          lang,
          L("What to wear: dress code", "แต่งตัวยังไง: ระเบียบการแต่งกาย", "着装：礼仪要求", "Дресс-код"),
        ),
        paragraphs: [
          t(
            lang,
            L(
              "Smart casual is the baseline — collared shirts or neat blouses, closed shoes; avoid beach flip-flops at cliff venues.",
              "สมาร์ทแคชชวล — เสื้อมีคอ รองเท้าปิด ห้ามใส่แตะที่ร้านหน้าผา",
              "建议 smart casual — 有领上衣、包脚鞋；悬崖餐厅勿穿人字拖。",
              "Smart casual — рубашка, закрытая обувь.",
            ),
          ),
          t(
            lang,
            L(
              "Jackets are rarely required; if in doubt, call ahead — some hotel restaurants enforce long trousers for men.",
              "สูทไม่จำเป็นส่วนใหญ่ ไม่แน่ใจโทรถาม — บางโรงแรม要求男士长裤",
              "多数不必穿西装；不确定请先致电 — 部分酒店要求男士长裤。",
              "Пиджак редко нужен — уточняйте по телефону.",
            ),
          ),
        ],
        image: fineDiningTipImages[0],
      },
      {
        id: "sunset" as const,
        title: t(
          lang,
          L("Booking sunset tables", "จองโต๊ะชมพระอาทิตย์ตก", "预订日落位", "Стол на закат"),
        ),
        paragraphs: [
          t(
            lang,
            L(
              "Reserve 1–3 days ahead on Fri–Sun; for Pratumnak cliff spots, aim to arrive 45–60 minutes before sunset for the best light.",
              "จองล่วงหน้า 1–3 วัน ศ–อา หน้าผาพระตำหนัก มาก่อนพระอาทิตย์ตก 45–60 นาที",
              "周五至周日建议提前1–3天订位；帕坦纳克悬崖店日落前45–60分钟到。",
              "Бронь за 1–3 дня в выходные; приходите до заката.",
            ),
          ),
          t(
            lang,
            L(
              "West-facing terraces fill fast Nov–Apr; cloudy days still work for dinner — just temper sky-colour expectations.",
              "ระเบียนตะวันตกเต็มเร็ว พ.ย.–เม.ย. วันครึ้มก็ดinnerได้ แค่ท้องฟ้าอาจไม่สวย",
              "11–4月西向露台很快订满；阴天仍可晚餐，只是晚霞可能一般。",
              "Западные террасы быстро заполняются в сезон.",
            ),
          ),
        ],
        image: fineDiningTipImages[1],
      },
      {
        id: "etiquette" as const,
        title: t(
          lang,
          L("Thai dining etiquette & tipping", "มารยาทอาหารไทย & ทิป", "泰国用餐礼仪与小费", "Этикет и чаевые"),
        ),
        paragraphs: [
          t(
            lang,
            L(
              "Sharing dishes family-style is normal — order a balance of stir-fries, salads, and one soup or curry for the table.",
              "แบ่งกินร่วมกันปกติ — สั่งผัด ยำ ต้ม/แกงสำหรับทั้งโต๊ะ",
              "共享菜品很常见 — 搭配小炒、沙拉与一份汤或咖喱。",
              "Общие блюда на стол — норма.",
            ),
          ),
          t(
            lang,
            L(
              "10% service charge is common on the bill; an extra 10% tip is appreciated for exceptional service but not mandatory.",
              "ค่าบริการ 10% มักรวมในบิล ทิปเพิ่มอีก 10% ถ้าพอใจ ไม่บังคับ",
              "账单常含10%服务费；满意可再付约10%小费，非强制。",
              "10% service charge часто в счёте; доп. чаевые по желанию.",
            ),
          ),
        ],
        image: fineDiningTipImages[2],
      },
      {
        id: "occasions" as const,
        title: t(
          lang,
          L("Birthdays, proposals & special nights", "วันเกิด ขอแต่ง & คืนพิเศษ", "生日、求婚与特别之夜", "Особые случаи"),
        ),
        paragraphs: [
          t(
            lang,
            L(
              "Mention celebrations when booking — many venues offer cake service, flowers, or a quiet corner table at no extra charge if arranged early.",
              "บอกตอนจอง — หลายร้านจัดเค้ก ดอกไม้ โต๊ะมุม ถ้าแจ้งล่วงหน้า",
              "预订时说明庆祝需求 — 许多餐厅可安排蛋糕、鲜花或安静座位。",
              "Сообщите о празднике при брони.",
            ),
          ),
          t(
            lang,
            L(
              "For proposals, ask for a west-facing table and confirm whether outside guests (photographers) are allowed.",
              "ขอแต่งงาน ขอโต๊ะหันตะวันตก ถามว่าให้ช่างภาพมาได้ไหม",
              "求婚宜订西向桌，并确认是否允许外请摄影师。",
              "Для предложения — стол на запад и правила для фотографа.",
            ),
          ),
        ],
        image: fineDiningTipImages[3],
      },
    ],
  };
}

export function getCollections(lang: LanguageCode) {
  const browseZoneGuide = t(lang, fineDiningUi.browseZoneGuide);
  const readGuide = t(lang, fineDiningUi.readGuide);

  return [
    {
      title: t(lang, L("Sunset & Ocean View", "ชมพระอาทิตย์ตกริมทะเล", "日落海景", "Закат")),
      description: t(
        lang,
        L(
          "Romantic terraces and beachfront tables for golden hour.",
          "ระเบียงโรแมนติกและโต๊ะริมหาดยามเย็น",
          "浪漫露台与海滨黄金时刻餐桌。",
          "Террасы и столики на закате.",
        ),
      ),
      href: "#zone-pratumnak",
      linkLabel: browseZoneGuide,
      icon: "sunset" as const,
    },
    {
      title: t(lang, L("Rooftop Dining", "ดินเนอร์บนดาดฟ้า", "屋顶餐饮", "Крыша")),
      description: t(
        lang,
        L(
          "City lights, cocktails, and elevated tasting menus.",
          "ไฟเมือง ค็อกเทล และเมนูเดกสเทชัน",
          "城市灯火、鸡尾酒与高级品鉴菜单。",
          "Огни города и дегустации.",
        ),
      ),
      href: "#zone-pattaya-beach",
      linkLabel: browseZoneGuide,
      icon: "building" as const,
    },
    {
      title: t(lang, L("Chef's Table", "เชฟเทเบิล", "主厨餐桌", "Chef table")),
      description: t(
        lang,
        L(
          "Omakase-style experiences and private chef counters.",
          "โอมากาเสะและเคาน์เตอร์เชฟส่วนตัว",
          "Omakase 与私人主厨吧台体验。",
          "Omakase и приватные стойки.",
        ),
      ),
      href: "#tip-occasions",
      linkLabel: readGuide,
      icon: "chef" as const,
    },
  ];
}
