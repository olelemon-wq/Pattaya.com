import Image from "next/image";
import Link from "next/link";
import { businessImages } from "@/lib/design/business-images";

const setupCards = [
  {
    title: "Pattaya Company Incorporation",
    excerpt:
      "Your gateway to the Eastern Economic Corridor (EEC). Complete legal frameworks for local and international entities with full regulatory compliance.",
    image: businessImages.incorporation,
    imageAlt: "Pattaya Company Incorporation",
    cta: "ติดต่อสำนักงานกฎหมาย",
    href: "/business/company-setup/thai-company",
    features: [
      "จดทะเบียนนิติบุคคลและใบอนุญาตทำงาน (Work Permit)",
      "บริการจัดหาสำนักงานเสมือนและพื้นที่ทำงาน",
      "ที่ปรึกษากฎหมายและการบัญชีสากล",
    ],
  },
  {
    title: "สิทธิประโยชน์ BOI & EEC",
    excerpt:
      "ยกระดับความสามารถในการแข่งขันและสิทธิพิเศษทางภาษีสำหรับการลงทุนในโครงการยุทธศาสตร์ชาติ พร้อมสิทธิประโยชน์ในการถือครองอสังหาริมทรัพย์",
    image: businessImages.boiEec,
    imageAlt: "สิทธิประโยชน์ BOI & EEC",
    cta: "บริการปรึกษาด้านการขอสิทธิ BOI",
    href: "/business/company-setup/boi",
    features: [
      "จดทะเบียนนิติบุคคลและใบอนุญาตทำงาน (Work Permit)",
      "บริการจัดหาสำนักงานเสมือนและพื้นที่ทำงาน",
      "ที่ปรึกษากฎหมายและการบัญชีสากล",
    ],
  },
];

type IndustryGuide = {
  title: string;
  badge: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  checklist: string[];
  cta: string;
  href: string;
  variant: "light" | "dark";
  badgePosition?: "top" | "bottom";
};

const industryGuides: IndustryGuide[] = [
  {
    title: "Restaurant Guide",
    badge: "Hot Industry",
    excerpt:
      "การเปิดร้านอาหารและคาเฟ่ลักชูรี: การเลือกทำเล และมาตรฐานความปลอดภัยทางอาหารระดับสากล",
    image: businessImages.restaurant,
    imageAlt: "Luxury Restaurant",
    checklist: ["Health Permit Checklist", "Alcohol License Guide"],
    cta: "ดาวน์โหลดคู่มือฉบับเต็ม",
    href: "/business/guide/restaurant",
    variant: "light",
  },
  {
    title: "Bar & Nightlife",
    badge: "Elite Zone",
    excerpt:
      "การบริหารจัดการสถานบันเทิง: ข้อกำหนดทางกฎหมายด้านเสียงและเวลาเปิด-ปิดตามกฎหมายใหม่",
    image: businessImages.nightlife,
    imageAlt: "Nightlife",
    checklist: ["Zoning Regulations", "Music Copyright Info"],
    cta: "นัดคุยที่ปรึกษา",
    href: "/business/guide/bar",
    variant: "dark",
  },
  {
    title: "Hotel Industry",
    badge: "High ROI",
    excerpt:
      "การลงทุนในอสังหาริมทรัพย์เพื่อการท่องเที่ยว: ใบอนุญาตโรงแรมและมาตรฐานการบริการระดับ 5 ดาว",
    image: businessImages.hotel,
    imageAlt: "Luxury Hotel Lobby",
    checklist: ["EIA Standards", "Hotel License Flow"],
    cta: "ดาวน์โหลดคู่มือฉบับเต็ม",
    href: "/business/guide/hotel",
    variant: "light",
    badgePosition: "bottom",
  },
];

const economyStats = [
  { icon: "👥", value: "12M+", label: "Annual Visitors" },
  { icon: "📈", value: "+18%", label: "Real Estate Growth (YoY)" },
  { icon: "💰", value: "฿1.3T", label: "EEC Investment Value" },
  { icon: "🏗️", value: "200+", label: "Infrastructure Projects" },
  { icon: "📊", value: "14%", label: "EEC GDP Share (Thailand)" },
  { icon: "🏭", value: "30+", label: "Industrial Estates Zones" },
];

const networkingEvents = [
  {
    day: "24",
    month: "OCT",
    year: "2024",
    title: "Pattaya EEC Investment Summit",
    location: "Royal Cliff Grand Hotel, Pattaya",
    href: "/business/networking/events",
  },
  {
    day: "12",
    month: "NOV",
    year: "2024",
    title: "Business After Hours: Networking Night",
    location: "Hilton Pattaya - Horizon Rooftop",
    href: "/business/networking/events",
  },
  {
    day: "05",
    month: "DEC",
    year: "2024",
    title: "Digital Nomad & Tech Hub Conference",
    location: "Pattaya City Hall - Convention Center",
    href: "/business/networking/events",
  },
];

function SetupCard({
  title,
  excerpt,
  image,
  imageAlt,
  features,
  cta,
  href,
}: (typeof setupCards)[number]) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-[#c4c7c8]/30 bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)]">
      <div className="aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          width={800}
          height={500}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-grow flex-col p-8">
        <span className="mb-6 inline-block w-fit rounded-full border border-[#c4c7c8]/30 bg-[#edeeef] px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#444748]">
          Elite Service
        </span>
        <h3 className="mb-6 text-2xl font-bold text-[#455f88]">{title}</h3>
        <p className="mb-8 text-[#444748]">{excerpt}</p>
        <ul className="mb-8 flex-grow space-y-4">
          {features.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm font-bold text-[#191c1d]"
            >
              <span className="text-[#191c1d]" aria-hidden>
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Link
          href={href}
          className="w-full rounded-xl border-2 border-[#455f88] py-4 text-center font-bold text-[#455f88] transition-all hover:bg-[#455f88] hover:text-white"
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}

function IndustryGuideCard({
  title,
  badge,
  excerpt,
  image,
  imageAlt,
  checklist,
  cta,
  href,
  variant,
  badgePosition = "top",
}: IndustryGuide) {
  return (
    <div className="group overflow-hidden rounded-xl border border-[#c4c7c8]/30 bg-white transition-all duration-500 hover:border-[#B8860B]/30 hover:shadow-[0_20px_50px_rgba(184,134,11,0.08)]">
      <div
        className={`relative h-64 overflow-hidden ${variant === "dark" ? "flex items-center justify-center bg-slate-900" : ""}`}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          className={`object-cover transition-transform duration-1000 group-hover:scale-105 ${variant === "dark" ? "opacity-50" : ""}`}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {variant === "dark" && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <span
              className="relative z-10 text-[56px] opacity-40 text-white"
              aria-hidden
            >
              🌙
            </span>
          </>
        )}
        <span
          className={`absolute rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md ${
            badgePosition === "bottom"
              ? "bottom-6 right-6 bg-[#B8860B]"
              : "left-6 top-6"
          }`}
        >
          {badge}
        </span>
      </div>
      <div className="p-10">
        <h4 className="mb-4 text-2xl font-bold text-[#455f88]">{title}</h4>
        <p className="mb-10 text-sm leading-relaxed text-[#444748] opacity-80">
          {excerpt}
        </p>
        <div className="mb-10 space-y-4">
          {checklist.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 text-[13px] font-semibold text-[#455f88]"
            >
              <span className="text-xl text-[#B8860B]" aria-hidden>
                ✓
              </span>
              {item}
            </div>
          ))}
        </div>
        <Link
          href={href}
          className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#455f88] py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-[#455f88]/10 transition-all hover:bg-[#455f88]/90"
        >
          {cta}
          <span aria-hidden>{variant === "dark" ? "💬" : "⬇"}</span>
        </Link>
      </div>
    </div>
  );
}

export function BusinessHubPage() {
  return (
    <div data-full-bleed className="bg-[#f8f9fa] text-[#191c1d]">
      {/* Hero */}
      <section className="relative flex min-h-[700px] h-[90vh] w-full items-center overflow-hidden">
        <Image
          src={businessImages.hero}
          alt="Pattaya Business Hub"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 md:px-16">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-white backdrop-blur-md">
              <span aria-hidden>🏅</span>
              <span className="text-[12px] font-bold uppercase tracking-[0.2em]">
                Premium Business Hub
              </span>
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] text-white md:text-6xl">
              Pattaya Business Gateway:
              <br />
              <span className="bg-gradient-to-br from-[#B8860B] to-[#E2B04E] bg-clip-text text-transparent">
                ลงทุนและเติบโตไปกับพัทยา
              </span>
            </h1>
            <p className="max-w-xl text-xl leading-relaxed text-white/80">
              เชื่อมต่อคุณเข้าสู่ศูนย์กลางทางธุรกิจระดับภูมิภาค
              กับโอกาสการลงทุนใน EEC และอุตสาหกรรมท่องเที่ยวระดับลักชูรี
            </p>
            <div className="flex flex-col gap-5 pt-4 sm:flex-row">
              <Link
                href="/business/company-setup/thai-company"
                className="flex items-center justify-center gap-3 rounded-full bg-[#ae2f34] px-8 py-5 text-lg font-semibold text-white shadow-2xl shadow-[#ae2f34]/20 transition-all hover:scale-105"
              >
                ปรึกษาผู้เชี่ยวชาญ / ขอคำแนะนำทางธุรกิจฟรี
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/business/investment/real-estate"
                className="rounded-full border border-white/30 bg-white/10 px-8 py-5 text-lg font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
              >
                ดูแคตตาล็อกโครงการ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Setup */}
      <section className="relative bg-white py-20 md:py-[100px]">
        <div className="mx-auto max-w-[1280px] px-5 md:px-16">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-[#455f88] md:text-5xl">
              ก้าวแรกสู่ความสำเร็จในพัทยา
            </h2>
            <p className="text-lg text-[#444748]">
              บริการที่ปรึกษาแบบครบวงจร ตั้งแต่การจดทะเบียนบริษัทไปจนถึงการขอรับสิทธิประโยชน์ทางภาษีสูงสุดในเขตพัฒนาพิเศษภาคตะวันออก
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {setupCards.map((card) => (
              <SetupCard key={card.href} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Industry Guides */}
      <section className="relative bg-[#f8f9fa] py-20 md:py-[100px]">
        <div className="mx-auto max-w-[1280px] px-5 md:px-16">
          <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
            <div className="max-w-2xl">
              <span className="mb-4 block text-sm font-bold uppercase tracking-[0.3em] text-[#B8860B]">
                Strategic Intelligence
              </span>
              <h2 className="mb-4 text-4xl font-bold italic text-[#455f88] md:text-5xl">
                เจาะลึกอุตสาหกรรมดาวรุ่ง
              </h2>
              <p className="border-l-2 border-[#B8860B] pl-6 text-lg italic text-[#444748]">
                คู่มือบริหารจัดการธุรกิจเฉพาะทาง
                พร้อมเช็คลิสต์ใบอนุญาตที่จำเป็นสำหรับนักลงทุนในพื้นที่พัทยา
              </p>
            </div>
            <Link
              href="/business/guide/restaurant"
              className="group flex items-center gap-3 pb-1 text-sm font-bold uppercase tracking-widest text-[#455f88] transition-all hover:text-[#B8860B]"
            >
              ดูคู่มือทั้งหมด
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {industryGuides.map((guide) => (
              <IndustryGuideCard key={guide.href} {...guide} />
            ))}
          </div>
        </div>
      </section>

      {/* Investment & Economy */}
      <section className="relative overflow-hidden bg-[#455f88] py-20 md:py-[100px]">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#ae2f34]/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-5 md:px-16">
          <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
            <div>
              <h2 className="mb-10 text-4xl font-bold leading-tight text-white">
                สถิติและความเติบโต
                <br />
                <span className="text-[#ffb3b0]">ทางเศรษฐกิจพัทยา</span>
              </h2>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-8">
                  {economyStats.map((stat) => (
                    <div key={stat.label} className="group space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl" aria-hidden>
                          {stat.icon}
                        </span>
                        <div className="text-3xl font-bold text-white">
                          {stat.value}
                        </div>
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                        {stat.label}
                      </p>
                      <div className="h-0.5 w-8 bg-[#ae2f34] transition-all duration-500 group-hover:w-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] bg-white p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
              <div className="group relative mb-8 overflow-hidden rounded-2xl">
                <Image
                  src={businessImages.investment}
                  alt="Investment Spotlight"
                  width={800}
                  height={320}
                  className="h-80 w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-8">
                  <div className="space-y-1">
                    <span className="mb-2 inline-block rounded-full bg-[#ae2f34] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                      Special Project
                    </span>
                    <h4 className="text-xl font-bold text-white">
                      EEC Investment Spotlight: Laem Chabang Phase 3
                    </h4>
                  </div>
                </div>
              </div>
              <div className="px-4 pb-4">
                <h4 className="mb-4 text-2xl font-semibold text-[#455f88]">
                  Real Estate Opportunity
                </h4>
                <p className="mb-10 leading-relaxed text-[#444748]">
                  เข้าถึงพอร์ตการลงทุนอสังหาริมทรัพย์ระดับพรีเมียม
                  ทั้งคอนโดมิเนียมติดทะเลและวิลล่าตากอากาศหรู
                  พร้อมผลตอบแทนที่มั่นคง
                </p>
                <Link
                  href="/business/investment/real-estate"
                  className="block w-full rounded-2xl border-2 border-[#455f88] py-5 text-center font-bold text-[#455f88] shadow-lg transition-all hover:bg-[#455f88] hover:text-white hover:shadow-[#455f88]/20"
                >
                  ติดต่อพาร์ทเนอร์เอเจนท์
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/business/investment/economy"
              className="text-sm font-bold uppercase tracking-widest text-white/80 transition-colors hover:text-white"
            >
              ดูภาพรวมเศรษฐกิจพัทยา →
            </Link>
          </div>
        </div>
      </section>

      {/* Networking Events */}
      <section className="bg-white py-20 md:py-[100px]">
        <div className="mx-auto max-w-[1280px] px-5 md:px-16">
          <div className="mb-16 flex items-center gap-5">
            <h2 className="text-4xl font-bold text-[#455f88]">
              ตารางกิจกรรมเครือข่ายธุรกิจ
            </h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#c4c7c8]/30 bg-[#f3f4f5]">
            {networkingEvents.map((event, i) => (
              <div
                key={event.title}
                className={`group flex flex-col items-center bg-white p-8 transition-all hover:bg-[#edeeef] md:flex-row ${
                  i < networkingEvents.length - 1
                    ? "border-b border-[#c4c7c8]/30"
                    : ""
                }`}
              >
                <div className="flex min-w-[140px] flex-col items-center justify-center border-[#c4c7c8]/30 pb-6 md:border-r md:pb-0 md:pr-10">
                  <span className="text-5xl font-bold leading-none text-[#ae2f34]">
                    {event.day}
                  </span>
                  <div className="mt-1 flex flex-col items-center">
                    <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#455f88]">
                      {event.month}
                    </span>
                    <span className="text-[11px] text-[#444748]">
                      {event.year}
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex-grow text-center md:mt-0 md:px-12 md:text-left">
                  <h5 className="mb-3 text-2xl font-bold text-[#455f88]">
                    {event.title}
                  </h5>
                  <p className="flex items-center justify-center gap-2 text-sm font-medium text-[#444748] opacity-80 md:justify-start">
                    <span aria-hidden>📍</span>
                    {event.location}
                  </p>
                </div>
                <div className="mt-8 md:mt-0">
                  <Link
                    href={event.href}
                    className="whitespace-nowrap rounded-full bg-[#455f88] px-10 py-3.5 text-sm font-bold tracking-wide text-white shadow-md transition-all hover:bg-[#455f88]/90 hover:shadow-lg"
                  >
                    ลงทะเบียนล่วงหน้า
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#002A78] px-5 py-20 md:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col items-center justify-between gap-10 rounded-3xl p-10 shadow-2xl md:flex-row md:p-14" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
            <div className="max-w-xl text-center lg:text-left">
              <h3 className="mb-3 text-3xl font-semibold text-white">
                ไม่พลาดทุกโอกาสการลงทุนในพัทยา
              </h3>
              <p className="text-white/80">
                รับข้อมูลข่าวสารทางธุรกิจและรายงานวิเคราะห์เศรษฐกิจพัทยารายสัปดาห์
                ส่งตรงถึงอีเมลคุณ
              </p>
            </div>
            <form className="flex w-full flex-col gap-4 sm:flex-row lg:w-auto">
              <input
                type="email"
                placeholder="อีเมลของคุณ"
                className="min-w-0 flex-1 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-white transition-all placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#ae2f34] sm:min-w-[320px]"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-2xl bg-[#ae2f34] px-10 py-4 font-bold text-white transition-all hover:bg-[#ce4749]"
              >
                สมัครสมาชิก
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
