import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

export type EliteTierId = "bronze" | "gold" | "platinum" | "diamond" | "reserve";

export function getThailandElitePage(lang: LanguageCode) {
  return {
    introTitle: t(
      lang,
      L("Thailand Privilege in one glance", "Thailand Privilege โดยสรุป", "泰国精英签一览", "Thailand Privilege"),
    ),
    introBody: t(
      lang,
      L(
        "Thailand Elite (Thailand Privilege) is a government-backed long-stay program (5–20 years) for foreign nationals — one upfront membership fee, multi-year legal residence, and VIP concierge support throughout your stay.",
        "Thailand Elite (Thailand Privilege) คือโปรแกรมพำนักระยะยาว (5–20 ปี) ภายใต้การท่องเที่ยวแห่งประเทศไทย — จ่ายครั้งเดียว อยู่ยาวถูกกฎหมาย พร้อมผู้ช่วย VIP ตลอดการพำนัก",
        "泰国精英签（Thailand Privilege）为政府支持的长居计划（5–20年）——一次付费、合法长期居留及全程 VIP 礼宾。",
        "Thailand Privilege — долгосрочное пребывание 5–20 лет с VIP-сопровождением.",
      ),
    ),
    whyTitle: t(lang, L("Why choose Thailand Elite?", "ทำไมต้องเลือก Thailand Elite?", "为何选择泰国精英签？", "Зачем Elite?")),
    whySubtitle: t(
      lang,
      L(
        "How it differs from standard tourist or retirement visas.",
        "ความต่างจากวีซ่าท่องเที่ยวหรือเกษียณทั่วไป",
        "与普通旅游/退休签证的区别。",
        "Отличие от обычных виз.",
      ),
    ),
    tiersTitle: t(lang, L("Packages at a glance", "แพ็กเกจโดยสรุป", "套餐一览", "Пакеты")),
    tiersSubtitle: t(
      lang,
      L(
        "Compare membership tiers — fees are one-time and subject to official updates.",
        "เปรียบเทียบแพ็กเกจ — ค่าธรรมเนียมจ่ายครั้งเดียว (อาจมีการปรับตามประกาศราชการ)",
        "一次性会费对比（以官方最新公告为准）。",
        "Разовый взнос; уточняйте актуальные тарифы.",
      ),
    ),
    tableTier: t(lang, L("Tier", "แพ็กเกจ", "档位", "Тариф")),
    tableTerm: t(lang, L("Term", "ระยะเวลา", "期限", "Срок")),
    tableFee: t(lang, L("Fee (THB)", "ค่าธรรมเนียม (บาท)", "费用（泰铢）", "Взнос (бат)")),
    tableBestFor: t(lang, L("Best for", "เหมาะกับ", "适合", "Кому")),
    beforeTitle: t(lang, L("Know before you apply", "ข้อควรรู้ก่อนสมัคร", "申请前须知", "Перед подачей")),
    stepsTitle: t(lang, L("How to apply", "ขั้นตอนการสมัคร", "申请流程", "Как подать")),
    stepsSubtitle: t(
      lang,
      L("A simple three-step process — most of the work is document review and payment.",
        "กระบวนการ 3 ขั้นตอน — ส่วนใหญ่คือตรวจเอกสารและชำระเงิน",
        "三步流程——主要是审核与付款。",
        "Три шага: проверка и оплата.",
      ),
    ),
    perksTitle: t(lang, L("Also included", "สิทธิเพิ่มเติม", "其他权益", "Также включено")),
    pattayaTitle: t(lang, L("Pattaya residents", "ผู้พำนักในพัทยา", "芭提雅居民", "Жители Паттайи")),
    pattayaBody: t(
      lang,
      L(
        "Elite members living in Pattaya can use personal assistants to coordinate 90-day reporting with Immigration Pattaya (Jomtien) — without queuing in person.",
        "สมาชิกที่พำนักในพัทยาใช้ผู้ช่วยประสานรายงาน 90 วันกับ ตม. พัทยา (จอมเทียน) ได้ โดยไม่ต้องไปยืนคิวเอง",
        "在芭提雅居住的会员可通过礼宾协调至春堤移民局的90天报到，无需亲自排队。",
        "В Паттайе помощники оформляют 90-дневный отчёт в Immigration (Jomtien).",
      ),
    ),
    inviteOnly: t(lang, L("Invitation only", "เชิญเท่านั้น", "仅限邀请", "Только по приглашению")),
    livingHub: t(lang, L("Living hub →", "ศูนย์ไลฟ์สไตล์ →", "生活中心 →", "Раздел «Жизнь» →")),
    retirementVisa: t(lang, L("Retirement visa →", "วีซ่าเกษียณ →", "退休签证 →", "Пенсионная виза →")),
    workPermit: t(lang, L("Work permit →", "ใบอนุญาตทำงาน →", "工作许可 →", "Work permit →")),
  };
}

export function getEliteWhyBenefits(lang: LanguageCode) {
  return [
    {
      title: t(lang, L("Uninterrupted long stay", "อยู่ยาวไม่สะดุด", "长期不间断居留", "Долгое пребывание")),
      text: t(
        lang,
        L(
          "Multiple-entry privilege with legal stays up to 20 years depending on your package — ideal for frequent travelers and semi-retirees.",
          "เข้า-ออกได้ไม่จำกัดครั้ง พำนักยาวสูงสุดถึง 20 ปีตามแพ็กเกจ — เหมาะกับคนเดินทางบ่อยและเกษียณบางส่วน",
          "多次入境，依套餐合法居留最长20年——适合常旅客与半退休者。",
          "Многократный въезд, до 20 лет по пакету.",
        ),
      ),
    },
    {
      title: t(lang, L("Less paperwork stress", "เอกสารไม่จุกจิก", "手续更省心", "Меньше бюрократии")),
      text: t(
        lang,
        L(
          "No complex financial proof, no mandatory Thai bank deposit, and no health exam required for membership — unlike many standard long-stay routes.",
          "ไม่ต้องแสดงเอกสารทางการเงินซับซ้อน ไม่ต้องฝากเงินค้างบัญชีไทย และไม่ต้องตรวจสุขภาพ — ต่างจากวีซ่าพำนักทั่วไปหลายประเภท",
          "无需复杂财力证明、强制泰铢存款或体检——与许多常规长居路径不同。",
          "Без сложных финансовых доказательств и депозита.",
        ),
      ),
    },
    {
      title: t(lang, L("Airport fast-track", "ทางเดินพิเศษสนามบิน", "机场快速通道", "Fast-track")),
      text: t(
        lang,
        L(
          "Elite Personal Assistant greets you, escorts you through dedicated immigration lanes, and cuts long arrival queues at major Thai airports.",
          "Elite Personal Assistant ต้อนรับ พาเดินช่อง ตม. พิเศษ ลดเวลารอคิวที่สนามบินหลัก",
          "精英私人助理接机、陪同专用移民通道，缩短主要机场入境等候。",
          "Персональный ассистент и отдельные коридоры в аэропорту.",
        ),
      ),
    },
    {
      title: t(lang, L("90-day reporting handled", "รายงาน 90 วันให้", "代办90天报到", "90-дневный отчёт")),
      text: t(
        lang,
        L(
          "Representatives can file your 90-day reports with Immigration on your behalf — a major convenience for full-time Pattaya residents.",
          "ตัวแทนยื่นรายงาน 90 วันกับ ตม. แทนได้ — สะดวกมากสำหรับผู้พำนักในพัทยาเต็มเวลา",
          "可代办向移民局提交90天报到——对常住芭提雅者很实用。",
          "Представители подают 90-дневный отчёт за вас.",
        ),
      ),
    },
  ];
}

export function getEliteTiers(lang: LanguageCode) {
  return [
    {
      id: "bronze" as const,
      name: t(lang, L("Bronze", "Bronze", "Bronze", "Bronze")),
      term: t(lang, L("5 years", "5 ปี", "5 年", "5 лет")),
      fee: "650,000",
      bestFor: t(lang, L("First-time long-stay explorers", "เริ่มต้นพำนักระยะยาว", "初次长居尝试", "Начало long-stay")),
      highlight: false,
    },
    {
      id: "gold" as const,
      name: t(lang, L("Gold", "Gold", "Gold", "Gold")),
      term: t(lang, L("5 years", "5 ปี", "5 年", "5 лет")),
      fee: "900,000",
      bestFor: t(
        lang,
        L("Extra lounge points & airport perks", "คะแนนสะสมและเลานจ์เพิ่ม", "更多休息室积分", "Лаунжи и баллы"),
      ),
      highlight: false,
    },
    {
      id: "platinum" as const,
      name: t(lang, L("Platinum", "Platinum", "Platinum", "Platinum")),
      term: t(lang, L("10 years", "10 ปี", "10 年", "10 лет")),
      fee: "1,500,000",
      bestFor: t(
        lang,
        L("Couples or medium-term relocation", "คู่รักหรือย้ายถิ่นระยะกลาง", "夫妇或中期移居", "Пары, средний срок"),
      ),
      highlight: true,
    },
    {
      id: "diamond" as const,
      name: t(lang, L("Diamond", "Diamond", "Diamond", "Diamond")),
      term: t(lang, L("15 years", "15 ปี", "15 年", "15 лет")),
      fee: "2,500,000",
      bestFor: t(lang, L("Families putting down roots", "ครอบครัวปักหลัก", "安家家庭", "Семьи")),
      highlight: false,
    },
    {
      id: "reserve" as const,
      name: t(lang, L("Reserve", "Reserve", "Reserve", "Reserve")),
      term: t(lang, L("20+ years", "20 ปี+", "20 年+", "20+ лет")),
      fee: "5,000,000",
      bestFor: t(
        lang,
        L("Top tier — invitation only", "ระดับสูงสุด — เชิญเท่านั้น", "顶级——仅限邀请", "Только по приглашению"),
      ),
      highlight: false,
      inviteOnly: true,
    },
  ];
}

export function getEliteCaveats(lang: LanguageCode) {
  return [
    {
      title: t(lang, L("No work permit included", "ทำงานไม่ได้โดยอัตโนมัติ", "不含工作许可", "Без work permit")),
      text: t(
        lang,
        L(
          "Elite is a special long-stay privilege — employment or running a business still requires a separate work permit under Thai law.",
          "Elite เป็นสิทธิพำนักพิเศษ หากต้องการทำงานหรือทำธุรกิจต้องยื่น Work Permit แยกตามกฎหมาย",
          "精英签为特殊长居特权——在泰工作或经营须另行申请工作许可。",
          "Для работы нужен отдельный work permit.",
        ),
      ),
    },
    {
      title: t(lang, L("Non-refundable fees", "จ่ายแล้วไม่คืน", "费用不退", "Без возврата")),
      text: t(
        lang,
        L(
          "Membership fees are prepaid service charges — they are not refunded if you cancel or leave Thailand early.",
          "ค่าธรรมเนียมเป็นค่าบริการล่วงหน้าแบบจ่ายขาด — ไม่คืนเงินหากยกเลิกหรือออกจากไทยก่อนกำหนด",
          "会费为预付服务费——取消或提前离境通常不退款。",
          "Взнос не возвращается при досрочном выезде.",
        ),
      ),
    },
  ];
}

export function getEliteSteps(lang: LanguageCode) {
  return [
    {
      step: 1,
      title: t(lang, L("Apply online", "ยื่นออนไลน์", "在线申请", "Онлайн-заявка")),
      text: t(
        lang,
        L(
          "Submit passport copies and the application form — background review typically takes about 1–2 months.",
          "ส่งสำเนาพาสปอร์ตและใบสมัคร — ตรวจประวัติประมาณ 1–2 เดือน",
          "提交护照复印件与申请表——背景审核约1–2个月。",
          "Копия паспорта; проверка 1–2 месяца.",
        ),
      ),
    },
    {
      step: 2,
      title: t(lang, L("Pay membership fee", "ชำระค่าสมาชิก", "缴纳会费", "Оплата")),
      text: t(
        lang,
        L(
          "Once approved, transfer the full fee for your chosen tier to Thailand Privilege Card Co., Ltd.",
          "เมื่ออนุมัติ โอนค่าธรรมเนียมเต็มจำนวนตามแพ็กเกจที่เลือก",
          "获批后按所选档位全额转账至泰国特权卡公司。",
          "После одобрения — полная оплата пакета.",
        ),
      ),
    },
    {
      step: 3,
      title: t(lang, L("Receive your visa", "รับวีซ่า", "领取签证", "Получение визы")),
      text: t(
        lang,
        L(
          "Book an appointment to receive the visa sticker on arrival at a Thai airport, or at Immigration in Bangkok.",
          "นัดหมายแปะสติกเกอร์วีซ่าตอนเข้าไทยที่สนามบิน หรือที่ ตม. กรุงเทพฯ",
          "预约在入境泰国机场或曼谷移民局贴签。",
          "Стикер в аэропорту или в Immigration (Бангкок).",
        ),
      ),
    },
  ];
}

export function getElitePerks(lang: LanguageCode) {
  return [
    {
      title: t(lang, L("Airport VIP", "บริการสนามบิน", "机场 VIP", "VIP в аэропорту")),
      text: t(
        lang,
        L(
          "Fast-track immigration and partner lounge access at Suvarnabhumi, Don Mueang, Phuket, Chiang Mai, and U-Tapao (near Pattaya).",
          "Fast track ตม. และเลานจ์พันธมิตร สุวรรณภูมิ ดอนเมือง ภูเก็ต เชียงใหม่ และอู่ตะเภา (ใกล้พัทยา)",
          "素万那普、廊曼、普吉、清迈及乌塔保（近芭提雅）快速入境与合作休息室。",
          "Fast track и лаунжи, включая U-Tapao.",
        ),
      ),
    },
    {
      title: t(lang, L("Government liaison", "ประสานงานราชการ", "政务协调", "Госуслуги")),
      text: t(
        lang,
        L(
          "Dedicated team for visa matters, 90-day reporting, and driver’s license coordination.",
          "ทีมดูแลวีซ่า รายงาน 90 วัน และใบขับขี่",
          "专属团队协助签证、90天报到及驾照事宜。",
          "Виза, 90 дней, права.",
        ),
      ),
    },
    {
      title: t(lang, L("Lifestyle network", "เครือข่ายไลฟ์สไตล์", "生活网络", "Lifestyle")),
      text: t(
        lang,
        L(
          "Partner benefits at hotels, golf, spas, and selected hospitals — tier-dependent.",
          "สิทธิพันธมิตรโรงแรม กอล์ฟ สปา และโรงพยาบาลบางแห่ง — ขึ้นกับแพ็กเกจ",
          "合作酒店、高尔夫、水疗及医院优惠——视档位而定。",
          "Скидки партнёров по уровню пакета.",
        ),
      ),
    },
  ];
}
