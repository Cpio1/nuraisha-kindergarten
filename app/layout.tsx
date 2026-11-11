import type { Metadata, Viewport } from "next";
import { M_PLUS_Rounded_1c, Onest } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

/** Заголовки: мягкий округлый гротеск с полной поддержкой казахских букв. */
const display = M_PLUS_Rounded_1c({
  weight: ["500", "700", "800"],
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-display-src",
  display: "swap",
});

/** Основной текст: чистый современный sans (ә ғ қ ң ө ұ ү һ і). */
const body = Onest({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-body-src",
  display: "swap",
});

const title = "«Нұрайша» бөбекжай-балабақшасы — Қойшыбек ауылы";
const description =
  "«Нұрайша» жеке бөбекжай-балабақшасы: 3–5 жастағы балаларға арналған 2 топ, қазақ тілінде оқыту, күніне 4 мезгіл ас, логопед, таэквондо және ағылшын тілі. Дүйсенбі–жұма, 07:30–18:00. Еңбекшіқазақ ауданы, Қойшыбек ауылы, Қонаев көшесі, 4А.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  applicationName: "Нұрайша",
  keywords: [
    "Нұрайша",
    "балабақша",
    "бөбекжай",
    "Қойшыбек",
    "Еңбекшіқазақ ауданы",
    "детский сад",
    "Койшыбек",
    "частный детский сад",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "kk_KZ",
    alternateLocale: ["ru_RU"],
    url: "/",
    siteName: "«Нұрайша» бөбекжай-балабақшасы",
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FFF9EF",
  colorScheme: "only light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ChildCare",
  name: "ЖШС «Нұрайша» бөбекжай-балабақшасы",
  url: site.url,
  sameAs: [site.instagram.url],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Қонаев көшесі, 4А",
    addressLocality: "Қойшыбек ауылы",
    addressRegion: "Алматы облысы, Еңбекшіқазақ ауданы",
    addressCountry: "KZ",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:30",
    closes: "18:00",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kk" className={`${display.variable} ${body.variable}`} style={{ colorScheme: "light" }}>
      <head>
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light" />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
