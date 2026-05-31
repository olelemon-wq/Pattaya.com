import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

export function getDrivingInteractiveCopy(lang: LanguageCode) {
  return {
    badge: t(lang, L("Interactive", "เครื่องมือ", "互动工具", "Интерактив")),
    title: t(
      lang,
      L(
        "Pattaya transport & driving toolkit",
        "คู่มือเดินทางและขับขี่ในพัทยา",
        "芭提雅出行与驾驶工具",
        "Транспорт и права в Паттайе",
      ),
    ),
    subtitle: t(
      lang,
      L(
        "Compare monthly costs, complete a pre-rental safety checklist, and explore Thai license steps — all in one place.",
        "เปรียบเทียบค่าเดินทางรายเดือน เช็กลิสต์ก่อนเช่ารถ และดูขั้นตอนใบขับขี่ไทย — ในที่เดียว",
        "对比月交通费、租车前清单与泰国驾照步骤。",
        "Сравнение расходов, чеклист аренды и шаги прав.",
      ),
    ),
    sectionCost: t(
      lang,
      L("Monthly cost comparer", "เปรียบเทียบค่าเดินทางรายเดือน", "月度费用对比", "Сравнение затрат"),
    ),
    tripsLabel: t(
      lang,
      L("Trips per day", "จำนวนเที่ยวต่อวัน", "每日行程次数", "Поездок в день"),
    ),
    tripsHint: t(
      lang,
      L("Slide to estimate — illustrative fares, not a quote.",
        "เลื่อนเพื่อประมาณการ — ราคาตัวอย่าง ไม่ใช่ใบเสนอราคา",
        "滑动估算——示例价格。",
        "Примерные тарифы.",
      ),
    ),
    grabLabel: t(lang, L("Grab / Bolt", "Grab / Bolt", "Grab / Bolt", "Grab / Bolt")),
    grabFormula: t(
      lang,
      L("trips × ฿100 × 30 days", "เที่ยว × 100 บาท × 30 วัน", "次×100泰铢×30天", "×100×30"),
    ),
    songthaewLabel: t(lang, L("Songthaew (baht bus)", "รถสองแถว (10 บาท)", "双条车", "Songthaew")),
    songthaewFormula: t(
      lang,
      L("trips × ฿20 × 30 days", "เที่ยว × 20 บาท × 30 วัน", "次×20泰铢×30天", "×20×30"),
    ),
    motoLabel: t(lang, L("Monthly scooter rent", "เช่ามอเตอร์ไซค์รายเดือน", "月租摩托", "Аренда мото")),
    motoFormula: t(
      lang,
      L("฿3,500 rent + ฿1,500 fuel (est.)", "ค่าเช่า 3,500 + น้ำมัน 1,500 (ประมาณ)", "租金3500+油费1500（估）", "3500+1500 бат"),
    ),
    monthlyTotal: t(lang, L("Estimated / month", "ประมาณ / เดือน", "约/月", "/ месяц")),
    cheapest: t(lang, L("Lowest this month", "ถูกที่สุดในเดือนนี้", "本月最低", "Дешевле всего")),
    sectionChecklist: t(
      lang,
      L("Pre-rental checklist", "เช็กลิสต์ก่อนเช่ารถ", "租车前清单", "Чеклист аренды"),
    ),
    checklistProgress: t(lang, L("Progress", "ความคืบหน้า", "进度", "Прогресс")),
    checklistDone: t(
      lang,
      L("All set — safe to sign when you are comfortable.",
        "ครบแล้ว — พร้อมเซ็นเมื่อมั่นใจ",
        "已完成——确认无误后再签字。",
        "Готово — подписывайте уверенно.",
      ),
    ),
    sectionLicense: t(
      lang,
      L("Thai driving license — 6 steps", "ใบขับขี่ไทย — 6 ขั้นตอน", "泰国驾照六步", "Права — 6 шагов"),
    ),
    licenseHint: t(
      lang,
      L(
        "Allow a full morning at Chonburi DLT. Tap each step for details.",
        "เผื่อเวลาครึ่งวันที่กรมขนส่งชลบุรี แตะแต่ละขั้นเพื่อดูรายละเอียด",
        "预留半天前往春武里陆运厅。点击各步查看详情。",
        "Полдня в DLT Чонбури. Нажмите шаг.",
      ),
    ),
    disclaimer: t(
      lang,
      L(
        "Estimates for planning only. Fares, rent, and DLT rules change — verify before you travel or sign.",
        "ตัวเลขเพื่อวางแผน ราคาและกฎอาจเปลี่ยน — ตรวจสอบก่อนเดินทางหรือเซ็นสัญญา",
        "仅供规划参考，请以实际情况为准。",
        "Оценки для планирования.",
      ),
    ),
  };
}

export type ChecklistItemId =
  | "photos"
  | "passport"
  | "brakes"
  | "insurance"
  | "fuel"
  | "contract"
  | "dealer";

export function getRentalChecklistItems(lang: LanguageCode) {
  return [
    {
      id: "photos" as ChecklistItemId,
      label: t(
        lang,
        L(
          "Photo or video all sides, scratches, and dashboard warnings",
          "ถ่ายภาพ/วิดีโอรอบคัน รอยขีดข่วน และไฟเตือนหน้าปัด",
          "拍摄车身四周、划痕与仪表警告灯",
          "Фото/видео всех сторон и приборной панели",
        ),
      ),
      warning: false,
    },
    {
      id: "passport" as ChecklistItemId,
      label: t(
        lang,
        L(
          "Never leave your original passport as deposit — cash or card hold only",
          "อย่าฝากพาสปอร์ตตัวจริงเป็นหลักประกัน — ใช้เงินมัดจำหรือกันวงเงินบัตรเท่านั้น",
          "切勿押护照原件——仅现金押金或信用卡预授权",
          "Не оставляйте паспорт — только депозит/холд карты",
        ),
      ),
      warning: true,
    },
    {
      id: "brakes" as ChecklistItemId,
      label: t(
        lang,
        L(
          "Test brakes, horn, headlights, and turn signals before leaving the shop",
          "ทดสอบเบรก แตร ไฟหน้า และไฟเลี้ยวก่อนออกจากร้าน",
          "离店前测试刹车、喇叭、大灯与转向灯",
          "Проверьте тормоза, сигнал и фары",
        ),
      ),
      warning: false,
    },
    {
      id: "insurance" as ChecklistItemId,
      label: t(
        lang,
        L(
          "Confirm พ.ร.บ. and rental insurance — photograph policy number",
          "ยืนยัน พ.ร.บ. และประกันเช่า — ถ่ายเลขกรมธรรม์",
          "确认强制险与租车险——拍摄保单号",
          "พ.ร.บ. и страховка — фото полиса",
        ),
      ),
      warning: false,
    },
    {
      id: "fuel" as ChecklistItemId,
      label: t(
        lang,
        L(
          "Note fuel level and mileage on the contract",
          "บันทึกระดับน้ำมันและเลขไมล์ในสัญญา",
          "在合同上记录油量与里程",
          "Уровень топлива и пробег в договоре",
        ),
      ),
      warning: false,
    },
    {
      id: "contract" as ChecklistItemId,
      label: t(
        lang,
        L(
          "Read excess/deductible and flood exclusions before signing",
          "อ่านค่าเสียหายส่วนแรกและข้อยกเว้นน้ำท่วมก่อนเซ็น",
          "签字前阅读免赔额与水灾免责条款",
          "Франшиза и исключения — до подписи",
        ),
      ),
      warning: false,
    },
    {
      id: "dealer" as ChecklistItemId,
      label: t(
        lang,
        L(
          "Use a licensed rental shop or international chain — avoid informal Facebook-only listings",
          "ใช้ร้านเช่าที่มีใบอนุญาตหรือแบรนด์สากล — หลีกเลี่ยงประกาศ Facebook อย่างเดียว",
          "选择持证租车行或国际连锁——避免仅脸书私下交易",
          "Лицензированная аренда, не только Facebook",
        ),
      ),
      warning: false,
    },
  ];
}
