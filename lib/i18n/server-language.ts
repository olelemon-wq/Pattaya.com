import { cookies } from "next/headers";
import {
  DEFAULT_LANGUAGE,
  getLanguageByCode,
  LANGUAGE_STORAGE_KEY,
  type LanguageCode,
} from "@/lib/i18n/languages";

export async function getRequestLanguage(): Promise<LanguageCode> {
  const cookieStore = await cookies();
  const stored = cookieStore.get(LANGUAGE_STORAGE_KEY)?.value;
  if (stored && getLanguageByCode(stored).code === stored) {
    return stored as LanguageCode;
  }
  return DEFAULT_LANGUAGE;
}
