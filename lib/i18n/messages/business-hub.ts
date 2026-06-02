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
  heroFeaturedCategory: {
    en: "Business guides",
    th: "คู่มือธุรกิจ",
    zh: "商业指南",
    ru: "Бизнес-гайды",
  },
  heroFeaturedLabel: {
    en: "Featured",
    th: "แนะนำ",
    zh: "精选",
    ru: "Рекомендуем",
  },
  heroFeaturedTitle: {
    en: "Start a business in Pattaya & the EEC",
    th: "เริ่มธุรกิจในพัทยาและ EEC",
    zh: "在芭提雅与 EEC 创业",
    ru: "Бизнес в Паттайе и EEC",
  },
  heroFeaturedExcerpt: {
    en: "Step-by-step guides for company setup, licenses, and investment context — we link to official sources; we do not book consultants on this site.",
    th: "คู่มือทีละขั้น จดบริษัท ใบอนุญาต และบริบทการลงทุน — ลิงก์แหล่งทางการ Pattaya.com ไม่รับจองที่ปรึกษา",
    zh: "分步指南：公司设立、牌照与投资背景 — 链至官方来源；本站不提供顾问预约。",
    ru: "Пошаговые гайды — ссылки на официальные источники; консультантов не бронируем.",
  },
  heroCtaStart: {
    en: "Start with company setup →",
    th: "เริ่มจากจดบริษัท →",
    zh: "从公司设立开始 →",
    ru: "С регистрации компании →",
  },
  heroImageAlt: {
    en: "Pattaya Business Hub skyline and waterfront",
    th: "เส้นขอบฟ้าธุรกิจพัทยาและริมน้ำ",
    zh: "芭提雅商务中心天际线与海滨",
    ru: "Панорама бизнес-хаба Паттайи",
  },
  investmentSpotlightAlt: {
    en: "Investment spotlight in Pattaya",
    th: "ไฮไลท์การลงทุนในพัทยา",
    zh: "芭提雅投资聚焦",
    ru: "Инвестиционный фокус Паттайи",
  },
  setupTitle: {
    en: "Company Setup & Legal",
    th: "จัดตั้งบริษัท & กฎหมาย",
    zh: "公司设立与法务",
    ru: "Регистрация и право",
  },
  setupSectionTitle: {
    en: "Setting up a company in Pattaya",
    th: "จัดตั้งบริษัทในพัทยา",
    zh: "在芭提雅设立公司",
    ru: "Регистрация компании в Паттайе",
  },
  setupSectionSubtitle: {
    en: "Choose the structure that fits your business, then read the matching guide for steps and paperwork. When your plan is clear, consult a lawyer or BOI advisor to file.",
    th: "เลือกรูปแบบบริษัทที่ตรงกับธุรกิจของคุณ แล้วอ่านคู่มือด้านล่างเพื่อดูขั้นตอนและเอกสารที่ต้องใช้ — เมื่อแผนชัดแล้วค่อยปรึกษาทนายหรือที่ปรึกษา BOI เพื่อยื่นจดทะเบียนจริง",
    zh: "选择适合您业务的类型，阅读下方对应指南了解步骤与材料。计划明确后再咨询律师或 BOI 顾问办理登记。",
    ru: "Выберите форму компании, изучите шаги и документы в гайде ниже. Когда план ясен — к юристу или консультанту BOI для подачи.",
  },
  setupKeyPointsTitle: {
    en: "What to check before filing",
    th: "หัวข้อสำคัญก่อนยื่นจดจริง",
    zh: "正式提交前先确认",
    ru: "Проверьте до подачи",
  },
  setupPointStructure: {
    en: "Pick the right structure for your case (Thai Co., BOI, branch/rep office).",
    th: "เลือกรูปแบบนิติบุคคลให้ตรงเคส (บริษัทไทย, BOI, สาขา/สำนักงานตัวแทน)",
    zh: "先选对结构（泰国公司、BOI、分公司/代表处）。",
    ru: "Выберите форму под кейс (Thai Co., BOI, branch/rep office).",
  },
  setupPointCapital: {
    en: "Check registered capital and work-permit conditions early.",
    th: "เช็กทุนจดทะเบียนและเงื่อนไข work permit ตั้งแต่ต้น",
    zh: "提前确认注册资本与工签条件。",
    ru: "Сразу проверьте капитал и условия work permit.",
  },
  setupPointTimeline: {
    en: "Map timeline from name reservation to VAT and operating licenses.",
    th: "วางไทม์ไลน์ตั้งแต่จองชื่อ จดบริษัท VAT ไปจนถึงใบอนุญาตเปิดกิจการ",
    zh: "规划从核名到 VAT 与营业许可的时间线。",
    ru: "Соберите таймлайн: название → VAT → лицензии.",
  },
  setupPointBudget: {
    en: "Set a startup budget (fees, legal docs, accounting, permits).",
    th: "ตั้งงบเริ่มต้นให้ครบ (ค่าธรรมเนียม เอกสารกฎหมาย บัญชี ใบอนุญาต)",
    zh: "做启动预算（规费、法务、会计、许可证）。",
    ru: "Заложите бюджет на старт (пошлины, юристы, бухгалтерия, лицензии).",
  },
  setupPointDocs: {
    en: "Prepare a separate document checklist for Thai and foreign stakeholders.",
    th: "เตรียมเช็กลิสต์เอกสารแยกฝั่งไทยและต่างชาติ",
    zh: "把泰方与外方文件清单分开准备。",
    ru: "Разделите чеклист документов: тайская и иностранная стороны.",
  },
  setupPointRisk: {
    en: "Review common risk points before paying deposits or signing leases.",
    th: "เช็กจุดพลาดที่พบบ่อยก่อนวางมัดจำหรือเซ็นสัญญาเช่า",
    zh: "签约或付定金前先排查常见风险点。",
    ru: "Проверьте типовые риски до депозита и аренды.",
  },
  setupBadge: {
    en: "Step-by-step guide",
    th: "คู่มือทีละขั้น",
    zh: "分步指南",
    ru: "Пошаговый гайд",
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
    en: "Practical, sector-by-sector playbooks that show what to prepare first, which permits matter, and where most operators get delayed.",
    th: "คู่มือรายอุตสาหกรรมแบบใช้งานจริง บอกว่าควรเตรียมอะไรก่อน ใบอนุญาตไหนสำคัญ และจุดที่ผู้ประกอบการมักติด",
    zh: "按行业拆解的实用手册：先准备什么、哪些许可最关键、以及最常卡关的步骤。",
    ru: "Практичные отраслевые гайды: что готовить сначала, какие лицензии критичны и где чаще всего возникают задержки.",
  },
  industryOperatingGuides: {
    en: "Industry operating guides",
    th: "คู่มือบริหารตามอุตสาหกรรม",
    zh: "行业运营指南",
    ru: "Отраслевые гайды",
  },
  viewAllGuides: {
    en: "View all guides",
    th: "ดูคู่มือทั้งหมด",
    zh: "查看全部指南",
    ru: "Смотреть все гайды",
  },
  restaurantTitle: {
    en: "Restaurant Guide",
    th: "คู่มือร้านอาหาร",
    zh: "餐饮指南",
    ru: "Гид по ресторанам",
  },
  restaurantBadge: {
    en: "Licenses",
    th: "ใบอนุญาต",
    zh: "牌照",
    ru: "Лицензии",
  },
  restaurantExcerpt: {
    en: "For restaurant and café operators: from location fit and kitchen flow to food safety, licensing order, and opening-day readiness.",
    th: "สำหรับร้านอาหารและคาเฟ่ ตั้งแต่เลือกทำเล ผังครัว มาตรฐานอาหาร ไปจนถึงลำดับใบอนุญาตและความพร้อมก่อนเปิดจริง",
    zh: "面向餐厅与咖啡馆：从选址、后厨动线、食品安全到许可顺序与开业准备。",
    ru: "Для ресторанов и кафе: локация, кухня, безопасность, порядок лицензий и готовность к открытию.",
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
    en: "Compliance",
    th: "กฎหมาย",
    zh: "合规",
    ru: "Соответствие",
  },
  barExcerpt: {
    en: "For nightlife venues: zoning, sound control, operating-hour rules, and the legal checks that reduce closure risk.",
    th: "สำหรับบาร์และไนท์ไลฟ์: ผังเมือง การควบคุมเสียง เวลาเปิด-ปิด และเช็กลิสต์กฎหมายเพื่อลดความเสี่ยงโดนสั่งปิด",
    zh: "面向酒吧与夜生活：分区、噪音控制、营业时段与降低停业风险的合规检查。",
    ru: "Для баров и nightlife: зонирование, шум, часы работы и юридические проверки для снижения риска закрытия.",
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
    en: "Licenses",
    th: "ใบอนุญาต",
    zh: "牌照",
    ru: "Лицензии",
  },
  hotelExcerpt: {
    en: "For hotel projects: license stack, EIA checkpoints, and service standards needed before launch and during operations.",
    th: "สำหรับโครงการโรงแรม: ชุดใบอนุญาต จุดตรวจ EIA และมาตรฐานบริการที่ต้องพร้อมก่อนเปิดและระหว่างดำเนินงาน",
    zh: "面向酒店项目：许可组合、EIA 关键节点，以及开业前后必须落实的服务标准。",
    ru: "Для отелей: стек лицензий, контрольные точки EIA и стандарты сервиса до и после запуска.",
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
  economyHeadlineTop: {
    en: "Pattaya Economic",
    th: "สถิติและความเติบโต",
    zh: "芭提雅经济",
    ru: "Экономика Паттайи",
  },
  economyHeadlineBottom: {
    en: "Growth Metrics",
    th: "ทางเศรษฐกิจพัทยา",
    zh: "增长指标",
    ru: "Показатели роста",
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
  networkingHeading: {
    en: "Business Networking Events",
    th: "ตารางกิจกรรมเครือข่ายธุรกิจ",
    zh: "商业社交活动",
    ru: "Бизнес-мероприятия и нетворкинг",
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
    en: "Government-BCCT Site Visit: Ministry of Education to King's College International School",
    th: "Government-BCCT Site Visit: Ministry of Education to King's College International School",
    zh: "政府-BCCT 实地考察：教育部访问 King's College International School",
    ru: "Government-BCCT Site Visit: Ministry of Education to King's College International School",
  },
  event1Location: {
    en: "Policy & Advocacy Call (see organizer for venue details)",
    th: "หมวด Policy & Advocacy (ตรวจสถานที่ล่าสุดจากผู้จัด)",
    zh: "Policy & Advocacy 类别（请以主办方最新场地公告为准）",
    ru: "Категория Policy & Advocacy (уточняйте площадку у организатора)",
  },
  event2Title: {
    en: "STCC Multi-Chamber Networking Night",
    th: "STCC Multi-Chamber Networking Night",
    zh: "STCC 多商会社交之夜",
    ru: "STCC Multi-Chamber Networking Night",
  },
  event2Location: {
    en: "Co-Branded Networking Evening (see organizer for venue details)",
    th: "หมวด Co-Branded Networking Evening (ตรวจสถานที่ล่าสุดจากผู้จัด)",
    zh: "Co-Branded Networking Evening（请以主办方最新场地公告为准）",
    ru: "Категория Co-Branded Networking Evening (уточняйте площадку у организатора)",
  },
  event3Title: {
    en: "BCCT Insight: From Entry to Belonging: Navigating Thailand’s Long-Term Residency Pathways",
    th: "BCCT Insight: From Entry to Belonging: Navigating Thailand’s Long-Term Residency Pathways",
    zh: "BCCT Insight：从入境到归属：泰国长期居留路径",
    ru: "BCCT Insight: From Entry to Belonging: Navigating Thailand’s Long-Term Residency Pathways",
  },
  event3Location: {
    en: "Evening Briefing (see organizer for venue details)",
    th: "หมวด Evening Briefing (ตรวจสถานที่ล่าสุดจากผู้จัด)",
    zh: "Evening Briefing（请以主办方最新场地公告为准）",
    ru: "Категория Evening Briefing (уточняйте площадку у организатора)",
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
    en: "Read how condo rules, foreign quotas, and due diligence work in Chonburi — not a sales listing.",
    th: "อ่านเรื่อง quota ต่างชาติ และ due diligence ในชลบุรี — ไม่ใช่รายการขาย",
    zh: "了解春武里公寓规则、外资配额与尽职调查 — 非销售 listing。",
    ru: "Правила condo и due diligence — не листинг продаж.",
  },
  contactAgent: {
    en: "Read real estate guide →",
    th: "อ่านคู่มืออสังหา →",
    zh: "阅读房地产指南 →",
    ru: "Гид по недвижимости →",
  },
  economyStatDisclaimer: {
    en: "Illustrative figures from public EEC/TAT reports (circa 2024). Confirm sources on the economy overview.",
    th: "ตัวเลขคร่าวๆ จากรายงาน EEC/TAT (ประมาณ 2024) ยืนยันแหล่งที่หน้าภาพรวมเศรษฐกิจ",
    zh: "数字摘自 EEC/TAT 公开报告（约2024年），请在经济概览页核实来源。",
    ru: "Ориентиры из отчётов EEC/TAT (~2024). Источники — на странице экономики.",
  },
  eventsSeeCalendar: {
    en: "See events calendar →",
    th: "ดูปฏิทินอีเวนต์ →",
    zh: "查看活动日历 →",
    ru: "Календарь событий →",
  },
  eventsHubNote: {
    en: "Latest listings are synchronized with the Business Events page. Recheck dates and venue updates before attending.",
    th: "รายการนี้อ้างอิงชุดเดียวกับหน้า Business Events และควรตรวจวัน-สถานที่ล่าสุดจากผู้จัดก่อนเข้าร่วม",
    zh: "本列表与 Business Events 页面同步；参加前请再次核对日期与场地更新。",
    ru: "Список синхронизирован со страницей Business Events; перед участием проверьте актуальные дату и площадку.",
  },
  networkingColEvent: {
    en: "Event",
    th: "อีเวนต์",
    zh: "活动",
    ru: "Событие",
  },
  networkingColFormat: {
    en: "Format",
    th: "รูปแบบ",
    zh: "形式",
    ru: "Формат",
  },
  networkingColVenue: {
    en: "Venue",
    th: "สถานที่",
    zh: "地点",
    ru: "Площадка",
  },
  networkingColAction: {
    en: "Action",
    th: "ดูต่อ",
    zh: "操作",
    ru: "Действие",
  },
  networkingTypeSummit: {
    en: "Policy & Advocacy",
    th: "Policy & Advocacy",
    zh: "政策与倡导",
    ru: "Policy & Advocacy",
  },
  networkingTypeMixer: {
    en: "Co-Branded Networking",
    th: "Co-Branded Networking",
    zh: "联合社交活动",
    ru: "Co-Branded Networking",
  },
  networkingTypeConference: {
    en: "Evening Briefing",
    th: "Evening Briefing",
    zh: "晚间简报",
    ru: "Evening Briefing",
  },
  quickNavSetup: {
    en: "Company setup",
    th: "จัดตั้งบริษัท",
    zh: "公司设立",
    ru: "Регистрация",
  },
  quickNavGuides: {
    en: "Industry guides",
    th: "คู่มืออุตสาหกรรม",
    zh: "行业指南",
    ru: "Отраслевые гайды",
  },
  quickNavEconomy: {
    en: "Economy & EEC",
    th: "เศรษฐกิจ & EEC",
    zh: "经济与 EEC",
    ru: "Экономика и EEC",
  },
  industryGuideCta: {
    en: "Read guide",
    th: "อ่านคู่มือ",
    zh: "阅读指南",
    ru: "Читать гайд",
  },
  quickNavEvents: {
    en: "Events",
    th: "อีเวนต์",
    zh: "活动",
    ru: "События",
  },
  viewEconomyOverview: {
    en: "View Pattaya economy overview →",
    th: "ดูภาพรวมเศรษฐกิจพัทยา →",
    zh: "查看芭提雅经济概览 →",
    ru: "Обзор экономики Паттайи →",
  },
  economyOverviewHint: {
    en: "Open full analysis for these economic stats",
    th: "เปิดหน้าวิเคราะห์เต็มของชุดสถิตินี้",
    zh: "打开这些经济指标的完整分析页",
    ru: "Открыть полный анализ этих экономических показателей",
  },
  economyOverviewCta: {
    en: "Open full Pattaya economy analysis",
    th: "เปิดบทวิเคราะห์เศรษฐกิจพัทยาฉบับเต็ม",
    zh: "打开芭提雅经济完整分析",
    ru: "Открыть полный анализ экономики Паттайи",
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
      cta: pickText(lang, commonUi.readGuide),
      href: "/business/company-setup/thai-company",
      features,
    },
    {
      title: tBusiness(lang, "setup2Title"),
      excerpt: tBusiness(lang, "setup2Excerpt"),
      image: businessImages.boiEec,
      imageAlt: tBusiness(lang, "setup2Title"),
      cta: pickText(lang, commonUi.readGuide),
      href: "/business/company-setup/boi",
      features,
    },
  ];
}

export function getSetupKeyPoints(lang: LanguageCode) {
  return {
    title: tBusiness(lang, "setupKeyPointsTitle"),
    items: [
      tBusiness(lang, "setupPointStructure"),
      tBusiness(lang, "setupPointCapital"),
      tBusiness(lang, "setupPointTimeline"),
      tBusiness(lang, "setupPointBudget"),
      tBusiness(lang, "setupPointDocs"),
      tBusiness(lang, "setupPointRisk"),
    ],
  };
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
      cta: tBusiness(lang, "industryGuideCta"),
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
      cta: tBusiness(lang, "industryGuideCta"),
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
      cta: tBusiness(lang, "industryGuideCta"),
      href: "/business/guide/hotel",
      variant: "light" as const,
      badgePosition: "bottom" as const,
    },
  ];
}

export function getEconomyStats(lang: LanguageCode) {
  return [
    { icon: "visitors", value: "~12M", label: tBusiness(lang, "statVisitors") },
    { icon: "investment", value: "฿1.3T", label: tBusiness(lang, "statInvestment") },
    { icon: "infrastructure", value: "200+", label: tBusiness(lang, "statInfrastructure") },
  ];
}

export function getBusinessQuickNav(lang: LanguageCode) {
  return [
    { id: "company-setup", label: tBusiness(lang, "quickNavSetup"), href: "#company-setup" },
    { id: "industry-guides", label: tBusiness(lang, "quickNavGuides"), href: "#industry-guides" },
    { id: "economy", label: tBusiness(lang, "quickNavEconomy"), href: "#economy" },
    { id: "networking", label: tBusiness(lang, "quickNavEvents"), href: "#networking" },
  ];
}

export function getNetworkingEvents(lang: LanguageCode) {
  const linkLabel = tBusiness(lang, "eventsSeeCalendar");
  return [
    {
      title: tBusiness(lang, "event1Title"),
      location: tBusiness(lang, "event1Location"),
      format: tBusiness(lang, "networkingTypeSummit"),
      href: "https://members.bccthai.com/bcct/asp/eventlist.asp?view=L",
      linkLabel,
    },
    {
      title: tBusiness(lang, "event2Title"),
      location: tBusiness(lang, "event2Location"),
      format: tBusiness(lang, "networkingTypeMixer"),
      href: "https://members.bccthai.com/bcct/asp/eventlist.asp?view=L",
      linkLabel,
    },
    {
      title: tBusiness(lang, "event3Title"),
      location: tBusiness(lang, "event3Location"),
      format: tBusiness(lang, "networkingTypeConference"),
      href: "https://members.bccthai.com/bcct/asp/eventlist.asp?view=L",
      linkLabel,
    },
  ];
}
