"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Expand } from "lucide-react";
import { site } from "@/lib/site";
import type { GalleryImage } from "@/lib/gallery";
import { InstagramIcon } from "./BrandIcons";
import { useLang } from "./LanguageProvider";
import { PhotoPlaceholder } from "./SitePhoto";

export function GalleryTile({
  image,
  index,
  onOpen,
  sizes,
  className = "",
}: {
  image: GalleryImage;
  index: number;
  onOpen: (i: number) => void;
  sizes: string;
  className?: string;
}) {
  const { t } = useLang();
  return (
    <motion.button
      type="button"
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onOpen(index)}
      aria-label={`${t.gallery.open}: ${index + 1}`}
      className={`group relative block overflow-hidden bg-mint-soft shadow-soft ring-1 ring-forest/5 ${className}`}
    >
      <Image
        src={image.src}
        alt={`${t.gallery.photoAlt} — ${index + 1}`}
        fill
        sizes={sizes}
        loading="lazy"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-forest/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="absolute right-3 bottom-3 grid size-11 translate-y-2 place-items-center rounded-full bg-white/90 text-forest opacity-0 shadow-soft transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:opacity-100">
        <Expand className="size-5" />
      </span>
    </motion.button>
  );
}

const placeholderTones = ["mint", "lilac", "peach", "lilac", "peach", "mint"] as const;

/** Аккуратные заглушки, пока фотографии не загружены. */
export function GalleryEmpty({ count, tileClass }: { count: number; tileClass: (i: number) => string }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} aria-hidden="true" className={`overflow-hidden ${tileClass(i)}`}>
          <PhotoPlaceholder tone={placeholderTones[i % placeholderTones.length]} />
        </div>
      ))}
    </>
  );
}

export function GalleryEmptyNote({ className = "" }: { className?: string }) {
  const { t } = useLang();
  return (
    <div className={`flex flex-col items-center gap-4 text-center ${className}`}>
      <p className="font-display text-lg font-extrabold">{t.gallery.placeholder}</p>
      <p className="max-w-sm text-[15px] text-forest-soft">{t.gallery.placeholderHint}</p>
      <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="btn-soft">
        <InstagramIcon className="size-5" />@{site.instagram.handle}
      </a>
    </div>
  );
}

export function MoreButton({
  hasMore,
  onClick,
  className = "",
}: {
  hasMore: boolean;
  onClick: () => void;
  className?: string;
}) {
  const { t } = useLang();
  const Icon = hasMore ? ChevronDown : ChevronUp;
  return (
    <button type="button" onClick={onClick} className={`btn-primary group ${className}`} aria-expanded={!hasMore}>
      {hasMore ? t.gallery.more : t.gallery.less}
      <Icon className="size-5 transition-transform group-hover:translate-y-0.5" />
    </button>
  );
}
