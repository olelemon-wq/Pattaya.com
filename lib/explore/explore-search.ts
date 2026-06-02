/** Explore hub search — keyword → page. Keywords cover EN / TH / ZH / RU variants. */
export type ExploreSearchEntry = {
  href: string;
  keywords: string[];
};

export type ExploreSearchSuggestion = {
  href: string;
  label: string;
  score: number;
};

export const exploreSearchIndex: ExploreSearchEntry[] = [
  {
    href: "/explore/beaches",
    keywords: [
      "beach",
      "beaches",
      "ชายหาด",
      "หาด",
      "海滩",
      "пляж",
      "main beaches",
      "ชายหาดหลัก",
    ],
  },
  {
    href: "/explore/beaches/pattaya-beach",
    keywords: [
      "pattaya beach",
      "หาดพัทยา",
      "walking street",
      "วอล์กกิ้ง",
      "beach road",
    ],
  },
  {
    href: "/explore/beaches/jomtien",
    keywords: ["jomtien", "จอมเทียน", "หาดจอมเทียน", "仲天", "джомтьен"],
  },
  {
    href: "/explore/beaches/dongtan",
    keywords: ["dongtan", "dong tan", "หาดดองตัน", "ดองตัน", "东坦"],
  },
  {
    href: "/explore/beaches/naklua",
    keywords: ["naklua", "หนองปรือ", "นาเกลือ", "หาดนาเกลือ", "那库鲁阿"],
  },
  {
    href: "/explore/beaches/wongamat",
    keywords: ["wongamat", "วงศ์อมาตย์", "หาดวงศ์อมาตย์", "旺阿玛"],
  },
  {
    href: "/explore/beaches/pratumnak",
    keywords: ["pratumnak", "พระตำหนัก", "หาดพระตำหนัก", "帕塔姆纳克"],
  },
  {
    href: "/explore/islands/koh-larn",
    keywords: [
      "koh larn",
      "ko lan",
      "kolan",
      "เกาะล้าน",
      "ล้าน",
      "格兰岛",
      "колан",
      "island hopping",
      "ทัวร์เกาะ",
      "ferry",
      "เรือเกาะ",
      "bali hai",
      "บาลีไฮ",
    ],
  },
  {
    href: "/explore/restaurants/fine-dining",
    keywords: [
      "fine dining",
      "michelin",
      "ร้านหรู",
      "อาหารหรู",
      "fine-dining",
      "高端",
      "роoftop",
      "rooftop",
      "ดาดฟ้า",
    ],
  },
  {
    href: "/explore/restaurants/street-food",
    keywords: [
      "street food",
      "อาหารข้างทาง",
      "street-food",
      "thepprasit",
      "เทพประสิทธิ์",
      "ตลาดโต้รุ่ง",
      "night market food",
      "小吃",
    ],
  },
  {
    href: "/explore/cafes",
    keywords: [
      "cafe",
      "cafes",
      "coffee",
      "คาเฟ่",
      "กาแฟ",
      "咖啡馆",
      "кофе",
      "specialty coffee",
      "sunset coffee",
      "albatross",
      "sheeva",
      "lunar beach house",
      "jomtien cafe",
    ],
  },
  {
    href: "/explore/shopping/malls",
    keywords: [
      "mall",
      "malls",
      "shopping mall",
      "ห้าง",
      "เซ็นทรัล",
      "central",
      "terminal 21",
      "เทอร์มินอล",
      "商场",
      "шопинг",
    ],
  },
  {
    href: "/explore/shopping/markets",
    keywords: [
      "market",
      "markets",
      "night market",
      "ตลาด",
      "ตลาดนัด",
      "ตลาดโต้รุ่ง",
      "thepprasit market",
      "floating market",
      "ตลาดน้ำ",
      "市场",
      "夜市",
    ],
  },
  {
    href: "/explore/family-activities",
    keywords: [
      "family",
      "kids",
      "children",
      "ครอบครัว",
      "เด็ก",
      "กิจกรรมครอบครัว",
      "water park",
      "สวนน้ำ",
      "tiger park",
      "nong nooch",
      "หนองนooch",
      "亲子",
      "семья",
    ],
  },
  {
    href: "/explore/luxury/yacht",
    keywords: [
      "yacht",
      "marina",
      "charter",
      "boat",
      "เรือ",
      "ยอร์ช",
      "เช่าเรือ",
      "ล่องเรือ",
      "ocean marina",
      "catamaran",
      "คาตามารัน",
      "游艇",
      "яхта",
    ],
  },
  {
    href: "/explore/hidden-gems",
    keywords: [
      "hidden",
      "secret",
      "gems",
      "จุดลับ",
      "ที่ลับ",
      "秘境",
      "скрыт",
      "viewpoint",
      "จุดชมวิว",
      "เริ่มรู้ลึก",
      "รู้ลึก",
      "going deeper",
      "พัทยาฉบับ",
      "บางเสร่",
      "bang saray",
      "cave beach",
      "white house cafe",
      "เขาชีจรรย์",
      "sky mountain",
      "เจ๊ตุ้ม",
      "ครัวป้าติ๊ด",
    ],
  },
  {
    href: "/explore/wellness",
    keywords: [
      "spa",
      "massage",
      "wellness",
      "สปา",
      "นวด",
      "เวลเนส",
      "康养",
      "массаж",
      "health land",
      "onsen",
      "ออนเซ็น",
      "yunomori",
      "oasis spa",
      "cliff spa",
      "tea tree",
      "let's relax",
      "ปราณิตา",
      "ไทยสบาย",
    ],
  },
];

function normalizeQuery(raw: string): string {
  return raw.trim().toLowerCase().replace(/\s+/g, " ");
}

function scoreKeyword(query: string, keyword: string): number {
  const k = keyword.toLowerCase();
  if (!query || !k) return 0;
  if (query === k) return 100;
  if (k.startsWith(query) || query.startsWith(k)) return 60;
  if (query.length >= 2 && k.includes(query)) return 45;
  if (k.length >= 3 && query.includes(k)) return 35;
  return 0;
}

export function findExploreSearchHref(query: string): string | null {
  const [first] = getExploreSearchSuggestions(query, 1);
  return first?.href ?? null;
}

export function getExploreSearchSuggestions(query: string, limit = 6): ExploreSearchSuggestion[] {
  const q = normalizeQuery(query);
  if (!q) return [];

  const bestByHref = new Map<string, ExploreSearchSuggestion>();

  for (const entry of exploreSearchIndex) {
    for (const keyword of entry.keywords) {
      const score = scoreKeyword(q, keyword);
      if (score < 35) continue;

      const current = bestByHref.get(entry.href);
      if (!current || score > current.score || (score === current.score && keyword.length < current.label.length)) {
        bestByHref.set(entry.href, { href: entry.href, label: keyword, score });
      }
    }
  }

  return [...bestByHref.values()]
    .sort((a, b) => b.score - a.score || a.label.length - b.label.length)
    .slice(0, limit);
}
