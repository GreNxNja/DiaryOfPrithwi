import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";

interface BlogCardProps {
  slug: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  index: number;
  featured?: boolean;
}

const ReadTimeChip = ({ readTime }: { readTime: string }) => (
  <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-background/85 px-2.5 py-1 font-body text-xs font-medium text-foreground backdrop-blur-sm">
    <Clock className="h-3 w-3 text-primary" />
    {readTime}
  </span>
);

const BlogCard = ({
  slug,
  image,
  category,
  title,
  excerpt,
  date,
  readTime,
  index,
  featured = false,
}: BlogCardProps) => {
  if (featured) {
    return (
      <Link to={`/post/${slug}`} className="block">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="group grid items-center gap-6 md:grid-cols-12 md:gap-10"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl ring-1 ring-border md:col-span-7">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <ReadTimeChip readTime={readTime} />
          </div>
          <div className="md:col-span-5">
            <span className="mb-3 block font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {category}
            </span>
            <h3 className="mb-4 font-heading text-3xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary md:text-4xl">
              {title}
            </h3>
            <p className="mb-6 line-clamp-3 font-body text-base leading-relaxed text-muted-foreground md:text-lg">
              {excerpt}
            </p>
            <div className="flex items-center gap-4 border-t border-border/60 pt-4">
              <span className="font-body text-sm text-muted-foreground">{date}</span>
              <span className="ml-auto inline-flex items-center font-body text-sm font-medium text-primary transition-transform duration-300 group-hover:translate-x-1">
                Read story →
              </span>
            </div>
          </div>
        </motion.article>
      </Link>
    );
  }

  return (
    <Link to={`/post/${slug}`} className="block">
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
        whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
        className="group cursor-pointer"
      >
        <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-border">
          <img
            src={image}
            alt={title}
            loading="lazy"
            width={800}
            height={600}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <ReadTimeChip readTime={readTime} />
        </div>
        <span className="mb-2 block font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {category}
        </span>
        <h3 className="mb-3 font-heading text-xl font-semibold leading-tight text-foreground transition-colors group-hover:text-primary md:text-2xl">
          {title}
        </h3>
        <p className="mb-4 line-clamp-2 font-body leading-relaxed text-muted-foreground">
          {excerpt}
        </p>
        <div className="flex items-center justify-between border-t border-border/60 pt-4">
          <span className="font-body text-sm text-muted-foreground">{date}</span>
          <span className="-translate-x-1 font-body text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            Read story →
          </span>
        </div>
      </motion.article>
    </Link>
  );
};

export default BlogCard;
