"use client";

import { ArrowUpRight } from "lucide-react";
import { site, whatsappHref } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "../shared/BrandIcons";
import { tones } from "../shared/content";
import { useContactItems } from "../shared/contactItems";
import { Float, SunShape } from "../shared/Decor";
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
      <Float className="absolute top-6 right-3 w-16" duration={10} rotate={12} y={5}>
        <SunShape />
      </Float>
      <div className="relative mx-auto max-w-xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow={c.eyebrow} title={c.title} lead={c.lead} align="left" size="sm" />
        </Reveal>

        <ul className="mt-6 space-y-2.5">
          {items.map((it, i) => {
            const inner = (
              <>
                <span className={`grid size-12 shrink-0 place-items-center blob-a ${tones[it.tone].bg}`}>
                  <it.Icon className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[12px] font-extrabold tracking-wide text-forest-muted uppercase">{it.label}</span>
                  <span className={`block text-[15px] leading-snug font-bold break-words ${it.muted ? "text-forest-muted" : ""}`}>
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
          <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="btn-primary h-14 w-full text-[17px]">
            <InstagramIcon className="size-5" />
            {c.instagramCta}
          </a>
          {site.whatsapp && (
            <a href={whatsappHref(site.whatsapp)} target="_blank" rel="noopener noreferrer" className="btn-soft h-14 w-full text-[17px]">
              <WhatsAppIcon className="size-5 text-mint-deep" />
              {c.whatsappCta}
            </a>
          )}
        </Reveal>

        <Reveal className="mt-10">
          <h3 className="mb-4 text-xl font-black">{c.mapTitle}</h3>
          <MapCard className="h-[300px] rounded-[36px_36px_36px_12px] ring-[6px] ring-white" />
        </Reveal>
      </div>
      <Wave color="var(--color-forest)" variant={2} />
    </div>
  );
}
