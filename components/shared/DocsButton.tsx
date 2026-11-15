"use client";

import { ExternalLink, FolderOpen } from "lucide-react";
import { site } from "@/lib/site";
import { useLang } from "./LanguageProvider";

/** Кнопка «Құжаттарды қарау» — открывает папку в Облаке Mail.ru в новой вкладке. */
export function DocsButton({ className = "" }: { className?: string }) {
  const { t } = useLang();
  return (
    <a
      href={site.documentsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t.docs.cta} — ${t.docs.newTab}`}
      className={`btn-primary group ${className}`}
    >
      <FolderOpen className="size-5 shrink-0" />
      {t.docs.cta}
      <ExternalLink className="size-4 shrink-0 opacity-80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}
