"use client";

import { Info } from "lucide-react";
import { meals, tones } from "../shared/content";
import { useLang } from "../shared/LanguageProvider";
import { Reveal, RevealItem } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { C, Cloud, Float, Shape, Sun } from "../shared/Shapes";
import { Wave } from "../shared/Wave";

export function MobileMeals() {
  const { t } = useLang();
  const m = t.meals;

  return (
    <div className="relative overflow-hidden bg-lilac-soft pt-10 pb-20">
      <Float className="absolute top-8 left-4 w-14" duration={10} rotate={0}>
        <Cloud />
      </Float>
      <div className="relative mx-auto max-w-xl px-4 sm:max-w-2xl sm:px-6">
        <Reveal className="flex flex-col items-center">
          <Float className="mb-3 w-14" duration={10} rotate={10} y={4}>
            <Sun />
          </Float>
          <SectionHeading eyebrow={m.eyebrow} title={m.title} lead={m.lead} accent={C.mintDeep} petal={C.mint} />
        </Reveal>

        <ol className="mt-8 grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-4">
          {meals.map(({ key, Icon, tone }, i) => {
            const item = m.items[key];
            const c = tones[tone];
            return (
              <RevealItem key={key} delay={0.06 * i} className="flex flex-col items-center text-center">
                <div className="relative grid aspect-square w-[min(100%,128px)] place-items-center">
                  <Shape name="scallop" fill="#fff" className="absolute inset-0 size-full drop-shadow-[0_10px_16px_rgba(40,76,67,0.12)]" />
                  <span className={`absolute inset-[18%] rounded-full ${c.soft}`} />
                  <span className="relative grid size-[42%] place-items-center">
                    <Shape name={i % 2 ? "blob2" : "blob1"} fill={c.hex} outline={false} className="absolute inset-0 size-full" />
                    <Icon className="relative size-[50%]" />
                  </span>
                  <span className="absolute top-0 left-0 grid size-7 place-items-center rounded-full bg-forest font-display text-[12px] font-extrabold text-cream ring-[3px] ring-lilac-soft">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-2.5 font-display text-[16.5px] leading-tight font-extrabold">{item.title}</h3>
                <p className="mt-1 text-[13px] leading-snug text-forest-soft">{item.text}</p>
              </RevealItem>
            );
          })}
        </ol>

        <Reveal>
          <p className="mt-7 flex items-start gap-2.5 rounded-[22px] bg-white/85 px-4 py-3.5 text-[13.5px] leading-snug text-forest-soft">
            <Info className="mt-0.5 size-5 shrink-0 text-lilac-deep" />
            {m.note}
          </p>
        </Reveal>
      </div>
      <Wave color="var(--color-cream)" variant={0} flip />
    </div>
  );
}
