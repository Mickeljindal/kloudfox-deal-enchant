import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TiltMockupProps {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees on each axis. Default 6. */
  max?: number;
  /** Optional idle "breathing" animation. */
  breathing?: boolean;
}

/**
 * 3D-tilt wrapper for hero product mockups. Applies a subtle perspective
 * transform that leans slightly on mouse move (desktop), and gently exhales
 * on an idle loop (via `.animate-breathe`).
 *
 * Reduced-motion users get a static, non-tilted mockup.
 */
export default function TiltMockup({
  children,
  className,
  max = 6,
  breathing = true,
}: TiltMockupProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const listener = () => setReduced(mq.matches);
    mq.addEventListener?.("change", listener);
    return () => mq.removeEventListener?.("change", listener);
  }, []);

  const onMouseMove = (e: React.MouseEvent) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;   // -0.5..0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const rotY = px * max * -1;
    const rotX = py * max;
    el.style.transform = `perspective(1400px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn(
        "tilt-3d tilt-mockup will-change-transform",
        breathing && !reduced && "animate-breathe",
        className,
      )}
    >
      {children}
    </div>
  );
}
