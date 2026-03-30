import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const navCategories = [
  { label: "Nature", path: "/category/nature" },
  { label: "Travel", path: "/category/travel" },
  { label: "Tech", path: "/category/tech" },
  { label: "Culture", path: "/category/culture" },
];

const BlogHeader = () => {
  return (
    <header className="border-b border-border">
      <div className="container flex items-center justify-between py-6">
        <motion.div whileHover={{ opacity: 0.7 }}>
          <Link
            to="/"
            className="font-heading text-2xl font-bold text-foreground tracking-tight"
          >
            The Quiet Journal
          </Link>
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
