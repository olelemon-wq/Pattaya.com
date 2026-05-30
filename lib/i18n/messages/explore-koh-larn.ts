import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";

export function getKohLarnPage(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  return {
    breadcrumb: {
      explore: c.explore,
      islands: c.islands,
      current: t(lang, L("Koh Larn", "เกาะล้าน", "格兰岛", "Ко Лан")),
    },
    hero: {
      badge: c.islands,
      title: t(lang, L("Koh Larn", "เกาะล้าน", "格兰岛", "Ко Лан")),
      subtitle: t(lang, L("Island day trips", "ทริปเกาะ", "岛上一日游", "Островной день")),
      body: t(
        lang,
        L(
          "Island day trips and activities at Koh Larn — crystal water, white sand, and exclusive water sports near Bangkok.",
          "ทริปเกาะล้าน — น้ำใส หาดทรายขาว กิจกรรมทางน้ำใกล้กรung",
          "格兰岛一日游：清澈海水、白沙与水上活动。",
          "Ко Лан — прозрачная вода, белый песок, водные активности.",
        ),
      ),
      badgeBeaches: t(lang, L("8 Main Beaches", "8 หาดหลัก", "8 片主海滩", "8 пляжей")),
      badgeFerry: t(lang, L("30 mins from Pattaya", "30 นาทีจากพัทยา", "距芭提雅30分钟", "30 мин от Паттайи")),
      badgeTop: t(lang, L("Top Destination", "จุดหมายยอดนิยม", "热门目的地", "Топ направление")),
    },
    booking: {
      ariaLabel: t(lang, L("Quick tour search", "ค้นหาทัวร์ด่วน", "快速搜索行程", "Быстрый поиск")),
      title: t(lang, L("Quick Tour Search", "ค้นหาทัวร์ด่วน", "快速搜索行程", "Быстрый поиск")),
      activityLabel: t(lang, L("Choose activity type", "เลือกประเภทกิจกรรม", "选择活动类型", "Тип активности")),
      dateLabel: t(lang, L("Choose date", "เลือกวันที่", "选择日期", "Дата")),
      submit: t(lang, L("Search tours", "ค้นหาทัวร์", "搜索行程", "Искать")),
      activities: [
        { value: "snorkeling", label: t(lang, L("Snorkeling", "ดำน้ำ", "浮潜", "Снорклинг")) },
        { value: "jetski", label: t(lang, L("Jet ski", "เจ็ทสกี", "摩托艇", "Jet ski")) },
        { value: "rental", label: t(lang, L("Vehicle rental", "รถเช่า", "租车", "Аренда")) },
        { value: "island-tour", label: t(lang, L("Island tour", "ทัวร์รอบเกาะ", "环岛游", "Тур по острову")) },
      ],
    },
    about: {
      title: t(lang, L("About Koh Larn in 1 minute", "รู้จักเกาะล้านใน 1 นาที", "一分钟了解格兰岛", "Ко Лан за минуту")),
      body: t(
        lang,
        L(
          "Koh Larn sits just kilometres off Pattaya's coast — a top day-trip for clear water, white sand, and water sports from snorkeling to island tours. Speedboats leave from Bali Hai Pier; ideal for families, friends, and Bangkok weekenders.",
          "เกาะล้านห่างชายฝั่งพัทยาไม่กี่กม. — ทริปวันเดียวยอดนิยม น้ำใส หาดทรายขาว ดำน้ำ เจ็ทสกี ทัวร์รอบเกาะ เรือจากแหลมบาลีฮาย เหมาะครอบครัว เพื่อน คนกรung",
          "格兰岛距芭提雅海岸仅数公里，是浮潜、摩托艇与环岛游的热门一日游，从 Bali Hai 码头出发。",
          "Ко Лан в нескольких км от Паттайи — дневная поездка с Bali Hai Pier.",
        ),
      ),
    },
    keyInfo: {
      title: t(lang, L("Key info", "ข้อมูลสำคัญ", "关键信息", "Важно")),
      transport: {
        label: t(lang, L("Getting there", "การเดินทาง", "交通", "Как добраться")),
        text: t(
          lang,
          L(
            "Speedboat 15 min / larger ferry 30–45 min from Bali Hai Pier",
            "เรือสปีดโบ๊ท 15 นาที / เรือใหญ่ 30–45 นาที จากแหลมบาลีฮาย",
            "快艇15分钟 / 大船30–45分钟，Bali Hai 码头",
            "Катер 15 мин / паром 30–45 мин от Bali Hai",
          ),
        ),
      },
      season: {
        label: t(lang, L("Best season", "ช่วงเวลาแนะนำ", "最佳季节", "Сезон")),
        text: t(
          lang,
          L("Nov–Apr (calmer seas, clearest water)", "พ.ย.–เม.ย. (คลื่นลมสงบ น้ำใสที่สุด)", "11–4月（海况较稳）", "Ноя–апр — спокойнее море"),
        ),
      },
      islandTransport: {
        label: t(lang, L("On-island transport", "ยานพาหนะบนเกาะ", "岛上交通", "На острове")),
        text: t(
          lang,
          L("Motorbike rental or songthaew loops", "เช่ามอเตอร์ไซค์ หรือ สองแถวประจำทาง", "租摩托车或双条车环线", "Аренда байка или songthaew"),
        ),
      },
    },
    tours: {
      title: t(lang, L("Highlighted tours & activities", "ทัวร์ & กิจกรรมแนะนำ", "精选行程与活动", "Туры и активности")),
      subtitle: t(
        lang,
        L("Book online instantly", "จองออนไลน์ได้ทันที", "可即时在线预订", "Бронируйте онлайн"),
      ),
      viewAll: t(lang, L("View all tours →", "ดูทัวร์ทั้งหมด →", "查看全部行程 →", "Все туры →")),
      priceFrom: t(lang, L("From THB {price} / person", "เริ่มต้น THB {price} / ท่าน", "起 {price} 泰铢/人", "От {price} бат/чел.")),
      bestSeller: t(lang, L("Best Seller", "ขายดี", "畅销", "Хит")),
      items: [
        {
          title: t(
            lang,
            L(
              "Snorkeling + Bali Hai Transfer",
              "ทัวร์ดำน้ำตื้นเกาะล้าน + รถรับส่งแหลมบาลีฮาย",
              "浮潜 + Bali Hai 接送",
              "Снорклинг + трансфер Bali Hai",
            ),
          ),
          rating: 4.8,
          price: 890,
          badge: t(lang, L("Best Seller", "ขายดี", "畅销", "Хит")),
          href: "/explore",
        },
        {
          title: t(
            lang,
            L(
              "Half-Day Island Tour",
              "ทัวร์รอบเกาะล้านครึ่งวัน",
              "格兰岛半日环岛",
              "Полдня вокруг острова",
            ),
          ),
          rating: 4.7,
          price: 650,
          href: "/explore",
        },
        {
          title: t(
            lang,
            L(
              "Jet Ski & Water Sports at Ta Waen Beach",
              "เจ็ทสกี & กิจกรรมทางน้ำหาดตาแหวน",
              "塔湾海滩摩托艇与水上运动",
              "Jet ski на Ta Waen",
            ),
          ),
          rating: 4.6,
          price: 1200,
          href: "/explore",
        },
        {
          title: t(
            lang,
            L(
              "Parasailing with Island Views",
              "พาราเซลลิ่งชมวิวเกาะล้าน",
              "格兰岛滑翔伞",
              "Парасailing с видом",
            ),
          ),
          rating: 4.9,
          price: 1500,
          href: "/explore",
        },
      ],
    },
    beachGuide: {
      title: t(
        lang,
        L(
          "Which beach? Koh Larn shoreline guide",
          "เที่ยวหาดไหนดี? คู่มือรวมชายหาดเกาะล้าน",
          "选哪片海滩？格兰岛海岸指南",
          "Какой пляж? Гид по Ко Лан",
        ),
      ),
      subtitle: t(
        lang,
        L(
          "Pick the beach that matches your travel style",
          "เลือกหาดที่เหมาะกับสไตล์การเที่ยวของคุณ",
          "按你的旅行风格选海滩",
          "Выберите пляж под ваш стиль",
        ),
      ),
      tablistLabel: t(lang, L("Koh Larn beaches", "ชายหาดเกาะล้าน", "格兰岛海滩", "Пляжи Ко Лан")),
      fullReview: t(lang, L("Full Tien Beach review →", "อ่านรีวิวเต็มหาดเทียน →", "完整 Tien 海滩评测 →", "Обзор Tien Beach →")),
      beaches: [
        {
          id: "tawaen" as const,
          label: t(lang, L("Ta Waen Beach", "หาดตาแหวน", "塔湾海滩", "Ta Waen")),
          description: t(
            lang,
            L(
              "The island's most popular beach — clear water, fine sand, restaurants and water sports. Ideal for families and groups.",
              "หาดยอดนิยมสุด — น้ำใส ทรายละเอียด ร้านอาหาร กิจกรรมทางน้ำ เหมาะครอบครัว",
              "岛上最热门海滩，适合家庭与团体。",
              "Самый популярный пляж — для семей.",
            ),
          ),
          features: [
            t(lang, L("Swimming", "ว่ายน้ำได้", "可游泳", "Купание")),
            t(lang, L("Food", "มีอาหาร", "有餐饮", "Еда")),
            t(lang, L("Water sports", "กิจกรรมทางน้ำ", "水上运动", "Водные виды")),
          ],
          reviewHref: "/explore/beaches",
        },
        {
          id: "nual" as const,
          label: t(lang, L("Nual Beach", "หาดนวล", "Nual 海滩", "Nual")),
          description: t(
            lang,
            L(
              "Quieter than the main strip — wide sand, clear water. Perfect for relaxing, photos, and uncrowded swimming.",
              "เงียบกว่าหาดหลัก — ชายหาดกว้าง น้ำใส พักผ่อน ถ่ายรูป ว่ายไม่แออัด",
              "比主海滩安静，适合放松与拍照。",
              "Тише главного — для отдыха и фото.",
            ),
          ),
          features: [
            t(lang, L("Swimming", "ว่ายน้ำได้", "可游泳", "Купание")),
            t(lang, L("Photo spot", "จุดถ่ายรูป", "拍照点", "Фото")),
            t(lang, L("Peaceful", "เงียบสงบ", "安静", "Спокойно")),
          ],
          reviewHref: "/explore/beaches",
        },
        {
          id: "tien" as const,
          label: t(lang, L("Tien Beach", "หาดเทียน", "Tien 海滩", "Tien")),
          description: t(
            lang,
            L(
              "Beautiful curved bay with very clear water in peak season — seaside restaurants and one of the island's best sunsets.",
              "หาดโค้งสวย น้ำใสมากในฤดูท่องเที่ยว — ร้านริมทะเล พระอาทิตย์ตกสวย",
              "优美海湾，旺季海水极清，日落绝佳。",
              "Живописная бухта и закаты.",
            ),
          ),
          features: [
            t(lang, L("Swimming", "ว่ายน้ำได้", "可游泳", "Купание")),
            t(lang, L("Food", "มีอาหาร", "有餐饮", "Еда")),
            t(lang, L("Photo spot", "จุดถ่ายรูป", "拍照点", "Фото")),
          ],
          reviewHref: "/explore/beaches",
        },
      ],
    },
    directory: {
      title: t(
        lang,
        L(
          "Recommended restaurants & stays on Koh Larn",
          "ร้านอาหาร & ที่พักแนะนำบนเกาะล้าน",
          "格兰岛推荐餐饮与住宿",
          "Еда и отели на Ко Лан",
        ),
      ),
      eatTitle: t(lang, L("Where to eat", "กินที่ไหนดี?", "在哪吃", "Где поесть")),
      stayTitle: t(lang, L("Where to stay", "พักที่ไหนดี?", "在哪住", "Где остановиться")),
      promoLink: t(lang, L("See special offers →", "ดูโปรโมชั่นพิเศษ →", "查看优惠 →", "Акции →")),
      restaurants: [
        {
          name: t(
            lang,
            L(
              "Ta Waen Beach Seafood Restaurant",
              "ร้านอาหารทะเลริมหาดตาแหวน",
              "塔湾海滩海鲜餐厅",
              "Морепродукты Ta Waen",
            ),
          ),
          blurb: t(
            lang,
            L(
              "Fresh seafood with sea views — perfect lunch after the ferry",
              "อาหารทะเลสด วิวทะเล — เหมาะมื้อเที่ยงหลังลงเรือ",
              "新鲜海鲜与海景，下船后午餐佳选",
              "Свежие морепродукты после парома",
            ),
          ),
          href: "/explore/restaurants/fine-dining",
        },
        {
          name: t(
            lang,
            L("Tien Beach View Café", "คาเฟ่ชมวิวหาดเทียน", "Tien 海滩景观咖啡", "Кафе Tien Beach"),
          ),
          blurb: t(
            lang,
            L(
              "Drinks and snacks in a chill beach setting",
              "เครื่องดื่มและของว่าง บรรยากาศชิลล์ริมชายหาด",
              "轻松海滨饮品与小食",
              "Напитки в расслабленной атмосфере",
            ),
          ),
          href: "/explore/cafes",
        },
      ],
      stays: [
        {
          name: t(lang, L("Tien Beach Resort", "รีสอร์ทริมหาดเทียน", "Tien 海滩度假村", "Resort Tien")),
          blurb: t(
            lang,
            L(
              "Island stay near the beach — book ahead on weekends",
              "ที่พักบนเกาะ ใกล้ชายหาด — จองล่วงหน้าในช่วงสุดสัปดาห์",
              "近海滩岛宿，周末需提前预订",
              "У моря — бронируйте на выходные",
            ),
          ),
          href: "/explore",
        },
        {
          name: t(lang, L("Seaside Bungalow", "บังกะโลริมทะเล", "海滨 bungalow", "Bungalow у моря")),
          blurb: t(
            lang,
            L(
              "Budget-friendly and walkable — ideal for day-trip visitors",
              "ประหยัด สะดวกเดินทาง — เหมาะไปเช้าเย็นกลับ",
              "实惠便利，适合一日游",
              "Бюджетно — для однодневной поездки",
            ),
          ),
          href: "/explore",
        },
      ],
    },
    bookNow: c.bookNow,
  };
}
