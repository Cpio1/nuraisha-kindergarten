"use client";

import Image from "next/image";
import { useState } from "react";
import { CloudShape, FlowerShape, StarShape } from "./Decor";

type Tone = "mint" | "lilac" | "peach";

const tones: Record<Tone, { bg: string; a: string; b: string }> = {
  mint: { bg: "from-mint-soft to-mint", a: "#DCCDF7", b: "#FFD6B8" },
  lilac: { bg: "from-lilac-soft to-lilac", a: "#B8E5D0", b: "#FFD6B8" },
  peach: { bg: "from-peach-soft to-peach", a: "#B8E5D0", b: "#DCCDF7" },
};

/** Декоративная заглушка: маленький «садик» вместо отсутствующего фото. */
export function PhotoPlaceholder({
  tone = "mint",
  label,
  className = "",
  small = false,
}: {
  tone?: Tone;
  label?: string;
  className?: string;
  small?: boolean;
}) {
  const c = tones[tone];
  return (
    <div
      className={`relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br ${c.bg} ${className}`}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <div className="dots-bg absolute inset-0 opacity-50" />
      <CloudShape className="absolute top-[12%] left-[8%] w-[26%] opacity-90" />
      <CloudShape className="absolute top-[22%] right-[6%] w-[18%] opacity-70" />
      <StarShape className="absolute top-[8%] right-[30%] w-[9%]" />
      <svg viewBox="0 0 200 150" className={`relative ${small ? "w-[62%]" : "w-[58%]"} max-w-[260px]`}>
        <path d="M100 18 166 66v66H34V66Z" fill="#FFF9EF" />
        <path d="M100 8 178 66a6 6 0 0 1-7 9L100 26 29 75a6 6 0 0 1-7-9Z" fill={c.b} />
        <rect x="86" y="92" width="28" height="40" rx="14" fill={c.a} />
        <circle cx="62" cy="88" r="11" fill="#FFE08A" />
        <circle cx="138" cy="88" r="11" fill="#FFE08A" />
        <circle cx="100" cy="58" r="10" fill={c.a} />
        <rect x="18" y="130" width="164" height="8" rx="4" fill="#284C43" opacity=".12" />
      </svg>
      <FlowerShape className="absolute bottom-[10%] left-[10%] w-[12%]" color={c.b} />
      <FlowerShape className="absolute right-[12%] bottom-[14%] w-[9%]" color={c.a} />
      {label && !small && (
        <span className="relative mt-4 rounded-full bg-white/80 px-4 py-1.5 text-sm font-bold text-forest-soft">
          {label}
        </span>
      )}
    </div>
  );
}

/** Фото, которое при ошибке загрузки аккуратно заменяется заглушкой. */
export function SitePhoto({
  src,
  alt,
  sizes,
  priority = false,
  tone = "mint",
  className = "",
  imgClassName = "",
}: {
  src: string | null | undefined;
  alt: string;
  sizes: string;
  priority?: boolean;
  tone?: Tone;
  className?: string;
  imgClassName?: string;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {src && !failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${imgClassName}`}
          onError={() => setFailed(true)}
        />
      ) : (
        <PhotoPlaceholder tone={tone} label={alt} small />
      )}
    </div>
  );
}
