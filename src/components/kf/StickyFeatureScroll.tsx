import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface StickyFeature {
  eyebrow?: string;
  title: ReactNode;
  description: string;
  points?: string[];
  visual: ReactNode;
}

interface StickyFeatureScrollProps {
  features: StickyFeature[];
  className?: string;
}

/**
 * Sticky feature reveal:
 *   - Left column: feature blocks (~55vh tall on desktop).
 *   - Right column: sticky container that cross-fades between visuals as the
 *     matching left-hand block enters the middle of the viewport.
 *
 * Two hard rules for this pattern to actually work:
 *   1. No ancestor of the sticky element may have `overflow: hidden` /
 *      `overflow: auto`. Use `overflow-clip` instead if you must clip.
 *   2. The sticky element needs a definite height, not aspect-ratio, so the
 *      viewport can resolve it before its scroll parent's height is known.
 */
export default function StickyFeatureScroll({
  features,
  className,
}: StickyFeatureScrollProps) {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const idx = Number((visible[0].target as HTMLElement).dataset.idx);
          if (!Number.isNaN(idx)) setActive(idx);
        }
      },
      {
        rootMargin: "-35% 0px -35% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [features.length]);

  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.15fr)] gap-8 lg:gap-14 xl:gap-20",
        className,
      )}
    >
      {/* Left column — feature list */}
      <div>
        {features.map((f, i) => (
          <div
            key={i}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            data-idx={i}
            className={cn(
              "py-12 lg:min-h-[55vh] lg:py-24 flex flex-col justify-center",
              "transition-opacity duration-500",
              "lg:opacity-40",
              active === i && "lg:opacity-100",
            )}
          >
            <div className="max-w-lg">
              {f.eyebrow && (
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] uppercase text-primary/80 mb-4">
                  <span
                    className={cn(
                      "h-1 rounded-full transition-all",
                      active === i ? "w-8 bg-primary" : "w-4 bg-primary/40",
                    )}
                    aria-hidden
                  />
                  {f.eyebrow}
                </div>
              )}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-[-0.03em] text-balance leading-[1.02] mb-5">
                {f.title}
              </h3>
              <p className="text-lg text-foreground/60 leading-relaxed">{f.description}</p>
              {f.points && (
                <ul className="mt-6 space-y-2.5">
                  {f.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-foreground/75">
                      <span className="mt-1 shrink-0 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                        <Check className="h-2.5 w-2.5" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Mobile: inline visual */}
            <div className="lg:hidden mt-8">
              <div className="rounded-2xl border border-white/10 bg-[#0a0a17]/60 backdrop-blur-md h-[440px] shadow-elevated overflow-hidden">
                {f.visual}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right column — sticky visual (desktop only) */}
      <div className="hidden lg:block">
        <div className="sticky top-24">
          <div className="relative h-[560px] xl:h-[620px]">
            {features.map((f, i) => (
              <div
                key={i}
                aria-hidden={active !== i}
                className={cn(
                  "absolute inset-0 transition-all duration-700 ease-out",
                  active === i
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-4 scale-[0.97] pointer-events-none",
                )}
              >
                <div className="relative h-full rounded-3xl border border-white/10 bg-[#0a0a17]/80 backdrop-blur-xl shadow-elevated overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-3/4 rounded-full bg-primary/25 blur-3xl pointer-events-none"
                  />
                  <div className="relative h-full">{f.visual}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Index dots */}
          <div className="mt-6 flex items-center justify-center gap-1.5">
            {features.map((_, i) => (
              <span
                key={i}
                className={cn(
                  "h-1 rounded-full transition-all",
                  active === i ? "w-10 bg-primary" : "w-3 bg-foreground/15",
                )}
                aria-hidden
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
