"use client";

import { motion } from "framer-motion";
import { Cloud as CloudIcon, FolderOpen } from "lucide-react";
import { DocsArt } from "../shared/DocsArt";
import { DocsButton } from "../shared/DocsButton";
import { useLang } from "../shared/LanguageProvider";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { C, Cloud, Float, Flower, Shape, Sparkle, Star } from "../shared/Shapes";
import { Wave } from "../shared/Wave";

export function DesktopDocs() {
  const { t } = useLang();
  const d = t.docs;

  return (
    <div className="relative isolate bg-lilac-soft pt-[clamp(28px,3.6vw,56px)] pb-[clamp(76px,7.5vw,112px)]">
      {/* декоративный слой: фигурки ограничены им и лежат под контентом */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <Float className="absolute top-14 right-[5%] hidden w-24 xl:block" duration={11} rotate={0}>
          <Cloud />
        </Float>
        <Float className="absolute bottom-[26%] left-[3%] hidden w-9 xl:block" delay={0.6}>
          <Star fill={C.peach} />
        </Float>
      </div>

      <div className="relative mx-auto max-w-[1040px] px-8 xl:px-12">
        <Reveal>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-center gap-[clamp(24px,4vw,56px)] rounded-[44px_44px_44px_16px] bg-white p-[clamp(24px,3vw,40px)] shadow-soft ring-1 ring-forest/6"
          >
            {/* иллюстрация папки */}
            <div className="relative grid aspect-[6/5] place-items-center">
              <Shape name="blob2" fill={C.peach} outline={false} stretch className="absolute inset-0 size-full opacity-60" />
              <DocsArt className="relative w-[82%] transition-transform duration-500 hover:-rotate-2" />
              <Float className="absolute top-[4%] left-[4%] w-[11%]" delay={0.4}>
                <Flower petals={6} fill={C.lilac} />
              </Float>
              <Sparkle className="absolute right-[6%] bottom-[8%] w-[6%]" fill={C.mintDeep} />
            </div>

            {/* текст */}
            <div className="min-w-0">
              <SectionHeading eyebrow={d.eyebrow} title={d.title} lead={d.lead} align="left" accent={C.lilacDeep} petal={C.lilac} />

              <ul className="mt-5 flex flex-wrap gap-2.5 text-[14px] font-semibold text-forest-soft">
                <li className="inline-flex items-center gap-2 rounded-full bg-peach-soft py-1.5 pr-3.5 pl-1.5">
                  <span className="grid size-7 place-items-center rounded-full bg-peach">
                    <FolderOpen className="size-4 text-forest" />
                  </span>
                  {d.folder}
                </li>
                <li className="inline-flex items-center gap-2 rounded-full bg-mint-soft py-1.5 pr-3.5 pl-1.5">
                  <span className="grid size-7 place-items-center rounded-full bg-mint">
                    <CloudIcon className="size-4 text-forest" />
                  </span>
                  {d.source}
                </li>
              </ul>

              <DocsButton className="mt-6 h-12 px-6 text-[15px]" />
              <p className="mt-3 text-[13px] text-forest-muted">{d.newTab}</p>
            </div>
          </motion.div>
        </Reveal>
      </div>

      <Wave color="var(--color-mint-soft)" variant={2} flip />
    </div>
  );
}
