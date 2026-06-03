import type { LanguageCode } from "@/lib/i18n/languages";
import {
  mallGoogleMapsDirectionsHref,
  mallMapPinById,
  mallsMapOpenHref,
  type MallMapPinId,
} from "@/lib/design/shopping-malls-map";
import { getMallGuideImage, type ShoppingMallImageId } from "@/lib/design/shopping-mall-guide-images";
import { L, t } from "@/lib/i18n/living-helpers";

export type MallGuideItem = {
  id: MallMapPinId;
  imageId: ShoppingMallImageId;
  name: string;
  openDays: string;
  hoursRange: string;
  bestTimeOfDay: string;
  highlights: string[];
  vibe: string;
  bestFor: string;
  brands?: string[];
  mustTry?: string;
  tips?: string;
  mapsHref: string;
  directionsHref: string;
};

function mapsQuery(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function mall(
  id: MallMapPinId,
  maps: string,
  fields: {
    name: ReturnType<typeof L>;
    openDays: ReturnType<typeof L>;
    hoursRange: ReturnType<typeof L>;
    bestTimeOfDay: ReturnType<typeof L>;
    highlights: ReturnType<typeof L>[];
    vibe: ReturnType<typeof L>;
    bestFor: ReturnType<typeof L>;
    brands?: ReturnType<typeof L>[];
    mustTry?: ReturnType<typeof L>;
    tips?: ReturnType<typeof L>;
  },
) {
  const pin = mallMapPinById[id];
  return {
    id,
    imageId: id as ShoppingMallImageId,
    mapsHref: mapsQuery(maps),
    directionsHref: mallGoogleMapsDirectionsHref(pin.lat, pin.lng),
    ...fields,
  };
}

const guideMalls = {
  centralPattaya: mall("central-pattaya", "Central Pattaya Central Festival Pattaya Beach Thailand", {
    name: L("Central Pattaya", "เซ็นทรัล พัทยา", "Central 芭提雅", "Central Pattaya"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~10:00–22:00", "~10:00–22:00", "约10:00–22:00", "~10:00–22:00"),
    bestTimeOfDay: L("Late afternoon · sunset", "บ่ายแก่ ๆ · พระอาทิตย์ตก", "傍晚 · 日落", "Вечер · закат"),
    highlights: [
      L("Full brand mix", "แบรนด์ครบ", "品牌齐全", "Полный выбор брендов"),
      L("Many restaurants & cafés", "ร้านอาหารและคาเฟ่เยอะ", "餐厅与咖啡馆多", "Много ресторанов"),
      L("Sea views", "วิวทะเล", "海景", "Вид на море"),
      L("Cinema & bowling", "โรงหนัง โบว์ลิ่ง", "影院与保龄球", "Кино и боулинг"),
    ],
    vibe: L(
      "Pattaya's most complete mall — big, beach-adjacent, and unmistakably “this is Pattaya.”",
      "ห้างครบที่สุดของพัทยา ใหญ่ ติดทะเล ฟีล “นี่แหละพัทยา”",
      "芭提雅最齐全的商场，临海，典型的芭提雅氛围。",
      "Самый полный ТРЦ Паттайи у моря.",
    ),
    bestFor: L(
      "All-day walks, escaping heat, meeting friends, people-watching.",
      "เดินเล่นทั้งวัน หลบร้อน นัดเพื่อน",
      "全天逛街、避暑、聚会、看人来人往。",
      "Прогулки, кондиционер, встречи.",
    ),
    brands: [
      L("UNIQLO", "UNIQLO", "优衣库", "UNIQLO"),
      L("Muji", "Muji", "无印良品", "Muji"),
      L("Zara", "Zara", "Zara", "Zara"),
      L("H&M", "H&M", "H&M", "H&M"),
      L("Seaside dining", "ร้านอาหารริมวิวทะเล", "海景餐厅", "У моря"),
    ],
    tips: L(
      "The upper floors with sea views are best around sunset.",
      "ชั้นวิวทะเลตอนเย็นฟีลดีมาก",
      "日落时分海景楼层体验最佳。",
      "Закат на верхних этажах с видом на море.",
    ),
  }),
  terminal21: mall("terminal-21", "Terminal 21 Pattaya Thailand", {
    name: L("Terminal 21 Pattaya", "เทอร์มินอล 21 พัทยา", "Terminal 21 芭提雅", "Terminal 21"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~10:00–22:00", "~10:00–22:00", "约10:00–22:00", "~10:00–22:00"),
    bestTimeOfDay: L("Afternoon · evening", "บ่าย · เย็น", "下午 · 傍晚", "День · вечер"),
    highlights: [
      L("Country-themed floors", "แต่ละชั้นธีมต่างประเทศ", "各国主题楼层", "Тематические этажи"),
      L("Great for photos", "ถ่ายรูปสนุก", "适合拍照", "Фото-споты"),
      L("Strong food court", "ฟู้ดคอร์ทดี", "美食广场出色", "Хороший фуд-корт"),
      L("Easy to navigate", "เดินง่าย", "动线清晰", "Удобная планировка"),
    ],
    vibe: L(
      "Like visiting several countries in one building — Tokyo, Paris, London, Hollywood on different levels.",
      "เหมือนไปหลายประเทศในห้างเดียว — Tokyo Paris London Hollywood",
      "像在一栋楼里环游多国主题楼层。",
      "Несколько «стран» в одном ТРЦ.",
    ),
    bestFor: L(
      "Photo walks, casual strolling, eating a lot without spending too much.",
      "สายถ่ายรูป เดินชิล กินเยอะ ๆ แบบไม่แพง",
      "拍照、轻松逛吃、性价比高。",
      "Фото, прогулки, недорогая еда.",
    ),
    mustTry: L(
      "Pier 21 food court — many locals call it the best value in Pattaya.",
      "Pier 21 food court — หลายคนบอกว่าคุ้มสุดในพัทยา",
      "Pier 21 美食广场——本地人常说是芭提雅最划算之一。",
      "Pier 21 — лучшее соотношение цены в Паттайе.",
    ),
  }),
  outletMall: mall("outlet-mall", "Outlet Mall Pattaya Thepprasit Road Thailand", {
    name: L("Outlet Mall Pattaya", "เอาท์เล็ตมอลล์ พัทยา", "Outlet Mall 芭提雅", "Outlet Mall"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~10:00–21:00", "~10:00–21:00", "约10:00–21:00", "~10:00–21:00"),
    bestTimeOfDay: L("Morning · afternoon", "เช้า · บ่าย", "上午 · 下午", "Утро · день"),
    highlights: [
      L("Discount fashion", "แฟชั่นลดราคา", "折扣服饰", "Распродажи"),
      L("Shoes & sportswear", "รองเท้า กีฬา", "鞋类与运动", "Обувь и спорт"),
      L("Compact layout", "เดินง่าย ไม่วุ่นวาย", "布局紧凑不拥挤", "Компактно"),
    ],
    vibe: L(
      "Straightforward outlet hunting — less spectacle, more deal-chasing.",
      "สายล่าของลดราคา ไม่วุ่นวายมาก",
      "直奔折扣淘货，氛围比旗舰商场安静。",
      "Аутлет без лишней суеты.",
    ),
    bestFor: L(
      "Bargain hunters after branded shoes, clothes, and bags.",
      "คนชอบ “เดินล่าดีล” รองเท้า เสื้อผ้า กระเป๋า",
      "淘品牌鞋服与包包。",
      "Охота за скидками.",
    ),
    brands: [
      L("Adidas", "Adidas", "Adidas", "Adidas"),
      L("Nike", "Nike", "Nike", "Nike"),
      L("Levi's", "Levi's", "Levi's", "Levi's"),
    ],
  }),
  centralMarina: mall("central-marina", "Central Marina Pattaya Thailand", {
    name: L("Central Marina", "เซ็นทรัลมารีน่า", "Central Marina", "Central Marina"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~10:00–22:00", "~10:00–22:00", "约10:00–22:00", "~10:00–22:00"),
    bestTimeOfDay: L("Weekday daytime", "วันธรรมดากลางวัน", "工作日白天", "Будни днём"),
    highlights: [
      L("More local crowd", "คนพื้นที่ใช้จริงเยอะ", "本地人更多", "Больше местных"),
      L("Restaurants & supermarket", "ร้านอาหาร ซูเปอร์", "餐饮与超市", "Еда и супермаркет"),
      L("Less crowded", "ไม่แน่น", "不那么挤", "Не так людно"),
    ],
    vibe: L(
      "More everyday-local than the big beach flagship — relaxed and practical.",
      "ฟีล local กว่า Central ใหญ่",
      "比大型海滨旗舰商场更生活化、更轻松。",
      "Спокойнее и «по-бытовому».",
    ),
    bestFor: L(
      "Easy strolls without crowds, groceries, casual meals.",
      "วันอยากเดินสบาย ๆ ไม่เบียดคน",
      "想轻松逛、不挤人的一天。",
      "Спокойная прогулка без толпы.",
    ),
  }),
  gemsGallery: mall("gems-gallery", "GEMS Gallery Pattaya Thailand", {
    name: L("GEMS Gallery Pattaya", "เจมส์ แกลเลอรี่ พัทยา", "GEMS 珠宝馆", "GEMS Gallery"),
    openDays: L("Daily", "ทุกวัน", "每天", "Ежедневно"),
    hoursRange: L("~09:00–18:00", "~09:00–18:00", "约9:00–18:00", "~09:00–18:00"),
    bestTimeOfDay: L("Morning · afternoon", "เช้า · บ่าย", "上午 · 下午", "Утро · день"),
    highlights: [
      L("Gem & jewelry displays", "เพชร พลอย อัญมณี", "宝石与珠宝展示", "Драгоценности"),
      L("Craft & fine detail", "งานละเอียดสวย", "精工细活", "Ремесло"),
      L("Cool AC escape", "แอร์เย็น", "空调避暑", "Кондиционер"),
    ],
    vibe: L(
      "Museum-meets-showroom — browse beautiful pieces even if you are not buying.",
      "เหมือนพิพิธภัณฑ์ + ห้างเครื่องประดับ",
      "像博物馆加珠宝展厅，即使不买也值得看。",
      "Музей и витрины украшений.",
    ),
    bestFor: L(
      "Anyone who enjoys craft, gemstones, and a quiet indoor stop.",
      "คนชอบงาน craft งานละเอียด",
      "喜欢工艺与宝石、想安静逛室内的人。",
      "Любителям ювелирки и ремесла.",
    ),
  }),
} as const;

function localizeMall(lang: LanguageCode, item: (typeof guideMalls)[keyof typeof guideMalls]): MallGuideItem {
  return {
    id: item.id,
    imageId: item.imageId,
    name: t(lang, item.name),
    openDays: t(lang, item.openDays),
    hoursRange: t(lang, item.hoursRange),
    bestTimeOfDay: t(lang, item.bestTimeOfDay),
    highlights: item.highlights.map((h) => t(lang, h)),
    vibe: t(lang, item.vibe),
    bestFor: t(lang, item.bestFor),
    brands: item.brands?.map((b) => t(lang, b)),
    mustTry: item.mustTry ? t(lang, item.mustTry) : undefined,
    tips: item.tips ? t(lang, item.tips) : undefined,
    mapsHref: item.mapsHref,
    directionsHref: item.directionsHref,
  };
}

export function getMallGuideItems(lang: LanguageCode): MallGuideItem[] {
  return [
    localizeMall(lang, guideMalls.centralPattaya),
    localizeMall(lang, guideMalls.terminal21),
    localizeMall(lang, guideMalls.outletMall),
    localizeMall(lang, guideMalls.centralMarina),
    localizeMall(lang, guideMalls.gemsGallery),
  ];
}

export function getMallsForMap(lang: LanguageCode) {
  return getMallGuideItems(lang).map((mall) => ({
    id: mall.id,
    name: mall.name,
    hoursRange: mall.hoursRange,
    openDays: mall.openDays,
    mapsHref: mall.mapsHref,
    directionsHref: mall.directionsHref,
    pin: mallMapPinById[mall.id],
  }));
}

export function getMallMapCopy(lang: LanguageCode) {
  return {
    title: t(lang, L("Mall map", "แผนที่ห้าง", "商场地图", "Карта ТРЦ")),
    subtitle: t(
      lang,
      L(
        "Five recommended malls — tap a pin or chip for directions. Hours are approximate.",
        "ห้างแนะนำ 5 แห่ง — แตะหมุดหรือปุ่มเพื่อนำทาง เวลาเป็นคร่าว ๆ",
        "五家推荐商场——点击图钉或按钮导航，时间为参考。",
        "5 ТРЦ — нажмите на метку для маршрута.",
      ),
    ),
    directions: t(lang, L("Directions", "เส้นทาง", "路线", "Маршрут")),
    openPlace: t(lang, L("Open place", "เปิดสถานที่", "打开地点", "Открыть")),
    openAll: t(lang, L("Open all malls in Maps", "เปิดห้างทั้งหมดใน Maps", "在地图中打开全部商场", "Все ТРЦ в Maps")),
    openAllHref: mallsMapOpenHref,
    legendGuide: t(lang, L("Recommended malls", "ห้างแนะนำ", "推荐商场", "Рекомендуемые")),
  };
}

export function getMallGuideIntro(lang: LanguageCode) {
  return {
    title: t(
      lang,
      L("Pattaya mall guide", "คู่มือห้างพัทยา", "芭提雅商场指南", "Гид по ТРЦ Паттайи"),
    ),
    body: t(
      lang,
      L(
        "Pattaya has more malls than many visitors expect — and each has a different character. Some are for shopping, some for food, some are just for air-con walks. Use the map and cards below to match your mood.",
        "พัทยามีห้างเยอะกว่าที่หลายคนคิด แล้วแต่ละที่คาแรกเตอร์ต่างกันมาก บางที่สายช้อป บางที่สายกิน บางที่ไปเดินเล่นตากแอร์เฉย ๆ ยังเพลิน",
        "芭提雅的商场比想象中多，而且各具特色——有的适合购物，有的适合吃喝，有的单纯避暑闲逛也很舒服。",
        "В Паттайе больше ТРЦ, чем кажется — у каждого свой характер.",
      ),
    ),
    sourceNote: t(
      lang,
      L(
        "Hours and tips are practical guides only — confirm on site or in Google Maps before you travel.",
        "เวลาและเคล็ดลับเป็นคำแนะนำ — ยืนยันหน้างานหรือใน Google Maps ก่อนเดินทาง",
        "开放时间为参考，出发前请在地图或现场确认。",
        "Часы ориентировочные — уточняйте на месте.",
      ),
    ),
    openInMaps: t(
      lang,
      L("Open in Google Maps", "เปิดใน Google Maps", "在 Google 地图中打开", "Google Maps"),
    ),
    directionsLabel: t(lang, L("Directions", "เส้นทาง", "路线", "Маршрут")),
    highlightsLabel: t(lang, L("Highlights", "จุดเด่น", "亮点", "Особенности")),
    vibeLabel: t(lang, L("Vibe", "ฟีล", "氛围", "Атмосфера")),
    bestForLabel: t(lang, L("Best for", "เหมาะกับ", "适合", "Подходит")),
    brandsLabel: t(lang, L("Popular spots", "ร้านที่นิยม", "热门店铺", "Популярное")),
    mustTryLabel: t(lang, L("Must try", "ต้องลอง", "必试", "Попробуйте")),
    tipsLabel: t(lang, L("Tip", "เคล็ดลับ", "提示", "Совет")),
    openDaysLabel: t(lang, L("Open", "เปิดวัน", "开放", "Дни")),
    hoursRangeLabel: t(lang, L("Hours", "เวลาโดยประมาณ", "时间", "Часы")),
    bestTimeLabel: t(lang, L("Best time", "ช่วงเวลาดี", "最佳时段", "Лучшее время")),
  };
}

export function getMallMoodPicks(lang: LanguageCode) {
  return {
    title: t(lang, L("Match your mood", "เลือกตามอารมณ์อยากไป", "按心情选择", "По настроению")),
    subtitle: t(
      lang,
      L("Quick picks when you know how you want the day to feel.", "สรุปสั้น ๆ ตามฟีลที่อยากได้", "按你想要的氛围快速选。", "Коротко по настроению."),
    ),
    groups: [
      {
        title: t(lang, L("Most fun to wander", "อยากเดินเพลินสุด", "最想轻松逛", "Прогулка")),
        pick: t(lang, L("Terminal 21 Pattaya", "Terminal 21 Pattaya", "Terminal 21", "Terminal 21")),
        mallId: "terminal-21" as const,
      },
      {
        title: t(lang, L("Pattaya beach vibe & sea views", "อยากฟีลพัทยา วิวทะเล", "芭提雅海景氛围", "Море и Паттайя")),
        pick: t(lang, L("Central Pattaya", "Central Pattaya", "Central", "Central Pattaya")),
        mallId: "central-pattaya" as const,
      },
      {
        title: t(lang, L("Deals & outlet prices", "อยากได้ของถูก ของลด", "淘折扣", "Скидки")),
        pick: t(lang, L("Outlet Mall Pattaya", "Outlet Mall Pattaya", "Outlet Mall", "Outlet Mall")),
        mallId: "outlet-mall" as const,
      },
      {
        title: t(lang, L("Quiet & easy", "อยากเดินเงียบ ๆ ชิล ๆ", "安静轻松", "Спокойно")),
        pick: t(lang, L("Central Marina", "Central Marina", "Central Marina", "Central Marina")),
        mallId: "central-marina" as const,
      },
      {
        title: t(lang, L("Food first", "อยากเน้นกิน", "以吃为主", "Еда")),
        pick: t(
          lang,
          L("Terminal 21 + Central Pattaya", "Terminal 21 + Central Pattaya", "T21 + Central", "T21 + Central"),
        ),
        mallId: "terminal-21" as const,
      },
    ],
  };
}

export function getMallFirstVisitPicks(lang: LanguageCode) {
  return {
    title: t(lang, L("First visit?", "ไปครั้งแรกควรไปไหน?", "第一次来？", "Первый раз?")),
    subtitle: t(
      lang,
      L("If you only have time for one or two stops.", "ถ้ามีเวลาแค่หนึ่งหรือสองที่", "时间只够去一两处时。", "Если мало времени."),
    ),
    items: [
      {
        title: t(lang, L("Only one mall", "ไปได้ห้างเดียว", "只能去一家", "Один ТРЦ")),
        body: t(
          lang,
          L(
            "Central Pattaya — most complete, sea views, central location.",
            "Central Pattaya — ครบ วิวทะเล อยู่กลางเมือง",
            "Central Pattaya——最全、海景、位置中心。",
            "Central Pattaya — полный, вид на море, центр.",
          ),
        ),
        mallId: "central-pattaya" as const,
      },
      {
        title: t(lang, L("Want maximum fun", "อยาก “สนุก”", "想要最好玩", "Максимум fun")),
        body: t(
          lang,
          L(
            "Terminal 21 Pattaya — themed floors and Pier 21 food court rarely feel boring.",
            "Terminal 21 Pattaya — ธีมแต่ละชั้น + Pier 21 ไม่เบื่อง่าย ๆ",
            "Terminal 21——主题楼层与 Pier 21 美食广场，不容易逛腻。",
            "Terminal 21 — тематические этажи и Pier 21.",
          ),
        ),
        mallId: "terminal-21" as const,
      },
    ],
  };
}

export { getMallGuideImage };
