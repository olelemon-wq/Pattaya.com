import { LivingFaqSection } from "@/components/living/living-faq-section";
import { LivingPageShell } from "@/components/living/living-page-shell";
import { livingImages } from "@/lib/design/living-images";
import Link from "next/link";

const contacts = [
  { service: "Emergency (all services)", number: "1669", note: "Ambulance and rescue coordination" },
  { service: "Tourist Police", number: "1155", note: "English support for visitors and residents" },
  { service: "Police (general)", number: "191", note: "Crime and immediate safety threats" },
  { service: "Fire", number: "199", note: "Fire and rescue" },
  { service: "Bangkok Hospital Pattaya", number: "038 259 999", note: "24/7 ER — North Pattaya" },
  { service: "Phyathai Hospital Pattaya", number: "033 296 999", note: "ER and specialists" },
];

const scenarios = [
  {
    title: "Medical emergency",
    steps: "Call 1669 or taxi to nearest ER with passport. Contact insurer pre-auth if conscious.",
  },
  {
    title: "Traffic accident",
    steps: "Do not leave scene; call 191 and 1669. Photograph vehicles, insurance, and licenses.",
  },
  {
    title: "Theft or assault",
    steps: "Tourist Police 1155 for report in English; keep copy for embassy and insurance.",
  },
  {
    title: "Fire / flood",
    steps: "199 for fire; move to stairwell, alert juristic person in condos.",
  },
];

const faqs = [
  {
    id: "embassy",
    question: "When should I contact my embassy?",
    questionTh: "เมื่อไหร่ควรติดต่อสถานทูต?",
    answer:
      "Serious injury, death, arrest, or lost passport warrant embassy consular assistance. Keep digital passport scans in secure cloud storage.",
  },
  {
    id: "insurance",
    question: "Will hospitals treat me without insurance?",
    questionTh: "ไม่มีประกันรักษาได้ไหม?",
    answer:
      "Emergency care is provided; you may need deposit or payment guarantee for admission. Carry policy hotline numbers.",
  },
];

export function EmergencyGuidePage() {
  return (
    <LivingPageShell
      heroImage={livingImages.safetyGuide}
      heroAlt="Emergency safety guide"
      badge="Safety"
      breadcrumbLeaf="Emergency Guide"
      title="Emergency Guide | วิธีรับมือเหตุฉุกเฉิน"
      subtitle="Emergency services, tourist police, and hospital contacts for safe living in Pattaya."
      ctaEyebrow="Emergency Info"
      ctaTitle="Save contacts to your phone"
      ctaBody="Screenshot this page and share with family — seconds matter in medical and police situations."
      ctaButton="Emergency Info"
      bottomTitle="Stay aware of local scams"
      bottomBody="Prevention beats crisis response — read common Pattaya scam patterns."
      bottomPrimary={{ label: "Scam alerts", href: "/living/safety/scam-alerts" }}
      bottomSecondary={{ label: "Hospitals guide →", href: "/living/healthcare/hospitals" }}
    >
      <section aria-labelledby="emergency-contacts">
        <h2 id="emergency-contacts" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          Key contacts
        </h2>
        <p className="mt-1 text-sm text-[#777777]">เบอร์โทรฉุกเฉิน</p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#D7CBBA]/60 text-xs font-bold uppercase tracking-wide text-[#6b5a48]">
              <tr>
                <th className="px-4 py-3 sm:px-6">Service</th>
                <th className="px-4 py-3 sm:px-6">Number</th>
                <th className="hidden px-4 py-3 sm:table-cell sm:px-6">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0] text-[#444748]">
              {contacts.map((c) => (
                <tr key={c.service}>
                  <td className="px-4 py-3 font-medium text-[#0A192F] sm:px-6">{c.service}</td>
                  <td className="px-4 py-3 font-bold tabular-nums text-[#B29475] sm:px-6">
                    {c.number}
                  </td>
                  <td className="hidden px-4 py-3 sm:table-cell sm:px-6">{c.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="emergency-scenarios">
        <h2 id="emergency-scenarios" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          What to do
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {scenarios.map((s) => (
            <article
              key={s.title}
              className="rounded-xl border border-[#e2e8f0] bg-white p-5"
            >
              <h3 className="font-bold text-[#0A192F]">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#444748]">{s.steps}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm">
          <Link href="/living/healthcare/hospitals" className="font-bold text-[#B29475] hover:underline">
            Full hospitals directory →
          </Link>
        </p>
      </section>

      <LivingFaqSection faqs={faqs} subtitle="คำถามที่พบบ่อย — Emergency" />
    </LivingPageShell>
  );
}
