import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import type { BeachDetailSlug } from "@/lib/explore/beach-detail-slugs";

export type BeachCrowdLevel = "quiet" | "moderate" | "busy";

export type BeachWhenSlot = {
  id: "morning" | "afternoon" | "evening";
  period: string;
  timeRange: string;
  tip: string;
  crowd: BeachCrowdLevel;
  crowdLabel: string;
};

function crowdLabels(lang: LanguageCode): Record<BeachCrowdLevel, string> {
  return {
    quiet: t(lang, L("Quiet", "เงียบ", "安静", "Тихо")),
    moderate: t(lang, L("Moderate", "ปานกลาง", "适中", "Средне")),
    busy: t(lang, L("Busy", "คึกคัก", "热闹", "Многолюдно")),
  };
}

function slot(
  lang: LanguageCode,
  crowds: Record<BeachCrowdLevel, string>,
  config: {
    id: BeachWhenSlot["id"];
    period: [string, string, string, string];
    timeRange: [string, string, string, string];
    tip: [string, string, string, string];
    crowd: BeachCrowdLevel;
  },
): BeachWhenSlot {
  return {
    id: config.id,
    period: t(lang, L(...config.period)),
    timeRange: t(lang, L(...config.timeRange)),
    tip: t(lang, L(...config.tip)),
    crowd: config.crowd,
    crowdLabel: crowds[config.crowd],
  };
}

export function getBeachWhenSlots(lang: LanguageCode, slug: BeachDetailSlug): BeachWhenSlot[] {
  const crowds = crowdLabels(lang);
  const morning = (th: string, zh: string, ru: string) =>
    ["Morning", th, zh, ru] as [string, string, string, string];
  const afternoon = (th: string, zh: string, ru: string) =>
    ["Afternoon", th, zh, ru] as [string, string, string, string];
  const evening = (th: string, zh: string, ru: string) =>
    ["Evening", th, zh, ru] as [string, string, string, string];

  const configs: Record<
    BeachDetailSlug,
    Array<{
      id: BeachWhenSlot["id"];
      period: [string, string, string, string];
      timeRange: [string, string, string, string];
      tip: [string, string, string, string];
      crowd: BeachCrowdLevel;
    }>
  > = {
    "pattaya-beach": [
      {
        id: "morning",
        period: morning("เช้า", "早晨", "Утро"),
        timeRange: ["06:00–10:00", "06:00–10:00", "06:00–10:00", "06:00–10:00"],
        tip: [
          "Quieter sand, easy promenade walks before the heat peaks.",
          "คนน้อย เดินเลียบชายหาดสบายก่อนแดดแรง",
          "沙滩较安静，适合海滨漫步。",
          "Меньше людей — прогулка по набережной.",
        ],
        crowd: "quiet",
      },
      {
        id: "afternoon",
        period: afternoon("บ่าย–เย็น", "下午至傍晚", "День"),
        timeRange: ["15:00–18:00", "15:00–18:00", "15:00–18:00", "15:00–18:00"],
        tip: [
          "Golden light over the bay; jet-ski traffic eases compared with midday.",
          "แสงสวยเหนืออ่าว เจ็ทสกีน้อยลงจากช่วงเที่ยง",
          "海湾金色光线，摩托艇较中午少。",
          "Золотой свет над бухтой.",
        ],
        crowd: "moderate",
      },
      {
        id: "evening",
        period: evening("ค่ำ", "晚间", "Вечер"),
        timeRange: ["19:00–23:00", "19:00–23:00", "19:00–23:00", "19:00–23:00"],
        tip: [
          "Nightlife energy near Walking Street — busiest Fri–Sun.",
          "บรรยากาศไนท์ไลฟ์ใกล้ Walking Street คนเยอะศ–อา",
          "近 Walking Street 夜生活热闹，周五至周日最忙。",
          "Ночная жизнь у Walking Street — пт–вс многолюдно.",
        ],
        crowd: "busy",
      },
    ],
    jomtien: [
      {
        id: "morning",
        period: morning("เช้า", "早晨", "Утро"),
        timeRange: ["07:00–11:00", "07:00–11:00", "07:00–11:00", "07:00–11:00"],
        tip: [
          "Best for swimming and shaded chair rentals.",
          "เหมาะว่ายน้ำ เช่าเก้าอี้มีร่ม",
          "最适合游泳与有遮阳的躺椅。",
          "Лучшее время для купания.",
        ],
        crowd: "quiet",
      },
      {
        id: "afternoon",
        period: afternoon("บ่าย", "下午", "День"),
        timeRange: ["12:00–17:00", "12:00–17:00", "12:00–17:00", "12:00–17:00"],
        tip: [
          "Water sports and seafood lunches — busier on weekends.",
          "กีฬาทางน้ำ อาหารทะเล — วันหยุดคนมากขึ้น",
          "水上运动与海鲜午餐，周末更忙。",
          "Водный спорт — выходные многолюднее.",
        ],
        crowd: "moderate",
      },
      {
        id: "evening",
        period: evening("เย็น", "傍晚", "Вечер"),
        timeRange: ["18:00–22:00", "18:00–22:00", "18:00–22:00", "18:00–22:00"],
        tip: [
          "Head inland to Jomtien Night Market for street food.",
          "เข้าไปตลาดจอมเทียนตอนเย็น",
          "傍晚可去仲天夜市。",
          "Вечером — рынок Jomtien.",
        ],
        crowd: "moderate",
      },
    ],
    dongtan: [
      {
        id: "morning",
        period: morning("เช้า", "早晨", "Утро"),
        timeRange: ["08:00–11:00", "08:00–11:00", "08:00–11:00", "08:00–11:00"],
        tip: [
          "Soft light under the trees; great for wading in shallow water.",
          "แสงนุ่มใต้ต้นไม้ เดินเล่นน้ำตื้น",
          "林荫柔和光线，适合浅水涉水。",
          "Мягкий свет — мелководье.",
        ],
        crowd: "quiet",
      },
      {
        id: "afternoon",
        period: afternoon("บ่าย", "下午", "День"),
        timeRange: ["12:00–17:00", "12:00–17:00", "12:00–17:00", "12:00–17:00"],
        tip: [
          "Promenade cafés and shade — weekdays feel especially relaxed.",
          "คาเฟ่ริมทางเดิน วันธรรมดาผ่อนคลาย",
          "步道咖啡与树荫，平日更静。",
          "Кафе на променаде — тише в будни.",
        ],
        crowd: "moderate",
      },
      {
        id: "evening",
        period: evening("เย็น", "傍晚", "Вечер"),
        timeRange: ["17:00–21:00", "17:00–21:00", "17:00–21:00", "17:00–21:00"],
        tip: [
          "Street vendors along the walkway — casual, local vibe.",
          "แผงลอยริมทางเดิน บรรยากาศท้องถิ่น",
          "步道小吃摊，本地氛围。",
          "Уличная еда — местная атмосфера.",
        ],
        crowd: "moderate",
      },
    ],
    naklua: [
      {
        id: "morning",
        period: morning("เช้า", "早晨", "Утро"),
        timeRange: ["05:00–09:00", "05:00–09:00", "05:00–09:00", "05:00–09:00"],
        tip: [
          "Naklua market energy and fishing boats — arrive early.",
          "ตลาดนาเกลือ เรือประมง — มาเช้า",
          "那库拉早市与渔船，宜早到。",
          "Рынок и лодки — приходите рано.",
        ],
        crowd: "moderate",
      },
      {
        id: "afternoon",
        period: afternoon("บ่าย", "下午", "День"),
        timeRange: ["10:00–15:00", "10:00–15:00", "10:00–15:00", "10:00–15:00"],
        tip: [
          "Quieter sand after the market rush; good for a slow stroll.",
          "หลังตลาดเงียงลง เดินชายหาดสบาย",
          "早市后沙滩更静，适合慢走。",
          "После рынка — тихая прогулка.",
        ],
        crowd: "quiet",
      },
      {
        id: "evening",
        period: evening("เย็น", "傍晚", "Вечер"),
        timeRange: ["16:00–19:00", "16:00–19:00", "16:00–19:00", "16:00–19:00"],
        tip: [
          "Cooler breeze; pair with a north Pattaya dinner nearby.",
          "ลมเย็น ต่อด้วยมื้อเย็นเหนือพัทยา",
          "凉风，可衔接北部晚餐。",
          "Прохладнее — ужин на севере.",
        ],
        crowd: "quiet",
      },
    ],
    wongamat: [
      {
        id: "morning",
        period: morning("เช้า", "早晨", "Утро"),
        timeRange: ["07:00–10:00", "07:00–10:00", "07:00–10:00", "07:00–10:00"],
        tip: [
          "Calm water and Sanctuary of Truth views on clear days.",
          "น้ำสงบ วิวปราสาทสัจธรรมวันฟ้าใส",
          "晴天水质平静，可眺望真理寺。",
          "Спокойная вода — вид на храм.",
        ],
        crowd: "quiet",
      },
      {
        id: "afternoon",
        period: afternoon("บ่าย", "下午", "День"),
        timeRange: ["12:00–16:00", "12:00–16:00", "12:00–16:00", "12:00–16:00"],
        tip: [
          "Peaceful sunbathing on upscale stretches — fewer crowds than central.",
          "อาบแดดเงียบ คนน้อยกว่าใจกลาง",
          "高端区安静日光浴，比市中心人少。",
          "Спокойный загар — меньше людей.",
        ],
        crowd: "moderate",
      },
      {
        id: "evening",
        period: evening("เย็น", "傍晚", "Вечер"),
        timeRange: ["17:00–20:00", "17:00–20:00", "17:00–20:00", "17:00–20:00"],
        tip: [
          "Book cliff restaurants early for sunset — popular on weekends.",
          "จองร้านหน้าผาล่วงหน้า วันหยุดเต็มเร็ว",
          "悬崖餐厅看日落，周末宜提前订位。",
          "Бронируйте ресторан на закат.",
        ],
        crowd: "moderate",
      },
    ],
    pratumnak: [
      {
        id: "morning",
        period: morning("เช้า", "早晨", "Утро"),
        timeRange: ["07:00–10:00", "07:00–10:00", "07:00–10:00", "07:00–10:00"],
        tip: [
          "Visit Big Buddha before midday heat; panoramic bay photos.",
          "ขึ้นพระใหญ่ก่อนแดดแรง ถ่ายวิวอ่าว",
          "中午前上大佛，全湾取景。",
          "Большой Будда до жары — панорама.",
        ],
        crowd: "moderate",
      },
      {
        id: "afternoon",
        period: afternoon("บ่ายแก่ๆ", "午后", "После обеда"),
        timeRange: ["16:00–18:00", "16:00–18:00", "16:00–18:00", "16:00–18:00"],
        tip: [
          "Arrive at cliff venues 45–60 min before sunset for seating.",
          "ถึงร้านหน้าผาก่อนพระอาทิตย์ตก 45–60 นาที",
          "日落前45–60分钟到悬崖餐厅占座。",
          "Приезжайте за 45–60 мин до заката.",
        ],
        crowd: "busy",
      },
      {
        id: "evening",
        period: evening("พระอาทิตย์ตก", "日落", "Закат"),
        timeRange: ["18:00–19:30", "18:00–19:30", "18:00–19:30", "18:00–19:30"],
        tip: [
          "Golden-hour dining and photos — check tide if swimming in coves.",
          "ดินเนอร์ยามทอง ถ่ายรูป ว่ายน้ำดูน้ำขึ้น-ลง",
          "金色时刻用餐摄影，小湾游泳注意潮汐。",
          "Золотой час — учитывайте прилив.",
        ],
        crowd: "busy",
      },
    ],
  };

  return configs[slug].map((c) => slot(lang, crowds, c));
}
