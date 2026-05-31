"use client";

import { LivingFaqSection } from "@/components/living/living-faq-section";
import {
  LivingCtaActions,
  livingCtaButtonClass,
} from "@/components/living/living-cta-actions";
import { PattayaEmergencyHub } from "@/components/living/pattaya-emergency-hub";
import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import { useLanguage } from "@/components/layout/language-provider";
import { livingImages } from "@/lib/design/living-images";
import { faqEnTh } from "@/lib/i18n/living-helpers";
import {
  getEmergencyGuidePage,
  getEmergencyScenarios,
} from "@/lib/i18n/messages/living/emergency-hub";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import { ShieldAlert } from "lucide-react";
import Link from "next/link";

const faqs = [
  faqEnTh(
    "embassy",
    "When should I contact my embassy?",
    "เมื่อไหร่ควรติดต่อสถานทูต?",
    "Serious injury, death, arrest, or lost passport warrant consular help. Keep digital passport scans secure.",
    "บาดเจ็บสาหัส เสียชีวิต ถูกจับ หรือพาสปอร์ตหาย ติดต่อสถานทูต เก็บสำเนาพาสปอร์ตในคลาวด์",
    "何时联系使馆？",
    "Посольство?",
  ),
  faqEnTh(
    "insurance",
    "Will hospitals treat me without insurance?",
    "ไม่มีประกันรักษาได้ไหม?",
    "Emergency care is provided; deposit may be required for admission. Carry policy hotlines.",
    "รักษาฉุกเฉินได้ อาจต้องมัดจำเมื่อรับเข้า พกเบอร์ประกัน",
    "无保险能就医吗？",
    "Без страховки?",
  ),
];

export function EmergencyGuidePage() {
  const { language } = useLanguage();
  const copy = getEmergencyGuidePage(language);
  const scenarios = getEmergencyScenarios(language);

  return (
    <LocalizedLivingPageShell
      shellKey="emergencyGuide"
      heroImage={livingImages.safetyGuide}
      heroAlt="Emergency guide"
      ctaHref="#emergency-hub"
      bottomChildren={
        <LivingCtaActions>
          <Link href="/living/safety/scam-alerts" className={livingCtaButtonClass.primary}>
            {copy.scamLink}
          </Link>
          <Link href="/living/healthcare/hospitals" className={livingCtaButtonClass.outline}>
            {copy.hospitalsLink}
          </Link>
        </LivingCtaActions>
      }
    >
      <div
        id="emergency-hub"
        className="scroll-mt-28 rounded-2xl border border-[#D7CBBA]/60 bg-[#f5f5f7] p-4 sm:p-6"
      >
        <PattayaEmergencyHub />
      </div>

      <section aria-labelledby="emergency-scenarios">
        <h2 id="emergency-scenarios" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
          {copy.scenariosTitle}
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {scenarios.map((s) => (
            <article
              key={s.id}
              className="rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm"
            >
              <h3 className="font-bold text-[#0A192F]">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#444748]">{s.steps}</p>
            </article>
          ))}
        </div>
      </section>

      <p className="flex items-start gap-3 rounded-2xl border border-[#e2e8f0] bg-white p-5 text-sm text-[#444748]">
        <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-[#B29475]" aria-hidden />
        {copy.appNote}
      </p>

      <LivingFaqSection
        faqs={faqs}
        subtitle={faqSubtitle(language, "Emergency", "ฉุกเฉิน", "紧急", "Экстренная помощь")}
      />
    </LocalizedLivingPageShell>
  );
}
