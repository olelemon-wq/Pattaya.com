import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

export type ScamAlertId =
  | "property"
  | "visa"
  | "crypto"
  | "jetski"
  | "scooter"
  | "romance"
  | "taxi"
  | "bar"
  | "gems"
  | "herbal"
  | "fake-police"
  | "fake-tours"
  | "pickpocket";

export type ScamSeverity = "high" | "medium";

export function getScamAlertsPage(lang: LanguageCode) {
  return {
    introTitle: t(lang, L("Stay alert in Pattaya", "ระวังในพัทยา", "在芭提雅保持警惕", "Будьте бдительны")),
    introBody: t(
      lang,
      L(
        "Pattaya is generally safe, but high tourist turnover attracts scams — especially Beach Road, Walking Street, Jomtien, and online property groups. If someone rushes you or asks for cash upfront, walk away.",
        "พัทยาโดยทั่วไปปลอดภัย แต่นักท่องเที่ยวหมุนเวียนเร็ว มีมิจฉาชีพ โดยเฉพาะ Beach Road Walking Street จอมเทียน และกลุ่มอสังหาออนไลน์ ถ้ารีบเร่งหรือขอเงินล่วงหน้า ให้ถอย",
        "芭提雅总体安全，但游客流动大易有诈骗。交易仓促或先要钱就离开。",
        "Паттайя безопасна, но мошенники активны у Beach Road и в группах.",
      ),
    ),
    emergencyTitle: t(lang, L("Save these numbers", "บันทึกเบอร์เหล่านี้", "保存这些号码", "Сохраните номера")),
    emergencySubtitle: t(
      lang,
      L(
        "Tourist Police speak English — call 1155 first for scams and disputes.",
        "ตำรวจท่องเที่ยวพูดอังกฤษ — แจ้ง 1155 ก่อนสำหรับมิจฉาชีพ",
        "旅游警察有英语服务——诈骗先拨 1155。",
        "Tourist Police 1155 — английский.",
      ),
    ),
    hotZonesTitle: t(lang, L("Higher-risk areas", "พื้นที่เสี่ยงสูง", "高风险区域", "Зоны риска")),
    hotZones: [
      t(lang, L("Walking Street & Beach Road nightlife", "Walking Street และ Beach Road", "步行街与海滩路夜生活", "Walking Street")),
      t(lang, L("Jomtien & Pattaya Beach jet-ski rentals", "เช่าเจ็ทสกี จอมเทียน / หาดพัทยา", "乔木提恩与芭提雅海滩摩托艇", "Jet-ski на пляжах")),
      t(lang, L("Facebook / Line property & visa groups", "กลุ่มอสังหาและวีซ่าบนเฟส/ไลน์", "脸书/Line 房产与签证群", "Группы недвижимости")),
      t(lang, L("Gem shops & “special discount” tours", "ร้านพลอยและทัวร์ลดราคาพิเศษ", "宝石店与“特价”团", "Gem-магазины")),
    ],
    scamsTitle: t(lang, L("Common scams", "รูปแบบการโกงที่พบบ่อย", "常见骗局", "Типичные схемы")),
    scamsSubtitle: t(
      lang,
      L(
        "Tap each card for how to protect yourself.",
        "อ่านวิธีป้องกันในแต่ละรายการ",
        "查看每项的防范建议。",
        "Советы по каждой схеме.",
      ),
    ),
    redFlagsTitle: t(lang, L("Red flags — walk away", "สัญญาณอันตราย — ถอยทันที", "危险信号——立即离开", "Красные флаги")),
    reportTitle: t(lang, L("If you are scammed", "ถ้าถูกโกง", "若遭遇诈骗", "Если обманули")),
    essentialsTitle: t(lang, L("Safety essentials", "สิ่งที่ควรทำเป็นประจำ", "安全要点", "Безопасность")),
    rentalLink: t(lang, L("Rental checklist", "เช็กลิสต์เช่า", "租房清单", "Аренда")),
    cultureLink: t(lang, L("Cultural do's & don'ts", "มารยาทไทย", "文化宜忌", "Этикет")),
    severityHigh: t(lang, L("High risk", "เสี่ยงสูง", "高风险", "Высокий риск")),
    severityWatch: t(lang, L("Watch", "ระวัง", "注意", "Внимание")),
    appNote: t(
      lang,
      L(
        "Download the Tourist Police I Lert U app (iOS / Android) for SOS and chat support in English.",
        "ดาวน์โหลดแอป Tourist Police I Lert U สำหรับ SOS และแชทภาษาอังกฤษ",
        "下载 Tourist Police I Lert U 应用——SOS 与英语聊天。",
        "Приложение Tourist Police I Lert U.",
      ),
    ),
  };
}

export function getScamContacts(lang: LanguageCode) {
  return [
    {
      number: "1155",
      label: t(lang, L("Tourist Police", "ตำรวจท่องเที่ยว", "旅游警察", "Tourist Police")),
      note: t(lang, L("24/7 · English", "24 ชม. · อังกฤษ", "24 小时·英语", "24/7 · English")),
      href: "tel:1155",
      primary: true,
    },
    {
      number: "191",
      label: t(lang, L("Police", "ตำรวจ", "警察", "Полиция")),
      note: t(lang, L("Immediate threat", "ภัยทันที", "紧急威胁", "Угроза")),
      href: "tel:191",
      primary: false,
    },
    {
      number: "1669",
      label: t(lang, L("Ambulance", "รถพยาบาล", "救护车", "Скорая")),
      note: t(lang, L("Medical emergency", "ฉุกเฉินทางการแพทย์", "医疗急救", "Медицина")),
      href: "tel:1669",
      primary: false,
    },
    {
      number: "1337",
      label: t(lang, L("Pattaya Call Center", "ศูนย์ 1337 พัทยา", "芭提雅热线", "1337")),
      note: t(lang, L("Press 9 for English", "กด 9 ภาษาอังกฤษ", "按 9 英语", "9 — English")),
      href: "tel:1337",
      primary: false,
    },
  ];
}

export function getScamItems(lang: LanguageCode) {
  const items: {
    id: ScamAlertId;
    severity: ScamSeverity;
    title: string;
    body: string;
    tip: string;
  }[] = [
    {
      id: "jetski",
      severity: "high",
      title: t(lang, L("Jet-ski damage claim", "เจ็ทสกีเรียกค่าเสียหาย", "摩托艇损坏索赔", "Jet-ski")),
      body: t(
        lang,
        L(
          "Operators claim pre-existing scratches and demand 10,000–50,000+ THB. Some involve fake “police” to pressure payment.",
          "อ้างรอยขีดข่วนเดิม เรียก 10,000–50,000+ บาท บางครั้งมีตำรวจปลอมกดดัน",
          "声称原有划痕，索要 1–5 万+ 泰铢，有时有假警察施压。",
          "Царапины «до вас» — 10–50k+ THB.",
        ),
      ),
      tip: t(
        lang,
        L("Video the entire jet-ski before/after; never leave your passport as deposit; call 1155 if pressured.",
          "ถ่ายวิดีโอก่อน-หลัง อย่าฝากพาสปอร์ต โทร 1155 ถ้าถูกกดดัน",
          "全程录像；勿押护照；受压拨 1155。",
          "Видео до/после; без паспорта как залог.",
        ),
      ),
    },
    {
      id: "scooter",
      severity: "high",
      title: t(lang, L("Motorbike rental damage", "เช่ามอเตอร์ไซค์เรียกค่าเสียหาย", "摩托车租赁损坏", "Аренда байка")),
      body: t(
        lang,
        L(
          "Renters allege dents or scratches and hold your passport until you pay thousands of baht.",
          "อ้างรอยบุบ/ขีดข่วน ยึดพาสปอร์ตจนกว่าจะจ่ายหลายพันบาท",
          "声称凹痕划痕，扣护照直至支付数千泰铢。",
          "Удерживают паспорт до оплаты.",
        ),
      ),
      tip: t(
        lang,
        L("Photograph all angles at pickup; use licensed shops; refuse passport collateral.",
          "ถ่ายรอบคันเมื่อรับ ใช้ร้านที่มีใบอนุญาต อย่าให้ยึดพาสปอร์ต",
          "取车时拍照；选有牌照店铺；勿押护照。",
          "Фото при получении; лицензированный прокат.",
        ),
      ),
    },
    {
      id: "bar",
      severity: "high",
      title: t(lang, L("Bar bill inflation", "บิลบาร์พอง", "酒吧账单虚高", "Счёт в баре")),
      body: t(
        lang,
        L(
          "Unordered drinks, “lady drinks,” or hidden fees inflate tabs 2–5×. Security may block exit until paid.",
          "มีเครื่องดื่มที่ไม่ได้สั่ง lady drink ค่าซ่อน บิลพอง 2–5 เท่า อาจไม่ให้ออกจนกว่าจ่าย",
          "未点酒水、小姐酒、隐藏费用使账单翻倍，保安可能不让离开。",
          "Счёт завышен; не пускают до оплаты.",
        ),
      ),
      tip: t(
        lang,
        L("Ask menu prices first; pay at the bar only; call Tourist Police 1155 if trapped.",
          "ถามราคาก่อน จ่ายที่บาร์เท่านั้น โทร 1155 ถ้าถูกกัก",
          "先问价；仅在吧台付款；被困拨 1155。",
          "Цены заранее; платите у бара.",
        ),
      ),
    },
    {
      id: "property",
      severity: "high",
      title: t(lang, L("Fake property & deposits", "หลอกอสังหา / มัดจำ", "虚假房产与定金", "Недвижимость")),
      body: t(
        lang,
        L(
          "Below-market listings on social media, pressure to wire deposits, no foreign-quota letter or Chanote check.",
          "ประกาศราคาต่ำบนโซเชียล เร่งโอน ไม่มีหนังสือโควตา/ตรวจโฉนด",
          "社交媒体低价房源、催促汇款、无配额函或产权核查。",
          "Фейковые объявления; перевод до проверки.",
        ),
      ),
      tip: t(
        lang,
        L("Verify at Land Office before any deposit; use licensed agencies only.",
          "ตรวจที่ดินก่อนมัดจำ ใช้เอเจนต์ที่มีใบอนุญาต",
          "付定金前在土地厅核实；仅用持证中介。",
          "Land Office до депозита.",
        ),
      ),
    },
    {
      id: "fake-police",
      severity: "high",
      title: t(lang, L("Fake police / fines", "ตำรวจปลอม / ปรับเงิน", "假警察/罚款", "Ложная полиция")),
      body: t(
        lang,
        L(
          "Plainclothes “officers” demand passport checks and on-the-spot cash fines without official receipts.",
          "ชุดพลเรือนขอตรวจพาสปอร์ต เก็บเงินสดทันทีโดยไม่มีใบเสร็จราชการ",
          "便衣“警察”查护照、当场收现金无正式收据。",
          "Штрафы без квитанции.",
        ),
      ),
      tip: t(
        lang,
        L("Real police wear uniform and ID; insist on going to a station; call 1155.",
          "ตำรวจจริงมีเครื่องแบบและบัตร ขอไปสถานี โทร 1155",
          "真警察有制服证件；要求去派出所；拨 1155。",
          "Звоните 1155.",
        ),
      ),
    },
    {
      id: "herbal",
      severity: "medium",
      title: t(lang, L("Hair oil / herbal trap", "น้ำมันมะพร้าว / สมุนไพร", "椰子油/草药陷阱", "Масло/травы")),
      body: t(
        lang,
        L(
          "Friendly strangers send you to buy coconut oil, then a “special” shop mixes herbs and bills 20,000–40,000+ THB.",
          "คนแปลกหน้าพาไปซื้อน้ำมันมะพร้าว แล้วร้านผสมสมุนไพรเรียก 20,000–40,000+ บาท",
          "陌生人让你买椰子油，随后“特效”店收费 2–4 万+ 泰铢。",
          "Схема с маслом и травами.",
        ),
      ),
      tip: t(
        lang,
        L("Never follow strangers to unknown shops; buy only what you choose at listed prices.",
          "อย่าตามคนแปลกหน้าไปร้านที่ไม่รู้จัก ซื้อเฉพาะที่เลือกเองตามราคา",
          "勿跟陌生人去陌生店；只买明码标价自选商品。",
          "Не идите с незнакомцами в магазины.",
        ),
      ),
    },
    {
      id: "gems",
      severity: "medium",
      title: t(lang, L("Gem & jewelry scam", "พลอย / เครื่องประดับ", "宝石珠宝骗局", "Gem")),
      body: t(
        lang,
        L(
          "Tuk-tuk drivers offer “special government sale” gems for resale abroad — stones are worthless or fake.",
          "คนขับพาไปร้านพลอย “ลดราคารัฐ” ขายต่อต่างประเทศ — ของไม่มีมูลค่า",
          "嘟嘟车带去“政府特价”宝石——多为假货或无价值。",
          "«Государственная» распродажа — подделки.",
        ),
      ),
      tip: t(
        lang,
        L("Ignore unsolicited gem tours; buy jewelry only from reputable malls with receipts.",
          "ไม่สนใจทัวร์พลอยที่ชวน ซื้อเครื่องประดับจากห้างที่เชื่อถือได้เท่านั้น",
          "勿信主动宝石游；仅在正规商场购买并索收据。",
          "Только проверенные магазины.",
        ),
      ),
    },
    {
      id: "visa",
      severity: "medium",
      title: t(lang, L('"Express" visa agents', 'ตัวแทนวีซ่า "ด่วน"', "「加急」签证", "Виза")),
      body: t(
        lang,
        L(
          "Sidewalk brokers promise extensions without official receipts or TM.7 — documents may be invalid.",
          "นายหน้าริมถนนสัญญาต่ออายุโดยไม่มีใบเสร็จหรือ TM.7 เอกสารอาจไม่ถูกต้อง",
          "路边中介承诺延签无正式收据——文件可能无效。",
          "Нелегальные брокеры.",
        ),
      ),
      tip: t(
        lang,
        L("Use Chonburi Immigration or accredited law firms only.",
          "ใช้ตม.ชลบุรีหรือทนายที่ได้รับการรับรองเท่านั้น",
          "仅通过春武里移民局或合规律所。",
          "Только Immigration Chonburi.",
        ),
      ),
    },
    {
      id: "romance",
      severity: "medium",
      title: t(lang, L("Romance & transfer scams", "หลอกโอนเงินออนไลน์", "网恋转账", "Романтика")),
      body: t(
        lang,
        L(
          "Dating-app or bar contacts request emergency transfers abroad — often never met in person.",
          "คนจากแอปหาคู่หรือบาร์ขอโอนฉุกเฉินต่างประเทศ มักไม่เคยเจอตัวจริง",
          "交友软件或酒吧联系人索紧急汇款——常未见面。",
          "Переводы «в экстренной ситуации».",
        ),
      ),
      tip: t(
        lang,
        L("Never send money to someone you have not met; verify in video call.",
          "อย่าโอนให้คนที่ไม่เคยเจอ ยืนยันทางวิดีโอคอล",
          "勿向未见面者汇款。",
          "Без переводов незнакомцам.",
        ),
      ),
    },
    {
      id: "taxi",
      severity: "medium",
      title: t(lang, L("Taxi & baht-bus fares", "แท็กซี่ / สองแถว", "出租车与双条", "Такси")),
      body: t(
        lang,
        L(
          "Meters off, flat overcharges, or “closed temple” redirects to commission shops.",
          "ไม่เปิดมิเตอร์ เรียกเกิน หรือบอกวัดปิดพาไปร้านคอมมิชชัน",
          "不打表、乱收费、或“寺庙关闭”带去抽佣店。",
          "Без счётчика; ложные «храмы закрыты».",
        ),
      ),
      tip: t(
        lang,
        L("Use Grab/Bolt; agree songthaew fare before boarding; ignore unsolicited tour offers.",
          "ใช้ Grab/Bolt ตกลงค่าสองแถวก่อนขึ้น ไม่สนใจทัวร์ที่ชวน",
          "用 Grab/Bolt；双条先讲价。",
          "Grab/Bolt; договоритесь о цене.",
        ),
      ),
    },
    {
      id: "crypto",
      severity: "medium",
      title: t(lang, L("Crypto & investment", "crypto / ลงทุน", "加密与投资", "Crypto")),
      body: t(
        lang,
        L(
          "Street crypto kiosks, high-return schemes, and offshore “safe” deposits with no regulation.",
          "ตู้ crypto ริมถนน ผลตอบแทนสูง ฝากออฟชอร์ไม่มีกฎหมายคุ้มครอง",
          "街头加密机、高回报骗局、无监管离岸存款。",
          "Crypto-киоски; нереальная доходность.",
        ),
      ),
      tip: t(
        lang,
        L("Use licensed Thai banks only; walk away from guaranteed returns.",
          "ใช้ธนาคารไทยที่มีใบอนุญาต อย่าเชื่อผลตอบแทนการันตี",
          "仅用持牌银行；勿信保证收益。",
          "Только лицензированные банки.",
        ),
      ),
    },
    {
      id: "fake-tours",
      severity: "medium",
      title: t(lang, L("Fake tours & tickets", "ทัวร์ / ตั๋วปลอม", "假团票", "Туры")),
      body: t(
        lang,
        L(
          "Counterfeit island or show tickets, or tours that skip paid attractions after collecting cash.",
          "ตั๋วเกาะหรือโชว์ปลอม หรือทัวร์เก็บเงินแล้วไม่พาไปตามที่สัญญา",
          "假岛票/show票，或收款后不履行行程。",
          "Поддельные билеты.",
        ),
      ),
      tip: t(
        lang,
        L("Book via official counters, hotel concierge, or known platforms with receipts.",
          "จองผ่านเคาน์เตอร์ทางการ โรงแรม หรือแพลตฟอร์มที่รู้จัก",
          "通过官方柜台、酒店或知名平台预订。",
          "Официальные кассы и платформы.",
        ),
      ),
    },
    {
      id: "pickpocket",
      severity: "medium",
      title: t(lang, L("Pickpockets & distraction", "กระเป๋าสะดวก / ลวง", "扒窃与分心", "Карманники")),
      body: t(
        lang,
        L(
          "Crowded Walking Street, markets, and baht-bus — phone snatches and wallet dips.",
          "Walking Street ตลาด สองแถวแออัด — ฉกมือถือและกระเป๋า",
          "步行街、市场、双条拥挤处——手机与钱包。",
          "Толпа на Walking Street.",
        ),
      ),
      tip: t(
        lang,
        L("Front pocket or cross-body bag; don’t flash phones when approached.",
          "กระเป๋าคาดอก้าม อย่าโชว์มือถือเมื่อมีคนเข้ามา",
          "胸包/斜挎；有人靠近勿亮手机。",
          "Сумка через плечо.",
        ),
      ),
    },
  ];
  return items;
}

export function getScamRedFlags(lang: LanguageCode): string[] {
  return [
    t(lang, L("Anyone insisting you pay cash immediately without paperwork", "บังคับจ่ายเงินสดทันทีโดยไม่มีเอกสาร", "坚持现金且无文书", "Только наличные без документов")),
    t(lang, L("Requests to hold your passport as “deposit”", "ขอฝากพาสปอร์ตเป็นหลักประกัน", "扣押护照作押金", "Паспорт как залог")),
    t(lang, L("Strangers offering gem tours, herbal cures, or visa shortcuts", "คนแปลกหน้าชวนทัวร์พลอย สมุนไพร วีซ่าด่วน", "陌生人推销宝石/草药/签证捷径", "Незнакомцы с «предложениями»")),
    t(lang, L("Deals far below market for condos or rentals", "ราคาต่ำผิดปกติสำหรับคอนโด/เช่า", "房价租金远低于市价", "Цены «слишком низкие»")),
    t(lang, L("Pressure to wire money before you verify title or quota", "เร่งโอนก่อนตรวจโฉนดหรือโควตา", "核实产权/配额前催促汇款", "Перевод до проверки")),
    t(lang, L("Plainclothes “police” without official receipt", "ตำรวจชุดพลเรือนไม่มีใบเสร็จ", "便衣警察无收据", "«Полиция» без квитанции")),
  ];
}

export function getScamReportSteps(lang: LanguageCode) {
  return [
    t(lang, L("Stay safe — move to a public place with witnesses if threatened.", "อยู่ที่สาธารณะมีพยาน ถ้าถูกข่มขู่", "移至有人证的公共场所", "Безопасное место")),
    t(lang, L("Call Tourist Police 1155 (English) or 191 for immediate danger.", "โทร 1155 หรือ 191 ถ้าอันตราย", "拨 1155 或 191", "1155 или 191")),
    t(lang, L("Get a written police report — needed for insurance and embassy.", "ขอรายงานตำรวจเป็นลายลักษณ์อักษร ใช้กับประกันและสถานทูต", "索取书面报案记录", "Письменный отчёт")),
    t(lang, L("Screenshot chats, transfers, and photos; do not delete evidence.", "แคปแชท สลิป รูป อย่าลบหลักฐาน", "截图聊天与转账", "Сохраните доказательства")),
    t(lang, L("Cancel compromised cards; contact bank fraud line same day.", "ยกเลิกบัตรที่เสี่ยง แจ้งธนาคารวันเดียวกัน", "当日挂失银行卡", "Заблокируйте карты")),
    t(lang, L("Contact embassy if passport stolen or you are detained.", "ติดต่อสถานทูตถ้าพาสปอร์ตหายหรือถูกควบคุมตัว", "护照遗失或被扣联系使馆", "Посольство при необходимости")),
  ];
}

export function getScamEssentials(lang: LanguageCode): string[] {
  return [
    t(lang, L("Use licensed real estate agencies with registered company documents.", "ใช้เอเจนต์อสังหาที่มีใบอนุญาต", "选用持证房产中介", "Лицензированные агентства")),
    t(lang, L("Verify visa advice at Chonburi Immigration — not sidewalk agents.", "ยืนยันวีซ่าที่ตม.ชลบุรี", "签证以春武里移民局为准", "Immigration Chonburi")),
    t(lang, L("Screenshot Grab/Bolt trips; save rental contracts and TM30 copies.", "แคป Grab/Bolt เก็บสัญญาเช่า TM30", "截图行程；保存租约与 TM30", "Grab/Bolt; TM30")),
    t(lang, L("Report crimes to Tourist Police 1155 and keep your case reference number.", "แจ้ง 1155 และเก็บเลขคดี", "向 1155 报案并保留案件号", "1155 и номер дела")),
  ];
}
