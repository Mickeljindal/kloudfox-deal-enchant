import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import { MIGRATION } from "@/lib/site";

const STORAGE_KEY = "kf-migration-banner";

/**
 * Site-wide announcement strip for the KloudFox → TorixPulse transition.
 *
 * Light-mode, high-contrast bar that sits above the (dark) header on every
 * page with chrome. Dismissal is remembered in localStorage per message
 * `version` (bump the version in MIGRATION to re-show after a wording
 * change). All copy and links come from MIGRATION in `@/lib/site`.
 */
const AnnouncementBanner = () => {
  const [dismissed, setDismissed] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try {
      return window.localStorage.getItem(STORAGE_KEY) === MIGRATION.version;
    } catch {
      return false;
    }
  });

  if (!MIGRATION.enabled || dismissed) return null;

  const dismiss = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, MIGRATION.version);
    } catch {
      /* storage unavailable — dismiss for this session only */
    }
    setDismissed(true);
  };

  const { banner, partner, path } = MIGRATION;

  return (
    <div className="relative z-[60] w-full border-b border-violet-200 bg-gradient-to-r from-violet-50 via-white to-emerald-50 text-slate-900 shadow-[0_8px_30px_-12px_rgba(76,29,149,0.45)]">
      {/* subtle brand glow on the right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_130%_at_88%_50%,rgba(16,185,129,0.12),transparent)]"
      />

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col gap-3 py-3.5 pr-9 md:flex-row md:items-center md:gap-4 md:py-3">
          {/* KloudFox → TorixPulse transition mark */}
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-bold shadow-sm shrink-0">
            <span className="text-slate-700">KloudFox</span>
            <ArrowRight className="h-3.5 w-3.5 text-emerald-600" aria-label="transitioning to" />
            <span className="bg-gradient-to-r from-violet-600 to-emerald-600 bg-clip-text text-transparent">
              TorixPulse
            </span>
          </span>

          {/* Copy */}
          <p className="min-w-0 flex-1 text-sm leading-snug md:text-[15px]">
            <span className="font-bold text-slate-900">{banner.headline}</span>{" "}
            <span className="hidden text-slate-600 md:inline">{banner.description}</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-md shadow-violet-600/25 transition-transform hover:scale-[1.02] sm:text-sm"
            >
              {banner.primaryCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              to={path}
              className="inline-flex items-center rounded-lg border border-slate-300 bg-white/70 px-3.5 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-white sm:text-sm"
            >
              {banner.secondaryCta}
            </Link>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-2 top-3 rounded-md p-1.5 text-slate-500 transition-colors hover:bg-slate-900/5 hover:text-slate-900 md:top-1/2 md:-translate-y-1/2"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default AnnouncementBanner;
