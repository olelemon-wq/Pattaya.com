"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { waiPhotos, waiThumbGuideTop } from "@/lib/design/wai-images";
import { CultureDosDontsIllustrated } from "@/components/living/culture-dos-donts-illustrated";
import {
  getThaiCultureSurvivalCopy,
  getWaiImageAlt,
  getWaiTabContent,
  getWaiTabLabels,
  type WaiTabId,
} from "@/lib/i18n/messages/living/thai-culture-survival";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LOCAL_IMAGE = (src: string) => src.startsWith("/");

function WaiPhoto({
  tab,
  alt,
  caption,
  thumbLabel,
}: {
  tab: WaiTabId;
  alt: string;
  caption: string;
  thumbLabel: string;
}) {
  return (
    <figure className="culture-survival__figure">
      <div className="culture-survival__photo-wrap">
        <Image
          src={waiPhotos[tab]}
          alt={alt}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, 440px"
          className="culture-survival__photo-img"
          priority={tab === "monks"}
        />
        <div
          className="culture-survival__thumb-guide"
          style={{ top: waiThumbGuideTop[tab] }}
          aria-hidden
        >
          <span className="culture-survival__thumb-guide-pill">{thumbLabel}</span>
          <span className="culture-survival__thumb-guide-line" />
        </div>
      </div>
      <figcaption className="culture-survival__photo-caption">{caption}</figcaption>
    </figure>
  );
}

export function ThaiCultureSurvivalGuide() {
  const { language } = useLanguage();
  const copy = getThaiCultureSurvivalCopy(language);
  const tabLabels = getWaiTabLabels(language);

  const [waiTab, setWaiTab] = useState<WaiTabId>("monks");
  const wai = getWaiTabContent(language, waiTab);

  return (
    <section
      id="thai-culture-survival"
      className="culture-survival"
      aria-labelledby="culture-survival-title"
    >
      <header className="culture-survival__intro">
        <span className="culture-survival__badge">{copy.badge}</span>
        <h2 id="culture-survival-title" className="culture-survival__title">
          {copy.title}
        </h2>
        <p className="culture-survival__subtitle">{copy.subtitle}</p>
      </header>

      <div className="culture-survival__card">
        {/* Wai visualizer */}
        <div className="culture-survival__section">
          <h3 className="culture-survival__section-title">{copy.waiTitle}</h3>
          <p className="culture-survival__hint">{copy.waiHint}</p>

          <div
            className="culture-survival__segmented"
            role="tablist"
            aria-label={copy.waiTitle}
          >
            {tabLabels.map((tab) => {
              const active = waiTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className={`culture-survival__segment${active ? " culture-survival__segment--active" : ""}`}
                  onClick={() => setWaiTab(tab.id)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="culture-survival__wai-panel" role="tabpanel">
            <div className="culture-survival__wai-grid">
              <WaiPhoto
                tab={waiTab}
                alt={getWaiImageAlt(language, waiTab)}
                caption={copy.photoCaption}
                thumbLabel={copy.thumbLabel}
              />
              <div className="culture-survival__wai-copy">
                <dl className="culture-survival__wai-meta">
                  <div>
                    <dt>{copy.thumbLabel}</dt>
                    <dd>{wai.thumb}</dd>
                  </div>
                  <div>
                    <dt>{copy.bowLabel}</dt>
                    <dd>{wai.bow}</dd>
                  </div>
                </dl>
                <p className="culture-survival__wai-body">{wai.body}</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="culture-survival__divider" />

        {/* Illustrated do & don't */}
        <div className="culture-survival__section">
          <h3 className="culture-survival__section-title">{copy.flipTitle}</h3>
          <CultureDosDontsIllustrated />
        </div>
      </div>

      <p className="culture-survival__note">
        {copy.toolkitNote}{" "}
        <Link
          href="/living/culture/etiquette"
          className="font-bold text-[#B29475] hover:underline"
        >
          {copy.etiquetteLink}
        </Link>
      </p>
    </section>
  );
}
