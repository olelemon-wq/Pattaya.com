import { FeaturedHeroCinematic } from "@/components/cinematic/featured-hero-cinematic";
import { newsImages } from "@/lib/design/news-images";

export function NewsFeaturedHeroCinematic() {
  return (
    <FeaturedHeroCinematic
      image={newsImages.newsHubHero}
      imageAlt="Thai police patrol on wet Beach Road at dawn with Pattaya skyline under storm clouds"
      href="/news/local-news/city-updates"
      category="City Updates"
      featuredLabel="Featured"
      title="Pattaya Smart City Initiatives: Infrastructure Overhaul Commences on Beach Road"
      excerpt="City Hall unveils a 500 million THB plan to modernize waterfront access and telecommunications cabling by Q4 2024."
      ctaLabel="Read Full Story"
      ctaTone="news"
      visualTone="news-dawn"
      showAiSummary={false}
      minHeightClass="min-h-[min(70dvh,400px)] sm:min-h-[500px] lg:min-h-[560px]"
      byline="By Editor-in-Chief · 2 Hours Ago"
    />
  );
}
