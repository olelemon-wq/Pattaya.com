"use client";

import { useLanguage } from "@/components/layout/language-provider";
import {
  getEmergencyHubCopy,
  getEmergencyMoreNumbers,
  type EmergencySosId,
} from "@/lib/i18n/messages/living/emergency-hub";
import { tSiteUiTemplate } from "@/lib/i18n/messages/site-ui";
import { Ambulance, MapPin, Phone, Shield } from "lucide-react";
import { useCallback, useState } from "react";

export function PattayaEmergencyHub() {
  const { language } = useLanguage();
  const copy = getEmergencyHubCopy(language);
  const moreNumbers = getEmergencyMoreNumbers(language);

  const [expandedSos, setExpandedSos] = useState<EmergencySosId | null>(null);
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [locating, setLocating] = useState(false);
  const [locError, setLocError] = useState<string | null>(null);

  const toggleSos = (id: EmergencySosId) => {
    setExpandedSos((prev) => (prev === id ? null : id));
  };

  const getLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setLocError(copy.locationUnsupported);
      return;
    }
    setLocating(true);
    setLocError(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setLocating(false);
      },
      () => {
        setLocError(copy.locationDenied);
        setLocating(false);
      },
      { enableHighAccuracy: true, timeout: 12_000, maximumAge: 60_000 },
    );
  }, [copy.locationDenied, copy.locationUnsupported]);

  const mapsUrl = coords
    ? `https://www.google.com/maps?q=${coords.lat},${coords.lng}`
    : null;

  const sosCards: { id: EmergencySosId; label: string; thai: string }[] = [
    { id: "doctor", label: copy.sosDoctor, thai: copy.sosDoctorThai },
    { id: "police", label: copy.sosPolice, thai: copy.sosPoliceThai },
  ];

  return (
    <section className="emergency-hub" aria-labelledby="emergency-hub-title">
      <header className="emergency-hub__intro">
        <span className="emergency-hub__badge">{copy.badge}</span>
        <h2 id="emergency-hub-title" className="emergency-hub__title">
          {copy.title}
        </h2>
        <p className="emergency-hub__subtitle">{copy.subtitle}</p>
      </header>

      <div className="emergency-hub__card">
        {/* Section 1: Quick call pad */}
        <div className="emergency-hub__section">
          <h3 className="emergency-hub__section-title">{copy.callTitle}</h3>
          <div className="emergency-hub__call-grid">
            <a
              href="tel:1155"
              aria-label={tSiteUiTemplate(language, "callNumber", { number: "1155" })}
              className="emergency-hub__call-btn emergency-hub__call-btn--police"
            >
              <Shield className="emergency-hub__call-icon" aria-hidden />
              <span className="emergency-hub__call-label">{copy.touristPolice}</span>
              <span className="emergency-hub__call-number">1155</span>
              <span className="emergency-hub__call-note">{copy.touristPoliceNote}</span>
            </a>
            <a
              href="tel:1669"
              aria-label={tSiteUiTemplate(language, "callNumber", { number: "1669" })}
              className="emergency-hub__call-btn emergency-hub__call-btn--ambulance"
            >
              <Ambulance className="emergency-hub__call-icon" aria-hidden />
              <span className="emergency-hub__call-label">{copy.ambulance}</span>
              <span className="emergency-hub__call-number">1669</span>
              <span className="emergency-hub__call-note">{copy.ambulanceNote}</span>
            </a>
          </div>
        </div>

        <hr className="emergency-hub__divider" />

        {/* Section 2: SOS Thai cards */}
        <div className="emergency-hub__section">
          <h3 className="emergency-hub__section-title">{copy.sosTitle}</h3>
          <p className="emergency-hub__hint">{copy.sosTapHint}</p>
          <div className="emergency-hub__sos-list">
            {sosCards.map((card) => {
              const open = expandedSos === card.id;
              return (
                <div
                  key={card.id}
                  className={`emergency-hub__sos${open ? " emergency-hub__sos--open" : ""}`}
                >
                  <button
                    type="button"
                    className="emergency-hub__sos-trigger"
                    aria-expanded={open}
                    onClick={() => toggleSos(card.id)}
                  >
                    <Phone className="h-5 w-5 shrink-0 opacity-70" aria-hidden />
                    <span>{card.label}</span>
                    <span className="emergency-hub__sos-chevron" aria-hidden />
                  </button>
                  <div className="emergency-hub__sos-panel" aria-hidden={!open}>
                    <div className="emergency-hub__sos-panel-inner">
                      <p className="emergency-hub__sos-thai" lang="th">
                        {card.thai}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <hr className="emergency-hub__divider" />

        {/* Section 3: Location sharer */}
        <div className="emergency-hub__section">
          <h3 className="emergency-hub__section-title">{copy.locationTitle}</h3>
          <button
            type="button"
            className="emergency-hub__location-btn"
            onClick={getLocation}
            disabled={locating}
          >
            <MapPin className="h-5 w-5" aria-hidden />
            {locating ? copy.locationLoading : copy.locationBtn}
          </button>
          {locError ? <p className="emergency-hub__location-error">{locError}</p> : null}
          {coords && mapsUrl ? (
            <div className="emergency-hub__location-result">
              <p className="emergency-hub__location-coords">
                {copy.locationCoords(coords.lat.toFixed(5), coords.lng.toFixed(5))}
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="emergency-hub__maps-link"
              >
                {copy.locationOpenMaps}
              </a>
            </div>
          ) : null}
        </div>

        <div className="emergency-hub__more">
          <p className="emergency-hub__more-title">{copy.moreNumbersTitle}</p>
          <ul className="emergency-hub__more-list">
            {moreNumbers.map((item) => (
              <li key={item.number + item.label} className="emergency-hub__more-item">
                <a
                  href={item.href}
                  aria-label={tSiteUiTemplate(language, "callNumber", { number: item.number })}
                  className="emergency-hub__more-link"
                >
                  <span className="emergency-hub__more-row">
                    <span className="emergency-hub__more-label">{item.label}</span>
                    <span className="emergency-hub__more-number">{item.number}</span>
                  </span>
                  <span className="emergency-hub__more-note">
                    {"note" in item && item.note ? item.note : "\u00a0"}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="emergency-hub__disclaimer">{copy.disclaimer}</p>
    </section>
  );
}
