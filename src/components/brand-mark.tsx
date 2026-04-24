import Image from "next/image";
import { cn } from "@/lib/utils";

/** Intrinsic pixel size of `/intellogi-logo.png` (wide mark + canvas). */
const LOGO_SRC_WIDTH = 1024;
const LOGO_SRC_HEIGHT = 395;

type BrandMarkProps = {
  /** Outer tile edge length in CSS pixels (square). */
  size?: number;
  className?: string;
  priority?: boolean;
};

/**
 * Gold mark on dark tile — matches the supplied logo asset (black canvas).
 * Oversizes the bitmap vs the tile, then clips with `overflow-hidden` so the
 * mark reads larger; `translate(-50%, calc(-50% + 3px))` keeps it centered with
 * a slight optical nudge for this asset (`object-contain`).
 */
export function BrandMark({
  size = 52,
  className,
  priority = false,
}: BrandMarkProps) {
  /** Scale past the tile edge before clipping — larger = more zoom inside the frame. */
  const zoom = 1.28;
  const maxSide = Math.round(size * zoom);

  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 overflow-hidden rounded-xl bg-zinc-950 ring-1 ring-zinc-900/20 dark:ring-zinc-700/80",
        className
      )}
      style={{ width: size, height: size }}
    >
      <span
        className="pointer-events-none absolute left-1/2 top-1/2 block leading-none"
        style={{
          maxWidth: maxSide,
          maxHeight: maxSide,
          transform: "translate(-50%, calc(-50% + 3px))",
        }}
      >
        <Image
          src="/intellogi-logo.png"
          width={LOGO_SRC_WIDTH}
          height={LOGO_SRC_HEIGHT}
          alt=""
          priority={priority}
          sizes={`${maxSide}px`}
          className="block h-auto w-auto object-contain"
          style={{
            maxWidth: maxSide,
            maxHeight: maxSide,
            width: "auto",
            height: "auto",
            objectPosition: "center center",
          }}
        />
      </span>
    </span>
  );
}
