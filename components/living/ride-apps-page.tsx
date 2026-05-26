import { LivingFaqSection } from "@/components/living/living-faq-section";
import { LivingPageShell } from "@/components/living/living-page-shell";
import { livingImages } from "@/lib/design/living-images";
import { livingTheme } from "@/lib/design/living-theme";
import {
  Car,
  CreditCard,
  MapPin,
  Smartphone,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

const apps = [
  {
    name: "Grab",
    color: "#00B14F",
    tagline: "GrabCar, GrabBike, GrabFood",
    taglineTh: "รถ มอไซค์ ส่งอาหาร",
    body: "Largest network in Pattaya — reliable airport runs to U-Tapao/Suvarnabhumi when booked early. GrabFood covers Jomtien to Naklua.",
    tips: "Enable GrabPay or link card; screenshot trip OTP and plate before boarding.",
  },
  {
    name: "Bolt",
    color: "#0047FF",
    tagline: "Bolt Ride, Bolt Food",
    taglineTh: "รถและอาหาร",
    body: "Often competitive fares on short hops in central Pattaya and Pratumnak. Surge pricing can undercut Grab during off-peak.",
    tips: "Compare both apps for the same route; watch pickup pin on busy Sois.",
  },
];

const features: { icon: LucideIcon; title: string; titleTh: string; text: string }[] = [
  {
    icon: Smartphone,
    title: "Upfront pricing",
    titleTh: "ราคาก่อนเรียก",
    text: "Fare shown before confirm — avoids meter disputes common with unmetered taxis.",
  },
  {
    icon: MapPin,
    title: "Pin pickup carefully",
    titleTh: "ปักหมุดจุดรับ",
    text: "Beach Road and mall entrances have multiple gates; message driver in-app with Soi number.",
  },
  {
    icon: CreditCard,
    title: "Cashless preferred",
    titleTh: "จ่ายผ่านแอป",
    text: "Reduces change scams; keep small cash for tolls or drivers who cancel card trips.",
  },
  {
    icon: UtensilsCrossed,
    title: "Food delivery",
    titleTh: "ส่งอาหาร",
    text: "GrabFood and Bolt Food list English menus — popular for condo residents in Jomtien.",
  },
  {
    icon: Car,
    title: "Airport & intercity",
    titleTh: "สนามบิน",
    text: "Book Grab/Bolt to BKK or U-Tapao 2–3 hours ahead; fixed quotes beat curbside touts.",
  },
];

const fareGuide = [
  { route: "Beach Road → Jomtien", grab: "฿80–140", bolt: "฿70–130", note: "Traffic dependent" },
  { route: "Central Pattaya → Pratumnak", grab: "฿60–100", bolt: "฿55–95", note: "Short hop" },
  { route: "Pattaya → U-Tapao airport", grab: "฿350–500", bolt: "฿320–480", note: "Book ahead" },
  { route: "Pattaya → Suvarnabhumi", grab: "฿1,200–1,600", bolt: "฿1,100–1,550", note: "Toll extra" },
];

const faqs = [
  {
    id: "songthaew",
    question: "Grab vs songthaew — which is cheaper?",
    questionTh: "สองแถวหรือแอปถูกกว่า?",
    answer:
      "Songthaews on fixed corridors cost ฿10–20 per ride. Apps cost more but offer door-to-door AC, tracking, and safety at night. Many residents mix both.",
  },
  {
    id: "cancel",
    question: "Driver cancelled — what now?",
    questionTh: "คนขับยกเลิกทำอย่างไร?",
    answer:
      "Rebook or switch apps. Peak hours (19:00–23:00 Walking Street) have higher cancel rates — move pickup pin to less congested Soi.",
  },
  {
    id: "motorbike",
    question: "Is GrabBike safe?",
    questionTh: "GrabBike ปลอดภัยไหม?",
    answer:
      "Helmets are often provided but quality varies. Wear closed shoes, hold tight, and avoid if uncomfortable in heavy rain. GrabCar is safer for luggage.",
  },
];

export function RideAppsPage() {
  return (
    <LivingPageShell
      heroImage={livingImages.rideApps}
      heroAlt="Ride-hailing app on phone in Pattaya"
      badge="Transportation"
      breadcrumbLeaf="Grab & Bolt"
      title="Grab & Bolt | App เดินทาง"
      subtitle="Ride-hailing and food delivery in Pattaya — fares, safety tips, and when to use apps vs songthaews."
      ctaEyebrow="Ride Apps"
      ctaTitle="Compare live fares before you ride"
      ctaBody="Open Grab and Bolt side-by-side for the same pickup — Pattaya surge varies by zone and time of day."
      ctaButton="Download Grab"
      ctaHref="https://www.grab.com/th/download/"
      ctaAriaLabel="Grab app download"
      bottomTitle="Exploring local transport?"
      bottomBody="Baht buses are cheapest on main corridors; apps win for AC and late nights."
      bottomPrimary={{ label: "Songthaew guide", href: "/living/transportation/songthaew" }}
      bottomSecondary={{ label: "Driving guide →", href: "/living/transportation/driving" }}
    >
      <section aria-labelledby="apps-title">
        <h2 id="apps-title" className={livingTheme.heading}>
          Apps in Pattaya
        </h2>
        <p className={`mt-1 ${livingTheme.muted}`}>แอปที่ใช้บ่อยในพัทยา</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {apps.map((app) => (
            <article
              key={app.name}
              className={`p-6 ${livingTheme.card}`}
            >
              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-lg text-lg font-bold text-white shadow-sm"
                  style={{ backgroundColor: app.color }}
                >
                  {app.name[0]}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0A192F]">{app.name}</h3>
                  <p className="text-xs font-medium text-[#B29475]">{app.taglineTh}</p>
                </div>
              </div>
              <p className="mt-1 text-sm font-semibold text-[#444748]">{app.tagline}</p>
              <p className={`mt-3 ${livingTheme.body}`}>{app.body}</p>
              <p className="mt-3 rounded-lg bg-[#F8FAFC] px-3 py-2 text-xs text-[#444748]">
                <span className="font-bold text-[#B29475]">Tip:</span> {app.tips}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="features-title">
        <h2 id="features-title" className={livingTheme.heading}>
          How to ride safely
        </h2>
        <p className={`mt-1 ${livingTheme.muted}`}>ข้อควรรู้ก่อนเรียกรถ</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, titleTh, text }) => (
            <div key={title} className={`flex gap-4 p-5 ${livingTheme.card}`}>
              <div className={livingTheme.iconBox}>
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-[#0A192F]">{title}</h3>
                <p className="text-xs font-medium text-[#B29475]">{titleTh}</p>
                <p className={`mt-2 ${livingTheme.body}`}>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="fares-title">
        <h2 id="fares-title" className={livingTheme.heading}>
          Indicative fares
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>
          ราคาโดยประมาณ — 2025, ไม่รวม surge (ตรวจในแอปก่อนยืนยัน)
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#D7CBBA]/60 text-xs font-bold uppercase tracking-wide text-[#6b5a48]">
              <tr>
                <th className="px-4 py-3 sm:px-6">Route</th>
                <th className="px-4 py-3 sm:px-6">Grab</th>
                <th className="px-4 py-3 sm:px-6">Bolt</th>
                <th className="hidden px-4 py-3 sm:table-cell sm:px-6">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0] text-[#444748]">
              {fareGuide.map((row) => (
                <tr key={row.route}>
                  <td className="px-4 py-3 font-medium text-[#0A192F] sm:px-6">
                    {row.route}
                  </td>
                  <td className="px-4 py-3 sm:px-6">{row.grab}</td>
                  <td className="px-4 py-3 sm:px-6">{row.bolt}</td>
                  <td className="hidden px-4 py-3 sm:table-cell sm:px-6">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <LivingFaqSection faqs={faqs} subtitle="คำถามที่พบบ่อย — Grab & Bolt" />
    </LivingPageShell>
  );
}
