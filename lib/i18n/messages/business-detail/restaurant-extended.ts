import { L } from "@/lib/i18n/living-helpers";

export const restaurantExtendedCopy = {
  ctaSecondary: {
    button: L("See reading order", "ดูลำดับอ่านคู่มือ", "查看阅读顺序", "Порядок чтения"),
  },
  quickFacts: {
    title: L("Key numbers at a glance", "ตัวเลขสำคัญโดยย่อ", "关键数据一览", "Цифры вкратце"),
    items: [
      {
        label: L("Typical setup time", "ระยะเตรียมเปิดโดยประมาณ", "常见筹备周期", "Срок подготовки"),
        value: L("2–4 months", "2–4 เดือน", "2–4 个月", "2–4 месяца"),
      },
      {
        label: L("Core licenses", "ใบอนุญาตหลัก", "核心许可", "Основные лицензии"),
        value: L("Trade + อย. (+ alcohol)", "ใบค้า + อย. (+ แอลกอฮอล์)", "营业 + อย.（+ 酒类）", "Торговая + อย. (+ алкоголь)"),
      },
      {
        label: L("Entity first", "นิติบุคคลก่อน", "先设主体", "Сначала юрлицо"),
        value: L("Thai Co., Ltd.", "บจก. ไทย", "泰资有限公司", "Тайское ООО"),
      },
      {
        label: L("Peak zones", "ย่านพีค", "热门区域", "Пиковые зоны"),
        value: L("Beach Rd, Jomtien, Naklua", "Beach Rd จอมเทียน นาเกลือ", "Beach Rd、Jomtien、Naklua", "Beach Rd, Jomtien, Naklua"),
      },
    ],
  },
  legalNotes: {
    title: L("Compliance reminders", "ข้อควรระวัง", "合规提醒", "Важно"),
    items: [
      L(
        "Kitchen layout and grease traps must pass อย. inspection before you announce an opening date.",
        "ต้องให้ผังครัวและบ่อดักไขมันผ่านการตรวจ อย. ก่อน แล้วค่อยประกาศวันเปิดร้าน",
        "厨房布局与油水分离器须通过 อย. 检查后方可公布开业日期。",
        "Планировка кухни и жироуловители — до объявления открытия.",
      ),
      L(
        "Alcohol tiers differ for beer/wine vs spirits — your license must match what you actually serve.",
        "ใบอนุญาตแอลกอฮอล์มีหลายระดับ (เบียร์/ไวน์ และสุรา) ต้องขอให้ตรงกับเครื่องดื่มที่ขายจริง",
        "酒类许可分啤酒/葡萄酒与烈酒等级 — 须与实际供应一致。",
        "Уровни алкогольной лицензии должны совпадать с меню.",
      ),
      L(
        "Lease clauses on exhaust, hours, and tourism zoning can block permits — review before signing.",
        "เงื่อนไขในสัญญาเช่าเรื่องระบบระบายอากาศ เวลาเปิด-ปิด และการใช้ประโยชน์พื้นที่ อาจทำให้ขอใบอนุญาตไม่ผ่าน ควรตรวจให้ชัดก่อนเซ็น",
        "租约中的排烟、营业时间与旅游分区条款可能阻碍许可 — 签约前审查。",
        "Пункты аренды о вытяжке и часах могут блокировать лицензии.",
      ),
    ],
  },
  readingPath: {
    title: L("Recommended reading order", "ลำดับอ่านที่แนะนำ", "建议阅读顺序", "Порядок чтения"),
    intro: L(
      "Follow this order after you understand the launch steps on this page.",
      "หลังเข้าใจขั้นตอนเปิดด้านล่างแล้ว อ่านตามลำดับนี้",
      "理解本页开业步骤后，按此顺序阅读。",
      "После шагов на этой странице — читайте по порядку.",
    ),
    items: [
      {
        label: L("Finish this F&B guide", "อ่านคู่มือ F&B นี้ให้จบ", "读完本餐饮指南", "Завершите F&B-гид"),
        description: L("Launch sequence, health checklist, operator tips.", "ลำดับเปิด เช็กลิสต์สุขภาพ เคล็ดลับผู้ประกอบการ", "开业流程、卫生清单与经营贴士。", "Шаги, санитарный чеклист, советы."),
      },
      {
        label: L("Company registration", "จดทะเบียนบริษัท", "公司注册", "Регистрация"),
        description: L("Thai entity and lease in the company name.", "นิติบุคคลไทยและสัญญาเช่าในชื่อบริษัท", "泰资主体并以公司名义签约租约。", "Тайское юрлицо и аренда на компанию."),
      },
      {
        label: L("Bar & nightlife guide", "คู่มือบาร์และไนท์ไลฟ์", "酒吧与夜生活指南", "Гид по барам"),
        description: L("If you serve alcohol late or play music.", "หากเสิร์ฟแอลกอฮอล์ดึกหรือเปิดเพลง", "若深夜供酒或播放音乐。", "При алкоголе поздно или музыке."),
      },
      {
        label: L("Work permit guide", "คู่มือ work permit", "工作证指南", "Work permit"),
        description: L("Head chef and foreign manager roles.", "หัวหน้าเชฟและผู้จัดการต่างชาติ", "主厨与外籍管理岗位。", "Шеф и иностранные менеджеры."),
      },
      {
        label: L("Tax & legal news", "ข่าวภาษีและกฎหมาย", "税务与法律新闻", "Налоги и право"),
        description: L("VAT, receipts, and rule changes for operators.", "VAT ใบเสร็จ และประกาศที่กระทบผู้ประกอบการ", "VAT、收据及经营者相关法规变化。", "VAT, чеки и изменения для операторов."),
      },
    ],
  },
  faq: {
    title: L("Frequently asked questions", "คำถามที่พบบ่อย", "常见问题", "FAQ"),
    items: [
      {
        q: L("Do I need a company before applying for อย.?", "ต้องมีบริษัทก่อนขอ อย. ไหม?", "申请 อย. 前要先有公司吗？", "Нужна ли компания до อย.?"),
        a: L(
          "Yes — health and trade licenses attach to a registered entity. Incorporate first, then sign the lease in the company name.",
          "ใช่ — ใบสุขภาพและใบค้าผูกกับนิติบุคคล จดบริษัทก่อน แล้วเซ็นเช่าในชื่อบริษัท",
          "需要 — 卫生与营业许可绑定法人。先设立公司，再以公司名义签约。",
          "Да — лицензии привязаны к юрлицу. Сначала регистрация, затем аренда.",
        ),
      },
      {
        q: L("How long does a restaurant license take?", "ใบอนุญาตร้านอาหารใช้เวลานานแค่ไหน?", "餐饮许可要多久？", "Сколько времени на лицензии?"),
        a: L(
          "Often 2–4 months after kitchen build-out if documents are complete — อย. inspection timing depends on district workload.",
          "มัก 2–4 เดือนหลังตกแต่งครัวถ้าเอกสารครบ — ตรวจ อย. ขึ้นกับคิวเขต",
          "装修完成且材料齐全后通常 2–4 个月 — อย. 检查视辖区排队而定。",
          "Часто 2–4 месяца после отделки кухни при полном пакете документов.",
        ),
      },
      {
        q: L("Can I serve alcohol with only a restaurant license?", "มีแค่ใบร้านอาหารขายแอลกอฮอล์ได้ไหม?", "仅凭餐饮许可能卖酒吗？", "Можно ли с одной ресторанной лицензией?"),
        a: L(
          "No — you need the correct alcohol license class for beer/wine or spirits. Some cafés stay non-alcohol to simplify setup.",
          "ไม่ — ต้องมีใบแอลกอฮอล์ระดับที่ตรงกับเบียร์/ไวน์หรือสปirit บางคาเฟ่ไม่ขายแอลกอฮอล์เพื่อลดขั้นตอน",
          "不行 — 需相应酒类许可等级。部分咖啡馆不卖酒以简化流程。",
          "Нет — нужен класс алкогольной лицензии.",
        ),
      },
      {
        q: L("What about music in the dining room?", "เปิดเพลงในร้านได้อย่างไร?", "餐厅播放音乐怎么办？", "Музыка в зале?"),
        a: L(
          "Recorded music usually requires MCT registration; live acts may need extra permits. Bars have stricter sound rules.",
          "เพลงบันทึกมักต้องจด MCT ดนตรีสดอาจต้องใบเพิ่ม บาร์มีกฎเสียงเข้มกว่า",
          "录制音乐通常须 MCT 登记；现场演出可能需额外许可。酒吧噪音规定更严。",
          "Запись — MCT; live — доп. разрешения.",
        ),
      },
      {
        q: L("Foreign head chef — work permit?", "เชฟต่างชาติ — work permit?", "外籍主厨需要工作证吗？", "Work permit для шефа?"),
        a: L(
          "Yes for employed chefs. Plan 4 Thai : 1 foreign ratio and capital that supports work permit filings.",
          "ใช่สำหรับเชฟที่จ้าง วางแผน 4 ไทย : 1 ต่างชาติ และทุนที่รองรับ work permit",
          "雇佣主厨需要。规划 4 泰 : 1 外比例及支持工作证申请的资本。",
          "Да. Соотношение 4:1 и капитал под work permit.",
        ),
      },
      {
        q: L("Best areas for a first restaurant?", "พื้นที่ไหนดีสำหรับร้านแรก?", "第一家餐厅选哪？", "Лучшие районы для первого ресторана?"),
        a: L(
          "Jomtien suits family dining; Beach Road needs higher rent but walk-in traffic; Naklua balances locals and tourists.",
          "จอมเทียนเหมาะครอบครัว Beach Road ค่าเช่าสูงแต่คนเดินผ่าน นาเกลือสมดุลคนท้องถิ่นและนักท่องเที่ยว",
          "Jomtien 适合家庭餐；Beach Road 租金高但人流大；Naklua 平衡本地与游客。",
          "Jomtien — семьи; Beach Road — трафик; Naklua — баланс.",
        ),
      },
      {
        q: L("Soft opening before full license?", "เปิด soft ก่อนใบอนุญาตครบ?", "许可齐全前能试营业吗？", "Soft opening без лицензии?"),
        a: L(
          "Operating without required permits risks fines and closure. Limit previews to staff training with authorities informed where possible.",
          "เปิดโดยไม่มีใบอนุญาตเสี่ยงปรับและสั่งปิด จำกัด preview เป็นฝึกพนักงานและประสานเจ้าหน้าที่หากทำได้",
          "无证经营可能被罚或关停。试营业宜限于员工培训并尽量报备。",
          "Без лицензий — штрафы. Только обучение персонала.",
        ),
      },
      {
        q: L("Where to get professional help?", "หาที่ปรึกษาจากไหน?", "去哪找专业帮助？", "Где искать помощь?"),
        a: L(
          "Licensed law firms, food consultants, and accounting firms in Pattaya handle permit stacks daily.",
          "สำนักงานกฎหมาย ที่ปรึกษาอาหาร และบัญชีในพัทยาทำชุดใบอนุญาตทุกวัน",
          "芭提雅持牌律所、餐饮顾问与会计所日常办理全套许可。",
          "Юрфирмы, F&B-консультанты и бухгалтерия в Паттайе.",
        ),
      },
    ],
  },
  servicePoints: {
    title: L("Where permits are filed", "จุดยื่นใบอนุญาต", "许可办理地点", "Куда подавать"),
    intro: L(
      "Most operators use consultants to queue at city and provincial offices.",
      "ผู้ประกอบการส่วนใหญ่ใช้ที่ปรึกษาไปยื่นที่เทศบาลและสำนักงานจังหวัด",
      "多数经营者委托顾问前往市政与省级机关排队办理。",
      "Операторы обычно используют консультантов.",
    ),
    items: [
      {
        name: L("Pattaya City Hall", "ศาลากลางเมืองพัทยา", "芭提雅市政府", "Мэрия Паттайи"),
        note: L("Trade license and local operating permits.", "ใบอนุญาตประกอบการค้าและใบท้องถิ่น", "营业许可及本地经营许可。", "Торговая и местные разрешения."),
      },
      {
        name: L("Provincial Public Health (อย.)", "สำนักงานสาธารณสุขจังหวัด (อย.)", "省级公共卫生（อย.）", "Provincial health (อย.)"),
        note: L("Food establishment and kitchen inspections.", "สถานประกอบการและตรวจครัว", "食品经营场所与厨房检查。", "สถานประกอบการ и инспекция кухни."),
      },
      {
        name: L("Excise Department (alcohol)", "กรมสรรพสามิต (แอลกอฮอล์)", "消费税局（酒类）", "Excise (алкоголь)"),
        note: L("Alcohol license applications by tier.", "ยื่นใบอนุญาตแอลกอฮอล์ตามระดับ", "按等级申请酒类许可。", "Заявки на алкоголь по классу."),
      },
    ],
  },
};

export const restaurantRelatedExtra = [
  {
    label: L("BOI promotion", "สิทธิ BOI", "BOI 促进", "BOI"),
    blurb: L("Large F&B investments with promoted activities", "ลงทุน F&B ใหญ่ที่เข้าเกณฑ์ส่งเสริม", "符合促进条件的大型餐饮投资", "Крупные F&B с BOI"),
  },
  {
    label: L("Work permit guide", "คู่มือ work permit", "工作证指南", "Work permit"),
    blurb: L("Chef and manager visas", "วisa เชฟและผู้จัดการ", "主厨与经理签证", "Визы шефа и менеджеров"),
  },
  {
    label: L("Immigration updates", "อัปเดตตม.", "移民动态", "Immigration"),
    blurb: L("Staff compliance for foreign hires", "compliance พนักงานต่างชาติ", "外籍员工合规", "Compliance персонала"),
  },
];
