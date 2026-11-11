"use client";

import { motion } from "framer-motion";
import { Languages, Smile, Users } from "lucide-react";
import { BlobShape, CloudShape, Float, FlowerShape, LeafShape, SparkleShape, StarShape } from "../shared/Decor";
import { groupTones, pillars, tones } from "../shared/content";
import { useLang } from "../shared/LanguageProvider";
import { Reveal, RevealItem } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { Wave } from "../shared/Wave";

const groupShapes = ["rounded-[56px_56px_56px_16px]", "rounded-[16px_56px_56px_56px]"];

export function DesktopAbout() {
  const { t } = useLang();
  const a = t.about;

  return (
    <div className="relative overflow-hidden bg-mint-soft pt-16 pb-32 xl:pt-20 xl:pb-40">
      <Float className="absolute top-16 right-[6%] w-24 opacity-90" duration={10} rotate={0}>
        <CloudShape />
      </Float>
      <Float className="absolute bottom-40 left-[3%] w-12" delay={0.8}>
        <FlowerShape />
      </Float>
      <Float className="absolute top-[38%] left-[45%] w-6" delay={1.4} duration={4}>
        <SparkleShape color="#F39A62" />
      </Float>

      <div className="relative mx-auto grid max-w-[1240px] grid-cols-12 gap-10 px-6 xl:gap-14 xl:px-10">
        {/* о саде */}
        <div className="col-span-5">
          <Reveal>
            <SectionHeading eyebrow={a.eyebrow} title={a.title} align="left" squiggle="#F39A62" />
            <p className="mt-6 text-lg leading-relaxed font-semibold text-forest-soft">{a.lead}</p>
          </Reveal>

          <ul className="mt-8 space-y-4">
            {pillars.map(({ Icon, tone }, i) => {
              const p = a.pillars[i];
              return (
                <RevealItem
                  key={p.title}
                  delay={0.08 * i}
                  x={-24}
                  y={0}
                    className={`flex items-center gap-4 bg-white/80 p-4 pr-6 shadow-soft ring-1 ring-white ${
                      i === 1 ? "ml-8 rounded-[28px_10px_28px_28px]" : "rounded-[10px_28px_28px_28px]"
                    }`}
                  >
                    <span className={`grid size-14 shrink-0 place-items-center blob-a ${tones[tone].bg}`}>
                      <Icon className="size-6 text-forest" />
                    </span>
                    <span>
                      <span className="block text-lg font-black">{p.title}</span>
                      <span className="block text-[15px] leading-snug font-semibold text-forest-soft">{p.text}</span>
                    </span>
                </RevealItem>
              );
            })}
          </ul>

          <Reveal delay={0.2}>
            <p className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-forest px-5 py-3 text-[15px] font-extrabold text-cream">
              <Languages className="size-5 text-mint" />
              {a.languageNote}
            </p>
          </Reveal>
        </div>

        {/* группы */}
        <div className="relative col-span-7">
          <div aria-hidden="true" className="absolute inset-x-6 top-14 bottom-0 rounded-[64px] bg-white/55 blob-b" />
          <div className="relative px-4 pt-8 xl:px-8">
            <Reveal>
              <h3 className="flex items-center gap-3 text-[clamp(1.6rem,2.3vw,2.2rem)] font-black">
                <span className="grid size-12 place-items-center rounded-2xl bg-lilac">
                  <Users className="size-6" />
                </span>
                {a.groupsTitle}
              </h3>
              <p className="mt-3 max-w-md text-[17px] font-semibold text-forest-soft">{a.groupsLead}</p>
            </Reveal>

            <div className="mt-8 grid grid-cols-2 gap-5 xl:gap-7">
              {a.groups.map((g, i) => {
                const tone = tones[groupTones[i]];
                return (
                  <Reveal key={g.age} delay={0.12 * i} className={i === 1 ? "mt-14" : ""}>
                    <motion.article
                      whileHover={{ y: -6, rotate: i === 0 ? -1 : 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className={`relative overflow-hidden p-7 pb-16 shadow-lift xl:p-8 xl:pb-16 ${tone.bg} ${groupShapes[i]}`}
                    >
                      <BlobShape
                        variant={i === 0 ? 0 : 2}
                        color="rgba(255,255,255,0.45)"
                        className="absolute -top-10 -right-12 w-44"
                      />
                      <span className="relative inline-flex items-center gap-2 rounded-full bg-white/75 px-3.5 py-1.5 text-[13px] font-extrabold tracking-wide uppercase">
                        <Smile className="size-4" />
                        {a.groupLabels[i]}
                      </span>
                      <p className="relative mt-5 flex items-baseline gap-2">
                        <span className="text-[clamp(3.2rem,5vw,4.6rem)] leading-none font-black tracking-tight">
                          {g.age}
                        </span>
                        <span className="text-2xl font-extrabold">{a.ageUnit}</span>
                      </p>
                      <p className="relative mt-4 text-[16px] leading-relaxed font-semibold text-forest/80">{g.text}</p>
                      {i === 0 ? (
                        <LeafShape className="absolute right-6 bottom-5 w-9 opacity-80" color={tone.deepHex} />
                      ) : (
                        <StarShape className="absolute right-6 bottom-5 w-10" color="#FFF9EF" />
                      )}
                    </motion.article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Wave color="var(--color-cream)" variant={1} flip />
    </div>
  );
}
