"use client";

import type { GalleryImage } from "@/lib/gallery";
import { DesktopAbout } from "./desktop/DesktopAbout";
import { DesktopClubs } from "./desktop/DesktopClubs";
import { DesktopContact } from "./desktop/DesktopContact";
import { DesktopGallery } from "./desktop/DesktopGallery";
import { DesktopHeader } from "./desktop/DesktopHeader";
import { DesktopHero } from "./desktop/DesktopHero";
import { DesktopMeals } from "./desktop/DesktopMeals";
import { MobileAbout } from "./mobile/MobileAbout";
import { MobileClubs } from "./mobile/MobileClubs";
import { MobileContact } from "./mobile/MobileContact";
import { MobileGallery } from "./mobile/MobileGallery";
import { MobileHeader } from "./mobile/MobileHeader";
import { MobileHero } from "./mobile/MobileHero";
import { MobileMeals } from "./mobile/MobileMeals";
import { Footer } from "./shared/Footer";
import { LanguageProvider, useLang } from "./shared/LanguageProvider";
import { Section } from "./shared/Section";

type Props = {
  images: GalleryImage[];
  hero: { main: GalleryImage | null; second: GalleryImage | null };
};

export function SiteShell(props: Props) {
  return (
    <LanguageProvider>
      <Page {...props} />
    </LanguageProvider>
  );
}

function Page({ images, hero }: Props) {
  const { t } = useLang();
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:font-bold focus:text-cream"
      >
        {t.skip}
      </a>
      <DesktopHeader />
      <MobileHeader />
      <main id="main" className="relative overflow-x-clip">
        <Section id="home" label={t.nav.home} desktop={<DesktopHero {...hero} />} mobile={<MobileHero {...hero} />} />
        <Section id="about" label={t.nav.about} desktop={<DesktopAbout />} mobile={<MobileAbout />} />
        <Section id="clubs" label={t.nav.clubs} desktop={<DesktopClubs />} mobile={<MobileClubs />} />
        <Section id="meals" label={t.nav.meals} desktop={<DesktopMeals />} mobile={<MobileMeals />} />
        <Section
          id="gallery"
          label={t.nav.gallery}
          desktop={<DesktopGallery images={images} />}
          mobile={<MobileGallery images={images} />}
        />
        <Section id="contact" label={t.nav.contact} desktop={<DesktopContact />} mobile={<MobileContact />} />
      </main>
      <Footer />
    </>
  );
}
