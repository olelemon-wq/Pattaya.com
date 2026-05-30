import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";

export function getStreetFoodPage(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  return {
    breadcrumb: { explore: c.explore, restaurants: c.restaurants, current: t(lang, L("Street Food", "อาหารท้องถิ่น", "街头美食", "Стритфуд")) },
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
    carousel: {
      title: t(lang, L("Choose your market", "เลือกตลาด", "选择市场", "Выберите рынок")),
      description: t(
        lang,
        L(
          "Start with these four staples — each suits a different time of day and mood, from morning noodles to midnight skewers.",
          "4 ตลาดหลัก — ตั้งแต่ก๋วยเตี๋ยวเช้าถึงไม้เสียบยามดึก",
          "四个经典市场，从早到晚。",
          "Четыре рынка на любое время.",
        ),
      ),
      prev: t(lang, L("Previous markets", "ตลาดก่อนหน้า", "上一项", "Назад")),
      next: t(lang, L("Next markets", "ตลาดถัดไป", "下一项", "Далее")),
    },
    markets: [
      {
        id: "thepprasit",
        name: t(lang, L("Thepprasit Night Market", "ตลาดเทพประสิทธิ์", "Thepprasit 夜市", "Thepprasit")),
        nameTh: "",
        tags: [
          t(lang, L("Night market", "ตลาดกลางคืน", "夜市", "Ночной рынок")),
          t(lang, L("Seafood", "ซีฟู้ด", "海鲜", "Морепродукты")),
          t(lang, L("Bargains", "ราคาดี", "划算", "Выгодно")),
        ],
        hours: t(lang, L("Fri–Sun · ~17:00–23:00", "ศ–อา · ~17:00–23:00", "周五至日 · 约17:00–23:00", "Пт–Вс · ~17:00–23:00")),
        location: t(lang, L("Thepprasit Rd, south Pattaya", "ถ.เทพประสิทธิ์ ใต้พัทยา", "Thepprasit 路", "Thepprasit Rd")),
        mustTry: t(lang, L("Grilled prawns, papaya salad, coconut ice cream", "กุ้งเผา ส้มตำ ไอศกรีมมะพร้าว", "烤虾、青木瓜沙拉", "Креветки, som tam")),
        excerpt: t(
          lang,
          L(
            "Pattaya's most famous night market for street eats and souvenirs. Arrive hungry and walk the full loop before choosing your stall.",
            "ตลาดกลางคืนดังสุด — มาหิวๆ เดนครบวงก่อนเลือกร้าน",
            "最著名的夜市，先逛一圈再选摊。",
            "Самый известный ночной рынок.",
          ),
        ),
      },
      {
        id: "naklua",
        name: t(lang, L("Naklua Morning Market", "ตลาดนาเกลือ", "Naklua 早市", "Naklua")),
        nameTh: "",
        tags: [
          t(lang, L("Morning", "เช้า", "早晨", "Утро")),
          t(lang, L("Local", "ท้องถิ่น", "本地", "Местное")),
          t(lang, L("Fresh", "สด", "新鲜", "Свежее")),
        ],
        hours: t(lang, L("Daily · ~06:00–11:00", "ทุกวัน · ~06:00–11:00", "每日 · 约6:00–11:00", "Ежедн. · ~6:00–11:00")),
        location: t(lang, L("Naklua, north Pattaya", "นาเกลือ เหนือพัทยา", "北芭提雅 Naklua", "Naklua")),
        mustTry: t(lang, L("Boat noodles, khao tom, fresh fruit & curry bags", "ก๋วยเตี๋ยวเรือ ข้าวต้ม ผลไม้ แกงถุง", "船面、粥、水果", "Лодочная лапша, khao tom")),
        excerpt: t(
          lang,
          L(
            "Where residents shop before the heat sets in. Best for authentic breakfast, takeaway curry, and market-price seafood.",
            "คนท้องถิ่นช้อปก่อนแดด — อาหารเช้าแท้ แกงถุง ซีฟู้ดราคาตลาด",
            "本地人早市，地道早餐与海鲜。",
            "Утренний рынок для местных.",
          ),
        ),
      },
      {
        id: "jomtien",
        name: t(lang, L("Jomtien Seafood Stalls", "ร้านอาหารทะเลจอมเทียน", "Jomtien 海鲜摊", "Jomtien Seafood")),
        nameTh: "",
        tags: [
          t(lang, L("Seafood", "ซีฟู้ด", "海鲜", "Морепродукты")),
          t(lang, L("Beach road", "ริมหาด", "海滨路", "У моря")),
          t(lang, L("Evening", "เย็น", "傍晚", "Вечер")),
        ],
        hours: t(lang, L("Daily · ~17:00–late", "ทุกวัน · ~17:00–ดึก", "每日 · 约17:00起", "Ежедн. · с ~17:00")),
        location: t(lang, L("Jomtien Beach Rd", "ถ.จอมเทียน", "Jomtien 海滩路", "Jomtien")),
        mustTry: t(lang, L("Live crab & fish by weight, tom yum, garlic prawns", "ปู/ปลาชั่งกิโล ต้มยำ กุ้งกระเทียม", "活蟹活鱼、冬阴功", "Краб, tom yum")),
        excerpt: t(
          lang,
          L(
            "Pick your seafood from the ice display, agree on price per kilo, then wait beachside while it's grilled or wok-fried.",
            "เลือกจากน้ำแข็ง ตกลงราคา/กilo รอริมหาด",
            "冰柜选海鲜，按公斤议价。",
            "Выберите морепродукты на льду, цена за кг.",
          ),
        ),
      },
      {
        id: "walking-street",
        name: t(lang, L("Walking Street Bites", "ของกิน Walking Street", "Walking Street 小吃", "Walking Street")),
        nameTh: "",
        tags: [
          t(lang, L("Late night", "ดึก", "深夜", "Поздно")),
          t(lang, L("Snacks", "ของว่าง", "小吃", "Закуски")),
          t(lang, L("Tourist hub", "ยอดนิยม", "游客区", "Туристический")),
        ],
        hours: t(lang, L("Daily · from ~19:00", "ทุกวัน · จาก ~19:00", "每日 · 约19:00起", "Ежедн. · с ~19:00")),
        location: t(lang, L("Walking Street, south Pattaya", "Walking Street ใต้พัทยา", "Walking Street", "Walking Street")),
        mustTry: t(lang, L("Satay skewers, roti, late-night noodles", "ไม้เสียบ โรตี ก๋วยเตี๋ยยดึก", "沙爹、 roti、深夜面", "Satay, roti")),
        excerpt: t(
          lang,
          L(
            "Quick bites between shows and bars — best for snacks and people-watching rather than a full sit-down meal.",
            "ของกินระหว่างโชว์/บาร์ — ของว่างและ people-watching",
            "演出与酒吧间的小食。",
            "Закуски между шоу и барами.",
          ),
        ),
      },
    ],
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
          note: t(lang, L("Ask for 'mai ped' if you prefer mild; lime and peanuts on the side.", "บอก 'ไม่เผ็ด' ถ้าชอบเผ็ดน้อย", "可要求不辣。", "Скажите «не остро».")),
        },
        {
          name: t(lang, L("Som Tam", "ส้มตำ", "青木瓜沙拉", "Som Tam")),
          nameTh: lang === "en" ? "ส้มตำ" : "",
          note: t(lang, L("Papaya salad — specify spice level; great with grilled chicken.", "ส้มตำ — บอกระดับเผ็ด คู่ไก่ย่าง", "指定辣度，配烤鸡。", "Укажите остроту.")),
        },
        {
          name: t(lang, L("Grilled Seafood", "ซีฟู้ดย่าง", "烤海鲜", "Гриль морепродукты")),
          nameTh: lang === "en" ? "ซีฟู้ดย่าง" : "",
          note: t(lang, L("Confirm price by weight before cooking; share platters for value.", "ยืนยันราคา/กilo ก่อนทำ แชร์จานประหยัด", "烹饪前确认重量价。", "Цена за вес до готовки.")),
        },
        {
          name: t(lang, L("Mango Sticky Rice", "ข้าวเหนียวมะม่วง", "芒果糯米饭", "Манго sticky rice")),
          nameTh: lang === "en" ? "ข้าวเหนียวมะม่วง" : "",
          note: t(lang, L("Seasonal Apr–Jun; dessert stalls cluster near markets.", "ฤดู เม.ย.–มิ.ย. แผงใกล้ตลาด", "4–6月当季。", "Сезон апр–июнь.")),
        },
      ],
    },
    tips: {
      title: t(lang, L("Eating smart", "กินอย่างฉลาด", "聪明点餐", "Советы")),
      items: [
        {
          title: t(lang, L("Peak times", "ช่วงคนเยอะ", "高峰时段", "Часы пик")),
          text: t(lang, L("Markets fill 19:00–21:00. Go earlier for shorter queues or after 21:30 for calmer seating.", "19:00–21:00 คนเยอะ มาก่อนหรือหลัง 21:30", "19–21点最挤。", "Пик 19–21.")),
        },
        {
          title: t(lang, L("Cash & prices", "เงินสด & ราคา", "现金与价格", "Оплата")),
          text: t(lang, L("Many stalls are cash-only. Confirm seafood price per kg and check your bill before paying.", "หลายร้านเงินสด ยืนยันราคา/กilo", "多数只收现金。", "Часто только наличные.")),
        },
        {
          title: t(lang, L("Spice & hygiene", "เผ็ด & สุขอนามัย", "辣度与卫生", "Острота")),
          text: t(lang, L("Say 'mai ped' (not spicy) or 'ped nit noi' (a little). Pick busy stalls with high turnover.", "บอก 'ไม่เผ็ด' หรือ 'เผ็ดนิดหน่อย' เลือกร้านคนต่อ", "选翻台快的摊位。", "«Не остро» или «чуть-чуть».")),
        },
        {
          title: t(lang, L("Seating", "ที่นั่ง", "座位", "Места")),
          text: t(lang, L("Shared tables are normal. Tissue packs and utensil cups are usually self-service.", "โต๊ะร่วมปกติ ทิชชู่/ช้อนส้อม self-service", "拼桌常见。", "Общие столы — норма.")),
        },
      ],
    },
    alsoExplore: {
      title: c.alsoExplore,
      fineDining: c.fineDining,
      localMarkets: c.localMarkets,
      mainBeaches: c.mainBeaches,
    },
  };
}
