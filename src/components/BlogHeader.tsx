import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { allPosts } from "@/data/posts";
import ThemeToggle from "@/components/ThemeToggle";

const navCategories = [
  { label: "Nature", path: "/category/nature" },
  { label: "Travel", path: "/category/travel" },
  { label: "Tech", path: "/category/tech" },
  { label: "Culture", path: "/category/culture" },
];

const taglines = [
  "probably overthinking this",
  "best read with chai, slightly too hot",
  "written between trains and bad WiFi",
  "still figuring most of it out",
  "for people who read the footnotes",
];

const todayLabel = new Date().toLocaleDateString("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
});

const BlogHeader = () => {
  const tagline = useMemo(
    () => taglines[Math.floor(Math.random() * taglines.length)],
    []
  );
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="hidden border-b border-dashed border-border/70 bg-secondary/30 sm:block">
        <div className="container flex items-center justify-between py-1.5 font-body text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <span>{allPosts.length} stories archived</span>
          <span>{todayLabel}</span>
        </div>
      </div>

      <div className="container flex items-center justify-between py-4 md:py-5">
        <motion.div whileHover={{ opacity: 0.7 }} className="leading-tight">
          <Link
            to="/"
            className="font-heading text-xl md:text-2xl font-bold text-foreground tracking-tight block"
          >
            The Quiet Journal
          </Link>
          <span className="font-body text-xs text-muted-foreground italic hidden sm:inline-block">
            {tagline}
          </span>
        </motion.div>

        <div className="flex items-center gap-3 md:gap-5">
          <nav className="hidden md:flex items-center gap-1">
            {navCategories.map((item, i) => {
              const isActive = location.pathname === item.path;
              return (
                <span key={item.label} className="flex items-center">
                  {i > 0 && (
                    <span
                      aria-hidden="true"
                      className="mx-1 h-3.5 w-px bg-border"
                    />
                  )}
                  <Link
                    to={item.path}
                    className={`group relative flex items-center gap-1.5 px-2.5 py-2 font-body text-sm font-medium tracking-wide uppercase transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span
                      className={`font-body text-[10px] font-semibold ${
                        isActive ? "text-primary/70" : "text-primary/40"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                    <span
                      className={`absolute left-2.5 -bottom-0.5 h-[1.5px] bg-primary transition-all duration-300 ${
                        isActive
                          ? "right-2.5"
                          : "right-[calc(100%-2.5px)] group-hover:right-2.5"
                      }`}
                    />
                  </Link>
                </span>
              );
            })}
          </nav>

          <ThemeToggle />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden group relative flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-foreground py-2"
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
                Index
                <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-full bg-primary scale-x-0 origin-left group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-300" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-3/4 sm:max-w-xs">
              <span className="font-heading text-lg font-bold text-foreground block mb-8 pb-4 border-b border-border">
                Index
              </span>
              <nav className="flex flex-col gap-6">
                {navCategories.map((item, i) => (
                  <SheetClose asChild key={item.label}>
                    <Link
                      to={item.path}
                      className="flex items-center gap-3 font-body text-base font-medium text-foreground hover:text-primary transition-colors tracking-wide uppercase"
                    >
                      <span className="font-body text-xs font-semibold text-primary/50">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
