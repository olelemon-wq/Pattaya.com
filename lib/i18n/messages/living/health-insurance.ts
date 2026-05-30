import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

export function getHealthInsurancePage(lang: LanguageCode) {
  return {
    introTitle: t(
      lang,
      L(
        "Health insurance in Pattaya",
        "ประกันสุขภาพในพัทยา",
        "芭提雅健康保险",
        "Медстрахование в Паттайе",
      ),
    ),
    introBody: t(
      lang,
      L(
        "Whether you hold a retirement visa, work remotely, or split time between countries, the right policy protects you from six-figure hospital bills — and keeps Immigration extensions straightforward.",
        "ไม่ว่าวีซ่าเกษียณ ทำงานระยะไกล หรืออยู่สลับประเทศ แผนที่เหมาะช่วยกันค่ารพ.หกหลัก — และทำให้ต่ออายุตม.ง่ายขึ้น",
        "无论退休签、远程工作还是两地居住，合适的保险能避免高额医疗费，并简化移民局续签。",
        "Правильный полис защищает от счетов в частных клиниках и упрощает продление визы.",
      ),
    ),
    plansTitle: t(lang, L("Types of cover", "ประเภทความคุ้มครอง", "保障类型", "Типы покрытия")),
    plansSubtitle: t(
      lang,
      L("Match the product to how long you stay and what Immigration expects.",
        "เลือกให้ตรงระยะพำนักและข้อกำหนดตม.",
        "按居留时长与移民局要求选择。",
        "Соответствие сроку пребывания и Immigration.",
      ),
    ),
    billingTitle: t(
      lang,
      L("Direct billing vs pay & claim",
        "จ่ายตรง vs สำรองจ่ายแล้วเคลม",
        "直付 vs 先付后理赔",
        "Direct billing vs возмещение",
      ),
    ),
    billingSubtitle: t(
      lang,
      L("How Pattaya private hospitals handle international policies.",
        "โรงพยาบาลเอกชนในพัทยาทำงานกับประกันต่างชาติอย่างไร",
        "芭提雅私立医院如何处理国际保险。",
        "Как частные клиники работают со страховкой.",
      ),
    ),
    directTitle: t(lang, L("Direct billing (recommended)", "เคลมตรง (แนะนำ)", "直付（推荐）", "Прямой биллинг")),
    directBody: t(
      lang,
      L(
        "The hospital contacts your insurer’s “Utilization Review” desk for a Guarantee of Payment (GOP). You may pay only the deductible or co-pay — common at Bangkok Hospital Pattaya, Pattaya Memorial, and Pattaya International.",
        "โรงพยาบาลติดต่อแผนก Utilization Review ของบริษัทประกันเพื่อขอ GOP คุณอาจจ่ายแค่ส่วนเกินหรือ co-pay — พบได้ที่กรุงเทพพัทยา พัทยาเมโมเรียล พัทยาอินเตอร์",
        "医院联系保险公司核保部门出具付款担保（GOP），您可能只需付免赔额——曼谷医院芭提雅、纪念医院、国际医院较常见。",
        "Клиника запрашивает GOP у страховщика — вы платите только франшизу.",
      ),
    ),
    payFirstTitle: t(lang, L("Pay first, claim later", "สำรองจ่ายแล้วเคลม", "先付后理赔", "Сначала оплата")),
    payFirstBody: t(
      lang,
      L(
        "You settle the full bill, keep receipts and medical reports, then submit to the insurer. Cash flow can be heavy for surgery — confirm limits and turnaround time before elective treatment.",
        "จ่ายเต็มก่อน เก็บใบเสร็จและรายงานแพทย์ แล้วยื่นเคลม กระแสเงินหนักสำหรับผ่าตัด — ตรวจวงเงินและระยะเวลาก่อนทำหัตถการ",
        "先全额支付，保留收据和病历后向保险公司理赔。手术垫付压力大——择期治疗前先确认额度与周期。",
        "Полная оплата, затем возмещение — тяжело при крупных операциях.",
      ),
    ),
    pattayaTitle: t(
      lang,
      L("Pattaya hospitals & insurance",
        "โรงพยาบาลพัทยาและประกัน",
        "芭提雅医院与保险",
        "Клиники Паттайи",
      ),
    ),
    pattayaSubtitle: t(
      lang,
      L("Private hospitals with international desks — public hospitals use different billing.",
        "รพ.เอกชนมีแผนกต่างชาติ — รพ.รัฐคิดคนละแบบ",
        "私立医院有国际部——公立医院计费不同。",
        "Частные — international desk; гос — иначе.",
      ),
    ),
    visaTitle: t(
      lang,
      L("Visa & extension requirements",
        "ข้อกำหนดวีซ่าและต่ออายุ",
        "签证与续签要求",
        "Требования визы",
      ),
    ),
    visaSubtitle: t(
      lang,
      L(
        "Retirement (O-A) and some long-stay routes require insurance that Immigration recognises — not standard travel policies.",
        "วีซ่าเกษียณ (O-A) และบางเส้นทางระยะยาวต้องใช้ประกันที่ตม.รับรอง — ไม่ใช่ประกันเดินทางทั่วไป",
        "退休签（O-A）等长期居留需移民局认可的保险——普通旅游险通常不符合。",
        "Retirement O-A: не travel insurance.",
      ),
    ),
    visaNote: t(
      lang,
      L(
        "Typical O-A requirements include inpatient coverage in Thailand (often minimum ฿3,000,000 per policy year), valid for your full stay, issued by an approved insurer, with certificate in English or certified Thai. Rules change — verify with Chonburi Immigration before purchase.",
        "โดยทั่วไป O-A ต้องมีคุ้มครองผู้ป่วยใน (มักไม่ต่ำกว่า 3 ล้านบาท/ปี) คุ้มครองตละเอียดพำนัก จากบริษัทที่อนุมัติ ใบรับรองภาษาอังกฤษหรือไทยรับรอง — ตรวจกับตม.ชลบุรีก่อนซื้อ",
        "O-A 通常要求泰国境内住院保障（保单年度常不低于300万泰铢）、覆盖整个停留期、认可保险公司出具、英文或认证泰文证明——购买前向春武里移民局核实。",
        "O-A: часто от 3 млн THB стационар, на весь срок — уточните в Immigration.",
      ),
    ),
    compareTitle: t(
      lang,
      L("What to compare before you buy",
        "สิ่งที่ต้องเปรียบเทียบก่อนซื้อ",
        "购买前对比要点",
        "Что сравнить",
      ),
    ),
    compareSubtitle: t(
      lang,
      L("Beyond monthly premium — read the exclusions.",
        "ไม่ใช่แค่เบี้ยรายเดือน — อ่านข้อยกเว้น",
        "不止月保费——看清除外责任。",
        "Не только премия — исключения.",
      ),
    ),
    claimsTitle: t(
      lang,
      L("At the hospital — quick steps",
        "ที่โรงพยาบาล — ขั้นตอนสั้นๆ",
        "在医院——快速步骤",
        "В клинике — шаги",
      ),
    ),
    mistakesTitle: t(
      lang,
      L("Common mistakes",
        "ข้อผิดพลาดที่พบบ่อย",
        "常见误区",
        "Ошибки",
      ),
    ),
    checklistTitle: t(
      lang,
      L("Documents for Immigration",
        "เอกสารสำหรับตม.",
        "递交移民局材料",
        "Документы для Immigration",
      ),
    ),
    hospitalsLink: t(lang, L("Full hospital guide →", "คู่มือโรงพยาบาล →", "医院指南 →", "Клиники →")),
    retirementLink: t(
      lang,
      L("Retirement visa guide →",
        "คู่มือวีซ่าเกษียณ →",
        "退休签证指南 →",
        "Retirement visa →",
      ),
    ),
    livingHub: t(lang, L("Living hub →", "ศูนย์ไลฟ์สไตล์ →", "生活中心 →", "Раздел «Жизнь» →")),
    emergencyLink: t(
      lang,
      L("Emergency guide →", "คู่มือฉุกเฉิน →", "紧急指南 →", "Экстренная помощь →"),
    ),
  };
}

export function getHealthInsurancePlans(lang: LanguageCode) {
  return [
    {
      id: "international",
      title: t(lang, L("International expat plans", "ประกันต่างชาติสากล", "国际外籍保险", "Международные")),
      body: t(
        lang,
        L(
          "Global insurers (April International, Luma, Cigna-style IPMI) with Thailand network, evacuation, and direct billing at premium Pattaya hospitals.",
          "บริษัทสากล (April, Luma, Cigna-style) เครือข่ายไทย ส่งตัวกลับ และเคลมตรงที่รพ.เอกชนพัทยา",
          "国际保险公司（April、Luma 等）含泰国网络、转运及芭提雅高端医院直付。",
          "April, Luma — IPMI, эвакуация, direct billing.",
        ),
      ),
      tag: t(lang, L("Best for retirees & families", "เหมาะเกษียณและครอบครัว", "适合退休与家庭", "Пенсионеры")),
    },
    {
      id: "local",
      title: t(lang, L("Thai local insurers", "ประกันในประเทศ", "泰国本地保险", "Тайские")),
      body: t(
        lang,
        L(
          "Lower premiums from Thai companies; some policies are pre-approved for O-A extensions. Check English certificate and coverage wording with Immigration.",
          "เบี้ยต่ำจากบริษัทไทย บางแผนอนุมัติสำหรับต่อ O-A ตรวจใบรับรองภาษาอังกฤษและข้อความกับตม.",
          "泰国公司保费较低，部分方案已获O-A续签认可——确认英文证明与移民局措辞。",
          "Дешевле; часть одобрена для O-A.",
        ),
      ),
      tag: t(lang, L("Visa-friendly options", "เหมาะต่อวีซ่า", "适合签证", "Для визы")),
    },
    {
      id: "hospital",
      title: t(lang, L("Hospital check-up packages", "แพ็กเกจตรวจสุขภาพ รพ.", "医院体检套餐", "Check-up в клинике")),
      body: t(
        lang,
        L(
          "Bundled blood work and imaging for visa medical certificates — not a substitute for year-round inpatient/outpatient insurance.",
          "ตรวจเลือดและภาพรวมสำหรับใบตรวจวีซ่า — ไม่ทดแทนประกันผู้ป่วยใน/นอกตลอดปี",
          "体检套餐用于签证健康证明——不能替代全年住院/门诊保险。",
          "Check-up ≠ полноценная страховка.",
        ),
      ),
      tag: t(lang, L("Visa medical only", "เฉพาะตรวจวีซ่า", "仅签证体检", "Только медосмотр")),
    },
    {
      id: "travel",
      title: t(lang, L("Travel insurance", "ประกันเดินทาง", "旅游保险", "Travel")),
      body: t(
        lang,
        L(
          "Fine for holidays under 90 days — usually rejected for retirement extensions, Elite long-stay, or annual Immigration reporting.",
          "เหมาะทริปไม่เกิน 90 วัน — มักไม่ผ่านต่อเกษียณ Elite หรือรายงานตัวประจำปี",
          "适合90天内度假——通常不能用于退休续签、精英签或年度报到。",
          "Для отпуска, не для retirement.",
        ),
      ),
      tag: t(lang, L("Short trips only", "ทริปสั้นเท่านั้น", "仅短期", "Короткие поездки")),
    },
  ];
}

export function getHealthInsurancePattayaHospitals(lang: LanguageCode) {
  return [
    {
      name: t(lang, L("Bangkok Hospital Pattaya", "โรงพยาบาลกรุงเทพพัทยา", "曼谷医院芭提雅", "Bangkok Hospital")),
      note: t(
        lang,
        L("Largest private network — strong direct billing, JCI, international desk",
          "เอกชนใหญ่ — เคลมตรงดี JCI แผนกต่างชาติ",
          "最大私立网络——直付强、JCI、国际部",
          "Сильный direct billing",
        ),
      ),
    },
    {
      name: t(lang, L("Pattaya Memorial Hospital", "โรงพยาบาลพัทยาเมโมเรียล", "芭提雅纪念医院", "Pattaya Memorial")),
      note: t(
        lang,
        L("Central location — many international policies accepted",
          "ใจกลางพัทยา — รับประกันต่างชาติหลายแผน",
          "市中心——接受多种国际保险",
          "Много международных полисов",
        ),
      ),
    },
    {
      name: t(
        lang,
        L("Pattaya International Hospital", "โรงพยาบาลพัทยาอินเตอร์", "芭提雅国际医院", "Pattaya International"),
      ),
      note: t(
        lang,
        L("North Pattaya — tourist-friendly, walk-in and ER",
          "พัทยาเหนือ — นักท่องเที่ยว walk-in และ ER",
          "北芭提雅——对外国游客友好",
          "Север Паттайи",
        ),
      ),
    },
    {
      name: t(lang, L("Pattaya City Hospital (public)", "โรงพยาบาลเมืองพัทยา (รัฐ)", "市立医院（公立）", "City Hospital")),
      note: t(
        lang,
        L("Lower cost — pay out of pocket or limited insurance; dual pricing may apply",
          "ราคาต่ำ — จ่ายเองหรือประกันจำกัด อาจมีราคาสองระดับ",
          "费用较低——自费或保险有限，可能有双轨价",
          "Дешевле; ограниченная страховка",
        ),
      ),
    },
  ];
}

export function getHealthInsuranceCompareItems(lang: LanguageCode) {
  return [
    t(
      lang,
      L("Inpatient (IPD) and outpatient (OPD) limits per year",
        "วงเงินผู้ป่วยใน (IPD) และนอก (OPD) ต่อปี",
        "年度住院（IPD）与门诊（OPD）额度",
        "Лимиты IPD/OPD",
      ),
    ),
    t(
      lang,
      L("Geographic area — Thailand-only vs Asia vs worldwide",
        "พื้นที่คุ้มครอง — เฉพาะไทย เอเชีย หรือทั่วโลก",
        "保障区域——泰国/亚洲/全球",
        "Территория покрытия",
      ),
    ),
    t(
      lang,
      L("Pre-existing conditions — waiting periods and exclusions",
        "โรคประจำตัว — ระยะรอและข้อยกเว้น",
        "既往症——等待期与除外",
        "Предсуществующие болезни",
      ),
    ),
    t(
      lang,
      L("Dental, vision, maternity — often optional riders",
        "ทันตกรรม สายตา คลอด — มักเป็นสัญญาเพิ่ม",
        "牙科、视力、生育——常为附加险",
        "Стоматология, зрение",
      ),
    ),
    t(
      lang,
      L("Deductible, co-pay, and room grade (standard vs VIP)",
        "ค่าเสียหายส่วนแรก co-pay และระดับห้อง",
        "免赔额、共付与病房等级",
        "Франшиза и класс палаты",
      ),
    ),
    t(
      lang,
      L("Renewal age limits and premium increases after 60–70",
        "อายุต่ออายุกรมธรรม์และเบี้ยหลัง 60–70",
        "续保年龄限制及60–70岁后保费上涨",
        "Возраст продления",
      ),
    ),
  ];
}

export function getHealthInsuranceClaimSteps(lang: LanguageCode) {
  return [
    t(
      lang,
      L("Bring passport, insurance card, and policy number (PDF on phone is fine)",
        "พาสปอร์ต บัตรประกัน และเลขกรมธรรม์ (PDF ในมือถือได้)",
        "携带护照、保险卡与保单号（手机PDF即可）",
        "Паспорт и полис",
      ),
    ),
    t(
      lang,
      L("Register at reception — ask for the international / insurance desk",
        "ลงทะเบียน — ขอแผนกต่างชาติ/ประกัน",
        "登记时要求国际/保险柜台",
        "International desk",
      ),
    ),
    t(
      lang,
      L("For planned care: pre-authorisation 48–72 hours ahead when possible",
        "นัดหมาย: ขอ pre-auth ล่วงหน้า 48–72 ชม. ถ้าเป็นไปได้",
        "择期治疗：尽量提前48–72小时预授权",
        "Pre-auth заранее",
      ),
    ),
    t(
      lang,
      L("ER: stabilise first — insurance desk follows once you are admitted",
        "ฉุกเฉิน: รักษาก่อน — แผนกประกันตามหลังเมื่อ admit",
        "急诊：先救治——入院后再办保险",
        "Сначала ER, потом страховка",
      ),
    ),
  ];
}

export function getHealthInsuranceMistakes(lang: LanguageCode) {
  return [
    t(
      lang,
      L("Using travel insurance for a retirement extension",
        "ใช้ประกันเดินทางต่อเกษียณ",
        "用旅游险办退休续签",
        "Travel insurance для retirement",
      ),
    ),
    t(
      lang,
      L("Assuming all hospitals accept your plan without calling ahead",
        "คิดว่าทุก รพ.รับโดยไม่โทรถามก่อน",
        "以为所有医院都接受而不事先确认",
        "Не проверили сеть клиник",
      ),
    ),
    t(
      lang,
      L("Hiding pre-existing conditions on the application",
        "ปิดบังโรคประจำตัวตอนสมัคร",
        "投保时隐瞒既往症",
        "Скрыли болезни",
      ),
    ),
    t(
      lang,
      L("Letting coverage lapse between annual Immigration reports",
        "ให้ความคุ้มครองขาดช่วงก่อนรายงานตัวประจำปี",
        "年度报到前保险断保",
        "Перерыв в покрытии",
      ),
    ),
  ];
}

export function getHealthInsuranceVisaChecklist(lang: LanguageCode): string[] {
  return [
    t(
      lang,
      L("Policy certificate in English or certified Thai translation",
        "ใบรับรองภาษาอังกฤษหรือแปลไทยรับรอง",
        "英文保单证明或认证泰文翻译",
        "Сертификат EN/TH",
      ),
    ),
    t(
      lang,
      L("Coverage valid through your proposed extension date",
        "คุ้มครองถึงวันต่ออายุที่ขอ",
        "保障至拟续签日期",
        "До даты продления",
      ),
    ),
    t(
      lang,
      L("Insurer letterhead, contact number, and policy number",
        "หัวกระดาษ เบอร์ติดต่อ และเลขกรมธรรม์",
        "保险公司抬头、电话与保单号",
        "Реквизиты страховщика",
      ),
    ),
    t(
      lang,
      L("Inpatient benefit meeting current Immigration minimums (verify locally)",
        "สิทธิผู้ป่วยในตามเกณฑ์ตม.ปัจจุบัน (ตรวจในพื้นที่)",
        "住院保障符合当前移民局最低要求（当地核实）",
        "Стационар по circular",
      ),
    ),
    t(
      lang,
      L("Receipt of premium payment if requested by the officer",
        "ใบเสร็จชำระเบี้ย หากเจ้าหน้าที่ขอ",
        "如官员要求则提供保费缴纳收据",
        "Квитанция об оплате",
      ),
    ),
  ];
}
