const paths = [
  "M0 48c120 30 240 34 360 18S600 6 720 10s240 46 360 50 240-24 360-36V112H0Z",
  "M0 30c160-36 300 30 470 26S760 0 920 6s300 54 520 30V112H0Z",
  "M0 60c90-24 200-50 330-34s210 50 360 44 250-60 400-62 260 30 350 44V112H0Z",
];

/**
 * Волнистый переход: кладётся внизу секции и окрашивается в цвет следующей.
 */
export function Wave({
  color,
  variant = 0,
  flip = false,
  className = "",
}: {
  color: string;
  variant?: 0 | 1 | 2;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 bottom-[-1px] leading-[0] ${className}`}
    >
      <svg
        viewBox="0 0 1440 112"
        preserveAspectRatio="none"
        className={`block h-10 w-full sm:h-14 lg:h-20 xl:h-24 ${flip ? "-scale-x-100" : ""}`}
      >
        <path d={paths[variant]} fill={color} />
      </svg>
    </div>
  );
}
