export type Language = "es" | "en" | "it";

export const DEFAULT_LANGUAGE: Language = "en";

export const LANGUAGES: { code: Language; label: string }[] = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
  { code: "it", label: "Italiano" },
];

/*
 * Un texto traducible guarda sus 3 versiones juntas, en el mismo lugar donde se usa:
 *
 *   title: { es: "Estudios", en: "Education", it: "Formazione" }
 *
 * Para cambiar un texto basta con editar ese objeto; no hay diccionarios por idioma
 * repartidos en la aplicación. Un string plano (nombres propios, tecnologías, cifras)
 * se muestra igual en los 3 idiomas.
 */
export type Localized = Record<Language, string>;
export type Text = string | Localized;

export function translate(text: Text, language: Language): string {
  return typeof text === "string" ? text : text[language];
}

export function isLanguage(value: unknown): value is Language {
  return LANGUAGES.some((language) => language.code === value);
}
