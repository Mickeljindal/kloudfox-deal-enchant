import { useState } from "react";
import { Twitter, Linkedin, Link as LinkIcon, Check, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { absoluteUrl } from "@/lib/site";

interface ShareBarProps {
  title: string;
  path: string;
  className?: string;
}

/**
 * Social share bar with native Share API fallback + copy-link.
 * Renders X/Twitter, LinkedIn, Reddit, and copy-link buttons.
 */
export default function ShareBar({ title, path, className }: ShareBarProps) {
  const [copied, setCopied] = useState(false);
  const url = absoluteUrl(path);

  const shares = [
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      icon: Linkedin,
    },
    {
      name: "Reddit",
      href: `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      icon: RedditIcon,
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard blocked; noop
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // user dismissed; ignore
      }
    }
  };

  const hasNativeShare = typeof navigator !== "undefined" && "share" in navigator;

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {hasNativeShare && (
        <button
          onClick={handleNativeShare}
          aria-label="Share"
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card hover:bg-muted transition-colors"
        >
          <Share2 className="h-4 w-4" />
        </button>
      )}
      {shares.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${name}`}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
      <button
        onClick={handleCopy}
        aria-label="Copy link"
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-colors",
          copied
            ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
            : "border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground",
        )}
      >
        {copied ? <Check className="h-4 w-4" /> : <LinkIcon className="h-4 w-4" />}
      </button>
    </div>
  );
}

function RedditIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M14.5 15.4a3.3 3.3 0 0 1-2.5 1c-1 0-1.9-.35-2.5-1a.5.5 0 1 1 .7-.7c.4.4 1.1.7 1.8.7s1.4-.3 1.8-.7a.5.5 0 1 1 .7.7ZM9.5 12a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm5 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM22 12.5c0 1.3-.7 2.4-1.9 2.9.05.3.1.6.1.9 0 3-3.6 5.5-8.2 5.5S3.8 19.3 3.8 16.3c0-.3.05-.6.1-.9A3.2 3.2 0 0 1 2 12.5a3.2 3.2 0 0 1 3.2-3.2c.9 0 1.8.4 2.4 1.1a10.4 10.4 0 0 1 5.4-1.6l.9-4.2a.5.5 0 0 1 .6-.4l2.9.7a2 2 0 1 1-.2 1l-2.4-.6-.7 3.5a10.4 10.4 0 0 1 5.3 1.6c.6-.7 1.4-1.1 2.4-1.1a3.2 3.2 0 0 1 3.2 3.2Z" />
    </svg>
  );
}
