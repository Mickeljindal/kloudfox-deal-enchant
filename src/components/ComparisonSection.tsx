import { Check, X, Sparkles } from "lucide-react";
import Section, { SectionHeader } from "./kf/Section";
import { cn } from "@/lib/utils";

interface Row {
  feature: string;
  kloudfox: string | boolean;
  uptimeRobot: string | boolean;
  pingdom: string | boolean;
  betterUptime: string | boolean;
}

const ROWS: Row[] = [
  { feature: "Check interval",         kloudfox: "40 seconds",   uptimeRobot: "5 minutes",  pingdom: "1 minute",   betterUptime: "30 seconds" },
  { feature: "AI anomaly detection",   kloudfox: true,           uptimeRobot: false,        pingdom: false,        betterUptime: false        },
  { feature: "Global regions",         kloudfox: "4 continents", uptimeRobot: "2 regions",  pingdom: "70+ nodes",  betterUptime: "6 regions"  },
  { feature: "SSL monitoring",         kloudfox: true,           uptimeRobot: true,         pingdom: true,         betterUptime: true         },
  { feature: "Status pages",           kloudfox: "Unlimited",    uptimeRobot: "1 (free)",   pingdom: "Add-on",     betterUptime: "5 (paid)"   },
  { feature: "Incident management",    kloudfox: true,           uptimeRobot: false,        pingdom: false,        betterUptime: true         },
  { feature: "60-day free trial",      kloudfox: true,           uptimeRobot: false,        pingdom: "14 days",    betterUptime: "10 days"    },
  { feature: "Starting price",         kloudfox: "$0",           uptimeRobot: "$7",         pingdom: "$15",        betterUptime: "$29"        },
];

function Cell({ value, primary }: { value: string | boolean; primary?: boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className={cn("h-4 w-4", primary ? "text-emerald-400" : "text-emerald-500/70")} />
    ) : (
      <X className="h-4 w-4 text-muted-foreground/40" />
    );
  }
  return (
    <span className={cn("text-sm", primary ? "text-white font-semibold" : "text-foreground/80")}>
      {value}
    </span>
  );
}

const ComparisonSection = () => {
  return (
    <Section tone="muted" padding="xl">
      <SectionHeader
        eyebrow="How we compare"
        title={
          <>
            All the muscle, none of the{" "}
            <span className="gradient-text">enterprise price tag.</span>
          </>
        }
        subtitle="Head-to-head against the three monitoring tools we hear about most. No cherry-picking — just the specs that matter."
      />

      <div className="relative overflow-x-auto rounded-2xl border border-border bg-card/60 backdrop-blur-md shadow-soft">
        <table className="w-full min-w-[720px] text-left">
          <thead>
            <tr className="border-b border-border">
              <th className="px-5 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-widest">Feature</th>
              <th className="px-5 py-4 relative">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 border border-primary/25 px-2 py-0.5 text-[10px] font-mono text-primary-foreground uppercase tracking-widest">
                    <Sparkles className="h-3 w-3" /> Us
                  </span>
                  Kloudfox
                </div>
              </th>
              <th className="px-5 py-4 text-sm font-medium text-foreground/70">UptimeRobot</th>
              <th className="px-5 py-4 text-sm font-medium text-foreground/70">Pingdom</th>
              <th className="px-5 py-4 text-sm font-medium text-foreground/70">Better&nbsp;Uptime</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => (
              <tr
                key={row.feature}
                className={cn(
                  "border-b border-border/50 last:border-b-0",
                  i % 2 === 0 ? "bg-background/40" : "bg-transparent",
                )}
              >
                <td className="px-5 py-4 text-sm text-foreground/80 font-medium">{row.feature}</td>
                <td className="px-5 py-4 bg-primary/5">
                  <Cell value={row.kloudfox} primary />
                </td>
                <td className="px-5 py-4"><Cell value={row.uptimeRobot} /></td>
                <td className="px-5 py-4"><Cell value={row.pingdom} /></td>
                <td className="px-5 py-4"><Cell value={row.betterUptime} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-muted-foreground text-center">
        Data compiled from vendor pricing pages, current as of {new Date().getFullYear()}. Trademarks belong to their respective owners.
      </p>
    </Section>
  );
};

export default ComparisonSection;
