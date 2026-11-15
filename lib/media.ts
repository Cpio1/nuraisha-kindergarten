/** Типы и хелперы медиа — без node-зависимостей, можно импортировать в клиентских компонентах. */

export type MediaKind = "image" | "video";

export type GalleryImage = {
  src: string;
  name: string;
  kind: MediaKind;
  /** Реальные размеры файла (для сохранения пропорций). */
  width: number;
  height: number;
};

export type SiteMedia = {
  /** main-page — главный экран. */
  hero: GalleryImage | null;
  /** main-page2 — раздел «Біз туралы» (только если файл есть). */
  about: GalleryImage | null;
  /** Все остальные фото/видео — галерея, без повторов. */
  gallery: GalleryImage[];
};

export const isPortrait = (m: GalleryImage) => m.height > m.width * 1.05;
export const isLandscape = (m: GalleryImage) => m.width > m.height * 1.05;

export type Fit = "landscape" | "portrait" | "any";

/**
 * Раскладывает фото по слотам сетки так, чтобы вертикальные снимки попадали
 * в высокие плитки, а горизонтальные — в широкие (меньше обрезки).
 * Каждое фото используется ровно один раз.
 */
export function arrangeByFit(items: GalleryImage[], fits: readonly Fit[]): GalleryImage[] {
  const queue = [...items];
  const out: GalleryImage[] = [];
  for (let i = 0; queue.length; i++) {
    const fit = fits[i % fits.length];
    const test = fit === "portrait" ? isPortrait : fit === "landscape" ? (m: GalleryImage) => !isPortrait(m) : null;
    let k = test ? queue.findIndex(test) : 0;
    if (k < 0) k = 0;
    out.push(queue.splice(k, 1)[0]);
  }
  return out;
}
