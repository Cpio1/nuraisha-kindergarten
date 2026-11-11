"use client";

import { ExternalLink, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { useLang } from "./LanguageProvider";

/**
 * Карта 2GIS. Пока проверенной ссылки нет (site.twoGisUrl / site.twoGisEmbedUrl),
 * показывается декоративная карта-заглушка без фиктивных ссылок.
 */
export function MapCard({ className = "" }: { className?: string }) {
  const { t } = useLang();
  const c = t.contact;

  if (site.twoGisEmbedUrl) {
    return (
      <div className={`relative overflow-hidden bg-white shadow-lift ${className}`}>
        <iframe
          src={site.twoGisEmbedUrl}
          title={c.mapTitle}
          loading="lazy"
          className="absolute inset-0 h-full w-full border-0"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#EAF5EE] shadow-lift ${className}`}>
      <svg aria-hidden="true" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <rect width="400" height="300" fill="#EAF5EE" />
        <path d="M-10 210C80 180 140 240 230 200s130-90 190-70" stroke="#FFFFFF" strokeWidth="22" fill="none" />
        <path d="M120-10c10 80-20 140 10 200s20 90 0 120" stroke="#FFFFFF" strokeWidth="16" fill="none" />
        <path d="M-10 90h420" stroke="#FFFFFF" strokeWidth="10" />
        <path d="M290-10v320" stroke="#FFFFFF" strokeWidth="10" />
        <rect x="150" y="110" width="60" height="44" rx="12" fill="#B8E5D0" />
        <rect x="310" y="30" width="70" height="40" rx="12" fill="#DCCDF7" opacity=".8" />
        <rect x="20" y="20" width="80" height="50" rx="14" fill="#FFD6B8" opacity=".7" />
        <rect x="305" y="210" width="80" height="60" rx="16" fill="#B8E5D0" opacity=".8" />
        <circle cx="60" cy="140" r="22" fill="#B8E5D0" opacity=".7" />
        <path d="M20 270c40-30 70-30 110 0" stroke="#DCCDF7" strokeWidth="10" fill="none" strokeLinecap="round" />
      </svg>

      <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-full">
        <span className="absolute top-full left-1/2 h-3 w-10 -translate-x-1/2 rounded-full bg-forest/15 blur-[2px]" />
        <span className="relative grid size-14 place-items-center rounded-[50%_50%_50%_6px] bg-forest text-cream shadow-lift [transform:rotate(-45deg)]">
          <MapPin className="size-6 [transform:rotate(45deg)]" />
        </span>
      </div>

      <div className="absolute inset-x-4 bottom-4 rounded-3xl bg-white/92 p-4 shadow-soft backdrop-blur sm:inset-x-6 sm:bottom-6 sm:p-5">
        <p className="text-[15px] font-black">{c.addressShort}</p>
        {site.twoGisUrl ? (
          <a
            href={site.twoGisUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex min-h-11 items-center gap-2 text-[15px] font-extrabold text-mint-deep"
          >
            {c.mapOpen}
            <ExternalLink className="size-4" />
          </a>
        ) : (
          <p className="mt-1 text-sm font-semibold text-forest-muted">{c.mapSoon}</p>
        )}
      </div>
    </div>
  );
}
