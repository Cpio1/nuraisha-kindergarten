"use client";

import { motion } from "framer-motion";
import { ClubDecor } from "../shared/ClubDecor";
import { clubs, tones } from "../shared/content";
import { CloudShape, Float, FlowerShape, StarShape } from "../shared/Decor";
import { useLang } from "../shared/LanguageProvider";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { Wave } from "../shared/Wave";

const shapes = [
  "rounded-[48px_48px_48px_14px]",
  "rounded-[60px_60px_30px_30px]",
  "rounded-[48px_48px_14px_48px]",
];

export function DesktopClubs() {
  const { t } = useLang();

  return (
    <div className="relative overflow-hidden bg-cream pt-14 pb-32 xl:pt-16 xl:pb-40">
      <Float className="absolute top-24 left-[6%] w-28 opacity-90" duration={12} rotate={0}>
        <CloudShape color="#F2ECFD" />
      </Float>
      <Float className="absolute top-36 right-[8%] w-10" delay={0.5}>
        <StarShape />
      </Float>
      <Float className="absolute right-[4%] bottom-36 w-12" delay={1.2}>
        <FlowerShape color="#B8E5D0" />
      </Float>

      <div className="relative mx-auto max-w-[1240px] px-6 xl:px-10">
        <Reveal>
          <SectionHeading eyebrow={t.clubs.eyebrow} title={t.clubs.title} lead={t.clubs.lead} />
        </Reveal>

        <div className="mt-16 grid grid-cols-3 gap-6 xl:gap-8">
          {clubs.map(({ key, Icon, tone }, i) => {
            const item = t.clubs.items[key];
            const c = tones[tone];
            return (
              <Reveal key={key} delay={0.1 * i} className={i === 1 ? "lg:-mt-6" : "lg:mt-6"}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className={`group relative flex h-full flex-col overflow-hidden p-8 pt-10 shadow-soft ring-1 ring-forest/5 transition-shadow hover:shadow-lift xl:p-9 xl:pt-11 ${c.soft} ${shapes[i]}`}
                >
                  <div aria-hidden="true" className={`absolute -top-16 -right-16 size-48 blob-b opacity-60 ${c.bg}`} />
                  <ClubDecor club={key} className="absolute top-6 right-5 h-24 w-32" />

                  <span
                    className={`relative grid size-20 place-items-center blob-a shadow-soft transition-transform duration-500 group-hover:rotate-[-8deg] ${c.bg}`}
                  >
                    <Icon className="size-9 text-forest" />
                  </span>
                  <h3 className="relative mt-7 text-[clamp(1.5rem,2vw,1.9rem)] leading-tight font-black">{item.title}</h3>
                  <p className={`relative mt-3 w-fit rounded-full px-4 py-1.5 text-[15px] font-extrabold ${c.bg}`}>
                    {item.subtitle}
                  </p>
                  <p className="relative mt-5 text-[16px] leading-relaxed font-semibold text-forest-soft">{item.text}</p>
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
