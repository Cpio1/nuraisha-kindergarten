"use client";

import type { GalleryImage } from "@/lib/gallery";
import { Float, FlowerShape, SparkleShape, StarShape } from "../shared/Decor";
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
    <div className="relative overflow-hidden bg-cream pt-14 pb-32 xl:pt-16 xl:pb-40">
      <Float className="absolute top-28 left-[8%] w-10" delay={0.3}>
        <StarShape color="#DCCDF7" />
      </Float>
      <Float className="absolute top-40 right-[9%] w-12" delay={1}>
        <FlowerShape color="#FFD6B8" />
      </Float>
      <Float className="absolute bottom-48 left-[3%] w-6" delay={1.6} duration={4}>
        <SparkleShape color="#6FC29D" />
      </Float>

      <div className="relative mx-auto max-w-[1240px] px-6 xl:px-10">
        <Reveal>
          <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} lead={t.gallery.lead} squiggle="#F39A62" />
        </Reveal>

        <div className="mt-14 grid auto-rows-[clamp(150px,14vw,210px)] grid-cols-4 gap-4 xl:gap-5 [grid-auto-flow:dense]">
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
              <MoreButton hasMore={g.hasMore} onClick={g.toggle} className="h-14 px-8 text-[17px]" />
            </div>
          )
        )}
      </div>

      <Lightbox images={images} index={g.openIndex} onClose={g.close} onIndex={g.setOpenIndex} />
      <Wave color="var(--color-mint-soft)" variant={1} />
    </div>
  );
}
