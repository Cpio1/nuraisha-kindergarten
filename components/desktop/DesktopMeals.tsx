"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { meals, tones } from "../shared/content";
import { CloudShape, Float, LeafShape, SparkleShape } from "../shared/Decor";
import { useLang } from "../shared/LanguageProvider";
import { Reveal, RevealItem } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { Wave } from "../shared/Wave";

export function DesktopMeals() {
  const { t } = useLang();
  const m = t.meals;

  return (
    <div className="relative overflow-hidden bg-lilac-soft pt-14 pb-32 xl:pt-16 xl:pb-40">
      <Float className="absolute top-20 right-[10%] w-24" duration={11} rotate={0}>
        <CloudShape />
      </Float>
      <Float className="absolute bottom-40 left-[44%] w-6" delay={0.9} duration={4}>
        <SparkleShape />
      </Float>

      <div className="relative mx-auto grid max-w-[1240px] grid-cols-12 items-center gap-10 px-6 xl:px-10">
        <div className="col-span-4">
          <Reveal>
            <div className="relative mb-8 inline-grid size-36 place-items-center xl:size-40">
              <motion.div
                aria-hidden="true"
                className="absolute inset-0 bg-sun blob-a"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative flex flex-col items-center leading-none">
                <span className="text-7xl font-black">4</span>
                <span className="mt-1 max-w-[7rem] text-center text-sm font-extrabold">{m.countWord}</span>
              </span>
              <LeafShape className="absolute -right-3 -bottom-1 w-10" />
            </div>
            <SectionHeading eyebrow={m.eyebrow} title={m.title} align="left" squiggle="#6FC29D" />
            <p className="mt-5 text-lg leading-relaxed font-semibold text-forest-soft">{m.lead}</p>
          </Reveal>
        </div>

        <div className="relative col-span-8">
          <svg
            aria-hidden="true"
            viewBox="0 0 800 120"
            preserveAspectRatio="none"
            className="absolute top-[22%] left-0 h-28 w-full"
            fill="none"
          >
            <path
              d="M20 70C120 10 220 10 300 60s180 60 260 10 160-50 220 0"
              stroke="#9C80E0"
              strokeOpacity=".35"
              strokeWidth="4"
              strokeDasharray="2 14"
              strokeLinecap="round"
            />
          </svg>

          <ol className="relative grid grid-cols-4 gap-4 xl:gap-6">
            {meals.map(({ key, Icon, tone }, i) => {
              const item = m.items[key];
              const c = tones[tone];
              return (
                <RevealItem
                  key={key}
                  delay={0.1 * i}
                  className={`flex flex-col items-center text-center ${i % 2 ? "mt-16" : ""}`}
                >
                    <motion.div
                      whileHover={{ rotate: -10, scale: 1.04 }}
                      transition={{ type: "spring", stiffness: 260, damping: 16 }}
                      className="relative grid aspect-square w-full max-w-[170px] place-items-center rounded-full bg-white shadow-lift"
                    >
                      <span className={`absolute inset-[11%] rounded-full ${c.soft} ring-2 ring-white`} />
                      <span className={`relative grid size-[48%] place-items-center blob-b ${c.bg}`}>
                        <Icon className="size-[46%] text-forest" />
                      </span>
                      <span className="absolute -top-1 -left-1 grid size-10 place-items-center rounded-full bg-forest text-[15px] font-black text-cream ring-4 ring-lilac-soft">
                        {i + 1}
                      </span>
                    </motion.div>
                    <h3 className="mt-5 text-[clamp(1.15rem,1.5vw,1.4rem)] font-black">{item.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-snug font-semibold text-forest-soft">{item.text}</p>
                </RevealItem>
              );
            })}
          </ol>

          <Reveal delay={0.3}>
            <p className="mx-auto mt-12 flex w-fit items-center gap-2.5 rounded-full bg-white/80 px-5 py-3 text-[15px] font-bold text-forest-soft shadow-soft">
              <Info className="size-5 shrink-0 text-lilac-deep" />
              {m.note}
            </p>
          </Reveal>
        </div>
      </div>

      <Wave color="var(--color-cream)" variant={0} flip />
    </div>
  );
}
