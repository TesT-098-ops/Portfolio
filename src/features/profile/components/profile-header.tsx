import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  // move complex SVG mapping out of JSX to avoid parser issues
  const chakraLines = Array.from({ length: 24 }).map((_, i) => {
    const angle = (i * 15 * Math.PI) / 180;
    const x = 15 + 2.5 * Math.cos(angle);
    const y = 10 + 2.5 * Math.sin(angle);
    return <line key={i} x1="15" y1="10" x2={x} y2={y} />;
  });

  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-[2px] my-[3px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>
        {/* Flag of India */}
        <svg
          className="absolute top-0 -left-px h-8 sm:h-9"
          viewBox="0 0 30 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Saffron */}
          <rect width="30" height="6.66" y="0" fill="#FF9933" />
          {/* White */}
          <rect width="30" height="6.66" y="6.66" fill="#FFFFFF" />
          {/* Green */}
          <rect width="30" height="6.66" y="13.32" fill="#138808" />
          {/* Ashoka Chakra (blue wheel) */}
          <circle cx="15" cy="10" r="2.5" stroke="#000080" strokeWidth="0.6" fill="none" />
          <g stroke="#000080" strokeWidth="0.2">
            {chakraLines}
          </g>
        </svg>
      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-[(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge">
          <h1 className="flex items-center pl-4 text-3xl font-semibold">
            {USER.displayName}
            &nbsp;
            <SimpleTooltip content="Verified">
              <VerifiedIcon className="size-[0.6em] translate-y-px text-info select-none" />
            </SimpleTooltip>
          </h1>

          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={USER.flipSentences} />
          </div>
        </div>
      </div>
    </div>
  );
}
