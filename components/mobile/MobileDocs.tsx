"use client";

import { Cloud as CloudIcon, FolderOpen } from "lucide-react";
import { DocsArt } from "../shared/DocsArt";
import { DocsButton } from "../shared/DocsButton";
import { useLang } from "../shared/LanguageProvider";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { C, Cloud, Float, Flower, Shape, Sparkle } from "../shared/Shapes";
import { Wave } from "../shared/Wave";

export function MobileDocs() {
  const { t } = useLang();
  const d = t.docs;

  return (
    <div className="relative isolate bg-lilac-soft pt-10 pb-20">
      {/* декоративный слой: фигурки ограничены им и лежат под контентом */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <Float className="absolute top-8 left-4 w-14" duration={10} rotate={0}>
          <Cloud />
        </Float>
      </div>

      <div className="relative mx-auto max-w-xl px-4 sm:max-w-2xl sm:px-6">
        <Reveal>
          <SectionHeading eyebrow={d.eyebrow} title={d.title} lead={d.lead} accent={C.lilacDeep} petal={C.lilac} />
        </Reveal>

        <Reveal delay={0.08} y={18}>
          <div className="mt-7 rounded-[32px_32px_32px_12px] bg-white p-4 shadow-soft ring-1 ring-forest/5 sm:p-6">
            <div className="relative mx-auto grid aspect-[6/5] w-full max-w-[300px] place-items-center">
              <Shape name="blob2" fill={C.peach} outline={false} stretch className="absolute inset-0 size-full opacity-60" />
              <DocsArt className="relative w-[80%]" />
              <Flower petals={6} fill={C.lilac} className="absolute top-[4%] left-[4%] w-[11%]" />
              <Sparkle className="absolute right-[6%] bottom-[8%] w-[6%]" fill={C.mintDeep} />
            </div>

            <ul className="mt-4 flex flex-wrap justify-center gap-2 text-[13.5px] font-semibold text-forest-soft">
              <li className="inline-flex items-center gap-2 rounded-full bg-peach-soft py-1.5 pr-3 pl-1.5">
                <span className="grid size-7 place-items-center rounded-full bg-peach">
                  <FolderOpen className="size-4 text-forest" />
                </span>
                {d.folder}
              </li>
              <li className="inline-flex items-center gap-2 rounded-full bg-mint-soft py-1.5 pr-3 pl-1.5">
                <span className="grid size-7 place-items-center rounded-full bg-mint">
                  <CloudIcon className="size-4 text-forest" />
                </span>
                {d.source}
              </li>
            </ul>

            <DocsButton className="mt-5 h-14 w-full px-4 text-base" />
            <p className="mt-2.5 text-center text-[12.5px] text-forest-muted">{d.newTab}</p>
          </div>
        </Reveal>
      </div>

      <Wave color="var(--color-mint-soft)" variant={2} flip />
    </div>
  );
}
