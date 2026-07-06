import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
  as?: "section" | "div" | "main" | "article" | "aside";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  /** Optional muted-tinted surface. */
  tone?: "default" | "muted" | "dark";
}

const paddingMap: Record<NonNullable<SectionProps["padding"]>, string> = {
  none: "",
  sm: "py-10 md:py-14",
  md: "py-16 md:py-20",
  lg: "py-20 md:py-28",
  xl: "py-24 md:py-36",
};

const toneMap: Record<NonNullable<SectionProps["tone"]>, string> = {
  default: "bg-background",
  muted: "bg-muted/30",
  dark: "bg-[#050510]",
};

export default function Section({
  id,
  className,
  containerClassName,
  children,
  as: Comp = "section",
  padding = "lg",
  tone = "default",
}: SectionProps) {
  return (
    <Comp id={id} className={cn("relative", paddingMap[padding], toneMap[tone], className)}>
      <div className={cn("container mx-auto px-4 relative z-10", containerClassName)}>{children}</div>
    </Comp>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-14 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <div className={cn("eyebrow mb-4", align === "center" && "justify-center")}>
          <span className="h-1 w-6 rounded-full bg-primary/60" aria-hidden />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}
