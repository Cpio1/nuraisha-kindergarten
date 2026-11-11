"use client";

import { motion } from "framer-motion";
import { ArrowRight, Baby, Clock3, Languages, Users } from "lucide-react";
import type { GalleryImage } from "@/lib/gallery";
import { useLang } from "../shared/LanguageProvider";
import { Quoted } from "../shared/Quoted";
import { C, Cloud, Flower, Float, Heart, Shape, Sparkle, Star, Sun } from "../shared/Shapes";
import { ShapedPhoto } from "../shared/SitePhoto";
import { Wave } from "../shared/Wave";
import { useScrollTo } from "../shared/useScrollTo";

const ease = [0.22, 1, 0.36, 1] as const;

export function MobileHero({ main, second }: { main: GalleryImage | null; second: GalleryImage | null }) {
  const { t } = useLang();
  const scrollTo = useScrollTo();
  const h = t.hero;

  const facts = [
    { Icon: Baby, value: h.ageValue, label: h.ageLabel, fill: C.mint, shape: "blob1" as const },
    { Icon: Clock3, value: h.hoursValue, label: h.hoursLabel, fill: C.lilac, shape: "blob3" as const },
    { Icon: Users, value: h.groupsValue, label: h.groupsLabel, fill: C.peach, shape: "blob2" as const },
  ];

  return (
    <div className="relative overflow-hidden bg-cream pt-[calc(var(--header-h)+18px)] pb-[72px] sm:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-28 size-72 rounded-full bg-lilac/45 blur-3xl" />
        <div className="absolute top-[42%] -right-32 size-80 rounded-full bg-mint/50 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-xl flex-col items-center px-4 text-center sm:px-6">
        <motion.span className="eyebrow text-[11.5px]" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}>
          <Flower petals={6} fill={C.lilacDeep} outline={false} className="-my-1 -ml-1 size-5" />
          {h.kicker}
        </motion.span>

        <motion.h1
          className="mt-4 text-forest"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.06, ease }}
        >
          <span className="relative inline-block text-[clamp(2.4rem,11.5vw,3.6rem)] leading-[1] font-extrabold tracking-[-0.025em]">
            <svg aria-hidden="true" viewBox="0 0 300 40" preserveAspectRatio="none" className="absolute bottom-[-0.05em] left-[3%] h-[0.28em] w-[94%]">
              <path d="M4 26C70 8 170 4 296 18" stroke={C.peach} strokeWidth="16" strokeLinecap="round" fill="none" />
            </svg>
            <span className="relative"><Quoted text={h.titleName} /></span>
          </span>
          <span className="mt-2 block text-[clamp(1.2rem,5.5vw,1.75rem)] leading-tight font-bold text-forest-soft">{h.titleRest}</span>
        </motion.h1>

        <motion.p
          className="mt-3 max-w-[22rem] text-[16px] leading-snug font-medium"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease }}
        >
          {h.subtitle}
        </motion.p>

        {/* композиция: арка-фото + круглый «цветок» + стикеры. Всё внутри контейнера. */}
        <motion.div
          className="relative mt-7 w-full max-w-[360px]"
          initial={{ opacity: 0, y: 26, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.18, ease }}
        >
          <div className="relative mx-auto aspect-[4/5] w-[74%]">
            <ShapedPhoto
              shape="arch"
              back={C.mint}
              src={main?.src}
              alt={h.photoAlt}
              sizes="(max-width: 640px) 75vw, 280px"
              priority
              tone="peach"
              className="absolute inset-0"
            />
          </div>

          <ShapedPhoto
            shape="scallop"
            back={C.lilac}
            src={second?.src && second.src !== main?.src ? second.src : null}
            alt={h.photoAlt2}
            sizes="130px"
            tone="lilac"
            className="absolute right-[3%] bottom-[-4%] aspect-square w-[31%]"
          />

          <Float className="absolute top-[-3%] left-[2%] w-[19%]" duration={9} rotate={10} y={4}>
            <Sun />
          </Float>
          <Float className="absolute top-[30%] right-[3%] w-[8%]" delay={1.1}>
            <Star />
          </Float>
          <Float className="absolute bottom-[26%] left-[1%] w-[9%]" delay={0.6}>
            <Flower petals={6} fill={C.peach} />
          </Float>
          <Float className="absolute top-[8%] right-[16%] w-[13%] opacity-90" duration={9} rotate={0} y={4}>
            <Cloud />
          </Float>
          <Sparkle className="absolute top-[52%] left-[10%] w-[5%]" fill={C.lilacDeep} />

          <Float className="absolute bottom-[3%] left-[4%]" delay={0.4} y={4} rotate={-2}>
            <span className="flex items-center gap-1.5 rounded-full bg-white py-1.5 pr-3 pl-1.5 text-[12.5px] font-semibold whitespace-nowrap shadow-lift ring-1 ring-forest/5">
              <span className="grid size-7 place-items-center rounded-full bg-lilac">
                <Languages className="size-3.5" />
              </span>
              {h.language}
            </span>
          </Float>
        </motion.div>

        {/* факты — компактная тройка */}
        <motion.ul
          className="mt-9 grid w-full grid-cols-3 gap-2"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
        >
          {facts.map(({ Icon, value, label, fill, shape }) => (
            <li key={label} className="flex min-w-0 flex-col items-center rounded-[22px] bg-white/90 px-1.5 pt-3 pb-3 shadow-soft ring-1 ring-forest/5">
              <span className="relative grid size-10 place-items-center">
                <Shape name={shape} fill={fill} outline={false} className="absolute inset-0 size-full" />
                <Icon className="relative size-[18px]" />
              </span>
              <span className="mt-2 font-display text-[clamp(13px,3.9vw,16px)] leading-tight font-bold whitespace-nowrap">{value}</span>
              <span className="mt-0.5 text-[11.5px] leading-tight text-forest-muted">{label}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          className="mt-5 flex w-full flex-col gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
        >
          <a href="#about" onClick={(e) => scrollTo("about", e)} className="btn-primary h-14 w-full text-base sm:flex-1">
            {h.ctaPrimary}
            <ArrowRight className="size-5" />
          </a>
          <a href="#contact" onClick={(e) => scrollTo("contact", e)} className="btn-soft h-14 w-full text-base sm:flex-1">
            <Heart className="w-4" />
            {h.ctaSecondary}
          </a>
        </motion.div>
      </div>

      <Wave color="var(--color-mint-soft)" variant={0} />
    </div>
  );
}
