import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

const spotlightBodies = {
  "90-day-online": {
    badge: L("90-Day Report", "รายงาน 90 วัน", "90 天报到", "90 дней"),
    title: L(
      "Online Reporting Offline Oct 14–16",
      "รายงานออนไลน์ปิด 14–16 ต.ค.",
      "在线报到 10 月 14–16 日暂停",
      "Онлайн-отчёт недоступен 14–16 окт.",
    ),
    excerpt: L(
      "Plan ahead: in-person filing at Jomtien Immigration accepts walk-ins 08:30–16:30 with passport and previous receipt.",
      "วางแผนล่วงหน้า: ยื่นที่ตม.จอมเทียน 08:30–16:30 นำพาสปอร์ตและใบเสร็จครั้งก่อน",
      "请提前规划：Jomtien 移民局 08:30–16:30 现场受理，携带护照与上次回执。",
      "Jomtien: 08:30–16:30, паспорт и прошлая квитанция.",
    ),
    cta: L("90-Day Guide", "คู่มือ 90 วัน", "90 天指南", "Гид 90 дней"),
    imageAlt: L(
      "Thailand immigration documents and official forms",
      "เอกสารตม.ไทย",
      "泰国移民文件",
      "Документы Immigration",
    ),
  },
  "jomtien-office": {
    badge: L("Pattaya Office", "สำนักงานพัทยา", "芭提雅办事处", "Офис Pattaya"),
    title: L(
      "Jomtien Immigration: Saturday Hours for Peak Season",
      "ตม.จอมเทียน: เปิดเสาร์ฤดูท่องเที่ยว",
      "Jomtien 移民局：旺季周六办公",
      "Jomtien: субботы в сезон",
    ),
    excerpt: L(
      "Extra counter staff deployed for extensions and re-entry permits — arrive before 10:00 to reduce wait times.",
      "เพิ่มเจ้าหน้าที่เคาน์เตอร์ต่อวีซ่าและ re-entry — มาก่อน 10:00",
      "增派柜台办理延期与再入境许可 — 建议 10:00 前到达。",
      "Больше сотрудников — приходите до 10:00.",
    ),
    cta: L("Office Hours", "เวลาทำการ", "办公时间", "Часы работы"),
    imageAlt: L(
      "Pattaya city government services area",
      "บริการราชการเมืองพัทยา",
      "芭提雅市政服务",
      "Госуслуги Pattaya",
    ),
  },
  "re-entry": {
    badge: L("Re-Entry Permit", "ใบ re-entry", "再入境许可", "Re-entry"),
    title: L(
      "Single vs Multiple Re-Entry: Which to Choose?",
      "Re-entry ครั้งเดียว vs หลายครั้ง: เลือกแบบไหน",
      "单次 vs 多次再入境：如何选择",
      "Single vs multiple re-entry",
    ),
    excerpt: L(
      "Frequent travelers from U-Tapao should compare multiple re-entry validity — avoid overstays if plans change.",
      "นักเดินทางจาก U-Tapao ควรเปรียบเทียบ re-entry หลายครั้ง — หลีกเลี่ยง overstay",
      "乌塔保常旅客应比较多次再入境有效期 — 计划变更时避免逾期。",
      "Частые перелёты из U-Tapao — сравните multiple re-entry.",
    ),
    cta: L("Visa Options", "ตัวเลือกวีซ่า", "签证选项", "Варианты визы"),
    imageAlt: L(
      "Passport stamps and re-entry permit",
      "ตราประทับพาสปอร์ตและ re-entry",
      "护照章与再入境许可",
      "Re-entry в паспорте",
    ),
  },
} as const;

const articleBodies = {
  "ninety-day-online": {
    badge: L("Immigration", "ตรวจคนเข้าเมือง", "移民", "Immigration"),
    title: L(
      "90-Day Online Reporting: System Offline for Maintenance",
      "รายงานตัว 90 วันออนไลน์: ปิดปรับปรุงระบบ",
      "90 天在线报到：系统维护暂停",
      "90-дневный отчёт: техработы",
    ),
    excerpt: L(
      "Chonburi Immigration announces temporary interruption. Visit Jomtien office or use the mobile app.",
      "ตม.ชลบุรีแจ้งหยุดชั่วคราว ไปสำนักงานจอมเทียนหรือใช้แอปมือถือ",
      "春武里移民局临时中断服务，请至 Jomtien 办事处或使用 App。",
      "Временный перерыв — офис Jomtien или приложение.",
    ),
    footer: L("Updated 15m ago", "อัปเดต 15 นาทีที่แล้ว", "15 分钟前更新", "15 мин назад"),
    imageAlt: L(
      "Thailand immigration documents and official forms",
      "เอกสารตม.ไทย",
      "泰国移民文件",
      "Документы Immigration",
    ),
  },
  "missed-90-day": {
    badge: L("Compliance", "ปฏิบัติตาม", "合规", "Соответствие"),
    title: L(
      "Missed a 90-Day Report? Penalties and How to Fix",
      "พลาดรายงาน 90 วัน? ค่าปรับและวิธีแก้",
      "错过 90 天报到？处罚与补救",
      "Пропустили 90 дней?",
    ),
    excerpt: L(
      "Overdue filings may incur fines of 2,000 THB — voluntary reporting before a checkpoint is strongly advised.",
      "ยื่นล่าช้าอาจปรับ 2,000 บาท — แนะนำรายงานก่อนถูกตรวจ",
      "逾期可能罚款 2000 泰铢 — 建议检查点前主动报到。",
      "Штраф 2000 бат — лучше сдать добровольно.",
    ),
    footer: L("Today", "วันนี้", "今天", "Сегодня"),
    imageAlt: L("90-day reporting immigration form", "แบบรายงาน 90 วัน", "90 天报到表", "Форма 90 дней"),
  },
  "visa-extensions": {
    badge: L("Extensions", "ต่อวีซ่า", "延期", "Продление"),
    title: L(
      "Tourist Visa Extensions: Documents Checklist for Pattaya",
      "ต่อวีซ่าท่องเที่ยว: เช็กลิสต์เอกสารพัทยา",
      "旅游签延期：芭提雅文件清单",
      "Продление tourist visa: чеклист",
    ),
    excerpt: L(
      "Bring TM.30, photos, and proof of address — copies available at service counters in Jomtien.",
      "นำ TM.30 รูป และหลักฐานที่อยู่ — ถ่ายเอกสารได้ที่จอมเทียน",
      "携带 TM.30、照片与地址证明 — Jomtien 服务台可复印。",
      "TM.30, фото, адрес — копии в Jomtien.",
    ),
    footer: L("Yesterday", "เมื่อวาน", "昨天", "Вчера"),
    imageAlt: L("Visa extension appointment", "นัดต่อวีซ่า", "签证延期预约", "Продление визы"),
  },
  "retirement-bank": {
    badge: L("Retirement", "เกษียณ", "退休", "Пенсия"),
    title: L(
      "Annual Retirement Extension: Bank Letter Requirements",
      "ต่อเกษียณประจำปี: หนังสือธนาคาร",
      "年度退休延期：银行证明要求",
      "Продление пенсии: банк",
    ),
    excerpt: L(
      "Chonburi Immigration confirms 800,000 THB balance must show two months seasoning in a Thai account.",
      "ตม.ชลบุรียืนยันยอด 800,000 บาทต้องคงในบัญชีไทย 2 เดือน",
      "春武里移民局确认 80 万泰铢须在泰账户留存两个月。",
      "800 000 бат — 2 месяца на счёте в Таиланде.",
    ),
    footer: L("2 days ago", "2 วันที่แล้ว", "2 天前", "2 дня назад"),
    imageAlt: L("Retirement visa applicant at office", "ผู้สมัครวีซ่าเกษียณ", "退休签证申请人", "Пенсионная виза"),
  },
  "wp-sync": {
    badge: L("Work Permit", "ใบอนุญาตทำงาน", "工作许可", "Work permit"),
    title: L(
      "WP + Visa Sync: Employers Must Update Within 7 Days",
      "WP + วีซ่า: นายจ้างต้องอัปเดตภายใน 7 วัน",
      "工作许可与签证同步：雇主 7 日内更新",
      "WP + виза: 7 дней на обновление",
    ),
    excerpt: L(
      "BOI-sponsored staff in Pattaya face faster audits — HR teams should file TM.86 promptly after role changes.",
      "พนักงาน BOI ในพัทยา ตรวจเร็วขึ้น — HR ควรยื่น TM.86 หลังเปลี่ยนตำแหน่ง",
      "芭提雅 BOI 员工审计加快 — 岗位变更后及时提交 TM.86。",
      "BOI в Pattaya — подайте TM.86 после смены роли.",
    ),
    footer: L("3 days ago", "3 วันที่แล้ว", "3 天前", "3 дня назад"),
    imageAlt: L("Work permit and visa documents", "เอกสาร WP และวีซ่า", "工作许可与签证文件", "WP и виза"),
  },
  "thappraya-road": {
    badge: L("Advisory", "ประกาศ", "公告", "Объявление"),
    title: L(
      "Thappraya Road Works: Allow Extra Time for Jomtien Office",
      "งานถนนทัพพระยา: เผื่อเวลาไปตม.จอมเทียน",
      "Thappraya 路施工：预留更多时间",
      "Thappraya: больше времени до Jomtien",
    ),
    excerpt: L(
      "Detours via Soi Chayapruek add 15–20 minutes during morning rush — use Grab drop-off at rear entrance.",
      "เลี่ยงซอยชายพฤกษ์เพิ่ม 15–20 นาทีช่วงเช้า — Grab ลงทางเข้าหลัง",
      "经 Soi Chayapruek 绕行早高峰多 15–20 分钟 — 可在后门下车。",
      "Объезд +15–20 мин — Grab к заднему входу.",
    ),
    footer: L("4 days ago", "4 วันที่แล้ว", "4 天前", "4 дня назад"),
    imageAlt: L("Traffic near immigration office Pattaya", "จราจรใกล้ตม.พัทยา", "移民局附近交通", "Трафик у Immigration"),
  },
  "tm30-rules": {
    badge: L("Policy", "นโยบาย", "政策", "Политика"),
    title: L(
      "TM.30 Landlord Rules: Hotels and Condos Clarified",
      "TM.30 เจ้าของบ้าน: โรงแรมและคอนโดชัดเจน",
      "TM.30 房东规则：酒店与公寓说明",
      "TM.30: отели и кондо",
    ),
    excerpt: L(
      "Immigration reminds owners to register guests within 24 hours — many Pattaya condos offer TM.30 service desks.",
      "ตม.เตือนแจ้งผู้เข้าพักภายใน 24 ชม. — คอนโดพัทยาหลายแห่งมีเคาน์เตอร์ TM.30",
      "移民局提醒 24 小时内登记住客 — 许多芭提雅公寓设有 TM.30 服务台。",
      "Регистрация гостей за 24 ч — TM.30 в кондо.",
    ),
    footer: L("1 week ago", "1 สัปดาห์ที่แล้ว", "1 周前", "1 неделю назад"),
    imageAlt: L("Legal consultation immigration law", "ปรึกษากฎหมายตม.", "移民法律咨询", "Иммиграционное право"),
  },
} as const;

const articleKeyByTitle: Record<string, keyof typeof articleBodies> = {
  "90-Day Online Reporting: System Offline for Maintenance": "ninety-day-online",
  "Missed a 90-Day Report? Penalties and How to Fix": "missed-90-day",
  "Tourist Visa Extensions: Documents Checklist for Pattaya": "visa-extensions",
  "Annual Retirement Extension: Bank Letter Requirements": "retirement-bank",
  "WP + Visa Sync: Employers Must Update Within 7 Days": "wp-sync",
  "Thappraya Road Works: Allow Extra Time for Jomtien Office": "thappraya-road",
  "TM.30 Landlord Rules: Hotels and Condos Clarified": "tm30-rules",
};

export function localizeImmigrationSpotlight<
  T extends {
    id: string;
    badge: string;
    title: string;
    excerpt: string;
    cta: string;
    imageAlt: string;
  },
>(lang: LanguageCode, item: T): T {
  const patch = spotlightBodies[item.id as keyof typeof spotlightBodies];
  if (!patch) return item;
  return {
    ...item,
    badge: t(lang, patch.badge),
    title: t(lang, patch.title),
    excerpt: t(lang, patch.excerpt),
    cta: t(lang, patch.cta),
    imageAlt: t(lang, patch.imageAlt),
  };
}

export function localizeImmigrationArticle<
  T extends {
    title: string;
    badge: string;
    excerpt: string;
    footer: string;
    imageAlt: string;
  },
>(lang: LanguageCode, item: T): T {
  const key = articleKeyByTitle[item.title];
  if (!key) return item;
  const patch = articleBodies[key];
  return {
    ...item,
    badge: t(lang, patch.badge),
    title: t(lang, patch.title),
    excerpt: t(lang, patch.excerpt),
    footer: t(lang, patch.footer),
    imageAlt: t(lang, patch.imageAlt),
  };
}
