import { cn } from "@/lib/utils";

interface AuroraProps {
  className?: string;
  variant?: "default" | "soft" | "conic";
}

/**
 * Aurora background layer. Absolute-positioned, pointer-events: none.
 * Wrap in a relative parent with overflow-hidden.
 */
export default function Aurora({ className, variant = "default" }: AuroraProps) {
  if (variant === "soft") {
    return <div aria-hidden className={cn("aurora-soft", className)} />;
  }
  if (variant === "conic") {
    return (
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 opacity-30 blur-3xl bg-aurora-conic pointer-events-none",
          className,
        )}
      />
    );
  }
  return <div aria-hidden className={cn("aurora", className)} />;
}
