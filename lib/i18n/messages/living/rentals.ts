import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

export function getRentalsPage(lang: LanguageCode) {
  return {
    introTitle: t(lang, L("Renting in Pattaya", "เช่าที่พักในพัทยา", "芭提雅租房", "Аренда в Паттайе")),
    introBody: t(
      lang,
      L(
        "Finding a house or condo in Pattaya is straightforward — any visa type can rent long-term legally. Standard leases run 6–12 months with upfront deposits as the norm.",
        "หาบ้านหรือคอนโดในพัทยาไม่ยาก ไม่ว่าวีซ่าประเภทใดก็เช่าระยะยาวได้ตามกฎหมาย สัญญาทั่วไป 6–12 เดือน และมักจ่ายมัดจำล่วงหน้า",
        "在芭提雅租房不难，任何签证类型均可合法长租。常见租约6–12个月，并需预付押金。",
        "Аренда в Паттайе доступна при любом типе визы; договор 6–12 месяцев.",
      ),
    ),
    financialsTitle: t(lang, L("Standard upfront costs", "โครงสร้างค่าใช้จ่ายมาตรฐาน", "标准费用结构", "Стандартные расходы")),
    financialsSubtitle: t(
      lang,
      L(
        "What to budget before move-in day.",
        "สิ่งที่ต้องเตรียมก่อนวันย้ายเข้า",
        "入住前需准备的款项。",
        "Бюджет до заселения.",
      ),
    ),
    documentsTitle: t(lang, L("Documents you need", "เอกสารที่ต้องใช้", "所需文件", "Документы")),
    documentsSubtitle: t(
      lang,
      L(
        "Thai rentals are simpler than in many Western countries.",
        "การเช่าในไทยเรียบง่ายกว่าหลายประเทศตะวันตก",
        "泰国租房手续通常比西方国家简单。",
        "Документов обычно меньше, чем на Западе.",
      ),
    ),
    leaseTitle: t(lang, L("Lease agreement checklist", "สิ่งที่ต้องตรวจในสัญญาเช่า", "租约审查要点", "Проверка договора")),
    leaseSubtitle: t(
      lang,
      L(
        "Protect yourself before signing — especially on move-out.",
        "ป้องกันปัญหาก่อนเซ็น — โดยเฉพาะตอนย้ายออก",
        "签约前保护自己——尤其涉及退租时。",
        "Проверьте до подписания.",
      ),
    ),
    tm30Title: t(lang, L("TM.30 — do not skip this", "TM.30 — ห้ามมองข้าม", "TM.30 不可忽视", "TM.30")),
    tm30Subtitle: t(
      lang,
      L(
        "The #1 reason expats cannot extend visas or open bank accounts.",
        "สาเหตุอันดับหนึ่งที่ต่อวีซ่าหรือเปิดบัญชีไม่ได้",
        "外籍人士无法续签或开户的首要原因之一。",
        "Главная причина проблем с визой и банком.",
      ),
    ),
    neighborhoodsTitle: t(lang, L("Pattaya neighborhoods", "โซนพัทยา", "芭提雅区域", "Районы Паттайи")),
    neighborhoodsSubtitle: t(
      lang,
      L("Pick the vibe that matches your lifestyle and budget.",
        "เลือกบรรยากาศที่เหมาะกับไลฟ์สไตล์และงบ",
        "按生活方式与预算选区。",
        "Выберите район под стиль жизни.",
      ),
    ),
    rentTableTitle: t(lang, L("Indicative monthly rent", "ค่าเช่าโดยประมาณ", "参考月租", "Примерная аренда")),
    rentTableSubtitle: t(
      lang,
      L("Furnished condos — market ranges vary by building and season.",
        "คอนโดพร้อมอยู่ — ราคาแตกต่างตามตึกและฤดูกาล",
        "精装公寓——因楼盘与季节而异。",
        "Меблированные кондо; цены зависят от здания.",
      ),
    ),
    tableArea: t(lang, L("Area", "ทำเล", "区域", "Район")),
    tableStudio: t(lang, L("Studio", "สตูดิโอ", "单间", "Студия")),
    tableTwoBr: t(lang, L("2 BR", "2 ห้องนอน", "两卧", "2 спальни")),
    livingHub: t(lang, L("Living hub →", "ศูนย์ไลฟ์สไตล์ →", "生活中心 →", "Раздел «Жизнь» →")),
    condoBuying: t(lang, L("Condo buying →", "ซื้อคอนโด →", "购买公寓 →", "Покупка кондо →")),
    scamAlerts: t(lang, L("Scam alerts →", "แจ้งเตือนมิจฉาชีพ →", "诈骗提醒 →", "Мошенничество →")),
  };
}

export function getRentalFinancials(lang: LanguageCode) {
  return [
    {
      title: t(lang, L("Upfront payment", "เงินก้อนแรก", "首期款项", "Первый платёж")),
      text: t(
        lang,
        L(
          "Thai standard: 2 months deposit + 1 month rent in advance (three months total before move-in). Deposit must be returned within 30 days after move-out if there is no damage.",
          "มาตรฐานไทย: มัดจำ 2 เดือน + ค่าเช่าล่วงหน้า 1 เดือน (รวม 3 เดือนก่อนเข้าอยู่) มัดจำคืนภายใน 30 วันหลังย้ายออกหากไม่เสียหาย",
          "泰国惯例：押金2个月+预付1个月租金（入住前共3个月）。无损坏须在搬出后30天内退还押金。",
          "2 месяца залога + 1 месяц аренды вперёд; возврат за 30 дней.",
        ),
      ),
    },
    {
      title: t(lang, L("Water & electricity", "ค่าน้ำ-ค่าไฟ", "水电费", "Вода и свет")),
      text: t(
        lang,
        L(
          "Insist on government rates (MEA/PEA electricity and municipal water billed directly). Some landlords surcharge 2–3× — confirm before signing.",
          "ควรจ่ายตามบิลหลวง (การไฟฟ้า MEA/PEA และประปาโดยตรง) บางเจ้าของบวกเรทเอง 2–3 เท่า — ยืนยันก่อนเซ็น",
          "坚持按政府电价水价（MEA/PEA 电、市政水）直缴；部分房东加价2–3倍——签约前确认。",
          "Тарифы MEA/PEA без наценки владельца.",
        ),
      ),
    },
    {
      title: t(lang, L("Common area fees (CAM)", "ค่าส่วนกลาง", "物业费", "CAM")),
      text: t(
        lang,
        L(
          "Under typical Thai practice, annual common-area fees are the landlord’s responsibility — not the tenant’s. Clarify in writing.",
          "ตามธรรมเนียมทั่วไป ค่าส่วนกลางรายปีเป็นหน้าที่เจ้าของห้อง ไม่ใช่ผู้เช่า — ระบุในสัญญา",
          "按泰国惯例，年度物业费通常由房东承担——须在合同中写明。",
          "CAM обычно платит арендодатель.",
        ),
      ),
    },
  ];
}

export function getRentalDocuments(lang: LanguageCode) {
  return {
    need: [
      t(lang, L("Passport — clear photo page", "พาสปอร์ต — หน้ารูปชัดเจน", "护照清晰照片页", "Паспорт")),
      t(
        lang,
        L(
          "Valid visa — tourist visas can rent; long-stay visas (Non-O, Non-B, LTR) make TM30 and banking easier.",
          "วีซ่าที่ใช้ได้ — วีซ่าท่องเที่ยวเช่าได้ วีซ่าระยะยาว (Non-O, Non-B, LTR) ช่วยเรื่อง TM30 และธนาคาร",
          "有效签证——旅游签可租；长居签（Non-O、Non-B、LTR）便于 TM30 与开户。",
          "Виза; долгосрочные упрощают TM30.",
        ),
      ),
    ],
    notRequired: t(
      lang,
      L(
        "Usually not required: credit bureau reports or bank statements (except for luxury high-end rentals).",
        "มักไม่ต้องใช้: เครดิตบูโร หรือสเตทเมนต์ (ยกเว้นที่พักหรูราคาสูง)",
        "通常不需要：征信报告或银行流水（高端豪宅除外）。",
        "Кредитная история обычно не нужна.",
      ),
    ),
  };
}

export function getRentalLeaseChecks(lang: LanguageCode) {
  return [
    {
      title: t(lang, L("Bilingual contract", "สัญญาสองภาษา", "双语合同", "Двуязычный договор")),
      text: t(
        lang,
        L(
          "Thai and English side by side — specify which language prevails if there is a dispute.",
          "ภาษาไทยและอังกฤษคู่กัน — ระบุว่าฉบับไหนใช้เมื่อมีข้อพิพาท",
          "泰英对照——争议时以哪一版为准须写明。",
          "Тайский + английский; язык при споре.",
        ),
      ),
    },
    {
      title: t(lang, L("Maintenance clauses", "การซ่อมแซม", "维修条款", "Ремонт")),
      text: t(
        lang,
        L(
          "Who pays AC cleaning (often tenant every 6 months or split)? Who covers aging pipes/appliances? Write it clearly.",
          "ใครจ่ายล้างแอร์ (มักผู้เช่าทุก 6 เดือนหรือคนละครึ่ง)? ท่อหรือเครื่องใช้ชำรุดตามอายุใครรับผิดชอบ? เขียนให้ชัด",
          "空调清洗谁付（常每6个月租客或分摊）？老化管道/电器谁负责？须写清。",
          "Чистка кондиционера; износ техники.",
        ),
      ),
    },
    {
      title: t(lang, L("Building rules", "กฎตึก", "楼盘规定", "Правила здания")),
      text: t(
        lang,
        L(
          "Most Pattaya condos prohibit pets and restrict noise after set quiet hours — confirm before you sign.",
          "คอนโดพัทยาส่วนใหญ่ห้ามเลี้ยงสัตว์และห้ามเสียงดังหลังเวลาเงียบ — ยืนยันก่อนเซ็น",
          "芭提雅多数公寓禁宠物并限制安静时段后的噪音——签约前确认。",
          "Часто запрет животных и шума.",
        ),
      ),
    },
  ];
}

export function getRentalTm30(lang: LanguageCode) {
  return {
    landlordDuty: t(
      lang,
      L(
        "When a foreigner moves in, the landlord must report the address to Immigration within 24 hours (TM.30).",
        "เมื่อชาวต่างชาติเข้าพัก เจ้าของต้องแจ้งที่อยู่ต่อ ตม. ภายใน 24 ชั่วโมง (TM.30)",
        "外籍租客入住后，房东须在24小时内向移民局申报地址（TM.30）。",
        "Арендодатель подаёт TM.30 в течение 24 часов.",
      ),
    ),
    tenantTip: t(
      lang,
      L(
        'Before signing, ask clearly: "Will you file TM.30 for me?" You need the receipt for visa extensions and many bank accounts in Pattaya.',
        "ก่อนเซ็นสัญญา ถามให้ชัด: “จะยื่น TM.30 ให้ไหม?” ต้องใช้ใบเสร็จต่อวีซ่าและเปิดบัญชีธนาคารในพัทยา",
        "签约前明确问：“会帮我办 TM.30 吗？”续签与在芭提雅开户都需要回执。",
        "Спросите о TM.30 до подписания.",
      ),
    ),
  };
}

export function getRentalNeighborhoods(lang: LanguageCode) {
  return [
    {
      name: t(lang, L("Wongamat", "วงศ์อมาตย์", "旺阿玛", "Wongamat")),
      vibe: t(lang, L("Quiet & upscale", "เงียบ หรู ติดหาด", "安静高端临海", "Тихо и премиум")),
      text: t(
        lang,
        L(
          "Calm beachfront living — popular with families and slow-lifestyle expats. Rents run higher.",
          "ชายหาดเงียบสงบ — ครอบครัวและสายสโลว์ไลฟ์ ค่าเช่าค่อนข้างสูง",
          "宁静海滨——适合家庭与慢生活外籍人士，租金偏高。",
          "Спокойный пляж; выше цены.",
        ),
      ),
    },
    {
      name: t(lang, L("Central Pattaya", "พัทยากลาง", "芭提雅中心", "Центр Pattaya")),
      vibe: t(lang, L("Urban & convenient", "ศูนย์กลาง สะดวก", "都市便利", "Центр города")),
      text: t(
        lang,
        L(
          "Nightlife, malls, and songthaews on your doorstep — best for convenience and social life.",
          "ไนท์ไลฟ์ ห้าง สองแถว — เหมาะกับความสะดวกและสังคม",
          "夜生活、商场、双条车便利——适合社交与出行。",
          "Ночная жизнь и ТЦ рядом.",
        ),
      ),
    },
    {
      name: t(lang, L("Pratumnak", "เขาพระตำหนัก", "帕塔姆纳克", "Pratumnak")),
      vibe: t(lang, L("Green & scenic", "ร่มรื่น วิวสวย", "绿意景观", "Холмы и виды")),
      text: t(
        lang,
        L(
          "Hill views, cafés, and a large retiree community between Pattaya and Jomtien.",
          "วิวเขา คาเฟ่ ชุมชนเกษียณ — ระหว่างพัทยากลางและจอมเทียน",
          "山景、咖啡馆、退休外籍社区——介于市中心与仲天之间。",
          "Популярен у пенсионеров.",
        ),
      ),
    },
    {
      name: t(lang, L("Jomtien", "จอมเทียน", "仲天", "Jomtien")),
      vibe: t(lang, L("Long-stay value", "อยู่ระยะยาว คุ้มค่า", "长住性价比", "Долгосрочная аренда")),
      text: t(
        lang,
        L(
          "Long beach, lower cost of living, and one of Pattaya’s largest expat communities.",
          "หาดยาว ค่าครองชีพต่ำกว่า ชุมชนชาวต่างชาติใหญ่",
          "长海滩、生活成本较低、大型外籍社区。",
          "Длинный пляж; ниже цены.",
        ),
      ),
    },
  ];
}

export function getRentalPriceRanges(lang: LanguageCode) {
  return [
    {
      area: t(lang, L("Central Pattaya", "พัทยากลาง", "芭提雅中心", "Центр")),
      studio: "฿8k–15k",
      twoBed: "฿15k–28k",
    },
    {
      area: t(lang, L("Jomtien", "จอมเทียน", "仲天", "Jomtien")),
      studio: "฿10k–18k",
      twoBed: "฿18k–35k",
    },
    {
      area: t(lang, L("Pratumnak", "เขาพระตำหนัก", "帕塔姆纳克", "Pratumnak")),
      studio: "฿12k–22k",
      twoBed: "฿22k–45k",
    },
    {
      area: t(lang, L("Wongamat / Naklua", "วงศ์อมาตย์ / นาเกลือ", "旺阿玛/那库拉", "Wongamat")),
      studio: "฿10k–20k",
      twoBed: "฿20k–40k",
    },
  ];
}
