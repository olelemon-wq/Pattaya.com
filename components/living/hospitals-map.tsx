"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { livingTheme } from "@/lib/design/living-theme";
import {
  hospitalGoogleMapsHref,
  hospitalMapPins,
  hospitalMarkerColor,
  hospitalsMapOpenHref,
} from "@/lib/design/hospitals-map";
import { getHospitalDirectory, getHospitalsMapCopy } from "@/lib/i18n/messages/living/hospitals";
import { tSiteUi } from "@/lib/i18n/messages/site-ui";
import type { Map as LeafletMap } from "leaflet";
import Leaflet from "leaflet";
import { ExternalLink, MapPin } from "lucide-react";
import { useEffect, useMemo, useRef } from "react";

function createHospitalIcon(tier: "premium" | "public", hospitalLabel: string, pinAbbr: string) {
  const color = hospitalMarkerColor(tier);
  return `
    <div class="hospital-pin" role="img" aria-label="${hospitalLabel}">
      <div class="hospital-pin__head" style="background-color:${color}">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" aria-hidden="true">
          <path d="M12 6v12M6 12h12"/>
          <rect x="3" y="3" width="18" height="18" rx="3"/>
        </svg>
      </div>
      <div class="hospital-pin__point" style="border-top-color:${color}"></div>
      <span class="hospital-pin__label">${pinAbbr}</span>
    </div>
  `;
}

export function HospitalsMap() {
  const { language } = useLanguage();
  const hospitals = useMemo(() => getHospitalDirectory(language), [language]);
  const mapCopy = useMemo(() => getHospitalsMapCopy(language), [language]);
  const pinById = useMemo(
    () => Object.fromEntries(hospitalMapPins.map((p) => [p.id, p])),
    [],
  );

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);

  const { title, subtitle, openAll, directions: directionsLabel, legendPremium, legendPublic } =
    mapCopy;
  const hospitalLabel = tSiteUi(language, "hospital");
  const pinAbbr = tSiteUi(language, "hospitalPinAbbr");

  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container) return;

    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }

    const map = Leaflet.map(container, {
      scrollWheelZoom: true,
      zoomControl: true,
    });

    Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);

    const bounds = Leaflet.latLngBounds([]);

    hospitals.forEach((h) => {
      const pin = pinById[h.id];
      if (!pin) return;

      const icon = Leaflet.divIcon({
        className: "hospital-map-marker",
        html: createHospitalIcon(pin.tier, hospitalLabel, pinAbbr),
        iconSize: [52, 62],
        iconAnchor: [26, 62],
        popupAnchor: [0, -62],
      });

      const mapsUrl = hospitalGoogleMapsHref(h.mapsQuery);
      const popupHtml = `
        <div class="hospital-popup">
          <strong>${h.name}</strong>
          <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer">${directionsLabel} →</a>
        </div>
      `;

      Leaflet.marker([pin.lat, pin.lng], { icon })
        .bindPopup(popupHtml)
        .addTo(map);

      bounds.extend([pin.lat, pin.lng]);
    });

    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [48, 48], maxZoom: 14 });
    }

    mapRef.current = map;

    const resizeTimer = window.setTimeout(() => {
      map.invalidateSize();
    }, 0);

    return () => {
      window.clearTimeout(resizeTimer);
      map.remove();
      mapRef.current = null;
    };
  }, [hospitals, pinById, directionsLabel, hospitalLabel, pinAbbr]);

  return (
    <section
      className="overflow-hidden rounded-2xl border border-[#D7CBBA]/60 bg-white shadow-sm"
      aria-labelledby="hospitals-map-title"
    >
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-[#e2e8f0] px-5 py-4 sm:px-6">
        <div>
          <h2 id="hospitals-map-title" className={livingTheme.headingSm}>
            {title}
          </h2>
          <p className={`mt-1 ${livingTheme.muted}`}>{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3 text-xs text-[#777777]">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded-sm bg-[#B29475]" aria-hidden />
            {legendPremium}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded-sm bg-slate-600" aria-hidden />
            {legendPublic}
          </span>
        </div>
      </div>

      <div
        ref={mapContainerRef}
        className="hospitals-leaflet-map relative z-0 w-full"
        aria-label={title}
      />

      <div className="flex flex-wrap gap-2 bg-[#faf7f2] px-4 py-3 sm:px-5">
        {hospitals.map((h) => {
          const pin = pinById[h.id];
          if (!pin) return null;
          const href = hospitalGoogleMapsHref(h.mapsQuery);
          const isPremium = pin.tier === "premium";
          return (
            <a
              key={h.id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition hover:shadow-md sm:text-sm ${
                isPremium
                  ? "bg-[#B29475] text-white hover:bg-[#B29475]/90"
                  : "bg-slate-600 text-white hover:bg-slate-700"
              }`}
            >
              <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
              {h.name}
            </a>
          );
        })}
      </div>

      <div className="flex items-center justify-end border-t border-[#e2e8f0] px-4 py-3 sm:px-5">
        <a
          href={hospitalsMapOpenHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#B29475] hover:underline"
        >
          {openAll}
          <ExternalLink className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
