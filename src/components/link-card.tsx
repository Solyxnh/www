"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";

interface LinkCardProps {
  title: string;
  url: string;
  icon?: string;
  className?: string;
  delay?: number;
}

export default function LinkCard({
  title,
  url,
  icon,
  className,
  delay = 0,
}: LinkCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center gap-3 p-3 rounded-lg transition-all duration-300",
          "border hover:shadow-md transform hover:-translate-y-1",
          "font-roboto font-bold relative overflow-hidden group",

          // Light mode styles
          "bg-white text-gray-800 border-gray-200 hover:border-a168f9/50 hover:text-a168f9",

          // Dark mode styles
          "dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:border-f6c0f8/50 dark:hover:text-f6c0f8",

          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background hover effect */}
        <div className="absolute inset-0 bg-a168f9/5 dark:bg-f6c0f8/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {icon && (
          <div
            className="w-10 h-10 flex items-center justify-center rounded-md transition-all duration-300
            bg-gray-100 text-a168f9 group-hover:bg-a168f9/10 group-hover:scale-110
            dark:bg-gray-700 dark:text-f6c0f8 dark:group-hover:bg-f6c0f8/10"
          >
            <Icon icon={icon} width={20} height={20} />
          </div>
        )}

        <span className="font-bold flex-1">{title}</span>

        <motion.div
          animate={{ x: isHovered ? 3 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Icon
            icon="mdi:chevron-right"
            width={20}
            height={20}
            className="text-gray-400 dark:text-gray-500 group-hover:text-a168f9 dark:group-hover:text-f6c0f8 transition-colors duration-300"
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}
