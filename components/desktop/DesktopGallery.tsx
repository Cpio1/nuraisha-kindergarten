"use client";

import type { GalleryImage } from "@/lib/gallery";
import { C, Confetti, Drop, Flower, Float, Sparkle, Star } from "../shared/Shapes";
import { GalleryEmpty, GalleryEmptyNote, GalleryTile, MoreButton } from "../shared/GalleryParts";
import { useLang } from "../shared/LanguageProvider";
import { Lightbox } from "../shared/Lightbox";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { Wave } from "../shared/Wave";
import { useGallery } from "../shared/useGallery";

/** Ритм «бенто»-сетки: каждая 7-я плитка повторяет рисунок. */
const pattern = [
  "col-span-2 row-span-2 rounded-[44px_44px_44px_14px]",
  "rounded-[28px]",
  "rounded-full",
  "row-span-2 rounded-[140px_140px_28px_28px]",
  "rounded-[14px_28px_28px_28px]",
  "col-span-2 rounded-[28px_28px_60px_28px]",
  "rounded-[28px]",
];

const tailShapes = ["rounded-[28px]", "rounded-[14px_28px_28px_28px]", "rounded-[28px_28px_60px_28px]", "rounded-[28px_14px_28px_28px]"];
const spanFill = ["", "col-span-2", "col-span-3", "col-span-4"];

/** Полные «блоки» по 7 фото идут по бенто-рисунку, хвост — ровными плитками без пустот. */
function tileClass(i: number, shown: number) {
  const full = Math.floor(shown / pattern.length) * pattern.length;
  if (i < full) return pattern[i % pattern.length];
  const k = shown - full;
  const pos = i - full;
  const rem = k % 4;
  const last = pos === k - 1;
  const span = last && rem ? spanFill[4 - rem] : "";
  return `${tailShapes[pos % tailShapes.length]} ${span}`;
}

const INITIAL = 7;
const STEP = 7;

export function DesktopGallery({ images }: { images: GalleryImage[] }) {
  const { t } = useLang();
  const g = useGallery(images.length, INITIAL, STEP);
  const empty = images.length === 0;

  return (
    <div className="relative overflow-hidden bg-cream pt-[clamp(40px,6vw,80px)] pb-[clamp(96px,10vw,150px)]">
      <Float className="absolute top-24 left-[6%] hidden w-10 xl:block" delay={0.3}>
        <Star fill={C.lilac} />
      </Float>
      <Float className="absolute top-32 right-[7%] hidden w-12 xl:block" delay={1}>
        <Flower petals={8} fill={C.peach} />
      </Float>
      <Float className="absolute bottom-40 left-[2.5%] hidden w-8 xl:block" delay={1.6} duration={6}>
        <Drop fill={C.mint} />
      </Float>
      <Float className="absolute right-[3%] bottom-48 hidden w-5 xl:block" delay={0.4} duration={4}>
        <Sparkle fill={C.mintDeep} />
      </Float>

      <div className="relative mx-auto max-w-[1200px] px-8 xl:px-12">
        <Reveal>
          <div className="relative">
            <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} lead={t.gallery.lead} accent={C.peachDeep} petal={C.peach} />
            <Confetti className="absolute top-2 left-[calc(50%+160px)] hidden w-24 lg:block" />
          </div>
        </Reveal>

        <div className="mt-12 grid auto-rows-[clamp(140px,13vw,200px)] grid-cols-4 gap-4 xl:gap-5 [grid-auto-flow:dense]">
          {empty ? (
            <GalleryEmpty count={INITIAL} tileClass={(i) => pattern[i % pattern.length]} />
          ) : (
            images
              .slice(0, g.shown)
              .map((img, i) => (
                <GalleryTile
                  key={img.src}
                  image={img}
                  index={i}
                  onOpen={g.setOpenIndex}
                  sizes={tileClass(i, g.shown).includes("col-span") ? "(min-width: 1280px) 620px, 50vw" : "(min-width: 1280px) 310px, 25vw"}
                  className={`h-full w-full ${tileClass(i, g.shown)}`}
                />
              ))
          )}
        </div>

        {empty ? (
          <Reveal>
            <GalleryEmptyNote className="mt-12" />
          </Reveal>
        ) : (
          (g.hasMore || g.canCollapse) && (
            <div className="mt-12 flex justify-center">
              <MoreButton hasMore={g.hasMore} onClick={g.toggle} className="h-[52px] px-8 text-base" />
            </div>
          )
        )}
      </div>

      <Lightbox images={images} index={g.openIndex} onClose={g.close} onIndex={g.setOpenIndex} />
      <Wave color="var(--color-mint-soft)" variant={1} />
    </div>
  );
}
