import { FeaturedHeroCinematic as CinematicHero } from "@/components/cinematic/featured-hero-cinematic";
import { newsImages } from "@/lib/design/news-images";

/** Homepage featured hero — Pattaya bay cinematic */
export function FeaturedHeroCinematic() {
  return (
    <CinematicHero
      image={newsImages.heroCinematic}
      imageAlt="Pattaya city and bay at twilight with city lights"
      href="/news/local-news/infrastructure"
      category="City Development"
      title="The Neo-Pattaya Transformation: A Smart City Vision 2025"
      excerpt="Infrastructure investments and digital city initiatives reshape Pattaya into Southeast Asia's premier hybrid hub for tourism and long-term residency."
    />
  );
}
