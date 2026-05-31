"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { dosDontsImages } from "@/lib/design/culture-images";
import {
  getDosDontPanels,
  getThaiCultureSurvivalCopy,
} from "@/lib/i18n/messages/living/thai-culture-survival";
import Image from "next/image";
import { useMemo } from "react";

const LOCAL_IMAGE = (src: string) => src.startsWith("/");

export type CultureDosDontsIllustratedProps = {
  doLabel?: string;
  dontLabel?: string;
};

export function CultureDosDontsIllustrated({
  doLabel,
  dontLabel,
}: CultureDosDontsIllustratedProps = {}) {
  const { language } = useLanguage();
  const copy = getThaiCultureSurvivalCopy(language);
  const panels = useMemo(() => getDosDontPanels(language), [language]);

  const doLbl = doLabel ?? copy.doLabel;
  const dontLbl = dontLabel ?? copy.dontLabel;

  return (
    <div className="culture-survival__dos-donts">
      <div className="culture-survival__dos-donts-grid">
        {panels.map((panel) => {
          const imgs = dosDontsImages[panel.id];
          return (
            <article key={panel.id} className="culture-survival__dos-donts-card">
              <h4 className="culture-survival__dos-donts-topic">{panel.topic}</h4>

              <div className="culture-survival__dos-donts-split">
                <figure className="culture-survival__dos-donts-figure culture-survival__dos-donts-figure--do">
                  <span className="culture-survival__dos-donts-chip culture-survival__dos-donts-chip--do">
                    {doLbl}
                  </span>
                  <div className="culture-survival__dos-donts-img-wrap">
                    <Image
                      src={imgs.do}
                      alt={panel.doAlt}
                      width={632}
                      height={384}
                      unoptimized={LOCAL_IMAGE(imgs.do)}
                      className="culture-survival__dos-donts-img"
                      sizes="(max-width: 768px) 50vw, 280px"
                    />
                  </div>
                </figure>

                <figure className="culture-survival__dos-donts-figure culture-survival__dos-donts-figure--dont">
                  <span className="culture-survival__dos-donts-chip culture-survival__dos-donts-chip--dont">
                    {dontLbl}
                  </span>
                  <div className="culture-survival__dos-donts-img-wrap">
                    <Image
                      src={imgs.dont}
                      alt={panel.dontAlt}
                      width={632}
                      height={384}
                      unoptimized={LOCAL_IMAGE(imgs.dont)}
                      className="culture-survival__dos-donts-img"
                      sizes="(max-width: 768px) 50vw, 280px"
                    />
                  </div>
                </figure>
              </div>

              <div className="culture-survival__dos-donts-rules">
                <p className="culture-survival__rule culture-survival__rule--do">
                  {panel.doText}
                </p>
                <p className="culture-survival__rule culture-survival__rule--dont">
                  {panel.dontText}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
