import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

const spotlightBodies = {
  dtv: {
    badge: L("New Visa", "วีซ่าใหม่", "新签证", "Новая виза"),
    title: L(
      "Destination Thailand Visa (DTV): 5-Year Stay",
      "วีซ่า Destination Thailand (DTV): พัก 5 ปี",
      "Destination Thailand 签证 (DTV)：5 年居留",
      "DTV: 5 лет",
    ),
    excerpt: L(
      "Remote workers and freelancers can qualify with 500,000 THB in savings or qualifying income — extensions available in Pattaya.",
      "remote worker และฟรีแลนซ์มีสิทธิ์ด้วยเงินออม 500,000 บาทหรือรายได้ตามเกณฑ์ — ต่อใน Pattaya ได้",
      "远程工作者与自由职业者可凭 50 万泰铢存款或符合要求的收入申请，可在芭提雅延期。",
      "Remote и фрилансеры: 500 000 бат или доход — продление в Pattaya.",
    ),
    cta: L("Read Requirements", "อ่านเงื่อนไข", "查看要求", "Требования"),
    imageAlt: L(
      "Passport and travel documents for Thailand visa",
      "พาสปอร์ตและเอกสารวีซ่าไทย",
      "泰国签证护照与旅行文件",
      "Паспорт и виза",
    ),
  },
  retirement: {
    badge: L("Retirement", "เกษียณ", "退休", "Пенсия"),
    title: L(
      "Non-Immigrant O-A: Pattaya Retirement Path",
      "Non-Immigrant O-A: เส้นทางเกษียณพัทยา",
      "非移民 O-A：芭提雅退休路径",
      "O-A: пенсия в Pattaya",
    ),
    excerpt: L(
      "Age 50+, 800,000 THB in Thai bank or 65,000 THB monthly income — our partner agents assist with Chonburi Immigration filings.",
      "อายุ 50+ เงินในธนาคารไทย 800,000 บาทหรือรายได้ 65,000 บาท/เดือน — ตัวแทนช่วยยื่นตม. ชลบุรี",
      "50 岁以上，泰行 80 万泰铢或月入 6.5 万 — 合作代理协助春武里移民局递交。",
      "50+, 800 000 бат или 65 000/мес — агенты помогут в Immigration.",
    ),
    cta: L("Retirement Guide", "คู่มือเกษียณ", "退休指南", "Гид по пенсии"),
    imageAlt: L(
      "Immigration office consultation",
      "ปรึกษาที่สำนักงานตม.",
      "移民局咨询",
      "Консультация в Immigration",
    ),
  },
  "90-day": {
    badge: L("Compliance", "ปฏิบัติตาม", "合规", "Соответствие"),
    title: L(
      "90-Day Reporting: Online System Updates",
      "รายงาน 90 วัน: อัปเดตระบบออนไลน์",
      "90 天报到：在线系统更新",
      "90 дней: обновление онлайн",
    ),
    excerpt: L(
      "Jomtien Immigration office adds weekend slots; mobile app reminders now available for Naklua and central Pattaya zones.",
      "ตม.จอมเทียนเพิ่มคิวสุดสัปดาห์ แอปเตือนครอบคลุมนาเกลือและกลางพัทยา",
      "Jomtien 移民局增设周末时段；那库拉与市中心区可用 App 提醒。",
      "Jomtien: выходные слоты; напоминания в приложении.",
    ),
    cta: L("90-Day Guide", "คู่มือ 90 วัน", "90 天指南", "Гид 90 дней"),
    imageAlt: L(
      "Pattaya city administrative services",
      "บริการธุรการเมืองพัทยา",
      "芭提雅行政服务",
      "Административные услуги",
    ),
  },
} as const;

const articleBodies = {
  "thailand-elite": {
    badge: L("Thailand Elite", "Thailand Elite", "泰国精英", "Thailand Elite"),
    title: L(
      "Thailand Elite Visa: Pattaya Privilege Card Benefits",
      "วีซ่า Thailand Elite: สิทธิ์บัตร Privilege พัทยา",
      "泰国精英签证：芭提雅特权卡权益",
      "Thailand Elite: привилегии в Pattaya",
    ),
    excerpt: L(
      "Members gain airport fast-track, golf club access, and dedicated concierge for visa extensions in the Eastern Economic Corridor.",
      "สมาชิกได้ fast-track สนามบิน กอล์ฟ และ concierge ต่อวีซ่าใน EEC",
      "会员享机场快速通道、高尔夫俱乐部及 EEC 签证延期专属礼宾。",
      "Fast-track, гольф, concierge для продления в EEC.",
    ),
    footer: L("Today", "วันนี้", "今天", "Сегодня"),
    imageAlt: L(
      "Luxury residence Thailand Elite visa",
      "ที่พักหรูวีซ่า Thailand Elite",
      "泰国精英签证豪华居所",
      "Thailand Elite",
    ),
  },
  "work-permit": {
    badge: L("Work Permit", "ใบอนุญาตทำงาน", "工作许可", "Work permit"),
    title: L(
      "BOI Work Permits: Faster Processing for EEC Companies",
      "Work permit BOI: ประมวลผลเร็วขึ้นสำหรับบริษัท EEC",
      "BOI 工作许可：EEC 企业加速审批",
      "BOI: быстрее для EEC",
    ),
    excerpt: L(
      "Employers in Chonburi report 30% shorter queues when applications include digital company registration certificates.",
      "นายจ้างชลบุรีรายงานคิวสั้นลง 30% เมื่อแนบใบจดทะเบียนบริษัทดิจิทัล",
      "春武里雇主称附数字公司注册证可缩短约 30% 排队时间。",
      "Очереди −30% с цифровым регистрационным сертификатом.",
    ),
    footer: L("Yesterday", "เมื่อวาน", "昨天", "Вчера"),
    imageAlt: L(
      "Professional work permit documents",
      "เอกสารใบอนุญาตทำงาน",
      "工作许可文件",
      "Документы work permit",
    ),
  },
  immigration: {
    badge: L("Immigration", "ตม.", "移民", "Immigration"),
    title: L(
      "Chonburi Immigration: Extended Hours for Tourist Season",
      "ตม.ชลบุรี: ขยายเวลาฤดูท่องเที่ยว",
      "春武里移民局：旅游季延长办公时间",
      "Chonburi Immigration: часы в сезон",
    ),
    excerpt: L(
      "Jomtien branch opens Saturdays 09:00–15:00 through April for visa extensions and re-entry permits.",
      "สาขาจอมเทียนเปิดเสาร์ 09:00–15:00 ถึงเมษายน สำหรับต่อวีซ่าและ re-entry",
      "Jomtien 分行至四月每周六 09:00–15:00 办理延期与再入境许可。",
      "Jomtien: субботы до апреля для продлений.",
    ),
    footer: L("2 days ago", "2 วันที่แล้ว", "2 天前", "2 дня назад"),
    imageAlt: L(
      "Immigration policy update",
      "อัปเดตนโยบายตม.",
      "移民政策更新",
      "Обновление политики",
    ),
  },
  ownership: {
    badge: L("Property & Visa", "อสังหาและวีซ่า", "房产与签证", "Недвижимость и виза"),
    title: L(
      "Condo Foreign Quota: What Visa Holders Should Verify",
      "โควตาต่างชาติคอนโด: ผู้ถือวีซ่าควรตรวจสอบ",
      "公寓外籍配额：签证持有人应核实项",
      "Квота кондо: что проверить",
    ),
    excerpt: L(
      "Lawyers advise checking chanote and quota certificates before transfer — common delays at Pattaya land offices.",
      "ทนายแนะนำตรวจโฉนดและใบโควตาก่อนโอน — มักล่าช้าที่สำนักงานที่ดินพัทยา",
      "律师建议在过户前核对地契与配额证明 — 芭提雅土地办公室常见延误。",
      "Проверьте chanote и квоту до сделки.",
    ),
    footer: L("4 days ago", "4 วันที่แล้ว", "4 天前", "4 дня назад"),
    imageAlt: L(
      "Property ownership documents",
      "เอกสารกรรมสิทธิ์อสังหา",
      "产权文件",
      "Документы на собственность",
    ),
  },
  "retirement-article": {
    badge: L("Insurance", "ประกัน", "保险", "Страхование"),
    title: L(
      "Retirement Visa Insurance: Approved Plans for 2026",
      "ประกันวีซ่าเกษียณ: แผนที่อนุมัติ 2026",
      "退休签证保险：2026 获批方案",
      "Страхование для пенсионной визы 2026",
    ),
    excerpt: L(
      "Immigration accepts select outpatient/inpatient packages from Bangkok Hospital Pattaya and major insurers.",
      "ตม.รับแพ็กผู้ป่วยนอก/ใน จากโรงพยาบาลกรุงเทพพัทยาและบริษัทประกันหลัก",
      "移民局接受曼谷医院芭提雅及主要保险公司选定门诊/住院套餐。",
      "Принимаются пакеты Bangkok Hospital Pattaya.",
    ),
    footer: L("5 days ago", "5 วันที่แล้ว", "5 天前", "5 дней назад"),
    imageAlt: L(
      "Retired couple in Pattaya",
      "คู่เกษียณในพัทยา",
      "芭提雅退休夫妇",
      "Пенсионеры в Pattaya",
    ),
  },
  "tax-legal": {
    badge: L("Tax & Legal", "ภาษีและกฎหมาย", "税务与法律", "Налоги и право"),
    title: L(
      "Tax Residency Rules: Remote Workers in Pattaya",
      "กฎภาษีผู้มีถิ่นที่อยู่: remote worker ในพัทยา",
      "税务居民规则：芭提雅远程工作者",
      "Налоговое резидентство: remote в Pattaya",
    ),
    excerpt: L(
      "Revenue Department clarifies 180-day threshold for individuals on long-term visas — seek licensed tax advice.",
      "กรมสรรพากรชี้แจงเกณฑ์ 180 วันสำหรับวีซ่าระยะยาว — ปรึกษาผู้เชี่ยวชาญภาษี",
      "税务局澄清长期签证持有者 180 天门槛 — 请咨询持牌税务顾问。",
      "Порог 180 дней для долгосрочных виз.",
    ),
    footer: L("1 week ago", "1 สัปดาห์ที่แล้ว", "1 周前", "1 неделю назад"),
    imageAlt: L(
      "Legal consultation meeting",
      "ประชุมปรึกษากฎหมาย",
      "法律咨询会议",
      "Юридическая консультация",
    ),
  },
} as const;

const articleKeyByTitle: Record<string, keyof typeof articleBodies> = {
  "Thailand Elite Visa: Pattaya Privilege Card Benefits": "thailand-elite",
  "BOI Work Permits: Faster Processing for EEC Companies": "work-permit",
  "Chonburi Immigration: Extended Hours for Tourist Season": "immigration",
  "Condo Foreign Quota: What Visa Holders Should Verify": "ownership",
  "Retirement Visa Insurance: Approved Plans for 2026": "retirement-article",
  "Tax Residency Rules: Remote Workers in Pattaya": "tax-legal",
};

export function localizeVisaSpotlight<
  T extends {
    id: string;
    badge: string;
    title: string;
    excerpt: string;
    cta: string;
    imageAlt: string;
  },
>(lang: LanguageCode, item: T): T {
  const patch = spotlightBodies[item.id as keyof typeof spotlightBodies];
  if (!patch) return item;
  return {
    ...item,
    badge: t(lang, patch.badge),
    title: t(lang, patch.title),
    excerpt: t(lang, patch.excerpt),
    cta: t(lang, patch.cta),
    imageAlt: t(lang, patch.imageAlt),
  };
}

export function localizeVisaArticle<
  T extends {
    badge: string;
    title: string;
    excerpt: string;
    footer: string;
    imageAlt: string;
  },
>(lang: LanguageCode, item: T): T {
  const key = articleKeyByTitle[item.title];
  if (!key) return item;
  const patch = articleBodies[key];
  return {
    ...item,
    badge: t(lang, patch.badge),
    title: t(lang, patch.title),
    excerpt: t(lang, patch.excerpt),
    footer: t(lang, patch.footer),
    imageAlt: t(lang, patch.imageAlt),
  };
}
