import { useLanguage } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/ui";

const links = [
  { href: "#biografia", label: ui.nav.biography },
  { href: "#habilidades", label: ui.nav.skills },
  { href: "#estudios", label: ui.nav.education },
  { href: "#proyectos", label: ui.nav.research },
  { href: "#experiencia", label: ui.nav.experience },
  { href: "#liderazgo", label: ui.nav.leadership },
  { href: "#certificados", label: ui.nav.certificates },
];

export function NavBar() {
  const { t } = useLanguage();

  return (
    <nav className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4"
        style={{ height: "10vh" }}
      >
        <a href="#top" className="font-display text-sm font-semibold tracking-tight">
          SVG<span className="text-primary">.</span>
        </a>
        <ul className="hidden items-center gap-6 text-xs uppercase tracking-[0.14em] text-muted-foreground md:flex">
          {links.map((l, i) => (
            <li key={l.href} className="flex items-center gap-6">
              <a href={l.href} className="transition-colors hover:text-primary">
                {t(l.label)}
              </a>
              {i < links.length - 1 ? (
                <span className="text-border" style={{ color: "white" }} aria-hidden>
                  ·
                </span>
              ) : null}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="#certificados"
            className="text-xs uppercase tracking-[0.14em] text-primary md:hidden"
          >
            {t(ui.nav.certificates)}
          </a>
        </div>
      </div>
    </nav>
  );
}
