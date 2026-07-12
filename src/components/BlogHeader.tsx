import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { allPosts } from "@/data/posts";
import { navCategories } from "@/data/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const taglines = [
  "probably overthinking this",
  "best read with chai, slightly too hot",
  "written between trains and bad WiFi",
  "still figuring most of it out",
  "for people who read the footnotes",
];

const todayLabel = new Date()
  .toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })
  .toUpperCase();

const BlogHeader = () => {
  const tagline = useMemo(
    () => taglines[Math.floor(Math.random() * taglines.length)],
    []
  );
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="hidden border-b border-border/70 sm:block">
        <div className="container flex items-center justify-between py-1.5 font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          <span>Vol. I · Nº {String(allPosts.length).padStart(2, "0")}</span>
          <span>{todayLabel}</span>
        </div>
      </div>

      <div className="relative border-b-4 border-double border-foreground/70">
        <div className="container relative flex flex-col items-center px-4 pr-32 py-6 text-center sm:pr-36 md:px-0 md:py-8">
          <motion.div whileHover={{ opacity: 0.7 }}>
            <Link
              to="/"
              className="font-heading text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              The Quiet Journal
            </Link>
          </motion.div>
          <span className="mt-1.5 font-body text-xs italic text-muted-foreground">
            {tagline}
          </span>

          <div className="absolute right-4 top-3 flex items-start gap-4 sm:right-6 md:right-2 xl:right-4">
            <ThemeToggle />

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  className="md:hidden group relative flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-foreground py-1"
                  aria-label="Open menu"
                >
                  <Menu className="h-4 w-4" />
                  Index
                  <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-full bg-primary scale-x-0 origin-left group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-300" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-64 border-l-2 border-double border-foreground/70 p-0 sm:max-w-[280px]"
              >
                <div className="flex h-full flex-col">
                  <div className="border-b-4 border-double border-foreground/70 px-6 py-6 text-center">
                    <SheetTitle className="font-heading text-xl font-black tracking-tight text-foreground block">
                      The Quiet Journal
                    </SheetTitle>
                    <span className="mt-1 block font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                      Index
                    </span>
                  </div>

                  <nav className="flex-1 overflow-y-auto px-6">
                    {navCategories.map((item, i) => (
                      <SheetClose asChild key={item.label}>
                        <Link
                          to={item.path}
                          className="group flex items-center justify-between gap-2 border-b border-border py-4 font-body text-base font-medium uppercase tracking-wide text-foreground transition-colors first:pt-5 hover:text-primary"
                        >
                          <span className="flex items-center gap-3">
                            <span className="font-heading text-2xl font-bold text-foreground/15 transition-colors group-hover:text-primary/30">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            {item.label}
                          </span>
                          <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>

                  <div className="border-t border-border/70 px-6 py-3 text-center font-body text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Vol. I · Nº {String(allPosts.length).padStart(2, "0")}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <nav className="hidden border-b border-border bg-secondary/20 md:block">
        <div className="container flex items-center justify-center gap-1 py-2">
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
                  className={`group relative flex items-center gap-1.5 px-2.5 py-1 font-body text-sm font-medium tracking-wide uppercase transition-colors ${
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
        </div>
      </nav>
    </header>
  );
};

export default BlogHeader;
