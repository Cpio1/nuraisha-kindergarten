import { getSiteMedia } from "@/lib/gallery";
import { SiteShell } from "@/components/SiteShell";

export const dynamic = "force-static";

export default function Home() {
  const media = getSiteMedia();
  return <SiteShell media={media} />;
}
