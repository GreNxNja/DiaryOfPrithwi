import BlogHeader from "@/components/BlogHeader";
import BlogHero from "@/components/BlogHero";
import BlogCard from "@/components/BlogCard";
import BlogFooter from "@/components/BlogFooter";
import { posts, techPosts } from "@/data/posts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <BlogHero />
      <section className="container pb-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Latest Stories
          </h2>
          <div className="hidden md:flex items-center gap-1">
            <div className="w-12 h-[2px] bg-primary" />
            <div className="w-4 h-[2px] bg-border" />
            <div className="w-4 h-[2px] bg-border" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {posts.map((post, i) => (
            <BlogCard key={post.slug} {...post} index={i} />
          ))}
        </div>
      </section>
      <section className="container pb-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Tech & Digital
          </h2>
          <div className="hidden md:flex items-center gap-1">
            <div className="w-12 h-[2px] bg-primary" />
            <div className="w-4 h-[2px] bg-border" />
            <div className="w-4 h-[2px] bg-border" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {techPosts.map((post, i) => (
            <BlogCard key={post.slug} {...post} index={i} />
          ))}
        </div>
      </section>
      <BlogFooter />
    </div>
  );
};

export default Index;
