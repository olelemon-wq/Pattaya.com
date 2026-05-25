import { LivingFaqSection } from "@/components/living/living-faq-section";
import { LivingIconCards } from "@/components/living/living-icon-cards";
import { LivingPageShell } from "@/components/living/living-page-shell";
import { livingImages } from "@/lib/design/living-images";
import { Droplets, Plug, Wifi } from "lucide-react";

const services = [
  {
    icon: Plug,
    title: "Electricity (MEA/PEA)",
    titleTh: "ค่าไฟ",
    text: "Condos often bill above government rates (฿5–8/unit vs ~฿4 government). Check meter photos at move-in.",
  },
  {
    icon: Droplets,
    title: "Water",
    titleTh: "ค่าน้ำ",
    text: "Usually inexpensive; juristic person may add a service fee. Leaks and shared meters should be noted in lease.",
  },
  {
    icon: Wifi,
    title: "Internet & TV",
    titleTh: "อินเทอร์เน็ต",
    text: "Fiber from AIS, True, 3BB — ฿599–1,200/month common. Building may have exclusive provider deals.",
  },
];

const estimates = [
  { item: "Studio condo (moderate AC)", monthly: "฿2,500–4,500" },
  { item: "2-bed sea-view (daily AC)", monthly: "฿4,500–8,000" },
  { item: "House with pool", monthly: "฿8,000–15,000+" },
  { item: "Fiber 1 Gbps", monthly: "฿599–999" },
];

const faqs = [
  {
    id: "high-bill",
    question: "Why is my electric bill so high?",
    questionTh: "ค่าไฟแพงผิดปกติ?",
    answer:
      "Old AC units, 24/7 cooling, and landlord markups are the top causes. Compare the per-unit rate on your bill to government tariffs and negotiate in your lease if markup exceeds ~25%.",
  },
  {
    id: "transfer",
    question: "How do I put utilities in my name?",
    questionTh: "โอนมิเตอร์เป็นชื่อเราได้ไหม?",
    answer:
      "Long-term renters rarely transfer MEA accounts; owners and 1-year leases can apply with condo juristic support. Short-term tenants usually pay via landlord invoice.",
  },
];

export function UtilitiesPage() {
  return (
    <LivingPageShell
      heroImage={livingImages.utilities}
      heroAlt="Modern apartment utilities"
      badge="Cost of Living"
      breadcrumbLeaf="Utilities"
      title="Utilities Cost | ค่าไฟ น้ำ Internet"
      subtitle="Electricity, water, and high-speed internet logistics for Pattaya residents."
      ctaEyebrow="Budget Tools"
      ctaTitle="Estimate your monthly overheads"
      ctaBody="Use our living hub calculator context and compare building utility rates before you sign."
      ctaButton="Budget Tools"
      bottomTitle="Planning your total budget?"
      bottomBody="Combine utilities with food and rent for a realistic Pattaya monthly plan."
      bottomPrimary={{ label: "Daily cost guide", href: "/living/cost-of-living/food" }}
      bottomSecondary={{ label: "Rentals guide →", href: "/living/housing/rentals" }}
    >
      <section aria-labelledby="util-services">
        <h2 id="util-services" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          Utility breakdown
        </h2>
        <p className="mt-1 text-sm text-[#777777]">รายการค่าใช้จ่ายหลัก</p>
        <div className="mt-6">
          <LivingIconCards items={services} columns={3} />
        </div>
      </section>

      <section aria-labelledby="util-estimates">
        <h2 id="util-estimates" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          Indicative monthly costs
        </h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#D7CBBA]/60 text-xs font-bold uppercase tracking-wide text-[#6b5a48]">
              <tr>
                <th className="px-4 py-3 sm:px-6">Profile</th>
                <th className="px-4 py-3 sm:px-6">Utilities (approx.)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0] text-[#444748]">
              {estimates.map((row) => (
                <tr key={row.item}>
                  <td className="px-4 py-3 font-medium text-[#0A192F] sm:px-6">{row.item}</td>
                  <td className="px-4 py-3 sm:px-6">{row.monthly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <LivingFaqSection faqs={faqs} subtitle="คำถามที่พบบ่อย — Utilities" />
    </LivingPageShell>
  );
}
