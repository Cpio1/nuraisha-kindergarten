import { C, INK } from "./Shapes";

const SKIN = "#F6CDA8";

/** Музыкальная нота (одиночная или двойная). */
function Note({ x, y, fill, double = false }: { x: number; y: number; fill: string; double?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {double ? (
        <>
          <path d="M10 0V-22l16-5v22" stroke={INK} strokeWidth="3" fill="none" strokeLinejoin="round" />
          <circle cx="6" cy="0" r="5.5" fill={fill} />
          <circle cx="22" cy="-5" r="5.5" fill={fill} />
        </>
      ) : (
        <>
          <path d="M10 0V-22q7 2 10 10" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="6" cy="0" r="5.5" fill={fill} />
        </>
      )}
    </g>
  );
}

/** Конечность с тонким контуром: тёмная обводка + заливка поверх. */
function Limb({ d, fill, w = 11 }: { d: string; fill: string; w?: number }) {
  return (
    <>
      <path d={d} stroke={INK} strokeWidth={w + 4} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d={d} stroke={fill} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  );
}

/** Иллюстрация-«шапка» для каждого кружка. Рисует внутри своего контейнера, ничего не выходит наружу. */
export function ClubArt({ club, className = "" }: { club: "dance" | "taekwondo"; className?: string }) {
  const outline = { fill: "none", stroke: INK, strokeOpacity: 0.5, strokeWidth: 1.4, vectorEffect: "non-scaling-stroke" as const };

  if (club === "dance") {
    return (
      <svg viewBox="0 0 240 140" className={className} aria-hidden="true">
        <circle cx="120" cy="72" r="56" fill="#fff" opacity=".9" />
        <circle cx="120" cy="72" r="56" {...outline} transform="translate(5 5)" />
        <ellipse cx="120" cy="129" rx="40" ry="5" fill={INK} opacity=".12" />

        {/* лента */}
        <path d="M151 27c20-14 42 0 32 18s-34 12-24 32 36 12 44 0" stroke={C.peachDeep} strokeWidth="5" fill="none" strokeLinecap="round" />

        {/* ноги */}
        <Limb d="M114 98l-5 24" fill={SKIN} w={7} />
        <Limb d="M126 98l9 22" fill={SKIN} w={7} />
        <ellipse cx="107" cy="124" rx="7" ry="4" fill={INK} />
        <ellipse cx="138" cy="122" rx="7" ry="4" fill={INK} transform="rotate(-20 138 122)" />

        {/* руки вверх */}
        <Limb d="M113 62Q100 50 90 32" fill={SKIN} w={6} />
        <Limb d="M127 62Q140 48 150 28" fill={SKIN} w={6} />

        {/* платье */}
        <path d="M111 57h18l3 19h-24z" fill={C.lilacDeep} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
        <path d="M107 74h26l18 25q-31 9-62 0z" fill={C.lilacDeep} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
        <g fill="#fff" opacity=".85">
          <circle cx="104" cy="92" r="2.5" />
          <circle cx="120" cy="86" r="2.5" />
          <circle cx="136" cy="92" r="2.5" />
          <circle cx="112" cy="98" r="2" />
          <circle cx="128" cy="98" r="2" />
        </g>

        {/* голова */}
        <circle cx="120" cy="27" r="6.5" fill={INK} />
        <circle cx="120" cy="44" r="12.5" fill={SKIN} stroke={INK} strokeWidth="2" />
        <path d="M107.6 43a12.5 12.5 0 0 1 24.8 0q-12.4-8-24.8 0Z" fill={INK} />
        <circle cx="115.5" cy="46" r="1.6" fill={INK} />
        <circle cx="124.5" cy="46" r="1.6" fill={INK} />
        <path d="M116 50.5q4 3 8 0" stroke={INK} strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <circle cx="111.5" cy="49.5" r="2.2" fill={C.peachDeep} opacity=".55" />
        <circle cx="128.5" cy="49.5" r="2.2" fill={C.peachDeep} opacity=".55" />

        {/* ноты и искры */}
        <Note x={36} y={58} fill={C.lilacDeep} double />
        <Note x={192} y={120} fill={C.peachDeep} />
        <path d="M58 104l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill={C.sun} />
        <path d="M206 18l3 6 6 3-6 3-3 6-3-6-6-3 6-3z" fill={C.lilacDeep} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 240 140" className={className} aria-hidden="true">
      <circle cx="120" cy="72" r="56" fill="#fff" opacity=".9" />
      <circle cx="120" cy="72" r="56" {...outline} transform="translate(5 5)" />
      <ellipse cx="108" cy="129" rx="34" ry="5" fill={INK} opacity=".12" />

      {/* лапа-мишень */}
      <g transform="rotate(12 206 52)">
        <rect x="194" y="30" width="24" height="44" rx="11" fill={C.peach} />
        <rect x="194" y="30" width="24" height="44" rx="11" {...outline} transform="translate(3 3)" />
        <circle cx="206" cy="52" r="6" fill={C.peachDeep} />
      </g>

      {/* линии движения */}
      <g stroke={INK} strokeOpacity=".35" strokeWidth="3" strokeLinecap="round">
        <path d="M150 40l14-3M146 52l16-2M152 66l12 0" />
      </g>

      {/* опорная нога */}
      <Limb d="M110 86l-6 34" fill="#fff" />
      <ellipse cx="103" cy="124" rx="8" ry="4" fill={SKIN} stroke={INK} strokeWidth="2" />

      {/* туловище */}
      <Limb d="M112 84L101 58" fill="#fff" w={22} />

      {/* ударная нога */}
      <Limb d="M116 82L176 58" fill="#fff" />
      <circle cx="183" cy="55" r="6" fill={SKIN} stroke={INK} strokeWidth="2" />

      {/* пояс */}
      <path d="M100 79l23-6" stroke={INK} strokeWidth="6" strokeLinecap="round" />
      <path d="M110 77l-7 13M113 76l1 14" stroke={INK} strokeWidth="3" strokeLinecap="round" />

      {/* руки в защитной стойке */}
      <Limb d="M104 62l16 4 4-12" fill="#fff" w={8} />
      <Limb d="M98 64l-12 6" fill="#fff" w={8} />
      <circle cx="124" cy="52" r="5" fill={SKIN} stroke={INK} strokeWidth="2" />
      <circle cx="84" cy="71" r="5" fill={SKIN} stroke={INK} strokeWidth="2" />

      {/* голова с повязкой */}
      <circle cx="96" cy="38" r="12.5" fill={SKIN} stroke={INK} strokeWidth="2" />
      <path d="M83.6 37a12.5 12.5 0 0 1 24.8 0q-12.4-7-24.8 0Z" fill={INK} />
      <path d="M84 38.5q12-4 24 0" stroke={C.peachDeep} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M84 38l-8 4M84 39l-7 8" stroke={C.peachDeep} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="96" cy="42" r="1.6" fill={INK} />
      <circle cx="104" cy="42" r="1.6" fill={INK} />
      <path d="M97 46.5q3.5 2.5 7 0" stroke={INK} strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <circle cx="91" cy="45.5" r="2.2" fill={C.peachDeep} opacity=".55" />

      {/* звёзды */}
      <path d="M40 34l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" fill={C.sun} />
      <path d="M200 104l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill={C.lilacDeep} />
      <g stroke={INK} strokeOpacity=".35" strokeWidth="3" strokeLinecap="round">
        <path d="M24 100h18M18 112h22" />
      </g>
    </svg>
  );
}
