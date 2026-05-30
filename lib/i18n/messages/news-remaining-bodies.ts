import { createNewsBodyLocalizers } from "@/lib/i18n/messages/news-bodies-factory";
import { newsLocalBodies } from "@/lib/i18n/messages/news-local-bodies";
import { newsNightlifeSportsBodies } from "@/lib/i18n/messages/news-nightlife-sports-bodies";
import { newsTourismBusinessBodies } from "@/lib/i18n/messages/news-tourism-business-bodies";

export const remainingNewsBodyLocalizers = createNewsBodyLocalizers({
  ...newsLocalBodies,
  ...newsTourismBusinessBodies,
  ...newsNightlifeSportsBodies,
});
