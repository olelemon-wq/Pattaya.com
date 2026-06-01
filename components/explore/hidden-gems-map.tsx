"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { HIDDEN_GEM_MAP_PIN_COLOR } from "@/lib/design/hidden-gems-map";
import { getHiddenGemMapCopy, getHiddenGemsForMap } from "@/lib/i18n/messages/explore-hidden-gems-guide";
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

export function HiddenGemsMap() {
  const { language } = useLanguage();
  const gems = useMemo(() => getHiddenGemsForMap(language), [language]);
  const mapCopy = useMemo(() => getHiddenGemMapCopy(language), [language]);

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

    gems.forEach((gem) => {
      const icon = Leaflet.divIcon({
        className: "market-map-marker",
        html: createPinIcon(gem.pin.shortLabel, gem.name, HIDDEN_GEM_MAP_PIN_COLOR),
        iconSize: [52, 62],
        iconAnchor: [26, 62],
        popupAnchor: [0, -62],
      });

      const popupHtml = `
        <div class="market-popup">
          <strong>${escapeHtml(gem.name)}</strong>
          <span class="market-popup__hours">${escapeHtml(gem.hoursRange)} · ${escapeHtml(gem.openDays)}</span>
          <div class="market-popup__actions">
            <a href="${gem.directionsHref}" target="_blank" rel="noopener noreferrer">${escapeHtml(directions)} →</a>
            <a href="${gem.mapsHref}" target="_blank" rel="noopener noreferrer">${escapeHtml(openPlace)}</a>
          </div>
        </div>
      `;

      Leaflet.marker([gem.pin.lat, gem.pin.lng], { icon }).bindPopup(popupHtml).addTo(map);
      bounds.extend([gem.pin.lat, gem.pin.lng]);
    });

    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [52, 52], maxZoom: 11 });
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
  }, [gems, directions, openPlace]);

  return (
    <section
      id="hidden-gems-map"
      className="scroll-mt-24 overflow-hidden rounded-2xl border border-[#e7e8e9] bg-white shadow-sm"
      aria-labelledby="hidden-gems-map-title"
    >
      <div className="border-b border-[#e7e8e9] px-5 py-4 sm:px-6">
        <h3 id="hidden-gems-map-title" className="text-xl font-bold text-[#191c1d] md:text-2xl">
          {title}
        </h3>
        <p className="mt-1 text-sm text-[#747878]">{subtitle}</p>
        <div className="mt-3 flex flex-wrap gap-3 text-xs text-[#747878]">
          <span className="flex items-center gap-1.5">
            <span
              className="inline-block h-3 w-3 rounded-sm"
              style={{ backgroundColor: HIDDEN_GEM_MAP_PIN_COLOR }}
              aria-hidden
            />
            {legendGuide}
          </span>
        </div>
      </div>

      <div ref={mapContainerRef} className="markets-leaflet-map relative z-0 w-full" aria-label={title} />

      <div className="flex flex-wrap gap-2 bg-[#fdf8fb] px-4 py-3 sm:px-5">
        {gems.map((gem) => (
          <a
            key={gem.id}
            href={gem.directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex max-w-full items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white transition hover:opacity-90 sm:text-sm"
            style={{ backgroundColor: HIDDEN_GEM_MAP_PIN_COLOR }}
          >
            <Navigation className="h-3.5 w-3.5 shrink-0" aria-hidden />
            <span className="truncate">{gem.name}</span>
          </a>
        ))}
      </div>

      <div className="flex items-center justify-end border-t border-[#e7e8e9] px-4 py-3 sm:px-5">
        <a
          href={openAllHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#059669] hover:underline"
        >
          {openAll}
          <ExternalLink className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
