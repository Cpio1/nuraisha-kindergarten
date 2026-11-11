"use client";

import { ArrowUpRight } from "lucide-react";
import { site, whatsappHref } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "../shared/BrandIcons";
import { tones } from "../shared/content";
import { useContactItems } from "../shared/contactItems";
import { C, Float, Shape, Sun } from "../shared/Shapes";
import { useLang } from "../shared/LanguageProvider";
import { MapCard } from "../shared/MapCard";
import { Reveal, RevealItem } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { Wave } from "../shared/Wave";

export function MobileContact() {
  const { t } = useLang();
  const c = t.contact;
  const items = useContactItems();

  return (
    <div className="relative overflow-hidden bg-mint-soft pt-10 pb-20">
      <Float className="absolute top-8 right-4 w-14" duration={10} rotate={12} y={4}>
        <Sun />
      </Float>
      <div className="relative mx-auto max-w-xl px-4 sm:max-w-2xl sm:px-6">
        <Reveal>
          <SectionHeading eyebrow={c.eyebrow} title={c.title} lead={c.lead} align="left" />
        </Reveal>

        <ul className="mt-6 space-y-2.5">
          {items.map((it, i) => {
            const inner = (
              <>
                <span className="relative grid size-12 shrink-0 place-items-center">
                  <Shape name={(["blob1", "blob3", "flower8", "blob2", "pebble"] as const)[i % 5]} fill={tones[it.tone].hex} outline={false} className="absolute inset-0 size-full" />
                  <it.Icon className="relative size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[11.5px] font-semibold tracking-[0.08em] text-forest-muted uppercase">{it.label}</span>
                  <span className={`block text-[15px] leading-snug font-medium break-words ${it.muted ? "text-forest-muted" : ""}`}>
                    {it.value}
                  </span>
                </span>
                {it.href && <ArrowUpRight className="size-5 shrink-0 text-forest-muted" />}
              </>
            );
            const cls = "flex min-h-16 items-center gap-3.5 rounded-[22px] bg-white/90 p-3 pr-4 shadow-soft";
            return (
              <RevealItem key={it.key} delay={0.05 * i} y={14}>
                {it.href ? (
                  <a href={it.href} target={it.external ? "_blank" : undefined} rel={it.external ? "noopener noreferrer" : undefined} className={`${cls} active:scale-[0.98] transition`}>
                    {inner}
                  </a>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </RevealItem>
            );
          })}
        </ul>

        <Reveal className="mt-5 flex flex-col gap-3">
          <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="btn-primary h-14 w-full text-base">
            <InstagramIcon className="size-5" />
            {c.instagramCta}
          </a>
          {site.whatsapp && (
            <a href={whatsappHref(site.whatsapp)} target="_blank" rel="noopener noreferrer" className="btn-soft h-14 w-full text-base">
              <WhatsAppIcon className="size-5 text-mint-deep" />
              {c.whatsappCta}
            </a>
          )}
        </Reveal>

        <Reveal className="mt-10">
          <h3 className="mb-4 font-display text-xl font-extrabold">{c.mapTitle}</h3>
          <div className="relative p-3">
            <Shape name="blob4" fill={C.lilac} outline={false} stretch className="absolute inset-0 size-full" />
            <MapCard className="relative h-[clamp(260px,70vw,340px)] rounded-[32px_32px_32px_12px] ring-[5px] ring-white" />
          </div>
        </Reveal>
      </div>
      <Wave color="var(--color-forest)" variant={2} />
    </div>
  );
}
