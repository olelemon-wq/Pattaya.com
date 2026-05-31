import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import type { LocalizedText } from "@/lib/i18n/text";
import { livingImages } from "@/lib/design/living-images";
import type { LucideIcon } from "lucide-react";
import {
  Bus,
  CalendarDays,
  Car,
  CreditCard,
  Crown,
  Footprints,
  Hand,
  Handshake,
  Home,
  Hospital,
  IdCard,
  Key,
  Landmark,
  Lock,
  Shield,
  Shirt,
  Star,
  Users,
  VolumeX,
} from "lucide-react";

export const livingHero = {
  category: L(
    "The Complete Expat Hub",
    "ศูนย์รวมชีวิตชาวต่างชาติ",
    "外籍人士完整指南",
    "Полный гид для экспатов",
  ),
  featured: L("Featured", "แนะนำ", "精选", "Рекомендуем"),
  title: L(
    "Living the Dream in Pattaya",
    "ใช้ชีวิตในฝันที่พัทยา",
    "在芭提雅圆梦生活",
    "Жизнь мечты в Паттайе",
  ),
  excerpt: L(
    "The ultimate residency, business, and lifestyle resource for global citizens calling the City of Fun home.",
    "แหล่งข้อมูลวีซ่า ธุรกิจ และไลฟ์สไตล์สำหรับชาวโลกที่เลือกพัทยาเป็นบ้าน",
    "签证、商务与生活方式的一站式资源，献给选择芭提雅为全球公民的你。",
    "Визы, бизнес и lifestyle для тех, кто называет Паттайю домом.",
  ),
  cta: L(
    "Explore Living Guides",
    "สำรวจคู่มือไลฟ์สไตล์",
    "浏览生活指南",
    "Смотреть гайды",
  ),
  imageAlt: L(
    "Pattaya smart city skyline and coastline at twilight",
    "เส้นขอบฟ้าพัทยาและชายฝั่งยามพลบค่ำ",
    "暮光时分的芭提雅智慧城市天际线与海岸",
    "Панорама Паттайи на закате",
  ),
};

const hub = {
  expatTitle: L(
    "Expat Essentials",
    "สิ่งจำเป็นสำหรับชาวต่างชาติ",
    "外籍必备",
    "Необходимое для экспатов",
  ),
  expatDesc: L(
    "High-priority residency and security guides for seamless relocation.",
    "คู่มือวีซ่าและความปลอดภัยสำหรับการย้ายถิ่นฐาน",
    "优先居留与安全指南，助您顺利安家。",
    "Визы и безопасность для комфортного переезда.",
  ),
  visaBadge: L("Visa & Immigration", "วีซ่า & ตรวจคนเข้าเมือง", "签证与移民", "Виза и иммиграция"),
  retirementTitle: L(
    "Retirement Visa (Non-O / OA) Guide",
    "คู่มือวีซ่าเกษียณ (Non-O / OA)",
    "退休签证指南 (Non-O / OA)",
    "Пенсионная виза (Non-O / OA)",
  ),
  retirementExcerpt: L(
    "Documentation, financial seasoning, and renewal strategies for expats over 50.",
    "เอกสาร เงินฝาก และการต่ออายุสำหรับผู้อายุ 50+",
    "文件、资金沉淀与续签策略（50 岁以上）。",
    "Документы, депозиты и продление для 50+.",
  ),
  retirementCta: L("Get Visa Quote", "ขอใบเสนอวีซ่า", "获取签证报价", "Запросить визу"),
  realEstateBadge: L("Real Estate", "อสังหาริมทรัพย์", "房地产", "Недвижимость"),
  condoTitle: L(
    "Mastering Pattaya's Condo Market",
    "เจาะตลาดคอนโดพัทยา",
    "掌握芭提雅公寓市场",
    "Рынок кондо Паттайи",
  ),
  condoExcerpt: L(
    "Freehold vs leasehold and the 49% foreign ownership quota — verified legal framework.",
    "กรรมสิทธิ์ vs สิทธิเช่า และโควตาต่างชาติ 49%",
    "永久产权与租赁权及 49% 外资配额。",
    "Freehold, leasehold и квота 49% для иностранцев.",
  ),
  condoCta: L("View Property Ads →", "ดูประกาศอสังหา →", "查看房源 →", "Объявления →"),
  scamTitle: L("Urgent: Scam Alerts", "ด่วน: แจ้งเตือนมิจฉาชีพ", "紧急：诈骗预警", "Срочно: мошенничество"),
  safetyEssentials: L("Safety Essentials", "ความปลอดภัยพื้นฐาน", "安全要点", "Безопасность"),
  safety1: L(
    "Use only licensed real estate agencies",
    "ใช้เอเจนต์อสังหาที่ได้รับอนุญาตเท่านั้น",
    "仅通过持证房产中介",
    "Только лицензированные агентства",
  ),
  safety2: L(
    "Verify credentials at the Immigration Office",
    "ตรวจสอบเอกสารที่ตรวจคนเข้าเมือง",
    "在移民局核实资质",
    "Проверяйте документы в Immigration",
  ),
  emergencyTitle: L("Emergency Resources", "แหล่งช่วยเหลือฉุกเฉิน", "紧急资源", "Экстренная помощь"),
  emergencyBody: L(
    "Access immediate help and local protocols.",
    "ติดต่อความช่วยเหลือและขั้นตอนในพื้นที่",
    "获取即时帮助与当地流程。",
    "Срочная помощь и местные протоколы.",
  ),
  downloadSafety: L(
    "Download Safety Guide PDF",
    "ดาวน์โหลดคู่มือความปลอดภัย",
    "下载安全指南 PDF",
    "Скачать PDF по безопасности",
  ),
  retirementImageAlt: L(
    "Retirement lifestyle in Pattaya",
    "ไลฟ์สไตล์เกษียณในพัทยา",
    "芭提雅退休生活",
    "Пенсионная жизнь в Паттайе",
  ),
  realEstateImageAlt: L(
    "Luxury real estate in Pattaya",
    "อสังหาหรูในพัทยา",
    "芭提雅豪华房产",
    "Элитная недвижимость Паттайи",
  ),
  scamAlertsImageAlt: L(
    "Pattaya tourist police kiosk",
    "บูธ Tourist Police พัทยา",
    "芭提雅旅游警察岗亭",
    "Tourist Police в Паттайе",
  ),
  cultureImageAlt: L(
    "Thai culture and etiquette",
    "วัฒนธรรมและมารยาทไทย",
    "泰国文化与礼仪",
    "Тайская культура и этикет",
  ),
  cultureEyebrow: L("Guide for Expats", "คู่มือชาวต่างชาติ", "外籍指南", "Гид для экспатов"),
  cultureTitle: L("The Thai Way", "วิถีไทย", "泰国之道", "Тайский образ жизни"),
  cultureIntro: L(
    "Social harmony in Pattaya is rooted in traditional Thai values. Master these nuances for a respectful residency.",
    "ความกลมกลืนในสังคมไทยเริ่มจากค่านิยมดั้งเดิม — เรียนรู้เพื่อการอยู่ร่วมกันอย่างเคารพ",
    "芭提雅的社会和谐植根于泰国传统价值观。",
    "Гармония в Паттайе основана на традициях.",
  ),
  culturalDos: L("Cultural Dos", "สิ่งที่ควรทำ", "应当这样做", "Рекомендуется"),
  culturalDonts: L("Cultural Don'ts", "สิ่งที่ไม่ควรทำ", "应当避免", "Не рекомендуется"),
  cultureFooter: L(
    "Learn more about local customs and integration.",
    "เรียนรู้มารยาทและการปรับตัวในท้องถิ่น",
    "了解更多当地习俗与融入方式。",
    "Узнать о местных обычаях.",
  ),
  protocolGuide: L(
    "Detailed Protocol Guide →",
    "คู่มือมารยาทฉบับเต็ม →",
    "详细礼仪指南 →",
    "Полный этикет →",
  ),
  commercialTitle: L(
    "Commercial Potential",
    "ศักยภาพเชิงพาณิชย์",
    "商业服务",
    "Коммерческие услуги",
  ),
  commercialDesc: L(
    "Professional directory for daily living and administrative logistics.",
    "ไดเรกทอรีบริการประจำวันและเอกสารราชการ",
    "日常生活与行政事务专业服务目录。",
    "Справочник услуг и административной поддержки.",
  ),
  steadyTitle: L(
    "Steady Traffic & Informational",
    "ข้อมูลประจำ & ไกด์ยอดนิยม",
    "常驻信息与指南",
    "Популярные информационные гайды",
  ),
  steadyDesc: L(
    "Essential guides for long-term success and daily lifestyle integration.",
    "คู่มือสำหรับความสำเร็จระยะยาวในพัทยา",
    "长期安居与日常融入必备指南。",
    "Гайды для долгосрочной жизни в Паттайе.",
  ),
  costTitle: L(
    "Pattaya Cost of Living 2024",
    "ค่าครองชีพพัทยา 2024",
    "芭提雅生活成本 2024",
    "Стоимость жизни в Паттайе 2024",
  ),
  costDesc: L(
    "Monthly expenses for a premium Urban Hybrid lifestyle in Pattaya's top districts.",
    "ค่าใช้จ่ายรายเดือนสไตล์ Urban Hybrid ในย่านพรีเมียม",
    "芭提雅高端城区 Urban Hybrid 月度开支。",
    "Расходы премиум Urban Hybrid в лучших районах.",
  ),
  financeBadge: L("Finance Analytics", "วิเคราะห์การเงิน", "财务分析", "Финансы"),
  avgBudget: L("Avg. Monthly Budget", "งบเฉลี่ยต่อเดือน", "月均预算", "Средний бюджет/мес"),
  budgetNote: L(
    "Premium high-rise residence with modern amenities.",
    "คอนโดหรูพร้อมสิ่งอำนวยความสะดวกครบ",
    "高端公寓与现代配套。",
    "Премиум-кондо с удобствами.",
  ),
  fullAnalysis: L("View Full Analysis →", "ดูการวิเคราะห์เต็ม →", "查看完整分析 →", "Полный анализ →"),
  mobilityTitle: L("Elite Mobility", "การเดินทางระดับพรีเมียม", "精英出行", "Премиум-транспорт"),
  mobilityDesc: L(
    "Verified ride-hailing for transparent, safe transport across the city.",
    "แอปเรียกรถที่ตรวจสอบแล้ว ปลอดภัยทั่วเมือง",
    "经核验的网约车，安全透明。",
    "Проверенные ride-hailing сервисы.",
  ),
  grabTitle: L("Grab Premium", "Grab Premium", "Grab Premium", "Grab Premium"),
  grabSub: L(
    "Priority Transport & Delivery",
    "ขนส่งและส่งของพรีเมียม",
    "优先出行与配送",
    "Приоритетные поездки",
  ),
  boltTitle: L("Bolt", "Bolt", "Bolt", "Bolt"),
  boltSub: L(
    "Optimized City Travel",
    "เดินทางในเมืองอย่างคุ้มค่า",
    "优化城市出行",
    "Поездки по городу",
  ),
} as const;

export function tLivingHub(lang: LanguageCode, key: keyof typeof hub): string {
  return t(lang, hub[key]);
}

export function getScamAlerts(lang: LanguageCode): string[] {
  return [
    t(
      lang,
      L(
        "Unsecured bank deposits via offshore accounts.",
        "ฝากเงินผ่านบัญชีออฟชอร์ไม่มีหลักประกัน",
        "通过离岸账户的不安全存款。",
        "Небезопасные депозиты через офшор.",
      ),
    ),
    t(
      lang,
      L(
        'Unofficial agents promising "Express" stamps.',
        'ตัวแทนวีซ่า "ด่วน" ที่ไม่ได้รับอนุญาต',
        "非正规“加急”签证中介。",
        'Нелегальные "экспресс" визы.',
      ),
    ),
    t(
      lang,
      L(
        "Unauthorized crypto ATM exchanges on Walking Street.",
        "ตู้ crypto ไม่ได้รับอนุญาตบนถนนคนเดิน",
        "步行街未授权加密货币 ATM。",
        "Нелегальные crypto-банкоматы.",
      ),
    ),
    t(
      lang,
      L(
        "Fake property listings on social media.",
        "ประกาศอสังหาปลอมบนโซเชียล",
        "社交媒体虚假房源。",
        "Фейковые объявления о недвижимости.",
      ),
    ),
    t(
      lang,
      L(
        "Unauthorized taxi fare overcharging.",
        "แท็กซี่เรียกเกินราคา",
        "出租车乱收费。",
        "Завышенные тарифы такси.",
      ),
    ),
  ];
}

type DosDont = { icon: LucideIcon; title: LocalizedText; text: LocalizedText };

export function getCulturalDos(lang: LanguageCode): { icon: LucideIcon; title: string; text: string }[] {
  const items: DosDont[] = [
    {
      icon: Handshake,
      title: L("The Wai Protocol", "การไหว้", "合十礼", "Вай"),
      text: L(
        "Bow with palms together to show respect to elders and officials.",
        "ไหว้แสดงความเคารพผู้ใหญ่และเจ้าหน้าที่",
        "合掌鞠躬以示对长辈与官员的尊重。",
        "Сложите ладони в знак уважения.",
      ),
    },
    {
      icon: Users,
      title: L("Social Hierarchy", "ลำดับชั้นทางสังคม", "社会层级", "Иерархия"),
      text: L(
        "Acknowledge age and status with calm, polite gestures.",
        "ยอมรับอายุและสถานะด้วยน้ำเสียงสุภาพ",
        "以平和礼貌的姿态体现对年龄与地位的认可。",
        "Уважайте возраст и статус.",
      ),
    },
    {
      icon: Shirt,
      title: L("Dress Codes", "การแต่งกาย", "着装规范", "Дресс-код"),
      text: L(
        "Modest clothing when visiting temples and official buildings.",
        "แต่งกายสุภาพเมื่อเข้าวัดและสถานราชการ",
        "参观寺庙与政府机关时衣着得体。",
        "Скромная одежда в храмах.",
      ),
    },
    {
      icon: Landmark,
      title: L("Respect for Monks", "ความเคารพพระ", "尊重僧侣", "Уважение к монахам"),
      text: L(
        "Give up your seat; women avoid physical contact with monks.",
        "ให้ที่นั่งพระ ผู้หญิงหลีกเลี่ยงสัมผัส",
        "让座给僧侣；女性避免与僧侣肢体接触。",
        "Уступайте место; женщинам не касаться монахов.",
      ),
    },
  ];
  return items.map((i) => ({
    icon: i.icon,
    title: t(lang, i.title),
    text: t(lang, i.text),
  }));
}

export function getCulturalDonts(lang: LanguageCode): { icon: LucideIcon; title: string; text: string }[] {
  const items: DosDont[] = [
    {
      icon: Hand,
      title: L("Touching the Head", "จับหัว", "摸头", "Голова"),
      text: L(
        "The head is sacred; avoid touching anyone's head.",
        "ศีรษะเป็นส่วนศักดิ์สิทธิ์ ห้ามจับหัว",
        "头部神圣，勿触摸他人头部。",
        "Голову не трогают.",
      ),
    },
    {
      icon: Footprints,
      title: L("Pointing Feet", "ชี้เท้า", "用脚指向", "Ноги"),
      text: L(
        "Never point feet at people, monks, or Buddha images.",
        "ห้ามชี้เท้าไปที่คน พระ หรือพระพุทธรูป",
        "勿用脚指向人、僧侣或佛像。",
        "Не направляйте стопы на людей и изображения Будды.",
      ),
    },
    {
      icon: VolumeX,
      title: L("Raising Voice", "พูดเสียงดัง", "提高嗓门", "Голос"),
      text: L(
        "Stay calm; losing temper causes loss of face.",
        "ใจเย็น การโกรธทำให้เสียหน้า",
        "保持冷静；发脾气会丢面子。",
        "Сохраняйте спокойствие.",
      ),
    },
    {
      icon: Crown,
      title: L("Disrespecting the Monarchy", "ไม่เคารพสถาบัน", "冒犯王室", "Монархия"),
      text: L(
        "Show utmost respect; discussion is subject to strict laws.",
        "แสดงความเคารพสูงสุด มีกฎหมายเข้มงวด",
        "务必极度尊重；相关法律严格。",
        "Проявляйте уважение; действуют строгие законы.",
      ),
    },
  ];
  return items.map((i) => ({
    icon: i.icon,
    title: t(lang, i.title),
    text: t(lang, i.text),
  }));
}

type HubCard = {
  title: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  excerpt: string;
  cta: string;
  href: string;
};

type HubCardDef = {
  title: LocalizedText;
  excerpt: LocalizedText;
  cta: LocalizedText;
  imageAlt: LocalizedText;
  icon: LucideIcon;
  image: string;
  href: string;
};

function commercialDefs(): HubCardDef[] {
  return [
    {
      title: L("Thailand Elite", "Thailand Elite", "泰国精英签", "Thailand Elite"),
      icon: Star,
      image: livingImages.thailandElite,
      imageAlt: L("Thailand Elite Visa", "วีซ่า Thailand Elite", "泰国精英签证", "Thailand Elite"),
      excerpt: L(
        "5–20 year visa with concierge service and exclusive privileges.",
        "วีซ่า 5–20 ปี พร้อมคอนเซียร์จและสิทธิพิเศษ",
        "5–20 年签证，礼宾服务与专属权益。",
        "Виза 5–20 лет с консьержем.",
      ),
      cta: L("Apply Now", "สมัครเลย", "立即申请", "Подать заявку"),
      href: "/living/visa/thailand-elite",
    },
    {
      title: L("Work Permit", "ใบอนุญาตทำงาน", "工作许可", "Work permit"),
      icon: IdCard,
      image: livingImages.workPermit,
      imageAlt: L("Work Permit", "ใบอนุญาตทำงาน", "工作许可", "Work permit"),
      excerpt: L(
        "Employment, business setup, and Digital Nomad LTR frameworks.",
        "จ้างงาน จัดตั้งธุรกิจ และ LTR ดิจิทัลโนแมด",
        "就业、创业与数字游民 LTR 框架。",
        "Работа, бизнес и LTR для digital nomads.",
      ),
      cta: L("Legal Compliance", "ความถูกต้องตามกฎหมาย", "合规指南", "Соответствие закону"),
      href: "/living/visa/work-permit",
    },
    {
      title: L("Rentals", "เช่าที่พัก", "租房", "Аренда"),
      icon: Home,
      image: livingImages.rentals,
      imageAlt: L("Rentals", "เช่าที่พัก", "租房", "Аренда"),
      excerpt: L(
        "Contracts, deposits, and TM30 reporting for tenants.",
        "สัญญาเช่า เงินประกัน และ TM30",
        "租约、押金与 TM30 报备。",
        "Договоры, депозиты и TM30.",
      ),
      cta: L("View Listings", "ดูประกาศ", "查看房源", "Объявления"),
      href: "/living/housing/rentals",
    },
    {
      title: L("Medical", "การแพทย์", "医疗", "Медицина"),
      icon: Hospital,
      image: livingImages.medical,
      imageAlt: L("Medical", "การแพทย์", "医疗", "Медицина"),
      excerpt: L(
        "International hospitals and clinics in the Pattaya region.",
        "โรงพยาบาลและคลินิกนานาชาติในพัทยา",
        "芭提雅地区国际医院与诊所。",
        "Международные клиники Паттайи.",
      ),
      cta: L("Hospital List", "รายชื่อโรงพยาบาล", "医院列表", "Список клиник"),
      href: "/living/healthcare/hospitals",
    },
  ];
}

function infoDefs() {
  return [
    {
      title: L("Ownership", "กรรมสิทธิ์", "产权", "Владение"),
      icon: Key,
      image: livingImages.ownership,
      excerpt: L(
        "Foreign property ownership and title deed transfers.",
        "กรรมสิทธิ์ต่างชาติและโอนกรรมสิทธิ์",
        "外资产权与过户。",
        "Владение недвижимостью иностранцами.",
      ),
      cta: L("Legal Guide", "คู่มือกฎหมาย", "法律指南", "Правовой гид"),
      href: "/living/housing/ownership",
    },
    {
      title: L("Utilities Cost", "ค่าสาธารณูปโภค", "公用事业", "Коммуналка"),
      icon: CreditCard,
      image: livingImages.utilities,
      excerpt: L(
        "Electricity, water, and fiber internet logistics.",
        "ค่าไฟ น้ำ และอินเทอร์เน็ต",
        "电费、水费与光纤网络。",
        "Электричество, вода, интернет.",
      ),
      cta: L("Budget Tools", "เครื่องมืองบประมาณ", "预算工具", "Бюджет"),
      href: "/living/cost-of-living/utilities",
    },
    {
      title: L("Insurance", "ประกัน", "保险", "Страхование"),
      icon: Shield,
      image: livingImages.insurance,
      excerpt: L(
        "International health insurance for long-term expats.",
        "ประกันสุขภาพสากลสำหรับชาวต่างชาติ",
        "长期外籍人士国际医疗保险。",
        "Международная страховка.",
      ),
      cta: L("View Policies", "ดูแผนประกัน", "查看方案", "Полисы"),
      href: "/living/healthcare/insurance",
    },
    {
      title: L("Driving", "ใบขับขี่", "驾驶", "Вождение"),
      icon: Car,
      image: livingImages.driving,
      excerpt: L(
        "Thai driving license and local traffic laws.",
        "ใบขับขี่ไทยและกฎจราจร",
        "泰国驾照与当地交通法规。",
        "Тайские права и ПДД.",
      ),
      cta: L("License Guide", "คู่มือใบขับขี่", "驾照指南", "Права"),
      href: "/living/transportation/driving",
    },
    {
      title: L("Culture", "วัฒนธรรม", "文化", "Культура"),
      icon: Landmark,
      image: livingImages.cultureCard,
      excerpt: L(
        "Etiquette and business networking in Pattaya.",
        "มารยาทและเครือข่ายธุรกิจในพัทยา",
        "芭提雅礼仪与商务社交。",
        "Этикет и нетворкинг.",
      ),
      cta: L("Learn More", "เรียนรู้เพิ่ม", "了解更多", "Подробнее"),
      href: "/living/culture/thai-culture",
    },
    {
      title: L("90-Day Reporting", "รายงานตัว 90 วัน", "90 天报到", "Отчёт 90 дней"),
      icon: CalendarDays,
      image: livingImages.ninetyDay,
      excerpt: L(
        "Simplified guide to mandatory 90-day immigration reporting.",
        "คู่มือง่ายๆ รายงานตัว 90 วัน",
        "移民 90 天报到简明指南。",
        "Отчётность каждые 90 дней.",
      ),
      cta: L("Process Guide", "คู่มือขั้นตอน", "流程指南", "Процесс"),
      href: "/living/visa/90-day-report",
    },
    {
      title: L("Local Transport", "ขนส่งท้องถิ่น", "本地交通", "Транспорт"),
      icon: Bus,
      image: livingImages.localTransport,
      excerpt: L(
        "Songthaews, ferries, and inter-city buses.",
        "สองแถว เรือ และรถทัวร์",
        "双条车、渡轮与城际巴士。",
        "Сонгтео, паромы, автобусы.",
      ),
      cta: L("Transit Map", "แผนที่ขนส่ง", "交通图", "Транспорт"),
      href: "/living/transportation/songthaew",
    },
    {
      title: L("Safety Guide", "คู่มือความปลอดภัย", "安全指南", "Безопасность"),
      icon: Lock,
      image: livingImages.safetyGuide,
      excerpt: L(
        "Emergency services, tourist police, and safe-living protocols.",
        "ฉุกเฉิน ตำรวจท่องเที่ยว และความปลอดภัย",
        "紧急服务、旅游警察与安全守则。",
        "Экстренные службы и полиция.",
      ),
      cta: L("Emergency Info", "ข้อมูลฉุกเฉิน", "紧急信息", "Экстренно"),
      href: "/living/safety/emergency-guide",
    },
  ] as const;
}

function mapCards(lang: LanguageCode, defs: HubCardDef[]): HubCard[] {
  return defs.map((d) => ({
    title: t(lang, d.title),
    icon: d.icon,
    image: d.image,
    imageAlt: t(lang, d.imageAlt),
    excerpt: t(lang, d.excerpt),
    cta: t(lang, d.cta),
    href: d.href,
  }));
}

export function getCommercialCards(lang: LanguageCode): HubCard[] {
  return mapCards(lang, commercialDefs());
}

export function getInfoCards(lang: LanguageCode): HubCard[] {
  return infoDefs().map((d) => ({
    title: t(lang, d.title),
    icon: d.icon,
    image: d.image,
    imageAlt: t(lang, d.title),
    excerpt: t(lang, d.excerpt),
    cta: t(lang, d.cta),
    href: d.href,
  }));
}

export function getCostBars(lang: LanguageCode) {
  return [
    {
      label: t(
        lang,
        L(
          "Housing & Luxury Utilities",
          "ที่พัก & สาธารณูปโภค",
          "住房与高端公用事业",
          "Жильё и коммуналка",
        ),
      ),
      pct: 45,
      color: "bg-[#455f88]",
    },
    {
      label: t(
        lang,
        L("Gourmet Dining & Food", "อาหารหรู & อาหาร", "美食餐饮", "Еда"),
      ),
      pct: 25,
      color: "bg-[#ae2f34]",
    },
    {
      label: t(
        lang,
        L("Leisure & Wellness", "สันทนาการ & เวลเนส", "休闲与康养", "Отдых"),
      ),
      pct: 15,
      color: "bg-[#adc7f7]",
    },
  ];
}
