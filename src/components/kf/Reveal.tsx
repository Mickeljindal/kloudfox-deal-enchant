import { ElementType, MouseEvent, ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  /**
   * When true, adds the .spotlight (+ .spotlight-border) hooks and wires an
   * onMouseMove handler that updates --x / --y CSS custom properties on the
   * root element so the radial gradient follows the cursor.
   */
  spotlight?: boolean;
}

/**
 * Scroll-triggered reveal wrapper. Adds an opacity+translate fade
 * once the element enters the viewport (respects reduced-motion).
 * Optionally doubles as a cursor spotlight surface.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  spotlight = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "-40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onMouseMove = (e: MouseEvent) => {
    if (!spotlight) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      onMouseMove={spotlight ? onMouseMove : undefined}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        spotlight && "spotlight spotlight-border",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
