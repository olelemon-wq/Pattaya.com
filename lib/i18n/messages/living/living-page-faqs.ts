import { faq, L } from "@/lib/i18n/living-helpers";

export const hospitalsFaqs = [
  faq(
    "insurance",
    L("Which hospitals accept expat health insurance?", "โรงพยาบาลไหนรับประกันต่างชาติ?", "哪些医院接受外籍保险？", "Какие клиники принимают страховку?"),
    L(
      "Bangkok Hospital Pattaya, Pattaya Memorial, and Pattaya International commonly work with international insurers. Contact the international desk with your policy number before elective care.",
      "กรุงเทพพัทยา พัทยาเมโมเรียล และพัทยาอินเตอร์มักรับประกันนานาชาติ ติดต่อแผนกต่างประเทศก่อนทำหัตถการ",
      "曼谷医院芭提雅分院、Pattaya Memorial 与 Pattaya International 常对接国际保险；择期就诊前先联系国际部并提供保单号。",
      "Bangkok Hospital Pattaya, Memorial и International часто работают со страховками; свяжитесь с international desk до планового лечения.",
    ),
  ),
  faq(
    "emergency",
    L("What number do I call in a medical emergency?", "ฉุกเฉินโทรเบอร์ไหน?", "急救打什么？", "Экстренный номер?"),
    L(
      "Dial 1669 for ambulance. Tourist Police 1155 for coordination. Bangkok Hospital Pattaya ER hotline 1719.",
      "1669 รถพยาบาล 1155 ตำรวจท่องเที่ยว 1719 กรุงเทพพัทยา",
      "急救救护车 1669；旅游警察协调 1155；曼谷医院芭提雅急诊 1719。",
      "1669 — скорая; 1155 — туристическая полиция; 1719 — Bangkok Hospital ER.",
    ),
  ),
  faq(
    "public",
    L("Can foreigners use public hospitals?", "ชาวต่างชาติใช้ รพ.รัฐได้ไหม?", "能用公立医院吗？", "Госбольницы?"),
    L(
      "Yes — Pattaya City and Pattaya Patimakun hospitals accept foreigners; fees are lower but waits and language support vary.",
      "ได้ — เมืองพัทยาและพัทยาปัทมคุณรับชาวต่างชาติ ราคาต่ำแต่อาจรอคิว",
      "可以——Pattaya City 与 Pattaya Patimakun 接受外籍；费用较低但等候与英语支持因院而异。",
      "Да — Pattaya City и Patimakun принимают иностранцев; дешевле, но очереди и язык.",
    ),
  ),
  faq(
    "clinic",
    L("Should I go to a clinic or hospital?", "ไปคลินิกหรือโรงพยาบาล?", "诊所还是医院？", "Клиника или больница?"),
    L(
      "Clinics suit minor illness; hospitals for emergencies, surgery, or specialist care.",
      "คลินิกสำหรับอาการเล็กน้อย รพ.สำหรับฉุกเฉิน ผ่าตัด หรือเฉพาะทาง",
      "轻症去诊所；急诊、手术或专科选医院。",
      "Клиника — лёгкие случаи; больница — экстренно, операции, специалисты.",
    ),
  ),
  faq(
    "visa-medical",
    L("Where do I get a visa medical certificate?", "ใบตรวจสุขภาพวีซ่าทำที่ไหน?", "签证体检在哪做？", "Медосмотр для визы?"),
    L(
      "Approved clinics and hospitals issue Immigration-standard forms — confirm with Chonburi Immigration.",
      "คลินิกและรพ.ที่อนุมัติออกแบบฟอร์มตม. — ยืนยันกับตม.ชลบุรี",
      "认可诊所与医院可出具移民局标准表格——向春武里移民局确认。",
      "Одобренные клиники выдают формы Immigration — уточните в Чонбури.",
    ),
  ),
];

export const scamAlertsFaqs = [
  faq(
    "report",
    L("Where do I report a scam in Pattaya?", "แจ้งความที่ไหน?", "在芭提雅如何报案？", "Куда сообщить?"),
    L(
      "Tourist Police 1155 (24/7, English). Pattaya office: +66 38 429 371. Dial 191 for immediate threats.",
      "Tourist Police 1155 24 ชม. สำนักงาน +66 38 429 371 191 ฉุกเฉิน",
      "旅游警察 1155（24 小时，有英语）；芭提雅办公室 +66 38 429 371；即时威胁拨 191。",
      "Tourist Police 1155 (24/7, англ.); офис +66 38 429 371; 191 — угроза.",
    ),
  ),
  faq(
    "money",
    L("Can I recover money sent to a scammer?", "ขอเงินคืนได้ไหม?", "转给骗子后能追回吗？", "Можно ли вернуть деньги?"),
    L(
      "Recovery is difficult once transferred overseas. Report within 24 hours with bank receipts and chat logs.",
      "ยากเมื่อโอนต่างประเทศแล้ว แจ้งภายใน 24 ชม.พร้อมสลิป",
      "款项汇往境外后很难追回；24 小时内报案并保留银行回单与聊天记录。",
      "После перевода за рубеж вернуть сложно; за 24 ч с квитанциями и перепиской.",
    ),
  ),
  faq(
    "rental",
    L("How do I avoid rental deposit fraud?", "หลีกเลี่ยงโกงค่ามัดจำเช่า?", "如何避免租房押金诈骗？", "Как избежать мошенничества с залогом?"),
    L(
      "Sign bilingual leases, photograph move-in condition, confirm TM30, never wire a full year to personal accounts.",
      "สัญญาสองภาษา ถ่ายรูปสภาพห้อง TM30 อย่าโอนปีเต็มเข้าบัญชีส่วนตัว",
      "签双语租约、拍照入住状况、确认 TM30，勿向个人账户汇一整年租金。",
      "Двуязычный договор, фото при заселении, TM30; не переводите год на личный счёт.",
    ),
  ),
  faq(
    "jetski",
    L("Should I rent a jet-ski in Pattaya?", "ควรเช่าเจ็ทสกีไหม?", "应该在芭提雅租摩托艇吗？", "Арендовать jet-ski?"),
    L(
      "The jet-ski damage scam is extremely common. If you rent, video every angle and never leave your passport.",
      "เจ็ทสกีโกงบ่อยมาก ถ้าเช่าต้องถ่ายวิดีโอและอย่าฝากพาสปอร์ต",
      "摩托艇损坏诈骗极常见；若租务必全程录像，切勿押护照。",
      "Мошенничество с jet-ski очень частое; снимайте видео, не оставляйте паспорт.",
    ),
  ),
  faq(
    "app",
    L("Is there an app for tourist police?", "มีแอปตำรวจท่องเที่ยวไหม?", "有旅游警察应用吗？", "Приложение полиции?"),
    L(
      'Yes — "Tourist Police I Lert U" with SOS button and English chat. Search on App Store or Google Play.',
      "มี — Tourist Police I Lert U มี SOS และแชทภาษาอังกฤษ",
      "有——「Tourist Police I Lert U」含 SOS 与英语聊天；在 App Store 或 Google Play 搜索。",
      "Да — «Tourist Police I Lert U» с SOS и чатом на английском.",
    ),
  ),
];

export const ownershipFaqs = [
  faq(
    "quota",
    L("How do I verify the 49% foreign quota?", "ตรวจโควตา 49% อย่างไร?", "如何核实49%外资配额？", "Как проверить квоту 49%?"),
    L(
      "Request a juristic person letter before deposit. On transfer day, match total foreign ownership on the Chanote.",
      "ขอหนังสือนิติบุคคลก่อนมัดจำ วันโอนตรวจสัดส่วนต่างชาติบนโฉนด",
      "付定金前向物业索取证明函；过户日核对 Chanote 上的外资总占比。",
      "Письмо juristic person до депозита; в день сделки — доля иностранцев на Chanote.",
    ),
  ),
  faq(
    "fet",
    L("What is FET and do I need it?", "FET คืออะไร ต้องมีไหม?", "什么是FET？", "Что такое FET?"),
    L(
      "Yes for condo freehold. Funds must come from abroad; the bank issues FET (or Thor Tor 3) for the Land Department.",
      "ต้องมีสำหรับคอนโดกรรมสิทธิ์ เงินต้องโอนจากต่างประเทศ ธนาคารออก FET ให้กรมที่ดิน",
      "公寓永久产权需要；资金须来自境外，银行出具 FET（ธ.ท.3）供土地厅登记。",
      "Да для freehold кондо; средства из-за рубежа; банк выдаёт FET для Land Department.",
    ),
  ),
  faq(
    "lease",
    L("Is a 90-year leasehold safe?", "เช่า 90 ปีปลอดภัยไหม?", "90年租赁安全吗？", "Leasehold на 90 лет?"),
    L(
      "Only registered 30-year terms are guaranteed by law. Renewals must be registered at Pattaya Land Office — side letters alone are not enforceable.",
      "กฎหมายรับประกันเช่าจดทะเบียน 30 ปี ต่ออายุต้องจดที่ดิน ข้อตกลงนอกระบบใช้ไม่ได้",
      "法律仅保障登记 30 年租期；续租须在芭提雅土地厅登记——私下协议无法强制执行。",
      "Гарантированы только 30 лет с регистрацией; продления — в Land Office; side letters не действуют.",
    ),
  ),
  faq(
    "villa",
    L("Can I own a villa 100% as a foreigner?", "ต่างชาติถือวิลล่า 100% ได้ไหม?", "外籍能100%拥有别墅吗？", "Вилла на 100%?"),
    L(
      "You can own the house structure in your name. The land is normally held via a registered lease, not freehold.",
      "เป็นเจ้าของตัวบ้านได้ ที่ดินมักเช่าจดทะเบียน ไม่ใช่กรรมสิทธิ์",
      "房屋结构可登记在您名下；土地通常以登记租赁权持有，非永久产权。",
      "Строение — на ваше имя; земля — registered lease, не freehold.",
    ),
  ),
  faq(
    "rent-first",
    L("Should I rent before buying?", "ควรเช่าก่อนซื้อไหม?", "应该先租再买吗？", "Сначала аренда?"),
    L(
      "Many expats rent 6–12 months to learn neighborhoods, then buy a condo if quota and FET are clear.",
      "หลายคนเช่า 6–12 เดือนก่อน แล้วซื้อคอนโดเมื่อโควตาและ FET พร้อม",
      "许多外籍先租 6–12 个月熟悉区域，配额与 FET 明确后再买公寓。",
      "Многие арендуют 6–12 мес., затем покупают кондо при ясной квоте и FET.",
    ),
  ),
];

export const drivingFaqs = [
  faq(
    "convert",
    L("Can I convert my home country license?", "แปลงใบขับขี่เดิมได้ไหม?", "能否转换本国驾照？", "Конвертация иностранных прав?"),
    L(
      "Many nationals skip the practical test with a valid home license, embassy translation, and medical certificate at Chonburi DLT — confirm your country on the DLT list first.",
      "หลายสัญชาติข้ามสอบขับถ้ามีใบเดิม แปลสถานทูต และใบตรวจสุขภาพ — ตรวจรายชื่อสัญชาติที่กรมขนส่งก่อน",
      "许多国家持有效本国驾照、使馆翻译件与体检证明可在春武里陆运厅免路考——先确认国籍是否在 DLT 清单。",
      "Многие без практического экзамена с действующими правами, переводом посольства и медсправкой в DLT Чонбури — проверьте список стран.",
    ),
  ),
  faq(
    "idp",
    L("Is an International Driving Permit enough?", "ใบขับขี่สากลพอไหม?", "国际驾照够用吗？", "Достаточно ли IDP?"),
    L(
      "Tourists may use IDP with home license for a limited period. Long-stay visa holders should obtain a Thai license — insurers and police expect it.",
      "นักท่องเที่ยวใช้ IDP กับใบเดิมได้ระยะสั้น ผู้อยู่ระยะยาวควรมีใบไทย ประกันและตำรวจมักต้องการ",
      "游客可在限期内用 IDP 配合本国驾照；长期居留者应办泰国驾照——保险与警察通常要求。",
      "Туристы — IDP + домашние права на короткий срок; долгосрочные — тайские права.",
    ),
  ),
  faq(
    "moto",
    L("Do I need a separate license for a scooter?", "ต้องใบขับขี่แยกสำหรับสกู๊ตเตอร์ไหม?", "踏板需要单独驾照吗？", "Отдельные права на мото?"),
    L(
      "Yes — class A for motorcycles. Riding without it can void insurance and lead to impound.",
      "ใช่ ชั้น A สำหรับมอเตอร์ไซค์ ขี่โดยไม่มีใบอาจประกันไม่คุ้มและถูกยึดรถ",
      "需要——摩托车为 A 类；无证驾驶可能导致保险失效并扣车。",
      "Да — класс A; без него страховка может не действовать, эвакуация.",
    ),
  ),
  faq(
    "fine",
    L("What if police stop me?", "ตำรวจจับได้อย่างไร?", "被警察拦下怎么办？", "Остановка полицией?"),
    L(
      "Show license, registration, and พ.ร.บ. Ask for an official receipt if paying a fine; avoid undocumented payments.",
      "แสดงใบขับขี่ ทะเบียน และ พ.ร.บ. ขอใบเสร็จทางการหากจ่ายค่าปรับ",
      "出示驾照、行驶证与强制险（พ.ร.บ.）；缴罚款须索取正式收据。",
      "Права, регистрация, พ.ร.บ.; штраф — только с официальной квитанцией.",
    ),
  ),
  faq(
    "drink",
    L("What is the alcohol limit?", "จำกัดแอลกอฮอล์เท่าไร?", "酒驾限制是多少？", "Лимит алкоголя?"),
    L(
      "Thailand enforces strict drink-driving penalties — use Grab/Bolt after nightlife in Walking Street or Bali Hai.",
      "ไทยลงโทษเมาขับหนัก — ใช้ Grab/Bolt หลังเที่ยว Walking Street หรือบาลีไฮ",
      "泰国酒驾处罚严厉——Walking Street 或 Bali Hai 夜生活后请用 Grab/Bolt。",
      "Строгие штрафы за алкоголь — Grab/Bolt после ночной жизни.",
    ),
  ),
  faq(
    "accident",
    L("What should I do after an accident?", "อุบัติเหตุต้องทำอย่างไร?", "发生事故怎么办？", "ДТП — что делать?"),
    L(
      "Do not leave the scene; call 191, photograph positions, exchange details, and notify insurer within 24 hours.",
      "อย่าออกจากที่เกิดเหตุ โทร 191 ถ่ายรูป แลกข้อมูล แจ้งประกันภายใน 24 ชม.",
      "勿离开现场；拨 191，拍照位置、交换信息，24 小时内通知保险公司。",
      "Не покидайте место; 191, фото, данные, страховщик за 24 ч.",
    ),
  ),
];

export const songthaewFaqs = [
  faq(
    "stop",
    L("How do I stop a songthaew?", "ลงรถอย่างไร?", "如何下车？", "Как выйти?"),
    L(
      "Press the buzzer or tap the roof. Have small notes ready.",
      "กดกริ่งหรือเคาะหลังคา เตรียมเงินย่อย",
      "按铃或敲车顶；备好零钱。",
      "Нажмите кнопку или постучите по крыше; мелочь.",
    ),
  ),
  faq(
    "overpay",
    L("How do I use a Pattaya songthaew without overpaying?", "ขึ้นสองแถวพัทยาไม่ให้โดนแพง?", "芭提雅双条车怎样不被多收钱？", "Как ехать на songthaew?"),
    L(
      'Wave on the normal route — do not ask "Can you go to…?" Press the buzzer and pay 10–20 THB in small notes at the driver.',
      "โบกขึ้นเส้นทางปกติ อย่าถาม “ไป...ได้ไหม” กดกริ่งลง จ่าย 10–20 บาทที่คนขับ",
      "在固定路线招手上车——勿问「能去…吗？」按铃下车，付司机 10–20 泰铢零钱。",
      "Машите на обычном маршруте; не «можете отвезти…»; 10–20 бат водителю.",
    ),
  ),
  faq(
    "grab",
    L("Songthaew vs Grab?", "สองแถวหรือ Grab?", "双条车还是 Grab？", "Songthaew или Grab?"),
    L(
      "Songthaews are cheapest on fixed corridors. Grab wins after ~22:00, for airports, and door-to-door Soi drops.",
      "สองแถวถูกบนเส้นทางคงที่ Grab ดีหลัง 22:00 สนามบิน และซอยคอนโด",
      "固定路线双条最便宜；22 点后、机场与送到 Soi 门口 Grab 更合适。",
      "Songthaew дешевле на маршрутах; после 22:00, аэропорт — Grab.",
    ),
  ),
  faq(
    "queue",
    L("Do I need to queue?", "ต้องต่อคิวไหม?", "需要排队吗？", "Очередь?"),
    L(
      "Yes at busy stops like Wat Chaimongkol — cutting in line is considered very rude.",
      "ใช่ที่ป้ายหลัก เช่น วัดชัยมงคล การแซงคิวหยาบคายมาก",
      "繁忙站点如 Wat Chaimongkol 需排队——插队非常失礼。",
      "Да на оживлённых остановках; не пролезайте вперёд.",
    ),
  ),
  faq(
    "safety",
    L("Are songthaews safe?", "ปลอดภัยไหม?", "安全吗？", "Безопасно?"),
    L(
      "Generally yes on main routes. Hold handrails, pay shared fare only unless you agreed a charter price.",
      "โดยทั่วไปปลอดภัยบนเส้นหลัก จับราว จ่ายราคารถร่วมเว้นแต่ตกลงเช่าเหมาแล้ว",
      "主干道通常安全；扶好扶手，除已包车价外只付共乘价。",
      "На главных маршрутах обычно безопасно; держитесь; платите только shared fare, если не charter.",
    ),
  ),
];

export const thailandEliteFaqs = [
  faq(
    "who",
    L("Who is Thailand Elite best for?", "เหมาะกับใคร?", "适合谁？", "Для кого Elite?"),
    L(
      "High-net-worth individuals and frequent visitors who want premium long-stay without complex financial proofs or queuing at Immigration.",
      "ผู้มีทรัพย์สินสูงและมาไทยบ่อย ต้องการพำนักระยะยาวแบบพรีเมียม ไม่ยุ่งกับเอกสารการเงินซับซ้อน",
      "高净值人士与常访者，希望尊享长期居留、免复杂资金证明与移民局排队。",
      "Состоятельные и частые гости; long-stay без сложных финансов и очередей Immigration.",
    ),
  ),
  faq(
    "work",
    L("Can I work on Thailand Elite?", "ทำงานบน Elite ได้ไหม?", "能工作吗？", "Можно ли работать?"),
    L(
      "No — you need a separate work permit for employment or running a business. Elite is a long-stay privilege, not a work visa.",
      "ไม่ได้ — ต้องมี Work Permit แยก Elite เป็นสิทธิพำนัก ไม่ใช่วีซ่าทำงาน",
      "不能——就业或经营需另办工作许可；Elite 是长期居留特权，非工作签证。",
      "Нет — нужен work permit; Elite — привилегия пребывания, не рабочая виза.",
    ),
  ),
  faq(
    "refund",
    L("Is the membership fee refundable?", "ค่าสมาชิกคืนได้ไหม?", "会费可退吗？", "Возврат взноса?"),
    L(
      "No. Fees are prepaid and non-refundable if you cancel or leave early.",
      "ไม่คืน — เป็นค่าบริการล่วงหน้าแบบจ่ายขาด",
      "不可退——会费为预付一次性，取消或提前离开亦不退。",
      "Нет; предоплата без возврата при отмене.",
    ),
  ),
  faq(
    "pattaya",
    L("Can Elite help with 90-day reporting in Pattaya?", "Elite ช่วยรายงาน 90 วันที่พัทยาได้ไหม?", "芭提雅90天报到？", "90 дней в Паттайе?"),
    L(
      "Yes — assistants can coordinate with Immigration Pattaya (Jomtien) so you avoid long queues.",
      "ได้ — ผู้ช่วยประสาน ตม. พัทยา (จอมเทียน) แทนการยืนคิวเอง",
      "可以——礼宾可协调芭提雅（仲天）移民局，免去自行排队。",
      "Да — ассистенты координируют Immigration Pattaya (Jomtien).",
    ),
  ),
  faq(
    "family",
    L("Can family members join?", "ครอบครัวเข้าร่วมได้ไหม?", "家属能加入吗？", "Семья?"),
    L(
      "Higher tiers allow dependent add-ons — separate applications and fees apply.",
      "แพ็กเกจสูงเพิ่มผู้อยู่ในอุปการณ์ได้ ยื่นและจ่ายแยก",
      "较高等级可添加家属——须单独申请并缴费。",
      "Старшие тарифы — dependents; отдельные заявки и сборы.",
    ),
  ),
];

export const rentalsFaqs = [
  faq(
    "deposit",
    L("How do I get my deposit back?", "ขอเงินประกันคืนอย่างไร?", "如何退回押金？", "Как вернуть залог?"),
    L(
      "Give notice per contract, clean professionally, joint move-out inspection with photos. Deposit must be returned within 30 days if no damage.",
      "แจ้งล่วงหน้าตามสัญญา ทำความสะอาด ตรวจร่วมตอนย้ายออก พร้อมรูป มัดจำคืนภายใน 30 วันหากไม่เสียหาย",
      "按合同提前通知、专业清洁、联合退房检查并拍照；无损坏则 30 日内退押金。",
      "Уведомление по договору, уборка, совместный осмотр с фото; залог за 30 дней без ущерба.",
    ),
  ),
  faq(
    "tm30",
    L("What if my landlord refuses TM.30?", "เจ้าของไม่ยื่น TM.30 ทำอย่างไร?", "房东不办 TM.30？", "TM.30 отказ?"),
    L(
      "Do not sign until they agree in writing. Without TM.30 you may fail visa extensions and bank KYC in Pattaya.",
      "อย่าเซ็นจนกว่าจะตกลงเป็นหน้าเขียน ไม่มี TM.30 อาจต่อวีซ่าและเปิดบัญชีไม่ได้",
      "未获书面同意勿签约；无 TM.30 可能导致签证续签与银行 KYC 失败。",
      "Не подписывайте без письменного согласия; без TM.30 — проблемы с визой и банком.",
    ),
  ),
  faq(
    "utilities",
    L("Can the landlord charge extra for electricity?", "เจ้าของเก็บค่าไฟแพงกว่าหลวงได้ไหม?", "电费能加价吗？", "Наценка на свет?"),
    L(
      "Yes, some units surcharge 2–3×. Insist on MEA/PEA government billing or a fair per-unit rate in the contract.",
      "ได้บางแห่งบวก 2–3 เท่า ควรจ่ายตามบิลหลวงหรือระบุเรทในสัญญา",
      "可以，部分房源加价 2–3 倍；坚持 MEA/PEA 政府账单或合同写明合理单价。",
      "Да, иногда ×2–3; настаивайте на PEA/MEA или фиксированной ставке в договоре.",
    ),
  ),
  faq(
    "agent",
    L("Should I use a rental agent?", "ควรใช้เอเจนต์ไหม?", "要不要用中介？", "Нужен ли агент?"),
    L(
      "Agents save time and know foreign-friendly buildings. Confirm who pays the fee before viewing.",
      "เอเจนต์ช่วยประหยัดเวลา ยืนยันผู้จ่ายค่านายหน้าก่อนดูห้อง",
      "中介省时且熟悉对外籍友好的楼盘；看房前确认谁付佣金。",
      "Агент экономит время; кто платит комиссию — до просмотра.",
    ),
  ),
  faq(
    "buy",
    L("Rent first or buy a condo?", "เช่าก่อนหรือซื้อเลย?", "先租还是先买？", "Сначала аренда или покупка?"),
    L(
      "Most expats rent 6–12 months to learn areas, then buy if foreign quota is available.",
      "ส่วนใหญ่เช่า 6–12 เดือนก่อน แล้วค่อยซื้อถ้าโควตาพร้อม",
      "多数外籍先租 6–12 个月熟悉区域，有外资配额再购买。",
      "Часто аренда 6–12 мес., затем покупка при доступной квоте.",
    ),
  ),
];

export const healthInsuranceFaqs = [
  faq(
    "retirement",
    L("What coverage does retirement visa need?", "วีซ่าเกษียณต้องมีประกันแบบไหน?", "退休签证需要什么保险？", "Страховка для retirement?"),
    L(
      "Inpatient cover in Thailand, often ฿3M+ per policy year, valid your full stay, from an Immigration-approved insurer — confirm with Chonburi Immigration before buying.",
      "คุ้มครองผู้ป่วยในในไทย มักไม่ต่ำกว่า 3 ล้าน/ปี คุ้มครองตลอดพำนัก จากบริษัทที่อนุมัติ — ตรวจกับตม.ชลบุรีก่อนซื้อ",
      "须在泰国有住院保障，常要求每保单年度 300 万泰铢以上、覆盖全程停留，且来自移民局认可保险公司——购买前向春武里移民局确认。",
      "Стационар в Таиланде, часто от 3 млн бат/год, на весь срок, одобренный Immigration — уточните в Чонбури.",
    ),
  ),
  faq(
    "preexisting",
    L("Are pre-existing conditions covered?", "โรคประจำตัวคุ้มครองไหม?", "既往症保吗？", "Предсуществующие болезни?"),
    L(
      "Often excluded or subject to waiting periods (6–24 months). Disclose honestly — claims can be denied if you omit history.",
      "มักไม่คุ้มหรือรอ 6–24 เดือน แจ้งตรง — เคลมอาจถูกปฏิเสธถ้าปิดบัง",
      "常除外或有 6–24 个月等待期；须如实告知，隐瞒病史可能被拒赔。",
      "Часто исключены или waiting 6–24 мес.; честно указывайте историю.",
    ),
  ),
  faq(
    "direct",
    L("How do I get direct billing in Pattaya?", "เคลมตรงในพัทยาทำอย่างไร?", "如何在芭提雅直付？", "Direct billing?"),
    L(
      "Call your insurer before elective care. At admission, give your policy number to the international desk for GOP approval.",
      "โทรประกันก่อนนัด แจ้งเลขกรมธรรม์ที่แผนกต่างชาติเพื่อขอ GOP",
      "择期就诊前先致电保险公司；入院时向国际部提供保单号申请 GOP。",
      "Звоните страховщику до планового лечения; GOP через international desk.",
    ),
  ),
  faq(
    "travel",
    L("Can I use travel insurance for O-A?", "ประกันเดินทางใช้ O-A ได้ไหม?", "旅游险能办O-A吗？", "Travel для O-A?"),
    L(
      "No — travel policies lack the inpatient limits and validity Immigration requires for retirement extensions.",
      "ไม่ได้ — ประกันเดินทางไม่มีวงเงินและระยะเวลาตามที่ตม.กำหนด",
      "不能——旅游险的住院额度与有效期不符合退休签延期要求。",
      "Нет — travel не соответствует лимитам и срокам Immigration.",
    ),
  ),
  faq(
    "local",
    L("Thai vs international insurer?", "ประกันไทยหรือต่างชาติดี?", "泰国险还是国际险？", "Тайская или международная?"),
    L(
      "Thai plans: lower cost, O-A lists. International: better evacuation and global networks. Many retirees use Thai-approved local policies; frequent travellers prefer IPMI.",
      "ไทย: เบี้ยต่ำ อยู่ในลิสต์ O-A ต่างชาติ: ส่งตัวและเครือข่ายโลก",
      "泰险：保费低、在 O-A 认可名单；国际险：撤离与全球网络更好。退休者多用泰方认可本地险，常旅客偏好 IPMI。",
      "Тайские — дешевле, списки O-A; международные — эвакуация; IPMI для частых поездок.",
    ),
  ),
];

export const workPermitFaqs = [
  faq(
    "illegal",
    L("Can I volunteer or work part-time without a permit?", "อาสาหรือพาร์ทไทม์ไม่มีใบอนุญาตได้ไหม?", "无许可能否兼职或志愿？", "Работа без permit?"),
    L(
      "No — any paid or unpaid work without a valid work permit is illegal in Thailand.",
      "ไม่ได้ — งานมีค่าจ้างหรืออาสาสมัครโดยไม่มีใบอนุญาตผิดกฎหมาย",
      "不能——无论有偿或无偿，无有效工作许可在泰工作均属违法。",
      "Нет — любая работа без permit незаконна.",
    ),
  ),
  faq(
    "ratio",
    L("What is the Thai-to-foreign employee ratio?", "อัตราส่วนคนไทยต่อต่างชาติ?", "泰外籍员工比例？", "Соотношение 4:1?"),
    L(
      "Typically four Thai employees per one foreign work permit, verified via social security (BOI firms may differ).",
      "มัก 4 คนไทยต่อ work permit ต่างชาติ 1 ใบ ตรวจจากประกันสังคม (บริษัท BOI อาจต่าง)",
      "通常每 1 个外籍工作许可需 4 名泰籍员工（社保核实；BOI 企业可能不同）。",
      "Обычно 4 тайца на 1 work permit (соцстрах); BOI — иные правила.",
    ),
  ),
  faq(
    "change",
    L("Can I change employers on the same permit?", "เปลี่ยนนายจ้างได้ไหม?", "能换雇主不换证吗？", "Смена работодателя?"),
    L(
      "A new employer requires a new work permit and visa alignment. Working elsewhere without updating is a serious violation.",
      "นายจ้างใหม่ต้องยื่น work permit ใหม่และจัดวีซ่าให้สอดคล้อง",
      "新雇主须重新申请工作许可并对齐签证；未更新即为他处工作属严重违规。",
      "Новый employer — новый permit и виза; работа без обновления — нарушение.",
    ),
  ),
  faq(
    "nomad",
    L("Can digital nomads use a standard work permit?", "Digital Nomad ใช้ work permit ปกติได้ไหม?", "数字游民能用普通工作证吗？", "Digital nomad?"),
    L(
      "Remote work may qualify under LTR or BOI schemes — not a classic employer-sponsored permit.",
      "ทำงานรีโมตอาจใช้ LTR หรือ BOI ไม่ใช่ work permit แบบนายจ้างสponsor ทั่วไป",
      "远程工作或适用 LTR/BOI 方案——非传统雇主担保工签。",
      "Remote — LTR или BOI; не классический employer-sponsored permit.",
    ),
  ),
  faq(
    "90day",
    L("Do I still need 90-day reporting with a work permit?", "มี work permit ยังต้องรายงาน 90 วันไหม?", "有工作证还要90天报到吗？", "90 дней с work permit?"),
    L(
      "Yes — Immigration 90-day reporting is separate and still required in Pattaya (Jomtien) or online.",
      "ต้อง — รายงาน 90 วันกับ ตม. แยกจาก work permit",
      "需要——90 天报到与工签无关，须在芭提雅（仲天）或网上办理。",
      "Да — отчёт 90 дней отдельно от work permit.",
    ),
  ),
];

export const rideAppsFaqs = [
  faq(
    "songthaew",
    L("Grab vs songthaew — which is cheaper?", "สองแถวหรือแอปถูกกว่า?", "Grab 还是双条车便宜？", "Grab или songthaew?"),
    L(
      "Songthaews cost ฿10–20 on fixed routes. Apps cost more but offer door-to-door AC and safety at night.",
      "สองแถว ฿10–20 แอปแพงกว่าแต่ถึงหน้าประตู มีแอร์ ปลอดภัยกลางคืน",
      "固定路线双条 10–20 泰铢；App 更贵但门到门、有空调、夜间更安全。",
      "Songthaew 10–20 бат; apps дороже, но до двери и с AC.",
    ),
  ),
  faq(
    "cancel",
    L("Driver cancelled — what now?", "คนขับยกเลิกทำอย่างไร?", "司机取消怎么办？", "Отмена водителем?"),
    L(
      "Rebook or switch apps. Peak hours near Walking Street have higher cancel rates.",
      "จองใหม่หรือเปลี่ยนแอป ช่วงคึก Walking Street ยกเลิกบ่อย",
      "重新下单或换 App；Walking Street 高峰取消率较高。",
      "Перезакажите или смените app; у Walking Street отмены чаще.",
    ),
  ),
  faq(
    "motorbike",
    L("Is GrabBike safe?", "GrabBike ปลอดภัยไหม?", "GrabBike 安全吗？", "GrabBike?"),
    L(
      "Helmet quality varies. GrabCar is safer for luggage and rain.",
      "หมวกคุณภาพต่างกัน ฝนหนักหรือมีกระเป๋าใช้ GrabCar",
      "头盔质量不一；行李多或下雨建议 GrabCar。",
      "Качество шлемов разное; с багажом и дождём — GrabCar.",
    ),
  ),
];

export const thaiCulturePageFaqs = [
  faq(
    "learn",
    L("How can I learn Thai quickly?", "เรียนภาษาไทยเร็วๆ อย่างไร?", "如何快速学泰语？", "Как быстро выучить тайский?"),
    L(
      "Evening classes, language apps, and daily market practice beat textbook-only study.",
      "คลาสเย็น แอปภาษา และฝึกที่ตลาดดีกว่าอ่านหนังสืออย่างเดียว",
      "夜校、语言 App 与日常市场练习比只读书更有效。",
      "Вечерние курсы, apps и практика на рынке лучше только учебника.",
    ),
  ),
  faq(
    "etiquette",
    L("Where is the full etiquette guide?", "คู่มือมารยาทฉบับเต็มอยู่ไหน?", "完整礼仪指南在哪？", "Полный гид по этикету?"),
    L(
      "The etiquette page adds temples, monarchy, dress, and Pattaya tips — with the same illustrated shoes, wai, and calm-behavior panels as this page.",
      "หน้ามารยาทมีวัด สถาบัน การแต่งกาย และเคล็ดลับพัทยา พร้อมภาพรองเท้า ไหว้ และความสงบเหมือนหน้านี้",
      "礼仪页补充寺庙、王室、着装与芭提雅贴士——含与本页相同的脱鞋、合十与冷静行为插图。",
      "Страница этикета — храмы, монархия, одежда, Pattaya; те же иллюстрации.",
    ),
  ),
];

export const ninetyDayFaqs = [
  faq(
    "tm30",
    L("How is TM30 related?", "TM30 เกี่ยวอะไร?", "TM30 有何关系？", "TM30?"),
    L(
      "Landlords file TM30 when you check in. Mismatches cause delays — keep copies.",
      "เจ้าของแจ้ง TM30 ตอนเข้าพัก ที่อยู่ไม่ตรงทำให้ล่าช้า เก็บสำเนา",
      "入住时房东提交 TM30；地址不一致会延误——保留副本。",
      "Арендодатель подаёт TM30 при заселении; несовпадения адреса — задержки.",
    ),
  ),
  faq(
    "travel",
    L("Does leaving Thailand reset the clock?", "ออกนอกประเทศแล้วนับใหม่ไหม?", "离境会重置吗？", "Сброс при выезде?"),
    L(
      "Re-entry on a new stamp starts a new 90-day period. Track passport stamps.",
      "เข้าใหม่ด้วยตราประทับใหม่ เริ่มนับ 90 วันใหม่ ดูตราในพาสปอร์ต",
      "持新入境章再入境则重新计算 90 天；留意护照章。",
      "Новый штамп — новый отсчёт 90 дней; следите за паспортом.",
    ),
  ),
  faq(
    "agent",
    L("Can someone report for me?", "ให้คนอื่นยื่นแทนได้ไหม?", "能代报吗？", "Подать за меня?"),
    L(
      "Power of attorney possible in person; online must be your account.",
      "มอบอำนาจยื่นแทนได้ที่สำนักงาน ออนไลน์ต้องใช้บัญชีตัวเอง",
      "可现场委托代理；网上须本人账户。",
      "Доверенность — лично; онлайн — только ваш аккаунт.",
    ),
  ),
];

export const emergencyGuideFaqs = [
  faq(
    "embassy",
    L("When should I contact my embassy?", "เมื่อไหร่ควรติดต่อสถานทูต?", "何时联系使馆？", "Посольство?"),
    L(
      "Serious injury, death, arrest, or lost passport warrant consular help. Keep digital passport scans secure.",
      "บาดเจ็บสาหัส เสียชีวิต ถูกจับ หรือพาสปอร์ตหาย ติดต่อสถานทูต เก็บสำเนาพาสปอร์ตในคลาวด์",
      "重伤、死亡、被捕或护照遗失应联系使馆；安全保存护照扫描件。",
      "Травма, смерть, арест, потеря паспорта — посольство; храните сканы.",
    ),
  ),
  faq(
    "insurance",
    L("Will hospitals treat me without insurance?", "ไม่มีประกันรักษาได้ไหม?", "无保险能就医吗？", "Без страховки?"),
    L(
      "Emergency care is provided; deposit may be required for admission. Carry policy hotlines.",
      "รักษาฉุกเฉินได้ อาจต้องมัดจำเมื่อรับเข้า พกเบอร์ประกัน",
      "急诊会救治；入院可能需押金——携带保险热线。",
      "Экстренно лечат; депозит возможен; номера страховщика.",
    ),
  ),
];

export const cultureEtiquetteFaqs = [
  faq(
    "wai",
    L("When should I use the wai?", "ไหว้เมื่อไหร่?", "何时合十礼？", "Когда делать вай?"),
    L(
      "Use the wai when greeting elders, monks, and officials. A slight bow is enough for casual daily interactions.",
      "ไหว้เมื่อทักทายผู้ใหญ่ พระ และเจ้าหน้าที่ ไหว้เบาๆ ในชีวิตประจำวัน",
      "问候长辈、僧侣和官员时使用；日常场合轻礼即可。",
      "Вай приветствуют старших, монахов и чиновников; в быту — лёгкий поклон.",
    ),
  ),
  faq(
    "temple",
    L("What should I wear to temples in Pattaya?", "แต่งกายเข้าวัดอย่างไร?", "进庙如何着装？", "Одежда для храма"),
    L(
      "Cover shoulders and knees, remove shoes, and keep voices low. Carry a sarong for beach-area temples.",
      "ปิดไหล่และเข่า ถอดรองเท้า พูดเบา พกผ้าคลุมสำหรับวัดริมทะเล",
      "遮盖肩膝、脱鞋、低声说话；海边寺庙可备纱笼。",
      "Плечи и колени закрыты, без обуви, тихий голос; саронг у пляжных храмов.",
    ),
  ),
  faq(
    "monks",
    L("Can women interact with monks?", "ผู้หญิงคุยกับพระได้ไหม?", "女性能否与僧侣交流？", "Женщины и монахи"),
    L(
      "Women should not touch monks — place items on a cloth or table. Give up seats when possible.",
      "ผู้หญิงไม่สัมผัสพระ วางของบนผ้าหรือโต๊ะ ให้ที่นั่งพระ",
      "女性勿触碰僧侣——物品放在布或桌上；尽量让座。",
      "Женщины не касаются монахов; предметы на ткань или стол; уступайте место.",
    ),
  ),
  faq(
    "face",
    L("What does 'saving face' mean?", "‘เกรงใจ/รักษาหน้า’ หมายถึงอะไร?", "“给面子”是什么意思？", "Что такое «сохранение лица»"),
    L(
      "Avoid public arguments and embarrassing others. Calm negotiation works better than confrontation.",
      "หลีกเลี่ยงทะเลาะในที่สาธารณะ การเจรจาอย่างใจเย็นได้ผลดีกว่า",
      "避免当众争吵或让人难堪；冷静协商比对抗更有效。",
      "Избегайте публичных ссор и смущения; спокойные переговоры лучше конфронтации.",
    ),
  ),
  faq(
    "royal",
    L("Are there rules about the monarchy?", "กฎเกี่ยวกับสถาบันกษัตริย์?", "关于王室有何规定？", "Правила о монархии"),
    L(
      "Show respect in public. Avoid casual or critical discussion — strict laws apply.",
      "แสดงความเคารพในที่สาธารณะ หลีกเลี่ยงการพูดจาไม่เหมาะสม",
      "在公共场合表示尊重；避免随意或批评性言论——相关法律严格。",
      "Уважение в публичном пространстве; без лёгких или критичных разговоров — строгие законы.",
    ),
  ),
  faq(
    "shoes",
    L("Do I remove shoes everywhere?", "ถอดรองเท้าทุกที่ไหม?", "到处都要脱鞋吗？", "Где снимать обувь?"),
    L(
      "Homes, temple buildings, and many shops — look for shoe racks or others barefoot before entering.",
      "บ้าน อาคารวัด และร้านหลายแห่ง — สังเกตที่วางรองเท้าหรือคนอื่นถอดรองเท้า",
      "住宅、寺庙建筑及许多店铺——进门先看鞋架或他人是否赤脚。",
      "Дома, храмы, многие магазины — смотрите на стойки для обуви и других.",
    ),
  ),
  faq(
    "nightlife",
    L("Is Walking Street different from temple etiquette?", "Walking Street ต่างจากมารยาทวัดไหม?", "步行街与寺庙礼仪不同吗？", "Walking Street и храмы"),
    L(
      "Yes — nightlife is commercial and loud; dress more on the street, stay alert for scams, but still avoid public fights.",
      "ใช่ — ไนท์ไลฟ์เชิงพาณิชย์และดัง แต่งตัวมิดชิดขึ้น ระวังมิจฉาชีพ อย่าทะเลาะในที่สาธารณะ",
      "是——夜生活商业且喧闹；穿着更得体，防诈骗，但仍避免当众冲突。",
      "Да — ночная жизнь громче; одевайтесь скромнее, остерегайтесь мошенников, без драк.",
    ),
  ),
  faq(
    "songthaew",
    L("How do I use a Pattaya songthaew without overpaying?", "ขึ้นสองแถวพัทยาไม่ให้โดนแพง?", "芭提雅双条车怎样不被多收钱？", "Как ехать на сонгтхэу?"),
    L(
      'Wave to board on the normal route — do not ask "Can you go to…?" Press the buzzer to stop and pay 10–20 THB in small notes at the driver.',
      "โบกขึ้นเส้นทางปกติ อย่าถาม “ไป...ได้ไหม” กดกิ่งลง จ่าย 10–20 บาทเงินย่อยที่คนขับ",
      "在固定路线上招手上车——勿问「能去…吗？」按铃下车，付司机 10–20 泰铢零钱。",
      "Машите на обычном маршруте — не спрашивайте «можете отвезти…»; звонок, 10–20 бат мелочью водителю.",
    ),
  ),
  faq(
    "currency",
    L("What if Thai banknotes blow onto the ground?", "ธนบัตรปลิวลงพื้นทำอย่างไร?", "泰铢掉地上怎么办？", "Банкноты на земле"),
    L(
      "Pick them up by hand respectfully — never step on notes or coins bearing the King's image.",
      "เก็บด้วยมืออย่างสุภาพ — ห้ามเหยียบธนบัตรหรือเหรียญที่มีพระบรมฉายาลักษณ์",
      "用手礼貌拾起——切勿踩踏印有国王肖像的纸币或硬币。",
      "Поднимите рукой с уважением — не наступайте на банкноты с изображением короля.",
    ),
  ),
  faq(
    "gift",
    L("What gifts are appropriate?", "ของขวัญอะไรเหมาะ?", "送什么礼物合适？", "Какие подарки уместны?"),
    L(
      "Small thoughtful items (fruit, snacks, local crafts) presented with both hands. Avoid overly expensive gifts that create obligation.",
      "ของเล็กมีความหมาย (ผลไม้ ขนม หัตถกรรม) ส่งด้วยสองมือ หลีกเลี่ยงของแพงจนเกิดภาระ",
      "小而用心的礼物（水果、零食、本地手作）双手递送；避免贵重到让人有负担的礼品。",
      "Небольшие знаки внимания (фрукты, снеки, ремёсла) двумя руками; без слишком дорогих подарков.",
    ),
  ),
];

export const retirementVisaFaqs = [
  faq(
    "foreign-bank",
    L("Can I use a foreign bank account for the financial requirement?", "ใช้บัญชีธนาคารต่างประเทศได้หรือไม่?", "财务要求能用外国银行账户吗？", "Можно ли использовать иностранный счёт?"),
    L(
      "Funds must typically be in a Thai bank for two months before application, or show qualifying income in Thailand.",
      "เงินมักต้องอยู่ในบัญชีไทยอย่างน้อย 2 เดือน หรือแสดงรายได้ในประเทศ",
      "通常需在泰国银行账户存满两个月，或证明在泰收入。",
      "Средства обычно должны быть на тайском счёте 2 месяца.",
    ),
  ),
  faq(
    "duration",
    L("How long does the retirement visa process take?", "ใช้เวลากี่วันในการดำเนินการ?", "退休签证流程要多久？", "Сколько занимает процесс?"),
    L(
      "Document prep takes 1–2 weeks; Immigration extension is often same-day or a few days in Pattaya.",
      "เตรียมเอกสาร 1–2 สัปดาห์ ต่ออายุที่ Immigration มักเสร็จในวันเดียวหรือไม่กี่วัน",
      "文件准备约 1–2 周；芭提雅移民局续签常当日或数日完成。",
      "Подготовка 1–2 недели; продление часто в тот же день.",
    ),
  ),
  faq(
    "insurance-amount",
    L("What medical insurance coverage is required?", "ประกันสุขภาพต้องคุ้มครองเท่าไหร่?", "需要多少医疗保险额度？", "Какая страховка нужна?"),
    L(
      "Commonly outpatient 40,000 THB and inpatient 400,000 THB minimum, or equivalent approved plans.",
      "มักต้องมี OP 40,000 บาท และ IP 400,000 บาท หรือแผนที่ Immigration รับรอง",
      "通常门诊至少 4 万泰铢、住院 40 万泰铢或等效认可方案。",
      "Обычно 40 000 THB амбулаторно и 400 000 стационар.",
    ),
  ),
  faq(
    "90-day",
    L("What is 90-day reporting and do I need to do it?", "รายงานตัว 90 วันคืออะไร?", "什么是90天报到？", "Что такое отчёт 90 дней?"),
    L(
      "Every 90 days you must report your address to Immigration (online, mail, or in person).",
      "ทุก 90 วันต้องรายงานที่อยู่ต่อ Immigration",
      "每 90 天须向移民局报告住址（网上、邮寄或现场）。",
      "Каждые 90 дней — отчёт об адресе в Immigration.",
    ),
  ),
  faq(
    "work",
    L("Can I work on a retirement visa?", "ทำงานได้ไหมด้วยวีซ่าเกษียณ?", "退休签证可以工作吗？", "Можно ли работать?"),
    L(
      "Employment of any kind is prohibited on O-A / retirement extensions. Volunteering or remote work for overseas employers still needs careful legal review.",
      "ห้ามทำงานทุกประเภทบนวีซ่า O-A / ต่ออายุเกษียณ",
      "O-A 禁止在泰就业；远程为海外雇主工作也需法律咨询。",
      "Работа в Таиланде на O-A запрещена.",
    ),
  ),
  faq(
    "re-entry",
    L("What is a re-entry permit?", "ใบอนุญาตกลับเข้าประเทศคืออะไร?", "什么是再入境许可？", "Что такое re-entry?"),
    L(
      "If you leave Thailand without a re-entry permit, your extension may be cancelled. Get single or multiple re-entry before travel.",
      "ออกนอกประเทศโดยไม่มี re-entry อาจเสียสถานะต่ออายุ — ขอ single/multiple ก่อนเดินทาง",
      "离境前须办理再入境许可，否则延期可能失效。",
      "Re-entry permit перед выездом.",
    ),
  ),
  faq(
    "renewal-balance",
    L("How long must 800,000 THB stay in the bank for renewal?", "เงิน 800,000 ต้องอยู่ในบัญชีกี่เดือนก่อนต่ออายุ?", "续签前 80 万要存多久？", "Сколько месяцев 800 000 THB?"),
    L(
      "First applications often require 2 months; many Immigration offices ask for 3 months before annual renewal — confirm with Chonburi.",
      "ครั้งแรกมัก 2 เดือน ต่ออายุหลายที่ขอ 3 เดือน — ยืนยันกับชลบุรี",
      "首次常 2 个月；续签许多要求 3 个月。",
      "Первично 2 мес., продление часто 3 мес.",
    ),
  ),
  faq(
    "ox-visa",
    L("What is the difference between O-A and Non-OX?", "O-A กับ Non-OX ต่างกันอย่างไร?", "O-A 和 Non-OX 有何区别？", "O-A vs Non-OX?"),
    L(
      "Non-OX is a 10-year programme with higher financial thresholds (e.g. 3 million THB deposit). O-A is the standard 1-year renewable route most retirees use.",
      "Non-OX 10 ปี วงเงินสูงกว่า (เช่น 3 ล้านบาท) O-A ต่อปีที่คนส่วนใหญ่ใช้",
      "Non-OX 为 10 年计划，资金门槛更高（如 300 万泰铢存款）；O-A 为常见的每年续签路径。",
      "Non-OX — 10 лет и выше порог; O-A — стандарт.",
    ),
  ),
  faq(
    "spouse",
    L("Can my spouse qualify on my retirement visa?", "คู่สมรสสามารถตามวีซ่าเกษียณได้ไหม?", "配偶能随退休签证吗？", "Может ли супруг(а) получить визу?"),
    L(
      "Dependents may apply for Non-O as spouse with marriage certificate and financial proof.",
      "คู่สมรสอาจขอ Non-O พร้อมทะเบียนสมรสและหลักฐานการเงิน",
      "配偶可凭结婚证与资金证明申请 Non-O 依亲签。",
      "Супруг(а) может оформить Non-O с документами.",
    ),
  ),
];

export const condoBuyingFaqs = [
  faq(
    "quota",
    L("How do I check if a unit is in the foreign quota?", "ตรวจโควตาต่างชาติอย่างไร?", "如何核实外资配额？", "Как проверить квоту?"),
    L(
      "Ask the juristic person for a letter, then confirm at Chonburi Land Office before signing.",
      "ขอหนังสือจากนิติบุคคล แล้วยืนยันที่สำนักงานที่ดินก่อนเซ็น",
      "向物业管理方索取证明函，签约前到春武里土地厅核实。",
      "Запросите письмо у juristic person и подтвердите в Land Office до подписания.",
    ),
  ),
  faq(
    "fees",
    L("Who pays transfer fees and taxes?", "ใครจ่ายค่าโอนและภาษี?", "过户费与税费谁付？", "Кто платит пошлины?"),
    L(
      "Split is negotiable in the SPA. Budget 3–6% all-in for the buyer side.",
      "แบ่งจ่ายตามสัญญา ผู้ซื้อควรเผื่อ 3–6%",
      "买卖协议中可协商分摊；买方侧建议预留总价 3–6%。",
      "Деление в SPA; закладывайте 3–6% на стороне покупателя.",
    ),
  ),
  faq(
    "offplan",
    L("Is off-plan purchase safe for foreigners?", "ซื้อออฟพลานปลอดภัยไหม?", "外籍买期房安全吗？", "Безопасна ли покупка off-plan?"),
    L(
      "Use licensed developers, staged payments, and legal review before signing.",
      "ใช้ผู้พัฒนาที่มีใบอนุญาต จ่ายเป็นงวด และให้ทนายตรวจสัญญา",
      "选择持牌开发商、分期付款，签约前请律师审阅合同。",
      "Лицензированный застройщик, этапная оплата и проверка юристом.",
    ),
  ),
  faq(
    "leasehold",
    L("What if the foreign quota is full?", "โควตาเต็มทำอย่างไร?", "外资配额满了怎么办？", "Если квота заполнена?"),
    L(
      "Consider registered lease, another building, or proper legal structures — not informal nominees.",
      "พิจารณาสิทธิเช่า อาคารอื่น หรือโครงสร้างที่ถูกกฎหมาย",
      "可考虑登记租赁权、换楼盘或合法结构——勿用非正式代持。",
      "Leasehold, другой объект или легальная структура — не nominee.",
    ),
  ),
  faq(
    "fet",
    L("Do I need a visa to buy a condo?", "ต้องมีวีซ่าไหมถึงจะซื้อคอนโดได้?", "买房需要签证吗？", "Нужна ли виза?"),
    L(
      "Not if you use the overseas funds route (§19(5)): wire purchase money from abroad and obtain an FET form. Other §19 routes may require residence or BOI status.",
      "ถ้าใช้เงินจากต่างประเทศ (มาตรา 19(5)) ไม่จำเป็น — โอนเงินและขอ FET",
      "若走境外资金路径（第 19(5) 条）：从海外电汇购房款并取得 FET 即可；其他第 19 条路径可能需居留或 BOI 身份。",
      "Для пути с FET виза не нужна; иные маршруты §19 могут требовать статус.",
    ),
  ),
  faq(
    "apartment",
    L("Can I buy any apartment in Pattaya?", "ซื้ออพาร์ตเมนต์ทั่วไปได้ไหม?", "任何公寓都能买吗？", "Любая квартира?"),
    L(
      "Only units in buildings registered under the Condominium Act qualify for foreign freehold. Unregistered apartment blocks cannot transfer title to foreigners.",
      "เฉพาะอาคารจดทะเบียนอาคารชุดเท่านั้นที่โอนกรรมสิทธิ์ต่างชาติได้",
      "仅《公寓法》注册楼盘的单元可外籍永久产权过户；未注册公寓楼不能过户给外国人。",
      "Только зарегистрированное кондо; обычные apartment blocks — нет.",
    ),
  ),
  faq(
    "timeline",
    L("How long does a resale purchase take?", "ซื้อมือสองใช้เวลานานแค่ไหน?", "二手房多久完成？", "Сроки resale?"),
    L(
      "Typically 30–90 days from reservation to Land Office transfer when documents and FET are ready.",
      "มัก 30–90 วัน จากจองถึงโอน เมื่อเอกสารและ FET พร้อม",
      "材料与 FET 齐备时，从预订到土地厅过户通常 30–90 天。",
      "Обычно 30–90 дней при готовых документах и FET.",
    ),
  ),
  faq(
    "rental",
    L("Can I rent out my condo?", "ปล่อยเช่าได้ไหม?", "能否出租公寓？", "Можно ли сдавать в аренду?"),
    L(
      "Yes, subject to juristic rules and tax reporting. Short-term may need building permission.",
      "ได้ ตามกฎนิติบุคคลและภาษี ปล่อยระยะสั้นอาจต้องขออนุญาต",
      "可以，须遵守物业规定并报税；短租可能需要楼盘许可。",
      "Да, по правилам juristic person и с налогами; краткосрок — разрешение здания.",
    ),
  ),
];
