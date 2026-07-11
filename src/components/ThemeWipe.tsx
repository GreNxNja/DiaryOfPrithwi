import { createPortal } from "react-dom";
import { motion } from "framer-motion";

interface ThemeWipeProps {
  direction: "toDark" | "toLight";
  origin: { x: number; y: number };
  onDone: () => void;
}

// Mirrors the --background/--card/--secondary stops from index.css so the
// wipe tint reads as the real theme arriving, not a separate movie effect.
const TINTS = {
  toDark:
    "linear-gradient(135deg, hsl(20 10% 10% / 0.62), hsl(20 10% 14% / 0.56) 55%, hsl(20 10% 18% / 0.5))",
  toLight:
    "linear-gradient(135deg, hsl(30 33% 96% / 0.62), hsl(30 25% 93% / 0.56) 55%, hsl(30 20% 88% / 0.5))",
};

const ThemeWipe = ({ direction, origin, onDone }: ThemeWipeProps) => {
  const toDark = direction === "toDark";

  const vw = typeof window !== "undefined" ? window.innerWidth : 0;
  const vh = typeof window !== "undefined" ? window.innerHeight : 0;
  const dx = Math.max(origin.x, vw - origin.x);
  const dy = Math.max(origin.y, vh - origin.y);
  const radius = Math.hypot(dx, dy);

  return createPortal(
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[999] overflow-hidden"
      style={{ backgroundImage: TINTS[direction], willChange: "clip-path" }}
      initial={{ clipPath: `circle(0px at ${origin.x}px ${origin.y}px)` }}
      animate={{ clipPath: `circle(${radius}px at ${origin.x}px ${origin.y}px)` }}
      transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={onDone}
    >
      {toDark && (
        <div className="absolute inset-0">
          {STAR_POSITIONS.map(([x, y, s, d], i) => (
            <span
              key={i}
              className="absolute rounded-full bg-white/60"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: s,
                height: s,
                animation: `theme-wipe-twinkle 1.8s ease-in-out ${d}s infinite`,
              }}
            />
          ))}
        </div>
      )}
    </motion.div>,
    document.body
  );
};

const STAR_POSITIONS: [number, number, number, number][] = [
  [12, 20, 2, 0],
  [25, 65, 1.5, 0.3],
  [38, 15, 2, 0.6],
  [55, 75, 1.5, 0.1],
  [68, 30, 2, 0.5],
  [80, 55, 1.5, 0.8],
  [90, 20, 2, 0.2],
  [15, 85, 1.5, 0.7],
  [48, 45, 1.5, 0.4],
  [72, 85, 2, 0.9],
];

export default ThemeWipe;
