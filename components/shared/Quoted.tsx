/**
 * Кавычки «» в округлом шрифте заголовков похожи на «<<»,
 * поэтому выводим их текстовым шрифтом и акцентным цветом.
 */
export function Quoted({ text, className = "text-peach-deep" }: { text: string; className?: string }) {
  const parts = text.split(/([«»])/);
  return (
    <>
      {parts.map((p, i) =>
        p === "«" || p === "»" ? (
          <span key={i} className={`font-sans font-semibold ${className}`} aria-hidden="false">
            {p}
          </span>
        ) : (
          p
        ),
      )}
    </>
  );
}
