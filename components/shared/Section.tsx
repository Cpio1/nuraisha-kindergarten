import type { NavId } from "@/lib/site";

/**
 * Одна секция с отдельными версиями для телефона и компьютера.
 * Скрытая версия получает display:none и не попадает в дерево доступности.
 */
export function Section({
  id,
  label,
  desktop,
  mobile,
  className = "",
}: {
  id: NavId;
  label?: string;
  desktop: React.ReactNode;
  mobile: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-label={label} className={`relative ${className}`}>
      <div className="hidden lg:block">{desktop}</div>
      <div className="lg:hidden">{mobile}</div>
    </section>
  );
}
