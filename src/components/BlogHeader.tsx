import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

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

const BlogHeader = () => {
  const tagline = useMemo(
    () => taglines[Math.floor(Math.random() * taglines.length)],
    []
  );
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border">
      <div className="container flex items-center justify-between py-4 md:py-6">
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

        <nav className="hidden md:flex items-center gap-8">
          {navCategories.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="md:hidden group relative font-body text-xs font-semibold uppercase tracking-[0.2em] text-foreground py-2"
              aria-label="Open menu"
            >
              Index
              <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-full bg-primary scale-x-0 origin-left group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-300" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-3/4 sm:max-w-xs">
            <span className="font-heading text-lg font-bold text-foreground block mb-8 pb-4 border-b border-border">
              Index
            </span>
            <nav className="flex flex-col gap-6">
              {navCategories.map((item) => (
                <SheetClose asChild key={item.label}>
                  <Link
                    to={item.path}
                    className="font-body text-base font-medium text-foreground hover:text-primary transition-colors tracking-wide uppercase"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default BlogHeader;
