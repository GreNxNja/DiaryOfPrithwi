import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { allPosts } from "@/data/posts";
import BlogHeader from "@/components/BlogHeader";
import BlogCard from "@/components/BlogCard";
import BlogFooter from "@/components/BlogFooter";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const normalizedCategory = category?.toLowerCase() ?? "";

  const filtered = allPosts.filter(
    (p) => p.category.toLowerCase() === normalizedCategory
  );

  const displayName = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : "";

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <section className="container py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All stories
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            {displayName}
          </h1>
          <p className="font-body text-lg text-muted-foreground mb-12">
            {filtered.length} {filtered.length === 1 ? "story" : "stories"}
          </p>
        </motion.div>

        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {filtered.map((post, i) => (
              <BlogCard key={post.slug} {...post} index={i} />
            ))}
          </div>
        ) : (
          <p className="font-body text-muted-foreground text-center py-20">
            No stories in this category yet.
          </p>
        )}
      </section>
      <BlogFooter />
    </div>
  );
};

export default CategoryPage;
