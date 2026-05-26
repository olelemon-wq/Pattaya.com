import { CultureEtiquetteFaq } from "@/components/living/culture-etiquette-faq";
import { LivingPageShell } from "@/components/living/living-page-shell";
import { livingTheme } from "@/lib/design/living-theme";
import {
  Crown,
  Footprints,
  Hand,
  Handshake,
  Landmark,
  Shirt,
  Users,
  VolumeX,
  type LucideIcon,
} from "lucide-react";
import {
  LivingCtaActions,
  livingCtaButtonClass,
} from "@/components/living/living-cta-actions";
import Link from "next/link";
import { livingImages } from "@/lib/design/living-images";

const culturalDos: { icon: LucideIcon; title: string; titleTh: string; text: string }[] =
  [
    {
      icon: Handshake,
      title: "The Wai Protocol",
      titleTh: "การไหว้",
      text: "Bow with palms together to show respect to elders, officials, and new acquaintances. Higher hands = deeper respect.",
    },
    {
      icon: Users,
      title: "Social Hierarchy",
      titleTh: "ลำดับชั้นทางสังคม",
      text: "Acknowledge age and status with appropriate gestures and a calm, polite tone of voice.",
    },
    {
      icon: Shirt,
      title: "Dress Codes",
      titleTh: "การแต่งกาย",
      text: "Wear modest clothing (covering shoulders and knees) when visiting temples and official buildings.",
    },
    {
      icon: Landmark,
      title: "Respect for Monks",
      titleTh: "ความเคารพต่อพระ",
      text: "Give up your seat and maintain a respectful distance; women should avoid any physical contact.",
    },
  ];

const culturalDonts: { icon: LucideIcon; title: string; titleTh: string; text: string }[] =
  [
    {
      icon: Hand,
      title: "Touching the Head",
      titleTh: "จับหัว",
      text: "Considered the most sacred part of the body; avoid touching anyone's head, even children.",
    },
    {
      icon: Footprints,
      title: "Pointing Feet",
      titleTh: "ชี้เท้า",
      text: "Feet are seen as the lowest part of the body; never point them at people, monks, or images of the Buddha.",
    },
    {
      icon: VolumeX,
      title: "Raising Your Voice",
      titleTh: "พูดเสียงดัง",
      text: "Maintain a calm demeanor; losing your temper is seen as losing face and is highly counterproductive.",
    },
    {
      icon: Crown,
      title: "Disrespecting the Monarchy",
      titleTh: "ไม่เคารพสถาบัน",
      text: "Always show utmost respect for the Royal Family. Discussion of the monarchy is subject to strict laws.",
    },
  ];

const pattayaTips = [
  {
    title: "Temples & shrines",
    titleTh: "วัดและศาลเจ้า",
    text: "Big Buddha, Wat Yansangwararam, and local shrines near the beach — dress modestly and remove shoes.",
  },
  {
    title: "Beach & nightlife",
    titleTh: "ชายหาดและไนท์ไลฟ์",
    text: "Swimwear stays at the beach. In town and Walking Street, cover up more than you would on the sand.",
  },
  {
    title: "Business & networking",
    titleTh: "ธุรกิจ",
    text: "Exchange cards with both hands, arrive on time, and open meetings with light small talk before hard negotiation.",
  },
  {
    title: "Songthaews & queues",
    titleTh: "สองแถวและคิว",
    text: "Patience and a smile help. Press the buzzer for stops, agree fares when possible, and queue politely.",
  },
];

function EtiquetteCard({
  icon: Icon,
  title,
  titleTh,
  text,
  variant,
}: {
  icon: LucideIcon;
  title: string;
  titleTh: string;
  text: string;
  variant: "do" | "dont";
}) {
  const accent = variant === "do" ? "#B29475" : "#ae2f34";
  return (
    <article className="flex gap-4 rounded-xl border border-[#e2e8f0] bg-white p-5 shadow-sm transition hover:border-[#D7CBBA]">
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-md"
        style={{ backgroundColor: accent }}
      >
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <div>
        <h3 className="font-bold text-[#0A192F]">{title}</h3>
        <p className="text-xs font-medium" style={{ color: accent }}>
          {titleTh}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[#444748]">{text}</p>
      </div>
    </article>
  );
}

export function CultureEtiquettePage() {
  return (
    <LivingPageShell
      heroImage={livingImages.cultureEtiquette}
      heroAlt="Thai culture and etiquette in Pattaya"
      badge="Culture & Etiquette"
      breadcrumbLeaf="Do & Don't"
      title="Do & Don't | สิ่งควรทำ/ไม่ควรทำ"
      subtitle="Cultural etiquette guide for living in Pattaya — respect local values, avoid common mistakes, and integrate smoothly as a resident."
      ctaEyebrow="Living"
      ctaTitle="Living guides"
      ctaBody=""
      ctaButton="Living hub"
      hideLeadCta
      bottomTitle="Explore more Living guides"
      bottomBody="Visa, housing, safety, and local culture — everything for settling in Pattaya."
      bottomChildren={
        <LivingCtaActions>
          <Link href="/living" className={livingCtaButtonClass.primary}>
            Living hub →
          </Link>
          <Link
            href="/living/culture/thai-culture"
            className={livingCtaButtonClass.outline}
          >
            Thai culture →
          </Link>
          <Link
            href="/living/safety/scam-alerts"
            className={livingCtaButtonClass.danger}
          >
            Scam alerts →
          </Link>
        </LivingCtaActions>
      }
    >
      <section className={livingTheme.accentPanel}>
        <h2 className={livingTheme.headingSm}>The Thai Way in Pattaya</h2>
        <p className={`mt-3 max-w-3xl sm:text-base ${livingTheme.body}`}>
          Pattaya is an international city, but harmony still rests on traditional Thai
          values — patience, respect, and saving face. These guidelines help expats,
          retirees, and long-stay visitors navigate daily life without unintended offense.
        </p>
      </section>

      <section aria-labelledby="dos-title">
          <h2
            id="dos-title"
            className="flex items-center gap-2 text-2xl font-bold text-[#B29475] sm:text-3xl"
          >
            ✓ Cultural Dos
          </h2>
          <p className="mt-1 text-sm text-[#777777]">สิ่งที่ควรทำ</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {culturalDos.map((item) => (
              <EtiquetteCard key={item.title} {...item} variant="do" />
            ))}
          </div>
        </section>

        <section aria-labelledby="donts-title">
          <h2
            id="donts-title"
            className="flex items-center gap-2 text-2xl font-bold text-[#ae2f34] sm:text-3xl"
          >
            ✕ Cultural Don&apos;ts
          </h2>
          <p className="mt-1 text-sm text-[#777777]">สิ่งที่ไม่ควรทำ</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {culturalDonts.map((item) => (
              <EtiquetteCard key={item.title} {...item} variant="dont" />
            ))}
          </div>
        </section>

      <section aria-labelledby="pattaya-title">
        <h2 id="pattaya-title" className={livingTheme.heading}>
          Pattaya-specific tips
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>สถานการณ์ที่เจอบ่อยในเมืองพัทยา</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {pattayaTips.map((tip) => (
            <div key={tip.title} className={`p-5 shadow-sm ${livingTheme.cardStatic}`}>
              <h3 className="font-bold text-[#0A192F]">{tip.title}</h3>
              <p className="text-xs font-medium text-[#B29475]">{tip.titleTh}</p>
              <p className={`mt-2 ${livingTheme.body}`}>{tip.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CultureEtiquetteFaq />
    </LivingPageShell>
  );
}
