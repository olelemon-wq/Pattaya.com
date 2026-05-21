import { BreakingNewsTicker } from "@/components/home/breaking-news-ticker";
import { FeaturedBusinesses } from "@/components/home/featured-businesses";
import { ForumAndCurrency } from "@/components/home/forum-and-currency";
import { HeroWithSidebar } from "@/components/home/hero-with-sidebar";
import { PattayaGuideSection } from "@/components/home/pattaya-guide-section";

export default function HomePage() {
  return (
    <div data-full-bleed className="bg-[#f4f6f9]">
      <BreakingNewsTicker />
      <HeroWithSidebar />
      <div className="space-y-6 pb-8">
        <ForumAndCurrency />
        <PattayaGuideSection />
        <FeaturedBusinesses />
      </div>
    </div>
  );
}
