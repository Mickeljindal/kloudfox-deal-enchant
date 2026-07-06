import { cn } from "@/lib/utils";

interface StatusPingProps {
  tone?: "up" | "warn" | "down";
  className?: string;
  /** Size of the center dot. Rings scale proportionally. */
  size?: "sm" | "md" | "lg";
}

const dotColors = {
  up: "bg-emerald-400 text-emerald-400",
  warn: "bg-amber-400 text-amber-400",
  down: "bg-red-500 text-red-500",
} as const;

const shadowColors = {
  up: "shadow-emerald-400/60",
  warn: "shadow-amber-400/60",
  down: "shadow-red-500/60",
} as const;

const sizeMap = {
  sm: "h-1.5 w-1.5",
  md: "h-2.5 w-2.5",
  lg: "h-3.5 w-3.5",
} as const;

/**
 * Double-ring "ping ping" status indicator.
 *
 *   ring 1  — expands outward, 0.0s delay
 *   ring 2  — expands outward, 0.7s delay (so the second ripple starts
 *             just as the first fades — creating the ping-ping rhythm)
 *   center dot — solid, with a soft glow that matches the tone
 */
export default function StatusPing({ tone = "up", className, size = "md" }: StatusPingProps) {
  return (
    <span className={cn("relative inline-flex", sizeMap[size], className)} aria-hidden>
      <span
        className={cn(
          "absolute inset-0 rounded-full opacity-75 animate-ping-ring",
          dotColors[tone],
        )}
      />
      <span
        className={cn(
          "absolute inset-0 rounded-full opacity-50 animate-ping-ring-delay-1",
          dotColors[tone],
        )}
      />
      <span
        className={cn(
          "relative inline-flex rounded-full shadow-[0_0_14px]",
          sizeMap[size],
          dotColors[tone],
          shadowColors[tone],
        )}
      />
    </span>
  );
}
