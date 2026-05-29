import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import type { NavItem } from "@/lib/navigation/types";

type NavCopy = {
  label: ReturnType<typeof L>;
  description: ReturnType<typeof L>;
  category: ReturnType<typeof L>;
  subcategory: ReturnType<typeof L>;
};

const newsNav: Record<string, NavCopy> = {
  "local-news/city-updates": {
    label: L("City Updates", "ข่าวเมือง", "城市动态", "Новости города"),
    description: L(
      "Latest updates from around Pattaya city",
      "อัปเดตล่าสุดจากทั่วเมืองพัทยา",
      "芭提雅全市最新动态",
      "Свежие новости Паттайи",
    ),
    category: L("Local News", "ข่าวท้องถิ่น", "本地新闻", "Местные новости"),
    subcategory: L("City Updates", "ข่าวเมือง", "城市动态", "Город"),
  },
  "local-news/crime": {
    label: L("Police & Crime", "ตำรวจ & อาชญากรรม", "警务与犯罪", "Полиция"),
    description: L(
      "Police reports and crime news in Pattaya",
      "รายงานตำรวจและข่าวอาชญากรรมในพัทยา",
      "芭提雅警务与犯罪报道",
      "Полиция и преступность",
    ),
    category: L("Local News", "ข่าวท้องถิ่น", "本地新闻", "Местные"),
    subcategory: L("Police & Crime", "ตำรวจ & อาชญากรรม", "警务与犯罪", "Полиция"),
  },
  "local-news/accidents": {
    label: L("Accidents", "อุบัติเหตุ", "事故", "ДТП"),
    description: L(
      "Accident reports and traffic incidents",
      "รายงานอุบัติเหตุและจราจร",
      "事故与交通状况",
      "Аварии и трафик",
    ),
    category: L("Local News", "ข่าวท้องถิ่น", "本地新闻", "Местные"),
    subcategory: L("Accidents", "อุบัติเหตุ", "事故", "ДТП"),
  },
  "local-news/infrastructure": {
    label: L("Roads & Utilities", "ถนน & สาธารณูปโภค", "道路与公用事业", "Дороги"),
    description: L(
      "Infrastructure, roads, and utility updates",
      "โครงสร้างพื้นฐาน ถนน และสาธารณูปโภค",
      "基建、道路与公用事业",
      "Инфраструктура",
    ),
    category: L("Local News", "ข่าวท้องถิ่น", "本地新闻", "Местные"),
    subcategory: L("Roads & Utilities", "ถนน & สาธารณูปโภค", "道路与公用事业", "Дороги"),
  },
  "tourism/attractions": {
    label: L("Attractions", "สถานที่ท่องเที่ยว", "景点", "Достопримечательности"),
    description: L(
      "Tourism news about Pattaya attractions",
      "ข่าวท่องเที่ยวสถานที่ในพัทยา",
      "芭提雅景点旅游资讯",
      "Туризм и достопримечательности",
    ),
    category: L("Tourism News", "ข่าวท่องเที่ยว", "旅游新闻", "Туризм"),
    subcategory: L("Attractions", "สถานที่ท่องเที่ยว", "景点", "Места"),
  },
  "tourism/promotions": {
    label: L("Promotions", "โปรโมชัน", "促销", "Акции"),
    description: L(
      "Hotel and restaurant promotions in Pattaya",
      "โปรโรงแรมและร้านอาหารในพัทยา",
      "芭提雅酒店与餐饮优惠",
      "Акции отелей и ресторанов",
    ),
    category: L("Tourism News", "ข่าวท่องเที่ยว", "旅游新闻", "Туризм"),
    subcategory: L("Promotions", "โปรโมชัน", "促销", "Акции"),
  },
  "business/hotels": {
    label: L("Hotel Industry", "อุตสาหกรรมโรงแรม", "酒店业", "Отели"),
    description: L(
      "Hotel industry news and developments",
      "ข่าวและแนวโน้มอุตสาหกรรมโรงแรม",
      "酒店业动态",
      "Новости отельного сектора",
    ),
    category: L("Business News", "ข่าวธุรกิจ", "商业新闻", "Бизнес"),
    subcategory: L("Hotel Industry", "โรงแรม", "酒店业", "Отели"),
  },
  "business/real-estate": {
    label: L("Property Market", "ตลาดอสังหา", "房产市场", "Недвижимость"),
    description: L(
      "Real estate and property market updates",
      "อัปเดตตลาดอสังหาริมทรัพย์",
      "房地产市场动态",
      "Рынок недвижимости",
    ),
    category: L("Business News", "ข่าวธุรกิจ", "商业新闻", "Бизнес"),
    subcategory: L("Property Market", "อสังหา", "房产", "Недвижимость"),
  },
  "business/openings": {
    label: L("New Businesses", "ธุรกิจเปิดใหม่", "新店开业", "Новый бизнес"),
    description: L(
      "New business openings in Pattaya",
      "ร้านและธุรกิจเปิดใหม่ในพัทยา",
      "芭提雅新店与开业",
      "Открытия в Паттайе",
    ),
    category: L("Business News", "ข่าวธุรกิจ", "商业新闻", "Бизнес"),
    subcategory: L("New Businesses", "เปิดใหม่", "新店", "Открытия"),
  },
  "expat/visa": {
    label: L("Visa News", "ข่าววีซ่า", "签证新闻", "Визы"),
    description: L(
      "Visa regulations and updates for expats",
      "กฎและอัปเดตวีซ่าสำหรับชาวต่างชาติ",
      "外籍人士签证政策与动态",
      "Визовые новости",
    ),
    category: L("Expat News", "ข่าวชาวต่างชาติ", "外籍资讯", "Expat"),
    subcategory: L("Visa News", "วีซ่า", "签证", "Визы"),
  },
  "expat/immigration": {
    label: L("Immigration Updates", "อัปเดตตรวจคนเข้าเมือง", "移民动态", "Immigration"),
    description: L(
      "Immigration office news and policy changes",
      "ข่าวและนโยบายตรวจคนเข้าเมือง",
      "移民局新闻与政策变化",
      "Новости Immigration",
    ),
    category: L("Expat News", "ข่าวชาวต่างชาติ", "外籍资讯", "Expat"),
    subcategory: L("Immigration Updates", "ตม.", "移民", "Immigration"),
  },
  "expat/tax-legal": {
    label: L("Tax & Legal", "ภาษี & กฎหมาย", "税务与法律", "Налоги и право"),
    description: L(
      "Tax and legal updates for residents",
      "อัปเดตภาษีและกฎหมายสำหรับผู้อยู่อาศัย",
      "居民税务与法律资讯",
      "Налоги и право",
    ),
    category: L("Expat News", "ข่าวชาวต่างชาติ", "外籍资讯", "Expat"),
    subcategory: L("Tax & Legal", "ภาษี & กฎหมาย", "税务法律", "Налоги"),
  },
  "nightlife/walking-street": {
    label: L("Walking Street", "Walking Street", "Walking Street", "Walking Street"),
    description: L(
      "Walking Street news and nightlife updates",
      "ข่าว Walking Street และไนท์ไลฟ์",
      "Walking Street 与夜生活动态",
      "Walking Street",
    ),
    category: L("Nightlife", "ไนท์ไลฟ์", "夜生活", "Ночная жизнь"),
    subcategory: L("Walking Street", "Walking Street", "Walking Street", "Walking Street"),
  },
  "nightlife/clubs-bars": {
    label: L("Clubs & Bars", "คลับ & บาร์", "俱乐部与酒吧", "Клубы"),
    description: L(
      "Nightlife updates from clubs and bars",
      "อัปเดตจากคลับและบาร์",
      "俱乐部与酒吧动态",
      "Клубы и бары",
    ),
    category: L("Nightlife", "ไนท์ไลฟ์", "夜生活", "Ночная жизнь"),
    subcategory: L("Clubs & Bars", "คลับ & บาร์", "俱乐部酒吧", "Клубы"),
  },
  "sports/muay-thai": {
    label: L("Muay Thai", "มวยไทย", "泰拳", "Muay Thai"),
    description: L(
      "Muay Thai events and news in Pattaya",
      "ข่าวและงานมวยไทยในพัทยา",
      "芭提雅泰拳赛事与新闻",
      "Muay Thai",
    ),
    category: L("Sports", "กีฬา", "体育", "Спорт"),
    subcategory: L("Muay Thai", "มวยไทย", "泰拳", "Muay Thai"),
  },
  "sports/golf": {
    label: L("Golf", "กอล์ฟ", "高尔夫", "Гольф"),
    description: L(
      "Golf news and tournaments in the region",
      "ข่าวกอล์ฟและทัวร์นาเมนต์ในภูมิภาค",
      "本地区高尔夫新闻与赛事",
      "Гольф",
    ),
    category: L("Sports", "กีฬา", "体育", "Спорт"),
    subcategory: L("Golf", "กอล์ฟ", "高尔夫", "Гольф"),
  },
  "international/global": {
    label: L("Pattaya in World News", "พัทยาในข่าวโลก", "国际媒体报道", "Мировые СМИ"),
    description: L(
      "International media coverage of Pattaya",
      "สื่อต่างประเทศรายงานพัทยา",
      "国际媒体对芭提雅的报道",
      "Мировая пресса о Паттайе",
    ),
    category: L("International", "ข่าวต่างประเทศ", "国际", "Международные"),
    subcategory: L("Global Media", "สื่อโลก", "全球媒体", "Мировые СМИ"),
  },
};

export function getNewsNavCopy(lang: LanguageCode, slug: string) {
  const copy = newsNav[slug];
  if (!copy) return null;
  return {
    label: t(lang, copy.label),
    description: t(lang, copy.description),
    category: t(lang, copy.category),
    subcategory: t(lang, copy.subcategory),
  };
}

export function localizeNewsNavItem(lang: LanguageCode, item: NavItem): NavItem {
  const copy = getNewsNavCopy(lang, item.slug);
  if (!copy) return item;
  return {
    ...item,
    label: copy.label,
    description: copy.description,
    category: copy.category,
    subcategory: copy.subcategory,
  };
}
