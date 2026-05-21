import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/design/images";

const guides = [
  {
    title: "Island Hopping: Koh Larn & Beyond",
    meta: "12 ARTICLES • SEO OPTIMIZED",
    image: images.guideBeach,
    href: "/explore/islands/koh-larn",
  },
  {
    title: "Fine Dining: Michelin Guide 2024",
    meta: "8 ARTICLES • LOCAL TIPS",
    image: images.guideDining,
    href: "/explore/restaurants/fine-dining",
  },
  {
    title: "Retirement in Pattaya: Full Guide",
    meta: "24 ARTICLES • ESSENTIAL",
    image: images.guideInterior,
    href: "/living/visa/retirement",
  },
  {
    title: "Yachting Life: Marina Secrets",
    meta: "15 ARTICLES • EXCLUSIVE",
    image: images.guideYacht,
    href: "/explore/luxury/yacht",
  },
];

export function PattayaGuideSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-8 lg:px-6">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-[#0c1a33]">
            Pattaya Guide
          </h2>
          <p className="mt-1 text-sm text-[#64748b]">
            Curated city exploration by local experts.
          </p>
        </div>
        <Link
          href="/guide"
          className="text-sm font-bold text-[#f97316] hover:underline"
        >
          Explore All Guides →
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {guides.map((guide) => (
          <Link
            key={guide.title}
            href={guide.href}
            className="group overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={guide.image}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold leading-snug text-[#0c1a33] group-hover:text-[#f97316]">
                {guide.title}
              </h3>
              <p className="mt-2 text-[10px] font-bold tracking-wide text-[#94a3b8]">
                {guide.meta}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
