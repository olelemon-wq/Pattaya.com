import type { LanguageCode } from "@/lib/i18n/languages";

export type LocalizedText = {
  en: string;
  th?: string;
  zh?: string;
  ru?: string;
};

export function pickText(language: LanguageCode, text: LocalizedText): string {
  if (language === "th") return text.th ?? text.en;
  if (language === "zh") return text.zh ?? text.en;
  if (language === "ru") return text.ru ?? text.en;
  return text.en;
}
