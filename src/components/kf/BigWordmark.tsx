import { cn } from "@/lib/utils";

interface BigWordmarkProps {
  text?: string;
  /** Positioning + size classes. Provide everything: top/bottom, left, size. */
  className?: string;
}

/**
 * Enormous background wordmark — huge, faded ghost text used to anchor
 * hero + section rhythm. Absolutely positioned. Wrap the parent with
 * `relative` and either `overflow-hidden` or `overflow-clip`.
 *
 * IMPORTANT: this component intentionally does NOT default any vertical
 * position — callers pass a `top-*` or `bottom-*` class along with any
 * size overrides. That keeps positioning explicit and predictable.
 */
export default function BigWordmark({ text = "kloudfox.", className }: BigWordmarkProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "bg-wordmark",
        "left-1/2 -translate-x-1/2",
        "text-[16vw] md:text-[14vw] lg:text-[13vw]",
        className,
      )}
    >
      {text}
    </div>
  );
}
