import { L } from "@/lib/i18n/living-helpers";

export const hotelExtendedCopy = {
  ctaSecondary: {
    button: L("See reading order", "ดูลำดับอ่านคู่มือ", "查看阅读顺序", "Порядок чтения"),
  },
  quickFacts: {
    title: L("Key numbers at a glance", "ตัวเลขสำคัญโดยย่อ", "关键数据一览", "Цифры вкратце"),
    items: [
      {
        label: L("EIA trigger", "เกณฑ์ EIA", "EIA 触发", "Триггер EIA"),
        value: L("Large room counts / footprint", "จำนวนห้องหรือพื้นที่ใหญ่", "大房间数/占地面积", "Много номеров / площадь"),
      },
      {
        label: L("License path", "เส้นทางใบอนุญาต", "许可路径", "Лицензии"),
        value: L("Hotel + tourism + building", "โรงแรม + ท่องเที่ยว + ก่อสร้าง", "酒店 + 旅游 + 建设", "Отель + туризм + стройка"),
      },
      {
        label: L("Typical capex", "เงินลงทุนโดยประมาณ", "典型资本支出", "Capex"),
        value: L("Project-specific", "ขึ้นกับโครงการ", "因项目而异", "По проекту"),
      },
      {
        label: L("BOI potential", "โอกาส BOI", "BOI 可能", "BOI"),
        value: L("Large hospitality projects", "โครงการโรงแรมขนาดใหญ่", "大型酒店项目", "Крупные hospitality"),
      },
    ],
  },
  legalNotes: {
    title: L("Investment reminders", "ข้อควรระวังการลงทุน", "投资提醒", "Напоминания"),
    items: [
      L(
        "โรงแรม vs อพาร์ทเมนท์ licensing differs — marketing a condo as daily rental without correct license is high risk.",
        "ใบอนุญาตโรงแรมกับอพาร์ตเมนต์เป็นคนละประเภท หากปล่อยเช่ารายวันโดยไม่มีใบอนุญาตที่ถูกต้องมีความเสี่ยงสูง",
        "酒店与公寓许可不同 — 无正确许可将公寓当日租营销风险很高。",
        "Лицензии โรงแรม и condo различаются — нельзя сдавать condo как hotel без лицензии.",
      ),
      L(
        "EIA and building permits can add 12+ months — budget timeline before presales.",
        "กระบวนการ EIA และใบอนุญาตก่อสร้างอาจเพิ่มเวลาอีก 12 เดือนหรือมากกว่า ควรวางแผนก่อนเปิดพรีเซล",
        "EIA 与建设许可可能增加 12 个月以上 — 预售前规划时间。",
        "EIA и стройка — +12 месяцев, планируйте до presales.",
      ),
      L(
        "Foreign quota on condos and land rules for hotel sites need Chanote-level due diligence.",
        "โควตาต่างชาติคอนโดและกฎที่ดินสำหรับโรงแรมต้องตรวจโฉนดระดับลึก",
        "公寓外资配额及酒店用地规则需 Chanote 级尽职调查。",
        "Квота иностранцев и Chanote — due diligence обязателен.",
      ),
    ],
  },
  readingPath: {
    title: L("Recommended reading order", "ลำดับอ่านที่แนะนำ", "建议阅读顺序", "Порядок"),
    intro: L(
      "For investors and operators planning a hotel or condo-hotel in Chonburi.",
      "สำหรับนักลงทุนและผู้ประกอบการที่กำลังวางแผนทำโรงแรมหรือคอนโด-โฮเทลในชลบุรี",
      "面向在春武里规划酒店或 condo-hotel 的投资者与运营方。",
      "Для инвесторов hotel / condo-hotel в Чонбури.",
    ),
    items: [
      {
        label: L("Finish this hotel guide", "อ่านคู่มือโรงแรมนี้ให้จบ", "读完本酒店指南", "Завершите гид"),
        description: L("License flow, EIA checklist, investment lens.", "ดูภาพรวมขั้นตอนใบอนุญาต เช็กลิสต์ EIA และมุมลงทุน", "许可流程、EIA 清单与投资视角。", "Лицензии, EIA, инвестиции."),
      },
      {
        label: L("Company registration", "จดทะเบียนบริษัท", "公司注册", "Регистрация"),
        description: L("Thai entity for ownership and contracts.", "นิติบุคคลไทยสำหรับกรรมสิทธิ์และสัญญา", "泰资主体用于产权与合同。", "Тайское юрлицо."),
      },
      {
        label: L("BOI promotion", "สิทธิ BOI", "BOI 促进", "BOI"),
        description: L("If capex and activity list qualify.", "ใช้ตรวจว่าขนาดลงทุนและรูปแบบกิจการเข้าเกณฑ์ส่งเสริมหรือไม่", "若资本支出与活动清单符合。", "При соответствии capex и activity list."),
      },
      {
        label: L("Property investment", "ลงทุนอสังหา", "房产投资", "Недвижимость"),
        description: L("Acquisition, quota, and yield context.", "ต่อยอดเรื่องการซื้อ โควตาต่างชาติ และการประเมินผลตอบแทน", "收购、配额与收益背景。", "Покупка, квота, yield."),
      },
      {
        label: L("Pattaya economy data", "ข้อมูลเศรษฐกิจพัทยา", "芭提雅经济数据", "Экономика"),
        description: L("RevPAR assumptions and demand drivers.", "ใช้ประกอบสมมติฐาน RevPAR และวิเคราะห์ปัจจัยหนุนดีมานด์", "RevPAR 假设与需求驱动。", "RevPAR и спрос."),
      },
    ],
  },
  faq: {
    title: L("Frequently asked questions", "คำถามที่พบบ่อย", "常见问题", "FAQ"),
    items: [
      {
        q: L("When is EIA required?", "เมื่อไหร่ต้องทำ EIA?", "何时需要 EIA？", "Когда нужен EIA?"),
        a: L(
          "Large resorts, high room counts, or sensitive coastal zones trigger environmental review — confirm with consultants before land deposits.",
          "รีสอร์ตใหญ่ ห้องจำนวนมาก หรือพื้นที่ชายฝั่งอ่อนไหวต้องรีวิวสิ่งแวดล้อม — ยืนยันก่อนวางมัดจำที่ดิน",
          "大型度假村、高房间数或敏感海岸带需环境审查 — 付土地定金前确认。",
          "Крупные курорты и чувствительные зоны — EIA до депозита.",
        ),
      },
      {
        q: L("Hotel license vs condo-hotel?", "ใบโรงแรมกับ condo-hotel?", "酒店许可 vs condo-hotel？", "Hotel vs condo-hotel?"),
        a: L(
          "Different registration paths, foreign room quotas, and fire codes — structure must match how you sell rooms (nightly vs long lease).",
          "เส้นทางจดทะเบียน โควตาห้องต่างชาติ และมาตรฐานอาคารต่างกัน โครงสร้างโครงการต้องสอดคล้องกับรูปแบบขายห้อง (รายวันหรือระยะยาว)",
          "登记路径、外籍房间配额与消防规范不同 — 结构须匹配销售方式。",
          "Разные пути регистрации и квоты.",
        ),
      },
      {
        q: L("Can foreigners own the hotel land?", "ชาวต่างชาติถือครองที่ดินโรงแรมได้ไหม?", "外国人能拥有酒店土地吗？", "Иностранцы и земля?"),
        a: L(
          "Generally restricted — BOI-promoted projects may allow land for approved use; condos use foreign quota units. Legal structuring is essential.",
          "โดยทั่วไปมีข้อจำกัด โครงการที่ได้ BOI บางกรณีอาจถือครองได้ตามเงื่อนไขที่อนุมัติ ส่วนคอนโดใช้ระบบโควตาต่างชาติ จึงต้องวางโครงสร้างกฎหมายให้ชัดตั้งแต่ต้น",
          "通常受限 — BOI 促进项目或可按批准用途持有土地；公寓用配额。须法律架构。",
          "Ограничено — BOI или квота condo.",
        ),
      },
      {
        q: L("How long until opening?", "เปิดได้ภายในกี่เดือน?", "多久能开业？", "Срок до открытия?"),
        a: L(
          "Boutique conversions: 6–12 months if permits exist. Ground-up beach resorts: often 2–4 years including EIA and construction.",
          "รีโนเวตโรงแรมขนาดเล็กที่เอกสารพร้อมอาจใช้ 6–12 เดือน แต่โครงการสร้างใหม่ขนาดใหญ่ริมทะเลมักใช้ 2–4 ปีเมื่อรวม EIA และงานก่อสร้าง",
          "精品改造：若已有许可约 6–12 个月。海滨新建度假村：含 EIA 与建设常 2–4 年。",
          "Бутик — 6–12 мес.; курорт с нуля — 2–4 года.",
        ),
      },
      {
        q: L("Franchise or independent?", "แฟรนไชส์หรืออินดี้?", "加盟还是独立？", "Franchise?"),
        a: L(
          "Franchise brings reservation systems and brand standards but fees and renovation cycles — independent needs stronger marketing spend.",
          "แฟรนไชส์ได้ระบบจองและมาตรฐานแบรนด์ที่ชัด แต่มีค่าธรรมเนียมต่อเนื่อง ส่วนแบรนด์อิสระยืดหยุ่นกว่าแต่ต้องลงทุนการตลาดเองมากขึ้น",
          "加盟带来预订系统与品牌标准但有费用；独立品牌需更多营销投入。",
          "Franchise — система и fees; independent — маркетинг.",
        ),
      },
      {
        q: L("Does BOI apply to hotels?", "โรงแรมเข้า BOI ได้ไหม?", "酒店能申请 BOI 吗？", "BOI для отелей?"),
        a: L(
          "Large projects with qualifying activities and investment levels may — screen early with BOI advisors before architectural spend.",
          "มีโอกาสสำหรับโครงการที่ขนาดลงทุนและกิจกรรมเข้าเกณฑ์ ควรให้ที่ปรึกษา BOI ช่วยคัดกรองก่อนเริ่มใช้งบงานออกแบบจำนวนมาก",
          "符合条件的大型项目可能可以 — 建筑设计支出前先与 BOI 顾问筛查。",
          "Крупные проекты могут — screening до проектирования.",
        ),
      },
      {
        q: L("Insurance and pool safety?", "ประกันและความปลอดภัยสระ?", "保险与泳池安全？", "Страхование и бассейн?"),
        a: L(
          "Insurers require SOPs for pools, beaches, and elevators — factor into pre-opening audits.",
          "บริษัทประกันมักกำหนดให้มี SOP สำหรับสระ พื้นที่ชายหาด และลิฟต์ จึงควรเตรียมไว้ในแผนตรวจความพร้อมก่อนเปิด",
          "保险公司要求泳池、海滩与电梯 SOP — 纳入开业前审计。",
          "Страховщики требуют SOP — до открытия.",
        ),
      },
      {
        q: L("Who manages filings?", "ใครยื่นเอกสาร?", "谁负责办理？", "Кто подаёт?"),
        a: L(
          "Hospitality consultants, law firms, and environmental consultants coordinate tourism office, EIA, and construction permits.",
          "โดยทั่วไปจะใช้ทีมที่ปรึกษาโรงแรม ทนาย และผู้เชี่ยวชาญด้านสิ่งแวดล้อมช่วยประสานหน่วยงานท่องเที่ยว EIA และใบอนุญาตก่อสร้าง",
          "酒店顾问、律所与环境顾问协调旅游局、EIA 与建设许可。",
          "Консультанты, юристы и EIA-специалисты.",
        ),
      },
    ],
  },
  servicePoints: {
    title: L("Where approvals are filed", "หน่วยงานอนุมัติ", "审批机关", "Органы"),
    intro: L(
      "Large projects use multi-agency timelines — expect Bangkok and provincial coordination.",
      "โครงการใหญ่ประสานหลายหน่วยงาน — คาดทั้งกรุงเทพและจังหวัด",
      "大型项目涉及多机关协调 — 曼谷与省级并重。",
      "Крупные проекты — несколько ведомств.",
    ),
    items: [
      {
        name: L("Provincial Tourism Office", "สำนักงานการท่องเที่ยวจังหวัด", "省旅游局", "Provincial tourism"),
        note: L("Hotel registration and classification.", "จดทะเบียนและจำแนกประเภทโรงแรม", "酒店登记与分类。", "Регистрация и классификация."),
      },
      {
        name: L("Office of Natural Resources (EIA)", "สำนักงานทรัพยากรธรรมชาติ (EIA)", "自然资源厅（EIA）", "EIA office"),
        note: L("Environmental impact for large schemes.", "พิจารณาผลกระทบสิ่งแวดล้อมสำหรับโครงการขนาดใหญ่", "大型项目环境影响。", "Экология крупных проектов."),
      },
      {
        name: L("Local building control", "ควบคุมอาคารท้องถิ่น", "地方建筑管理", "Стройконтроль"),
        note: L("Construction permits and occupancy.", "ออกใบอนุญาตก่อสร้างและอนุญาตใช้อาคาร", "建设许可与 occupancy。", "Стройка и occupancy."),
      },
    ],
  },
};

export const hotelRelatedExtra = [
  {
    label: L("Restaurant guide", "คู่มือร้านอาหาร", "餐厅指南", "Ресторан"),
    blurb: L("F&B outlets inside the property", "แนวทางร้านอาหารและเครื่องดื่มภายในโครงการ", "物业内餐饮", "F&B в объекте"),
  },
  {
    label: L("Bar guide", "คู่มือบาร์", "酒吧指南", "Бар"),
    blurb: L("Lobby bars and event venues", "แนวทางล็อบบี้บาร์และพื้นที่จัดงาน", "大堂酒吧与活动场地", "Lobby bars"),
  },
  {
    label: L("Work permit guide", "คู่มือ work permit", "工作证指南", "Work permit"),
    blurb: L("GM and executive team visas", "วีซ่าและใบอนุญาตทำงานสำหรับผู้บริหาร", "总经理与高管签证", "Визы руководства"),
  },
];
