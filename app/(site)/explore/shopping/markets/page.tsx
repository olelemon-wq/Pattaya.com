import { ShoppingMarketsPage } from "@/components/explore/shopping-markets-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local Markets | ตลาด | Pattaya Markets | Pattaya.com",
  description:
    "Markets and local shopping in Pattaya — Thepprasit Night Market, Naklua morning market, floating market, and craft bazaars.",
  openGraph: {
    title: "Local Markets | ตลาด — Pattaya.com",
    description:
      "Night bazaars, souvenirs, bargaining tips, and authentic Thai market culture in Pattaya.",
  },
};

export default function ShoppingMarketsRoutePage() {
  return <ShoppingMarketsPage />;
}
