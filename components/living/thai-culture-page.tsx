import { LivingFaqSection } from "@/components/living/living-faq-section";
import { LivingIconCards } from "@/components/living/living-icon-cards";
import { LivingPageShell } from "@/components/living/living-page-shell";
import { livingImages } from "@/lib/design/living-images";
import { Calendar, HandHeart, Languages, Sparkles } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: HandHeart,
    title: "Sanuk & social harmony",
    titleTh: "สนุกและสังคม",
    text: "Life should be enjoyable; avoiding public conflict preserves face for everyone involved.",
  },
  {
    icon: Sparkles,
    title: "Buddhism in daily life",
    titleTh: "พุทธศาสนา",
    text: "Temples, merit-making, and calm demeanor shape holidays and neighbourhood rhythm.",
  },
  {
    icon: Calendar,
    title: "Festivals",
    titleTh: "เทศกาล",
    text: "Songkran, Loy Krathong, and local temple fairs — Pattaya celebrates with beach and city events.",
  },
  {
    icon: Languages,
    title: "Language basics",
    titleTh: "ภาษาไทย",
    text: "Hello (sawasdee), thank you (khop khun), and polite particles (khrap/kha) open doors everywhere.",
  },
];

const pattayaNotes = [
  {
    title: "Tourism meets community",
    text: "Respect both beach holiday culture and residential sois — noise and dress codes vary by block.",
  },
  {
    title: "Ex-pat integration",
    text: "Join local markets, temple events, and charity drives to build trust beyond bar districts.",
  },
  {
    title: "Business culture",
    text: "Relationships precede contracts; gifts are symbolic, not bribes — punctuality still matters.",
  },
];

const faqs = [
  {
    id: "learn",
    question: "How can I learn Thai quickly?",
    questionTh: "เรียนภาษาไทยเร็วๆ ได้อย่างไร?",
    answer:
      "Evening classes in Pattaya, language exchange apps, and daily market practice beat textbook-only study. Learn to read tone markers for clearer pronunciation.",
  },
  {
    id: "etiquette",
    question: "Where is the full do & don't list?",
    questionTh: "มารยาทละเอียดอยู่ที่ไหน?",
    answer:
      "See our dedicated etiquette guide for wai, temples, monks, feet/head taboos, and monarchy respect.",
  },
];

export function ThaiCulturePage() {
  return (
    <LivingPageShell
      heroImage={livingImages.cultureCard}
      heroAlt="Thai culture and temple"
      badge="Culture & Etiquette"
      breadcrumbLeaf="Thai Culture"
      title="Thai Culture | วัฒนธรรมไทย"
      subtitle="Master social nuances of Pattaya — traditions, festivals, and respectful integration."
      ctaEyebrow="Culture Guide"
      ctaTitle="Go deeper on daily etiquette"
      ctaBody="Wai protocol, temple dress codes, and Pattaya-specific do & don't for newcomers."
      ctaButton="Learn More"
      ctaHref="/living/culture/etiquette"
      bottomTitle="Respectful living in Pattaya"
      bottomBody="Pair cultural awareness with safety and scam awareness guides."
      bottomPrimary={{ label: "Do & Don't guide", href: "/living/culture/etiquette" }}
      bottomSecondary={{ label: "Scam alerts →", href: "/living/safety/scam-alerts" }}
    >
      <section aria-labelledby="culture-pillars">
        <h2 id="culture-pillars" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          Cultural pillars
        </h2>
        <p className="mt-1 text-sm text-[#777777]">หัวใจของวัฒนธรรมไทย</p>
        <div className="mt-6">
          <LivingIconCards items={pillars} />
        </div>
      </section>

      <section aria-labelledby="culture-pattaya">
        <h2 id="culture-pattaya" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          Living in Pattaya
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {pattayaNotes.map((n) => (
            <article
              key={n.title}
              className="rounded-xl border border-[#e2e8f0] bg-white p-5 transition hover:border-[#D7CBBA]"
            >
              <h3 className="font-bold text-[#0A192F]">{n.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#444748]">{n.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm">
          <Link href="/living/culture/etiquette" className="font-bold text-[#B29475] hover:underline">
            Full etiquette protocol guide →
          </Link>
        </p>
      </section>

      <LivingFaqSection faqs={faqs} subtitle="คำถามที่พบบ่อย — Thai Culture" />
    </LivingPageShell>
  );
}
