import { images } from "@/lib/design/images";

/** Local assets + verified Unsplash URLs (HTTP 200). */
export const classifiedsImages = {
  hero: "/images/classifieds/hero-community-hub.png",
  propertyRent: images.guideInterior,
  propertySale:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
  vehicle: "/images/living/songthaew-hero.png",
  job: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  service: "/images/living/driving-guide.png",
  buySell: "/images/explore/terminal-21-pattaya.png",
  community: "/images/living/wai/wai-peers.jpg",
  featuredCondo: images.guideInterior,
  featuredCar:
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
  featuredJob:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
} as const;
