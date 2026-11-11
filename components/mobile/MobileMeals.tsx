"use client";

import { Info } from "lucide-react";
import { meals, tones } from "../shared/content";
import { CloudShape, Float, LeafShape } from "../shared/Decor";
import { useLang } from "../shared/LanguageProvider";
import { Reveal, RevealItem } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { Wave } from "../shared/Wave";

export function MobileMeals() {
  const { t } = useLang();
  const m = t.meals;

  return (
    <div className="relative overflow-hidden bg-lilac-soft pt-10 pb-24">
      <Float className="absolute top-8 right-4 w-16" duration={10} rotate={0}>
        <CloudShape />
      </Float>
      <div className="relative mx-auto max-w-xl px-4 sm:px-6">
        <Reveal className="flex flex-col items-center">
          <div className="relative mb-5 grid size-24 place-items-center">
            <div aria-hidden="true" className="animate-morph absolute inset-0 bg-sun" />
            <span className="relative text-5xl leading-none font-black">4</span>
            <LeafShape className="absolute -right-2 -bottom-1 w-8" />
          </div>
          <SectionHeading eyebrow={m.eyebrow} title={m.title} lead={m.lead} size="sm" squiggle="#6FC29D" />
        </Reveal>

        <ol className="mt-8 grid grid-cols-2 gap-3">
          {meals.map(({ key, Icon, tone }, i) => {
            const item = m.items[key];
            const c = tones[tone];
            return (
              <RevealItem
                key={key}
                delay={0.06 * i}
                className={`relative flex flex-col items-center bg-white px-3 pt-5 pb-4 text-center shadow-soft ${
                  i % 2 ? "rounded-[28px_28px_28px_80px]" : "rounded-[28px_28px_80px_28px]"
                }`}
              >
                <span className="absolute top-3 left-3 grid size-7 place-items-center rounded-full bg-forest text-[12px] font-black text-cream">
                  {i + 1}
                </span>
                <span className={`relative grid size-20 place-items-center rounded-full ${c.soft}`}>
                  <span className={`grid size-12 place-items-center blob-b ${c.bg}`}>
                    <Icon className="size-6" />
                  </span>
                </span>
                <h3 className="mt-3 text-[17px] leading-tight font-black">{item.title}</h3>
                <p className="mt-1 text-[13px] leading-snug font-semibold text-forest-soft">{item.text}</p>
              </RevealItem>
            );
          })}
        </ol>

        <Reveal>
          <p className="mt-6 flex items-start gap-2.5 rounded-[22px] bg-white/80 px-4 py-3.5 text-[14px] font-bold text-forest-soft">
            <Info className="mt-0.5 size-5 shrink-0 text-lilac-deep" />
            {m.note}
          </p>
        </Reveal>
      </div>
      <Wave color="var(--color-cream)" variant={0} flip />
    </div>
  );
}
