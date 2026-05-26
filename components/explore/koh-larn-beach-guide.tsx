"use client";

import {
  Camera,
  Palmtree,
  Ship,
  UtensilsCrossed,
  Waves,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { kohLarnImages } from "@/lib/design/koh-larn-images";

const beaches = [
  {
    id: "tawaen",
    label: "หาดตาแหวน",
    labelEn: "Ta Waen Beach",
    image: kohLarnImages.beachTaWan,
    description:
      "หาดยอดนิยมสุดของเกาะล้าน — น้ำใส หาดทรายละเอียด ร้านอาหารและกิจกรรมทางน้ำครบ เหมาะกับครอบครัวและกลุ่มเพื่อน",
    features: [
      { icon: Waves, label: "ว่ายน้ำได้" },
      { icon: UtensilsCrossed, label: "มีอาหาร" },
      { icon: Ship, label: "กิจกรรมทางน้ำ" },
    ],
    reviewHref: "/explore/beaches",
  },
  {
    id: "nual",
    label: "หาดนวล",
    labelEn: "Nual Beach",
    image: kohLarnImages.beachNual,
    description:
      "บรรยากาศเงียบสงบกว่าหาดหลัก — ชายหาดกว้าง น้ำทะเลใส เหมาะสำหรับพักผ่อน ถ่ายรูป และว่ายน้ำแบบไม่พลุกพล่าน",
    features: [
      { icon: Waves, label: "ว่ายน้ำได้" },
      { icon: Camera, label: "จุดถ่ายรูป" },
      { icon: Palmtree, label: "เงียบสงบ" },
    ],
    reviewHref: "/explore/beaches",
  },
  {
    id: "tien",
    label: "หาดเทียน",
    labelEn: "Tien Beach",
    image: kohLarnImages.beachTien,
    description:
      "หาดโค้งสวยงาม น้ำใสมากในช่วงฤดูท่องเที่ยว — มีร้านอาหารริมทะเลและจุดชมวิว พระอาทิตย์ตกที่สวยที่สุดแห่งหนึ่งบนเกาะ",
    features: [
      { icon: Waves, label: "ว่ายน้ำได้" },
      { icon: UtensilsCrossed, label: "มีอาหาร" },
      { icon: Camera, label: "จุดถ่ายรูป" },
    ],
    reviewHref: "/explore/beaches",
  },
] as const;

export function KohLarnBeachGuide() {
  const [activeId, setActiveId] = useState<(typeof beaches)[number]["id"]>("tawaen");
  const active = beaches.find((b) => b.id === activeId) ?? beaches[0];

  return (
    <section
      id="beach-guide"
      className="scroll-mt-24 rounded-2xl border border-[#c4c7c8]/30 bg-white p-6 shadow-sm sm:p-8"
      aria-labelledby="beach-guide-title"
    >
      <h2
        id="beach-guide-title"
        className="text-2xl font-semibold tracking-tight text-[#191c1d] md:text-3xl"
      >
        เที่ยวหาดไหนดี? คู่มือรวมชายหาดเกาะล้าน
      </h2>
      <p className="mt-2 text-sm text-[#747878] sm:text-base">
        Beach Guide — เลือกหาดที่เหมาะกับสไตล์การเที่ยวของคุณ
      </p>

      <div
        role="tablist"
        aria-label="ชายหาดเกาะล้าน"
        className="mt-6 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {beaches.map((beach) => {
          const selected = beach.id === activeId;
          return (
            <button
              key={beach.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`beach-panel-${beach.id}`}
              id={`beach-tab-${beach.id}`}
              onClick={() => setActiveId(beach.id)}
              className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                selected
                  ? "bg-[#B52E88] text-white shadow-md ring-1 ring-[#B52E88]/15"
                  : "bg-[#fdf8fb] text-[#191c1d] ring-1 ring-[#c4c7c8]/40 hover:bg-[#B52E88]/10"
              }`}
            >
              {beach.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`beach-panel-${active.id}`}
        aria-labelledby={`beach-tab-${active.id}`}
        className="mt-6 grid gap-6 md:grid-cols-2 md:items-center"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src={active.image}
            alt={active.labelEn}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#191c1d]">
            {active.label}{" "}
            <span className="text-base font-medium text-[#747878]">
              ({active.labelEn})
            </span>
          </h3>
          <p className="mt-3 leading-relaxed text-[#444748]">
            {active.description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {active.features.map((feature) => {
              const Icon = feature.icon;
              return (
                <li
                  key={feature.label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#B52E88]/10 px-3 py-1.5 text-sm font-medium text-[#191c1d] ring-1 ring-[#B52E88]/15"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-[#B52E88]" aria-hidden />
                  {feature.label}
                </li>
              );
            })}
          </ul>
          {active.id === "tien" && (
            <Link
              href={active.reviewHref}
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#B52E88] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#B52E88]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B52E88]"
            >
              อ่านรีวิวเต็มหาดเทียน (Full Beach Review)
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
