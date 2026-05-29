import type { LanguageCode } from "@/lib/i18n/languages";
import { commonUi } from "@/lib/i18n/messages/common";
import { pickText, type LocalizedText } from "@/lib/i18n/text";
import { businessImages } from "@/lib/design/business-images";

const copy = {
  heroTitle: {
    en: "Pattaya Business Hub",
    th: "ศูนย์ธุรกิจพัทยา",
    zh: "芭提雅商务中心",
    ru: "Бизнес-хаб Паттайи",
  },
  heroSubtitle: {
    en: "Your strategic gateway to the Eastern Economic Corridor.",
    th: "ประตูสู่เขตเศรษฐกิจพิเศษภาคตะวันออก (EEC)",
    zh: "通往东部经济走廊的战略门户。",
    ru: "Стратегические ворота в EEC.",
  },
  heroCta: {
    en: "Explore Services",
    th: "ดูบริการทั้งหมด",
    zh: "浏览服务",
    ru: "Все услуги",
  },
  setupTitle: {
    en: "Company Setup & Legal",
    th: "จัดตั้งบริษัท & กฎหมาย",
    zh: "公司设立与法务",
    ru: "Регистрация и право",
  },
  setupSubtitle: {
    en: "End-to-end support for investors entering the EEC.",
    th: "บริการครบวงจรสำหรับนักลงทุนใน EEC",
    zh: "为进入 EEC 的投资者提供全流程支持。",
    ru: "Полный цикл для инвесторов в EEC.",
  },
  setup1Title: {
    en: "Pattaya Company Incorporation",
    th: "จดทะเบียนบริษัทในพัทยา",
    zh: "芭提雅公司注册",
    ru: "Регистрация компании в Паттайе",
  },
  setup1Excerpt: {
    en: "Legal frameworks for local and international entities with full regulatory compliance in the EEC.",
    th: "กรอบกฎหมายสำหรับนิติบุคคลในประเทศและต่างชาติ พร้อมความสอดคล้องกับกฎระเบียบ EEC",
    zh: "本地与外资实体的完整合规法律框架。",
    ru: "Правовые структуры для локальных и иностранных компаний в EEC.",
  },
  setup2Title: {
    en: "BOI & EEC Incentives",
    th: "สิทธิประโยชน์ BOI & EEC",
    zh: "BOI 与 EEC 优惠",
    ru: "Льготы BOI и EEC",
  },
  setup2Excerpt: {
    en: "Tax privileges and property ownership benefits for strategic national projects.",
    th: "สิทธิภาษีและการถือครองอสังหาริมทรัพย์สำหรับโครงการยุทธศาสตร์ชาติ",
    zh: "国家战略项目的税收优惠与产权权益。",
    ru: "Налоговые льготы и права на недвижимость.",
  },
  featureWorkPermit: {
    en: "Corporate registration & work permits",
    th: "จดทะเบียนนิติบุคคลและใบอนุญาตทำงาน",
    zh: "公司注册与工作许可",
    ru: "Регистрация и work permit",
  },
  featureVirtualOffice: {
    en: "Virtual office & workspace sourcing",
    th: "สำนักงานเสมือนและพื้นที่ทำงาน",
    zh: "虚拟办公室与办公空间",
    ru: "Виртуальный офис и коворкинг",
  },
  featureLegalAccounting: {
    en: "International legal & accounting advisors",
    th: "ที่ปรึกษากฎหมายและบัญชีสากล",
    zh: "国际法务与会计顾问",
    ru: "Международные юристы и бухгалтерия",
  },
  industryTitle: {
    en: "Industry Guides",
    th: "คู่มืออุตสาหกรรม",
    zh: "行业指南",
    ru: "Отраслевые гайды",
  },
  industrySubtitle: {
    en: "Sector-specific playbooks for hospitality entrepreneurs.",
    th: "คู่มือเฉพาะสาขาสำหรับผู้ประกอบการบริการ",
    zh: "面向酒店餐饮创业者的行业手册。",
    ru: "Отраслевые руководства для HoReCa.",
  },
  restaurantTitle: {
    en: "Restaurant Guide",
    th: "คู่มือร้านอาหาร",
    zh: "餐饮指南",
    ru: "Гид по ресторанам",
  },
  restaurantBadge: {
    en: "Hot Industry",
    th: "อุตสาหกรรมมาแรง",
    zh: "热门行业",
    ru: "Горячая отрасль",
  },
  restaurantExcerpt: {
    en: "Opening luxury restaurants & cafés: location strategy and international food safety standards.",
    th: "เปิดร้านอาหารและคาเฟ่ลักชูรี: ทำเลและมาตรฐานความปลอดภัยอาหารสากล",
    zh: "开设高端餐厅与咖啡馆：选址与国际食品安全标准。",
    ru: "Рестораны и кафе: локация и стандарты безопасности.",
  },
  restaurantCheck1: {
    en: "Health permit checklist",
    th: "เช็กลิสต์ใบอนุญาตสุขภาพ",
    zh: "卫生许可清单",
    ru: "Чеклист санитарного разрешения",
  },
  restaurantCheck2: {
    en: "Alcohol license guide",
    th: "คู่มือใบอนุญาตขายสุรา",
    zh: "酒类牌照指南",
    ru: "Гид по алкогольной лицензии",
  },
  barTitle: {
    en: "Bar & Nightlife",
    th: "บาร์ & ไนท์ไลฟ์",
    zh: "酒吧与夜生活",
    ru: "Бары и ночная жизнь",
  },
  barBadge: {
    en: "Elite Zone",
    th: "โซนเอลิท",
    zh: "精英区",
    ru: "Elite Zone",
  },
  barExcerpt: {
    en: "Entertainment venue compliance: sound limits and operating hours under current law.",
    th: "กฎหมายสถานบันเทิง: เสียงและเวลาเปิด-ปิดตามกฎหมายใหม่",
    zh: "娱乐场所合规：噪音与营业时间新规。",
    ru: "Соответствие клубов: шум и часы работы.",
  },
  barCheck1: {
    en: "Zoning regulations",
    th: "กฎผังเมือง",
    zh: "分区法规",
    ru: "Зонирование",
  },
  barCheck2: {
    en: "Music copyright info",
    th: "ลิขสิทธิ์เพลง",
    zh: "音乐版权说明",
    ru: "Авторские права на музыку",
  },
  hotelTitle: {
    en: "Hotel Industry",
    th: "อุตสาหกรรมโรงแรม",
    zh: "酒店业",
    ru: "Гостиничный бизнес",
  },
  hotelBadge: {
    en: "High ROI",
    th: "ผลตอบแทนสูง",
    zh: "高回报",
    ru: "Высокий ROI",
  },
  hotelExcerpt: {
    en: "Tourism real estate: hotel licenses and 5-star service standards.",
    th: "ลงทุนโรงแรม: ใบอนุญาตและมาตรฐานบริการ 5 ดาว",
    zh: "旅游地产：酒店牌照与五星级服务标准。",
    ru: "Отели: лицензии и стандарты 5*.",
  },
  hotelCheck1: {
    en: "EIA standards",
    th: "มาตรฐาน EIA",
    zh: "环评标准",
    ru: "Стандарты EIA",
  },
  hotelCheck2: {
    en: "Hotel license flow",
    th: "ขั้นตอนใบอนุญาตโรงแรม",
    zh: "酒店牌照流程",
    ru: "Лицензирование отеля",
  },
  economyTitle: {
    en: "Pattaya Economy at a Glance",
    th: "ภาพรวมเศรษฐกิจพัทยา",
    zh: "芭提雅经济一览",
    ru: "Экономика Паттайи",
  },
  statVisitors: {
    en: "Annual Visitors",
    th: "นักท่องเที่ยวต่อปี",
    zh: "年游客量",
    ru: "Туристов в год",
  },
  statRealEstate: {
    en: "Real Estate Growth (YoY)",
    th: "อสังหาริมทรัพย์ (YoY)",
    zh: "房地产增长（同比）",
    ru: "Рост недвижимости (г/г)",
  },
  statInvestment: {
    en: "EEC Investment Value",
    th: "มูลค่าลงทุน EEC",
    zh: "EEC 投资规模",
    ru: "Инвестиции EEC",
  },
  statInfrastructure: {
    en: "Infrastructure Projects",
    th: "โครงการโครงสร้างพื้นฐาน",
    zh: "基础设施项目",
    ru: "Инфраструктурные проекты",
  },
  statGdp: {
    en: "EEC GDP Share (Thailand)",
    th: "สัดส่วน GDP EEC",
    zh: "EEC 占泰国 GDP",
    ru: "Доля GDP EEC",
  },
  statIndustrial: {
    en: "Industrial Estate Zones",
    th: "นิคมอุตสาหกรรม",
    zh: "工业园区域",
    ru: "Промзоны",
  },
  networkingTitle: {
    en: "Networking & Events",
    th: "เน็ตเวิร์ก & อีเวนต์",
    zh: "人脉与活动",
    ru: "Нетворкинг и события",
  },
  networkingSubtitle: {
    en: "Connect with investors, operators, and policymakers.",
    th: "เชื่อมต่อนักลงทุน ผู้ประกอบการ และภาครัฐ",
    zh: "连接投资者、经营者与政策制定者。",
    ru: "Инвесторы, операторы и регуляторы.",
  },
  viewAllEvents: {
    en: "View All Events →",
    th: "ดูอีเวนต์ทั้งหมด →",
    zh: "查看全部活动 →",
    ru: "Все события →",
  },
  event1Title: {
    en: "Pattaya EEC Investment Summit",
    th: "Pattaya EEC Investment Summit",
    zh: "芭提雅 EEC 投资峰会",
    ru: "Саммит инвестиций EEC",
  },
  event1Location: {
    en: "Royal Cliff Grand Hotel, Pattaya",
    th: "Royal Cliff Grand Hotel, Pattaya",
    zh: "芭提雅 Royal Cliff Grand",
    ru: "Royal Cliff Grand, Паттайя",
  },
  event2Title: {
    en: "Business After Hours: Networking Night",
    th: "Business After Hours",
    zh: "商务夜话：社交之夜",
    ru: "Business After Hours",
  },
  event2Location: {
    en: "Hilton Pattaya - Horizon Rooftop",
    th: "Hilton Pattaya - Horizon Rooftop",
    zh: "希尔顿芭提雅 Horizon 屋顶",
    ru: "Hilton Pattaya — Horizon",
  },
  event3Title: {
    en: "Digital Nomad & Tech Hub Conference",
    th: "Digital Nomad & Tech Hub Conference",
    zh: "数字游民与科技中心大会",
    ru: "Конференция digital nomads",
  },
  event3Location: {
    en: "Pattaya City Hall - Convention Center",
    th: "ศาลากลางจังหวัดชลบุรี - Pattaya",
    zh: "芭提雅市政厅会议中心",
    ru: "City Hall — Convention Center",
  },
  specialProject: {
    en: "Special Project",
    th: "โครงการพิเศษ",
    zh: "特别项目",
    ru: "Спецпроект",
  },
  investmentSpotlightTitle: {
    en: "EEC Investment Spotlight: Laem Chabang Phase 3",
    th: "EEC Investment Spotlight: แหลมฉบัง เฟส 3",
    zh: "EEC 投资聚焦：林查班三期",
    ru: "EEC: Laem Chabang, фаза 3",
  },
  realEstateTitle: {
    en: "Real Estate Opportunity",
    th: "โอกาสอสังหาริมทรัพย์",
    zh: "房地产投资机会",
    ru: "Недвижимость",
  },
  realEstateExcerpt: {
    en: "Premium portfolios: beachfront condos and luxury villas with stable returns.",
    th: "พอร์ตพรีเมียม คอนโดติดทะเลและวิลล่าหรู พร้อมผลตอบแทนที่มั่นคง",
    zh: "高端组合：海景公寓与豪华别墅，回报稳健。",
    ru: "Премиум-портфель: кондо у моря и виллы.",
  },
  contactAgent: {
    en: "Contact partner agent",
    th: "ติดต่อพาร์ทเนอร์เอเจนท์",
    zh: "联系合作经纪",
    ru: "Связаться с агентом",
  },
  viewEconomyOverview: {
    en: "View Pattaya economy overview →",
    th: "ดูภาพรวมเศรษฐกิจพัทยา →",
    zh: "查看芭提雅经济概览 →",
    ru: "Обзор экономики Паттайи →",
  },
} satisfies Record<string, LocalizedText>;

export function tBusiness(lang: LanguageCode, key: keyof typeof copy): string {
  return pickText(lang, copy[key]);
}

function setupFeatures(lang: LanguageCode) {
  return [
    tBusiness(lang, "featureWorkPermit"),
    tBusiness(lang, "featureVirtualOffice"),
    tBusiness(lang, "featureLegalAccounting"),
  ];
}

export function getSetupCards(lang: LanguageCode) {
  const features = setupFeatures(lang);
  return [
    {
      title: tBusiness(lang, "setup1Title"),
      excerpt: tBusiness(lang, "setup1Excerpt"),
      image: businessImages.incorporation,
      imageAlt: tBusiness(lang, "setup1Title"),
      cta: pickText(lang, commonUi.contactLawFirm),
      href: "/business/company-setup/thai-company",
      features,
    },
    {
      title: tBusiness(lang, "setup2Title"),
      excerpt: tBusiness(lang, "setup2Excerpt"),
      image: businessImages.boiEec,
      imageAlt: tBusiness(lang, "setup2Title"),
      cta: pickText(lang, commonUi.boiConsulting),
      href: "/business/company-setup/boi",
      features,
    },
  ];
}

export type IndustryGuideItem = {
  title: string;
  badge: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  checklist: string[];
  cta: string;
  href: string;
  variant: "light" | "dark";
  badgePosition?: "top" | "bottom";
};

export function getIndustryGuides(lang: LanguageCode): IndustryGuideItem[] {
  return [
    {
      title: tBusiness(lang, "restaurantTitle"),
      badge: tBusiness(lang, "restaurantBadge"),
      excerpt: tBusiness(lang, "restaurantExcerpt"),
      image: businessImages.restaurant,
      imageAlt: tBusiness(lang, "restaurantTitle"),
      checklist: [
        tBusiness(lang, "restaurantCheck1"),
        tBusiness(lang, "restaurantCheck2"),
      ],
      cta: pickText(lang, commonUi.downloadGuide),
      href: "/business/guide/restaurant",
      variant: "light" as const,
    },
    {
      title: tBusiness(lang, "barTitle"),
      badge: tBusiness(lang, "barBadge"),
      excerpt: tBusiness(lang, "barExcerpt"),
      image: businessImages.nightlife,
      imageAlt: tBusiness(lang, "barTitle"),
      checklist: [
        tBusiness(lang, "barCheck1"),
        tBusiness(lang, "barCheck2"),
      ],
      cta: pickText(lang, commonUi.bookConsultation),
      href: "/business/guide/bar",
      variant: "dark" as const,
    },
    {
      title: tBusiness(lang, "hotelTitle"),
      badge: tBusiness(lang, "hotelBadge"),
      excerpt: tBusiness(lang, "hotelExcerpt"),
      image: businessImages.hotel,
      imageAlt: tBusiness(lang, "hotelTitle"),
      checklist: [
        tBusiness(lang, "hotelCheck1"),
        tBusiness(lang, "hotelCheck2"),
      ],
      cta: pickText(lang, commonUi.downloadGuide),
      href: "/business/guide/hotel",
      variant: "light" as const,
      badgePosition: "bottom" as const,
    },
  ];
}

export function getEconomyStats(lang: LanguageCode) {
  return [
    { icon: "👥", value: "12M+", label: tBusiness(lang, "statVisitors") },
    { icon: "📈", value: "+18%", label: tBusiness(lang, "statRealEstate") },
    { icon: "💰", value: "฿1.3T", label: tBusiness(lang, "statInvestment") },
    { icon: "🏗️", value: "200+", label: tBusiness(lang, "statInfrastructure") },
    { icon: "📊", value: "14%", label: tBusiness(lang, "statGdp") },
    { icon: "🏭", value: "30+", label: tBusiness(lang, "statIndustrial") },
  ];
}

export function getNetworkingEvents(lang: LanguageCode) {
  return [
    {
      day: "24",
      month: "OCT",
      year: "2024",
      title: tBusiness(lang, "event1Title"),
      location: tBusiness(lang, "event1Location"),
      href: "/business/networking/events",
    },
    {
      day: "12",
      month: "NOV",
      year: "2024",
      title: tBusiness(lang, "event2Title"),
      location: tBusiness(lang, "event2Location"),
      href: "/business/networking/events",
    },
    {
      day: "05",
      month: "DEC",
      year: "2024",
      title: tBusiness(lang, "event3Title"),
      location: tBusiness(lang, "event3Location"),
      href: "/business/networking/events",
    },
  ];
}
