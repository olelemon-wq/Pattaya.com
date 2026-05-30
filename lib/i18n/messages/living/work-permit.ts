import type { LanguageCode } from "@/lib/i18n/languages";
import { L, t } from "@/lib/i18n/living-helpers";

export function getWorkPermitPage(lang: LanguageCode) {
  return {
    introTitle: t(lang, L("Work legally in Thailand", "ทำงานในไทยอย่างถูกกฎหมาย", "在泰合法工作", "Легальная работа в Таиланде")),
    introBody: t(
      lang,
      L(
        "Working in Thailand without a permit is illegal — including full-time, part-time, and even unpaid volunteer roles. To work or run a business in Pattaya legally, you need a Non-Immigrant Visa (Category B) and a Work Permit together at all times.",
        "การทำงานในไทยโดยไม่มีใบอนุญาตผิดกฎหมาย — รวมงานประจำ พาร์ทไทม์ และงานอาสาสมัคร หากต้องการทำงานหรือเปิดธุรกิจในพัทยาอย่างถูกต้อง ต้องมี Non-Immigrant Visa ประเภท B และ Work Permit ควบคู่กันเสมอ",
        "在泰无工作许可即属违法（含全职、兼职甚至志愿工作）。要在芭提雅合法工作或经商，须同时持有 Non-Immigrant B 签证与工作许可。",
        "Без разрешения работать нельзя. Нужны виза Non-Immigrant B и Work Permit.",
      ),
    ),
    companyTitle: t(
      lang,
      L("Employer & company requirements", "เงื่อนไขบริษัทที่จ้างต่างชาติ", "雇主与公司条件", "Требования к работодателю"),
    ),
    companySubtitle: t(
      lang,
      L(
        "Whether you join a Thai company or set up your own in Pattaya.",
        "ไม่ว่าจะเข้าทำงานบริษัทไทยหรือเปิดบริษัทเองในพัทยา",
        "无论加入泰企还是在芭提雅创业。",
        "Работа в тайской компании или свой бизнес.",
      ),
    ),
    checklistTitle: t(lang, L("Your document checklist", "เอกสารที่คุณต้องเตรียม", "个人材料清单", "Чек-лист документов")),
    checklistSubtitle: t(
      lang,
      L("Personal documents before filing with the Department of Employment.",
        "เอกสารส่วนตัวก่อนยื่นกับกรมการจัดหางาน",
        "向泰国劳工部提交前的个人材料。",
        "Личные документы для Department of Employment.",
      ),
    ),
    processTitle: t(lang, L("Application timeline", "ขั้นตอนการขอแบบย่อ", "申请流程", "Процесс")),
    processSubtitle: t(
      lang,
      L("What happens first, and how long it usually takes.",
        "ลำดับขั้นตอนและระยะเวลาโดยประมาณ",
        "先后顺序与大致耗时。",
        "Порядок и сроки.",
      ),
    ),
    rulesTitle: t(lang, L("Crucial rules", "ข้อควรระวังและกฎเหล็ก", "关键规则", "Важные правила")),
    rulesSubtitle: t(
      lang,
      L("Violations can lead to fines, deportation, and future visa bans.",
        "ฝ่าฝืนอาจโดนปรับ เนรเทศ และห้ามขอวีซ่าในอนาคต",
        "违规可能导致罚款、驱逐及拒签。",
        "Нарушения — штрафы и депортация.",
      ),
    ),
    pattayaTitle: t(lang, L("Pattaya & Chonburi office", "สำนักงานพัทยา / ชลบุรี", "芭提雅与春武里办事处", "Офис в Паттайе")),
    pattayaBody: t(
      lang,
      L(
        "Work permits for Pattaya employers are processed through the Chonburi Provincial Employment Office (Department of Employment). Confirm the latest branch address and appointment rules on the official DOL website before visiting.",
        "ใบอนุญาตสำหรับนายจ้างในพัทยาดำเนินการผ่านสำนักงานจัดหางานจังหวัดชลบุรี ตรวจสอบที่อยู่สาขาและการนัดหมายล่าสุดบนเว็บไซต์กรมการจัดหางานก่อนเดินทาง",
        "芭提雅雇主的工作许可由春武里省劳工厅（泰国劳工部）办理——到访前请在官网确认最新地址与预约规定。",
        "Подача через Provincial Employment Office, Chonburi — уточните адрес на сайте DOL.",
      ),
    ),
    ltrTitle: t(lang, L("LTR & remote work pathways", "เส้นทาง LTR / ทำงานรีโมต", "LTR 与远程工作通道", "LTR и удалённая работа")),
    ltrBody: t(
      lang,
      L(
        "Remote workers and qualifying professionals may use the Long-Term Resident (LTR) visa instead of a classic employer-sponsored permit — separate rules and BOI benefits may apply.",
        "ผู้ทำงานรีโมตหรือผู้เชี่ยวชาญที่เข้าเงื่อนไขอาจใช้วีซ่า LTR แทน work permit แบบนายจ้าง — มีกฎและสิทธิ BOI แยกต่างหาก",
        "符合条件的远程工作者可申请 LTR 长期居留签证，规则与雇主担保工作证不同。",
        "LTR — отдельный маршрут для удалённой работы.",
      ),
    ),
    livingHub: t(lang, L("Living hub →", "ศูนย์ไลฟ์สไตล์ →", "生活中心 →", "Раздел «Жизнь» →")),
    retirementVisa: t(lang, L("Retirement visa →", "วีซ่าเกษียณ →", "退休签证 →", "Пенсионная виза →")),
    thailandElite: t(lang, L("Thailand Elite →", "Thailand Elite →", "泰国精英签 →", "Thailand Elite →")),
    prohibitedTitle: t(lang, L("Reserved occupations", "งานที่สงวนให้คนไทย", "泰国籍保留职业", "Запрещённые профессии")),
  };
}

export function getWorkPermitCompanyReqs(lang: LanguageCode) {
  return [
    {
      title: t(lang, L("Paid-up capital", "ทุนจดทะเบียนชำระแล้ว", "实缴注册资本", "Уставный капитал")),
      text: t(
        lang,
        L(
          "At least 2 million THB per foreign employee (1 million THB if married to a Thai national).",
          "อย่างน้อย 2 ล้านบาทต่อคนต่างชาติ 1 คน (1 ล้านบาทหากแต่งงานกับคนไทย)",
          "每名外籍员工至少200万泰铢实缴资本（与泰国人结婚者为100万）。",
          "Минимум 2 млн бат на иностранца (1 млн при браке с тайцем).",
        ),
      ),
    },
    {
      title: t(lang, L("Thai staff ratio", "โควตาพนักงานไทย", "泰籍员工比例", "Квота тайских сотрудников")),
      text: t(
        lang,
        L(
          "Four Thai employees per one foreign work permit — verified through social security filings (BOI companies may have exemptions).",
          "จ้างคนไทย 4 คนต่อ work permit ต่างชาติ 1 ใบ — ตรวจจากประกันสังคม (บริษัท BOI อาจยกเว้น)",
          "每本外籍工作证须配4名泰籍员工——以社保申报核验（BOI企业或有豁免）。",
          "4 тайских сотрудника на 1 иностранца (BOI — исключения).",
        ),
      ),
    },
    {
      title: t(lang, L("Registered & compliant", "จดทะเบียนและภาษีครบ", "注册与税务合规", "Регистрация и налоги")),
      text: t(
        lang,
        L(
          "Valid company registration, VAT where required, filed tax returns, and a real office address that can sponsor permits.",
          "จดทะเบียนถูกต้อง มี VAT ตามเกณฑ์ ยื่นภาษีและงบการเงิน และมีที่ตั้งสำนักงานจริง",
          "公司合法注册、按规定增值税、报税并具备可担保的实体办公地址。",
          "Регистрация, НДС, отчётность, реальный офис.",
        ),
      ),
    },
  ];
}

export function getWorkPermitChecklist(lang: LanguageCode): string[] {
  return [
    t(
      lang,
      L(
        "Passport with valid Non-Immigrant B visa (business visa must be obtained before applying for a work permit).",
        "พาสปอร์ตพร้อม Non-B ที่ยังไม่หมดอายุ (ต้องมีวีซ่าธุรกิจก่อนยื่น work permit)",
        "有效 Non-Immigrant B 签证的护照（须先取得商务签证再申请工作许可）。",
        "Паспорт с действующей визой Non-Immigrant B.",
      ),
    ),
    t(
      lang,
      L(
        "Medical certificate issued within 30 days — certifying no prohibited diseases (e.g. active TB, syphilis stage 3, drug addiction).",
        "ใบรับรองแพทย์ไม่เกิน 30 วัน — ระบุว่าไม่เป็นโรคต้องห้าม เช่น วัณโรค ซิฟิลิสระยะ 3 ยาเสพติด",
        "30天内体检证明——证明无法定禁止疾病（如活动性肺结核、三期梅毒、吸毒等）。",
        "Медсправка до 30 дней.",
      ),
    ),
    t(
      lang,
      L(
        "Education certificates, CV/resume, and employment reference letters from previous employers.",
        "วุฒิการศึกษา เรซูเม และหนังสือรับรองการทำงานจากที่ทำงานเก่า",
        "学历证书、简历及前雇主工作证明。",
        "Дипломы, CV, рекомендации.",
      ),
    ),
    t(
      lang,
      L(
        "Three passport photos (3×4 cm) for the work permit booklet/card.",
        "รูปถ่าย 3x4 ซม. จำนวน 3 ใบ สำหรับติดใบอนุญาต",
        "3张 3×4 cm 证件照。",
        "3 фото 3×4 см.",
      ),
    ),
  ];
}

export function getWorkPermitSteps(lang: LanguageCode) {
  return [
    {
      step: 1,
      title: t(lang, L("Employer invitation & Non-B visa", "หนังสือเชิญและวีซ่า Non-B", "雇主邀请与 Non-B", "Приглашение и Non-B")),
      text: t(
        lang,
        L(
          "Your employer issues an invitation letter so you can apply for a Non-B visa at a Thai embassy abroad — or convert your visa in Thailand if eligible.",
          "นายจ้างออกหนังสือเชิญเพื่อขอ Non-B ที่สถานทูตไทย — หรือเปลี่ยนประเภทวีซ่าในไทยหากเข้าเงื่อนไข",
          "雇主出具邀请函，向泰国驻外使领馆申请 Non-B，或在符合条件下于泰境内转换签证。",
          "Приглашение → виза Non-B в посольстве или конвертация.",
        ),
      ),
    },
    {
      step: 2,
      title: t(lang, L("E-Work Permit application", "ยื่น E-Work Permit", "在线申请 E-Work Permit", "E-Work Permit")),
      text: t(
        lang,
        L(
          "After entering Thailand, the company submits your application through the Department of Employment’s online E-Work Permit system.",
          "เมื่อเข้าไทยแล้ว บริษัทยื่นผ่านระบบ E-Work Permit ออนไลน์ของกรมการจัดหางาน",
          "入境后，公司通过泰国劳工部 E-Work Permit 在线系统提交申请。",
          "Компания подаёт через E-Work Permit онлайн.",
        ),
      ),
    },
    {
      step: 3,
      title: t(lang, L("In-person pickup", "แสดงตัวและรับใบอนุญาต", "到场领取", "Получение")),
      text: t(
        lang,
        L(
          "Processing usually takes 7–14 working days. You must appear in person to receive the digital/physical work permit booklet.",
          "ใช้เวลาประมาณ 7–14 วันทำการ ต้องแสดงตัวรับเล่มดิจิทัล/เล่มจริง",
          "通常7–14个工作日，须本人到场领取电子/纸质工作证。",
          "7–14 рабочих дней; личное получение.",
        ),
      ),
    },
    {
      step: 4,
      title: t(lang, L("Renewals & 90-day report", "ต่ออายุและรายงาน 90 วัน", "续签与90天报到", "Продление")),
      text: t(
        lang,
        L(
          "Renew the work permit and visa extension annually; continue 90-day Immigration reporting even with a valid permit.",
          "ต่อ work permit และวีซ่าทุกปี ยังต้องรายงาน 90 วันกับ ตม. แม้มีใบอนุญาต",
          "每年续工作证与签证；即使有工作许可仍须向移民局做90天报到。",
          "Ежегодное продление; отчёт 90 дней сохраняется.",
        ),
      ),
    },
  ];
}

export function getWorkPermitRules(lang: LanguageCode) {
  return [
    {
      title: t(lang, L("Employer & location locked", "ผูกนายจ้างและสถานที่", "绑定雇主与地点", "Привязка к работодателю")),
      text: t(
        lang,
        L(
          "Your permit lists the employer, job title, and office address. You cannot work for another company or from unapproved locations — that is illegal.",
          "ใบอนุญาตระบุนายจ้าง ตำแหน่ง และที่ตั้งออฟฟิศ ห้ามทำงานให้บริษัทอื่นหรือนอกสถานที่ที่อนุญาต",
          "工作证载明雇主、职位与办公地址；不得为其他公司或在未批准地点工作。",
          "Нельзя работать у другого работодателя или вне адреса.",
        ),
      ),
    },
    {
      title: t(lang, L("Reserved occupations", "งานที่สงวนให้คนไทย", "泰国籍保留职业", "Запрещённые профессии")),
      text: t(
        lang,
        L(
          "Certain jobs are reserved for Thai nationals only — e.g. taxi driving, tour guiding, and hairdressing/beauty services.",
          "งานบางประเภทสงวนให้คนไทยเท่านั้น เช่น ขับแท็กซี่ ไกด์ ตัดผม/เสริมสวย",
          "部分职业仅限泰国人——如出租车驾驶、导游、理发美容等。",
          "Такси, гиды, парикмахеры — только для тайцев.",
        ),
      ),
    },
    {
      title: t(lang, L("90-day reporting still applies", "ยังต้องรายงาน 90 วัน", "仍需90天报到", "Отчёт 90 дней")),
      text: t(
        lang,
        L(
          "A work permit does not replace Immigration’s 90-day residence reporting — file on time at Pattaya (Jomtien) or online where eligible.",
          "มี work permit ไม่ได้ยกเว้นรายงาน 90 วัน — ยื่นตรงเวลาที่ ตม. พัทยา (จอมเทียน) หรือออนไลน์หากเข้าเงื่อนไข",
          "工作许可不能替代移民局90天报到——请在芭提雅（春堤）或符合条件时在线按时提交。",
          "Work permit не отменяет отчёт 90 дней.",
        ),
      ),
    },
  ];
}

export function getWorkPermitApplicantReqs(lang: LanguageCode) {
  return [
    {
      title: t(lang, L("Valid Non-Immigrant B visa", "วีซ่า Non-B ที่ถูกต้อง", "有效 Non-B 签证", "Виза Non-B")),
      text: t(
        lang,
        L(
          "Obtain the business visa before the work permit application at the Department of Employment.",
          "ต้องมีวีซ่าธุรกิจก่อนยื่น work permit ที่กรมการจัดหางาน",
          "须先取得商务签证再向劳工部申请工作许可。",
          "Сначала Non-B, затем work permit.",
        ),
      ),
    },
    {
      title: t(lang, L("Role & qualifications", "ตำแหน่งและคุณสมบัติ", "职位与资质", "Должность")),
      text: t(
        lang,
        L(
          "Job description, education, and experience must match Department of Employment standards for your position.",
          "ลักษณะงาน การศึกษา และประสบการณ์ต้องตรงมาตรฐานกรมการจัดหางาน",
          "职位描述、学历与经验须符合劳工部对该岗位的要求。",
          "Должность и квалификация по нормам DOL.",
        ),
      ),
    },
    {
      title: t(lang, L("Medical certificate", "ใบรับรองแพทย์", "体检证明", "Медсправка")),
      text: t(
        lang,
        L(
          "Thai clinic or hospital form within 30 days, certifying fitness to work.",
          "ใบตรวจจากคลินิกหรือโรงพยาบาลไทยภายใน 30 วัน",
          "30天内泰国诊所或医院出具的健康证明。",
          "Медформа в тайской клинике до 30 дней.",
        ),
      ),
    },
  ];
}
