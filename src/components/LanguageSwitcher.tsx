import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Compact language toggle. Rendered by pages that opt in.
 * The current design surfaces very little translatable copy, so
 * this stays intentionally minimal.
 */
const LanguageSwitcher = ({ className }: { className?: string }) => {
  const { language, setLanguage } = useLanguage();

  const toggle = () => setLanguage(language === "en" ? "ar" : "en");

  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur px-3 py-1.5 text-xs font-medium text-white/70 hover:text-white hover:border-white/20 transition-colors",
        className,
      )}
    >
      <Languages className="h-3.5 w-3.5" />
      {language === "en" ? "EN" : "AR"}
    </button>
  );
};

export default LanguageSwitcher;
