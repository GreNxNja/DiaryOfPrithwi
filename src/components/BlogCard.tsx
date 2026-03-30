import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface BlogCardProps {
  slug: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  index: number;
}

const BlogCard = ({ slug, image, category, title, excerpt, date, readTime, index }: BlogCardProps) => {
  return (
    <Link to={`/post/${slug}`}>
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group cursor-pointer"
    >
      <div className="aspect-[4/3] rounded-lg overflow-hidden mb-5">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={800}
          height={600}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2 block">
        {category}
      </span>
      <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="font-body text-muted-foreground leading-relaxed mb-4 line-clamp-2">
        {excerpt}
      </p>
      <span className="font-body text-sm text-muted-foreground">
        {date} · {readTime}
      </span>
    </motion.article>
    </Link>
  );
};

export default BlogCard;
