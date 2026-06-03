"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { YACHT_MAP_PIN_COLOR } from "@/lib/design/yacht-charter-map";
import { getYachtChartersForMap, getYachtMapCopy } from "@/lib/i18n/messages/explore-yacht-guide";
import type { Map as LeafletMap } from "leaflet";
import Leaflet from "leaflet";
import { Anchor, ExternalLink } from "lucide-react";
import { useEffect, useMemo, useRef } from "react";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function createPinIcon(shortLabel: string, name: string, color: string) {
  return `
    <div class="market-pin" role="img" aria-label="${escapeHtml(name)}">
      <div class="market-pin__head" style="background-color:${color}">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" aria-hidden="true">
          <path d="M12 22V8"/>
          <path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
          <circle cx="12" cy="5" r="3"/>
        </svg>
      </div>
      <div class="market-pin__point" style="border-top-color:${color}"></div>
      <span class="market-pin__label">${escapeHtml(shortLabel)}</span>
    </div>
  `;
}

export function YachtCharterMap() {
  const { language } = useLanguage();
  const charters = useMemo(() => getYachtChartersForMap(language), [language]);
  const mapCopy = useMemo(() => getYachtMapCopy(language), [language]);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);

  const { title, subtitle, directions, openPlace, openAll, openAllHref, hoursOnCard } = mapCopy;

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

    charters.forEach((item) => {
      const icon = Leaflet.divIcon({
        className: "market-map-marker",
        html: createPinIcon(item.pin.shortLabel, item.name, YACHT_MAP_PIN_COLOR),
        iconSize: [52, 62],
        iconAnchor: [26, 62],
        popupAnchor: [0, -62],
      });

      const popupHtml = `
        <div class="market-popup">
          <strong>${escapeHtml(item.name)}</strong>
          <span class="market-popup__hours">${escapeHtml(item.hoursRange)} · ${escapeHtml(item.priceGuide)}</span>
          <div class="market-popup__actions">
            <a href="${item.directionsHref}" target="_blank" rel="noopener noreferrer">${escapeHtml(directions)}</a>
            <a href="${item.mapsHref}" target="_blank" rel="noopener noreferrer">${escapeHtml(openPlace)}</a>
          </div>
        </div>
      `;

      Leaflet.marker([item.pin.lat, item.pin.lng], { icon }).bindPopup(popupHtml).addTo(map);
      bounds.extend([item.pin.lat, item.pin.lng]);
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
  }, [charters, directions, openPlace]);

  return (
    <section
      id="yacht-map"
      className="scroll-mt-24 overflow-hidden rounded-2xl border border-[#e7e8e9] bg-white shadow-sm"
      aria-labelledby="yacht-map-title"
    >
      <div className="border-b border-[#e7e8e9] bg-[#fdf8fb] px-5 py-4 sm:px-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 id="yacht-map-title" className="flex items-center gap-2 text-lg font-bold text-[#191c1d]">
              <Anchor className="h-5 w-5 text-[#455f88]" aria-hidden />
              {title}
            </h3>
            <p className="mt-1 text-sm text-[#747878]">{subtitle}</p>
          </div>
          <a
            href={openAllHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#455f88]/30 bg-white px-3 py-2 text-xs font-semibold text-[#455f88] transition hover:bg-[#455f88]/5"
          >
            {openAll}
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </div>
      <div ref={mapContainerRef} className="h-[320px] w-full md:h-[380px]" role="application" aria-label={title} />
      <p className="border-t border-[#e7e8e9] px-5 py-2 text-[10px] text-[#747878] sm:px-6">
        {hoursOnCard} · OpenStreetMap
      </p>
    </section>
  );
}
