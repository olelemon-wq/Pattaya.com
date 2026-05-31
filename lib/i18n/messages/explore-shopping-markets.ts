import type { LanguageCode } from "@/lib/i18n/languages";
import {
  shoppingMarketImages,
  shoppingMarketTipImages,
} from "@/lib/design/shopping-market-images";
import { L, t } from "@/lib/i18n/living-helpers";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";

export function getShoppingMarketsList(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  const openInMaps = t(
    lang,
    L("Open in Google Maps →", "เปิดใน Google Maps →", "在 Google 地图中打开 →", "Google Maps →"),
  );
  const streetFoodGuide = t(
    lang,
    L("Street food guide →", "คู่มือของกิน →", "街头美食指南 →", "Стритфуд →"),
  );
  const nakluaGuide = t(lang, L("Naklua beach guide →", "คู่มือหาดนาเกลือ →", "那库拉海滩指南 →", "Гид Naklua →"));

  return {
    title: t(lang, L("Choose your market", "เลือกตลาด", "选择市场", "Выберите рынок")),
    subtitle: t(
      lang,
      L(
        "Real markets across Pattaya — price ranges are guides only; no paid listings on this page.",
        "ตลาดจริงในพัทยา — ราคาเป็นคร่าวๆ ไม่มีรายการโฆษณาในหน้านี้",
        "芭提雅真实市场 — 价格为参考，本页无商业推广。",
        "Реальные рынки — цены ориентировочные.",
      ),
    ),
    hoursLabel: c.hours,
    mustBuyLabel: c.mustBuy,
    priceRangeLabel: t(lang, L("Typical prices", "ราคาโดยประมาณ", "参考价位", "Примерные цены")),
    items: [
      {
        id: "thepprasit" as const,
        name: t(lang, L("Thepprasit Night Market", "ตลาดเทพประสิทธิ์", "Thepprasit 夜市", "Thepprasit")),
        hours: t(lang, L("Fri–Sun · ~17:00–23:00", "ศ–อา · ~17:00–23:00", "周五至日 · 约17:00–23:00", "Пт–Вс · ~17:00–23:00")),
        mustBuy: t(
          lang,
          L(
            "Street snacks, printed tees, souvenirs, phone accessories",
            "ของกิน เสื้อยืด ของฝาก อุปกรณ์มือถือ",
            "街头小吃、T恤、纪念品",
            "Снеки, футболки, сувениры",
          ),
        ),
        text: t(
          lang,
          L(
            "Pattaya's best-known night market — eat first, then browse stalls for bargains and gifts. Same spot as our street-food guide, but this page focuses on shopping.",
            "ตลาดกลางคืนดังสุด — กินก่อน แล้วค่อยเดินช้อป ที่เดียวกับหน้าของกิน แต่โฟกัสเรื่องช้อป",
            "最著名的夜市 — 先吃再逛；与街头美食页同一地点，本页侧重购物。",
            "Самый известный ночной рынок — сначала еда, потом шопинг.",
          ),
        ),
        priceRange: t(
          lang,
          L("~50–500 THB / item", "~50–500 บาท/ชิ้น", "约50–500泰铢/件", "~50–500 бат/шт."),
        ),
        href: "https://www.google.com/maps/search/?api=1&query=Thepprasit+Night+Market+Pattaya+Thailand",
        linkLabel: openInMaps,
        secondaryHref: "/explore/restaurants/street-food#market-thepprasit",
        secondaryLinkLabel: streetFoodGuide,
        image: shoppingMarketImages[0],
      },
      {
        id: "naklua" as const,
        name: t(lang, L("Naklua Market", "ตลาดนาเกลือ", "Naklua 市场", "Naklua")),
        hours: t(lang, L("Daily · ~06:00–11:00", "ทุกวัน · ~06:00–11:00", "每日 · 约6:00–11:00", "Ежедн. · ~6:00–11:00")),
        mustBuy: t(
          lang,
          L(
            "Spices, dried seafood, fruit, household goods",
            "เครื่องเทศ อาหารทะเลแห้ง ผลไม้ ของใช้",
            "香料、干货、水果",
            "Специи, сухие морепродукты, фрукты",
          ),
        ),
        text: t(
          lang,
          L(
            "Where locals shop before the sun gets harsh — real market prices on spices, dried goods, and fruit you can take back to your room.",
            "คนท้องถิ่นช้อปก่อนแดดแรง — ราคาตลาดจริง เครื่องเทศ ของแห้ง ผลไม้ ซื้อกลับที่พักได้",
            "本地人早市 — 香料、干货、水果，价格地道。",
            "Утренний рынок для местных — специи и сухие продукты.",
          ),
        ),
        priceRange: t(lang, L("~30–300 THB / item", "~30–300 บาท/ชิ้น", "约30–300泰铢/件", "~30–300 бат")),
        href: "https://www.google.com/maps/search/?api=1&query=Naklua+Market+Pattaya+Thailand",
        linkLabel: openInMaps,
        secondaryHref: "/explore/beaches/naklua",
        secondaryLinkLabel: nakluaGuide,
        image: shoppingMarketImages[1],
      },
      {
        id: "floating" as const,
        name: t(lang, L("Pattaya Floating Market", "ตลาดน้ำ 4 ภาค", "芭提雅水上市场", "Плавучий рынок")),
        hours: t(lang, L("Daily · ~09:00–20:00", "ทุกวัน · ~09:00–20:00", "每日 · 约9:00–20:00", "Ежедн. · ~9:00–20:00")),
        mustBuy: t(
          lang,
          L(
            "Regional snacks, handicrafts, photo-friendly river setting",
            "ของกินภูมิภาค หัตถกรรม ถ่ายรูปริมน้ำ",
            "地方小吃、手工艺品",
            "Региональные снеки и ремёсла",
          ),
        ),
        text: t(
          lang,
          L(
            "Four Thai regions in one place — boats, snack stalls, and crafts. Plan half a day; entry fees apply — check the official rate before you go.",
            "4 ภาคใน 1 ที่ — ล่องเรือ ของกิน หัตถกรรม ใช้เวลาครึ่งวัน มีค่าเข้า — เช็คราคาหน้างานก่อนไป",
            "四区合一 — 建议留半天；有门票，出发前查官方票价。",
            "Четыре региона — полдня; есть входной билет.",
          ),
        ),
        priceRange: t(lang, L("~100–800 THB / item", "~100–800 บาท/ชิ้น", "约100–800泰铢/件", "~100–800 бат")),
        href: "https://www.google.com/maps/search/?api=1&query=Pattaya+Floating+Market+Four+Regions+Thailand",
        linkLabel: openInMaps,
        image: shoppingMarketImages[2],
      },
      {
        id: "made-in-thailand" as const,
        name: t(lang, L("Made in Thailand Market", "เมดอินไทยแลนด์", "Made in Thailand", "Made in Thailand")),
        hours: t(
          lang,
          L("Wed–Sun · ~17:00–23:00", "พ–อา · ~17:00–23:00", "周三至日 · 约17:00–23:00", "Ср–Вс · ~17:00–23:00"),
        ),
        mustBuy: t(
          lang,
          L(
            "Handmade bags, art, local design gifts",
            "กระเป๋าทำมือ ศิลปะ ของขวัญดีไซน์",
            "手工包、艺术礼品",
            "Сумки ручной работы, арт",
          ),
        ),
        text: t(
          lang,
          L(
            "More curated than the usual souvenir rows — handmade bags, art prints, and design gifts. Hours can shift by season, so check before you make the trip.",
            "คัดสรรกว่าแผงของฝากทั่วไป — กระเป๋าทำมือ งานศิลป์ ของขวัญดีไซน์ เวลาเปลี่ยนตามฤดู โทร/เช็คก่อนไป",
            "比普通纪念品摊更精选 — 手工包与艺术礼品；营业时间随季节变化，出发前请确认。",
            "Кураторский рынок ремёсел — уточняйте часы работы.",
          ),
        ),
        priceRange: t(lang, L("~150–1,500 THB / item", "~150–1,500 บาท/ชิ้น", "约150–1500泰铢/件", "~150–1500 бат")),
        href: "https://www.google.com/maps/search/?api=1&query=Made+in+Thailand+Market+Pattaya+Thailand",
        linkLabel: openInMaps,
        image: shoppingMarketImages[3],
      },
    ],
  };
}

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
        image: shoppingMarketTipImages[0],
      },
      {
        id: "timing" as const,
        title: t(lang, L("When to go", "ไปกี่โมงดี", "何时去", "Когда идти")),
        paragraphs: [
          t(
            lang,
            L(
              "Morning markets (Naklua) wrap up by ~11:00 — go before 09:00 if you want the fullest stalls. Night markets peak 19:00–21:00 Fri–Sun.",
              "ตลาดเช้า (นาเกลือ) เลิก ~11:00 น. มาก่อน 9 โมงของครบ ตลาดกลางคืนคนเยอะ 19–21 น. ศ–อา",
              "早市约11:00收摊，9:00前到选择最多；周五至周日夜市19–21点最挤。",
              "Утром до 11:00; ночной рынок 19–21 в выходные.",
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
        image: shoppingMarketTipImages[1],
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
        image: shoppingMarketTipImages[2],
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
        image: shoppingMarketTipImages[3],
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
          "Night bazaars, morning wet markets, and floating-market culture — where to bargain, snack, and pick up authentic Thai goods.",
          "ตลาดกลางคืน ตลาดเช้า ตลาดน้ำ — ต่อราคา ของกิน ของไทยแท้",
          "夜市、早市与水上市场文化。",
          "Ночные базары, утренние рынки и плавучие рынки.",
        ),
      ),
      badgeAreas: t(
        lang,
        L("Naklua · Thepprasit · east Pattaya", "นาเกลือ · เทพประสิทธิ์ · ตะวันออก", "Naklua · Thepprasit · 东芭提雅", "Naklua · Thepprasit · восток"),
      ),
    },
    markets: getShoppingMarketsList(lang),
    finds: {
      title: t(lang, L("What to buy", "ซื้ออะไร", "买什么", "Что купить")),
      subtitle: t(
        lang,
        L(
          "Four categories visitors hunt for most often in Pattaya markets.",
          "4 หมวดที่นักท่องเที่ยวหามากที่สุด",
          "游客最常找的四大类。",
          "Четыре популярные категории.",
        ),
      ),
      items: [
        {
          name: t(lang, L("Souvenirs & gifts", "ของฝาก", "纪念品", "Сувениры")),
          nameTh: lang === "en" ? "ของฝาก" : "",
          note: t(
            lang,
            L(
              "Magnets, textiles, and coconut products — compare three stalls before buying.",
              "แม่เหล็ก ผ้า มะพร้าว — เทียบ 3 ร้านก่อนซื้อ",
              "磁贴、织物、椰制品，货比三家。",
              "Сравните три лавки.",
            ),
          ),
        },
        {
          name: t(lang, L("Clothing & bags", "เสื้อผ้า กระเป๋า", "服装与包", "Одежда и сумки")),
          nameTh: lang === "en" ? "เสื้อผ้า กระเป๋า" : "",
          note: t(
            lang,
            L(
              "Sizes run Asian-fit; check stitching on leather goods and negotiate politely.",
              "ไซส์ Asian-fit เช็ครอยเย็ด ต่อราคาสุภาพ",
              "亚洲尺码，皮具看缝线。",
              "Азиатский размер, проверяйте швы.",
            ),
          ),
        },
        {
          name: t(lang, L("Local crafts", "หัตถกรรม", "本地工艺", "Ремёсла")),
          nameTh: lang === "en" ? "หัตถกรรม" : "",
          note: t(
            lang,
            L(
              "Wood carvings and batik — ask if pieces are locally made vs imported.",
              "ไม้แกะสลัก batik — ถามว่าทำในไทยหรือนำเข้า",
              "木雕与蜡染，问是否本地制作。",
              "Спросите: местное или импорт.",
            ),
          ),
        },
        {
          name: t(lang, L("Night-market snacks", "ของกิน", "夜市小吃", "Снеки")),
          nameTh: lang === "en" ? "ของกิน" : "",
          note: t(
            lang,
            L(
              "Eat at busy stalls — see our street-food guide for dish ideas.",
              "กินร้านคนต่อ — ดูคู่มือของกินสำหรับเมนู",
              "选人气摊，详见街头美食指南。",
              "Ешьте там, где очередь; см. стритфуд.",
            ),
          ),
        },
      ],
    },
    tips: getMarketTips(lang),
    alsoExplore: {
      title: c.alsoExplore,
      shoppingMalls: c.shoppingMalls,
      streetFood: c.streetFood,
      mainBeaches: c.mainBeaches,
    },
  };
}
