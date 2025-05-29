import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollIndicator from "@/components/ScrollIndicator";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "POS System Documentation",
  description:
    "Luxurious, high-end styled documentation page built with Next.js 15",
  icons: {
    icon: "icon/heebrew-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class">
          <ScrollIndicator />
          <main className="min-h-screen bg-background text-[#1A1A1A] font-sans">
            <div className="w-full max-w-[1480px] mx-auto px-2 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
