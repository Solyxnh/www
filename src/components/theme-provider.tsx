"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  // This function sets a CSS variable based on the theme for smoother transitions
  const syncColorSchemeWithOS = () => {
    try {
      const prefersDarkQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      const updateColorScheme = (e: MediaQueryListEvent | MediaQueryList) => {
        document.documentElement.style.setProperty(
          "--preferred-color-scheme",
          e.matches ? "dark" : "light"
        );
      };

      // Set initial value
      updateColorScheme(prefersDarkQuery);

      // Listen for changes
      prefersDarkQuery.addEventListener("change", updateColorScheme);

      return () =>
        prefersDarkQuery.removeEventListener("change", updateColorScheme);
    } catch (e) {
      console.error("Error setting up color scheme listener:", e);
    }
  };

  useEffect(() => {
    return syncColorSchemeWithOS();
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
