import BlogCard from "@/components/BlogCard";
import LedgerRow from "@/components/LedgerRow";
import type { BlogPost } from "@/data/posts";

interface StorySectionProps {
  title: string;
  posts: BlogPost[];
  id?: string;
  className?: string;
  kicker?: string;
}

const StorySection = ({ title, posts, id, className, kicker }: StorySectionProps) => {
  if (posts.length === 0) return null;

  const [featured, ...rest] = posts;
  const indexRange =
    posts.length > 1
      ? `Nº 01–${String(posts.length).padStart(2, "0")}`
      : "Nº 01";

  return (
    <section id={id} className={className}>
      <div className="mb-10 flex items-end justify-between">
        <div>
          {kicker && (
            <span className="mb-1 block font-body text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              {kicker}
            </span>
          )}
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            {title}
          </h2>
        </div>
        <span className="hidden shrink-0 font-body text-xs tracking-[0.16em] text-muted-foreground sm:block">
          {indexRange}
        </span>
      </div>

      <BlogCard {...featured} index={0} featured entryNumber={1} />

      {rest.length > 0 && (
        <div className="mt-12">
          {rest.map((post, i) => (
            <LedgerRow
              key={post.slug}
              post={post}
              entryNumber={i + 2}
              index={i}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default StorySection;
