import type { LanguageCode } from "@/lib/i18n/languages";
import {
  streetFoodMarketImages,
  streetFoodTipImages,
} from "@/lib/design/street-food-market-images";
import { L, t } from "@/lib/i18n/living-helpers";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";

export function getStreetFoodMarkets(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  return {
    title: t(lang, L("Choose your market", "เลือกตลาด", "选择市场", "Выберите рынок")),
    subtitle: t(
      lang,
      L(
        "Four staples for different times of day — price ranges are guides only; pay at the stall in cash unless QR is shown.",
        "4 ตลาดหลักตามช่วงเวลา — ราคาเป็นคร่าวๆ จ่ายที่แผง ส่วนใหญ่เงินสด",
        "四个经典市场 — 价格为参考，多数摊位收现金。",
        "Четыре рынка — цены ориентировочные, чаще наличные.",
      ),
    ),
    hoursLabel: c.hours,
    mustTryLabel: c.mustTry,
    priceRangeLabel: t(lang, L("Typical spend", "ราคาโดยประมาณ", "人均参考", "Примерно")),
    openInMaps: t(lang, L("Open in Google Maps →", "เปิดใน Google Maps →", "在 Google 地图中打开 →", "Google Maps →")),
    items: [
      {
        id: "thepprasit" as const,
        name: t(lang, L("Thepprasit Night Market", "ตลาดเทพประสิทธิ์", "Thepprasit 夜市", "Thepprasit")),
        hours: t(lang, L("Fri–Sun · ~17:00–23:00", "ศ–อา · ~17:00–23:00", "周五至日 · 约17:00–23:00", "Пт–Вс · ~17:00–23:00")),
        mustTry: t(lang, L("Grilled prawns, papaya salad, coconut ice cream", "กุ้งเผา ส้มตำ ไอศกรีมมะพร้าว", "烤虾、青木瓜沙拉", "Креветки, som tam")),
        text: t(
          lang,
          L(
            "Pattaya's most famous night market for street eats and souvenirs. Arrive hungry and walk the full loop before choosing your stall.",
            "ตลาดกลางคืนดังสุด — มาหิวๆ เดินครบวงก่อนเลือกร้าน",
            "最著名的夜市，先逛一圈再选摊。",
            "Самый известный ночной рынок.",
          ),
        ),
        priceRange: t(lang, L("~40–150 THB / dish", "~40–150 บาท/จาน", "约40–150泰铢/道", "~40–150 бат/блюдо")),
        href: "https://www.google.com/maps/search/?api=1&query=Thepprasit+Night+Market+Pattaya+Thailand",
        linkLabel: t(lang, L("Open in Google Maps →", "เปิดใน Google Maps →", "在 Google 地图中打开 →", "Google Maps →")),
        external: true,
        image: streetFoodMarketImages[0],
      },
      {
        id: "naklua" as const,
        name: t(lang, L("Naklua Morning Market", "ตลาดนาเกลือ", "Naklua 早市", "Naklua")),
        hours: t(lang, L("Daily · ~06:00–11:00", "ทุกวัน · ~06:00–11:00", "每日 · 约6:00–11:00", "Ежедн. · ~6:00–11:00")),
        mustTry: t(lang, L("Boat noodles, khao tom, fresh fruit & curry bags", "ก๋วยเตี๋ยวเรือ ข้าวต้ม ผลไม้ แกงถุง", "船面、粥、水果", "Лодочная лапша, khao tom")),
        text: t(
          lang,
          L(
            "Where residents shop before the heat sets in. Best for authentic breakfast, takeaway curry, and market-price seafood.",
            "คนท้องถิ่นช้อปก่อนแดด — อาหารเช้าแท้ แกงถุง ซีฟู้ดราคาตลาด",
            "本地人早市，地道早餐与海鲜。",
            "Утренний рынок для местных.",
          ),
        ),
        priceRange: t(lang, L("~30–80 THB / dish", "~30–80 บาท/จาน", "约30–80泰铢/道", "~30–80 бат/блюдо")),
        href: "/explore/beaches/naklua",
        linkLabel: t(lang, L("Naklua beach guide →", "คู่มือหาดนาเกลือ →", "那库拉海滩指南 →", "Гид Naklua →")),
        external: false,
        image: streetFoodMarketImages[1],
      },
      {
        id: "jomtien" as const,
        name: t(lang, L("Jomtien Seafood Stalls", "ร้านอาหารทะเลจอมเทียน", "Jomtien 海鲜摊", "Jomtien Seafood")),
        hours: t(lang, L("Daily · ~17:00–late", "ทุกวัน · ~17:00–ดึก", "每日 · 约17:00起", "Ежедн. · с ~17:00")),
        mustTry: t(lang, L("Live crab & fish by weight, tom yum, garlic prawns", "ปู/ปลาชั่งกิโล ต้มยำ กุ้งกระเทียม", "活蟹活鱼、冬阴功", "Краб, tom yum")),
        text: t(
          lang,
          L(
            "Pick your seafood from the ice display, agree on price per kilo, then wait beachside while it's grilled or wok-fried.",
            "เลือกจากน้ำแข็ง ตกลงราคา/กิโล รอริมหาด",
            "冰柜选海鲜，按公斤议价。",
            "Выберите морепродукты на льду, цена за кг.",
          ),
        ),
        priceRange: t(lang, L("~300–800 THB / kg seafood", "~300–800 บาท/กก. ซีฟู้ด", "海鲜约300–800泰铢/公斤", "~300–800 бат/кг")),
        href: "/explore/beaches/jomtien",
        linkLabel: t(lang, L("Jomtien beach guide →", "คู่มือหาดจอมเทียน →", "Jomtien 海滩指南 →", "Гид Jomtien →")),
        external: false,
        image: streetFoodMarketImages[2],
      },
      {
        id: "walking-street" as const,
        name: t(lang, L("Walking Street Bites", "ของกิน Walking Street", "Walking Street 小吃", "Walking Street")),
        hours: t(lang, L("Daily · from ~19:00", "ทุกวัน · จาก ~19:00", "每日 · 约19:00起", "Ежедн. · с ~19:00")),
        mustTry: t(lang, L("Satay skewers, roti, late-night noodles", "ไม้เสียบ โรตี ก๋วยเตี๋ยวดึก", "沙爹、roti、深夜面", "Satay, roti")),
        text: t(
          lang,
          L(
            "Quick bites between shows and bars — best for snacks and people-watching rather than a full sit-down meal.",
            "ของกินระหว่างโชว์/บาร์ — ของว่างและดูคนเดิน",
            "演出与酒吧间的小食。",
            "Закуски между шоу и барами.",
          ),
        ),
        priceRange: t(lang, L("~40–120 THB / snack", "~40–120 บาท/ของว่าง", "约40–120泰铢/小食", "~40–120 бат")),
        href: "/explore/beaches/pattaya-beach",
        linkLabel: t(lang, L("Pattaya Beach guide →", "คู่มือหาดพัทยา →", "芭提雅海滩指南 →", "Гид Pattaya Beach →")),
        external: false,
        image: streetFoodMarketImages[3],
      },
    ],
  };
}

export function getStreetFoodTips(lang: LanguageCode) {
  return {
    title: t(lang, L("Eating smart", "กินอย่างฉลาด", "聪明点餐", "Советы")),
    subtitle: t(
      lang,
      L(
        "Practical tips for prices, spice, timing, and seafood — no paid listings on this page.",
        "เคล็ดลับราคา เผ็ด เวลา ซีฟู้ด — ไม่มีรายการโฆษณาในหน้านี้",
        "价格、辣度、时间与海鲜实用建议 — 本页无商业推广。",
        "Советы по ценам, остроте и морепродуктам.",
      ),
    ),
    items: [
      {
        id: "prices" as const,
        title: t(lang, L("Cash & prices", "เงินสด & ราคา", "现金与价格", "Оплата")),
        paragraphs: [
          t(
            lang,
            L(
              "Many stalls are cash-only; small notes (20–100 baht) help at busy counters. Some vendors accept Thai QR — look for a prompt sign, not every stall has one.",
              "หลายร้านเงินสด แบงก์ย่อย 20–100 สะดวก บางร้านรับ QR ไทย — ดูป้าย ไม่ใช่ทุกแผง",
              "多数摊位只收现金；备小面额泰铢。部分支持泰国 QR 码。",
              "Часто только наличные; мелкие купюры удобнее.",
            ),
          ),
          t(
            lang,
            L(
              "Confirm seafood price per kilo before cooking and check your bill before paying. Shared tables are normal — tissue packs and utensils are usually self-service.",
              "ยืนยันราคา/กิโล ก่อนทำ ตรวจบิลก่อนจ่าย โต๊ะร่วมปกติ ทิชชู่/ช้อนส้อม self-service",
              "海鲜烹饪前确认公斤价；付款前核对账单。拼桌常见。",
              "Подтвердите цену за кг; проверьте счёт.",
            ),
          ),
        ],
        image: streetFoodTipImages[0],
      },
      {
        id: "spice" as const,
        title: t(lang, L("Spice & hygiene", "เผ็ด & สุขอนามัย", "辣度与卫生", "Острота")),
        paragraphs: [
          t(
            lang,
            L(
              "Say 'mai ped' (not spicy) or 'ped nit noi' (a little spicy) when ordering som tam, curries, or stir-fries. Staff usually adjust for tourists if you ask upfront.",
              "บอก 'ไม่เผ็ด' หรือ 'เผ็ดนิดหน่อย' ตอนสั่งส้มตำ/แกง/ผัด ถามก่อนได้",
              "点青木瓜沙拉或咖喱时说「ไม่เผ็ด」（不辣）或「เผ็ดนิดหน่อย」（微辣）。",
              "«Не остро» или «чуть-чуть» — скажите при заказе.",
            ),
          ),
          t(
            lang,
            L(
              "Pick busy stalls with high turnover — food sits less time on display. Bottled water is widely available; ice from reputable stalls is generally fine in tourist areas.",
              "เลือกร้านคนต่อ อาหารไม่ค้าง น้ำขวดหาง่าย น้ำแข็งร้านดังโดยทั่วไปโอเค",
              "选翻台快的摊位；瓶装水易买，知名摊位冰块通常没问题。",
              "Выбирайте оживлённые лотки с быстрым оборотом.",
            ),
          ),
        ],
        image: streetFoodTipImages[1],
      },
      {
        id: "timing" as const,
        title: t(lang, L("Peak times", "ช่วงคนเยอะ", "高峰时段", "Часы пик")),
        paragraphs: [
          t(
            lang,
            L(
              "Night markets fill 19:00–21:00 on Fri–Sun. Arrive by 18:00 for easier parking and first pick of grilled seafood, or come after 21:30 when queues shorten.",
              "ตลาดกลางคืน 19:00–21:00 ศ–อา มา 18:00 จอดง่าย หรือหลัง 21:30 คิวสั้น",
              "周五至日 19:00–21:00 最挤；18:00 前到或 21:30 后人少。",
              "Пик 19–21 в выходные; приходите раньше или после 21:30.",
            ),
          ),
          t(
            lang,
            L(
              "Morning markets wind down by ~11:00 — go before 09:00 for the fullest selection of noodles and curry bags. Jomtien seafood stalls ramp up from sunset.",
              "ตลาดเช้าเลิก ~11:00 มาก่อน 09:00 ของครบ ร้านซีฟู้ดจอมเทียนเริ่มเย็น",
              "早市约11:00 收摊，9:00 前选择最多；Jomtien 海鲜傍晚最旺。",
              "Утренние рынки до ~11:00; морепродукты Jomtien — с заката.",
            ),
          ),
        ],
        image: streetFoodTipImages[2],
      },
      {
        id: "seafood" as const,
        title: t(lang, L("Ordering seafood by weight", "สั่งซีฟู้ดแบบชั่งกิโล", "按重量点海鲜", "Морепродукты на вес")),
        paragraphs: [
          t(
            lang,
            L(
              "Point at what you want on the ice bed, then confirm the price per kilo (per kg) before they cook. Crab, prawns, and fish are usually priced separately — ask if sauce or rice is included.",
              "ชี้ที่น้ำแข็ง ยืนยันราคา/กิโล ก่อนทำ ปู/กุ้ง/ปลาแยกราคา ถามว่ารวมน้ำจิ้ม/ข้าวไหม",
              "指冰柜里的海鲜，烹饪前确认每公斤价；蟹虾鱼分开计价。",
              "Укажите на лёд, подтвердите цену за кг до готовки.",
            ),
          ),
          t(
            lang,
            L(
              "A shared platter for two often beats ordering single species — tom yum, garlic prawns, and steamed fish make a balanced set. Eat soon after it's served; beach stalls rarely reheat well.",
              "สั่งชุดแชร์ 2 คนคุ้มกว่า — ต้มยำ กุ้งกระเทียม ปลานึ่ง กินทันหลังเสิร์ฟ",
              "两人拼盘常更划算 — 冬阴功、蒜香虾、蒸鱼；趁热吃。",
              "Набор на двоих выгоднее; ешьте сразу после подачи.",
            ),
          ),
        ],
        image: streetFoodTipImages[3],
      },
    ],
  };
}

export function getStreetFoodPage(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  return {
    breadcrumb: {
      explore: c.explore,
      restaurants: c.restaurants,
      current: t(lang, L("Street Food", "อาหารท้องถิ่น", "街头美食", "Стритфуд")),
    },
    hero: {
      badge: c.restaurants,
      title: t(lang, L("Street Food", "อาหารท้องถิ่น", "街头美食", "Стритфуд")),
      subtitle: t(lang, L("Local eats", "อาหารท้องถิ่น", "本地美食", "Местная еда")),
      body: t(
        lang,
        L(
          "Best local and street food in Pattaya — night markets, morning vendors, and beach-road seafood you can eat like a resident.",
          "อาหารท้องถิ่นและสตรีทฟู้ดพัทยา — ตลาดกลางคืน แผงเช้า ซีฟู้ดริมหาด",
          "芭提雅街头美食与夜市海鲜。",
          "Уличная еда Паттайи — рынки и морепродукты.",
        ),
      ),
      badgePicks: t(lang, L("Local picks & markets", "ของดีท้องถิ่น & ตลาด", "本地精选", "Местные рынки")),
      badgeBudget: t(lang, L("Budget-friendly", "ราคาประหยัด", "实惠", "Бюджетно")),
    },
    markets: getStreetFoodMarkets(lang),
    dishes: {
      title: t(lang, L("Signature dishes", "เมนูแนะนำ", "招牌菜", "Блюда")),
      subtitle: t(
        lang,
        L(
          "What to order when you cannot decide — and how to order in Thai comfort zones.",
          "สั่งอะไรเมื่อตัดสินใจไม่ได้",
          "不知道点什么时看这里。",
          "Что заказать, если не знаете.",
        ),
      ),
      items: [
        {
          name: t(lang, L("Pad Thai", "ผัดไทย", "泰式炒河", "Pad Thai")),
          nameTh: lang === "en" ? "ผัดไทย" : "",
          note: t(
            lang,
            L(
              "Ask for 'mai ped' if you prefer mild; lime and peanuts on the side.",
              "บอก 'ไม่เผ็ด' ถ้าชอบเผ็ดน้อย",
              "可要求不辣。",
              "Скажите «не остро».",
            ),
          ),
        },
        {
          name: t(lang, L("Som Tam", "ส้มตำ", "青木瓜沙拉", "Som Tam")),
          nameTh: lang === "en" ? "ส้มตำ" : "",
          note: t(
            lang,
            L(
              "Papaya salad — specify spice level; great with grilled chicken.",
              "ส้มตำ — บอกระดับเผ็ด คู่ไก่ย่าง",
              "指定辣度，配烤鸡。",
              "Укажите остроту.",
            ),
          ),
        },
        {
          name: t(lang, L("Grilled Seafood", "ซีฟู้ดย่าง", "烤海鲜", "Гриль морепродукты")),
          nameTh: lang === "en" ? "ซีฟู้ดย่าง" : "",
          note: t(
            lang,
            L(
              "Confirm price by weight before cooking; share platters for value.",
              "ยืนยันราคา/กิโล ก่อนทำ แชร์จานประหยัด",
              "烹饪前确认重量价。",
              "Цена за вес до готовки.",
            ),
          ),
        },
        {
          name: t(lang, L("Mango Sticky Rice", "ข้าวเหนียวมะม่วง", "芒果糯米饭", "Манго sticky rice")),
          nameTh: lang === "en" ? "ข้าวเหนียวมะม่วง" : "",
          note: t(
            lang,
            L(
              "Seasonal Apr–Jun; dessert stalls cluster near markets.",
              "ฤดู เม.ย.–มิ.ย. แผงใกล้ตลาด",
              "4–6月当季。",
              "Сезон апр–июнь.",
            ),
          ),
        },
      ],
    },
    tips: getStreetFoodTips(lang),
    alsoExplore: {
      title: c.alsoExplore,
      fineDining: c.fineDining,
      localMarkets: c.localMarkets,
      mainBeaches: c.mainBeaches,
    },
  };
}
