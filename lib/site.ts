/**
 * Негізгі байланыс деректері / Основные контактные данные.
 *
 * Телефон и WhatsApp пока не предоставлены. Чтобы включить их, достаточно
 * вписать номер в формате "+77001234567" — кнопки появятся автоматически.
 *
 * Ссылка на 2GIS: вставьте проверенную ссылку на карточку объекта
 * (например "https://2gis.kz/almaty/firm/...") и, при наличии, ссылку
 * для встраивания карты (виджет 2GIS) в `twoGisEmbedUrl`.
 */
export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nuraisha.vercel.app",
  instagram: {
    handle: "nuraisha_balabakshasy",
    url: "https://www.instagram.com/nuraisha_balabakshasy/",
  },
  /** Телефон для звонков, например "+77001234567". */
  phone: null as string | null,
  /** Номер WhatsApp, например "+77001234567". */
  whatsapp: null as string | null,
  /** Проверенная ссылка на карточку объекта в 2GIS. */
  twoGisUrl: null as string | null,
  /** Ссылка для встраивания карты 2GIS (iframe). */
  twoGisEmbedUrl: null as string | null,
  hours: "07:30–18:00",
  ages: "3–5",
  groups: 2,
} as const;

export function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function whatsappHref(phone: string) {
  return `https://wa.me/${phone.replace(/\D/g, "")}`;
}

export type NavId = "home" | "about" | "clubs" | "meals" | "gallery" | "contact";

export const navIds: NavId[] = ["home", "about", "clubs", "meals", "gallery", "contact"];
