import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { CultureEtiquetteFaq } from "@/components/living/culture-etiquette-faq";
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
import Image from "next/image";
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
    <div data-full-bleed className="bg-[#F8FAFC] font-sans text-[#0A192F]">
      <div className="relative z-10 shrink-0 shadow-sm">
        <BreakingNewsTicker variant="living" />
      </div>

      <section
        className="relative min-h-[min(65vh,520px)] overflow-hidden"
        aria-labelledby="culture-hero-title"
      >
        <Image
          src={livingImages.cultureEtiquette}
          alt="Thai culture and etiquette in Pattaya"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/85 via-[#0A192F]/70 to-[#0A192F]/90"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[min(65vh,520px)] max-w-[1280px] flex-col justify-end px-4 pb-24 pt-20 sm:px-6 sm:pb-28">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-white/75 sm:text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/living" className="hover:text-white">
                  Living
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span className="text-white/90">Do &amp; Don&apos;t</span>
              </li>
            </ol>
          </nav>
          <span className="mb-3 inline-flex w-fit rounded-full bg-[#D7CBBA] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#6b5a48]">
            Culture &amp; Etiquette
          </span>
          <h1
            id="culture-hero-title"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Do &amp; Don&apos;t | สิ่งควรทำ/ไม่ควรทำ
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Cultural etiquette guide for living in Pattaya — respect local values,
            avoid common mistakes, and integrate smoothly as a resident.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] space-y-14 px-4 py-12 sm:px-6 sm:py-16">
        <section className="rounded-2xl border border-[#B29475]/20 bg-[#D7CBBA]/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-[#0A192F] sm:text-2xl">
            The Thai Way in Pattaya
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#444748] sm:text-base">
            Pattaya is an international city, but harmony still rests on traditional
            Thai values — patience, respect, and saving face. These guidelines help
            expats, retirees, and long-stay visitors navigate daily life without
            unintended offense.
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
          <h2
            id="pattaya-title"
            className="text-2xl font-bold text-[#0A192F] sm:text-3xl"
          >
            Pattaya-specific tips
          </h2>
          <p className="mt-2 text-sm text-[#777777]">
            สถานการณ์ที่เจอบ่อยในเมืองพัทยา
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {pattayaTips.map((tip) => (
              <div
                key={tip.title}
                className="rounded-xl border border-[#e2e8f0] bg-white p-5 shadow-sm"
              >
                <h3 className="font-bold text-[#0A192F]">{tip.title}</h3>
                <p className="text-xs font-medium text-[#B29475]">{tip.titleTh}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#444748]">
                  {tip.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <CultureEtiquetteFaq />

        <section
          className="rounded-2xl border border-[#B29475]/20 bg-[#D7CBBA] px-6 py-8 text-center sm:px-10 sm:py-10"
          aria-labelledby="culture-cta-title"
        >
          <h2
            id="culture-cta-title"
            className="text-xl font-bold text-[#0A192F] sm:text-2xl"
          >
            Explore more Living guides
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-[#444748]">
            Visa, housing, safety, and local culture — everything for settling in
            Pattaya.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/living"
              className="inline-flex items-center justify-center rounded-lg bg-[#B29475] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#B29475]/90"
            >
              Living hub →
            </Link>
            <Link
              href="/living/culture/thai-culture"
              className="inline-flex items-center justify-center rounded-lg border border-[#B29475] px-8 py-3.5 text-sm font-bold text-[#B29475] transition hover:bg-[#B29475]/10"
            >
              Thai culture →
            </Link>
            <Link
              href="/living/safety/scam-alerts"
              className="inline-flex items-center justify-center rounded-lg border border-[#ae2f34]/40 px-8 py-3.5 text-sm font-bold text-[#ae2f34] transition hover:bg-[#ae2f34]/5"
            >
              Scam alerts →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
