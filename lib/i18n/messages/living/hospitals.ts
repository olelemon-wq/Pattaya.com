import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

export type HospitalId =
  | "bangkok-pattaya"
  | "pattaya-memorial"
  | "pattaya-international"
  | "pattaya-city"
  | "pattaya-patimakun";

export function getHospitalsPage(lang: LanguageCode) {
  return {
    introTitle: t(lang, L("Healthcare in Pattaya", "การแพทย์ในพัทยา", "芭提雅医疗", "Медицина в Паттайе")),
    introBody: t(
      lang,
      L(
        "When you are unwell abroad, knowing where to go saves time and stress. This guide covers emergency numbers, major hospitals, insurance, and lighter options for minor illness.",
        "เมื่อป่วยในต่างแดน การรู้ว่าต้องไปที่ไหนช่วยประหยัดเวลาและความกังวล คู่มือนี้ครอบคลุมเบอร์ฉุกเฉิน โรงพยาบาลหลัก ประกัน และทางเลือกสำหรับอาการเล็กน้อย",
        "在异国生病时，知道去哪能省时省心。本指南涵盖急救电话、主要医院、保险及轻症选择。",
        "Куда обратиться в Pattaya: экстренные номера, больницы, страховка.",
      ),
    ),
    emergencyTitle: t(lang, L("Emergency — call now", "ฉุกเฉิน — โทรทันที", "紧急电话", "Экстренно")),
    premiumTitle: t(
      lang,
      L("International / premium private", "เอกชนพรีเมียม / นานาชาติ", "国际/高端私立", "Частные премиум"),
    ),
    premiumSubtitle: t(
      lang,
      L("Best equipment, interpreters, and insurance direct billing — highest cost.",
        "อุปกรณ์ครบ ล่ามแปล รับประกันตรง — ราคาสูงสุด",
        "设备齐全、翻译、保险直付——费用最高。",
        "Лучшее оснащение; дороже всего.",
      ),
    ),
    publicTitle: t(lang, L("Government & public", "รัฐบาลและกึ่งรัฐ", "公立/政府", "Государственные")),
    publicSubtitle: t(
      lang,
      L("Lower cost; may involve longer waits and limited English.",
        "ราคาต่ำ อาจรอคิวนานและภาษาอังกฤษจำกัด",
        "费用较低；可能等候较久、英语有限。",
        "Дешевле; очереди и меньше английского.",
      ),
    ),
    insuranceTitle: t(lang, L("Insurance & payments", "ประกันและการจ่ายเงิน", "保险与付款", "Страховка и оплата")),
    bringTitle: t(lang, L("What to bring", "สิ่งที่ต้องพกไป", "就诊携带物品", "Что взять с собой")),
    bringSubtitle: t(
      lang,
      L("Prepare before you leave home or the hotel.",
        "เตรียมก่อนออกจากที่พัก",
        "出门或离开酒店前准备好。",
        "Подготовьтесь заранее.",
      ),
    ),
    alternativesTitle: t(
      lang,
      L("Clinics & pharmacies (non-emergency)", "คลินิกและร้านยา (ไม่ฉุกเฉิน)", "诊所与药房（非急诊）", "Клиники и аптеки"),
    ),
    alternativesSubtitle: t(
      lang,
      L("You do not always need a full hospital visit.",
        "ไม่จำเป็นต้องไปโรงพยาบาลใหญ่ทุกครั้ง",
        "并非每次都要去大医院。",
        "Не всегда нужна большая больница.",
      ),
    ),
    openMaps: t(lang, L("Open in Google Maps →", "เปิดใน Google Maps →", "在 Google 地图中打开 →", "Google Maps →")),
    mapTitle: t(lang, L("Hospital map", "แผนที่โรงพยาบาล", "医院地图", "Карта больниц")),
    mapSubtitle: t(
      lang,
      L(
        "Five main hospitals in Pattaya — use the map or tap a name below for directions.",
        "โรงพยาบาลหลัก 5 แห่งในพัทยา — ใช้แผนที่หรือแตะชื่อด้านล่างเพื่อนำทาง",
        "芭提雅五家主要医院——使用地图或点击下方名称导航。",
        "5 больниц — карта и кнопки навигации.",
      ),
    ),
    livingHub: t(lang, L("Living hub →", "ศูนย์ไลฟ์สไตล์ →", "生活中心 →", "Раздел «Жизнь» →")),
    insuranceGuide: t(lang, L("Health insurance →", "ประกันสุขภาพ →", "健康保险 →", "Страхование →")),
    emergencyGuide: t(lang, L("Emergency guide →", "คู่มือฉุกเฉิน →", "紧急指南 →", "Экстренная помощь →")),
  };
}

export function getHospitalEmergencyHotlines(lang: LanguageCode) {
  return [
    {
      label: t(lang, L("Medical emergency (ambulance)", "สายด่วนกู้ชีพ", "医疗急救", "Скорая")),
      number: "1669",
      note: t(lang, L("Free, 24 hours", "ฟรี 24 ชม.", "免费 24 小时", "Бесплатно, 24/7")),
      href: "tel:1669",
    },
    {
      label: t(lang, L("Tourist Police (Pattaya)", "ตำรวจท่องเที่ยว", "旅游警察", "Туристическая полиция")),
      number: "1155",
      note: t(lang, L("English available", "มีภาษาอังกฤษ", "有英语服务", "Английский")),
      href: "tel:1155",
    },
    {
      label: t(lang, L("Bangkok Hospital Pattaya ER", "กรุงเทพพัทยา ฉุกเฉิน", "曼谷医院芭提雅急诊", "Bangkok Hospital ER")),
      number: "1719",
      note: t(lang, L("Private hospital hotline", "สายด่วนโรงพยาบาลเอกชน", "私立医院热线", "Частная больница")),
      href: "tel:1719",
    },
  ];
}

export function getHospitalDirectory(lang: LanguageCode) {
  return [
    {
      id: "bangkok-pattaya" as const,
      tier: "premium" as const,
      name: t(lang, L("Bangkok Hospital Pattaya", "โรงพยาบาลกรุงเทพพัทยา", "曼谷医院芭提雅分院", "Bangkok Hospital Pattaya")),
      focus: t(
        lang,
        L(
          "Largest and best-equipped in the region — heart, brain, and trauma centers; interpreters for most nationalities. Highest cost; ideal with comprehensive health insurance.",
          "ใหญ่และพร้อมที่สุดในภูมิภาค — ศูนย์หัวใจ สมอง อุบัติเหตุ ล่ามแปลหลายสัญชาติ ราคาสูงสุด เหมาะกับประกันครบ",
          "本地区规模最大、设备最全——心脏、脑科、创伤中心；多语种翻译。费用最高，适合有全面医疗保险者。",
          "Крупнейшая частная больница; JCI; дорого.",
        ),
      ),
      services: t(
        lang,
        L("ER 24/7 · JCI standards · Direct insurance billing · Health check packages",
          "ER 24 ชม. · มาตรฐาน JCI · เคลมประกันตรง · แพ็กเกจตรวจสุขภาพ",
          "24小时急诊 · JCI · 保险直付 · 体检套餐",
          "ER 24/7 · JCI · direct billing",
        ),
      ),
      mapsQuery: "Bangkok+Hospital+Pattaya",
    },
    {
      id: "pattaya-memorial" as const,
      tier: "premium" as const,
      name: t(lang, L("Pattaya Memorial Hospital", "โรงพยาบาลพัทยาเมโมเรียล", "芭提雅纪念医院", "Pattaya Memorial")),
      focus: t(
        lang,
        L(
          "Central Pattaya location, easy access, friendly atmosphere — costs typically lower than Bangkok Hospital Pattaya.",
          "ใจกลางพัทยากลาง เข้าถึงง่าย บรรยากาศเป็นกันเอง ค่าใช้จ่ายมักต่ำกว่ากรุงเทพพัทยา",
          "位于芭提雅市中心，交通便利、氛围亲切——费用通常低于曼谷医院分院。",
          "Центр города; дешевле Bangkok Hospital.",
        ),
      ),
      services: t(
        lang,
        L("General medicine · Imaging · English-speaking staff",
          "อายุรกรรม · เอกซเรย์ · บุคลากรพูดอังกฤษ",
          "全科 · 影像 · 英语员工",
          "Терапия · снимки · английский",
        ),
      ),
      mapsQuery: "Pattaya+Memorial+Hospital",
    },
    {
      id: "pattaya-international" as const,
      tier: "premium" as const,
      name: t(
        lang,
        L(
          "Pattaya International Hospital",
          "โรงพยาบาลพัทยาอินเตอร์เนชั่นแนล",
          "芭提雅国际医院",
          "Pattaya International Hospital",
        ),
      ),
      focus: t(
        lang,
        L(
          "Private hospital in North Pattaya near the beach (Soi 4) — fast service and a strong focus on foreign tourists and expats.",
          "โรงพยาบาลเอกชนย่านพัทยาเหนือ ใกล้เลียบชายหาด (ซอย 4) — บริการรวดเร็ว เน้นนักท่องเที่ยวและชาวต่างชาติ",
          "位于北芭提雅海滩附近（4 巷）的私立医院——服务快捷，主要面向外国游客与外籍居民。",
          "Частная больница на севере Pattaya (Soi 4) — быстрое обслуживание для туристов.",
        ),
      ),
      services: t(
        lang,
        L(
          "ER 24/7 · Multilingual staff · Walk-in friendly · Near Pattaya Beach",
          "ER 24 ชม. · บุคลากรหลายภาษา · รับ walk-in · ใกล้หาดพัทยา",
          "24 小时急诊 · 多语种员工 · 可 walk-in · 近芭提雅海滩",
          "ER 24/7 · многоязычный персонал · у пляжа",
        ),
      ),
      mapsQuery: "Pattaya+International+Hospital+Soi+4",
    },
    {
      id: "pattaya-city" as const,
      tier: "public" as const,
      name: t(lang, L("Pattaya City Hospital", "โรงพยาบาลเมืองพัทยา", "芭提雅市立医院", "Pattaya City Hospital")),
      focus: t(
        lang,
        L(
          "Operated by Pattaya City — modern equipment, friendly pricing, full specialists. A solid choice for non-critical cases.",
          "บริหารโดยเมืองพัทยา — เครื่องมือทันสมัย ราคาเป็นมิตร แพทย์เฉพาะทางครบ เหมาะเคสไม่รุนแรง",
          "芭提雅市政府运营——设备较新、价格友好、专科齐全，适合非重症。",
          "Городская больница; умеренные цены.",
        ),
      ),
      services: t(
        lang,
        L("Emergency · Outpatient · Affordable fees",
          "ฉุกเฉิน · ผู้ป่วยนอก · ค่ารักษาไม่แพง",
          "急诊 · 门诊 · 费用适中",
          "Экстренная · амбулатория",
        ),
      ),
      mapsQuery: "Pattaya+City+Hospital",
    },
    {
      id: "pattaya-patimakun" as const,
      tier: "public" as const,
      name: t(
        lang,
        L(
          "Pattaya Patimakun Hospital",
          "โรงพยาบาลพัทยาปัทมคุณ",
          "芭提雅帕提玛坤医院",
          "Pattaya Patimakun Hospital",
        ),
      ),
      focus: t(
        lang,
        L(
          "Former Banglamung Hospital — rebranded Nov 2024. District public hospital in Na Kluea (Banglamung); affordable care, may have longer waits and limited English.",
          "เดิมชื่อโรงพยาบาลบางละมุง — เปลี่ยนชื่อ พ.ย. 2567 รพ.รัฐย่านนาเกลือ ราคาเป็นมิตร อาจรอคิวและภาษาอังกฤษจำกัด",
          "原邦拉蒙医院，2024年11月更名。公立区级医院（那库拉），费用友好，等候可能较长、英语有限。",
          "Бывш. Banglamung; госпиталь в Na Kluea; умеренные цены.",
        ),
      ),
      services: t(
        lang,
        L("Emergency · Outpatient · Social security & universal coverage",
          "ฉุกเฉิน · ผู้ป่วยนอก · ประกันสังคมและสิทธิหลักประกัน",
          "急诊 · 门诊 · 社保与全民医保",
          "Экстренная · амбулатория · соцстрах",
        ),
      ),
      mapsQuery: "Pattaya+Patimakun+Hospital+669+Moo+5+Na+Kluea",
    },
  ];
}

export function getHospitalInsuranceTips(lang: LanguageCode) {
  return [
    {
      title: t(lang, L("International insurance", "ประกันต่างประเทศ", "国际保险", "Международная страховка")),
      text: t(
        lang,
        L(
          'On arrival, contact the hospital’s international desk or "Utilization Review" to check direct billing (GUARANTEE OF PAYMENT) vs pay-first-and-claim.',
          "ถึงโรงพยาบาลแล้วติดต่อแผนกต่างประเทศเพื่อตรวจว่าประกันรองรับจ่ายตรงหรือต้องสำรองจ่ายแล้วเคลม",
          "到达后联系医院国际部，确认直付还是先垫付再理赔。",
          "Уточните direct billing при поступлении.",
        ),
      ),
    },
    {
      title: t(lang, L("Dual pricing at public hospitals", "ราคาสองระดับ (รพ.รัฐ)", "公立医院双轨价", "Двойные тарифы")),
      text: t(
        lang,
        L(
          "Some government hospitals charge non-Thai residents slightly different rates under Ministry of Public Health rules — ask for a cost estimate before treatment.",
          "รพ.รัฐบางแห่งเรียกเก็บชาวต่างชาติตามระเบียบกระทรวงสาธารณสุข — ขอประมาณค่าใช้จ่ายก่อนรักษา",
          "部分公立医院对外籍居民按卫生部规定执行不同费率——治疗前先问预估费用。",
          "В госбольницах тарифы для иностранцев могут отличаться.",
        ),
      ),
    },
  ];
}

export function getHospitalBringList(lang: LanguageCode): string[] {
  return [
    t(lang, L("Original passport (required for registration)", "พาสปอร์ตตัวจริง (ลงทะเบียน)", "护照原件（登记必需）", "Паспорт")),
    t(
      lang,
      L("Insurance card or policy document (PDF on phone is fine)",
        "บัตรประกันหรือกรมธรรม์ (PDF ในมือถือได้)",
        "保险卡或保单（手机 PDF 即可）",
        "Страховой полис",
      ),
    ),
    t(
      lang,
      L("List of current medications and allergy history",
        "รายการยาที่ใช้ประจำและประวัติแพ้ยา",
        "常用药清单与过敏史",
        "Список лекарств и аллергии",
      ),
    ),
    t(
      lang,
      L("Thai ID card (if applicable) — married to Thai national or social security eligibility",
        "บัตรประชาชนไทย (ถ้ามี) — แต่งงานกับคนไทยหรือมีประกันสังคม",
        "泰国身份证（如适用）——与泰国人结婚或有社保资格",
        "Тайское удостоверение при наличии",
      ),
    ),
  ];
}

export function getHospitalAlternatives(lang: LanguageCode) {
  return [
    {
      title: t(lang, L("Local clinics", "คลินิกในพัทยา", "本地诊所", "Клиники")),
      text: t(
        lang,
        L(
          "For colds, mild diarrhea, or small wounds — walk-in clinics are faster and far cheaper than major hospitals.",
          "ไข้หวัด ท้องเสียเล็กน้อย แผลเล็ก — คลินิกเร็วและถูกกว่าโรงพยาบาลใหญ่มาก",
          "感冒、轻度腹泻、小伤口——诊所更快更便宜。",
          "Простуда, лёгкая диарея — в клинику.",
        ),
      ),
    },
    {
      title: t(lang, L("Pharmacies", "ร้านขายยา", "药房", "Аптеки")),
      text: t(
        lang,
        L(
          "Many Pattaya pharmacies have English-speaking pharmacists. Common OTC medicines often do not need a Western-style prescription.",
          "ร้านยาพัทยาหลายแห่งมีเภสัชกรพูดอังกฤษ ยาสามัญมักไม่ต้องใบสั่งแบบตะวันตก",
          "芭提雅许多药房有英语药师；常见非处方药往往无需西式处方。",
          "Аптеки с английским; многие OTC без рецепта.",
        ),
      ),
    },
  ];
}
