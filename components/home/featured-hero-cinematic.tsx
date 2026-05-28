import { FeaturedHeroCinematic as CinematicHero } from "@/components/cinematic/featured-hero-cinematic";
import { homeImages } from "@/lib/design/home-images";

/** Homepage featured hero — Neo-Pattaya smart city aerial */
export function FeaturedHeroCinematic() {
  return (
    <CinematicHero
      image={homeImages.neoPattayaHero}
      imageAlt="Aerial view of Pattaya at blue hour with smart-city light grids, transit pods, and illuminated skyscrapers along the bay"
      href="/news/local-news/infrastructure"
      category="City Development"
      title="The Neo-Pattaya Transformation: A Smart City Vision 2025"
      excerpt="Infrastructure investments and digital city initiatives reshape Pattaya into Southeast Asia's premier hybrid hub for tourism and long-term residency."
      visualTone="neo-smart-city"
      minHeightClass="min-h-[min(78dvh,440px)] sm:min-h-[520px] lg:min-h-[580px]"
    />
  );
}
