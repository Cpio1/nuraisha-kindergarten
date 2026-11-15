"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { meals, tones } from "../shared/content";
import { useLang } from "../shared/LanguageProvider";
import { Reveal, RevealItem } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { C, Cloud, Float, Leaf, Shape, Sparkle, Sun } from "../shared/Shapes";
import { Wave } from "../shared/Wave";

/** Тарелки выстроены по дуге «дня»: утро → обед → полдник → вечер. */
const lift = ["mt-[72px]", "mt-0", "mt-0", "mt-[72px]"];

export function DesktopMeals() {
  const { t } = useLang();
  const m = t.meals;

  return (
    <div className="relative isolate bg-lilac-soft pt-[clamp(28px,3.6vw,56px)] pb-[clamp(76px,7.5vw,112px)]">
      {/* декоративный слой: фигурки ограничены им и лежат под контентом */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <Float className="absolute top-16 left-[5%] hidden w-24 xl:block" duration={11} rotate={0}>
          <Cloud />
        </Float>
        <Float className="absolute right-[4%] bottom-[22%] hidden w-10 xl:block" delay={0.5}>
          <Leaf />
        </Float>
      </div>
      <div className="relative mx-auto max-w-[1120px] px-8 xl:px-12">
        <Reveal className="relative">
          <SectionHeading eyebrow={m.eyebrow} title={m.title} lead={m.lead} accent={C.mintDeep} petal={C.mint} />
        </Reveal>

        <div className="relative mt-9">
          {/* дуга дня */}
          <svg aria-hidden="true" viewBox="0 0 1000 260" preserveAspectRatio="none" className="absolute inset-x-[6%] top-[38px] h-[166px] w-[88%]" fill="none">
            <path d="M20 250C120 40 320 10 500 10s380 30 480 240" stroke={C.lilacDeep} strokeOpacity=".4" strokeWidth="3" strokeDasharray="2 12" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          </svg>
          <Float className="absolute top-[-6px] left-1/2 w-12 -translate-x-1/2" duration={10} rotate={10} y={4}>
            <Sun />
          </Float>

          <ol className="relative grid grid-cols-4 gap-5 xl:gap-8">
            {meals.map(({ key, Icon, tone }, i) => {
              const item = m.items[key];
              const c = tones[tone];
              return (
                <RevealItem key={key} delay={0.1 * i} className={`flex flex-col items-center text-center ${lift[i]}`}>
                  <motion.div
                    whileHover={{ rotate: -8, scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16 }}
                    className="relative grid aspect-square w-full max-w-[136px] place-items-center"
                  >
                    {/* тарелка */}
                    <Shape name="scallop" fill="#fff" outline className="absolute inset-0 size-full drop-shadow-[0_14px_22px_rgba(40,76,67,0.14)]" />
                    <span className={`absolute inset-[17%] rounded-full ${c.soft}`} />
                    <span className="relative grid size-[44%] place-items-center">
                      <Shape name={i % 2 ? "blob2" : "blob1"} fill={c.hex} outline={false} className="absolute inset-0 size-full" />
                      <Icon className="relative size-[48%] text-forest" />
                    </span>
                    <span className="absolute top-[2%] left-[2%] grid size-8 place-items-center rounded-full bg-forest font-display text-[14px] font-extrabold text-cream ring-4 ring-lilac-soft">
                      {i + 1}
                    </span>
                  </motion.div>
                  <h3 className="mt-3 font-display text-[clamp(1.05rem,0.9rem+0.35vw,1.25rem)] font-extrabold">{item.title}</h3>
                  <p className="mt-1 max-w-[200px] text-[14px] leading-snug text-forest-soft">{item.text}</p>
                </RevealItem>
              );
            })}
          </ol>
        </div>

        <Reveal delay={0.25}>
          <p className="mx-auto mt-9 flex w-fit max-w-full items-center gap-2.5 rounded-full bg-white px-5 py-3 text-[14.5px] text-forest-soft shadow-soft">
            <Info className="size-5 shrink-0 text-lilac-deep" />
            {m.note}
            <Sparkle className="w-3.5 shrink-0" fill={C.peachDeep} />
          </p>
        </Reveal>
      </div>

      <Wave color="var(--color-cream)" variant={0} flip />
    </div>
  );
}
