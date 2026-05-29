import { exploreImages } from "@/lib/design/explore-images";
import { newsImages } from "@/lib/design/news-images";

/** Events Today — verified HTTP 200 image URLs */
export const eventsImages = {
  heroFeatured:
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80",
  /** Festival lights — verified HTTP 200 (replaces 404 fireworks URL) */
  fireworks:
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
  nightMarket: exploreImages.thepprasitMarket,
  walkingStreet: newsImages.walkingStreet,
  beachConcert:
    "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80",
  techMeetup:
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
  yachtShow: exploreImages.yacht,
  muayThai: newsImages.muayThaiHero,
  familyPark: exploreImages.aquaverse,
  wellness: exploreImages.auraSanctuary,
  foodFestival: exploreImages.cafeLifestyle,
} as const;
