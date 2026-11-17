import { cn } from "@/lib/utils";

type BrandMarkProps = {
  /** Rendered height in CSS pixels. */
  size?: number;
  className?: string;
  /** Kept for API compatibility; the SVG mark needs no preload. */
  priority?: boolean;
  /** "mint" on navy grounds, "navy" on paper. */
  tone?: "mint" | "navy" | "white";
};

/** The Intellogi pencil "i" mark, drawn as vector shapes. */
export function BrandMark({ size = 40, className, tone = "mint" }: BrandMarkProps) {
  const fill = tone === "mint" ? "#5fffc9" : tone === "navy" ? "#12305a" : "#ffffff";
  return (
    <svg
      viewBox="0 0 101 308"
      height={size}
      width={Math.round((size * 101) / 308)}
      aria-hidden
      className={cn("block shrink-0", className)}
    >
      <g fill={fill} transform="translate(0 1)">
        <path d="M50.5 6 L5 83 L96 83 Z" stroke={fill} strokeWidth={7} strokeLinejoin="round" />
        <rect x={9} y={98} width={36} height={207} />
        <rect x={56} y={98} width={36} height={207} />
      </g>
    </svg>
  );
}
