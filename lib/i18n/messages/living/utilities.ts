import type { LanguageCode } from "@/lib/i18n/languages";
import { faq, L, t } from "@/lib/i18n/living-helpers";

export function getUtilitiesPage(lang: LanguageCode) {
  return {
    introTitle: t(
      lang,
      L(
        "Utilities in Pattaya — what expats miss",
        "ค่าสาธารณูปโภคในพัทยา — สิ่งที่มักพลาด",
        "芭提雅公用事业——外籍人士常忽略的要点",
        "Коммуналка в Паттайе — что упускают экспаты",
      ),
    ),
    introBody: t(
      lang,
      L(
        "Electricity and water look cheap on paper until you discover your building bills above government rates. This guide covers real Pattaya numbers, seasonal AC spikes, and hidden costs like drinking water and trash.",
        "ค่าไฟน้าดูถูกจนกว่าจะรู้ว่าตึกคิดเกินอัตราหลวง คู่มือนี้ครอบคลุมตัวเลขจริงในพัทยา ค่าแอร์ตามฤดูกาล และค่าใช้จ่ายแอบแฝงเช่นน้ำดื่มและขยะ",
        "水电看似便宜，直到发现楼盘收费高于政府电价。本指南涵盖芭提雅实际数字、空调季节性高峰及饮用水等隐性成本。",
        "Счета кажутся низкими, пока не увидите наценку здания над гостарифом.",
      ),
    ),
    ratesTitle: t(
      lang,
      L(
        "Government rate vs condo / rental rate",
        "เรทหลวง vs เรทคอนโด/บ้านเช่า",
        "政府电价 vs 公寓/租房电价",
        "Гостариф vs тариф кондо",
      ),
    ),
    ratesSubtitle: t(
      lang,
      L(
        "The #1 budget surprise for newcomers — always ask before signing a lease.",
        "เรื่องที่คนเจ็บมากที่สุด — ถามก่อนเซ็นสัญญาเช่าเสมอ",
        "新来者的头号预算意外——签约前务必问清。",
        "Главный сюрприз для новичков — спросите до подписания.",
      ),
    ),
    electricGov: t(lang, L("PEA government rate", "เรทการไฟฟ้า PEA", "PEA 政府电价", "Тариф PEA")),
    electricGovRate: t(lang, L("~฿4–5 per unit", "~฿4–5 ต่อหน่วย", "约 ฿4–5/度", "~฿4–5/ед.")),
    electricBuilding: t(lang, L("Many condos & agent rentals", "คอนโด/เช่าผ่านเอเจนต์", "多数公寓/中介房源", "Кондо и агентства")),
    electricBuildingRate: t(
      lang,
      L("฿7–9/unit common (up to ฿10)", "฿7–9 ต่อหน่วย (บางที่ ฿10)", "常见 ฿7–9（最高 ฿10）", "฿7–9 (до ฿10)"),
    ),
    waterGov: t(lang, L("PWA government rate", "เรทการประปา PWA", "PWA 水价", "Тариф PWA")),
    waterGovRate: t(lang, L("~฿15–20 per m³", "~฿15–20 ต่อ ลบ.ม.", "约 ฿15–20/立方米", "~฿15–20/м³")),
    waterBuilding: t(lang, L("Condo billing", "คิดในอาคาร", "公寓计费", "В кондо")),
    waterBuildingRate: t(
      lang,
      L("Flat minimum ฿100–300/mo or ฿35–45/m³", "เหมาขั้นต่ำ ฿100–300/เดือน หรือ ฿35–45/ลบ.ม.", "包月最低 ฿100–300 或 ฿35–45/m³", "Минимум ฿100–300 или ฿35–45/м³"),
    ),
    ratesTip: t(
      lang,
      L(
        "Before signing: ask the landlord or juristic person whether water and electricity follow the government bill or the building’s own meter rate.",
        "ก่อนเซ็น: ถามเจ้าของหรือนิติบุคคลว่าคิดตามบิลหลวงหรือเรทมิเตอร์ของตึก",
        "签约前：向房东或物业确认水电按政府账单还是楼盘自有费率计费。",
        "Спросите: госсчёт или тариф здания?",
      ),
    ),
    acTitle: t(
      lang,
      L("Air conditioning — seasonal swings",
        "ค่าแอร์ — ผันแปรตามฤดูกาล",
        "空调费——季节性波动",
        "Кондиционер — по сезонам",
      ),
    ),
    acSubtitle: t(
      lang,
      L(
        "Average monthly figures hide how much Pattaya heat changes your bill.",
        "ตัวเลขเฉลี่ยไม่สะท้อนว่าความร้อนพัทยาเปลี่ยนบิลแค่ไหน",
        "月均数字无法反映芭提雅酷暑对账单的影响。",
        "Средние цифры скрывают скачки летом.",
      ),
    ),
    acHotSeason: t(
      lang,
      L(
        "Hot season (Mar–May): bills often jump 30–50% as AC works harder against outdoor heat.",
        "หน้าร้อน (มี.ค.–พ.ค.): ค่าไฟมักพุ่ง 30–50% เพราะแอร์ทำงานหนักขึ้น",
        "热季（3–5月）：电费常涨30–50%，空调负荷更大。",
        "Март–май: +30–50% к счёту.",
      ),
    ),
    acLightTitle: t(
      lang,
      L("30 sqm studio — AC at night (~8 h)",
        "สตูดิโอ 30 ตร.ม. — แอร์ตอนนอน (~8 ชม.)",
        "30㎡单间——夜间开空调约8小时",
        "Студия 30 м² — ночью ~8 ч",
      ),
    ),
    acLightBill: t(lang, L("~฿1,500–2,000 / month", "~฿1,500–2,000 / เดือน", "约 ฿1,500–2,000/月", "~฿1,500–2,000")),
    acHeavyTitle: t(
      lang,
      L("Same unit — AC most of day + condo rate",
        "ห้องเดียวกัน — แอร์เกือบทั้งวัน + เรทคอนโด",
        "同户型——全天开空调+公寓电价",
        "Та же студия — AC весь день + тариф кондо",
      ),
    ),
    acHeavyBill: t(lang, L("~฿4,000–6,000 / month", "~฿4,000–6,000 / เดือน", "约 ฿4,000–6,000/月", "~฿4,000–6,000")),
    waterDrinkTitle: t(
      lang,
      L("Drinking water (not tap)",
        "น้ำดื่ม (ไม่ใช่ก๊อก)",
        "饮用水（非自来水）",
        "Питьевая вода",
      ),
    ),
    waterDrinkSubtitle: t(
      lang,
      L(
        "Tap water in Pattaya is not for drinking — even boiled. Budget this separately.",
        "น้ำประปาพัทยาดื่มไม่ได้ แม้ต้มแล้ว — แยกงบส่วนนี้",
        "芭提雅自来水不宜直饮——即使烧开。请单独预算。",
        "Из крана не пьют — даже кипячёную.",
      ),
    ),
    gallonTitle: t(lang, L("18.9 L delivery", "ส่งถัง 18.9 ลิตร", "18.9升桶装配送", "Доставка 18,9 л")),
    gallonBody: t(
      lang,
      L(
        "Local brands or Sprinkle/Crystal — home delivery. ~฿60–80 per refill (deposit on first bottle extra).",
        "แบรนด์ท้องถิ่นหรือ Sprinkle/คริสตัล ส่งถึงบ้าน ~฿60–80 ต่อถัง (มัดจำถังครั้งแรกแยก)",
        "本地或 Sprinkle/Crystal 品牌送货上门，续水约 ฿60–80/桶（首桶押金另计）。",
        "Sprinkle/Crystal — ~฿60–80 за бутыль.",
      ),
    ),
    vendingTitle: t(lang, L("Coin-filter machines", "ตู้หยอดเหรียญ", "投币净水机", "Автоматы 1 ฿/л")),
    vendingBody: t(
      lang,
      L(
        "Under condos and on most sois — ~฿1 per litre for budget refills.",
        "ใต้ตึกคอนโดและเกือบทุกซอย — ~฿1 ต่อลิตร ประหยัด",
        "公寓楼下和多数巷子有——约 ฿1/升，最省钱。",
        "~฿1/литр под кондо и в сойках.",
      ),
    ),
    trashTitle: t(lang, L("Trash & maintenance", "ขยะและบำรุงรักษา", "垃圾与维护", "Мусор и обслуживание")),
    trashCondo: t(
      lang,
      L(
        "Condo: usually included in common-area fees (CAM) paid by the owner — confirm in your lease.",
        "คอนโด: มักรวมในค่าส่วนกลางที่เจ้าของจ่าย — ตรวจในสัญญาเช่า",
        "公寓：通常含在业主已付的物业费（CAM）中——租约里确认。",
        "Кондо: в CAM от владельца.",
      ),
    ),
    trashHouse: t(
      lang,
      L(
        "House / village / off-plan: Pattaya city trash ~฿40–100/month; AC chemical clean every 6 months ~฿500–800 to save power.",
        "บ้าน/หมู่บ้าน/นอกโครงการ: ขยะเมืองพัทยา ~฿40–100/เดือน ล้างแอร์ทุก 6 เดือน ~฿500–800",
        "独栋/小区：芭提雅垃圾费约 ฿40–100/月；每6个月清洗空调约 ฿500–800 省电。",
        "Дом: мусор ฿40–100; чистка AC ฿500–800/6 мес.",
      ),
    ),
    gasTitle: t(lang, L("Cooking gas (LPG)", "แก๊สหุงต้ม", "烹饪液化气", "Газ LPG")),
    gasCondo: t(
      lang,
      L(
        "Most Pattaya condos ban gas — electric hob only.",
        "คอนโดพัทยาส่วนใหญ่ห้ามแก๊ส — ใช้เตาไฟฟ้าเท่านั้น",
        "芭提雅多数公寓禁止燃气——仅电磁炉。",
        "В кондо газ запрещён.",
      ),
    ),
    gasHouse: t(
      lang,
      L(
        "Detached homes: 15 kg tank swap ~฿420–460 in Pattaya — typically lasts 2–3 months for normal cooking.",
        "บ้านเดี่ยว: เปลี่ยนถัง 15 กก. ~฿420–460 ใช้ได้ประมาณ 2–3 เดือน",
        "独栋：15公斤气罐约 ฿420–460，正常做饭可用2–3个月。",
        "Дом: баллон 15 кг — ฿420–460 на 2–3 мес.",
      ),
    ),
    internetTitle: t(lang, L("Home fiber broadband", "อินเทอร์เน็ตบ้านไฟเบอร์", "家庭光纤", "Оптоволокно")),
    internetBody: t(
      lang,
      L(
        "Pattaya has strong fiber (3BB, AIS, True). Entry 1000/300 Mbps packages ~฿499–699/month.",
        "พัทยามีไฟเบอร์เสถียร (3BB, AIS, True) แพ็กเริ่ม 1000/300 Mbps ~฿499–699/เดือน",
        "芭提雅光纤稳定（3BB、AIS、True），入门1000/300 Mbps约 ฿499–699/月。",
        "3BB, AIS, True — от ฿499–699.",
      ),
    ),
    internetWarn: t(
      lang,
      L(
        "Older condos may lack fiber to the unit — VDSL or slow shared building Wi‑Fi costs more. Check with juristic person before signing.",
        "คอนโดเก่าอาจไม่มีสายเข้าห้อง — VDSL หรือ Wi‑Fi ส่วนกลางช้าและแพงกว่า ถามนิติบุคคลก่อนเซ็น",
        "老公寓可能无入户光纤——VDSL或楼宇共享Wi‑Fi更慢更贵，签约前问物业。",
        "Старые кондо: проверьте оптику до квартиры.",
      ),
    ),
    estimatesTitle: t(lang, L("Indicative monthly totals", "ค่าใช้จ่ายรวมโดยประมาณ", "参考月总费用", "Примерные суммы")),
    estimatesSubtitle: t(
      lang,
      L("Electricity + internet — water and drinking extra.",
        "รวมไฟ+เน็ต — น้ำและน้ำดื่มแยก",
        "含电费+网络——水费与饮用水另计。",
        "Свет + интернет; вода отдельно.",
      ),
    ),
    tableProfile: t(lang, L("Profile", "รูปแบบการอยู่", "居住类型", "Профиль")),
    tableMonthly: t(lang, L("Approx. utilities", "สาธารณูปโภคโดยประมาณ", "约计公用事业", "Примерно")),
    livingHub: t(lang, L("Living hub", "ศูนย์ไลฟ์สไตล์", "生活中心", "Раздел «Жизнь»")),
    rentals: t(lang, L("Rentals guide", "คู่มือเช่าที่พัก", "租房指南", "Аренда")),
    foodGuide: t(lang, L("Food costs", "ค่าอาหาร", "餐饮费用", "Еда")),
  };
}

export function getUtilitiesEstimates(lang: LanguageCode) {
  return [
    {
      item: t(
        lang,
        L("Studio — AC at night (gov. rate)", "สตูดิโอ — แอร์ตอนนอน (เรทหลวง)", "单间——夜间空调（政府价）", "Студия — ночью, гостариф"),
      ),
      monthly: "฿1,500–2,500",
    },
    {
      item: t(
        lang,
        L("Studio — AC most of day (condo rate)", "สตูดิโอ — แอร์ทั้งวัน (เรทคอนโด)", "单间——全天空调（公寓价）", "Студия — весь день, кондо"),
      ),
      monthly: "฿4,000–6,000",
    },
    {
      item: t(
        lang,
        L("2-bed sea-view (daily AC)", "2 ห้องนอนวิวทะเล (แอร์ทุกวัน)", "两卧海景（每天开空调）", "2 спальни, вид на море"),
      ),
      monthly: "฿4,500–8,000",
    },
    {
      item: t(
        lang,
        L("House with pool", "บ้านมีสระ", "带泳池别墅", "Дом с бассейном"),
      ),
      monthly: "฿8,000–15,000+",
    },
    {
      item: t(lang, L("Fiber 1000/300 Mbps", "ไฟเบอร์ 1000/300 Mbps", "光纤 1000/300", "Оптика 1000/300")),
      monthly: "฿499–699",
    },
    {
      item: t(lang, L("Drinking water (gallon)", "น้ำดื่ม (ถัง)", "桶装饮用水", "Питьевая вода")),
      monthly: "฿60–160",
    },
  ];
}

export const utilitiesFaqs = [
  faq(
    "high-bill",
    L("Why is my electric bill so high?", "ค่าไฟแพงผิดปกติ?", "电费为何很高？", "Почему счёт высокий?"),
    L(
      "Condo markups (฿7–10/unit), old AC, and Mar–May heat can nearly double costs vs government PEA rates.",
      "เรทคอนโด แอร์เก่า และหน้าร้อน — อาจแพงเกือบเท่าตัวเทียบเรท PEA",
      "公寓加价（约 7–10 泰铢/度）、老旧空调与 3–5 月高温，费用可能接近政府 PEA 电价的两倍。",
      "Наценка кондо (7–10 бат/ед.), старый AC и жара мар–май — почти вдвое дороже PEA.",
    ),
  ),
  faq(
    "government-rate",
    L("Can I insist on government utility rates?", "บังคับเรทหลวงได้ไหม?", "能要求政府电价吗？", "Гостариф в договоре?"),
    L(
      "Only if the landlord agrees in the lease. Many buildings bill through juristic meters — negotiate before deposit.",
      "ได้ถ้าเจ้าของตกลงในสัญญา หลายตึกคิดผ่านมิเตอร์นิติบุคคล — ต่อรองก่อนมัดจำ",
      "仅当房东在租约中同意；许多楼盘通过物业表计费——付定金前谈妥。",
      "Только если арендодатель согласен в договоре; часто счёт через juristic person — договоритесь до депозита.",
    ),
  ),
  faq(
    "drinking",
    L("Is tap water safe if boiled?", "น้ำก๊อกต้มแล้วดื่มได้ไหม?", "自来水烧开能喝吗？", "Кипячённая вода из крана?"),
    L(
      "Expats in Pattaya budget bottled delivery or coin machines — not tap, even boiled.",
      "ชาวต่างชาติใช้น้ำถังหรือตู้หยอดเหรียญ — ไม่ใช่ก๊อกแม้ต้ม",
      "芭提雅外籍人士通常订桶装水或投币取水——即使烧开也不建议喝自来水。",
      "Экспаты берут бутилированную воду или автоматы — не из крана, даже кипячёную.",
    ),
  ),
  faq(
    "fiber",
    L("How do I get fiber in my condo?", "ติดไฟเบอร์ในคอนโดอย่างไร?", "公寓如何装光纤？", "Оптика в кондо?"),
    L(
      "Ask juristic person which ISPs run to your floor. Older buildings may only offer VDSL or shared Wi‑Fi.",
      "ถามนิติบุคคลว่า ISP ไหนเข้าถึงชั้น ตึกเก่าอาจมีแค่ VDSL",
      "询问物业哪些运营商接入您的楼层；老楼可能只有 VDSL 或公共 Wi‑Fi。",
      "Спросите juristic person про ISP; в старых зданиях — VDSL или общий Wi‑Fi.",
    ),
  ),
  faq(
    "transfer",
    L("Should utilities be in my name?", "ควรโอนมิเตอร์เป็นชื่อเราไหม?", "水电要过户吗？", "Оформление на имя?"),
    L(
      "Long-term renters usually pay via the landlord’s meter. Rare to transfer PEA/PWA unless you own.",
      "ผู้เช่าระยะยาวมักจ่ายผ่านเจ้าของ ไม่ค่อยโอน PEA/PWA ยกเว้นเป็นเจ้าของ",
      "长期租客通常通过房东表缴费；除非自有产权，很少过户 PEA/PWA。",
      "Долгосрочные арендаторы платят по счётчику арендодателя; PEA/PWA на ваше имя — редко, если не владелец.",
    ),
  ),
];
