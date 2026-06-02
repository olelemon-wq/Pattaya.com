import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

const hero = {
  category: L("City Development", "พัฒนาเมือง", "城市发展", "Развитие города"),
  title: L(
    "The Neo-Pattaya Transformation: A Smart City Vision 2025",
    "Neo-Pattaya: วิสัยทัศน์เมืองอัจฉริยะ 2025",
    "新芭提雅转型：2025 智慧城市愿景",
    "Neo-Pattaya: умный город 2025",
  ),
  excerpt: L(
    "Infrastructure and digital initiatives reshape Pattaya into Southeast Asia's premier hybrid hub.",
    "โครงสร้างพื้นฐานและดิจิทัลยกระดับพัทยาเป็นศูนย์กลางท่องเที่ยวและที่อยู่อาศัย",
    "基建与数字化举措将芭提雅打造为东南亚混合枢纽。",
    "Инфраструктура и цифра превращают Паттайю в гибридный хаб.",
  ),
  featured: L("Featured", "แนะนำ", "精选", "Рекомендуем"),
  cta: L("Read Article", "อ่านบทความ", "阅读文章", "Читать"),
  imageAlt: L(
    "Aerial view of Pattaya at blue hour",
    "มุมสูงพัทยายามพลบค่ำ",
    "蓝调时刻芭提雅航拍",
    "Паттайя с высоты на закате",
  ),
  byline: L("By Editor-in-Chief · 2 Hours Ago", "บรรณาธิการ · 2 ชม.ที่แล้ว", "主编 · 2 小时前", "Главред · 2 ч назад"),
};

export function getHomeHero(lang: LanguageCode) {
  return {
    category: t(lang, hero.category),
    title: t(lang, hero.title),
    excerpt: t(lang, hero.excerpt),
    featured: t(lang, hero.featured),
    cta: t(lang, hero.cta),
    imageAlt: t(lang, hero.imageAlt),
    byline: t(lang, hero.byline),
  };
}

const LOCALE_BY_LANG: Record<LanguageCode, string> = {
  th: "th-TH",
  en: "en-US",
  zh: "zh-CN",
  ru: "ru-RU",
};

export function getHomeWeather(lang: LanguageCode) {
  return {
    title: t(lang, L("Pattaya Weather", "สภาพอากาศพัทยา", "芭提雅天气", "Погода в Паттайе")),
    feelsLike: t(lang, L("Feels like", "รู้สึกเหมือน", "体感", "Ощущается")),
    seaUv: t(lang, L("Sea & UV", "ทะเล & UV", "海水与紫外线", "Море и UV")),
    high: t(lang, L("High", "สูง", "高", "Высокий")),
    wind: t(lang, L("Wind", "ลม", "风力", "Ветер")),
    locale: LOCALE_BY_LANG[lang],
  };
}

export function getHomeSidebar(lang: LanguageCode) {
  return {
    eventsToday: t(lang, L("Events Today", "อีเวนต์วันนี้", "今日活动", "События сегодня")),
    viewAll: t(lang, L("VIEW ALL", "ดูทั้งหมด", "查看全部", "ВСЕ")),
    promotedEvent: t(lang, L("Promoted Event", "อีเวนต์โปรโมต", "推广活动", "Рекомендуем")),
    techMeetup: t(lang, L("Pattaya Tech Meetup", "Pattaya Tech Meetup", "芭提雅科技聚会", "Tech Meetup")),
    trafficLive: t(lang, L("Traffic Live", "รายงานสดการจราจร", "实时交通", "Трафик")),
    trafficUpdated: t(lang, L("Updated just now", "อัปเดตเมื่อสักครู่", "刚刚更新", "Только что")),
    trafficViewAll: t(lang, L("Transport", "การเดินทาง", "交通", "Транспорт")),
    clear: t(lang, L("Clear", "คล่องตัว", "畅通", "Свободно")),
    moderate: t(lang, L("Moderate", "ปานกลาง", "中等", "Умеренно")),
    onSchedule: t(lang, L("On Schedule", "ตรงเวลา", "准点", "По расписанию")),
    events: [
      {
        date: "OCT 24",
        title: t(lang, L("Pattaya International Fireworks", "Pattaya International Fireworks", "芭提雅国际烟花节", "Международный фейерверк")),
      },
      {
        date: "OCT 26",
        title: t(lang, L("Yacht Show 2024", "Yacht Show 2024", "2024 游艇展", "Yacht Show 2024")),
      },
    ],
    traffic: [
      {
        road: "Sukhumvit Rd.",
        status: t(lang, L("Clear", "คล่องตัว", "畅通", "Свободно")),
        tone: "success" as const,
        kind: "road" as const,
        href: "/living/transportation/driving",
      },
      {
        road: "Walking Street",
        status: t(lang, L("Moderate", "ปานกลาง", "中等", "Умеренно")),
        tone: "warning" as const,
        kind: "road" as const,
        href: "/explore/beaches/pattaya-beach",
      },
      {
        road: "UTP Airport",
        status: t(lang, L("On Schedule", "ตรงเวลา", "准点", "По расписанию")),
        tone: "neutral" as const,
        kind: "airport" as const,
        href: "/living/transportation/ride-apps",
      },
    ],
  };
}

export function getHomeGuide(lang: LanguageCode) {
  return {
    title: t(lang, L("Pattaya Guide", "คู่มือพัทยา", "芭提雅指南", "Гид по Паттайе")),
    subtitle: t(
      lang,
      L(
        "Curated city exploration by local experts.",
        "สำรวจเมืองโดยผู้เชี่ยวชาญท้องถิ่น",
        "本地专家精选城市探索。",
        "Город от местных экспертов.",
      ),
    ),
    exploreAll: t(lang, L("Explore All Guides →", "สำรวจคู่มือทั้งหมด →", "探索全部指南 →", "Все гайды →")),
    guides: [
      {
        title: t(lang, L("Island Hopping: Koh Larn & Beyond", "ทัวร์เกาะ: เกาะล้าน & อื่นๆ", "跳岛：格兰岛及周边", "Острова: Ко Лан")),
        meta: t(lang, L("12 ARTICLES • SEO OPTIMIZED", "12 บทความ", "12 篇文章", "12 СТАТЕЙ")),
        href: "/explore/islands/koh-larn",
      },
      {
        title: t(lang, L("Fine Dining: Michelin Guide 2024", "Fine Dining: Michelin 2024", "Fine Dining 2024", "Fine Dining 2024")),
        meta: t(lang, L("8 ARTICLES • LOCAL TIPS", "8 บทความ", "8 篇文章", "8 СТАТЕЙ")),
        href: "/explore/restaurants/fine-dining",
      },
      {
        title: t(lang, L("Retirement in Pattaya: Full Guide", "เกษียณในพัทยา: คู่มือเต็ม", "芭提雅退休完整指南", "Пенсия в Паттайе")),
        meta: t(lang, L("24 ARTICLES • ESSENTIAL", "24 บทความ", "24 篇文章", "24 СТАТЬИ")),
        href: "/living/visa/retirement",
      },
      {
        title: t(lang, L("Yachting Life: Marina Secrets", "เรือยอชต์: ความลับมารีน่า", "游艇生活：码头秘闻", "Яхты: секреты марины")),
        meta: t(lang, L("15 ARTICLES • EXCLUSIVE", "15 บทความ", "15 篇文章", "15 СТАТЕЙ")),
        href: "/explore/luxury/yacht",
      },
    ],
  };
}

export function getHomeForum(lang: LanguageCode) {
  return {
    title: t(lang, L("Trending Forum Topics", "หัวข้อฟอรัมยอดนิยม", "热门论坛话题", "Темы форума")),
    visitForum: t(lang, L("Visit Forum", "เข้าฟอรัม", "访问论坛", "На форум")),
    replies: t(lang, L("replies", "ตอบกลับ", "回复", "ответов")),
    currencyTitle: t(lang, L("Currency Rates", "อัตราแลกเปลี่ยน", "汇率", "Курсы")),
    currencies: [
      {
        code: "USD",
        flag: "🇺🇸",
        flagLabel: t(lang, L("United States", "สหรัฐอเมริกา", "美国", "США")),
        rate: "35.42",
        trend: "up" as const,
      },
      {
        code: "EUR",
        flag: "🇪🇺",
        flagLabel: t(lang, L("European Union", "สหภาพยุโรป", "欧盟", "ЕС")),
        rate: "38.15",
        trend: "down" as const,
      },
      {
        code: "GBP",
        flag: "🇬🇧",
        flagLabel: t(lang, L("United Kingdom", "สหราชอาณาจักร", "英国", "Великобритания")),
        rate: "44.80",
        trend: "up" as const,
      },
      {
        code: "JPY",
        flag: "🇯🇵",
        flagLabel: t(lang, L("Japan", "ญี่ปุ่น", "日本", "Япония")),
        rate: "0.24",
        trend: "down" as const,
      },
      {
        code: "CNY",
        flag: "🇨🇳",
        flagLabel: t(lang, L("China", "จีน", "中国", "Китай")),
        rate: "4.88",
        trend: "up" as const,
      },
      {
        code: "AUD",
        flag: "🇦🇺",
        flagLabel: t(lang, L("Australia", "ออสเตรเลีย", "澳大利亚", "Австралия")),
        rate: "23.15",
        trend: "up" as const,
      },
      {
        code: "SGD",
        flag: "🇸🇬",
        flagLabel: t(lang, L("Singapore", "สิงคโปร์", "新加坡", "Сингапур")),
        rate: "26.40",
        trend: "down" as const,
      },
      {
        code: "HKD",
        flag: "🇭🇰",
        flagLabel: t(lang, L("Hong Kong", "ฮ่องกง", "香港", "Гонконг")),
        rate: "4.52",
        trend: "up" as const,
      },
      {
        code: "KRW",
        flag: "🇰🇷",
        flagLabel: t(lang, L("South Korea", "เกาหลีใต้", "韩国", "Южная Корея")),
        rate: "0.026",
        trend: "down" as const,
      },
      {
        code: "RUB",
        flag: "🇷🇺",
        flagLabel: t(lang, L("Russia", "รัสเซีย", "俄罗斯", "Россия")),
        rate: "0.39",
        trend: "up" as const,
      },
    ],
    topics: [
      {
        initials: "JD",
        color: "bg-[#dbeafe] text-[#1d4ed8]",
        title: t(lang, L("Visa Extension 2024 Updates", "อัปเดตต่อวีซ่า 2024", "2024 签证延期更新", "Продление визы 2024")),
        meta: t(lang, L("Last reply 2m ago", "ตอบล่าสุด 2 นาที", "2 分钟前回复", "2 мин назад")),
        replies: 42,
        href: "/forum/trending",
      },
      {
        initials: "MK",
        color: "bg-[#fce7f3] text-[#be185d]",
        title: t(lang, L("Best Condo Areas for Expats?", "ย่านคอนโดดีสำหรับชาวต่างชาติ?", "外籍人士最佳公寓区？", "Лучшие районы для экспатов?")),
        meta: t(lang, L("Last reply 15m ago", "ตอบล่าสุด 15 นาที", "15 分钟前", "15 мин назад")),
        replies: 18,
        href: "/forum/trending",
      },
      {
        initials: "RS",
        color: "bg-[#dcfce7] text-[#15803d]",
        title: t(lang, L("Songthaew Routes Explained", "เส้นทางสองแถว", "双条车路线说明", "Маршруты songthaew")),
        meta: t(lang, L("Last reply 1h ago", "ตอบล่าสุด 1 ชม.", "1 小时前", "1 ч назад")),
        replies: 7,
        href: "/forum/trending",
      },
      {
        initials: "AN",
        color: "bg-[#e0e7ff] text-[#4338ca]",
        title: t(
          lang,
          L(
            "Which Hospital for Expats Near Jomtien?",
            "โรงพยาบาลไหนเหมาะชาวต่างชาติแถวจอมเทียน?",
            "仲天附近哪家医院适合外籍人士？",
            "Какая больница у Джомтьена для экспатов?",
          ),
        ),
        meta: t(lang, L("Last reply 2h ago", "ตอบล่าสุด 2 ชม.", "2 小时前", "2 ч назад")),
        replies: 31,
        href: "/living/healthcare/hospitals",
      },
      {
        initials: "PL",
        color: "bg-[#ffedd5] text-[#c2410c]",
        title: t(
          lang,
          L(
            "Rent vs Buy a Scooter in Pattaya",
            "เช่าหรือซื้อมอเตอร์ไซค์ในพัทยา?",
            "芭提雅租还是买摩托车？",
            "Аренда или покупка байка в Паттайе?",
          ),
        ),
        meta: t(lang, L("Last reply 3h ago", "ตอบล่าสุด 3 ชม.", "3 小时前", "3 ч назад")),
        replies: 24,
        href: "/living/transportation/driving",
      },
      {
        initials: "KT",
        color: "bg-[#cffafe] text-[#0e7490]",
        title: t(
          lang,
          L(
            "Koh Larn Ferry: Bali Hai vs Tawaen?",
            "เรือเกาะล้าน: บาลีไฮหรือตะเวน?",
            "格兰岛渡轮：Bali Hai 还是 Tawaen？",
            "Паром на Ко Лан: Bali Hai или Tawaen?",
          ),
        ),
        meta: t(lang, L("Last reply 4h ago", "ตอบล่าสุด 4 ชม.", "4 小时前", "4 ч назад")),
        replies: 56,
        href: "/explore/islands/koh-larn",
      },
      {
        initials: "BK",
        color: "bg-[#fef9c3] text-[#a16207]",
        title: t(
          lang,
          L(
            "Opening a Thai Bank Account (2026)",
            "เปิดบัญชีธนาคารไทย (2569)",
            "开立泰国银行账户（2026）",
            "Открытие счёта в тайском банке (2026)",
          ),
        ),
        meta: t(lang, L("Last reply 5h ago", "ตอบล่าสุด 5 ชม.", "5 小时前", "5 ч назад")),
        replies: 39,
        href: "/living/housing/rentals",
      },
      {
        initials: "NW",
        color: "bg-[#f3e8ff] text-[#7e22ce]",
        title: t(
          lang,
          L(
            "Best 5G SIM for Remote Work?",
            "ซิม 5G ไหนดีสำหรับทำงานออนไลน์?",
            "远程办公用哪家 5G SIM？",
            "Какая 5G SIM для удалённой работы?",
          ),
        ),
        meta: t(lang, L("Last reply 6h ago", "ตอบล่าสุด 6 ชม.", "6 小时前", "6 ч назад")),
        replies: 15,
        href: "/living/cost-of-living/utilities",
      },
      {
        initials: "LM",
        color: "bg-[#fee2e2] text-[#b91c1c]",
        title: t(
          lang,
          L(
            "Night Market Food: Hygiene Tips",
            "อาหารตลาดกลางคืน: เรื่องสุขอนามัย",
            "夜市美食卫生贴士",
            "Уличная еда: гигиена",
          ),
        ),
        meta: t(lang, L("Last reply 8h ago", "ตอบล่าสุด 8 ชม.", "8 小时前", "8 ч назад")),
        replies: 12,
        href: "/explore/restaurants/street-food",
      },
      {
        initials: "TM",
        color: "bg-[#e2e8f0] text-[#334155]",
        title: t(
          lang,
          L(
            "TM30 Reporting: Common Mistakes",
            "รายงานตัว TM30: ข้อผิดพลาดที่พบบ่อย",
            "TM30 报到常见错误",
            "TM30: частые ошибки",
          ),
        ),
        meta: t(lang, L("Last reply 10h ago", "ตอบล่าสุด 10 ชม.", "10 小时前", "10 ч назад")),
        replies: 28,
        href: "/living/visa/90-day-report",
      },
      {
        initials: "EV",
        color: "bg-[#ccfbf1] text-[#0f766e]",
        title: t(
          lang,
          L(
            "Weekend Events in Pattaya (June)",
            "อีเวนต์สุดสัปดาห์พัทยา (มิ.ย.)",
            "芭提雅周末活动（六月）",
            "События Паттайи на выходные (июнь)",
          ),
        ),
        meta: t(lang, L("Last reply 12h ago", "ตอบล่าสุด 12 ชม.", "12 小时前", "12 ч назад")),
        replies: 9,
        href: "/events",
      },
    ],
  };
}

export function getHomeBusinesses(lang: LanguageCode) {
  return {
    title: t(lang, L("Featured Businesses", "ธุรกิจแนะนำ", "精选商家", "Рекомендуемые бизнесы")),
    verified: t(lang, L("Verified", "ยืนยันแล้ว", "已认证", "Проверено")),
    featured: t(lang, L("Featured", "แนะนำ", "精选", "Рекомендуем")),
    addBranch: t(lang, L("Add Branch", "เพิ่มสาขา", "添加分店", "Добавить филиал")),
  };
}

export function getHomeTopStories(lang: LanguageCode) {
  return {
    title: t(lang, L("Top Stories", "ข่าวเด่น", "头条", "Главное")),
    viewAll: t(lang, L("View All", "ดูทั้งหมด", "查看全部", "Все")),
    readMore: t(lang, L("Read more", "อ่านต่อ", "阅读更多", "Читать")),
    hotelTime: t(lang, L("4 hours ago", "4 ชม.ที่แล้ว", "4 小时前", "4 ч назад")),
  };
}

export function getHomeExploreSections(lang: LanguageCode) {
  return {
    title: t(lang, L("Explore by Section", "สำรวจตามหมวด", "按栏目浏览", "По разделам")),
    sections: [
      {
        id: "news" as const,
        label: t(lang, L("News", "ข่าว", "新闻", "Новости")),
        countValue: "248",
        countUnit: t(lang, L("Articles", "บทความ", "文章", "статей")),
        href: "/news",
        imageAlt: t(lang, L("News section", "หมวดข่าว", "新闻栏目", "Раздел новостей")),
      },
      {
        id: "living" as const,
        label: t(lang, L("Expat", "ไลฟ์สไตล์", "生活", "Жизнь")),
        countValue: "156",
        countUnit: t(lang, L("Guides", "คู่มือ", "指南", "гайдов")),
        href: "/living",
        imageAlt: t(lang, L("Expat section", "หมวดไลฟ์สไตล์", "生活栏目", "Раздел «Жизнь»")),
      },
      {
        id: "explore" as const,
        label: t(lang, L("Explore", "สถานที่น่าสนใจ", "探索", "Обзор")),
        countValue: "89",
        countUnit: t(lang, L("Locations", "สถานที่", "地点", "мест")),
        href: "/explore",
        imageAlt: t(
          lang,
          L("Explore section", "หมวดสถานที่น่าสนใจ", "探索栏目", "Раздел «Обзор»"),
        ),
      },
      {
        id: "business" as const,
        label: t(lang, L("Business", "ธุรกิจ", "商业", "Бизнес")),
        countValue: "312",
        countUnit: t(lang, L("Listings", "รายการ", "listing", "записей")),
        href: "/business",
        imageAlt: t(lang, L("Business section", "หมวดธุรกิจ", "商业栏目", "Раздел бизнеса")),
      },
    ],
  };
}

export function getHomeEmergency(lang: LanguageCode) {
  return {
    srOnly: t(lang, L("Emergency support phone numbers", "เบอร์ฉุกเฉิน", "紧急电话", "Экстренные номера")),
    closeOverlay: t(lang, L("Close emergency support dialog", "ปิดหน้าต่างฉุกเฉิน", "关闭紧急对话框", "Закрыть")),
    title: t(lang, L("Emergency Support", "ช่วยเหลือฉุกเฉิน", "紧急支援", "Экстренная помощь")),
    subtitle: t(lang, L("Available 24/7 in Pattaya City", "บริการ 24/7 ในพัทยา", "芭提雅 24/7 服务", "24/7 в Паттайе")),
    close: t(lang, L("Close", "ปิด", "关闭", "Закрыть")),
    call: t(lang, L("Call", "โทร", "拨打", "Звонок")),
    footer: t(
      lang,
      L(
        "Always verify locations for rapid response",
        "ยืนยันตำแหน่งเพื่อการตอบสนองที่รวดเร็ว",
        "请确认位置以便快速响应",
        "Уточняйте местоположение для быстрой помощи",
      ),
    ),
  };
}
