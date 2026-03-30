import { motion } from "framer-motion";
import heroImage from "@/assets/zenHero.jpg";

const BlogHero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 block">
              A Quiet Invitation
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              The Art of Slow Living in a Fast World
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              In a world that moves too quickly, we gently explore the beauty of
              slowing down — and how doing less can lead to a more peaceful and
              meaningful life.
            </p>
            <span className="font-body text-sm text-muted-foreground">
              March 28, 2026 · 8 min read
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[16/10] rounded-lg overflow-hidden">
              <img
                src={heroImage}
                alt="Cozy reading nook with books and coffee"
                className="w-full h-full object-cover"
                width={1920}
                height={1024}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
