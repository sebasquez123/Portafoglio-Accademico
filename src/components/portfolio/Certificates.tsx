import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Eye, FileText, ImageIcon, Languages, Trash2 } from "lucide-react";
import { LANGUAGES, type Language, type Text } from "@/i18n/languages";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/ui";

/*
 * Los PDF viven en src/assets/certificates/<carpeta>/<nombre>_<idioma>.pdf
 * (por ejemplo diploma/Diploma_ingenieria_en.pdf). Vite los empaqueta y aquí se
 * obtiene la URL final de cada uno.
 */
const certificateUrls = import.meta.glob("/src/assets/certificates/**/*.pdf", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

/** Idioma del documento original; es la primera versión que se muestra. */
const ORIGINAL_LANGUAGE: Language = "es";

/** Portada de cada certificado: src/assets/certificates/<carpeta>/1.<extensión>. */
const certificateCovers = import.meta.glob("/src/assets/certificates/*/1.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function getCertificateCover(certificate: Certificate) {
  const prefix = `/src/assets/certificates/${certificate.folder}/`;
  const path = Object.keys(certificateCovers).find((key) => key.startsWith(prefix));
  return path ? certificateCovers[path]! : "";
}

function getCertificateFile(certificate: Certificate, language: Language) {
  const fileName = `${certificate.fileBase}_${language}.pdf`;
  const url = certificateUrls[`/src/assets/certificates/${certificate.folder}/${fileName}`];

  return { url: url ?? "", fileName };
}

function CertificateLanguageSwitch({
  value,
  onChange,
}: {
  value: Language;
  onChange: (language: Language) => void;
}) {
  const { t } = useLanguage();
  const activeIndex = LANGUAGES.findIndex((language) => language.code === value);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
        <Languages className="size-3.5 text-primary" aria-hidden />
        {t(ui.certificates.documentLanguage)}
      </span>

      <div
        role="radiogroup"
        aria-label={t(ui.certificates.documentLanguage)}
        className="relative grid grid-cols-3 rounded-full border border-border bg-muted/40 p-1"
      >
        <span
          className="absolute inset-y-1 left-1 w-[calc((100%-0.5rem)/3)] rounded-full bg-primary transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${activeIndex * 100}%)` }}
          aria-hidden
        />
        {LANGUAGES.map((language) => {
          const isActive = language.code === value;

          return (
            <button
              key={language.code}
              type="button"
              role="radio"
              aria-checked={isActive}
              title={language.label}
              onClick={() => onChange(language.code)}
              className={`relative z-10 px-4 py-1 font-mono text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {language.code}
            </button>
          );
        })}
      </div>
    </div>
  );
}

type Certificate = {
  id: string;
  title: Text;
  issuer: Text;
  period: Text;
  note: Text;
  /** Carpeta dentro de src/assets/certificates. */
  folder: string;
  /** Nombre del PDF sin el sufijo de idioma (_es, _en, _it). */
  fileBase: string;
  fileType: string;
  uploadedAt?: string;
  removable?: boolean;
};

const UTP = "Universidad Tecnológica de Pereira";

const RREDSI: Text = {
  es: "Red Regional de Semilleros de Investigación",
  en: "Regional Network of Research Groups",
  it: "Rete Regionale dei Gruppi di Ricerca",
};

// El orden de esta lista es el orden en que se muestran las tarjetas.
const seeds: Certificate[] = [
  // Estudios
  {
    id: "degree",
    title: {
      es: "Ingeniería Mecatrónica — Título profesional",
      en: "Mechatronics Engineering — Professional degree",
      it: "Ingegneria Meccatronica — Titolo professionale",
    },
    issuer: UTP,
    period: { es: "May 2024", en: "May 2024", it: "Mag 2024" },
    note: {
      es: "Diplomas de Ingeniero, Tecnólogo y Técnico Profesional en Mecatrónica · Estudiante Distinguido (4,3)",
      en: "Engineer, Technologist and Professional Technician diplomas in Mechatronics · Distinguished Student (4.3)",
      it: "Diplomi di Ingegnere, Tecnologo e Tecnico Professionale in Meccatronica · Studente Distinto (4,3)",
    },
    folder: "diploma",
    fileBase: "Diploma_ingenieria",
    fileType: "application/pdf",
    removable: false,
  },
  {
    id: "fullstack",
    title: {
      es: "Diplomado Programador Junior Full Stack",
      en: "Junior Full Stack Programmer Diploma Course",
      it: "Diploma in Programmatore Junior Full Stack",
    },
    issuer: UTP,
    period: { es: "Jun 2024", en: "Jun 2024", it: "Giu 2024" },
    note: {
      es: "176 horas · Vicerrectoría de Investigaciones, Innovación y Extensión",
      en: "176 hours · Vice-Rectorate for Research, Innovation and Extension",
      it: "176 ore · Vicerettorato per la Ricerca, l'Innovazione e l'Estensione",
    },
    folder: "fullstack",
    fileBase: "fullstack",
    fileType: "application/pdf",
    removable: false,
  },
  {
    id: "ai-bootcamp",
    title: {
      es: "Bootcamp de Inteligencia Artificial",
      en: "Artificial Intelligence Bootcamp",
      it: "Bootcamp di Intelligenza Artificiale",
    },
    issuer: "MinTIC · Talento Tech",
    period: { es: "Dic 2024", en: "Dec 2024", it: "Dic 2024" },
    note: {
      es: "159 horas · Ciencia de datos, ML/DL y análisis exploratorio de datos",
      en: "159 hours · Data science, ML/DL and exploratory data analysis",
      it: "159 ore · Data science, ML/DL e analisi esplorativa dei dati",
    },
    folder: "campista",
    fileBase: "campitas",
    fileType: "application/pdf",
    removable: false,
  },
  {
    id: "additional-training",
    title: {
      es: "Formación complementaria",
      en: "Additional training",
      it: "Formazione complementare",
    },
    issuer: `Udemy · ${UTP}`,
    period: "2024",
    note: {
      es: "React, Python (NumPy y Pandas), Deep Learning y Programación Python Frontend",
      en: "React, Python (NumPy & Pandas), Deep Learning and Python Frontend Programming",
      it: "React, Python (NumPy e Pandas), Deep Learning e Programmazione Python Frontend",
    },
    folder: "additionals",
    fileBase: "additional_formation",
    fileType: "application/pdf",
    removable: false,
  },

  // Experiencia profesional
  {
    id: "blueskyai",
    title: {
      es: "Certificado laboral — BlueSkyAI",
      en: "Employment verification — BlueSkyAI",
      it: "Certificato di lavoro — BlueSkyAI",
    },
    issuer: "BlueSkyAI LLC · Raleigh, NC, USA",
    period: { es: "Dic 2024 — Mar 2026", en: "Dec 2024 — Mar 2026", it: "Dic 2024 — Mar 2026" },
    note: {
      es: "Software Development Engineer · IA, Machine Learning y Deep Learning",
      en: "Software Development Engineer · AI, Machine Learning and Deep Learning",
      it: "Software Development Engineer · IA, Machine Learning e Deep Learning",
    },
    folder: "blueskyai",
    fileBase: "blueskyai",
    fileType: "application/pdf",
    removable: false,
  },
  {
    id: "cinnov",
    title: {
      es: "Certificado laboral — CINNOV",
      en: "Employment certificate — CINNOV",
      it: "Certificato di lavoro — CINNOV",
    },
    issuer: "CINNOV S.A.S. · Bogotá, Colombia",
    period: { es: "Abr 2025 — Jul 2025", en: "Apr 2025 — Jul 2025", it: "Apr 2025 — Lug 2025" },
    note: {
      es: "Ingeniero de Desarrollo de Software · Machine Learning y EDA",
      en: "Software Development Engineer · Machine Learning and EDA",
      it: "Ingegnere di Sviluppo Software · Machine Learning ed EDA",
    },
    folder: "cinnov",
    fileBase: "cinnov",
    fileType: "application/pdf",
    removable: false,
  },

  // Actividades académicas e investigación
  {
    id: "monitor",
    title: {
      es: "Monitor académico — Línea de Aeronáutica",
      en: "Academic assistant — Aeronautics Line",
      it: "Tutor accademico — Linea di Aeronautica",
    },
    issuer: UTP,
    period: { es: "Feb 2020 — May 2024", en: "Feb 2020 — May 2024", it: "Feb 2020 — Mag 2024" },
    note: {
      es: "Apoyo en proyectos de investigación, desarrollo tecnológico e innovación",
      en: "Support for research, technological development and innovation projects",
      it: "Supporto a progetti di ricerca, sviluppo tecnologico e innovazione",
    },
    folder: "monitor",
    fileBase: "monitor_certificate",
    fileType: "application/pdf",
    removable: false,
  },
  {
    id: "research-groups",
    title: {
      es: "Semilleros de investigación",
      en: "Research groups",
      it: "Gruppi di ricerca",
    },
    issuer: UTP,
    period: "2020 — 2024",
    note: {
      es: "Robótica Aplicada, Mecabotica y CIDT-UTP",
      en: "Applied Robotics, Mecabotica and CIDT-UTP",
      it: "Robotica Applicata, Mecabotica e CIDT-UTP",
    },
    folder: "semilleros",
    fileBase: "semilleros_certificate",
    fileType: "application/pdf",
    removable: false,
  },
  {
    id: "rredsi-2023",
    title: {
      es: "Ponente — XIII Encuentro Regional RREDSI",
      en: "Speaker — 13th RREDSI Regional Meeting",
      it: "Relatore — XIII Incontro Regionale RREDSI",
    },
    issuer: RREDSI,
    period: { es: "Oct 2023", en: "Oct 2023", it: "Ott 2023" },
    note: {
      es: "Perfil aerodinámico con superficie continua de geometría variable · Cali",
      en: "Aerodynamic profile with a continuous variable-geometry surface · Cali",
      it: "Profilo aerodinamico con superficie continua a geometria variabile · Cali",
    },
    folder: "rredsi_2023",
    fileBase: "Certificado_RREDSI_2023",
    fileType: "application/pdf",
    removable: false,
  },
  {
    id: "rredsi-2020-nov",
    title: {
      es: "Ponente — X Encuentro Regional RREDSI",
      en: "Speaker — 10th RREDSI Regional Meeting",
      it: "Relatore — X Incontro Regionale RREDSI",
    },
    issuer: RREDSI,
    period: "Nov 2020",
    note: {
      es: "Eje Cafetero y Valle del Cauca · Manizales",
      en: "Coffee Region and Valle del Cauca · Manizales",
      it: "Eje Cafetero e Valle del Cauca · Manizales",
    },
    folder: "rredsi_2020_noviembre",
    fileBase: "Certificado_RREDSI_NOV_2020",
    fileType: "application/pdf",
    removable: false,
  },
  {
    id: "rredsi-2020-sep",
    title: {
      es: "Ponente — X Encuentro Departamental de Semilleros",
      en: "Speaker — 10th Departmental Meeting of Research Groups",
      it: "Relatore — X Incontro Dipartimentale dei Gruppi di Ricerca",
    },
    issuer: RREDSI,
    period: { es: "Sep 2020", en: "Sep 2020", it: "Set 2020" },
    note: {
      es: "Nodo Risaralda · Pereira",
      en: "Risaralda Node · Pereira",
      it: "Nodo Risaralda · Pereira",
    },
    folder: "rredsi_2020_septiembre",
    fileBase: "Certificado_RREDSI_SEP_2020",
    fileType: "application/pdf",
    removable: false,
  },
];

const STORAGE_KEY = "portfolio.certificates.v1";

export function Certificates() {
  const { t } = useLanguage();
  const [items, setItems] = useState<Certificate[]>([]);
  const [preview, setPreview] = useState<Certificate | null>(null);
  const [documentLanguage, setDocumentLanguage] = useState<Language>(ORIGINAL_LANGUAGE);
  const previewFile = preview ? getCertificateFile(preview, documentLanguage) : null;
  const translationNote =
    documentLanguage === "es" ? null : ui.certificates.translationNotes[documentLanguage];

  // Al abrir un certificado siempre se muestra primero el original en español.
  const openPreview = (certificate: Certificate) => {
    setDocumentLanguage(ORIGINAL_LANGUAGE);
    setPreview(certificate);
  };

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);

      if (raw) {
        setItems(JSON.parse(raw) as Certificate[]);
      }
    } catch {
      // Ignore corrupt storage
    }
  }, []);

  const persist = (next: Certificate[]) => {
    setItems(next);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      toast.error(t(ui.certificates.saveError));
    }
  };

  /*
   * Los certificados cargados dinámicamente se combinan
   * con los certificados definidos en seeds.
   *
   * Los seeds aparecen siempre.
   */
  const certificates = [...seeds];

  const removeCertificate = (id: string) => {
    persist(items.filter((item) => item.id !== id));
    toast.success(t(ui.certificates.removed));
  };

  return (
    <div className="space-y-8">
      <div>
        <p className="eyebrow">{t(ui.certificates.eyebrow)}</p>

        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => {
            return (
              <article
                key={certificate.id}
                className="
    panel group relative flex min-h-[380px] flex-col
    overflow-hidden p-5
  "
              >
                {/* Contenido */}
                <div className="flex flex-1 flex-col pb-28">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/10">
                      {certificate.fileType === "application/pdf" ? (
                        <FileText className="size-5 text-primary" />
                      ) : (
                        <ImageIcon className="size-5 text-primary" />
                      )}
                    </span>

                    <Badge variant="secondary" className="font-mono text-[0.7rem]">
                      {t(certificate.period)}
                    </Badge>
                  </div>

                  <h3 className="mt-4 font-display text-base font-semibold">
                    {t(certificate.title)}
                  </h3>

                  <p className="text-sm text-muted-foreground">{t(certificate.issuer)}</p>

                  <p className="mt-3 text-sm text-muted-foreground/85">{t(certificate.note)}</p>

                  <p className="mt-auto pt-4 truncate font-mono text-xs text-muted-foreground/70">
                    {getCertificateFile(certificate, ORIGINAL_LANGUAGE).fileName}
                  </p>
                </div>

                {/* Imagen inferior por defecto */}
                <div
                  className="
      absolute inset-x-0 bottom-0
      h-28
      overflow-hidden
      transition-opacity duration-300
      group-hover:opacity-0
    "
                >
                  <img
                    src={getCertificateCover(certificate)}
                    alt=""
                    className="
        h-full w-full
        object-cover
        object-center
      "
                  />

                  {/* Gradiente para integrarla visualmente con la tarjeta */}
                  <div
                    className="
        absolute inset-0
        bg-gradient-to-t
        from-background
        via-background/20
        to-transparent
      "
                  />
                </div>

                {/* Botón que reemplaza la imagen al hacer hover */}
                <div
                  className="

      absolute inset-x-0 bottom-0
      flex h-28
      translate-y-full
      items-center justify-center
      bg-background/95
      backdrop-blur-sm
      transition-transform duration-300
      group-hover:translate-y-0
    "
                >
                  <div className="flex w-full items-center justify-center gap-2 px-5">
                    <Button className="flex-1" onClick={() => openPreview(certificate)}>
                      <Eye className="size-4" />
                      {t(ui.certificates.view)}
                    </Button>

                    {certificate.removable && (
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => removeCertificate(certificate.id)}
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Dialog */}
      <Dialog
        open={!!preview}
        onOpenChange={(open) => {
          if (!open) setPreview(null);
        }}
      >
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{preview ? t(preview.title) : null}</DialogTitle>

            <DialogDescription>
              {preview ? t(preview.issuer) : null}
              {preview ? ` · ${t(preview.period)}` : ""}
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <CertificateLanguageSwitch value={documentLanguage} onChange={setDocumentLanguage} />
            {translationNote ? (
              <p className="text-xs italic text-muted-foreground">{t(translationNote)}</p>
            ) : null}
          </div>

          {preview &&
            previewFile &&
            (preview.fileType === "application/pdf" ? (
              <object
                key={previewFile.url}
                data={previewFile.url}
                type="application/pdf"
                className="h-[70vh] w-full rounded-md border border-border"
                aria-label={t(preview.title)}
              >
                <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center text-sm text-muted-foreground">
                  <p>{t(ui.certificates.previewUnavailable)}</p>
                  <a
                    href={previewFile.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    {t(ui.certificates.open)} {previewFile.fileName}
                  </a>
                </div>
              </object>
            ) : (
              <img
                key={previewFile.url}
                src={previewFile.url}
                alt={t(preview.title)}
                className="max-h-[70vh] w-full rounded-md border border-border object-contain"
              />
            ))}

          {previewFile && (
            <Button asChild variant="outline">
              <a href={previewFile.url} download={previewFile.fileName}>
                {t(ui.certificates.download)}
              </a>
            </Button>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
