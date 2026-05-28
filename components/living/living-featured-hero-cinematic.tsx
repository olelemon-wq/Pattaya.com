import { FeaturedHeroCinematic } from "@/components/cinematic/featured-hero-cinematic";
import { livingImages } from "@/lib/design/living-images";

export function LivingFeaturedHeroCinematic() {
  return (
    <FeaturedHeroCinematic
      image={livingImages.heroHub}
      imageAlt="Pattaya smart city skyline and coastline at twilight with glowing Beach Road transit"
      href="/living/visa/retirement"
      category="The Complete Expat Hub"
      featuredLabel="Featured"
      title="Living the Dream in Pattaya"
      excerpt="The ultimate residency, business, and lifestyle resource for the global citizen looking to call the City of Fun home."
      ctaLabel="Explore Living Guides"
      ctaTone="living"
      visualTone="neo-smart-city"
      showAiSummary={false}
      minHeightClass="min-h-[min(70dvh,400px)] sm:min-h-[500px] lg:min-h-[560px]"
    />
  );
}
