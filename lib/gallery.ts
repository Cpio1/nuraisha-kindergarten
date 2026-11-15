import fs from "node:fs";
import path from "node:path";

import type { GalleryImage, MediaKind, SiteMedia } from "./media";

export type { GalleryImage, MediaKind, SiteMedia } from "./media";

const IMAGE_EXT = /\.(jpe?g|png|webp|avif)$/i;
const VIDEO_EXT = /\.(mp4|webm|mov|m4v)$/i;

/* ——— размеры изображений без внешних зависимостей ——— */

function jpegSize(b: Buffer): [number, number] | null {
  let i = 2;
  let orientation = 1;
  while (i + 9 < b.length) {
    if (b[i] !== 0xff) {
      i++;
      continue;
    }
    const marker = b[i + 1];
    const len = b.readUInt16BE(i + 2);
    // APP1 / EXIF — учитываем поворот (orientation 5–8 меняет местами стороны)
    if (marker === 0xe1 && b.toString("ascii", i + 4, i + 8) === "Exif") {
      const t = i + 10;
      const le = b.toString("ascii", t, t + 2) === "II";
      const u16 = (o: number) => (le ? b.readUInt16LE(o) : b.readUInt16BE(o));
      const u32 = (o: number) => (le ? b.readUInt32LE(o) : b.readUInt32BE(o));
      try {
        const ifd = t + u32(t + 4);
        const n = u16(ifd);
        for (let k = 0; k < n; k++) {
          const e = ifd + 2 + k * 12;
          if (u16(e) === 0x0112) orientation = u16(e + 8);
        }
      } catch {
        /* битый EXIF — игнорируем */
      }
    }
    const isSOF = marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
    if (isSOF) {
      const h = b.readUInt16BE(i + 5);
      const w = b.readUInt16BE(i + 7);
      return orientation >= 5 && orientation <= 8 ? [h, w] : [w, h];
    }
    i += 2 + len;
  }
  return null;
}

function imageSize(file: string): [number, number] | null {
  let b: Buffer;
  try {
    b = fs.readFileSync(file);
  } catch {
    return null;
  }
  try {
    // PNG
    if (b.length > 24 && b.readUInt32BE(0) === 0x89504e47) return [b.readUInt32BE(16), b.readUInt32BE(20)];
    // JPEG
    if (b[0] === 0xff && b[1] === 0xd8) return jpegSize(b);
    // WebP
    if (b.toString("ascii", 0, 4) === "RIFF" && b.toString("ascii", 8, 12) === "WEBP") {
      const chunk = b.toString("ascii", 12, 16);
      if (chunk === "VP8 ") return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
      if (chunk === "VP8L") {
        const bits = b.readUInt32LE(21);
        return [(bits & 0x3fff) + 1, ((bits >> 14) & 0x3fff) + 1];
      }
      if (chunk === "VP8X") return [b.readUIntLE(24, 3) + 1, b.readUIntLE(27, 3) + 1];
    }
  } catch {
    return null;
  }
  return null;
}

/* ——— сбор файлов ——— */

const collator = new Intl.Collator("en", { numeric: true, sensitivity: "base" });

/**
 * Читает /public/images во время сборки и возвращает только реально
 * существующие файлы (PNG, JPG, JPEG, WebP, AVIF, MP4, WebM, MOV).
 * main-page → главный экран, main-page2 → «Біз туралы», остальное → галерея.
 * Один и тот же снимок в разных форматах (image1.jpg + image1.webp) берётся один раз.
 */
export function getSiteMedia(): SiteMedia {
  const dir = path.join(process.cwd(), "public", "images");
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return { hero: null, about: null, gallery: [] };
  }

  const seen = new Set<string>();
  const media: GalleryImage[] = [];

  for (const file of [...files].sort(collator.compare)) {
    if (file.startsWith(".")) continue;
    const kind: MediaKind | null = IMAGE_EXT.test(file) ? "image" : VIDEO_EXT.test(file) ? "video" : null;
    if (!kind) continue;

    const name = file.replace(/\.[^.]+$/, "").toLowerCase();
    if (seen.has(name)) continue;

    const full = path.join(dir, file);
    let size: [number, number] | null = [16, 9];
    if (kind === "image") {
      size = imageSize(full);
      if (!size || !size[0] || !size[1]) continue; // битый файл не выводим
    } else if (!fs.statSync(full).size) {
      continue;
    }

    seen.add(name);
    media.push({ src: `/images/${encodeURIComponent(file)}`, name, kind, width: size[0], height: size[1] });
  }

  const main = (n: string) => media.find((m) => m.kind === "image" && m.name === n) ?? null;
  const hero = main("main-page");
  const about = main("main-page2");
  // main-page / main-page2 уже стоят на своих местах — в галерее их не повторяем
  const gallery = media.filter((m) => m !== hero && m !== about);

  return { hero, about, gallery };
}
