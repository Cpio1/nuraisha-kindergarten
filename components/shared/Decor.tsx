"use client";

import { motion, useReducedMotion } from "framer-motion";

type SvgProps = { className?: string; color?: string };

export function StarShape({ className, color = "#FFE08A" }: SvgProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M24 3.5c1.6 0 2.6 4.9 4.6 10 2 1.4 7.3.6 11.6 1.7 1.6.5-1.8 5.4-5 9.6.2 2.6 3.7 7.2 4.8 11.6.3 1.7-5.4-.5-10.3-2.3-2.3 1.2-4.6 6.6-5.7 6.6s-3.4-5.4-5.7-6.6c-4.9 1.8-10.6 4-10.3 2.3 1.1-4.4 4.6-9 4.8-11.6-3.2-4.2-6.6-9.1-5-9.6 4.3-1.1 9.6-.3 11.6-1.7 2-5.1 3-10 4.6-10Z"
        fill={color}
        stroke="#284C43"
        strokeOpacity=".12"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SparkleShape({ className, color = "#9C80E0" }: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M16 1c1 8 7 14 15 15-8 1-14 7-15 15-1-8-7-14-15-15 8-1 14-7 15-15Z" fill={color} />
    </svg>
  );
}

export function CloudShape({ className, color = "#FFFFFF" }: SvgProps) {
  return (
    <svg viewBox="0 0 120 64" className={className} aria-hidden="true">
      <path
        d="M28 60h66c12 0 22-8.5 22-20s-9-19.5-20.5-19.5C92 9 81 2 68 2 54.5 2 43.5 11 41 23 38 21.5 34.5 20.5 30.5 20.5 18 20.5 6 29 6 40.5S15.5 60 28 60Z"
        fill={color}
      />
    </svg>
  );
}

export function FlowerShape({ className, color = "#FFD6B8", center = "#FFE08A" }: SvgProps & { center?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {[0, 72, 144, 216, 288].map((r) => (
        <ellipse key={r} cx="32" cy="16" rx="11" ry="14" fill={color} transform={`rotate(${r} 32 32)`} />
      ))}
      <circle cx="32" cy="32" r="9" fill={center} />
      <circle cx="29" cy="29.5" r="2.4" fill="#fff" opacity=".7" />
    </svg>
  );
}

export function HeartShape({ className, color = "#F39A62" }: SvgProps) {
  return (
    <svg viewBox="0 0 40 36" className={className} aria-hidden="true">
      <path d="M20 35S2 24.4 2 12.3C2 6 6.7 1.8 12.1 1.8c3.6 0 6.3 2 7.9 4.6 1.6-2.6 4.3-4.6 7.9-4.6C33.3 1.8 38 6 38 12.3 38 24.4 20 35 20 35Z" fill={color} />
    </svg>
  );
}

export function SunShape({ className, color = "#FFE08A" }: SvgProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <g fill={color}>
        {Array.from({ length: 12 }).map((_, i) => (
          <rect key={i} x="46" y="2" width="8" height="18" rx="4" transform={`rotate(${i * 30} 50 50)`} />
        ))}
      </g>
      <circle cx="50" cy="50" r="26" fill={color} />
      <circle cx="42" cy="47" r="2.6" fill="#284C43" />
      <circle cx="58" cy="47" r="2.6" fill="#284C43" />
      <path d="M42 56c4.5 4.5 11.5 4.5 16 0" stroke="#284C43" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="37" cy="55" r="3.5" fill="#F39A62" opacity=".45" />
      <circle cx="63" cy="55" r="3.5" fill="#F39A62" opacity=".45" />
    </svg>
  );
}

export function SquiggleShape({ className, color = "#9C80E0" }: SvgProps) {
  return (
    <svg viewBox="0 0 120 24" className={className} aria-hidden="true" fill="none">
      <path
        d="M3 12c9-12 18-12 27 0s18 12 27 0 18-12 27 0 18 12 27 0"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function RainbowShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 64" className={className} aria-hidden="true" fill="none" strokeLinecap="round">
      <path d="M10 60a50 50 0 0 1 100 0" stroke="#FFD6B8" strokeWidth="12" />
      <path d="M24 60a36 36 0 0 1 72 0" stroke="#DCCDF7" strokeWidth="12" />
      <path d="M38 60a22 22 0 0 1 44 0" stroke="#B8E5D0" strokeWidth="12" />
    </svg>
  );
}

export function LeafShape({ className, color = "#6FC29D" }: SvgProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path d="M6 42C6 20 20 6 42 6c0 22-14 36-36 36Z" fill={color} />
      <path d="M8 40 34 14" stroke="#fff" strokeOpacity=".6" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/** Органическая «капля» — фон для иконок и фото. */
export function BlobShape({
  className,
  color = "#B8E5D0",
  variant = 0,
}: SvgProps & { variant?: 0 | 1 | 2 }) {
  const paths = [
    "M43.1-58.7C55.6-50.1 64.6-36.2 68.6-20.9 72.6-5.7 71.6 10.9 64.6 24.2 57.6 37.5 44.6 47.5 30.4 55.4 16.2 63.3.8 69.1-14.9 67.6-30.6 66.1-46.6 57.3-57.8 44.3-69 31.3-75.4 14.1-73.3-1.6-71.2-17.3-60.6-31.5-48-40.7-35.4-49.9-20.8-54.1-5.7-57.6 9.4-61.1 30.6-67.3 43.1-58.7Z",
    "M51.4-63.6C64.9-50.8 73.2-33.1 74.4-15.6 75.6 1.9 69.7 19.2 59.6 33.3 49.5 47.4 35.2 58.3 18.6 64.6 2 70.9-16.9 72.6-32.4 65.8-47.9 59-60 43.7-66.8 26.7-73.6 9.7-75.1-9 -68.5-24.4-61.9-39.8-47.2-51.9-31.6-64.2-16-76.5.5-89 16.2-87.9 31.9-86.8 37.9-76.4 51.4-63.6Z",
    "M39.5-49.9C50.3-38.7 57.8-25.4 61.7-10.4 65.6 4.6 65.9 21.3 58.2 33.4 50.5 45.5 34.8 53 18.9 58.1 3 63.2-13.1 65.9-27.6 60.8-42.1 55.7-55 42.8-61.6 27.4-68.2 12-68.5-5.9-62.3-20.6-56.1-35.3-43.4-46.8-29.7-57.4-16-68 -1.3-77.7 12.1-75.6 25.5-73.5 28.7-61.1 39.5-49.9Z",
  ];
  return (
    <svg viewBox="-80 -90 160 165" className={className} aria-hidden="true">
      <path d={paths[variant]} fill={color} />
    </svg>
  );
}

/** Мягкое «парение» декоративного элемента. Отключается при prefers-reduced-motion. */
export function Float({
  children,
  className,
  delay = 0,
  duration = 6,
  y = 10,
  rotate = 6,
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
