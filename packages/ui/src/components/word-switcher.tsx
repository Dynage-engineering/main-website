import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@dynage/ui/lib/utils";

interface WordSwitcherProps {
  words: string[];
  duration?: number;
  className?: string;
}

export function WordSwitcher({
  words,
  duration = 3000,
  className,
}: WordSwitcherProps) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, duration);
    return () => clearInterval(timer);
  }, [words.length, duration]);

  return (
    <span className={cn("relative inline-flex flex-col h-[1.25em] items-center overflow-hidden align-bottom min-w-[3ch]", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>

      {/* Hidden spacer to maintain width based on longest word */}
      <span className="invisible h-0 overflow-hidden" aria-hidden="true">
        {words.reduce((a, b) => (a.length > b.length ? a : b))}
      </span>
    </span>
  );
}
