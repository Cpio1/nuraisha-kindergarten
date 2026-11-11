"use client";

import { Languages, Users } from "lucide-react";
import { groupTones, pillars, tones } from "../shared/content";
import { useLang } from "../shared/LanguageProvider";
import { Reveal, RevealItem } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { C, Cloud, Flower, Float, Leaf, Shape, Star } from "../shared/Shapes";
import { Wave } from "../shared/Wave";

const pillarShapes = ["blob2", "blob4", "blob3"] as const;

export function MobileAbout() {
  const { t } = useLang();
  const a = t.about;

  return (
    <div className="relative overflow-hidden bg-mint-soft pt-10 pb-20">
      <Float className="absolute top-6 right-4 w-14" duration={10} rotate={0}>
        <Cloud />
      </Float>

      <div className="relative mx-auto max-w-xl px-4 sm:max-w-2xl sm:px-6">
        <Reveal>
          <SectionHeading eyebrow={a.eyebrow} title={a.title} align="left" accent={C.peachDeep} petal={C.peach} />
          <p className="lead mt-4">{a.lead}</p>
        </Reveal>

        <ul className="mt-6 grid gap-2.5 sm:grid-cols-3 sm:gap-3">
          {pillars.map(({ Icon, tone }, i) => {
            const p = a.pillars[i];
            return (
              <RevealItem
                key={p.title}
                delay={0.06 * i}
                y={14}
                className="flex items-center gap-3.5 rounded-[22px] bg-white/90 p-3 pr-4 sm:flex-col sm:items-start sm:gap-2.5 sm:p-4"
              >
                <span className="relative grid size-12 shrink-0 place-items-center">
                  <Shape name={pillarShapes[i]} fill={tones[tone].hex} className="absolute inset-0 size-full" />
                  <Icon className="relative size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[16px] font-bold">{p.title}</span>
                  <span className="block text-[14px] leading-snug text-forest-soft">{p.text}</span>
                </span>
              </RevealItem>
            );
          })}
        </ul>

        <Reveal>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-forest py-2 pr-4 pl-2 text-[13.5px] font-medium text-cream">
            <span className="grid size-7 place-items-center rounded-full bg-mint/20">
              <Languages className="size-4 text-mint" />
            </span>
            {a.languageNote}
          </p>
        </Reveal>

        {/* группы */}
        <div className="mt-12">
          <Reveal className="flex items-start justify-between gap-4">
            <div>
              <h3 className="flex items-center gap-2.5 font-display text-[1.45rem] font-extrabold">
                <span className="relative grid size-10 place-items-center">
                  <Shape name="flower8" fill={C.lilac} outline={false} className="absolute inset-0 size-full" />
                  <Users className="relative size-[18px]" />
                </span>
                {a.groupsTitle}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-forest-soft">{a.groupsLead}</p>
            </div>
            <Float className="mt-1 w-8 shrink-0" delay={0.4}>
              <Star />
            </Float>
          </Reveal>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {a.groups.map((g, i) => {
              const tone = tones[groupTones[i]];
              return (
                <Reveal key={g.age} delay={0.08 * i} y={18}>
                  <article className={`relative flex h-full gap-4 overflow-hidden rounded-[30px] p-4 pr-5 ${tone.bg} ${i ? "rounded-tr-[64px]" : "rounded-tl-[64px]"}`}>
                    {/* арка с возрастом */}
                    <div className="relative grid h-[104px] w-[86px] shrink-0 place-items-center">
                      <Shape name="arch" fill="#fff" stretch className="absolute inset-0 size-full" />
                      <span className="relative mt-3 flex flex-col items-center leading-none">
                        <span className="font-display text-[26px] font-extrabold tracking-tight">{g.age}</span>
                        <span className="mt-1 font-display text-[13px] font-bold">{a.ageUnit}</span>
                      </span>
                    </div>
                    <div className="min-w-0 py-1">
                      <span className="text-[11.5px] font-semibold tracking-[0.08em] text-forest/70 uppercase">{a.groupLabels[i]}</span>
                      <p className="mt-1 text-[14px] leading-snug text-forest/85">{g.text}</p>
                    </div>
                    {i === 0 ? (
                      <Leaf className="absolute right-3 bottom-3 w-7 opacity-60" fill={tone.deepHex} />
                    ) : (
                      <Flower petals={5} fill="#fff" outline={false} className="absolute right-3 bottom-3 w-8 opacity-80" />
                    )}
                  </article>
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
