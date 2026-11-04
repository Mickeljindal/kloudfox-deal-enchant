import { useEffect, useMemo, useState } from "react";
import { Activity, CheckCircle2, Globe2, Shield, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import StatusPing from "./StatusPing";

/**
 * Fully synthetic live-dashboard hero visual. No network calls.
 * Renders a mock monitor list + a response-time sparkline that
 * updates on a slow tick so the page feels "alive".
 */
export default function LiveDashboard({ className }: { className?: string }) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setTick((t) => t + 1), 2400);
    return () => window.clearInterval(id);
  }, []);

  const monitors = useMemo(
    () => [
      { host: "api.stripe.com", region: "us-east", ms: 42, status: "up" as const },
      { host: "app.linear.app", region: "eu-west", ms: 118, status: "up" as const },
      { host: "vercel.com", region: "ap-south", ms: 87, status: "up" as const },
      { host: "checkout.shopify", region: "us-west", ms: 214, status: "warn" as const },
      { host: "status.github.com", region: "global", ms: 63, status: "up" as const },
    ],
    [],
  );

  return (
    <div
      className={cn(
        "relative w-full max-w-2xl mx-auto rounded-2xl border border-white/10 bg-[#0b0b18]/80 backdrop-blur-xl shadow-elevated overflow-hidden",
        className,
      )}
      aria-label="Kloudfox monitoring dashboard preview"
    >
      {/* Chrome bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
        <div className="ml-3 flex items-center gap-2 text-[11px] text-white/50 font-mono">
          <StatusPing tone="up" />
          watch.kloudfox.com / dashboard
        </div>
      </div>

      {/* Header row */}
      <div className="grid grid-cols-3 gap-3 px-5 pt-5 pb-4 border-b border-white/5">
        <MetricCard label="Uptime · 30d" value="99.98%" icon={<TrendingUp className="h-3.5 w-3.5" />} tone="emerald" />
        <MetricCard label="Avg response" value="87ms" icon={<Activity className="h-3.5 w-3.5" />} tone="indigo" />
        <MetricCard label="Incidents" value="0" icon={<Shield className="h-3.5 w-3.5" />} tone="violet" />
      </div>

      {/* Monitor list */}
      <ul className="divide-y divide-white/5">
        {monitors.map((m, idx) => (
          <li key={m.host} className="flex items-center justify-between px-5 py-3 text-sm">
            <div className="flex items-center gap-3 min-w-0">
              <StatusPing tone={m.status} />
              <span className="text-white/85 font-medium truncate">{m.host}</span>
              <span className="hidden md:inline-flex items-center gap-1 text-[11px] text-white/40 px-1.5 py-0.5 rounded border border-white/10 bg-white/5">
                <Globe2 className="h-3 w-3" />
                {m.region}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Sparkline seed={idx + tick} status={m.status} />
              <span className="text-white/60 font-mono text-xs w-14 text-right tabular-nums">
                {jitter(m.ms, idx + tick)}ms
              </span>
            </div>
          </li>
        ))}
      </ul>

      {/* Footer badge */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-2 text-[11px] text-white/50">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
          All systems operational
        </div>
        <div className="text-[11px] text-white/40 font-mono">last check · just now</div>
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  icon,
  tone,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  tone: "emerald" | "indigo" | "violet";
}) {
  const tones = {
    emerald: "text-emerald-300 from-emerald-500/10",
    indigo: "text-indigo-300 from-indigo-500/10",
    violet: "text-violet-300 from-violet-500/10",
  } as const;
  return (
    <div className={cn("rounded-lg border border-white/5 bg-gradient-to-br to-transparent p-3", tones[tone])}>
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider opacity-80">
        {icon}
        {label}
      </div>
      <div className="mt-1 text-lg font-semibold text-white tabular-nums">{value}</div>
    </div>
  );
}

function Sparkline({ seed, status }: { seed: number; status: "up" | "warn" | "down" }) {
  // deterministic pseudo-random from seed
  const pts = Array.from({ length: 20 }, (_, i) => {
    const x = (Math.sin((seed + i) * 1.7) + 1) / 2;
    const y = 12 - Math.round(x * 10);
    return `${i * 4},${y}`;
  }).join(" ");
  const stroke =
    status === "warn"
      ? "stroke-amber-400"
      : status === "down"
        ? "stroke-red-500"
        : "stroke-emerald-400";
  return (
    <svg width="80" height="16" viewBox="0 0 80 16" className={cn("opacity-90", stroke)} aria-hidden>
      <polyline points={pts} fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function jitter(base: number, seed: number) {
  const delta = Math.round(Math.sin(seed * 1.7) * 12);
  return Math.max(20, base + delta);
}
