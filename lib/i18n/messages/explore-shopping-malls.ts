import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";

export function getShoppingMallsPage(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  return {
    breadcrumb: { explore: c.explore, current: t(lang, L("Shopping Malls", "ห้างสรรพสินค้า", "购物中心", "ТРЦ")) },
    hero: {
      badge: c.shopping,
      title: t(lang, L("Shopping Malls", "ห้างสรรพสินค้า", "购物中心", "ТРЦ")),
      subtitle: t(lang, L("Shopping malls", "ห้างสรรพสินค้า", "商场", "Торговые центры")),
      body: t(
        lang,
        L(
          "Air-conditioned malls along Pattaya Beach Road and central Pattaya — international brands, cinemas, and food courts for hot afternoons.",
          "ห้างแอร์ Beach Rd และใจกลาง — แบรนด์สากล โรงหนัง ฟู้ดคอร์ท",
          "芭提雅空调商场，品牌、影院与美食广场。",
          "ТРЦ с брендами, кино и фуд-кортами.",
        ),
      ),
      badgeLuxury: t(lang, L("Luxury & mid-range", "หรู & กลาง", "奢华与中端", "Люкс и mid-range")),
      badgeAreas: t(lang, L("Beach Rd · 2nd Rd", "Beach Rd · 2nd Rd", "Beach Rd · 2nd Rd", "Beach Rd · 2nd Rd")),
    },
    carousel: {
      title: t(lang, L("Choose your mall", "เลือกห้าง", "选择商场", "Выберите ТРЦ")),
      description: t(
        lang,
        L(
          "Four staples from the Explore hub — each suits a different budget and vibe, from flagship beachfront to bargain southerly complexes.",
          "4 ห้างหลัก — ตั้งแต่ flagship ริมหาดถึง complex ราคาดีใต้",
          "四个经典商场，从海滨旗舰到南部平价。",
          "Четыре ТРЦ на любой бюджет.",
        ),
      ),
      prev: t(lang, L("Previous malls", "ห้างก่อนหน้า", "上一项", "Назад")),
      next: t(lang, L("Next malls", "ห้างถัดไป", "下一项", "Далее")),
    },
    malls: [
      {
        id: "central-festival",
        name: t(lang, L("Central Festival Pattaya Beach", "เซ็นทรัล เฟสติวัล พัทยา บีช", "Central Festival", "Central Festival")),
        nameTh: "",
        tags: [
          t(lang, L("Oceanfront", "ริมทะเล", "海滨", "У моря")),
          t(lang, L("Luxury brands", "แบรนด์หรู", "奢侈品牌", "Люкс")),
          t(lang, L("Cinema", "โรงหนัง", "影院", "Кино")),
        ],
        hours: t(lang, L("Daily · ~10:00–22:00", "ทุกวัน · ~10:00–22:00", "每日 · 约10:00–22:00", "Ежедн. · ~10:00–22:00")),
        location: t(lang, L("Pattaya Beach Rd (Beach Rd end)", "Beach Rd ปลายทาง", "Pattaya Beach Rd", "Beach Rd")),
        highlights: t(lang, L("Flagship mall with sea views, international fashion, and rooftop dining.", "ห้าง flagship วิวทะเล แฟชั่น rooftop dining", "旗舰商场，海景与屋顶餐饮。", "Флагман с видом на море.")),
        excerpt: t(
          lang,
          L(
            "Pattaya's largest beach-road mall — air-conditioned comfort, brand-name stores, and easy access from Walking Street and the bay.",
            "ห้างใหญ่สุดริม Beach Rd — แอร์ แบรนด์ ใกล้ Walking Street",
            "最大海滨路商场。",
            "Крупнейший ТРЦ на Beach Rd.",
          ),
        ),
      },
      {
        id: "terminal-21",
        name: t(lang, L("Terminal 21 Pattaya", "เทอร์มินอล 21 พัทยา", "Terminal 21", "Terminal 21")),
        nameTh: "",
        tags: [
          t(lang, L("Themed floors", "ธีมชั้น", "主题楼层", "Тематические этажи")),
          t(lang, L("Food court", "ฟู้ดคอร์ท", "美食广场", "Фуд-корт")),
          t(lang, L("Central", "ใจกลาง", "中心", "Центр")),
        ],
        hours: t(lang, L("Daily · ~10:00–22:00", "ทุกวัน · ~10:00–22:00", "每日 · 约10:00–22:00", "Ежедн. · ~10:00–22:00")),
        location: t(lang, L("Pattaya 2 Rd, near Bali Hai Pier", "Pattaya 2 Rd ใกล้แหลมบาลีฮาย", "Pattaya 2 Rd", "Pattaya 2 Rd")),
        highlights: t(lang, L("City-themed levels, wide food court, and mid-range fashion under one roof.", "ธีมเมือง ฟู้ดคอร์ทกว้าง แฟชั่นกลาง", "城市主题、美食广场。", "Тематические этажи и фуд-корт.")),
        excerpt: t(
          lang,
          L(
            "Distinct airport-terminal concept with photo-friendly décor — popular for families and rainy-day shopping.",
            "คอนเซpt สนามบิน ถ่ายรูปสวย ครอบครัว วันฝน",
            "机场主题，适合家庭与雨天。",
            "Аэропорт-тема, популярен с семьями.",
          ),
        ),
      },
      {
        id: "royal-garden",
        name: t(lang, L("Royal Garden Plaza", "รอยัล การ์เด้น พลาซ่า", "Royal Garden Plaza", "Royal Garden")),
        nameTh: "",
        tags: [
          t(lang, L("Ripley's", "Ripley's", "Ripley's", "Ripley's")),
          t(lang, L("Dining", "อาหาร", "餐饮", "Еда")),
          t(lang, L("South Pattaya", "ใต้พัทยา", "南芭提雅", "Юг")),
        ],
        hours: t(lang, L("Daily · ~11:00–22:00", "ทุกวัน · ~11:00–22:00", "每日 · 约11:00–22:00", "Ежедн. · ~11:00–22:00")),
        location: t(lang, L("2nd Rd, south Pattaya", "2nd Rd ใต้พัทยา", "2nd Rd 南芭提雅", "2nd Rd")),
        highlights: t(lang, L("Ripley's Believe It or Not!, restaurants, and souvenir-friendly mid-size mall.", "Ripley's ร้านอาหาร ของฝาก", "Ripley's 与纪念品。", "Ripley's и сувениры.")),
        excerpt: t(
          lang,
          L(
            "Compact mall with entertainment attractions — handy base before an evening on Walking Street.",
            "ห้างกะทัดรัด มีattraction — ก่อน Walking Street",
            "紧凑商场，Walking Street 前中转。",
            "Компактный ТРЦ перед Walking Street.",
          ),
        ),
      },
      {
        id: "harbor-mall",
        name: t(lang, L("Harbor Mall & Mike Shopping Mall", "ฮาร์เบอร์ / ไมค์ ช็อปปิ้ง", "Harbor & Mike", "Harbor & Mike")),
        nameTh: "",
        tags: [
          t(lang, L("Budget", "ราคาดี", "平价", "Бюджет")),
          t(lang, L("Souvenirs", "ของฝาก", "纪念品", "Сувениры")),
          t(lang, L("South Pattaya", "ใต้พัทยา", "南芭提雅", "Юг")),
        ],
        hours: t(lang, L("Daily · ~10:00–21:00", "ทุกวัน · ~10:00–21:00", "每日 · 约10:00–21:00", "Ежедн. · ~10:00–21:00")),
        location: t(lang, L("South Pattaya, near Bali Hai", "ใต้พัทยา ใกล้แหลมบาลีฮาย", "南芭提雅 Bali Hai", "Юг, Bali Hai")),
        highlights: t(lang, L("Value fashion, luggage, and tourist souvenirs at lower price points.", "แฟชั่น กระเป๋า ของฝาก ราคาถูก", "平价时尚与纪念品。", "Недорогая мода и сувениры.")),
        excerpt: t(
          lang,
          L(
            "Pair these adjacent complexes for bargain hunting — expect negotiation at smaller independent stalls.",
            "คู่ complex ติดกัน ต่อราคาได้ที่แผงเล็ก",
            "相邻综合体，小摊可议价。",
            "Два комплекса рядом — торгуйтесь.",
          ),
        ),
      },
    ],
    categories: {
      title: t(lang, L("What to shop", "ซื้ออะไร", "买什么", "Что купить")),
      subtitle: t(lang, L("Categories you will find across Pattaya's larger malls.", "หมวดในห้างใหญ่พัทยา", "大型商场常见品类。", "Категории в крупных ТРЦ.")),
      items: [
        {
          name: t(lang, L("Fashion & lifestyle", "แฟชั่น", "时尚与生活", "Мода")),
          nameTh: lang === "en" ? "แฟชั่น" : "",
          note: t(lang, L("International chains mix with local boutiques; sales peak holiday weekends.", "แบรนด์สากล+บูติก ลดราคาวันหยุด", "国际品牌与本地精品。", "Скидки в праздники.")),
        },
        {
          name: t(lang, L("Electronics", "อิเล็กทรอนิกส์", "电子产品", "Электроника")),
          nameTh: lang === "en" ? "อิเล็กทรอนิกส์" : "",
          note: t(lang, L("Compare prices online before big purchases; ask about Thai warranty.", "เทียบราคาออนไลน์ ถาม warranty ไทย", "大件先比价，问泰版保修。", "Сравните цены онлайн.")),
        },
        {
          name: t(lang, L("Cinema & entertainment", "โรงภาพยนตร์", "影院娱乐", "Кино")),
          nameTh: lang === "en" ? "โรงภาพยนตร์" : "",
          note: t(lang, L("Major malls run English-subtitled films; book ahead on Friday nights.", "หนังซับอังกฤษ จองศุกร์ค่ำ", "主要商场有英文字幕电影。", "Бронируйте в пятницу.")),
        },
        {
          name: t(lang, L("Dining courts", "ฟู้ดคอร์ท", "美食广场", "Фуд-корт")),
          nameTh: lang === "en" ? "ฟู้ดคอร์ท" : "",
          note: t(lang, L("Food courts are card/cash friendly — load a stored-value card where offered.", "ฟู้ดคอร์ท บัตร/เงินสด โหลดบัตรมูลค่า", "美食广场支持卡/现金。", "Пополняйте карту фуд-корта.")),
        },
      ],
    },
    tips: {
      title: t(lang, L("Mall tips", "เคล็ดลับห้าง", "购物贴士", "Советы")),
      subtitle: t(lang, L("Practical notes for smoother shopping days.", "ให้ช้อปสบาย", "让购物更顺畅。", "Для комфортного шопинга.")),
      items: [
        {
          title: t(lang, L("Parking & taxis", "ที่จอด & แท็กซี่", "停车与出租", "Парковка")),
          text: t(lang, L("Beach-road malls fill at sunset. Use mall parking or drop-off; Grab works well after 22:00.", "ห้าง Beach Rd เต็มยามเย็น จอดห้าง Grab หลัง 22:00", "日落时 Beach Rd 商场较满。", "Парковка ТРЦ, Grab после 22:00.")),
        },
        {
          title: t(lang, L("Best times", "ช่วงเวลาดี", "最佳时段", "Время")),
          text: t(lang, L("Weekday mornings are quietest. Weekends 17:00–20:00 are busiest near cinema and dining.", "เช้าวันธรรมดาเงียบ สุดสัปดาห์ 17–20 คนเยอะ", "工作日上午最安静。", "Будни утром — тихо.")),
        },
        {
          title: t(lang, L("Tax & receipts", "ภาษี & ใบเสร็จ", "退税与收据", "Налог")),
          text: t(lang, L("Tourist VAT refund applies at participating stores — keep receipts and passport handy.", "VAT refund เก็บใบเสร็จ+พาสปอร์ต", "参与店铺可退税。", "VAT refund — сохраняйте чеки.")),
        },
        {
          title: t(lang, L("Air-con breaks", "พักแอร์", "空调休息", "Кондиционер")),
          text: t(lang, L("Malls are the midday escape from heat — plan beach time early, shopping after lunch.", "ห้างพักกลางวัน หาดเช้า ช้อปหลังมื้อเที่ยง", "中午逛商场避暑。", "ТРЦ — спасение от жары.")),
        },
      ],
    },
    alsoExplore: {
      title: c.alsoExplore,
      localMarkets: c.localMarkets,
      streetFood: c.streetFood,
      cafesLink: c.cafesLink,
    },
  };
}
