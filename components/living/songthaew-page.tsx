import { LivingFaqSection } from "@/components/living/living-faq-section";
import { LivingPageShell } from "@/components/living/living-page-shell";
import { livingImages } from "@/lib/design/living-images";

const routes = [
  {
    route: "Beach Road ↔ Sukhumvit loop",
    fare: "฿10 (day) / ฿20 (night)",
    tip: "Press buzzer or knock window to stop; say destination when boarding.",
  },
  {
    route: "Jomtien ↔ Pattaya Second Road",
    fare: "฿10–20",
    tip: "Shared ride — wait until full or negotiate charter for direct trip.",
  },
  {
    route: "Naklua / Wong Amat",
    fare: "฿10–30",
    tip: "Fewer vehicles after 22:00 — Grab backup recommended.",
  },
  {
    route: "Charter (private hire)",
    fare: "฿100–300+",
    tip: "Agree price before departure for custom route or day hire.",
  },
];

const faqs = [
  {
    id: "stop",
    question: "How do I stop a songthaew?",
    questionTh: "ลงรถอย่างไร?",
    answer:
      "Ring the buzzer or tap the roof gently. Have small notes ready — drivers rarely carry large change at night.",
  },
  {
    id: "grab",
    question: "Songthaew vs Grab?",
    questionTh: "สองแถวหรือ Grab?",
    answer:
      "Songthaews are cheapest for fixed corridors. Grab/Bolt win for AC, exact address, and late-night reliability.",
  },
  {
    id: "safety",
    question: "Are songthaews safe?",
    questionTh: "ปลอดภัยไหม?",
    answer:
      "Generally yes on main routes. Hold handrails, mind helmet-less bike traffic, and avoid charter without agreed fare.",
  },
];

export function SongthaewPage() {
  return (
    <LivingPageShell
      heroImage={livingImages.localTransport}
      heroAlt="Local songthaew transport in Pattaya"
      badge="Transportation"
      breadcrumbLeaf="Songthaew"
      title="Songthaew | รถสองแถว"
      subtitle="Expert tips for Pattaya baht buses — routes, fares, and how to ride like a local."
      ctaEyebrow="Transit Map"
      ctaTitle="Download route mental map"
      ctaBody="Pair songthaew corridors with Grab for last-mile trips from Jomtien to Naklua."
      ctaButton="Transit Map"
      bottomTitle="Need ride-hailing apps?"
      bottomBody="Grab Premium and Bolt for AC trips and airport runs."
      bottomPrimary={{ label: "Grab & Bolt guide", href: "/living/transportation/ride-apps" }}
      bottomSecondary={{ label: "Driving guide →", href: "/living/transportation/driving" }}
    >
      <section aria-labelledby="songthaew-routes">
        <h2 id="songthaew-routes" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          Common routes & fares
        </h2>
        <p className="mt-1 text-sm text-[#777777]">เส้นทางและค่าโดยสารโดยประมาณ</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {routes.map((r) => (
            <article
              key={r.route}
              className="rounded-xl border border-[#e2e8f0] bg-white p-5 transition hover:border-[#D7CBBA]"
            >
              <h3 className="font-bold text-[#0A192F]">{r.route}</h3>
              <p className="mt-1 text-sm font-semibold text-[#B29475]">{r.fare}</p>
              <p className="mt-2 text-sm text-[#444748]">{r.tip}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="rounded-2xl border border-[#B29475]/20 bg-[#D7CBBA] p-6 sm:p-8"
        aria-labelledby="songthaew-etiquette"
      >
        <h2 id="songthaew-etiquette" className="text-xl font-bold text-[#0A192F]">
          Rider etiquette
        </h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-[#444748]">
          <li>Enter from the back; offer seats to monks and elderly passengers.</li>
          <li>Keep voices low at night — many drivers live in Jomtien.</li>
          <li>Do not eat messy food; water is fine.</li>
          <li>Say thank you (khop khun) when paying — small kindness goes far.</li>
        </ul>
      </section>

      <LivingFaqSection faqs={faqs} subtitle="คำถามที่พบบ่อย — Songthaew" />
    </LivingPageShell>
  );
}
