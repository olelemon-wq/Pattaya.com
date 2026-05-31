import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

const spotlightBodies = {
  "wongamat-penthouse": {
    badge: L("New Launch", "เปิดตัวใหม่", "新盘", "Новинка"),
    title: L(
      "Wongamat Riviera: Sky Residences From 25M THB",
      "Wongamat Riviera: เริ่ม 25 ล้านบาท",
      "Wongamat Riviera：2500 万泰铢起",
      "Wongamat Riviera: от 25 млн бат",
    ),
    excerpt: L(
      "42 penthouse units across floors 38–45 feature private plunge pools, smart-home packages, and direct beach-club access.",
      "42 ยูนิต penthouse ชั้น 38–45 สระส่วนตัว สมาร์ทโฮม และคลับชายหาด",
      "38–45 层 42 套顶层，私属泳池、智能家居与海滩俱乐部直通。",
      "42 пентхауса на 38–45 этажах: бассейны, smart-home, клуб.",
    ),
    cta: L("View Floor Plans", "ดูแปลน", "查看户型", "Планировки"),
    imageAlt: L(
      "Luxury high-rise condominium in Wongamat, Pattaya",
      "คอนโดหรูวงอามาด พัทยา",
      "芭提雅 Wongamat 豪华高层",
      "Кондо Wongamat",
    ),
  },
  "jomtien-condos": {
    badge: L("Market Data", "ข้อมูลตลาด", "市场数据", "Рынок"),
    title: L(
      "Jomtien Condo Index: Prices Up 6% Year-on-Year",
      "ดัชนีคอนโดจอมเทียน: ราคา +6% ต่อปี",
      "仲天公寓指数：同比涨 6%",
      "Jomtien: +6% г/г",
    ),
    excerpt: L(
      "One-bedroom sea-view units now average 4.2M THB; rental yields hold at 5.8% for long-term leases in the district.",
      "ห้อง 1 นอนวิวทะเลเฉลี่ย 4.2 ล้านบาท ผลตอบแทนเช่าระยะยาว 5.8%",
      "一卧海景均价 420 万泰铢；长租收益率 5.8%。",
      "1BR с видом: 4,2 млн; доходность 5,8%.",
    ),
    cta: L("Investment Portal", "พอร์ทัลลงทุน", "投资入口", "Инвестиции"),
    imageAlt: L(
      "Pattaya bay skyline and condominium towers",
      "เส้นขอบฟ้าอ่าวพัทยาและคอนโด",
      "芭提雅湾天际线与公寓塔楼",
      "Панорама залива",
    ),
  },
  "foreign-quota": {
    badge: L("Legal Guide", "คู่มือกฎหมาย", "法律指南", "Право"),
    title: L(
      "Foreign Quota 2026: What Buyers Need to Know",
      "โควตาต่างชาติ 2026: สิ่งที่ผู้ซื้อต้องรู้",
      "2026 外籍配额：买家须知",
      "Квота иностранцев 2026",
    ),
    excerpt: L(
      "Updated guidance on condo ownership, leasehold structures, and company-held assets for expat investors in Chonburi.",
      "แนวทางคอนโด สิทธิ์เช่า และทรัพย์สินในชื่อบริษัทสำหรับนักลงทุนต่างชาติ",
      "春武里外侨投资：公寓产权、租赁权与公司持有资产最新指引。",
      "Владение кондо, leasehold и активы компании в Chonburi.",
    ),
    cta: L("Ownership Guide", "คู่มือกรรมสิทธิ์", "产权指南", "Владение"),
    imageAlt: L(
      "Property documents and investment planning",
      "เอกสารอสังหาและการวางแผนลงทุน",
      "房产文件与投资规划",
      "Документы на недвижимость",
    ),
  },
} as const;

const articleBodies = {
  "real-estate": {
    badge: L("Premium", "พรีเมียม", "高端", "Премиум"),
    title: L(
      "Royal Cliff Residences: Branded Villas Back on Market",
      "Royal Cliff Residences: วิลล่าแบรนด์กลับตลาด",
      "Royal Cliff 住宅：品牌别墅重返市场",
      "Royal Cliff: виллы снова в продаже",
    ),
    excerpt: L(
      "Twelve freehold villas return to inventory after renovation — starting at 89M THB with managed rental programs.",
      "วิลล่า freehold 12 หลังกลับหลังรีโนเวท — เริ่ม 89 ล้านบาท พร้อมโปรแกรมเช่าบริหาร",
      "十二栋永久产权别墅翻新后回归，8900 万泰铢起，含托管出租方案。",
      "12 вилл freehold после реновации — от 89 млн бат.",
    ),
    footer: L("Today", "วันนี้", "今天", "Сегодня"),
    imageAlt: L(
      "Luxury penthouse interior with sea view",
      "ภายใน penthouse วิวทะเล",
      "海景豪华顶层室内",
      "Пентхаус с видом на море",
    ),
  },
  hotels: {
    badge: L("Hospitality", "โรงแรม", "酒店业", "Отели"),
    title: L(
      "Beach Road Hotel Plot Trades at Record 420M THB Per Rai",
      "ที่ดินโรงแรม Beach Road ทำสถิติ 420 ล้าน/ไร่",
      "海滩路酒店地块创纪录：每莱 4.2 亿泰铢",
      "Beach Road: 420 млн/рай",
    ),
    excerpt: L(
      "Developers eye mixed-use towers as tourism occupancy rebounds above 78% in Q1 2026.",
      "นักพัฒนามองตึกผสมผสาน อัตราเข้าพักเกิน 78% ไตรมาส 1",
      "开发商瞄准综合体塔楼，2026 Q1 入住率回升超 78%。",
      "Застройщики смотрят на mixed-use — загрузка 78%+.",
    ),
    footer: L("Yesterday", "เมื่อวาน", "昨天", "Вчера"),
    imageAlt: L(
      "Beachfront hotel and resort properties",
      "โรงแรมและรีสอร์ตริมหาด",
      "海滨酒店与度假村",
      "Отели на берегу",
    ),
  },
  rentals: {
    badge: L("Rentals", "เช่า", "租赁", "Аренда"),
    title: L(
      "Long-Stay Leases: Jomtien Studios See 12% More Inquiries",
      "เช่าระยะยาว: สตูดิโอจอมเทียนสอบถามเพิ่ม 12%",
      "长租：仲天单间咨询量增 12%",
      "Jomtien: +12% запросов на студии",
    ),
    excerpt: L(
      "Agents report six-month contracts dominating demand from remote workers and retirees relocating from Bangkok.",
      "นายหน้ารายงานสัญญา 6 เดือนนำจาก remote worker และผู้เกษียณจากกรุงเทพ",
      "中介称六个月合同主导，来自远程工作者与曼谷迁来的退休者。",
      "6-месячные контракты лидируют у remote и пенсионеров.",
    ),
    footer: L("2 days ago", "2 วันที่แล้ว", "2 天前", "2 дня назад"),
    imageAlt: L(
      "Coastal residential area in Pattaya",
      "ย่านที่อยู่อาศัยริมชายฝั่งพัทยา",
      "芭提雅滨海住宅区",
      "Прибрежный район",
    ),
  },
  infrastructure: {
    badge: L("Development", "พัฒนา", "开发", "Развитие"),
    title: L(
      "Naklua Land Parcels Rezoned for Low-Rise Residential",
      "ปรับผังที่ดินนาเกลือเป็นที่อยู่อาศัยต่ำ",
      "那库拉地块重划为低层住宅",
      "Naklua: низкоэтажное жильё",
    ),
    excerpt: L(
      "City planning committee approves 18-hectare mixed community with height limits to protect neighborhood character.",
      "คณะผังเมืองอนุมัติชุมชนผสม 18 เฮกตาร์ จำกัดความสูงคุ้มครองลักษณะย่าน",
      "规划委员会批准 18 公顷混合社区，限高保护街区风貌。",
      "18 га mixed community с лимитами высоты.",
    ),
    footer: L("3 days ago", "3 วันที่แล้ว", "3 天前", "3 дня назад"),
    imageAlt: L(
      "Pattaya urban development and roads",
      "พัฒนาเมืองและถนนพัทยา",
      "芭提雅城市开发与道路",
      "Городское развитие",
    ),
  },
  investment: {
    badge: L("Investment", "ลงทุน", "投资", "Инвестиции"),
    title: L(
      "Off-Plan Incentives: 0% Transfer Fees on Select Naklua Projects",
      "โปร off-plan: ค่าโอน 0% โครงการนาเกลือที่ร่วมรายการ",
      "期房优惠：部分那库拉项目零过户费",
      "Off-plan: 0% на перевод в Naklua",
    ),
    excerpt: L(
      "Developers bundle furniture packages and guaranteed rental management for purchases before June 30.",
      "ผู้พัฒนารวมแพ็กเฟอร์นิเจอร์และบริหารเช่าการันตีสำหรับซื้อก่อน 30 มิ.ย.",
      "开发商为 6 月 30 日前购房捆绑家具包与保证租赁管理。",
      "Мебель и гарантированная аренда до 30 июня.",
    ),
    footer: L("5 days ago", "5 วันที่แล้ว", "5 天前", "5 дней назад"),
    imageAlt: L(
      "Property investment seminar in Pattaya",
      "สัมมนาลงทุนอสังหาในพัทยา",
      "芭提雅房产投资研讨会",
      "Семинар по инвестициям",
    ),
  },
  featured: {
    badge: L("Lifestyle", "ไลฟ์สไตล์", "生活方式", "Лайфстайл"),
    title: L(
      "Eastern Seaboard Golf Estates: Second-Home Demand Surges",
      "อสังหากอล์ฟชายฝั่งตะวันออก: บ้านที่สองพุ่ง",
      "东海岸高尔夫庄园：第二居所需求激增",
      "Гольф-эстейты: спрос на вторые дома",
    ),
    excerpt: L(
      "Villas within 20 minutes of Pattaya Country Club list 15% faster than inland stock, agents say.",
      "วิลล่าใกล้ Pattaya CC ภายใน 20 นาที ขายเร็วกว่าในเมือง 15% นายหน้าระบุ",
      "中介称距 Pattaya 乡村俱乐部 20 分钟内别墅比内陆盘快 15%。",
      "Виллы у Pattaya CC продаются на 15% быстрее.",
    ),
    footer: L("1 week ago", "1 สัปดาห์ที่แล้ว", "1 周前", "1 неделю назад"),
    imageAlt: L(
      "Golf course community near Pattaya",
      "ชุมชนกอล์ฟใกล้พัทยา",
      "芭提雅附近高尔夫社区",
      "Гольф-сообщество",
    ),
  },
} as const;

const articleKeyByTitle: Record<string, keyof typeof articleBodies> = {
  "Royal Cliff Residences: Branded Villas Back on Market": "real-estate",
  "Beach Road Hotel Plot Trades at Record 420M THB Per Rai": "hotels",
  "Long-Stay Leases: Jomtien Studios See 12% More Inquiries": "rentals",
  "Naklua Land Parcels Rezoned for Low-Rise Residential": "infrastructure",
  "Off-Plan Incentives: 0% Transfer Fees on Select Naklua Projects": "investment",
  "Eastern Seaboard Golf Estates: Second-Home Demand Surges": "featured",
};

export function localizePropertySpotlight<
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

export function localizePropertyArticle<
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
