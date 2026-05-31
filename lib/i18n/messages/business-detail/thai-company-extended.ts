import { L } from "@/lib/i18n/living-helpers";

/** Extended guide sections for /business/company-setup/thai-company */
export const thaiCompanyExtendedCopy = {
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
        label: L("Typical timeline", "ระยะเวลาโดยประมาณ", "常见周期", "Сроки"),
        value: L("2–4 weeks", "2–4 สัปดาห์", "2–4 周", "2–4 недели"),
      },
      {
        label: L("Registered capital (common)", "ทุนจดทะเบียน (ทั่วไป)", "注册资本（常见）", "Уставный капитал"),
        value: L(
          "From 2M THB (higher for visas & licenses)",
          "ตั้งแต่ 2 ล้านบาท (สูงขึ้นถ้ามีวีซ่า/ใบอนุญาต)",
          "200 万泰铢起（签证与许可需更高）",
          "От 2 млн бат (выше для виз и лицензий)",
        ),
      },
      {
        label: L("Thai staff ratio (work permit)", "สัดส่วนคนไทย (work permit)", "泰籍员工比例（工作证）", "Доля тайских (work permit)"),
        value: L(
          "Often 4 Thai : 1 foreign",
          "มัก 4 คนไทย : 1 ต่างชาติ",
          "常见 4 泰 : 1 外",
          "Часто 4 тайца : 1 иностранец",
        ),
      },
      {
        label: L("Legal form", "รูปแบบนิติบุคคล", "法律形式", "Форма"),
        value: L(
          "Thai Co., Ltd.",
          "บริษัทจำกัด (บจก.)",
          "泰资有限公司",
          "Тайское ООО",
        ),
      },
    ],
  },
  legalNotes: {
    title: L(
      "Compliance reminders",
      "ข้อควรระวังด้านกฎหมาย",
      "合规提醒",
      "Важно по закону",
    ),
    items: [
      L(
        "Business objectives on your registration must match the licenses you will apply for (F&B, hotel, import, etc.). Mismatches delay approvals.",
        "วัตถุประสงค์ในการจดทะเบียนต้องสอดคล้องกับใบอนุญาตที่จะยื่น (F&B โรงแรม นำเข้า ฯลฯ) ไม่ตรงกันจะทำให้อนุมัติล่าช้า",
        "注册经营范围须与未来申请的许可一致（餐饮、酒店、进口等），不符会延误审批。",
        "Цели в уставе должны совпадать с будущими лицензиями (F&B, отель, импорт).",
      ),
      L(
        "Nominee shareholder arrangements carry legal risk. Use licensed advisors; Pattaya.com explains options but does not provide legal services.",
        "การใช้ผู้ถือหุ้น nominee มีความเสี่ยงทางกฎหมาย ควรใช้ที่ปรึกษาที่มีใบอนุญาต — Pattaya.com อธิบายทางเลือกแต่ไม่ให้บริการกฎหมาย",
        "代持股东安排存在法律风险，请咨询持牌顾问；本站仅作说明，不提供法律服务。",
        "Номinee-структуры несут правовые риски — только лицензированные консультанты.",
      ),
      L(
        "Foreign Business Act and sector caps may limit foreign control in some activities — check BOI promotion before you finalize structure.",
        "พ.ร.บ.การประกอบธุรกิจของคนต่างด้าวและเพดานบางธุรกิจจำกัดการควบคุมของต่างชาติ — ตรวจ BOI ก่อนปิดโครงสร้าง",
        "外资法及部分行业持股比例可能限制外资控制 — 定结构前先查 BOI。",
        "Закон об иностранном бизнесе и лимиты по отраслям — проверьте BOI до финальной структуры.",
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
      "Work through these guides in order after you understand the steps below.",
      "หลังเข้าใจขั้นตอนด้านล่างแล้ว แนะนำอ่านคู่มือตามลำดับนี้",
      "理解下方步骤后，建议按此顺序阅读各指南。",
      "После шагов ниже — читайте гайды в этом порядке.",
    ),
    items: [
      {
        label: L(
          "Finish this registration guide",
          "อ่านคู่มือจดทะเบียนนี้ให้จบ",
          "读完本注册指南",
          "Завершите этот гайд",
        ),
        description: L(
          "Steps, documents, and compliance notes on this page.",
          "ขั้นตอน เอกสาร และข้อควรระวังบนหน้านี้",
          "本页步骤、材料与合规说明。",
          "Шаги, документы и compliance на этой странице.",
        ),
      },
      {
        label: L("BOI promotion (if investing at scale)", "สิทธิ BOI (ถ้าลงทุนระดับใหญ่)", "BOI 促进（大规模投资）", "BOI (крупные проекты)"),
        description: L(
          "Tax holidays and higher foreign ownership when your activity qualifies.",
          "ลดหย่อนภาษีและถือครองต่างชาติได้มากขึ้นเมื่อกิจกรรมเข้าเกณฑ์",
          "活动符合时可享税收优惠与更高外资持股。",
          "Налоговые льготы и больше иностранного владения при соответствии.",
        ),
      },
      {
        label: L("Industry operating guide", "คู่มือบริหารตามอุตสาหกรรม", "行业运营指南", "Отраслевой гайд"),
        description: L(
          "Restaurant, bar, or hotel permits after the company exists.",
          "ใบอนุญาตร้านอาหาร บาร์ หรือโรงแรมหลังมีนิติบุคคลแล้ว",
          "公司设立后办理餐饮、酒吧或酒店许可。",
          "Лицензии F&B, бара или отеля после регистрации.",
        ),
      },
      {
        label: L("Work permit basics", "พื้นฐาน work permit", "工作证基础", "Work permit"),
        description: L(
          "Non-B visa and 4:1 staffing rules for foreign managers.",
          "วีซ่า Non-B และกฎ 4:1 สำหรับผู้จัดการต่างชาติ",
          "Non-B 签证与外籍管理人员 4:1 规则。",
          "Non-B и правило 4:1 для иностранных менеджеров.",
        ),
      },
      {
        label: L("Immigration & compliance news", "ข่าวตม.และ compliance", "移民与合规新闻", "Immigration и новости"),
        description: L(
          "90-day reporting, extensions, and rule changes affecting expat operators.",
          "รายงานตัว 90 วัน ต่อวีซ่า และประกาศที่กระทบผู้ประกอบการต่างชาติ",
          "90 天报到、延期及影响外籍经营者的政策变化。",
          "Отчёт 90 дней, продления и изменения для expat.",
        ),
      },
    ],
  },
  faq: {
    title: L("Frequently asked questions", "คำถามที่พบบ่อย", "常见问题", "Частые вопросы"),
    items: [
      {
        q: L(
          "How long does Thai company registration take?",
          "จดบริษัทจำกัดใช้เวลานานแค่ไหน?",
          "泰资公司注册需要多久？",
          "Сколько времени занимает регистрация?",
        ),
        a: L(
          "With complete documents and a responsive law firm, many Pattaya setups finish DBD registration in about 2–4 weeks. Industry licenses and work permits add extra time.",
          "เอกสารครบและสำนักงานกฎหมายตอบเร็ว หลายเคสจด DBD ได้ภายใน 2–4 สัปดาห์ ใบอนุญาตอุตสาหกรรมและ work permit ใช้เวลาเพิ่ม",
          "材料齐全且律所响应及时，许多芭提雅项目在约 2–4 周内完成 DBD 登记；行业许可与工作证另计时间。",
          "При полном пакете документов — 2–4 недели на DBD; лицензии и work permit дольше.",
        ),
      },
      {
        q: L(
          "What is the minimum registered capital?",
          "ทุนจดทะเบียนขั้นต่ำเท่าไร?",
          "最低注册资本是多少？",
          "Минимальный уставный капитал?",
        ),
        a: L(
          "There is no single legal minimum for every business, but 2 million THB is a common starting point. Higher capital is often required for work permits, certain licenses, and visa support — your advisor will model this.",
          "ไม่มีตัวเลขเดียวสำหรับทุกธุรกิจ แต่ 2 ล้านบาทเป็นจุดเริ่มที่พบบ่อย ทุนสูงขึ้นมักต้องใช้สำหรับ work permit ใบอนุญาตบางประเภท และวีซ่า — ให้ที่ปรึกษาช่วยคำนวณ",
          "并非所有业务统一法定最低额，200 万泰铢是常见起点；工作证、部分许可与签证支持常需更高资本，由顾问测算。",
          "Единого минимума нет; 2 млн бат — частый старт; для work permit и виз часто нужно больше.",
        ),
      },
      {
        q: L(
          "Can foreigners own 100% of the company?",
          "ชาวต่างชาติถือหุ้น 100% ได้ไหม?",
          "外国人能否 100% 持股？",
          "Могут ли иностранцы владеть 100%?",
        ),
        a: L(
          "Usually not for most operating businesses without BOI promotion. A Thai limited company often uses a majority-Thai shareholding structure, or you pursue BOI / treaty routes with professional advice.",
          "โดยทั่วไปไม่ได้สำหรับธุรกิจประกอบกิจส่วนใหญ่หากไม่มีสิทธิ BOI มักใช้โครงสร้างผู้ถือหุ้นไทยเป็นส่วนใหญ่ หรือดำเนินเส้นทาง BOI/สนธิสัญญาผ่านที่ปรึกษา",
          "多数运营业务在无 BOI 促进时通常不可以；泰资公司常泰方控股为主，或通过 BOI/条约路径，需专业意见。",
          "Обычно нет без BOI; часто большинство у тайцев или маршрут BOI.",
        ),
      },
      {
        q: L(
          "When can I apply for a work permit?",
          "ยื่น work permit ได้เมื่อไหร่?",
          "何时可申请工作证？",
          "Когда подавать на work permit?",
        ),
        a: L(
          "After the company is registered, has a tax ID, and meets office and capitalization checks. You also need the 4 Thai : 1 foreign employee ratio (with exceptions by role and promotion).",
          "หลังจดทะเบียน มีเลขภาษี และผ่านเงื่อนไขสำนักงาน/ทุน รวมถึงสัดส่วน 4 คนไทย : 1 ต่างชาติ (ยกเว้นตามตำแหน่งและสิทธิส่งเสริม)",
          "公司注册完成、取得税号并满足办公室与资本核查后；另需满足 4 泰 : 1 外员工比例（部分岗位与促进政策有例外）。",
          "После регистрации, налогового ID и проверок офиса/капитала; соотношение 4:1.",
        ),
      },
      {
        q: L(
          "Do I need a physical office in Pattaya?",
          "ต้องมีสำนักงานจริงในพัทยาไหม?",
          "是否必须在芭提雅有实体办公室？",
          "Нужен ли офис в Паттайе?",
        ),
        a: L(
          "DBD requires a registered address. Many startups use serviced offices or virtual offices that qualify for registration; operating licenses (e.g. restaurant) usually need a real commercial site.",
          "DBD ต้องการที่อยู่จดทะเบียน หลายธุรกิจใช้ serviced office หรือ virtual office ที่รับจดได้ แต่ใบอนุญาตประกอบกิจ (เช่น ร้านอาหาร) มักต้องมีพื้นที่จริง",
          "DBD 要求注册地址；许多项目使用可注册的商务中心或虚拟办公室；经营许可（如餐厅）通常需真实商业场地。",
          "Нужен юридический адрес; virtual office возможен; лицензии F&B — реальное помещение.",
        ),
      },
      {
        q: L(
          "What taxes apply after registration?",
          "หลังจดทะเบียนต้องเสียภาษีอะไรบ้าง?",
          "注册后涉及哪些税？",
          "Какие налоги после регистрации?",
        ),
        a: L(
          "Corporate income tax applies to profits. VAT registration is required when revenue crosses thresholds. Withholding tax and social security apply once you hire staff — set up accounting from month one.",
          "ภาษีนิติบุคคลกับกำไร VAT เมื่อรายได้ถึงเกณฑ์ ภาษีหัก ณ ที่จ่ายและประกันสังคมเมื่อจ้างพนักงาน — ควรมีบัญชีตั้งแต่เดือนแรก",
          "利润缴纳企业所得税；收入达门槛须注册 VAT；雇佣后涉及预扣税与社保 — 建议首月即设账务。",
          "Налог на прибыль; VAT по порогам; удержания и соцстрах при найме.",
        ),
      },
      {
        q: L(
          "Can I open a restaurant with only this guide?",
          "เปิดร้านอาหารด้วยคู่มือนี้อย่างเดียวพอไหม?",
          "仅凭本指南能开餐厅吗？",
          "Достаточно ли этого гайда для ресторана?",
        ),
        a: L(
          "This page covers the company. You still need the F&B guide for hygiene certificates, liquor (if applicable), and municipal sign-off — start company first, then industry permits.",
          "หน้านี้ครอบคลุมนิติบุคคล ยังต้องอ่านคู่มือ F&B เรื่องใบสุขาภิบาล สุรา (ถ้ามี) และการอนุมัติจากเทศบาล — จดบริษัทก่อน แล้วค่อยใบอนุญาตอุตสาหกรรม",
          "本页涵盖公司设立；仍需餐饮指南办理卫生证、酒类许可（如适用）及市政审批 — 先公司后行业许可。",
          "Этот гайд — о компании; для ресторана нужен F&B-гайд.",
        ),
      },
      {
        q: L(
          "Where should I get professional help?",
          "ควรหาที่ปรึกษาจากไหน?",
          "应在哪里寻求专业帮助？",
          "Где искать профессиональную помощь?",
        ),
        a: L(
          "Licensed Thai law firms and accounting firms in Chonburi/Pattaya handle DBD filings daily. Compare 2–3 quotes, verify BOI experience if relevant, and never rely on informal nominee arrangements.",
          "สำนักงานกฎหมายและบัญชีที่มีใบอนุญาตในชลบุรี/พัทยาทำเรื่อง DBD ทุกวัน เปรียบเทียบ 2–3 ที่ ตรวจประสบการณ์ BOI ถ้าเกี่ยว และอย่าพึ่ง nominee แบบไม่เป็นทางการ",
          "春武里/芭提雅持牌律所与会计所日常办理 DBD；比较 2–3 家报价，涉及 BOI 时确认经验；勿依赖非正式代持。",
          "Лицензированные юрфирмы и бухгалтерия в Чонбури/Паттайе; сравните 2–3 предложения.",
        ),
      },
    ],
  },
  servicePoints: {
    title: L(
      "Where filings happen",
      "จุดยื่นเอกสารหลัก",
      "主要办理地点",
      "Куда подавать документы",
    ),
    intro: L(
      "Most investors use a Pattaya/Chonburi law firm to queue at these offices on their behalf.",
      "นักลงทุนส่วนใหญ่ใช้สำนักงานกฎหมายในพัทยา/ชลบุรียื่นแทนที่สำนักงานเหล่านี้",
      "多数投资者由芭提雅/春武里律所代为前往以下机构排队办理。",
      "Большинство инвесторов поручают подачу юрфирме в Паттайе/Чонбури.",
    ),
    items: [
      {
        name: L(
          "Department of Business Development (DBD) — Chonburi",
          "กรมพัฒนาธุรกิจการค้า (DBD) — จังหวัดชลบุรี",
          "商业发展部（DBD）— 春武里",
          "DBD — Чонбури",
        ),
        note: L(
          "Company registration, name reservation, and corporate amendments.",
          "จดทะเบียนบริษัท จองชื่อ และแก้ไขข้อมูลนิติบุคคล",
          "公司登记、名称预留及法人信息变更。",
          "Регистрация компании, резерв названия, изменения.",
        ),
      },
      {
        name: L(
          "Revenue Department — Pattaya area",
          "กรมสรรพากร — พื้นที่พัทยา",
          "税务局 — 芭提雅片区",
          "Налоговая — район Паттайи",
        ),
        note: L(
          "Tax ID, VAT registration, and corporate tax filings after setup.",
          "เลขประจำตัวผู้เสียภาษี จด VAT และยื่นภาษีนิติบุคคลหลังตั้งบริษัท",
          "税号、VAT 注册及设立后的企业税务申报。",
          "Налоговый ID, VAT и отчётность после регистрации.",
        ),
      },
      {
        name: L(
          "Pattaya City Hall (for municipal licenses)",
          "ศาลากลางเมืองพัทยา (ใบอนุญาตท้องถิ่น)",
          "芭提雅市政府（市政许可）",
          "Мэрия Паттайи (муниципальные лицензии)",
        ),
        note: L(
          "Signage, construction, and some local operating permits tied to your address.",
          "ป้ายสื่อ ก่อสร้าง และใบอนุญาตท้องถิ่นบางประเภทตามที่ตั้งสำนักงาน",
          "招牌、施工及与地址相关的部分本地经营许可。",
          "Вывески, строительство и часть местных разрешений по адресу.",
        ),
      },
    ],
  },
};

export const thaiCompanyRelatedExtra = [
    {
      label: L("Work permit guide", "คู่มือ work permit", "工作证指南", "Work permit"),
      blurb: L(
        "Non-B visa and staffing ratio after your company is active",
        "วีซ่า Non-B และสัดส่วนพนักงานหลังบริษัทพร้อมดำเนินการ",
        "公司激活后的 Non-B 签证与员工比例",
        "Non-B и штат после активации компании",
      ),
    },
    {
      label: L("Immigration updates", "อัปเดตตรวจคนเข้าเมือง", "移民动态", "Immigration"),
      blurb: L(
        "90-day reporting and extension headlines for operators",
        "รายงานตัว 90 วันและข่าวต่อวีซ่าสำหรับผู้ประกอบการ",
        "90 天报到与经营者关注的延期要闻",
        "Отчёт 90 дней и новости продлений",
      ),
    },
    {
      label: L("Tax & legal news", "ข่าวภาษีและกฎหมาย", "税务与法律新闻", "Налоги и право"),
      blurb: L(
        "Rule changes affecting foreign-owned operators in Chonburi",
        "ประกาศที่กระทบผู้ประกอบการต่างชาติในชลบุรี",
        "影响春武里外方经营者的政策变化",
        "Изменения для иностранных операторов в Чонбури",
      ),
    },
];
