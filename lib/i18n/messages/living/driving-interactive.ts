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
      L("Thai driving license steps", "ขั้นตอนใบขับขี่ไทย", "泰国驾照步骤", "Шаги прав"),
    ),
    licenseHint: t(
      lang,
      L("Tap a step to expand documents and details.",
        "แตะแต่ละขั้นเพื่อดูรายละเอียด",
        "点击步骤展开详情。",
        "Нажмите шаг для деталей.",
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
  | "contract";

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
  ];
}

export type LicenseStepId = "residence" | "medical" | "dlt";

export function getLicenseStepperSteps(lang: LanguageCode) {
  return [
    {
      id: "residence" as LicenseStepId,
      step: 1,
      title: t(
        lang,
        L("Residence certificate", "ขอใบรับรองถิ่นที่อยู่", "居住证明", "Подтверждение адреса"),
      ),
      body: t(
        lang,
        L(
          "TM30 from your landlord or condo juristic office, house registration copy, or lease registered with immigration — must show your Chonburi/Pattaya address.",
          "ใบ TM30 จากเจ้าของบ้านหรือนิติบุคคลคอนโด สำเนาทะเบียนบ้าน หรือสัญญาเช่าที่แจ้งตม. — ต้องแสดงที่อยู่ในชลบุรี/พัทยา",
          "房东或公寓管理处 TM30、户口复印件或已向移民局登记的租约——须显示春武里/芭提雅地址。",
          "TM30, house book или аренда с адресом Чонбури/Паттайи.",
        ),
      ),
      bullets: [
        t(lang, L("Passport + visa page copies", "สำเนาพาสปอร์ตและหน้าวีซ่า", "护照与签证页复印件", "Копии паспорта и визы")),
        t(lang, L("2 passport photos", "รูปถ่าย 2 รูป", "证件照2张", "2 фото")),
      ],
    },
    {
      id: "medical" as LicenseStepId,
      step: 2,
      title: t(lang, L("Medical certificate", "ใบตรวจสุขภาพขับขี่", "驾驶体检证明", "Медсправка")),
      body: t(
        lang,
        L(
          "Visit a DLT-approved clinic in Pattaya — same-day certificates are common on Sukhumvit and North Pattaya. Valid within 30 days.",
          "ไปคลินิกที่กรมขนส่งอนุมัติในพัทยา — หลายแห่งออกใบได้ในวันเดียวบนสุขุมวิทและพัทยาเหนือ ใช้ได้ภายใน 30 วัน",
          "前往芭提雅认可的陆运厅体检诊所——Sukhumvit 与北芭多可当日出证，30天内有效。",
          "Клиника, одобренная DLT; часто в тот же день; 30 дней.",
        ),
      ),
      bullets: [
        t(lang, L("Vision & basic fitness test", "ตรวจสายตาและสุขภาพพื้นฐาน", "视力与基本健康检查", "Зрение и базовый осмотр")),
        t(lang, L("Fee roughly ฿100–300", "ค่าธรรมเนียมประมาณ 100–300 บาท", "费用约100–300泰铢", "~100–300 бат")),
      ],
    },
    {
      id: "dlt" as LicenseStepId,
      step: 3,
      title: t(
        lang,
        L("DLT Chonburi — tests & license", "กรมขนส่งชลบุรี — สอบและรับใบขับขี่", "春武里陆运厅考试领证", "DLT Чонбури"),
      ),
      body: t(
        lang,
        L(
          "Department of Land Transport, Chonburi Province. Colour-blindness plate, reaction test, and computer theory. Car (class B) and motorcycle (class A) are separate.",
          "กรมการขนส่งทางบก จังหวัดชลบุรี ทดสอบตาบอดสี ปฏิกิริยา และทฤษฎีคอมพิวเตอร์ รถยนต์ (ชั้น B) และมอเตอร์ไซค์ (ชั้น A) แยกกัน",
          "春武里府陆运厅：色盲检测、反应测试、机考理论；汽车B类与摩托A类分开考取。",
          "DLT Чонбури: зрение, реакция, теория; классы B и A отдельно.",
        ),
      ),
      bullets: [
        t(
          lang,
          L(
            "Converting? Bring home license + embassy translation",
            "แปลงใบเดิม? นำใบขับขี่เดิม + แปลสถานทูต",
            "转换？携带本国驾照+使馆翻译",
            "Конвертация: права + перевод",
          ),
        ),
        t(
          lang,
          L("Car license valid 5 years; pay fees on site", "ใบรถยนต์มัก 5 ปี ชำระค่าธรรมเนียมที่สำนักงาน", "汽车驾照通常5年，现场缴费", "Авто — 5 лет, оплата на месте"),
        ),
      ],
    },
  ];
}
