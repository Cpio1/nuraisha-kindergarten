"use client";

import { ClubDecor } from "../shared/ClubDecor";
import { clubs, tones } from "../shared/content";
import { Float, SparkleShape } from "../shared/Decor";
import { useLang } from "../shared/LanguageProvider";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { Wave } from "../shared/Wave";

const shapes = ["rounded-[36px_36px_36px_10px]", "rounded-[36px_10px_36px_36px]", "rounded-[10px_36px_36px_36px]"];

export function MobileClubs() {
  const { t } = useLang();

  return (
    <div className="relative overflow-hidden bg-cream pt-10 pb-24">
      <Float className="absolute top-10 left-5 w-5" duration={4}>
        <SparkleShape />
      </Float>
      <div className="relative mx-auto max-w-xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow={t.clubs.eyebrow} title={t.clubs.title} lead={t.clubs.lead} size="sm" />
        </Reveal>

        <div className="mt-8 space-y-4">
          {clubs.map(({ key, Icon, tone }, i) => {
            const item = t.clubs.items[key];
            const c = tones[tone];
            return (
              <Reveal key={key} delay={0.05 * i}>
                <article className={`relative overflow-hidden p-5 shadow-soft ring-1 ring-forest/5 ${c.soft} ${shapes[i]}`}>
                  <div aria-hidden="true" className={`absolute -top-12 -right-12 size-36 blob-b opacity-60 ${c.bg}`} />
                  <ClubDecor club={key} className="absolute top-4 right-3 h-16 w-24 opacity-90" />
                  <div className="relative flex items-center gap-4 pr-20">
                    <span className={`grid size-16 shrink-0 place-items-center blob-a shadow-soft ${c.bg}`}>
                      <Icon className="size-7" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[1.35rem] leading-tight font-black">{item.title}</h3>
                      <p className="mt-1 text-[14px] leading-snug font-extrabold text-forest-soft">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="relative mt-4 text-[15px] leading-relaxed font-semibold text-forest-soft">{item.text}</p>
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
