import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";
import { MIGRATION } from "@/lib/site";

/**
 * Homepage transition call-out for KloudFox → TorixPulse.
 *
 * A prominent light card on the dark homepage, placed just below the hero.
 * Gated by MIGRATION.enabled so it disappears everywhere from one switch.
 */
const points = [
  "AppSumo Lifetime Deal honoured",
  "No new purchase or subscription",
  "Account already created for your email",
  "Keep your same registered email",
];

export default function TransitionCallout() {
  if (!MIGRATION.enabled) return null;

  const { partner, path, parentCompany } = MIGRATION;

  return (
    <section
      aria-labelledby="transition-callout-heading"
      className="relative overflow-hidden bg-[#050510] py-16 md:py-20"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-[70%] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <Reveal>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-emerald-50 p-7 shadow-2xl md:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl"
            />

            <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              {/* Copy + CTAs */}
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-bold shadow-sm">
                  <span className="text-slate-700">KloudFox</span>
                  <ArrowRight className="h-3.5 w-3.5 text-emerald-600" aria-label="transitioning to" />
                  <span className="bg-gradient-to-r from-violet-600 to-emerald-600 bg-clip-text text-transparent">
                    TorixPulse
                  </span>
                </div>

                <h2
                  id="transition-callout-heading"
                  className="text-balance font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
                >
                  KloudFox is transitioning to{" "}
                  <span className="bg-gradient-to-r from-violet-600 to-emerald-600 bg-clip-text text-transparent">
                    TorixPulse
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600 md:text-base">
                  {parentCompany} has partnered with {partner.company} to bring you an improved
                  monitoring experience. Your AppSumo Lifetime Deal benefits remain honoured — your
                  account is ready, you just reconfigure your monitors and status pages.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-xl bg-gradient-to-r from-violet-600 to-emerald-600 px-6 text-base font-semibold text-white shadow-lg shadow-violet-600/25 hover:opacity-95"
                  >
                    <a href={partner.url} target="_blank" rel="noopener noreferrer">
                      Explore Your TorixPulse Account
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-12 rounded-xl border-slate-300 bg-white/70 px-6 text-base font-semibold text-slate-800 hover:bg-white"
                  >
                    <Link to={path}>Learn About the Transition</Link>
                  </Button>
                </div>
              </div>

              {/* Reassurance list */}
              <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 backdrop-blur-sm">
                <div className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-900">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  Your lifetime deal is protected
                </div>
                <ul className="space-y-2.5">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <Check className="h-3 w-3" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
