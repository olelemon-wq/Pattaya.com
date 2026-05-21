export const LANGUAGES = [
  { code: "th", label: "ไทย", menuLabel: "ภาษาไทย" },
  { code: "en", label: "English", menuLabel: "English" },
  { code: "zh", label: "中文", menuLabel: "中文" },
  { code: "ru", label: "Русский", menuLabel: "Русский" },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]["code"];

export const DEFAULT_LANGUAGE: LanguageCode = "en";

export const LANGUAGE_STORAGE_KEY = "pattaya-lang";

export function getLanguageByCode(code: string) {
  return LANGUAGES.find((lang) => lang.code === code) ?? LANGUAGES[1];
}
