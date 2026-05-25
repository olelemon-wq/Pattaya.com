import { ShoppingMallsPage } from "@/components/explore/shopping-malls-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Malls | ห้าง | Pattaya Malls | Pattaya.com",
  description:
    "Malls and shopping centers in Pattaya — Central Festival, Terminal 21, Royal Garden Plaza, and bargain complexes in south Pattaya.",
  openGraph: {
    title: "Shopping Malls | ห้าง — Pattaya.com",
    description:
      "Air-conditioned shopping along Beach Road and central Pattaya with fashion, cinema, and food courts.",
  },
};

export default function ShoppingMallsRoutePage() {
  return <ShoppingMallsPage />;
}
