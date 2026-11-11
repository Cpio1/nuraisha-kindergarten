"use client";

import { ArrowUpRight } from "lucide-react";
import { site, whatsappHref } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "../shared/BrandIcons";
import { tones } from "../shared/content";
import { useContactItems } from "../shared/contactItems";
import { CloudShape, Float, HeartShape, StarShape, SunShape } from "../shared/Decor";
import { useLang } from "../shared/LanguageProvider";
import { MapCard } from "../shared/MapCard";
import { Reveal, RevealItem } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { Wave } from "../shared/Wave";

export function DesktopContact() {
  const { t } = useLang();
  const c = t.contact;
  const items = useContactItems();

  return (
    <div className="relative overflow-hidden bg-mint-soft pt-14 pb-32 xl:pt-16 xl:pb-36">
      <Float className="absolute top-16 right-[38%] w-24" duration={12} rotate={0}>
        <CloudShape />
      </Float>
      <Float className="absolute bottom-36 left-[4%] w-9" delay={0.6}>
        <StarShape />
      </Float>

      <div className="relative mx-auto grid max-w-[1240px] grid-cols-12 items-center gap-10 px-6 xl:gap-14 xl:px-10">
        <div className="col-span-5">
          <Reveal>
            <SectionHeading eyebrow={c.eyebrow} title={c.title} lead={c.lead} align="left" squiggle="#9C80E0" />
          </Reveal>

          <ul className="mt-8 space-y-3">
            {items.map((it, i) => {
              const inner = (
                <>
                  <span className={`grid size-12 shrink-0 place-items-center blob-a ${tones[it.tone].bg}`}>
                    <it.Icon className="size-5 text-forest" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[13px] font-extrabold tracking-wide text-forest-muted uppercase">{it.label}</span>
                    <span className={`block text-[16px] leading-snug font-bold ${it.muted ? "text-forest-muted" : "text-forest"}`}>
                      {it.value}
                    </span>
                  </span>
                  {it.href && <ArrowUpRight className="size-5 shrink-0 text-forest-muted transition group-hover:text-forest" />}
                </>
              );
              const cls = "group flex items-center gap-4 rounded-[26px] bg-white/85 p-3.5 pr-5 shadow-soft ring-1 ring-white transition hover:-translate-y-0.5 hover:shadow-lift";
              return (
                <RevealItem key={it.key} delay={0.06 * i} y={18}>
                  {it.href ? (
                    <a href={it.href} target={it.external ? "_blank" : undefined} rel={it.external ? "noopener noreferrer" : undefined} className={cls}>
                      {inner}
                    </a>
                  ) : (
                    <div className={cls.replace(" hover:-translate-y-0.5 hover:shadow-lift", "")}>{inner}</div>
                  )}
                </RevealItem>
              );
            })}
          </ul>

          <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-3">
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="btn-primary h-14 px-7">
              <InstagramIcon className="size-5" />
              {c.instagramCta}
            </a>
            {site.whatsapp && (
              <a href={whatsappHref(site.whatsapp)} target="_blank" rel="noopener noreferrer" className="btn-soft h-14 px-7">
                <WhatsAppIcon className="size-5 text-mint-deep" />
                {c.whatsappCta}
              </a>
            )}
          </Reveal>
        </div>

        <Reveal className="relative col-span-7" delay={0.1}>
          <h3 className="sr-only">{c.mapTitle}</h3>
          <div aria-hidden="true" className="absolute -inset-4 translate-x-5 translate-y-5 bg-lilac blob-b" />
          <MapCard className="relative h-[clamp(400px,38vw,520px)] rounded-[56px_56px_56px_18px] ring-8 ring-white" />
          <Float className="absolute -top-12 -right-6 w-24" duration={10} rotate={12} y={6}>
            <SunShape />
          </Float>
          <Float className="absolute -bottom-6 -left-6 w-12" delay={0.8}>
            <HeartShape />
          </Float>
        </Reveal>
      </div>

      <Wave color="var(--color-forest)" variant={2} />
    </div>
  );
}
