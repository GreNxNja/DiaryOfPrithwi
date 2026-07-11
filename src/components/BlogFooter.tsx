const BlogFooter = () => {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-heading text-lg font-bold text-foreground block">
            The Quiet Journal
          </span>
          <span className="font-body text-xs text-muted-foreground italic">
            Written by Prithwijit, one slow story at a time.
          </span>
        </div>
        <div className="text-center md:text-right">
          <p className="font-body text-sm text-muted-foreground">
            © 2026 The Quiet Journal. Just questionable WiFi.
          </p>
          <p className="font-body text-xs text-muted-foreground/70 italic mt-1">
            Wrote all this probably lost in some remote village.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
