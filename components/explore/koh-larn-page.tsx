import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { MapPin, Ship, Sparkles, Star, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { KohLarnBeachGuide } from "@/components/explore/koh-larn-beach-guide";
import { kohLarnImages } from "@/lib/design/koh-larn-images";

const tours = [
  {
    title: "ทัวร์ดำน้ำตื้นเกาะล้าน + รถรับส่งแหลมบาลีฮาย",
    titleEn: "Snorkeling + Bali Hai Transfer",
    image: kohLarnImages.snorkeling,
    rating: 4.8,
    price: 890,
    badge: "Best Seller",
    href: "/explore",
  },
  {
    title: "ทัวร์รอบเกาะล้านครึ่งวัน",
    titleEn: "Half-Day Island Tour",
    image: kohLarnImages.islandTour,
    rating: 4.7,
    price: 650,
    href: "/explore",
  },
  {
    title: "เจ็ทสกี & กิจกรรมทางน้ำหาดตาแหวน",
    titleEn: "Jet Ski & Water Sports",
    image: kohLarnImages.jetski,
    rating: 4.6,
    price: 1200,
    href: "/explore",
  },
  {
    title: "พาราเซลลิ่งชมวิวเกาะล้าน",
    titleEn: "Parasailing with Island Views",
    image: kohLarnImages.parasailing,
    rating: 4.9,
    price: 1500,
    href: "/explore",
  },
];

const restaurants = [
  {
    name: "ร้านอาหารทะเลริมหาดตาแหวน",
    blurb: "อาหารทะเลสด วิวทะเล — เหมาะกับมื้อเที่ยงหลังลงเรือ",
    image: kohLarnImages.restaurant,
    href: "/explore/restaurants/fine-dining",
  },
  {
    name: "คาเฟ่ชมวิวหาดเทียน",
    blurb: "เครื่องดื่มและของว่าง บรรยากาศชิลล์ริมชายหาด",
    image: kohLarnImages.beachTien,
    href: "/explore/cafes",
  },
];

const stays = [
  {
    name: "รีสอร์ทริมหาดเทียน",
    blurb: "ที่พักบนเกาะ ใกล้ชายหาด — จองล่วงหน้าในช่วงสุดสัปดาห์",
    image: kohLarnImages.hotel,
    href: "/explore",
  },
  {
    name: "บังกะโลริมทะเล",
    blurb: "ประหยัด สะดวกเดินทาง — เหมาะกับนักเที่ยวแบบไปเช้าเย็นกลับ",
    image: kohLarnImages.beachNual,
    href: "/explore",
  },
];

const activityOptions = [
  { value: "snorkeling", label: "ดำน้ำ" },
  { value: "jetski", label: "เจ็ทสกี" },
  { value: "rental", label: "รถเช่า" },
  { value: "island-tour", label: "ทัวร์รอบเกาะ" },
];

function QuickInfoBadge({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm ring-1 ring-white/25">
      <Icon className="h-4 w-4 shrink-0" aria-hidden />
      {text}
    </span>
  );
}

type TourCardProps = (typeof tours)[number];

function TourCard({
  title,
  titleEn,
  image,
  rating,
  price,
  badge,
  href,
}: TourCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#c4c7c8]/30 bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={titleEn}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {badge && (
          <span className="absolute left-3 top-3 rounded-full bg-[#ae2f34] px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
            {badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex flex-1 flex-col">
          <div className="flex items-center gap-1 text-sm font-semibold text-[#191c1d]">
            <Star className="h-4 w-4 fill-[#FBBF24] text-[#FBBF24]" aria-hidden />
            <span>{rating}</span>
          </div>
          <h3 className="mt-2 text-base font-bold leading-snug text-[#191c1d]">
            {title}
          </h3>
          <p className="mt-1 text-xs text-[#747878]">{titleEn}</p>
        </div>
        <div className="mt-4 shrink-0">
          <p className="text-sm font-semibold text-[#B52E88]">
            เริ่มต้น THB {price.toLocaleString("th-TH")} / ท่าน
          </p>
          <Link
            href={href}
            className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-[#B52E88] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#B52E88]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B52E88]"
          >
            Book Now
          </Link>
        </div>
      </div>
    </article>
  );
}

function DirectoryCard({
  name,
  blurb,
  image,
  href,
}: {
  name: string;
  blurb: string;
  image: string;
  href: string;
}) {
  return (
    <article className="flex gap-4 rounded-xl border border-[#c4c7c8]/30 bg-white p-3 shadow-sm sm:p-4">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg sm:h-24 sm:w-24">
        <Image src={image} alt="" fill className="object-cover" sizes="96px" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <h4 className="font-bold text-[#191c1d]">{name}</h4>
        <p className="mt-1 line-clamp-2 text-sm text-[#444748]">{blurb}</p>
        <Link
          href={href}
          className="mt-auto pt-2 text-sm font-semibold text-[#B52E88] hover:underline"
        >
          ดูโปรโมชั่นพิเศษ →
        </Link>
      </div>
    </article>
  );
}

export function KohLarnPage() {
  return (
    <div data-full-bleed className="bg-[#fdf8fb] text-[#191c1d]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="explore" />
      </div>

      {/* Hero */}
      <section
        className="relative min-h-[min(75vh,560px)] overflow-hidden"
        aria-labelledby="koh-larn-hero-title"
      >
        <Image
          src={kohLarnImages.hero}
          alt="Panoramic view of Koh Larn island"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#191c1d]/70 via-[#191c1d]/50 to-[#191c1d]/85"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[min(75vh,560px)] max-w-[1280px] flex-col justify-end px-5 pb-28 pt-20 md:px-16 md:pb-32">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/80 sm:text-sm">
              <li>
                <Link href="/explore" className="hover:text-white">
                  Explore
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span className="text-white/80">Islands</span>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span className="text-white">Koh Larn</span>
              </li>
            </ol>
          </nav>
          <span className="mb-3 inline-flex w-fit rounded-full bg-[#F0D4E8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B52E88]">
            Islands
          </span>
          <h1
            id="koh-larn-hero-title"
            className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            Koh Larn
          </h1>
          <p className="mt-2 text-lg text-[#F5D0E8] md:text-xl">เกาะล้าน</p>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
            Island day trips and activities at Koh Larn — สัมผัสทะเลใส
            หาดทรายขาว และกิจกรรมสุดเอกซ์คลูซีฟใกล้กรุง
          </p>
          <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">
            <QuickInfoBadge icon={MapPin} text="8 Main Beaches" />
            <QuickInfoBadge icon={Ship} text="30 mins from Pattaya" />
            <QuickInfoBadge icon={Sparkles} text="Top Destination" />
          </div>
        </div>
      </section>

      {/* Quick booking — overlaps hero */}
      <div className="relative z-10 mx-auto -mt-16 max-w-[960px] px-5 sm:-mt-20 md:px-16">
        <form
          className="rounded-2xl border border-[#c4c7c8]/30 bg-white/95 p-5 shadow-xl backdrop-blur-md sm:p-6"
          action="/explore"
          method="get"
          aria-label="ค้นหาทัวร์ด่วน"
        >
          <p className="text-sm font-bold text-[#191c1d] sm:text-base">
            ค้นหาทัวร์ด่วน{" "}
            <span className="font-normal text-[#747878]">
              (Quick Tour Search)
            </span>
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_1fr_auto] sm:gap-4">
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-[#747878]">
                เลือกประเภทกิจกรรม
              </span>
              <select
                name="activity"
                defaultValue="snorkeling"
                className="rounded-lg border border-[#c4c7c8]/50 bg-white px-3 py-2.5 text-[#191c1d] focus:border-[#B52E88] focus:outline-none focus:ring-2 focus:ring-[#B52E88]/20"
              >
                {activityOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-[#747878]">เลือกวันที่</span>
              <input
                type="date"
                name="date"
                className="rounded-lg border border-[#c4c7c8]/50 bg-white px-3 py-2.5 text-[#191c1d] focus:border-[#B52E88] focus:outline-none focus:ring-2 focus:ring-[#B52E88]/20"
              />
            </label>
            <button
              type="submit"
              className="h-fit self-end rounded-xl bg-[#B52E88] px-6 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-[#B52E88]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B52E88] sm:py-3"
            >
              ปุ่มค้นหาทัวร์
            </button>
          </div>
        </form>
      </div>

      <div className="mx-auto max-w-[1280px] space-y-12 px-4 py-12 sm:px-6 sm:py-16">
        {/* About */}
        <section
          className="grid gap-8 lg:grid-cols-2 lg:items-start"
          aria-labelledby="about-koh-larn"
        >
          <div>
            <h2
              id="about-koh-larn"
              className="text-2xl font-semibold text-[#191c1d] md:text-3xl"
            >
              รู้จักเกาะล้านใน 1 นาที
            </h2>
            <p className="mt-1 text-sm text-[#747878]">About Koh Larn</p>
            <p className="mt-4 leading-relaxed text-[#444748]">
              เกาะล้านอยู่ห่างจากชายฝั่งพัทยาเพียงไม่กี่กิโลเมตร
              เป็นจุดหมายยอดนิยมสำหรับทริปวันเดียว — น้ำทะเลใส หาดทรายขาว
              และกิจกรรมทางน้ำหลากหลาย ตั้งแต่ดำน้ำตื้น เจ็ทสกี
              ไปจนถึงทัวร์รอบเกาะ เดินทางสะดวกด้วยเรือจากท่าเรือแหลมบาลีฮาย
              เหมาะกับทั้งครอบครัว กลุ่มเพื่อน และนักท่องเที่ยวที่ต้องการพักผ่อนใกล้กรุงเทพฯ
            </p>
          </div>
          <aside className="rounded-2xl border border-[#c4c7c8]/30 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#191c1d]">ข้อมูลสำคัญ</h3>
            <ul className="mt-4 space-y-4 text-sm text-[#444748]">
              <li className="flex gap-3">
                <span className="text-lg" aria-hidden>
                  🚢
                </span>
                <span>
                  <strong className="text-[#191c1d]">การเดินทาง:</strong>{" "}
                  เรือสปีดโบ๊ท 15 นาที / เรือใหญ่ 30–45 นาที จากแหลมบาลีฮาย
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-lg" aria-hidden>
                  ☀️
                </span>
                <span>
                  <strong className="text-[#191c1d]">ช่วงเวลาแนะนำ:</strong>{" "}
                  พฤศจิกายน – เมษายน (คลื่นลมสงบ น้ำใสที่สุด)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-lg" aria-hidden>
                  🛵
                </span>
                <span>
                  <strong className="text-[#191c1d]">ยานพาหนะบนเกาะ:</strong>{" "}
                  เช่ามอเตอร์ไซค์ หรือ รถสองแถวประจำทาง
                </span>
              </li>
            </ul>
          </aside>
        </section>

        {/* Tours */}
        <section aria-labelledby="tours-title">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2
                id="tours-title"
                className="text-2xl font-semibold text-[#191c1d] md:text-3xl"
              >
                ทัวร์ & กิจกรรมแนะนำ
              </h2>
              <p className="mt-1 text-sm text-[#747878]">
                Highlighted Tours & Activities — จองออนไลน์ได้ทันที
              </p>
            </div>
            <Link
              href="/explore"
              className="text-sm font-semibold text-[#B52E88] hover:underline"
            >
              ดูทัวร์ทั้งหมด →
            </Link>
          </div>
          <div className="mt-6 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tours.map((tour) => (
              <TourCard key={tour.titleEn} {...tour} />
            ))}
          </div>
        </section>

        <KohLarnBeachGuide />

        {/* Directory */}
        <section aria-labelledby="directory-title">
          <h2
            id="directory-title"
            className="text-2xl font-semibold text-[#191c1d] md:text-3xl"
          >
            ร้านอาหาร & ที่พักแนะนำบนเกาะล้าน
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-[#B52E88]">
                กินที่ไหนดี? (Where to Eat)
              </h3>
              <div className="mt-4 space-y-4">
                {restaurants.map((place) => (
                  <DirectoryCard key={place.name} {...place} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#B52E88]">
                พักที่ไหนดี? (Where to Stay)
              </h3>
              <div className="mt-4 space-y-4">
                {stays.map((place) => (
                  <DirectoryCard key={place.name} {...place} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
