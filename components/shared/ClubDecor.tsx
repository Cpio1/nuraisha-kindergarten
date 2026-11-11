import { HeartShape, SparkleShape, StarShape } from "./Decor";

/** Отдельная декоративная композиция для каждого занятия. */
export function ClubDecor({ club, className = "" }: { club: "speech" | "taekwondo" | "english"; className?: string }) {
  if (club === "speech") {
    return (
      <div aria-hidden="true" className={`pointer-events-none ${className}`}>
        <svg viewBox="0 0 120 90" className="absolute top-0 right-0 w-full">
          <path d="M18 8h56a14 14 0 0 1 14 14v18a14 14 0 0 1-14 14H40l-14 12v-12h-8A14 14 0 0 1 4 40V22A14 14 0 0 1 18 8Z" fill="#FFFFFF" opacity=".85" />
          <circle cx="28" cy="31" r="4" fill="#9C80E0" />
          <circle cx="43" cy="31" r="4" fill="#9C80E0" opacity=".7" />
          <circle cx="58" cy="31" r="4" fill="#9C80E0" opacity=".45" />
          <path d="M84 46h22a10 10 0 0 1 10 10v8a10 10 0 0 1-10 10h-2v8l-10-8H84a10 10 0 0 1-10-10v-8a10 10 0 0 1 10-10Z" fill="#FFD6B8" />
        </svg>
        <HeartShape className="absolute right-[6%] bottom-[-14%] w-[18%]" color="#F39A62" />
      </div>
    );
  }
  if (club === "taekwondo") {
    return (
      <div aria-hidden="true" className={`pointer-events-none ${className}`}>
        <svg viewBox="0 0 120 90" className="absolute top-0 right-0 w-full">
          <circle cx="78" cy="40" r="34" fill="#FFFFFF" opacity=".7" />
          <rect x="24" y="34" width="96" height="14" rx="7" fill="#284C43" opacity=".85" />
          <rect x="64" y="28" width="22" height="26" rx="7" fill="#284C43" />
          <path d="m68 54-8 26M82 54l8 26" stroke="#284C43" strokeWidth="9" strokeLinecap="round" />
        </svg>
        <StarShape className="absolute top-[-10%] left-[8%] w-[22%]" />
      </div>
    );
  }
  return (
    <div aria-hidden="true" className={`pointer-events-none ${className}`}>
      {[
        { l: "A", c: "bg-white text-lilac-deep", p: "top-0 right-[46%] rotate-[-10deg]" },
        { l: "B", c: "bg-peach text-forest", p: "top-[30%] right-[18%] rotate-[8deg]" },
        { l: "C", c: "bg-lilac text-forest", p: "top-[2%] right-0 rotate-[-4deg]" },
      ].map((x) => (
        <span
          key={x.l}
          className={`absolute grid size-[38%] max-h-12 max-w-12 place-items-center rounded-2xl text-xl font-black shadow-soft ${x.c} ${x.p}`}
        >
          {x.l}
        </span>
      ))}
      <SparkleShape className="absolute right-[64%] bottom-[-6%] w-[14%]" color="#F39A62" />
    </div>
  );
}
