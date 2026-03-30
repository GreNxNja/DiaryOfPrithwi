const BlogFooter = () => {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-heading text-lg font-bold text-foreground">The Quiet Journal</span>
        <p className="font-body text-sm text-muted-foreground">
          © 2026 The Quiet Journal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default BlogFooter;
