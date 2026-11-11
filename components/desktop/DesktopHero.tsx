"use client";

import { motion } from "framer-motion";
import { ArrowRight, Baby, Clock3, Languages, Soup, Sparkles, Users } from "lucide-react";
import type { GalleryImage } from "@/lib/gallery";
import { CloudShape, FlowerShape, Float, HeartShape, RainbowShape, SparkleShape, StarShape, SunShape } from "../shared/Decor";
import { useLang } from "../shared/LanguageProvider";
import { SitePhoto } from "../shared/SitePhoto";
import { Wave } from "../shared/Wave";
import { useScrollTo } from "../shared/useScrollTo";

const ease = [0.22, 1, 0.36, 1] as const;

export function DesktopHero({ main, second }: { main: GalleryImage | null; second: GalleryImage | null }) {
  const { t } = useLang();
  const scrollTo = useScrollTo();
  const h = t.hero;

  const stats = [
    { Icon: Baby, value: h.ageValue, label: h.ageLabel, cls: "bg-mint blob-a", icon: "bg-white/70" },
    { Icon: Clock3, value: h.hoursValue, label: h.hoursLabel, cls: "bg-lilac rounded-[30px_30px_30px_10px]", icon: "bg-white/70" },
    { Icon: Users, value: h.groupsValue, label: h.groupsLabel, cls: "bg-peach rounded-[10px_34px_34px_34px]", icon: "bg-white/70" },
  ];

  return (
    <div className="relative overflow-hidden bg-cream pt-[calc(var(--header-h)+36px)] pb-28 xl:pb-36">
      {/* фон */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-8%] size-[620px] rounded-full bg-mint/45 blur-3xl" />
        <div className="absolute bottom-[-18%] left-[-10%] size-[520px] rounded-full bg-lilac/40 blur-3xl" />
        <div className="dots-bg absolute top-28 left-[42%] h-40 w-56 opacity-60 [mask-image:radial-gradient(closest-side,black,transparent)]" />
      </div>
      <Float className="absolute top-[18%] left-[3%] w-28 opacity-90" duration={9} y={8} rotate={0}>
        <CloudShape />
      </Float>
      <Float className="absolute top-[12%] left-[38%] w-20 opacity-80" duration={11} delay={1.5} y={6} rotate={0}>
        <CloudShape />
      </Float>
      <Float className="absolute bottom-[22%] left-[2%] w-9" delay={0.6}>
        <StarShape />
      </Float>
      <Float className="absolute top-[30%] left-[47%] w-5" delay={1.2} duration={4}>
        <SparkleShape />
      </Float>

      <div className="relative mx-auto grid max-w-[1320px] grid-cols-12 items-center gap-8 px-6 xl:px-10">
        {/* текст */}
        <div className="col-span-7 xl:col-span-6">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <Sparkles className="size-4 text-lilac-deep" />
            {h.kicker}
          </motion.span>

          <motion.h1
            className="mt-5 font-black tracking-tight text-forest"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
          >
            <span className="relative inline-block text-[clamp(3.2rem,5.6vw,5.9rem)] leading-[0.95]">
              <svg
                aria-hidden="true"
                viewBox="0 0 300 40"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-[4%] -z-0 h-[0.32em] w-[94%]"
              >
                <path d="M4 26C70 6 160 4 296 20" stroke="#FFD6B8" strokeWidth="18" strokeLinecap="round" fill="none" />
              </svg>
              <span className="relative">{h.titleName}</span>
            </span>
            <span className="mt-3 block text-[clamp(1.9rem,3.2vw,3.3rem)] leading-[1.05] font-extrabold text-forest-soft">
              {h.titleRest}
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 flex max-w-xl items-start gap-3 text-[clamp(1.15rem,1.55vw,1.5rem)] leading-snug font-bold text-forest"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease }}
          >
            <HeartShape className="mt-1.5 w-6 shrink-0" />
            {h.subtitle}
          </motion.p>

          <ul className="mt-8 grid max-w-[620px] grid-cols-3 gap-3 xl:gap-4">
            {stats.map(({ Icon, value, label, cls, icon }, i) => (
              <motion.li
                key={label}
                className={`flex flex-col gap-2 p-4 shadow-soft xl:p-5 ${cls}`}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.28 + i * 0.08, ease }}
                whileHover={{ y: -4, rotate: i === 1 ? 0 : i === 0 ? -1.5 : 1.5 }}
              >
                <span className={`grid size-10 place-items-center rounded-2xl ${icon}`}>
                  <Icon className="size-5 text-forest" />
                </span>
                <span className="text-[clamp(1.05rem,1.45vw,1.4rem)] leading-tight font-black whitespace-nowrap">
                  {value}
                </span>
                <span className="text-[13px] leading-tight font-bold text-forest-soft">{label}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
          >
            <a href="#about" onClick={(e) => scrollTo("about", e)} className="btn-primary group h-14 px-7 text-[17px]">
              {h.ctaPrimary}
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" onClick={(e) => scrollTo("contact", e)} className="btn-soft h-14 px-7 text-[17px]">
              {h.ctaSecondary}
            </a>
          </motion.div>
        </div>

        {/* композиция с фото */}
        <div className="relative col-span-5 flex justify-center xl:col-span-6">
          <motion.div
            className="relative w-[min(100%,34vw,470px)]"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease }}
          >
            <div aria-hidden="true" className="animate-morph absolute -inset-5 translate-x-6 translate-y-4 bg-mint" />
            <div aria-hidden="true" className="absolute -inset-5 translate-x-6 translate-y-4 border-[3px] border-dashed border-forest/15 blob-b" />
            <SitePhoto
              src={main?.src}
              alt={h.photoAlt}
              sizes="(min-width: 1024px) 470px, 100vw"
              priority
              tone="peach"
              className="animate-morph relative aspect-[9/10] w-full shadow-lift ring-[10px] ring-white"
            />

            <div className="absolute -bottom-10 -left-14 xl:-left-20">
              <SitePhoto
                src={second?.src && second.src !== main?.src ? second.src : null}
                alt={h.photoAlt2}
                sizes="220px"
                tone="lilac"
                className="size-[clamp(130px,12vw,200px)] rounded-full shadow-lift ring-8 ring-cream"
              />
            </div>

            <Float className="absolute -top-10 -right-8 w-[clamp(84px,8vw,120px)]" duration={10} rotate={14} y={6}>
              <SunShape />
            </Float>
            <Float className="absolute top-[14%] -left-10 xl:-left-16" delay={0.4} y={8} rotate={-4}>
              <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-extrabold whitespace-nowrap text-forest shadow-lift">
                <span className="grid size-8 place-items-center rounded-full bg-lilac">
                  <Languages className="size-4" />
                </span>
                {h.language}
              </span>
            </Float>
            <Float className="absolute -right-1 bottom-[16%] xl:-right-12" delay={1} y={10} rotate={4}>
              <span className="flex items-center gap-2 rounded-[22px_22px_22px_6px] bg-white px-4 py-2.5 text-sm font-extrabold whitespace-nowrap text-forest shadow-lift">
                <span className="grid size-8 place-items-center rounded-full bg-peach">
                  <Soup className="size-4" />
                </span>
                {h.meals}
              </span>
            </Float>
            <Float className="absolute -right-2 -bottom-14 w-24" delay={0.7} y={6} rotate={0}>
              <RainbowShape />
            </Float>
            <Float className="absolute top-[46%] -right-6 w-10 xl:-right-20" delay={1.6}>
              <FlowerShape color="#DCCDF7" />
            </Float>
            <Float className="absolute -top-6 left-[18%] w-8" delay={2}>
              <StarShape color="#FFD6B8" />
            </Float>
          </motion.div>
        </div>
      </div>

      <Wave color="var(--color-mint-soft)" variant={0} />
    </div>
  );
}
