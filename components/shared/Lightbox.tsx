"use client";

import Image from "next/image";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import type { GalleryImage } from "@/lib/gallery";
import { useLang } from "./LanguageProvider";
import { useScrollLock } from "./useScrollLock";

export function Lightbox({
  images,
  index,
  onClose,
  onIndex,
}: {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const { t } = useLang();
  const open = index !== null;
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const total = images.length;

  useScrollLock(open);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return;
      onIndex((index + dir + total) % total);
    },
    [index, onIndex, total],
  );

  useEffect(() => {
    if (!open) return;
    lastFocus.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      lastFocus.current?.focus?.();
    };
  }, [open, onClose, go]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60 || info.velocity.x < -400) go(1);
    else if (info.offset.x > 60 || info.velocity.x > 400) go(-1);
  };

  const img = index !== null ? images[index] : null;

  return (
    <AnimatePresence>
      {open && img && (
        <motion.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${t.gallery.counter} ${index! + 1} ${t.gallery.of} ${total}`}
          className="fixed inset-0 z-[100] flex flex-col bg-[#13261f]/92 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <div
            className="flex items-center justify-between gap-4 px-4 pt-[max(env(safe-area-inset-top),16px)] pb-2 sm:px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-cream tabular-nums">
              {index! + 1} {t.gallery.of} {total}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label={t.gallery.close}
              className="grid size-12 place-items-center rounded-full bg-white/12 text-cream transition hover:bg-white/20"
            >
              <X className="size-6" />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 pb-[max(env(safe-area-inset-bottom),16px)] sm:px-20">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={img.src}
                className="relative h-full w-full max-w-6xl touch-pan-y"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                drag={total > 1 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.5}
                onDragEnd={onDragEnd}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={img.src}
                  alt={`${t.gallery.photoAlt} — ${index! + 1}`}
                  fill
                  sizes="100vw"
                  className="pointer-events-none rounded-2xl object-contain select-none"
                  draggable={false}
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(-1);
                  }}
                  aria-label={t.gallery.prev}
                  className="absolute top-1/2 left-3 hidden size-14 -translate-y-1/2 place-items-center rounded-full bg-white/12 text-cream transition hover:bg-white/25 sm:grid"
                >
                  <ChevronLeft className="size-7" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(1);
                  }}
                  aria-label={t.gallery.next}
                  className="absolute top-1/2 right-3 hidden size-14 -translate-y-1/2 place-items-center rounded-full bg-white/12 text-cream transition hover:bg-white/25 sm:grid"
                >
                  <ChevronRight className="size-7" />
                </button>
              </>
            )}
          </div>

          {total > 1 && (
            <div
              className="flex justify-center gap-4 pb-[max(env(safe-area-inset-bottom),20px)] sm:hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button type="button" onClick={() => go(-1)} aria-label={t.gallery.prev} className="grid size-14 place-items-center rounded-full bg-white/12 text-cream">
                <ChevronLeft className="size-7" />
              </button>
              <button type="button" onClick={() => go(1)} aria-label={t.gallery.next} className="grid size-14 place-items-center rounded-full bg-white/12 text-cream">
                <ChevronRight className="size-7" />
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
