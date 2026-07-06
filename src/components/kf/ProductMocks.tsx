import { useEffect, useMemo, useState } from "react";
import {
  Bell,
  ChevronDown,
  Check,
  CircleAlert,
  Clock,
  ExternalLink,
  Folder,
  Globe2,
  ListFilter,
  LayoutGrid,
  Lock,
  Play,
  Plus,
  RefreshCw,
  Search,
  Settings2,
  Sparkles,
  Shield,
  ShieldCheck,
  Smile,
  Sun,
  Trash2,
} from "lucide-react";
import StatusPing from "./StatusPing";
import PingBeacon from "./PingBeacon";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*  Shared browser chrome — the outer frame around every product mockup       */
/* -------------------------------------------------------------------------- */

function BrowserChrome({
  url,
  children,
  contentClassName,
}: {
  url: string;
  children: React.ReactNode;
  contentClassName?: string;
}) {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/5 shrink-0 bg-[#0b0b18]">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        <div className="ml-3 flex items-center gap-2 text-[11px] text-white/50 font-mono truncate">
          <StatusPing tone="up" size="sm" />
          {url}
        </div>
      </div>
      <div className={cn("flex-1 relative overflow-hidden", contentClassName)}>{children}</div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Kloudfox top navbar — the dark bar in every real Kloudfox screen          */
/* -------------------------------------------------------------------------- */

function FoxMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("h-5 w-5", className)} aria-hidden>
      <defs>
        <linearGradient id="fox-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <path
        d="M6 8l6-3 4 2 4-2 6 3-1 8-4 5h-3l-1 3h-2l-1-3h-3l-4-5z"
        fill="url(#fox-body)"
      />
      <circle cx="12.5" cy="14" r="1.2" fill="white" />
      <circle cx="19.5" cy="14" r="1.2" fill="white" />
    </svg>
  );
}

function ProductNavbar({
  active = "Monitors",
  compact = false,
}: {
  active?: string;
  compact?: boolean;
}) {
  const links = ["Monitors", "Status Pages", "Incidents", "Integrations", "Users", "Billing"];
  return (
    <div className="flex items-center gap-3 px-3 md:px-4 py-2.5 bg-[#0a0a1a] text-white shrink-0">
      <div className="flex items-center gap-1.5 shrink-0">
        <FoxMark />
        <span className="font-display font-bold text-sm">KloudFox</span>
      </div>

      {!compact && (
        <div className="hidden md:flex items-center gap-1.5 ml-2 rounded-md bg-white/[0.06] px-2.5 py-1 min-w-[160px] max-w-[220px]">
          <Search className="h-3 w-3 text-white/40" />
          <span className="text-[11px] text-white/40">Search monitors</span>
        </div>
      )}

      <nav className="hidden lg:flex items-center gap-4 text-[11px] font-medium ml-auto lg:ml-4">
        {links.map((l) => (
          <span
            key={l}
            className={cn(
              "transition-colors",
              l === active
                ? "text-white border-b-2 border-primary pb-0.5"
                : "text-white/55 hover:text-white",
            )}
          >
            {l}
          </span>
        ))}
      </nav>

      <div className="ml-auto lg:ml-0 flex items-center gap-2.5 shrink-0">
        <Sun className="h-3.5 w-3.5 text-white/50" />
        <div className="relative">
          <Bell className="h-4 w-4 text-white/70" />
          <span className="absolute -top-1.5 -right-1.5 h-4 min-w-4 px-1 rounded-full bg-red-500 text-[8px] font-bold text-white flex items-center justify-center">
            54
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-primary to-purple-600 text-white text-[9px] flex items-center justify-center font-bold">
            AM
          </div>
          {!compact && (
            <div className="hidden md:block">
              <div className="text-[10px] font-semibold leading-none">Alex Morgan</div>
              <div className="text-[9px] text-white/40 leading-tight mt-0.5">alex@northwind.dev</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  1. Main dashboard — the hero mockup                                        */
/* -------------------------------------------------------------------------- */

interface Monitor {
  name: string;
  host: string;
  status: "up" | "down";
  availability: string;
  downtime: string;
  interval: string;
  created: string;
  /** 12 data points for the mini-chart, roughly 0-1 range */
  chart: number[];
}

const HERO_MONITORS: Monitor[] = [
  {
    name: "app.acme.io",
    host: "app.acme.io",
    status: "up",
    availability: "100.0",
    downtime: "0.0",
    interval: "40 seconds",
    created: "Jul 5, 2026",
    chart: [0.5, 0.48, 0.55, 0.52, 0.6, 0.55, 0.62, 0.58, 0.6, 0.55, 0.5, 0.52],
  },
  {
    name: "encounter-api.dev",
    host: "encounter-api.dev",
    status: "down",
    availability: "00.00",
    downtime: "00.00",
    interval: "3 minutes",
    created: "Jul 3, 2026",
    chart: [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4],
  },
  {
    name: "checkout.serif.dev",
    host: "checkout.serif.dev",
    status: "up",
    availability: "99.92",
    downtime: "0.08",
    interval: "60 minutes",
    created: "Feb 13, 2025",
    chart: [0.6, 0.55, 0.7, 0.5, 0.62, 0.58, 0.65, 0.6, 0.68, 0.62, 0.6, 0.65],
  },
  {
    name: "status.hoot.io",
    host: "status.hoot.io",
    status: "up",
    availability: "99.95",
    downtime: "0.05",
    interval: "5 minutes",
    created: "Feb 13, 2025",
    chart: [0.55, 0.6, 0.58, 0.62, 0.6, 0.58, 0.6, 0.62, 0.58, 0.6, 0.58, 0.6],
  },
];

function MiniChart({ data, down }: { data: number[]; down?: boolean }) {
  const w = 100;
  const h = 34;
  const max = Math.max(...data, 1);
  const step = w / (data.length - 1);
  const points = data
    .map((d, i) => `${i * step},${h - (d / max) * h * 0.85 - 3}`)
    .join(" ");
  const stroke = down ? "#EF4444" : "#3B82F6";
  const fill = down ? "#FEE2E2" : "#DBEAFE";
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" aria-hidden>
      <defs>
        <linearGradient id={`chart-fill-${down ? "d" : "u"}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={fill} stopOpacity="0.9" />
          <stop offset="100%" stopColor={fill} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        points={`0,${h} ${points} ${w},${h}`}
        fill={`url(#chart-fill-${down ? "d" : "u"})`}
      />
      <polyline
        points={points}
        fill="none"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MonitorCard({ m }: { m: Monitor }) {
  const isUp = m.status === "up";
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-3.5 hover:border-primary/40 transition-colors">
      <div className="flex items-start justify-between gap-2 mb-2.5">
        <div className="min-w-0">
          <div className="text-[13px] font-semibold text-gray-900 truncate">{m.name}</div>
          <div className="text-[10px] text-gray-500 truncate">{m.host}</div>
        </div>
        <div className="text-[9px] text-gray-400 shrink-0 whitespace-nowrap">
          Created: {m.created}
        </div>
      </div>
      <div className="flex items-end justify-between gap-3">
        <div className="min-w-0">
          <div
            className={cn(
              "text-[32px] leading-none font-black tracking-tight",
              isUp ? "text-emerald-500" : "text-red-500",
            )}
          >
            {isUp ? "UP" : "DOWN"}
          </div>
          <div className="mt-1.5 text-[9px] text-gray-500 uppercase tracking-wider whitespace-nowrap">
            AVAIL <span className="text-gray-800 font-mono">{m.availability}%</span>
            <span className="mx-1 text-gray-300">·</span>
            DOWN <span className="text-gray-800 font-mono">{m.downtime}%</span>
          </div>
        </div>
        <div className="w-24 h-10 shrink-0">
          <MiniChart data={m.chart} down={!isUp} />
        </div>
      </div>
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
        <div className="text-[10px] text-primary font-medium">Checked every {m.interval}</div>
        <div className="flex items-center gap-1">
          <button className="h-5 w-5 rounded-full border border-primary/30 text-primary flex items-center justify-center">
            <Play className="h-2.5 w-2.5 fill-current" />
          </button>
          <button className="h-5 w-5 rounded-full border border-gray-200 text-gray-400 flex items-center justify-center">
            <Settings2 className="h-2.5 w-2.5" />
          </button>
          <button className="h-5 w-5 rounded-full border border-red-200 text-red-500 flex items-center justify-center">
            <Trash2 className="h-2.5 w-2.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function MockKloudfoxDashboard() {
  return (
    <div className="h-full flex flex-col bg-gray-50 text-gray-900">
      <ProductNavbar active="Monitors" />

      <div className="flex-1 overflow-hidden p-4 md:p-5 flex flex-col gap-3.5">
        {/* Greeting bar */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base md:text-lg font-bold text-gray-900 flex items-center gap-1.5">
              Hello <span className="inline-block">👋</span> Alex Morgan
            </h3>
            <p className="text-[11px] text-gray-500 mt-0.5">Welcome to Kloudfox</p>
          </div>
          <button className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold px-3.5 py-1.5 shadow-sm inline-flex items-center gap-1.5 shrink-0">
            <Plus className="h-3 w-3" strokeWidth={3} />
            Add Monitor
          </button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="rounded-xl border-2 border-primary bg-white px-3 py-2.5 shadow-sm">
            <div className="text-[9px] font-semibold text-gray-500 uppercase tracking-wider">
              Total Monitors
            </div>
            <div className="text-2xl md:text-3xl font-bold text-gray-900 mt-0.5 tabular-nums">19</div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white px-3 py-2.5">
            <div className="text-[9px] font-semibold text-gray-500 uppercase tracking-wider">UP</div>
            <div className="text-2xl md:text-3xl font-bold text-emerald-500 mt-0.5 tabular-nums">15</div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white px-3 py-2.5">
            <div className="text-[9px] font-semibold text-gray-500 uppercase tracking-wider">DOWN</div>
            <div className="text-2xl md:text-3xl font-bold text-red-500 mt-0.5 tabular-nums">3</div>
          </div>
        </div>

        {/* Filter bar */}
        <div className="rounded-xl border border-gray-200 bg-white px-2 py-1.5 flex items-center gap-2 text-[11px]">
          <div className="rounded-md border border-gray-200 px-2 py-1 flex items-center gap-1 text-gray-600">
            <Check className="h-2.5 w-2.5" /> Select
          </div>
          <div className="rounded-md bg-primary text-white px-2 py-1 font-semibold inline-flex items-center gap-1">
            <LayoutGrid className="h-2.5 w-2.5" /> Grid
          </div>
          <div className="rounded-md text-gray-500 px-2 py-1 inline-flex items-center gap-1">
            <ListFilter className="h-2.5 w-2.5" /> List
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="rounded-md border border-gray-200 px-2 py-1 text-gray-600 inline-flex items-center gap-1">
              🕒 Newest First
              <ChevronDown className="h-2.5 w-2.5" />
            </div>
            <div className="rounded-md bg-primary text-white px-2 py-1 font-semibold inline-flex items-center gap-1">
              <Plus className="h-2.5 w-2.5" /> New Group
            </div>
          </div>
        </div>

        {/* Monitors card */}
        <div className="flex-1 min-h-0 rounded-xl border border-gray-200 bg-white overflow-hidden flex flex-col">
          <div className="px-3 py-2.5 border-b border-gray-100 flex items-center gap-2 shrink-0">
            <div className="h-6 w-6 rounded-md bg-primary/15 text-primary flex items-center justify-center">
              <Folder className="h-3 w-3" />
            </div>
            <div>
              <div className="text-[13px] font-bold text-gray-900">Monitors</div>
              <div className="text-[9px] text-gray-500">19 monitors</div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-full">
              {HERO_MONITORS.map((m) => (
                <MonitorCard key={m.host} m={m} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  2. Monitor detail — the drill-down view (used for AI anomaly flagship)    */
/* -------------------------------------------------------------------------- */

function DetailLineChart({ withAnomaly = true }: { withAnomaly?: boolean }) {
  const w = 480;
  const h = 180;
  const N = 30;

  const points = useMemo(() => {
    const pts: number[] = [];
    for (let i = 0; i < N; i++) {
      const base = 60 + Math.sin(i * 0.5) * 10 + Math.cos(i * 0.9) * 6;
      const noise = (Math.sin(i * 3.1) + 1) * 3;
      let v = base + noise;
      if (withAnomaly && i > 20) v += Math.pow(i - 20, 1.7) * 3;
      pts.push(v);
    }
    return pts;
  }, [withAnomaly]);

  const max = 180;
  const step = w / (N - 1);
  const line = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * h}`)
    .join(" ");
  const area = `${line} L ${w} ${h} L 0 ${h} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" aria-hidden>
      <defs>
        <linearGradient id="detail-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Horizontal gridlines */}
      {[0.2, 0.4, 0.6, 0.8].map((t) => (
        <line
          key={t}
          x1="0"
          x2={w}
          y1={h * t}
          y2={h * t}
          stroke="#E5E7EB"
          strokeDasharray="3 4"
          strokeWidth="0.7"
        />
      ))}

      <path d={area} fill="url(#detail-fill)" />
      <path
        d={line}
        fill="none"
        stroke="#3B82F6"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Anomaly point */}
      {withAnomaly && (
        <g>
          <circle
            cx={(N - 3) * step}
            cy={h - (points[N - 3] / max) * h}
            r="9"
            fill="#F59E0B"
            opacity="0.2"
          />
          <circle
            cx={(N - 3) * step}
            cy={h - (points[N - 3] / max) * h}
            r="4.5"
            fill="#F59E0B"
          />
        </g>
      )}
    </svg>
  );
}

export function MockMonitorDetail() {
  return (
    <BrowserChrome url="watch.kloudfox.com/monitors/ecnorthseattle">
      <div className="h-full bg-gray-50 text-gray-900 flex flex-col overflow-hidden">
        <ProductNavbar active="Monitors" compact />

        <div className="flex-1 overflow-hidden p-4 flex flex-col gap-3">
          {/* Back + Refresh */}
          <div className="flex items-center justify-between text-[10px] shrink-0">
            <div className="text-primary font-medium">‹ Monitors</div>
            <div className="text-gray-500 inline-flex items-center gap-1">
              <RefreshCw className="h-2.5 w-2.5" />
              Refresh
            </div>
          </div>

          {/* Header card */}
          <div className="rounded-xl border border-gray-200 bg-white px-3.5 py-3 flex items-center gap-3 shrink-0">
            <div className="h-9 w-9 rounded-full bg-emerald-500/15 flex items-center justify-center relative">
              <Smile className="h-5 w-5 text-emerald-500" strokeWidth={2.2} />
              <span className="absolute inset-0">
                <PingBeacon tone="up" size="lg" rings={2} className="opacity-30" />
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                app.acme.io <ExternalLink className="h-3 w-3 text-gray-400" />
              </div>
              <div className="text-[10px] text-gray-500 flex items-center gap-1.5 mt-0.5">
                <span className="text-emerald-500 font-semibold">UP</span>
                <span className="text-gray-300">·</span>
                Checked every 40 seconds
              </div>
            </div>
            <div className="hidden md:inline-flex items-center gap-1.5 text-[10px] text-gray-500 rounded-md border border-gray-200 px-2 py-1">
              🇺🇸 North America
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 shrink-0">
            {[
              { label: "Currently up for", value: "5d 2h 47m", tone: "text-gray-900" },
              { label: "Downtime", value: "0.0%", tone: "text-gray-900" },
              { label: "Availability", value: "100.0%", tone: "text-emerald-600" },
              { label: "SSL Expiration", value: "87 days", tone: "text-gray-900", small: true },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-gray-200 bg-white px-3 py-2">
                <div className="text-[9px] font-medium text-gray-500 uppercase tracking-wider">
                  {s.label}
                </div>
                <div
                  className={cn(
                    "mt-0.5 font-bold tabular-nums",
                    s.small ? "text-sm" : "text-base",
                    s.tone,
                  )}
                >
                  {s.value}
                </div>
              </div>
            ))}
          </div>

          {/* Region + time range */}
          <div className="flex items-center justify-between text-[10px] shrink-0">
            <div className="rounded-md border border-gray-200 bg-white px-2 py-1 inline-flex items-center gap-1.5 text-gray-700">
              🇺🇸 North America
              <ChevronDown className="h-2.5 w-2.5" />
            </div>
            <div className="inline-flex items-center rounded-md border border-gray-200 bg-white p-0.5">
              {["1 Hour", "Day", "Week", "Month"].map((t, i) => (
                <span
                  key={t}
                  className={cn(
                    "px-2 py-0.5 rounded-sm text-[10px]",
                    i === 0 ? "bg-primary text-white font-semibold" : "text-gray-500",
                  )}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Chart card */}
          <div className="flex-1 min-h-0 rounded-xl border border-gray-200 bg-white p-3 relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <div className="inline-flex items-center gap-2 text-[10px] text-gray-500">
                <span className="inline-flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  UP
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  DOWN
                </span>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 text-amber-700 text-[9px] font-semibold px-2 py-0.5">
                <Sparkles className="h-2.5 w-2.5" />
                AI · anomaly at 22:21
              </span>
            </div>
            <div className="h-32">
              <DetailLineChart />
            </div>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

/* -------------------------------------------------------------------------- */
/*  3. Multi-region view                                                       */
/* -------------------------------------------------------------------------- */

const REGIONS = [
  { id: "iad", label: "us-east",  top: "36%", left: "26%", tone: "up" as const,   ms: 42  },
  { id: "sfo", label: "us-west",  top: "34%", left: "14%", tone: "up" as const,   ms: 88  },
  { id: "dub", label: "eu-west",  top: "26%", left: "48%", tone: "up" as const,   ms: 118 },
  { id: "fra", label: "eu-cen",   top: "30%", left: "54%", tone: "up" as const,   ms: 141 },
  { id: "bom", label: "ap-south", top: "44%", left: "70%", tone: "up" as const,   ms: 214 },
  { id: "sin", label: "ap-se",    top: "58%", left: "78%", tone: "warn" as const, ms: 340 },
  { id: "syd", label: "au-east",  top: "80%", left: "88%", tone: "up" as const,   ms: 260 },
  { id: "gru", label: "sa-east",  top: "72%", left: "34%", tone: "up" as const,   ms: 190 },
];

export function MockGlobe() {
  return (
    <BrowserChrome url="watch.kloudfox.com/regions">
      <div className="h-full bg-gray-50 text-gray-900 p-4 flex flex-col overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-[9px] uppercase tracking-widest text-gray-500">
              probes · 4 continents
            </div>
            <div className="text-sm font-bold text-gray-900">Global check matrix</div>
          </div>
          <div className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-[10px] font-semibold text-emerald-700 inline-flex items-center gap-1.5">
            <StatusPing tone="up" size="sm" />
            7 of 8 healthy
          </div>
        </div>

        <div className="relative flex-1 rounded-xl overflow-hidden bg-gradient-to-br from-primary/8 via-primary/3 to-transparent border border-gray-200">
          <svg
            className="absolute inset-0 h-full w-full opacity-40"
            viewBox="0 0 100 60"
            preserveAspectRatio="none"
            aria-hidden
          >
            {[15, 30, 45].map((y) => (
              <ellipse
                key={y}
                cx="50"
                cy="30"
                rx={49 - (30 - y) * 0.6}
                ry={y}
                stroke="#6366F1"
                fill="none"
                strokeWidth="0.25"
                opacity="0.35"
              />
            ))}
            {[10, 30, 50, 70, 90].map((x) => (
              <line key={x} x1={x} y1="4" x2={x} y2="56" stroke="#6366F1" strokeWidth="0.2" opacity="0.25" />
            ))}
            <line x1="4" y1="30" x2="96" y2="30" stroke="#6366F1" strokeWidth="0.3" opacity="0.5" />
          </svg>

          {REGIONS.map((r) => (
            <div
              key={r.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1"
              style={{ top: r.top, left: r.left }}
            >
              <StatusPing tone={r.tone} size="md" />
              <span
                className={cn(
                  "text-[9px] font-mono px-1.5 py-0.5 rounded border shadow-sm",
                  r.tone === "warn"
                    ? "text-amber-700 bg-amber-50 border-amber-200"
                    : "text-gray-600 bg-white border-gray-200",
                )}
              >
                {r.label}
              </span>
            </div>
          ))}

          {/* Cross-region confirmation arc */}
          <svg
            className="absolute inset-0 h-full w-full pointer-events-none"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M 30% 34% Q 45% 8% 55% 30%"
              fill="none"
              stroke="#7C3AED"
              strokeWidth="1.2"
              strokeDasharray="3 4"
              opacity="0.8"
            />
          </svg>
        </div>

        <div className="mt-3 grid grid-cols-4 gap-2 text-[10px]">
          {[
            { label: "avg latency", value: "142ms" },
            { label: "regions healthy", value: "7 / 8" },
            { label: "cadence", value: "40s" },
            { label: "confirm rule", value: "2 × 2" },
          ].map((s) => (
            <div key={s.label} className="rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-center">
              <div className="text-gray-500 uppercase tracking-widest text-[8px]">{s.label}</div>
              <div className="text-gray-900 font-mono font-semibold mt-0.5">{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </BrowserChrome>
  );
}

/* -------------------------------------------------------------------------- */
/*  4. Smart alerts — Slack integration view (stays dark, it's Slack)         */
/* -------------------------------------------------------------------------- */

const ALERTS = [
  {
    channel: "#incident-response",
    avatar: "K",
    tone: "down" as const,
    title: "P1 · checkout-api returning 5xx",
    body:
      "Error rate 8.2% from us-east and eu-west · 12 monitors affected · runbook: rollback payments@v481",
    time: "just now",
  },
  {
    channel: "#alerts",
    avatar: "K",
    tone: "warn" as const,
    title: "SSL renewal in 7 days · api.acme.io",
    body: "Cert expires 2026-07-14. ACME renewal is scheduled for 2026-07-10.",
    time: "3m ago",
  },
  {
    channel: "#alerts",
    avatar: "K",
    tone: "up" as const,
    title: "All clear · checkout-api",
    body: "Rollback confirmed · error rate back to 0.02% across all regions.",
    time: "12m ago",
  },
];

export function MockAlerts() {
  return (
    <BrowserChrome url="acme.slack.com/messages/incident-response">
      <div className="p-4 md:p-5 h-full flex flex-col gap-3 bg-[#0e1116]">
        {ALERTS.map((a, i) => (
          <div
            key={i}
            className={cn(
              "rounded-xl border p-4 flex gap-3",
              a.tone === "down" && "border-red-500/30 bg-red-500/[0.06]",
              a.tone === "warn" && "border-amber-400/25 bg-amber-500/[0.05]",
              a.tone === "up" && "border-emerald-500/25 bg-emerald-500/[0.05]",
            )}
          >
            <div className="shrink-0 h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-purple-600 text-white flex items-center justify-center text-sm font-bold">
              {a.avatar}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-semibold text-white">Kloudfox</span>
                <span className="text-[10px] text-white/40 font-mono">APP</span>
                <span className="text-[10px] text-white/40">{a.channel}</span>
                <span className="ml-auto text-[10px] text-white/40 shrink-0">{a.time}</span>
              </div>
              <div className="mt-1 flex items-center gap-2 text-sm">
                <StatusPing tone={a.tone} size="sm" />
                <span
                  className={cn(
                    "font-medium",
                    a.tone === "down" && "text-red-200",
                    a.tone === "warn" && "text-amber-200",
                    a.tone === "up" && "text-emerald-200",
                  )}
                >
                  {a.title}
                </span>
              </div>
              <p className="text-[13px] text-white/60 leading-relaxed mt-1">{a.body}</p>
              {a.tone === "down" && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {["Acknowledge", "Open runbook", "Roll back"].map((btn, j) => (
                    <span
                      key={btn}
                      className={cn(
                        "rounded-md border px-2 py-1 text-[11px] font-medium",
                        j === 0
                          ? "border-red-400/40 bg-red-500/10 text-red-200"
                          : "border-white/10 bg-white/5 text-white/75",
                      )}
                    >
                      {btn}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </BrowserChrome>
  );
}

/* -------------------------------------------------------------------------- */
/*  5. SSL monitoring                                                          */
/* -------------------------------------------------------------------------- */

export function MockSSL() {
  const domains = [
    { host: "api.acme.io", grade: "A+", tone: "up" as const, days: 62 },
    { host: "checkout.serif.dev", grade: "A", tone: "up" as const, days: 41 },
    { host: "cdn.craft.co", grade: "A-", tone: "warn" as const, days: 12 },
    { host: "legacy.internal", grade: "B", tone: "warn" as const, days: 3 },
  ];

  return (
    <BrowserChrome url="watch.kloudfox.com/ssl">
      <div className="p-4 md:p-5 h-full flex flex-col bg-gray-50 text-gray-900 overflow-hidden">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="text-[9px] uppercase tracking-widest text-gray-500">
              certificates · hourly checks
            </div>
            <div className="text-sm font-bold text-gray-900">4 domains monitored</div>
          </div>
          <Lock className="h-4 w-4 text-emerald-500" />
        </div>

        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 mb-3 flex items-center gap-3 shrink-0">
          <div className="h-9 w-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-600 shrink-0">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-gray-900">api.acme.io</div>
            <div className="text-[11px] text-gray-600 mt-0.5">
              TLS 1.3 · Let's Encrypt · OCSP stapling · HSTS 2y
            </div>
          </div>
          <div className="text-right shrink-0">
            <div className="text-emerald-600 font-mono text-sm font-bold">A+</div>
            <div className="text-[9px] text-gray-500 mt-0.5 font-mono">62d left</div>
          </div>
        </div>

        <div className="flex-1 min-h-0 space-y-2 overflow-hidden">
          {domains.slice(1).map((d) => (
            <div
              key={d.host}
              className="rounded-lg border border-gray-200 bg-white p-2.5 flex items-center gap-2.5"
            >
              <StatusPing tone={d.tone} size="sm" />
              <span className="text-[12px] text-gray-900 font-medium truncate">{d.host}</span>
              <span className="ml-auto text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border border-gray-200 bg-gray-50 text-gray-600">
                {d.grade}
              </span>
              <span
                className={cn(
                  "text-[10px] font-mono w-14 text-right shrink-0",
                  d.days < 14 ? "text-amber-600 font-bold" : "text-gray-500",
                )}
              >
                {d.days}d left
              </span>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-2.5 flex items-start gap-2 text-[11px] shrink-0">
          <Shield className="h-3 w-3 text-amber-500 mt-0.5 shrink-0" />
          <div className="text-gray-700">
            <span className="text-amber-700 font-semibold">Reminder:</span> legacy.internal renews in 3 days. Slack + email + PagerDuty notify 30/14/7/3/1 days out.
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

/* -------------------------------------------------------------------------- */
/*  6. Public status page — matches the actual Kloudfox status page style     */
/* -------------------------------------------------------------------------- */

/** 90 bars, mostly green with occasional red incidents at specific indices */
function UptimeBars({ incidents = [] as number[] }) {
  return (
    <div className="flex items-end gap-[2px] h-6">
      {Array.from({ length: 90 }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex-1 rounded-[1px] transition-colors",
            incidents.includes(i) ? "bg-red-500" : "bg-emerald-500",
          )}
          style={{ height: incidents.includes(i) ? "60%" : "100%" }}
        />
      ))}
    </div>
  );
}

export function MockKloudfoxStatusPage() {
  return (
    <BrowserChrome url="kita.uptime.kloudfox.com">
      <div className="h-full bg-white text-gray-900 flex flex-col overflow-hidden">
        {/* Compact header */}
        <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-gray-100 bg-white shrink-0">
          <div className="flex items-center gap-2">
            <FoxMark className="h-5 w-5" />
            <div className="text-[11px] font-bold text-gray-900">Kita Luisito</div>
          </div>
          <nav className="hidden md:flex items-center gap-4 text-[11px]">
            <span className="text-primary border-b-2 border-primary pb-0.5 font-semibold">Status</span>
            <span className="text-gray-500">Maintenance</span>
            <span className="text-gray-500">Incidents</span>
          </nav>
          <button className="rounded-full bg-emerald-500 text-white text-[10px] font-semibold px-3 py-1">
            Get in Touch
          </button>
        </div>

        {/* Big "all systems" moment */}
        <div className="flex-1 overflow-hidden flex flex-col items-center px-4 md:px-6 py-4 gap-4 bg-gray-50">
          <div className="text-center pt-2">
            <div className="inline-flex relative">
              <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-emerald-500/12 flex items-center justify-center">
                <Smile className="h-8 w-8 md:h-10 md:w-10 text-emerald-500" strokeWidth={2.2} />
              </div>
              <span className="absolute inset-0">
                <PingBeacon tone="up" size="xl" rings={3} className="opacity-40" />
              </span>
            </div>
            <div className="mt-3 text-lg md:text-xl font-bold text-gray-900">
              All services are online
            </div>
            <div className="text-[10px] text-gray-500 mt-0.5">
              Last updated on Jul 6, 2026, 1:25:21 AM UTC
            </div>
          </div>

          {/* Service group card */}
          <div className="w-full max-w-lg rounded-xl border border-gray-200 bg-white p-3.5">
            <div className="flex items-center justify-between mb-4">
              <div className="text-[13px] font-bold text-gray-900">kitaluisito</div>
              <div className="inline-flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                <StatusPing tone="up" size="sm" />
                Operational
                <ChevronDown className="h-3 w-3 text-gray-500" />
              </div>
            </div>

            {["BibliotecaOnline.es", "Kita Luisito"].map((svc, i) => (
              <div key={svc} className={cn("mb-3 last:mb-0", i > 0 && "pt-3 border-t border-gray-100")}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="text-[11px] font-medium text-gray-700 inline-flex items-center gap-1">
                    <Check className="h-2.5 w-2.5 text-emerald-500" />
                    {svc}
                  </div>
                  <div className="text-[9px] text-gray-500 uppercase">uptime</div>
                </div>
                <UptimeBars incidents={i === 0 ? [22, 47] : [3, 4, 5, 26, 41, 55, 62, 63, 68, 71, 76, 82]} />
                <div className="flex items-center justify-between mt-1 text-[9px] text-gray-500">
                  <span>90 days ago</span>
                  <span>Today</span>
                </div>
              </div>
            ))}
          </div>

          {/* Subscribe */}
          <div className="w-full max-w-lg rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 flex items-center gap-2 shrink-0">
            <div className="text-[11px] text-gray-700 font-medium shrink-0 hidden md:block">
              Subscribe to updates.
            </div>
            <input
              className="flex-1 min-w-0 rounded-md border border-gray-200 px-2 py-1 text-[10px] text-gray-500 bg-gray-50"
              placeholder="Enter your Email"
              readOnly
            />
            <button className="rounded-full bg-emerald-500 text-white text-[10px] font-semibold px-3 py-1 shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

/* -------------------------------------------------------------------------- */
/*  Legacy compact dashboard (kept for fallback / smaller contexts)            */
/* -------------------------------------------------------------------------- */

export function MockLiveDashboard() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setTick((t) => t + 1), 2500);
    return () => window.clearInterval(id);
  }, []);

  const rows = [
    { host: "app.acme.io", region: "us-east", ms: 42, status: "up" as const },
    { host: "api.northwind.dev", region: "eu-west", ms: 118, status: "up" as const },
    { host: "checkout.serif.dev", region: "ap-south", ms: 87, status: "up" as const },
    { host: "cdn.craft.co", region: "us-west", ms: 214, status: "warn" as const },
    { host: "status.hoot.io", region: "global", ms: 63, status: "up" as const },
  ];

  return (
    <BrowserChrome url="watch.kloudfox.com/dashboard">
      <div className="p-5 md:p-6 h-full flex flex-col bg-gray-50 text-gray-900">
        <ul className="divide-y divide-gray-100 flex-1">
          {rows.map((r, i) => (
            <li key={r.host} className="flex items-center justify-between py-2.5 text-sm">
              <div className="flex items-center gap-2.5 min-w-0">
                <StatusPing tone={r.status} size="sm" />
                <span className="text-gray-900 font-medium truncate">{r.host}</span>
                <span className="hidden md:inline-flex items-center gap-1 text-[10px] text-gray-500 px-1.5 py-0.5 rounded border border-gray-200 bg-white">
                  <Globe2 className="h-3 w-3" />
                  {r.region}
                </span>
              </div>
              <div className="text-gray-600 font-mono text-xs w-14 text-right tabular-nums">
                {jitter(r.ms, i + tick)}ms
              </div>
            </li>
          ))}
        </ul>
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px]">
          <span className="text-gray-600 inline-flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-emerald-500" />
            All systems operational
          </span>
          <span className="text-gray-400 font-mono">last check · just now</span>
        </div>
      </div>
    </BrowserChrome>
  );
}

function jitter(base: number, seed: number) {
  const delta = Math.round(Math.sin(seed * 1.7) * 12);
  return Math.max(20, base + delta);
}

/* -------------------------------------------------------------------------- */
/*  Backwards-compatible export: some old callers still import MockAnomaly    */
/*  and MockStatusPage. Point them at the new equivalents.                    */
/* -------------------------------------------------------------------------- */

export const MockAnomaly = MockMonitorDetail;
export const MockStatusPage = MockKloudfoxStatusPage;
