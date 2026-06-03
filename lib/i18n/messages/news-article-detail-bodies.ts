import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import type { LocalizedText } from "@/lib/i18n/text";

type DetailBody = {
  middle: LocalizedText;
  closing: LocalizedText;
};

const genericMiddle = L(
  "City officials and local agencies shared additional context for residents, businesses, and visitors following initial reports.",
  "เจ้าหน้าที่และหน่วยงานในพื้นที่ให้รายละเอียดเพิ่มเติมสำหรับผู้อยู่อาศัย ธุรกิจ และนักท่องเที่ยว",
  "市政与相关机构在初步报道后向居民、商户和游客补充了说明。",
  "Власти и службы дали дополнительный контекст для жителей и гостей.",
);

const genericClosing = L(
  "We will update this story when new information is confirmed.",
  "จะอัปเดตข่าวเมื่อมีข้อมูลยืนยันเพิ่มเติม",
  "确认新信息后将更新报道。",
  "Обновим материал при появлении подтверждённых данных.",
);

const detailBodies: Record<string, DetailBody> = {
  "business/hotels/occupancy-3-year-high": {
    middle: L(
      "MICE bookings and weekend domestic travel pushed citywide occupancy toward 78% in Q1 — Wongamat luxury properties report the strongest recovery since 2019.",
      "การจอง MICE และท่องเที่ยวในประเทศช่วงสุดสัปดาห์ดันอัตราเข้าพักทั่วเมืองใกล้ 78% ใน Q1 — โรงแรมหรูวงวงามาดฟื้นตัวแรงสุดนับจาก 2019",
      "会展预订与周末国内游推动全市 Q1 入住率接近 78%——旺玛特高端酒店录得 2019 年以来最强复苏。",
      "MICE и внутренний туризм вывели загрузку к 78% в Q1 — Wongamat лидирует с 2019 года.",
    ),
    closing: L(
      "Average daily rates rose roughly 12% year-on-year. Operators expect the trend to hold through Songkran if flight capacity to U-Tapao and Bangkok remains steady.",
      "ราคาห้องเฉลี่ยสูงขึ้นราว 12% เทียบปีก่อน ผู้ประกอบการคาดแนวโน้มคงไปถึงสงกรานต์หากที่นั่งเที่ยวบินอู่ตะเภา–กรุงเทพคงที่",
      "平均房价同比上涨约 12%。若乌塔保与曼谷航线运力稳定，业者预计宋干节前趋势将延续。",
      "ADR +12% г/г. Тренд сохранится к Сонгкрану при стабильных рейсах в U-Tapao и Bangkok.",
    ),
  },
  "nightlife/walking-street/walking-street-smart-city": {
    middle: L(
      "LED lighting, CCTV, and bilingual wayfinding kiosks now span the full entertainment zone—part of Pattaya's Smart City rollout focused on pedestrian safety.",
      "ไฟ LED กล้อง CCTV และคีออสนำทางสองภาษาครอบคลุมทั้งโซน—ส่วนหนึ่งของ Smart City เพื่อความปลอดภัยคนเดิน",
      "LED 照明、监控与双语导览亭现已覆盖整个娱乐区——芭提雅智慧城市计划的一环，侧重行人安全。",
      "LED, CCTV и киоски на двух языках — часть Smart City для безопасности пешеходов.",
    ),
    closing: L(
      "Peak-hour patrols and emergency call boxes stay active through high season; venues must display updated fire-safety capacity notices.",
      "ลาดตระเวนช่วงพีคและตู้ฉุกเฉินทำงานตลอดไฮซีซัน สถานที่ต้องแสดงป้ายความจุไฟฟ้าที่อัปเดตแล้ว",
      "高峰巡逻与紧急呼叫亭在旺季持续运行；场所须张贴更新后的消防容量告示。",
      "Патрули и SOS-боксы в сезон; заведения обязаны показать актуальные лимиты по пожарной безопасности.",
    ),
  },
  "expat/immigration/90-day-online-maintenance": {
    middle: L(
      "Scheduled maintenance Oct 14–16 affects the national online portal. Jomtien Immigration accepts walk-ins 08:30–16:30 with passport and your previous receipt.",
      "ปิดปรับปรุงระบบ 14–16 ต.ค. ตม.จอมเทียนรับยื่นตัว 08:30–16:30 นำพาสปอร์ตและใบเสร็จครั้งก่อน",
      "10 月 14–16 日全国在线系统维护。Jomtien 办事处 08:30–16:30 现场受理，请带护照与上次回执。",
      "Техработы 14–16 окт. Jomtien: 08:30–16:30, паспорт и квитанция.",
    ),
    closing: L(
      "File before your due date to avoid fines. Hotels and condos in Pattaya can assist with TM.30 registration if your address changed recently.",
      "ยื่นก่อนครบกำหนดเพื่อหลีกเลี่ยงค่าปรับ โรงแรมและคอนโดช่วย TM.30 หากเพิ่งย้ายที่อยู่",
      "请在截止日期前提交以免罚款。若近期变更地址，芭提雅酒店或公寓可协助 TM.30 登记。",
      "Подайте до срока. Отели и кондо помогут с TM.30 при смене адреса.",
    ),
  },
  "local-news/city-updates/pattaya-smart-city-beach-road": {
    middle: L(
      "Phase 1 alternates nightly lane closures 22:00–05:00 while crews install fiber ducts and LED wayfinding from Central Pattaya to Walking Street.",
      "เฟส 1 ปิดเลนสลับกันคืน 22:00–05:00 ติดตั้งท่อใยแสงและป้าย LED จากใจกลางพัทยาถึง Walking Street",
      "第一阶段 22:00–05:00 夜间交替封 lane，铺设光纤与 LED 导视，从中芭提雅至 Walking Street。",
      "Фаза 1: ночные перекрытия 22:00–05:00, оптоволокно и LED до Walking Street.",
    ),
    closing: L(
      "Shuttle loops and bilingual kiosks will guide visitors during construction — download the city detour map before driving Beach Road.",
      "รถรับส่งและคีออสสองภาษาช่วยระหว่างก่อสร้าง — ดาวน์โหลดแผนเลี่ยงก่อนขับ Beach Road",
      "施工期间提供接驳与双语信息亭——驾车前请下载绕行地图。",
      "Шаттлы и киоски в стройке — карта объезда Beach Road.",
    ),
  },
  "local-news/city-updates/beach-clean-2026": {
    middle: L(
      "Registration is open for the March coastal sweep — gloves, bags, and water stations provided at Bali Hai and Jomtien check-in points.",
      "เปิดรับสมัครกิจกรรมมีนาค์ — มีถุงมือ ถุงขยะ และน้ำดื่มที่จุดลงทะเบียนบาลีฮายและจอมเทียน",
      "三月海岸清洁开放报名——Bali Hai 与仲天登记点提供手套、垃圾袋与饮水。",
      "Мартовский субботник — перчатки и вода на Bali Hai и Jomtien.",
    ),
    closing: L(
      "Families and school groups welcome. Follow city social channels for tide-safe start times each month.",
      "รับครอบครัวและโรงเรียน ติดตามเวลาเริ่มตามกระแสน้ำทุกเดือนผ่านโซเชียลเทศบาล",
      "欢迎家庭与学校团体。请关注市政社交账号获取每月适潮出发时间。",
      "Семьи и школы приветствуются. Время старта — в соцсетях города.",
    ),
  },
  "tourism/attractions/sanctuary-of-truth-craftsmanship": {
    middle: L(
      "Rising 105 metres on the coast north of Pattaya, the all-teak temple has been hand-carved for decades. Guided tours reveal Buddhist, Hindu, and mythological scenes—each panel reflects truth, craftsmanship, and patience.",
      "ตั้งริมชายหาดเหนือพัทยา สูง 105 เมตร สร้างจากไม้สักทั้งหลัง แกะสลักด้วยมือมาหลายทศวรรษ ไกด์พาชมศิลปะพุทธ ฮินดู และตำนาน—ทุกแผ่นไม้สะท้อนสัจธรรม ฝีมือ และความอดทน",
      "芭提雅以北海滨，全木结构高 105 米，数十年来手工雕刻。导览讲解佛教、印度教与神话主题——每一块木板都体现真理、工艺与耐心。",
      "На побережье к северу от Паттайи — 105 м, кругом тик. Десятилетия ручной резьбы; экскурсии по буддийским, индуистским и мифологическим сюжетам.",
    ),
    closing: L(
      "Plan a morning visit for softer light and fewer crowds. Dress modestly (shoulders and knees covered); tickets and guided tours are available at the entrance daily.",
      "แนะนำมาช่วงเช้า แสงนุ่มและคนน้อยกว่า แต่งกายสุภาพ (ปิดบ่าและเข่า) มีจำหน่ายบัตรและทัวร์ไกด์ที่ทางเข้าทุกวัน",
      "建议上午参观，光线柔和、人流较少。请穿着得体（遮盖肩膝）；门口每日售票并提供导览。",
      "Лучше утром — мягкий свет и меньше людей. Скромная одежда; билеты и экскурсии у входа ежедневно.",
    ),
  },
  "local-news/city-updates/walking-street": {
    middle: L(
      "Contractors will install smart poles in phases, starting from the South Pattaya junction toward Walking Street, with bilingual signage for tourist areas.",
      "ผู้รับเหมาจะติดตั้งเสาอัจฉริยะเป็นขั้นตอน เริ่มจากแยกใต้พัทยาไป Walking Street พร้อมป้ายสองภาษา",
      "承包商将分阶段安装智慧灯杆，从南芭提雅路口向步行街推进，旅游区设双语标识。",
      "Умные столбы монтируют поэтапно от южного Pattaya к Walking Street.",
    ),
    closing: L(
      "Business owners can attend a briefing at City Hall every Tuesday at 14:00.",
      "ผู้ประกอบการเข้าร่วม briefing ที่ศาลากลางทุกอังคาร 14:00",
      "商户可于每周二 14:00 参加市政厅说明会。",
      "Брифинг для бизнеса — вторник 14:00 в City Hall.",
    ),
  },
  "local-news/city-updates/sukhumvit": {
    middle: L(
      "Detour signs will direct traffic via Sukhumvit Soi 50 and Thepprasit Road during peak evening hours.",
      "ป้ายเลี่ยงจะพาจราจรผ่านซอยสุขุมวิท 50 และถนนเทพประสิทธิ์ในช่วงเย็น",
      "高峰时段将经素坤逸 50 巷与 Thepprasit 路绕行。",
      "Объезд через Soi 50 и Thepprasit в часы пик.",
    ),
    closing: genericClosing,
  },
  "business/real-estate/royal-cliff-residences": {
    middle: L(
      "Buyers can tour model units on weekends; foreign quota availability will be confirmed per unit before reservation.",
      "ผู้ซื้อเยี่ยมชมห้องตัวอย่างวันหยุดสุดสัปดาห์ โควตาต่างชาติยืนยันรายยูนิตก่อนจอง",
      "周末可参观样板间，预订前将逐套确认外籍配额。",
      "Показы в выходные; квота для иностранцев — по каждому юниту.",
    ),
    closing: genericClosing,
  },
  "expat/visa/thailand-elite": {
    middle: L(
      "Applicants should verify membership tier benefits with an authorized agent before property-linked visa bundles.",
      "ผู้สมัครควรตรวจสอบสิทธิ์ระดับสมาชิกกับตัวแทนที่ได้รับอนุญาตก่อนแพ็กวีซ่าที่ผูกกับอสังหา",
      "申请人在办理与房产捆绑的签证套餐前，应向授权代理核实会员等级权益。",
      "Проверьте уровень членства у авторизованного агента.",
    ),
    closing: genericClosing,
  },
  "expat/immigration/missed-90-day": {
    middle: L(
      "Immigration advises filing as soon as possible; late reports may incur fines starting at 2,000 THB depending on circumstances.",
      "ตม.แนะนำยื่นโดยเร็ว รายงานล่าช้าอาจถูกปรับเริ่ม 2,000 บาทตามกรณี",
      "移民局建议尽快提交；逾期可能视情况处以 2,000 泰铢起罚款。",
      "Подайте отчёт как можно скорее — штраф от 2000 бат.",
    ),
    closing: genericClosing,
  },
};

export function getNewsArticleParagraphs(
  lang: LanguageCode,
  pathKey: string,
  excerpt: string,
): string[] {
  const patch = detailBodies[pathKey];
  if (!patch) {
    return [excerpt, t(lang, genericMiddle), t(lang, genericClosing)];
  }
  return [excerpt, t(lang, patch.middle), t(lang, patch.closing)];
}
