import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  /** Numeric value to count up to. Supports decimals. */
  value: number;
  /** Prefix like "$" or empty. */
  prefix?: string;
  /** Suffix like "K+", "%", "s". */
  suffix?: string;
  /** Fixed decimal places. */
  decimals?: number;
  /** Duration in ms. */
  duration?: number;
  className?: string;
}

/**
 * Animated count-up on scroll. Uses rAF for smooth easing.
 */
export default function StatCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1400,
  className,
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || started) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplay(value);
      setStarted(true);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      });
    });
    io.observe(el);
    return () => io.disconnect();
  }, [started, value]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // easeOutQuint
      const eased = 1 - Math.pow(1 - t, 5);
      setDisplay(value * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, value, duration]);

  const formatted = display.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
