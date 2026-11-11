"use client";

import { useCallback, useState } from "react";

/** Общая логика галереи: сколько показывать, какая фотография открыта. */
export function useGallery(total: number, initial: number, step: number) {
  const [visible, setVisible] = useState(initial);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shown = Math.min(visible, total);
  const hasMore = shown < total;
  const canCollapse = !hasMore && total > initial;

  const toggle = useCallback(() => {
    setVisible((v) => (v < total ? v + step : initial));
  }, [initial, step, total]);

  const close = useCallback(() => setOpenIndex(null), []);

  return { shown, hasMore, canCollapse, toggle, openIndex, setOpenIndex, close };
}
