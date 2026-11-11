"use client";

import type { GalleryImage } from "@/lib/gallery";
import { Float, StarShape } from "../shared/Decor";
import { GalleryEmpty, GalleryEmptyNote, GalleryTile, MoreButton } from "../shared/GalleryParts";
import { useLang } from "../shared/LanguageProvider";
import { Lightbox } from "../shared/Lightbox";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { Wave } from "../shared/Wave";
import { useGallery } from "../shared/useGallery";

const pattern = [
  "col-span-2 aspect-[16/11] rounded-[32px_32px_32px_10px]",
  "aspect-square rounded-[28px]",
  "aspect-square rounded-full",
  "aspect-[4/5] rounded-[120px_120px_24px_24px]",
  "aspect-[4/5] rounded-[24px_24px_24px_60px]",
];

/** Если последняя плитка осталась без пары — растягиваем её на всю ширину. */
function tileClass(i: number, shown: number) {
  const pos = i % pattern.length;
  if (i === shown - 1 && (pos === 1 || pos === 3)) return "col-span-2 aspect-[16/11] rounded-[32px_32px_10px_32px]";
  return pattern[pos];
}

const INITIAL = 5;
const STEP = 6;

export function MobileGallery({ images }: { images: GalleryImage[] }) {
  const { t } = useLang();
  const g = useGallery(images.length, INITIAL, STEP);
  const empty = images.length === 0;

  return (
    <div className="relative overflow-hidden bg-cream pt-10 pb-24">
      <Float className="absolute top-10 right-6 w-7" delay={0.4}>
        <StarShape color="#DCCDF7" />
      </Float>
      <div className="relative mx-auto max-w-xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} lead={t.gallery.lead} size="sm" squiggle="#F39A62" />
        </Reveal>

        <div className="mt-7 grid grid-cols-2 gap-3">
          {empty ? (
            <GalleryEmpty count={3} tileClass={(i) => pattern[i]} />
          ) : (
            images.slice(0, g.shown).map((img, i) => (
              <GalleryTile
                key={img.src}
                image={img}
                index={i}
                onOpen={g.setOpenIndex}
                sizes={tileClass(i, g.shown).includes("col-span") ? "(max-width: 640px) 100vw, 576px" : "(max-width: 640px) 50vw, 288px"}
                className={`w-full ${tileClass(i, g.shown)}`}
              />
            ))
          )}
        </div>

        {empty ? (
          <GalleryEmptyNote className="mt-8" />
        ) : (
          (g.hasMore || g.canCollapse) && (
            <MoreButton hasMore={g.hasMore} onClick={g.toggle} className="mt-7 h-14 w-full text-[17px]" />
          )
        )}
      </div>
      <Lightbox images={images} index={g.openIndex} onClose={g.close} onIndex={g.setOpenIndex} />
      <Wave color="var(--color-mint-soft)" variant={1} />
    </div>
  );
}
