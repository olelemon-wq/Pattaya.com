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
};

export function getHomeHero(lang: LanguageCode) {
  return {
    category: t(lang, hero.category),
    title: t(lang, hero.title),
    excerpt: t(lang, hero.excerpt),
  };
}

export function getHomeSidebar(lang: LanguageCode) {
  return {
    eventsToday: t(lang, L("Events Today", "อีเวนต์วันนี้", "今日活动", "События сегодня")),
    viewAll: t(lang, L("VIEW ALL", "ดูทั้งหมด", "查看全部", "ВСЕ")),
    promotedEvent: t(lang, L("Promoted Event", "อีเวนต์โปรโมต", "推广活动", "Рекомендуем")),
    techMeetup: t(lang, L("Pattaya Tech Meetup", "Pattaya Tech Meetup", "芭提雅科技聚会", "Tech Meetup")),
    trafficLive: t(lang, L("Traffic Live", "รายงานสดการจราจร", "实时交通", "Трафик")),
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
      { road: "Sukhumvit Rd.", status: t(lang, L("Clear", "คล่องตัว", "畅通", "Свободно")), tone: "success" as const },
      { road: "Walking Street", status: t(lang, L("Moderate", "ปานกลาง", "中等", "Умеренно")), tone: "warning" as const },
      { road: "UTP Airport", status: t(lang, L("On Schedule", "ตรงเวลา", "准点", "По расписанию")), tone: "neutral" as const },
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
    topics: [
      {
        initials: "JD",
        color: "bg-[#dbeafe] text-[#1d4ed8]",
        title: t(lang, L("Visa Extension 2024 Updates", "อัปเดตต่อวีซ่า 2024", "2024 签证延期更新", "Продление визы 2024")),
        meta: t(lang, L("Last reply 2m ago", "ตอบล่าสุด 2 นาที", "2 分钟前回复", "2 мин назад")),
        replies: 42,
      },
      {
        initials: "MK",
        color: "bg-[#fce7f3] text-[#be185d]",
        title: t(lang, L("Best Condo Areas for Expats?", "ย่านคอนโดดีสำหรับชาวต่างชาติ?", "外籍人士最佳公寓区？", "Лучшие районы для экспатов?")),
        meta: t(lang, L("Last reply 15m ago", "ตอบล่าสุด 15 นาที", "15 分钟前", "15 мин назад")),
        replies: 18,
      },
      {
        initials: "RS",
        color: "bg-[#dcfce7] text-[#15803d]",
        title: t(lang, L("Songthaew Routes Explained", "เส้นทางสองแถว", "双条车路线说明", "Маршруты songthaew")),
        meta: t(lang, L("Last reply 1h ago", "ตอบล่าสุด 1 ชม.", "1 小时前", "1 ч назад")),
        replies: 7,
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
