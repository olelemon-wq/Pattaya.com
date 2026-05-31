import { L } from "@/lib/i18n/living-helpers";

/** Extended guide sections for /business/company-setup/boi */
export const boiExtendedCopy = {
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
        label: L("Typical approval time", "ระยะพิจารณาโดยประมาณ", "常见审批周期", "Срок рассмотрения"),
        value: L("90–120 days", "90–120 วัน", "90–120 天", "90–120 дней"),
      },
      {
        label: L("Corporate tax relief", "สิทธิภาษีนิติบุคคล", "企业所得税优惠", "Налог на прибыль"),
        value: L(
          "Often 3–8 years exempt (by activity)",
          "มักยกเว้น 3–8 ปี (ตามกิจกรรม)",
          "常见豁免 3–8 年（按活动）",
          "Часто 3–8 лет (по виду деятельности)",
        ),
      },
      {
        label: L("Minimum investment", "เงินลงทุนขั้นต่ำ", "最低投资", "Мин. инвестиции"),
        value: L(
          "Varies by activity — often 1M+ THB",
          "ต่างตามกิจกรรม — มัก 1 ล้านบาทขึ้นไป",
          "因活动而异 — 通常 100 万泰铢以上",
          "Зависит от деятельности — часто от 1 млн+ бат",
        ),
      },
      {
        label: L("Pattaya–Chonburi", "พัทยา–ชลบุรี", "芭提雅–春武里", "Паттайя–Чонбури"),
        value: L(
          "Inside EEC — extra zone incentives",
          "อยู่ใน EEC — สิทธิเพิ่มในเขต",
          "属 EEC — 区内额外激励",
          "В EEC — доп. льготы зоны",
        ),
      },
    ],
  },
  legalNotes: {
    title: L(
      "Before you apply",
      "ก่อนยื่นขอ",
      "申请前须知",
      "Перед подачей",
    ),
    items: [
      L(
        "BOI promotion binds you to approved capital, hiring, and production milestones. Missing targets can cancel tax privileges.",
        "สิทธิ BOI ผูกกับเงินลงทุน การจ้างงาน และ milestone ที่อนุมัติ — ไม่บรรลุอาจเสียสิทธิภาษี",
        "BOI 促进与获批投资、雇佣及投产里程碑绑定 — 未达标可能丧失税收优惠。",
        "BOI привязывает к капиталу, найму и этапам — невыполнение отменяет льготы.",
      ),
      L(
        "Your BOI activity code must match real operations. A restaurant or small retail plan rarely qualifies; manufacturing, large hotels, and targeted tech projects are screened individually.",
        "รหัสกิจกรรม BOI ต้องตรงกับการดำเนินงานจริง ร้านอาหารหรือค้าปลีกเล็กมักไม่เข้าเกณฑ์ — โรงงาน โรงแรมใหญ่ และเทคที่กำหนดจะพิจารณาเป็นราย",
        "BOI 活动代码须与实际经营一致；小餐饮/零售通常不符合；工厂、大型酒店及指定科技项目逐项审核。",
        "Код BOI должен совпадать с реальной деятельностью; малый F&B/ритейл редко подходит.",
      ),
      L(
        "Approval is not the finish line — annual progress reports, visa conditions, and customs filings continue for years.",
        "การอนุมัติไม่ใช่จุดจบ — รายงานประจำปี เงื่อนไขวisa และศุลกากรดำเนินต่อหลายปี",
        "获批并非终点 — 年度报告、签证条件与海关申报将持续多年。",
        "Одобрение — не финал: ежегодные отчёты и compliance годами.",
      ),
    ],
  },
  readingPath: {
    title: L(
      "Recommended reading order",
      "ลำดับอ่านที่แนะนำ",
      "建议阅读顺序",
      "Рекомендуемый порядок",
    ),
    intro: L(
      "Use this page to decide if BOI fits your project, then follow the linked guides in order.",
      "ใช้หน้านี้ตัดสินใจว่า BOI เหมาะกับโครงการหรือไม่ แล้วอ่านคู่มือที่ลิงก์ตามลำดับ",
      "用本页判断 BOI 是否适合您的项目，再按顺序阅读链接指南。",
      "Определите, подходит ли BOI, затем читайте гайды по порядку.",
    ),
    items: [
      {
        label: L(
          "Finish this BOI guide",
          "อ่านคู่มือ BOI นี้ให้จบ",
          "读完本 BOI 指南",
          "Завершите этот гайд BOI",
        ),
        description: L(
          "Steps, dossier checklist, and compliance notes below.",
          "ขั้นตอน รายการเอกสาร และข้อควรระวังด้านล่าง",
          "下方步骤、材料清单与合规说明。",
          "Шаги, досье и compliance ниже.",
        ),
      },
      {
        label: L("Company registration", "จดทะเบียนบริษัท", "公司注册", "Регистрация компании"),
        description: L(
          "Set up or align your Thai entity before or in parallel with BOI filing.",
          "ตั้งหรือปรับนิติบุคคลไทยก่อนหรือคู่ขนานกับยื่น BOI",
          "在 BOI 申请前或同步设立/调整泰资实体。",
          "Создайте или согласуйте тайское юрлицо до или параллельно с BOI.",
        ),
      },
      {
        label: L("Industry operating guide", "คู่มือบริหารตามอุตสาหกรรม", "行业运营指南", "Отраслевой гид"),
        description: L(
          "Hotel, factory, or F&B permits that stack on top of BOI approval.",
          "ใบอนุญาตโรงแรม โรงงาน หรือ F&B ที่ต่อจาก BOI",
          "BOI 获批后叠加的酒店、工厂或餐饮许可。",
          "Лицензии отеля, завода или F&B поверх BOI.",
        ),
      },
      {
        label: L("Pattaya economy data", "ข้อมูลเศรษฐกิจพัทยา", "芭提雅经济数据", "Экономика Паттайи"),
        description: L(
          "Macro indicators for your investment memo and BOI projections.",
          "ตัวชี้วัดมหภาคสำหรับ memo และการคาดการณ์ BOI",
          "投资备忘录与 BOI 预测所需的宏观指标。",
          "Макропоказатели для мемо и прогнозов BOI.",
        ),
      },
      {
        label: L("Tax & immigration updates", "อัปเดตภาษีและตม.", "税务与移民动态", "Налоги и immigration"),
        description: L(
          "Rule changes that affect promoted projects and foreign executives.",
          "ประกาศที่กระทบโครงการส่งเสริมและผู้บริหารต่างชาติ",
          "影响促进项目与外方高管的政策变化。",
          "Изменения для продвигаемых проектов и иностранных руководителей.",
        ),
      },
    ],
  },
  faq: {
    title: L("Frequently asked questions", "คำถามที่พบบ่อย", "常见问题", "Частые вопросы"),
    items: [
      {
        q: L(
          "Should I register a company before applying for BOI?",
          "ควรจดบริษัทก่อนยื่น BOI ไหม?",
          "应先注册公司再申请 BOI 吗？",
          "Регистрировать компанию до BOI?",
        ),
        a: L(
          "Many investors run eligibility screening first, then incorporate (or amend objectives) before the formal BOI dossier. Your advisor will choose parallel vs sequential timing.",
          "นักลงทุนหลายรายคัดกรองสิทธิก่อน แล้วจดบริษัท (หรือแก้วัตถุประสงค์) ก่อนยื่นแฟ้ม BOI — ที่ปรึกษาจะเลือกทำคู่ขนานหรือทีละขั้น",
          "多数投资者先做资格筛查，再在正式 BOI 材料前设立公司（或修改经营范围）——由顾问决定并行或分步。",
          "Часто сначала screening, затем регистрация или правка целей — параллельно или поэтапно решает консультант.",
        ),
      },
      {
        q: L(
          "Can a small restaurant or bar get BOI?",
          "ร้านอาหารหรือบาร์เล็กๆ ขอ BOI ได้ไหม?",
          "小餐厅或酒吧能申请 BOI 吗？",
          "Может ли малый ресторан/бар получить BOI?",
        ),
        a: L(
          "Usually no — BOI targets larger investment, technology, manufacturing, and strategic tourism or wellness projects. Standard F&B uses a normal Thai company plus municipal licenses.",
          "โดยทั่วไปไม่ได้ — BOI มุ่งลงทุนใหญ่ เทคโนโลยี การผลิต และท่องเที่ยว/เวลเนสเชิงกลยุทธ์ ร้านอาหารทั่วไปใช้ บจก. ธรรมดา + ใบอนุญาตท้องถิ่น",
          "通常不行 — BOI 面向较大投资、科技、制造及战略性旅游/康养项目；一般餐饮用普通泰资公司加市政许可。",
          "Обычно нет — BOI для крупных и стратегических проектов; обычный F&B — тайское ООО.",
        ),
      },
      {
        q: L(
          "How is BOI different from a normal Thai limited company?",
          "BOI ต่างจาก บจก. ธรรมดาอย่างไร?",
          "BOI 与普通泰资有限公司有何不同？",
          "Чем BOI отличается от обычного ООО?",
        ),
        a: L(
          "A standard Ltd. can operate many businesses with Thai-majority shareholding rules. BOI adds tax and visa benefits but requires promoted activities, higher investment, and ongoing reporting.",
          "บจก. ธรรมดาดำเนินธุรกิจได้หลายแบบตามกฎถือหุ้นไทย BOI เพิ่มสิทธิภาษีและวisa แต่ต้องเป็นกิจกรรมส่งเสริม ลงทุนสูง และรายงานต่อเนื่อง",
          "普通有限公司按泰方持股规则经营多种业务；BOI 增加税收与签证优惠，但须为促进活动、较高投资及持续报告。",
          "Обычное ООО — стандартные правила; BOI — льготы, но продвигаемая деятельность и отчётность.",
        ),
      },
      {
        q: L(
          "Can foreigners own 100% of a BOI company?",
          "ชาวต่างชาติถือหุ้น BOI 100% ได้ไหม?",
          "外国人能否 100% 持股 BOI 公司？",
          "100% иностранное владение при BOI?",
        ),
        a: L(
          "For promoted activities, BOI may allow majority or full foreign shareholding where the standard Foreign Business Act would block it — subject to activity rules and conditions in your certificate.",
          "กิจกรรมที่ส่งเสริม BOI อาจอนุญาตถือหุ้นต่างชาติส่วนใหญ่หรือเต็ม ในที่ที่ พ.ร.บ.คนต่างด้าว จำกัด — ตามเงื่อนไขในใบส่งเสริม",
          "获促进活动 BOI 可在《外资法》限制领域允许多数或全资外资持股 — 以促进证书条件为准。",
          "Для продвигаемых видов BOI может разрешить большинство или 100% иностранцев.",
        ),
      },
      {
        q: L(
          "Does BOI approval include land or condo ownership?",
          "สิทธิ BOI รวมที่ดินหรือคอนโดไหม?",
          "BOI 批准是否包含土地或公寓所有权？",
          "BOI даёт право на землю/кондо?",
        ),
        a: L(
          "Promoted projects that meet investment floors may receive pathways to own land for the approved project — not automatic for every certificate. Condos still follow standard quota rules unless a specific promotion applies.",
          "โครงการส่งเสริมที่ถึงเกณฑ์ลงทุนอาจได้เส้นทางถือครองที่ดินสำหรับโครงการที่อนุมัติ — ไม่ใช่ทุกใบส่งเสริม คอนโดยังใช้โควตาตามปกติเว้นมีสิทธิเฉพาะ",
          "达到投资门槛的促进项目或可申请项目用地所有权 — 非每张证书自动享有；公寓仍受配额规则约束。",
          "Продвигаемые проекты с порогом инвестиций — пути к земле; кондо — квоты по общим правилам.",
        ),
      },
      {
        q: L(
          "What happens if we miss investment or hiring targets?",
          "ถ้าไม่บรรลุเป้าลงทุนหรือจ้างงานจะเกิดอะไร?",
          "未达投资或雇佣目标会怎样？",
          "Если не выполнить цели по инвестициям/найму?",
        ),
        a: L(
          "BOI can reduce or revoke tax privileges and may affect visa benefits tied to the promotion. Corrective plans or extensions sometimes apply — document issues early with your consultant.",
          "BOI อาจลดหรือเพิกถอนสิทธิภาษี และกระทบวisa ที่ผูกกับสิทธิส่งเสริม — บางครั้งขอแผนแก้ไขหรือขยายเวลาได้ ควรแจ้งที่ปรึกษาแต่เนิ่น",
          "BOI 可削减或撤销税收优惠，并可能影响相关签证权益 — 有时可申请整改或延期，应尽早与顾问沟通。",
          "BOI может отменить льготы и визы — иногда план корректировки; сообщайте консультанту рано.",
        ),
      },
      {
        q: L(
          "Do I need a BOI consultant?",
          "ต้องใช้ที่ปรึกษา BOI ไหม?",
          "是否必须请 BOI 顾问？",
          "Нужен ли консультант BOI?",
        ),
        a: L(
          "Not legally required, but most Pattaya–Chonburi projects use firms that draft dossiers, map activity codes, and attend BOI interviews in Bangkok.",
          "ไม่บังคับทางกฎหมาย แต่โครงการพัทยา–ชลบุรีส่วนใหญ่ใช้บริษัทร่างแฟ้ม จับคู่รหัสกิจกรรม และเข้าสัมภาษณ์ BOI ที่กรุงเทพฯ",
          "法律不强制，但芭提雅–春武里多数项目委托机构起草材料、匹配活动代码并赴曼谷参加面试。",
          "Не обязательно, но большинство проектов используют фирмы для досье и интервью в Бангкоке.",
        ),
      },
      {
        q: L(
          "Are Pattaya tourism or resort projects eligible?",
          "โครงการท่องเที่ยวหรือรีสอร์ตในพัทยาเข้าเกณฑ์ไหม?",
          "芭提雅旅游或度假村项目是否符合？",
          "Подходят ли туризм/курорты в Паттайе?",
        ),
        a: L(
          "Some large hospitality, wellness, and tourism-tech investments qualify when they meet size, EEC, and activity-list criteria. Boutique hotels and small operators should assume standard company setup unless a formal screening says otherwise.",
          "โรงแรมใหญ่ เวลเนส และเทคท่องเที่ยวบางโครงการเข้าเกณฑ์เมื่อถึงขนาด EEC และรายการกิจกรรม โรงแรมบูติกและผู้ประกอบการเล็กควรถือว่าใช้จดบริษัทธรรมดาเว้นคัดกรองระบุอย่างอื่น",
          "部分大型酒店、康养及旅游科技项目在满足规模、EEC 及活动清单时可符合；精品酒店与小经营者通常按普通设立，除非正式筛查另有结论。",
          "Крупный hospitality, wellness и tourism-tech могут подойти; бутик-отели — обычное ООО без screening.",
        ),
      },
    ],
  },
  servicePoints: {
    title: L(
      "Where applications are handled",
      "หน่วยงานที่เกี่ยวข้อง",
      "办理机构",
      "Куда обращаться",
    ),
    intro: L(
      "Pattaya investors usually work through Bangkok-based BOI consultants who file centrally and coordinate EEC add-ons.",
      "นักลงทุนพัทยามักใช้ที่ปรึกษา BOI ในกรุงเทพฯ ยื่นกลางและประสานสิทธิ EEC เพิ่มเติม",
      "芭提雅投资者通常通过曼谷 BOI 顾问集中递交并协调 EEC 附加权益。",
      "Инвесторы в Паттайе обычно работают через консультантов в Бангкоке.",
    ),
    items: [
      {
        name: L(
          "BOI — Head Office (Bangkok)",
          "สำนักงาน BOI (กรุงเทพฯ)",
          "BOI 总部（曼谷）",
          "BOI — головной офис (Бангкок)",
        ),
        note: L(
          "Primary promotion applications, interviews, and certificate issuance.",
          "ยื่นขอส่งเสริม สัมภาษณ์ และออกใบส่งเสริมหลัก",
          "促进申请、面试及促进证书签发。",
          "Основные заявки, интервью и сертификаты.",
        ),
      },
      {
        name: L(
          "Eastern Economic Corridor (EEC) Office",
          "สำนักงานเขตพัฒนาพิเศษภาคตะวันออก (EEC)",
          "东部经济走廊（EEC）办公室",
          "Офис EEC",
        ),
        note: L(
          "Zone-specific incentives for projects in Chonburi and Rayong corridors.",
          "สิทธิเพิ่มในเขตสำหรับโครงการในชลบุรีและระยอง",
          "春武里及罗勇走廊项目的区内额外激励。",
          "Льготы зоны для проектов в Чонбури и Районге.",
        ),
      },
      {
        name: L(
          "Department of Business Development (DBD)",
          "กรมพัฒนาธุรกิจการค้า (DBD)",
          "商业发展部（DBD）",
          "DBD",
        ),
        note: L(
          "Company registration and amendments aligned with your BOI certificate.",
          "จดทะเบียนและแก้ไขนิติบุคคลให้สอดคล้องใบส่งเสริม BOI",
          "公司登记及与 BOI 证书一致的章程变更。",
          "Регистрация и изменения под сертификат BOI.",
        ),
      },
    ],
  },
};

export const boiRelatedExtra = [
  {
    label: L("Work permit guide", "คู่มือ work permit", "工作证指南", "Work permit"),
    blurb: L(
      "Expert visas after BOI approval",
      "วisa ผู้เชี่ยวชาญหลังได้รับ BOI",
      "BOI 获批后的专家签证",
      "Экспертные визы после BOI",
    ),
  },
  {
    label: L("Immigration updates", "อัปเดตตรวจคนเข้าเมือง", "移民动态", "Immigration"),
    blurb: L(
      "Reporting rules for promoted-project staff",
      "กฎรายงานตัวสำหรับพนักงานโครงการส่งเสริม",
      "促进项目员工的报到规定",
      "Правила отчётности для персонала BOI-проектов",
    ),
  },
  {
    label: L("Tax & legal news", "ข่าวภาษีและกฎหมาย", "税务与法律新闻", "Налоги и право"),
    blurb: L(
      "Changes affecting EEC investors",
      "ประกาศที่กระทบนักลงทุนใน EEC",
      "影响 EEC 投资者的政策变化",
      "Изменения для инвесторов EEC",
    ),
  },
  {
    label: L("Real estate & investment", "อสังหาและการลงทุน", "房产与投资", "Недвижимость"),
    blurb: L(
      "Land and project structures tied to BOI promotions",
      "ที่ดินและโครงสร้างโครงการที่ผูกสิทธิ BOI",
      "与 BOI 促进挂钩的土地与项目结构",
      "Земля и структуры проектов при BOI",
    ),
  },
];
