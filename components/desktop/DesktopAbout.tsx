"use client";

import { motion } from "framer-motion";
import { Languages, Users } from "lucide-react";
import { groupTones, pillars, tones } from "../shared/content";
import { useLang } from "../shared/LanguageProvider";
import { Reveal, RevealItem } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { C, Cloud, Drop, Flower, Float, Leaf, Shape, Sparkle, Star } from "../shared/Shapes";
import { Wave } from "../shared/Wave";
import { FramedPhoto } from "../shared/SitePhoto";
import type { GalleryImage } from "@/lib/media";

const pillarShapes = ["blob2", "blob4", "blob3"] as const;

export function DesktopAbout({ photo }: { photo: GalleryImage | null }) {
  const { t } = useLang();
  const a = t.about;

  return (
    <div className="relative isolate bg-mint-soft pt-[clamp(28px,3.6vw,56px)] pb-[clamp(76px,7.5vw,112px)]">
      {/* декоративный слой: фигурки ограничены им и лежат под контентом */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <Float className="absolute top-12 right-[4%] hidden w-24 xl:block" duration={11} rotate={0}>
          <Cloud />
        </Float>
        <Float className="absolute bottom-[18%] left-[2.5%] hidden w-9 xl:block" delay={0.7}>
          <Flower petals={6} fill={C.peach} />
        </Float>
      </div>
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-12 items-center gap-10 px-8 xl:gap-16 xl:px-12">
        {/* ——— о саде ——— */}
        <div className="col-span-5 min-w-0">
          <Reveal>
            <SectionHeading eyebrow={a.eyebrow} title={a.title} align="left" accent={C.peachDeep} petal={C.peach} />
            <p className="lead mt-5">{a.lead}</p>
          </Reveal>

          <ul className="mt-6 space-y-2.5">
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
                  <span className="relative grid size-12 shrink-0 place-items-center">
                    <Shape name={pillarShapes[i]} fill={tones[tone].hex} outline className="absolute inset-0 size-full transition-transform duration-500 group-hover:rotate-12" />
                    <Icon className="relative size-5 text-forest" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[16px] font-bold">{p.title}</span>
                    <span className="block text-[14px] leading-snug text-forest-soft">{p.text}</span>
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

          {/* фото main-page2 — только если файл действительно есть */}
          {photo && (
            <Reveal delay={0.25} className="mt-10 flex justify-center">
              <div className="relative" style={{ width: `min(100% - 48px, 380px * ${photo.width / photo.height})` }}>
                <div aria-hidden="true" className="absolute -top-[10%] -left-[12%] aspect-square w-[46%] rounded-full bg-lilac/45 blur-2xl" />
                <FramedPhoto
                  image={photo}
                  alt={t.hero.photoAlt2}
                  sizes="(min-width: 1280px) 440px, 36vw"
                  back={C.peach}
                  radius="rounded-[56px_56px_56px_18px]"
                  tone="mint"
                  className="w-full"
                />
                <Float className="absolute -top-[7%] -right-[8%] w-[13%]" delay={0.5}>
                  <Flower petals={6} fill={C.lilac} />
                </Float>
                <Float className="absolute -bottom-[6%] -left-[7%] w-[9%]" delay={1.1} duration={5}>
                  <Sparkle fill={C.peachDeep} />
                </Float>
              </div>
            </Reveal>
          )}
        </div>

        {/* ——— группы ——— */}
        <div className="relative col-span-7 min-w-0">
          <Reveal className="mb-6 flex items-end justify-between gap-6">
            <div>
              <h3 className="flex items-center gap-3 font-display text-[clamp(1.35rem,0.95rem+0.8vw,1.75rem)] font-extrabold">
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

          <div className="mx-auto grid max-w-[600px] grid-cols-2 gap-5 xl:gap-7">
            {a.groups.map((g, i) => {
              const tone = tones[groupTones[i]];
              return (
                <Reveal key={g.age} delay={0.12 * i} className={i === 1 ? "mt-8" : ""}>
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
                    <div className={`relative -mt-px flex flex-1 flex-col items-center rounded-b-[32px] px-5 pt-2 pb-6 ${tone.bg}`}>
                      <p className="flex items-baseline gap-1.5">
                        <span className="font-display text-[clamp(2.5rem,1.7rem+1.9vw,3.5rem)] leading-none font-extrabold tracking-tight">{g.age}</span>
                        <span className="font-display text-xl font-bold">{a.ageUnit}</span>
                      </p>
                      <p className="mt-3 text-[14.5px] leading-relaxed text-forest/80">{g.text}</p>
                      <div aria-hidden="true" className="mt-auto flex items-center gap-2 pt-4">
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
