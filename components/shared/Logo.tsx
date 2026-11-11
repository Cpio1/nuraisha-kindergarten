"use client";

import { LogoMark } from "./BrandIcons";
import { useLang } from "./LanguageProvider";
import { useScrollTo } from "./useScrollTo";

export function Logo({ compact = false, onNavigate }: { compact?: boolean; onNavigate?: () => void }) {
  const { t } = useLang();
  const scrollTo = useScrollTo();
  return (
    <a
      href="#home"
      onClick={(e) => {
        scrollTo("home", e);
        onNavigate?.();
      }}
      className="group flex min-h-11 shrink-0 items-center gap-2.5"
      aria-label={t.brand.full}
    >
      <LogoMark
        className={`${compact ? "size-10" : "size-12"} drop-shadow-[0_6px_10px_rgba(40,76,67,0.15)] transition-transform duration-500 group-hover:rotate-[24deg]`}
      />
      <span className={`flex flex-col leading-none ${compact ? "max-[349px]:hidden" : ""}`}>
        <span className={`${compact ? "text-xl" : "text-2xl"} font-black tracking-tight text-forest`}>
          {t.brand.name}
        </span>
        <span className="mt-1 text-[11px] font-bold tracking-wide text-forest-muted">{t.brand.tagline}</span>
      </span>
    </a>
  );
}
