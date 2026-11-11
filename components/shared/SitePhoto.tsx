"use client";

import Image from "next/image";
import { useState } from "react";
import { C, Cloud, Flower, Star, maskStyle } from "./Shapes";
import { shapes, type ShapeName } from "./shapePaths";

const shapesOf = (n: ShapeName) => shapes[n];

type Tone = "mint" | "lilac" | "peach";

const tones: Record<Tone, { bg: string; a: string; b: string }> = {
  mint: { bg: "from-mint-soft to-mint", a: C.lilac, b: C.peach },
  lilac: { bg: "from-lilac-soft to-lilac", a: C.mint, b: C.peach },
  peach: { bg: "from-peach-soft to-peach", a: C.mint, b: C.lilac },
};

/** Декоративная заглушка-иллюстрация вместо отсутствующего фото. */
export function PhotoPlaceholder({ tone = "mint", label }: { tone?: Tone; label?: string }) {
  const c = tones[tone];
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br ${c.bg}`}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <div className="dots-bg absolute inset-0 opacity-40" />
      <Cloud className="absolute top-[14%] left-[10%] w-[24%]" />
      <Cloud className="absolute top-[26%] right-[8%] w-[16%] opacity-80" />
      <Star className="absolute top-[10%] right-[30%] w-[10%]" outline={false} />
      <svg viewBox="0 0 200 150" className="relative w-[56%] max-w-[240px]" aria-hidden="true">
        <path d="M100 20 166 66v64H34V66Z" fill={C.cream} />
        <path d="M100 8 180 64a7 7 0 0 1-8 11L100 26 28 75a7 7 0 0 1-8-11Z" fill={c.b} />
        <rect x="86" y="90" width="28" height="40" rx="14" fill={c.a} />
        <circle cx="60" cy="88" r="11" fill={C.sun} />
        <circle cx="140" cy="88" r="11" fill={C.sun} />
        <circle cx="100" cy="58" r="10" fill={c.a} />
        <rect x="16" y="128" width="168" height="8" rx="4" fill="#284C43" opacity=".1" />
      </svg>
      <Flower petals={6} fill={c.b} outline={false} className="absolute bottom-[10%] left-[10%] w-[13%]" />
      <Flower petals={5} fill={c.a} outline={false} className="absolute right-[12%] bottom-[14%] w-[10%]" />
    </div>
  );
}

/**
 * Фото (или заглушка) произвольной формы.
 * `shape` — маска по контуру органической фигуры; иначе форма задаётся классами (border-radius).
 */
export function SitePhoto({
  src,
  alt,
  sizes,
  priority = false,
  tone = "mint",
  shape,
  className = "",
}: {
  src: string | null | undefined;
  alt: string;
  sizes: string;
  priority?: boolean;
  tone?: Tone;
  shape?: ShapeName;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div
      className={`${/\b(absolute|fixed)\b/.test(className) ? "" : "relative "}overflow-hidden ${className}`}
      style={shape ? maskStyle(shape) : undefined}
    >
      {src && !failed ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" onError={() => setFailed(true)} />
      ) : (
        <PhotoPlaceholder tone={tone} label={alt} />
      )}
    </div>
  );
}

/** Фото в форме фигуры + цветная «тень»-подложка и смещённый контур (эффект печатного стикера). */
export function ShapedPhoto({
  shape,
  back,
  className = "",
  ...photo
}: {
  shape: ShapeName;
  back: string;
  className?: string;
  src: string | null | undefined;
  alt: string;
  sizes: string;
  priority?: boolean;
  tone?: Tone;
}) {
  const s = shapesOf(shape);
  const pos = /\b(absolute|fixed)\b/.test(className) ? "" : "relative ";
  return (
    <div className={`${pos}${className}`}>
      <svg
        viewBox={s.viewBox}
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full translate-x-[5%] translate-y-[4%]"
      >
        <path d={s.d} fill={back} />
      </svg>
      <SitePhoto {...photo} shape={shape} className="absolute inset-0" />
      <svg
        viewBox={s.viewBox}
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full -translate-x-[2.5%] -translate-y-[2%]"
      >
        <path d={s.d} fill="none" stroke="#284C43" strokeOpacity=".5" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}
