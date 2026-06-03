import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

export type LivingShellStrings = {
  badge: string;
  breadcrumbLeaf: string;
  title: string;
  subtitle: string;
  heroAlt: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  ctaAriaLabel: string;
  bottomTitle?: string;
  bottomBody?: string;
  bottomPrimary?: { label: string; href: string };
  bottomSecondary?: { label: string; href: string };
};

type ShellDef = {
  badge: ReturnType<typeof L>;
  breadcrumbLeaf: ReturnType<typeof L>;
  title: ReturnType<typeof L>;
  subtitle: ReturnType<typeof L>;
  heroAlt: ReturnType<typeof L>;
  ctaEyebrow: ReturnType<typeof L>;
  ctaTitle: ReturnType<typeof L>;
  ctaBody: ReturnType<typeof L>;
  ctaButton: ReturnType<typeof L>;
  ctaAriaLabel?: ReturnType<typeof L>;
  bottomTitle?: ReturnType<typeof L>;
  bottomBody?: ReturnType<typeof L>;
  bottomPrimary?: { label: ReturnType<typeof L>; href: string };
  bottomSecondary?: { label: ReturnType<typeof L>; href: string };
};

const defaultLivingCtaAria = L(
  "Living consultation",
  "ปรึกษาเรื่องไลฟ์สไตล์",
  "生活咨询",
  "Консультация по жизни",
);

function resolveShell(lang: LanguageCode, def: ShellDef): LivingShellStrings {
  return {
    badge: t(lang, def.badge),
    breadcrumbLeaf: t(lang, def.breadcrumbLeaf),
    title: t(lang, def.title),
    subtitle: t(lang, def.subtitle),
    heroAlt: t(lang, def.heroAlt),
    ctaEyebrow: t(lang, def.ctaEyebrow),
    ctaTitle: t(lang, def.ctaTitle),
    ctaBody: t(lang, def.ctaBody),
    ctaButton: t(lang, def.ctaButton),
    ctaAriaLabel: t(lang, def.ctaAriaLabel ?? defaultLivingCtaAria),
    bottomTitle: def.bottomTitle ? t(lang, def.bottomTitle) : undefined,
    bottomBody: def.bottomBody ? t(lang, def.bottomBody) : undefined,
    bottomPrimary: def.bottomPrimary
      ? { label: t(lang, def.bottomPrimary.label), href: def.bottomPrimary.href }
      : undefined,
    bottomSecondary: def.bottomSecondary
      ? { label: t(lang, def.bottomSecondary.label), href: def.bottomSecondary.href }
      : undefined,
  };
}

const shells = {
  utilities: {
    badge: L("Cost of Living", "ค่าครองชีพ", "生活成本", "Стоимость жизни"),
    breadcrumbLeaf: L("Utilities", "สาธารณูปโภค", "公用事业", "Коммуналка"),
    title: L(
      "Utilities Cost",
      "ค่าไฟ น้ำ อินเทอร์เน็ต",
      "水电与网络费用",
      "Коммунальные услуги",
    ),
    subtitle: L(
      "Government vs condo rates, AC seasons, drinking water, trash, gas, and fiber in Pattaya.",
      "เรทหลวง vs คอนโด ค่าแอร์ตามฤดูกาล น้ำดื่ม ขยะ แก๊ส และไฟเบอร์ในพัทยา",
      "政府与公寓电价、空调季节、饮用水、垃圾、燃气与光纤。",
      "Гостариф vs кондо, AC, вода, мусор, газ и оптика.",
    ),
    heroAlt: L(
      "Utilities in Pattaya",
      "สาธารณูปโภคในพัทยา",
      "芭提雅公用事业",
      "Коммуналка в Паттайе",
    ),
    ctaEyebrow: L("Budget Tools", "เครื่องมืองบประมาณ", "预算工具", "Бюджет"),
    ctaTitle: L(
      "Estimate your monthly overheads",
      "ประเมินค่าใช้จ่ายรายเดือน",
      "估算月度开支",
      "Оцените ежемесячные расходы",
    ),
    ctaBody: L(
      "Compare building utility rates before you sign a lease.",
      "เปรียบเทียบอัตราค่าสาธารณูปโภคก่อนเซ็นสัญญา",
      "签约前比较楼盘水电费率。",
      "Сравните тарифы до подписания договора.",
    ),
    ctaButton: L("Budget Tools", "เครื่องมืองบประมาณ", "预算工具", "Бюджет"),
    bottomTitle: L(
      "Planning your total budget?",
      "วางแผนงบรวม?",
      "规划总预算？",
      "Планируете бюджет?",
    ),
    bottomBody: L(
      "Combine utilities with food and rent for a realistic monthly plan.",
      "รวมค่าสาธารณูปโภค อาหาร และค่าเช่า",
      "将公用事业、餐饮与租金合并估算。",
      "Учитывайте коммуналку, еду и аренду.",
    ),
    bottomPrimary: {
      label: L("Daily cost guide", "คู่มือค่าใช้จ่ายรายวัน", "每日开支指南", "Расходы в день"),
      href: "/living/cost-of-living/food",
    },
    bottomSecondary: {
      label: L("Rentals guide", "คู่มือเช่า", "租房指南", "Аренда"),
      href: "/living/housing/rentals",
    },
  },
  food: {
    badge: L("Cost of Living", "ค่าครองชีพ", "生活成本", "Стоимость жизни"),
    breadcrumbLeaf: L("Daily cost", "ค่ากินอยู่", "日常开销", "Расходы"),
    title: L(
      "Cost of Living in Pattaya",
      "ค่าครองชีพในพัทยา",
      "芭提雅生活成本",
      "Жизнь в Паттайе",
    ),
    subtitle: L(
      "Interactive monthly planner — food, housing, and transport by lifestyle tier.",
      "วางแผนรายเดือน — อาหาร ที่พัก และเดินทางตามระดับชีวิต",
      "互动月度规划——按生活档次估算餐饮、住房与交通。",
      "Планировщик: еда, жильё, транспорт по уровню.",
    ),
    heroAlt: L(
      "Pattaya street food and local dining",
      "อาหารข้างทางและร้านอาหารท้องถิ่นในพัทยา",
      "芭提雅街头美食与本地餐饮",
      "Уличная еда и местные рестораны Паттайи",
    ),
    ctaEyebrow: L("Budget planner", "วางแผนงบ", "预算规划", "Планировщик"),
    ctaTitle: L(
      "Adjust your lifestyle tier",
      "ปรับระดับชีวิต",
      "调整生活档次",
      "Смените уровень",
    ),
    ctaBody: L(
      "See food, rent, and transport update in real time.",
      "ดูค่าอาหาร ค่าเช่า และเดินทางเปลี่ยนทันที",
      "餐饮、租金与交通即时更新。",
      "Цены обновляются сразу.",
    ),
    ctaButton: L("Open planner", "เปิดแผนงบ", "打开规划器", "Открыть"),
    bottomTitle: L("Need utility rates?", "ต้องการเรทค่าไฟน้ำ?", "需要水电费率？", "Тарифы?"),
    bottomBody: L(
      "Compare condo vs government meters and seasonal AC.",
      "เปรียบเทียบเรทคอนโดกับ PEA และค่าแอร์ตามฤดู",
      "对比公寓与政府电价及空调季节费。",
      "Кондо vs PEA и сезон AC.",
    ),
    bottomPrimary: {
      label: L("Utilities guide", "คู่มือสาธารณูปโภค", "水电指南", "Коммуналка"),
      href: "/living/cost-of-living/utilities",
    },
    bottomSecondary: {
      label: L("Living hub", "ศูนย์ Living", "生活中心", "Living"),
      href: "/living",
    },
  },
  retirement: {
    badge: L("Visa & Immigration", "วีซ่า & ตรวจคนเข้าเมือง", "签证与移民", "Виза"),
    breadcrumbLeaf: L("Retirement Visa", "วีซ่าเกษียณ", "退休签证", "Пенсионная виза"),
    title: L(
      "Retirement Visa Guide",
      "คู่มือวีซ่าเกษียณ",
      "退休签证指南",
      "Пенсионная виза",
    ),
    subtitle: L(
      "Requirements and application process for Pattaya retirees.",
      "ข้อกำหนดและขั้นตอนสมัครในพัทยา",
      "芭提雅退休签证要求与申请流程。",
      "Требования и процесс в Паттайе.",
    ),
    heroAlt: L(
      "Happy expat couple enjoying retirement life in Pattaya",
      "คู่ชาวต่างชาติที่เกษียณอย่างมีความสุขในพัทยา",
      "在芭提雅享受退休生活的外籍夫妇",
      "Счастливая пара экспатов на пенсии в Паттайе",
    ),
    ctaEyebrow: L("Visa Service", "บริการวีซ่า", "签证服务", "Визовый сервис"),
    ctaTitle: L(
      "Need help with your application?",
      "ต้องการความช่วยเหลือในการสมัคร?",
      "需要申请协助？",
      "Нужна помощь с заявкой?",
    ),
    ctaBody: L(
      "Document review, bank letters, and Immigration accompaniment in Pattaya.",
      "ตรวจเอกสาร หนังสือธนาคาร และไป Immigration ด้วย",
      "文件审核、银行证明与陪同移民局。",
      "Проверка документов и сопровождение в Immigration.",
    ),
    ctaButton: L(
      "Open visa toolkit",
      "เปิดเครื่องมือวีซ่า",
      "打开签证工具",
      "Открыть набор",
    ),
    ctaAriaLabel: L(
      "Open retirement visa toolkit",
      "เปิดเครื่องมือวีซ่าเกษียณ",
      "打开退休签证工具",
      "Открыть набор для пенсионной визы",
    ),
    bottomTitle: L(
      "Ready to retire in Pattaya?",
      "พร้อมเกษียณในพัทยา?",
      "准备在芭提雅退休？",
      "Готовы к пенсии в Паттайе?",
    ),
    bottomBody: L(
      "We handle Chonburi Immigration, translations, and annual extensions.",
      "ดูแล Immigration ชลบุรี แปลเอกสาร และต่ออายุ",
      "办理春武里移民局、翻译与年度续签。",
      "Immigration Чонбури, переводы и продления.",
    ),
    bottomPrimary: {
      label: L("Get consultation", "ปรึกษาฟรี", "预约咨询", "Консультация"),
      href: "/living",
    },
  },
  ownership: {
    badge: L("Housing", "ที่พักอาศัย", "住房", "Жильё"),
    breadcrumbLeaf: L("Ownership", "กรรมสิทธิ์", "产权", "Владение"),
    title: L("Property Ownership", "กรรมสิทธิ์อสังหา", "房产产权", "Владение недвижимостью"),
    subtitle: L(
      "Condo freehold quota, FET transfers, leasehold villas, and Pattaya land rules.",
      "โควตาคอนโด 49% FET สิทธิเช่าวิลล่า และกฎที่ดินในพัทยา",
      "公寓49%配额、FET、别墅租赁权与芭提雅土地规则。",
      "Квота 49%, FET, leasehold и правила земли в Паттайе.",
    ),
    heroAlt: L(
      "Property ownership in Pattaya",
      "กรรมสิทธิ์อสังหาในพัทยา",
      "芭提雅房产产权",
      "Владение недвижимостью в Паттайе",
    ),
    ctaEyebrow: L("Legal Guide", "คู่มือกฎหมาย", "法律指南", "Правовой гид"),
    ctaTitle: L("Understand freehold vs leasehold", "ทำความเข้าใจกรรมสิทธิ์ vs เช่า", "了解永久产权与租赁权", "Freehold vs leasehold"),
    ctaBody: L(
      "Quota checks and corporate structures for Pattaya condos.",
      "ตรวจโควตาและโครงสร้างนิติบุคคลสำหรับคอนโดพัทยา",
      "芭提雅公寓配额与公司结构。",
      "Квоты и корпоративные структуры.",
    ),
    ctaButton: L("Legal Guide", "คู่มือกฎหมาย", "法律指南", "Гид"),
    bottomTitle: L("Buying a condo?", "กำลังซื้อคอนโด?", "打算买公寓？", "Покупаете кондо?"),
    bottomBody: L(
      "See the step-by-step buying guide and foreign quota rules.",
      "ดูคู่มือซื้อคอนโดและโควตาต่างชาติ",
      "查看购房步骤与外资配额。",
      "Пошаговый гид по покупке.",
    ),
    bottomPrimary: {
      label: L("Condo buying guide", "คู่มือซื้อคอนโด", "购房指南", "Покупка кондо"),
      href: "/living/housing/condo-buying",
    },
    bottomSecondary: {
      label: L("Rentals", "คู่มือเช่า", "租房", "Аренда"),
      href: "/living/housing/rentals",
    },
  },
  rentals: {
    badge: L("Housing", "ที่พักอาศัย", "住房", "Жильё"),
    breadcrumbLeaf: L("Rentals", "เช่าที่พัก", "租房", "Аренда"),
    title: L("Rentals", "เช่าที่พัก", "租房", "Аренда"),
    subtitle: L(
      "Rental contracts, deposits, and TM30 for Pattaya tenants.",
      "สัญญาเช่า เงินประกัน และ TM30",
      "租约、押金与 TM30 报备。",
      "Договоры, депозиты и TM30.",
    ),
    heroAlt: L(
      "Luxury rental interior in Pattaya",
      "ห้องเช่าหรูในพัทยา",
      "芭提雅精品租赁公寓内景",
      "Интерьер арендного жилья в Паттайе",
    ),
    ctaEyebrow: L("Property Service", "บริการอสังหา", "房产服务", "Недвижимость"),
    ctaTitle: L("Find verified rentals", "หาที่เช่าที่ตรวจสอบแล้ว", "寻找可靠房源", "Проверенная аренда"),
    ctaBody: L(
      "English contracts and TM30-compliant landlords in Jomtien and Pratumnak.",
      "สัญญาภาษาอังกฤษและเจ้าของที่ TM30 ครบ",
      "仲天、帕坦纳克英文合同与合规房东。",
      "Английские договоры и TM30.",
    ),
    ctaButton: L("View Listings", "ดูประกาศ", "查看房源", "Объявления"),
    ctaAriaLabel: L(
      "Rental listings consultation",
      "ปรึกษารายการเช่าที่พัก",
      "租房房源咨询",
      "Консультация по аренде",
    ),
    bottomTitle: L("Ready to tour rentals?", "พร้อมดูห้องเช่า?", "准备看房？", "Смотреть объекты?"),
    bottomBody: L(
      "Compare lease terms or explore buying for long stays.",
      "เปรียบเทียบสัญญาหรือพิจารณาซื้อ",
      "比较租约或考虑购买。",
      "Сравните аренду и покупку.",
    ),
    bottomPrimary: {
      label: L("Browse listings", "ดูประกาศ", "浏览房源", "Объявления"),
      href: "/living",
    },
    bottomSecondary: {
      label: L("Condo buying", "ซื้อคอนโด", "购房", "Покупка"),
      href: "/living/housing/condo-buying",
    },
  },
  condoBuying: {
    badge: L("Housing", "ที่พักอาศัย", "住房", "Жильё"),
    breadcrumbLeaf: L("Condo Buying", "ซื้อคอนโด", "买公寓", "Покупка кондо"),
    title: L("Condo Buying", "ซื้อคอนโด", "购买公寓", "Покупка кондо"),
    subtitle: L(
      "Foreign quota, due diligence, and Land Office transfer in Pattaya.",
      "โควตาต่างชาติ ตรวจสอบ และโอนที่สำนักงานที่ดิน",
      "外资配额、尽职调查与土地厅过户。",
      "Квота, due diligence и переход права.",
    ),
    heroAlt: L(
      "Condominium towers in Pattaya",
      "ตึกคอนโดในพัทยา",
      "芭提雅公寓楼群",
      "Condominium-башни в Паттайе",
    ),
    ctaEyebrow: L("Property Service", "บริการอสังหา", "房产服务", "Недвижимость"),
    ctaTitle: L("Quota & contract review", "ตรวจโควตาและสัญญา", "配额与合同审核", "Квота и договор"),
    ctaBody: L(
      "Lawyers for resale, off-plan, and transfer day at Chonburi Land Office.",
      "ทนายสำหรับมือสอง ออฟพลาน และวันโอน",
      "二手房、期房与过户日法务支持。",
      "Юристы для сделок и перехода права.",
    ),
    ctaButton: L("Free consultation", "ปรึกษาฟรี", "免费咨询", "Консультация"),
    ctaAriaLabel: L(
      "Property consultation",
      "ปรึกษาเรื่องอสังหา",
      "房产咨询",
      "Консультация по недвижимости",
    ),
    bottomTitle: L("Shortlist condos?", "คัดรายการคอนโด?", "筛选公寓？", "Подбор кондо?"),
    bottomBody: L(
      "Compare quota buildings and book a lawyer-backed viewing.",
      "เปรียบเทียบอาคารโควตาและนัดดูห้อง",
      "比较配额楼盘并预约律师陪同看房。",
      "Сравните квоты и просмотр с юристом.",
    ),
    bottomPrimary: {
      label: L("View listings", "ดูประกาศ", "查看房源", "Объявления"),
      href: "/living",
    },
    bottomSecondary: {
      label: L("Rentals", "เช่า", "租房", "Аренда"),
      href: "/living/housing/rentals",
    },
  },
  hospitals: {
    badge: L("Healthcare", "สุขภาพ", "医疗", "Здоровье"),
    breadcrumbLeaf: L("Hospitals", "โรงพยาบาล", "医院", "Больницы"),
    title: L("Hospitals", "โรงพยาบาล", "医院", "Клиники"),
    subtitle: L(
      "International hospitals and clinics in the Pattaya region.",
      "โรงพยาบาลและคลินิกนานาชาติในพัทยา",
      "芭提雅地区国际医院与诊所。",
      "Международные клиники региона.",
    ),
    heroAlt: L(
      "World-class medical facility in Pattaya",
      "โรงพยาบาลระดับโลกในพัทยา",
      "芭提雅世界级医疗设施",
      "Медучреждение мирового уровня в Паттайе",
    ),
    ctaEyebrow: L("Medical Service", "บริการการแพทย์", "医疗服务", "Медицина"),
    ctaTitle: L("Match insurance to hospitals", "จับคู่ประกันกับโรงพยาบาล", "匹配保险与医院", "Страховка и клиники"),
    ctaBody: L(
      "Expat plans, direct billing, and visa check-up packages.",
      "แผนประกันชาวต่างชาติ เคลมตรง และแพ็กตรวจวีซ่า",
      "外籍保险、直付与签证体检套餐。",
      "Страховки, прямой биллинг, check-up.",
    ),
    ctaButton: L("Health insurance", "ประกันสุขภาพ", "健康保险", "Страхование"),
    ctaAriaLabel: L(
      "Healthcare consultation",
      "ปรึกษาเรื่องสุขภาพ",
      "医疗健康咨询",
      "Медицинская консультация",
    ),
    bottomTitle: L("Need visa insurance?", "ต้องการประกันวีซ่า?", "需要签证保险？", "Страховка для визы?"),
    bottomBody: L(
      "Approved plans for retirement and long-stay residents.",
      "แผนที่ Immigration รับรอง",
      "移民局认可的退休与长期居留方案。",
      "Одобренные Immigration планы.",
    ),
    bottomPrimary: {
      label: L("Insurance guide", "คู่มือประกัน", "保险指南", "Страхование"),
      href: "/living/healthcare/insurance",
    },
  },
  healthInsurance: {
    badge: L("Healthcare", "สุขภาพ", "医疗", "Здоровье"),
    breadcrumbLeaf: L("Insurance", "ประกัน", "保险", "Страхование"),
    title: L("Health Insurance", "ประกันสุขภาพ", "健康保险", "Медстрахование"),
    subtitle: L(
      "Direct billing, visa-approved plans, Pattaya hospitals, and what to avoid.",
      "เคลมตรง แผนที่ตม.รับรอง โรงพยาบาลพัทยา และข้อผิดพลาดที่ควรหลีกเลี่ยง",
      "直付、签证认可方案、芭提雅医院与常见误区。",
      "Direct billing, визовые планы, клиники Паттайи.",
    ),
    heroAlt: L(
      "Health insurance in Pattaya",
      "ประกันสุขภาพในพัทยา",
      "芭提雅健康保险",
      "Медстрахование в Паттайе",
    ),
    ctaEyebrow: L("Insurance", "ประกัน", "保险", "Страхование"),
    ctaTitle: L("Compare approved plans", "เปรียบเทียบแผนที่รับรอง", "比较认可方案", "Сравнить планы"),
    ctaBody: L(
      "Coverage that meets retirement and Elite visa requirements.",
      "ความคุ้มครองตามข้อกำหนดวีซ่าเกษียณและ Elite",
      "符合退休与精英签要求的保障。",
      "Соответствие требованиям виз.",
    ),
    ctaButton: L("View policies", "ดูแผนประกัน", "查看方案", "Полисы"),
    bottomTitle: L("Choosing a hospital?", "เลือกโรงพยาบาล?", "选医院？", "Выбор клиники?"),
    bottomBody: L(
      "See which Pattaya hospitals accept direct billing.",
      "โรงพยาบาลที่รับเคลมตรงในพัทยา",
      "支持直付的芭提雅医院。",
      "Клиники с прямым биллингом.",
    ),
    bottomPrimary: {
      label: L("Hospital list", "รายชื่อโรงพยาบาล", "医院列表", "Клиники"),
      href: "/living/healthcare/hospitals",
    },
  },
  driving: {
    badge: L("Transportation", "การเดินทาง", "交通", "Транспорт"),
    breadcrumbLeaf: L("Driving", "ใบขับขี่", "驾驶", "Вождение"),
    title: L("Thai Driving License", "ใบขับขี่ไทย", "泰国驾照", "Тайские права"),
    subtitle: L(
      "Thai license steps, Chonburi DLT, insurance, Pattaya road tips, and expat FAQ.",
      "ขั้นตอนใบขับขี่ไทย กรมขนส่งชลบุรี ประกัน เคล็ดลับถนนพัทยา และคำถามที่พบบ่อย",
      "泰国驾照流程、春武里陆运厅、保险、芭提雅路况与常见问题。",
      "Права, DLT Чонбури, страховка, дороги Паттайи и FAQ.",
    ),
    heroAlt: L(
      "Driving in Thailand",
      "การขับขี่ในประเทศไทย",
      "在泰国驾驶",
      "Вождение в Таиланде",
    ),
    ctaEyebrow: L("License Guide", "คู่มือใบขับขี่", "驾照指南", "Права"),
    ctaTitle: L("Plan your DLT visit", "วางแผนไปกรมขนส่ง", "规划陆运厅行程", "Визит в DLT"),
    ctaBody: L(
      "Medical certificate, residence proof, and reaction test checklist.",
      "ใบตรวจสุขภาพ หลักฐานที่อยู่ และสอบปฏิกิริยา",
      "体检证明、住址证明与反应测试清单。",
      "Медсправка, адрес и тесты.",
    ),
    ctaButton: L("Step-by-step guide", "คู่มือทีละขั้น", "分步指南", "Пошагово"),
    bottomTitle: L("Need a car?", "ต้องการรถ?", "需要租车？", "Нужен автомобиль?"),
    bottomBody: L(
      "Compare ride apps and songthaews for daily transport.",
      "เปรียบเทียบแอปเรียกรถและสองแถว",
      "比较网约车与双条车。",
      "Сравните apps и songthaew.",
    ),
    bottomPrimary: {
      label: L("Ride apps", "แอปเรียกรถ", "网约车", "Ride apps"),
      href: "/living/transportation/ride-apps",
    },
  },
  rideApps: {
    badge: L("Transportation", "การเดินทาง", "交通", "Транспорт"),
    breadcrumbLeaf: L("Grab & Bolt", "Grab & Bolt", "Grab & Bolt", "Grab & Bolt"),
    title: L("Grab & Bolt", "Grab & Bolt", "Grab & Bolt", "Grab & Bolt"),
    subtitle: L(
      "Ride-hailing and delivery in Pattaya — fares, safety, and when to use apps.",
      "เรียกรถและส่งของในพัทยา — ค่าโดยสารและความปลอดภัย",
      "芭提雅网约车与配送——票价、安全与使用场景。",
      "Такси и доставка в Паттайе.",
    ),
    heroAlt: L(
      "Ride-hailing app",
      "แอปเรียกรถ",
      "网约车应用",
      "Приложение для заказа такси",
    ),
    ctaEyebrow: L("Ride Apps", "แอปเรียกรถ", "出行应用", "Приложения"),
    ctaTitle: L("Compare fares before you ride", "เปรียบเทียบราคาก่อนเรียก", "出发前比价", "Сравните цены"),
    ctaBody: L(
      "Open Grab and Bolt for the same pickup — surge varies by zone.",
      "เปิด Grab และ Bolt จุดเดียวกัน — ราคาขึ้นตามโซน",
      "同一上车点对比 Grab 与 Bolt——溢价因区域而异。",
      "Сравните Grab и Bolt в одной точке.",
    ),
    ctaButton: L("Download Grab", "ดาวน์โหลด Grab", "下载 Grab", "Скачать Grab"),
    ctaAriaLabel: L(
      "Grab app download",
      "ดาวน์โหลดแอป Grab",
      "下载 Grab 应用",
      "Скачать приложение Grab",
    ),
    bottomTitle: L("Local transport?", "ขนส่งท้องถิ่น?", "本地交通？", "Местный транспорт?"),
    bottomBody: L(
      "Songthaews are cheapest on main roads; apps win at night.",
      "สองแถวถูกบนถนนหลัก แอปดีกลางคืน",
      "主干道双条车最便宜；夜间宜用 app。",
      "Songthaew днём, apps ночью.",
    ),
    bottomPrimary: {
      label: L("Songthaew guide", "คู่มือสองแถว", "双条车指南", "Songthaew"),
      href: "/living/transportation/songthaew",
    },
  },
  songthaew: {
    badge: L("Transportation", "การเดินทาง", "交通", "Транспорт"),
    breadcrumbLeaf: L("Songthaew", "สองแถว", "双条车", "Songthaew"),
    title: L("Songthaew Guide", "คู่มือสองแถว", "双条车指南", "Songthaew"),
    subtitle: L(
      "Using baht buses along Pattaya's main corridors safely and cheaply.",
      "ใช้สองแถวบนถนนหลักในพัทยาอย่างปลอดภัย",
      "安全经济地使用芭提雅主干道双条车。",
      "Безопасное использование songthaew.",
    ),
    heroAlt: L(
      "Blue songthaew on Pattaya Beach Road",
      "สองแถวสีน้ำเงินบนถนนชายหาดพัทยา",
      "芭提雅海滩路的蓝色双条车",
      "Синий songthaew на Beach Road в Паттайе",
    ),
    ctaEyebrow: L("Local Transport", "ขนส่งท้องถิ่น", "本地交通", "Транспорт"),
    ctaTitle: L("Learn routes & fares", "เรียนรู้เส้นทางและราคา", "了解路线与票价", "Маршруты и цены"),
    ctaBody: L(
      "Press the buzzer to stop; confirm fare before long trips.",
      "กดปุ่มหยุด ตกลงราคาก่อนเดินทางไกล",
      "按铃下车；长途前先确认票价。",
      "Сигнал для остановки; договоритесь о цене.",
    ),
    ctaButton: L("Transit tips", "เคล็ดลับเดินทาง", "出行贴士", "Советы"),
    bottomTitle: L("Prefer AC rides?", "ต้องการรถแอร์?", "想要空调车？", "Нужен кондиционер?"),
    bottomBody: L(
      "Grab and Bolt for late nights and airport runs.",
      "Grab และ Bolt สำหรับดึกและสนามบิน",
      "深夜与机场可选用 Grab/Bolt。",
      "Grab/Bolt ночью и в аэропорт.",
    ),
    bottomPrimary: {
      label: L("Ride apps", "แอปเรียกรถ", "网约车", "Apps"),
      href: "/living/transportation/ride-apps",
    },
  },
  ninetyDay: {
    badge: L("Visa & Immigration", "วีซ่า & ตรวจคนเข้าเมือง", "签证与移民", "Виза"),
    breadcrumbLeaf: L("90-Day Report", "รายงานตัว 90 วัน", "90天报到", "Отчёт 90 дней"),
    title: L("90-Day Reporting", "รายงานตัว 90 วัน", "90天报到", "Отчёт 90 дней"),
    subtitle: L(
      "Mandatory immigration address reporting for long-stay visa holders.",
      "รายงานที่อยู่ทุก 90 วันสำหรับผู้ถือวีซ่าระยะยาว",
      "长期签证持有人须每90天报到地址。",
      "Обязательная отчётность каждые 90 дней.",
    ),
    heroAlt: L(
      "Immigration documents",
      "เอกสารตรวจคนเข้าเมือง",
      "移民文件",
      "Иммиграционные документы",
    ),
    ctaEyebrow: L("Process Guide", "คู่มือขั้นตอน", "流程指南", "Процесс"),
    ctaTitle: L("Never miss a deadline", "ไม่พลาดกำหนด", "不错过截止日期", "Не пропустите срок"),
    ctaBody: L(
      "Online, mail-in, and in-person options in Chonburi.",
      "ออนไลน์ ส่งไปรษณีย์ หรือยื่นด้วยตนใน Chonburi",
      "春武里可网上、邮寄或现场提交。",
      "Онлайн, почта или лично в Чонбури.",
    ),
    ctaButton: L("Reporting guide", "คู่มือรายงานตัว", "报到指南", "Гид"),
    bottomTitle: L("New to TM30?", "เพิ่งรู้จัก TM30?", "不了解 TM30？", "TM30?"),
    bottomBody: L(
      "Landlords must file TM30 when you move in — coordinate with your condo juristic person.",
      "เจ้าของต้องยื่น TM30 เมื่อคุณเข้าพัก",
      "入住时房东须提交 TM30——与物业协调。",
      "Арендодатель подаёт TM30 при заселении.",
    ),
    bottomPrimary: {
      label: L("Rentals guide", "คู่มือเช่า", "租房指南", "Аренда"),
      href: "/living/housing/rentals",
    },
  },
  thailandElite: {
    badge: L("Visa & Immigration", "วีซ่า & ตรวจคนเข้าเมือง", "签证与移民", "Виза"),
    breadcrumbLeaf: L("Thailand Elite", "Thailand Elite", "泰国精英签", "Thailand Elite"),
    title: L("Thailand Elite", "Thailand Elite", "泰国精英签", "Thailand Elite"),
    subtitle: L(
      "5–20 year membership with concierge privileges for high-net-worth residents.",
      "สมาชิก 5–20 ปี พร้อมสิทธิพิเศษระดับคอนเซียร์จ",
      "5–20年会籍与礼宾级特权。",
      "Членство 5–20 лет с привилегиями.",
    ),
    heroAlt: L(
      "Thailand Elite",
      "Thailand Elite",
      "泰国精英签",
      "Thailand Elite",
    ),
    ctaEyebrow: L("Elite Service", "บริการ Elite", "精英服务", "Elite"),
    ctaTitle: L("Compare tiers & apply", "เปรียบเทียบแพ็กเกจและสมัคร", "比较等级并申请", "Сравнить тарифы"),
    ctaBody: L(
      "Document prep and Thailand Privilege Card coordination.",
      "เตรียมเอกสารและประสาน Thailand Privilege Card",
      "文件准备与泰国特权卡协调。",
      "Подготовка документов и Privilege Card.",
    ),
    ctaButton: L("Free consultation", "ปรึกษาฟรี", "免费咨询", "Консультация"),
    ctaAriaLabel: L(
      "Elite membership consultation",
      "ปรึกษาสมาชิก Elite",
      "精英会籍咨询",
      "Консультация по Elite",
    ),
    bottomTitle: L("Concierge residency?", "พำนักแบบคอนเซียร์จ?", "礼宾式居留？", "Консьерж-резиденция?"),
    bottomBody: L(
      "Tier comparison for U-Tapao and Suvarnabhumi frequent travelers.",
      "เปรียบเทียบแพ็กเกจสำหรับผู้เดินทางบ่อย",
      "常飞乌塔保/素万那普的等级对比。",
      "Тарифы для частых путешественников.",
    ),
    bottomPrimary: {
      label: L("Free consultation", "ปรึกษาฟรี", "免费咨询", "Консультация"),
      href: "/living",
    },
  },
  workPermit: {
    badge: L("Visa & Immigration", "วีซ่า & ตรวจคนเข้าเมือง", "签证与移民", "Виза"),
    breadcrumbLeaf: L("Work Permit", "ใบอนุญาตทำงาน", "工作许可", "Work permit"),
    title: L("Work Permit", "ใบอนุญาตทำงาน", "工作许可", "Разрешение на работу"),
    subtitle: L(
      "Employment, business setup, and LTR options in Pattaya and Chonburi.",
      "จ้างงาน จัดตั้งธุรกิจ และ LTR ในพัทยาและชลบุรี",
      "芭提雅与春武里的就业、创业与 LTR。",
      "Работа, бизнес и LTR в регионе.",
    ),
    heroAlt: L(
      "Work permit documents",
      "เอกสารใบอนุญาตทำงาน",
      "工作许可文件",
      "Документы на разрешение на работу",
    ),
    ctaEyebrow: L("Legal Service", "บริการกฎหมาย", "法律服务", "Юристы"),
    ctaTitle: L("Employer sponsorship review", "ตรวจนายจ้างสปอนเซอร์", "雇主担保审核", "Спонсорство"),
    ctaBody: L(
      "Non-B visas, work permits, and BOI/LTR screening for hospitality and tech.",
      "วีซ่า Non-B ใบอนุญาตทำงาน และ BOI/LTR",
      "Non-B、工作许可与 BOI/LTR 筛查。",
      "Non-B, work permit и BOI/LTR.",
    ),
    ctaButton: L("Legal consultation", "ปรึกษากฎหมาย", "法律咨询", "Консультация"),
    ctaAriaLabel: L(
      "Work permit legal consultation",
      "ปรึกษากฎหมายใบอนุญาตทำงาน",
      "工作许可法律咨询",
      "Юридическая консультация по work permit",
    ),
    bottomTitle: L("Chonburi work permit?", "ใบอนุญาตในชลบุรี?", "春武里工签？", "Work permit в Чонбури?"),
    bottomBody: L(
      "Review company ratio, contracts, and Labour Office filings first.",
      "ตรวจอัตราส่วนบริษัท สัญญา และยื่นที่สำนักงานแรงงาน",
      "先审核公司比例、合同与劳工局材料。",
      "Проверьте квоту, договоры и подачу.",
    ),
    bottomPrimary: {
      label: L("Free consultation", "ปรึกษาฟรี", "免费咨询", "Консультация"),
      href: "/living",
    },
  },
  scamAlerts: {
    badge: L("Safety", "ความปลอดภัย", "安全", "Безопасность"),
    breadcrumbLeaf: L("Scam Alerts", "แจ้งเตือนมิจฉาชีพ", "诈骗预警", "Мошенничество"),
    title: L("Scam Alerts", "แจ้งเตือนการโกง", "诈骗预警", "Мошенничество"),
    subtitle: L(
      "Common Pattaya scams — how to spot them and where to report.",
      "การโกงที่พบบ่อยในพัทยา — วิธีสังเกตและแจ้งความ",
      "芭提雅常见骗局——识别与报案。",
      "Распространённые схемы в Паттайе.",
    ),
    heroAlt: L(
      "Pattaya tourist police and safety advisory",
      "ตำรวจท่องเที่ยวพัทยาและคำแนะนำความปลอดภัย",
      "芭提雅旅游警察与安全提示",
      "Туристическая полиция и советы по безопасности в Паттайе",
    ),
    ctaEyebrow: L("Safety Alert", "แจ้งเตือนความปลอดภัย", "安全提示", "Безопасность"),
    ctaTitle: L("Save Tourist Police 1155", "บันทึกตำรวจท่องเที่ยว 1155", "保存旅游警察 1155", "Туристическая полиция 1155"),
    ctaBody: L(
      "Add 1155 and 191 before you need them — English assistance available.",
      "บันทึก 1155 และ 191 ก่อนฉุกเฉิน",
      "紧急前保存 1155 与 191——有英语协助。",
      "Сохраните 1155 и 191 заранее.",
    ),
    ctaButton: L("Emergency contacts", "เบอร์ฉุกเฉิน", "紧急联系", "Экстренные номера"),
    ctaAriaLabel: L(
      "Emergency safety contacts",
      "เบอร์ติดต่อความปลอดภัยฉุกเฉิน",
      "紧急安全联系方式",
      "Экстренные контакты безопасности",
    ),
    bottomTitle: L("Need emergency numbers?", "ต้องการเบอร์ฉุกเฉิน?", "需要紧急号码？", "Экстренные номера?"),
    bottomBody: L(
      "Hospital ER, fire, ambulance, and crisis protocols.",
      "ER ดับเพลิง รถพยาบาล และขั้นตอนวิกฤต",
      "急诊、火警、救护车与危机流程。",
      "Скорая, пожарные и протоколы.",
    ),
    bottomPrimary: {
      label: L("Emergency guide", "คู่มือฉุกเฉิน", "紧急指南", "Экстренный гид"),
      href: "/living/safety/emergency-guide",
    },
  },
  emergencyGuide: {
    badge: L("Safety", "ความปลอดภัย", "安全", "Безопасность"),
    breadcrumbLeaf: L("Emergency", "ฉุกเฉิน", "紧急", "Экстренно"),
    title: L("Emergency Guide", "คู่มือฉุกเฉิน", "紧急指南", "Экстренный гид"),
    subtitle: L(
      "Tourist police, hospitals, and crisis steps for Pattaya residents.",
      "ตำรวจท่องเที่ยว โรงพยาบาล และขั้นตอนวิกฤต",
      "旅游警察、医院与危机处理步骤。",
      "Полиция, больницы и действия при ЧС.",
    ),
    heroAlt: L(
      "Emergency guide",
      "คู่มือฉุกเฉิน",
      "紧急指南",
      "Экстренный гид",
    ),
    ctaEyebrow: L("Emergency", "ฉุกเฉิน", "紧急", "SOS"),
    ctaTitle: L("Save key numbers now", "บันทึกเบอร์สำคัญตอนนี้", "立即保存关键号码", "Сохраните номера"),
    ctaBody: L(
      "1155 tourist police, 191 police, 1669 ambulance — share with family.",
      "1155 191 1669 — แชร์กับครอบครัว",
      "1155、191、1669——告知家人。",
      "1155, 191, 1669 — сообщите семье.",
    ),
    ctaButton: L("Open emergency hub", "เปิดศูนย์ฉุกเฉิน", "打开紧急中心", "Открыть центр"),
    bottomTitle: L("Avoid scams first", "หลีกเลี่ยงมิจฉาชีพ", "先防诈骗", "Избегайте мошенников"),
    bottomBody: L(
      "Read common fraud patterns before a crisis happens.",
      "อ่านรูปแบบการโกงที่พบบ่อย",
      "危机前先了解常见诈骗。",
      "Изучите схемы мошенничества.",
    ),
    bottomPrimary: {
      label: L("Scam alerts", "แจ้งเตือนมิจฉาชีพ", "诈骗预警", "Мошенничество"),
      href: "/living/safety/scam-alerts",
    },
  },
  thaiCulture: {
    badge: L("Culture", "วัฒนธรรม", "文化", "Культура"),
    breadcrumbLeaf: L("Thai Culture", "วัฒนธรรมไทย", "泰国文化", "Культура Таиланда"),
    title: L("Thai Culture", "วัฒนธรรมไทย", "泰国文化", "Тайская культура"),
    subtitle: L(
      "Interactive wai guide, cultural flip cards, festivals, and life in Pattaya.",
      "ไหว้แบบโต้ตอบ การ์ดควรทำ/ไม่ควรทำ เทศกาล และชีวิตในพัทยา",
      "互动合十礼、文化翻转卡、节日与芭提雅生活。",
      "Wai, карточки, праздники и Паттайя.",
    ),
    heroAlt: L(
      "Thai culture",
      "วัฒนธรรมไทย",
      "泰国文化",
      "Тайская культура",
    ),
    ctaEyebrow: L("Culture", "วัฒนธรรม", "文化", "Культура"),
    ctaTitle: L("Integrate with confidence", "ปรับตัวอย่างมั่นใจ", "自信融入", "Интеграция"),
    ctaBody: L(
      "From Songkran to temple visits — what residents should know.",
      "ตั้งแต่สงกรานต์ถึงการเข้าวัด",
      "从宋干节到进庙须知。",
      "От Сонгкрана до визитов в храмы.",
    ),
    ctaButton: L("Etiquette guide", "คู่มือมารยาท", "礼仪指南", "Этикет"),
    bottomTitle: L("Daily etiquette?", "มารยาทในชีวิตประจำวัน?", "日常礼仪？", "Этикет?"),
    bottomBody: L(
      "See the full Do & Don't guide for temples and nightlife.",
      "ดูคู่มือสิ่งควรทำ/ไม่ควรทำ",
      "查看完整礼仪指南。",
      "Полный гид Do & Don't.",
    ),
    bottomPrimary: {
      label: L("Do & Don't", "ควรทำ/ไม่ควรทำ", "礼仪指南", "Do & Don't"),
      href: "/living/culture/etiquette",
    },
  },
  cultureEtiquette: {
    badge: L("Culture & Etiquette", "วัฒนธรรม & มารยาท", "文化与礼仪", "Культура"),
    breadcrumbLeaf: L("Do & Don't", "ควรทำ/ไม่ควรทำ", "礼仪", "Этикет"),
    title: L("Cultural Etiquette", "มารยาทวัฒนธรรม", "文化礼仪", "Этикет"),
    subtitle: L(
      "Respect local values and integrate smoothly as a Pattaya resident.",
      "เคารพค่านิยมท้องถิ่นและอยู่ร่วมกันอย่างกลมกลืน",
      "尊重本地价值观，顺利融入芭提雅。",
      "Уважайте местные ценности.",
    ),
    heroAlt: L(
      "Thai culture and etiquette in Pattaya",
      "วัฒนธรรมและมารยาทไทยในพัทยา",
      "芭提雅的泰国文化与礼仪",
      "Тайская культура и этикет в Паттайе",
    ),
    ctaEyebrow: L("Living", "ไลฟ์สไตล์", "生活", "Жизнь"),
    ctaTitle: L("Living guides", "คู่มือไลฟ์สไตล์", "生活指南", "Гайды"),
    ctaBody: L(
      "Visa, housing, and safety resources in one place.",
      "วีซ่า ที่พัก และความปลอดภัยในที่เดียว",
      "签证、住房与安全资源一站查阅。",
      "Виза, жильё и безопасность в одном месте.",
    ),
    ctaButton: L("Living hub", "ศูนย์ไลฟ์สไตล์", "生活中心", "Хаб"),
    bottomTitle: L("Explore more guides", "สำรวจคู่มือเพิ่ม", "更多指南", "Больше гайдов"),
    bottomBody: L(
      "Visa, housing, safety, and culture for settling in Pattaya.",
      "วีซ่า ที่พัก ความปลอดภัย และวัฒนธรรม",
      "签证、住房、安全与文化。",
      "Виза, жильё, безопасность, культура.",
    ),
  },
} as const satisfies Record<string, ShellDef>;

export type LivingShellKey = keyof typeof shells;

export function getLivingShell(
  lang: LanguageCode,
  key: LivingShellKey,
): LivingShellStrings {
  return resolveShell(lang, shells[key]);
}

export function faqSubtitle(
  lang: LanguageCode,
  topicEn: string,
  topicTh: string,
  topicZh?: string,
  topicRu?: string,
): string {
  const topic = t(lang, L(topicEn, topicTh, topicZh, topicRu));
  if (lang === "th") return `คำถามที่พบบ่อย — ${topic}`;
  if (lang === "zh") return `常见问题 — ${topic}`;
  if (lang === "ru") return `FAQ — ${topic}`;
  return `Frequently asked questions — ${topic}`;
}
