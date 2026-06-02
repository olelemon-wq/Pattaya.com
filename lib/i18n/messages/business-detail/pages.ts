import type { BusinessPageId } from "@/lib/data/business-page-content";
import { L } from "@/lib/i18n/living-helpers";
import type { LocalizedText } from "@/lib/i18n/text";

type StepCopy = { title: LocalizedText; description: LocalizedText };
type HighlightCopy = { title: LocalizedText; description: LocalizedText };
type RelatedCopy = { label: LocalizedText; blurb: LocalizedText };
type EventCopy = { title: LocalizedText; location: LocalizedText };
type QuickFactCopy = { label: LocalizedText; value: LocalizedText };
type ReadingPathItemCopy = { label: LocalizedText; description: LocalizedText };
type FaqCopy = { q: LocalizedText; a: LocalizedText };
type ServicePointCopy = { name: LocalizedText; note: LocalizedText };

export type BusinessPageCopy = {
  heroAlt: LocalizedText;
  badge: LocalizedText;
  breadcrumb: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  cta: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    body: LocalizedText;
    button: LocalizedText;
  };
  ctaSecondary?: { button: LocalizedText };
  overview: { title: LocalizedText; body: LocalizedText };
  steps: { title: LocalizedText; items: StepCopy[] };
  checklist: { title: LocalizedText; items: LocalizedText[] };
  highlights: { title: LocalizedText; items: HighlightCopy[] };
  related: RelatedCopy[];
  economyStatLabels?: LocalizedText[];
  networkingEvents?: EventCopy[];
  quickFacts?: { title: LocalizedText; items: QuickFactCopy[] };
  legalNotes?: { title: LocalizedText; items: LocalizedText[] };
  readingPath?: {
    title: LocalizedText;
    intro: LocalizedText;
    items: ReadingPathItemCopy[];
  };
  faq?: { title: LocalizedText; items: FaqCopy[] };
  servicePoints?: {
    title: LocalizedText;
    intro: LocalizedText;
    items: ServicePointCopy[];
  };
};

import {
  boiExtendedCopy,
  boiRelatedExtra,
} from "@/lib/i18n/messages/business-detail/boi-extended";
import {
  restaurantExtendedCopy,
  restaurantRelatedExtra,
} from "@/lib/i18n/messages/business-detail/restaurant-extended";
import {
  thaiCompanyExtendedCopy,
  thaiCompanyRelatedExtra,
} from "@/lib/i18n/messages/business-detail/thai-company-extended";
import { businessPageCopyRest } from "@/lib/i18n/messages/business-detail/pages-rest";

const businessPageCopyPart1 = {
  "thai-company": {
    heroAlt: L(
      "Modern office for company registration in Pattaya",
      "สำนักงานทันสมัยสำหรับจดทะเบียนบริษัทในพัทยา",
      "芭提雅公司注册现代办公室",
      "Современный офис для регистрации компании в Паттайе",
    ),
    badge: L("Company Setup", "ตั้งบริษัท", "公司设立", "Регистрация компании"),
    breadcrumb: L(
      "Company Registration",
      "จดทะเบียนบริษัท",
      "公司注册",
      "Регистрация компании",
    ),
    title: L(
      "Company Registration",
      "เปิดบริษัท",
      "公司注册",
      "Регистрация компании",
    ),
    description: L(
      "Your gateway to the Eastern Economic Corridor — complete frameworks for local and international entities with regulatory compliance.",
      "ประตูสู่เขตพัฒนาพิเศษภาคตะวันออก (EEC) — กรอบครบวงจรสำหรับนิติบุคคลในประเทศและต่างชาติ พร้อมการปฏิบัติตามกฎหมาย",
      "通往东部经济走廊的门户——为本地及国际实体提供完整框架与合规支持。",
      "Ваш вход в Eastern Economic Corridor — полные рамки для местных и международных структур с соблюдением нормативов.",
    ),
    cta: {
      eyebrow: L("Legal & Setup", "กฎหมายและการตั้งค่า", "法律与设立", "Юридическое сопровождение"),
      title: L(
        "Start with your document checklist",
        "เริ่มจากเช็กลิสต์เอกสารที่ต้องใช้",
        "先从所需文件清单开始",
        "Начните с чеклиста документов",
      ),
      body: L(
        "Document review, shareholder structure, VAT registration, and work-permit pathways — matched to your investment timeline.",
        "ตรวจเอกสาร โครงสร้างผู้ถือหุ้น จดทะเบียน VAT และเส้นทางวisa ทำงาน — ให้สอดคล้องกับไทม์ไลน์การลงทุนของคุณ",
        "文件审查、股东结构、VAT 注册及工作许可路径——匹配您的投资时间表。",
        "Проверка документов, структура акционеров, регистрация VAT и пути получения рабочих разрешений — под ваш инвестиционный график.",
      ),
      button: L("Open document checklist", "เปิดเช็กลิสต์เอกสาร", "打开文件清单", "Открыть чеклист"),
    },
    overview: {
      title: L(
        "Why register in Chonburi",
        "ทำไมต้องจดทะเบียนในชลบุรี",
        "为何在春武里注册",
        "Почему регистрироваться в Чонбури",
      ),
      body: L(
        "Pattaya sits inside the EEC footprint with strong tourism, logistics, and property demand. A Thai limited company is the standard vehicle for operating restaurants, hotels, import/export, and service businesses — with clear rules on foreign ownership, nominee structures, and BOI upgrades when eligible.",
        "พัทยาอยู่ในเขต EEC ด้วยความต้องการด้านการท่องเที่ยว โลจิสติกส์ และอสังหาริมทรัพย์ที่แข็งแกร่ง บริษัทจำกัดไทยเป็นรูปแบบมาตรฐานสำหรับร้านอาหาร โรงแรม นำเข้า-ส่งออก และธุรกิจบริการ — พร้อมกฎที่ชัดเจนเรื่องการถือครองของต่างชาติ โครงสร้าง nominee และการอัปเกรด BOI เมื่อมีสิทธิ",
        "芭提雅位于 EEC 范围内，旅游、物流与房产需求强劲。泰资有限公司是经营餐饮、酒店、进出口及服务业的常用形式——外资持股、代持结构及符合条件的 BOI 升级均有明确规则。",
        "Паттайя в зоне EEC с сильным спросом на туризм, логистику и недвижимость. Тайское ООО — стандартная форма для ресторанов, отелей, импорта/экспорта и услуг, с чёткими правилами иностранного владения, номinee-структур и перехода на BOI при наличии права.",
      ),
    },
    steps: {
      title: L("Registration roadmap", "แผนการจดทะเบียน", "注册路线图", "Дорожная карта регистрации"),
      items: [
        {
          title: L(
            "Name reservation & structure",
            "จองชื่อและโครงสร้าง",
            "名称预留与结构",
            "Резервирование названия и структура",
          ),
          description: L(
            "Reserve your company name (Thai/English), define objectives, shareholders, and registered capital aligned with visa and license needs.",
            "จองชื่อบริษัท (ไทย/อังกฤษ) กำหนดวัตถุประสงค์ ผู้ถือหุ้น และทุนจดทะเบียนให้สอดคล้องกับวisa และใบอนุญาต",
            "预留公司名称（泰/英），确定经营范围、股东及注册资本，以匹配签证与许可需求。",
            "Зарезервируйте название (тайское/англ.), определите цели, акционеров и уставный капитал под визы и лицензии.",
          ),
        },
        {
          title: L(
            "Memorandum & statutory meeting",
            "หนังสือบริคณห์และประชุมตามกฎหมาย",
            "章程与法定会议",
            "Меморандум и учредительное собрание",
          ),
          description: L(
            "Prepare MOA/AOA, appoint directors, and hold the statutory meeting — typically coordinated with your law firm.",
            "จัดทำ MOA/AOA แต่งตั้งกรรมการ และประชุมตามกฎหมาย — มักประสานผ่านสำนักงานกฎหมาย",
            "准备 MOA/AOA、任命董事并召开法定会议——通常由律所协调。",
            "Подготовьте MOA/AOA, назначьте директоров и проведите учредительное собрание — обычно через юрфирму.",
          ),
        },
        {
          title: L(
            "DBD registration & tax IDs",
            "จดทะเบียน DBD และเลขภาษี",
            "DBD 注册与税号",
            "Регистрация в DBD и налоговые ID",
          ),
          description: L(
            "File with the Department of Business Development, obtain tax ID, and register VAT/social security when thresholds apply.",
            "ยื่นกับกรมพัฒนาธุรกิจการค้า ขอเลขประจำตัวผู้เสียภาษี และจด VAT/ประกันสังคมเมื่อถึงเกณฑ์",
            "向商业发展部提交申请、取得税号，并在达到门槛时注册 VAT/社保。",
            "Подайте в DBD, получите налоговый ID и зарегистрируйте VAT/соцстрах при достижении порогов.",
          ),
        },
        {
          title: L(
            "Licenses & work permits",
            "ใบอนุญาตและใบอนุญาตทำงาน",
            "许可与工作证",
            "Лицензии и рабочие разрешения",
          ),
          description: L(
            "Layer industry permits (F&B, hotel, import) and Non-B / work permit filings once the entity is active.",
            "เพิ่มใบอนุญาตตามอุตสาหกรรม (F&B โรงแรม นำเข้า) และยื่น Non-B / ใบอนุญาตทำงานเมื่อนิติบุคคลพร้อมดำเนินการ",
            "实体激活后叠加行业许可（餐饮、酒店、进口）及 Non-B/工作证申请。",
            "После активации добавьте отраслевые разрешения (F&B, отель, импорт) и подайте Non-B / work permit.",
          ),
        },
      ],
    },
    checklist: {
      title: L("Document checklist", "รายการเอกสาร", "文件清单", "Список документов"),
      items: [
        L(
          "Passport copies of all shareholders & directors",
          "สำเนาหนังสือเดินทางผู้ถือหุ้นและกรรมการทุกคน",
          "全体股东及董事护照复印件",
          "Копии паспортов всех акционеров и директоров",
        ),
        L(
          "Registered address evidence (office or virtual office contract)",
          "หลักฐานที่อยู่จดทะเบียน (สัญญาสำนักงานหรือ virtual office)",
          "注册地址证明（办公室或虚拟办公室合同）",
          "Подтверждение юридического адреса (офис или virtual office)",
        ),
        L(
          "Bank certificate for paid-up capital (amount per structure)",
          "หนังสือรับรองธนาคารสำหรับทุนชำระแล้ว (ตามโครงสร้าง)",
          "实缴资本银行证明（按结构要求金额）",
          "Банковская справка об оплаченном капитале (сумма по структуре)",
        ),
        L(
          "Lease or ownership docs for operating premises",
          "สัญญาเช่าหรือเอกสารกรรมสิทธิ์สถานที่ประกอบการ",
          "经营场所租赁或产权文件",
          "Договор аренды или право собственности на помещение",
        ),
        L(
          "Business objectives matching future license categories",
          "วัตถุประสงค์ธุรกิจให้สอดคล้องกับหมวดใบอนุญาตในอนาคต",
          "经营范围与未来许可类别一致",
          "Цели деятельности под будущие категории лицензий",
        ),
      ],
    },
    highlights: {
      title: L(
        "Included in premium setup",
        "รวมในแพ็กเกจพรีเมียม",
        "高端设立套餐包含",
        "В премиум-пакете",
      ),
      items: [
        {
          title: L(
            "Work permit pathway",
            "เส้นทางใบอนุญาตทำงาน",
            "工作证路径",
            "Путь к work permit",
          ),
          description: L(
            "Ratio planning for Thai vs foreign staff before you hire your first manager.",
            "วางแผนสัดส่วนพนักงานไทย-ต่างชาติก่อนจ้างผู้จัดการคนแรก",
            "在招聘首位经理前规划泰籍与外籍员工比例。",
            "Планирование соотношения тайских и иностранных сотрудников до найма первого менеджера.",
          ),
        },
        {
          title: L(
            "Accounting handover",
            "ส่งมอบบัญชี",
            "会计交接",
            "Передача бухгалтерии",
          ),
          description: L(
            "Monthly filing calendar, invoice templates, and payroll registration.",
            "ปฏิทินยื่นรายเดือน แม่แบบใบแจ้งหนี้ และจดทะเบียนเงินเดือน",
            "月度申报日历、发票模板及工资登记。",
            "Календарь ежемесячной отчётности, шаблоны счетов и регистрация зарплаты.",
          ),
        },
        {
          title: L(
            "BOI readiness review",
            "ตรวจความพร้อม BOI",
            "BOI 资格预审",
            "Проверка готовности к BOI",
          ),
          description: L(
            "Screen activities for promotion eligibility before you commit capital.",
            "คัดกรองกิจกรรมว่ามีสิทธิส่งเสริมหรือไม่ก่อนลงทุน",
            "在投入资本前筛查业务是否符合促进资格。",
            "Проверьте деятельность на право на BOI-льготы до вложения капитала.",
          ),
        },
      ],
    },
    related: [
      {
        label: L("BOI Promotion", "สิทธิ BOI", "BOI 促进", "Льготы BOI"),
        blurb: L(
          "Tax holidays and foreign ownership benefits",
          "ลดหย่อนภาษีและสิทธิถือครองของต่างชาติ",
          "税收减免与外资持股优惠",
          "Налоговые каникулы и иностранное владение",
        ),
      },
      {
        label: L("F&B Business Guide", "คู่มือธุรกิจ F&B", "餐饮商业指南", "Гид по F&B"),
        blurb: L(
          "Permits after your company is registered",
          "ใบอนุญาตหลังจดทะเบียนบริษัท",
          "公司注册后的许可办理",
          "Разрешения после регистрации компании",
        ),
      },
      {
        label: L("Business Hub", "ศูนย์ธุรกิจ", "商业中心", "Бизнес-хаб"),
        blurb: L(
          "Networking events and economy stats",
          "กิจกรรมเครือข่ายและสถิติเศรษฐกิจ",
          "社交活动与经济数据",
          "Нетворкинг и экономическая статистика",
        ),
      },
      ...thaiCompanyRelatedExtra,
    ],
    ...thaiCompanyExtendedCopy,
  },
  boi: {
    heroAlt: L(
      "EEC investment and BOI promotion briefing",
      "บรรยายการลงทุน EEC และสิทธิ BOI",
      "EEC 投资与 BOI 促进说明会",
      "Брифинг по инвестициям EEC и льготам BOI",
    ),
    badge: L("BOI & EEC", "BOI และ EEC", "BOI 与 EEC", "BOI и EEC"),
    breadcrumb: L("BOI Promotion", "สิทธิ BOI", "BOI 促进", "Льготы BOI"),
    title: L("BOI Promotion", "สิทธิ BOI", "BOI 促进", "Льготы BOI"),
    description: L(
      "Competitive tax privileges and enhanced foreign ownership for strategic projects in the Eastern Economic Corridor.",
      "สิทธิประโยชน์ด้านภาษีที่แข่งขันได้และการถือครองของต่างชาติที่เพิ่มขึ้นสำหรับโครงการเชิงกลยุทธ์ใน EEC",
      "东部经济走廊战略项目享有竞争力税收优惠及更高外资持股空间。",
      "Конкурентные налоговые льготы и расширенное иностранное владение для стратегических проектов в EEC.",
    ),
    cta: {
      eyebrow: L("Investment Incentives", "สิ่งจูงใจการลงทุน", "投资激励", "Инвестиционные льготы"),
      title: L(
        "Start with BOI eligibility check",
        "เริ่มจากเช็กว่าโครงการเข้าเกณฑ์ BOI หรือไม่",
        "先检查项目是否符合 BOI 条件",
        "Начните с проверки соответствия BOI",
      ),
      body: L(
        "Activity code mapping, feasibility narratives, and coordination with BOI Bangkok — plus post-approval compliance.",
        "จับคู่รหัสกิจกรรม ร่างความเป็นไปได้ และประสาน BOI กรุงเทพฯ — รวมการปฏิบัติตามหลังอนุมัติ",
        "活动代码匹配、可行性说明及与曼谷 BOI 协调——含获批后合规。",
        "Сопоставление кодов деятельности, обоснование проекта и координация с BOI в Бангкоке — плюс пост-одобрительное соответствие.",
      ),
      button: L("Open BOI checklist", "เปิดเช็กลิสต์ BOI", "打开 BOI 清单", "Открыть чеклист BOI"),
    },
    overview: {
      title: L("What BOI can unlock", "BOI เปิดอะไรได้บ้าง", "BOI 能解锁什么", "Что даёт BOI"),
      body: L(
        "Promoted activities may receive corporate income tax exemptions, import duty relief, and permission for foreign nationals to own land for approved projects. In Pattaya–Chonburi, tourism tech, medical wellness, and selected manufacturing clusters are commonly evaluated — each with activity-specific caps and Thai staffing ratios.",
        "กิจกรรมที่ได้รับการส่งเสริมอาจได้รับยกเว้นภาษีเงินได้นิติบุคคล ลดอากรนำเข้า และอนุญาตให้ชาวต่างชาติถือครองที่ดินสำหรับโครงการที่อนุมัติ ในพัทยา–ชลบุรี มักประเมินเทคโนโลยีการท่องเที่ยว เวลเนสทางการแพทย์ และกลุ่มอุตสาหกรรมที่เลือก — แต่ละกิจกรรมมีเพดานและสัดส่วนพนักงานไทยเฉพาะ",
        "获促进活动可享企业所得税减免、进口关税优惠，及经批准项目的外籍土地所有权。芭提雅–春武里常见评估旅游科技、医疗康养及选定制造业——各有活动上限与泰籍员工比例。",
        "Продвигаемые виды деятельности могут получить освобождение от налога на прибыль, льготы по импортным пошлинам и право иностранцев владеть землёй для одобренных проектов. В Паттайя–Чонбури часто оценивают туристические технологии, medical wellness и отдельные производственные кластеры — с лимитами и долей тайского персонала.",
      ),
    },
    steps: {
      title: L("Application flow", "ขั้นตอนยื่นขอ", "申请流程", "Процесс подачи"),
      items: [
        {
          title: L("Eligibility screening", "คัดกรองสิทธิ", "资格筛查", "Проверка соответствия"),
          description: L(
            "Match your business plan to BOI activity lists (4.0 industries, tourism, digital, agro-processing).",
            "จับคู่แผนธุรกิจกับรายการกิจกรรม BOI (อุตสาหกรรม 4.0 การท่องเที่ยว ดิจิทัล แปรรูปเกษตร)",
            "将商业计划与 BOI 活动清单匹配（4.0 产业、旅游、数字、农产品加工）。",
            "Сопоставьте план с перечнем BOI (индустрия 4.0, туризм, digital, агропереработка).",
          ),
        },
        {
          title: L("Investment package", "แพ็กเกจการลงทุน", "投资方案", "Инвестиционный пакет"),
          description: L(
            "Capital, machinery, and job-creation commitments documented with timelines and EEC zone benefits.",
            "เงินทุน เครื่องจักร และการสร้างงานพร้อมไทม์ไลน์และสิทธิในเขต EEC",
            "记录资本、设备及就业承诺的时间表及 EEC 区域优惠。",
            "Капитал, оборудование и создание рабочих мест с графиком и льготами зоны EEC.",
          ),
        },
        {
          title: L("BOI submission & interview", "ยื่น BOI และสัมภาษณ์", "BOI 提交与面试", "Подача в BOI и интервью"),
          description: L(
            "Application dossier, projections, and management interviews — often 90–120 days for approval.",
            "แฟ้มคำขอ การคาดการณ์ และสัมภาษณ์ผู้บริหาร — มักใช้เวลาอนุมัติ 90–120 วัน",
            "申请档案、预测及管理层面试——审批通常需 90–120 天。",
            "Досье, прогнозы и интервью с руководством — одобрение часто 90–120 дней.",
          ),
        },
        {
          title: L("Reporting & renewal", "รายงานและต่ออายุ", "报告与续期", "Отчётность и продление"),
          description: L(
            "Annual progress reports, visa privileges for experts, and permit renewals tied to milestones.",
            "รายงานความคืบหน้ารายปี สิทธิวisa ผู้เชี่ยวชาญ และต่ออายุใบอนุญาตตาม milestone",
            "年度进度报告、专家签证特权及与里程碑挂钩的许可续期。",
            "Ежегодные отчёты, визовые льготы для экспертов и продление разрешений по этапам.",
          ),
        },
      ],
    },
    checklist: {
      title: L("Typical BOI dossier", "เอกสาร BOI ทั่วไป", "典型 BOI 材料", "Типовое досье BOI"),
      items: [
        L(
          "Detailed project description & location (EEC map coordinates if applicable)",
          "รายละเอียดโครงการและที่ตั้ง (พิกัด EEC หากเกี่ยวข้อง)",
          "详细项目说明与地点（如适用 EEC 地图坐标）",
          "Описание проекта и локация (координаты EEC при необходимости)",
        ),
        L(
          "Financial projections (3–5 years) with capex breakdown",
          "การคาดการณ์ทางการเงิน (3–5 ปี) พร้อมรายละเอียด capex",
          "3–5 年财务预测及资本支出明细",
          "Финансовые прогнозы (3–5 лет) с разбивкой capex",
        ),
        L(
          "Environmental and energy plans for factory or large hotel schemes",
          "แผนสิ่งแวดล้อมและพลังงานสำหรับโรงงานหรือโรงแรมขนาดใหญ่",
          "工厂或大型酒店项目的环境与能源方案",
          "Экологические и энергетические планы для завода или крупного отеля",
        ),
        L(
          "Shareholder structure and source-of-funds statements",
          "โครงสร้างผู้ถือหุ้นและแหล่งที่มาของเงินทุน",
          "股东结构及资金来源说明",
          "Структура акционеров и источники средств",
        ),
        L(
          "Technology transfer or training plans for 4.0 activities",
          "แผนถ่ายทอดเทคโนโลยีหรือฝึกอบรมสำหรับกิจกรรม 4.0",
          "4.0 活动的技术转移或培训计划",
          "Планы трансфера технологий или обучения для деятельности 4.0",
        ),
      ],
    },
    highlights: {
      title: L("EEC-specific advantages", "ข้อได้เปรียบเฉพาะ EEC", "EEC 专属优势", "Преимущества EEC"),
      items: [
        {
          title: L("Land & property", "ที่ดินและทรัพย์สิน", "土地与物业", "Земля и недвижимость"),
          description: L(
            "Foreign land ownership pathways for promoted projects meeting investment floors.",
            "เส้นทางถือครองที่ดินของต่างชาติสำหรับโครงการที่ได้รับการส่งเสริมตามเกณฑ์เงินลงทุน",
            "符合投资门槛的促进项目可申请外籍土地所有权。",
            "Пути иностранного владения землёй для продвигаемых проектов при выполнении порога инвестиций.",
          ),
        },
        {
          title: L("Visa fast track", "วisa เร่งด่วน", "签证快速通道", "Ускоренные визы"),
          description: L(
            "Work permits and expert visas streamlined for approved positions.",
            "ใบอนุญาตทำงานและวisa ผู้เชี่ยวชาญเร่งสำหรับตำแหน่งที่อนุมัติ",
            "获批岗位可简化工作证与专家签证。",
            "Work permit и экспертные визы упрощаются для одобренных должностей.",
          ),
        },
        {
          title: L("Customs efficiency", "ศุลกากรมีประสิทธิภาพ", "海关便利", "Таможенные льготы"),
          description: L(
            "Duty exemptions on machinery and raw materials for manufacturing promotions.",
            "ยกเว้นอากรเครื่องจักรและวัตถุดิบสำหรับการส่งเสริมการผลิต",
            "制造业促进项目可免机器与原材料关税。",
            "Освобождение от пошлин на оборудование и сырьё для производственных BOI-проектов.",
          ),
        },
      ],
    },
    related: [
      {
        label: L("Company Registration", "จดทะเบียนบริษัท", "公司注册", "Регистрация компании"),
        blurb: L(
          "Entity setup before or in parallel with BOI filing",
          "ตั้งนิติบุคคลก่อนหรือคู่ขนานกับยื่น BOI",
          "BOI 申请前或同步设立实体",
          "Создание юрлица до или параллельно с BOI",
        ),
      },
      {
        label: L("Hotel Business Guide", "คู่มือธุรกิจโรงแรม", "酒店商业指南", "Гид по отелям"),
        blurb: L(
          "EIA and hotel license layers for hospitality BOI",
          "EIA และชั้นใบอนุญาตโรงแรมสำหรับ BOI การบริการ",
          "酒店 BOI 的 EIA 与酒店许可层级",
          "EIA и лицензии отеля для hospitality BOI",
        ),
      },
      {
        label: L("Pattaya Economy", "เศรษฐกิจพัทยา", "芭提雅经济", "Экономика Паттайи"),
        blurb: L(
          "Macro stats for your investment memo",
          "สถิติมหภาคสำหรับ memo การลงทุน",
          "投资备忘录所需的宏观数据",
          "Макростатистика для инвестмемо",
        ),
      },
      ...boiRelatedExtra,
    ],
    ...boiExtendedCopy,
  },
  restaurant: {
    heroAlt: L(
      "Luxury restaurant dining in Pattaya",
      "ร้านอาหารหรูในพัทยา",
      "芭提雅高端餐饮",
      "Ресторан высокого класса в Паттайе",
    ),
    badge: L("Industry Guide", "คู่มืออุตสาหกรรม", "行业指南", "Отраслевой гид"),
    breadcrumb: L("F&B Business", "ธุรกิจ F&B", "餐饮商业", "F&B бизнес"),
    title: L("Restaurant Guide", "เปิดร้านอาหาร", "餐厅指南", "Гид по ресторанам"),
    description: L(
      "Luxury dining and café launches: site selection, kitchen design, and international food-safety standards in a tourism market.",
      "เปิดร้านอาหารหรูและคาเฟ่: เลือกทำเล ออกแบบครัว และมาตรฐานความปลอดภัยอาหารระดับสากลในตลาดท่องเที่ยว",
      "高端餐饮与咖啡馆开业：选址、厨房设计及旅游市场的国际食品安全标准。",
      "Запуск ресторанов и кафе: выбор локации, проект кухни и международные стандарты безопасности пищи.",
    ),
    cta: {
      eyebrow: L("Hot Industry", "อุตสาหกรรมร้อน", "热门行业", "Популярная отрасль"),
      title: L(
        "Start with permits and document checks",
        "เริ่มจากเช็กเอกสารและใบอนุญาตที่ต้องใช้",
        "先从许可与文件检查开始",
        "Начните с проверки документов и лицензий",
      ),
      body: L(
        "See the health-permit checklist, alcohol-license sequence, and common lease pitfalls before you commit.",
        "ดูเช็กลิสต์ใบอนุญาตสุขภาพ ลำดับขอใบอนุญาตแอลกอฮอล์ และจุดที่มักพลาดก่อนเซ็นสัญญาเช่า",
        "查看卫生许可清单、酒类许可顺序，以及签约前常见租约风险点。",
        "Проверьте чеклист санитарных разрешений, порядок алкогольной лицензии и частые риски аренды до подписания.",
      ),
      button: L("Open F&B checklist", "เปิดเช็กลิสต์ F&B", "打开 F&B 清单", "Открыть чеклист F&B"),
    },
    overview: {
      title: L("F&B in Pattaya's tourism cycle", "F&B ในวงจรการท่องเที่ยวพัทยา", "芭提雅旅游周期中的餐饮", "F&B в туристическом цикле Паттайи"),
      body: L(
        "In Pattaya, F&B (Food & Beverage) lives on a tourism calendar: high season drives full dining rooms, while low season rewards operators who lean on delivery, hotel partnerships, and expat regulars. High season is when you test menu pricing, staffing levels, and table turns; low season is when you refine costs and loyalty offers. The key is to treat the 2–4 month setup period, core licenses (trade + Thai FDA / อย. + alcohol), Thai entity, and location choice as one plan — your quick facts above are the guardrails for that plan.",
        "ในพัทยา ธุรกิจ F&B (Food & Beverage) เดินตามปฏิทินท่องเที่ยว: ไฮซีซันดันให้ห้องอาหารเต็ม ส่วนโลว์ซีซันให้รางวัลคนที่พึ่งเดลิเวอรี่ พาร์ตเนอร์โรงแรม และลูกค้าประจำชาวต่างชาติ ไฮซีซันคือช่วงทดสอบราคาเมนู ระดับคน และรอบหมุนโต๊ะ โลว์ซีซันคือช่วงเกลาโครงสร้างต้นทุนและข้อเสนอสำหรับลูกค้าประจำ หัวใจคือมองช่วงเตรียมเปิด 2–4 เดือน ใบอนุญาตหลัก (ใบค้า + อย. + แอลกอฮอล์) นิติบุคคลไทย และการเลือกทำเลเป็นแผนเดียวกัน — ตัวเลขด้านบนคือราวกั้นให้แผนนั้นไม่หลุดกรอบ",
        "在芭提雅，F&B（Food & Beverage）紧贴旅游日历：旺季带来满座餐厅，淡季则奖励那些善用外卖、酒店合作与外籍常客的经营者。旺季是测试菜单定价、人手与翻台率的时间；淡季则用来打磨成本结构和会员/常客方案。关键是把 2–4 个月筹备期、核心许可（营业 + 泰国 FDA/อย. + 酒类）、泰资实体和选址当成一套计划——上方的关键数字就是那套计划的护栏。",
        "В Паттайе F&B (Food & Beverage) живёт по туристическому календарю: в высокий сезон залы заполнены, а низкий сезон вознаграждает тех, кто опирается на доставку, партнёрства с отелями и постоянных expat-гостей. Высокий сезон — время тестировать цены, штат и оборачиваемость столов; низкий — донастраивать издержки и программы лояльности. Важнее всего рассматривать 2–4 месяца подготовки, базовые лицензии (торговая + FDA/อย. + алкоголь), тайское юрлицо и выбор локации как единый план — цифры выше служат для этого планa защитными барьерами.",
      ),
    },
    steps: {
      title: L("Launch sequence", "ลำดับการเปิด", "开业流程", "Последовательность запуска"),
      items: [
        {
          title: L("Entity & lease", "นิติบุคคลและสัญญาเช่า", "实体与租约", "Юрлицо и аренда"),
          description: L(
            "Thai company or partnership, lease review for tourism zoning and exhaust venting rights.",
            "เริ่มจากตั้งบริษัทไทยหรือห้างหุ้นส่วน แล้วตรวจสัญญาเช่าให้ชัดเรื่องโซนท่องเที่ยวและสิทธิทำระบบระบายอากาศ",
            "泰资公司或合伙，审查租约中的旅游分区与排烟权。",
            "Тайская компания или партнёрство, проверка аренды на туристическую зону и вытяжку.",
          ),
        },
        {
          title: L("Construction & kitchen plan", "ก่อสร้างและแผนครัว", "施工与厨房方案", "Строительство и план кухни"),
          description: L(
            "Grease traps, gas certification, and layout approved for health inspection.",
            "เตรียมบ่อดักไขมัน ใบรับรองระบบแก๊ส และผังครัวให้พร้อมสำหรับการตรวจสุขภาพ",
            "油水分离器、燃气认证及通过卫生检查的布局。",
            "Жироуловители, сертификация газа и планировка под санитарную инспекцию.",
          ),
        },
        {
          title: L("Licenses", "ใบอนุญาต", "许可", "Лицензии"),
          description: L(
            "สถานประกอบการ, อย. food license, music if applicable, and alcohol (if desired).",
            "ยื่นใบอนุญาตสถานประกอบการ ใบอนุญาตอาหารจาก อย. และขอใบอนุญาตเพลง/แอลกอฮอล์เพิ่มเติมตามรูปแบบร้าน",
            "สถานประกอบการ、อย. 食品许可、音乐（如适用）及酒类（如需要）。",
            "สถานประกอบการ, лицензия อย., музыка при необходимости и алкоголь.",
          ),
        },
        {
          title: L("Soft opening & audit", "ทดลองเปิดและตรวจความพร้อม", "试营业与审计", "Soft opening и аудит"),
          description: L(
            "Staff food-hygiene training, HACCP-style logs, and tourism authority registration where required.",
            "ทดลองเปิดเพื่อเทรนทีมเรื่องสุขอนามัยอาหาร ทำบันทึกแบบ HACCP และจดทะเบียนท่องเที่ยวหากกฎหมายกำหนด",
            "员工食品卫生培训、HACCP 式记录及必要的旅游部门登记。",
            "Обучение персонала гигиене, HACCP-логи и регистрация в туристическом органе при необходимости.",
          ),
        },
      ],
    },
    checklist: {
      title: L("Health permit checklist", "เช็กลิสต์ใบอนุญาตสุขภาพ", "卫生许可清单", "Чеклист санитарного разрешения"),
      items: [
        L("Kitchen floor plan with hand-wash and storage zones", "ผังครัวพร้อมจุดล้างมือและโซนเก็บ", "含洗手与储存区的厨房平面图", "План кухни с зонами мытья рук и хранения"),
        L("Supplier traceability for high-risk ingredients", "ติดตามแหล่งวัตถุดิบเสี่ยงสูง", "高风险食材供应商追溯", "Traceability поставщиков рискованных ингредиентов"),
        L("Pest control contract and waste disposal vendor", "สัญญากำจัดแมลงและผู้จัดการขยะ", "除虫合同与垃圾处理商", "Договор дезинсекции и вывоза отходов"),
        L("Staff health certificates and training records", "ใบรับรองสุขภาพพนักงานและบันทึกการฝึก", "员工健康证与培训记录", "Медсправки персонала и записи об обучении"),
        L("Alcohol license guide if serving beer, wine, or spirits", "คู่มือใบอนุญาตแอลกอฮอล์หากเสิร์ฟเบียร์ ไวน์ หรือสปirit", "如供应啤酒、葡萄酒或烈酒的酒类许可指南", "Гид по алкогольной лицензии при продаже пива, вина или крепкого"),
      ],
    },
    highlights: {
      title: L("Operator tips", "เคล็ดลับผู้ประกอบการ", "经营者贴士", "Советы операторам"),
      items: [
        {
          title: L("Location matrix", "เมทริกซ์ทำเล", "选址矩阵", "Матрица локаций"),
          description: L(
            "Foot traffic vs rent — Walking Street, Jomtien family strip, Pratumnak sunset cliffs.",
            "คนเดินผ่าน vs ค่าเช่า — Walking Street แถวครอบครัวจอมเทียน หน้าผาพระตำหนัก",
            "人流 vs 租金——Walking Street、Jomtien 家庭带、Pratumnak 日落崖。",
            "Поток vs аренда — Walking Street, семейная полоса Jomtien, скалы Pratumnak.",
          ),
        },
        {
          title: L("Menu & margin", "เมนูและมาร์จิน", "菜单与利润", "Меню и маржа"),
          description: L(
            "Dual-language menus, VAT-inclusive pricing, and import cost for wine lists.",
            "เมนูสองภาษา ราคารวม VAT และต้นทุนนำเข้าไวน์",
            "双语菜单、含 VAT 定价及酒单进口成本。",
            "Двуязычное меню, цены с VAT и импортные затраты на вино.",
          ),
        },
        {
          title: L("Staffing", "บุคลากร", "人员配置", "Персонал"),
          description: L(
            "Work permits for head chef roles; Thai majority on payroll for license renewals.",
            "ใบอนุญาตทำงานสำหรับหัวหน้าเชฟ สัดส่วนไทยบน payroll สำหรับต่อใบอนุญาต",
            "主厨岗位需工作证；续许可需泰籍员工占多数。",
            "Work permit для шеф-повара; большинство тайских сотрудников в штате для продления лицензии.",
          ),
        },
      ],
    },
    related: [
      {
        label: L("Bar Business Guide", "คู่มือธุรกิจบาร์", "酒吧商业指南", "Гид по барам"),
        blurb: L("Nightlife licensing and sound regulations", "ใบอนุญาตไนท์ไลฟ์และกฎเสียง", "夜生活许可与噪音规定", "Лицензии nightlife и нормы шума"),
      },
      {
        label: L("Company Registration", "จดทะเบียนบริษัท", "公司注册", "Регистрация компании"),
        blurb: L("Corporate vehicle before signing lease", "นิติบุคคลก่อนเซ็นสัญญาเช่า", "签约租约前先设立公司", "Юрлицо до подписания аренды"),
      },
      {
        label: L("Fine Dining — Explore", "Fine Dining — สำรวจ", "Fine Dining — 探索", "Fine Dining — Explore"),
        blurb: L("See how premium venues position in Pattaya", "ดูว่าร้านพรีเมียมวางตัวในพัทยาอย่างไร", "了解高端场所在芭提雅如何定位", "Как премиум-заведения позиционируются в Паттайе"),
      },
      ...restaurantRelatedExtra,
    ],
    ...restaurantExtendedCopy,
  },
} satisfies Pick<
  Record<BusinessPageId, BusinessPageCopy>,
  "thai-company" | "boi" | "restaurant"
>;

export const businessPageCopy: Record<BusinessPageId, BusinessPageCopy> = {
  ...businessPageCopyPart1,
  ...businessPageCopyRest,
};
