/** News section design tokens — Pattaya Editorial / hub navy */
export const newsTheme = {
  page: "bg-[#f5f7fa] font-sans text-[#0c1a33]",
  container:
    "mx-auto max-w-[1280px] px-4 pt-8 pb-10 lg:px-6",
  navy: "#0c1a33",
  accent: "#455f88",
  primary: "#10438f",
  muted: "#64748b",
  body: "#444748",
  eyebrow: "text-xs font-bold uppercase tracking-[0.2em] text-[#455f88]",
  title: "mt-2 text-3xl font-bold text-[#0c1a33] sm:text-4xl",
  titleTh: "mt-1 text-lg text-[#455f88]",
  description: "mt-3 max-w-2xl text-sm leading-relaxed text-[#64748b] sm:text-base",
  sectionTitle: "text-2xl font-semibold text-[#0c1a33]",
  sectionTitleSm: "text-xl font-semibold text-[#0c1a33]",
  sectionBorder: "mb-8 flex items-center justify-between border-b border-[#c4c7c8] pb-4",
  link: "text-sm font-semibold text-[#455f88] hover:underline",
  btnPrimary:
    "rounded-lg bg-[#10438f] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#10438f]/90",
  btnOutline:
    "rounded-lg border border-[#10438f] px-5 py-2.5 text-sm font-semibold text-[#10438f] transition-colors hover:bg-[#10438f]/5",
  btnPrimaryPill:
    "rounded-full bg-[#10438f] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#10438f]/90",
  btnOutlinePill:
    "rounded-full border border-[#10438f] px-6 py-2.5 text-sm font-semibold text-[#10438f] transition-all hover:bg-[#10438f]/5",
  card: "rounded-xl border border-[#c4c7c8]/30 bg-white transition-all hover:shadow-md",
  cardMuted: "rounded-xl border border-[#c4c7c8]/30 bg-[#f5f7fa] p-5 transition-all hover:shadow-md",
  panel: "rounded-2xl border border-[#c4c7c8]/40 bg-white p-6 shadow-sm sm:p-8",
  footerDefault: "rounded-2xl border border-[#c4c7c8]/40 bg-white p-6 shadow-sm sm:p-8",
  footerAccent:
    "rounded-2xl border border-[#c4c7c8]/40 bg-gradient-to-br from-[#e8eef8] to-white p-6 shadow-sm sm:p-8",
  footerProperty:
    "rounded-2xl border border-[#fde8d8] bg-gradient-to-br from-[#fff7ed] to-white p-6 shadow-sm sm:p-8",
  iconBox: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#d6e3ff] text-[#10438f]",
  spotlightCta:
    "mt-4 inline-block rounded-lg border border-white/50 bg-white/10 px-4 py-2 text-center text-sm font-semibold text-white backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-[#10438f]",
  badgeDark: "bg-[#0c1a33] text-white",
  badgeAccent: "bg-[#455f88] text-white",
  badgePrimary: "bg-[#10438f] text-white",
} as const;
