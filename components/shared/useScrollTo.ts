"use client";

import { useCallback } from "react";
import type { NavId } from "@/lib/site";

/** Плавная прокрутка к секции с учётом высоты фиксированной шапки (scroll-margin-top). */
export function useScrollTo() {
  return useCallback((id: NavId, e?: React.MouseEvent) => {
    const el = document.getElementById(id);
    if (!el) return;
    e?.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    } else {
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    }
    history.replaceState(null, "", id === "home" ? window.location.pathname : `#${id}`);
  }, []);
}
