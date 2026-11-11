"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Clock3, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navIds, site, type NavId } from "@/lib/site";
import { InstagramIcon } from "../shared/BrandIcons";
import { tones, type Tone } from "../shared/content";
import { CloudShape, FlowerShape, StarShape } from "../shared/Decor";
import { LangSwitch } from "../shared/LangSwitch";
import { useLang } from "../shared/LanguageProvider";
import { Logo } from "../shared/Logo";
import { useActiveSection, useScrolled } from "../shared/useActiveSection";
import { useScrollLock } from "../shared/useScrollLock";
import { useScrollTo } from "../shared/useScrollTo";

const navTones: Tone[] = ["mint", "lilac", "peach", "mint", "lilac", "peach"];

export function MobileHeader() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const active = useActiveSection();
  const scrollTo = useScrollTo();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
      toggleRef.current?.focus();
    };
  }, [open]);

  const go = (id: NavId, e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    // ждём снятия блокировки прокрутки, затем плавно скроллим
    requestAnimationFrame(() => requestAnimationFrame(() => scrollTo(id)));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 lg:hidden">
      <div
        className={`relative flex h-[var(--header-h)] items-center justify-between gap-3 px-4 transition-all duration-300 sm:px-6 ${
          scrolled || open ? "bg-cream/90 shadow-[0_8px_24px_-16px_rgba(40,76,67,0.35)] backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <Logo compact onNavigate={() => setOpen(false)} />
        <div className="flex items-center gap-2">
          <LangSwitch layoutId="lang-mobile-bar" />
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
            className="relative grid size-12 place-items-center rounded-full bg-forest text-cream shadow-soft active:scale-95"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "x" : "m"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {open ? <X className="size-6" /> : <Menu className="size-6" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={t.header.menu}
            className="fixed inset-x-0 top-[var(--header-h)] bottom-0 overflow-y-auto overscroll-contain bg-cream"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -top-24 -right-24 size-72 rounded-full bg-mint/50 blur-2xl" />
              <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-lilac/50 blur-2xl" />
              <CloudShape className="absolute top-6 right-6 w-20" />
              <StarShape className="absolute right-10 bottom-40 w-8" />
              <FlowerShape className="absolute bottom-56 left-6 w-9" color="#DCCDF7" />
            </div>

            <nav className="relative px-4 pt-4 pb-[max(env(safe-area-inset-bottom),24px)] sm:px-6">
              <ul className="space-y-2">
                {navIds.map((id, i) => {
                  const isActive = active === id;
                  return (
                    <motion.li
                      key={id}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i + 0.05, duration: 0.3 }}
                    >
                      <a
                        href={`#${id}`}
                        onClick={(e) => go(id, e)}
                        aria-current={isActive ? "true" : undefined}
                        className={`flex min-h-[60px] items-center gap-4 rounded-[22px] px-4 text-[19px] font-extrabold transition ${
                          isActive ? "bg-white shadow-soft" : "active:bg-white/70"
                        }`}
                      >
                        <span
                          className={`grid size-9 shrink-0 place-items-center blob-a text-sm font-black ${tones[navTones[i]].bg}`}
                        >
                          {i + 1}
                        </span>
                        <span className="flex-1">{t.nav[id]}</span>
                        <ArrowRight className={`size-5 ${isActive ? "text-forest" : "text-forest-muted"}`} />
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.div
                className="mt-6 space-y-3"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <p className="flex items-center gap-2.5 rounded-[22px] bg-lilac-soft px-4 py-3.5 text-[15px] font-bold">
                  <Clock3 className="size-5 shrink-0 text-lilac-deep" />
                  {t.contact.hours}
                </p>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary h-14 w-full text-[17px]"
                >
                  <InstagramIcon className="size-5" />@{site.instagram.handle}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
