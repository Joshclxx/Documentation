"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-3 right-3 z-50">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-2 hover:bg-gray-200 rounded dark:hover:bg-gray-700 transition-colors hover:rounded-full"
      >
        {theme === "light" ? (
          <Moon className="w-6 h-6 text-[#DAA520]" />
        ) : (
          <Sun className="w-6 h-6 text-[#DAA520]" />
        )}
      </button>
    </div>
  );
}
