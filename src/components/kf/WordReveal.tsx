import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface WordRevealProps {
  /** Plain text — will be split into word-level spans. */
  text: string;
  className?: string;
  /** Delay before the first word starts, in seconds. */
  startDelay?: number;
  /** Time between consecutive words, in seconds. */
  step?: number;
  /** Optional wrapper element. */
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  /** Optional nodes to render *after* the animated words (e.g. gradient spans). */
  after?: ReactNode;
}

/**
 * Per-word staggered fade-in for hero headlines. Each word animates in with
 * translate + blur — the huly move for making a headline feel like it's being
 * spoken rather than typed.
 *
 * Reduced-motion users get all words instantly at final position.
 */
export default function WordReveal({
  text,
  className,
  startDelay = 0.02,
  step = 0.055,
  as: Tag = "h1",
  after,
}: WordRevealProps) {
  const words = text.split(/(\s+)/); // preserve whitespace as tokens
  let wordIndex = 0;

  return (
    <Tag className={cn(className)}>
      {words.map((token, i) => {
        if (/^\s+$/.test(token)) return <span key={i}>{token}</span>;
        const delay = startDelay + wordIndex * step;
        wordIndex += 1;
        return (
          <span
            key={i}
            className="word-in"
            style={{ animationDelay: `${delay}s` }}
          >
            {token}
          </span>
        );
      })}
      {after}
    </Tag>
  );
}
