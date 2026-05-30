import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";
import type { PlanTierId, ScenarioId } from "@/lib/insurance/insurance-recommender-logic";

export function getInsuranceRecommenderCopy(lang: LanguageCode) {
  return {
    badge: t(lang, L("Interactive", "เครื่องมือแนะนำ", "互动推荐", "Интерактив")),
    title: t(
      lang,
      L(
        "Insurance recommender & cost simulator",
        "แนะนำแผนประกันและจำลองค่าใช้จ่าย",
        "保险推荐与费用模拟",
        "Подбор полиса и симулятор",
      ),
    ),
    subtitle: t(
      lang,
      L(
        "Answer two quick questions, compare plans, then see what a Pattaya hospital bill could look like with and without cover.",
        "ตอบ 2 คำถาม เปรียบเทียบแผน แล้วดูตัวอย่างค่ารพ.ในพัทยาถ้ามี/ไม่มีประกัน",
        "回答两个问题、对比方案，查看芭提雅有/无保险时的账单示例。",
        "2 вопроса, планы и сценарии счетов.",
      ),
    ),
    ageLabel: t(lang, L("Age range", "ช่วงอายุ", "年龄段", "Возраст")),
    ageUnder50: t(lang, L("Under 50", "ต่ำกว่า 50", "50岁以下", "До 50")),
    age5060: t(lang, L("50 – 60", "50 – 60", "50–60岁", "50–60")),
    age60plus: t(lang, L("60+", "60+", "60岁以上", "60+")),
    visaLabel: t(lang, L("Visa type", "ประเภทวีซ่า", "签证类型", "Тип визы")),
    visaGeneral: t(
      lang,
      L("General long-stay / work", "พำนักระยะยาว / ทำงาน", "长期居留/工作", "Долгое пребывание"),
    ),
    visaOa: t(
      lang,
      L("Retirement O-A / LTR", "เกษียณ O-A / LTR", "退休O-A/LTR", "O-A / LTR"),
    ),
    flowStep1: t(lang, L("Your profile", "โปรไฟล์ของคุณ", "您的资料", "Профиль")),
    flowStep2: t(lang, L("Recommended plans", "แผนที่แนะนำ", "推荐方案", "Рекомендации")),
    flowStep3: t(lang, L("Pattaya cost check", "เช็คค่ารพ.พัทยา", "芭提雅费用", "Сценарии")),
    flowHint: t(
      lang,
      L("Step 1 → Step 2 → Step 3",
        "ขั้นที่ 1 → 2 → 3",
        "第1步 → 2 → 3",
        "Шаг 1 → 2 → 3",
      ),
    ),
    step1Hint: t(
      lang,
      L("Choose age and visa — results update on the right →",
        "เลือกอายุและวีซ่า — ผลจะอัปเดตที่กล่องด้านขวา →",
        "选择年龄和签证——右侧即时更新 →",
        "Выберите возраст и визу — справа →",
      ),
    ),
    step1HintMobile: t(
      lang,
      L("Choose below — plans update in the next box ↓",
        "เลือกด้านล่าง — แผนจะอัปเดตในกล่องถัดไป ↓",
        "选择后——下一栏更新方案 ↓",
        "Выберите — планы ниже ↓",
      ),
    ),
    resultsBanner: t(
      lang,
      L("Your match appears here",
        "ผลแนะนำแสดงที่นี่",
        "推荐结果显示于此",
        "Результат здесь",
      ),
    ),
    resultsFor: t(lang, L("Based on", "จาก", "基于", "Для")),
    plansTitle: t(lang, L("Compare plan tiers", "เปรียบเทียบระดับแผน", "对比方案层级", "Уровни планов")),
    bestFit: t(lang, L("Best fit", "เหมาะที่สุด", "最适合", "Лучший выбор")),
    perMonth: t(lang, L("/ month (estimate)", "/ เดือน (ประมาณ)", "/月（估算）", "/ мес. (оценка)")),
    visaBadge: t(
      lang,
      L("Meets Thai visa requirements",
        "ผ่านเกณฑ์วีซ่าไทย",
        "符合泰国签证要求",
        "Соответствует визе",
      ),
    ),
    scenarioTitle: t(
      lang,
      L("Why you need it in Pattaya",
        "ทำไมต้องมีในพัทยา",
        "为什么在芭提雅需要保险",
        "Зачем в Паттайе",
      ),
    ),
    scenarioSubtitle: t(
      lang,
      L("Pick a scenario — the chart below updates instantly.",
        "เลือกสถานการณ์ — กราฟด้านล่างจะเปลี่ยนทันที",
        "选择场景——下方图表即时更新",
        "Выберите сценарий — график ниже обновится.",
      ),
    ),
    chartBanner: t(
      lang,
      L("Cost comparison updates here",
        "เปรียบเทียบค่าใช้จ่ายแสดงที่นี่",
        "费用对比显示于此",
        "Сравнение здесь",
      ),
    ),
    outOfPocket: t(lang, L("Out-of-pocket", "จ่ายเองเต็มจำนวน", "自费全额", "Без страховки")),
    withInsurance: t(lang, L("With insurance", "มีประกัน", "有保险", "Со страховкой")),
    disclaimer: t(
      lang,
      L(
        "Estimates for education only. Premiums and claims depend on insurer, plan, and hospital. Verify O-A rules with Immigration before purchase.",
        "ประมาณการเพื่อการเรียนรู้เท่านั้น เบี้ยและเคลมขึ้นกับบริษัท แผน และ รพ. ตรวจ O-A กับตม.ก่อนซื้อ",
        "仅供了解。保费与理赔因保险公司、方案和医院而异。购买前向移民局核实O-A要求。",
        "Оценки для ознакомления.",
      ),
    ),
  };
}

export function getInsurancePlanTierCopy(lang: LanguageCode, id: PlanTierId) {
  const tiers: Record<PlanTierId, { name: string; desc: string; features: string[] }> = {
    local: {
      name: t(lang, L("Local IPD (Thailand)", "ประกันไทย IPD", "泰国住院险", "Местный IPD")),
      desc: t(
        lang,
        L(
          "Thailand inpatient focus — popular for O-A extensions and lower premiums.",
          "เน้นผู้ป่วยในในไทย — นิยมต่อ O-A เบี้ยต่ำ",
          "侧重泰国住院——适合O-A续签，保费较低。",
          "Стационар в Таиланде, O-A.",
        ),
      ),
      features: [
        t(lang, L("Thailand hospital network", "เครือข่าย รพ.ไทย", "泰国医院网络", "Сеть Таиланда")),
        t(lang, L("Immigration-approved options", "แผนที่ตม.รับรอง", "移民局认可方案", "Одобрено Immigration")),
      ],
    },
    standard: {
      name: t(lang, L("Standard expat", "เอกซ์แพทมาตรฐาน", "标准外籍险", "Стандарт expat")),
      desc: t(
        lang,
        L(
          "Regional cover with outpatient benefits and direct billing at major Pattaya private hospitals.",
          "คุ้มครองภูมิภาค มีผู้ป่วยนอก เคลมตรงที่รพ.เอกชนพัทยา",
          "区域保障含门诊，芭提雅主要私立医院可直付。",
          "Регион, амбулатория, direct billing.",
        ),
      ),
      features: [
        t(lang, L("IPD + OPD", "IPD + OPD", "住院+门诊", "IPD + OPD")),
        t(lang, L("Direct billing (GOP)", "เคลมตรง (GOP)", "直付（GOP）", "Direct billing")),
      ],
    },
    premium: {
      name: t(lang, L("Premium worldwide", "พรีเมียมทั่วโลก", "全球高端", "Премиум worldwide")),
      desc: t(
        lang,
        L(
          "Global IPMI, evacuation, highest limits — for frequent travel and maximum peace of mind.",
          "IPMI ทั่วโลก ส่งตัว วงเงินสูง — สำหรับเดินทางบ่อย",
          "全球IPMI、医疗转运、高保额——适合经常出行。",
          "Глобальный IPMI, эвакуация.",
        ),
      ),
      features: [
        t(lang, L("Worldwide cover", "คุ้มครองทั่วโลก", "全球保障", "Весь мир")),
        t(lang, L("Evacuation & repatriation", "ส่งตัว/ส่งกลับ", "转运与遣返", "Эвакуация")),
      ],
    },
  };
  return tiers[id];
}

export function getInsuranceScenarioCopy(lang: LanguageCode, id: ScenarioId) {
  const scenarios: Record<ScenarioId, { label: string; desc: string }> = {
    foodPoisoning: {
      label: t(lang, L("Food poisoning", "อาหารเป็นพิษ", "食物中毒", "Пищевое отравление")),
      desc: t(
        lang,
        L("ER + 1–2 nights hydration at a private hospital",
          "ER + พัก 1–2 คืน ให้น้ำเกลือ รพ.เอกชน",
          "私立医院急诊+输液1–2晚",
          "ER + 1–2 ночи",
        ),
      ),
    },
    motorbike: {
      label: t(lang, L("Motorbike accident", "อุบัติเหตุมอเตอร์ไซค์", "摩托车事故", "ДТП на мото")),
      desc: t(
        lang,
        L("Fracture, imaging, surgery — common in Pattaya",
          "กระดูกหัก เอกซเรย์ ผ่าตัด — พบบ่อยในพัทยา",
          "骨折、影像、手术——芭提雅常见",
          "Перелом, снимки, операция",
        ),
      ),
    },
    heart: {
      label: t(lang, L("Heart emergency", "ฉุกเฉินหัวใจ", "心脏急诊", "Сердечная экстренная")),
      desc: t(
        lang,
        L("Cardiac ward + intervention at a tertiary hospital",
          "หอผู้ป่วยหัวใจ + หัตถการ รพ.ระดับตติยภูมิ",
          "三级医院心脏科+介入治疗",
          "Кардиология, вмешательство",
        ),
      ),
    },
  };
  return scenarios[id];
}
