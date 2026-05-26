import { LivingFaqSection } from "@/components/living/living-faq-section";
import { LivingPageShell } from "@/components/living/living-page-shell";
import { livingImages } from "@/lib/design/living-images";
import { livingTheme } from "@/lib/design/living-theme";
import { AlertTriangle, ShieldCheck } from "lucide-react";
import Link from "next/link";

const scams = [
  {
    title: "Fake property & deposit fraud",
    titleTh: "หลอกขายอสังหาฯ / มัดจำ",
    body: "Listings on social media with below-market prices, pressure to wire deposits offshore, or no juristic-person quota letter. Never pay before Land Office verification.",
  },
  {
    title: '"Express" visa & stamp agents',
    titleTh: "ตัวแทนวีซ่าด่วน",
    body: "Unlicensed brokers promise guaranteed extensions or Elite membership without official receipts. Use Immigration or accredited law firms only.",
  },
  {
    title: "Offshore investment & crypto ATMs",
    titleTh: "ลงทุน / ตู้ crypto",
    body: "High-return schemes and street-corner crypto kiosks with poor rates or card skimmers. Stick to licensed banks and regulated exchanges.",
  },
  {
    title: "Jet-ski & beach rental damage",
    titleTh: "เจ็ทสกี / เช่าอุปกรณ์ชายหาด",
    body: "Operators claim pre-existing damage after you return equipment. Photograph condition, agree price in writing, use licensed vendors only.",
  },
  {
    title: "Romance & online transfer scams",
    titleTh: "หลอกโอนเงินออนไลน์",
    body: "Dating-app contacts ask for emergency transfers abroad. Tourist Police Pattaya reports rising cases — never send money to unmet contacts.",
  },
  {
    title: "Taxi & baht-bus overcharging",
    titleTh: "แท็กซี่ / สองแถวเก็บเกิน",
    body: "Refuse meters-off taxis at airport zones; agree songthaew fare before boarding at night. Grab/Bolt give upfront pricing.",
  },
  {
    title: "Bar bill & entertainment scams",
    titleTh: "บิลบาร์ / โชว์",
    body: "Drink prices not shown, companions ordering expensive bottles, or threats over inflated tabs. Ask for menu prices upfront; pay at bar only.",
  },
];

const essentials = [
  "Use licensed real estate agencies with registered company documents.",
  "Verify visa advice at Chonburi Immigration — not sidewalk agents.",
  "Screenshot Grab/Bolt trip details; save rental contracts and condo TM30 copies.",
  "Report crimes to Tourist Police 1155 (English) and keep case numbers for embassy.",
];

const faqs = [
  {
    id: "report",
    question: "Where do I report a scam in Pattaya?",
    questionTh: "แจ้งความที่ไหน?",
    answer:
      "Tourist Police 1155 for English support; dial 191 for immediate threats. Visit the Tourist Police office on Second Road for written reports needed by banks or embassy.",
  },
  {
    id: "money",
    question: "Can I recover money sent to a scammer?",
    questionTh: "ขอเงินคืนได้ไหม?",
    answer:
      "Recovery is difficult once transferred overseas. Report quickly with bank receipts; banks may freeze accounts if notified within hours. Prevention is far more effective.",
  },
  {
    id: "rental",
    question: "How do I avoid rental deposit fraud?",
    questionTh: "หลีกเลี่ยงโกงค่ามัดจำเช่า?",
    answer:
      "Sign bilingual leases, photograph move-in condition, confirm landlord TM30 filing, and never wire full year deposits to personal accounts without company registration checks.",
  },
];

export function ScamAlertsPage() {
  return (
    <LivingPageShell
      heroImage={livingImages.scamAlerts}
      heroAlt="Pattaya tourist police and safety advisory"
      badge="Safety"
      breadcrumbLeaf="Scam Alerts"
      title="Scam Alerts | การโกงนักท่องเที่ยว"
      subtitle="Common Pattaya scams targeting expats and tourists — how to spot them, avoid losses, and where to report."
      ctaEyebrow="Safety Alert"
      ctaTitle="Save Tourist Police 1155"
      ctaBody="Add 1155 and 191 to your phone favorites before you need them — English-speaking officers assist residents and visitors."
      ctaButton="Emergency contacts"
      ctaHref="/living/safety/emergency-guide"
      ctaAriaLabel="Emergency safety contacts"
      bottomTitle="Need emergency numbers?"
      bottomBody="Hospital ER, fire, ambulance, and step-by-step crisis protocols for Pattaya."
      bottomPrimary={{ label: "Emergency guide", href: "/living/safety/emergency-guide" }}
      bottomSecondary={{ label: "Hospitals →", href: "/living/healthcare/hospitals" }}
    >
      <section
        className="rounded-2xl border border-[#ae2f34]/25 bg-[#ae2f34]/5 p-6 sm:p-8"
        aria-labelledby="scam-intro"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ae2f34] text-white">
            <AlertTriangle className="h-6 w-6" aria-hidden />
          </div>
          <div>
            <h2 id="scam-intro" className={livingTheme.headingSm}>
              Stay alert in Pattaya
            </h2>
            <p className={`mt-2 ${livingTheme.body}`}>
              Pattaya is generally safe for residents, but high tourist turnover attracts
              repeat scams — especially around Beach Road, Walking Street, and online property
              groups. If a deal feels rushed or secretive, walk away.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="scam-list-title">
        <h2 id="scam-list-title" className={livingTheme.heading}>
          Common scams
        </h2>
        <p className={`mt-1 ${livingTheme.muted}`}>รูปแบบการโกงที่พบบ่อย</p>
        <ul className="mt-6 space-y-4">
          {scams.map((scam) => (
            <li
              key={scam.title}
              className="rounded-xl border border-[#ae2f34]/20 bg-white p-5 shadow-sm transition hover:border-[#ae2f34]/40"
            >
              <h3 className="font-bold text-[#8c1520]">{scam.title}</h3>
              <p className="text-xs font-medium text-[#ae2f34]">{scam.titleTh}</p>
              <p className={`mt-2 ${livingTheme.body}`}>{scam.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section
        className={livingTheme.accentPanel}
        aria-labelledby="scam-essentials-title"
      >
        <div className="flex items-start gap-4">
          <div className={livingTheme.iconBox}>
            <ShieldCheck className="h-6 w-6" aria-hidden />
          </div>
          <div>
            <h2 id="scam-essentials-title" className={livingTheme.headingSm}>
              Safety essentials
            </h2>
            <p className={`mt-1 ${livingTheme.muted}`}>สิ่งที่ควรทำเป็นประจำ</p>
            <ul className={`mt-4 list-inside list-disc space-y-2 ${livingTheme.body}`}>
              {essentials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm">
              <Link
                href="/living/housing/rentals"
                className="font-bold text-[#B29475] hover:underline"
              >
                Rental checklist →
              </Link>
              {" · "}
              <Link
                href="/living/culture/etiquette"
                className="font-bold text-[#B29475] hover:underline"
              >
                Cultural do&apos;s & don&apos;ts →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <LivingFaqSection faqs={faqs} subtitle="คำถามที่พบบ่อย — Scam Alerts" />
    </LivingPageShell>
  );
}
