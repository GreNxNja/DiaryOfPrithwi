import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import ThemeWipe from "@/components/ThemeWipe";

interface WipeState {
  direction: "toDark" | "toLight";
  origin: { x: number; y: number };
}

const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const { theme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [wipe, setWipe] = useState<WipeState | null>(null);
  const isDark = theme === "dark";

  const handleToggle = () => {
    if (wipe || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setWipe({
      direction: isDark ? "toLight" : "toDark",
      origin: { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 },
    });
  };

  return (
    <>
      <motion.button
        ref={buttonRef}
        type="button"
        onClick={handleToggle}
        aria-label={isDark ? "Switch to day edition" : "Switch to night edition"}
        whileHover={{ rotate: 0 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: -6 }}
        className={`group relative flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-0.5 overflow-hidden rounded-full border-[1.5px] border-dashed border-primary/40 text-primary/70 transition-colors hover:border-primary hover:text-primary ${className}`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ opacity: 0, rotate: -90, scale: 0.4 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center gap-0.5"
          >
            {isDark ? (
              <Moon className="h-3.5 w-3.5" strokeWidth={2} />
            ) : (
              <Sun className="h-3.5 w-3.5" strokeWidth={2} />
            )}
            <span className="font-body text-[7px] font-bold uppercase tracking-[0.1em]">
              {isDark ? "Night" : "Day"}
            </span>
          </motion.span>
        </AnimatePresence>
      </motion.button>

      {wipe && (
        <ThemeWipe
          direction={wipe.direction}
          origin={wipe.origin}
          onDone={() => {
            setTheme(wipe.direction === "toDark" ? "dark" : "light");
            setWipe(null);
          }}
        />
      )}
    </>
  );
};

export default ThemeToggle;
