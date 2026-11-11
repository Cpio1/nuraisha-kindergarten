"use client";

import { motion } from "framer-motion";
import { ClubArt } from "../shared/ClubArt";
import { clubs, tones } from "../shared/content";
import { useLang } from "../shared/LanguageProvider";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { C, Confetti, Float, HalfCircle, Shape, Sparkle } from "../shared/Shapes";
import { Wave } from "../shared/Wave";

/** Каждый кружок — своя форма «шапки» и своя кнопка-фигура для иконки. */
const heads = [
  "rounded-[44px_44px_60%_40%/44px_44px_26px_26px]",
  "rounded-[44px_44px_40%_60%/44px_44px_26px_26px]",
  "rounded-[44px_44px_50%_50%/44px_44px_30px_30px]",
];
const iconShapes = ["flower6", "star4", "pebble"] as const;

export function DesktopClubs() {
  const { t } = useLang();

  return (
    <div className="relative overflow-hidden bg-cream pt-[clamp(40px,6vw,80px)] pb-[clamp(96px,10vw,150px)]">
      <Float className="absolute top-20 left-[4%] hidden w-16 xl:block" duration={9}>
        <HalfCircle fill={C.lilac} />
      </Float>
      <Float className="absolute top-28 right-[5%] hidden w-24 xl:block" delay={0.6} rotate={0}>
        <Confetti />
      </Float>

      <div className="relative mx-auto max-w-[1200px] px-8 xl:px-12">
        <Reveal>
          <SectionHeading eyebrow={t.clubs.eyebrow} title={t.clubs.title} lead={t.clubs.lead} />
        </Reveal>

        <div className="mt-14 grid grid-cols-3 items-start gap-6 xl:gap-8">
          {clubs.map(({ key, Icon, tone }, i) => {
            const item = t.clubs.items[key];
            const c = tones[tone];
            return (
              <Reveal key={key} delay={0.1 * i} className={i === 1 ? "mt-8" : ""}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[44px] bg-white shadow-soft ring-1 ring-forest/6 transition-shadow duration-300 hover:shadow-lift"
                >
                  {/* иллюстрированная шапка */}
                  <div className={`relative px-6 pt-6 pb-8 ${c.bg} ${heads[i]}`}>
                    <div className="dots-bg absolute inset-0 opacity-30" aria-hidden="true" />
                    <ClubArt club={key} className="relative mx-auto h-auto w-full max-w-[260px] transition-transform duration-500 group-hover:scale-[1.04] group-hover:-rotate-1" />
                  </div>

                  <div className="relative flex flex-1 flex-col px-7 pt-0 pb-8">
                    <span className="relative -mt-8 grid size-16 place-items-center self-start">
                      <Shape name={iconShapes[i]} fill={c.deepHex} outline className="absolute inset-0 size-full transition-transform duration-700 group-hover:rotate-45" />
                      <Icon className="relative size-7 text-white" />
                    </span>
                    <h3 className="mt-4 font-display text-[clamp(1.35rem,1rem+0.8vw,1.75rem)] leading-tight font-extrabold">{item.title}</h3>
                    <p className={`mt-1.5 font-display text-[15px] font-bold ${c.text}`}>{item.subtitle}</p>
                    <p className="mt-3 text-[15px] leading-relaxed text-forest-soft">{item.text}</p>
                    <Sparkle className="absolute right-7 bottom-7 w-4 opacity-60" fill={c.deepHex} />
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Wave color="var(--color-lilac-soft)" variant={2} />
    </div>
  );
}
