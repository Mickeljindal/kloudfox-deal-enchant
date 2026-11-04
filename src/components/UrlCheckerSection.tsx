import { Zap } from "lucide-react";
import UrlStatusChecker from "./kf/UrlStatusChecker";
import BigWordmark from "./kf/BigWordmark";
import Aurora from "./kf/Aurora";

/**
 * Free public tool band — dedicated section rather than crammed into the hero.
 */
const UrlCheckerSection = () => {
  return (
    <section className="relative overflow-clip bg-[#050510] text-white py-24 md:py-32">
      <Aurora variant="soft" />
      <div aria-hidden className="absolute inset-0 grid-bg opacity-30" />
      <BigWordmark
        text="check."
        className="top-6 text-[26vw] md:text-[18vw] lg:text-[16vw]"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 backdrop-blur px-3 py-1 text-[11px] uppercase tracking-[0.22em] font-semibold text-emerald-300 mb-6">
            <Zap className="h-3 w-3" />
            Free public tool
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-[-0.03em] text-balance leading-[1.02]">
            Curious if a site is <span className="gradient-text">up right now?</span>
          </h2>
          <p className="mt-5 text-white/60 text-base md:text-lg">
            Paste any URL. We'll ping it from your location in real time. No signup, no cookies, no catch.
          </p>
        </div>

        <UrlStatusChecker />
      </div>
    </section>
  );
};

export default UrlCheckerSection;
