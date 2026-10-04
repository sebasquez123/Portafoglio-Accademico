import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/portfolio/NavBar";
import { Hero } from "@/components/portfolio/Hero";
import { Section } from "@/components/portfolio/Section";
import { PhotoCarousel, VideoCarousel } from "@/components/portfolio/MediaCarousels";
import {
  EducationList,
  ExperienceList,
  LeadershipList,
  ProjectList,
} from "@/components/portfolio/Timelines";
import { LanguagesPanel, SkillsGrid } from "@/components/portfolio/SkillsLanguages";
import { Certificates } from "@/components/portfolio/Certificates";
import { profile } from "@/data/portfolio";
import biographyImage from "@/assets/background/1.jpg";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/ui";

const title = "Sebastián Vásquez Grajales | Portafolio académico";
const description =
  "Portafolio académico de Sebastián Vásquez Grajales, ingeniero mecatrónico: estudios, investigación, cursos, certificados, habilidades e idiomas.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// La misma imagen se repite en las 3 columnas del fondo de la biografía.
const biographyBackground = [biographyImage, biographyImage, biographyImage];

function Index() {
  const { t } = useLanguage();

  return (
    <div id="top" className="min-h-screen bg-background">
      <NavBar />
      <main>
        <Hero />

        <section
          id="biografia"
          className="relative scroll-mt-24 overflow-hidden border-t border-border/70 py-10"
        >
          {/* Background de 3 imágenes */}
          <div className="absolute inset-0 grid grid-cols-3" aria-hidden>
            {biographyBackground.map((src, i) => (
              <img key={i} src={src} alt="" className="h-full w-full object-cover" />
            ))}
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-background/80" />

          {/* Contenido */}
          <div className="relative z-10 mx-auto max-w-6xl px-6">
            <p className="eyebrow">{t(ui.biography.eyebrow)}</p>

            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{t(ui.biography.title)}</h2>

            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="panel p-6">
                <h4 className="text-1xl font-semibold sm:text-2xl">{t(ui.biography.about)}</h4>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-justify">
                  {t(profile.bio[0]!)}
                </p>
              </div>

              <div className="panel p-6">
                <h4 className="text-1xl font-semibold sm:text-2xl">{t(ui.biography.focus)}</h4>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-justify">
                  {t(profile.bio[1]!)}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* </Section> */}

        <Section
          id="habilidades"
          eyebrow={t(ui.sections.skills.eyebrow)}
          title={t(ui.sections.skills.title)}
          description={t(ui.sections.skills.description)}
        >
          <br />
          <SkillsGrid />
          <br />
          <LanguagesPanel />
        </Section>

        <Section
          id="estudios"
          eyebrow={t(ui.sections.education.eyebrow)}
          title={t(ui.sections.education.title)}
          description={t(ui.sections.education.description)}
          descriptionClassName="text-justify"
        >
          <br />
          <EducationList />
        </Section>

        <Section
          id="proyectos"
          eyebrow={t(ui.sections.projects.eyebrow)}
          title={t(ui.sections.projects.title)}
          description={t(ui.sections.projects.description)}
        >
          <br />
          <ProjectList />
        </Section>

        <Section
          id="experiencia"
          eyebrow={t(ui.sections.experience.eyebrow)}
          title={t(ui.sections.experience.title)}
          description={t(ui.sections.experience.description)}
        >
          <br />
          <ExperienceList />
        </Section>

        <Section
          id="liderazgo"
          eyebrow={t(ui.sections.leadership.eyebrow)}
          title={t(ui.sections.leadership.title)}
          description={t(ui.sections.leadership.description)}
        >
          <br />
          <LeadershipList />
        </Section>

        <Section
          id="certificados"
          eyebrow={t(ui.sections.certificates.eyebrow)}
          title={t(ui.sections.certificates.title)}
          description=""
        >
          <br />
          <Certificates />
        </Section>

        {/* <Section
          id="galeria"
          eyebrow={t(ui.sections.gallery.eyebrow)}
          title={t(ui.sections.gallery.title)}
          description={t(ui.sections.gallery.description)}
        >
          <div className="space-y-12">
            <PhotoCarousel />
            <div>
              <h3 className="mb-5 font-display text-xl font-semibold">{t(ui.sections.gallery.video)}</h3>
              <VideoCarousel />
            </div>
          </div>
        </Section> */}
      </main>

      <footer className="border-t border-border/70 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            {profile.name} · {t(profile.role)}
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.14em]">
            {profile.location} · {profile.email}
          </p>
        </div>
      </footer>
    </div>
  );
}
