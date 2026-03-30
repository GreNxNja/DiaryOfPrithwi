import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { allPosts } from "@/data/posts";
import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <BlogHeader />
        <div className="container py-20 text-center">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Post not found</h1>
          <Link to="/" className="font-body text-primary hover:underline">
            ← Back to all stories
          </Link>
        </div>
        <BlogFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <article className="container max-w-3xl py-12 md:py-20">
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
            Back to all stories
          </Link>

          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 block">
            {post.category}
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground leading-[1.1] mb-4">
            {post.title}
          </h1>
          <p className="font-body text-sm text-muted-foreground mb-8">
            {post.date} · {post.readTime}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="aspect-[16/9] rounded-lg overflow-hidden mb-12"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            width={800}
            height={600}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose-blog"
        >
          {post.content.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="font-body text-lg leading-[1.8] text-foreground/85 mb-6"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>
      </article>
      <BlogFooter />
    </div>
  );
};

export default BlogPost;
