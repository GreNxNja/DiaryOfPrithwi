import BlogCard from "@/components/BlogCard";
import type { BlogPost } from "@/data/posts";

interface StorySectionProps {
  title: string;
  posts: BlogPost[];
  id?: string;
  className?: string;
}

const StorySection = ({ title, posts, id, className }: StorySectionProps) => {
  if (posts.length === 0) return null;

  const [featured, ...rest] = posts;

  return (
    <section id={id} className={className}>
      <div className="mb-12 flex items-center justify-between">
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          {title}
        </h2>
        <div className="hidden items-center gap-1 md:flex">
          <div className="h-[2px] w-12 bg-primary" />
          <div className="h-[2px] w-4 bg-border" />
          <div className="h-[2px] w-4 bg-border" />
        </div>
      </div>

      <div className="mb-14">
        <BlogCard {...featured} index={0} featured />
      </div>

      {rest.length > 0 && (
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <BlogCard key={post.slug} {...post} index={i} />
          ))}
        </div>
      )}
    </section>
  );
};

export default StorySection;
