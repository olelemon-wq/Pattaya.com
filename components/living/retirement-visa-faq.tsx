"use client";

import { LivingFaqSection } from "@/components/living/living-faq-section";
import { faqEnTh } from "@/lib/i18n/living-helpers";
import { faqSubtitle } from "@/lib/i18n/messages/living/shells";
import { useLanguage } from "@/components/layout/language-provider";

const faqs = [
  faqEnTh(
    "foreign-bank",
    "Can I use a foreign bank account for the financial requirement?",
    "ใช้บัญชีธนาคารต่างประเทศได้หรือไม่?",
    "Funds must typically be in a Thai bank for two months before application, or show qualifying income in Thailand.",
    "เงินมักต้องอยู่ในบัญชีไทยอย่างน้อย 2 เดือน หรือแสดงรายได้ในประเทศ",
    "财务要求能用外国银行账户吗？",
    "Можно ли использовать иностранный счёт?",
    "通常需在泰国银行账户存满两个月，或证明在泰收入。",
    "Средства обычно должны быть на тайском счёте 2 месяца.",
  ),
  faqEnTh(
    "duration",
    "How long does the retirement visa process take?",
    "ใช้เวลากี่วันในการดำเนินการ?",
    "Document prep takes 1–2 weeks; Immigration extension is often same-day or a few days in Pattaya.",
    "เตรียมเอกสาร 1–2 สัปดาห์ ต่ออายุที่ Immigration มักเสร็จในวันเดียวหรือไม่กี่วัน",
    "退休签证流程要多久？",
    "Сколько занимает процесс?",
    "文件准备约 1–2 周；芭提雅移民局续签常当日或数日完成。",
    "Подготовка 1–2 недели; продление часто в тот же день.",
  ),
  faqEnTh(
    "insurance-amount",
    "What medical insurance coverage is required?",
    "ประกันสุขภาพต้องคุ้มครองเท่าไหร่?",
    "Commonly outpatient 40,000 THB and inpatient 400,000 THB minimum, or equivalent approved plans.",
    "มักต้องมี OP 40,000 บาท และ IP 400,000 บาท หรือแผนที่ Immigration รับรอง",
    "需要多少医疗保险额度？",
    "Какая страховка нужна?",
    "通常门诊至少 4 万泰铢、住院 40 万泰铢或等效认可方案。",
    "Обычно 40 000 THB амбулаторно и 400 000 стационар.",
  ),
  faqEnTh(
    "90-day",
    "What is 90-day reporting and do I need to do it?",
    "รายงานตัว 90 วันคืออะไร?",
    "Every 90 days you must report your address to Immigration (online, mail, or in person).",
    "ทุก 90 วันต้องรายงานที่อยู่ต่อ Immigration",
    "什么是90天报到？",
    "Что такое отчёт 90 дней?",
    "每 90 天须向移民局报告住址（网上、邮寄或现场）。",
    "Каждые 90 дней — отчёт об адресе в Immigration.",
  ),
  faqEnTh(
    "work",
    "Can I work on a retirement visa?",
    "ทำงานได้ไหมด้วยวีซ่าเกษียณ?",
    "Employment of any kind is prohibited on O-A / retirement extensions. Volunteering or remote work for overseas employers still needs careful legal review.",
    "ห้ามทำงานทุกประเภทบนวีซ่า O-A / ต่ออายุเกษียณ",
    "退休签证可以工作吗？",
    "Можно ли работать?",
    "O-A 禁止在泰就业；远程为海外雇主工作也需法律咨询。",
    "Работа в Таиланде на O-A запрещена.",
  ),
  faqEnTh(
    "re-entry",
    "What is a re-entry permit?",
    "ใบอนุญาตกลับเข้าประเทศคืออะไร?",
    "If you leave Thailand without a re-entry permit, your extension may be cancelled. Get single or multiple re-entry before travel.",
    "ออกนอกประเทศโดยไม่มี re-entry อาจเสียสถานะต่ออายุ — ขอ single/multiple ก่อนเดินทาง",
    "什么是再入境许可？",
    "Что такое re-entry?",
    "离境前须办理再入境许可，否则延期可能失效。",
    "Re-entry permit перед выездом.",
  ),
  faqEnTh(
    "renewal-balance",
    "How long must 800,000 THB stay in the bank for renewal?",
    "เงิน 800,000 ต้องอยู่ในบัญชีกี่เดือนก่อนต่ออายุ?",
    "First applications often require 2 months; many Immigration offices ask for 3 months before annual renewal — confirm with Chonburi.",
    "ครั้งแรกมัก 2 เดือน ต่ออายุหลายที่ขอ 3 เดือน — ยืนยันกับชลบุรี",
    "续签前 80 万要存多久？",
    "Сколько месяцев 800 000 THB?",
    "首次常 2 个月；续签许多要求 3 个月。",
    "Первично 2 мес., продление часто 3 мес.",
  ),
  faqEnTh(
    "ox-visa",
    "What is the difference between O-A and Non-OX?",
    "O-A กับ Non-OX ต่างกันอย่างไร?",
    "Non-OX is a 10-year programme with higher financial thresholds (e.g. 3 million THB deposit). O-A is the standard 1-year renewable route most retirees use.",
    "Non-OX 10 ปี วงเงินสูงกว่า (เช่น 3 ล้านบาท) O-A ต่อปีที่คนส่วนใหญ่ใช้",
    "O-A 和 Non-OX 有何区别？",
    "O-A vs Non-OX?",
    "Non-OX 为 10 年计划，资金门槛更高（如 300 万泰铢存款）；O-A 为常见的每年续签路径。",
    "Non-OX — 10 лет и выше порог; O-A — стандарт.",
  ),
  faqEnTh(
    "spouse",
    "Can my spouse qualify on my retirement visa?",
    "คู่สมรสสามารถตามวีซ่าเกษียณได้ไหม?",
    "Dependents may apply for Non-O as spouse with marriage certificate and financial proof.",
    "คู่สมรสอาจขอ Non-O พร้อมทะเบียนสมรสและหลักฐานการเงิน",
    "配偶能随退休签证吗？",
    "Может ли супруг(а) получить визу?",
    "配偶可凭结婚证与资金证明申请 Non-O 依亲签。",
    "Супруг(а) может оформить Non-O с документами.",
  ),
];

export function RetirementVisaFaq() {
  const { language } = useLanguage();

  return (
    <LivingFaqSection
      faqs={faqs}
      subtitle={faqSubtitle(language, "Retirement visa", "วีซ่าเกษียณ", "退休签证", "Пенсионная виза")}
      titleId="faq-title"
    />
  );
}
