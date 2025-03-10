import Image from "next/image";
import { cn } from "@/lib/utils";
import Skills from "@/components/skills";
import { skills } from "@/lib/config";

import { Icon } from "@iconify/react";

interface ProfileProps {
  name: string;
  bio: string;
  avatar: string;
  className?: string;
}

export default function Profile({
  name,
  bio,
  avatar,
  className,
}: ProfileProps) {
  return (
    <div className={cn("flex flex-col items-center font-roboto", className)}>
      <div className="relative">
        <div
          className="relative w-28 h-28 overflow-hidden rounded-full transition-all duration-500 hover:scale-105
          border-4 border-a168f9 shadow-lg
          dark:border-f6c0f8 dark:shadow-[0_0_15px_rgba(246,192,248,0.3)]"
        >
          <Image
            src={avatar || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 112px"
          />
        </div>

        <div className="absolute -bottom-2 -right-2">
          <div className="p-1.5 bg-white dark:bg-gray-800 rounded-full shadow-md">
            <div className="w-5 h-5 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2">
        <h1 className="text-2xl font-bold transition-colors duration-300 text-gray-800 dark:text-white">
          {name}
        </h1>
      </div>
      <p className="mt-3 text-center transition-colors duration-300 text-gray-600 dark:text-gray-300 max-w-xs leading-relaxed font-bold">
        Welcome to my little space! ૮ • ﻌ • ྀིა
      </p>
      <p className="mt-3 text-center transition-colors duration-300 text-gray-600 dark:text-gray-300 max-w-xs leading-relaxed">
        {bio}
      </p>

      <Skills skills={skills} />
    </div>
  );
}
