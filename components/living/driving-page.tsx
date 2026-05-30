"use client";

import { LivingFaqSection } from "@/components/living/living-faq-section";
import {
  LivingCtaActions,
  livingCtaButtonClass,
} from "@/components/living/living-cta-actions";
import { LivingIconCards } from "@/components/living/living-icon-cards";
import { PattayaTransportToolkit } from "@/components/living/pattaya-transport-toolkit";
import { LocalizedLivingPageShell } from "@/components/living/localized-living-page-shell";
import { useLanguage } from "@/components/layout/language-provider";
import { livingTheme } from "@/lib/design/living-theme";
import { livingImages } from "@/lib/design/living-images";
import { faqEnTh, iconEnTh, L, t } from "@/lib/i18n/living-helpers";
import {
  getDrivingDocuments,
  getDrivingHotspots,
  getDrivingInsuranceRows,
  getDrivingPage,
  getDrivingPoliceTips,
  getDrivingRentalTips,
  getDrivingSteps,
  getDrivingVehicleCompare,
} from "@/lib/i18n/messages/living/driving";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import {
  AlertTriangle,
  Bike,
  Car,
  Check,
  FileText,
  MapPin,
  Shield,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

function getTips() {
  return [
    iconEnTh(
      MapPin,
      "Pattaya traffic",
      "การจราจรพัทยา",
      "Motorbikes dominate; watch U-turns on Beach Road and sudden songthaew stops.",
      "มอไซค์เยอะ ระวังกลับรถ Beach Road และสองแถวจอดกะทันหัน",
      "芭提雅交通",
      "Движение",
    ),
    iconEnTh(
      Shield,
      "Insurance",
      "ประกันรถ",
      "Por Ror Bor is mandatory; class 1+ strongly advised for owned or long-term rental cars.",
      "พ.ร.บ. บังคับ ประกันชั้น 1+ แนะนำสำหรับรถที่เป็นเจ้าของหรือเช่าระยะยาว",
      "车险",
      "Страховка",
    ),
    iconEnTh(
      FileText,
      "International permit",
      "ใบขับขี่สากล",
      "IDP is for short visits only — residents should get a Thai license at Chonburi DLT.",
      "IDP สำหรับท่องเที่ยวระยะสั้น ผู้อยู่ระยะยาวควรขอใบไทยที่กรมขนส่งชลบุรี",
      "国际驾照",
      "IDP",
    ),
    iconEnTh(
      Car,
      "Rental cars",
      "เช่ารถ",
      "Carry passport, Thai license, and card hold. Photo all damage before you drive away.",
      "พกพาสปอร์ต ใบขับขี่ไทย และมัดจำบัตร ถ่ายรูความเสียหายก่อนออก",
      "租车",
      "Аренда авто",
    ),
  ];
}

const faqs = [
  faqEnTh(
    "convert",
    "Can I convert my home country license?",
    "แปลงใบขับขี่เดิมได้ไหม?",
    "Many nationals skip the practical test with a valid home license, embassy translation, and medical certificate at Chonburi DLT — confirm your country on the DLT list first.",
    "หลายสัญชาติข้ามสอบขับถ้ามีใบเดิม แปลสถานทูต และใบตรวจสุขภาพ — ตรวจรายชื่อสัญชาติที่กรมขนส่งก่อน",
    "能否转换本国驾照？",
    "Конвертация иностранных прав?",
  ),
  faqEnTh(
    "idp",
    "Is an International Driving Permit enough?",
    "ใบขับขี่สากลพอไหม?",
    "Tourists may use IDP with home license for a limited period. Long-stay visa holders should obtain a Thai license — insurers and police expect it.",
    "นักท่องเที่ยวใช้ IDP กับใบเดิมได้ระยะสั้น ผู้อยู่ระยะยาวควรมีใบไทย ประกันและตำรวจมักต้องการ",
    "国际驾照够用吗？",
    "Достаточно ли IDP?",
  ),
  faqEnTh(
    "moto",
    "Do I need a separate license for a scooter?",
    "ต้องใบขับขี่แยกสำหรับสกู๊ตเตอร์ไหม?",
    "Yes — class A for motorcycles. Riding without it can void insurance and lead to impound.",
    "ใช่ ชั้น A สำหรับมอเตอร์ไซค์ ขี่โดยไม่มีใบอาจประกันไม่คุ้มและถูกยึดรถ",
    "踏板需要单独驾照吗？",
    "Отдельные права на мото?",
  ),
  faqEnTh(
    "fine",
    "What if police stop me?",
    "ตำรวจจับได้อย่างไร?",
    "Show license, registration, and พ.ร.บ. Ask for an official receipt if paying a fine; avoid undocumented payments.",
    "แสดงใบขับขี่ ทะเบียน และ พ.ร.บ. ขอใบเสร็จทางการหากจ่ายค่าปรับ",
    "被警察拦下怎么办？",
    "Остановка полицией?",
  ),
  faqEnTh(
    "drink",
    "What is the alcohol limit?",
    "จำกัดแอลกอฮอล์เท่าไร?",
    "Thailand enforces strict drink-driving penalties — use Grab/Bolt after nightlife in Walking Street or Bali Hai.",
    "ไทยลงโทษเมาขับหนัก — ใช้ Grab/Bolt หลังเที่ยว Walking Street หรือบาลีไฮ",
    "酒驾限制是多少？",
    "Лимит алкоголя?",
  ),
  faqEnTh(
    "accident",
    "What should I do after an accident?",
    "อุบัติเหตุต้องทำอย่างไร?",
    "Do not leave the scene; call 191, photograph positions, exchange details, and notify insurer within 24 hours.",
    "อย่าออกจากที่เกิดเหตุ โทร 191 ถ่ายรูป แลกข้อมูล แจ้งประกันภายใน 24 ชม.",
    "发生事故怎么办？",
    "ДТП — что делать?",
  ),
];

export function DrivingPage() {
  const { language } = useLanguage();
  const copy = getDrivingPage(language);
  const steps = getDrivingSteps(language);
  const documents = getDrivingDocuments(language);
  const insuranceRows = getDrivingInsuranceRows(language);
  const hotspots = getDrivingHotspots(language);
  const vehicles = getDrivingVehicleCompare(language);
  const rentalTips = getDrivingRentalTips(language);
  const policeTips = getDrivingPoliceTips(language);

  return (
    <LocalizedLivingPageShell
      shellKey="driving"
      heroImage={livingImages.driving}
      heroAlt="Driving in Thailand"
      hideLeadCta
      bottomChildren={
        <LivingCtaActions>
          <Link href="/living" className={livingCtaButtonClass.primary}>
            {copy.livingHub}
          </Link>
          <Link href="/living/transportation/ride-apps" className={livingCtaButtonClass.outline}>
            {copy.rideApps}
          </Link>
          <Link href="/living/transportation/songthaew" className={livingCtaButtonClass.outline}>
            {copy.songthaew}
          </Link>
        </LivingCtaActions>
      }
    >
      <section
        className="relative overflow-hidden rounded-2xl border border-[#D7CBBA]/60 bg-gradient-to-br from-[#faf7f2] via-white to-[#f5efe6] p-6 sm:p-8"
        aria-labelledby="driving-intro-title"
      >
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: "#B29475" }}
          >
            <Car className="h-7 w-7" aria-hidden />
          </div>
          <div>
            <h2 id="driving-intro-title" className="text-2xl font-bold text-[#0A192F] sm:text-3xl">
              {copy.introTitle}
            </h2>
            <p className={`mt-3 max-w-3xl text-base leading-relaxed ${livingTheme.body}`}>
              {copy.introBody}
            </p>
          </div>
        </div>
      </section>

      <div className="rounded-2xl border border-[#D7CBBA]/60 bg-gradient-to-br from-[#faf7f2] via-white to-[#f5efe6] p-4 sm:p-6">
        <PattayaTransportToolkit />
      </div>

      <section aria-labelledby="driving-pathways-title">
        <h2 id="driving-pathways-title" className={livingTheme.heading}>
          {copy.pathwaysTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.pathwaysSubtitle}</p>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <article className="rounded-2xl border border-[#D7CBBA]/60 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className={livingTheme.iconBox}>
                <FileText className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-bold text-[#0A192F]">{copy.convertTitle}</h3>
            </div>
            <p className={`mt-4 text-sm leading-relaxed ${livingTheme.body}`}>{copy.convertBody}</p>
          </article>
          <article className="rounded-2xl border border-[#D7CBBA]/60 bg-[#faf7f2] p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className={livingTheme.iconBox}>
                <ShieldCheck className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-bold text-[#0A192F]">{copy.newTitle}</h3>
            </div>
            <p className={`mt-4 text-sm leading-relaxed ${livingTheme.body}`}>{copy.newBody}</p>
          </article>
        </div>
      </section>

      <section aria-labelledby="driving-steps">
        <h2 id="driving-steps" className={livingTheme.heading}>
          {copy.stepsTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.stepsSubtitle}</p>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.step}
              className="rounded-xl border border-[#D7CBBA]/60 bg-white p-5 shadow-sm"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B29475] text-sm font-bold text-white">
                {s.step}
              </span>
              <h3 className="mt-3 font-bold text-[#0A192F]">{s.title}</h3>
              <p className={`mt-2 text-sm ${livingTheme.body}`}>{s.note}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="driving-docs-title">
        <h2 id="driving-docs-title" className={livingTheme.heading}>
          {copy.docsTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.docsSubtitle}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {documents.map((doc) => (
            <li
              key={doc.id}
              className="flex gap-3 rounded-xl border border-[#e2e8f0] bg-white p-4"
            >
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#B29475]" aria-hidden />
              <div>
                <h3 className="font-bold text-[#0A192F]">{doc.title}</h3>
                <p className={`mt-1 text-sm ${livingTheme.body}`}>{doc.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="rounded-2xl border border-[#B29475]/25 bg-[#D7CBBA]/30 p-6 sm:p-8"
        aria-labelledby="driving-dlt-title"
      >
        <div className="flex items-start gap-4">
          <MapPin className="h-8 w-8 shrink-0 text-[#6b5a48]" aria-hidden />
          <div>
            <h2 id="driving-dlt-title" className={livingTheme.headingSm}>
              {copy.dltTitle}
            </h2>
            <p className={`mt-3 text-sm leading-relaxed ${livingTheme.body}`}>{copy.dltBody}</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="driving-insurance-title">
        <h2 id="driving-insurance-title" className={livingTheme.heading}>
          {copy.insuranceTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.insuranceSubtitle}</p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-[#e2e8f0] bg-white shadow-sm">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead>
              <tr className="border-b border-[#e2e8f0] bg-[#faf7f2]">
                <th className="px-4 py-3 font-bold text-[#0A192F]">{copy.tableType}</th>
                <th className="px-4 py-3 font-bold text-[#0A192F]">{copy.tableRequired}</th>
                <th className="px-4 py-3 font-bold text-[#0A192F]">{copy.tableNotes}</th>
              </tr>
            </thead>
            <tbody>
              {insuranceRows.map((row) => (
                <tr key={row.type} className="border-b border-[#e2e8f0] last:border-0">
                  <td className="px-4 py-3 font-semibold text-[#0A192F]">{row.type}</td>
                  <td className="px-4 py-3">
                    {row.required ? (
                      <span className="rounded-full bg-[#B29475]/15 px-2 py-0.5 text-xs font-bold text-[#6b5a48]">
                        {copy.yes}
                      </span>
                    ) : (
                      <span className="text-[#777777]">{copy.optional}</span>
                    )}
                  </td>
                  <td className={`px-4 py-3 ${livingTheme.body}`}>{row.summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="driving-tips">
        <h2 id="driving-tips" className={livingTheme.heading}>
          {copy.quickTips}
        </h2>
        <div className="mt-6">
          <LivingIconCards items={getTips()} />
        </div>
      </section>

      <section aria-labelledby="driving-pattaya-title">
        <h2 id="driving-pattaya-title" className={livingTheme.heading}>
          {copy.pattayaTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.pattayaSubtitle}</p>
        <ul className="mt-6 space-y-3">
          {hotspots.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-xl border border-[#D7CBBA]/50 bg-white px-4 py-3 text-sm leading-relaxed text-[#444748]"
            >
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#B29475]" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="driving-moto-title">
        <h2 id="driving-moto-title" className={livingTheme.heading}>
          {copy.motoTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.motoSubtitle}</p>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {vehicles.map((v) => (
            <article
              key={v.id}
              className="rounded-2xl border border-[#D7CBBA]/60 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                {v.id === "moto" ? (
                  <Bike className="h-6 w-6 text-[#B29475]" aria-hidden />
                ) : (
                  <Car className="h-6 w-6 text-[#B29475]" aria-hidden />
                )}
                <h3 className="font-bold text-[#0A192F]">{v.title}</h3>
              </div>
              <ul className={`mt-4 space-y-2 text-sm ${livingTheme.body}`}>
                {v.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-[#B29475]">·</span>
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="driving-rental-title">
        <h2 id="driving-rental-title" className={livingTheme.heading}>
          {copy.rentalTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.rentalSubtitle}</p>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {rentalTips.map((tip) => (
            <article
              key={tip.title}
              className="rounded-xl border border-[#e2e8f0] bg-white p-5 shadow-sm"
            >
              <h3 className="font-bold text-[#0A192F]">{tip.title}</h3>
              <p className={`mt-2 text-sm ${livingTheme.body}`}>{tip.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="driving-police-title">
        <h2 id="driving-police-title" className={livingTheme.heading}>
          {copy.policeTitle}
        </h2>
        <p className={`mt-2 ${livingTheme.muted}`}>{copy.policeSubtitle}</p>
        <ul className="mt-6 space-y-3">
          {policeTips.map((tip) => (
            <li
              key={tip}
              className="flex gap-3 rounded-xl border border-[#e2e8f0] bg-white px-4 py-3 text-sm leading-relaxed text-[#444748]"
            >
              <Shield className="mt-0.5 h-4 w-4 shrink-0 text-[#0A192F]" aria-hidden />
              {tip}
            </li>
          ))}
        </ul>
        <p className="mt-4">
          <Link
            href="/living/culture/etiquette"
            className="text-sm font-semibold text-[#B29475] underline-offset-2 hover:underline"
          >
            {copy.etiquette} →
          </Link>
          <span className="mx-2 text-[#D7CBBA]">|</span>
          <Link
            href="/living/safety/emergency-guide"
            className="text-sm font-semibold text-[#B29475] underline-offset-2 hover:underline"
          >
            {copy.emergency} →
          </Link>
        </p>
      </section>

      <LivingFaqSection
        faqs={faqs}
        subtitle={faqSubtitle(language, "Driving", "ขับขี่", "驾驶", "Вождение")}
      />
    </LocalizedLivingPageShell>
  );
}
