import { useEffect, useRef, useState } from "react";
import { Check, Languages } from "lucide-react";
import { LANGUAGES } from "@/i18n/languages";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/ui";

/*
 * Burbuja fija en el borde derecho de la pantalla que acompaña al usuario mientras
 * navega. Al pulsarla se despliegan los idiomas disponibles.
 */
export function LanguageBubble() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="fixed right-4 z-40 flex flex-col items-end gap-2 sm:right-6"
      style={{ bottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))" }}
    >
      <div
        role="radiogroup"
        aria-label={t(ui.languageBubble.label)}
        className={`flex flex-col gap-1 rounded-2xl border border-border bg-background/95 p-1.5 shadow-lg backdrop-blur-md transition-all duration-200 ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        {LANGUAGES.map((option) => {
          const isActive = option.code === language;

          return (
            <button
              key={option.code}
              type="button"
              role="radio"
              aria-checked={isActive}
              tabIndex={open ? 0 : -1}
              onClick={() => {
                setLanguage(option.code);
                setOpen(false);
              }}
              className={`flex min-w-36 items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em]">
                  {option.code}
                </span>
                {option.label}
              </span>
              {isActive ? <Check className="size-4" aria-hidden /> : null}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        aria-expanded={open}
        aria-label={t(ui.languageBubble.change)}
        title={t(ui.languageBubble.change)}
        onClick={() => setOpen((value) => !value)}
        className="flex size-14 items-center justify-center gap-1 rounded-full border border-primary/40 bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-95"
      >
        <Languages className="size-4" aria-hidden />
        <span className="font-mono text-xs font-semibold uppercase">{language}</span>
      </button>
    </div>
  );
}
