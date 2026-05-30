import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import type { NavItem } from "@/lib/navigation/types";

type NavCopy = {
  label: ReturnType<typeof L>;
  description: ReturnType<typeof L>;
  category: ReturnType<typeof L>;
  subcategory: ReturnType<typeof L>;
};

const businessNav: Record<string, NavCopy> = {
  "company-setup/thai-company": {
    label: L("Company Registration", "เปิดบริษัท", "公司注册", "Регистрация компании"),
    description: L(
      "How to register a Thai company in Pattaya",
      "วิธีจดทะเบียนบริษัทไทยในพัทยา",
      "如何在芭提雅注册泰资公司",
      "Как зарегистрировать тайскую компанию в Паттайе",
    ),
    category: L("Company Setup", "ตั้งบริษัท", "公司设立", "Регистрация компании"),
    subcategory: L("Thai Company", "บริษัทไทย", "泰资公司", "Тайская компания"),
  },
  "company-setup/boi": {
    label: L("BOI Promotion", "สิทธิ BOI", "BOI 促进", "Льготы BOI"),
    description: L(
      "Board of Investment incentives and application",
      "สิทธิประโยชน์และขั้นตอนยื่นขอ BOI",
      "投资促进委员会优惠与申请流程",
      "Льготы Board of Investment и подача заявки",
    ),
    category: L("Company Setup", "ตั้งบริษัท", "公司设立", "Регистрация компании"),
    subcategory: L("BOI Promotion", "สิทธิ BOI", "BOI 促进", "Льготы BOI"),
  },
  "guide/restaurant": {
    label: L("F&B Business", "เปิดร้านอาหาร", "餐饮商业", "F&B бизнес"),
    description: L(
      "Starting a restaurant business in Pattaya",
      "เริ่มธุรกิจร้านอาหารในพัทยา",
      "在芭提雅开设餐饮生意",
      "Открытие ресторанного бизнеса в Паттайе",
    ),
    category: L("Business Guide", "คู่มือธุรกิจ", "商业指南", "Бизнес-гид"),
    subcategory: L("Restaurant Business", "ธุรกิจร้านอาหาร", "餐饮商业", "Ресторанный бизнес"),
  },
  "guide/bar": {
    label: L("Bar Business", "เปิดบาร์", "酒吧商业", "Барный бизнес"),
    description: L(
      "Opening a bar or nightlife venue",
      "เปิดบาร์หรือสถานบันเทิง",
      "开设酒吧或夜生活场所",
      "Открытие бара или nightlife-заведения",
    ),
    category: L("Business Guide", "คู่มือธุรกิจ", "商业指南", "Бизнес-гид"),
    subcategory: L("Bar Business", "ธุรกิจบาร์", "酒吧商业", "Барный бизнес"),
  },
  "guide/hotel": {
    label: L("Hotel Business", "โรงแรม", "酒店商业", "Отельный бизнес"),
    description: L(
      "Hospitality and hotel investment guide",
      "คู่มือลงทุนและบริหารโรงแรม",
      "酒店业投资与经营指南",
      "Гид по hospitality и инвестициям в отели",
    ),
    category: L("Business Guide", "คู่มือธุรกิจ", "商业指南", "Бизнес-гид"),
    subcategory: L("Hotel Business", "ธุรกิจโรงแรม", "酒店商业", "Отельный бизнес"),
  },
  "investment/real-estate": {
    label: L("Property Investment", "ลงทุนอสังหา", "房产投资", "Инвестиции в недвижимость"),
    description: L(
      "Real estate investment opportunities in Pattaya",
      "โอกาสลงทุนอสังหาริมทรัพย์ในพัทยา",
      "芭提雅房地产投资机遇",
      "Инвестиционные возможности в недвижимости Паттайи",
    ),
    category: L("Investment", "การลงทุน", "投资", "Инвестиции"),
    subcategory: L("Property Investment", "ลงทุนอสังหา", "房产投资", "Недвижимость"),
  },
  "investment/economy": {
    label: L("Pattaya Economy", "เศรษฐกิจพัทยา", "芭提雅经济", "Экономика Паттайи"),
    description: L(
      "Economic overview and trends in Pattaya",
      "ภาพรวมและแนวโน้มเศรษฐกิจพัทยา",
      "芭提雅经济概览与趋势",
      "Экономический обзор и тренды Паттайи",
    ),
    category: L("Investment", "การลงทุน", "投资", "Инвестиции"),
    subcategory: L("Economy", "เศรษฐกิจ", "经济", "Экономика"),
  },
  "networking/events": {
    label: L("Business Networking", "Networking ธุรกิจ", "商务社交", "Business Networking"),
    description: L(
      "Business events and networking opportunities",
      "กิจกรรมธุรกิจและโอกาสสร้างเครือข่าย",
      "商务活动与人脉拓展机会",
      "Деловые мероприятия и возможности для нетворкинга",
    ),
    category: L("Networking", "เครือข่าย", "社交", "Networking"),
    subcategory: L("Business Events", "กิจกรรมธุรกิจ", "商务活动", "Business Events"),
  },
};

export function getBusinessNavCopy(lang: LanguageCode, slug: string) {
  const copy = businessNav[slug];
  if (!copy) return null;
  return {
    label: t(lang, copy.label),
    description: t(lang, copy.description),
    category: t(lang, copy.category),
    subcategory: t(lang, copy.subcategory),
  };
}

export function localizeBusinessNavItem(lang: LanguageCode, item: NavItem): NavItem {
  const copy = getBusinessNavCopy(lang, item.slug);
  if (!copy) return item;
  return {
    ...item,
    label: copy.label,
    description: copy.description,
    category: copy.category,
    subcategory: copy.subcategory,
  };
}
