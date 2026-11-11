"use client";

import { Clock3, MapPin, Phone } from "lucide-react";
import { phoneHref, site, whatsappHref } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./BrandIcons";
import { useLang } from "./LanguageProvider";
import type { Tone } from "./content";

export type ContactItem = {
  key: string;
  Icon: React.ComponentType<{ className?: string }>;
  tone: Tone;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  muted?: boolean;
};

/** Единый список контактов для обеих версий. Телефон/WhatsApp появятся, когда номер будет указан в lib/site.ts. */
export function useContactItems(): ContactItem[] {
  const { t } = useLang();
  const c = t.contact;
  const items: ContactItem[] = [
    { key: "address", Icon: MapPin, tone: "mint", label: c.addressLabel, value: c.address, href: site.twoGisUrl ?? undefined, external: true },
    { key: "hours", Icon: Clock3, tone: "lilac", label: c.hoursLabel, value: c.hours },
    { key: "instagram", Icon: InstagramIcon, tone: "peach", label: c.instagramLabel, value: `@${site.instagram.handle}`, href: site.instagram.url, external: true },
  ];
  if (site.phone) {
    items.push({ key: "phone", Icon: Phone, tone: "mint", label: c.phoneLabel, value: site.phone, href: phoneHref(site.phone) });
  }
  items.push(
    site.whatsapp
      ? { key: "whatsapp", Icon: WhatsAppIcon, tone: "mint", label: c.whatsappLabel, value: site.whatsapp, href: whatsappHref(site.whatsapp), external: true }
      : { key: "whatsapp", Icon: WhatsAppIcon, tone: "mint", label: c.whatsappLabel, value: c.whatsappSoon, muted: true },
  );
  return items;
}
