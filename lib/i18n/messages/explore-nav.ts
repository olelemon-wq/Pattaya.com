import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import type { NavItem } from "@/lib/navigation/types";

type NavCopy = {
  label: ReturnType<typeof L>;
  description: ReturnType<typeof L>;
  category: ReturnType<typeof L>;
  subcategory: ReturnType<typeof L>;
};

const exploreNav: Record<string, NavCopy> = {
  beaches: {
    label: L("Main Beaches", "ชายหาดหลัก", "主要海滩", "Главные пляжи"),
    description: L(
      "Pattaya's main beaches and what to expect",
      "ชายหาดหลักของพัทยาและสิ่งที่ควรรู้",
      "芭提雅主要海滩及游玩指南",
      "Главные пляжи Паттайи и что ожидать",
    ),
    category: L("Beaches", "ชายหาด", "海滩", "Пляжи"),
    subcategory: L("Main Beaches", "ชายหาดหลัก", "主要海滩", "Главные пляжи"),
  },
  "islands/koh-larn": {
    label: L("Koh Larn", "เกาะล้าน", "格兰岛", "Ко Лан"),
    description: L(
      "Island day trips and activities at Koh Larn",
      "ทริปวันเดียวและกิจกรรมบนเกาะล้าน",
      "格兰岛一日游与岛上活动",
      "Однодневные поездки и активности на Ко Лан",
    ),
    category: L("Islands", "เกาะ", "岛屿", "Острова"),
    subcategory: L("Koh Larn", "เกาะล้าน", "格兰岛", "Ко Лан"),
  },
  "restaurants/fine-dining": {
    label: L("Fine Dining", "ร้านอาหารหรู", "精致餐饮", "Изысканная кухня"),
    description: L(
      "Luxury dining experiences in Pattaya",
      "ประสบการณ์รับประทานอาหารระดับพรีเมียมในพัทยา",
      "芭提雅高端餐饮体验",
      "Роскошные рестораны Паттайи",
    ),
    category: L("Restaurants", "ร้านอาหาร", "餐厅", "Рестораны"),
    subcategory: L("Fine Dining", "อาหารหรู", "精致餐饮", "Премиум"),
  },
  "restaurants/street-food": {
    label: L("Street Food", "อาหารท้องถิ่น", "街头美食", "Уличная еда"),
    description: L(
      "Best local and street food in Pattaya",
      "อาหารท้องถิ่นและสตรีทฟู้ดที่ดีที่สุดในพัทยา",
      "芭提雅最佳本地与街头美食",
      "Лучшая местная и уличная еда Паттайи",
    ),
    category: L("Restaurants", "ร้านอาหาร", "餐厅", "Рестораны"),
    subcategory: L("Street Food", "อาหารท้องถิ่น", "街头美食", "Уличная еда"),
  },
  cafes: {
    label: L("Specialty Coffee", "คาเฟ่", "精品咖啡", "Кофе"),
    description: L(
      "Cafes and specialty coffee spots",
      "คาเฟ่และร้านกาแฟพิเศษในพัทยา",
      "咖啡馆与精品咖啡好去处",
      "Кафе и specialty coffee в Паттайе",
    ),
    category: L("Cafes", "คาเฟ่", "咖啡馆", "Кафе"),
    subcategory: L("Specialty Coffee", "กาแฟพิเศษ", "精品咖啡", "Specialty coffee"),
  },
  "shopping/malls": {
    label: L("Shopping Malls", "ห้าง", "购物中心", "Торговые центры"),
    description: L(
      "Malls and shopping centers in Pattaya",
      "ห้างสรรพสินค้าและศูนย์การค้าในพัทยา",
      "芭提雅商场与购物中心",
      "Торговые центры и моллы Паттайи",
    ),
    category: L("Shopping", "ช้อปปิ้ง", "购物", "Шопинг"),
    subcategory: L("Shopping Malls", "ห้าง", "购物中心", "ТЦ"),
  },
  "shopping/markets": {
    label: L("Local Markets", "ตลาด", "本地市场", "Местные рынки"),
    description: L(
      "Markets and local shopping experiences",
      "ตลาดและประสบการณ์ช้อปปิ้งท้องถิ่น",
      "市场与本地购物体验",
      "Рынки и местный шопинг",
    ),
    category: L("Shopping", "ช้อปปิ้ง", "购物", "Шопинг"),
    subcategory: L("Local Markets", "ตลาด", "本地市场", "Рынки"),
  },
  "family-activities": {
    label: L("Family Activities", "กิจกรรมครอบครัว", "亲子活动", "Семейный отдых"),
    description: L(
      "Kid-friendly activities and family outings",
      "กิจกรรมเหมาะสำหรับเด็กและครอบครัว",
      "适合儿童与全家的活动",
      "Развлечения для детей и семьи",
    ),
    category: L("Family Activities", "กิจกรรมครอบครัว", "亲子活动", "Семья"),
    subcategory: L("Kids Activities", "กิจกรรมเด็ก", "儿童活动", "Для детей"),
  },
  "luxury/yacht": {
    label: L("Yacht & Marina", "เรือยอร์ช", "游艇与码头", "Яхты и марина"),
    description: L(
      "Yacht charters and marina experiences",
      "เช่าเรือยอร์ชและประสบการณ์ที่ท่าเรือ",
      "游艇租赁与码头体验",
      "Аренда яхт и марина",
    ),
    category: L("Luxury", "ลักซ์ชัวรี", "奢华", "Люкс"),
    subcategory: L("Yacht & Marina", "เรือยอร์ช", "游艇码头", "Яхты"),
  },
  "hidden-gems": {
    label: L("Going deeper", "เริ่มรู้ลึก", "深入了解", "Глубже"),
    description: L(
      "Pattaya, going deeper — hidden spots off the main strip",
      "พัทยาฉบับคนเริ่มรู้ลึก — จุดลับนอกเส้นทางหลัก",
      "芭提雅深入了解——主路以外的秘境",
      "Паттайя глубже — вне главных маршрутов",
    ),
    category: L("Going deeper", "เริ่มรู้ลึก", "深入了解", "Глубже"),
    subcategory: L("Hidden gems", "จุดลับ", "秘境", "Секретные места"),
  },
  wellness: {
    label: L("Spa & Massage", "สปา นวด", "水疗与按摩", "Спа и массаж"),
    description: L(
      "Wellness, spa, and massage recommendations",
      "แนะนำสปา นวด และสุขภาพความงาม",
      "水疗、按摩与健康养生推荐",
      "Спа, массаж и wellness",
    ),
    category: L("Wellness", "สุขภาพ", "健康养生", "Wellness"),
    subcategory: L("Spa & Massage", "สปา นวด", "水疗按摩", "Спа"),
  },
};

export function getExploreNavCopy(lang: LanguageCode, slug: string) {
  const copy = exploreNav[slug];
  if (!copy) return null;
  return {
    label: t(lang, copy.label),
    description: t(lang, copy.description),
    category: t(lang, copy.category),
    subcategory: t(lang, copy.subcategory),
  };
}

export function localizeExploreNavItem(lang: LanguageCode, item: NavItem): NavItem {
  const copy = getExploreNavCopy(lang, item.slug);
  if (!copy) return item;
  return {
    ...item,
    label: copy.label,
    description: copy.description,
    category: copy.category,
    subcategory: copy.subcategory,
  };
}
