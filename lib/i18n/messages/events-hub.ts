import type { LanguageCode } from "@/lib/i18n/languages";
import { marketPagePaths } from "@/lib/design/market-page-paths";
import { L, t } from "@/lib/i18n/living-helpers";
import { eventsImages } from "@/lib/design/events-images";
import { enrichEvents, getActiveEventCategories } from "@/lib/events/enrich-events";
import {
  eventDateKey,
  eventOccursOn,
  initialCalendarMonth,
  EVENTS_CALENDAR_YEAR,
} from "@/lib/events/event-schedule";

export type EventCategoryId =
  | "concert"
  | "festival"
  | "edm"
  | "muayThai"
  | "golf"
  | "business"
  | "family"
  | "market"
  | "localFestival";

export type EventLocationArea =
  | "central"
  | "jomtien"
  | "naklua"
  | "pratumnak"
  | "marina"
  | "banglamung";

export type EventPriceTier = "free" | "paid" | "donation";

/** How attendees get in — avoids misleading “Book tickets” on free / walk-in events */
export type EventTicketing = "free" | "door" | "guide" | "online";

export type EventLanguageTag = "th" | "en" | "zh" | "ru" | "multi";

/** Event fields before location/organizer enrichment */
export type EventsHubEventCore = {
  id: string;
  time: string;
  title: string;
  venue: string;
  excerpt: string;
  category: EventCategoryId;
  categoryLabel: string;
  image: string;
  imageAlt: string;
  href: string;
};

export type EventsHubEvent = EventsHubEventCore & {
  locationArea: EventLocationArea;
  locationLabel: string;
  priceTier: EventPriceTier;
  priceLabel: string;
  languageTags: EventLanguageTag[];
  languageLabels: string;
  organizer: string;
  mapHref: string;
  ticketsHref: string;
  forumHref: string;
  ticketing: EventTicketing;
  primaryCtaLabel: string;
  primaryCtaHref: string;
};

const categoryLabels = {
  concert: L("Concert", "คอนเสิร์ต", "演唱会", "Концерт"),
  festival: L("Festival", "เทศกาล", "节庆", "Фестиваль"),
  edm: L("EDM", "EDM", "EDM", "EDM"),
  muayThai: L("Muay Thai", "มวยไทย", "泰拳", "Muay Thai"),
  golf: L("Golf", "กอล์ฟ", "高尔夫", "Гольф"),
  business: L("Networking", "เน็ตเวิร์ก", "商务社交", "Нетворкинг"),
  family: L("Family", "ครอบครัว", "亲子", "Семья"),
  market: L("Market", "ตลาด", "市场", "Рынок"),
  localFestival: L("Local Festival", "เทศกาลท้องถิ่น", "本地节庆", "Местный фестиваль"),
} as const;

function cat(lang: LanguageCode, id: EventCategoryId) {
  return t(lang, categoryLabels[id]);
}

const hero = {
  badge: L("Calendar", "ปฏิทิน", "日历", "Календарь"),
  title: L("Events Today", "งานวันนี้", "今日活动", "События сегодня"),
  titleTh: L("งานวันนี้", "งานวันนี้", "今日活动", "События сегодня"),
  description: L(
    "Pattaya's 2569 calendar — music festivals, fireworks, PRIDE, EDM, marathons, film, jazz, and countdown on the beach. Filter by date, category, area, price, and language.",
    "ปฏิทินงานพัทยา 2569 — เทศกาลดนตรี ดอกไม้ไฟ PRIDE EDM มาราธอน หนัง และแจ๊สริมทะเล กรองตามวัน หมวด พื้นที่ ราคา และภาษา",
    "芭提雅 2569 活动日历——音乐节、烟花、PRIDE、EDM、马拉松、电影与海滨爵士。按日期、类别、区域、价格与语言筛选。",
    "Календарь Паттайи 2569 — музыка, фейерверки, PRIDE, EDM, марафоны, кино и джаз. Фильтры по дате, категории, району, цене и языку.",
  ),
};

const sections = {
  featuredLabel: L("Featured today", "ไฮไลต์วันนี้", "今日精选", "Главное сегодня"),
  todayTitle: L("Today's lineup", "กำหนดการวันนี้", "今日行程", "Программа на сегодня"),
  todaySubtitle: L(
    "Times are local (GMT+7). Arrive early for markets and beach events.",
    "เวลาตามเวลาท้องถิ่น (GMT+7) แนะนำไปก่อนเวลาสำหรับตลาดและงานริมทะเล",
    "时间为当地时区 (GMT+7)。市集与海滨活动建议提前到场。",
    "Время по GMT+7. На рынки и пляжные события приезжайте заранее.",
  ),
  weekTitle: L("This week in Pattaya", "สัปดาห์นี้ในพัทยา", "本周芭提雅", "На этой неделе"),
  weekSubtitle: L(
    "Plan ahead — save dates for markets, shows, and community meetups.",
    "วางแผนล่วงหน้า — จดวันจัดตลาด โชว์ และกิจกรรมชุมชน",
    "提前规划——记下市集、演出与社区活动日期。",
    "Запланируйте рынки, шоу и встречи заранее.",
  ),
  promotedTitle: L("Promoted", "โปรโมต", "推广", "Рекомендуем"),
  tipsTitle: L("Insider tips", "เคล็ดลับ", "小贴士", "Советы"),
  exploreCta: L("Explore venue", "ดูสถานที่", "查看场地", "Место"),
  eventDetailsCta: L(
    "View event details",
    "ดูรายละเอียดกิจกรรม",
    "查看活动详情",
    "Подробнее о событии",
  ),
  addEvent: L(
    "List your event on Pattaya.com",
    "ลงประกาศงานบน Pattaya.com",
    "在 Pattaya.com 发布活动",
    "Разместить событие",
  ),
  calendarTitle: L("Calendar", "ปฏิทิน", "日历", "Календарь"),
  yearOverview: L("Pattaya 2569 events", "งานพัทยา 2569", "芭提雅 2569 活动", "События Паттайи 2569"),
  filterCategory: L("Category", "หมวด", "类别", "Категория"),
  filterLocation: L("Location", "พื้นที่", "区域", "Район"),
  filterPrice: L("Price", "ราคา", "价格", "Цена"),
  filterLanguage: L("Language", "ภาษา", "语言", "Язык"),
  filterAll: L("All", "ทั้งหมด", "全部", "Все"),
  resultsCount: L("{n} events", "{n} งาน", "{n} 个活动", "{n} событий"),
  noResults: L(
    "No events match these filters — try another day or category.",
    "ไม่พบงานตามตัวกรอง — ลองเปลี่ยนวันหรือหมวด",
    "没有匹配的活动——请换一天或类别试试。",
    "Нет событий — смените день или категорию.",
  ),
  clearFilters: L("Clear filters", "ล้างตัวกรอง", "清除筛选", "Сбросить"),
  bookTickets: L("Book tickets", "จองตั๋ว", "购票", "Билеты"),
  freeEntry: L("Free entry", "เข้างานฟรี", "免费入场", "Бесплатно"),
  payAtVenue: L("Pay at venue", "ซื้อหน้างาน", "现场购票", "На месте"),
  howToAttend: L("How to attend", "ดูวิธีเข้างาน", "如何参加", "Как посетить"),
  donationWelcome: L("Donation welcome", "บริจาคตามสบาย", "欢迎随喜", "Donation"),
  viewMap: L("Map", "แผนที่", "地图", "Карта"),
  forumDiscuss: L("Forum", "ฟอรัม", "论坛", "Форум"),
  organizerLabel: L("Organizer", "ผู้จัด", "主办方", "Организатор"),
};

const featured = {
  title: L(
    "Pattaya International Fireworks Festival 2026",
    "เทศกาลพลุนานาชาติเมืองพัทยา 2569",
    "2026 芭提雅国际烟花节",
    "Международный фестиваль фейерверков Паттайи 2026",
  ),
  excerpt: L(
    "Teams from multiple countries over Pattaya Bay — concerts and waterfront viewing. Arrive early for beach seating near Walking Street.",
    "ทีมพลุจากหลายประเทศเหนืออ่าวพัทยา — คอนเสิร์ตและจุดชมริมชายหาด แนะนำมาถึงก่อนเพื่อที่นั่งแถว Walking Street",
    "多国烟花团队点亮芭提雅湾——配套音乐会与海滨观赏点，建议提早到场占位。",
    "Команды из разных стран над заливом — концерты и вид с пляжа, приезжайте заранее.",
  ),
  time: L("27–28 Nov 2569", "27–28 พ.ย. 2569", "2569年11月27–28日", "27–28 ноя 2026"),
  venue: L("Pattaya Beach", "ชายหาดพัทยา", "芭提雅海滩", "Пляж Паттайя"),
};

const tips = [
  {
    title: L("Plan major dates", "วางแผนวันสำคัญ", "规划重要日期", "Планируйте даты"),
    text: L(
      "Wan Lai Songkran (18–19 Apr) and Fireworks Festival (27–28 Nov) draw huge crowds — book hotels and transport early.",
      "วันไหล (18–19 เม.ย.) และเทศกาลพลุ (27–28 พ.ย.) คนแน่น — จองที่พักและรถล่วงหน้า",
      "万莱泼水节（4月18–19日）与烟花节（11月27–28日）人潮汹涌——请提早订房与交通。",
      "Wan Lai (18–19 апр) и фейерверки (27–28 ноя) — бронируйте жильё заранее.",
    ),
  },
  {
    title: L("EDM & ticketed events", "งาน EDM & มีตั๋ว", "EDM 与购票活动", "EDM и билеты"),
    text: L(
      "Tomorrow Thailand and Circuit Festival sell out fast — follow official channels and arrive with ID for 20+ venues.",
      "Tomorrow Thailand และ Circuit Festival ตั๋วหมดเร็ว — ติดตามช่องทางทางการ และแสดงบัตรสำหรับงาน 20+",
      "Tomorrow Thailand 与 Circuit 常快速售罄——关注官方渠道，20+ 活动需带证件。",
      "Tomorrow Thailand и Circuit — билеты быстро, берите документ для 20+.",
    ),
  },
  {
    title: L("Beach events", "งานริมทะเล", "海滨活动", "Пляжные события"),
    text: L(
      "Music Festival and Jazz Festival are breezy after sunset — light layers, cash for vendors, songthaew routes 2 & 3.",
      "เทศกาลดนตรีและแจ๊สลมแรงหลังพระอาทิตย์ตก — เสื้อบางๆ เงินสด และสองแถวสาย 2–3",
      "音乐节与爵士节傍晚海风大——薄外套、现金，2、3号双条车可达。",
      "Музыка и джаз — ветер вечером, наличные, songthaew №2–3.",
    ),
  },
];

const promoted = {
  title: L(
    "Pattaya International PRIDE Festival 2026",
    "เทศกาลไพรด์นานาชาติเมืองพัทยา 2569",
    "2026 芭提雅国际 PRIDE 节",
    "Pattaya International PRIDE 2026",
  ),
  excerpt: L(
    "Parade, live music, and creative events along the beach — celebrating diversity on Pattaya's seafront.",
    "ขบวนพาเหรด ดนตรีสด และกิจกรรมสร้างสรรค์เลียบชายหาด — เฉลิมฉลองความหลากหลายริมทะเลพัทยา",
    "海滨游行、现场音乐与创意活动——在芭提雅海畔庆祝多元与平等。",
    "Парад, музыка и события на набережной — праздник разнообразия в Паттайе.",
  ),
  when: L("26–28 Jun 2569", "26–28 มิ.ย. 2569", "2569年6月26–28日", "26–28 июн 2026"),
};

function todayEvents(lang: LanguageCode): EventsHubEventCore[] {
  return [
    {
      id: "fireworks-festival",
      time: t(lang, L("27–28 Nov 2569", "27–28 พ.ย. 2569", "11月27–28日", "27–28 ноя")),
      title: t(lang, featured.title),
      venue: t(lang, featured.venue),
      excerpt: t(lang, featured.excerpt),
      category: "localFestival",
      categoryLabel: cat(lang, "localFestival"),
      image: eventsImages.fireworks,
      imageAlt: t(lang, L("Fireworks over Pattaya Bay", "พลุเหนืออ่าวพัทยา", "芭提雅湾烟花", "Фейерверк над заливом")),
      href: "/explore/beaches",
    },
    {
      id: "pattaya-music-festival",
      time: t(lang, L("6–7 Mar 2569", "6–7 มี.ค. 2569", "3月6–7日", "6–7 мар")),
      title: t(
        lang,
        L(
          "Pattaya Music Festival 2026",
          "เทศกาลดนตรีเมืองพัทยา 2569",
          "2026 芭提雅音乐节",
          "Pattaya Music Festival 2026",
        ),
      ),
      venue: t(lang, L("Pattaya Beach", "ชายหาดพัทยา", "芭提雅海滩", "Пляж Паттайя")),
      excerpt: t(
        lang,
        L(
          "Beachfront pop, rock, and indie — opens 6–7 Mar at Pattaya Beach, then Jomtien, Koh Larn, and a final beach weekend in March.",
          "ป๊อป ร็อก อินดี้ริมทะเล — เปิด 6–7 มี.ค. หาดพัทยา ต่อด้วยจอมเทียน เกาะล้าน และปิดท้ายที่ชายหาด",
          "海滨流行、摇滚与独立音乐——3月6–7日芭提雅海滩开幕，随后乔木提恩、格兰岛及收官场。",
          "Pop, rock и indie — старт 6–7 мар на пляже, затем Джомтьен, Koh Larn и финал.",
        ),
      ),
      category: "festival",
      categoryLabel: cat(lang, "festival"),
      image: eventsImages.beachConcert,
      imageAlt: t(lang, L("Live music at Pattaya Beach", "ดนตรีสดหาดพัทยา", "芭提雅海滩现场音乐", "Музыка на пляже")),
      href: "/explore/beaches",
    },
    {
      id: "holi-festival",
      time: t(lang, L("13–15 Mar · 15:00–19:00", "13–15 มี.ค. · 15:00–19:00", "3月13–15日 · 15:00–19:00", "13–15 мар · 15:00–19:00")),
      title: t(
        lang,
        L(
          "Amazing Thailand Grand Holi Festival Pattaya",
          "Amazing Thailand Grand Holi Festival Pattaya",
          "芭提雅 Holi 色彩节",
          "Grand Holi Festival Pattaya",
        ),
      ),
      venue: t(lang, L("Pattaya Beach", "ชายหาดพัทยา", "芭提雅海滩", "Пляж Паттайя")),
      excerpt: t(
        lang,
        L(
          "Colour powder celebrations on the sand — a vibrant Indian-Thai community festival open to all.",
          "เฉลิมฉลองด้วยผงสีบนชายหาด — เทศกาลชุมชนอินเดีย-ไทยที่เปิดรับทุกคน",
          "沙滩彩色粉末庆典——开放的印泰社区节庆。",
          "Праздник цветной пудры на пляже — индийско-тайский фестиваль для всех.",
        ),
      ),
      category: "festival",
      categoryLabel: cat(lang, "festival"),
      image: eventsImages.foodFestival,
      imageAlt: t(lang, L("Colour festival on Pattaya Beach", "งานสีสันชายหาดพัทยา", "芭提雅海滩色彩节", "Фестиваль красок")),
      href: "/explore/beaches",
    },
    {
      id: "thepprasit",
      time: t(lang, L("Fri–Sun · 17:00", "ศ–อา · 17:00", "周五–日 · 17:00", "Пт–Вс · 17:00")),
      title: t(
        lang,
        L("Thepprasit Night Market", "ตลาดเทพประสิทธิ์", "Thepprasit 夜市", "Ночной рынок Thepprasit"),
      ),
      venue: t(lang, L("Thepprasit Rd, South Pattaya", "ถ.เทพประสิทธิ์ ใต้เมือง", "Thepprasit 路", "Thepprasit Rd")),
      excerpt: t(
        lang,
        L(
          "Street food, live music on weekends, and late-night bargains — one of Pattaya's busiest bazaars.",
          "สตรีทฟู้ด ดนตรีสดสุดสัปดาห์ และของถูกดึกๆ — หนึ่งในตลาดที่คึกที่สุด",
          "街头美食、周末现场音乐与深夜淘货。",
          "Стритфуд, музыка по выходным и ночные скидки.",
        ),
      ),
      category: "market",
      categoryLabel: cat(lang, "market"),
      image: eventsImages.nightMarket,
      imageAlt: t(lang, L("Thepprasit Night Market stalls", "ร้านค้าตลาดเทพประสิทธิ์", "Thepprasit 夜市", "Рынок Thepprasit")),
      href: marketPagePaths.page,
    },
  ];
}

function weekEvents(lang: LanguageCode): EventsHubEventCore[] {
  return [
    {
      id: "naklua-food-walk-jan",
      time: t(lang, L("17–18 & 24–25 Jan", "17–18 & 24–25 ม.ค.", "1月17–18及24–25日", "17–18 и 24–25 янв")),
      title: t(
        lang,
        L(
          "Naklua Food Walk #17",
          "งานเดินกินถิ่นนาเกลือ ครั้งที่ 17",
          "那库拉美食漫步 #17",
          "Naklua Food Walk #17",
        ),
      ),
      venue: t(lang, L("Lan Po Naklua Old Market", "ตลาดเก่านาเกลือ (ลานโพธิ์)", "那库拉旧市场", "Lan Po Naklua")),
      excerpt: t(
        lang,
        L(
          "Classic food-and-culture street at the old Naklua market — fresh seafood, local dishes, and heritage wooden houses.",
          "ถนนคนเดินอาหารและวัฒนธรรมตลาดเก่านาเกลือ — อาหารทะเล เมนูท้องถิ่น และบ้านไม้เก่า",
          "那库拉旧市集美食文化街——海鲜、本地菜与传统木屋。",
          "Food walk at old Naklua market — seafood and heritage houses.",
        ),
      ),
      category: "market",
      categoryLabel: cat(lang, "market"),
      image: eventsImages.nightMarket,
      imageAlt: t(lang, L("Naklua food walk", "งานเดินกินถิ่นนาเกลือ", "那库拉美食漫步", "Naklua Food Walk")),
      href: marketPagePaths.page,
    },
    {
      id: "jomtien-fishing-cup",
      time: t(lang, L("23–25 Jan 2569", "23–25 ม.ค. 2569", "1月23–25日", "23–25 янв")),
      title: t(
        lang,
        L(
          "Pattaya Bay Fishing Competition",
          "การแข่งขันตกปลาบริเวณอ่าวเมืองพัทยา",
          "芭提雅湾钓鱼大赛",
          "Pattaya Bay Fishing Competition",
        ),
      ),
      venue: t(lang, L("Jomtien Beach", "หาดจอมเทียน", "乔木提恩海滩", "Jomtien Beach")),
      excerpt: t(
        lang,
        L(
          "Sport-fishing showdown in clear January seas — watch or join anglers competing across Pattaya Bay.",
          "แข่งขันตกปลากลางอ่าวพัทยา — ชมหรือร่วมเชียร์นักตกปลาในทะเลใสเดือนมกราคม",
          "一月清澈海域钓鱼竞技——观赛或参与芭提雅湾钓手对决。",
          "Sport fishing in Pattaya Bay — January clear seas.",
        ),
      ),
      category: "localFestival",
      categoryLabel: cat(lang, "localFestival"),
      image: eventsImages.yachtShow,
      imageAlt: t(lang, L("Fishing competition Jomtien", "แข่งตกปลาจอมเทียน", "乔木提恩钓鱼赛", "Fishing Jomtien")),
      href: "/explore/beaches",
    },
    {
      id: "walking-street",
      time: t(lang, L("Fri–Sun · 19:00", "ศ–อา · 19:00", "周五–日 · 19:00", "Пт–Вс · 19:00")),
      title: t(
        lang,
        L("Walking Street Weekend", "เดินเล่น Walking Street", "步行街周末", "Walking Street"),
      ),
      venue: t(lang, L("Walking Street, Pattaya", "Walking Street พัทยา", "芭提雅步行街", "Walking Street")),
      excerpt: t(
        lang,
        L(
          "Neon lights, street performers, and bars — pedestrian-only after 19:00 on weekends.",
          "ไฟนีออน ศิลปินถนน และบาร์ — เดินได้หลัง 19:00 สุดสัปดาห์",
          "霓虹、街头艺人与酒吧——周末 19:00 后步行街。",
          "Неон, артисты и бары — пешеходная зона с 19:00.",
        ),
      ),
      category: "edm",
      categoryLabel: cat(lang, "edm"),
      image: eventsImages.walkingStreet,
      imageAlt: t(lang, L("Walking Street at night", "Walking Street ยามค่ำ", "夜晚步行街", "Walking Street")),
      href: marketPagePaths.streetFoodSection,
    },
    {
      id: "kite-festival",
      time: t(lang, L("25 Feb – 1 Mar", "25 ก.พ. – 1 มี.ค.", "2月25日–3月1日", "25 фев – 1 мар")),
      title: t(
        lang,
        L(
          "International Kite Festival Pattaya",
          "เทศกาลว่าวยักษ์นานาชาติริมหาดพัทยา",
          "芭提雅国际风筝节",
          "Международный фестиваль воздушных змеев",
        ),
      ),
      venue: t(lang, L("Central Pattaya (Central Festival)", "พัทยากลาง (เซ็นทรัล)", "芭提雅中心（Central）", "Central Pattaya")),
      excerpt: t(
        lang,
        L(
          "Giant creative kites fill the sky near Central Festival — family-friendly, weather-dependent showtimes 11:00–18:00.",
          "ว่าวยักษ์สีสันสดใสเหนือเซ็นทรัล — เหมาะครอบครัว ช่วง 11:00–18:00 น. (ขึ้นกับลม)",
          "Central 前巨型风筝——适合家庭，11:00–18:00（视风力而定）。",
          "Гигантские змеи у Central — для семей, 11:00–18:00.",
        ),
      ),
      category: "festival",
      categoryLabel: cat(lang, "festival"),
      image: eventsImages.wellness,
      imageAlt: t(lang, L("Kites over Pattaya Beach", "ว่าวเหนือหาดพัทยา", "芭提雅海滩风筝", "Змеи над пляжем")),
      href: "/explore/beaches",
    },
    {
      id: "seafood-festival",
      time: t(lang, L("20–21 Feb · 18:00", "20–21 ก.พ. · 18:00", "2月20–21日 · 18:00", "20–21 фев · 18:00")),
      title: t(
        lang,
        L(
          "Squid & Seafood Festival",
          "เทศกาลปลาหมึกและอาหารทะเลริมชายหาด",
          "鱿鱼与海鲜节",
          "Фестиваль кальмаров и морепродуктов",
        ),
      ),
      venue: t(lang, L("Jomtien Beach", "หาดจอมเทียน", "乔木提恩海滩", "Пляж Джомтьен")),
      excerpt: t(
        lang,
        L(
          "Fresh squid and seafood stalls by the sea — a must for lovers of Thai coastal cuisine.",
          "ปลาหมึกและซีฟู้ดสดริมทะเล — ไม่ควรพลาดสำหรับคนรักอาหารทะเลไทย",
          "新鲜鱿鱼与海鲜摊位——泰式海滨美食爱好者必访。",
          "Свежие кальмары и морепродукты — must-see для любителей морской кухни.",
        ),
      ),
      category: "localFestival",
      categoryLabel: cat(lang, "localFestival"),
      image: eventsImages.foodFestival,
      imageAlt: t(lang, L("Seafood festival Jomtien", "งานอาหารทะเลจอมเทียน", "乔木提恩海鲜节", "Морепродукты Джомтьен")),
      href: "/explore/beaches",
    },
    {
      id: "miss-queen",
      time: t(lang, L("26–27 Mar 2569", "26–27 มี.ค. 2569", "3月26–27日", "26–27 мар")),
      title: t(
        lang,
        L("Miss International Queen 2026", "Miss International Queen 2569", "2026 国际皇后选美", "Miss International Queen 2026"),
      ),
      venue: t(lang, L("Tiffany's Show Pattaya", "Tiffany's Show Pattaya", "Tiffany's Show", "Tiffany's Show")),
      excerpt: t(
        lang,
        L(
          "International beauty pageant celebrating diversity — Pattaya as a global LGBTQ+ friendly destination.",
          "เวทีประกวดนานาชาติฉลองความหลากหลาย — พัทยาในฐานะ LGBTQ+ Friendly Destination",
          "国际选美庆祝多元——芭提雅作为全球 LGBTQ+ 友好目的地。",
          "Международный конкурс красоты — Паттайя как LGBTQ+ friendly.",
        ),
      ),
      category: "festival",
      categoryLabel: cat(lang, "festival"),
      image: eventsImages.walkingStreet,
      imageAlt: t(lang, L("Stage event Pattaya", "งานบนเวทีพัทยา", "芭提雅舞台活动", "Сценическое шоу")),
      href: "/explore/nightlife",
    },
    {
      id: "wan-lai",
      time: t(lang, L("18–19 Apr 2569", "18–19 เม.ย. 2569", "4月18–19日", "18–19 апр")),
      title: t(
        lang,
        L(
          "Wan Lai Pattaya — Songkran Festival",
          "วันไหลพัทยา — เทศกาลสงกรานต์",
          "芭提雅万莱泼水节",
          "Wan Lai Songkran Pattaya",
        ),
      ),
      venue: t(lang, L("Naklua & Pattaya Beach", "นาเกลือ & ชายหาดพัทยา", "那库拉与芭提雅海滩", "Naklua и пляж")),
      excerpt: t(
        lang,
        L(
          "Extended Songkran with parades, Buddha processions, and water fights — Pattaya's unique post-Songkran celebration.",
          "สงกรานต์ยาว ขบวนแห่ พระ และเล่นน้ำ — ประเพณีหลังสงกรานต์เฉพาะตัวของพัทยา",
          "延长泼水节——游行、佛牌巡游与戏水，芭提雅独特的节后庆典。",
          "Продлённый Сонгкран — парады, процессии и водные бои.",
        ),
      ),
      category: "localFestival",
      categoryLabel: cat(lang, "localFestival"),
      image: eventsImages.beachConcert,
      imageAlt: t(lang, L("Songkran water festival Pattaya", "สงกรานต์พัทยา", "芭提雅泼水节", "Сонгкран Паттайя")),
      href: "/explore/beaches",
    },
    {
      id: "kong-khao-pattaya",
      time: t(lang, L("20 Apr 2569", "20 เม.ย. 2569", "4月20日", "20 апр")),
      title: t(
        lang,
        L(
          "Kong Khao Pattaya Tradition",
          "ประเพณีกองข้าวพัทยา",
          "芭提雅供饭节",
          "Kong Khao Pattaya",
        ),
      ),
      venue: t(lang, L("Lan Po Naklua Public Park", "สวนสาธารณะลานโพธิ์ นาเกลือ", "那库拉兰波公园", "Lan Po Naklua Park")),
      excerpt: t(
        lang,
        L(
          "Rare local ritual after Wan Lai — merit-making, shared meals, and community spirit in Naklua.",
          "ประเพณีท้องถิ่นหลังวันไหล — ทำบุญ กินข้าวร่วม และจิตวิญญาณชุมชนที่นาเกลือ",
          "万莱节后罕见本地仪式——祈福、共餐与社区团聚。",
          "Местный ритуал после Wan Lai — merit-making и общая трапеза.",
        ),
      ),
      category: "localFestival",
      categoryLabel: cat(lang, "localFestival"),
      image: eventsImages.foodFestival,
      imageAlt: t(lang, L("Kong Khao ceremony Pattaya", "พิธีกองข้าวพัทยา", "供饭节", "Kong Khao")),
      href: "/explore/beaches",
    },
    {
      id: "fitz-pickleball",
      time: t(lang, L("Apr 2569 · dates TBC", "เม.ย. 2569 · รอประกาศ", "2569年4月 · 待定", "апр 2026 · TBC")),
      title: t(
        lang,
        L(
          "Fitz Club Pickleball Tournament",
          "FITZ Club Pickleball Tournament",
          "Fitz Club 匹克球赛",
          "Fitz Club Pickleball Tournament",
        ),
      ),
      venue: t(lang, L("Fitz Club, Royal Cliff", "Fitz Club (รอยัล คลิฟ)", "Fitz Club · Royal Cliff", "Fitz Club, Royal Cliff")),
      excerpt: t(
        lang,
        L(
          "Fast-growing paddle sport on pro-grade courts — friendly competition open to multiple skill levels.",
          "กีฬาไม้พายที่กำลังฮитบนสนามมาตรฐาน — แข่งขันเป็นกันเองหลายระดับ",
          "热门匹克球赛事——专业场地、多级别友好竞技。",
          "Pickleball на Fitz Club — соревнование для разных уровней.",
        ),
      ),
      category: "family",
      categoryLabel: cat(lang, "family"),
      image: eventsImages.wellness,
      imageAlt: t(lang, L("Pickleball tournament", "แข่งพิกเกิลบอล", "匹克球赛", "Pickleball")),
      href: "/news/sports",
    },
    {
      id: "pride-festival",
      time: t(lang, L("26–28 Jun 2569", "26–28 มิ.ย. 2569", "6月26–28日", "26–28 июн")),
      title: t(lang, promoted.title),
      venue: t(lang, L("Pattaya Beach & Beach Road", "ชายหาดและถนนเลียบชายหาด", "海滩与海滨路", "Пляж и Beach Road")),
      excerpt: t(lang, promoted.excerpt),
      category: "festival",
      categoryLabel: cat(lang, "festival"),
      image: eventsImages.beachConcert,
      imageAlt: t(lang, L("PRIDE parade Pattaya", "ขบวน PRIDE พัทยา", "芭提雅 PRIDE 游行", "PRIDE Паттайя")),
      href: "/explore/beaches",
    },
    {
      id: "pattaya-night-run",
      time: t(lang, L("Jun 2569 · dates TBC", "มิ.ย. 2569 · รอประกาศ", "2569年6月 · 待定", "июн 2026 · TBC")),
      title: t(
        lang,
        L("Pattaya Night Run 2026", "Pattaya Night Run 2569", "2026 芭提雅夜跑", "Pattaya Night Run 2026"),
      ),
      venue: t(lang, L("Pattaya Beach Road", "ถนนเลียบชายหาดพัทยา", "芭提雅海滨路", "Beach Road Pattaya")),
      excerpt: t(
        lang,
        L(
          "Night-time run along the seafront — fitness meets Pattaya's after-dark beach energy.",
          "วิ่งกลางคืนเลียบชายหาด — ออกกำลังกายกับบรรยากาศยามค่ำของพัทยา",
          "海滨夜跑——运动与芭提雅夜间海滩氛围结合。",
          "Ночной забег вдоль набережной — фитнес и вечерняя Паттайя.",
        ),
      ),
      category: "family",
      categoryLabel: cat(lang, "family"),
      image: eventsImages.wellness,
      imageAlt: t(lang, L("Night run Pattaya Beach", "วิ่งกลางคืนหาดพัทยา", "芭提雅夜跑", "Night Run Паттайя")),
      href: "/news/sports",
    },
    {
      id: "circuit-festival",
      time: t(lang, L("20 Jun 2569", "20 มิ.ย. 2569", "6月20日", "20 июн")),
      title: t(
        lang,
        L(
          "Circuit Festival Asia — Waterpark Day",
          "Circuit Festival Asia — Waterpark Day",
          "Circuit Festival 亚洲水上日",
          "Circuit Festival Asia — Waterpark Day",
        ),
      ),
      venue: t(lang, L("Ramayana Water Park", "สวนน้ำรามายณะ", "Ramayana 水上乐园", "Ramayana Water Park")),
      excerpt: t(
        lang,
        L(
          "World-class daytime EDM pool party — music and water slides combined at Thailand's largest water park.",
          "ปาร์ตี้ EDM กลางวันระดับโลก — ดนตรีและสไลด์น้ำในสวนน้ำที่ใหญ่ที่สุด",
          "世界级白天 EDM 泳池派对——音乐与滑水道在泰国最大水上乐园。",
          "Дневная EDM pool party — музыка и горки в крупнейшем аквапарке.",
        ),
      ),
      category: "edm",
      categoryLabel: cat(lang, "edm"),
      image: eventsImages.familyPark,
      imageAlt: t(lang, L("Water park EDM party", "งาน EDM สวนน้ำ", "水上乐园 EDM", "EDM в аквапарке")),
      href: "/explore/family-activities",
    },
    {
      id: "pattaya-marathon",
      time: t(lang, L("18–19 Jul 2569", "18–19 ก.ค. 2569", "7月18–19日", "18–19 июл")),
      title: t(
        lang,
        L("Pattaya Marathon 2026", "การแข่งขันพัทยามาราธอน 2569", "2026 芭提雅马拉松", "Pattaya Marathon 2026"),
      ),
      venue: t(lang, L("City route · Terminal 21 area", "เส้นทางรอบเมือง · Terminal 21", "环城路线 · Terminal 21", "Маршрут · Terminal 21")),
      excerpt: t(
        lang,
        L(
          "International marathon along beach roads and landmarks — runners from around the world.",
          "มาราธอนนานาชาติเลียบชายหาดและแลนด์มาร์ก — นักวิ่งจากทั่วโลก",
          "沿海滨与地标的国际马拉松——全球跑者齐聚。",
          "Международный марафон вдоль пляжа — бегуны со всего мира.",
        ),
      ),
      category: "family",
      categoryLabel: cat(lang, "family"),
      image: eventsImages.wellness,
      imageAlt: t(lang, L("Marathon runners Pattaya", "นักวิ่งมาราธอนพัทยา", "芭提雅马拉松", "Марафон Паттайя")),
      href: "/news/sports",
    },
    {
      id: "mixology-open",
      time: t(lang, L("8 Jul 2569", "8 ก.ค. 2569", "7月8日", "8 июл")),
      title: t(
        lang,
        L(
          "Pattaya Mixology & Flair Open",
          "การแสดงทักษะการผสมเครื่องดื่มเมืองพัทยา",
          "芭提雅调酒与 flair 公开赛",
          "Pattaya Mixology & Flair Open",
        ),
      ),
      venue: t(lang, L("Central Marina Pattaya", "ศูนย์การค้าเซ็นทรัลมารีน่า", "Central Marina 芭提雅", "Central Marina Pattaya")),
      excerpt: t(
        lang,
        L(
          "Top bartenders compete in mixology and flair — watch creative cocktails and showmanship live.",
          "บาร์เทนเดอร์ชั้นนำแข่งขันผสมเครื่องดื่มและ flair — ชมค็อกเทลสร้างสรรค์สดๆ",
          "顶尖调酒师比拼创意鸡尾酒与 flair 表演。",
          "Лучшие бармены — mixology и flair вживую.",
        ),
      ),
      category: "festival",
      categoryLabel: cat(lang, "festival"),
      image: eventsImages.foodFestival,
      imageAlt: t(lang, L("Bartender flair competition", "แข่งขัน flair บาร์", "调酒 flair 赛", "Mixology Open")),
      href: "/explore/nightlife",
    },
    {
      id: "film-festival",
      time: t(lang, L("Aug 2569", "ส.ค. 2569", "2569年8月", "авг 2026")),
      title: t(
        lang,
        L("Pattaya Film Festival 2026", "เทศกาลภาพยนต์เมืองพัทยา 2569", "2026 芭提雅电影节", "Pattaya Film Festival 2026"),
      ),
      venue: t(lang, L("Pattaya city venues", "สถานที่จัดงานทั่วพัทยา", "芭提雅各场地", "Площадки Паттайи")),
      excerpt: t(
        lang,
        L(
          "Thai and international films with talks and workshops — cinema meets seaside Pattaya.",
          "ภาพยนตร์ไทยและนานาชาติ พร้อมเสวนาและเวิร์กช็อป — โรงหนังพบทะเลพัทยา",
          "泰国与国际电影、座谈与工作坊——电影遇见海滨芭提雅。",
          "Тайское и мировое кино, дискуссии и воркшопы у моря.",
        ),
      ),
      category: "festival",
      categoryLabel: cat(lang, "festival"),
      image: eventsImages.yachtShow,
      imageAlt: t(lang, L("Film festival Pattaya", "เทศกาลหนังพัทยา", "芭提雅电影节", "Киноfest Паттайя")),
      href: "/explore/beaches",
    },
    {
      id: "music-festival-jomtien",
      time: t(lang, L("13–14 Mar 2569", "13–14 มี.ค. 2569", "3月13–14日", "13–14 мар")),
      title: t(
        lang,
        L(
          "Pattaya Music Festival — Jomtien",
          "เทศกาลดนตรีพัทยา — จอมเทียน",
          "芭提雅音乐节 · 乔木提恩",
          "Pattaya Music Festival — Jomtien",
        ),
      ),
      venue: t(lang, L("Jomtien Beach", "หาดจอมเทียน", "乔木提恩海滩", "Пляж Джомтьен")),
      excerpt: t(
        lang,
        L(
          "Second weekend of the city music festival — calmer beach vibe with live bands along Jomtien.",
          "สุดสัปดาห์ที่สองของเทศกาลดนตรี — บรรยากาศชายหาดจอมเทียนพร้อมวงดนตรีสด",
          "音乐节第二站——乔木提恩海滨现场乐队，氛围更悠闲。",
          "Второй уикенд фестиваля — живые группы на пляже Джомтьен.",
        ),
      ),
      category: "festival",
      categoryLabel: cat(lang, "festival"),
      image: eventsImages.beachConcert,
      imageAlt: t(lang, L("Music festival Jomtien", "เทศกาลดนตรีจอมเทียน", "乔木提恩音乐节", "Фестиваль Джомтьен")),
      href: "/explore/beaches",
    },
    {
      id: "music-festival-koh-larn",
      time: t(lang, L("20–21 Mar 2569", "20–21 มี.ค. 2569", "3月20–21日", "20–21 мар")),
      title: t(
        lang,
        L(
          "Pattaya Music Festival — Koh Larn",
          "เทศกาลดนตรีพัทยา — เกาะล้าน",
          "芭提雅音乐节 · 格兰岛",
          "Pattaya Music Festival — Koh Larn",
        ),
      ),
      venue: t(lang, L("Samae Beach, Koh Larn", "หาดแสม เกาะล้าน", "格兰岛 Samae 海滩", "Samae Beach, Koh Larn")),
      excerpt: t(
        lang,
        L(
          "Week 3 on Samae Beach — ferry over for island stages and sunset sets.",
          "สัปดาห์ที่ 3 ที่หาดแสม — นั่งเรือไปฟังดนตรีริมหาดและโชว์ยามเย็น",
          "第三站 Samae 海滩——渡轮上岛听现场与日落演出。",
          "Неделя 3 на Samae Beach — паром и закатные сеты.",
        ),
      ),
      category: "festival",
      categoryLabel: cat(lang, "festival"),
      image: eventsImages.yachtShow,
      imageAlt: t(lang, L("Koh Larn beach event", "งานริมหาดเกาะล้าน", "格兰岛海滩活动", "Koh Larn")),
      href: "/explore/beaches",
    },
    {
      id: "music-festival-beach-finale",
      time: t(lang, L("27–28 Mar 2569", "27–28 มี.ค. 2569", "3月27–28日", "27–28 мар")),
      title: t(
        lang,
        L(
          "Pattaya Music Festival — Lan Po Finale",
          "เทศกาลดนตรีพัทยา — ปิดท้ายลานโพธิ์",
          "芭提雅音乐节 · 兰波收官",
          "Pattaya Music Festival — Lan Po Finale",
        ),
      ),
      venue: t(lang, L("Lan Po Naklua Public Park", "สวนสาธารณะลานโพธิ์ นาเกลือ", "那库拉兰波公园", "Lan Po Naklua Park")),
      excerpt: t(
        lang,
        L(
          "Final weekend at Lan Po Naklua — closing sets and the biggest crowds of the March series.",
          "ปิดท้ายที่ลานโพธิ์นาเกลือ — โชว์สุดท้ายและคนเยอะที่สุดของเดือนมีนาคม",
          "那库拉兰波公园收官——三月系列最盛大一站。",
          "Финал в Lan Po Naklua — самые большие толпы в марте.",
        ),
      ),
      category: "festival",
      categoryLabel: cat(lang, "festival"),
      image: eventsImages.beachConcert,
      imageAlt: t(lang, L("Music festival finale Pattaya Beach", "ปิดท้ายเทศกาลดนตรีหาดพัทยา", "芭提雅音乐节收官", "Финал фестиваля")),
      href: "/explore/beaches",
    },
    {
      id: "fitz-tennis",
      time: t(lang, L("6–8 Mar 2569", "6–8 มี.ค. 2569", "3月6–8日", "6–8 мар")),
      title: t(
        lang,
        L(
          "Fitz Club Tennis Championship",
          "Fitz Club Tennis Championship",
          "Fitz Club 网球锦标赛",
          "Fitz Club Tennis Championship",
        ),
      ),
      venue: t(lang, L("Fitz Club, Royal Cliff", "Fitz Club (รอยัล คลิฟ)", "Fitz Club · Royal Cliff", "Fitz Club, Royal Cliff")),
      excerpt: t(
        lang,
        L(
          "Pro and amateur tennis at international-standard courts on Pratumnak Hill — a March sports highlight.",
          "เทนนิสมืออาชีพและสมัครเล่นบนสนามมาตรฐานสากลบนพระตำหนัก — ไฮไลต์กีฬาเดือนมีนาคม",
          "帕坦纳克国际标准球场——三月网球赛事亮点。",
          "Теннис на Pratumnak — спортивный хайлайт марта.",
        ),
      ),
      category: "family",
      categoryLabel: cat(lang, "family"),
      image: eventsImages.wellness,
      imageAlt: t(lang, L("Tennis at Royal Cliff", "เทนนิสรอยัล คลิฟ", "Royal Cliff 网球", "Теннис Royal Cliff")),
      href: "/news/sports",
    },
    {
      id: "pattaya-fashion-week",
      time: t(lang, L("28–29 Mar 2569", "28–29 มี.ค. 2569", "3月28–29日", "28–29 мар")),
      title: t(
        lang,
        L(
          "Pattaya Fashion Week 2026",
          "เทศกาลแฟชั่นวีคพัทยา 2569",
          "2026 芭提雅时装周",
          "Pattaya Fashion Week 2026",
        ),
      ),
      venue: t(
        lang,
        L("Sunken Beachfront, Central Festival", "ลานกิจกรรม Sunken Beachfront เซ็นทรัล",
          "Central Festival Sunken Beachfront", "Sunken Beachfront, Central Festival"),
      ),
      excerpt: t(
        lang,
        L(
          "International runway shows and summer collections on a beachfront stage at Central Pattaya.",
          "รันเวย์ระดับนานาชาติและคอลเลกชันซัมเมอร์บนเวทีริมทะเลที่เซ็นทรัลพัทยา",
          "芭提雅中心海滨 T 台——国际走秀与夏季系列发布。",
          "Международный runway у Central Festival на берегу.",
        ),
      ),
      category: "festival",
      categoryLabel: cat(lang, "festival"),
      image: eventsImages.walkingStreet,
      imageAlt: t(lang, L("Fashion runway Pattaya", "รันเวย์แฟชั่นพัทยา", "芭提雅时装秀", "Fashion Week Паттайя")),
      href: "/explore/beaches",
    },
    {
      id: "trail-run",
      time: t(lang, L("16 Aug 2569", "16 ส.ค. 2569", "8月16日", "16 авг")),
      title: t(
        lang,
        L(
          "Pattaya Trail Running Competition 2026",
          "การแข่งขันวิ่งพัทยาเทรล 2569",
          "2026 芭提雅越野跑",
          "Pattaya Trail Running 2026",
        ),
      ),
      venue: t(lang, L("Bali Hai Pier", "แหลมบาลีฮาย", "巴厘海码头", "Bali Hai Pier")),
      excerpt: t(
        lang,
        L(
          "Trail run through coastal hills with sea views — a challenge for runners who want nature and scenery.",
          "วิ่งเทรลท่ามกลางธรรมชาติและวิวทะเล — ท้าทายสำหรับนักวิ่งที่รักธรรมชาติ",
          "沿海丘陵越野——热爱自然与海景的跑者挑战。",
          "Трейл с видом на море — для любителей природы.",
        ),
      ),
      category: "family",
      categoryLabel: cat(lang, "family"),
      image: eventsImages.wellness,
      imageAlt: t(lang, L("Trail running Pattaya", "วิ่งเทรลพัทยา", "芭提雅越野跑", "Трейл Паттайя")),
      href: "/news/sports",
    },
    {
      id: "loma-run",
      time: t(lang, L("Sep 2569", "ก.ย. 2569", "2569年9月", "сен 2026")),
      title: t(
        lang,
        L("Loma Run 2026", "การแข่งขันวิ่งโลมา 2569", "2026 Loma Run", "Loma Run 2026"),
      ),
      venue: t(lang, L("Jomtien Beach", "หาดจอมเทียน", "乔木提恩海滩", "Пляж Джомтьен")),
      excerpt: t(
        lang,
        L(
          "Seaside fun run for beginners and pros — colourful, relaxed, and open to all paces.",
          "วิ่งริมทะเลสนุกๆ ทั้งมือใหม่และมืออาชีพ — สดใส ผ่อนคลาย ทุกระดับ",
          "海滨趣味跑——新手与老手皆宜，轻松 colourful。",
          "Весёлый забег у моря — для всех уровней.",
        ),
      ),
      category: "family",
      categoryLabel: cat(lang, "family"),
      image: eventsImages.wellness,
      imageAlt: t(lang, L("Beach run Jomtien", "วิ่งริมหาดจอมเทียน", "乔木提恩海滨跑", "Забег Джомтьен")),
      href: "/news/sports",
    },
    {
      id: "fitz-squash",
      time: t(lang, L("Sep 2569 · dates TBC", "ก.ย. 2569 · รอประกาศ", "2569年9月 · 待定", "сен 2026 · TBC")),
      title: t(
        lang,
        L(
          "Fitz Club Squash Tournament",
          "FITZ Club Squash Tournament",
          "Fitz Club 壁球赛",
          "Fitz Club Squash Tournament",
        ),
      ),
      venue: t(lang, L("Fitz Club, Royal Cliff", "Fitz Club (รอยัล คลิฟ)", "Fitz Club · Royal Cliff", "Fitz Club, Royal Cliff")),
      excerpt: t(
        lang,
        L(
          "International-standard squash — amateurs and pros face off in fast indoor rallies at Royal Cliff.",
          "สควอชมาตรฐานสากล — มือสมัครเล่นและมืออาชีพแข่งขันในสนามในร่มที่รอยัล คลิฟ",
          "国际标准壁球——业余与职业选手在 Royal Cliff 室内对决。",
          "Сквош на Fitz Club — любители и профи в Royal Cliff.",
        ),
      ),
      category: "family",
      categoryLabel: cat(lang, "family"),
      image: eventsImages.wellness,
      imageAlt: t(lang, L("Squash tournament Royal Cliff", "แข่งสควอชรอยัล คลิฟ", "壁球赛", "Squash Royal Cliff")),
      href: "/news/sports",
    },
    {
      id: "bikini-beach-race",
      time: t(lang, L("Dec 2569 · dates TBC", "ธ.ค. 2569 · รอประกาศ", "2569年12月 · 待定", "дек 2026 · TBC")),
      title: t(
        lang,
        L(
          "Pattaya Bikini Run 2026",
          "Pattaya Bikini Run 2569",
          "2026 芭提雅比基尼跑",
          "Pattaya Bikini Run 2026",
        ),
      ),
      venue: t(
        lang,
        L("Pattaya Beach (Central Festival area)", "ชายหาดพัทยา (หน้าเซ็นทรัล)", "芭提雅海滩（Central 一带）", "Pattaya Beach, Central area"),
      ),
      excerpt: t(
        lang,
        L(
          "Playful beach run in bikinis or fancy dress — fitness, photo ops, and sea-breeze fun before New Year.",
          "วิ่งชายหาดสนุกๆ ในชุดบิกินี่หรือแฟนซี — ฟิตเนส ถ่ายรูป และลมทะเลก่อนส่งท้ายปี",
          "比基尼或趣味装扮海滨跑——健身、拍照与年末海风乐趣。",
          "Весёлый пляжный забег в бикини — фитнес и фото перед Новым годом.",
        ),
      ),
      category: "family",
      categoryLabel: cat(lang, "family"),
      image: eventsImages.beachConcert,
      imageAlt: t(lang, L("Beach race Pattaya", "วิ่งชายหาดพัทยา", "芭提雅海滩跑", "Пляжный забег")),
      href: "/news/sports",
    },
    {
      id: "loy-krathong",
      time: t(lang, L("24 Nov 2569", "24 พ.ย. 2569", "11月24日", "24 ноя")),
      title: t(
        lang,
        L("Loy Krathong Festival Pattaya", "ประเพณีลอยกระทง พัทยา", "芭提雅水灯节", "Loy Krathong Pattaya"),
      ),
      venue: t(
        lang,
        L("Lan Anekprasong, Lan Po Naklua & Koh Larn", "ลานอเนกประสงค์ ลานโพธิ์ นาเกลือ & เกาะล้าน", "多功能广场、那库拉与格兰岛", "Lan Anekprasong, Naklua, Koh Larn"),
      ),
      excerpt: t(
        lang,
        L(
          "Floating krathong on the water, cultural performances, and lantern-lit evenings across Pattaya.",
          "ลอยกระทง การแสดงศิลปวัฒนธรรม และค่ำคืนแสงไฟทั่วพัทยา",
          "水灯漂流、文化表演与灯火之夜遍布芭提雅。",
          "Лой кратонг, культурные шоу и вечера с огнями.",
        ),
      ),
      category: "localFestival",
      categoryLabel: cat(lang, "localFestival"),
      image: eventsImages.fireworks,
      imageAlt: t(lang, L("Loy Krathong lanterns", "ลอยกระทง", "水灯节", "Loy Krathong")),
      href: "/explore/beaches",
    },
    {
      id: "rolling-loud-thailand",
      time: t(lang, L("Nov 2569 · dates TBC", "พ.ย. 2569 · รอประกาศ", "2569年11月 · 待定", "ноя 2026 · TBC")),
      title: t(
        lang,
        L("Rolling Loud Thailand 2026", "Rolling Loud Thailand 2569", "Rolling Loud Thailand 2026", "Rolling Loud Thailand 2026"),
      ),
      venue: t(lang, L("Pattaya · venue TBC", "พัทยา · รอประกาศสถานที่", "芭提雅 · 场地待定", "Pattaya · venue TBC")),
      excerpt: t(
        lang,
        L(
          "World's biggest hip-hop festival returns to Thailand — global rap headliners and massive production expected late 2026.",
          "เทศกาลฮิปฮอปที่ใหญ่ที่สุดในโลกกลับมาไทย — ศิลปินแรประดับโลกและโปรดักชันยิ่งใหญ่ปลายปี",
          "全球最大嘻哈节重返泰国——预计2026年末国际说唱巨星与震撼制作。",
          "Крупнейший hip-hop фестиваль — мировые хедлайнеры в конце 2026.",
        ),
      ),
      category: "concert",
      categoryLabel: cat(lang, "concert"),
      image: eventsImages.beachConcert,
      imageAlt: t(lang, L("Hip-hop festival stage", "เวทีฮิปฮอป", "嘻哈音乐节", "Hip-hop festival")),
      href: "/explore/nightlife",
    },
    {
      id: "coffee-on-the-beach",
      time: t(lang, L("Nov 2569 · dates TBC", "พ.ย. 2569 · รอประกาศ", "2569年11月 · 待定", "ноя 2026 · TBC")),
      title: t(
        lang,
        L(
          "Chonburi Coffee on the Beach 2026",
          "Chonburi Coffee on the Beach 2569",
          "2026 春武里海滩咖啡节",
          "Chonburi Coffee on the Beach 2026",
        ),
      ),
      venue: t(lang, L("Central Pattaya Beach", "ชายหาดพัทยากลาง", "芭提雅中心海滩", "Central Pattaya Beach")),
      excerpt: t(
        lang,
        L(
          "60+ specialty cafés pop up on the sand — barista workshops, roasters, and chill seaside coffee culture.",
          "คาเฟ่พิเศษกว่า 60 ร้านบนชายหาด — เวิร์กช็อปบาริสต้า โรงคั่ว และวัฒนธรรมกาแฟริมทะเล",
          "60+ 精品咖啡品牌齐聚沙滩—— barista 工作坊与海滨咖啡文化。",
          "60+ specialty кофеен на песке — barista workshops и chill у моря.",
        ),
      ),
      category: "market",
      categoryLabel: cat(lang, "market"),
      image: eventsImages.foodFestival,
      imageAlt: t(lang, L("Coffee festival on the beach", "เทศกาลกาแฟริมหาด", "海滩咖啡节", "Coffee on the Beach")),
      href: "/explore/cafes",
    },
    {
      id: "itf-masters-tennis",
      time: t(lang, L("Nov 2569 · dates TBC", "พ.ย. 2569 · รอประกาศ", "2569年11月 · 待定", "ноя 2026 · TBC")),
      title: t(
        lang,
        L(
          "ITF Masters Championship (MT700)",
          "ITF Masters Championship",
          "ITF Masters 网球锦标赛",
          "ITF Masters Championship",
        ),
      ),
      venue: t(lang, L("Fitz Club, Royal Cliff", "Fitz Club (รอยัล คลิฟ)", "Fitz Club · Royal Cliff", "Fitz Club, Royal Cliff")),
      excerpt: t(
        lang,
        L(
          "International tennis for 35+ players — ITF World Ranking points on pro-standard courts at Royal Cliff.",
          "เทนนิสนานาชาติสำหรับนักแข่ง 35+ — สะสมคะแนน ITF World Ranking บนสนามมาตรฐานที่รอยัล คลิฟ",
          "35+ 选手国际网球赛——Royal Cliff 专业球场争夺 ITF 世界排名积分。",
          "ITF Masters 35+ — рейтинговые очки на Royal Cliff.",
        ),
      ),
      category: "family",
      categoryLabel: cat(lang, "family"),
      image: eventsImages.wellness,
      imageAlt: t(lang, L("ITF Masters tennis", "ITF Masters เทนนิส", "ITF Masters 网球", "ITF Masters")),
      href: "/news/sports",
    },
    {
      id: "tomorrow-thailand",
      time: t(lang, L("11–13 Dec 2569", "11–13 ธ.ค. 2569", "12月11–13日", "11–13 дек")),
      title: t(
        lang,
        L("Tomorrow Thailand 2026", "Tomorrow Thailand 2569", "Tomorrow Thailand 2026", "Tomorrow Thailand 2026"),
      ),
      venue: t(lang, L("Wisdom Valley, Pattaya", "Wisdom Valley พัทยา", "Wisdom Valley 芭提雅", "Wisdom Valley")),
      excerpt: t(
        lang,
        L(
          "Asia's first Tomorrowland-style EDM festival — world DJs and a spectacular stage in Chonburi.",
          "เทศกาล EDM สไตล์ Tomorrowland ครั้งแรกในเอเชีย — ดีเจระดับโลกและเวทีอลังการ",
          "亚洲首届 Tomorrowland 风格 EDM 节——世界级 DJ 与震撼舞台。",
          "Первый EDM-фестиваль в стиле Tomorrowland в Азии — мировые DJ.",
        ),
      ),
      category: "edm",
      categoryLabel: cat(lang, "edm"),
      image: eventsImages.beachConcert,
      imageAlt: t(lang, L("EDM festival stage", "เวที EDM", "EDM 音乐节舞台", "EDM сцена")),
      href: "/explore/nightlife",
    },
    {
      id: "wonderfruit-festival",
      time: t(lang, L("3–7 Dec 2569", "3–7 ธ.ค. 2569", "12月3–7日", "3–7 дек")),
      title: t(
        lang,
        L("Wonderfruit Festival 2026", "Wonderfruit Festival 2569", "Wonderfruit 2026", "Wonderfruit Festival 2026"),
      ),
      venue: t(lang, L("Siam Country Club, Chonburi", "Siam Country Club จ.ชลบุรี", "暹罗乡村俱乐部 · 春武里", "Siam Country Club, Chonburi")),
      excerpt: t(
        lang,
        L(
          "Art, music, and sustainability in green fields — Thailand's flagship creative festival before the December rush.",
          "ศิลปะ ดนตรี และความยั่งยืนท่ามกลางธรรมชาติ — เทศกาลสร้างสรรค์ชั้นนำของไทยก่อนช่วงปลายปี",
          "艺术、音乐与可持续理念——泰国旗舰创意节，拉开十二月旺季序幕。",
          "Искусство, музыка и sustainability — флагманский фестиваль Таиланда.",
        ),
      ),
      category: "festival",
      categoryLabel: cat(lang, "festival"),
      image: eventsImages.beachConcert,
      imageAlt: t(lang, L("Wonderfruit festival", "Wonderfruit", "Wonderfruit 音乐节", "Wonderfruit")),
      href: "/explore/nightlife",
    },
    {
      id: "jazz-festival",
      time: t(lang, L("13–14 Dec 2569", "13–14 ธ.ค. 2569", "12月13–14日", "13–14 дек")),
      title: t(
        lang,
        L(
          "Pattaya International Jazz Festival 2026",
          "เทศกาลดนตรีแจ๊สนานาชาติเมืองพัทยา 2569",
          "2026 芭提雅国际爵士节",
          "Pattaya International Jazz Festival 2026",
        ),
      ),
      venue: t(lang, L("Pattaya Beach", "ชายหาดพัทยา", "芭提雅海滩", "Пляж Паттайя")),
      excerpt: t(
        lang,
        L(
          "Chill jazz by the sea — Thai and international artists on Pattaya's year-end calendar.",
          "แจ๊สชิลล์ริมทะเล — ศิลปินไทยและนานาชาติในช่วงปลายปี",
          "海滨 chill 爵士——年末泰国与国际艺人齐聚。",
          "Джаз у моря — тайские и мировые артисты в конце года.",
        ),
      ),
      category: "concert",
      categoryLabel: cat(lang, "concert"),
      image: eventsImages.beachConcert,
      imageAlt: t(lang, L("Jazz on Pattaya Beach", "แจ๊สหาดพัทยา", "芭提雅海滩爵士", "Джаз на пляже")),
      href: "/explore/beaches",
    },
    {
      id: "naklua-food-walk-dec",
      time: t(lang, L("20 Dec 2569", "20 ธ.ค. 2569", "12月20日", "20 дек")),
      title: t(
        lang,
        L(
          "Naklua Food Walk #18",
          "งานเดินกินถิ่นนาเกลือ ครั้งที่ 18",
          "那库拉美食漫步 #18",
          "Naklua Food Walk #18",
        ),
      ),
      venue: t(lang, L("Lan Po Naklua Old Market", "ตลาดเก่านาเกลือ (ลานโพธิ์)", "那库拉旧市场", "Lan Po Naklua")),
      excerpt: t(
        lang,
        L(
          "Year-end edition of the classic Naklua street-food walk — fresh seafood and heritage village atmosphere.",
          "รอบส่งท้ายปีของงานเดินกินถิ่นนาเกลือ — อาหารทะเลสดและบรรยากาศชุมชนเก่า",
          "年末版那库拉美食漫步——新鲜海鲜与传统社区氛围。",
          "Годовой финал food walk — свежие морепродукты и старый Naklua.",
        ),
      ),
      category: "market",
      categoryLabel: cat(lang, "market"),
      image: eventsImages.nightMarket,
      imageAlt: t(lang, L("Naklua food walk December", "งานเดินกินถิ่นนาเกลือ ธ.ค.", "十二月那库拉美食节", "Naklua Food Walk Dec")),
      href: marketPagePaths.page,
    },
    {
      id: "countdown",
      time: t(lang, L("29–31 Dec 2569", "29–31 ธ.ค. 2569", "12月29–31日", "29–31 дек")),
      title: t(
        lang,
        L("Pattaya Countdown 2027", "งานพัทยาเคาท์ดาวน์ 2570", "芭提雅跨年 2027", "Pattaya Countdown 2027"),
      ),
      venue: t(lang, L("Pattaya Beach", "ชายหาดพัทยา", "芭提雅海滩", "Пляж Паттайя")),
      excerpt: t(
        lang,
        L(
          "New Year's Eve concerts and fireworks on the beach — Pattaya's biggest night of the year.",
          "คอนเสิร์ตส่งท้ายปีและพลุริมทะเล — คืนที่ยิ่งใหญ่ที่สุดของพัทยา",
          "跨年音乐会与海滨烟花——芭提雅最盛大的夜晚。",
          "Новогодние концерты и фейерверки — главная ночь года.",
        ),
      ),
      category: "concert",
      categoryLabel: cat(lang, "concert"),
      image: eventsImages.fireworks,
      imageAlt: t(lang, L("New Year countdown Pattaya", "เคาท์ดาวน์พัทยา", "芭提雅跨年", "Countdown Паттайя")),
      href: "/explore/beaches",
    },
  ];
}

export type EventsHubEventPreview = EventsHubEvent & { lines: string[] };

const homeWeekPreviewLines: Record<
  string,
  [ReturnType<typeof L>, ReturnType<typeof L>, ReturnType<typeof L>]
> = {
  "pride-festival": [
    L("Pattaya Beach · 26–28 Jun", "ชายหาดพัทยา · 26–28 มิ.ย.", "芭提雅海滩 · 6月26–28日", "Пляж · 26–28 июн"),
    L("Parade and live music along the seafront.", "ขบวนพาเหรดและดนตรีสดเลียบชายหาด", "海滨游行与现场音乐。", "Парад и музыка на набережной."),
    L("Free entry — arrive early for parade viewing spots.", "เข้างานฟรี — มาถึงก่อนเพื่อจุดชมขบวน", "免费入场——提早占位看游行。", "Бесплатно — приезжайте заранее."),
  ],
  "tomorrow-thailand": [
    L("Wisdom Valley · 11–13 Dec", "Wisdom Valley · 11–13 ธ.ค.", "Wisdom Valley · 12月11–13日", "Wisdom Valley · 11–13 дек"),
    L("Asia's first Tomorrowland-style EDM festival in Pattaya.", "เทศกาล EDM สไตล์ Tomorrowland ครั้งแรกในเอเชีย", "亚洲首届 Tomorrowland 风格 EDM。", "Первый EDM в стиле Tomorrowland в Азии."),
    L("Book tickets early — international DJs and large crowds.", "จองตั๋วล่วงหน้า — ดีเจนานาชาติและคนเยอะ", "建议提早购票——国际 DJ 与人潮。", "Билеты заранее — мировые DJ."),
  ],
  "pattaya-marathon": [
    L("City route · 18–19 Jul", "เส้นทางรอบเมือง · 18–19 ก.ค.", "环城路线 · 7月18–19日", "Маршрут · 18–19 июл"),
    L("International marathon along beach roads and landmarks.", "มาราธอนนานาชาติเลียบชายหาดและแลนด์มาร์ก", "沿海滨与国际地标的路跑。", "Марафон вдоль пляжа и достопримечательностей."),
    L("Register online — starts near Terminal 21 Pattaya.", "สมัครออนไลน์ — เริ่มใกล้ Terminal 21", "在线报名——起点近 Terminal 21。", "Регистрация онлайн — старт у Terminal 21."),
  ],
  countdown: [
    L("Pattaya Beach · 29–31 Dec", "ชายหาดพัทยา · 29–31 ธ.ค.", "芭提雅海滩 · 12月29–31日", "Пляж · 29–31 дек"),
    L("New Year's Eve concerts and beach fireworks.", "คอนเสิร์ตส่งท้ายปีและพลุริมทะเล", "跨年音乐会与海滨烟花。", "Новогодние концерты и фейерверки."),
    L("Free on the beach — arrive before sunset for a spot.", "ฟรีริมหาด — มาก่อนพระอาทิตย์ตกเพื่อจุดชม", "海滩免费——日落前到场占位。", "Бесплатно на пляже — до заката."),
  ],
};

export function getHomeEventsWeek(lang: LanguageCode) {
  const events = enrichEvents(lang, weekEvents(lang))
    .slice(0, 4)
    .map((event) => {
      const lines = homeWeekPreviewLines[event.id];
      return {
        ...event,
        lines: lines
          ? [t(lang, lines[0]), t(lang, lines[1]), t(lang, lines[2])]
          : [event.venue, event.excerpt, event.time],
      };
    });

  return {
    title: t(lang, sections.weekTitle),
    subtitle: t(lang, sections.weekSubtitle),
    viewAll: t(lang, L("View all events", "ดูงานทั้งหมด", "查看全部活动", "Все события")),
    viewAllHref: "/events",
    eventCta: t(lang, sections.eventDetailsCta),
    events,
  };
}

export function getEventsHub(lang: LanguageCode) {
  const locale =
    lang === "th"
      ? "th-TH"
      : lang === "zh"
        ? "zh-CN"
        : lang === "ru"
          ? "ru-RU"
          : "en-US";

  const todayFormatted = new Intl.DateTimeFormat(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  const coreToday = todayEvents(lang);
  const coreWeek = weekEvents(lang);
  const mergedCore = [
    ...coreToday,
    ...coreWeek.filter((event) => !coreToday.some((today) => today.id === event.id)),
  ];
  const allEvents = enrichEvents(lang, mergedCore);
  const eventIds = allEvents.map((event) => event.id);
  const todayKey = eventDateKey(new Date());
  const todayLabel = t(lang, L("Today", "วันนี้", "今天", "Сегодня"));

  const featuredEvent = allEvents.find((event) => event.id === "fireworks-festival") ?? allEvents[0];

  return {
    hero: {
      badge: t(lang, hero.badge),
      title: t(lang, hero.title),
      titleTh: t(lang, hero.titleTh),
      description: t(lang, hero.description),
    },
    todayFormatted,
    filters: {
      calendarTitle: t(lang, sections.calendarTitle),
      category: t(lang, sections.filterCategory),
      location: t(lang, sections.filterLocation),
      price: t(lang, sections.filterPrice),
      language: t(lang, sections.filterLanguage),
      all: t(lang, sections.filterAll),
      resultsCount: (n: number) =>
        t(lang, sections.resultsCount).replace("{n}", String(n)),
      noResults: t(lang, sections.noResults),
      clearFilters: t(lang, sections.clearFilters),
      bookTickets: t(lang, sections.bookTickets),
      viewMap: t(lang, sections.viewMap),
      forumDiscuss: t(lang, sections.forumDiscuss),
      organizerLabel: t(lang, sections.organizerLabel),
      yearOverview: t(lang, sections.yearOverview),
    },
    browseCategories: [
      { id: "all" as const, label: t(lang, sections.filterAll) },
      ...getActiveEventCategories(allEvents).map((id) => ({ id, label: cat(lang, id) })),
    ],
    locationFilters: [
      { id: "all" as const, label: t(lang, sections.filterAll) },
      { id: "central" as const, label: t(lang, L("Central Pattaya", "พัทยากลาง", "芭提雅中心", "Центр")) },
      { id: "jomtien" as const, label: t(lang, L("Jomtien", "จอมเทียน", "乔木提恩", "Джомтьен")) },
      { id: "naklua" as const, label: t(lang, L("Naklua / North", "นาเกลือ / เหนือ", "那库拉/北区", "Naklua")) },
      { id: "pratumnak" as const, label: t(lang, L("Pratumnak", "พระตำหนัก", "帕坦纳克", "Pratumnak")) },
      { id: "marina" as const, label: t(lang, L("Marina", "มารีน่า", "游艇港", "Марина")) },
      { id: "banglamung" as const, label: t(lang, L("Banglamung", "บางละมุง", "邦拉蒙", "Banglamung")) },
    ],
    priceFilters: [
      { id: "all" as const, label: t(lang, sections.filterAll) },
      { id: "free" as const, label: t(lang, L("Free", "ฟรี", "免费", "Бесплатно")) },
      { id: "paid" as const, label: t(lang, L("Paid", "มีค่าใช้จ่าย", "收费", "Платно")) },
      { id: "donation" as const, label: t(lang, L("Donation", "บริจาค", "随喜", "Donation")) },
    ],
    languageFilters: [
      { id: "all" as const, label: t(lang, sections.filterAll) },
      { id: "th" as const, label: t(lang, L("Thai", "ไทย", "泰语", "Тайский")) },
      { id: "en" as const, label: t(lang, L("English", "อังกฤษ", "英语", "Английский")) },
      { id: "zh" as const, label: t(lang, L("Chinese", "จีน", "中文", "Китайский")) },
      { id: "ru" as const, label: t(lang, L("Russian", "ภาษารัสเซีย", "俄语", "Русский")) },
      { id: "multi" as const, label: t(lang, L("Multilingual", "หลายภาษา", "多语言", "Multilingual")) },
    ],
    calendarYear: EVENTS_CALENDAR_YEAR,
    locale,
    todayKey,
    todayLabel,
    eventIds,
    initialCalendarMonth: initialCalendarMonth(),
    sections: {
      featuredLabel: t(lang, sections.featuredLabel),
      todayTitle: t(lang, sections.todayTitle),
      todaySubtitle: t(lang, sections.todaySubtitle),
      weekTitle: t(lang, sections.weekTitle),
      weekSubtitle: t(lang, sections.weekSubtitle),
      promotedTitle: t(lang, sections.promotedTitle),
      tipsTitle: t(lang, sections.tipsTitle),
      exploreCta: t(lang, sections.exploreCta),
      eventDetailsCta: t(lang, sections.eventDetailsCta),
      addEvent: t(lang, sections.addEvent),
    },
    featured: {
      title: t(lang, featured.title),
      excerpt: t(lang, featured.excerpt),
      time: t(lang, featured.time),
      venue: t(lang, featured.venue),
      image: eventsImages.heroFeatured,
      imageAlt: t(
        lang,
        L("Live music crowd at Pattaya beach event", "งานดนตรีสดริมหาดพัทยา", "芭提雅海滩活动现场", "Концерт на пляже"),
      ),
      href: "/explore/beaches",
      organizer: featuredEvent?.organizer ?? "",
      mapHref: featuredEvent?.mapHref ?? "",
      ticketsHref: featuredEvent?.primaryCtaHref ?? "/explore/beaches",
      ticketing: featuredEvent?.ticketing ?? "free",
      primaryCtaLabel: featuredEvent?.primaryCtaLabel ?? t(lang, sections.freeEntry),
      primaryCtaHref: featuredEvent?.primaryCtaHref ?? "/explore/beaches",
      forumHref: featuredEvent?.forumHref ?? "/forum/trending",
      priceLabel: featuredEvent?.priceLabel ?? t(lang, L("Free", "ฟรี", "免费", "Бесплатно")),
    },
    promoted: {
      title: t(lang, promoted.title),
      excerpt: t(lang, promoted.excerpt),
      when: t(lang, promoted.when),
      href: "/explore/beaches",
    },
    tips: tips.map((tip) => ({
      title: t(lang, tip.title),
      text: t(lang, tip.text),
    })),
    allEvents,
    todayEvents: allEvents.filter((event) => eventOccursOn(event.id, todayKey)),
    weekEvents: allEvents.filter((event) => !eventOccursOn(event.id, todayKey)),
  };
}
