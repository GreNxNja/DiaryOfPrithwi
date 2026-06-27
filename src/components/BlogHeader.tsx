import { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const navCategories = [
  { label: "Nature", path: "/category/nature" },
  { label: "Travel", path: "/category/travel" },
  { label: "Tech", path: "/category/tech" },
  { label: "Culture", path: "/category/culture" },
];

const taglines = [
  "probably overthinking this",
  "best read with chai, slightly too hot",
  "written between trains and bad WiFi",
  "still figuring most of it out",
  "for people who read the footnotes",
];

const BlogHeader = () => {
  const tagline = useMemo(
    () => taglines[Math.floor(Math.random() * taglines.length)],
    []
  );

  return (
    <header className="border-b border-border">
      <div className="container flex items-center justify-between py-6">
        <motion.div whileHover={{ opacity: 0.7 }} className="leading-tight">
          <Link
            to="/"
            className="font-heading text-2xl font-bold text-foreground tracking-tight block"
          >
            The Quiet Journal
          </Link>
          <span className="font-body text-xs text-muted-foreground italic hidden sm:inline-block">
            {tagline}
          </span>
        </motion.div>
        <nav className="hidden md:flex items-center gap-8">
          {navCategories.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default BlogHeader;
