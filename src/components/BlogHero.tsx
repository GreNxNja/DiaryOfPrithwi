import { motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { allPosts } from "@/data/posts";

// Faint topographic texture behind the hero. Flip to false to remove it
// entirely — nothing else in the component depends on it.
const SHOW_TEXTURE = true;

const Contours = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 320 280" aria-hidden="true" className={className}>
    <g fill="none" stroke="hsl(var(--primary))" strokeWidth={1.4} opacity={0.1}>
      <ellipse cx="160" cy="140" rx="28" ry="20" />
      <ellipse cx="160" cy="140" rx="52" ry="38" />
      <ellipse cx="160" cy="140" rx="78" ry="58" />
      <ellipse cx="160" cy="140" rx="106" ry="80" />
      <ellipse cx="160" cy="140" rx="136" ry="104" />
      <ellipse cx="160" cy="140" rx="168" ry="130" />
    </g>
  </svg>
);

const TopoTexture = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
  >
    <Contours className="absolute -left-16 -top-20 h-[320px] w-[360px] -rotate-12" />
    <Contours className="absolute -right-16 -bottom-24 h-[340px] w-[380px] rotate-12" />
  </div>
);

const BlogHero = () => {
  const places = Array.from(
    new Set(allPosts.flatMap((p) => p.locations?.map((l) => l.name) ?? []))
  );

  return (
    <section className="relative overflow-hidden border-b border-border">
      {SHOW_TEXTURE && <TopoTexture />}

      <div className="container relative z-10 py-20 md:py-32 text-center">
        <span
          aria-hidden="true"
          className="absolute -top-6 left-1/2 -translate-x-1/2 font-heading text-[7rem] md:text-[11rem] leading-none text-primary/[0.06] select-none pointer-events-none"
        >
          “
        </span>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-primary/40" />
            <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              A field journal of slow travel
            </span>
            <span className="w-8 h-px bg-primary/40" />
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-6">
            Slow stories,
            <br />
            <span className="italic font-medium text-primary">told properly.</span>
          </h1>

          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-md mx-auto mb-10">
            Travel, tech, and culture — written between trains, temples, and
            questionable WiFi. No listicles, no SEO bait, just things worth
            slowing down for.
          </p>

          <motion.a
            href="#latest-stories"
            className="inline-flex flex-col items-center gap-1 font-body text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Begin reading
            <ChevronDown className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>

      {places.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="group relative z-10 flex items-stretch border-t border-dashed border-border bg-secondary/40"
        >
          <span className="hidden sm:flex items-center gap-1.5 font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/70 border-r border-dashed border-border px-5 py-4 whitespace-nowrap bg-secondary/60">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            Wandered to
          </span>
          <div className="relative flex-1 overflow-hidden py-4">
            <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
              {[...places, ...places].map((place, i) => (
                <span
                  key={`${place}-${i}`}
                  className="font-body text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground whitespace-nowrap px-6 flex items-center gap-6"
                >
                  {place}
                  <span className="text-primary/70 text-[10px]">✦</span>
                </span>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-secondary/40 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-secondary/40 to-transparent" />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default BlogHero;
