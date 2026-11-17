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
  "rounded-[44px_44px_60%_40%/44px_44px_30px_30px]",
  "rounded-[44px_44px_40%_60%/44px_44px_30px_30px]",
];
const iconShapes = ["flower6", "star4"] as const;

export function DesktopClubs() {
  const { t } = useLang();

  return (
    <div className="relative isolate bg-cream pt-[clamp(28px,3.6vw,56px)] pb-[clamp(76px,7.5vw,112px)]">
      {/* декоративный слой: фигурки ограничены им и лежат под контентом */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <Float className="absolute top-20 left-[4%] hidden w-16 xl:block" duration={9}>
          <HalfCircle fill={C.lilac} />
        </Float>
        <Float className="absolute top-28 right-[5%] hidden w-24 xl:block" delay={0.6} rotate={0}>
          <Confetti />
        </Float>
      </div>
      <div className="relative mx-auto max-w-[1200px] px-8 xl:px-12">
        <Reveal>
          <SectionHeading eyebrow={t.clubs.eyebrow} title={t.clubs.title} lead={t.clubs.lead} />
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-[920px] grid-cols-2 items-start gap-6 xl:gap-10">
          {clubs.map(({ key, Icon, tone }, i) => {
            const item = t.clubs.items[key];
            const c = tones[tone];
            return (
              <Reveal key={key} delay={0.1 * i} className={i === 1 ? "mt-10" : ""}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[38px] bg-white shadow-soft ring-1 ring-forest/6 transition-shadow duration-300 hover:shadow-lift"
                >
                  {/* иллюстрированная шапка */}
                  <div className={`relative px-8 pt-6 pb-9 ${c.bg} ${heads[i]}`}>
                    <div className="dots-bg absolute inset-0 opacity-30" aria-hidden="true" />
                    <ClubArt club={key} className="relative mx-auto h-auto w-full max-w-[300px] transition-transform duration-500 group-hover:scale-[1.04] group-hover:-rotate-1" />
                  </div>

                  <div className="relative flex flex-1 flex-col px-8 pt-0 pb-8">
                    <span className="relative -mt-7 grid size-14 place-items-center self-start">
                      <Shape name={iconShapes[i]} fill={c.deepHex} outline className="absolute inset-0 size-full transition-transform duration-700 group-hover:rotate-45" />
                      <Icon className="relative size-6 text-white" />
                    </span>
                    <h3 className="mt-3 font-display text-[clamp(1.35rem,1rem+0.7vw,1.75rem)] leading-tight font-extrabold">{item.title}</h3>
                    <p className={`mt-1 font-display text-[14.5px] font-bold ${c.text}`}>{item.subtitle}</p>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-forest-soft">{item.text}</p>
                    <ul className="mt-5 flex flex-wrap gap-2 pr-8">
                      {item.tags.map((tag) => (
                        <li key={tag} className={`rounded-full px-3.5 py-1.5 font-display text-[13px] font-bold ${c.soft} ${c.text}`}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <Sparkle className="absolute right-8 bottom-9 w-4 opacity-60" fill={c.deepHex} />
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
