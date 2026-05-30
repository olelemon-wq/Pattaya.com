import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import type { NavItem } from "@/lib/navigation/types";

type NavCopy = {
  label: ReturnType<typeof L>;
  description: ReturnType<typeof L>;
  category: ReturnType<typeof L>;
  subcategory: ReturnType<typeof L>;
};

const livingNav: Record<string, NavCopy> = {
  "visa/retirement": {
    label: L("Retirement Visa", "วีซ่าเกษียณ", "退休签证", "Пенсионная виза"),
    description: L(
      "Guide to retirement visa requirements and process",
      "คู่มือข้อกำหนดและขั้นตอนวีซ่าเกษียณ",
      "退休签证要求与申请流程指南",
      "Требования и процесс получения пенсионной визы",
    ),
    category: L("Visa & Immigration", "วีซ่า & ตรวจคนเข้าเมือง", "签证与移民", "Виза и иммиграция"),
    subcategory: L("Retirement Visa", "วีซ่าเกษียณ", "退休签证", "Пенсионная виза"),
  },
  "visa/thailand-elite": {
    label: L("Thailand Elite", "Elite Visa", "泰国精英签证", "Thailand Elite"),
    description: L(
      "Thailand Elite visa program overview",
      "ภาพรวมโครงการ Elite Visa ของไทย",
      "泰国精英签证计划概览",
      "Обзор программы Thailand Elite",
    ),
    category: L("Visa & Immigration", "วีซ่า & ตรวจคนเข้าเมือง", "签证与移民", "Виза и иммиграция"),
    subcategory: L("Thailand Elite", "Elite Visa", "泰国精英", "Thailand Elite"),
  },
  "visa/work-permit": {
    label: L("Work Permit", "ใบอนุญาตทำงาน", "工作许可", "Разрешение на работу"),
    description: L(
      "Work permit application and requirements",
      "การสมัครและข้อกำหนดใบอนุญาตทำงาน",
      "工作许可申请与要求",
      "Подача заявки и требования к разрешению на работу",
    ),
    category: L("Visa & Immigration", "วีซ่า & ตรวจคนเข้าเมือง", "签证与移民", "Виза и иммиграция"),
    subcategory: L("Work Permit", "ใบอนุญาตทำงาน", "工作许可", "Разрешение на работу"),
  },
  "visa/90-day-report": {
    label: L("90-Day Report", "รายงานตัว 90 วัน", "90天报到", "Отчёт 90 дней"),
    description: L(
      "How to complete your 90-day immigration reporting",
      "วิธีรายงานตัวต่อตรวจคนเข้าเมืองทุก 90 วัน",
      "如何完成90天移民报到",
      "Как пройти 90-дневную отчётность в Immigration",
    ),
    category: L("Visa & Immigration", "วีซ่า & ตรวจคนเข้าเมือง", "签证与移民", "Виза и иммиграция"),
    subcategory: L("90-Day Report", "รายงานตัว 90 วัน", "90天报到", "Отчёт 90 дней"),
  },
  "housing/condo-buying": {
    label: L("Condo Buying", "ซื้อคอนโด", "购买公寓", "Покупка кондо"),
    description: L(
      "Guide to buying a condo in Pattaya",
      "คู่มือซื้อคอนโดในพัทยา",
      "芭提雅公寓购买指南",
      "Гид по покупке кондо в Паттайе",
    ),
    category: L("Housing", "ที่อยู่อาศัย", "住房", "Жильё"),
    subcategory: L("Condo Buying", "ซื้อคอนโด", "购买公寓", "Покупка кондо"),
  },
  "housing/rentals": {
    label: L("Rentals", "เช่าบ้าน", "租房", "Аренда"),
    description: L(
      "Finding and renting property in Pattaya",
      "ค้นหาและเช่าที่อยู่อาศัยในพัทยา",
      "在芭提雅找房与租房",
      "Поиск и аренда жилья в Паттайе",
    ),
    category: L("Housing", "ที่อยู่อาศัย", "住房", "Жильё"),
    subcategory: L("Rentals", "เช่าบ้าน", "租房", "Аренда"),
  },
  "housing/ownership": {
    label: L("Leasehold vs Freehold", "สิทธิการถือครอง", "租赁权与永久产权", "Leasehold vs Freehold"),
    description: L(
      "Understanding property ownership options in Thailand",
      "ทำความเข้าใจสิทธิการถือครองอสังหาในไทย",
      "了解泰国房产产权选项",
      "Варианты владения недвижимостью в Таиланде",
    ),
    category: L("Housing", "ที่อยู่อาศัย", "住房", "Жильё"),
    subcategory: L("Ownership", "สิทธิการถือครอง", "产权", "Владение"),
  },
  "cost-of-living/utilities": {
    label: L("Utilities Cost", "ค่าไฟ น้ำ Internet", "水电网费用", "Коммунальные услуги"),
    description: L(
      "Electricity, water, and internet costs in Pattaya",
      "ค่าไฟฟ้า น้ำประปา และอินเทอร์เน็ตในพัทยา",
      "芭提雅水电与网络费用",
      "Стоимость электричества, воды и интернета в Паттайе",
    ),
    category: L("Cost of Living", "ค่าครองชีพ", "生活成本", "Стоимость жизни"),
    subcategory: L("Utilities", "สาธารณูปโภค", "公用事业", "Коммунальные"),
  },
  "cost-of-living/food": {
    label: L("Daily Cost", "ค่ากินอยู่", "日常开销", "Ежедневные расходы"),
    description: L(
      "Food and daily living expenses in Pattaya",
      "ค่าอาหารและค่าใช้จ่ายประจำวันในพัทยา",
      "芭提雅餐饮与日常开支",
      "Расходы на еду и повседневную жизнь в Паттайе",
    ),
    category: L("Cost of Living", "ค่าครองชีพ", "生活成本", "Стоимость жизни"),
    subcategory: L("Food Costs", "ค่าอาหาร", "餐饮费用", "Еда"),
  },
  "healthcare/hospitals": {
    label: L("Hospitals", "โรงพยาบาล", "医院", "Больницы"),
    description: L(
      "Hospitals and medical facilities in Pattaya",
      "โรงพยาบาลและสถานพยาบาลในพัทยา",
      "芭提雅医院与医疗设施",
      "Больницы и медучреждения Паттайи",
    ),
    category: L("Healthcare", "สุขภาพ", "医疗保健", "Здравоохранение"),
    subcategory: L("Hospitals", "โรงพยาบาล", "医院", "Больницы"),
  },
  "healthcare/insurance": {
    label: L("Health Insurance", "ประกันสุขภาพ", "健康保险", "Медстрахование"),
    description: L(
      "Health insurance options for expats and residents",
      "ตัวเลือกประกันสุขภาพสำหรับชาวต่างชาติและผู้อยู่อาศัย",
      "外籍人士与居民健康保险选项",
      "Варианты медстрахования для экспатов и резидентов",
    ),
    category: L("Healthcare", "สุขภาพ", "医疗保健", "Здравоохранение"),
    subcategory: L("Insurance", "ประกันสุขภาพ", "保险", "Страхование"),
  },
  "transportation/songthaew": {
    label: L("Songthaew", "รถสองแถว", "双条车", "Songthaew"),
    description: L(
      "Using local songthaew transport in Pattaya",
      "การใช้รถสองแถวในพัทยา",
      "芭提雅双条车出行指南",
      "Местный транспорт songthaew в Паттайе",
    ),
    category: L("Transportation", "การเดินทาง", "交通", "Транспорт"),
    subcategory: L("Songthaew", "รถสองแถว", "双条车", "Songthaew"),
  },
  "transportation/ride-apps": {
    label: L("Grab & Bolt", "App เดินทาง", "Grab与Bolt", "Grab & Bolt"),
    description: L(
      "Ride-hailing apps available in Pattaya",
      "แอปเรียกรถที่ใช้ได้ในพัทยา",
      "芭提雅可用的打车应用",
      "Приложения для заказа такси в Паттайе",
    ),
    category: L("Transportation", "การเดินทาง", "交通", "Транспорт"),
    subcategory: L("Ride Apps", "App เดินทาง", "打车应用", "Такси-приложения"),
  },
  "transportation/driving": {
    label: L("Driving in Thailand", "ขับรถในไทย", "在泰国驾车", "Вождение в Таиланде"),
    description: L(
      "Driving licenses, rules, and tips for Pattaya",
      "ใบขับขี่ กฎจราจร และเคล็ดลับสำหรับพัทยา",
      "驾照、交规与芭提雅驾车贴士",
      "Права, правила и советы для Паттайи",
    ),
    category: L("Transportation", "การเดินทาง", "交通", "Транспорт"),
    subcategory: L("Driving", "ขับรถ", "驾车", "Вождение"),
  },
  "culture/etiquette": {
    label: L("Do & Don't", "สิ่งควรทำ/ไม่ควรทำ", "该做与不该做", "Можно и нельзя"),
    description: L(
      "Cultural etiquette guide for living in Thailand",
      "คู่มือมารยาทวัฒนธรรมสำหรับการใช้ชีวิตในไทย",
      "泰国生活文化礼仪指南",
      "Культурный этикет для жизни в Таиланде",
    ),
    category: L("Culture & Etiquette", "วัฒนธรรม & มารยาท", "文化与礼仪", "Культура и этикет"),
    subcategory: L("Etiquette", "มารยาท", "礼仪", "Этикет"),
  },
  "culture/thai-culture": {
    label: L("Thai Culture", "วัฒนธรรมไทย", "泰国文化", "Тайская культура"),
    description: L(
      "Understanding Thai culture as a resident",
      "ทำความเข้าใจวัฒนธรรมไทยในฐานะผู้อยู่อาศัย",
      "作为居民了解泰国文化",
      "Понимание тайской культуры как резидент",
    ),
    category: L("Culture & Etiquette", "วัฒนธรรม & มารยาท", "文化与礼仪", "Культура и этикет"),
    subcategory: L("Thai Culture", "วัฒนธรรมไทย", "泰国文化", "Тайская культура"),
  },
  "safety/scam-alerts": {
    label: L("Scam Alerts", "การโกงนักท่องเที่ยว", "诈骗预警", "Мошенничество"),
    description: L(
      "Common scams and how to avoid them in Pattaya",
      "การหลอกลวงที่พบบ่อยและวิธีหลีกเลี่ยงในพัทยา",
      "芭提雅常见骗局及防范方法",
      "Распространённые мошенничества в Паттайе и как их избежать",
    ),
    category: L("Safety", "ความปลอดภัย", "安全", "Безопасность"),
    subcategory: L("Scam Alerts", "การโกง", "诈骗预警", "Мошенничество"),
  },
  "safety/emergency-guide": {
    label: L("Emergency Guide", "วิธีรับมือเหตุฉุกเฉิน", "应急指南", "Экстренные ситуации"),
    description: L(
      "How to handle emergencies in Pattaya",
      "วิธีรับมือเหตุฉุกเฉินในพัทยา",
      "芭提雅紧急情况应对方法",
      "Как действовать в экстренных ситуациях в Паттайе",
    ),
    category: L("Safety", "ความปลอดภัย", "安全", "Безопасность"),
    subcategory: L("Emergency Guide", "เหตุฉุกเฉิน", "应急指南", "Экстренные"),
  },
};

export function getLivingNavCopy(lang: LanguageCode, slug: string) {
  const copy = livingNav[slug];
  if (!copy) return null;
  return {
    label: t(lang, copy.label),
    description: t(lang, copy.description),
    category: t(lang, copy.category),
    subcategory: t(lang, copy.subcategory),
  };
}

export function localizeLivingNavItem(lang: LanguageCode, item: NavItem): NavItem {
  const copy = getLivingNavCopy(lang, item.slug);
  if (!copy) return item;
  return {
    ...item,
    label: copy.label,
    description: copy.description,
    category: copy.category,
    subcategory: copy.subcategory,
  };
}
