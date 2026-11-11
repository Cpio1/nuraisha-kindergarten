"use client";

import { useEffect, useState } from "react";
import { navIds, type NavId } from "@/lib/site";

/** Возвращает id секции, которая сейчас находится под шапкой. */
export function useActiveSection() {
  const [active, setActive] = useState<NavId>("home");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      // пока открыто меню/лайтбокс, страница «заморожена» — не пересчитываем
      if (document.body.style.position === "fixed") return;
      const line = window.innerHeight * 0.35;
      let current: NavId = "home";
      for (const id of navIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = navIds[navIds.length - 1];
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return active;
}

export function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > threshold);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [threshold]);
  return scrolled;
}
