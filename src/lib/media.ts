/*
 * Fotos y videos del portafolio.
 *
 * Cada recurso tiene su carpeta en src/assets/<sección>/images/<recurso>/ con los archivos
 * enumerados (1.jpg, 2.png, 3.mp4...). El número define el orden en que se muestran.
 * Para agregar, quitar o reordenar fotos basta con renombrar los archivos de la carpeta.
 */

export type MediaItem = { type: "image" | "video"; src: string };

const files = import.meta.glob("/src/assets/*/images/**/*.{jpg,jpeg,png,webp,mp4,webm}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const VIDEO_EXTENSIONS = ["mp4", "webm"];

function fileNumber(path: string) {
  const name = path.slice(path.lastIndexOf("/") + 1);
  const number = Number.parseInt(name, 10);
  return Number.isNaN(number) ? Number.MAX_SAFE_INTEGER : number;
}

/** Todos los archivos de una carpeta, ordenados por su número. Ej.: media("leadership/images/phoenix"). */
export function media(folder: string): MediaItem[] {
  const prefix = `/src/assets/${folder}/`;
  const items = Object.keys(files)
    .filter((path) => path.startsWith(prefix) && !path.slice(prefix.length).includes("/"))
    .sort((a, b) => fileNumber(a) - fileNumber(b) || a.localeCompare(b))
    .map((path) => {
      const extension = path.slice(path.lastIndexOf(".") + 1).toLowerCase();
      return {
        type: VIDEO_EXTENSIONS.includes(extension) ? "video" : "image",
        src: files[path]!,
      } satisfies MediaItem;
    });

  if (import.meta.env.DEV && items.length === 0) {
    console.warn(`[media] La carpeta "${folder}" no tiene fotos.`);
  }

  return items;
}

/** Solo las fotos (sin videos) de una carpeta, ordenadas por su número. */
export function photos(folder: string): string[] {
  return media(folder)
    .filter((item) => item.type === "image")
    .map((item) => item.src);
}
