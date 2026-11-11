"use client";

import { motion } from "framer-motion";
import { navIds, site } from "@/lib/site";
import { InstagramIcon } from "../shared/BrandIcons";
import { LangSwitch } from "../shared/LangSwitch";
import { useLang } from "../shared/LanguageProvider";
import { Logo } from "../shared/Logo";
import { useActiveSection, useScrolled } from "../shared/useActiveSection";
import { useScrollTo } from "../shared/useScrollTo";

export function DesktopHeader() {
  const { t } = useLang();
  const active = useActiveSection();
  const scrolled = useScrolled();
  const scrollTo = useScrollTo();

  return (
    <header className="fixed inset-x-0 top-0 z-50 hidden h-[var(--header-h)] lg:block">
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled ? "bg-cream/85 shadow-[0_8px_30px_-18px_rgba(40,76,67,0.35)] backdrop-blur-xl" : "bg-transparent"
        }`}
      />
      <div className="relative mx-auto flex h-full max-w-[1320px] items-center justify-between gap-4 px-6 xl:px-10">
        <Logo />
        <nav aria-label={t.header.menu}>
          <ul className="flex items-center rounded-full bg-white/70 p-1.5 ring-1 ring-forest/8 backdrop-blur">
            {navIds.map((id) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => scrollTo(id, e)}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative flex h-10 items-center rounded-full px-3 text-[13.5px] font-extrabold whitespace-nowrap transition-colors xl:px-4 xl:text-[15px] ${
                      isActive ? "text-forest" : "text-forest-soft hover:text-forest"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="desktop-nav-pill"
                        className="absolute inset-0 rounded-full bg-mint"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{t.nav[id]}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center gap-2.5">
          <LangSwitch layoutId="lang-desktop" />
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.header.instagram}
            className="hidden size-11 place-items-center rounded-full bg-forest xl:grid text-cream shadow-soft transition hover:-translate-y-0.5 hover:rotate-6"
          >
            <InstagramIcon className="size-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
