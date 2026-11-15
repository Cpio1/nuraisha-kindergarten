"use client";

import { motion } from "framer-motion";
import { ArrowRight, Baby, Clock3, Languages, Soup, Users } from "lucide-react";
import type { GalleryImage } from "@/lib/media";
import { useLang } from "../shared/LanguageProvider";
import { Quoted } from "../shared/Quoted";
import { C, Cloud, DotRing, Flower, Float, HalfCircle, Heart, Loop, Rainbow, Shape, Sparkle, Spin, Star, Sun } from "../shared/Shapes";
import { FramedPhoto } from "../shared/SitePhoto";
import { Wave } from "../shared/Wave";
import { useScrollTo } from "../shared/useScrollTo";

const ease = [0.22, 1, 0.36, 1] as const;

export function DesktopHero({ photo }: { photo: GalleryImage | null }) {
  const { t } = useLang();
  const ratio = photo ? photo.width / photo.height : 3 / 4;
  const scrollTo = useScrollTo();
  const h = t.hero;

  const facts = [
    { Icon: Baby, value: h.ageValue, label: h.ageLabel, fill: C.mint, shape: "blob1" as const },
    { Icon: Clock3, value: h.hoursValue, label: h.hoursLabel, fill: C.lilac, shape: "blob3" as const },
    { Icon: Users, value: h.groupsValue, label: h.groupsLabel, fill: C.peach, shape: "blob2" as const },
  ];

  return (
    <div className="relative isolate bg-cream">
      {/* декоративный слой: фигурки ограничены им и лежат под контентом */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* мягкие цветовые пятна фона */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-48 right-[-12%] size-[640px] rounded-full bg-mint/40 blur-[90px]" />
          <div className="absolute bottom-[-30%] left-[-14%] size-[560px] rounded-full bg-lilac/40 blur-[90px]" />
          <div className="dots-bg absolute top-[18%] left-[44%] h-40 w-48 opacity-50 [mask-image:radial-gradient(closest-side,black,transparent)]" />
        </div>

        <Float className="absolute top-[22%] left-[2.5%] hidden w-20 opacity-90 2xl:block" duration={10} rotate={0}>
          <Cloud />
        </Float>
        <Float className="absolute bottom-[20%] left-[2%] hidden w-7 2xl:block" delay={0.8}>
          <Star />
        </Float>
      </div>
      <div className="relative mx-auto grid min-h-[min(100svh,840px)] max-w-[1280px] grid-cols-[1.08fr_0.92fr] 2xl:max-w-[1360px] items-center gap-10 px-8 pt-[calc(var(--header-h)+20px)] pb-[clamp(72px,10svh,112px)] xl:gap-14 xl:px-12">
        {/* ——— текст ——— */}
        <div className="min-w-0">
          <motion.span className="eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
            <Flower petals={6} fill={C.lilacDeep} outline={false} className="-my-1 -ml-1 size-[22px]" />
            {h.kicker}
          </motion.span>

          <motion.h1
            className="mt-5 text-forest"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.06, ease }}
          >
            <span className="relative inline-block text-[min(clamp(2.6rem,1.4rem+3.1vw,4.5rem),10svh)] leading-[0.98] font-extrabold tracking-[-0.025em]">
              <svg aria-hidden="true" viewBox="0 0 300 40" preserveAspectRatio="none" className="absolute bottom-[-0.06em] left-[3%] h-[0.3em] w-[95%]">
                <path d="M4 26C70 8 170 4 296 18" stroke={C.peach} strokeWidth="16" strokeLinecap="round" fill="none" />
              </svg>
              <span className="relative"><Quoted text={h.titleName} /></span>
              <Float className="absolute -top-[0.28em] -right-[0.55em] w-[0.5em]" duration={5} rotate={18} y={4}>
                <Star />
              </Float>
            </span>
            <span className="mt-[0.3em] block text-[min(clamp(1.3rem,0.85rem+1.25vw,2.05rem),4.8svh)] leading-tight font-bold text-forest-soft">
              {h.titleRest}
            </span>
          </motion.h1>

          <motion.p
            className="mt-5 flex max-w-[30rem] items-start gap-3 text-[clamp(1rem,0.85rem+0.35vw,1.18rem)] leading-snug font-medium"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.14, ease }}
          >
            <Heart className="mt-1 w-6 shrink-0" />
            {h.subtitle}
          </motion.p>

          {/* лента фактов */}
          <motion.ul
            className="mt-[clamp(18px,3svh,28px)] grid w-full max-w-[540px] grid-cols-3 rounded-[28px] bg-white/90 p-2 shadow-soft ring-1 ring-forest/8 backdrop-blur"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease }}
          >
            {facts.map(({ Icon, value, label, fill, shape }, i) => (
              <li
                key={label}
                className={`flex min-w-0 flex-col gap-2 rounded-[22px] px-3 py-3 transition-colors hover:bg-cream xl:flex-row xl:items-center xl:gap-3 ${
                  i > 0 ? "border-l border-dashed border-forest/15" : ""
                }`}
              >
                <span className="relative grid size-11 shrink-0 place-items-center">
                  <Shape name={shape} fill={fill} outline={false} className="absolute inset-0 size-full" />
                  <Icon className="relative size-5 text-forest" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[clamp(1rem,0.8rem+0.4vw,1.15rem)] leading-tight font-bold whitespace-nowrap">{value}</span>
                  <span className="mt-0.5 block text-[12.5px] leading-tight text-forest-muted">{label}</span>
                </span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-[clamp(18px,3svh,28px)] flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36, ease }}
          >
            <a href="#about" onClick={(e) => scrollTo("about", e)} className="btn-primary group h-12 px-6 text-[15px]">
              {h.ctaPrimary}
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" onClick={(e) => scrollTo("contact", e)} className="btn-soft h-12 px-6 text-[15px]">
              {h.ctaSecondary}
            </a>
          </motion.div>
        </div>

        {/* ——— композиция с фото: пропорции файла сохраняются, фигурки — только вокруг рамки ——— */}
        <motion.div
          className="relative flex min-w-0 flex-col items-center"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.12, ease }}
        >
          <div
            className="relative"
            style={{ width: `min(100% - 112px, min(54svh, 500px) * ${ratio})` }}
          >
            {/* за фото */}
            <Spin className="absolute top-[-9%] left-[-22%] aspect-square w-[62%]" duration={90}>
              <DotRing className="size-full" />
            </Spin>
            <div aria-hidden="true" className="absolute right-[-16%] bottom-[-6%] aspect-square w-[58%] rounded-full bg-peach/35 blur-2xl" />

            <FramedPhoto
              image={photo}
              alt={h.photoAlt}
              sizes="(min-width: 1536px) 440px, (min-width: 1024px) 34vw, 100vw"
              priority
              back={C.mint}
              arch={40}
              tone="peach"
              className="w-full"
            />

            {/* фигурки по краям — в пустых углах арки и снаружи рамки */}
            <Float className="absolute top-[-5%] right-[-15%] w-[25%]" duration={9} rotate={10} y={6}>
              <Sun />
            </Float>
            <Loop className="absolute top-[-7%] left-[-13%] w-[30%]" />
            <Float className="absolute top-[14%] left-[-6%] w-[6%]" delay={1.8} duration={4} rotate={20}>
              <Sparkle fill={C.peachDeep} />
            </Float>
            <Float className="absolute top-[44%] right-[-14%] w-[10%]" delay={1.3}>
              <Flower petals={8} fill={C.lilac} />
            </Float>
            <Float className="absolute bottom-[9%] left-[-21%] w-[19%]" delay={0.6} y={5} rotate={0}>
              <Rainbow />
            </Float>
            <div className="absolute right-[-17%] bottom-[2%] w-[14%]">
              <HalfCircle fill={C.peach} />
            </div>
          </div>

          {/* стикеры — под фото, чтобы не закрывать людей на снимке */}
          <div className="relative mt-[clamp(18px,3svh,28px)] flex flex-wrap justify-center gap-3">
            <span className="flex -rotate-2 items-center gap-2 rounded-full bg-white py-2 pr-4 pl-2 text-[13.5px] font-semibold whitespace-nowrap text-forest shadow-lift ring-1 ring-forest/5">
              <span className="grid size-8 place-items-center rounded-full bg-lilac">
                <Languages className="size-4" />
              </span>
              {h.language}
            </span>
            <span className="flex rotate-2 items-center gap-2 rounded-[20px_20px_20px_6px] bg-white py-2 pr-4 pl-2 text-[13.5px] font-semibold whitespace-nowrap text-forest shadow-lift ring-1 ring-forest/5">
              <span className="grid size-8 place-items-center rounded-full bg-peach">
                <Soup className="size-4" />
              </span>
              {h.meals}
            </span>
          </div>
        </motion.div>
      </div>

      <Wave color="var(--color-mint-soft)" variant={0} />
    </div>
  );
}
