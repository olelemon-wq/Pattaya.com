import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";

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
    carousel: {
      title: t(lang, L("Choose your market", "เลือกตลาด", "选择市场", "Выберите рынок")),
      description: t(
        lang,
        L(
          "From weekend night bazaars to morning local runs — match the market to your schedule and shopping list.",
          "จากตลาดกลางคืนสุดสัปดาห์ถึงตลาดเช้า — จับคู่กับตารางและลิสต์ช้อป",
          "从周末夜市到早市，按行程选择。",
          "От ночных базаров до утренних рынков.",
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
          t(lang, L("Food & fashion", "อาหาร & แฟชั่น", "美食与时尚", "Еда и мода")),
          t(lang, L("Weekend", "สุดสัปดาห์", "周末", "Выходные")),
        ],
        hours: t(lang, L("Fri–Sun · ~17:00–23:00", "ศ–อา · ~17:00–23:00", "周五至日 · 约17:00–23:00", "Пт–Вс · ~17:00–23:00")),
        location: t(lang, L("Thepprasit Rd, south Pattaya", "ถ.เทพประสิทธิ์ ใต้พัทยา", "Thepprasit 路", "Thepprasit Rd")),
        mustBuy: t(
          lang,
          L(
            "Street snacks, printed tees, souvenirs, phone accessories",
            "ของกิน เสื้อยืด ของฝาก อุปกรณ์มือถือ",
            "街头小吃、T恤、纪念品",
            "Снеки, футболки, сувениры",
          ),
        ),
        excerpt: t(
          lang,
          L(
            "Pattaya's best-known night market — eat first, then browse stalls for bargains and gifts.",
            "ตลาดกลางคืนดังสุด — กินก่อน แล้วเดินช้อปของฝาก",
            "芭提雅最知名夜市，先吃再逛。",
            "Самый известный ночной рынок — сначала еда, потом шопинг.",
          ),
        ),
      },
      {
        id: "naklua",
        name: t(lang, L("Naklua Market", "ตลาดนาเกลือ", "Naklua 市场", "Naklua")),
        nameTh: "",
        tags: [
          t(lang, L("Morning", "เช้า", "早市", "Утро")),
          t(lang, L("Local", "ท้องถิ่น", "本地", "Местное")),
          t(lang, L("Fresh produce", "ของสด", "新鲜食材", "Свежие продукты")),
        ],
        hours: t(lang, L("Daily · ~06:00–11:00", "ทุกวัน · ~06:00–11:00", "每日 · 约6:00–11:00", "Ежедн. · ~6:00–11:00")),
        location: t(lang, L("Naklua, north Pattaya", "นาเกลือ เหนือพัทยา", "北芭提雅 Naklua", "Naklua")),
        mustBuy: t(
          lang,
          L(
            "Spices, dried seafood, fruit, household goods",
            "เครื่องเทศ อาหารทะเลแห้ง ผลไม้ ของใช้",
            "香料、干货、水果",
            "Специи, сухие морепродукты, фрукты",
          ),
        ),
        excerpt: t(
          lang,
          L(
            "Where residents shop before the heat — authentic prices and takeaway ingredients for self-catering.",
            "คนท้องถิ่นช้อปก่อนแดด — ราคาแท้ วัตถุดิบกลับบ้าน",
            "居民早市，价格地道。",
            "Где местные покупают до жары.",
          ),
        ),
      },
      {
        id: "floating",
        name: t(lang, L("Pattaya Floating Market", "ตลาดน้ำ 4 ภาค", "芭提雅水上市场", "Плавучий рынок")),
        nameTh: "",
        tags: [
          t(lang, L("Cultural", "วัฒนธรรม", "文化", "Культура")),
          t(lang, L("Boat rides", "ล่องเรือ", "游船", "Лодки")),
          t(lang, L("Souvenirs", "ของฝาก", "纪念品", "Сувениры")),
        ],
        hours: t(lang, L("Daily · ~09:00–20:00", "ทุกวัน · ~09:00–20:00", "每日 · 约9:00–20:00", "Ежедн. · ~9:00–20:00")),
        location: t(lang, L("Sukhumvit Rd (east Pattaya)", "ถ.สukhumvit ตะวันออก", "Sukhumvit 路东", "Sukhumvit Rd")),
        mustBuy: t(
          lang,
          L(
            "Regional snacks, handicrafts, photo-friendly river setting",
            "ของกินภูมิภาค หัตถกรรม ถ่ายรูปริมน้ำ",
            "地方小吃、手工艺品",
            "Региональные снеки и ремёсла",
          ),
        ),
        excerpt: t(
          lang,
          L(
            "Themed zones representing four regions — plan half a day for boats, shows, and snack sampling.",
            "4 ภาคใน 1 ที่ — ใช้ครึ่งวัน ล่องเรือ โชว์ ชิมของ",
            "四区主题，建议半天。",
            "Четыре региона — планируйте полдня.",
          ),
        ),
      },
      {
        id: "made-in-thailand",
        name: t(lang, L("Made in Thailand Market", "เมดอินไทยแลนด์", "Made in Thailand", "Made in Thailand")),
        nameTh: "",
        tags: [
          t(lang, L("Evening", "เย็น", "傍晚", "Вечер")),
          t(lang, L("Handicrafts", "หัตถกรรม", "手工艺", "Ремёсла")),
          t(lang, L("Tourist-friendly", "นักท่องเที่ยว", "游客友好", "Для туристов")),
        ],
        hours: t(
          lang,
          L("Wed–Sun · ~17:00–23:00", "พ–อา · ~17:00–23:00", "周三至日 · 约17:00–23:00", "Ср–Вс · ~17:00–23:00"),
        ),
        location: t(
          lang,
          L("Thepprasit area (check seasonal hours)", "แถวเทพประสิทธิ์ (เช็คเวลาตามฤดู)", "Thepprasit 区", "Thepprasit"),
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
        excerpt: t(
          lang,
          L(
            "Craft-forward market with a more curated feel than generic souvenir rows — good for unique gifts.",
            "ตลาดครaft คัดสรร — ของฝากไม่ซ้ำใคร",
            "精选手工艺，独特礼物。",
            "Кураторский рынок ремёсел.",
          ),
        ),
      },
    ],
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
              "Eat at busy stalls; pair shopping with our street-food guide for dish ideas.",
              "กินร้านคนต่อ ดู street-food guide สำหรับเมนู",
              "选人气摊，配合街头美食指南。",
              "Ешьте там, где очередь.",
            ),
          ),
        },
      ],
    },
    tips: {
      title: t(lang, L("Market tips", "เคล็ดลับตลาด", "市场贴士", "Советы")),
      subtitle: t(
        lang,
        L("Habits that save money and hassle while you browse.", "ประหยัดและสบายขณะเดินชม", "逛市省钱省心。", "Экономия и комфорт."),
      ),
      items: [
        {
          title: t(lang, L("Bargaining", "ต่อราคา", "议价", "Торг")),
          text: t(
            lang,
            L(
              "Smile and ask 'lod dai mai?' at independent stalls — fixed prices are common in mall kiosks only.",
              "ยิ้มถาม 'ลดได้ไหม' ที่แผงอิสระ — ห้างราคาตายตัว",
              "独立摊位可微笑议价。",
              "Спросите «lod dai mai?» на лавках.",
            ),
          ),
        },
        {
          title: t(lang, L("Timing", "เวลา", "时间", "Время")),
          text: t(
            lang,
            L(
              "Night markets peak 19:00–21:00. Arrive by 17:30 for parking and the fullest food selection.",
              "ตลาดกลางคืน 19–21 คนเยอะ มา 17:30 จอดง่าย อาหารครบ",
              "夜市19–21点最挤，17:30前到。",
              "Пик 19–21, приходите к 17:30.",
            ),
          ),
        },
        {
          title: t(lang, L("Cash & bags", "เงินสด & ถุง", "现金与袋子", "Наличные")),
          text: t(
            lang,
            L(
              "Carry smaller notes; bring a foldable bag — many vendors add no extra packaging.",
              "แบ่งเงินย่อย เอาถุงพับ — หลายร้านไม่ใส่ถุง",
              "备零钱与折叠袋。",
              "Мелкие купюры и складная сумка.",
            ),
          ),
        },
        {
          title: t(lang, L("Quality checks", "เช็คคุณภาพ", "质量检查", "Качество")),
          text: t(
            lang,
            L(
              "Test electronics briefly, inspect seams on apparel, and keep receipts for higher-ticket items.",
              "ลองอิเล็กฯ สั้นๆ เช็ครอยเย็ด เก็บใบเสร็จของแพง",
              "试电子产品，查缝线，留收据。",
              "Проверяйте электронику и швы.",
            ),
          ),
        },
      ],
    },
    alsoExplore: {
      title: c.alsoExplore,
      shoppingMalls: c.shoppingMalls,
      streetFood: c.streetFood,
      mainBeaches: c.mainBeaches,
    },
  };
}
