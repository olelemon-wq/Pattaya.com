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
