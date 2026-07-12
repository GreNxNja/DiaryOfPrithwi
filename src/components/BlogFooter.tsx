import { Link } from "react-router-dom";

const BlogFooter = () => {
  return (
    <footer className="mt-20 border-t-4 border-double border-foreground/70">
      <div className="container flex flex-col items-center py-10 text-center md:py-14">
        <span aria-hidden="true" className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-primary/40" />
          <span className="h-1 w-1 rounded-full bg-primary/50" />
          <span className="h-px w-8 bg-primary/40" />
        </span>
        <Link
          to="/"
          className="font-heading text-2xl font-black tracking-tight text-foreground sm:text-3xl"
        >
          The Quiet Journal
        </Link>
        <span className="mt-1.5 font-body text-xs italic text-muted-foreground">
          Written by Prithwijit, one slow story at a time.
        </span>
      </div>

      <div className="border-t border-border/70">
        <div className="container flex flex-col items-center gap-1.5 py-4 text-center font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
          <span>© 2026 The Quiet Journal. Just questionable WiFi.</span>
          <span className="normal-case italic tracking-normal text-muted-foreground/70">
            Wrote all this probably lost in some remote village.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
