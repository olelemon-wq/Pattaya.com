"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { HIDDEN_MARKET_MAP_PIN_COLOR, MARKET_MAP_PIN_COLOR } from "@/lib/design/shopping-markets-map";
import {
  getMarketMapCopy,
  getMarketsForMap,
} from "@/lib/i18n/messages/explore-shopping-markets-guide";
import { getHiddenMarketsForMap } from "@/lib/i18n/messages/explore-shopping-markets-hidden";
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

function createPinIcon(shortLabel: string, marketLabel: string, color: string) {
  return `
    <div class="market-pin" role="img" aria-label="${escapeHtml(marketLabel)}">
      <div class="market-pin__head" style="background-color:${color}">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" aria-hidden="true">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
          <path d="M3 6h18"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
      </div>
      <div class="market-pin__point" style="border-top-color:${color}"></div>
      <span class="market-pin__label">${escapeHtml(shortLabel)}</span>
    </div>
  `;
}

export function ShoppingMarketsMap() {
  const { language } = useLanguage();
  const markets = useMemo(() => getMarketsForMap(language), [language]);
  const hiddenMarkets = useMemo(() => getHiddenMarketsForMap(language), [language]);
  const mapCopy = useMemo(() => getMarketMapCopy(language), [language]);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);

  const { title, subtitle, directions, openPlace, openAll, openAllHref, legendGuide, legendHidden } =
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

    const addMarker = (
      market: { name: string; hoursRange: string; openDays: string; directionsHref?: string; mapsHref: string },
      pin: { lat: number; lng: number; shortLabel: string },
      color: string,
    ) => {
      const icon = Leaflet.divIcon({
        className: "market-map-marker",
        html: createPinIcon(pin.shortLabel, market.name, color),
        iconSize: [52, 62],
        iconAnchor: [26, 62],
        popupAnchor: [0, -62],
      });

      const safeName = escapeHtml(market.name);
      const popupHtml = `
        <div class="market-popup">
          <strong>${safeName}</strong>
          <span class="market-popup__hours">${escapeHtml(market.hoursRange)} · ${escapeHtml(market.openDays)}</span>
          <div class="market-popup__actions">
            <a href="${market.directionsHref}" target="_blank" rel="noopener noreferrer">${escapeHtml(directions)} →</a>
            <a href="${market.mapsHref}" target="_blank" rel="noopener noreferrer">${escapeHtml(openPlace)}</a>
          </div>
        </div>
      `;

      Leaflet.marker([pin.lat, pin.lng], { icon }).bindPopup(popupHtml).addTo(map);
      bounds.extend([pin.lat, pin.lng]);
    };

    markets.forEach((market) => addMarker(market, market.pin, MARKET_MAP_PIN_COLOR));
    hiddenMarkets.forEach((market) =>
      addMarker(market, market.pin, HIDDEN_MARKET_MAP_PIN_COLOR),
    );

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
  }, [markets, hiddenMarkets, directions, openPlace]);

  return (
    <section
      id="markets-map"
      className="scroll-mt-24 overflow-hidden rounded-2xl border border-[#e7e8e9] bg-white shadow-sm"
      aria-labelledby="markets-map-title"
    >
      <div className="border-b border-[#e7e8e9] px-5 py-4 sm:px-6">
        <h3 id="markets-map-title" className="text-xl font-bold text-[#191c1d] md:text-2xl">
          {title}
        </h3>
        <p className="mt-1 text-sm text-[#747878]">{subtitle}</p>
        <div className="mt-3 flex flex-wrap gap-3 text-xs text-[#747878]">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded-sm bg-[#B52E88]" aria-hidden />
            {legendGuide}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded-sm bg-[#2d6a4f]" aria-hidden />
            {legendHidden}
          </span>
        </div>
      </div>

      <div ref={mapContainerRef} className="markets-leaflet-map relative z-0 w-full" aria-label={title} />

      <div className="space-y-2 bg-[#fdf8fb] px-4 py-3 sm:px-5">
        <div className="flex flex-wrap gap-2">
          {markets.map((market) => (
            <a
              key={market.id}
              href={market.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex max-w-full items-center gap-1.5 rounded-full bg-[#B52E88] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#B52E88]/90 sm:text-sm"
            >
              <Navigation className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <span className="truncate">{market.name}</span>
            </a>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {hiddenMarkets.map((market) => (
            <a
              key={market.id}
              href={market.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex max-w-full items-center gap-1.5 rounded-full bg-[#2d6a4f] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#2d6a4f]/90 sm:text-sm"
            >
              <Navigation className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <span className="truncate">{market.name}</span>
            </a>
          ))}
        </div>
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
