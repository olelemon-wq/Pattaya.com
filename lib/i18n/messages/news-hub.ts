import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

export const newsHero = {
  category: L("City Updates", "อัปเดตเมือง", "城市动态", "Новости города"),
  featured: L("Featured", "แนะนำ", "精选", "Рекомендуем"),
  title: L(
    "Pattaya Smart City: Beach Road Infrastructure Overhaul Begins",
    "Pattaya Smart City: เริ่มปรับปรุง Beach Road",
    "芭提雅智慧城市：海滩路基建升级启动",
    "Smart City: модернизация Beach Road",
  ),
  excerpt: L(
    "City Hall unveils a 500 million THB plan to modernize waterfront access and telecom cabling by Q4 2024.",
    "ศาลากลางประกาศแผน 500 ล้านบาทปรับปรุงริมน้ำและสายสื่อสาร",
    "市政厅公布 5 亿泰铢计划，2024 年第四季度前完成海滨与通信改造。",
    "План 500 млн бат на набережную и связь к Q4 2024.",
  ),
  cta: L("Read Full Story", "อ่านฉบับเต็ม", "阅读全文", "Читать"),
  byline: L("By Editor-in-Chief · 2 Hours Ago", "บรรณาธิการ · 2 ชม.ที่แล้ว", "主编 · 2 小时前", "Главред · 2 ч назад"),
};

export function tNewsHero(lang: LanguageCode, key: keyof typeof newsHero): string {
  return t(lang, newsHero[key]);
}

export function getNewsFeaturedCards(lang: LanguageCode) {
  return [
    {
      badge: t(lang, L("Property Market", "ตลาดอสังหา", "房产市场", "Недвижимость")),
      title: t(
        lang,
        L(
          "Wongamat Riviera: New Luxury Penthouse Units Released",
          "Wongamat Riviera: เปิด penthouse ใหม่",
          "Wongamat Riviera：新豪华顶层单位发布",
          "Wongamat Riviera: новые пентхаусы",
        ),
      ),
      excerpt: t(
        lang,
        L(
          "Exclusive preview of highest-floor residences from 25M THB with sea views.",
          "ตัวอย่างห้องชั้นสูงเริ่ม 25 ล้านบาท พร้อมวิวทะเล",
          "最高层住宅预览，起价 2500 万泰铢，海景。",
          "Резиденции от 25 млн бат с видом на море.",
        ),
      ),
      cta: t(lang, L("View Property Ads", "ดูประกาศอสังหา", "查看房源", "Объявления")),
      href: "/news/business/real-estate",
    },
    {
      badge: t(lang, L("Visa News", "ข่าววีซ่า", "签证新闻", "Визы")),
      title: t(
        lang,
        L(
          "New 'Destination Thailand' Visa: Expert Guide",
          "วีซ่า Destination Thailand: คู่มือผู้เชี่ยวชาญ",
          "新「Destination Thailand」签证：专家指南",
          "Виза Destination Thailand: гид",
        ),
      ),
      excerpt: t(
        lang,
        L(
          "Everything about the new 5-year visa for digital nomads and remote workers.",
          "ทุกอย่างเกี่ยวกับวีซ่า 5 ปีสำหรับ digital nomad",
          "数字游民与远程工作者 5 年签证全解。",
          "5-летняя виза для digital nomads.",
        ),
      ),
      cta: t(lang, L("Get Visa Quote", "ขอใบเสนอวีซ่า", "获取签证报价", "Запросить визу")),
      href: "/news/expat/visa",
    },
    {
      heading: t(lang, L("Immigration Updates", "อัปเดตตรวจคนเข้าเมือง", "移民动态", "Immigration")),
      subheading: t(lang, L("90-Day Online Reporting System", "ระบบรายงานตัว 90 วันออนไลน์", "90 天在线报到系统", "Онлайн-отчёт 90 дней")),
      excerpt: t(
        lang,
        L(
          "Maintenance Oct 14–16. Visit Jomtien office or use the mobile app.",
          "ปิดปรับปรุง 14–16 ต.ค. ไปที่สำนักงานจอมเทียนหรือใช้แอป",
          "10 月 14–16 日维护，请至 Jomtien 办事处或使用 App。",
          "Техработы 14–16 окт. Офис в Jomtien или приложение.",
        ),
      ),
      updated: t(lang, L("Updated 15m ago", "อัปเดต 15 นาทีที่แล้ว", "15 分钟前更新", "15 мин назад")),
      cta: t(lang, L("View Detailed Advisory →", "ดูคำแนะนำฉบับเต็ม →", "查看详细公告 →", "Подробнее →")),
      href: "/news/expat/immigration",
    },
  ];
}

export function getNewsSections(lang: LanguageCode) {
  return {
    cityMovements: t(lang, L("City Movements", "ข่าวเคลื่อนไหวในเมือง", "城市动态", "Городские новости")),
    exploreAll: t(lang, L("Explore All →", "ดูทั้งหมด →", "查看全部 →", "Все →")),
    infrastructure: t(lang, L("Infrastructure & Growth", "โครงสร้างพื้นฐาน & การเติบบโต", "基建与增长", "Инфраструктура")),
    q3Update: t(lang, L("Q3 UPDATE", "อัปเดต Q3", "第三季度", "Q3")),
    liveUpdate: t(lang, L("Live Update", "อัปเดตสด", "实时更新", "Live")),
    bookTour: t(lang, L("Book Tour Now", "จองทัวร์เลย", "立即预订", "Забронировать")),
    liveWebcams: t(lang, L("Live Webcams", "กล้องสด", "直播摄像头", "Веб-камеры")),
    sponsored: t(lang, L("SPONSORED", "สปอนเซอร์", "赞助", "Спонсор")),
    walkingStreetNews: t(lang, L("Walking Street News", "ข่าว Walking Street", "Walking Street 新闻", "Walking Street")),
    hotelIndustry: t(lang, L("Hotel Industry", "อุตสาหกรรมโรงแรม", "酒店业", "Отели")),
    neonTitle: t(
      lang,
      L(
        "Walking Street: New 'Neon Garden' Zone Unveiled",
        "Walking Street: เปิดโซน 'Neon Garden'",
        "Walking Street：全新「霓虹花园」区亮相",
        "Walking Street: зона Neon Garden",
      ),
    ),
    neonBody: t(
      lang,
      L(
        "A first look at the redevelopment transforming the iconic street into a world-class pedestrian hub.",
        "ภาพแรกของการปรับโฉมถนนในตำนานให้เป็นทางเดินระดับโลก",
        "一睹将标志性街道改造为世界级步行街的 redevelopment 项目。",
        "Первый взгляд на преображение легендарной улицы.",
      ),
    ),
  };
}

export function getCitySpotlights(lang: LanguageCode) {
  return {
    hotel: {
      href: "/news/business/hotels",
      eyebrow: t(lang, L("Hotel Industry", "อุตสาหกรรมโรงแรม", "酒店业", "Отели")),
      title: t(
        lang,
        L(
          "Occupancy Rates Hit 3-Year High as International Flights Return",
          "อัตราเข้าพักสูงสุด 3 ปี หลังเที่ยวบินระหว่างประเทศกลับมา",
          "国际航班回归，入住率创三年新高",
          "Загрузка отелей — максимум за 3 года",
        ),
      ),
      excerpt: t(
        lang,
        L(
          "Pattaya's luxury hotel sector sees a rebound with Chinese and European tourists leading the charge...",
          "โรงแรมหรูพัทยาฟื้นตัว นักท่องเที่ยวจีนและยุโรปนำโด่ง...",
          "芭提雅 luxury 酒店板块复苏，中国与欧洲游客引领…",
          "Сектор luxury-отелей восстанавливается — лидируют туристы из Китая и Европы...",
        ),
      ),
    },
    walkingStreet: {
      href: "/news/nightlife/walking-street",
      badge: t(lang, L("Walking Street News", "ข่าว Walking Street", "Walking Street 新闻", "Walking Street")),
      title: t(
        lang,
        L(
          "Walking Street: New 'Neon Garden' Zone Unveiled",
          "Walking Street: เปิดโซน 'Neon Garden'",
          "Walking Street：全新「霓虹花园」区",
          "Walking Street: Neon Garden",
        ),
      ),
      body: t(
        lang,
        L(
          "A first look at the futuristic redevelopment aimed at transforming the iconic street into a world-class pedestrian hub.",
          "ภาพแรกของการปรับโฉมอนาคต เปลี่ยนถนนในตำนานเป็นทางเดินระดับโลก",
          "一睹未来感改造，将标志性街道变为世界级步行街。",
          "Футуристическая реконструкция легендарной улицы.",
        ),
      ),
      cta: t(lang, L("Live Webcams", "กล้องสด", "直播摄像头", "Веб-камеры")),
    },
  };
}

export function getMoreCityArticles(lang: LanguageCode) {
  return [
    {
      href: "/news/tourism/attractions",
      badge: t(lang, L("Attractions", "สถานที่ท่องเที่ยว", "景点", "Достопримечательности")),
      title: t(
        lang,
        L(
          "The Sanctuary of Truth: A Masterpiece of Thai Craftsmanship",
          "ปราสาทสัจธรรม: ชิ้นงานไม้แกะสลักไทย",
          "真理寺：泰国木雕杰作",
          "Sanctuary of Truth: шедевр резьбы",
        ),
      ),
      excerpt: t(
        lang,
        L(
          "Explore intricate carvings and the spiritual journey behind Pattaya's iconic wooden structure.",
          "สำรวจงานแกะสลักและเส้นทางจิตวิญญาณของสถาปัตยกรรมไม้ในตำนาน",
          "探索芭提雅标志性木构建筑背后的精雕与精神旅程。",
          "Резьба и духовный путь легендарной деревянной постройки.",
        ),
      ),
      footer: t(lang, L("3 Hours Ago", "3 ชม.ที่แล้ว", "3 小时前", "3 ч назад")),
    },
    {
      href: "/news/nightlife/walking-street",
      badge: t(lang, L("Nightlife Updates", "อัปเดตไนท์ไลฟ์", "夜生活动态", "Ночная жизнь")),
      title: t(
        lang,
        L(
          "Walking Street Transformation: Smart City Infrastructure Rollout",
          "Walking Street: โครงสร้าง Smart City",
          "Walking Street 改造：智慧城市基建",
          "Walking Street: инфраструктура Smart City",
        ),
      ),
      excerpt: t(
        lang,
        L(
          "Pattaya's nightlife hub undergoes a digital and structural renaissance for visitor safety.",
          "ย่านไนท์ไลฟ์พัทยาปรับโครงสร้างดิจิทัลเพื่อความปลอดภัยนักท่องเที่ยว",
          "芭提雅夜生活核心区进行数字化与结构升级，提升游客安全。",
          "Модернизация ночного центра ради безопасности.",
        ),
      ),
      footer: t(lang, L("5 Hours Ago", "5 ชม.ที่แล้ว", "5 小时前", "5 ч назад")),
    },
    {
      href: "/news/expat/immigration",
      badge: t(lang, L("Immigration Updates", "อัปเดตตรวจคนเข้าเมือง", "移民动态", "Immigration")),
      title: t(
        lang,
        L(
          "90-Day Online Reporting: System Offline for Maintenance",
          "รายงานตัว 90 วันออนไลน์: ปิดปรับปรุงระบบ",
          "90 天在线报到：系统维护暂停",
          "90-дневный отчёт: техработы",
        ),
      ),
      excerpt: t(
        lang,
        L(
          "Chonburi Immigration announces temporary interruption. Visit Jomtien office or use the mobile app.",
          "ตม.ชลบุรีแจ้งหยุดชั่วคราว ไปสำนักงานจอมเทียนหรือใช้แอปมือถือ",
          "春武里移民局临时中断服务，请至 Jomtien 办事处或使用 App。",
          "Временный перерыв — офис Jomtien или приложение.",
        ),
      ),
      footer: t(lang, L("Updated 15m ago", "อัปเดต 15 นาทีที่แล้ว", "15 分钟前更新", "15 мин назад")),
    },
  ];
}

export function getInfrastructureBlock(lang: LanguageCode) {
  return {
    roads: {
      href: "/news/local-news/infrastructure",
      title: t(lang, L("Roads & Utilities", "ถนน & สาธารณูปโภค", "道路与公用事业", "Дороги и коммуналка")),
      excerpt: t(
        lang,
        L(
          "Scheduled maintenance in Naklua this Sunday (Oct 14) 9:00 AM–4:00 PM. Impacted zones listed...",
          "ซ่อมบำรุง Naklua อาทิตย์นี้ (14 ต.ค.) 9:00–16:00 รายชื่อพื้นที่ได้รับผลกระทบ...",
          "那库拉周日（10 月 14 日）9:00–16:00 计划维护，受影响区域见详情…",
          "Naklua: работы 14 окт., 9:00–16:00.",
        ),
      ),
      cta: t(lang, L("Full Impact Map →", "แผนที่ผลกระทบ →", "完整影响地图 →", "Карта →")),
    },
    sponsored: {
      href: "/news/business/openings",
      title: t(lang, L("The Glasshouse Marina", "The Glasshouse Marina", "Glasshouse Marina", "Glasshouse Marina")),
      excerpt: t(
        lang,
        L(
          "Now Open: fine-dining at Ocean Marina. Sunset cocktails and fresh Mediterranean...",
          "เปิดแล้ว: ไฟน์ไดนิ่งที่ Ocean Marina ค็อกเทลยามพระอาทิตย์ตก...",
          "现已开业：Ocean Marina 精致餐饮，日落鸡尾酒与地中海风味…",
          "Открыто: fine-dining в Ocean Marina.",
        ),
      ),
      rating: t(lang, L("Rating:", "คะแนน:", "评分：", "Рейтинг:")),
    },
    promo: {
      eyebrow: t(lang, L("Exclusive Deals", "ดีลพิเศษ", "独家优惠", "Эксклюзив")),
      title: t(
        lang,
        L(
          "Pattaya Restaurant Week: Save up to 50% on Fine Dining",
          "Pattaya Restaurant Week: ลดสูงสุด 50% ไฟน์ไดนิ่ง",
          "芭提雅餐厅周：精致餐饮最高 5 折",
          "Restaurant Week: до −50% fine dining",
        ),
      ),
      body: t(
        lang,
        L(
          "Join 40+ award-winning restaurants for an 11-day celebration of Pattaya's culinary diversity.",
          "ร่วม 40+ ร้านดัง 11 วัน ฉลองความหลากหลายอาหารพัทยา",
          "40+ 获奖餐厅 11 天庆典，品味芭提雅美食多样性。",
          "40+ ресторанов, 11 дней гастрономии Паттайи.",
        ),
      ),
      primary: t(lang, L("Get Promo Code", "รับโค้ดส่วนลด", "获取优惠码", "Промокод")),
      secondary: t(lang, L("Participating Outlets", "ร้านที่ร่วมรายการ", "参与餐厅", "Участники")),
      href: "/news/tourism/promotions",
    },
  };
}

export function getSportsBlock(lang: LanguageCode) {
  return {
    title: t(lang, L("Sports & Recreation", "กีฬา & นันทนาการ", "体育与休闲", "Спорт")),
    muayThai: {
      href: "/news/sports/muay-thai",
      badge: t(lang, L("Muay Thai News", "ข่าวมวยไทย", "泰拳新闻", "Muay Thai")),
      tag: "MAX FIGHT",
      title: t(
        lang,
        L(
          "Lumpinee Champion to Face Local Hero in Weekend Main Event",
          "แชมป์ลุมพินีดวลฮีโร่ท้องถิ่นเสาร์นี้",
          "伦披尼冠军周末主赛对决本地英雄",
          "Чемпион Lumpinee vs местный герой",
        ),
      ),
      excerpt: t(
        lang,
        L(
          "Max Muay Thai Stadium prepares for a sold-out crowd as 'Iron Knee' returns...",
          "สนาม Max Muay Thai เตรียมเต็มที่ 'Iron Knee' กลับมา...",
          "Max Muay Thai 场馆座无虚席，「Iron Knee」回归…",
          "Max Muay Thai — sold out, возвращение «Iron Knee»...",
        ),
      ),
    },
    golf: {
      href: "/news/sports/golf",
      badge: t(lang, L("Golf & Leisure News", "ข่าวกอล์ฟ", "高尔夫新闻", "Гольф")),
      tag: "Siam CC",
      title: t(
        lang,
        L(
          "Pattaya Open: International Pro-Am at Siam Country Club",
          "Pattaya Open: Pro-Am ที่ Siam Country Club",
          "芭提雅公开赛：暹罗乡村俱乐部国际 Pro-Am",
          "Pattaya Open: Pro-Am в Siam CC",
        ),
      ),
    },
  };
}

export function getWorldNewsBlock(lang: LanguageCode) {
  return {
    title: t(lang, L("Pattaya in World News", "พัทยาในข่าวโลก", "芭提雅国际报道", "Паттайя в мире")),
    body: t(
      lang,
      L(
        "See how global media outlets report on Thailand's primary tourist destination.",
        "ดูว่าสื่อโลกรายงานจุดหมายท่องเที่ยวหลักของไทยอย่างไร",
        "了解全球媒体如何报道泰国首要旅游目的地。",
        "Как мировые СМИ пишут о главном курорте Таиланда.",
      ),
    ),
    links: [
      {
        href: "/news/international/global",
        label: t(
          lang,
          L(
            '"The Future of Retirement: Why Pattaya is Winning" — NY Times',
            '"อนาคตการเกษียณ: ทำไมพัทยาชนะ" — NY Times',
            "「退休的未来：芭提雅为何胜出」— 纽约时报",
            "«Будущее пенсии: Паттайя» — NY Times",
          ),
        ),
      },
      {
        href: "/news/international/global",
        label: t(
          lang,
          L(
            '"Pattaya\'s Digital Renaissance" — BBC Travel',
            '"Digital Renaissance ของพัทยา" — BBC Travel',
            "「芭提雅数字复兴」— BBC Travel",
            "«Цифровое возрождение Паттайи» — BBC",
          ),
        ),
      },
    ],
  };
}

export function getNewsArticles(lang: LanguageCode) {
  return [
    {
      href: "/news/local-news/crime",
      badge: t(lang, L("Police & Crime", "ตำรวจ & อาชญากรรม", "警务与犯罪", "Полиция")),
      title: t(
        lang,
        L(
          "Jomtien Raids: Underground Casino Shut Down",
          "จอมเทียน: ปิดคาสิโนใต้ดิน",
          "仲天突袭：地下赌场被查封",
          "Jomtien: закрыто подпольное казино",
        ),
      ),
      excerpt: t(
        lang,
        L(
          "Authorities seized over 2 million THB in cash during a 2 AM villa raid.",
          "ยึดเงินสดกว่า 2 ล้านบาทในการบุกค้นตี 2",
          "凌晨 2 点别墅突袭，查获现金超 200 万泰铢。",
          "Изъято более 2 млн бат наличными.",
        ),
      ),
      footer: t(lang, L("45 mins ago", "45 นาทีที่แล้ว", "45 分钟前", "45 мин назад")),
    },
    {
      href: "/news/local-news/accidents",
      badge: t(lang, L("Breaking", "ด่วน", "突发", "Срочно")),
      title: t(
        lang,
        L(
          "Major Traffic Delay: Sukhumvit Road Blocked",
          "จราจรติด: ถนนสุขุมวิทปิด",
          "严重拥堵：素坤逸路封闭",
          "Пробка: Sukhumvit перекрыта",
        ),
      ),
      excerpt: t(
        lang,
        L(
          "Take alternative routes as emergency crews clear a multi-vehicle collision.",
          "ใช้เส้นทางอื่นขณะเจ้าหน้าที่เคลียร์อุบัติเหตุ",
          "多车相撞，请绕行。",
          "Объезд — работают спасатели.",
        ),
      ),
      live: true,
    },
    {
      href: "/news/tourism/attractions",
      badge: t(lang, L("Experiences", "ประสบการณ์", "体验", "Впечатления")),
      title: t(
        lang,
        L(
          "Hidden Gems: 5 Secret Islands Near Pattaya",
          "5 เกาะลับใกล้พัทยา",
          "芭提雅附近 5 个秘境岛屿",
          "5 секретных островов у Паттайи",
        ),
      ),
      excerpt: t(
        lang,
        L(
          "Discover Koh Rin and Koh Kram Yai's turquoise waters this season.",
          "ค้นพบน้ำใสของเกาะรินและเกาะครามใหญ่",
          "本季探索 Koh Rin 与 Koh Kram Yai 的碧蓝海水。",
          "Бирюзовые воды Koh Rin и Koh Kram Yai.",
        ),
      ),
      cta: true,
    },
  ];
}
