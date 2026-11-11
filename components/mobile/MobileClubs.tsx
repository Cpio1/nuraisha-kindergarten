"use client";

import { ClubArt } from "../shared/ClubArt";
import { clubs, tones } from "../shared/content";
import { useLang } from "../shared/LanguageProvider";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { C, Confetti, Shape } from "../shared/Shapes";
import { Wave } from "../shared/Wave";

const iconShapes = ["flower6", "star4", "pebble"] as const;

export function MobileClubs() {
  const { t } = useLang();

  return (
    <div className="relative overflow-hidden bg-cream pt-10 pb-20">
      <div className="relative mx-auto max-w-xl px-4 sm:max-w-2xl sm:px-6">
        <Reveal className="relative">
          <SectionHeading eyebrow={t.clubs.eyebrow} title={t.clubs.title} lead={t.clubs.lead} />
          <Confetti className="absolute top-0 right-0 w-16 opacity-80" />
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {clubs.map(({ key, Icon, tone }, i) => {
            const item = t.clubs.items[key];
            const c = tones[tone];
            return (
              <Reveal key={key} delay={0.05 * i} className={i === 2 ? "sm:col-span-2" : ""}>
                <article className="relative h-full overflow-hidden rounded-[32px] bg-white shadow-soft ring-1 ring-forest/5">
                  <div className={`relative flex h-[132px] items-center justify-center rounded-b-[40%_26px] px-6 ${c.bg}`}>
                    <div className="dots-bg absolute inset-0 opacity-30" aria-hidden="true" />
                    <ClubArt club={key} className="relative h-full max-h-[112px] w-auto py-3" />
                  </div>
                  <div className="px-5 pb-5">
                    <div className="flex items-end gap-3">
                      <span className="relative -mt-7 grid size-14 shrink-0 place-items-center">
                        <Shape name={iconShapes[i]} fill={c.deepHex} className="absolute inset-0 size-full" />
                        <Icon className="relative size-6 text-white" />
                      </span>
                      <div className="min-w-0 pt-3">
                        <h3 className="font-display text-[1.3rem] leading-tight font-extrabold">{item.title}</h3>
                      </div>
                    </div>
                    <p className={`mt-2 font-display text-[14.5px] font-bold ${c.text}`}>{item.subtitle}</p>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-forest-soft">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
      <Wave color="var(--color-lilac-soft)" variant={2} />
    </div>
  );
}
