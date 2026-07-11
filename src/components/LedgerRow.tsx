import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { formatCoordinates, type BlogPost } from "@/data/posts";
import Coordinates from "@/components/Coordinates";

interface LedgerRowProps {
  post: BlogPost;
  entryNumber: number;
  index: number;
}

const LedgerRow = ({ post, entryNumber, index }: LedgerRowProps) => {
  const coords = formatCoordinates(post.locations?.[0]);

  return (
    <Link to={`/post/${post.slug}`} className="block">
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
        className="group flex items-center gap-4 border-t border-border py-5 transition-colors hover:bg-secondary/50 md:gap-6 md:px-2"
      >
        <span
          aria-hidden="true"
          className="w-9 shrink-0 text-center font-heading text-3xl font-bold text-foreground/20 md:w-12 md:text-4xl"
        >
          {String(entryNumber).padStart(2, "0")}
        </span>

        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-border md:h-20 md:w-20">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              {post.category}
            </span>
            {coords && <Coordinates value={coords} />}
          </div>
          <h3 className="line-clamp-2 font-heading text-lg font-semibold leading-tight text-foreground transition-colors group-hover:text-primary md:text-xl">
            {post.title}
          </h3>
          <span className="mt-1.5 block font-body text-xs text-muted-foreground">
            {post.date} · {post.readTime}
          </span>
        </div>

        <ArrowUpRight className="h-5 w-5 shrink-0 self-center text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      </motion.article>
    </Link>
  );
};

export default LedgerRow;
