import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Play } from "lucide-react";
import { gallery, videos } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/ui";

export function PhotoCarousel() {
  const { t } = useLanguage();

  return (
    <Carousel opts={{ align: "start", loop: true }} className="w-full">
      <CarouselContent className="-ml-4">
        {gallery.map((item) => (
          <CarouselItem key={t(item.title)} className="pl-4 sm:basis-4/5 lg:basis-3/5">
            <figure className="panel overflow-hidden">
              <AspectRatio ratio={3 / 2}>
                <img
                  src={item.src}
                  alt={t(item.title)}
                  loading="lazy"
                  width={1280}
                  height={853}
                  className="size-full object-cover"
                />
              </AspectRatio>
              <figcaption className="space-y-1 p-5">
                <h3 className="font-display text-base font-semibold">{t(item.title)}</h3>
                <p className="text-sm text-muted-foreground">{t(item.caption)}</p>
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-3" />
      <CarouselNext className="-right-3" />
    </Carousel>
  );
}

export function VideoCarousel() {
  const { t } = useLanguage();

  return (
    <Carousel opts={{ align: "start", loop: true }} className="w-full">
      <CarouselContent className="-ml-4">
        {videos.map((item) => (
          <CarouselItem key={t(item.title)} className="pl-4 sm:basis-4/5 lg:basis-1/2">
            <article className="panel overflow-hidden">
              <AspectRatio ratio={16 / 9}>
                {item.src ? (
                  <video
                    src={item.src}
                    poster={item.poster}
                    controls
                    className="size-full object-cover"
                  />
                ) : (
                  <div className="relative size-full">
                    <img
                      src={item.poster}
                      alt={t(item.title)}
                      loading="lazy"
                      width={1280}
                      height={720}
                      className="size-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background/45">
                      <span className="flex size-14 items-center justify-center rounded-full border border-primary/50 bg-primary/15">
                        <Play className="size-6 text-primary" />
                      </span>
                      <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                        {t(ui.media.videoPending)}
                      </span>
                    </div>
                  </div>
                )}
              </AspectRatio>
              <div className="space-y-1 p-5">
                <h3 className="font-display text-base font-semibold">{t(item.title)}</h3>
                <p className="text-sm text-muted-foreground">{t(item.description)}</p>
              </div>
            </article>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-3" />
      <CarouselNext className="-right-3" />
    </Carousel>
  );
}
