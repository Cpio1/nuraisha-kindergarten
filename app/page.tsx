import { getGalleryImages, getHeroImages } from "@/lib/gallery";
import { SiteShell } from "@/components/SiteShell";

export const dynamic = "force-static";

export default function Home() {
  const images = getGalleryImages();
  const hero = getHeroImages(images);
  return <SiteShell images={images} hero={hero} />;
}
