import { L } from "@/lib/i18n/living-helpers";

export const barExtendedCopy = {
  ctaSecondary: {
    button: L("See reading order", "ดูลำดับอ่านคู่มือ", "查看阅读顺序", "Порядок чтения"),
  },
  quickFacts: {
    title: L("Key numbers at a glance", "ตัวเลขสำคัญโดยย่อ", "关键数据一览", "Цифры вкратце"),
    items: [
      {
        label: L("Setup timeline", "ระยะเตรียมเปิด", "筹备周期", "Срок"),
        value: L("3–5 months", "ประมาณ 3–5 เดือน", "3–5 个月", "3–5 месяцев"),
      },
      {
        label: L("License stack", "ชุดใบอนุญาต", "许可组合", "Стек лицензий"),
        value: L("Trade + alcohol + MCT", "ใบค้า + ใบแอลกอฮอล์ + MCT", "营业 + 酒类 + MCT", "Торговая + алкоголь + MCT"),
      },
      {
        label: L("Sound rules", "กฎเสียง", "噪音规定", "Шум"),
        value: L("District decibel limits", "ระดับเสียงสูงสุดตามพื้นที่", "分区分贝限制", "Лимиты decibel"),
      },
      {
        label: L("Hot zones", "ย่านหลัก", "主要区域", "Зоны"),
        value: L("Walking St, beach clubs", "Walking Street และโซนบาร์ริมทะเล", "Walking St、海滩俱乐部", "Walking St, beach clubs"),
      },
    ],
  },
  legalNotes: {
    title: L("Compliance reminders", "ข้อควรระวัง", "合规提醒", "Важно"),
    items: [
      L(
        "Entertainment and alcohol licenses must match your actual hours, capacity, and music type.",
        "ใบอนุญาตบันเทิงและใบแอลกอฮอล์ต้องตรงกับเวลาเปิดจริง ความจุร้าน และรูปแบบดนตรีที่ใช้",
        "娱乐与酒类许可须与实际营业时间、容量及音乐类型一致。",
        "Лицензии должны совпадать с часами, вместимостью и музыкой.",
      ),
      L(
        "MCT (music copyright) is separate from trade license — both are required for most nightlife venues.",
        "MCT แยกจากใบค้า — สถานไนท์ไลฟ์ส่วนใหญ่ต้องมีทั้งคู่",
        "MCT（音乐版权）与营业许可分开 — 多数夜生活场所两者皆需。",
        "MCT отдельно от торговой лицензии.",
      ),
      L(
        "Residential neighbors can trigger inspections — confirm zoning buffers before signing lease.",
        "หากใกล้ย่านที่อยู่อาศัย อาจมีการร้องเรียนและเข้าตรวจได้ ควรตรวจเงื่อนไขทำเลก่อนเซ็นสัญญาเช่า",
        "邻近住宅可能引发检查 — 签约前确认分区缓冲。",
        "Соседи-жители — проверьте зонирование до аренды.",
      ),
    ],
  },
  readingPath: {
    title: L("Recommended reading order", "ลำดับอ่านที่แนะนำ", "建议阅读顺序", "Порядок"),
    intro: L(
      "Use this path after reviewing the compliance steps below.",
      "อ่านตามลำดับนี้หลังจากดูขั้นตอนเตรียมเปิดด้านล่างแล้ว",
      "阅读下方合规步骤后按此顺序进行。",
      "После шагов compliance ниже.",
    ),
    items: [
      {
        label: L("Finish this bar guide", "อ่านคู่มือบาร์นี้ให้จบ", "读完本酒吧指南", "Завершите гид"),
        description: L("Zoning, licenses, sound, and MCT.", "ภาพรวมทำเล ใบอนุญาต ระบบเสียง และ MCT", "分区、许可、噪音与 MCT。", "Зонирование, лицензии, звук, MCT."),
      },
      {
        label: L("Company registration", "จดทะเบียนบริษัท", "公司注册", "Регистрация"),
        description: L("Entity and lease before entertainment filings.", "ตั้งนิติบุคคลและทำสัญญาเช่าก่อนยื่นใบอนุญาตบันเทิง", "娱乐许可申请前先设主体与租约。", "Юрлицо и аренда до entertainment."),
      },
      {
        label: L("Restaurant guide", "คู่มือร้านอาหาร", "餐厅指南", "Ресторан"),
        description: L("If you serve full kitchen menus.", "หากมีครัวเต็มรูปแบบ", "若提供完整厨房菜单。", "При полноценной кухне."),
      },
      {
        label: L("Hotel guide", "คู่มือโรงแรม", "酒店指南", "Отель"),
        description: L("Lobby bars inside licensed hotels.", "กรณีเปิดล็อบบี้บาร์ภายในโรงแรมที่มีใบอนุญาต", "持证酒店内大堂酒吧。", "Lobby bars в отелях."),
      },
      {
        label: L("Work permit guide", "คู่มือ work permit", "工作证指南", "Work permit"),
        description: L("Foreign managers and resident DJs.", "แนวทางเอกสารสำหรับผู้จัดการต่างชาติและ DJ ประจำ", "外籍经理与驻场 DJ。", "Менеджеры и DJ."),
      },
    ],
  },
  faq: {
    title: L("Frequently asked questions", "คำถามที่พบบ่อย", "常见问题", "FAQ"),
    items: [
      {
        q: L("Is a bar license different from a restaurant?", "ใบอนุญาตบาร์ต่างจากร้านอาหารไหม?", "酒吧许可与餐厅不同吗？", "Лицензия бара vs ресторана?"),
        a: L(
          "Yes — you stack trade, alcohol, entertainment (if applicable), อย. if serving food, and MCT for music. Restaurants may skip entertainment tier.",
          "ต่างกันครับ บาร์มักต้องใช้ใบอนุญาตหลายส่วนร่วมกัน เช่น ใบค้า ใบแอลกอฮอล์ ใบบันเทิง (ถ้ามี) และ MCT ส่วนร้านอาหารบางแบบอาจไม่ต้องใช้ใบบันเทิง",
          "是 — 叠加营业、酒类、娱乐（如适用）、供餐则需 อย.、音乐需 MCT。餐厅可能无需娱乐许可。",
          "Да — стек лицензий шире, чем у ресторана.",
        ),
      },
      {
        q: L("What is MCT and do I need it?", "MCT คืออะไร ต้องมีไหม?", "MCT 是什么，需要吗？", "Что такое MCT?"),
        a: L(
          "MCT covers copyrighted music for playback and live performance. Fines apply without registration — register before opening speakers.",
          "MCT ครอบคลุมเพลงมีลิขสิทธิ์สำหรับเล่นและดนตรีสด ไม่จดเสี่ยงปรับ — จดก่อนเปิดลำโพง",
          "MCT 涵盖有版权音乐的播放与现场演出。未登记可能被罚 — 开音响前登记。",
          "MCT — авторские права на музыку. Регистрация до открытия.",
        ),
      },
      {
        q: L("Can I open on Walking Street?", "เปิดบน Walking Street ได้ไหม?", "能在 Walking Street 开吗？", "Walking Street?"),
        a: L(
          "Possible but highly regulated — zoning, tourism police expectations, and premium rent. Get written zoning confirmation first.",
          "ทำได้ แต่ข้อกำหนดเข้มและค่าเช่าสูง ควรขอหนังสือยืนยันการใช้ประโยชน์พื้นที่ให้ชัดก่อนตกลงเช่า",
          "可能但监管严格 — 分区、旅游警察要求及高租金。先取得书面分区确认。",
          "Возможно, но жёсткий контроль — письменное подтверждение зонирования.",
        ),
      },
      {
        q: L("Closing times and curfews?", "เวลาเปิด-ปิดกำหนดอย่างไร?", "关门时间与宵禁？", "Часы и curfew?"),
        a: L(
          "District rules vary — your license states allowed hours. Special events need extra permits.",
          "แต่ละพื้นที่มีเวลาปิดต่างกัน ให้ยึดเวลาที่ระบุในใบอนุญาต และหากจัดงานพิเศษอาจต้องยื่นใบอนุญาตเพิ่ม",
          "各区规定不同 — 许可证载明允许时间。特别活动需额外许可。",
          "Часы в лицензии; special events — доп. разрешения.",
        ),
      },
      {
        q: L("Fire and crowd limits?", "มาตรฐานความปลอดภัยและจำนวนคนสูงสุด?", "消防与人数限制？", "Пожар и вместимость?"),
        a: L(
          "Occupancy certificates tie to extinguishers, exits, and security staffing — plan for peak holiday nights.",
          "ใบรับรองความจุจะอ้างอิงถังดับเพลิง ทางหนีไฟ และกำลังเจ้าหน้าที่ ควรวางแผนล่วงหน้าสำหรับคืนที่คนแน่น",
          "容量证书关联灭火器、出口与安保 — 规划假日高峰夜。",
          "Вместимость, выходы и охрана на пиковые ночи.",
        ),
      },
      {
        q: L("Foreign DJ on work permit?", "DJ ต่างชาติต้อง work permit?", "外籍 DJ 要工作证吗？", "DJ и work permit?"),
        a: L(
          "Employed performers need proper visas and work permits; guest DJ contracts should clarify tax and copyright duties.",
          "ถ้าทำงานประจำต้องมีวีซ่าและ work permit ให้ถูกต้อง ส่วน guest DJ ควรมีสัญญาระบุภาษีและหน้าที่ด้านลิขสิทธิ์ให้ชัด",
          "受雇表演者需合法签证与工作证；客座 DJ 合同应明确税务与版权责任。",
          "Штатные DJ — work permit; guest — контракт и MCT.",
        ),
      },
      {
        q: L("VAT and cash handling?", "VAT และเงินสด?", "VAT 与现金？", "VAT и наличные?"),
        a: L(
          "Register VAT when thresholds hit; use compliant POS receipts — tourism police may check during spot audits.",
          "เมื่อรายได้ถึงเกณฑ์ต้องจด VAT และออกใบเสร็จผ่านระบบ POS ให้ถูกต้อง เพื่อรองรับการตรวจเอกสาร",
          "达门槛须注册 VAT；使用合规 POS 收据 — 旅游警察可能抽查。",
          "VAT по порогам; чеки POS.",
        ),
      },
      {
        q: L("Consultant vs DIY filings?", "ที่ปรึกษาหรือยื่นเอง?", "顾问还是自行办理？", "Консультант или сам?"),
        a: L(
          "Nightlife stacks are error-prone — Pattaya law firms bundle zoning letters, MCT, and alcohol filings weekly.",
          "ทำเองได้ แต่ชุดใบอนุญาตบาร์มีหลายหน่วยงานและผิดพลาดง่าย หลายร้านจึงใช้ที่ปรึกษาช่วยเดินเอกสารให้ครบในรอบเดียว",
          "夜生活许可组合易出错 — 芭提雅律所常打包办理。",
          "Лучше консультант — сложный стек лицензий.",
        ),
      },
    ],
  },
  servicePoints: {
    title: L("Where filings happen", "จุดยื่นเอกสาร", "办理地点", "Куда подавать"),
    intro: L(
      "Operators rarely file alone — consultants coordinate city, excise, and copyright offices.",
      "ผู้ประกอบการส่วนใหญ่มอบหมายที่ปรึกษาช่วยประสานเทศบาล สรรพสามิต และหน่วยงานลิขสิทธิ์เพลง",
      "经营者很少自行办理 — 顾问协调市政、消费税与版权机关。",
      "Обычно через консультантов.",
    ),
    items: [
      {
        name: L("Pattaya City Hall", "ศาลากลางเมืองพัทยา", "芭提雅市政府", "Мэрия"),
        note: L("Trade and entertainment permits.", "ยื่นใบอนุญาตการค้าและใบอนุญาตบันเทิง", "营业与娱乐许可。", "Торговая и entertainment."),
      },
      {
        name: L("Excise Department", "กรมสรรพสามิต", "消费税局", "Excise"),
        note: L("Alcohol license by service type.", "ยื่นใบอนุญาตแอลกอฮอล์ตามประเภทเครื่องดื่มและการให้บริการ", "按供应类型的酒类许可。", "Алкоголь по типу."),
      },
      {
        name: L("MCT — Music Copyright", "MCT ลิขสิทธิ์เพลง", "MCT 音乐版权", "MCT"),
        note: L("Playback and live performance registration.", "จดสิทธิการเปิดเพลงและการแสดงดนตรีสด", "播放与现场演出登记。", "Воспроизведение и live."),
      },
    ],
  },
};

export const barRelatedExtra = [
  {
    label: L("Company registration", "จดทะเบียนบริษัท", "公司注册", "Регистрация"),
    blurb: L("Entity before nightlife filings", "นิติบุคคลก่อนยื่นไนท์ไลฟ์", "夜生活许可前先设主体", "Юрлицо до nightlife"),
  },
  {
    label: L("Immigration updates", "อัปเดตตม.", "移民动态", "Immigration"),
    blurb: L("Manager and performer visas", "วีซ่าผู้จัดการและศิลปิน", "经理与表演者签证", "Визы менеджеров"),
  },
  {
    label: L("Tax & legal news", "ข่าวภาษีและกฎหมาย", "税务与法律", "Налоги"),
    blurb: L("Entertainment tax and compliance", "ภาษีบันเทิงและข้อกำหนดสำคัญ", "娱乐税与合规", "Entertainment tax"),
  },
];
