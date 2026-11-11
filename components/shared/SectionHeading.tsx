import { SquiggleShape } from "./Decor";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  size = "lg",
  squiggle = "#9C80E0",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "center" | "left";
  size?: "lg" | "sm";
  squiggle?: string;
}) {
  const center = align === "center";
  return (
    <div className={`flex flex-col ${center ? "items-center text-center" : "items-start text-left"}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2
        className={`mt-4 font-black tracking-tight text-forest ${
          size === "lg" ? "text-[clamp(2.1rem,3.4vw,3.4rem)] leading-[1.08]" : "text-[1.95rem] leading-[1.1]"
        }`}
      >
        {title}
      </h2>
      <SquiggleShape className={`mt-3 ${size === "lg" ? "w-28" : "w-20"}`} color={squiggle} />
      {lead && (
        <p
          className={`mt-4 font-semibold text-forest-soft ${
            size === "lg" ? "max-w-2xl text-lg leading-relaxed" : "text-base leading-relaxed"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
