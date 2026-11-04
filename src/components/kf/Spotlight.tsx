import { ReactNode, useRef, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface SpotlightProps {
  children: ReactNode;
  className?: string;
  /** Draws a soft radial gradient hairline border on hover. */
  border?: boolean;
  /** Element type to render. Defaults to div. */
  as?: "div" | "article" | "section" | "li";
}

/**
 * Cursor-tracked spotlight wrapper. Sets --x / --y custom properties on the
 * root element so the `.spotlight` (and optional `.spotlight-border`) CSS
 * hooks render a radial gradient that follows the cursor.
 *
 * Wrap any interactive card in this component to get the huly-style hover glow.
 */
export default function Spotlight({
  children,
  className,
  border = true,
  as = "div",
}: SpotlightProps) {
  const ref = useRef<HTMLElement | null>(null);

  const onMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  const Tag = as as unknown as "div";

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      onMouseMove={onMouseMove}
      className={cn("spotlight", border && "spotlight-border", className)}
    >
      {children}
    </Tag>
  );
}
