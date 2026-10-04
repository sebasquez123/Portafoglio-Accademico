import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  descriptionClassName,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  descriptionClassName?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border/70 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
        {description ? (
          <p
            className={`mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground ${descriptionClassName ?? ""}`}
          >
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
