"use client";

import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: string;
}

interface SkillsProps {
  skills: Skill[];
  className?: string;
}

export default function Skills({ skills, className }: SkillsProps) {
  return (
    <div className={cn("w-full mt-6 font-roboto", className)}>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-full shadow-sm",
              "transition-all duration-300 hover:scale-105 hover:shadow-md",
              "backdrop-blur-sm",

              // Light mode styles
              "bg-white/60 border-gray-200/60 border",

              // Dark mode styles
              "dark:bg-gray-800/40 dark:border-a168f9/30"
            )}
          >
            <Icon
              icon={skill.icon}
              width={18}
              height={18}
              className="transition-colors duration-300 text-a168f9 dark:text-f6c0f8"
            />
            <span className="text-xs font-medium transition-colors duration-300 text-gray-700 dark:text-gray-300">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
