import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";

const excuses = [
  "It went looking for itself and got lost in the process.",
  "Last seen taking a wrong turn somewhere past the homepage.",
  "It's probably still trekking. Send snacks.",
  "404 isn't a place. It's a state of mind.",
];

const NotFound = () => {
  const location = useLocation();
  const [excuse, setExcuse] = useState<string | null>(null);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const revealExcuse = () => {
    setExcuse(excuses[Math.floor(Math.random() * excuses.length)]);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <BlogHeader />
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container py-20 text-center max-w-lg"
        >
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 block">
            Page Not Found
          </span>
          <motion.h1
            className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-4 cursor-default select-none"
            whileHover={{ x: [0, -4, 4, -2, 0], rotate: [0, -2, 2, -1, 0] }}
            transition={{ duration: 0.5 }}
            title="404 has wandered off"
          >
            404
          </motion.h1>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-2">
            Looks like this page wandered off somewhere and never wrote back.
          </p>
          <p className="font-body text-sm text-muted-foreground/70 mb-6">
            <code className="bg-secondary/50 px-1.5 py-0.5 rounded">{location.pathname}</code>{" "}
            doesn't exist — yet, anyway.
          </p>

          <AnimatePresence mode="wait">
            {excuse ? (
              <motion.p
                key={excuse}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="font-body text-sm italic text-primary mb-8"
              >
                {excuse}
              </motion.p>
            ) : (
              <button
                onClick={revealExcuse}
                className="font-body text-sm text-muted-foreground underline hover:text-foreground transition-colors mb-8 block mx-auto"
              >
                Where did it actually go?
              </button>
            )}
          </AnimatePresence>

          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to stories that actually exist
          </Link>
        </motion.div>
      </div>
      <BlogFooter />
    </div>
  );
};

export default NotFound;
