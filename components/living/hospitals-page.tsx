"use client";

import dynamic from "next/dynamic";

const HospitalsMap = dynamic(
  () => import("@/components/living/hospitals-map").then((m) => m.HospitalsMap),
  {
    ssr: false,
    loading: () => (
      <div
        className="h-[320px] w-full animate-pulse bg-[#e8e4de] md:h-[380px]"
        aria-hidden
      />
    ),
  },
);
import { LivingFaqSection } from "@/components/living/living-faq-section";
import {
  LivingCtaActions,
  livingCtaButtonClass,
} from "@/components/living/living-cta-actions";
import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import { useLanguage } from "@/components/layout/language-provider";
import { livingTheme } from "@/lib/design/living-theme";
import { hospitalCardImages } from "@/lib/design/hospital-images";
import { livingImages } from "@/lib/design/living-images";
import Image from "next/image";
import { faqEnTh } from "@/lib/i18n/living-helpers";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import {
  getHospitalAlternatives,
  getHospitalBringList,
  getHospitalDirectory,
  getHospitalEmergencyHotlines,
  getHospitalInsuranceTips,
  getHospitalsPage,
} from "@/lib/i18n/messages/living/hospitals";
import {
  Check,
  CreditCard,
  ExternalLink,
  HeartPulse,
  MapPin,
  Phone,
  Pill,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  faqEnTh(
    "insurance",
    "Which hospitals accept expat health insurance?",
    "โรงพยาบาลไหนรับประกันต่างชาติ?",
    "Bangkok Hospital Pattaya, Pattaya Memorial, and Pattaya International commonly work with international insurers. Contact the international desk with your policy number before elective care.",
    "กรุงเทพพัทยา พัทยาเมโมเรียล และพัทยาอินเตอร์มักรับประกันนานาชาติ ติดต่อแผนกต่างประเทศก่อนทำหัตถการ",
    "哪些医院接受外籍保险？",
    "Страховка?",
  ),
  faqEnTh(
    "emergency",
    "What number do I call in a medical emergency?",
    "ฉุกเฉินโทรเบอร์ไหน?",
    "Dial 1669 for ambulance. Tourist Police 1155 for coordination. Bangkok Hospital Pattaya ER hotline 1719.",
    "1669 รถพยาบาล 1155 ตำรวจท่องเที่ยว 1719 กรุงเทพพัทยา",
    "急救打什么？",
    "Экстренный номер?",
  ),
  faqEnTh(
    "public",
    "Can foreigners use public hospitals?",
    "ชาวต่างชาติใช้ รพ.รัฐได้ไหม?",
    "Yes — Pattaya City and Pattaya Patimakun hospitals accept foreigners; fees are lower but waits and language support vary.",
    "ได้ — เมืองพัทยาและพัทยาปัทมคุณรับชาวต่างชาติ ราคาต่ำแต่อาจรอคิว",
    "能用公立医院吗？",
    "Госбольницы?",
  ),
  faqEnTh(
    "clinic",
    "Should I go to a clinic or hospital?",
    "ไปคลินิกหรือโรงพยาบาล?",
    "Clinics suit minor illness; hospitals for emergencies, surgery, or specialist care.",
    "คลินิกสำหรับอาการเล็กน้อย รพ.สำหรับฉุกเฉิน ผ่าตัด หรือเฉพาะทาง",
    "诊所还是医院？",
    "Клиника или больница?",
  ),
  faqEnTh(
    "visa-medical",
    "Where do I get a visa medical certificate?",
    "ใบตรวจสุขภาพวีซ่าทำที่ไหน?",
    "Approved clinics and hospitals issue Immigration-standard forms — confirm with Chonburi Immigration.",
    "คลินิกและรพ.ที่อนุมัติออกแบบฟอร์มตม. — ยืนยันกับตม.ชลบุรี",
    "签证体检在哪做？",
    "Медосмотр для визы?",
  ),
];

function HospitalCard({
  name,
  image,
  imageAlt,
  focus,
  services,
  mapsQuery,
  mapsLabel,
  tier,
}: {
  name: string;
  image: string;
  imageAlt: string;
  focus: string;
  services: string;
  mapsQuery: string;
  mapsLabel: string;
  tier: "premium" | "public";
}) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md ${
        tier === "premium"
          ? "border-[#D7CBBA] hover:border-[#B29475]"
          : "border-[#e2e8f0] hover:border-[#94a3b8]"
      }`}
    >
      <div className="relative aspect-[16/10] w-full bg-[#e8e4de]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span
          className={`mb-3 w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${
            tier === "premium" ? "bg-[#B29475]/15 text-[#6b5a48]" : "bg-slate-100 text-slate-600"
          }`}
        >
          {tier === "premium" ? "Premium" : "Public"}
        </span>
        <h3 className="text-lg font-bold text-[#0A192F]">{name}</h3>
        <p className={`mt-3 flex-1 text-sm leading-relaxed ${livingTheme.body}`}>{focus}</p>
        <p className="mt-3 border-t border-[#e2e8f0] pt-3 text-xs text-[#777777]">{services}</p>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#B29475] hover:underline"
        >
          <MapPin className="h-4 w-4" aria-hidden />
          {mapsLabel}
          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
        </a>
      </div>
    </article>
  );
}

export function HospitalsPage() {
  const { language } = useLanguage();
  const copy = getHospitalsPage(language);
  const hotlines = getHospitalEmergencyHotlines(language);
  const hospitals = getHospitalDirectory(language);
  const premium = hospitals.filter((h) => h.tier === "premium");
  const publicHospitals = hospitals.filter((h) => h.tier === "public");
  const insuranceTips = getHospitalInsuranceTips(language);
  const bringList = getHospitalBringList(language);
  const alternatives = getHospitalAlternatives(language);

  return (
    <LocalizedLivingPageShell
      shellKey="hospitals"
      heroImage={livingImages.medical}
      heroAlt="World-class medical facility in Pattaya"
      ctaHref="/living/healthcare/insurance"
      ctaAriaLabel="Healthcare consultation"
      hideLeadCta
      bottomChildren={
        <LivingCtaActions>
          <Link href="/living" className={livingCtaButtonClass.primary}>
            {copy.livingHub}
          </Link>
          <Link href="/living/healthcare/insurance" className={livingCtaButtonClass.outline}>
            {copy.insuranceGuide}
          </Link>
          <Link href="/living/safety/emergency-guide" className={livingCtaButtonClass.outline}>
            {copy.emergencyGuide}
          </Link>
        </LivingCtaActions>
      }
    >
      {/* Emergency hotlines */}
      <section
        className="rounded-2xl border-2 border-[#ae2f34]/40 bg-gradient-to-br from-[#ae2f34] to-[#8f2529] p-5 text-white shadow-lg sm:p-6"
        aria-labelledby="emergency-hotlines-title"
      >
        <h2 id="emergency-hotlines-title" className="flex items-center gap-2 text-lg font-bold sm:text-xl">
          <Phone className="h-5 w-5" aria-hidden />
          {copy.emergencyTitle}
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {hotlines.map((line) => (
            <a
              key={line.number}
              href={line.href}
              className="flex flex-col rounded-xl border border-white/20 bg-white/10 p-4 transition hover:bg-white/20"
            >
              <span className="text-xs font-medium uppercase tracking-wide text-white/80">
                {line.label}
              </span>
              <span className="mt-1 text-2xl font-bold tabular-nums tracking-tight">{line.number}</span>
              <span className="mt-1 text-xs text-white/75">{line.note}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section
        className="relative overflow-hidden rounded-2xl border border-[#D7CBBA]/60 bg-gradient-to-br from-[#faf7f2] via-white to-[#f5efe6] p-6 sm:p-8"
        aria-labelledby="hospitals-intro-title"
      >
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: "#B29475" }}
          >
            <HeartPulse className="h-7 w-7" aria-hidden />
          </div>
          <div>
            <h2 id="hospitals-intro-title" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
              {copy.introTitle}
            </h2>
            <p className={`mt-3 max-w-3xl text-base leading-relaxed ${livingTheme.body}`}>
              {copy.introBody}
            </p>
          </div>
        </div>
      </section>

      <HospitalsMap />

      {/* Premium hospitals */}
      <section aria-labelledby="premium-hospitals-title">
        <h2 id="premium-hospitals-title" className={livingTheme.heading}>
          {copy.premiumTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.premiumSubtitle}</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {premium.map((h) => (
            <HospitalCard
              key={h.id}
              name={h.name}
              image={hospitalCardImages[h.id]}
              imageAlt={h.name}
              focus={h.focus}
              services={h.services}
              mapsQuery={h.mapsQuery}
              mapsLabel={copy.openMaps}
              tier="premium"
            />
          ))}
        </div>
      </section>

      {/* Public hospitals */}
      <section aria-labelledby="public-hospitals-title">
        <h2 id="public-hospitals-title" className={livingTheme.heading}>
          {copy.publicTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.publicSubtitle}</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {publicHospitals.map((h) => (
            <HospitalCard
              key={h.id}
              name={h.name}
              image={hospitalCardImages[h.id]}
              imageAlt={h.name}
              focus={h.focus}
              services={h.services}
              mapsQuery={h.mapsQuery}
              mapsLabel={copy.openMaps}
              tier="public"
            />
          ))}
        </div>
      </section>

      {/* Insurance */}
      <section aria-labelledby="insurance-title">
        <h2 id="insurance-title" className={livingTheme.heading}>
          {copy.insuranceTitle}
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {insuranceTips.map((item) => (
            <article
              key={item.title}
              className="flex gap-4 rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm"
            >
              <div className={livingTheme.iconBox}>
                <CreditCard className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h3 className="font-bold text-[#0A192F]">{item.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${livingTheme.body}`}>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* What to bring */}
      <section
        className="grid gap-6 lg:grid-cols-2 lg:items-start"
        aria-labelledby="bring-title"
      >
        <div>
          <h2 id="bring-title" className={livingTheme.heading}>
            {copy.bringTitle}
          </h2>
          <p className={`mt-2 ${livingTheme.muted}`}>{copy.bringSubtitle}</p>
        </div>
        <ul className="space-y-3 rounded-2xl border border-[#D7CBBA]/60 bg-[#faf7f2] p-5 sm:p-6">
          {bringList.map((line) => (
            <li key={line} className="flex gap-3 text-sm leading-relaxed text-[#444748] sm:text-base">
              <span
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#B29475] text-white"
                aria-hidden
              >
                <Check className="h-3.5 w-3.5" />
              </span>
              {line}
            </li>
          ))}
        </ul>
      </section>

      {/* Clinics & pharmacies */}
      <section aria-labelledby="alternatives-title">
        <h2 id="alternatives-title" className={livingTheme.heading}>
          {copy.alternativesTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.alternativesSubtitle}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {alternatives.map((item, i) => {
            const Icon = i === 0 ? Stethoscope : Pill;
            return (
              <article key={item.title} className={`flex gap-4 p-5 ${livingTheme.cardStatic}`}>
                <div className={livingTheme.iconBox}>
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A192F]">{item.title}</h3>
                  <p className={`mt-2 text-sm leading-relaxed ${livingTheme.body}`}>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <LivingFaqSection
        faqs={faqs}
        subtitle={faqSubtitle(language, "Hospitals", "โรงพยาบาล", "医院", "Больницы")}
        titleId="hospitals-faq-title"
      />
    </LocalizedLivingPageShell>
  );
}
