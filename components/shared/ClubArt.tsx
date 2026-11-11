import { C, INK } from "./Shapes";

/** Иллюстрация-«шапка» для каждого кружка. Рисует внутри своего контейнера, ничего не выходит наружу. */
export function ClubArt({ club, className = "" }: { club: "speech" | "taekwondo" | "english"; className?: string }) {
  const outline = { fill: "none", stroke: INK, strokeOpacity: 0.5, strokeWidth: 1.4, vectorEffect: "non-scaling-stroke" as const };

  if (club === "speech") {
    return (
      <svg viewBox="0 0 240 140" className={className} aria-hidden="true">
        <path d="M42 22h96a26 26 0 0 1 26 26v24a26 26 0 0 1-26 26H84l-26 22v-22H42a26 26 0 0 1-26-26V48a26 26 0 0 1 26-26Z" fill="#fff" />
        <path d="M42 22h96a26 26 0 0 1 26 26v24a26 26 0 0 1-26 26H84l-26 22v-22H42a26 26 0 0 1-26-26V48a26 26 0 0 1 26-26Z" {...outline} transform="translate(5 5)" />
        <text x="90" y="74" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="800" fontSize="34" fill={C.lilacDeep}>
          А·Ә
        </text>
        <path d="M150 64h52a20 20 0 0 1 20 20v8a20 20 0 0 1-20 20h-2v16l-18-16h-32a20 20 0 0 1-20-20v-8a20 20 0 0 1 20-20Z" fill={C.peach} />
        <g stroke={INK} strokeWidth="4" strokeLinecap="round" opacity=".7">
          <path d="M162 84v8M174 78v20M186 82v12M198 86v4" />
        </g>
        <circle cx="214" cy="30" r="9" fill={C.sun} />
        <circle cx="22" cy="118" r="6" fill={C.peachDeep} />
      </svg>
    );
  }

  if (club === "taekwondo") {
    return (
      <svg viewBox="0 0 240 140" className={className} aria-hidden="true">
        <circle cx="120" cy="72" r="56" fill="#fff" opacity=".9" />
        <circle cx="120" cy="72" r="56" {...outline} transform="translate(5 5)" />
        <rect x="30" y="58" width="180" height="22" rx="11" fill={INK} />
        <rect x="102" y="48" width="36" height="42" rx="12" fill="#3a6a5e" />
        <path d="m110 90-14 40M130 90l14 40" stroke={INK} strokeWidth="14" strokeLinecap="round" />
        <path d="m110 90-14 40M130 90l14 40" stroke="#3a6a5e" strokeWidth="5" strokeLinecap="round" />
        <path d="M206 30l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" fill={C.sun} />
        <path d="M32 22l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill={C.peachDeep} />
        <g stroke={INK} strokeOpacity=".35" strokeWidth="3" strokeLinecap="round">
          <path d="M14 98h18M8 110h22M206 100h20M210 112h16" />
        </g>
      </svg>
    );
  }

  const blocks: [number, number, number, string, string][] = [
    [42, 62, -8, C.lilac, "A"],
    [104, 70, 4, C.peach, "B"],
    [74, 14, -3, "#fff", "C"],
  ];
  return (
    <svg viewBox="0 0 240 140" className={className} aria-hidden="true">
      {blocks.map(([x, y, r, fill, l]) => (
        <g key={l} transform={`rotate(${r} ${x + 30} ${y + 30})`}>
          <rect x={x} y={y} width="60" height="60" rx="14" fill={fill} />
          <rect x={x} y={y} width="60" height="60" rx="14" {...outline} transform="translate(4 4)" />
          <text x={x + 30} y={y + 42} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="800" fontSize="32" fill={INK}>
            {l}
          </text>
        </g>
      ))}
      <path d="M190 40c10-14 30-10 32 4 2 12-12 20-22 14" stroke={C.lilacDeep} strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="196" cy="104" r="12" fill={C.sun} />
      <path d="M190 104h12M196 98v12" stroke={INK} strokeWidth="3" strokeLinecap="round" opacity=".6" />
    </svg>
  );
}
