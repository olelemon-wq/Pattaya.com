import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import type { TimelineMilestoneId } from "@/lib/visa/ninety-day-report-logic";

export type ReportMethodTabId = "online" | "in-person" | "mail";

export function getNinetyDayAssistantCopy(lang: LanguageCode) {
  return {
    badge: t(lang, L("Interactive", "เครื่องมือ", "互动", "Интерактив")),
    title: t(
      lang,
      L("90-Day Report Assistant", "ผู้ช่วยรายงาน 90 วัน", "90 天报到助手", "Помощник отчёта 90 дней"),
    ),
    subtitle: t(
      lang,
      L(
        "Calculate your reporting window and follow the right channel — online, Jomtien Immigration, or registered mail.",
        "คำนวณช่วงเวลารายงานและเลือกช่องทาง — ออนไลน์ ตม.จอมเทียน หรือไปรษณีย์",
        "计算报到时间窗口并选择渠道——在线、Jomtien 移民局或挂号信。",
        "Рассчитайте сроки и выберите способ подачи.",
      ),
    ),
    calcTitle: t(lang, L("Deadline calculator", "คำนวณกำหนด", "截止日期计算", "Калькулятор сроков")),
    calcHint: t(
      lang,
      L(
        "Enter the date of your last Thailand entry stamp or your last successful 90-day report.",
        "ใส่วันที่ตราประทับเข้าไทยครั้งล่าสุด หรือวันที่รายงาน 90 วันสำเร็จครั้งล่าสุด",
        "填写最近一次入境章或上次成功 90 天报到日期。",
        "Дата последнего въезда или отчёта.",
      ),
    ),
    dateLabel: t(
      lang,
      L("Last entry or last report", "เข้า/รายงานครั้งล่าสุด", "上次入境或报到", "Последний въезд/отчёт"),
    ),
    timelineEmpty: t(
      lang,
      L("Select a date to see your reporting timeline.", "เลือกวันที่เพื่อดูเส้นเวลา", "选择日期以显示时间线。", "Выберите дату."),
    ),
    daysLeft: (n: number) =>
      t(
        lang,
        L(`${n} days from today`, `อีก ${n} วันจากวันนี้`, `距今天 ${n} 天`, `${n} дн. от сегодня`),
      ),
    daysAgo: (n: number) =>
      t(
        lang,
        L(`${n} days ago`, `${n} วันที่แล้ว`, `${n} 天前`, `${n} дн. назад`),
      ),
    todayLabel: t(lang, L("Today", "วันนี้", "今天", "Сегодня")),
    guideTitle: t(lang, L("How to report", "วิธีรายงาน", "如何报到", "Как подать")),
    tabOnline: t(lang, L("Online", "ออนไลน์", "在线", "Онлайн")),
    tabInPerson: t(
      lang,
      L("In-Person (Jomtien)", "ยื่นด้วยตน (จอมเทียน)", "现场 (Jomtien)", "Лично (Jomtien)"),
    ),
    tabMail: t(lang, L("By Mail", "ส่งไปรษณีย์", "邮寄", "Почтой")),
    onlineLead: t(
      lang,
      L("Use the official Immigration e-Service (TM47).", "ใช้ระบบ e-Service ตม. (TM47)", "使用移民局 e-Service (TM47)。", "Официальный e-Service TM47."),
    ),
    onlineCta: t(lang, L("Open TM47 e-Service", "เปิด TM47 ออนไลน์", "打开 TM47", "Открыть TM47")),
    onlineNoteTitle: t(lang, L("Before you start", "ก่อนเริ่ม", "开始前", "Перед началом")),
    onlineNotes: [
      t(
        lang,
        L("Use Google Chrome — other browsers may fail on the Immigration portal.",
          "ใช้ Google Chrome — เบราว์เซอร์อื่นอาจใช้พอร์ทัลตม. ไม่ได้",
          "请使用 Chrome——其他浏览器可能无法打开移民局网站。",
          "Используйте Chrome."),
      ),
      t(
        lang,
        L("Turn off VPN while submitting — the site may block foreign IPs or proxy traffic.",
          "ปิด VPN ขณะยื่น — ระบบอาจบล็อก IP ต่างประเทศหรือพร็อกซี",
          "提交时请关闭 VPN——网站可能拦截代理流量。",
          "Отключите VPN при подаче."),
      ),
      t(
        lang,
        L("Confirm your address matches TM30 / house registration before submitting.",
          "ยืนยันที่อยู่ตรง TM30/ทะเบียนบ้านก่อนส่ง",
          "提交前确认地址与 TM30/户口一致。",
          "Адрес должен совпадать с TM30."),
      ),
    ],
    inPersonLead: t(
      lang,
      L(
        "Chonburi Immigration — Jomtien office (Pattaya area). Arrive early; bring originals.",
        "ตม.จังหวัดชลบุรี สาขาจอมเทียน (พื้นที่พัทยา) ไปเช้า พกต้นฉบับ",
        "春武里移民局 Jomtien 分局（芭提雅）——请早到并携带原件。",
        "Immigration Chonburi, Jomtien.",
      ),
    ),
    inPersonChecklistTitle: t(lang, L("Bring with you", "เอกสารที่ต้องมี", "携带材料", "Документы")),
    inPersonChecklist: [
      t(lang, L("Passport (original)", "พาสปอร์ต (ต้นฉบับ)", "护照原件", "Паспорт")),
      t(lang, L("TM47 form (completed)", "แบบ TM47 (กรอกแล้ว)", "已填 TM47 表", "Форма TM47")),
      t(
        lang,
        L("Receipt from your previous 90-day report (if any)", "ใบเสร็จรายงาน 90 วันครั้งก่อน (ถ้ามี)", "上次 90 天报到回执（如有）", "Квитанция прошлого отчёта"),
      ),
      t(
        lang,
        L("TM30 receipt or proof of address if requested", "ใบรับ TM30 หรือหลักฐานที่อยู่ถ้าขอ", "如要求则带 TM30 或地址证明", "TM30 при запросе"),
      ),
    ],
    mailLead: t(
      lang,
      L(
        "Send by registered mail (ลงทะเบียน) so you have proof of posting before the deadline.",
        "ส่งลงทะเบียนเพื่อมีหลักฐานก่อนครบกำหนด",
        "请用挂号信邮寄以便保留凭证。",
        "Отправьте заказным письмом.",
      ),
    ),
    mailAddressTitle: t(lang, L("Mailing address", "ที่อยู่จัดส่ง", "邮寄地址", "Адрес"),
    ),
    mailAddressLines: [
      t(
        lang,
        L("90-Day Notification Section", "แผนกแจ้งที่อยู่ 90 วัน", "90 天报到科", "Отдел 90 дней"),
      ),
      t(
        lang,
        L("Chonburi Immigration Office (Jomtien)", "สำนักงานตม.จังหวัดชลบุรี (จอมเทียน)", "春武里移民局（Jomtien）", "Immigration Chonburi (Jomtien)"),
      ),
      t(
        lang,
        L("Thap Phraya Road, Nong Prue, Bang Lamung", "ถ.ทับพระยา หนองปรือ บางละมุง", "Thap Phraya 路，Nong Prue", "Thap Phraya, Nong Prue"),
      ),
      t(lang, L("Chon Buri 20150, Thailand", "จ.ชลบุรี 20150", "春武里 20150", "Chon Buri 20150"),
      ),
    ],
    mailNoteTitle: t(lang, L("Envelope tip", "เคล็ดลับซองจดหมาย", "信封提示", "Конверт"),
    ),
    mailNote: t(
      lang,
      L(
        "Include a self-addressed stamped envelope (SASE) so Immigration can mail your next receipt back to you.",
        "ใส่ซองเปล่าพร้อมแสตมป์จ่าหน้าถึงตัวเอง เพื่อให้ตม.ส่งใบเสร็จรอบถัดไปกลับมา",
        "附带回邮费的空白信封（写明自己地址），以便移民局寄回下次回执。",
        "Приложите конверт с маркой и вашим адресом для ответа.",
      ),
    ),
    disclaimer: t(
      lang,
      L(
        "Rules and fines change — confirm dates with Immigration or a licensed agent before travelling.",
        "กฎและค่าปรับเปลี่ยนได้ — ยืนยันกับตม.หรือตัวแทนที่มีใบอนุญาตก่อนเดินทาง",
        "规定与罚款可能变更——出行前请向移民局或持牌代理确认。",
        "Уточняйте правила в Immigration.",
      ),
    ),
  };
}

export function getTimelineLabels(lang: LanguageCode): Record<TimelineMilestoneId, string> {
  return {
    earliest: t(
      lang,
      L("Earliest report", "เริ่มรายงานได้", "最早可报到", "Можно с"),
    ),
    due: t(lang, L("Due date", "ครบกำหนด", "截止日", "Срок"),
    ),
    lastGrace: t(
      lang,
      L("Last allowed day", "วันสุดท้ายที่อนุโลม", "最后宽限日", "Последний день"),
    ),
  };
}
