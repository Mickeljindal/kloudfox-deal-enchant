import { useState } from "react";
import { Loader2, CheckCircle2, XCircle, Zap, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Result =
  | { state: "idle" }
  | { state: "loading" }
  | { state: "up"; url: string; ms: number }
  | { state: "down"; url: string; error: string };

/**
 * Free public tool: real "Is my site up?" checker.
 * Fires a lightweight fetch with no-cors mode from the browser. Because
 * responses may be opaque, we treat a non-throw as "reachable". This is
 * intentionally simple — it works, and it's shareable.
 */
export default function UrlStatusChecker() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<Result>({ state: "idle" });

  const runCheck = async (raw: string) => {
    let normalized = raw.trim();
    if (!normalized) return;
    if (!/^https?:\/\//i.test(normalized)) normalized = `https://${normalized}`;

    let parsed: URL;
    try {
      parsed = new URL(normalized);
    } catch {
      setResult({ state: "down", url: normalized, error: "That doesn't look like a valid URL." });
      return;
    }

    setResult({ state: "loading" });
    const start = performance.now();

    try {
      // no-cors gives opaque response but resolves iff DNS + TCP + TLS succeed.
      await fetch(parsed.toString(), { method: "GET", mode: "no-cors", cache: "no-store" });
      const ms = Math.round(performance.now() - start);
      setResult({ state: "up", url: parsed.hostname, ms });
    } catch (e) {
      setResult({
        state: "down",
        url: parsed.hostname,
        error: e instanceof Error ? e.message : "Site unreachable from this location.",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runCheck(url);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-2 p-1.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
      >
        <div className="flex-1 flex items-center pl-3">
          <Globe2 className="h-4 w-4 text-white/40 shrink-0" />
          <Input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            placeholder="Enter any URL — e.g. stripe.com"
            className="bg-transparent border-0 focus-visible:ring-0 text-white placeholder:text-white/40 text-base"
            autoComplete="off"
            spellCheck={false}
          />
        </div>
        <Button
          type="submit"
          disabled={result.state === "loading" || !url.trim()}
          className="btn-aurora rounded-xl px-5 h-11 font-semibold"
        >
          {result.state === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Checking
            </>
          ) : (
            <>
              <Zap className="h-4 w-4 mr-2" />
              Check now
            </>
          )}
        </Button>
      </form>

      {result.state !== "idle" && result.state !== "loading" && (
        <div
          className={cn(
            "mt-3 rounded-xl border p-4 text-sm flex items-start gap-3",
            result.state === "up"
              ? "border-emerald-500/30 bg-emerald-500/5 text-emerald-100"
              : "border-red-500/30 bg-red-500/5 text-red-100",
          )}
          role="status"
          aria-live="polite"
        >
          {result.state === "up" ? (
            <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
          ) : (
            <XCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
          )}
          <div className="flex-1 min-w-0">
            {result.state === "up" ? (
              <>
                <div className="font-semibold">
                  {result.url} is <span className="text-emerald-300">reachable</span>
                </div>
                <div className="text-emerald-100/70 mt-0.5">
                  Response returned in {result.ms}ms from your location.
                </div>
              </>
            ) : (
              <>
                <div className="font-semibold">
                  {result.url} appears <span className="text-red-300">unreachable</span>
                </div>
                <div className="text-red-100/70 mt-0.5">{result.error}</div>
              </>
            )}
          </div>
        </div>
      )}

      <p className="mt-3 text-xs text-white/40 text-center">
        Free public tool. For continuous monitoring from 4 continents, sign up in under 5 minutes.
      </p>
    </div>
  );
}
