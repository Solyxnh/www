"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return <div className="w-20 h-10"></div>;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "flex items-center gap-2 p-2 rounded-lg backdrop-blur-sm border shadow-md transition-all duration-300",
        "bg-white/90 border-gray-200 hover:shadow-lg",
        "dark:bg-gray-900/90 dark:border-gray-800 dark:hover:shadow-lg dark:hover:shadow-f6c0f8/5",
        "font-roboto"
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isDark ? "sun" : "sun-active"}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Icon
            icon="ph:sun-duotone"
            className={cn(
              "h-5 w-5 transition-all duration-300",
              isDark ? "text-gray-400" : "text-a168f9"
            )}
          />
        </motion.div>
      </AnimatePresence>

      <Switch
        checked={isDark}
        onCheckedChange={toggleTheme}
        className={cn(
          "data-[state=checked]:bg-f6c0f8 data-[state=unchecked]:bg-a168f9",
          "transition-colors duration-300"
        )}
        aria-label="Toggle dark mode"
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={isDark ? "moon-active" : "moon"}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Icon
            icon="ph:moon-stars-duotone"
            className={cn(
              "h-5 w-5 transition-all duration-300",
              isDark ? "text-f6c0f8" : "text-gray-400"
            )}
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
