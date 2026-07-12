import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate, type PanInfo } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import ThemeWipe from "@/components/ThemeWipe";

interface WipeState {
  direction: "toDark" | "toLight";
  origin: { x: number; y: number };
}

const PULL_THRESHOLD = 20;
const BASE_ROPE_LENGTH = 40;

const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const { theme, setTheme } = useTheme();
  const handleRef = useRef<HTMLButtonElement>(null);
  const [wipe, setWipe] = useState<WipeState | null>(null);
  const isDark = theme === "dark";

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // Point the rope exactly at the bead using real trigonometry, built as a
  // single raw `transform` string (scale applied to the point first, then
  // rotate — i.e. "rotate(...) scaleY(...)" in CSS order) rather than
  // separate rotate/scaleY style shorthands, whose internal composition
  // order framer-motion controls and doesn't match what the math needs —
  // that mismatch is what visibly disconnected the rope on diagonal drags.
  const ropeTransform = useTransform([x, y], (latest) => {
    const [xv, yv] = latest as number[];
    const depth = BASE_ROPE_LENGTH + yv;
    // Negated: CSS's rotation matrix is x' = x·cosR − y·sinR, so a positive
    // angle here needs -xv to land the tip at +xv after rotation.
    const angle = (Math.atan2(-xv, depth) * 180) / Math.PI;
    const scale = Math.max(0.15, Math.hypot(xv, depth) / BASE_ROPE_LENGTH);
    return `rotate(${angle}deg) scaleY(${scale})`;
  });

  const triggerToggle = () => {
    if (wipe || !handleRef.current) return;
    const rect = handleRef.current.getBoundingClientRect();
    setWipe({
      direction: isDark ? "toLight" : "toDark",
      origin: { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 },
    });
  };

  const springBack = () => {
    animate(x, 0, { type: "spring", stiffness: 260, damping: 9 });
    animate(y, 0, { type: "spring", stiffness: 300, damping: 10 });
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.y > PULL_THRESHOLD) {
      triggerToggle();
    }
    springBack();
  };

  const handleTap = () => {
    // A plain tap (no drag) still pulls the cord, with a scripted tug + sway.
    triggerToggle();
    animate(y, [0, 20, -4, 5, -1, 0], { duration: 1, ease: "easeInOut" });
    animate(x, [0, 9, -6, 4, -2, 0], { duration: 1.1, ease: "easeInOut" });
  };

  return (
    <>
      <div className={`flex flex-col items-center ${className}`} style={{ transformOrigin: "top center" }}>
        <motion.span
          aria-hidden="true"
          style={{ transform: ropeTransform, transformOrigin: "top center" }}
          className="h-10 w-px bg-foreground/35"
        />
        <motion.button
          ref={handleRef}
          type="button"
          drag
          dragMomentum={false}
          onDragEnd={handleDragEnd}
          onTap={handleTap}
          style={{ x, y }}
          whileTap={{ scale: 0.92 }}
          aria-label={isDark ? "Pull for day edition" : "Pull for night edition"}
          className="-mt-px flex h-7 w-7 cursor-grab touch-none items-center justify-center rounded-full border border-foreground/20 bg-primary text-primary-foreground shadow-sm active:cursor-grabbing"
        >
          {isDark ? (
            <Moon className="h-3.5 w-3.5" strokeWidth={2} />
          ) : (
            <Sun className="h-3.5 w-3.5" strokeWidth={2} />
          )}
        </motion.button>
      </div>

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
