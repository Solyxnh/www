import type React from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { userProfile } from "@/lib/config";

import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "☁️ Solyn's Headspace",
  description: userProfile.bio,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://solyxnh.com",
    title: "☁️ Solyn's Headspace",
    description: userProfile.bio,
    siteName: "☁️ Solyn's Headspace",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: userProfile.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "☁️ Solyn's Headspace",
    description: userProfile.bio,
    creator: "@solyxnh",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} ${roboto.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <main className="relative min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
