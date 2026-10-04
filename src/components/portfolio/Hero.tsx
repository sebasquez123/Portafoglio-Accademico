import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TerminalCard } from "@/components/ui/terminalCard";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/ui";

export function Hero() {
  const { t } = useLanguage();

  return (
    <header className="relative overflow-hidden">
      <div className="grid-texture absolute inset-0 opacity-60" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-28">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr] lg:items-center">
          <div>
            <Badge variant="outline" className="border-primary/40 text-primary">
              {t(ui.hero.badge)}
            </Badge>
            <h1 className="text-gradient mt-6 text-4xl font-semibold leading-[1.05] sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 max-w-2xl font-mono text-sm uppercase tracking-[0.18em] text-primary">
              {t(profile.role)} · {t(ui.hero.focusAreas)}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground text-justify">
              {t(profile.bio[2]!)}
            </p>

            {/* <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#certificados">Ver certificados</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#galeria">Galería y video</a>
              </Button>
            </div> */}

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" /> {profile.location}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-primary" /> {profile.phone}
              </li>
              <li>
                <a
                  className="flex items-center gap-2 transition-colors hover:text-foreground"
                  href={`mailto:${profile.email}`}
                >
                  <Mail className="size-4 text-primary" /> {profile.email}
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2 transition-colors hover:text-foreground"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="size-4 text-primary" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2 transition-colors hover:text-foreground"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="size-4 text-primary" /> GitHub
                </a>
              </li>
            </ul>
          </div>

          <TerminalCard />
        </div>
      </div>
    </header>
  );
}
