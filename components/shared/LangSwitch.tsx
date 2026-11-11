"use client";

import { motion } from "framer-motion";
import { useLang } from "./LanguageProvider";
import type { Lang } from "@/lib/i18n";

const options: { id: Lang; label: string }[] = [
  { id: "kk", label: "KZ" },
  { id: "ru", label: "RU" },
];

export function LangSwitch({ size = "md", layoutId }: { size?: "md" | "lg"; layoutId: string }) {
  const { lang, setLang, t } = useLang();
  const h = size === "lg" ? "h-12" : "h-10";
  const w = size === "lg" ? "w-14" : "w-11";

  return (
    <div
      role="group"
      aria-label={t.header.langLabel}
      className={`relative inline-flex ${h} items-center rounded-full bg-white/85 p-1 ring-1 ring-forest/10 shadow-soft`}
    >
      {options.map((o) => {
        const active = o.id === lang;
        return (
          <button
            key={o.id}
            type="button"
            onClick={() => setLang(o.id)}
            aria-pressed={active}
            lang={o.id}
            className={`relative ${w} h-full rounded-full text-sm font-extrabold transition-colors ${
              active ? "text-cream" : "text-forest-soft hover:text-forest"
            }`}
          >
            {active && (
              <motion.span
                layoutId={layoutId}
                className="absolute inset-0 rounded-full bg-forest"
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            )}
            <span className="relative">{o.label}</span>
          </button>
        );
      })}
    </div>
  );
}
