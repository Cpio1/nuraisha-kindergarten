import { Flower, Squiggle } from "./Shapes";

/** Заголовок секции: «стикер»-подпись, крупный заголовок, волнистая черта и лид. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  accent = "#9C80E0",
  petal = "#DCCDF7",
  className = "",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "center" | "left";
  accent?: string;
  petal?: string;
  className?: string;
}) {
  const center = align === "center";
  return (
    <div className={`flex flex-col ${center ? "items-center text-center" : "items-start text-left"} ${className}`}>
      <span className="eyebrow">
        <Flower petals={6} fill={accent} center="#FFE08A" outline={false} className="-my-1 -ml-1 size-[22px]" />
        {eyebrow}
      </span>
      <h2 className="title-xl mt-4 text-forest">{title}</h2>
      <Squiggle className="mt-3 w-20 lg:w-24" color={accent} width={4.5} />
      {lead && <p className={`lead mt-4 ${center ? "max-w-xl" : "max-w-lg"}`}>{lead}</p>}
    </div>
  );
}
