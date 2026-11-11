import fs from "node:fs";
import path from "node:path";

export type GalleryImage = { src: string; name: string };

const PATTERN = /^(main-page(\d*)|image(\d+))\.(jpe?g|png|webp|avif)$/i;

/**
 * Читает /public/images во время сборки и возвращает только реально
 * существующие файлы: main-page, main-page2, ..., image1, image2, ...
 * Порядок: сначала main-page*, затем image* по возрастанию номера.
 */
export function getGalleryImages(): GalleryImage[] {
  const dir = path.join(process.cwd(), "public", "images");
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }

  const seen = new Set<string>();
  return files
    .map((file) => {
      const m = file.match(PATTERN);
      if (!m) return null;
      const isMain = m[1].toLowerCase().startsWith("main-page");
      const num = Number(isMain ? m[2] || 1 : m[3]);
      const name = m[1].toLowerCase();
      return { file, name, rank: (isMain ? 0 : 1_000) + num };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null)
    .sort((a, b) => a.rank - b.rank || a.file.localeCompare(b.file))
    // если есть image1.jpg и image1.webp — берём один
    .filter((x) => (seen.has(x.name) ? false : (seen.add(x.name), true)))
    .map((x) => ({ src: `/images/${encodeURIComponent(x.file)}`, name: x.name }));
}

export function getHeroImages(images: GalleryImage[]) {
  const main = images.find((i) => i.name === "main-page") ?? images[0] ?? null;
  const second =
    images.find((i) => i.name === "main-page2") ??
    images.find((i) => i !== main) ??
    null;
  return { main, second };
}
