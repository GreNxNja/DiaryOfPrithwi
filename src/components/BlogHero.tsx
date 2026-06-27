import { motion } from "framer-motion";
import { allPosts } from "@/data/posts";

const BlogHero = () => {
  const storyCount = allPosts.length;
  const categoryCount = new Set(allPosts.map((p) => p.category)).size;
  const placeCount = new Set(
    allPosts.flatMap((p) => p.locations?.map((l) => l.name) ?? [])
  ).size;

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="container py-16 md:py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 block">
            A Quiet Invitation
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-6 max-w-3xl mx-auto">
            Slow stories, told properly.
          </h1>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            Travel, tech, and culture — written between trains, temples, and
            questionable WiFi. No listicles, no SEO bait, just things worth
            slowing down for.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        >
          {[
            { value: storyCount, label: "stories" },
            { value: categoryCount, label: "categories" },
            { value: placeCount, label: "places" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="font-heading text-2xl md:text-3xl font-bold text-foreground block">
                {stat.value}
              </span>
              <span className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHero;
