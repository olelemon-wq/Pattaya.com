import type { LanguageCode } from "@/lib/i18n/languages";
import { marketPagePaths } from "@/lib/design/market-page-paths";
import { L, t } from "@/lib/i18n/living-helpers";
import { eventsImages } from "@/lib/design/events-images";

export type EventCategoryId =
  | "festival"
  | "market"
  | "nightlife"
  | "food"
  | "family"
  | "business"
  | "sports";

export type EventsHubEvent = {
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

const categoryLabels = {
  festival: L("Festival", "เทศกาล", "节庆", "Фестиваль"),
  market: L("Market", "ตลาด", "市场", "Рынок"),
  nightlife: L("Nightlife", "ไนท์ไลฟ์", "夜生活", "Ночная жизнь"),
  food: L("Food & Drink", "อาหาร & เครื่องดื่ม", "餐饮", "Еда и напитки"),
  family: L("Family", "ครอบครัว", "亲子", "Семья"),
  business: L("Business", "ธุรกิจ", "商务", "Бизнес"),
  sports: L("Sports", "กีฬา", "体育", "Спорт"),
} as const;

function cat(lang: LanguageCode, id: EventCategoryId) {
  return t(lang, categoryLabels[id]);
}

const hero = {
  badge: L("Calendar", "ปฏิทิน", "日历", "Календарь"),
  title: L("Events Today", "งานวันนี้", "今日活动", "События сегодня"),
  titleTh: L("งานวันนี้", "งานวันนี้", "今日活动", "События сегодня"),
  description: L(
    "Discover what's happening in Pattaya today — festivals, markets, live music, and local happenings updated daily.",
    "ค้นหางานและกิจกรรมในพัทยาวันนี้ — เทศกาล ตลาด ดนตรีสด และงานท้องถิ่น อัปเดตทุกวัน",
    "探索芭提雅今日活动——节庆、市集、现场音乐与本地盛事，每日更新。",
    "Что происходит в Паттайе сегодня — фестивали, рынки, музыка и местные события.",
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
  exploreCta: L("Explore venue →", "ดูสถานที่ →", "查看场地 →", "Место →"),
  eventDetailsCta: L(
    "View event details →",
    "ดูรายละเอียดกิจกรรม →",
    "查看活动详情 →",
    "Подробнее о событии →",
  ),
  addEvent: L(
    "List your event on Pattaya.com",
    "ลงประกาศงานบน Pattaya.com",
    "在 Pattaya.com 发布活动",
    "Разместить событие",
  ),
};

const featured = {
  title: L(
    "Pattaya Beach Fireworks & Live Music",
    "ดอกไม้ไฟริมหาดพัทยา & ดนตรีสด",
    "芭提雅海滩烟花与现场音乐",
    "Фейерверк и живая музыка на пляже",
  ),
  excerpt: L(
    "Free waterfront show at Pattaya Beach — arrive by 19:30 for food stalls and seating near Walking Street south end.",
    "งานฟรีริมชายหาด — แนะนำมาถึง 19:30 น. มีสตรีทฟู้ดและที่นั่งแถวทางเข้า Walking Street ฝั่งใต้",
    "芭提雅海滩免费活动——建议 19:30 前到达，步行街南端附近有小吃与座位。",
    "Бесплатное шоу на пляже — приезжайте к 19:30, фуд-корты у южного входа на Walking Street.",
  ),
  time: L("Tonight · 20:00–21:30", "คืนนี้ · 20:00–21:30", "今晚 · 20:00–21:30", "Сегодня · 20:00–21:30"),
  venue: L("Pattaya Beach, near Walking Street", "หาดพัทยา ใกล้ Walking Street", "芭提雅海滩，近步行街", "Пляж Паттайя, у Walking Street"),
};

const tips = [
  {
    title: L("Beat the crowds", "หลีกเลี่ยงคนแน่น", "避开人潮", "Без толпы"),
    text: L(
      "Night markets peak 19:00–21:00 — go at 17:30 for parking and the best food lines.",
      "ตลาดคึก 19:00–21:00 — ไป 17:30 จอดรถง่ายและของอร่อยครบ",
      "夜市 19:00–21:00 最挤——17:30 到场停车和排队更轻松。",
      "Пик рынков 19:00–21:00 — в 17:30 проще с парковкой.",
    ),
  },
  {
    title: L("Dress & weather", "แต่งตัว & อากาศ", "穿着与天气", "Одежда и погода"),
    text: L(
      "Beach events are breezy after sunset — light layers and cash for street vendors.",
      "งานริมทะเลลมแรงหลังพระอาทิตย์ตก — เสื้อบางๆ และพกเงินสด",
      "海滨晚间有风——带薄外套和现金更方便。",
      "На пляже вечером ветрено — лёгкая куртка и наличные.",
    ),
  },
  {
    title: L("Getting there", "การเดินทาง", "交通", "Как добраться"),
    text: L(
      "Songthaew routes 2 and 3 serve the beach loop — agree fare before boarding.",
      "สองแถวสาย 2 และ 3 วนรอบชายหาด — ตกลงราคาก่อนขึ้น",
      "2、3 号双条车绕海滩——上车前确认票价。",
      "Songthaew №2 и №3 — договоритесь о цене заранее.",
    ),
  },
];

const promoted = {
  title: L("Pattaya Tech Meetup", "Pattaya Tech Meetup", "芭提雅科技聚会", "Pattaya Tech Meetup"),
  excerpt: L(
    "Monthly founders & developers night — lightning talks and rooftop networking in Central Pattaya.",
    "พบปะนักพัฒนาและผู้ประกอบการรายเดือน — ไลท์นิ่งทอล์กและเน็ตเวิร์กดาดฟ้าใจกลางเมือง",
    "每月创业者与开发者聚会——闪电演讲与市中心天台交流。",
    "Ежемесячная встреча разработчиков — короткие доклады и нетворкинг на крыше.",
  ),
  when: L("Thu · 18:30", "พฤ. · 18:30", "周四 · 18:30", "Чт · 18:30"),
};

function todayEvents(lang: LanguageCode): EventsHubEvent[] {
  return [
    {
      id: "fireworks",
      time: "20:00",
      title: t(lang, featured.title),
      venue: t(lang, featured.venue),
      excerpt: t(lang, featured.excerpt),
      category: "festival",
      categoryLabel: cat(lang, "festival"),
      image: eventsImages.fireworks,
      imageAlt: t(lang, L("Fireworks over Pattaya Beach", "ดอกไม้ไฟเหนือหาดพัทยา", "芭提雅海滩烟花", "Фейерверк над пляжем")),
      href: "/explore/beaches",
    },
    {
      id: "thepprasit",
      time: "17:00",
      title: t(
        lang,
        L("Thepprasit Night Market", "ตลาดเทพประสิทธิ์", "Thepprasit 夜市", "Ночной рынок Thepprasit"),
      ),
      venue: t(lang, L("Thepprasit Rd, south Pattaya", "ถ.เทพประสิทธิ์ ใต้เมือง", "Thepprasit 路", "Thepprasit Rd")),
      excerpt: t(
        lang,
        L(
          "Street food, live music weekends, and late-night bargains — one of the city's busiest bazaars.",
          "สตรีทฟู้ด ดนตรีสดสุดสัปดาห์ และของถูกดึกๆ — หนึ่งในตลาดที่คึกที่สุด",
          "街头美食、周末现场音乐与深夜淘货。",
          "Стритфуд, музыка по выходным и ночные скидки.",
        ),
      ),
      category: "market",
      categoryLabel: cat(lang, "market"),
      image: eventsImages.nightMarket,
      imageAlt: t(lang, L("Thepprasit Night Market stalls", "ร้านค้าตลาดเทพประสิทธิ์", "Thepprasit 夜市摊位", "Рынок Thepprasit")),
      href: marketPagePaths.page,
    },
    {
      id: "walking-street",
      time: "19:00",
      title: t(
        lang,
        L("Walking Street Weekend Walk", "เดินเล่น Walking Street", "步行街周末漫步", "Walking Street"),
      ),
      venue: t(lang, L("Walking Street, Pattaya", "Walking Street พัทยา", "芭提雅步行街", "Walking Street")),
      excerpt: t(
        lang,
        L(
          "Neon lights, street performers, and bars — pedestrian-only after 19:00 on Fri–Sun.",
          "ไฟนีออน ศิลปินถนน และบาร์ — เดินได้หลัง 19:00 ศ–อา",
          "霓虹、街头艺人与酒吧——周五至周日 19:00 后步行街。",
          "Неон, уличные артисты и бары — пешеходная зона с 19:00 пт–вс.",
        ),
      ),
      category: "nightlife",
      categoryLabel: cat(lang, "nightlife"),
      image: eventsImages.walkingStreet,
      imageAlt: t(lang, L("Walking Street at night", "Walking Street ยามค่ำ", "夜晚步行街", "Walking Street ночью")),
      href: marketPagePaths.streetFoodSection,
    },
    {
      id: "sunset-sounds",
      time: "17:30",
      title: t(
        lang,
        L("Jomtien Beach Acoustic Sunset", "อะคูสติกพระอาทิตย์ตกจอมเทียน", "乔木提恩日落 acoustic", "Закат в Джомтьене"),
      ),
      venue: t(lang, L("Jomtien Beach Road", "ถนนเลียบหาดจอมเทียน", "乔木提恩海滨路", "Jomtien Beach")),
      excerpt: t(
        lang,
        L(
          "Local bands and beach bars — calmer vibe than central Pattaya, great for families.",
          "วงท้องถิ่นและบาร์ริมหาด — บรรยากาศเงียบกว่าใจกลาง เหมาะครอบครัว",
          "本地乐队与海滩酒吧——比市中心安静，适合家庭。",
          "Местные группы и пляжные бары — спокойнее центра, подходит семьям.",
        ),
      ),
      category: "food",
      categoryLabel: cat(lang, "food"),
      image: eventsImages.beachConcert,
      imageAlt: t(lang, L("Live music at Jomtien Beach", "ดนตรีสดหาดจอมเทียน", "乔木提恩现场音乐", "Музыка в Джомтьене")),
      href: "/explore/beaches",
    },
  ];
}

function weekEvents(lang: LanguageCode): EventsHubEvent[] {
  return [
    {
      id: "yacht-show",
      time: t(lang, L("Sat–Sun", "ส–อา", "周六–日", "Сб–Вс")),
      title: t(lang, L("Pattaya Boat & Yacht Show", "งานเรือและยอชต์พัทยา", "芭提雅船艇展", "Выставка яхт")),
      venue: t(lang, L("Ocean Marina Yacht Club", "โอเชียน มารีน่า", "Ocean Marina", "Ocean Marina")),
      excerpt: t(
        lang,
        L("Charter demos, marina tours, and sunset deck parties.", "ทดลองเช่า ทัวร์มารีน่า และปาร์ตี้ดาดฟ้า", "包船体验、码头参观与日落派对。", "Демо чартеров и вечеринки на палубе."),
      ),
      category: "festival",
      categoryLabel: cat(lang, "festival"),
      image: eventsImages.yachtShow,
      imageAlt: t(lang, L("Yachts at marina", "เรือยอชต์ที่มารีน่า", "码头游艇", "Яхты в марине")),
      href: "/explore/luxury/yacht",
    },
    {
      id: "muay-thai",
      time: t(lang, L("Fri · 20:00", "ศ. · 20:00", "周五 · 20:00", "Пт · 20:00")),
      title: t(lang, L("Stadium Muay Thai Night", "มวยไทยสเตเดียมยามค่ำ", "体育场泰拳之夜", "Вечер муай-тай")),
      venue: t(lang, L("Max Muay Thai / Banglamung", "แม็กมวยไทย / บางละมุง", "Max Muay Thai", "Max Muay Thai")),
      excerpt: t(
        lang,
        L("Main-card fights with live music and stadium food.", "คู่เอกพร้อมดนตรีสดและอาหารในสนาม", "正赛、现场音乐与场馆美食。", "Главные бои, музыка и еда на стадионе."),
      ),
      category: "sports",
      categoryLabel: cat(lang, "sports"),
      image: eventsImages.muayThai,
      imageAlt: t(lang, L("Muay Thai ring", "เวทีมวยไทย", "泰拳擂台", "Ринг муай-тай")),
      href: "/news/sports/muay-thai",
    },
    {
      id: "aquaverse",
      time: t(lang, L("Daily · 10:00", "ทุกวัน · 10:00", "每日 · 10:00", "Ежедневно · 10:00")),
      title: t(lang, L("Columbia Pictures Aquaverse", "โคลัมเบีย พิคเจอร์ส อควาเวิร์ส", "哥伦比亚水上乐园", "Aquaverse")),
      venue: t(lang, L("Na Jomtien", "นาเกลือ / จอมเทียน", "纳琼天", "Na Jomtien")),
      excerpt: t(
        lang,
        L("Water park zones and character experiences — book tickets online for skip-the-line.", "โซนสวนน้ำและธีมภาพยนตร์ — จองตั๋วออนไลน์ลดคิว", "水上主题乐园——建议网上预约免排队。", "Аквапарк — билеты онлайн без очереди."),
      ),
      category: "family",
      categoryLabel: cat(lang, "family"),
      image: eventsImages.familyPark,
      imageAlt: t(lang, L("Water park in Pattaya", "สวนน้ำพัทยา", "芭提雅水上乐园", "Аквапарк")),
      href: "/explore/family-activities",
    },
    {
      id: "tech-meetup",
      time: t(lang, promoted.when),
      title: t(lang, promoted.title),
      venue: t(lang, L("Central Pattaya co-working", "โคเวิร์กกิ้งกลางเมือง", "市中心联合办公", "Коворкинг")),
      excerpt: t(lang, promoted.excerpt),
      category: "business",
      categoryLabel: cat(lang, "business"),
      image: eventsImages.techMeetup,
      imageAlt: t(lang, L("Networking event", "งานเน็ตเวิร์ก", "社交活动", "Нетворкинг")),
      href: "/business/networking/events",
    },
    {
      id: "wellness-sunrise",
      time: t(lang, L("Sun · 07:00", "อา. · 07:00", "周日 · 07:00", "Вс · 07:00")),
      title: t(lang, L("Pratumnak Hill Sunrise Yoga", "โยคะพระอาทิตย์ขึ้นพระตำหนัก", "帕坦纳克山日出瑜伽", "Йога на рассвете")),
      venue: t(lang, L("Pratumnak viewpoint", "จุดชมวิวพระตำหนัก", "帕坦纳克观景点", "Смотровая Pratumnak")),
      excerpt: t(
        lang,
        L("Community session — bring mat and water; donations welcome.", "คลาสชุมชน — เตรียมเสื่อและน้ำ", "社区课程——自备瑜伽垫与水。", "Открытая сессия — коврик и вода с собой."),
      ),
      category: "family",
      categoryLabel: cat(lang, "family"),
      image: eventsImages.wellness,
      imageAlt: t(lang, L("Sunrise yoga session", "โยคะยามเช้า", "日出瑜伽", "Йога на рассвете")),
      href: "/explore/wellness",
    },
    {
      id: "cafe-crawl",
      time: t(lang, L("Sat · 14:00", "ส. · 14:00", "周六 · 14:00", "Сб · 14:00")),
      title: t(lang, L("Beach Road Café Crawl", "ทัวร์คาเฟ่เลียบชายหาด", "海滨咖啡巡游", "Кафе-кролл")),
      venue: t(lang, L("Beach Rd · North Pattaya", "ถ.เลียบชายหาด เหนือ", "海滨路北区", "Beach Rd")),
      excerpt: t(
        lang,
        L("Third-wave roasters and sunset terraces — self-guided map on Explore.", "คาเฟ่คราฟต์และดาดฟ้าพระอาทิตย์ตก — ดูแผนที่ใน Explore", "精品咖啡与日落露台——Explore 有地图。", "Крафт-кофе и террасы — карта в Explore."),
      ),
      category: "food",
      categoryLabel: cat(lang, "food"),
      image: eventsImages.foodFestival,
      imageAlt: t(lang, L("Café terrace Pattaya", "คาเฟ่ริมทะเลพัทยา", "芭提雅咖啡馆露台", "Кафе в Паттайе")),
      href: "/explore/cafes",
    },
  ];
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

  return {
    hero: {
      badge: t(lang, hero.badge),
      title: t(lang, hero.title),
      titleTh: t(lang, hero.titleTh),
      description: t(lang, hero.description),
    },
    todayFormatted,
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
    },
    promoted: {
      title: t(lang, promoted.title),
      excerpt: t(lang, promoted.excerpt),
      when: t(lang, promoted.when),
      href: "/business/networking/events",
    },
    tips: tips.map((tip) => ({
      title: t(lang, tip.title),
      text: t(lang, tip.text),
    })),
    todayEvents: todayEvents(lang),
    weekEvents: weekEvents(lang),
  };
}
