"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { WELLNESS_MAP_PIN_COLOR } from "@/lib/design/wellness-map";
import { getWellnessMapCopy, getWellnessSpasForMap } from "@/lib/i18n/messages/explore-wellness-guide";
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
          <path d="M12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"/>
        </svg>
      </div>
      <div class="market-pin__point" style="border-top-color:${color}"></div>
      <span class="market-pin__label">${escapeHtml(shortLabel)}</span>
    </div>
  `;
}

export function WellnessMap() {
  const { language } = useLanguage();
  const spas = useMemo(() => getWellnessSpasForMap(language), [language]);
  const mapCopy = useMemo(() => getWellnessMapCopy(language), [language]);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);

  const { title, subtitle, directions, openPlace, openRoute, openRouteHref, legendGuide } = mapCopy;

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

    spas.forEach((spa) => {
      const icon = Leaflet.divIcon({
        className: "market-map-marker",
        html: createPinIcon(spa.pin.shortLabel, spa.name, WELLNESS_MAP_PIN_COLOR),
        iconSize: [52, 62],
        iconAnchor: [26, 62],
        popupAnchor: [0, -62],
      });

      const popupHtml = `
        <div class="market-popup">
          <strong>${escapeHtml(spa.name)}</strong>
          <span class="market-popup__hours">${escapeHtml(spa.hoursRange)} · ${escapeHtml(spa.openDays)}</span>
          <div class="market-popup__actions">
            <a href="${spa.directionsHref}" target="_blank" rel="noopener noreferrer">${escapeHtml(directions)} →</a>
            <a href="${spa.mapsHref}" target="_blank" rel="noopener noreferrer">${escapeHtml(openPlace)}</a>
          </div>
        </div>
      `;

      Leaflet.marker([spa.pin.lat, spa.pin.lng], { icon }).bindPopup(popupHtml).addTo(map);
      bounds.extend([spa.pin.lat, spa.pin.lng]);
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
  }, [spas, directions, openPlace]);

  return (
    <section
      id="wellness-map"
      className="scroll-mt-24 overflow-hidden rounded-2xl border border-[#e7e8e9] bg-white shadow-sm"
      aria-labelledby="wellness-map-title"
    >
      <div className="border-b border-[#e7e8e9] px-5 py-4 sm:px-6">
        <h3 id="wellness-map-title" className="text-xl font-bold text-[#191c1d] md:text-2xl">
          {title}
        </h3>
        <p className="mt-1 text-sm text-[#747878]">{subtitle}</p>
        <div className="mt-3 flex flex-wrap gap-3 text-xs text-[#747878]">
          <span className="flex items-center gap-1.5">
            <span
              className="inline-block h-3 w-3 rounded-sm"
              style={{ backgroundColor: WELLNESS_MAP_PIN_COLOR }}
              aria-hidden
            />
            {legendGuide}
          </span>
        </div>
      </div>

      <div ref={mapContainerRef} className="markets-leaflet-map relative z-0 w-full" aria-label={title} />

      <div className="flex flex-wrap gap-2 bg-[#fdf8fb] px-4 py-3 sm:px-5">
        {spas.map((spa) => (
          <a
            key={spa.id}
            href={spa.directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex max-w-full items-center gap-1.5 rounded-full bg-[#B52E88] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#B52E88]/90 sm:text-sm"
          >
            <Navigation className="h-3.5 w-3.5 shrink-0" aria-hidden />
            <span className="truncate">{spa.name}</span>
          </a>
        ))}
      </div>

      <div className="flex items-center justify-end border-t border-[#e7e8e9] px-4 py-3 sm:px-5">
        <a
          href={openRouteHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B52E88] hover:underline"
        >
          {openRoute}
          <ExternalLink className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
