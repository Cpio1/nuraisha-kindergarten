"use client";

import { motion } from "framer-motion";
import { ArrowRight, Baby, Clock3, Languages, Sparkles, Users } from "lucide-react";
import type { GalleryImage } from "@/lib/gallery";
import { CloudShape, Float, FlowerShape, HeartShape, SparkleShape, StarShape, SunShape } from "../shared/Decor";
import { useLang } from "../shared/LanguageProvider";
import { SitePhoto } from "../shared/SitePhoto";
import { Wave } from "../shared/Wave";
import { useScrollTo } from "../shared/useScrollTo";

const ease = [0.22, 1, 0.36, 1] as const;

export function MobileHero({ main, second }: { main: GalleryImage | null; second: GalleryImage | null }) {
  const { t } = useLang();
  const scrollTo = useScrollTo();
  const h = t.hero;

  return (
    <div className="relative overflow-hidden bg-cream pt-[calc(var(--header-h)+20px)] pb-20 sm:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-24 size-72 rounded-full bg-lilac/45 blur-3xl" />
        <div className="absolute top-[38%] -right-28 size-80 rounded-full bg-mint/50 blur-3xl" />
      </div>
      <Float className="absolute top-[calc(var(--header-h)+10px)] right-3 w-16 opacity-90" duration={9} rotate={0} y={5}>
        <CloudShape />
      </Float>
      <Float className="absolute top-[calc(var(--header-h)+70px)] left-3 w-6" delay={0.6} duration={5}>
        <StarShape />
      </Float>

      <div className="relative mx-auto flex max-w-xl flex-col items-center px-4 text-center sm:px-6">
        <motion.span
          className="eyebrow text-[12px]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <Sparkles className="size-4 text-lilac-deep" />
          {h.kicker}
        </motion.span>

        <motion.h1
          className="mt-4 font-black tracking-tight text-forest"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.06, ease }}
        >
          <span className="relative inline-block text-[clamp(2.6rem,12.5vw,3.9rem)] leading-[0.95]">
            <svg
              aria-hidden="true"
              viewBox="0 0 300 40"
              preserveAspectRatio="none"
              className="absolute -bottom-1 left-[3%] h-[0.3em] w-[94%]"
            >
              <path d="M4 26C70 6 160 4 296 20" stroke="#FFD6B8" strokeWidth="18" strokeLinecap="round" fill="none" />
            </svg>
            <span className="relative">{h.titleName}</span>
          </span>
          <span className="mt-2 block text-[clamp(1.3rem,6.3vw,2rem)] leading-tight font-extrabold text-forest-soft">
            {h.titleRest}
          </span>
        </motion.h1>

        <motion.p
          className="mt-4 max-w-sm text-[17px] leading-snug font-bold"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.14, ease }}
        >
          {h.subtitle}
        </motion.p>

        {/* арка с фото */}
        <motion.div
          className="relative mt-9 w-[min(76%,330px)]"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
        >
          <div aria-hidden="true" className="animate-morph absolute -inset-3 translate-x-3 translate-y-3 bg-mint" />
          <SitePhoto
            src={main?.src}
            alt={h.photoAlt}
            sizes="(max-width: 640px) 80vw, 340px"
            priority
            tone="peach"
            className="relative aspect-[4/5] w-full rounded-[999px_999px_44px_44px] shadow-lift ring-[7px] ring-white"
          />
          <SitePhoto
            src={second?.src && second.src !== main?.src ? second.src : null}
            alt={h.photoAlt2}
            sizes="140px"
            tone="lilac"
            className="absolute -right-7 -bottom-6 size-[clamp(92px,28vw,128px)] rounded-full shadow-lift ring-[6px] ring-cream"
          />
          <Float className="absolute -top-5 -left-6 w-[clamp(64px,19vw,84px)]" duration={10} rotate={12} y={5}>
            <SunShape />
          </Float>
          <Float className="absolute top-[42%] -left-9" delay={0.5} y={6} rotate={-3}>
            <span className="flex items-center gap-1.5 rounded-full bg-white py-2 pr-3 pl-2 text-[13px] font-extrabold whitespace-nowrap shadow-lift">
              <span className="grid size-7 place-items-center rounded-full bg-lilac">
                <Languages className="size-3.5" />
              </span>
              {h.language}
            </span>
          </Float>
          <Float className="absolute top-[14%] -right-5 w-8" delay={1.2}>
            <FlowerShape color="#DCCDF7" />
          </Float>
          <Float className="absolute -bottom-3 -left-3 w-7" delay={1.8}>
            <HeartShape />
          </Float>
        </motion.div>

        {/* факты */}
        <motion.ul
          className="mt-12 grid w-full grid-cols-2 gap-3 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
        >
          <li className="flex flex-col gap-1.5 rounded-[26px_26px_26px_8px] bg-mint p-4">
            <Baby className="size-6" />
            <span className="text-xl leading-tight font-black">{h.ageValue}</span>
            <span className="text-[13px] leading-tight font-bold text-forest-soft">{h.ageLabel}</span>
          </li>
          <li className="flex flex-col gap-1.5 rounded-[26px_8px_26px_26px] bg-peach p-4">
            <Users className="size-6" />
            <span className="text-xl leading-tight font-black">{h.groupsValue}</span>
            <span className="text-[13px] leading-tight font-bold text-forest-soft">{h.groupsLabel}</span>
          </li>
          <li className="col-span-2 flex items-center gap-4 rounded-[999px] bg-lilac py-3 pr-6 pl-3">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white/70">
              <Clock3 className="size-6" />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="text-xl leading-tight font-black">{h.hoursValue}</span>
              <span className="text-[13px] leading-tight font-bold text-forest-soft">{h.hoursLabel}</span>
            </span>
          </li>
        </motion.ul>

        <motion.div
          className="mt-6 flex w-full flex-col gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease }}
        >
          <a href="#about" onClick={(e) => scrollTo("about", e)} className="btn-primary h-14 w-full text-[17px]">
            {h.ctaPrimary}
            <ArrowRight className="size-5" />
          </a>
          <a href="#contact" onClick={(e) => scrollTo("contact", e)} className="btn-soft h-14 w-full text-[17px]">
            {h.ctaSecondary}
          </a>
        </motion.div>
      </div>

      <Float className="absolute bottom-24 left-4 w-5" delay={1} duration={4}>
        <SparkleShape />
      </Float>
      <Wave color="var(--color-mint-soft)" variant={0} />
    </div>
  );
}
