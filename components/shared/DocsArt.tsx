import { C, INK } from "./Shapes";

/**
 * Иллюстрация «папка с документами» в стиле сайта: мягкие заливки
 * и смещённый тонкий контур, как у остальных фигурок.
 * Листы без текста — названия документов не придумываем.
 */
export function DocsArt({ className = "" }: { className?: string }) {
  const line = { stroke: INK, strokeOpacity: 0.55, strokeWidth: 2, fill: "none", strokeLinecap: "round" as const };
  return (
    <svg viewBox="0 0 240 200" className={className} aria-hidden="true">
      {/* тень */}
      <ellipse cx="120" cy="186" rx="88" ry="8" fill={INK} opacity=".08" />

      {/* задняя стенка папки */}
      <path d="M30 52a14 14 0 0 1 14-14h46l16 16h90a14 14 0 0 1 14 14v100a14 14 0 0 1-14 14H44a14 14 0 0 1-14-14Z" fill={C.peachDeep} />

      {/* листы */}
      <g transform="rotate(-7 92 90)">
        <rect x="56" y="44" width="92" height="112" rx="12" fill={C.white} />
        <rect x="56" y="44" width="92" height="112" rx="12" {...line} transform="translate(-3 -3)" />
        <rect x="70" y="62" width="44" height="8" rx="4" fill={C.lilac} />
        <rect x="70" y="80" width="62" height="6" rx="3" fill={C.mint} />
        <rect x="70" y="94" width="54" height="6" rx="3" fill={C.mint} />
        <rect x="70" y="108" width="60" height="6" rx="3" fill={C.mint} />
      </g>
      <g transform="rotate(6 150 92)">
        <rect x="104" y="40" width="92" height="112" rx="12" fill={C.cream} />
        <rect x="104" y="40" width="92" height="112" rx="12" {...line} transform="translate(-3 -3)" />
        <rect x="118" y="58" width="40" height="8" rx="4" fill={C.peach} />
        <rect x="118" y="76" width="62" height="6" rx="3" fill={C.lilac} />
        <rect x="118" y="90" width="50" height="6" rx="3" fill={C.lilac} />
        {/* печать-цветок */}
        <circle cx="168" cy="122" r="13" fill={C.sun} />
        <circle cx="168" cy="122" r="5" fill={C.peachDeep} />
      </g>

      {/* передняя стенка */}
      <path d="M22 96a14 14 0 0 1 14-14h168a14 14 0 0 1 14 14l-6 72a14 14 0 0 1-14 13H42a14 14 0 0 1-14-13Z" fill={C.peach} />
      <path d="M22 96a14 14 0 0 1 14-14h168a14 14 0 0 1 14 14l-6 72a14 14 0 0 1-14 13H42a14 14 0 0 1-14-13Z" {...line} transform="translate(-4 -3)" />

      {/* ярлычок */}
      <rect x="92" y="112" width="56" height="30" rx="10" fill={C.white} />
      <path d="M106 127h28" stroke={C.peachDeep} strokeWidth="5" strokeLinecap="round" />

      {/* искорки */}
      <path d="M212 30q2 10 12 12q-10 2-12 12q-2-10-12-12q10-2 12-12Z" fill={C.lilacDeep} />
      <circle cx="24" cy="40" r="5" fill={C.mintDeep} />
    </svg>
  );
}
