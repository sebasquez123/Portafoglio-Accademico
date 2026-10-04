import { useEffect, useState } from "react";
import { Check, Clipboard, Terminal as TerminalIcon } from "lucide-react";

type TerminalCardProps = {
  command?: string;
};

export function TerminalCard({ command = "install-padova-enrollment@2027" }: TerminalCardProps) {
  const [copied, setCopied] = useState(false);
  const [visibleCommand, setVisibleCommand] = useState("");

  useEffect(() => {
    let typingInterval: ReturnType<typeof setInterval> | undefined;

    const typeCommand = () => {
      let index = 0;
      setVisibleCommand("");
      typingInterval = setInterval(() => {
        setVisibleCommand(command.slice(0, ++index));
        if (index >= command.length) clearInterval(typingInterval);
      }, 45);
    };

    typeCommand();
    const cycleInterval = setInterval(typeCommand, 4000);

    return () => {
      clearInterval(cycleInterval);
      if (typingInterval) clearInterval(typingInterval);
    };
  }, [command]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(`npx ${command}`);

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-muted/20 p-4 backdrop-blur-md">
      <div className="overflow-hidden rounded-lg border border-border/60">
        {/* Header */}
        <div className="flex min-h-10 items-center justify-between bg-zinc-900 px-3">
          <div className="flex h-10 items-center gap-2 overflow-hidden font-mono text-sm font-semibold text-zinc-400">
            <TerminalIcon className="size-[18px] text-primary" />
            <span className="truncate">Terminal</span>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copiar comando"
            className="
              flex size-7 items-center justify-center
              rounded-md border border-zinc-600
              bg-zinc-900 text-zinc-400
              transition-colors
              hover:border-zinc-500
              hover:text-zinc-200
              active:scale-95
            "
          >
            {copied ? (
              <Check className="size-4 text-green-400" />
            ) : (
              <Clipboard className="size-4" />
            )}
          </button>
        </div>

        {/* Terminal body */}
        <div className="overflow-x-auto bg-black p-4 font-mono text-sm leading-5 text-white">
          <div className="flex flex-col whitespace-nowrap">
            <div>
              <span className="text-zinc-600">-&nbsp;</span>
              <span className="text-pink-500">Salve!</span>
            </div>

            <div className="flex">
              <span className="text-zinc-600">-&nbsp;</span>

              <span className="relative inline-flex h-5">
                <span
                  className="
            relative block overflow-hidden whitespace-nowrap
            after:absolute after:right-0 after:top-0
            after:h-full after:border-r-2 after:border-pink-500
            after:content-['']
            animate-terminal-blink
          "
                >
                  {visibleCommand}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
