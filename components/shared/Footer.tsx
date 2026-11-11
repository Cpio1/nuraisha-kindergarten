"use client";

import { ArrowUp, Clock3, MapPin } from "lucide-react";
import { navIds, site } from "@/lib/site";
import { InstagramIcon, LogoMark } from "./BrandIcons";
import { useLang } from "./LanguageProvider";
import { useScrollTo } from "./useScrollTo";

export function Footer() {
  const { t } = useLang();
  const scrollTo = useScrollTo();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-forest text-cream">
      <div className="mx-auto max-w-[1240px] px-5 pt-10 pb-[max(env(safe-area-inset-bottom),28px)] sm:px-6 lg:pt-12 xl:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <LogoMark className="size-12" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-2xl font-extrabold">{t.brand.name}</span>
                <span className="mt-1 text-xs font-medium text-mint">{t.brand.tagline}</span>
              </span>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-cream/75">{t.hero.subtitle}</p>
          </div>

          <nav aria-label={t.header.menu} className="lg:max-w-md">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
              {navIds.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => scrollTo(id, e)}
                    className="flex min-h-11 items-center text-[15px] font-medium text-cream/80 transition hover:text-mint"
                  >
                    {t.nav[id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="space-y-3 text-[15px] text-cream/80 lg:max-w-xs">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-mint" />
              {t.contact.address}
            </li>
            <li className="flex gap-3">
              <Clock3 className="mt-0.5 size-5 shrink-0 text-mint" />
              {t.contact.hours}
            </li>
            <li>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center gap-3 transition hover:text-mint"
              >
                <InstagramIcon className="size-5 shrink-0 text-mint" />@{site.instagram.handle}
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-10 flex flex-col-reverse gap-4 border-t border-cream/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-cream/60">
            © {year} {t.brand.full}. {t.footer.rights}
          </p>
          <a
            href="#home"
            onClick={(e) => scrollTo("home", e)}
            className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-cream/10 px-5 font-display text-sm font-bold transition hover:bg-cream/20"
          >
            <ArrowUp className="size-4" />
            {t.footer.up}
          </a>
        </div>
      </div>
    </footer>
  );
}
