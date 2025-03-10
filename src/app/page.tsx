import Profile from "@/components/profile";
import LinkCard from "@/components/link-card";
import ThemeToggle from "@/components/theme-toggle";
import { socialLinks, userProfile } from "@/lib/config";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <main className="min-h-screen w-full transition-colors duration-500 flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="fixed inset-0 -z-10">
          {/* Light mode background */}
          <div className="absolute inset-0 dark:hidden">
            <Suspense
              fallback={
                <div className="absolute inset-0 bg-gradient-to-b from-a168f9/20 to-white" />
              }
            >
              <Image
                src="/assets/background.webp"
                alt="Background"
                fill
                className="object-cover brightness-[0.85]"
                priority
                sizes="100vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-white/60 "></div>
            </Suspense>
          </div>

          {/* Dark mode background */}
          <div className="absolute inset-0 hidden dark:block">
            <Suspense
              fallback={
                <div className="absolute inset-0 bg-gradient-to-b from-f6c0f8/20 to-gray-900" />
              }
            >
              <Image
                src="/assets/background-dark.webp"
                alt="Dark Background"
                fill
                className="object-cover"
                priority
                sizes="100vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-gray-900/70"></div>
            </Suspense>
          </div>
        </div>

        {/* ThemeToggle with increased z-index */}
        <div className="absolute top-4 right-4 z-50">
          <ThemeToggle />
        </div>

        <div
          className="w-full max-w-md mx-auto rounded-xl p-6 sm:p-8 z-10 transition-all duration-500
          bg-white/90 border border-gray-200 shadow-xl backdrop-blur-sm
          dark:bg-gray-900/90 dark:border-gray-800 
          hover:shadow-2xl hover:scale-[1.01] transform"
        >
          <Profile
            name={userProfile.name}
            bio={userProfile.bio}
            avatar={userProfile.avatar}
          />

          <div className="mt-8 space-y-3">
            {socialLinks.map((link, index) => (
              <LinkCard
                key={index}
                title={link.title}
                url={link.url}
                icon={link.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
