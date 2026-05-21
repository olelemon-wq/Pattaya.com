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
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={titleEn}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {badge && (
          <span className="absolute left-3 top-3 rounded-full bg-[#FF7320] px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
            {badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-center gap-1 text-sm font-semibold text-[#0A192F]">
          <Star className="h-4 w-4 fill-[#FBBF24] text-[#FBBF24]" aria-hidden />
          <span>{rating}</span>
        </div>
        <h3 className="mt-2 text-base font-bold leading-snug text-[#0A192F]">
          {title}
        </h3>
        <p className="mt-1 text-xs text-[#777777]">{titleEn}</p>
        <p className="mt-3 text-sm font-semibold text-[#2563EB]">
          เริ่มต้น THB {price.toLocaleString("th-TH")} / ท่าน
        </p>
        <Link
          href={href}
          className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-[#FF7320] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#e56518] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7320]"
        >
          Book Now
        </Link>
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
    <article className="flex gap-4 rounded-xl border border-[#e2e8f0] bg-white p-3 shadow-sm sm:p-4">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg sm:h-24 sm:w-24">
        <Image src={image} alt="" fill className="object-cover" sizes="96px" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <h4 className="font-bold text-[#0A192F]">{name}</h4>
        <p className="mt-1 line-clamp-2 text-sm text-[#777777]">{blurb}</p>
        <Link
          href={href}
          className="mt-auto pt-2 text-sm font-semibold text-[#2563EB] hover:text-[#1d4ed8] hover:underline"
        >
          ดูโปรโมชั่นพิเศษ →
        </Link>
      </div>
    </article>
  );
}

export function KohLarnPage() {
  return (
    <div data-full-bleed className="bg-[#F8FAFC] font-sans text-[#0A192F]">
      {/* Hero */}
      <section
        className="relative min-h-[min(85vh,640px)] overflow-hidden"
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
          className="absolute inset-0 bg-gradient-to-br from-[#0A192F]/90 via-[#0A192F]/70 to-[#2563EB]/75"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[min(85vh,640px)] max-w-[1280px] flex-col justify-end px-4 pb-28 pt-24 sm:px-6 sm:pb-32">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/80 sm:text-sm">
              <li>
                <Link href="/explore" className="hover:text-white">
                  Explore
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span className="text-white">Islands</span>
              </li>
            </ol>
          </nav>
          <h1
            id="koh-larn-hero-title"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Koh Larn | เกาะล้าน
          </h1>
          <p className="mt-3 max-w-2xl text-base italic text-white/95 sm:text-lg">
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
      <div className="relative z-10 mx-auto -mt-16 max-w-[960px] px-4 sm:-mt-20 sm:px-6">
        <form
          className="rounded-2xl border border-white/40 bg-white/90 p-5 shadow-xl backdrop-blur-md sm:p-6"
          action="/explore"
          method="get"
          aria-label="ค้นหาทัวร์ด่วน"
        >
          <p className="text-sm font-bold text-[#0A192F] sm:text-base">
            ค้นหาทัวร์ด่วน{" "}
            <span className="font-normal text-[#777777]">
              (Quick Tour Search)
            </span>
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_1fr_auto] sm:gap-4">
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-[#777777]">
                เลือกประเภทกิจกรรม
              </span>
              <select
                name="activity"
                defaultValue="snorkeling"
                className="rounded-lg border border-[#e2e8f0] bg-white px-3 py-2.5 text-[#0A192F] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30"
              >
                {activityOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-[#777777]">เลือกวันที่</span>
              <input
                type="date"
                name="date"
                className="rounded-lg border border-[#e2e8f0] bg-white px-3 py-2.5 text-[#0A192F] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30"
              />
            </label>
            <button
              type="submit"
              className="h-fit self-end rounded-lg bg-[#FF7320] px-6 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-[#e56518] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7320] sm:py-3"
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
              className="text-2xl font-bold text-[#0A192F] sm:text-3xl"
            >
              รู้จักเกาะล้านใน 1 นาที
            </h2>
            <p className="mt-1 text-sm text-[#777777]">About Koh Larn</p>
            <p className="mt-4 leading-relaxed text-[#444748]">
              เกาะล้านอยู่ห่างจากชายฝั่งพัทยาเพียงไม่กี่กิโลเมตร
              เป็นจุดหมายยอดนิยมสำหรับทริปวันเดียว — น้ำทะเลใส หาดทรายขาว
              และกิจกรรมทางน้ำหลากหลาย ตั้งแต่ดำน้ำตื้น เจ็ทสกี
              ไปจนถึงทัวร์รอบเกาะ เดินทางสะดวกด้วยเรือจากท่าเรือแหลมบาลีฮาย
              เหมาะกับทั้งครอบครัว กลุ่มเพื่อน และนักท่องเที่ยวที่ต้องการพักผ่อนใกล้กรุงเทพฯ
            </p>
          </div>
          <aside className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#0A192F]">ข้อมูลสำคัญ</h3>
            <ul className="mt-4 space-y-4 text-sm text-[#444748]">
              <li className="flex gap-3">
                <span className="text-lg" aria-hidden>
                  🚢
                </span>
                <span>
                  <strong className="text-[#0A192F]">การเดินทาง:</strong>{" "}
                  เรือสปีดโบ๊ท 15 นาที / เรือใหญ่ 30–45 นาที จากแหลมบาลีฮาย
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-lg" aria-hidden>
                  ☀️
                </span>
                <span>
                  <strong className="text-[#0A192F]">ช่วงเวลาแนะนำ:</strong>{" "}
                  พฤศจิกายน – เมษายน (คลื่นลมสงบ น้ำใสที่สุด)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-lg" aria-hidden>
                  🛵
                </span>
                <span>
                  <strong className="text-[#0A192F]">ยานพาหนะบนเกาะ:</strong>{" "}
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
                className="text-2xl font-bold text-[#0A192F] sm:text-3xl"
              >
                ทัวร์ & กิจกรรมแนะนำ
              </h2>
              <p className="mt-1 text-sm text-[#777777]">
                Highlighted Tours & Activities — จองออนไลน์ได้ทันที
              </p>
            </div>
            <Link
              href="/explore"
              className="text-sm font-semibold text-[#2563EB] hover:underline"
            >
              ดูทัวร์ทั้งหมด →
            </Link>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
            className="text-2xl font-bold text-[#0A192F] sm:text-3xl"
          >
            ร้านอาหาร & ที่พักแนะนำบนเกาะล้าน
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-[#2563EB]">
                กินที่ไหนดี? (Where to Eat)
              </h3>
              <div className="mt-4 space-y-4">
                {restaurants.map((place) => (
                  <DirectoryCard key={place.name} {...place} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2563EB]">
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
