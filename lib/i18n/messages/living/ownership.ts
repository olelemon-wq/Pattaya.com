import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

export function getOwnershipPage(lang: LanguageCode) {
  return {
    introTitle: t(
      lang,
      L(
        "Property ownership in Pattaya",
        "คู่มือการถือครองกรรมสิทธิ์ในพัทยา",
        "芭提雅房产产权指南",
        "Владение недвижимостью в Паттайе",
      ),
    ),
    introBody: t(
      lang,
      L(
        "Pattaya is one of Thailand’s top destinations for living and property investment. Whether you are Thai buying a holiday home or a foreigner relocating, understanding ownership rules is the best way to protect your purchase.",
        "พัทยาเป็นจุดหมายยอดนิยมสำหรับอยู่อาศัยและลงทุน ไม่ว่าจะเป็นคนไทยหรือชาวต่างชาติ การเข้าใจกฎหมายและรูปแบบการถือครองกรรมสิทธิ์ช่วยปกป้องการลงทุนของคุณ",
        "芭提雅是泰国最热门的居住与投资目的地之一。无论泰籍买家还是外籍人士，了解产权规则是保护投资的关键。",
        "Паттайя — топ-направление для жизни и инвестиций; знание правил владения защищает покупку.",
      ),
    ),
    foreignTitle: t(
      lang,
      L(
        "Foreign ownership options",
        "รูปแบบการถือครองสำหรับชาวต่างชาติ",
        "外籍持有方式",
        "Варианты для иностранцев",
      ),
    ),
    foreignSubtitle: t(
      lang,
      L(
        "Thai law splits foreign property rights into two main paths.",
        "กฎหมายไทยแบ่งเป็น 2 รูปแบบหลัก ดังนี้",
        "泰国法律主要分为两种路径。",
        "Два основных пути по закону Таиланда.",
      ),
    ),
    condoTitle: t(
      lang,
      L("Condominium freehold", "การถือครองคอนโดมิเนียม", "公寓永久产权", "Freehold кондо"),
    ),
    condoLead: t(
      lang,
      L(
        "Foreigners may own a condo unit in their own name — 100% legal freehold — within the building’s foreign quota.",
        "ชาวต่างชาติเป็นเจ้าของห้องชุดในนามบุคคลได้ 100% ภายใต้โควตาต่างชาติของอาคาร",
        "外籍人士可依法以个人名义100%拥有公寓产权（受外资配额限制）。",
        "Иностранец может владеть юнитом на freehold в рамках квоты здания.",
      ),
    ),
    condoQuotaTitle: t(lang, L("Foreign quota (49%)", "โควตาต่างชาติ (49%)", "外资配额（49%）", "Квота 49%")),
    condoQuotaBody: t(
      lang,
      L(
        "Foreigners may own no more than 49% of total sellable area in that condominium building; the other 51% must be held by Thai nationals or Thai entities.",
        "ชาวต่างชาติถือครองพื้นที่รวมกันได้ไม่เกิน 49% ของพื้นที่ขายทั้งหมดในอาคารนั้น อีก 51% ต้องเป็นคนไทยหรือนิติบุคคลไทย",
        "同一栋楼可售面积中，外籍合计持有不得超过49%；其余51%须由泰国人或泰籍实体持有。",
        "Не более 49% продаваемой площади здания — остальное у тайцев.",
      ),
    ),
    condoFetTitle: t(
      lang,
      L("FET — proof of funds", "FET — หลักฐานการโอนเงิน", "FET 外汇证明", "FET"),
    ),
    condoFetBody: t(
      lang,
      L(
        "Purchase funds must be transferred from abroad into Thailand. Your bank issues a Foreign Exchange Transaction (FET) certificate for the Land Department transfer.",
        "ต้องโอนเงินจากต่างประเทศเข้าไทย ธนาคารออกใบรับรอง FET (Foreign Exchange Transaction) ใช้แสดงต่อกรมที่ดินตอนโอน",
        "购房款须从境外汇入泰国，银行出具FET（外汇交易证明）供土地厅过户使用。",
        "Средства из-за рубежа; банк выдаёт FET для земельного отдела.",
      ),
    ),
    landedTitle: t(
      lang,
      L("Landed property & houses", "บ้านและที่ดิน", "别墅与土地", "Дома и земля"),
    ),
    landedLead: t(
      lang,
      L(
        "Foreigners cannot hold freehold land in their personal name, but can own the building and use long-term lease structures.",
        "ชาวต่างชาติถือกรรมสิทธิ์ที่ดินในนามบุคคลไม่ได้ แต่เป็นเจ้าของตัวบ้านและใช้สิทธิเช่าระยะยาวได้",
        "外籍人士不能以个人名义拥有土地永久产权，但可拥有房屋并采用长期租赁结构。",
        "Земля на freehold иностранцу недоступна; здание и leasehold — да.",
      ),
    ),
    leaseTitle: t(lang, L("Registered leasehold", "สิทธิเช่าระยะยาว", "登记租赁权", "Leasehold")),
    leaseBody: t(
      lang,
      L(
        "The most common and legally secure route: register a land lease up to 30 years at Pattaya Land Office, with renewals as agreed in the sale contract (often marketed as 30+30+30).",
        "ทางเลือกที่นิยมและปลอดภัยตามกฎหมาย: เช่าที่ดินสูงสุด 30 ปี จดทะเบียนที่สำนักงานที่ดินพัทยา ต่ออายุตามสัญญา (มักโฆษณา 30+30+30)",
        "最常见且合法的方式：在芭提雅土地厅登记最长30年土地租约，续期按买卖合同约定（常见30+30+30）。",
        "Аренда до 30 лет с регистрацией в земельном отделе Паттайи; продления по договору.",
      ),
    ),
    structureTitle: t(
      lang,
      L("Own the house, lease the land", "เป็นเจ้าของบ้าน เช่าที่ดิน", "房屋自有、土地租赁", "Дом — своё, земля — аренда"),
    ),
    structureBody: t(
      lang,
      L(
        "You may own the villa or house structure 100% in your name while the land remains under a registered lease.",
        "เป็นเจ้าของตัวบ้านหรือวิลล่า 100% ในนามตนเอง แม้ที่ดินจะอยู่ภายใต้สัญญาเช่าที่จดทะเบียน",
        "可在个人名下100%拥有别墅或房屋，土地则通过登记租约持有。",
        "Структура на 100% ваше имя; земля по зарегистрированной аренде.",
      ),
    ),
    fetTitle: t(
      lang,
      L("Documents for condo transfer", "เอกสารโอนคอนโด", "公寓过户文件", "Документы для кондо"),
    ),
    fetSubtitle: t(
      lang,
      L("Prepare before transfer day at the Land Office.",
        "เตรียมก่อนวันโอนที่กรมที่ดิน",
        "过户前准备好。",
        "Подготовьте до дня регистрации.",
      ),
    ),
    compareTitle: t(lang, L("Quick comparison", "เปรียบเทียบสั้นๆ", "快速对比", "Сравнение")),
    compareSubtitle: t(
      lang,
      L("How each structure fits Pattaya buyers.",
        "โครงสร้างไหนเหมาะกับผู้ซื้อในพัทยา",
        "哪种结构适合芭提雅买家。",
        "Что подходит покупателям в Паттайе.",
      ),
    ),
    tableType: t(lang, L("Type", "ประเภท", "类型", "Тип")),
    tableAccess: t(lang, L("Foreign access", "ต่างชาติ", "外籍准入", "Для иностранцев")),
    tableUse: t(lang, L("Typical use", "การใช้ทั่วไป", "典型用途", "Применение")),
    checklistTitle: t(
      lang,
      L("Before you sign", "ก่อนเซ็นสัญญา", "签约前", "Перед подписанием"),
    ),
    checklistSubtitle: t(
      lang,
      L("Due diligence every buyer should do in Pattaya.",
        "สิ่งที่ผู้ซื้อควรตรวจในพัทยา",
        "芭提雅买家应做的尽职调查。",
        "Проверки перед покупкой.",
      ),
    ),
    disclaimer: t(
      lang,
      L("Not legal advice — consult a Thai property lawyer.",
        "ไม่ใช่คำแนะนำทางกฎหมาย — ปรึกษาทนายอสังหาฯ",
        "非法律意见——请咨询泰国房产律师。",
        "Не юридическая консультация.",
      ),
    ),
    condoGuide: t(lang, L("Condo buying guide →", "คู่มือซื้อคอนโด →", "公寓购买指南 →", "Гид по покупке кондо →")),
    rentals: t(lang, L("Rentals guide →", "คู่มือเช่าที่พัก →", "租房指南 →", "Аренда →")),
    livingHub: t(lang, L("Living hub →", "ศูนย์ไลฟ์สไตล์ →", "生活中心 →", "Раздел «Жизнь» →")),
  };
}

export function getOwnershipFetChecklist(lang: LanguageCode): string[] {
  return [
    t(
      lang,
      L("FET or Thor Tor 3 from the receiving Thai bank showing foreign currency inward remittance",
        "FET หรือ ท.ท.3 จากธนาคารไทยแสดงการโอนเงินตราต่างประเทศเข้า",
        "泰国收款银行出具的FET或ท.ท.3外汇汇入证明",
        "FET или Thor Tor 3 от тайского банка",
      ),
    ),
    t(
      lang,
      L("Condominium juristic person letter confirming foreign quota availability",
        "หนังสือนิติบุคคลยืนยันโควตาต่างชาติยังว่าง",
        "公寓管理处出具的外资配额确认函",
        "Письмо юрлица о квоте",
      ),
    ),
    t(
      lang,
      L("Chanote title deed and house registration for the unit",
        "โฉนดที่ดินและทะเบียนบ้านของห้องชุด",
        "单元地契与房屋登记",
        "Chanote и регистрация",
      ),
    ),
    t(
      lang,
      L("Sale and purchase agreement reviewed by independent lawyer",
        "สัญญาจะซื้อจะขายผ่านการตรวจโดยทนายอิสระ",
        "经独立律师审核的买卖合同",
        "Договор купли-продажи с юристом",
      ),
    ),
  ];
}

export function getOwnershipDueDiligence(lang: LanguageCode): string[] {
  return [
    t(
      lang,
      L("Verify foreign quota in writing before paying a large deposit",
        "ขอหนังสือยืนยันโควตาก่อนจ่ายมัดจำจำนวนมาก",
        "付大额定金前书面确认外资配额",
        "Письменное подтверждение квоты до депозита",
      ),
    ),
    t(
      lang,
      L("For leasehold villas, confirm land lease is registered — not just a private contract",
        "วิลล่าเช่า: ยืนยันสัญญาเช่าที่ดินจดทะเบียนแล้ว ไม่ใช่แค่สัญญาส่วนตัว",
        "租赁别墅须确认土地租约已登记，而非仅私人合同",
        "Leasehold: регистрация в земельном отделе",
      ),
    ),
    t(
      lang,
      L("Check building permits and structure ownership matches the sale package",
        "ตรวจใบอนุญาตก่อสร้างและความเป็นเจ้าของสิ่งปลูกสร้างให้ตรงแพ็กเกจขาย",
        "核对建设许可与房屋产权是否与销售一致",
        "Разрешения и право на строение",
      ),
    ),
    t(
      lang,
      L("Avoid nominee company land schemes marketed as easy ownership",
        "หลีกเลี่ยงโครงสร้าง nominee ที่โฆษณาว่าถือที่ดินง่าย",
        "避免以代持公司包装的土地方案",
        "Избегайте nominee-схем",
      ),
    ),
  ];
}

export function getOwnershipTableRows(lang: LanguageCode) {
  return [
    {
      type: t(lang, L("Condo freehold", "คอนโดกรรมสิทธิ์", "公寓永久产权", "Freehold кондо")),
      access: t(lang, L("Yes — within 49% quota + FET", "ได้ — โควตา 49% + FET", "可以 — 49%配额+FET", "Да — квота 49% + FET")),
      use: t(lang, L("Beach & city high-rises", "คอนโดชายหาด/เมือง", "海滨与市区高层", "Высотки у моря")),
    },
    {
      type: t(lang, L("Registered lease", "สิทธิเช่าจดทะเบียน", "登记租赁", "Аренда с регистрацией")),
      access: t(lang, L("Yes — 30 years (+ renewals)", "ได้ — 30 ปี (ต่ออายุ)", "可以 — 30年（可续）", "Да — 30 лет (+ продления)")),
      use: t(lang, L("Villas, houses, land projects", "วิลล่า บ้าน โครงการที่ดิน", "别墅、土地项目", "Виллы, дома")),
    },
    {
      type: t(lang, L("Structure only", "เจ้าของสิ่งปลูกสร้าง", "仅房屋产权", "Только строение")),
      access: t(lang, L("Yes — house 100%, land leased", "ได้ — บ้าน 100% ที่ดินเช่า", "可以 — 房屋100%土地租", "Да — дом своё, земля аренда")),
      use: t(lang, L("Pool villas on leased plots", "วิลล่าสระบนที่เช่า", "租地上的泳池别墅", "Виллы на аренде")),
    },
    {
      type: t(lang, L("Direct land freehold", "ที่ดินกรรมสิทธิ์โดยตรง", "土地永久产权", "Земля freehold")),
      access: t(lang, L("No — personal foreign name", "ไม่ได้ — นามบุคคลต่างชาติ", "不可以 — 外籍个人", "Нет — на иностранца")),
      use: t(lang, L("Thai national or promoted BOI only", "คนไทยหรือ BOI เท่านั้น", "仅泰籍或BOI项目", "Тайцы / BOI")),
    },
  ];
}
