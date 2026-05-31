import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import type {
  ApplyLocation,
  CurrencyCode,
  EligibilityPath,
  FinancialMode,
} from "@/lib/visa/retirement-visa-logic";

export function getRetirementToolkitCopy(lang: LanguageCode) {
  return {
    badge: t(lang, L("Interactive", "เครื่องมือ", "互动", "Интерактив")),
    title: t(
      lang,
      L("Retirement visa toolkit", "เครื่องมือวีซ่าเกษียณ", "退休签证工具", "Набор для пенсионной визы"),
    ),
    subtitle: t(
      lang,
      L(
        "Check eligibility, convert finances, estimate insurance, and walk the application timeline.",
        "ตรวจคุณสมบัติ แปลงเงิน ประเมินประกัน และดูไทม์ไลน์การยื่น",
        "资格自检、资金换算、保险估算与申请时间线。",
        "Проверка, финансы, страховка и таймлайн.",
      ),
    ),
    eligibilityTitle: t(
      lang,
      L("Eligibility check", "ตรวจคุณสมบัติ", "资格检查", "Проверка"),
    ),
    eligibilityHint: t(
      lang,
      L("Short questionnaire — not legal advice. Rules change; confirm with Immigration.",
        "แบบสอบถามสั้น — ไม่ใช่คำปรึกษากฎหมาย กฎเปลี่ยนได้",
        "简短问卷——非法律意见，请以移民局为准。",
        "Не юридическая консультация.",
      ),
    ),
    ageLabel: t(lang, L("Your age", "อายุของคุณ", "您的年龄", "Возраст")),
    passportLabel: t(
      lang,
      L("Passport valid 18+ months?", "พาสปอร์ตเหลืออายุ 18+ เดือน?", "护照有效期 18+ 个月？", "Паспорт 18+ мес.?"),
    ),
    yes: t(lang, L("Yes", "ใช่", "是", "Да")),
    no: t(lang, L("No", "ไม่", "否", "Нет")),
    applyLabel: t(lang, L("Where will you apply?", "จะยื่นที่ไหน?", "在哪里申请？", "Где подача?")),
    applyEmbassy: t(lang, L("Thai embassy abroad", "สถานทูตไทยต่างประเทศ", "泰国驻外使馆", "Посольство")),
    applyThailand: t(lang, L("Already in Thailand", "อยู่ในประเทศไทยแล้ว", "已在泰国", "Уже в Таиланде")),
    oxLabel: t(
      lang,
      L("O-X eligible nationality?", "สัญชาติเข้าเกณฑ์ O-X?", "符合 O-X 国籍？", "Гражданство O-X?"),
    ),
    oxHint: t(
      lang,
      L("e.g. US, UK, Japan, EU — 10-year long-stay category when applying abroad.",
        "เช่น สหรัฐ อังกฤษ ญี่ปุ่น สหภาพยุโรป — หมวดพำนักระยะ 10 ปีเมื่อยื่นต่างประเทศ",
        "如美英日欧等——境外申请十年长期居留类别。",
        "США, UK, JP, EU и др.",
      ),
    ),
    checkBtn: t(lang, L("Check pathway", "ตรวจเส้นทาง", "检查路径", "Проверить")),
    resultLabel: t(lang, L("Suggested pathway", "เส้นทางที่แนะนำ", "建议路径", "Рекомендация")),
    financeTitle: t(
      lang,
      L("Financial requirement calculator", "คำนวณเงินทุน", "资金要求计算器", "Калькулятор финансов"),
    ),
    financeHint: t(
      lang,
      L("Real-time conversion against ฿800,000 deposit or ฿65,000/month income (illustrative FX).",
        "แปลงเงินเทียบฝาก 800,000 บาท หรือรายได้ 65,000 บาท/เดือน (อัตราแลกเปลี่ยนตัวอย่าง)",
        "对照 80 万存款或 6.5 万月收入换算（示例汇率）。",
        "Сравнение с 800 000 / 65 000 бат.",
      ),
    ),
    amountLabel: t(lang, L("Amount", "จำนวนเงิน", "金额", "Сумма")),
    currencyLabel: t(lang, L("Currency", "สกุลเงิน", "货币", "Валюта")),
    modeDeposit: t(lang, L("Bank deposit", "เงินฝากธนาคาร", "银行存款", "Депозит")),
    modeMonthly: t(lang, L("Monthly income", "รายได้รายเดือน", "月收入", "Доход/мес.")),
    modeCombined: t(lang, L("Deposit + income", "ฝาก + รายได้", "存款+收入", "Депозит + доход")),
    thbEquivalent: t(lang, L("THB equivalent", "เทียบเป็นบาท", "折合泰铢", "В батах")),
    threshold: t(lang, L("Required threshold", "เกณฑ์ที่ต้องการ", "要求门槛", "Порог")),
    statusPass: t(lang, L("Meets requirement", "ผ่านเกณฑ์", "达标", "Соответствует")),
    statusFail: t(lang, L("Below requirement", "ต่ำกว่าเกณฑ์", "未达标", "Ниже порога")),
    insuranceTitle: t(
      lang,
      L("Health insurance estimator", "ประเมินค่าประกัน", "保险估算", "Оценка страховки"),
    ),
    insuranceHint: t(
      lang,
      L(
        "Illustrative annual premium by age — Immigration minimums: IP ฿400,000 + OP ฿40,000 coverage.",
        "เบี้ยประมาณตามอายุ — ขั้นต่ำ Immigration: IP 400,000 + OP 40,000 บาท",
        "示意年保费——移民局最低：住院 40 万 + 门诊 4 万泰铢保障。",
        "Минимум Immigration: 400k + 40k THB.",
      ),
    ),
    insuranceAge: t(lang, L("Age", "อายุ", "年龄", "Возраст")),
    estimatedAnnual: t(lang, L("Est. annual premium", "เบี้ย/ปี (ประมาณ)", "约年保费", "Прим. год")),
    estimatedMonthly: t(lang, L("Est. per month", "เบี้ย/เดือน", "约月保费", "Прим. мес.")),
    timelineTitle: t(
      lang,
      L("Application timeline", "ไทม์ไลน์การยื่น", "申请时间线", "Таймлайн"),
    ),
    timelineHint: t(
      lang,
      L("Tap a step to focus — track completed, current, and upcoming stages.",
        "แตะแต่ละขั้น — ดูขั้นที่ผ่านแล้ว ปัจจุบัน และถัดไป",
        "点击步骤查看已完成、当前与后续阶段。",
        "Нажмите шаг.",
      ),
    ),
    stepCompleted: t(lang, L("Completed", "เสร็จแล้ว", "已完成", "Готово")),
    stepCurrent: t(lang, L("Current", "ขั้นปัจจุบัน", "当前", "Текущий")),
    stepUpcoming: t(lang, L("Upcoming", "ถัดไป", "待办", "Далее")),
    ninetyDayLink: t(
      lang,
      L("Open 90-day report assistant", "เปิดเครื่องมือรายงาน 90 วัน", "打开 90 天报到助手", "Отчёт 90 дней"),
    ),
    disclaimer: t(
      lang,
      L(
        "Illustrative tools only. Confirm fees, forms, and quotas with Immigration Chonburi or a licensed agent.",
        "เครื่องมือเพื่อวางแผนเท่านั้น ยืนยันค่าธรรมเนียมและแบบฟอร์มกับ Immigration ชลบุรีหรือตัวแทน",
        "仅供规划，请以春武里移民局或持牌代理为准。",
        "Только для планирования.",
      ),
    ),
  };
}

export function getEligibilityResult(lang: LanguageCode, path: EligibilityPath) {
  const map: Record<
    EligibilityPath,
    { title: string; body: string; tone: "ok" | "warn" | "bad" }
  > = {
    none: {
      title: t(lang, L("Not eligible yet", "ยังไม่เข้าเกณฑ์", "暂不符合", "Пока не подходит")),
      body: t(
        lang,
        L("Retirement categories require age 50+. Consider other visa types or wait until eligible.",
          "วีซ่าเกษียณต้องอายุ 50+ พิจารณาวีซ่าอื่นหรือรอจนครบอายุ",
          "退休类签证需年满 50 周岁。",
          "Нужен возраст 50+.",
        ),
      ),
      tone: "bad",
    },
    ox: {
      title: t(lang, L("Non-Immigrant O-X (long stay)", "Non-Immigrant O-X", "Non-Immigrant O-X", "O-X")),
      body: t(
        lang,
        L(
          "You may qualify for the 10-year O-X at a Thai embassy — police & medical certs from home country required.",
          "อาจเข้าเกณฑ์ O-X 10 ปีที่สถานทูต — ต้องมีประวัติอาชญากรรมและใบแพทย์จากประเทศเดิม",
          "可能符合境外申请十年 O-X——需原籍国无犯罪与体检证明。",
          "Возможна O-X в посольстве.",
        ),
      ),
      tone: "ok",
    },
    oa: {
      title: t(lang, L("Non-Immigrant O-A", "Non-Immigrant O-A", "Non-Immigrant O-A", "O-A")),
      body: t(
        lang,
        L(
          "Apply at a Thai embassy with 18+ month passport, financial proof, and insurance — then enter Thailand.",
          "ยื่นที่สถานทูตพร้อมพาสปอร์ต 18+ เดือน หลักฐานการเงินและประกัน แล้วเข้าไทย",
          "在使馆申请 O-A，持有效护照、资金与保险证明后入境。",
          "O-A в посольстве.",
        ),
      ),
      tone: "ok",
    },
    extension: {
      title: t(lang, L("Non-O extension in Thailand", "ต่ออายุ Non-O ในประเทศ", "在泰 Non-O 延期", "Продление Non-O")),
      body: t(
        lang,
        L(
          "Enter on a suitable visa, then extend at Chonburi Immigration (Pattaya) with Thai bank proof and insurance.",
          "เข้าด้วยวีซ่าที่เหมาะสม แล้วต่อที่ Immigration ชลบุรีพร้อมหลักฐานธนาคารไทยและประกัน",
          "持合适签证入境后，在春武里移民局凭泰国银行与保险证明延期。",
          "Продление в Immigration Чонburi.",
        ),
      ),
      tone: "ok",
    },
  };
  return map[path];
}

export function getTimelineSteps(lang: LanguageCode) {
  return [
    {
      id: 1 as const,
      title: t(lang, L("Gather documents", "รวบรวมเอกสาร", "准备材料", "Документы")),
      duration: t(lang, L("1–2 weeks", "1–2 สัปดาห์", "1–2 周", "1–2 нед.")),
      body: t(
        lang,
        L("Passport, photos, bank letters, insurance, TM30/address proof.",
          "พาสปอร์ต รูป หนังสือธนาคาร ประกัน หลักฐานที่อยู่",
          "护照、照片、银行证明、保险、地址证明。",
          "Паспорт, банк, страховка.",
        ),
      ),
    },
    {
      id: 2 as const,
      title: t(lang, L("Enter Thailand", "เข้าประเทศไทย", "入境泰国", "Въезд")),
      duration: t(lang, L("On arrival", "เมื่อถึง", "入境时", "По прибытии")),
      body: t(
        lang,
        L("Arrive on Non-O, O-A, or visa that allows conversion to retirement extension.",
          "เข้าด้วย Non-O O-A หรือวีซ่าที่แปลงต่ออายุเกษียณได้",
          "持 Non-O、O-A 或可转换签证入境。",
          "Въезд с подходящей визой.",
        ),
      ),
    },
    {
      id: 3 as const,
      title: t(lang, L("Immigration extension", "ต่ออายุที่ Immigration", "移民局延期", "Продление")),
      duration: t(lang, L("1–3 days", "1–3 วัน", "1–3 天", "1–3 дня")),
      body: t(
        lang,
        L("Submit at Chonburi Immigration with complete financial and medical evidence.",
          "ยื่นที่ Immigration ชลบุรีพร้อมหลักฐานการเงินและการแพทย์ครบ",
          "在春武里移民局提交完整资金与医疗材料。",
          "Подача в Immigration.",
        ),
      ),
    },
    {
      id: 4 as const,
      title: t(lang, L("90-day reporting", "รายงาน 90 วัน", "90 天报到", "Отчёт 90 дней")),
      duration: t(lang, L("Every 90 days", "ทุก 90 วัน", "每 90 天", "Каждые 90 дней")),
      body: t(
        lang,
        L("Report address online or in person — see our 90-day assistant.",
          "รายงานที่อยู่ออนไลน์หรือด้วยตน — ดูเครื่องมือ 90 วัน",
          "网上或现场报到——见 90 天助手。",
          "Отчёт каждые 90 дней.",
        ),
      ),
    },
  ];
}

export function getCurrencyOptions(lang: LanguageCode): { value: CurrencyCode; label: string }[] {
  return [
    { value: "THB", label: t(lang, L("THB", "บาท", "泰铢", "THB")) },
    { value: "USD", label: t(lang, L("USD", "ดอลลาร์", "美元", "USD")) },
    { value: "EUR", label: t(lang, L("EUR", "ยูโร", "欧元", "EUR")) },
    { value: "GBP", label: t(lang, L("GBP", "ปอนด์", "英镑", "GBP")) },
    { value: "AUD", label: t(lang, L("AUD", "ดอลลาร์ออส", "澳元", "AUD")) },
  ];
}

export function getFinancialModeOptions(lang: LanguageCode): { value: FinancialMode; label: string }[] {
  const copy = getRetirementToolkitCopy(lang);
  return [
    { value: "deposit", label: copy.modeDeposit },
    { value: "monthly", label: copy.modeMonthly },
    { value: "combined", label: copy.modeCombined },
  ];
}
