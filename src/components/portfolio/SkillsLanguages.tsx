import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { languages, skillGroups } from "@/data/portfolio";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useLanguage } from "@/i18n/LanguageProvider";

export function SkillsGrid() {
  const { t } = useLanguage();

  return (
    <TooltipProvider>
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={t(group.title)}
            className="panel p-6 transition duration-300 hover:-translate-y-1"
          >
            <h3 className="font-display text-base font-semibold">{t(group.title)}</h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tooltip key={t(item.i)}>
                  <TooltipTrigger asChild>
                    <Badge
                      variant="outline"
                      className="
                        cursor-help
                        border-border/80
                        font-mono
                        text-[0.72rem]
                        transition-colors
                        hover:border-primary/50
                        hover:bg-primary/10
                      "
                    >
                      {t(item.i)}
                    </Badge>
                  </TooltipTrigger>

                  <TooltipContent className="max-w-xs">
                    <p>{t(item.detail)}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </TooltipProvider>
  );
}

export function LanguagesPanel() {
  const { t } = useLanguage();

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {languages.map((lang) => (
        <div key={t(lang.name)} className="panel p-6">
          <div className="flex items-baseline justify-between">
            <h3 className="font-display text-base font-semibold">{t(lang.name)}</h3>
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
              {t(lang.level)}
            </span>
          </div>
          <Progress value={lang.value} className="mt-4 h-2" />
        </div>
      ))}
    </div>
  );
}
