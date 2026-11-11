"use client";

import { ArrowUpRight } from "lucide-react";
import { site, whatsappHref } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "../shared/BrandIcons";
import { tones } from "../shared/content";
import { useContactItems } from "../shared/contactItems";
import { useLang } from "../shared/LanguageProvider";
import { MapCard } from "../shared/MapCard";
import { Reveal, RevealItem } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { C, Cloud, Float, Heart, Shape, Star, Sun } from "../shared/Shapes";
import { Wave } from "../shared/Wave";

const iconShapes = ["blob1", "blob3", "flower8", "blob2", "pebble"] as const;

export function DesktopContact() {
  const { t } = useLang();
  const c = t.contact;
  const items = useContactItems();

  return (
    <div className="relative overflow-hidden bg-mint-soft pt-[clamp(40px,6vw,80px)] pb-[clamp(96px,9vw,140px)]">
      <Float className="absolute top-14 left-[40%] hidden w-24 xl:block" duration={12} rotate={0}>
        <Cloud />
      </Float>
      <Float className="absolute bottom-[22%] left-[2.5%] hidden w-8 xl:block" delay={0.6}>
        <Star />
      </Float>

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-12 items-center gap-10 px-8 xl:gap-16 xl:px-12">
        <div className="col-span-5 min-w-0">
          <Reveal>
            <SectionHeading eyebrow={c.eyebrow} title={c.title} lead={c.lead} align="left" />
          </Reveal>

          <ul className="mt-7 space-y-3">
            {items.map((it, i) => {
              const inner = (
                <>
                  <span className="relative grid size-12 shrink-0 place-items-center">
                    <Shape name={iconShapes[i % iconShapes.length]} fill={tones[it.tone].hex} outline={false} className="absolute inset-0 size-full transition-transform duration-500 group-hover:rotate-12" />
                    <it.Icon className="relative size-5 text-forest" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[12px] font-semibold tracking-[0.08em] text-forest-muted uppercase">{it.label}</span>
                    <span className={`block text-[15.5px] leading-snug font-medium ${it.muted ? "text-forest-muted" : "text-forest"}`}>{it.value}</span>
                  </span>
                  {it.href && <ArrowUpRight className="size-5 shrink-0 text-forest-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-forest" />}
                </>
              );
              const base = "group flex items-center gap-4 rounded-[24px] bg-white/90 p-3 pr-5 ring-1 ring-white";
              return (
                <RevealItem key={it.key} delay={0.06 * i} y={16}>
                  {it.href ? (
                    <a
                      href={it.href}
                      target={it.external ? "_blank" : undefined}
                      rel={it.external ? "noopener noreferrer" : undefined}
                      className={`${base} transition-[box-shadow,translate] duration-300 hover:-translate-y-0.5 hover:shadow-soft`}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={base}>{inner}</div>
                  )}
                </RevealItem>
              );
            })}
          </ul>

          <Reveal delay={0.2} className="mt-7 flex flex-wrap gap-3">
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="btn-primary h-[52px] px-7">
              <InstagramIcon className="size-5" />
              {c.instagramCta}
            </a>
            {site.whatsapp && (
              <a href={whatsappHref(site.whatsapp)} target="_blank" rel="noopener noreferrer" className="btn-soft h-[52px] px-7">
                <WhatsAppIcon className="size-5 text-mint-deep" />
                {c.whatsappCta}
              </a>
            )}
          </Reveal>
        </div>

        <Reveal className="relative col-span-7 min-w-0" delay={0.1}>
          <h3 className="sr-only">{c.mapTitle}</h3>
          {/* подложка-клякса строго внутри колонки */}
          <div className="relative p-[4%]">
            <Shape name="blob4" fill={C.lilac} outline={false} stretch className="absolute -inset-[3%] size-[106%]" />
            <MapCard className="relative h-[clamp(360px,34vw,480px)] rounded-[48px_48px_48px_16px] ring-8 ring-white" />
            <Float className="absolute top-0 right-[3%] w-[clamp(60px,6vw,84px)]" duration={10} rotate={12} y={5}>
              <Sun />
            </Float>
            <Float className="absolute bottom-[1%] left-[3%] w-10" delay={0.8}>
              <Heart />
            </Float>
          </div>
        </Reveal>
      </div>

      <Wave color="var(--color-forest)" variant={2} />
    </div>
  );
}
