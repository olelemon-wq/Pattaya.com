"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { CAFE_MAP_PIN_COLOR } from "@/lib/design/cafes-map";
import { getCafeMapCopy, getCafesForMap } from "@/lib/i18n/messages/explore-cafes-guide";
import type { Map as LeafletMap } from "leaflet";
import Leaflet from "leaflet";
import { Coffee, ExternalLink, Navigation } from "lucide-react";
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
          <path d="M10 2v2"/>
          <path d="M14 2v2"/>
          <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/>
          <path d="M6 2v2"/>
        </svg>
      </div>
      <div class="market-pin__point" style="border-top-color:${color}"></div>
      <span class="market-pin__label">${escapeHtml(shortLabel)}</span>
    </div>
  `;
}

export function CafesMap() {
  const { language } = useLanguage();
  const cafes = useMemo(() => getCafesForMap(language), [language]);
  const mapCopy = useMemo(() => getCafeMapCopy(language), [language]);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);

  const { title, subtitle, directions, openPlace, openAll, openAllHref, openRoute, openRouteHref, legendGuide } =
    mapCopy;

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

    cafes.forEach((cafe) => {
      const icon = Leaflet.divIcon({
        className: "market-map-marker",
        html: createPinIcon(cafe.pin.shortLabel, cafe.name, CAFE_MAP_PIN_COLOR),
        iconSize: [52, 62],
        iconAnchor: [26, 62],
        popupAnchor: [0, -62],
      });

      const popupHtml = `
        <div class="market-popup">
          <strong>${escapeHtml(cafe.name)}</strong>
          <span class="market-popup__hours">${escapeHtml(cafe.hoursRange)} · ${escapeHtml(cafe.openDays)}</span>
          <div class="market-popup__actions">
            <a href="${cafe.directionsHref}" target="_blank" rel="noopener noreferrer">${escapeHtml(directions)} →</a>
            <a href="${cafe.mapsHref}" target="_blank" rel="noopener noreferrer">${escapeHtml(openPlace)}</a>
          </div>
        </div>
      `;

      Leaflet.marker([cafe.pin.lat, cafe.pin.lng], { icon }).bindPopup(popupHtml).addTo(map);
      bounds.extend([cafe.pin.lat, cafe.pin.lng]);
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
  }, [cafes, directions, openPlace]);

  return (
    <section
      id="cafes-map"
      className="scroll-mt-24 overflow-hidden rounded-2xl border border-[#e7e8e9] bg-white shadow-sm"
      aria-labelledby="cafes-map-title"
    >
      <div className="border-b border-[#e7e8e9] px-5 py-4 sm:px-6">
        <h3 id="cafes-map-title" className="text-xl font-bold text-[#191c1d] md:text-2xl">
          {title}
        </h3>
        <p className="mt-1 text-sm text-[#747878]">{subtitle}</p>
        <div className="mt-3 flex flex-wrap gap-3 text-xs text-[#747878]">
          <span className="flex items-center gap-1.5">
            <Coffee className="h-3.5 w-3.5 text-[#B52E88]" aria-hidden />
            {legendGuide}
          </span>
        </div>
      </div>

      <div ref={mapContainerRef} className="markets-leaflet-map relative z-0 w-full" aria-label={title} />

      <div className="flex flex-wrap gap-2 bg-[#fdf8fb] px-4 py-3 sm:px-5">
        {cafes.map((cafe) => (
          <a
            key={cafe.id}
            href={cafe.directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex max-w-full items-center gap-1.5 rounded-full bg-[#B52E88] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#B52E88]/90 sm:text-sm"
          >
            <Navigation className="h-3.5 w-3.5 shrink-0" aria-hidden />
            <span className="truncate">{cafe.name}</span>
          </a>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-end gap-4 border-t border-[#e7e8e9] px-4 py-3 sm:px-5">
        <a
          href={openRouteHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#191c1d] hover:underline"
        >
          <Navigation className="h-4 w-4 shrink-0 text-[#B52E88]" aria-hidden />
          {openRoute}
        </a>
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
