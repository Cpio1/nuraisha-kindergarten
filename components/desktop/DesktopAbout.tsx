"use client";

import { motion } from "framer-motion";
import { Languages, Users } from "lucide-react";
import { groupTones, pillars, tones } from "../shared/content";
import { useLang } from "../shared/LanguageProvider";
import { Reveal, RevealItem } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { C, Cloud, Drop, Flower, Float, Leaf, Shape, Sparkle, Star } from "../shared/Shapes";
import { Wave } from "../shared/Wave";

const pillarShapes = ["blob2", "blob4", "blob3"] as const;

export function DesktopAbout() {
  const { t } = useLang();
  const a = t.about;

  return (
    <div className="relative overflow-hidden bg-mint-soft pt-[clamp(48px,7vw,88px)] pb-[clamp(96px,10vw,150px)]">
      <Float className="absolute top-12 right-[4%] hidden w-24 xl:block" duration={11} rotate={0}>
        <Cloud />
      </Float>
      <Float className="absolute bottom-[18%] left-[2.5%] hidden w-9 xl:block" delay={0.7}>
        <Flower petals={6} fill={C.peach} />
      </Float>

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-12 items-center gap-10 px-8 xl:gap-16 xl:px-12">
        {/* ——— о саде ——— */}
        <div className="col-span-5 min-w-0">
          <Reveal>
            <SectionHeading eyebrow={a.eyebrow} title={a.title} align="left" accent={C.peachDeep} petal={C.peach} />
            <p className="lead mt-5">{a.lead}</p>
          </Reveal>

          <ul className="mt-7 space-y-3">
            {pillars.map(({ Icon, tone }, i) => {
              const p = a.pillars[i];
              return (
                <RevealItem
                  key={p.title}
                  delay={0.08 * i}
                  x={-20}
                  y={0}
                  className="group flex items-center gap-4 rounded-[22px] bg-white/85 py-3 pr-5 pl-3 ring-1 ring-white transition-[box-shadow,translate] duration-300 hover:translate-x-1 hover:shadow-soft"
                >
                  <span className="relative grid size-14 shrink-0 place-items-center">
                    <Shape name={pillarShapes[i]} fill={tones[tone].hex} outline className="absolute inset-0 size-full transition-transform duration-500 group-hover:rotate-12" />
                    <Icon className="relative size-6 text-forest" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[17px] font-bold">{p.title}</span>
                    <span className="block text-[14.5px] leading-snug text-forest-soft">{p.text}</span>
                  </span>
                </RevealItem>
              );
            })}
          </ul>

          <Reveal delay={0.2}>
            <p className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-forest py-2.5 pr-5 pl-3 text-[14.5px] font-medium text-cream">
              <span className="grid size-7 place-items-center rounded-full bg-mint/20">
                <Languages className="size-4 text-mint" />
              </span>
              {a.languageNote}
            </p>
          </Reveal>
        </div>

        {/* ——— группы ——— */}
        <div className="relative col-span-7 min-w-0">
          <Reveal className="mb-8 flex items-end justify-between gap-6">
            <div>
              <h3 className="flex items-center gap-3 font-display text-[clamp(1.5rem,1rem+1vw,2rem)] font-extrabold">
                <span className="relative grid size-11 place-items-center">
                  <Shape name="flower8" fill={C.lilac} outline={false} className="absolute inset-0 size-full" />
                  <Users className="relative size-5" />
                </span>
                {a.groupsTitle}
              </h3>
              <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-forest-soft">{a.groupsLead}</p>
            </div>
            <Float className="mb-2 w-12 shrink-0" duration={6}>
              <Star fill={C.sun} />
            </Float>
          </Reveal>

          <div className="grid grid-cols-2 gap-6 xl:gap-8">
            {a.groups.map((g, i) => {
              const tone = tones[groupTones[i]];
              return (
                <Reveal key={g.age} delay={0.12 * i} className={i === 1 ? "mt-10" : ""}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="relative flex h-full flex-col text-center drop-shadow-[0_22px_30px_rgba(40,76,67,0.16)]"
                  >
                    {/* купол арки: ровный полукруг при любой ширине */}
                    <div className={`relative aspect-[2/1] rounded-t-full ${tone.bg}`}>
                      <div aria-hidden="true" className="absolute inset-x-[10%] top-[12%] bottom-0 rounded-t-full border-2 border-b-0 border-dashed border-white/90" />
                      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center">
                        <span className="rounded-full bg-white/85 px-3 py-1 text-[12px] font-semibold tracking-[0.08em] uppercase">
                          {a.groupLabels[i]}
                        </span>
                      </div>
                    </div>
                    <div className={`relative -mt-px flex flex-1 flex-col items-center rounded-b-[36px] px-6 pt-2 pb-8 ${tone.bg}`}>
                      <p className="flex items-baseline gap-1.5">
                        <span className="font-display text-[clamp(3rem,2rem+2.4vw,4.4rem)] leading-none font-extrabold tracking-tight">{g.age}</span>
                        <span className="font-display text-xl font-bold">{a.ageUnit}</span>
                      </p>
                      <p className="mt-4 text-[15px] leading-relaxed text-forest/80">{g.text}</p>
                      <div aria-hidden="true" className="mt-auto flex items-center gap-2 pt-5">
                        {i === 0 ? (
                          <>
                            <Leaf className="w-7" fill={tone.deepHex} />
                            <Sparkle className="w-4" fill="#fff" />
                            <Drop className="w-6" fill="#fff" />
                          </>
                        ) : (
                          <>
                            <Flower petals={5} fill="#fff" center={C.sun} outline={false} className="w-8" />
                            <Sparkle className="w-4" fill={tone.deepHex} />
                            <Star className="w-7" fill={C.sun} outline={false} />
                          </>
                        )}
                      </div>
                    </div>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      <Wave color="var(--color-cream)" variant={1} flip />
    </div>
  );
}
