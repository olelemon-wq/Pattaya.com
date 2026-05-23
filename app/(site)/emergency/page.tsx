import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/content/page-hero";
import { emergencyContacts } from "@/lib/data/emergency-contacts";
import { buildBreadcrumbs } from "@/lib/navigation/utils";

export const metadata: Metadata = {
  title: "Emergency Contacts | Pattaya.com",
  description: "Important emergency phone numbers in Pattaya",
};

export default function EmergencyPage() {
  return (
    <>
      <Breadcrumb items={buildBreadcrumbs("Emergency Contacts", "/emergency")} />
      <PageHero
        title="Emergency Contacts"
        titleTh="เบอร์ฉุกเฉิน"
        description="Keep these numbers handy for emergencies in Pattaya."
        badge="Home Widget"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {emergencyContacts.map((entry) => (
          <div
            key={entry.id}
            className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"
          >
            <p className="font-semibold text-zinc-900">{entry.service}</p>
            <p className="mt-2 text-2xl font-bold text-teal-700">{entry.number}</p>
          </div>
        ))}
      </div>
    </>
  );
}
