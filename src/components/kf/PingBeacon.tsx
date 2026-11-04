import { cn } from "@/lib/utils";

interface PingBeaconProps {
  tone?: "up" | "warn" | "down" | "primary";
  className?: string;
  /** Ring count — 2 or 3. Three rings feels more like a radar sweep. */
  rings?: 2 | 3;
  /** Size of the beacon core. */
  size?: "sm" | "md" | "lg" | "xl";
}

const colors = {
  up: "bg-emerald-400 shadow-emerald-400/70",
  warn: "bg-amber-400 shadow-amber-400/70",
  down: "bg-red-500 shadow-red-500/70",
  primary: "bg-primary shadow-primary/70",
} as const;

const sizeMap = {
  sm: "h-3 w-3",
  md: "h-5 w-5",
  lg: "h-8 w-8",
  xl: "h-12 w-12",
} as const;

/**
 * Bigger showcase pulse — used inside product mockups and hero moments
 * where a small StatusPing would be lost. Renders 2-3 expanding rings
 * with staggered delays plus a solid glowing core.
 */
export default function PingBeacon({
  tone = "up",
  className,
  rings = 3,
  size = "md",
}: PingBeaconProps) {
  const [ringBg] = colors[tone].split(" ");
  return (
    <span className={cn("relative inline-flex", sizeMap[size], className)} aria-hidden>
      <span className={cn("absolute inset-0 rounded-full opacity-40 animate-ping-ring", ringBg)} />
      <span className={cn("absolute inset-0 rounded-full opacity-30 animate-ping-ring-delay-1", ringBg)} />
      {rings === 3 && (
        <span className={cn("absolute inset-0 rounded-full opacity-20 animate-ping-ring-delay-2", ringBg)} />
      )}
      <span
        className={cn(
          "relative inline-flex rounded-full shadow-[0_0_28px]",
          sizeMap[size],
          colors[tone],
        )}
      />
    </span>
  );
}
