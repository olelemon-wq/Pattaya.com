import { L } from "@/lib/i18n/living-helpers";
import type { BusinessPageCopy } from "@/lib/i18n/messages/business-detail/pages";

export const businessPageCopyRest: Record<
  "bar" | "hotel" | "real-estate" | "economy" | "events",
  BusinessPageCopy
> = {
  bar: {
    heroAlt: L("Pattaya nightlife venue", "สถานที่ไนท์ไลฟ์พัทยา", "芭提雅夜生活场所", "Заведение nightlife в Паттайе"),
    badge: L("Elite Zone", "โซนพรีเมียม", "精英区", "Премиум-зона"),
    breadcrumb: L("Bar Business", "ธุรกิจบาร์", "酒吧商业", "Барный бизнес"),
    title: L("Bar & Nightlife", "เปิดบาร์", "酒吧与夜生活", "Бары и nightlife"),
    description: L(
      "Entertainment venue management — sound limits, operating hours, and licensing under current Thai regulations.",
      "บริหารสถานบันเทิง — ขีดจำกัดเสียง เวลาเปิด-ปิด และใบอนุญาตตามกฎหมายไทยปัจจุบัน",
      "娱乐场所管理——现行泰国法规下的噪音限制、营业时间与许可。",
      "Управление развлекательным заведением — лимиты шума, часы работы и лицензирование по действующим нормам Таиланда.",
    ),
    cta: {
      eyebrow: L("Nightlife Compliance", "Compliance ไนท์ไลฟ์", "夜生活合规", "Compliance nightlife"),
      title: L("Book a consultant", "นัดคุยที่ปรึกษา", "预约顾问", "Записаться к консультанту"),
      body: L(
        "Zoning review, entertainment license timeline, and music copyright (MCT) guidance for live DJs and venues.",
        "ตรวจโซoning ไทม์ไลน์ใบอนุญาตบันเทิง และคำแนะนำลิขสิทธิ์เพลง (MCT) สำหรับ DJ และ venue",
        "分区审查、娱乐许可时间表及现场 DJ 与场地的音乐版权（MCT）指导。",
        "Проверка зонирования, сроки entertainment license и авторские права (MCT) для DJ и площадок.",
      ),
      button: L("Bar opening consultation", "ปรึกษาเปิดบาร์", "酒吧开业咨询", "Консультация по открытию бара"),
    },
    overview: {
      title: L("Operating after regulatory updates", "ดำเนินการหลังอัปเดตกฎหมาย", "法规更新后的经营", "Работа после обновления нормативов"),
      body: L(
        "Pattaya nightlife spans beach clubs, rooftop bars, and late-night districts. Operators must balance tourism demand with municipal noise ordinances, fire occupancy limits, and accurate reporting for entertainment tax categories.",
        "ไนท์ไลฟ์พัทยาครอบคลุม beach club บาร์ดาดฟ้า และย่านดึก ผู้ประกอบการต้องสมดุลความต้องการท่องเที่ยวกับ ordinance เสียงเทศบาล ขีดจำกัดผู้เข้าพักจากไฟไหม้ และรายงานภาษีบันเทิงที่ถูกต้อง",
        "芭提雅夜生活涵盖海滩俱乐部、屋顶酒吧与深夜街区。经营者需在旅游需求、市政噪音条例、消防容量及娱乐税分类申报间取得平衡。",
        "Nightlife Паттайи — beach clubs, rooftop bars и ночные районы. Нужен баланс спроса туристов, шумовых ordinance, пожарной вместимости и отчётности по entertainment tax.",
      ),
    },
    steps: {
      title: L("Compliance path", "เส้นทาง compliance", "合规路径", "Путь compliance"),
      items: [
        {
          title: L("Zoning & premises", "โซoning และสถานที่", "分区与 premises", "Зонирование и помещение"),
          description: L(
            "Confirm entertainment zoning, lease clauses on hours, and neighbor buffers in residential adjacency.",
            "ยืนยันโซoning บันเทิง ข้อสัญญาเช่าเรื่องเวลา และ buffer กับเพื่อนบ้านในพื้นที่อยู่อาศัย",
            "确认娱乐分区、租约中的营业时间条款及邻近住宅的缓冲要求。",
            "Подтвердите entertainment zoning, часы в аренде и буферы к жилым соседям.",
          ),
        },
        {
          title: L("Licenses stack", "ชั้นใบอนุญาต", "许可叠加", "Стек лицензий"),
          description: L(
            "Trade license, อย. if serving food, alcohol license tier, and entertainment permit where applicable.",
            "ใบอนุญาตการค้า อย. หากเสิร์ฟอาหาร ระดับใบอนุญาตแอลกอฮอล์ และใบอนุญาตบันเทิงตามความเหมาะสม",
            "营业许可、如供餐则需 อย.、酒类许可等级及适用的娱乐许可。",
            "Торговая лицензия, อย. при еде, уровень алкогольной лицензии и entertainment permit.",
          ),
        },
        {
          title: L("Sound & safety", "เสียงและความปลอดภัย", "声音与安全", "Звук и безопасность"),
          description: L(
            "Decibel monitoring, crowd capacity, and security staffing plans for peak nights.",
            "ตรวจ decibel ความจุ และแผนรปภ. คืนพีค",
            "分贝监测、 crowd 容量及高峰夜安保人员计划。",
            "Мониторинг decibel, вместимость и план охраны в пиковые ночи.",
          ),
        },
        {
          title: L("Copyright & media", "ลิขสิทธิ์และสื่อ", "版权与媒体", "Авторские права и медиа"),
          description: L(
            "MCT licenses for recorded and live music; guest DJ contracts and liability coverage.",
            "ใบอนุญาต MCT สำหรับเพลงบันทึกและสด สัญญา guest DJ และประกันความรับผิด",
            "录制与现场音乐的 MCT 许可；客座 DJ 合同与责任保险。",
            "Лицензии MCT на запись и live; контракты guest DJ и страхование ответственности.",
          ),
        },
      ],
    },
    checklist: {
      title: L("Pre-opening checklist", "เช็กลิสต์ก่อนเปิด", "开业前清单", "Чеклист перед открытием"),
      items: [
        L("Zoning regulations confirmation letter", "หนังสือยืนยันกฎโซoning", "分区规定确认函", "Письмо подтверждения зонирования"),
        L("Music copyright (MCT) registration", "จดทะเบียนลิขสิทธิ์เพลง (MCT)", "音乐版权（MCT）登记", "Регистрация авторских прав (MCT)"),
        L("Alcohol storage and service training logs", "บันทึกการเก็บและเสิร์ฟแอลกอฮอล์", "酒类储存与服务培训记录", "Журналы хранения и подачи алкоголя"),
        L("Fire extinguisher layout and emergency exits signed off", "ผังถังดับเพลิงและทางออกฉุกเฉินผ่านการตรวจ", "灭火器布局与紧急出口验收", "Схема огнетушителей и одобренные аварийные выходы"),
        L("Staff ID and work permits for foreign managers", "บัตรพนักงานและใบอนุญาตทำงานผู้จัดการต่างชาติ", "外籍经理的员工证与工作证", "ID и work permit для иностранных менеджеров"),
      ],
    },
    highlights: {
      title: L("Risk areas we review", "จุดเสี่ยงที่เราตรวจ", "我们审查的风险点", "Зоны риска, которые мы проверяем"),
      items: [
        {
          title: L("Hours & curfews", "เวลาและ curfew", "营业时间与宵禁", "Часы и curfew"),
          description: L("District-specific closing times and special event permits.", "เวลาปิดตามเขตและใบอนุญาตกิจกรรมพิเศษ", "各区域关门时间及特别活动许可。", "Время закрытия по районам и разрешения на special events."),
        },
        {
          title: L("Tourism police liaison", "ประสานตำรวจท่องเที่ยว", "旅游警察联络", "Связь с tourism police"),
          description: L("Incident response and guest conduct policies.", "ตอบสนองเหตุการณ์และนโยบายพฤติกรรมแขก", "事件响应与客人行为政策。", "Реагирование на инциденты и правила поведения гостей."),
        },
        {
          title: L("Cash & POS", "เงินสดและ POS", "现金与 POS", "Наличные и POS"),
          description: L("VAT registration, receipt compliance, and tip pooling rules.", "จด VAT ใบเสร็จถูกต้อง และกฎแบ่งทิป", "VAT 登记、收据合规及小费分配规则。", "Регистрация VAT, чеки и правила распределения чаевых."),
        },
      ],
    },
    related: [
      { label: L("Restaurant Guide", "คู่มือร้านอาหาร", "餐厅指南", "Гид по ресторанам"), blurb: L("Kitchen-led venues with bar components", "venue ที่ครัวเป็นหลักพร้อมบาร์", "以厨房为主、含酒吧的 venue", "Заведения с кухней и барной зоной") },
      { label: L("Hotel Business Guide", "คู่มือธุรกิจโรงแรม", "酒店商业指南", "Гид по отелям"), blurb: L("Lobby bars inside licensed hotels", "ล็obby bar ในโรงแรมที่มีใบอนุญาต", "持证酒店内的大堂酒吧", "Lobby bars в лицензированных отелях") },
      { label: L("Business Hub", "ศูนย์ธุรกิจ", "商业中心", "Бизнес-хаб"), blurb: L("Networking nights for operators", "คืนเครือข่ายสำหรับผู้ประกอบการ", "经营者社交之夜", "Networking-вечера для операторов") },
    ],
  },
  hotel: {
    heroAlt: L("Luxury hotel lobby in Pattaya", "ล็obby โรงแรมหรูในพัทยา", "芭提雅豪华酒店大堂", "Лобби роскошного отеля в Паттайе"),
    badge: L("High ROI", "ROI สูง", "高 ROI", "Высокий ROI"),
    breadcrumb: L("Hotel Business", "ธุรกิจโรงแรม", "酒店商业", "Отельный бизнес"),
    title: L("Hotel Industry", "โรงแรม", "酒店行业", "Отельная индустрия"),
    description: L(
      "Tourism real estate investment — hotel licenses, service standards, and environmental approvals for coastal projects.",
      "ลงทุนอสังหาริมทรัพย์การท่องเที่ยว — ใบอนุญาตโรงแรม มาตรฐานบริการ และการอนุมัติสิ่งแวดล้อมสำหรับโครงการริมชายฝั่ง",
      "旅游地产投资——酒店许可、服务标准及沿海项目的环境审批。",
      "Инвестиции в туристическую недвижимость — лицензии отелей, стандарты сервиса и экологические согласования для прибрежных проектов.",
    ),
    cta: {
      eyebrow: L("Hospitality Investment", "การลงทุนด้านการบริการ", " hospitality 投资", "Инвестиции в hospitality"),
      title: L("Download the full guide", "ดาวน์โหลดคู่มือฉบับเต็ม", "下载完整指南", "Скачать полный гид"),
      body: L(
        "EIA triggers, hotel license flow, and operator agreements for condo-hotel and full-service assets.",
        "เกณฑ์ EIA ขั้นตอนใบอนุญาตโรงแรม และสัญญาผู้บริหารสำหรับ condo-hotel และ full-service",
        "EIA 触发条件、酒店许可流程及 condo-hotel 与全服务资产的运营协议。",
        "Триггеры EIA, процесс hotel license и договоры операторов для condo-hotel и full-service.",
      ),
      button: L("Request hotel guide", "ขอคู่มือโรงแรม", "索取酒店指南", "Запросить отельный гид"),
    },
    overview: {
      title: L("Hospitality asset classes", "ประเภทสินทรัพย์ hospitality", " hospitality 资产类别", "Классы hospitality-активов"),
      body: L(
        "From boutique beach resorts to high-rise condo-hotels, each model triggers different licensing (โรงแรม vs อพาร์ทเมนท์), foreign quota rules, and fire/life-safety tiers. EEC-linked projects may bundle BOI benefits with larger capex and staffing plans.",
        "จากรีสอร์ทชายหาดบูติกถึง condo-hotel สูง แต่ละรูปแบมมีใบอนุญาตต่างกัน (โรงแรม vs อพาร์ทเมนท์) โควตาต่างชาติ และระดับความปลอดภัยจากไฟ โครงการ EEC อาจรวมสิทธิ BOI กับ capex และแผนบุคลากรที่ใหญ่ขึ้น",
        "从精品海滩度假村到高层 condo-hotel，各模式触发不同许可（โรงแรม vs อพาร์ทเมนท์）、外资配额及消防等级。EEC 项目可捆绑 BOI 优惠与更大资本与人员计划。",
        "От boutique beach resort до condo-hotel в высотке — разные лицензии (โรงแรม vs อพาร์ทเมนท์), квоты и уровни пожарной безопасности. Проекты EEC могут включать BOI с большим capex и штатом.",
      ),
    },
    steps: {
      title: L("Hotel license flow", "ขั้นตอนใบอนุญาตโรงแรม", "酒店许可流程", "Процесс hotel license"),
      items: [
        {
          title: L("Feasibility & structure", "ความเป็นไปได้และโครงสร้าง", "可行性与结构", "Feasibility и структура"),
          description: L(
            "Room count, average daily rate assumptions, and land title review (Chanote, condo regime).",
            "จำนวนห้อง สมมติฐาน ADR และตรวจโฉนด (โฉนดที่ดิน นิติบุคคลคอนโด)",
            "房间数、ADR 假设及产权审查（Chanote、 condo 制度）。",
            "Количество номеров, ADR и проверка title (Chanote, condo regime).",
          ),
        },
        {
          title: L("EIA & construction", "EIA และก่อสร้าง", "EIA 与施工", "EIA и строительство"),
          description: L(
            "Environmental impact for large footprints; building permits and hospitality-grade MEP.",
            "ผลกระทบสิ่งแวดล้อมสำหรับโครงการใหญ่ ใบอนุญาตก่อสร้าง และ MEP ระดับ hospitality",
            "大型项目环境影响；建筑许可及 hospitality 级 MEP。",
            "Экологическое воздействие для крупных объектов; разрешения и MEP hospitality-класса.",
          ),
        },
        {
          title: L("Tourism authority licensing", "ใบอนุญาตการท่องเที่ยว", "旅游部门许可", "Лицензирование tourism authority"),
          description: L(
            "Hotel registration, star classification pathway, and TAT marketing compliance.",
            "จดทะเบียนโรงแรม เส้นทางดาว และ compliance การตลาด TAT",
            "酒店登记、星级评定路径及 TAT 营销合规。",
            "Регистрация отеля, путь star classification и compliance маркетинга TAT.",
          ),
        },
        {
          title: L("Operations & brand", "ปฏิบัติการและแบรนด์", "运营与品牌", "Операции и бренд"),
          description: L(
            "Management contracts, OTA distribution, and SOPs for 5-star service audits.",
            "สัญญาบริหาร OTA และ SOP สำหรับ audit บริการ 5 ดาว",
            "管理合同、OTA 分销及五星服务审计 SOP。",
            "Management contracts, OTA и SOP для аудитов 5-star сервиса.",
          ),
        },
      ],
    },
    checklist: {
      title: L("EIA & permit standards", "มาตรฐาน EIA และใบอนุญาต", "EIA 与许可标准", "Стандарты EIA и разрешений"),
      items: [
        L("EIA standards for projects above threshold room keys", "มาตรฐาน EIA สำหรับโครงการเกินเกณฑ์ห้อง", "超过房间门槛项目的 EIA 标准", "Стандарты EIA для проектов выше порога ключей"),
        L("Hotel license flow with provincial tourism office", "ขั้นตอนใบอนุญาตโรงแรมกับสำนักงานการท่องเที่ยวจังหวัด", "与省旅游局的酒店许可流程", "Hotel license через provincial tourism office"),
        L("Fire suppression and elevator inspection schedule", "ตารางดับเพลิงและตรวจลิฟต์", "消防与电梯检查时间表", "График пожаротушения и инспекции лифтов"),
        L("Pool and beach safety SOPs for insurers", "SOP สระและชายหาดสำหรับประกัน", "供保险公司用的泳池与海滩安全 SOP", "SOP бассейна и пляжа для страховщиков"),
        L("Foreign room quota reporting for condo-hotels", "รายงานโควตาห้องต่างชาติ condo-hotel", "condo-hotel 外籍房间配额报告", "Отчётность foreign room quota для condo-hotel"),
      ],
    },
    highlights: {
      title: L("Investment lens", "มุมมองการลงทุน", "投资视角", "Инвестиционный взгляд"),
      items: [
        {
          title: L("RevPAR drivers", "ปัจจัย RevPAR", "RevPAR 驱动因素", "Драйверы RevPAR"),
          description: L("Convention demand, weekend Bangkok getaways, and international route recovery.", "ความต้องการ convention วันหยุดจากกรุงเทพ และเส้นทางระหว่างประเทศ", "会议需求、曼谷周末度假及国际航线恢复。", "Convention, выезды из Бангкока и восстановление международных маршрутов."),
        },
        {
          title: L("Operator selection", "เลือกผู้บริหาร", "选择运营商", "Выбор оператора"),
          description: L("Franchise vs independent — fee stacks and reservation system integration.", "Franchise vs independent — ค่าธรรมเนียมและระบบจอง", "加盟 vs 独立——费用结构与预订系统集成。", "Franchise vs independent — fee stacks и интеграция бронирования."),
        },
        {
          title: L("Exit liquidity", "สภาพคล่องขายออก", "退出流动性", "Ликвидность выхода"),
          description: L("Strata title resale rules and institutional buyer appetite in Chonburi.", "กฎขาย strata title และความสนใจผู้ซื้อสถาบันในชลบุรี", "分层产权转售规则及春武里机构买家兴趣。", "Правила перепродажи strata title и спрос институционалов в Чонбури."),
        },
      ],
    },
    related: [
      { label: L("Property Investment", "ลงทุนอสังหา", "房产投资", "Инвестиции в недвижимость"), blurb: L("Acquisition and yield benchmarks", "เกณฑ์ซื้อและ yield", "收购与收益基准", "Бенчмарки покупки и yield") },
      { label: L("BOI Promotion", "สิทธิ BOI", "BOI 促进", "Льготы BOI"), blurb: L("Incentives for large hospitality capex", "สิ่งจูงใจ capex hospitality ใหญ่", "大型 hospitality 资本激励", "Льготы для крупного hospitality capex") },
      { label: L("Main Beaches", "ชายหาดหลัก", "主要海滩", "Главные пляжи"), blurb: L("Location context for beachfront assets", "บริบททำเลสำหรับทรัพย์ริมหาด", "海滨资产的位置背景", "Контекст локации для beachfront-активов") },
    ],
  },
  "real-estate": {
    heroAlt: L("Pattaya real estate and investment skyline", "สkyline อสังหาและการลงทุนพัทยา", "芭提雅房产投资天际线", "Skyline недвижимости и инвестиций Паттайи"),
    badge: L("Investment", "การลงทุน", "投资", "Инвестиции"),
    breadcrumb: L("Property Investment", "ลงทุนอสังหา", "房产投资", "Инвестиции в недвижимость"),
    title: L("Property Investment", "ลงทุนอสังหา", "房产投资", "Инвестиции в недвижимость"),
    description: L(
      "Access premium beachfront condos and hillside villas with transparent yield modelling and vetted agency partners.",
      "เข้าถึงคอนโดริมหาดพรีเมียมและวilla บนเนินเขา พร้อมโมเดล yield โปร่งใสและพาร์ทเนอร์เอเจนท์ที่คัดแล้ว",
      "获取优质海滨公寓与山坡别墅，透明收益模型及经审核的代理伙伴。",
      "Премиум beachfront condos и виллы на холмах с прозрачным yield-моделированием и проверенными агентами.",
    ),
    cta: {
      eyebrow: L("Real Estate Opportunity", "โอกาสอสังหา", "房地产机会", "Возможность недвижимости"),
      title: L("Contact agent partners", "ติดต่อพาร์ทเนอร์เอเจนท์", "联系代理伙伴", "Связаться с агентами"),
      body: L(
        "Off-plan vs resale, foreign quota checks, and rental management introductions for Jomtien, Pratumnak, and Wong Amat.",
        "Off-plan vs มือสอง ตรวจโควตาต่างชาติ และแนะนำบริหารเช่าสำหรับจอมเทียน พระตำหนัก และวงอamat",
        "期房 vs 二手房、外资配额核查及 Jomtien、Pratumnak、Wong Amat 租赁管理介绍。",
        "Off-plan vs resale, проверка foreign quota и rental management для Jomtien, Pratumnak и Wong Amat.",
      ),
      button: L("Request project portfolio", "ขอพอร์ตโครงการ", "索取项目组合", "Запросить портфель проектов"),
    },
    overview: {
      title: L("Pattaya property market snapshot", "ภาพรวมตลาดอสังหาพัทยา", "芭提雅房产市场概览", "Снимок рынка недвижимости Паттайи"),
      body: L(
        "Chonburi remains a top second-home and rental market for Bangkok weekenders and international buyers. Condo-hotel structures, freehold vs leasehold, and transfer fee splits vary by project — due diligence on developer track record and occupancy history is essential before reservation deposits.",
        "ชลบุรียังเป็นตลาดบ้านที่สองและเช่าชั้นนำสำหรับคนกรุงเทพวันหยุดและผู้ซื้อต่างชาติ โครงสร้าง condo-hotel freehold vs leasehold และการแบ่งค่าโอนแตกต่างตามโครงการ — due diligence ผู้พัฒนาและประวัติ occupancy จำเป็นก่อนจอง",
        "春武里仍是曼谷周末客与国际买家的第二居所与租赁热门市场。condo-hotel 结构、 freehold vs leasehold 及过户费分摊因项目而异——订金前务必尽调开发商与入住历史。",
        "Чонбури — топ рынок second-home и аренды для bangkok weekenders и иностранцев. Condo-hotel, freehold vs leasehold и transfer fees различаются — due diligence застройщика и occupancy до депозита.",
      ),
    },
    steps: {
      title: L("Acquisition process", "ขั้นตอนการซื้อ", "收购流程", "Процесс приобретения"),
      items: [
        {
          title: L("Define strategy", "กำหนดกลยุทธ์", "确定策略", "Определить стратегию"),
          description: L(
            "Yield play, personal use, or hybrid — sets budget, district, and unit size (studio vs 2-bed sea view).",
            "เล่น yield ใช้เอง หรือ hybrid — กำหนดงบ เขต และขนาด (studio vs 2-bed sea view)",
            "收益型、自用或混合——确定预算、区域及户型（studio vs 两卧海景）。",
            "Yield, personal use или hybrid — бюджет, район и размер (studio vs 2-bed sea view).",
          ),
        },
        {
          title: L("Legal & quota review", "ตรวจกฎหมายและโควตา", "法律与配额审查", "Legal и quota review"),
          description: L(
            "Foreign ownership quota in condo juristic person, lease structures for villas, and company-held assets if applicable.",
            "โควตาต่างชาติในนิติบุคคลคอนโด สัญญาเช่าวilla และทรัพย์ในชื่อบริษัทหากเกี่ยวข้อง",
            " condo 法人外资配额、别墅 lease 结构及公司持有资产（如适用）。",
            "Foreign quota в juristic person condo, lease для вилл и активы на компанию при необходимости.",
          ),
        },
        {
          title: L("Due diligence", "Due diligence", "尽职调查", "Due diligence"),
          description: L(
            "Chanote title search, common fee arrears, building inspection, and developer escrow for off-plan.",
            "ค้นโฉนด Chanote ค้าง common fee ตรวจอาคาร และ escrow ผู้พัฒนา off-plan",
            "Chanote 产权查询、物业费欠费、建筑检查及期房开发商 escrow。",
            "Поиск Chanote, задолженность common fee, инспекция здания и escrow застройщика off-plan.",
          ),
        },
        {
          title: L("Transfer & management", "โอนและบริหาร", "过户与管理", "Transfer и management"),
          description: L(
            "Land Office transfer, utilities handover, and optional rental / housekeeping management contracts.",
            "โอนที่ดิน ส่งมอบสาธารณูปโภค และสัญญาบริหารเช่า/แม่บ้าน (ถ้าต้องการ)",
            "土地厅过户、 utilities 交接及可选租赁/保洁管理合同。",
            "Transfer в Land Office, utilities и опциональные rental/housekeeping contracts.",
          ),
        },
      ],
    },
    checklist: {
      title: L("Buyer checklist", "เช็กลิสต์ผู้ซื้อ", "买家清单", "Чеклист покупателя"),
      items: [
        L("Sales & purchase agreement reviewed by Thai counsel", "สัญญาซื้อขายตรวจโดยทนายไทย", "经泰籍律师审查的买卖协议", "SPA, проверенный тайским юристом"),
        L("Foreign quota certificate from juristic person (condos)", "ใบรับรองโควตาต่างชาติจากนิติบุคคล (คอนโด)", " condo 法人出具的外资配额证明", "Сертификат foreign quota от juristic person (condo)"),
        L("Snagging list and defect liability period for new builds", "snagging list และช่วงรับผิดชอบข defect โครงการใหม่", "新建项目 snagging 清单与缺陷责任期", "Snagging list и defect liability period для новостроек"),
        L("Rental yield assumptions stress-tested (low season)", "สมมติฐาน yield เช่าทดสอบ stress (โลว์ซีซัน)", "租赁收益假设压力测试（淡季）", "Rental yield stress-tested (низкий сезон)"),
        L("Insurance and common area fee projections", "ประกันและคาดการณ์ common area fee", "保险与公共区域费预测", "Страхование и прогноз common area fee"),
      ],
    },
    highlights: {
      title: L("Featured segments", "เซกเมนต์เด่น", "重点板块", "Ключевые сегменты"),
      items: [
        {
          title: L("Beachfront condos", "คอนโดริมหาด", "海滨公寓", "Beachfront condos"),
          description: L("Jomtien and Wong Amat — strong rental demand, check flood and erosion history.", "จอมเทียนและวงอamat — demand เช่าแรง ตรวจน้ำท่วมและการกัดเซาะ", "Jomtien 与 Wong Amat——租赁需求强，需查洪水与侵蚀历史。", "Jomtien и Wong Amat — сильный rental demand; проверьте flood и erosion."),
        },
        {
          title: L("Pratumnak luxury", "พระตำหนัก luxury", "Pratumnak  luxury", "Pratumnak luxury"),
          description: L("Clifftop units with premium finishes; higher ticket, lower velocity.", "ยูnit บนหน้าผa ตกแต่งพรีเมียม ราคาสูง velocity ต่ำ", "崖顶精装单位；单价高、周转慢。", "Clifftop units с premium finishes; выше ticket, ниже velocity."),
        },
        {
          title: L("EEC-linked industrial land", "ที่ดินอุตสาหกรรม EEC", "EEC 关联工业用地", "Промземля EEC"),
          description: L("Separate track for commercial plots — pair with BOI advisory.", "แทร็กแยกสำหรับที่ดินเชิงพาณิชย์ — คู่กับที่ปรึกษา BOI", "商业地块单独路径——配合 BOI 咨询。", "Отдельный трек commercial plots — с BOI advisory."),
        },
      ],
    },
    related: [
      { label: L("Pattaya Economy", "เศรษฐกิจพัทยา", "芭提雅经济", "Экономика Паттайи"), blurb: L("Macro drivers behind price growth", "ปัจจัยมหภาคหลังการเติบโตราคา", "价格增长的宏观驱动", "Макрофакторы роста цен") },
      { label: L("Hotel Business Guide", "คู่มือธุรกิจโรงแรม", "酒店商业指南", "Гид по отелям"), blurb: L("Hospitality assets and licensing", "สินทรัพย์ hospitality และใบอนุญาต", " hospitality 资产与许可", "Hospitality-активы и лицензии") },
      { label: L("Property News", "ข่าวอสังหา", "房产新闻", "Новости недвижимости"), blurb: L("Latest market headlines", "หัวข่าวตลาดล่าสุด", "最新市场头条", "Последние заголовки рынка") },
    ],
  },
  economy: {
    heroAlt: L("Pattaya city and economic growth", "เมืองพัทยาและการเติบโตทางเศรษฐกิจ", "芭提雅城市与经济增长", "Паттайя и экономический рост"),
    badge: L("Investment", "การลงทุน", "投资", "Инвестиции"),
    breadcrumb: L("Pattaya Economy", "เศรษฐกิจพัทยา", "芭提雅经济", "Экономика Паттайи"),
    title: L("Pattaya Economy", "เศรษฐกิจพัทยา", "芭提雅经济", "Экономика Паттайи"),
    description: L(
      "Key indicators for investors — visitor flows, EEC capital, real estate momentum, and major infrastructure in Chonburi.",
      "ตัวชี้วัดสำคัญสำหรับนักลงทุน — กระแสนักท่องเที่ยว เงินทุน EEC โมเมนตัมอสังหา และโครงสร้างพื้นฐานใหญ่ในชลบุรี",
      "投资者关键指标——游客流量、EEC 资本、房地产动能及春武里重大基建。",
      "Ключевые индикаторы для инвесторов — потоки туристов, капитал EEC, momentum недвижимости и инфраструктура Чонбури.",
    ),
    cta: {
      eyebrow: L("Market Intelligence", "ข่าวกรองตลาด", "市场情报", "Рыночная аналитика"),
      title: L("View Pattaya economy overview", "ดูภาพรวมเศรษฐกิจพัทยา", "查看芭提雅经济概览", "Обзор экономики Паттайи"),
      body: L(
        "Weekly business briefings and sector reports — align your expansion or acquisition timeline with local data.",
        "บรีฟธุรกิจรายสัปดาห์และรายงานภาค — จัดไทม์ไลน์ขยายหรือซื้อให้สอดคล้องข้อมูลท้องถิ่น",
        "每周商业简报与行业报告——用本地数据对齐扩张或收购时间表。",
        "Еженедельные брифинги и sector reports — согласуйте expansion/acquisition с локальными данными.",
      ),
      button: L("Subscribe to reports", "สมัครรับรายงาน", "订阅报告", "Подписаться на отчёты"),
    },
    overview: {
      title: L("Why Pattaya's economy matters", "ทำไมเศรษฐกิจพัทยาจึงสำคัญ", "为何芭提雅经济重要", "Почему экономика Паттайи важна"),
      body: L(
        "Tourism remains the demand engine, while the Eastern Economic Corridor adds logistics, manufacturing, and conference capacity. U-Tapao expansion, high-speed rail links, and industrial estates in Chonburi reshape commuter patterns and skilled labour supply — all feeding hospitality, retail, and residential absorption.",
        "การท่องเที่ยวยังเป็นเครื่องยนต์ความต้องการ ขณะที่ EEC เพิ่มโลจิสติกส์ การผลิต และความจุ conference การขยาย U-Tapao รถไฟความเร็วสูง และนิคมอุตสาหกรรมในชลบุรีเปลี่ยนรูปแบบ commuter และแรงงานมีทักษะ — หล่อเลี้ยง hospitality ค้าปลีก และที่อยู่อาศัย",
        "旅游仍是需求引擎，EEC 增加物流、制造与会议容量。U-Tapao 扩建、高铁及春武里工业园重塑通勤与 skilled labour——推动 hospitality、零售与住宅吸纳。",
        "Туризм — двигатель спроса; EEC добавляет логистику, manufacturing и conference capacity. U-Tapao, HSR и industrial estates меняют commuter patterns и skilled labour — питая hospitality, retail и residential.",
      ),
    },
    steps: {
      title: L("How to use this data", "วิธีใช้ข้อมูลนี้", "如何使用这些数据", "Как использовать данные"),
      items: [
        {
          title: L("Tourism baseline", " baseline การท่องเที่ยว", "旅游基线", "Tourism baseline"),
          description: L("Track international arrivals, average length of stay, and source-market recovery.", "ติดตามผู้มาเยือนต่างชาติ ระยะเวลาพัก และการฟื้นตัวตลาดต้นทาง", "跟踪国际抵达、平均停留及客源市场恢复。", "Отслеживайте international arrivals, length of stay и recovery source markets."),
        },
        {
          title: L("EEC project pipeline", " pipeline โครงการ EEC", "EEC 项目管道", "Pipeline проектов EEC"),
          description: L("Map announced capex, job creation, and port/airport upgrades affecting east coast land values.", "แมป capex ที่ประกาศ การสร้างงาน และอัปเกรดท่า/สนามบินที่กระทบมูลค่าที่ดินฝั่งตะวันออก", "梳理已公布 capex、就业创造及影响东海岸地价的港口/机场升级。", "Карта capex, job creation и upgrades port/airport для land values east coast."),
        },
        {
          title: L("Real estate comparables", " comparables อสังหา", "房地产可比数据", "Real estate comparables"),
          description: L("Condo launch velocity, transfer volumes at Land Office, and rental occupancy surveys.", "ความเร็วเปิดตัวคอนโด ปริมาณโอนที่ดิน และสำรวจ occupancy เช่า", " condo 开盘速度、土地厅过户量及租赁 occupancy 调查。", "Velocity condo launches, transfer volumes Land Office и rental occupancy surveys."),
        },
        {
          title: L("Policy watch", "ติดตามนโยบาย", "政策观察", "Policy watch"),
          description: L("Visa incentives, BOI promotions, and municipal infrastructure budgets.", "สิ่งจูงใจวisa ส่งเสริม BOI และงบโครงสร้างพื้นฐานเทศบาล", "签证激励、BOI 促进及市政基建预算。", "Visa incentives, BOI promotions и municipal infrastructure budgets."),
        },
      ],
    },
    checklist: {
      title: L("Indicators we track", "ตัวชี้วัดที่เราติดตาม", "我们跟踪的指标", "Индикаторы, которые мы отслеживаем"),
      items: [
        L("Annual visitor volume and hotel occupancy", "ปริมาณนักท่องเที่ยวรายปีและ occupancy โรงแรม", "年游客量与酒店 occupancy", "Annual visitor volume и hotel occupancy"),
        L("YoY condominium price and transaction trends", "แนวโน้มราคาและธุรกรรมคอนโด YoY", " condo 价格与交易同比趋势", "YoY condo price и transaction trends"),
        L("EEC committed investment value (public filings)", "มูลค่าเงินลงทุน EEC ที่ผูกพัน (เอกสารสาธารณะ)", "EEC 承诺投资额（公开文件）", "EEC committed investment (public filings)"),
        L("Major infrastructure milestone dates", "วันที่ milestone โครงสร้างพื้นฐานใหญ่", "重大基建里程碑日期", "Даты milestone major infrastructure"),
        L("Exchange rate impact on foreign buyer segments", "ผลอัตราแลกเปลี่ยนต่อกลุ่มผู้ซื้อต่างชาติ", "汇率对外籍买家细分的影响", "Влияние exchange rate на foreign buyer segments"),
      ],
    },
    highlights: {
      title: L("Sector outlook", "มุมมองภาค", "行业展望", "Sector outlook"),
      items: [
        {
          title: L("Hospitality recovery", "การฟื้นตัว hospitality", " hospitality 复苏", "Hospitality recovery"),
          description: L("ADR and RevPAR recovery vs 2019 benchmarks by sub-market.", "การฟื้น ADR และ RevPAR เทียบ 2019 ตาม sub-market", "各 sub-market ADR 与 RevPAR 相对 2019 基准的恢复。", "ADR и RevPAR recovery vs 2019 benchmarks по sub-market."),
        },
        {
          title: L("Industrial spillover", " spillover อุตสาหกรรม", "工业溢出效应", "Industrial spillover"),
          description: L("Laem Chabang and Rayong demand for housing and services in Pattaya.", "ความต้องการที่อยู่และบริการในพัทยาจากแหลมฉบังและระยอง", "林查班与罗勇对芭提雅 housing 与服务的需求。", "Спрос Laem Chabang и Rayong на housing и services в Паттайе."),
        },
        {
          title: L("Digital nomad & long-stay", " digital nomad และ long-stay", "数字游民与长期停留", "Digital nomad & long-stay"),
          description: L("LTR and remote-work visas supporting mid-term rentals.", "LTR และวisa remote-work สนับสนุนเช่าระยะกลาง", "LTR 与 remote-work 签证支撑中期租赁。", "LTR и remote-work visas поддерживают mid-term rentals."),
        },
      ],
    },
    economyStatLabels: [
      L("Annual Visitors", "นักท่องเที่ยวต่อปี", "年游客量", "Туристов в год"),
      L("Real Estate Growth (YoY)", "การเติบโตอสังหา (YoY)", "房地产增长（同比）", "Рост недвижимости (YoY)"),
      L("EEC Investment Value", "มูลค่าเงินลงทุน EEC", "EEC 投资额", "Инвестиции EEC"),
      L("Infrastructure Projects", "โครงการโครงสร้างพื้นฐาน", "基建项目", "Инфраструктурные проекты"),
      L("EEC GDP Share (Thailand)", "สัดส่วน GDP EEC (ไทย)", "EEC 占泰国 GDP 比重", "Доля GDP EEC (Таиланд)"),
      L("Industrial Estates Zones", "โซนนิคมอุตสาหกรรม", "工业园区域", "Зоны industrial estates"),
    ],
    related: [
      { label: L("Property Investment", "ลงทุนอสังหา", "房产投资", "Инвестиции в недвижимость"), blurb: L("Turn macro trends into asset picks", "เปลี่ยนเทรนด์มหภาคเป็นการเลือกสินทรัพย์", "将宏观趋势转化为资产选择", "Превратите macro trends в выбор активов") },
      { label: L("BOI Promotion", "สิทธิ BOI", "BOI 促进", "Льготы BOI"), blurb: L("Incentive-led industrial projects", "โครงการอุตสาหกรรมตามสิ่งจูงใจ", "激励驱动的工业项目", "Industrial projects с льготами") },
      { label: L("Business Networking", "Networking ธุรกิจ", "商务社交", "Business Networking"), blurb: L("Meet investors and operators locally", "พบนักลงทุนและผู้ประกอบการในพื้นที่", "本地结识投资者与经营者", "Investors и operators на месте") },
    ],
  },
  events: {
    heroAlt: L("Business networking event in Pattaya", "กิจกรรมเครือข่ายธุรกิจในพัทยา", "芭提雅商务社交活动", "Business networking в Паттайе"),
    badge: L("Networking", "Networking", "社交", "Networking"),
    breadcrumb: L("Business Events", "กิจกรรมธุรกิจ", "商务活动", "Business Events"),
    title: L("Business Networking", "Networking ธุรกิจ", "商务社交", "Business Networking"),
    description: L(
      "Connect with investors, operators, and service providers at curated Pattaya business events throughout the year.",
      "เชื่อมต่อนักลงทุน ผู้ประกอบการ และผู้ให้บริการในกิจกรรมธุรกิจพัทยาตลอดปี",
      "全年参加精选芭提雅商务活动，结识投资者、经营者与服务提供商。",
      "Investors, operators и service providers на curated business events Паттайи круглый год.",
    ),
    cta: {
      eyebrow: L("Upcoming Events", "กิจกรรมที่จะมาถึง", "即将举行的活动", "Предстоящие события"),
      title: L("Register early", "ลงทะเบียนล่วงหน้า", "提前报名", "Ранняя регистрация"),
      body: L(
        "Priority seating for EEC summits and chamber mixers — RSVP for calendar invites and speaker line-ups.",
        "ที่นั่ง priority สำหรับ summit EEC และ chamber mixer — RSVP รับปฏิทินและรายชื่อวิทยากร",
        "EEC 峰会与商会联谊优先席位——RSVP 获取日历邀请与演讲嘉宾名单。",
        "Priority seating для EEC summits и chamber mixers — RSVP для calendar invites и speakers.",
      ),
      button: L("View event calendar", "ดูตารางกิจกรรม", "查看活动日程", "Календарь событий"),
    },
    overview: {
      title: L("Why attend local events", "ทำไมต้องเข้าร่วมกิจกรรมท้องถิ่น", "为何参加本地活动", "Зачем ходить на local events"),
      body: L(
        "Face-to-face networking still closes deals in hospitality, property, and cross-border services. Pattaya hosts chamber breakfasts, EEC investment briefings, and vertical meetups (F&B, hotel, tech) — ideal for founders relocating from Bangkok or overseas.",
        "Networking ตัวต่อตัวยังปิดดีลใน hospitality อสังหา และบริการข้ามพรมแดน พัทยาจัด chamber breakfast briefing EEC และ meetup แนวตั้ง (F&B โรงแรม tech) — เหมาะสำหรับผู้ก่อตั้งที่ย้ายจากกรุงเทพหรือต่างประเทศ",
        "面对面社交仍在 hospitality、房产与跨境服务中促成交易。芭提雅举办商会早餐、EEC 投资简报及垂直聚会（F&B、酒店、科技）——适合从曼谷或海外迁入的创业者。",
        "Face-to-face networking закрывает сделки в hospitality, property и cross-border services. Pattaya — chamber breakfasts, EEC briefings и vertical meetups (F&B, hotel, tech) для founders из Bangkok или overseas.",
      ),
    },
    steps: {
      title: L("Getting the most from events", "ใช้ประโยชน์จากกิจกรรมให้สูงสุด", "如何最大化活动价值", "Максимум от events"),
      items: [
        {
          title: L("Pick the right format", "เลือกรูปแบบที่เหมาะ", "选对形式", "Выберите формат"),
          description: L("Summits for macro/EEC content; after-hours mixers for operator introductions.", "Summit สำหรับ macro/EEC mixer หลังเลิกงานสำหรับแนะนำ operator", "峰会看 macro/EEC；下班后联谊结识 operator。", "Summits для macro/EEC; after-hours mixers для operator introductions."),
        },
        {
          title: L("Prepare your pitch", "เตรียม pitch", "准备 pitch", "Подготовьте pitch"),
          description: L("30-second intro, Thai/English business cards, and clear ask (capital, partner, permit).", "intro 30 วินาที นามบัตรไทย/อังกฤษ และ ask ชัด (เงินทุน partner ใบอนุญาต)", "30 秒介绍、泰/英名片及明确诉求（资金、伙伴、许可）。", "30-second intro, Thai/English cards и clear ask (capital, partner, permit)."),
        },
        {
          title: L("Follow up fast", "ติดตามเร็ว", "快速跟进", "Follow up быстро"),
          description: L("Line or email within 48 hours — reference the session you met at.", "Line หรือ email ภายใน 48 ชม. — อ้าง session ที่พบ", "48 小时内 Line 或邮件——提及相遇的 session。", "Line или email за 48 часов — укажите session, где встретились."),
        },
        {
          title: L("Join recurring circles", "เข้าร่วมวงประจำ", "加入定期圈子", "Recurring circles"),
          description: L("Chamber and co-working hosts run monthly tables — consistency builds trust.", "Chamber และ co-working จัดโต๊ะรายเดือน — ความสม่ำเสมอสร้างความไว้วางใจ", "商会与联合办公每月桌聚——持续出席建立信任。", "Chamber и co-working — monthly tables; consistency builds trust."),
        },
      ],
    },
    checklist: {
      title: L("Event prep checklist", "เช็กลิสต์เตรียมกิจกรรม", "活动准备清单", "Чеклист подготовки"),
      items: [
        L("Register early for limited-seat summits", "ลงทะเบียนล่วงหน้าสำหรับ summit ที่นั่งจำกัด", "限座峰会请提前报名", "Register early для limited-seat summits"),
        L("Business attire or smart casual per venue (hotel vs rooftop)", "ชุด business หรือ smart casual ตาม venue (โรงแรม vs rooftop)", "按场地着商务或 smart casual（酒店 vs 屋顶）", "Business attire или smart casual по venue (hotel vs rooftop)"),
        L("Bring printed materials sparingly — QR to deck preferred", "พิมพ์เอกสารน้อย — ใช้ QR ไป deck", "少带印刷品——优先 QR 链接 deck", "Мало print — QR на deck предпочтительнее"),
        L("Note parking / Grab drop-off for beach hotels", "จดที่จอด / จุด Grab สำหรับโรงแรมชายหาด", "记下海滩酒店的停车/Grab 下车点", "Parking / Grab drop-off для beach hotels"),
        L("Calendar block for follow-up calls the week after", "บล็อกปฏิทินสำหรับ follow-up สัปดาห์ถัดไป", "次周预留 follow-up 通话时间", "Calendar block для follow-up calls на следующей неделе"),
      ],
    },
    highlights: {
      title: L("Who you will meet", "คุณจะพบใคร", "你将遇见谁", "Кого вы встретите"),
      items: [
        {
          title: L("Investors & developers", "นักลงทุนและผู้พัฒนา", "投资者与开发商", "Investors & developers"),
          description: L("EEC industrial, condo sponsors, and boutique hotel groups.", "EEC industrial สปอnsor คอนโด และกลุ่มโรงแรมบูติก", "EEC 工业、 condo 赞助方及精品酒店集团。", "EEC industrial, condo sponsors и boutique hotel groups."),
        },
        {
          title: L("Professional services", "บริการมืออาชีพ", "专业服务", "Professional services"),
          description: L("Law, accounting, visa, and BOI consultancies with Chonburi desks.", "กฎหมาย บัญชี วisa และที่ปรึกษา BOI ที่มี desk ชลบุรี", "在春武里设有 desk 的法律、会计、签证与 BOI 咨询。", "Law, accounting, visa и BOI consultancies с Chonburi desks."),
        },
        {
          title: L("Operators", "ผู้ประกอบการ", "经营者", "Operators"),
          description: L("Restaurant, bar, and tourism entrepreneurs sharing permit lessons learned.", "ผู้ประกอบการร้านอาหาร บาร์ และท่องเที่ยวแบ่งปันบทเรียนใบอนุญาต", "餐饮、酒吧与旅游创业者分享许可经验教训。", "Restaurant, bar и tourism entrepreneurs делятся permit lessons learned."),
        },
      ],
    },
    networkingEvents: [
      {
        title: L("Pattaya EEC Investment Summit", "Pattaya EEC Investment Summit", "芭提雅 EEC 投资峰会", "Pattaya EEC Investment Summit"),
        location: L("Royal Cliff Grand Hotel, Pattaya", "Royal Cliff Grand Hotel, Pattaya", "Royal Cliff Grand Hotel，芭提雅", "Royal Cliff Grand Hotel, Pattaya"),
      },
      {
        title: L("Business After Hours: Networking Night", "Business After Hours: Networking Night", "Business After Hours：社交之夜", "Business After Hours: Networking Night"),
        location: L("Hilton Pattaya - Horizon Rooftop", "Hilton Pattaya - Horizon Rooftop", "Hilton Pattaya - Horizon Rooftop", "Hilton Pattaya - Horizon Rooftop"),
      },
      {
        title: L("Digital Nomad & Tech Hub Conference", "Digital Nomad & Tech Hub Conference", "数字游民与科技枢纽大会", "Digital Nomad & Tech Hub Conference"),
        location: L("Pattaya City Hall - Convention Center", "Pattaya City Hall - Convention Center", "芭提雅市政厅会议中心", "Pattaya City Hall - Convention Center"),
      },
    ],
    related: [
      { label: L("Company Registration", "จดทะเบียนบริษัท", "公司注册", "Регистрация компании"), blurb: L("Meet legal partners on-site", "พบพาร์ทเนอร์กฎหมายในสถานที่", "现场结识法律伙伴", "Legal partners on-site") },
      { label: L("Pattaya Economy", "เศรษฐกิจพัทยา", "芭提雅经济", "Экономика Паттайи"), blurb: L("Data behind the keynote decks", "ข้อมูลหลัง keynote deck", "主题演讲背后的数据", "Data behind keynote decks") },
      { label: L("Business Hub", "ศูนย์ธุรกิจ", "商业中心", "Бизнес-хаб"), blurb: L("All services in one place", "บริการครบในที่เดียว", "一站式服务", "All services in one place") },
    ],
  },
};
