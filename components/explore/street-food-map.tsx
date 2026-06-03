"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { STREET_FOOD_MAP_PIN_COLOR } from "@/lib/design/street-food-guide-map";
import { getStreetFoodForMap, getStreetFoodMapCopy } from "@/lib/i18n/messages/explore-street-food-guide";
import type { Map as LeafletMap } from "leaflet";
import Leaflet from "leaflet";
import { ExternalLink, Navigation } from "lucide-react";
import { useEffect, useMemo, useRef } from "react";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function createPinIcon(shortLabel: string, placeLabel: string, color: string) {
  return `
    <div class="market-pin" role="img" aria-label="${escapeHtml(placeLabel)}">
      <div class="market-pin__head" style="background-color:${color}">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" aria-hidden="true">
          <path d="M12 2v4"/>
          <path d="M8 6h8"/>
          <path d="M9 6v14a3 3 0 0 0 6 0V6"/>
        </svg>
      </div>
      <div class="market-pin__point" style="border-top-color:${color}"></div>
      <span class="market-pin__label">${escapeHtml(shortLabel)}</span>
    </div>
  `;
}

export function StreetFoodMap() {
  const { language } = useLanguage();
  const spots = useMemo(() => getStreetFoodForMap(language), [language]);
  const mapCopy = useMemo(() => getStreetFoodMapCopy(language), [language]);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);

  const { title, subtitle, directions, openPlace, openAll, openAllHref, legendGuide } = mapCopy;

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

    spots.forEach((spot) => {
      const icon = Leaflet.divIcon({
        className: "market-map-marker",
        html: createPinIcon(spot.pin.shortLabel, spot.name, STREET_FOOD_MAP_PIN_COLOR),
        iconSize: [52, 62],
        iconAnchor: [26, 62],
        popupAnchor: [0, -62],
      });

      const popupHtml = `
        <div class="market-popup">
          <strong>${escapeHtml(spot.name)}</strong>
          <span class="market-popup__hours">${escapeHtml(spot.hoursRange)} · ${escapeHtml(spot.openDays)}</span>
          <div class="market-popup__actions">
            <a href="${spot.directionsHref}" target="_blank" rel="noopener noreferrer">${escapeHtml(directions)}</a>
            <a href="${spot.mapsHref}" target="_blank" rel="noopener noreferrer">${escapeHtml(openPlace)}</a>
          </div>
        </div>
      `;

      Leaflet.marker([spot.pin.lat, spot.pin.lng], { icon }).bindPopup(popupHtml).addTo(map);
      bounds.extend([spot.pin.lat, spot.pin.lng]);
    });

    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [52, 52], maxZoom: 12 });
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
  }, [spots, directions, openPlace]);

  return (
    <section
      id="street-food-map"
      className="scroll-mt-24 overflow-hidden rounded-2xl border border-[#e7e8e9] bg-white shadow-sm"
      aria-labelledby="street-food-map-title"
    >
      <div className="border-b border-[#e7e8e9] px-5 py-4 sm:px-6">
        <h3 id="street-food-map-title" className="text-xl font-bold text-[#191c1d] md:text-2xl">
          {title}
        </h3>
        <p className="mt-1 text-sm text-[#747878]">{subtitle}</p>
        <div className="mt-3 flex flex-wrap gap-3 text-xs text-[#747878]">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded-sm bg-[#B52E88]" aria-hidden />
            {legendGuide}
          </span>
        </div>
      </div>

      <div ref={mapContainerRef} className="markets-leaflet-map relative z-0 w-full" aria-label={title} />

      <div className="flex flex-wrap gap-2 bg-[#fdf8fb] px-4 py-3 sm:px-5">
        {spots.map((spot) => (
          <a
            key={spot.id}
            href={spot.directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex max-w-full items-center gap-1.5 rounded-full bg-[#B52E88] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#B52E88]/90 sm:text-sm"
          >
            <Navigation className="h-3.5 w-3.5 shrink-0" aria-hidden />
            <span className="truncate">{spot.name}</span>
          </a>
        ))}
      </div>

      <div className="flex items-center justify-end border-t border-[#e7e8e9] px-4 py-3 sm:px-5">
        <a
          href={openAllHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B52E88] hover:underline"
        >
          {openAll}
          <ExternalLink className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
