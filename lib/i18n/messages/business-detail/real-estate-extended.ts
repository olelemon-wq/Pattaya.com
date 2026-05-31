import { L } from "@/lib/i18n/living-helpers";

/** Extended guide sections for /business/investment/real-estate */
export const realEstateExtendedCopy = {
  ctaSecondary: {
    button: L(
      "See reading order",
      "ดูลำดับอ่านคู่มือ",
      "查看阅读顺序",
      "Порядок чтения",
    ),
  },
  quickFacts: {
    title: L(
      "Key numbers at a glance",
      "ตัวเลขสำคัญโดยย่อ",
      "关键数据一览",
      "Цифры вкратце",
    ),
    items: [
      {
        label: L("Foreign condo quota", "โควตาคอนโดต่างชาติ", "外籍公寓配额", "Foreign quota"),
        value: L(
          "Typically 49% of sellable area",
          "โดยทั่วไป 49% ของพื้นที่ขายได้",
          "通常为可售面积的 49%",
          "Обычно 49% продаваемой площади",
        ),
      },
      {
        label: L("Transfer fees (typical)", "ค่าโอนโดยประมาณ", "过户费（常见）", "Transfer fees"),
        value: L(
          "2% each side + stamp — negotiate in SPA",
          "ฝ่ายละ 2% + อากร — ตกลงในสัญญา",
          "双方各 2% + 印花税 — 在 SPA 中约定",
          "По 2% + гербовый — в SPA",
        ),
      },
      {
        label: L("Due diligence window", "ช่วง due diligence", "尽调周期", "Due diligence"),
        value: L(
          "2–4 weeks before reservation",
          "2–4 สัปดาห์ก่อนจอง",
          "订金前 2–4 周",
          "2–4 недели до брони",
        ),
      },
      {
        label: L("Hot districts", "ย่านยอดนิยม", "热门区域", "Районы"),
        value: L(
          "Jomtien, Pratumnak, Wong Amat",
          "จอมเทียน พระตำหนัก วงอamat",
          "Jomtien、Pratumnak、Wong Amat",
          "Jomtien, Pratumnak, Wong Amat",
        ),
      },
    ],
  },
  legalNotes: {
    title: L(
      "Before you reserve",
      "ก่อนจองหรือวางมัดจำ",
      "预订或付定金前",
      "Перед бронированием",
    ),
    items: [
      L(
        "Condo foreign quota is per building — verify the juristic person certificate before paying a reservation deposit.",
        "โควตาต่างชาติคิดต่ออาคาร — ขอใบรับรองจากนิติบุคคลก่อนจ่ายมัดจำจอง",
        "外籍配额按栋计算 — 付预订金前须向 condo 法人索取证明。",
        "Квота иностранцев — по зданию; сертификат juristic person до депозита.",
      ),
      L(
        "Villas and land cannot be freehold for most foreigners — leasehold, Thai company structures, or BOI-linked schemes need counsel review.",
        "วilla และที่ดินส่วนใหญ่ต่างชาติถือ freehold ไม่ได้ — leasehold บริษัทไทย หรือโครงการ BOI ต้องให้ทนายตรวจ",
        "别墅与土地多数外国人无法 freehold — leasehold、泰资公司或 BOI 方案须律师审查。",
        "Виллы и земля — не freehold; leasehold, компания или BOI — с юристом.",
      ),
      L(
        "Off-plan projects require escrow and milestone schedules — developer insolvency risk is real; check DBD filings and past completions.",
        "โครงการ off-plan ต้องมี escrow และ milestone — ความเสี่ยงผู้พัฒนาล้มละลายมีจริง ตรวจ DBD และโครงการที่ส่งมอบแล้ว",
        "Off-plan — escrow и этапы; проверьте DBD и сданные проекты.",
        "期房须有 escrow 与里程碑 — 开发商破产风险真实，须查 DBD 与已交付项目。",
      ),
    ],
  },
  readingPath: {
    title: L(
      "Recommended reading order",
      "ลำดับอ่านที่แนะนำ",
      "建议阅读顺序",
      "Порядок чтения",
    ),
    intro: L(
      "For buyers comparing condos, villas, and yield plays in Chonburi.",
      "สำหรับผู้ซื้อที่เปรียบเทียบคอนโด วilla และการลงทุนเช่าในชลบุรี",
      "面向在春武里比较公寓、别墅与租赁收益的投资者。",
      "Для покупателей condo, вилл и yield в Чонбури.",
    ),
    items: [
      {
        label: L(
          "Finish this property guide",
          "อ่านคู่มืออสังหานี้ให้จบ",
          "读完本房产指南",
          "Завершите гид",
        ),
        description: L(
          "Acquisition steps, buyer checklist, and district segments.",
          "ขั้นตอนซื้อ เช็กลิสต์ผู้ซื้อ และย่านเด่น",
          "收购流程、买家清单与重点板块。",
          "Шаги покупки, чеклист и районы.",
        ),
      },
      {
        label: L("Pattaya economy data", "ข้อมูลเศรษฐกิจพัทยา", "芭提雅经济数据", "Экономика"),
        description: L(
          "Visitor flows, infrastructure, and price drivers.",
          "กระแสนักท่องเที่ยว โครงสร้างพื้นฐาน และปัจจัยราคา",
          "游客流量、基建与价格驱动因素。",
          "Туристы, инфраструктура и цены.",
        ),
      },
      {
        label: L("Company registration", "จดทะเบียนบริษัท", "公司注册", "Регистрация"),
        description: L(
          "If you hold assets in a Thai company or need a local entity for contracts.",
          "หากถือทรัพย์ในชื่อบริษัทไทยหรือต้องการนิติบุคคลสำหรับสัญญา",
          "若以泰资公司持有资产或需本地主体签约。",
          "Если активы на тайской компании.",
        ),
      },
      {
        label: L("BOI promotion", "สิทธิ BOI", "BOI 促进", "BOI"),
        description: L(
          "EEC-linked commercial land and large hospitality structures.",
          "ที่ดินเชิงพาณิชย์ EEC และโครงการ hospitality ใหญ่",
          "EEC 关联商业用地及大型酒店结构。",
          "Земля EEC и крупный hospitality.",
        ),
      },
      {
        label: L("Hotel business guide", "คู่มือธุรกิจโรงแรม", "酒店商业指南", "Гид по отелям"),
        description: L(
          "Condo-hotel licensing and operator agreements.",
          "ใบอนุญาต condo-hotel และสัญญาผู้บริหาร",
          "condo-hotel 许可与运营方协议。",
          "Лицензии condo-hotel и оператор.",
        ),
      },
    ],
  },
  faq: {
    title: L(
      "Frequently asked questions",
      "คำถามที่พบบ่อย",
      "常见问题",
      "FAQ",
    ),
    items: [
      {
        q: L(
          "Can foreigners own a condo in Pattaya?",
          "ชาวต่างชาติถือครองคอนโดในพัทยาได้ไหม?",
          "外国人能在芭提雅拥有公寓吗？",
          "Иностранцы и condo?",
        ),
        a: L(
          "Yes, within the 49% foreign quota of each condominium juristic person, with funds transferred from abroad in foreign currency per Bank of Thailand rules.",
          "ได้ ภายในโควตา 49% ของนิติบุคคลคอนโดแต่ละแห่ง โดยนำเงินจากต่างประเทศตามกฎธปท.",
          "可以，在每栋 condo 法人 49% 外籍配额内，并按泰国央行规定从境外汇入外币。",
          "Да, в пределах 49% квоты с переводом валюты из-за рубежа.",
        ),
      },
      {
        q: L(
          "What is the difference between freehold and leasehold?",
          "freehold กับ leasehold ต่างกันอย่างไร?",
          "freehold 与 leasehold 有何区别？",
          "Freehold vs leasehold?",
        ),
        a: L(
          "Condo units can be freehold for qualifying foreign buyers. Land and most villas use long-term lease (often 30+30 years) or Thai company structures — each has tax and control implications.",
          "ยูนิตคอนโดอาจ freehold สำหรับต่างชาติที่เข้าเกณฑ์ ที่ดินและวilla ส่วนใหญ่ใช้เช่าระยะยาวหรือโครงสร้างบริษัท — มีผลภาษีและการควบคุมต่างกัน",
          "公寓单元符合条件的外国人可 freehold；土地与多数别墅采用长期 lease（常见 30+30 年）或泰资公司结构 — 税务与控制权各异。",
          "Condo — freehold; земля и виллы — lease или компания.",
        ),
      },
      {
        q: L(
          "How are transfer taxes split?",
          "ค่าภาษีโอนแบ่งอย่างไร?",
          "过户税如何分摊？",
          "Кто платит transfer tax?",
        ),
        a: L(
          "Typical practice is 2% transfer fee, 3.3% business tax or 0.5% stamp duty, and withholding tax depending on seller status — negotiate in the sales agreement; do not assume developer marketing sheets.",
          "โดยทั่วไปค่าโอน 2% ภาษีธุรกิจหรืออากร และภาษีหัก ณ ที่จ่ายตามสถานะผู้ขาย — ตกลงในสัญญา อย่าอิงแผ่นพับการตลาดอย่างเดียว",
          "常见为 2% 过户费、3.3% 营业税或 0.5% 印花税及视卖方身份的预扣税 — 在买卖合同中约定，勿仅信开发商宣传页。",
          "2% transfer, налоги по статусу продавца — фиксируйте в SPA.",
        ),
      },
      {
        q: L(
          "Is off-plan safer than resale?",
          "off-plan ปลอดภัยกว่ามือสองไหม?",
          "期房比二手房更安全吗？",
          "Off-plan vs resale?",
        ),
        a: L(
          "Neither is automatically safer. Off-plan needs escrow law compliance and developer track record; resale needs title search, debt clearance, and building condition — budget legal fees for both.",
          "ไม่มีฝ่ายไหนปลอดภัยกว่าเสมอ off-plan ต้อง escrow และประวัติผู้พัฒนา มือสองต้องค้นโฉนด เคลียร์หนี้ และสภาพอาคาร",
          "并非孰优孰劣。期房须符合 escrow 法并审查开发商；二手房须产权查询、清债与建筑状况 — 两者都应预留律师费。",
          "Оба пути требуют due diligence и юриста.",
        ),
      },
      {
        q: L(
          "What rental yield is realistic?",
          "yield เช่าจริงอยู่ที่เท่าไหร่?",
          "合理租金收益率是多少？",
          "Реалистичный yield?",
        ),
        a: L(
          "Stress-test with low-season occupancy. Beach studios may gross 5–8% before fees, management, and vacancy — net returns are lower. Luxury Pratumnak units trade velocity for rate.",
          "ทดสอบด้วย occupancy โลว์ซีซัน studio ริมหาดอาจ gross 5–8% ก่อนค่าธรรมเนียม บริหาร และว่าง — สุทธิต่ำกว่า",
          "用淡季入住率压力测试。海滨 studio 毛收益或达 5–8%（未扣管理费与空置）—— 净回报更低。",
          "Тестируйте low season; gross 5–8% до расходов.",
        ),
      },
      {
        q: L(
          "Do I need a Thai company to buy?",
          "ต้องมีบริษัทไทยเพื่อซื้อไหม?",
          "买房需要泰资公司吗？",
          "Нужна ли тайская компания?",
        ),
        a: L(
          "Not for quota condos purchased in your name. Company structures for land or villa leases carry compliance and nominee risks — only use schemes reviewed by licensed Thai counsel.",
          "ไม่จำเป็นสำหรับคอนโดในโควตาที่ซื้อในชื่อตนเอง โครงสร้างบริษัทสำหรับที่ดินหรือเช่าวilla มีความเสี่ยง compliance — ใช้เฉพาะแบบที่ทนายไทยตรวจแล้ว",
          "配额内以个人名义购买的 condo 不需要。土地或别墅 lease 的公司架构有合规与代持风险 — 仅采用泰籍律师审查过的方案。",
          "Для quota condo — нет; для земли — только с юристом.",
        ),
      },
      {
        q: L(
          "What documents should my lawyer check?",
          "ทนายควรตรวจเอกสารอะไร?",
          "律师应审查哪些文件？",
          "Какие документы?",
        ),
        a: L(
          "Chanote title, juristic person minutes on quota, building permits, common fee arrears, encumbrances, and whether the seller is corporate or individual (withholding differs).",
          "โฉนด Chanote มตินิติบุคคลเรื่องโควตา ใบอนุญาตอาคาร ค้าง common fee ภาระผูกพัน และสถานะผู้ขาย",
          "Chanote 产权、法人配额决议、建设许可、物业费欠费、负担及卖方为公司或个人（预扣税不同）。",
          "Chanote, квота, разрешения, долги, обременения.",
        ),
      },
      {
        q: L(
          "Where do transfers happen?",
          "โอนกรรมสสิทธิ์ที่ไหน?",
          "在哪里办理过户？",
          "Где transfer?",
        ),
        a: L(
          "At the local Land Office (Chonburi / Pattaya district) on the agreed date with cashier’s cheques and all parties present — your agent or lawyer schedules the queue.",
          "ที่สำนักงานที่ดินท้องที่ (ชลบุรี/พัทยา) ในวันที่ตกลง พร้อมแคชเชียร์เช็คและคู่สัญญาครบ — เอเจนท์หรือทนายนัดคิว",
          "在当地土地厅（春武里/芭提雅辖区）按约定日办理，须支票及各方到场 — 由代理或律师预约。",
          "Land Office Чонбури/Паттайя в согласованную дату.",
        ),
      },
    ],
  },
  servicePoints: {
    title: L(
      "Where transactions are filed",
      "หน่วยงานที่เกี่ยวข้อง",
      "相关办理机关",
      "Органы",
    ),
    intro: L(
      "Buyers usually work through licensed agents and Thai counsel; these offices appear on transfer day.",
      "ผู้ซื้อมักผ่านเอเจนท์และทนายไทย — หน่วยงานเหล่านี้ปรากฏในวันโอน",
      "买家通常经持牌代理与泰籍律师办理 — 过户日会涉及以下机关。",
      "Покупатели работают через агентов и юристов; в день transfer — эти ведомства.",
    ),
    items: [
      {
        name: L(
          "Chonburi Land Office",
          "สำนักงานที่ดินจังหวัดชลบุรี",
          "春武里土地厅",
          "Land Office Чонбури",
        ),
        note: L(
          "Title transfer, registration, and mortgage discharge.",
          "โอนกรรมสิทธิ์ จดทะเบียน และปลดจำนอง",
          "产权过户、登记及解除抵押。",
          "Transfer, регистрация, снятие ипотеки.",
        ),
      },
      {
        name: L(
          "Condominium juristic person",
          "นิติบุคคลอาคารชุด",
          "公寓法人",
          "Juristic person condo",
        ),
        note: L(
          "Foreign quota certificate and house rules.",
          "ใบรับรองโควตาต่างชาติและข้อบังคับอาคาร",
          "外籍配额证明与大楼规约。",
          "Сертификат квоты и правила здания.",
        ),
      },
      {
        name: L(
          "Revenue Department (local)",
          "กรมสรรพากร (ท้องถิ่น)",
          "税务局（地方）",
          "Revenue (местное)",
        ),
        note: L(
          "Transfer fee, stamp duty, and withholding filings on sale day.",
          "ค่าโอน อากร และภาษีหัก ณ ที่จ่ายในวันขาย",
          "过户费、印花税及销售日预扣申报。",
          "Transfer fee, гербовый сбор, withholding.",
        ),
      },
    ],
  },
};

export const realEstateRelatedExtra = [
  {
    label: L(
      "Company registration",
      "จดทะเบียนบริษัท",
      "公司注册",
      "Регистрация компании",
    ),
    blurb: L(
      "Thai entity for leases and company-held assets",
      "นิติบุคคลไทยสำหรับเช่าและทรัพย์ในชื่อบริษัท",
      "泰资主体用于租约与公司持有资产",
      "Тайское юрлицо для lease и активов",
    ),
  },
  {
    label: L("BOI promotion", "สิทธิ BOI", "BOI 促进", "BOI"),
    blurb: L(
      "EEC commercial land and promoted projects",
      "ที่ดินเชิงพาณิชย์ EEC และโครงการส่งเสริม",
      "EEC 商业用地及促进项目",
      "Земля EEC и BOI-проекты",
    ),
  },
  {
    label: L(
      "Retirement visa guide",
      "คู่มือวisa เกษียณ",
      "退休签证指南",
      "Retirement visa",
    ),
    blurb: L(
      "Long-stay options for second-home buyers",
      "ตัวเลือกพำนักระยะยาวสำหรับผู้ซื้อบ้านที่สอง",
      "第二居所买家的长期居留选项",
      "Долгосрочное пребывание для second-home",
    ),
  },
];
