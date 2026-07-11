import BlogHeader from "@/components/BlogHeader";
import BlogHero from "@/components/BlogHero";
import BlogFooter from "@/components/BlogFooter";
import StorySection from "@/components/StorySection";
import { sortedPosts, sortedTechPosts, sortedCulturePosts } from "@/data/posts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <BlogHero />
      <StorySection
        id="latest-stories"
        title="Latest Stories"
        kicker="The field log"
        posts={sortedPosts}
        className="container scroll-mt-20 pb-20 pt-16 md:pt-20"
      />
      <StorySection
        title="Tech & Digital"
        posts={sortedTechPosts}
        className="container pb-20"
      />
      <StorySection
        title="Culture"
        posts={sortedCulturePosts}
        className="container pb-20"
      />
      <BlogFooter />
    </div>
  );
};

export default Index;
