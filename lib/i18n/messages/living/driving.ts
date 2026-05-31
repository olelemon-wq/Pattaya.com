import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

export function getDrivingPage(lang: LanguageCode) {
  return {
    introTitle: t(
      lang,
      L(
        "Driving & licenses in Pattaya",
        "ขับรถและใบขับขี่ในพัทยา",
        "芭提雅驾驶与驾照指南",
        "Вождение и права в Паттайе",
      ),
    ),
    introBody: t(
      lang,
      L(
        "Many expats rent scooters or cars in Chonburi. Use the interactive toolkit below to compare transport costs, complete a pre-rental checklist, and walk through license steps — then read insurance, road hotspots, and police tips on this page.",
        "ชาวต่างชาติหลายคนเช่ามอเตอร์ไซค์หรือรถในชลบุรี ใช้เครื่องมือด้านล่างเปรียบเทียบค่าเดินทาง เช็กลิสต์ก่อนเช่า และดูขั้นตอนใบขับขี่ — จากนั้นอ่านประกัน จุดเสี่ยงบนถนน และด่านตำรวจในหน้านี้",
        "许多外籍人士在春武里租车或摩托。请先用下方工具对比费用、完成租车清单并查看驾照步骤，再阅读本页的保险、路况与警察拦停说明。",
        "Сравните расходы и чеклист ниже, затем страховка и дороги на странице.",
      ),
    ),
    pathwaysToolkitNote: t(
      lang,
      L(
        "License steps and rental checks are in the toolkit above — this section explains convert vs new-applicant routes only.",
        "ขั้นตอนใบขับขี่และเช็กลิสต์เช่ารถอยู่ในเครื่องมือด้านบน — ส่วนนี้อธิบายเฉพาะเส้นทางแปลงใบเดิมกับสมัครใหม่",
        "驾照步骤与租车清单见上方工具——本节仅说明转换与新申请路径。",
        "Шаги прав и чеклист — в блоке выше; здесь только конвертация vs новый заявитель.",
      ),
    ),
    pathwaysTitle: t(lang, L("Two common paths", "สองเส้นทางหลัก", "两条常见路径", "Два пути")),
    pathwaysSubtitle: t(
      lang,
      L(
        "Most Pattaya residents either convert a home-country license or sit the DLT tests from scratch.",
        "คนส่วนใหญ่แปลงใบเดิม หรือสอบใหม่ที่กรมขนส่ง",
        "多数人转换本国驾照，或在陆运厅全新考取。",
        "Конвертация или экзамены с нуля в DLT.",
      ),
    ),
    convertTitle: t(
      lang,
      L("Convert foreign license", "แปลงใบขับขี่ต่างประเทศ", "转换外国驾照", "Конвертация"),
    ),
    convertBody: t(
      lang,
      L(
        "If your nationality is on the approved list and your home license is still valid, you may skip the practical driving test at Chonburi DLT — you still need medical certificate, residence proof, and often an embassy-certified translation.",
        "หากสัญชาติอยู่ในรายการที่รับและใบเดิมยังไม่หมดอายุ อาจข้ามสอบขับที่กรมขนส่งชลบุรี — ยังต้องมีใบตรวจสุขภาพ หลักฐานที่อยู่ และแปลสถานทูต (ตามที่กำหนด)",
        "若国籍在认可名单且本国驾照仍有效，可在春武里陆运厅免路考——仍需体检、住址证明及使馆认证翻译（视规定）。",
        "При одобренной национальности и действующих правах — без практического экзамена; медсправка, адрес, перевод.",
      ),
    ),
    newTitle: t(
      lang,
      L("New applicant / expired home license", "ผู้สมัครใหม่ / ใบเดิมหมดอายุ", "新申请人/本国驾照过期", "Новый заявитель"),
    ),
    newBody: t(
      lang,
      L(
        "Expect colour-blindness screening, reaction test, and basic theory at DLT. Motorcycle (class A) and car (class B) are separate licenses — most expats who ride daily get both if they use a bike and rent a car.",
        "ต้องตรวจตาบอดสี ทดสอบปฏิกิริยา และทฤษฎีพื้นฐาน มอเตอร์ไซค์ (ชั้น A) และรถยนต์ (ชั้น B) แยกกัน — คนที่ขี่มอไซค์และเช่ารถควรมีทั้งสอง",
        "需色盲检测、反应测试与基础理论。摩托（A类）与汽车（B类）分开考取。",
        "Тесты зрения, реакции, теория; классы A (мото) и B (авто) отдельно.",
      ),
    ),
    dltTitle: t(lang, L("Where to go from Pattaya", "ไปที่ไหนจากพัทยา", "从芭提雅去哪办", "Куда ехать")),
    dltBody: t(
      lang,
      L(
        "Pattaya expats usually visit the Department of Land Transport, Chonburi Province (not Bangkok DLT). Some medical clinics on Sukhumvit and North Pattaya issue same-day driving medical certificates. Arrive early with passport, visa page, and TM30 or lease.",
        "ชาวต่างชาติในพัทยามักไปกรมการขนส่งทางบก จังหวัดชลบุรี คลินิกหลายแห่งบนสุขุมวิทและพัทยาเหนือออกใบตรวจสุขภาพขับขี่ได้ในวันเดียวกัน ไปเช้าพร้อมพาสปอร์ต หน้าวีซ่า และ TM30 หรือสัญญาเช่า",
        "芭提雅居民通常前往春武里府陆运厅（非曼谷）。北芭与 Sukhumvit 多家诊所可当日出具驾驶体检证明。请早到并携带护照、签证页、TM30 或租约。",
        "Обычно DLT провинции Чонбури; медсправку — в клиниках Sukhumvit / North Pattaya в тот же день.",
      ),
    ),
    insuranceTitle: t(lang, L("Insurance you need", "ประกันที่ต้องมี", "必备保险", "Страховка")),
    insuranceSubtitle: t(
      lang,
      L(
        "Compulsory motor insurance (Por Ror Bor / พ.ร.บ.) is mandatory; class 1 voluntary cover is strongly recommended for cars.",
        "พ.ร.บ. บังคับ ประกันชั้น 1 เสนอแนะสำหรับรถยนต์",
        "强制险（พ.ร.บ.）必备；汽车建议购买综合险。",
        "พ.ร.บ. обязательна; для авто желателен класс 1.",
      ),
    ),
    tableType: t(lang, L("Type", "ประเภท", "类型", "Тип")),
    tableRequired: t(lang, L("Required?", "บังคับ?", "必须？", "Обяз.?")),
    tableNotes: t(lang, L("Notes", "หมายเหตุ", "说明", "Примечание")),
    yes: t(lang, L("Yes", "ใช่", "是", "Да")),
    optional: t(lang, L("Optional", "ไม่บังคับ", "可选", "Нет")),
    pattayaTitle: t(
      lang,
      L("Pattaya road realities",
        "ความจริงบนถนนพัทยา",
        "芭提雅路况",
        "Дороги Паттайи",
      ),
    ),
    pattayaSubtitle: t(
      lang,
      L(
        "Traffic mixes tour buses, songthaews, baht buses, and thousands of motorcycles — defensive driving matters more than speed.",
        "รถทัวร์ สองแถว รถบัส 10 บาท และมอเตอร์ไซค์ปนกัน — ขับสุขุภาพสำคัญกว่าความเร็ว",
        "旅游大巴、双条、十铢公交与大量摩托混行——防御性驾驶比速度更重要。",
        "Автобусы, songthaew и мото — важнее осторожность, чем скорость.",
      ),
    ),
    motoTitle: t(lang, L("Motorcycles vs cars", "มอเตอร์ไซค์กับรถยนต์", "摩托与汽车", "Мото и авто")),
    motoSubtitle: t(
      lang,
      L("Choose the license class that matches what you actually ride or drive.",
        "ขอใบขับขี่ให้ตรงกับยานพาหนะที่ใช้จริง",
        "按实际使用的车辆考取对应驾照类别。",
        "Класс прав = тот транспорт, которым пользуетесь.",
      ),
    ),
    policeTitle: t(lang, L("Police stops & fines", "ด่านตำรวจและค่าปรับ", "警察拦停与罚款", "Остановки полиции")),
    policeSubtitle: t(
      lang,
      L(
        "Checkpoints are common near Walking Street, Bali Hai pier, and on Sukhumvit late at night — especially for helmets and licenses.",
        "ด่านพบบ่อยใกล้ Walking Street ท่าเรือบาลีไฮ และสุขุมวิทดึก ๆ — โดยเฉพาะหมวกกันน็อกและใบขับขี่",
        "Walking Street、 Bali Hai 码头及深夜 Sukhumvit 常见检查站——尤其查头盔与驾照。",
        "КПП у Walking Street, Bali Hai, Sukhumvit — шлемы и права.",
      ),
    ),
    livingHub: t(lang, L("Living hub", "ศูนย์ Living", "生活中心", "Living")),
    rideApps: t(lang, L("Grab & Bolt", "Grab & Bolt", "Grab & Bolt", "Grab & Bolt")),
    songthaew: t(lang, L("Songthaews", "รถสองแถว", "双条车", "Songthaew")),
    emergency: t(lang, L("Emergency guide", "คู่มือฉุกเฉิน", "紧急指南", "Экстренная помощь")),
    etiquette: t(lang, L("Culture & etiquette", "วัฒนธรรมและมารยาท", "文化与礼仪", "Этикет")),
  };
}

export type DrivingStepId =
  | "step-1"
  | "step-2"
  | "step-3"
  | "step-4"
  | "step-5"
  | "step-6";

export function getDrivingSteps(lang: LanguageCode) {
  return [
    {
      id: "step-1" as DrivingStepId,
      step: 1,
      title: t(lang, L("Confirm eligibility", "ตรวจสิทธิ์สมัคร", "确认资格", "Проверка")),
      note: t(
        lang,
        L(
          "Valid non-immigrant visa or extension, passport, and TM30 / house registration / lease showing Chonburi address.",
          "วีซ่าหรือต่ออายุ พาสปอร์ต TM30 ทะเบียนบ้าน หรือสัญญาเช่าที่อยู่ชลบุรี",
          "有效签证/延期、护照、TM30/户口/显示春武里地址的租约。",
          "Виза, паспорт, TM30 / аренда с адресом Чонбури.",
        ),
      ),
    },
    {
      id: "step-2" as DrivingStepId,
      step: 2,
      title: t(lang, L("Medical certificate", "ใบตรวจสุขภาพ", "体检证明", "Медсправка")),
      note: t(
        lang,
        L(
          "Issued within 30 days by a clinic registered for driver medicals — vision, hearing, basic fitness.",
          "ออกภายใน 30 วัน จากคลินิกที่ลงทะเบียน — สายตา การได้ยิน สุขภาพพื้นฐาน",
          "30天内由登记诊所出具——视力、听力、基本健康。",
          "В течение 30 дней в зарегистрированной клинике.",
        ),
      ),
    },
    {
      id: "step-3" as DrivingStepId,
      step: 3,
      title: t(lang, L("Prepare documents", "เตรียมเอกสาร", "准备材料", "Документы")),
      note: t(
        lang,
        L(
          "Passport + visa copies, medical cert, residence proof, photos, home license + translation (if converting).",
          "สำเนาพาสปอร์ต/วีซ่า ใบตรวจ หลักฐานที่อยู่ รูป ใบเดิม+แปล (ถ้าแปลง)",
          "护照签证复印件、体检、住址证明、照片、本国驾照及翻译（转换时）。",
          "Копии паспорта, медсправка, адрес, фото, права + перевод.",
        ),
      ),
    },
    {
      id: "step-4" as DrivingStepId,
      step: 4,
      title: t(lang, L("DLT tests", "สอบที่กรมขนส่ง", "陆运厅考试", "Тесты DLT")),
      note: t(
        lang,
        L(
          "Colour-blindness plate, reaction time, and computer theory — motorcycle and car tests are separate queues.",
          "ทดสอบตาบอดสี ปฏิกิริยา และทฤษฎีคอม — มอไซค์และรถยนต์คิวแยก",
          "色盲板、反应测试、机考理论——摩托与汽车分开排队。",
          "Зрение, реакция, теория; отдельные очереди для мото и авто.",
        ),
      ),
    },
    {
      id: "step-5" as DrivingStepId,
      step: 5,
      title: t(lang, L("Pay fees & photo", "ชำระค่าธรรมเนียม", "缴费拍照", "Оплата")),
      note: t(
        lang,
        L(
          "Fees are modest (a few hundred baht per class); biometric photo taken on site.",
          "ค่าธรรมเนียมไม่สูง (หลักร้อยบาทต่อชั้น) ถ่ายรูปไบโอเมตริกที่สำนักงาน",
          "费用不高（每类数百泰铢）；现场采集生物识别照片。",
          "Небольшая пошлина; биометрическое фото на месте.",
        ),
      ),
    },
    {
      id: "step-6" as DrivingStepId,
      step: 6,
      title: t(lang, L("Receive Thai license", "รับใบขับขี่ไทย", "领取泰国驾照", "Получение прав")),
      note: t(
        lang,
        L(
          "Car license typically valid 5 years; motorcycle class separate. Carry it with compulsory insurance when driving.",
          "ใบรถยนต์มัก 5 ปี มอเตอร์ไซค์แยกชั้น พกใบขับขี่และ พ.ร.บ. ตอนขับ",
          "汽车驾照通常5年；摩托另考。驾车时携带驾照与强制险。",
          "Авто — 5 лет; мото отдельно; всегда с พ.ร.บ.",
        ),
      ),
    },
  ];
}

export function getDrivingInsuranceRows(lang: LanguageCode) {
  return [
    {
      type: t(lang, L("Por Ror Bor (พ.ร.บ.)", "พ.ร.บ.", "强制险", "พ.ร.บ.")),
      required: true,
      summary: t(
        lang,
        L(
          "Compulsory third-party cover — included when you register or renew vehicle tax.",
          "คุ้มครองบุคคลที่สามบังคับ — มักรวมตอนต่อภาษีรถ",
          "强制第三者责任险——通常含在车辆税费中。",
          "Обязательное ОСГО при регистрации/налоге.",
        ),
      ),
    },
    {
      type: t(lang, L("Class 1 voluntary", "ประกันชั้น 1", "综合险（自愿）", "Класс 1")),
      required: false,
      summary: t(
        lang,
        L(
          "Covers your vehicle damage and theft — recommended if you own or long-term lease a car.",
          "คุ้มครองรถคุณ ชน หาย — แนะนำถ้าซื้อหรือเช่ารถระยะยาว",
          "保障本车损失与盗窃——自有或长租汽车建议购买。",
          "Ущерб и угон вашего авто — для владельцев.",
        ),
      ),
    },
    {
      type: t(lang, L("Class 2+ / add-ons", "ประกันชั้น 2+ / เสริม", "2+类/附加", "Класс 2+")),
      required: false,
      summary: t(
        lang,
        L(
          "Cheaper than class 1 with limits — read exclusions for flood and drunk driving.",
          "ถูกกว่าชั้น 1 แต่มีข้อจำกัด — อ่านข้อยกเว้นน้ำท่วมและเมา",
          "比综合险便宜但有限额——注意水灾与酒驾免责。",
          "Дешевле класса 1; исключения — наводнение, алкоголь.",
        ),
      ),
    },
    {
      type: t(lang, L("Rental excess waiver", "ประกันเช่ารถ", "租车超额险", "Аренда")),
      required: false,
      summary: t(
        lang,
        L(
          "Buy from rental desk or use credit-card rental coverage — inspect car photos before signing.",
          "ซื้อที่เคาน์เตอร์เช่าหรือใช้บัตรเครดิต — ถ่ายรูปรถก่อนเซ็น",
          "柜台购买或用信用卡租车险——签字前拍照留证。",
          "На стойке аренды или по карте; фото до подписи.",
        ),
      ),
    },
  ];
}

export function getDrivingHotspots(lang: LanguageCode) {
  return [
    t(
      lang,
      L(
        "Beach Road & Walking Street — heavy pedestrians, U-turns, and police at night.",
        "Beach Road และ Walking Street — คนเดินเยอะ กลับรถ ตำรวจดึก",
        "Beach Road 与 Walking Street——行人多、掉头多、夜间警察多。",
        "Beach Road — пешеходы, развороты, полиция ночью.",
      ),
    ),
    t(
      lang,
      L(
        "Sukhumvit (Central–North Pattaya) — merging traffic and bus stops; watch for songthaews stopping suddenly.",
        "สุขุมวิท — รถรวมเลน สองแถวจอดกะทันหัน",
        "Sukhumvit——并线繁忙，双条突然停车。",
        "Sukhumvit — songthaew останавливаются внезапно.",
      ),
    ),
    t(
      lang,
      L(
        "Pratumnak Hill — steep sois, blind corners, wet roads in rainy season.",
        "พระตำหนัก — ซอยชัน มุมอับ ถนนลื่นฤดูฝน",
        "帕塔姆纳克山坡——急弯盲角，雨季路滑。",
        "Pratumnak — крутые soi, мокро в сезон дождей.",
      ),
    ),
    t(
      lang,
      L(
        "Motorway 7 (Bangkok–Pattaya) — tolls by cash or M-Flow; keep class-1 insurance for high-speed claims.",
        "ทางหลวง 7 — เก็บเงินหรือ M-Flow ประกันชั้น 1 สำหรับความเร็วสูง",
        "7号高速——现金或 M-Flow 收费；高速事故建议综合险。",
        "Motorway 7 — платные участки; класс 1 для скорости.",
      ),
    ),
    t(
      lang,
      L(
        "Jomtien Second Road — tourist scooters; sand on tires near beach access points.",
        "จอมเทียนสาย 2 — มอเตอร์ไซค์ท่องเที่ยว ทรายใกล้ชายหาด",
        "仲天二路——游客摩托多，海滩入口路面有沙。",
        "Jomtien — туристические байки, песок у пляжа.",
      ),
    ),
  ];
}

export function getDrivingVehicleCompare(lang: LanguageCode) {
  return [
    {
      id: "moto",
      title: t(lang, L("Motorcycle / scooter", "มอเตอร์ไซค์ / สกู๊ตเตอร์", "摩托车/踏板", "Мото")),
      points: [
        t(lang, L("Class A license required for bikes over 50cc.", "ต้องใบชั้น A สำหรับมอเตอร์ไซค์เกิน 50cc", "50cc以上需A类驾照", "Класс A >50cc")),
        t(lang, L("Helmet for rider and passenger — police fines are common.", "หมวกคนขับและผู้โดยสาร — โดนปรับบ่อย", "驾驶员与乘客均需头盔", "Шлемы обязательны")),
        t(lang, L("Rent 150–300 THB/day; check brakes and mirrors.", "เช่า 150–300 บาท/วัน ตรวจเบรกและกระจก", "日租150–300泰铢，检查刹车", "150–300 бат/день")),
      ],
    },
    {
      id: "car",
      title: t(lang, L("Car", "รถยนต์", "汽车", "Авто")),
      points: [
        t(lang, L("Class B license; IDP alone is not enough long-term.", "ใบชั้น B IDP ใช้ระยะสั้น อยู่ยาวต้องใบไทย", "B类驾照；长期不能仅靠IDP", "Класс B; IDP — краткосрочно")),
        t(lang, L("Parking scarce on Beach Road — use condo or mall lots.", "จอด Beach Road ยาก ใช้ที่จอดคอนโดหรือห้าง", "Beach Road 难停车", "Парковка — кондо/ТЦ")),
        t(lang, L("International chains at U-Tapao and city — book ahead in high season.", "สาขาสากลที่อู่ตะเภาและในเมือง — จองล่วงหน้าช่วงไฮซีซัน", "旺季提前预订租车", "Бронируйте в сезон")),
        t(
          lang,
          L(
            "Buying used? Transfer at DLT with the seller and check finance liens — get legal advice for foreign ownership structures.",
            "ซื้อมือสอง? โอนที่กรมขนส่งกับผู้ขาย ตรวจภาระผูกพัน — ปรึกษากฎหมายถ้าโครงสร้างต่างชาติ",
            "购二手车须在陆运厅与卖方过户并查抵押；外籍结构建议咨询律师。",
            "Покупка б/у — переоформление в DLT и проверка обременений.",
          ),
        ),
      ],
    },
  ];
}

export function getDrivingPoliceTips(lang: LanguageCode) {
  return [
    t(
      lang,
      L(
        "Stay calm; show license, vehicle registration, and พ.ร.บ. insurance certificate.",
        "สบายใจ แสดงใบขับขี่ ทะเบียนรถ และกรมธรรม์ พ.ร.บ.",
        "保持冷静；出示驾照、行驶证与强制险保单。",
        "Спокойно: права, регистрация, พ.ร.บ.",
      ),
    ),
    t(
      lang,
      L(
        "For traffic fines, pay at a station or official channel if offered — keep receipt; avoid unofficial “on-the-spot” amounts without paperwork.",
        "ค่าปรับจ่ายที่สถานีหรือช่องทางทางการ เก็บใบเสร็จ หลีกเลี่ยงจ่ายไม่มีหลักฐาน",
        "罚款应在警局或官方渠道缴纳并保留收据。",
        "Штраф — только официально, с квитанцией.",
      ),
    ),
    t(
      lang,
      L(
        "If vehicle is impounded, you will need valid license and insurance release — contact your embassy if language is a barrier.",
        "รถถูกยึดต้องมีใบขับขี่และประกันครบ — ติดสถานทูตถ้าสื่อสารไม่ได้",
        "车辆被扣需齐全证件——语言障碍可联系使馆。",
        "При эвакуации авто — права и страховка; посольство.",
      ),
    ),
  ];
}
