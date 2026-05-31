import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { DailyEssentials } from "@/components/home/daily-essentials";
import { EmergencySupportFab } from "@/components/home/emergency-support-fab";
import { ExploreBySection } from "@/components/home/explore-by-section";
import { FeaturedBusinesses } from "@/components/home/featured-businesses";
import { ForumAndCurrency } from "@/components/home/forum-and-currency";
import { HeroWithSidebar } from "@/components/home/hero-with-sidebar";
import { PattayaGuideSection } from "@/components/home/pattaya-guide-section";
import { TopStoriesBento } from "@/components/home/top-stories-bento";

export default function HomePage() {
  return (
    <div data-full-bleed className="bg-[#f4f6f9]">
      <BreakingNewsTicker />
      <div className="space-y-6 pb-8 pt-2">
        <HeroWithSidebar />
        <TopStoriesBento />
        <ExploreBySection />
        <ForumAndCurrency />
        <PattayaGuideSection />
        <FeaturedBusinesses />
        <DailyEssentials />
      </div>
      <EmergencySupportFab />
    </div>
  );
}
