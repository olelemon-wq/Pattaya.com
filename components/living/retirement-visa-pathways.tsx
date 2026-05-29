"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { L, t } from "@/lib/i18n/living-helpers";
import { Building2, Plane } from "lucide-react";

export function RetirementVisaPathways() {
  const { language } = useLanguage();

  const pathways = [
    {
      icon: Plane,
      title: t(
        language,
        L('Non-Immigrant "O-A" (Long Stay)', 'วีซ่า Non-Immigrant "O-A"', "Non-Immigrant O-A（长期居留）", 'Виза "O-A"'),
      ),
      subtitle: t(
        language,
        L("Apply at Thai embassy/consulate abroad", "ยื่นที่สถานทูต/กงสุลไทยต่างประเทศ", "在泰国驻外使领馆申请", "В посольстве Таиланда"),
      ),
      points: [
        t(
          language,
          L(
            "For applicants 50+ staying up to 1 year per entry; employment prohibited.",
            "ผู้มีอายุ 50+ พำนักได้ไม่เกิน 1 ปีต่อครั้ง ห้ามทำงาน",
            "50 周岁以上，每次入境最长停留 1 年，禁止工作。",
            "50+, до 1 года за въезд; работа запрещена.",
          ),
        ),
        t(
          language,
          L(
            "Requires police clearance and medical certificate from country of application (notarized).",
            "ต้องมีประวัติอาชญากรรมและใบรับรองแพทย์จากประเทศที่ยื่น (รับรองเอกสาร)",
            "需申请国出具的无犯罪与医疗证明（公证）。",
            "Справки из страны подачи с нотариусом.",
          ),
        ),
        t(
          language,
          L(
            "Visa fee commonly 5,000 THB (multiple entry) — check embassy schedule.",
            "ค่าธรรมเนียมมัก 5,000 บาท (หลายครั้ง) — ตรวจตารางสถานทูต",
            "签证费通常 5,000 泰铢（多次入境）——以使馆为准。",
            "Сбор ~5 000 THB — уточняйте в посольстве.",
          ),
        ),
      ],
    },
    {
      icon: Building2,
      title: t(
        language,
        L("Non-O extension in Thailand", "ต่ออายุ Non-O ในประเทศ", "在泰 Non-O 延期", "Продление Non-O в Таиланде"),
      ),
      subtitle: t(
        language,
        L("Chonburi Immigration — Pattaya area", "Immigration ชลบุรี — พื้นที่พัทยา", "春武里移民局（芭提雅）", "Immigration Чонбури, Паттайя"),
      ),
      points: [
        t(
          language,
          L(
            "Enter on Non-O or eligible visa, then extend 1 year at Immigration with full financial + insurance proof.",
            "เข้าด้วย Non-O หรือวีซ่าที่เหมาะสม แล้วต่อ 1 ปีที่ Immigration พร้อมหลักฐานการเงินและประกัน",
            "持 Non-O 等合适签证入境后，在移民局凭资金与保险证明延期一年。",
            "Въезд с Non-O, продление на 1 год в Immigration.",
          ),
        ),
        t(
          language,
          L(
            "Often same-day or a few days when documents are complete.",
            "มักเสร็จในวันเดียวหรือไม่กี่วันเมื่อเอกสารครบ",
            "材料齐全时通常当日或数日内完成。",
            "Часто в тот же день при полном пакете.",
          ),
        ),
        t(
          language,
          L(
            "Thai address proof required (rental, TM.30, utilities).",
            "ต้องมีหลักฐานที่อยู่ในประเทศ (เช่า TM.30 บิลค่าน้ำไฟ)",
            "需提供泰国地址证明（租约、TM.30、账单）。",
            "Нужен адрес в Таиланде.",
          ),
        ),
      ],
    },
  ];

  return (
    <section aria-labelledby="pathways-title" className="mt-16">
      <p className="text-xs font-bold uppercase tracking-widest text-[#B29475]">
        {t(language, L("Routes", "เส้นทาง", "途径", "Маршруты"))}
      </p>
      <h2
        id="pathways-title"
        className="mt-1 text-2xl font-bold text-[#0A192F] sm:text-3xl"
      >
        {t(
          language,
          L(
            "Two common application routes",
            "2 เส้นทางสมัครที่พบบ่อย",
            "两种常见申请路径",
            "Два распространённых пути",
          ),
        )}
      </h2>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {pathways.map((path) => {
          const Icon = path.icon;
          return (
            <article
              key={path.title}
              className="rounded-2xl border border-[#B29475]/25 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0A192F] text-white">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0A192F]">
                    {path.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#B29475]">
                    {path.subtitle}
                  </p>
                </div>
              </div>
              <ul className="mt-5 space-y-3">
                {path.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm leading-relaxed text-[#444748] before:mt-1.5 before:shrink-0 before:content-['•'] before:text-[#FF7320]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <p className="mt-6 text-xs text-[#777777]">
        {t(
          language,
          L(
            "Official reference:",
            "อ้างอิงทางการ:",
            "官方参考：",
            "Официально:",
          ),
        )}{" "}
        <a
          href="https://mfa.go.th/en/page/non-immigrant-visa-o-a"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#0d9488] hover:underline"
        >
          MFA Thailand — Non-Immigrant Visa O-A
        </a>
      </p>
    </section>
  );
}
