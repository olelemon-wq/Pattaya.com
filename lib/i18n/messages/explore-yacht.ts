import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import { getExploreCommon } from "@/lib/i18n/messages/explore-common";
import { yachtImages } from "@/lib/design/yacht-images";

export function getYachtPage(lang: LanguageCode) {
  const c = getExploreCommon(lang);
  return {
    breadcrumb: { explore: c.explore, luxury: c.luxury, current: t(lang, L("Yacht & Marina", "เรือยอร์ช & มารีน่า", "游艇与码头", "Яхты и марина")) },
    hero: {
      badge: c.luxury,
      title: t(lang, L("Yacht & Marina", "เรือยอร์ช & มารีน่า", "游艇与码头", "Яхты")),
      subtitle: t(lang, L("Yacht charters", "เรือยอร์ช", "游艇包船", "Чартеры")),
      body: t(
        lang,
        L(
          "Yacht charters and marina experiences in Pattaya — for discerning travelers and private celebrations.",
          "เช่าเรือยอร์ชและมารีน่าในพัทยา — สำหรับนักเดินทางและงานฉลองส่วนตัว",
          "芭提雅游艇包船与码头体验。",
          "Чартеры и марины Паттайи.",
        ),
      ),
    },
    carousel: {
      title: t(lang, L("Featured charters", "เรือยอร์ชแนะนำ", "精选包船", "Чартеры")),
      description: t(
        lang,
        L(
          "Premium yacht rentals in Pattaya Bay — catamaran afternoons to superyacht itineraries.",
          "เช่าเรือหรูในอ่าวพัทยา — ตั้งแต่คาตามารันถึงซูเปอร์ยอร์ช",
          "芭提雅湾高端游艇租赁。",
          "Аренда яхт в заливе Паттайи.",
        ),
      ),
      prev: t(lang, L("Previous charters", "เรือก่อนหน้า", "上一艘", "Назад")),
      next: t(lang, L("Next charters", "เรือถัดไป", "下一艘", "Далее")),
    },
    charters: [
      {
        id: "azure-catamaran",
        name: t(lang, L("Azure Spirit Catamaran", "อาซัวร์ สปิริต คาตามารัน", "Azure Spirit 双体船", "Azure Spirit")),
        nameTh: "",
        type: t(lang, L("Catamaran", "คาตามารัน", "双体船", "Катамаран")),
        guests: t(lang, L("Max 15 guests", "สูงสุด 15 คน", "最多 15 人", "до 15 гостей")),
        price: t(lang, L("From THB 45,000 / charter", "จาก ฿45,000 / ครั้ง", "起 45,000 泰铢/次", "от 45 000 бат")),
        excerpt: t(
          lang,
          L(
            "Twin-hull sailing with shaded decks — ideal for groups and calm Gulf afternoons.",
            "เรือสองท้อง มีระเบียงร่ม — เหมาะกับกลุ่มและทะเลสงบ",
            "双体船带遮阳甲板，适合团体。",
            "Катамаран с теневыми палубами.",
          ),
        ),
        tags: [
          t(lang, L("Featured", "แนะนำ", "精选", "Избранное")),
          t(lang, L("Catamaran", "คาตามารัน", "双体船", "Катамаран")),
          t(lang, L("Sunset", "พระอาทิตย์ตก", "日落", "Закат")),
        ],
        image: yachtImages.charterCatamaran,
      },
      {
        id: "pearl-motor",
        name: t(lang, L("Pattaya Pearl Motor Yacht", "พัทยา เพิร์ล มอเตอร์ยอร์ช", "Pattaya Pearl 机动游艇", "Pattaya Pearl")),
        nameTh: "",
        type: t(lang, L("Motor yacht", "มอเตอร์ยอร์ช", "机动游艇", "Моторная яхта")),
        guests: t(lang, L("Max 12 guests", "สูงสุด 12 คน", "最多 12 人", "до 12")),
        price: t(lang, L("From THB 68,000 / charter", "จาก ฿68,000", "起 68,000 泰铢", "от 68 000")),
        excerpt: t(
          lang,
          L(
            "Fast island hops with air-conditioned saloon — Koh Larn in a day.",
            "วิ่งเกาะเร็ว ห้องแอร์ — เกาะล้านในวันเดียว",
            "空调舱室，一日格兰岛跳岛。",
            "Острова за один день.",
          ),
        ),
        tags: [
          t(lang, L("Motor yacht", "มอเตอร์ยอร์ช", "机动游艇", "Моторная")),
          t(lang, L("Speed", "เร็ว", "快速", "Скорость")),
          t(lang, L("Islands", "เกาะ", "岛屿", "Острова")),
        ],
        image: yachtImages.charterMotor,
      },
      {
        id: "royal-horizon",
        name: t(lang, L("Royal Horizon Superyacht", "รอยัล ฮอไรซัน", "Royal Horizon 超级游艇", "Royal Horizon")),
        nameTh: "",
        type: t(lang, L("Superyacht", "ซูเปอร์ยอร์ช", "超级游艇", "Суперяхта")),
        guests: t(lang, L("Max 20 guests", "สูงสุด 20 คน", "最多 20 人", "до 20")),
        price: t(lang, L("From THB 120,000 / charter", "จาก ฿120,000", "起 120,000", "от 120 000")),
        excerpt: t(
          lang,
          L(
            "Full crew, premium catering, private cabins for corporate and milestone trips.",
            "ลูกเรือครบ เคtering หรู ห้องส่วนตัวสำหรับงานบริษัท",
            "全船员、餐饮与舱室，适合企业与庆典。",
            "Экипаж и каюты VIP.",
          ),
        ),
        tags: [
          t(lang, L("Superyacht", "ซูเปอร์ยอร์ช", "超级游艇", "Суперяхта")),
          t(lang, L("VIP", "VIP", "VIP", "VIP")),
          t(lang, L("Catering", "จัดเลี้ยง", "餐饮", "Кейтеринг")),
        ],
        image: yachtImages.charterSuperyacht,
      },
    ],
    routes: {
      title: t(lang, L("Popular cruise routes", "เส้นทางยอดนิยม", "热门航线", "Маршруты")),
      subtitle: t(lang, L("Curated sailing experiences", "เส้นทางคัดสรร", "精选航程", "Маршруты")),
      items: [
        {
          title: t(lang, L("Sunset Cruise", "ล่องเรือชมพระอาทิตย์ตก", "日落巡航", "Закат")),
          duration: t(lang, L("3 hours", "3 ชม.", "3 小时", "3 ч")),
          description: t(
            lang,
            L("Golden-hour sailing with champagne along Pattaya Bay.", "ล่องเรือยามเย็นพร้อมแชมเปญ", "芭提雅湾日落香槟巡航。", "Закат в заливе."),
          ),
          href: "/explore/beaches",
        },
        {
          title: t(lang, L("Koh Khram Private Escape", "ทริปส่วนตัวเกาะคราม", "Koh Khram 私人之旅", "Koh Khram")),
          duration: t(lang, L("Full day", "เต็มวัน", "全天", "Весь день")),
          description: t(
            lang,
            L("Snorkeling and beach picnic for VIP groups.", "ดำน้ำและปิกนิกชายหาด", "浮潜与海滩野餐。", "Сноркелинг и пикник."),
          ),
          href: "/explore/islands/koh-larn",
        },
        {
          title: t(lang, L("Koh Larn Adventure", "ผจญภัยเกาะล้าน", "格兰岛探险", "Ко Лан")),
          duration: t(lang, L("6–8 hours", "6–8 ชม.", "6–8 小时", "6–8 ч")),
          description: t(
            lang,
            L("Island-hopping with water toys and lunch at sea.", "เกาะฮอป กิจกรรมทางน้ำ อาหารกลางวันบนเรือ", "跳岛、水上玩具与海上午餐。", "Острова и обед."),
          ),
          href: "/explore/islands/koh-larn",
        },
      ],
    },
    marina: {
      eyebrow: t(lang, L("Marina Infrastructure", "โครงสร้างมารีน่า", "码头设施", "Марина")),
      title: t(lang, L("World-class marina facilities", "สิ่งอำนวยความสะดวกระดับโลก", "世界级码头", "Марина мирового класса")),
      body: t(
        lang,
        L(
          "Deep-water berths, concierge, fuel dock, and waterfront dining for charter guests.",
          "ท่าเรือน้ำลึก คอนเซียร์จ น้ำมัน และร้านอาหารริมน้ำ",
          "深水泊位、礼宾、加油与滨水餐饮。",
          "Причалы, консьерж, топливо.",
        ),
      ),
      amenities: [
        t(lang, L("Deep-water berths up to 45m", "ท่าน้ำลึกถึง 45 ม.", "深水泊位至 45 米", "Причалы до 45 м")),
        t(lang, L("24/7 security & concierge", "รักษาความปลอดภัย 24 ชม.", "24 小时安保", "24/7 безопасность")),
        t(lang, L("Fuel dock & technical services", "น้ำมัน & บริการเทคนิค", "加油与技术服务", "Топливо и сервис")),
        t(lang, L("Crew lounge & provisioning", "ห้องลูกเรือ & จัดเสบียง", "船员休息室与补给", "Экипаж и провизия")),
        t(lang, L("Luxury retail & waterfront dining", "ร้านหรู & ดินเนอร์ริมน้ำ", "精品零售与滨水餐饮", "Рестораны у воды")),
      ],
    },
    cta: {
      title: t(lang, L("Plan your private charter", "วางแผนเช่าเรือส่วนตัว", "规划私人包船", "Чартер")),
      body: t(
        lang,
        L("Corporate events, weddings, bespoke itineraries — partners respond within 24 hours.", "งานบริษัท งานแต่ง ไอตินเนอรี่ — ตอบภายใน 24 ชม.", "企业活动、婚礼与定制行程。", "Ответ за 24 часа."),
      ),
      button: t(lang, L("Contact for charter", "ติดต่อเช่าเรือ", "联系包船", "Связаться")),
      href: "/explore",
    },
  };
}
