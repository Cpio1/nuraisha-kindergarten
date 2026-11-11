"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";
import { shapes, type ShapeName } from "./shapePaths";

export const INK = "#284C43";

/** Палитра декора: цвета сайта + пара тёплых акцентов. */
export const C = {
  mint: "#B8E5D0",
  mintDeep: "#6FC29D",
  lilac: "#DCCDF7",
  lilacDeep: "#9C80E0",
  peach: "#FFD6B8",
  peachDeep: "#F39A62",
  sun: "#FFE08A",
  cream: "#FFF9EF",
  white: "#FFFFFF",
} as const;

function padBox(viewBox: string, pad: number) {
  const [x, y, w, h] = viewBox.split(" ").map(Number);
  return `${x - pad} ${y - pad} ${w + pad * 2} ${h + pad * 2}`;
}

type ShapeProps = {
  name: ShapeName;
  fill?: string;
  /** Смещённый тонкий контур — фирменный «печатный» приём. */
  outline?: boolean;
  className?: string;
  style?: CSSProperties;
  /** Растянуть фигуру по размеру контейнера (для подложек). */
  stretch?: boolean;
  children?: React.ReactNode;
};

/** Базовая фигура-стикер: заливка + слегка смещённый контур. */
export function Shape({ name, fill = C.mint, outline = true, className, style, stretch = false, children }: ShapeProps) {
  const s = shapes[name];
  return (
    <svg
      viewBox={padBox(s.viewBox, outline ? 6 : 1)}
      preserveAspectRatio={stretch ? "none" : undefined}
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <path d={s.d} fill={fill} />
      {outline && (
        <path
          d={s.d}
          fill="none"
          stroke={INK}
          strokeOpacity=".55"
          strokeWidth="1.4"
          vectorEffect="non-scaling-stroke"
          transform="translate(4 4)"
        />
      )}
      {children}
    </svg>
  );
}

export function Flower({
  petals = 6,
  fill = C.lilac,
  center = C.sun,
  className,
  outline = true,
}: {
  petals?: 5 | 6 | 8;
  fill?: string;
  center?: string;
  className?: string;
  outline?: boolean;
}) {
  return (
    <Shape name={`flower${petals}`} fill={fill} outline={outline} className={className}>
      <circle cx="50" cy="50" r={petals === 8 ? 14 : 13} fill={center} />
      <circle cx="46" cy="46" r="3.6" fill="#fff" opacity=".75" />
    </Shape>
  );
}

export function Star({ fill = C.sun, className, outline = true }: { fill?: string; className?: string; outline?: boolean }) {
  return <Shape name="star" fill={fill} outline={outline} className={className} />;
}

export function Sparkle({ fill = C.lilacDeep, className }: { fill?: string; className?: string }) {
  return <Shape name="sparkle" fill={fill} outline={false} className={className} />;
}

export function Cloud({ fill = "#fff", className, outline = false }: { fill?: string; className?: string; outline?: boolean }) {
  return <Shape name="cloud" fill={fill} outline={outline} className={className} />;
}

export function Heart({ fill = C.peachDeep, className }: { fill?: string; className?: string }) {
  return <Shape name="heart" fill={fill} outline={false} className={className} />;
}

export function Leaf({ fill = C.mintDeep, className }: { fill?: string; className?: string }) {
  return (
    <Shape name="leaf" fill={fill} outline={false} className={className}>
      <path d="M14 86 70 30" stroke="#fff" strokeOpacity=".65" strokeWidth="4" strokeLinecap="round" />
    </Shape>
  );
}

export function Drop({ fill = C.mint, className }: { fill?: string; className?: string }) {
  return (
    <Shape name="drop" fill={fill} className={className}>
      <ellipse cx="38" cy="58" rx="6" ry="10" fill="#fff" opacity=".55" transform="rotate(20 38 58)" />
    </Shape>
  );
}

/** Солнышко-«ракушка» с лицом. */
export function Sun({ className }: { className?: string }) {
  return (
    <Shape name="scallop" fill={C.sun} className={className}>
      <circle cx="40" cy="47" r="3.4" fill={INK} />
      <circle cx="60" cy="47" r="3.4" fill={INK} />
      <path d="M41 57q9 8 18 0" stroke={INK} strokeWidth="3.4" fill="none" strokeLinecap="round" />
      <circle cx="33" cy="57" r="4.5" fill={C.peachDeep} opacity=".35" />
      <circle cx="67" cy="57" r="4.5" fill={C.peachDeep} opacity=".35" />
    </Shape>
  );
}

/** Полукруг в полоску. */
export function HalfCircle({ className, fill = C.peach, stripe = "#fff" }: { className?: string; fill?: string; stripe?: string }) {
  return (
    <Shape name="half" fill={fill} className={className}>
      <path d="M22 50a28 28 0 0 1 56 0" stroke={stripe} strokeWidth="5" fill="none" strokeLinecap="round" opacity=".8" />
      <path d="M38 50a12 12 0 0 1 24 0" stroke={stripe} strokeWidth="5" fill="none" strokeLinecap="round" opacity=".8" />
    </Shape>
  );
}

/** Дуги-радуга, без заливки. */
export function Rainbow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 66" className={className} aria-hidden="true" fill="none" strokeLinecap="round">
      <path d="M10 62a50 50 0 0 1 100 0" stroke={C.peach} strokeWidth="11" />
      <path d="M25 62a35 35 0 0 1 70 0" stroke={C.lilac} strokeWidth="11" />
      <path d="M40 62a20 20 0 0 1 40 0" stroke={C.mint} strokeWidth="11" />
      <path d="M14 62a46 46 0 0 1 92 0" stroke={INK} strokeOpacity=".45" strokeWidth="1.2" transform="translate(3 3)" />
    </svg>
  );
}

export function Squiggle({ className, color = C.lilacDeep, width = 5 }: { className?: string; color?: string; width?: number }) {
  return (
    <svg viewBox="0 0 120 24" className={className} aria-hidden="true" fill="none">
      <path d="M3 12c9-12 18-12 27 0s18 12 27 0 18-12 27 0 18 12 27 0" stroke={color} strokeWidth={width} strokeLinecap="round" />
    </svg>
  );
}

/** Каракуля-петля. */
export function Loop({ className, color = INK }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 120 60" className={className} aria-hidden="true" fill="none">
      <path
        d="M4 44c18 4 30-6 36-18 5-11-6-19-13-10-8 11 6 26 24 24 19-2 26-22 40-24 10-1 18 6 24 14"
        stroke={color}
        strokeOpacity=".55"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeDasharray="1 7"
      />
    </svg>
  );
}

/** Пунктирное кольцо-орбита. */
export function DotRing({ className, color = INK }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" fill="none">
      <circle cx="50" cy="50" r="47" stroke={color} strokeOpacity=".3" strokeWidth="1.6" strokeDasharray="1 8" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/** Россыпь цветных точек-конфетти. */
export function Confetti({ className }: { className?: string }) {
  const dots: [number, number, number, string][] = [
    [10, 20, 5, C.peachDeep],
    [34, 8, 4, C.lilacDeep],
    [52, 26, 6, C.mintDeep],
    [76, 12, 4, C.sun],
    [88, 34, 5, C.lilacDeep],
    [22, 40, 3.5, C.sun],
    [64, 44, 4, C.peachDeep],
  ];
  return (
    <svg viewBox="0 0 100 52" className={className} aria-hidden="true">
      {dots.map(([x, y, r, c], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill={c} />
      ))}
    </svg>
  );
}

/** CSS-маска по контуру фигуры — для фото необычной формы (iOS Safari и Chrome). */
export function maskStyle(name: ShapeName): CSSProperties {
  const s = shapes[name];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${s.viewBox}" preserveAspectRatio="none"><path d="${s.d}"/></svg>`;
  const url = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  return {
    WebkitMaskImage: url,
    maskImage: url,
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
  };
}

/** Мягкое «парение» декоративного элемента. Отключается при prefers-reduced-motion. */
export function Float({
  children,
  className,
  delay = 0,
  duration = 7,
  y = 8,
  rotate = 5,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  rotate?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div className={className} aria-hidden="true">
        {children}
      </div>
    );
  }
  return (
    <motion.div
      aria-hidden="true"
      className={className}
      animate={{ y: [0, -y, 0], rotate: [0, rotate, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

/** Медленное вращение (солнце, цветы). */
export function Spin({ children, className, duration = 40 }: { children: React.ReactNode; className?: string; duration?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className} aria-hidden="true">{children}</div>;
  return (
    <motion.div
      aria-hidden="true"
      className={className}
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </motion.div>
  );
}
