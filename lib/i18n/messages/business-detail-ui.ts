import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

export function getBusinessDetailUi(lang: LanguageCode) {
  return {
    business: t(lang, L("Business", "ธุรกิจ", "商业", "Бизнес")),
    exploreMore: t(
      lang,
      L("Explore more", "สำรวจเพิ่มเติม", "探索更多", "Подробнее"),
    ),
    economyStatsTitle: t(
      lang,
      L(
        "Pattaya Economic Statistics & Growth",
        "สถิติและความเติบโตทางเศรษฐกิจพัทยา",
        "芭提雅经济统计与增长",
        "Экономическая статистика и рост Паттайи",
      ),
    ),
    networkingEventsTitle: t(
      lang,
      L(
        "Business Networking Events Calendar",
        "ตารางกิจกรรมเครือข่ายธุรกิจ",
        "商务社交活动日程",
        "Календарь деловых мероприятий",
      ),
    ),
    registerEarly: t(
      lang,
      L("Register early", "ลงทะเบียนล่วงหน้า", "提前报名", "Ранняя регистрация"),
    ),
    consultationAria: t(
      lang,
      L("Business consultation", "ปรึกษาธุรกิจ", "商务咨询", "Бизнес-консультация"),
    ),
    footerTitle: t(
      lang,
      L(
        "Don't miss any investment opportunity in Pattaya",
        "ไม่พลาดทุกโอกาสการลงทุนในพัทยา",
        "不错过芭提雅任何投资机会",
        "Не упустите инвестиционные возможности Паттайи",
      ),
    ),
    footerBody: t(
      lang,
      L(
        "Get weekly business news and Pattaya economic analysis reports delivered straight to your inbox.",
        "รับข้อมูลข่าวสารทางธุรกิจและรายงานวิเคราะห์เศรษฐกิจพัทยารายสัปดาห์ ส่งตรงถึงอีเมลคุณ",
        "每周接收商业资讯与芭提雅经济分析报告，直达您的邮箱。",
        "Еженедельные деловые новости и аналитика экономики Паттайи — прямо на вашу почту.",
      ),
    ),
    footerPlaceholder: t(
      lang,
      L("Your email", "อีเมลของคุณ", "您的邮箱", "Ваш email"),
    ),
    footerButton: t(
      lang,
      L("Subscribe", "สมัครสมาชิก", "订阅", "Подписаться"),
    ),
  };
}
