"use client";

import { Languages, Users } from "lucide-react";
import { CloudShape, Float, FlowerShape, LeafShape, StarShape } from "../shared/Decor";
import { groupTones, pillars, tones } from "../shared/content";
import { useLang } from "../shared/LanguageProvider";
import { Reveal, RevealItem } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { Wave } from "../shared/Wave";

const ageShapes = ["blob-a", "blob-b"];
const cardShapes = ["rounded-[34px_34px_34px_10px]", "rounded-[10px_34px_34px_34px]"];

export function MobileAbout() {
  const { t } = useLang();
  const a = t.about;

  return (
    <div className="relative overflow-hidden bg-mint-soft pt-10 pb-24">
      <Float className="absolute top-6 right-4 w-16" duration={10} rotate={0}>
        <CloudShape />
      </Float>
      <div className="relative mx-auto max-w-xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow={a.eyebrow} title={a.title} align="left" size="sm" squiggle="#F39A62" />
          <p className="mt-4 text-[16px] leading-relaxed font-semibold text-forest-soft">{a.lead}</p>
        </Reveal>

        <ul className="mt-6 space-y-2.5">
          {pillars.map(({ Icon, tone }, i) => {
            const p = a.pillars[i];
            return (
              <RevealItem
                key={p.title}
                delay={0.06 * i}
                y={16}
                className="flex items-center gap-3.5 rounded-[22px] bg-white/85 p-3 pr-4 shadow-soft"
              >
                <span className={`grid size-12 shrink-0 place-items-center blob-a ${tones[tone].bg}`}>
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[16px] font-black">{p.title}</span>
                  <span className="block text-[14px] leading-snug font-semibold text-forest-soft">{p.text}</span>
                </span>
              </RevealItem>
            );
          })}
        </ul>

        <Reveal>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-forest px-4 py-2.5 text-[14px] font-extrabold text-cream">
            <Languages className="size-4 text-mint" />
            {a.languageNote}
          </p>
        </Reveal>

        {/* группы */}
        <div className="relative mt-12">
          <Float className="absolute -top-4 right-2 w-8" delay={0.5}>
            <StarShape />
          </Float>
          <Reveal>
            <h3 className="flex items-center gap-3 text-[1.6rem] font-black">
              <span className="grid size-11 place-items-center rounded-2xl bg-lilac">
                <Users className="size-5" />
              </span>
              {a.groupsTitle}
            </h3>
            <p className="mt-2 text-[15px] font-semibold text-forest-soft">{a.groupsLead}</p>
          </Reveal>

          <div className="mt-5 space-y-4">
            {a.groups.map((g, i) => {
              const tone = tones[groupTones[i]];
              return (
                <Reveal key={g.age} delay={0.08 * i} x={i === 0 ? -20 : 20} y={0}>
                  <article className={`relative flex gap-4 overflow-hidden p-4 pr-5 shadow-soft ${tone.bg} ${cardShapes[i]}`}>
                    <div className={`grid size-[88px] shrink-0 place-items-center bg-white/75 ${ageShapes[i]}`}>
                      <span className="flex flex-col items-center leading-none">
                        <span className="text-[28px] font-black tracking-tight">{g.age}</span>
                        <span className="mt-0.5 text-sm font-extrabold">{a.ageUnit}</span>
                      </span>
                    </div>
                    <div className="min-w-0 py-1">
                      <span className="text-[12px] font-extrabold tracking-wide text-forest/70 uppercase">{a.groupLabels[i]}</span>
                      <p className="mt-1 text-[14.5px] leading-snug font-semibold text-forest/85">{g.text}</p>
                    </div>
                    {i === 0 ? (
                      <LeafShape className="absolute -right-2 -bottom-2 w-10 opacity-60" color={tone.deepHex} />
                    ) : (
                      <FlowerShape className="absolute -right-3 -bottom-3 w-12 opacity-70" color="#FFF9EF" />
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
