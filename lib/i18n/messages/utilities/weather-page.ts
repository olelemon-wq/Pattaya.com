import type { LanguageCode } from "@/lib/i18n/languages";
import { faq, L, t } from "@/lib/i18n/living-helpers";
import type { WeatherKind } from "@/lib/weather/wmo-codes";

const LOCALE_BY_LANG: Record<LanguageCode, string> = {
  en: "en-US",
  th: "th-TH",
  zh: "zh-CN",
  ru: "ru-RU",
};

const wmoLabels: Record<WeatherKind, ReturnType<typeof L>> = {
  clear: L("Clear sky", "ท้องฟ้าแจ่มใส", "晴朗", "Ясно"),
  partly: L("Partly cloudy", "มีเมฆบางส่วน", "局部多云", "Переменная облачность"),
  cloudy: L("Overcast", "เมฆมาก", "阴天", "Пасмурно"),
  fog: L("Fog", "หมอก", "雾", "Туман"),
  drizzle: L("Drizzle", "ฝนปรอย", "毛毛雨", "Морось"),
  rain: L("Rain", "ฝนตก", "雨", "Дождь"),
  showers: L("Rain showers", "ฝนตกเป็นช่วง", "阵雨", "Ливни"),
  thunder: L("Thunderstorm", "พายุฝนฟ้าคะนอง", "雷暴", "Гроза"),
};

const seasons = [
  {
    id: "cool",
    months: L("Nov – Feb", "พ.ย. – ก.พ.", "11月–2月", "ноя – фев"),
    title: L("Cool & dry season", "ฤดูหนาว–แห้ง", "凉季", "Прохладный сезон"),
    body: L(
      "Comfortable evenings, lower humidity, and the busiest tourist months. Book beach clubs and outdoor events early; pack a light jacket for night markets.",
      "อากาศเย็นสบาย ความชื้นต่ำ และเป็นช่วงนักท่องเที่ยวเยอะ จองบีชคลับและอีเวนต์กลางแจ้งล่วงหน้า แนะนำเสื้อบางๆ สำหรับตลาดกลางคืน",
      "晚间舒适、湿度较低，旅游旺季。提前预订海滩俱乐部与户外活动；夜市可备薄外套。",
      "Комфортные вечера, низкая влажность, пик туристов. Бронируйте пляжные клубы заранее.",
    ),
    temp: L("26–31°C typical", "โดยทั่วไป 26–31°C", "通常 26–31°C", "Обычно 26–31°C"),
  },
  {
    id: "hot",
    months: L("Mar – May", "มี.ค. – พ.ค.", "3月–5月", "мар – май"),
    title: L("Hot season", "ฤดูร้อน", "热季", "Жаркий сезон"),
    body: L(
      "Peak heat and strong UV — plan beach time before 10:00 or after 16:00. Stay hydrated; Songkran in April brings city-wide water fights and road closures.",
      "อากาศร้อนสุดและ UV แรง — เล่นทะเลก่อน 10:00 หรือหลัง 16:00 ดื่มน้ำให้พอ สงกรานต์เมษายนมีปิดถนนและงานเล่นน้ำทั่วเมือง",
      "最热且紫外线强 — 建议 10:00 前或 16:00 后下海；注意补水；四月宋干节全城泼水与封路。",
      "Пик жары и UV — пляж до 10:00 или после 16:00. Сонгкран в апреле — перекрытия дорог.",
    ),
    temp: L("32–36°C+ feels hotter", "32–36°C+ รู้สึกร้อนกว่า", "32–36°C+ 体感更热", "32–36°C+ ощущается жарче"),
  },
  {
    id: "rainy",
    months: L("Jun – Oct", "มิ.ย. – ต.ค.", "6月–10月", "июн – окт"),
    title: L("Rainy season", "ฤดูฝน", "雨季", "Сезон дождей"),
    body: L(
      "Afternoon downpours are common but often short. Malls and covered markets are popular; check marine forecasts before island boat trips.",
      "ฝนช่วงบ่ายบ่อยแต่มักสั้น ห้างและตลาดมีหลังคาได้รับความนิยม ตรวจพยากรณ์ทะเลก่อนนั่งเรือไปเกาะ",
      "午后阵雨常见但通常较短；商场与有顶市场受欢迎；跳岛前请查海上预报。",
      "Дневные ливни часты, но коротки. Проверяйте морской прогноз перед островами.",
    ),
    temp: L("28–32°C humid", "28–32°C ชื้น", "28–32°C 潮湿", "28–32°C влажно"),
  },
] as const;

const tips = [
  {
    title: L("UV & sun safety", "แดด & UV", "紫外线防护", "UV и солнце"),
    body: L(
      "Use SPF 50+ on beach days; reapply after swimming. Midday UV often reaches very high levels year-round.",
      "ทาครีมกันแดด SPF 50+ ทาซ้ำหลังว่ายน้ำ UV กลางวันสูงเกือบตลอดปี",
      "海滩日请用 SPF 50+，游泳后补涂；正午紫外线全年偏高。",
      "SPF 50+ на пляже; UV в полдень высокий круглый год.",
    ),
  },
  {
    title: L("Sea & swimming", "ทะเล & ว่ายน้ำ", "海水与游泳", "Море и купание"),
    body: L(
      "Watch flag colors on busy beaches; avoid swimming during thunderstorms or when jellyfish warnings are posted.",
      "สังเกตธงบนหาดยอดนิยม หลีกเลี่ยงว่ายน้ำช่วงพายุหรือเมื่อมีประกาศแมงกะพรุน",
      "留意热门海滩旗帜；雷暴或水母警报时勿下海。",
      "Следите за флагами на пляжах; не плавайте при грозах и медузах.",
    ),
  },
  {
    title: L("Getting around", "การเดินทาง", "出行", "Транспорт"),
    body: L(
      "Sudden rain can flood low spots on Beach Road — allow extra time; songthaews and ride apps stay available.",
      "ฝนตกหนักอาจน้ำท่วมจุดต่ำบน Beach Road — เผื่อเวลา สองแถวและแอปเรียกรถยังมี",
      "暴雨可能使 Beach Road 低洼处积水 — 预留时间；双条车与网约车仍可用。",
      "Ливни затапливают низины Beach Road — закладывайте время.",
    ),
  },
] as const;

export const weatherFaqs = [
  faq(
    "best-beach",
    L("When is the best weather for the beach?", "ช่วงไหนเล่นทะเลดีสุด?", "何时最适合海滩？", "Когда лучше на пляж?"),
    L(
      "November through February offers the most predictable dry days. Early mornings year-round are cooler and less crowded.",
      "พ.ย.–ก.พ. แดดดีคาดการณ์ได้ ตอนเช้าตลอดปีเย็นและคนน้อยกว่า",
      "11月至2月晴好最稳定；全年清晨较凉、人较少。",
      "Ноя–фев — сухо и предсказуемо. Утро — прохладнее.",
    ),
  ),
  faq(
    "monsoon",
    L("Does it rain all day in monsoon season?", "ฤดูฝนตกทั้งวันไหม?", "雨季会下全天雨吗？", "Весь день дождь в муссон?"),
    L(
      "Usually not — many days start sunny with a late-afternoon shower. Check the hourly forecast before planning boat tours.",
      "มักไม่ — หลายวันแดดตอนเช้า ฝนบ่าย ตรวจพยากรณ์รายชั่วโมงก่อนจองทัวร์เรือ",
      "通常不会 — 许多日子上午晴、下午阵雨；订船游前请看逐小时预报。",
      "Редко весь день — часто дождь во второй половине дня.",
    ),
  ),
  faq(
    "coverage",
    L("Where does this forecast apply?", "พยากรณ์นี้ครอบคลุมพื้นที่ไหน?", "预报覆盖哪里？", "Для какой зоны прогноз?"),
    L(
      "Data is for central Pattaya (Open-Meteo grid). Jomtien and Naklua can differ slightly — use as a guide, not exact beach conditions.",
      "ข้อมูลกลางเมืองพัทยา (Open-Meteo) จอมเทียนและนาเกลืออาจต่างเล็กน้อย",
      "数据为芭提雅市中心（Open-Meteo 格点），Jomtien、Naklua 可能略有差异。",
      "Центр Паттайи; Jomtien и Naklua могут отличаться.",
    ),
  ),
];

export function getWeatherKindLabel(lang: LanguageCode, kind: WeatherKind): string {
  return t(lang, wmoLabels[kind]);
}

export function getWeatherPage(lang: LanguageCode) {
  const locale = LOCALE_BY_LANG[lang];
  return {
    locale,
    updated: t(lang, L("Updated", "อัปเดต", "更新", "Обновлено")),
    loading: t(lang, L("Loading forecast…", "กำลังโหลดพยากรณ์…", "正在加载预报…", "Загрузка прогноза…")),
    loadError: t(
      lang,
      L(
        "Could not load live data. Showing seasonal guide below — try refreshing in a moment.",
        "โหลดข้อมูลสดไม่ได้ แสดงคู่มือฤดูกาลด้านล่าง — ลองรีเฟรชอีกครั้ง",
        "无法加载实时数据，请查看下方季节指南 — 请稍后刷新。",
        "Не удалось загрузить данные — см. сезонный гид ниже.",
      ),
    ),
    refresh: t(lang, L("Refresh", "รีเฟรช", "刷新", "Обновить")),
    feelsLike: t(lang, L("Feels like", "รู้สึกเหมือน", "体感", "Ощущается")),
    humidity: t(lang, L("Humidity", "ความชื้น", "湿度", "Влажность")),
    wind: t(lang, L("Wind", "ลม", "风力", "Ветер")),
    uv: t(lang, L("UV index", "ดัชนี UV", "紫外线指数", "Индекс UV")),
    precip: t(lang, L("Rain now", "ฝนตอนนี้", "当前降水", "Осадки сейчас")),
    mm: t(lang, L("mm", "มม.", "毫米", "мм")),
    sevenDay: t(lang, L("7-day forecast", "พยากรณ์ 7 วัน", "7 日预报", "Прогноз на 7 дней")),
    today: t(lang, L("Today", "วันนี้", "今天", "Сегодня")),
    highLow: t(lang, L("High / low", "สูง / ต่ำ", "最高/最低", "Макс / мин")),
    rainChance: t(lang, L("Rain %", "ฝน %", "降雨%", "Дождь %")),
    seasonsTitle: t(lang, L("Pattaya seasons", "ฤดูกาลพัทยา", "芭提雅季节", "Сезоны Паттайи")),
    seasonsSubtitle: t(
      lang,
      L(
        "Plan trips, beach days, and events around typical patterns — live data above updates every 30 minutes.",
        "วางแผนทริป วันชายหาด และอีเวนต์จากแพทเทิร์นทั่วไป — ข้อมูลสดด้านบนอัปเดตทุก ~30 นาที",
        "按典型规律规划行程 — 上方实况约每 30 分钟更新。",
        "Планируйте по сезонам — живые данные обновляются ~каждые 30 мин.",
      ),
    ),
    tipsTitle: t(lang, L("Local tips", "เคล็ดลับในพื้นที่", "本地贴士", "Местные советы")),
    source: t(
      lang,
      L(
        "Forecast data: Open-Meteo · Pattaya grid",
        "ข้อมูลพยากรณ์: Open-Meteo · กริดพัทยา",
        "预报数据：Open-Meteo · 芭提雅格点",
        "Данные: Open-Meteo · сетка Паттайи",
      ),
    ),
    livingHub: t(lang, L("Living hub", "ศูนย์ไลฟ์สไตล์", "生活中心", "Раздел жизни")),
    events: t(lang, L("Events calendar", "ปฏิทินอีเวนต์", "活动日历", "События")),
    beaches: t(lang, L("Explore beaches", "สำรวจชายหาด", "探索海滩", "Пляжи")),
    transport: t(lang, L("Transport guides", "คู่มือการเดินทาง", "交通指南", "Транспорт")),
    seasons: seasons.map((s) => ({
      id: s.id,
      months: t(lang, s.months),
      title: t(lang, s.title),
      body: t(lang, s.body),
      temp: t(lang, s.temp),
    })),
    tips: tips.map((item) => ({
      title: t(lang, item.title),
      body: t(lang, item.body),
    })),
  };
}
