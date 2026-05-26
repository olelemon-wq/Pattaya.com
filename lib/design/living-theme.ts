/** Living section design tokens — match hub & Stitch culture guide */
export const livingTheme = {
  page: "bg-[#F8FAFC] font-sans text-[#0A192F]",
  heroHeight: "min-h-[min(72vh,560px)]",
  heroGradient:
    "bg-gradient-to-b from-[#0A192F]/90 via-[#0A192F]/75 to-[#0A192F]/92",
  badge:
    "rounded-full bg-[#D7CBBA] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#6b5a48]",
  eyebrow: "text-xs font-bold uppercase tracking-widest text-[#B29475]",
  card: "rounded-xl border border-[#e2e8f0] bg-white transition hover:border-[#D7CBBA]",
  cardStatic: "rounded-xl border border-[#e2e8f0] bg-white",
  panel: "rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm sm:p-8",
  leadCard:
    "rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-xl ring-1 ring-[#B29475]/20 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8",
  accentPanel: "rounded-2xl border border-[#B29475]/20 bg-[#D7CBBA]/40 p-6 sm:p-8",
  bottomCard:
    "rounded-2xl border border-[#B29475]/20 bg-[#D7CBBA] px-6 py-8 text-center sm:px-10 sm:py-10",
  heading: "text-2xl font-bold text-[#0A192F] sm:text-3xl",
  headingSm: "text-xl font-bold text-[#0A192F] sm:text-2xl",
  muted: "text-sm text-[#777777]",
  body: "text-sm leading-relaxed text-[#444748]",
  iconBox: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B29475] text-white",
  btnPrimary:
    "inline-flex items-center justify-center rounded-lg bg-[#B29475] px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#B29475]/90",
} as const;
