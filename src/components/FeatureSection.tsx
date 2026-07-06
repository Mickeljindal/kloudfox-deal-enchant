import {
  Bell,
  BellRing,
  Clock,
  Cpu,
  FileText,
  Mail,
  MessageCircle,
  MessageSquare,
  Route,
  Smartphone,
  Webhook,
  Zap,
  ArrowRight,
} from "lucide-react";
import Section, { SectionHeader } from "./kf/Section";
import Reveal from "./kf/Reveal";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

/* -------------------------------------------------------------------------- */
/*  Visual bits — small, purpose-built, no generic icon-in-circle             */
/* -------------------------------------------------------------------------- */

function AdaptiveVisual() {
  return (
    <div className="relative h-full flex flex-col">
      {/* Header row */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-white/40">
            check cadence · past 6 hours
          </div>
          <div className="text-lg font-mono font-semibold text-white mt-0.5">
            40s <span className="text-white/40">→</span> 15s <span className="text-white/40">→</span> 40s
          </div>
        </div>
        <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-primary">
          auto-tuned
        </span>
      </div>

      {/* Cadence timeline bars */}
      <div className="grid grid-cols-24 gap-[3px] h-14 items-end">
        {Array.from({ length: 24 }).map((_, i) => {
          // simulate cadence increasing during a suspicious window
          const isHot = i >= 8 && i <= 14;
          const h = isHot ? 90 : 40 + Math.sin(i * 0.7) * 12;
          return (
            <div
              key={i}
              className={cn(
                "rounded-t-sm",
                isHot ? "bg-amber-400/80" : "bg-primary/50",
              )}
              style={{ height: `${h}%` }}
            />
          );
        })}
      </div>

      <div className="mt-3 flex items-center justify-between text-[10px] text-white/45 font-mono">
        <span>−6h</span>
        <span className="text-amber-300">high-signal window</span>
        <span>now</span>
      </div>

      {/* Bottom callout */}
      <div className="mt-4 pt-4 border-t border-white/5 flex items-start gap-2.5">
        <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
          <Clock className="h-4 w-4 text-primary" />
        </div>
        <p className="text-xs text-white/60 leading-relaxed">
          AI raises check frequency during volatile windows, drops it back when things
          calm down. You pay for real signal, not idle probes.
        </p>
      </div>
    </div>
  );
}

function AssertionVisual() {
  return (
    <div className="rounded-lg border border-white/5 bg-black/40 font-mono text-[11px] leading-relaxed p-3">
      <div className="text-white/40">
        assert.<span className="text-emerald-400">jsonPath</span>(
        <span className="text-amber-300">"$.checkout.status"</span>)
      </div>
      <div className="text-white/40 mt-0.5">
        &nbsp;&nbsp;.<span className="text-emerald-400">equals</span>(
        <span className="text-sky-300">"ok"</span>);
      </div>
      <div className="mt-2 text-white/40">
        assert.<span className="text-emerald-400">responseTime</span>()
      </div>
      <div className="text-white/40 mt-0.5">
        &nbsp;&nbsp;.<span className="text-emerald-400">below</span>(
        <span className="text-sky-300">500</span>);
      </div>
    </div>
  );
}

function IntegrationsVisual() {
  const brands = [
    { name: "Slack",     angle: -90,  Icon: MessageSquare,   color: "text-emerald-300 bg-emerald-500/12 border-emerald-400/30",  shadow: "shadow-emerald-500/20" },
    { name: "Discord",   angle: -45,  Icon: MessageCircle,   color: "text-indigo-300  bg-indigo-500/12  border-indigo-400/30",   shadow: "shadow-indigo-500/20" },
    { name: "PagerDuty", angle: 0,    Icon: BellRing,        color: "text-red-300     bg-red-500/12     border-red-400/30",      shadow: "shadow-red-500/20" },
    { name: "Zapier",    angle: 45,   Icon: Zap,             color: "text-orange-300  bg-orange-500/12  border-orange-400/30",   shadow: "shadow-orange-500/20" },
    { name: "Webhook",   angle: 90,   Icon: Webhook,         color: "text-violet-300  bg-violet-500/12  border-violet-400/30",   shadow: "shadow-violet-500/20" },
    { name: "Email",     angle: 135,  Icon: Mail,            color: "text-sky-300     bg-sky-500/12     border-sky-400/30",      shadow: "shadow-sky-500/20" },
    { name: "SMS",       angle: 180,  Icon: Smartphone,      color: "text-fuchsia-300 bg-fuchsia-500/12 border-fuchsia-400/30",  shadow: "shadow-fuchsia-500/20" },
    { name: "Push",      angle: -135, Icon: Bell,            color: "text-teal-300    bg-teal-500/12    border-teal-400/30",     shadow: "shadow-teal-500/20" },
  ];

  return (
    <div className="relative h-48 rounded-lg border border-white/5 bg-white/[0.02] overflow-hidden">
      {/* Ambient central glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-24 rounded-full bg-primary/30 blur-3xl animate-pulse"
      />

      {/* Spokes + a signal dot that walks each spoke in turn */}
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        {brands.map((b) => {
          const rad = (b.angle * Math.PI) / 180;
          const x2 = 50 + Math.cos(rad) * 38;
          const y2 = 50 + Math.sin(rad) * 38;
          return (
            <line
              key={b.name}
              x1="50"
              y1="50"
              x2={x2}
              y2={y2}
              stroke="hsl(var(--primary))"
              strokeOpacity="0.25"
              strokeWidth="0.35"
              strokeDasharray="1 1.5"
            />
          );
        })}
        {/* Animated signal packets - one dot rotating around all spokes */}
        {brands.map((b, i) => {
          const rad = (b.angle * Math.PI) / 180;
          const x2 = 50 + Math.cos(rad) * 38;
          const y2 = 50 + Math.sin(rad) * 38;
          const dur = 1.2;
          const total = brands.length * dur;
          return (
            <circle key={`dot-${b.name}`} r="1.2" fill="hsl(var(--aurora-3))">
              <animateMotion
                path={`M 50 50 L ${x2} ${y2}`}
                dur={`${total}s`}
                begin={`${i * dur}s`}
                repeatCount="indefinite"
                keyTimes="0;0.15;1"
                keyPoints="0;1;1"
                calcMode="linear"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes={`0;${(0.05 / (brands.length))};${(0.15 / (brands.length))};1`}
                dur={`${total}s`}
                begin={`${i * dur}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}
      </svg>

      {/* Center hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-primary/40 blur-md animate-pulse" aria-hidden />
          <div className="relative h-14 w-14 rounded-full bg-gradient-to-br from-primary via-primary to-purple-600 flex items-center justify-center text-white text-[9px] font-bold shadow-lg shadow-primary/40 border border-white/20">
            Kloudfox
          </div>
        </div>
      </div>

      {/* Icon nodes on the ring */}
      {brands.map((b) => {
        const rad = (b.angle * Math.PI) / 180;
        const left = 50 + Math.cos(rad) * 38;
        const top = 50 + Math.sin(rad) * 38;
        const Icon = b.Icon;
        return (
          <div
            key={b.name}
            className={cn(
              "absolute -translate-x-1/2 -translate-y-1/2 rounded-lg border backdrop-blur-md shadow-lg whitespace-nowrap flex items-center gap-1.5 px-2 py-1",
              b.color,
              b.shadow,
            )}
            style={{ left: `${left}%`, top: `${top}%` }}
          >
            <Icon className="h-3 w-3" strokeWidth={2.2} />
            <span className="text-[9px] font-mono font-medium">{b.name}</span>
          </div>
        );
      })}

      {/* Footer stat */}
      <div className="absolute left-3 bottom-3 text-[9px] font-mono text-white/45 inline-flex items-center gap-1.5">
        <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
        20+ integrations · signed webhooks · retries built-in
      </div>
    </div>
  );
}

function ApiVisual() {
  return (
    <div className="rounded-lg border border-white/10 overflow-hidden">
      {/* Terminal chrome */}
      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.03] border-b border-white/5">
        <span className="h-2 w-2 rounded-full bg-red-500/60" />
        <span className="h-2 w-2 rounded-full bg-amber-400/60" />
        <span className="h-2 w-2 rounded-full bg-emerald-500/60" />
        <span className="ml-2 text-[9px] font-mono text-white/40">~ kloudfox cli</span>
        <span className="ml-auto text-[9px] font-mono text-emerald-300 inline-flex items-center gap-1">
          <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
          connected
        </span>
      </div>

      {/* Terminal body */}
      <div className="bg-black/45 font-mono text-[10.5px] leading-[1.7] p-3">
        <div>
          <span className="text-emerald-400">$</span>{" "}
          <span className="text-white/90">kloudfox monitor list</span>
        </div>
        <div className="text-white/50 pl-3">
          ─ 47 monitors <span className="text-emerald-300">· 44 up</span>{" "}
          <span className="text-amber-300">· 3 warn</span>
        </div>

        <div className="mt-1.5">
          <span className="text-emerald-400">$</span>{" "}
          <span className="text-white/90">kloudfox status</span>{" "}
          <span className="text-white/40">--json</span>
        </div>
        <div className="pl-3 text-white/70">
          <span className="text-white/30">{"{"}</span>
        </div>
        <div className="pl-6 text-white/70">
          <span className="text-sky-300">"uptime"</span>:{" "}
          <span className="text-amber-200">"99.98%"</span>
          <span className="text-white/40">,</span>
        </div>
        <div className="pl-6 text-white/70">
          <span className="text-sky-300">"regions_healthy"</span>:{" "}
          <span className="text-emerald-300">7</span>
          <span className="text-white/40">,</span>
        </div>
        <div className="pl-6 text-white/70">
          <span className="text-sky-300">"open_incidents"</span>:{" "}
          <span className="text-emerald-300">0</span>
        </div>
        <div className="pl-3 text-white/70">
          <span className="text-white/30">{"}"}</span>
        </div>

        <div className="mt-1.5 flex items-center">
          <span className="text-emerald-400">$</span>{" "}
          <span className="ml-2 inline-block h-3 w-[7px] bg-white/80 align-middle animate-pulse" aria-hidden />
        </div>
      </div>
    </div>
  );
}

function ReportsVisual() {
  const bars = [92, 96, 89, 99, 97, 93, 100, 98, 95, 99, 97, 98];
  return (
    <div>
      <div className="text-[10px] uppercase tracking-widest text-white/40 mb-2">
        monthly uptime — 12mo rolling
      </div>
      <div className="flex items-end gap-[3px] h-14">
        {bars.map((b, i) => (
          <div
            key={i}
            className={cn(
              "flex-1 rounded-t-sm",
              b === 100 ? "bg-emerald-400" : b >= 95 ? "bg-emerald-500/70" : "bg-amber-400/70",
            )}
            style={{ height: `${b}%` }}
          />
        ))}
      </div>
      <div className="mt-2 text-[10px] font-mono text-white/50 flex justify-between">
        <span>Jul '25</span>
        <span className="text-emerald-300">avg 96.8%</span>
        <span>Jun '26</span>
      </div>
    </div>
  );
}

function MultistepVisual() {
  const steps = [
    { name: "GET /login",       status: "ok" as const,   ms: 42,  code: 200, start: 0 },
    { name: "POST /login",      status: "ok" as const,   ms: 138, code: 200, start: 42 },
    { name: "GET /dashboard",   status: "ok" as const,   ms: 96,  code: 200, start: 180 },
    { name: "GET /cart/items",  status: "ok" as const,   ms: 74,  code: 200, start: 276 },
    { name: "POST /checkout",   status: "warn" as const, ms: 512, code: 200, start: 350 },
  ];
  const totalMs = 862;

  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.02] overflow-hidden">
      {/* Header strip */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-white/[0.02]">
        <div className="text-[10px] font-mono text-white/60">journey · acme-checkout</div>
        <div className="inline-flex items-center gap-1.5 text-[9px] text-emerald-300 font-semibold uppercase tracking-widest">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          running
        </div>
      </div>

      {/* Steps */}
      <div className="p-2 space-y-1">
        {steps.map((s, i) => (
          <div
            key={s.name}
            className="flex items-center gap-2 rounded-md border border-white/5 bg-white/[0.02] px-2.5 py-1.5"
          >
            <span className="text-[9px] font-mono w-4 text-white/40 text-right">{i + 1}</span>
            <div
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                s.status === "ok" ? "bg-emerald-400" : "bg-amber-400",
              )}
            />
            <span className="text-[11px] text-white/80 font-mono flex-1 truncate">{s.name}</span>
            <span
              className={cn(
                "text-[9px] font-mono tabular-nums px-1.5 py-0.5 rounded",
                s.status === "warn"
                  ? "text-amber-300 bg-amber-500/10"
                  : "text-emerald-300 bg-emerald-500/10",
              )}
            >
              {s.code}
            </span>
            <span
              className={cn(
                "text-[10px] font-mono tabular-nums shrink-0 w-12 text-right",
                s.status === "warn" ? "text-amber-300 font-semibold" : "text-white/45",
              )}
            >
              {s.ms}ms
            </span>
          </div>
        ))}
      </div>

      {/* Waterfall timing chart */}
      <div className="px-3 py-2 border-t border-white/5 bg-white/[0.01]">
        <div className="flex items-center justify-between text-[9px] font-mono text-white/40 mb-1.5">
          <span>timeline</span>
          <span>{totalMs}ms</span>
        </div>
        <div className="relative space-y-[3px]">
          {steps.map((s) => {
            const startPct = (s.start / totalMs) * 100;
            const widthPct = (s.ms / totalMs) * 100;
            return (
              <div key={s.name} className="relative h-1.5 rounded-sm bg-white/[0.03] overflow-hidden">
                <div
                  className={cn(
                    "absolute inset-y-0 rounded-sm",
                    s.status === "warn"
                      ? "bg-gradient-to-r from-amber-400 to-amber-500"
                      : "bg-gradient-to-r from-primary/70 to-primary",
                  )}
                  style={{ left: `${startPct}%`, width: `${widthPct}%` }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer summary */}
      <div className="flex items-center justify-between px-3 py-2 border-t border-white/5 text-[10px]">
        <span className="text-white/50">
          Total <span className="text-white font-mono tabular-nums">{totalMs}ms</span>
        </span>
        <span className="inline-flex items-center gap-1 text-emerald-300 font-semibold">
          <svg className="h-2.5 w-2.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
            <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd"/>
          </svg>
          All checks passed
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Bento card                                                                 */
/* -------------------------------------------------------------------------- */

interface CardProps {
  eyebrow?: string;
  title: string;
  description: string;
  visual: React.ReactNode;
  cta?: { label: string; href: string };
  className?: string;
  /** Emphasis: "hero" cards get bigger typography and more padding. */
  hero?: boolean;
}

function BentoCard({ eyebrow, title, description, visual, cta, className, hero }: CardProps) {
  return (
    <Reveal
      spotlight
      className={cn(
        "group relative rounded-3xl border border-white/8 bg-[#0a0a17]/70 backdrop-blur-md overflow-hidden",
        "hover:border-white/15 transition-colors flex flex-col",
        hero ? "p-7 md:p-10" : "p-6 md:p-7",
        className,
      )}
    >
      {/* Ambient corner glow */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 h-56 w-56 rounded-full bg-primary/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      />

      {/* Copy — natural size, anchored to top */}
      <div>
        {eyebrow && (
          <div className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.22em] uppercase text-primary/80 mb-3">
            <span className="h-1 w-5 rounded-full bg-primary/60" aria-hidden />
            {eyebrow}
          </div>
        )}
        <h3
          className={cn(
            "font-display font-bold text-white tracking-[-0.02em] leading-[1.05] mb-3",
            hero ? "text-2xl md:text-3xl lg:text-4xl" : "text-xl md:text-2xl",
          )}
        >
          {title}
        </h3>
        <p className={cn("text-white/55 leading-relaxed", hero ? "text-base md:text-lg" : "text-sm")}>
          {description}
        </p>
      </div>

      {/* Visual — sits directly below the copy. Card sizes to natural content
       * (grid uses items-start), so no forced stretching, no gaps. */}
      <div className={cn("relative pt-6", hero && "pt-8")}>{visual}</div>

      {cta && (
        <div className="mt-5 pt-5 border-t border-white/5">
          <Link
            to={cta.href}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/85 hover:text-white group/link"
          >
            {cta.label}
            <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      )}
    </Reveal>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section                                                                    */
/* -------------------------------------------------------------------------- */

const FeatureSection = () => {
  return (
    <Section id="details" tone="dark" padding="xl" className="text-white overflow-clip">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <SectionHeader
        eyebrow="Under the hood"
        title={
          <>
            The details that make{" "}
            <span className="gradient-text">real teams switch.</span>
          </>
        }
        subtitle="Every layer, tuned. The features flagship tools miss — because they were built for the last decade of monitoring."
      />

      {/* Asymmetric bento: 6 cards on a 3-col grid. items-start so each card
       * sizes to its own natural content — no row-stretch gaps.
       *
       *   [ adaptive (span 2, hero) ][ assertions ]
       *   [ multistep ][ integrations ][ api ]
       *   [ reports (span 3, hero, wide) ]
       */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 items-start">
        <BentoCard
          hero
          className="lg:col-span-2"
          eyebrow="Adaptive intervals"
          title="Checks that speed up when things get interesting."
          description="AI reads your recent error and latency curves and increases cadence during volatile windows — then drops it back when the storm passes. You pay for real signal, not idle noise."
          visual={<AdaptiveVisual />}
        />

        <BentoCard
          eyebrow="Content assertions"
          title="Beyond the 200 that lies."
          description="Verify keywords, JSON paths, response times, and headers. Ship monitors that catch soft failures HTTP status codes never see."
          visual={<AssertionVisual />}
        />

        <BentoCard
          eyebrow="Multi-step monitors"
          title="Watch the actual journey."
          description="Login, dashboard, checkout — as a sequence. Catch broken flows the moment they break."
          visual={<MultistepVisual />}
        />

        <BentoCard
          eyebrow="Integrations"
          title="Every tool your team already lives in."
          description="Slack, Discord, Teams, PagerDuty, Zapier, and any webhook. Two-click OAuth. Signed payloads with retries."
          visual={<IntegrationsVisual />}
          cta={{ label: "Explore integrations", href: "/integrations" }}
        />

        <BentoCard
          eyebrow="Developer API + CLI"
          title="Automate everything."
          description="Full REST API, official CLI, and a public status feed. Perfect for CI hooks, chat-ops, and internal dashboards."
          visual={<ApiVisual />}
          cta={{ label: "Read the docs", href: "/blog" }}
        />

        <BentoCard
          className="lg:col-span-3"
          hero
          eyebrow="Reports & SLAs"
          title="Uptime you can hand to procurement."
          description="Downloadable monthly and quarterly reports, timestamped and signed. Perfect for SOC 2 evidence, quarterly business reviews, and every SLA conversation you're tired of arguing."
          visual={
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
              <div className="md:col-span-2"><ReportsVisual /></div>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
                {[
                  { label: "Downloadable PDF", icon: <FileText className="h-4 w-4" /> },
                  { label: "CSV export", icon: <FileText className="h-4 w-4" /> },
                  { label: "Signed audit log", icon: <Cpu className="h-4 w-4" /> },
                  { label: "Per-region breakdown", icon: <Route className="h-4 w-4" /> },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 flex items-center gap-2 text-xs text-white/75"
                  >
                    <span className="text-primary shrink-0">{f.icon}</span>
                    {f.label}
                  </div>
                ))}
              </div>
            </div>
          }
        />
      </div>
    </Section>
  );
};

export default FeatureSection;
